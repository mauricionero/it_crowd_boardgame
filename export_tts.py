#!/usr/bin/env python3
"""Export the project as Tabletop Simulator card sheets.

The browser remains the source of truth for card rendering. This exporter uses
the shared card renderer to create edge-to-edge card sheets at a TTS-friendly
resolution, then writes a manifest consumed by ``export_tts_json.py``.

Steam Cloud upload is intentionally left to Tabletop Simulator's Cloud
Manager. Fill ``tts-export/cloud-urls.json`` with the URLs copied from TTS and
run ``export_tts_json.py`` to produce the save with the cloud references.
"""

from __future__ import annotations

import argparse
import json
import math
import re
import shutil
import subprocess
import tempfile
from datetime import datetime, timezone
from pathlib import Path

from scripts.export_card_images import (
    CARD_DATA_PATH,
    CARD_SIZES,
    CARD_TEMPLATE_DIR,
    CARD_TYPES,
    find_chrome,
    javascript_path,
)


PROJECT_ROOT = Path(__file__).resolve().parent
DEFAULT_OUTPUT_DIR = PROJECT_ROOT / "tts-export"
BOARD_SOURCE = PROJECT_ROOT / "assets/boards/base/board-complete-18x12-v12.png"

DEFAULT_COLUMNS = 10
DEFAULT_DPI = 150
CSS_DPI = 96

DECK_DEFINITIONS = (
    ("calls", "Chamados", {"CALL"}, DEFAULT_COLUMNS, False),
    ("users", "Usuários", {"USER"}, DEFAULT_COLUMNS, False),
    ("events-generic", "Eventos genéricos", {"GENERIC_EVENT"}, DEFAULT_COLUMNS, False),
    ("missions", "Missões", {"MISSION_EVENT"}, DEFAULT_COLUMNS, False),
    ("items-kitchen", "Itens de cozinha", {"CONSUMABLE_ITEM"}, DEFAULT_COLUMNS, False),
    ("items-cabinet", "Itens de armário", {"EQUIPMENT_ITEM"}, DEFAULT_COLUMNS, False),
    ("initiative", "Iniciativa", {"ROUTINE", "INITIATIVE", "PLAYER_INITIATIVE"}, DEFAULT_COLUMNS, False),
    ("reference", "Referências", {"REFERENCE", "ACTIONS", "MORALE"}, DEFAULT_COLUMNS, False),
    ("characters", "Personagens jogáveis", {"PLAYER_CHARACTER"}, 5, True),
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Pasta de saída. O padrão é ./tts-export.",
    )
    parser.add_argument(
        "--dpi",
        type=int,
        default=DEFAULT_DPI,
        help="Resolução das folhas geradas. O padrão é 150 DPI.",
    )
    parser.add_argument(
        "--columns",
        type=int,
        default=DEFAULT_COLUMNS,
        help="Quantidade padrão de cartas por linha nas folhas.",
    )
    parser.add_argument(
        "--chrome",
        type=Path,
        help="Caminho do Chrome/Chromium. Também aceita CHROME_BIN.",
    )
    return parser.parse_args()


def read_card_entries() -> list[tuple[str, str, int]]:
    source = CARD_DATA_PATH.read_text(encoding="utf-8")
    entry_pattern = re.compile(
        r"^\s{8}([A-Z][A-Z0-9]*): \{(?P<body>.*?)(?=^\s{8}[A-Z][A-Z0-9]*: \{|\Z)",
        re.MULTILINE | re.DOTALL,
    )
    type_pattern = re.compile(r"type:\s+CARD_TYPES\.([A-Z_]+)")
    copies_pattern = re.compile(r"copies:\s*(\d+)")
    entries = []

    for match in entry_pattern.finditer(source):
        type_match = type_pattern.search(match.group("body"))
        if type_match and type_match.group(1) in CARD_TYPES:
            copies_match = copies_pattern.search(match.group("body"))
            copies = int(copies_match.group(1)) if copies_match else 1
            entries.append((match.group(1), type_match.group(1), copies))

    return entries


def write_json(path: Path, value: object) -> None:
    path.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def build_sheet_wrapper(
    codes: list[str],
    card_types: dict[str, str],
    columns: int,
    rows: int,
    size_name: str,
    dpi: int,
    path: Path,
    back: bool = False,
) -> None:
    width, height = CARD_SIZES[size_name]
    sheet_width = width * columns
    sheet_height = height * rows
    scale = dpi / CSS_DPI
    data_path = javascript_path(CARD_TEMPLATE_DIR / "card-data.js")
    renderer_path = javascript_path(CARD_TEMPLATE_DIR / "card-renderer.js")
    css_path = javascript_path(CARD_TEMPLATE_DIR / "card-model.css")
    base_path = javascript_path(CARD_TEMPLATE_DIR) + "/"
    codes_json = json.dumps(codes, ensure_ascii=False)
    card_types_json = json.dumps(card_types, ensure_ascii=False)
    back_code = json.dumps(codes[0] if codes else "")

    if back:
        render_script = f"""
      const code = {back_code};
      const card = data.cards[code];
      if (card) output.append(renderer.createCardBack(code, card));
"""
    else:
        render_script = f"""
      const codes = {codes_json};
      const cardTypes = {card_types_json};
      codes.forEach((code) => {{
        const card = data.cards[code];
        if (!card) return;
        const element = card.type === data.CARD_TYPES.PLAYER_CHARACTER
          ? renderer.createPlayerCharacterCard(code, card)
          : renderer.createCard(code, card);
        element.classList.add('tts-sheet-card');
        output.append(element);
      }});
"""

    html = f"""<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <base href="{base_path}">
    <link rel="stylesheet" href="{css_path}">
    <style>
      html, body {{
        width: {sheet_width}px !important;
        height: {sheet_height}px !important;
        min-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        background: transparent !important;
      }}

      body {{ display: block !important; }}

      #sheet {{
        display: grid;
        width: {sheet_width}px;
        height: {sheet_height}px;
        grid-template-columns: repeat({columns}, {width}px);
        grid-auto-rows: {height}px;
        gap: 0;
        overflow: hidden;
      }}

      #sheet > article {{
        width: {width}px !important;
        height: {height}px !important;
        margin: 0 !important;
      }}

      #sheet > .card--background {{
        border-radius: 0 !important;
        box-shadow: none !important;
      }}

      #sheet > .character-card {{
        border-radius: 0 !important;
        box-shadow: none !important;
      }}
    </style>
  </head>
  <body>
    <main id="sheet"></main>
    <script>
      window.ITCrowdUseExportedImages = false;
    </script>
    <script src="{data_path}"></script>
    <script src="{renderer_path}"></script>
    <script>
      const data = window.ITCrowdCardData;
      const renderer = window.ITCrowdCardRenderer;
      const output = document.querySelector('#sheet');
      {render_script}

      const waitForImages = async () => {{
        const images = Array.from(document.images);
        await Promise.all(images.map((image) => image.complete
          ? Promise.resolve()
          : new Promise((resolve) => {{
              image.addEventListener('load', resolve, {{ once: true }});
              image.addEventListener('error', resolve, {{ once: true }});
          }})));
        await new Promise((resolve) => setTimeout(resolve, 250));
        document.documentElement.dataset.ready = 'true';
      }};
      waitForImages();
    </script>
  </body>
</html>
"""
    path.write_text(html, encoding="utf-8")


def render_page(
    chrome: Path,
    wrapper: Path,
    output: Path,
    width: int,
    height: int,
    dpi: int,
) -> None:
    scale = dpi / CSS_DPI
    command = [
        str(chrome),
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--allow-file-access-from-files",
        f"--force-device-scale-factor={scale}",
        f"--window-size={width},{height}",
        "--virtual-time-budget=2500",
        f"--screenshot={output}",
        wrapper.resolve().as_uri(),
    ]
    result = subprocess.run(command, capture_output=True, text=True, check=False)
    if result.returncode != 0 or not output.is_file() or output.stat().st_size == 0:
        details = result.stderr.strip() or result.stdout.strip() or "saída vazia"
        raise RuntimeError(f"Falha ao renderizar {output.name}: {details}")


def read_cloud_urls(path: Path) -> dict[str, str]:
    if not path.is_file():
        return {}
    value = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(value, dict):
        raise ValueError(f"O mapa de URLs precisa ser um objeto JSON: {path}")
    return {str(key): str(url) for key, url in value.items() if url}


def asset_url(relative_path: str, cloud_urls: dict[str, str]) -> str:
    return cloud_urls.get(relative_path) or cloud_urls.get(Path(relative_path).name) or ""


def transform(pos_x: float, pos_z: float, pos_y: float = 1.0) -> dict[str, float]:
    return {
        "posX": pos_x,
        "posY": pos_y,
        "posZ": pos_z,
        "rotX": 0.0,
        "rotY": 180.0,
        "rotZ": 0.0,
        "scaleX": 1.0,
        "scaleY": 1.0,
        "scaleZ": 1.0,
    }


def build_deck_object(deck: dict, deck_index: int, cloud_urls: dict[str, str]) -> dict:
    face_url = asset_url(deck["face"], cloud_urls)
    back_url = asset_url(deck["back"], cloud_urls)
    card_ids = [deck_index * 100 + index + 1 for index in range(deck["number"])]
    custom_deck = {
        str(deck_index): {
            "FaceURL": face_url,
            "BackURL": back_url,
            "NumWidth": deck["columns"],
            "NumHeight": deck["rows"],
            "BackIsHidden": True,
            "UniqueBack": False,
        }
    }
    object_state = {
        "Name": "DeckCustom",
        "Transform": transform(deck["position"][0], deck["position"][1]),
        "Nickname": deck["label"],
        "Description": f"Gerado por export_tts.py · {deck['number']} cartas",
        "ColorDiffuse": {"r": 1.0, "g": 1.0, "b": 1.0},
        "Locked": False,
        "Grid": True,
        "Snap": True,
        "Autoraise": True,
        "Sticky": True,
        "Tooltip": True,
        "DeckIDs": card_ids,
        "CustomDeck": custom_deck,
        "GUID": f"{deck_index:06x}",
    }
    if deck["sideways"]:
        object_state["SidewaysCard"] = True
    return object_state


def build_save(decks: list[dict], board_asset: str, cloud_urls: dict[str, str]) -> dict:
    objects = [
        {
            "Name": "Custom_Board",
            "Transform": transform(0.0, 0.0, 0.5),
            "Nickname": "Tabuleiro principal",
            "Description": "Tabuleiro 18×12 gerado pelo projeto.",
            "ColorDiffuse": {"r": 1.0, "g": 1.0, "b": 1.0},
            "Locked": True,
            "Grid": True,
            "Snap": False,
            "Tooltip": True,
            "CustomImage": {
                "ImageURL": asset_url(board_asset, cloud_urls),
                "ImageSecondaryURL": "",
                "WidthScale": 1.0,
            },
            "GUID": "b00001",
        }
    ]
    objects.extend(
        build_deck_object(deck, index, cloud_urls)
        for index, deck in enumerate(decks, start=1)
    )
    return {
        "SaveName": "The IT Crowd Boardgame",
        "GameMode": "The IT Crowd Boardgame",
        "Date": datetime.now(timezone.utc).isoformat(),
        "Table": "Table_Custom",
        "Sky": "Sky_Default",
        "Note": "Gerado por export_tts.py. Preencha cloud-urls.json e execute novamente antes de carregar no TTS.",
        "Rules": "",
        "PlayerTurn": "",
        "Grid": {
            "Type": 0,
            "Lines": False,
            "Snapping": True,
            "Offset": False,
            "xSize": 1.0,
            "ySize": 1.0,
        },
        "ObjectStates": objects,
    }


def write_readme(path: Path, dpi: int) -> None:
    path.write_text(
        f"""# Exportação para Tabletop Simulator

Este pacote foi gerado com `export_tts.py` em {dpi} DPI.

## Fluxo

1. Execute `python3 export_tts.py` para gerar ou atualizar as imagens.
2. Abra o TTS e acesse `Upload > Cloud Manager`.
3. Envie os PNGs dentro de `images/decks/` e `images/board/`.
4. Copie as URLs da Steam Cloud para `cloud-urls.json`.
5. Execute `python3 export_tts_json.py` para gerar o save.
6. Carregue `it-crowd-boardgame.json` no TTS.

O JSON já contém os decks, a quantidade de cartas e a configuração da grade.
As posições iniciais são aproximações para o primeiro teste e podem ser
ajustadas dentro do TTS antes de salvar a mesa final.

As folhas não possuem espaçamento entre cartas. O TTS corta cada célula usando
`NumWidth` e `NumHeight`; a ordem das cartas segue a ordem de `card-data.js`.
""",
        encoding="utf-8",
    )


def main() -> int:
    args = parse_args()
    if args.dpi <= 0:
        raise ValueError("--dpi precisa ser maior que zero")
    if args.columns <= 0:
        raise ValueError("--columns precisa ser maior que zero")

    chrome = find_chrome(args.chrome)
    output_dir = args.output.resolve()
    deck_dir = output_dir / "images" / "decks"
    board_dir = output_dir / "images" / "board"
    deck_dir.mkdir(parents=True, exist_ok=True)
    board_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(BOARD_SOURCE, board_dir / BOARD_SOURCE.name)

    entries = read_card_entries()
    by_type = {code: card_type for code, card_type, _ in entries}
    cloud_urls_path = output_dir / "cloud-urls.json"
    cloud_urls = read_cloud_urls(cloud_urls_path)
    assets = {}
    decks = []

    with tempfile.TemporaryDirectory(prefix="it-crowd-tts-export-") as temp_dir:
        wrapper = Path(temp_dir) / "sheet.html"
        for deck_index, (name, label, types, default_columns, sideways) in enumerate(DECK_DEFINITIONS, start=1):
            codes = [
                code
                for code, card_type, copies in entries
                if card_type in types
                for _ in range(copies)
            ]
            if not codes:
                continue

            size_name = "character" if sideways else ("small" if any(by_type[code] in {"CONSUMABLE_ITEM", "EQUIPMENT_ITEM"} for code in codes) else "main")
            columns = args.columns if not sideways else default_columns
            rows = max(1, math.ceil(len(codes) / columns))
            width, height = CARD_SIZES[size_name]
            face_name = f"{name}-face.png"
            back_name = f"{name}-back.png"
            face_path = deck_dir / face_name
            back_path = deck_dir / back_name

            build_sheet_wrapper(codes, by_type, columns, rows, size_name, args.dpi, wrapper)
            render_page(chrome, wrapper, face_path, width * columns, height * rows, args.dpi)

            build_sheet_wrapper(codes[:1], by_type, 1, 1, size_name, args.dpi, wrapper, back=True)
            render_page(chrome, wrapper, back_path, width, height, args.dpi)

            face_asset = f"images/decks/{face_name}"
            back_asset = f"images/decks/{back_name}"
            assets[face_asset] = {"path": str(face_path.relative_to(output_dir)), "kind": "deck-face"}
            assets[back_asset] = {"path": str(back_path.relative_to(output_dir)), "kind": "deck-back"}
            decks.append({
                "name": name,
                "label": label,
                "codes": codes,
                "number": len(codes),
                "columns": columns,
                "rows": rows,
                "sideways": sideways,
                "size": size_name,
                "face": face_asset,
                "back": back_asset,
                "position": (-7.0 + ((deck_index - 1) % 5) * 3.5, -7.0 - ((deck_index - 1) // 5) * 3.5),
            })
            print(f"{label}: {len(codes)} cartas -> {face_path}")

    board_asset = f"images/board/{BOARD_SOURCE.name}"
    assets[board_asset] = {"path": str((board_dir / BOARD_SOURCE.name).relative_to(output_dir)), "kind": "board"}

    cloud_urls = {key: cloud_urls.get(key, "") for key in assets}
    write_json(cloud_urls_path, cloud_urls)
    write_json(output_dir / "manifest.json", {
        "dpi": args.dpi,
        "cardSheetColumns": args.columns,
        "assets": assets,
        "decks": decks,
        "board": board_asset,
    })
    write_readme(output_dir / "README.md", args.dpi)
    print(f"Exportação TTS concluída em {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
