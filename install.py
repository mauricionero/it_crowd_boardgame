#!/usr/bin/env python3
"""Prepare the printable assets and the game manual."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--chrome",
        type=Path,
        help="Caminho do executável Chrome/Chromium, caso não esteja em um caminho padrão.",
    )
    return parser.parse_args()


def run(command: list[str]) -> None:
    print(f"\n> {' '.join(command)}")
    subprocess.run(command, cwd=PROJECT_ROOT, check=True)


def main() -> None:
    args = parse_args()
    python = sys.executable
    chrome_args = ["--chrome", str(args.chrome)] if args.chrome else []

    print("Exportando todas as cartas em baixa e alta resolução...")
    run([
        python,
        "scripts/export_card_images.py",
        "--regenerate",
        "all",
        "--resolution",
        "both",
        *chrome_args,
    ])

    print("Exportando o manual para a raiz do projeto...")
    run([
        python,
        "scripts/export_game_manual_pdf.py",
        "--output",
        "IT_Crowd_game_manual.pdf",
        *chrome_args,
    ])

    print("\nPreparação concluída.")
    print(f"PDF: {PROJECT_ROOT / 'IT_Crowd_game_manual.pdf'}")
    print(f"Cartas: {PROJECT_ROOT / 'exported-images/cards'}")


if __name__ == "__main__":
    main()
