#!/usr/bin/env python3
"""Render the shared card HTML into reusable PNG assets.

The browser remains the source of truth for layout. This script only creates a
small one-card HTML wrapper and asks Chrome to render it headlessly, so the
same CSS and card-data.js used by the templates are used for the exported PNGs.
"""

from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import tempfile
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
CARD_DATA_PATH = PROJECT_ROOT / "templates/cards/card-data.js"
CARD_TEMPLATE_DIR = PROJECT_ROOT / "templates/cards"
DEFAULT_OUTPUT_DIR = PROJECT_ROOT / "exported-images/cards"

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
        "--chrome",
        type=Path,
        help="Path to the Chrome executable. Defaults to CHROME_BIN or a detected installation.",
    )
    return parser.parse_args()


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
    chrome = find_chrome(args.chrome)
    card_types = read_card_types()
    codes = args.codes or sorted(card_types)
    unknown_codes = sorted(set(codes) - set(card_types))

    if unknown_codes:
        raise RuntimeError(f"Código(s) desconhecido(s): {', '.join(unknown_codes)}")

    resolutions = tuple(RESOLUTION_SETTINGS) if args.resolution == "both" else (args.resolution,)

    with tempfile.TemporaryDirectory(prefix="it-crowd-card-render-") as temp_dir:
        wrapper = Path(temp_dir) / "card.html"

        for resolution in resolutions:
            output_dir = args.output_dir / args.mode / resolution
            output_dir.mkdir(parents=True, exist_ok=True)
            scale = RESOLUTION_SETTINGS[resolution]["scale"]

            for code in codes:
                size = tuple(CARD_SIZES[card_types[code]])
                output = output_dir / f"{code.lower()}.png"
                build_wrapper(code, size, args.mode, wrapper)
                render_card(chrome, wrapper, output, size, scale)
                print(f"{code} ({resolution}) -> {output}")

    print(f"Exportadas {len(codes)} cartas em {len(resolutions)} resolução(ões).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
