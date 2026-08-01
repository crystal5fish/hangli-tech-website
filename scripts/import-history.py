#!/usr/bin/env python3
"""One-time import of processed_articles from the original RSS workbook."""

import argparse
import json
from pathlib import Path

import pandas as pd

parser = argparse.ArgumentParser()
parser.add_argument("--xlsx", required=True)
parser.add_argument("--month", required=True, help="YYYY-MM")
parser.add_argument("--output", default="public/news")
args = parser.parse_args()

allowed = {"模型发布", "产品发布", "行业动态", "投融资信息", "安全监管", "技术论文", "其他"}
frame = pd.read_excel(args.xlsx, sheet_name="processed_articles").fillna("")
frame["parsed_date"] = pd.to_datetime(frame["pubdate"], errors="coerce", utc=True).dt.tz_convert("Asia/Shanghai")
frame = frame[
    (pd.to_numeric(frame["Related_value"], errors="coerce").fillna(0) >= 6)
    & frame["parsed_date"].dt.strftime("%Y-%m").eq(args.month)
    & frame["title"].astype(str).str.contains(r"[\u3400-\u9fff]", regex=True)
]

output = Path(args.output)
output.mkdir(parents=True, exist_ok=True)
imported_dates = []

for day, group in frame.sort_values("parsed_date", ascending=False).groupby(frame["parsed_date"].dt.strftime("%Y-%m-%d")):
    seen = set()
    items = []
    for _, row in group.iterrows():
        link = str(row["link"]).strip()
        if not link or link in seen:
            continue
        seen.add(link)
        category = str(row["category"]).strip()
        items.append({
            "title": str(row["title"]).strip(),
            "link": link,
            "pubdate": row["parsed_date"].strftime("%Y-%m-%d %H:%M:%S"),
            "contentSnippet": str(row["contentSnippet"]).strip()[:90],
            "creator": str(row["creator"]).strip(),
            "relevance": int(float(row["Related_value"])),
            "source": str(row["name"] or row["creator"] or "未知来源").strip(),
            "category": category if category in allowed else "其他",
        })
    if items:
        (output / f"{day}.json").write_text(json.dumps({"date": day, "items": items}, ensure_ascii=False, indent=2), encoding="utf-8")
        imported_dates.append(day)

index_file = output / "index.json"
existing = json.loads(index_file.read_text(encoding="utf-8")).get("dates", []) if index_file.exists() else []
dates = sorted(set(existing + imported_dates), reverse=True)
index_file.write_text(json.dumps({"dates": dates}, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"month": args.month, "dates": len(imported_dates), "articles": len(frame)}, ensure_ascii=False))
