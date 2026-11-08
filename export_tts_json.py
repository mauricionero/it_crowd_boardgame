#!/usr/bin/env python3
"""Generate the Tabletop Simulator save from an existing TTS export.

This step does not render images. It reads ``manifest.json`` and
``cloud-urls.json`` from ``tts-export/`` and writes the save JSON with the
current deck positions and Steam Cloud references.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from export_tts import DEFAULT_OUTPUT_DIR, build_save, read_cloud_urls, write_json


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Pasta do export TTS. O padrão é ./tts-export.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    output_dir = args.output.resolve()
    manifest_path = output_dir / "manifest.json"
    cloud_urls_path = output_dir / "cloud-urls.json"

    if not manifest_path.is_file():
        raise FileNotFoundError(
            f"Manifesto não encontrado: {manifest_path}. Execute primeiro export_tts.py."
        )

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    cloud_urls = read_cloud_urls(cloud_urls_path)
    save = build_save(manifest["decks"], manifest["board"], cloud_urls)
    save["Note"] = (
        "Gerado por export_tts_json.py a partir de manifest.json. "
        "As imagens precisam estar disponíveis na Steam Cloud."
    )
    save_path = output_dir / "it-crowd-boardgame.json"
    write_json(save_path, save)

    missing = [
        asset
        for asset in manifest["assets"]
        if not cloud_urls.get(asset)
    ]
    print(f"Save TTS gerado: {save_path}")
    if missing:
        print(f"Aviso: {len(missing)} asset(s) ainda sem URL da Steam Cloud.")
    else:
        print("Todas as URLs da Steam Cloud estão preenchidas.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
