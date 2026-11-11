#!/usr/bin/env python3
"""Render the shared card HTML into reusable PNG assets.

The browser remains the source of truth for layout. This script only creates a
small one-card HTML wrapper and asks Chrome to render it headlessly, so the
same CSS and card-data.js used by the templates are used for the exported PNGs.

Pass a code directly to force one card, for example:
    python3 scripts/export_card_images.py E11
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
CARD_DATA_PATH = PROJECT_ROOT / "templates/cards/card-data.js"
CARD_TEMPLATE_DIR = PROJECT_ROOT / "templates/cards"
DEFAULT_OUTPUT_DIR = PROJECT_ROOT / "exported-images/cards"
EXPORT_MANIFEST_NAME = ".export-manifest.json"

CARD_SIZES = {
    "main": (238, 333),
    "small": (167, 239),
    "character": (477, 333),
}

CARD_TYPES = {
    "CALL": "main",
    "USER": "main",
    "GENERIC_EVENT": "main",
    "MISSION_EVENT": "main",
    "INITIATIVE": "main",
    "PLAYER_INITIATIVE": "main",
    "ROUTINE": "main",
    "REFERENCE": "main",
    "ACTIONS": "main",
    "MORALE": "main",
    "CONSUMABLE_ITEM": "small",
    "EQUIPMENT_ITEM": "small",
    "PLAYER_CHARACTER": "character",
}

RESOLUTION_SETTINGS = {
    "low": {"dpi": 96, "scale": 1},
    "high": {"dpi": 300, "scale": 300 / 96},
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "card_code",
        nargs="?",
        metavar="CÓDIGO",
        help="Render only one card, for example: E11."
    )
    parser.add_argument(
        "--mode",
        choices=("full", "no-art", "draft"),
        default="full",
        help="Export appearance mode, matching call-model.html.",
    )
    parser.add_argument(
        "--resolution",
        choices=("low", "high", "both"),
        default="both",
        help="Output resolution: low (96 DPI), high (300 DPI), or both.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Directory where the rendered PNGs will be written.",
    )
    parser.add_argument(
        "--code",
        action="append",
        dest="codes",
        help="Render only this card code. Repeat the option for multiple cards.",
    )
    parser.add_argument(
        "--regenerate",
        choices=("all", "missing"),
        help="Regenerate all images or only missing/outdated images. Without this option, ask interactively.",
    )
    parser.add_argument(
        "--chrome",
        type=Path,
        help="Path to the Chrome executable. Defaults to CHROME_BIN or a detected installation.",
    )
    return parser.parse_args()


def choose_regeneration_mode(
    requested_mode: str | None,
    has_requested_codes: bool
) -> str:
    if requested_mode:
        return requested_mode

    if has_requested_codes:
        return "all"

    if not sys.stdin.isatty():
        print("Entrada interativa indisponível; regenerando todas as imagens.")
        return "all"

    print("Como deseja exportar as imagens?")
    print("  1. Regenerar todas")
    print("  2. Gerar apenas as que estão faltando ou desatualizadas")
    print("  3. Regenerar uma carta específica")

    while True:
        answer = input("Escolha [1/2/3]: ").strip().lower()
        if answer in {"1", "a", "t", "todas"}:
            return "all"
        if answer in {"2", "f", "faltantes", "faltando"}:
            return "missing"
        if answer in {"3", "c", "carta", "código", "codigo"}:
            return "single"
        print("Opção inválida. Digite 1, 2 ou 3.")


def prompt_card_code() -> str:
    while True:
        code = input("Código da carta (ex.: E11): ").strip().upper()
        if code:
            return code
        print("Informe um código de carta.")


def read_card_sources() -> dict[str, str]:
    source = CARD_DATA_PATH.read_text(encoding="utf-8")
    entry_pattern = re.compile(
        r"^\s{8}([A-Z][A-Z0-9]*): \{(?P<body>.*?)(?=^\s{8}[A-Z][A-Z0-9]*: \{|\Z)",
        re.MULTILINE | re.DOTALL,
    )
    return {match.group(1): match.group(0) for match in entry_pattern.finditer(source)}


def source_fingerprint(card_source: str) -> str:
    digest = hashlib.sha256()
    card_data_source = CARD_DATA_PATH.read_text(encoding="utf-8")
    shared_card_data = card_data_source.split("const cards = {", 1)[0]
    source_paths = [
        CARD_TEMPLATE_DIR / "card-renderer.js",
        CARD_TEMPLATE_DIR / "card-model.css",
    ]

    for path in source_paths:
        digest.update(str(path.relative_to(PROJECT_ROOT)).encode("utf-8"))
        digest.update(path.read_bytes())

    digest.update(shared_card_data.encode("utf-8"))
    digest.update(card_source.encode("utf-8"))

    asset_references = set(re.findall(r"['\"]([^'\"]+\.(?:png|jpg|jpeg|webp))['\"]", card_source))
    for reference in sorted(asset_references):
        asset_path = (CARD_TEMPLATE_DIR / reference).resolve()
        if not asset_path.is_file():
            continue
        digest.update(str(asset_path.relative_to(PROJECT_ROOT)).encode("utf-8"))
        digest.update(asset_path.read_bytes())

    return digest.hexdigest()


def load_export_manifest(path: Path) -> dict:
    if not path.is_file():
        return {"version": 1, "images": {}}

    try:
        manifest = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {"version": 1, "images": {}}

    if not isinstance(manifest, dict) or not isinstance(manifest.get("images"), dict):
        return {"version": 1, "images": {}}

    return manifest


def save_export_manifest(path: Path, manifest: dict) -> None:
    path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def find_chrome(explicit_path: Path | None) -> Path:
    candidates = [
        explicit_path,
        Path(os.environ["CHROME_BIN"]) if os.environ.get("CHROME_BIN") else None,
        Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
        Path("/Applications/Chromium.app/Contents/MacOS/Chromium"),
        Path(os.environ.get("PROGRAMFILES", "")) / "Google/Chrome/Application/chrome.exe",
        Path(os.environ.get("PROGRAMFILES(X86)", "")) / "Google/Chrome/Application/chrome.exe",
        Path(os.environ.get("LOCALAPPDATA", "")) / "Google/Chrome/Application/chrome.exe",
        Path(shutil.which("google-chrome") or ""),
        Path(shutil.which("chromium") or ""),
        Path(shutil.which("chrome") or ""),
    ]

    for candidate in candidates:
        if candidate and candidate.is_file():
            return candidate

    raise RuntimeError("Chrome/Chromium não foi encontrado. Use --chrome ou CHROME_BIN.")


def read_card_types() -> dict[str, str]:
    source = CARD_DATA_PATH.read_text(encoding="utf-8")
    entry_pattern = re.compile(
        r"^\s{8}([A-Z][A-Z0-9]*): \{(?P<body>.*?)(?=^\s{8}[A-Z][A-Z0-9]*: \{|\Z)",
        re.MULTILINE | re.DOTALL,
    )
    type_pattern = re.compile(r"type:\s+CARD_TYPES\.([A-Z_]+)")
    card_types = {}

    for match in entry_pattern.finditer(source):
        card_type_match = type_pattern.search(match.group("body"))
        if card_type_match and card_type_match.group(1) in CARD_TYPES:
            card_types[match.group(1)] = CARD_TYPES[card_type_match.group(1)]

    return card_types


def javascript_path(path: Path) -> str:
    return path.resolve().as_uri()


def build_wrapper(code: str, size: tuple[int, int], mode: str, path: Path) -> None:
    width, height = size
    mode_classes = {
        "full": "",
        "no-art": "export-no-art",
        "draft": "export-draft",
    }
    body_class = mode_classes[mode]
    data_path = javascript_path(CARD_TEMPLATE_DIR / "card-data.js")
    renderer_path = javascript_path(CARD_TEMPLATE_DIR / "card-renderer.js")
    css_path = javascript_path(CARD_TEMPLATE_DIR / "card-model.css")
    base_path = javascript_path(CARD_TEMPLATE_DIR) + "/"

    html = f"""<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <base href="{base_path}">
    <link rel="stylesheet" href="{css_path}">
    <style>
      html, body {{
        width: {width}px !important;
        height: {height}px !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        background: transparent !important;
      }}
      body {{ display: block !important; }}
      #output {{ width: {width}px; height: {height}px; }}
      #output > .card,
      #output > .character-card {{
        width: {width}px !important;
        height: {height}px !important;
        margin: 0 !important;
      }}
    </style>
  </head>
  <body class="{body_class}">
    <main id="output"></main>
    <script src="{data_path}"></script>
    <script src="{renderer_path}"></script>
    <script>
      const data = window.ITCrowdCardData;
      const renderer = window.ITCrowdCardRenderer;
      const code = {code!r};
      const card = data.cards[code];
      const output = document.querySelector('#output');
      const element = card.type === data.CARD_TYPES.PLAYER_CHARACTER
        ? renderer.createPlayerCharacterCard(code, card)
        : renderer.createCard(code, card);
      output.append(element);
      document.fonts.ready.then(() => {{ document.documentElement.dataset.ready = 'true'; }});
    </script>
  </body>
</html>
"""
    path.write_text(html, encoding="utf-8")


def render_card(
    chrome: Path,
    wrapper: Path,
    output: Path,
    size: tuple[int, int],
    scale: float,
) -> None:
    width, height = size
    command = [
        str(chrome),
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--allow-file-access-from-files",
        "--default-background-color=00000000",
        f"--force-device-scale-factor={scale}",
        f"--window-size={width},{height}",
        "--virtual-time-budget=1500",
        f"--screenshot={output}",
        wrapper.resolve().as_uri(),
    ]
    result = subprocess.run(command, capture_output=True, text=True, check=False)
    if result.returncode != 0 or not output.is_file() or output.stat().st_size == 0:
        details = result.stderr.strip() or result.stdout.strip() or "saída vazia"
        raise RuntimeError(f"Falha ao renderizar {output.name}: {details}")


def main() -> int:
    args = parse_args()
    requested_codes = list(args.codes or [])
    if args.card_code:
        requested_codes.append(args.card_code)

    regeneration_mode = choose_regeneration_mode(args.regenerate, bool(requested_codes))
    if regeneration_mode == "single":
        requested_codes.append(prompt_card_code())
        regeneration_mode = "all"

    card_types = read_card_types()
    card_sources = read_card_sources()
    codes = list(
        dict.fromkeys(
            code.strip().upper()
            for code in requested_codes
            if code.strip()
        )
    ) or sorted(card_types)
    unknown_codes = sorted(set(codes) - set(card_types))

    if unknown_codes:
        raise RuntimeError(f"Código(s) desconhecido(s): {', '.join(unknown_codes)}")

    chrome = find_chrome(args.chrome)
    resolutions = tuple(RESOLUTION_SETTINGS) if args.resolution == "both" else (args.resolution,)
    manifest_path = args.output_dir / EXPORT_MANIFEST_NAME
    manifest = load_export_manifest(manifest_path)
    manifest["version"] = 1
    manifest.setdefault("images", {})

    rendered_count = 0
    skipped_count = 0

    with tempfile.TemporaryDirectory(prefix="it-crowd-card-render-") as temp_dir:
        wrapper = Path(temp_dir) / "card.html"

        for resolution in resolutions:
            output_dir = args.output_dir / args.mode / resolution
            output_dir.mkdir(parents=True, exist_ok=True)
            scale = RESOLUTION_SETTINGS[resolution]["scale"]

            for code in codes:
                size = tuple(CARD_SIZES[card_types[code]])
                output = output_dir / f"{code.lower()}.png"
                manifest_key = f"{args.mode}/{resolution}/{code.lower()}.png"
                source_hash = source_fingerprint(card_sources[code])
                image_is_current = (
                    output.is_file()
                    and output.stat().st_size > 0
                    and manifest["images"].get(manifest_key) == source_hash
                )
                if regeneration_mode == "missing" and image_is_current:
                    skipped_count += 1
                    print(f"{code} ({resolution}) -> já está atualizada, ignorada: {output}")
                    continue
                build_wrapper(code, size, args.mode, wrapper)
                render_card(chrome, wrapper, output, size, scale)
                manifest["images"][manifest_key] = source_hash
                rendered_count += 1
                print(f"{code} ({resolution}) -> {output}")

    save_export_manifest(manifest_path, manifest)
    print(
        f"Exportadas {rendered_count} imagem(ns) em {len(resolutions)} resolução(ões). "
        f"Ignoradas por já estarem atualizadas: {skipped_count}."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
