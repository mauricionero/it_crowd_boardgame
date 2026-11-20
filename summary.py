#!/usr/bin/env python3
"""Summarize Call, Event and Mission difficulty by expansion."""

from __future__ import annotations

import argparse
import json
import re
from collections import OrderedDict
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent
CARD_DATA_PATH = PROJECT_ROOT / "templates/cards/card-data.js"

TYPE_LABELS = {
    "CALL": "Chamados",
    "GENERIC_EVENT": "Eventos",
    "MISSION_EVENT": "Missões",
}

DIFFICULTY_LABELS = OrderedDict((
    ("easy", "Fácil"),
    ("medium", "Média"),
    ("hard", "Difícil"),
))

FLOOR_LABELS = {
    "B": "📍B — Porão",
    "1": "📍1️⃣ — Marketing",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--json",
        action="store_true",
        help="Imprime o resumo como JSON em vez do formato legível.",
    )
    parser.add_argument(
        "--source",
        type=Path,
        default=CARD_DATA_PATH,
        help="Arquivo card-data.js usado como fonte da verdade.",
    )
    return parser.parse_args()


def extract_card_entries(source: str) -> list[tuple[str, str]]:
    entry_pattern = re.compile(
        r"^\s{8}([A-Z][A-Z0-9]*): \{(?P<body>.*?)(?=^\s{8}[A-Z][A-Z0-9]*: \{|\Z)",
        re.MULTILINE | re.DOTALL,
    )
    return [(match.group(1), match.group("body")) for match in entry_pattern.finditer(source)]


def extract_value(pattern: str, body: str) -> str | None:
    match = re.search(pattern, body)
    return match.group(1) if match else None


def read_floor_values(source: str) -> dict[str, str]:
    floors_match = re.search(
        r"const FLOORS = Object\.freeze\(\{(?P<body>.*?)\}\);",
        source,
        re.DOTALL,
    )
    if not floors_match:
        return {}

    values = {}
    for name, value in re.findall(
        r"([A-Z][A-Z0-9_]*)\s*:\s*'([^']+)'",
        floors_match.group("body"),
    ):
        values[name] = value
    return values


def empty_bucket() -> dict[str, int]:
    return {
        "total": 0,
        "easy": 0,
        "medium": 0,
        "hard": 0,
        "helpful": 0,
    }


def summarize(source_path: Path) -> OrderedDict[str, OrderedDict[str, dict[str, int]]]:
    source = source_path.read_text(encoding="utf-8")
    floor_values = read_floor_values(source)
    basement = floor_values.get("BASEMENT", "B")
    cards_by_floor: OrderedDict[str, OrderedDict[str, dict[str, int]]] = OrderedDict()

    for code, body in extract_card_entries(source):
        card_type = extract_value(r"type:\s*CARD_TYPES\.([A-Z0-9_]+)", body)
        if card_type not in TYPE_LABELS:
            continue

        floor_name = extract_value(r"floor:\s*FLOORS\.([A-Z0-9_]+)", body)
        floor = floor_values.get(floor_name, basement) if floor_name else basement
        difficulty = extract_value(r"difficulty:\s*'([^']+)'", body)
        if difficulty not in DIFFICULTY_LABELS:
            raise ValueError(f"{code}: dificuldade ausente ou inválida: {difficulty!r}")

        floor_bucket = cards_by_floor.setdefault(floor, OrderedDict())
        type_bucket = floor_bucket.setdefault(TYPE_LABELS[card_type], empty_bucket())
        type_bucket["total"] += 1
        type_bucket[difficulty] += 1
        if re.search(r"helpful:\s*true", body):
            type_bucket["helpful"] += 1

    return cards_by_floor


def ordered_floor_keys(summary: OrderedDict) -> list[str]:
    return sorted(summary, key=lambda floor: (floor != "B", int(floor) if floor.isdigit() else floor))


def format_text(summary: OrderedDict[str, OrderedDict[str, dict[str, int]]]) -> str:
    lines = ["Resumo de dificuldade por expansão"]
    for floor in ordered_floor_keys(summary):
        lines.append("")
        lines.append(FLOOR_LABELS.get(floor, f"📍{floor}"))
        for card_type, counts in summary[floor].items():
            lines.extend([
                f"  {card_type} ({counts['total']})",
                f"    Fácil: {counts['easy']}",
                f"    Média: {counts['medium']}",
                f"    Difícil: {counts['hard']}",
                f"    + benefício: {counts['helpful']}",
            ])
    return "\n".join(lines)


def main() -> int:
    args = parse_args()
    summary = summarize(args.source)
    if args.json:
        print(json.dumps(summary, ensure_ascii=False, indent=2))
    else:
        print(format_text(summary))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
