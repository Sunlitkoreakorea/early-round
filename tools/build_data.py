# 학교별 확인 자료(raw/*.json)를 합쳐 data.js 를 만든다.
# 사용: python tools/build_data.py
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "tools" / "raw"
CHECKED = "2026-11-25"

DREAM = {"yale", "stanford", "amherst"}
ORDER = [
    "yale", "stanford", "amherst", "harvard", "princeton", "mit", "brown", "columbia", "penn",
    "uchicago", "jhu", "williams", "swarthmore", "pomona", "berkeley",
]
EXPLORE = ["wesleyan", "carleton", "bowdoin", "middlebury", "grinnell", "colby", "conncoll", "rochester"]

# 확인 자료 id 와 사이트 id 가 다를 때
ALIAS = {
    "upenn": "penn", "pennsylvania": "penn", "chicago": "uchicago", "johns-hopkins": "jhu", "johnshopkins": "jhu",
    "ucberkeley": "berkeley", "uc-berkeley": "berkeley", "connecticut-college": "conncoll",
    "connecticutcollege": "conncoll", "connecticut": "conncoll", "conn-college": "conncoll", "conncollege": "conncoll",
    "camel": "conncoll", "urochester": "rochester", "university-of-rochester": "rochester",
}

# 사람이 다시 본 뒤 고친 값
FIX = {
    "yale": {"meetsNeed": True, "_drop_uncertain": ["meetsNeed"]},
    "brown": {"plans_patch": {"RD": {"notify": "March 31"}}},
    "carleton": {"plans_patch": {"RD": {"notify": "April 1"}}},
    "conncoll": {"name": "Conn College"},
    "grinnell": {"cogsci": "Neuroscience, Psychology; no cog sci program confirmed"},
    # 국제학생은 CSS Profile 을 지원 마감일까지 (국내 학생 표의 12/1, 2/15 가 아님)
    "rochester": {"aidDeadlines": {"early": "2026-11-01", "ed2": "2027-01-05", "rd": "2027-01-05"}},
    # 국제학생 재정 서류를 합격한 뒤에 내는 학교
    "williams": {"aidAfter": True, "aidForms": ["Mark aid intent on the application; aid forms only after admission (CSS Profile presumed)"]},
    "swarthmore": {"aidAfter": True, "aidForms": ["CSS Profile (fee waived for admitted internationals)", "Certificate of Finances, within 7 days of admission"]},
    "bowdoin": {"aidAfter": True, "aidForms": ["CSS Profile, within 7 days of admission (ISFAA no longer accepted)"]},
}

NOISE = re.compile(
    r"\s*(?:[-–—;,]\s*|\()\s*(?:from general knowledge|not verified|not re-verified|not re-checked|"
    r"listed as major in[^)]*?not re-verified this session|not confirmed)[^)]*\)?",
    re.I,
)


def clean(v):
    if isinstance(v, str):
        v = NOISE.sub("", v).strip()
        return v or None
    return v


def main():
    items = {}
    for f in sorted(RAW.glob("schools-*.json")):
        for s in json.loads(f.read_text(encoding="utf-8")):
            sid = ALIAS.get(s["id"], s["id"])
            s["id"] = sid
            items[sid] = s

    missing = [i for i in ORDER + EXPLORE if i not in items]
    extra = [i for i in items if i not in ORDER + EXPLORE]
    if missing or extra:
        raise SystemExit(f"id 확인 필요 missing={missing} extra={extra}")

    out = []
    for sid in ORDER + EXPLORE:
        s = items[sid]
        fix = FIX.get(sid, {})
        drop = fix.get("_drop_uncertain", [])
        for k, v in fix.items():
            if k.startswith("_"):
                continue
            if k == "plans_patch":
                for t, patch in v.items():
                    for p in s["plans"]:
                        if p["type"] == t:
                            p.update(patch)
            else:
                s[k] = v
        for k in ("earlyRule", "testingNote", "english", "supplements", "cogsci", "interview", "nextCycle"):
            s[k] = clean(s.get(k))
        s["uncertain"] = [u for u in (s.get("uncertain") or []) if u.split(":")[0].strip() not in drop]
        s["dream"] = sid in DREAM
        s["group"] = "explore" if sid in EXPLORE else "target"
        s["checked"] = CHECKED
        out.append(s)

    js = (
        "// tools/build_data.py 가 tools/raw/*.json 에서 만든 파일 (직접 고치지 말고 raw 나 FIX 를 고칠 것)\n"
        f"window.DATA_CHECKED = '{CHECKED}';\n"
        "window.SCHOOLS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n"
    )
    (ROOT / "data.js").write_text(js, encoding="utf-8")
    print(f"data.js: {len(out)}곳")


if __name__ == "__main__":
    main()
