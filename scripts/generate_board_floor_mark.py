#!/usr/bin/env python3
"""Bake the Basement elevator mark into the base-board PNG.

The source board remains untouched. Chrome renders the mark over a pixel-perfect
copy of the source, so the result can also be used by Tabletop Simulator.
"""

from __future__ import annotations

import subprocess
import tempfile
from pathlib import Path

from export_card_images import find_chrome


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE = PROJECT_ROOT / "assets/boards/base/board-complete-18x12-v12.png"
OUTPUT = PROJECT_ROOT / "assets/boards/base/board-complete-18x12-v13.png"
WIDTH = 1536
HEIGHT = 1024


def build_html() -> str:
    source_url = SOURCE.as_uri()
    return f"""<!doctype html>
<html lang=\"pt-BR\">
  <head>
    <meta charset=\"utf-8\">
    <style>
      html, body {{ margin: 0; width: {WIDTH}px; height: {HEIGHT}px; overflow: hidden; }}
      .board {{ position: relative; width: {WIDTH}px; height: {HEIGHT}px; }}
      .board > img {{ display: block; width: 100%; height: 100%; }}
      .floor-mark {{
        position: absolute;
        left: 154px;
        top: 137px;
        display: grid;
        width: 124px;
        height: 124px;
        place-items: center;
        color: rgba(65, 55, 37, 0.4);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 158px;
        font-weight: 900;
        line-height: 1;
        text-shadow: -2px -2px 0 rgba(255, 255, 255, 0.24), 2px 2px 0 rgba(47, 39, 28, 0.32);
        transform: translate(-50%, -50%) rotate(-5deg);
        mix-blend-mode: multiply;
      }}
      .elevator-grid {{ position: absolute; left: 70px; top: 69px; width: 168px; height: 156px; }}
      .elevator-grid::before, .elevator-grid::after {{ position: absolute; content: ''; opacity: 0.62; }}
      .elevator-grid::before {{
        top: 0;
        bottom: 0;
        left: 83px;
        width: 2px;
        background: linear-gradient(90deg, rgba(38, 42, 41, 0.52), rgba(238, 241, 237, 0.42));
      }}
      .elevator-grid::after {{
        right: 0;
        bottom: 77px;
        left: 0;
        height: 2px;
        background: linear-gradient(rgba(38, 42, 41, 0.52), rgba(238, 241, 237, 0.42));
      }}
    </style>
  </head>
  <body>
    <main class=\"board\">
      <img src=\"{source_url}\" alt=\"\">
      <span class=\"floor-mark\" aria-hidden=\"true\">B</span>
      <span class=\"elevator-grid\" aria-hidden=\"true\"></span>
    </main>
  </body>
</html>"""


def main() -> None:
    if not SOURCE.is_file():
        raise FileNotFoundError(f"Tabuleiro-base não encontrado: {SOURCE}")

    chrome = find_chrome(None)
    with tempfile.TemporaryDirectory(prefix="it-crowd-board-") as temp_dir:
        html_path = Path(temp_dir) / "board.html"
        html_path.write_text(build_html(), encoding="utf-8")
        subprocess.run(
            [
                str(chrome),
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                f"--window-size={WIDTH},{HEIGHT}",
                "--force-device-scale-factor=1",
                f"--screenshot={OUTPUT}",
                html_path.as_uri(),
            ],
            check=True,
        )
    print(f"Tabuleiro exportado: {OUTPUT}")


if __name__ == "__main__":
    main()
