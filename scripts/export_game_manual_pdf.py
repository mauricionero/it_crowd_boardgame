#!/usr/bin/env python3
"""Export the visual game manual to a controlled A4 PDF.

The browser remains the source of truth for the manual layout. Unlike the
browser's print dialog, this exporter disables browser-added headers and
footers and uses the A4 page size declared by the manual.

Usage:
    python3 scripts/export_game_manual_pdf.py
    python3 scripts/export_game_manual_pdf.py --output /tmp/manual.pdf
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import tempfile
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
MANUAL_PATH = PROJECT_ROOT / "IT_Crowd_game_manual.html"
DEFAULT_OUTPUT = PROJECT_ROOT / "output/pdf/IT_Crowd_game_manual.pdf"


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


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help="Arquivo PDF de saída. O padrão é output/pdf/IT_Crowd_game_manual.pdf.",
    )
    parser.add_argument(
        "--chrome",
        type=Path,
        help="Caminho do executável Chrome/Chromium.",
    )
    return parser.parse_args()


def export_pdf(output_path: Path, chrome_path: Path) -> None:
    if not MANUAL_PATH.is_file():
        raise FileNotFoundError(f"Manual não encontrado: {MANUAL_PATH}")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.unlink(missing_ok=True)

    with tempfile.TemporaryDirectory(prefix="it-crowd-manual-chrome-") as profile_dir:
        command = [
            str(chrome_path),
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--allow-file-access-from-files",
            "--no-pdf-header-footer",
            "--run-all-compositor-stages-before-draw",
            "--virtual-time-budget=3000",
            f"--user-data-dir={profile_dir}",
            f"--print-to-pdf={output_path.resolve()}",
            MANUAL_PATH.resolve().as_uri(),
        ]
        result = subprocess.run(command, capture_output=True, text=True, check=False)

    if result.returncode != 0 or not output_path.is_file() or output_path.stat().st_size == 0:
        details = (result.stderr or result.stdout).strip()
        raise RuntimeError(
            f"O Chrome não conseguiu gerar o PDF (código {result.returncode}). {details}"
        )


def main() -> None:
    args = parse_args()
    chrome_path = find_chrome(args.chrome)
    export_pdf(args.output, chrome_path)
    print(f"PDF gerado: {args.output.resolve()}")


if __name__ == "__main__":
    main()
