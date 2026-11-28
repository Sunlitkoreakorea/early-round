# 학교별 확인 자료(raw/*.json)를 합쳐 data.js 를 만든다.
# 사용: python tools/build_data.py
#   raw/schools-*.json  얼리 방식, 마감, 규칙, 재정지원 (2026-11-25 확인)
#   raw/stats-*.json    합격 통계, 주로 Common Data Set (2026-11-26 확인)
#   raw/req-*.json      지원 서류, 보충 에세이 (2026-11-26 확인)
#   raw/verify-*.json   두 번째 대조에서 나온 정정과 채운 값
#   raw/policy-*.json   SAT 점수 정책 (최고점 합산, 자기 보고, 얼리/정시 마지막 SAT 달)
#   raw/cand-us.json    보강 후보 미국 학교 (얼리, 재정지원, 통계, 정책 한 묶음)
#   raw/cand-intl.json  미국 밖 선택지
#   raw/summer-*.json   2027 여름 프로그램
#   raw/pub-*.json      주립대 (얼리, 통계, 비용, 전공 한 묶음)
#   raw/maj-*.json      기존 학교들의 전공 5개와 1년 비용
#   raw/uk-*.json       영국 대학 (UCAS 마감, 과정, 기준, 학비, 순위)
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "tools" / "raw"
CHECKED = "2026-11-26"

DREAM = {"yale", "stanford", "amherst"}
ORDER = [
    "yale", "stanford", "amherst", "harvard", "princeton", "mit", "brown", "columbia", "penn",
    "uchicago", "jhu", "williams", "swarthmore", "pomona", "berkeley",
]
EXPLORE = ["wesleyan", "carleton", "bowdoin", "middlebury", "grinnell", "colby", "conncoll", "rochester"]

ALIAS = {
    "upenn": "penn", "pennsylvania": "penn", "chicago": "uchicago", "johns-hopkins": "jhu", "johnshopkins": "jhu",
    "ucberkeley": "berkeley", "uc-berkeley": "berkeley", "connecticut-college": "conncoll",
    "connecticutcollege": "conncoll", "connecticut": "conncoll", "conn-college": "conncoll", "conncollege": "conncoll",
    "camel": "conncoll", "urochester": "rochester", "university-of-rochester": "rochester",
}

# 위치 (캠퍼스 대략 좌표). region: ne 동북부, mw 중서부, w 서부. lx/ly/la: 동북부 확대 지도의 이름표 위치
LOC = {
    "yale": ("New Haven", "CT", 41.3163, -72.9223, "ne", -10, 18, "end"),
    "harvard": ("Cambridge", "MA", 42.3770, -71.1167, "ne", 9, -9, "start"),
    "princeton": ("Princeton", "NJ", 40.3431, -74.6551, "ne", 11, 4, "start"),
    "stanford": ("Stanford", "CA", 37.4275, -122.1697, "w", 11, 16, "start"),
    "mit": ("Cambridge", "MA", 42.3601, -71.0942, "ne", 11, 12, "start"),
    "brown": ("Providence", "RI", 41.8268, -71.4025, "ne", 11, 6, "start"),
    "columbia": ("New York", "NY", 40.8075, -73.9626, "ne", 11, 4, "start"),
    "penn": ("Philadelphia", "PA", 39.9522, -75.1932, "ne", 11, 2, "start"),
    "uchicago": ("Chicago", "IL", 41.7886, -87.5987, "mw", 0, 18, "middle"),
    "jhu": ("Baltimore", "MD", 39.3299, -76.6205, "ne", -10, 5, "end"),
    "berkeley": ("Berkeley", "CA", 37.8719, -122.2585, "w", 11, 2, "start"),
    "amherst": ("Amherst", "MA", 42.3709, -72.5170, "ne", -10, 15, "end"),
    "williams": ("Williamstown", "MA", 42.7128, -73.2032, "ne", -10, 5, "end"),
    "swarthmore": ("Swarthmore", "PA", 39.9054, -75.3541, "ne", -10, 16, "end"),
    "pomona": ("Claremont", "CA", 34.0977, -117.7131, "w", 11, -4, "start"),
    "wesleyan": ("Middletown", "CT", 41.5566, -72.6569, "ne", -10, 12, "end"),
    "carleton": ("Northfield", "MN", 44.4605, -93.1544, "mw", 11, 10, "start"),
    "bowdoin": ("Brunswick", "ME", 43.9077, -69.9640, "ne", -10, 16, "end"),
    "middlebury": ("Middlebury", "VT", 44.0081, -73.1774, "ne", 11, 5, "start"),
    "grinnell": ("Grinnell", "IA", 41.7490, -92.7199, "mw", 11, 5, "start"),
    "colby": ("Waterville", "ME", 44.5639, -69.6626, "ne", 11, 5, "start"),
    "conncoll": ("New London", "CT", 41.3790, -72.1043, "ne", 11, 14, "start"),
    "rochester": ("Rochester", "NY", 43.1306, -77.6260, "ne", 11, 5, "start"),
}

# 사람이 다시 본 뒤 고친 값 (얼리/재정 자료)
FIX = {
    "yale": {
        "meetsNeed": True, "_drop_uncertain": ["meetsNeed", "aidForms", "interview"],
        "aidForms": ["CSS Profile (code 3987)", "IDOC documents"],
        "interview": "Optional alumni interview; Yale requests one when helpful, not guaranteed, no penalty if none",
    },
    "brown": {"plans_patch": {"RD": {"notify": "March 31"}}, "_drop_uncertain": ["intlAid"]},
    "carleton": {"plans_patch": {"RD": {"notify": "April 1"}}, "supplements": "No writing supplement (optional arts supplements only)"},
    "conncoll": {"name": "Conn College"},
    "grinnell": {"cogsci": "Neuroscience, Psychology; no cog sci program confirmed"},
    "amherst": {"aidForms": ["CSS Profile (code 3003)", "ISFAA only on request for fee hardship"], "_drop_uncertain": ["aidForms"]},
    # 국제학생은 CSS Profile 을 지원 마감일까지 (국내 학생 표의 12/1, 2/15 가 아님)
    "rochester": {"aidDeadlines": {"early": "2026-11-01", "ed2": "2027-01-05", "rd": "2027-01-05"}},
    # 국제학생 재정 서류를 합격한 뒤에 내는 학교
    "williams": {"aidAfter": True, "aidForms": ["Mark aid intent on the application; aid forms only after admission (CSS Profile presumed)"]},
    "swarthmore": {"aidAfter": True, "aidForms": ["CSS Profile (fee waived for admitted internationals)", "Certificate of Finances, within 7 days of admission"]},
    "bowdoin": {"aidAfter": True, "aidForms": ["CSS Profile, within 7 days of admission (ISFAA no longer accepted)"]},
}

# 통계 직접 확인/보충 (CDS 를 못 연 학교는 학교 공식 신입생 프로필 페이지)
STATS_FIX = {
    "amherst": {
        "id": "amherst", "cdsYear": "Class of 2029 프로필",
        "source": "https://www.amherst.edu/about/facts/secondary_school_reports/class-of-2029-admission-and-enrollment-profile",
        "applied": 15819, "admitted": 1222, "admitRate": 7.7, "ed": None, "ea": None,
        "satSubmitPct": 39.6, "satEBRW": [730, None, 770], "satMath": [730, None, 790], "actComposite": [33, None, 35],
        "firstYearTotal": 485, "intlFirstYear": None, "intlAidCount": None, "intlAidAvg": None,
        "notes": "enrolled mid-50%; means EBRW 750 / Math 756; SAT submitted by 192 of 485 enrolled; about 10% international",
        "uncertain": ["ed: profile gives no ED applicant/admit counts"],
    },
}

# 통계 일부만 고칠 때 (대조/보충 뒤에 적용)
STATS_PATCH = {
    # Colby 는 합격자 수를 안 밝히고 "7 percent offered admission" 만 발표
    "colby": {"admitRate": 7.0, "rateNote": "학교 발표 (반올림 값)"},
    # Wesleyan 프로필의 점수는 입학생이 아니라 합격자 기준
    "wesleyan": {"scoreBasis": "합격자"},
    # 국제학생 지원/합격 수 (CDS C1 거주지 표, 2026-11-26 직접 확인: 칸 합계가 전체와 맞음)
    "princeton": {"intl": {"applied": 10567, "admitted": 241}},   # 4602+27134+10567=42303, 229+1398+241=1868
    "columbia": {"intl": {"applied": 15380, "admitted": 407}},    # 8882+35349+15380=59611, 447+2092+407=2946
    "jhu": {"intl": {"applied": 10705, "admitted": 404}},         # 4233+35321+10705=50259, 199+2469+404=3072
    "brown": {"intl": {"applied": 9861, "admitted": 404}},        # 559+32351+9861+3=42774, 63+2243+404=2710
    "carleton": {"intl": {"applied": 3290, "admitted": 132}},     # 636+2870+3290=6796, 221+1127+132=1480
    "bowdoin": {"intl": {"applied": 6041, "admitted": 76}},       # 540+7464+6041=14045, 74+807+76=957
    "rochester": {"intl": {"applied": 7998, "admitted": 1453}},   # 4551+9060+7998=21609, 2292+5311+1453=9056
    "conncoll": {"intl": {"applied": 2552, "admitted": 115}},     # 810+3976+2552=7338, 301+2459+115=2875
    # MIT 은 CDS 칸이 비어 있어서 입학처 통계 페이지 (22355+6926=29281, 1198+136=1334)
    "mit": {"intl": {"applied": 6926, "admitted": 136}, "intlSource": "https://mitadmissions.org/apply/process/stats/"},
    # 두 번째 대조에서 Harvard CDS 2025-26 을 찾음 (숫자는 verify-S1.json 정정으로 채움)
    "harvard": {"cdsYear": "2025-2026", "source": "https://oira.harvard.edu/files/2026/07/CDS_2025-2026.pdf", "uncertain": []},
}

# 지원 서류 손으로 고친 값: (id, 경로, 값)
REQ_FIX = [
    ("yale", "supplements[1].words", None),  # Yale short takes 는 단어가 아니라 200자 제한
    # 두 번째 대조: Bowdoin 은 카운슬러 + 선생님 1 + 기타 1 (두 번째 선생님, 코치, 고용주 등) 모두 필수
    ("bowdoin", "teacherRecs", {"required": 1, "optionalExtra": 0, "otherRequired": 1,
                                "note": "Counselor + 1 core-academic teacher + 1 other (second teacher, coach, employer, etc.), all required"}),
]

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


def load_list(pattern):
    out = {}
    for f in sorted(RAW.glob(pattern)):
        for s in json.loads(f.read_text(encoding="utf-8")):
            sid = ALIAS.get(s["id"], s["id"])
            s["id"] = sid
            out[sid] = s
    return out


PATH = re.compile(r"([A-Za-z_]+)(?:\[(\d+)\])?")


def set_path(obj, path, value):
    parts = path.split(".")
    cur = obj
    for i, part in enumerate(parts):
        m = PATH.fullmatch(part)
        if not m:
            raise ValueError(path)
        key, idx = m.group(1), m.group(2)
        last = i == len(parts) - 1
        if idx is None:
            if last:
                cur[key] = value
            else:
                if cur.get(key) is None:
                    cur[key] = {}
                cur = cur[key]
        else:
            seq = cur[key]
            if last:
                seq[int(idx)] = value
            else:
                cur = seq[int(idx)]


NE_STATES = {"CT", "MA", "RI", "NH", "VT", "ME", "NY", "NJ", "PA", "MD", "DE", "DC"}
MW_STATES = {"OH", "MI", "IN", "IL", "WI", "MN", "IA", "MO", "ND", "SD", "NE", "KS"}
W_STATES = {"CA", "OR", "WA", "NV", "AZ", "UT", "CO", "NM", "ID", "MT", "WY", "AK", "HI"}
NE_BOX = ((-78.3, 38.85), (-69.2, 45.15))

# 주립대 지도 이름표 (겹칠 때만 손으로)
PUB_LABEL = {"ucdavis": (11, -6, "start"), "ucla": (-10, 4, "end"), "uci": (11, 6, "start"), "ucsd": (11, 8, "start"), "umn": (11, -7, "start"), "umich": (0, 16, "middle"), "uva": (-10, 2, "end"), "wisc": (11, 5, "start")}

# 보강 후보 지도 이름표 (겹칠 때만 손으로)
CAND_LABEL = {"macalester": (-10, 2, "end"), "oberlin": (0, 16, "middle"), "case-western": (11, -3, "start"), "kenyon": (11, 9, "start"), "trinity-ct": (-10, -3, "end")}


def region_of(state, lat, lon):
    (x0, y0), (x1, y1) = NE_BOX
    if state in NE_STATES and x0 <= lon <= x1 and y0 <= lat <= y1:
        return "ne"
    if state in MW_STATES or state in NE_STATES:
        return "mw" if state in MW_STATES else "ne"
    if state in W_STATES:
        return "w"
    return "s"


def load_json(name):
    f = RAW / name
    return json.loads(f.read_text(encoding="utf-8")) if f.exists() else []


def rate(a, b):
    return round(b / a * 100, 1) if a else None


def main():
    items = load_list("schools-*.json")
    stats = load_list("stats-*.json")
    reqs = load_list("req-*.json")
    policies = load_list("policy-*.json")
    summer = load_list("summer-*.json")
    cands = load_list("cand-us.json")
    pubs = load_list("pub-*.json")
    majs = load_list("maj-*.json")
    uks = load_list("uk-*.json")
    # 같은 방식이 두 번 있으면(예: EA 두 번) 사이트는 방식당 하나라 첫 번째만 두고 나머지는 규칙 문장에 적음
    for d in (pubs,):
        for c in d.values():
            seen, keep, extra = set(), [], []
            for pl in c.get("plans") or []:
                if pl["type"] in seen:
                    extra.append(f"another {pl['type']} round {pl.get('deadline')}")
                else:
                    seen.add(pl["type"])
                    keep.append(pl)
            if extra:
                c["plans"] = keep
                c["earlyRule"] = ((c.get("earlyRule") or "") + " Also: " + "; ".join(extra) + ".").strip()
    # 후보 학교: 수집 에이전트가 메모에만 적은 CDS C1 국제학생 지원/합격 수를 칸으로 (대조 정정이 있으면 덮어씀)
    CAND_BASE = {
        "oberlin": {"intl": {"applied": 4015, "admitted": 446}},
        "lafayette": {"intl": {"applied": 3705, "admitted": 258}},
        "richmond": {"intl": {"applied": 4104, "admitted": 280}},
        "trinity-ct": {"intl": {"applied": 3348, "admitted": 167}},
        "whitman": {"intl": {"applied": 3265, "admitted": 253}},
        "dickinson": {"intl": {"applied": 1549, "admitted": 208}},
        "earlham": {"intl": {"applied": 647, "admitted": 258}},
    }
    for sid, add in CAND_BASE.items():
        if sid in cands:
            cands[sid].setdefault("stats", {}).update(add)
    # Earlham 은 EA 가 두 번(11/1, 12/1): 사이트는 방식당 하나라 첫 EA 만 두고 규칙 문장에 적음
    if "earlham" in cands:
        c = cands["earlham"]
        eas = [p for p in c["plans"] if p["type"] == "EA"]
        if len(eas) > 1:
            c["plans"] = [p for p in c["plans"] if p["type"] != "EA" or p is eas[0]]
            c["earlyRule"] = (c.get("earlyRule") or "") + f" Second EA round deadline {eas[1]['deadline']}."
    if "kenyon" in cands:
        cands["kenyon"].setdefault("stats", {})["intlNote"] = "Kenyon 공식 페이지 요약: 재정지원이 필요한 국제학생 합격은 5% 미만 (직접 확인 못 함)"
    ids = ORDER + EXPLORE
    for name, d in (("schools", items), ("stats", stats), ("req", reqs)):
        missing = [i for i in ids if i not in d]
        extra = [i for i in d if i not in ids]
        if missing or extra:
            raise SystemExit(f"{name}: id 확인 필요 missing={missing} extra={extra}")

    # 두 번째 대조 결과 반영
    applied = []
    verified = {}
    for f in sorted(RAW.glob("verify-*.json")):
        v = json.loads(f.read_text(encoding="utf-8"))
        tag = f.stem.split("-")[1]
        if tag.startswith("SUM"):
            kind = "summer"
        elif tag.startswith("PUB"):
            kind = "pub"
        elif tag.startswith("MAJ"):
            kind = "maj"
        elif tag.startswith("UK"):
            kind = "uk"
        elif tag.startswith("CAND"):
            kind = "cand"
        elif tag.startswith("R"):
            kind = "req"
        elif tag.startswith("P"):
            kind = "policy"
        else:
            kind = "stats"
        for sid, status in (v.get("checked") or {}).items():
            verified.setdefault(ALIAS.get(sid, sid), {})[kind] = status
        for fill in v.get("filled", []):
            sid = ALIAS.get(fill["id"], fill["id"])
            fill["id"] = sid
            stats[sid] = fill
            verified.setdefault(sid, {})["stats"] = "filled"
            applied.append(f"{f.name}: {sid} 통계 채움")
        target = {"req": reqs, "policy": policies, "summer": summer, "cand": cands, "pub": pubs, "maj": majs, "uk": uks}.get(kind, stats)
        for c in v.get("corrections", []):
            sid = ALIAS.get(c["id"], c["id"])
            try:
                set_path(target[sid], c["field"], c["new"])
                applied.append(f"{f.name}: {sid}.{c['field']} {c.get('old')} -> {c['new']}")
            except (KeyError, IndexError, ValueError, TypeError) as e:
                applied.append(f"{f.name}: {sid}.{c['field']} 적용 못 함 ({e})")

    for sid, s in STATS_FIX.items():
        stats[sid] = s
        verified.setdefault(sid, {})["stats"] = "ok: 직접 확인"
    for sid, patch in STATS_PATCH.items():
        if "intl" in patch and isinstance(stats[sid].get("intl"), dict):
            patch = dict(patch, intl=dict(stats[sid]["intl"], **patch["intl"]))
        stats[sid].update(patch)
    # 국제학생 줄이 없는 이유
    BLANK = {"yale", "harvard", "stanford", "uchicago", "swarthmore", "middlebury", "berkeley", "grinnell"}
    NOFILE = {"amherst", "williams", "pomona", "colby", "wesleyan", "penn"}
    for sid in BLANK:
        if not stats[sid].get("intl"):
            stats[sid]["intlNote"] = "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요"
    for sid in NOFILE:
        if not stats[sid].get("intl"):
            stats[sid]["intlNote"] = "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요"
    for sid, path, val in REQ_FIX:
        set_path(reqs[sid], path, val)

    # 비율 다시 계산해서 어긋나면 알림
    for sid, t in stats.items():
        if t.get("applied") and t.get("admitted"):
            r = rate(t["applied"], t["admitted"])
            if t.get("admitRate") is None or abs(r - t["admitRate"]) > 0.051:
                print(f"주의 {sid}: admitRate {t.get('admitRate')} -> {r}")
                t["admitRate"] = r
        for k in ("ed", "ea", "intl"):
            x = t.get(k)
            if x and x.get("applied") and x.get("admitted") is not None:
                r = rate(x["applied"], x["admitted"])
                if x.get("rate") is None or abs(r - x["rate"]) > 0.051:
                    if k != "intl":
                        print(f"주의 {sid}.{k}: rate {x.get('rate')} -> {r}")
                    x["rate"] = r

    out = []
    for sid in ids:
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
        st = dict(stats[sid])
        st.pop("id", None)
        s["stats"] = st
        rq = dict(reqs[sid])
        rq.pop("id", None)
        rq.pop("resolved", None)
        s["req"] = rq
        c, stt, lat, lon, region, lx, ly, la = LOC[sid]
        s["loc"] = {"city": c, "state": stt, "lat": lat, "lon": lon, "region": region, "lx": lx, "ly": ly, "la": la}
        s["verified"] = verified.get(sid, {})
        out.append(s)

    # SAT 점수 정책
    for s in out:
        pol = policies.get(s["id"])
        if pol:
            pol = dict(pol)
            pol.pop("id", None)
            s["policy"] = pol

    # 보강 후보 미국 학교
    for c in cands.values():
        sid = c["id"]
        if sid in ids:
            continue
        st = dict(c.pop("stats", None) or {})
        if st.get("applied") and st.get("admitted"):
            r = rate(st["applied"], st["admitted"])
            if st.get("admitRate") is None or abs(r - st["admitRate"]) > 0.051:
                print(f"주의 {sid}: admitRate {st.get('admitRate')} -> {r}")
                st["admitRate"] = r
        for k in ("ed", "ea", "intl"):
            x = st.get(k)
            if x and x.get("applied") and x.get("admitted") is not None:
                x["rate"] = rate(x["applied"], x["admitted"])
        pol = c.pop("policy", None)
        city, state, lat, lon = c.pop("city", ""), c.pop("state", ""), c.pop("lat", None), c.pop("lon", None)
        lab = CAND_LABEL.get(sid, (11, 5, "start"))
        c.update({
            "stats": st, "policy": pol, "group": "candidate", "dream": False, "checked": CHECKED,
            "loc": {"city": city, "state": state, "lat": lat, "lon": lon, "region": region_of(state, lat or 0, lon or 0),
                    "lx": lab[0], "ly": lab[1], "la": lab[2]} if lat is not None and lon is not None else None,
            "verified": verified.get(sid, {}),
        })
        for k in ("earlyRule", "testingNote", "english", "cogsci", "interview"):
            c[k] = clean(c.get(k))
        out.append(c)

    # 주립대 대조에서 나온 값: UVA 비용은 수집 값이 서로 어긋나 UVA CDS G1 표 값으로
    if "uva" in pubs:
        pubs["uva"].setdefault("stats", {})["coa"] = {"year": "CDS G1", "tuition": 59035, "fees": 3945, "housing": 16070, "direct": 79050,
                                                   "source": "UVA Common Data Set G1 (via second check)", "note": "nonresident"}
    # 주립대: 후보 학교와 같은 방식, 묶음만 public
    for c in pubs.values():
        sid = c["id"]
        if sid in ids:
            continue
        st = dict(c.pop("stats", None) or {})
        if st.get("applied") and st.get("admitted"):
            r = rate(st["applied"], st["admitted"])
            if st.get("admitRate") is None or abs(r - st["admitRate"]) > 0.051:
                print(f"주의 {sid}: admitRate {st.get('admitRate')} -> {r}")
                st["admitRate"] = r
        for k in ("ed", "ea", "intl"):
            x = st.get(k)
            if x and x.get("applied") and x.get("admitted") is not None:
                x["rate"] = rate(x["applied"], x["admitted"])
        if st.get("coa") and not st["coa"].get("direct"):
            st["coa"]["direct"] = st["coa"].get("total")
        pol = c.pop("policy", None)
        rq = c.pop("req", None)
        city, state, lat, lon = c.pop("city", ""), c.pop("state", ""), c.pop("lat", None), c.pop("lon", None)
        lab = PUB_LABEL.get(sid, (11, 5, "start"))
        c.update({
            "stats": st, "policy": pol, "req": rq, "group": "public", "public": True, "dream": False, "checked": CHECKED,
            "loc": {"city": city, "state": state, "lat": lat, "lon": lon, "region": region_of(state, lat or 0, lon or 0),
                    "lx": lab[0], "ly": lab[1], "la": lab[2]} if lat is not None and lon is not None else None,
            "verified": verified.get(sid, {}),
        })
        for k in ("earlyRule", "testingNote", "english", "cogsci", "interview"):
            c[k] = clean(c.get(k))
        out.append(c)

    # 기존 학교(원래 23곳 + 보강 후보)의 전공과 1년 비용
    # 지원할 때 단과대를 고르지 않는 학교는 단과대 칸을 비움 (수집 에이전트가 소속 단과대를 적었을 뿐)
    NO_COLLEGE_CHOICE = {"rochester", "oberlin", "richmond", "case-western"}
    # 대조에서 '부분'으로 남은 것 중 앞선 조사(raw/schools-C)와 맞춰 고친 값
    if "wesleyan" in majs:
        majs["wesleyan"]["majors"]["cogsci"].update({"offered": "track", "name": "Cognitive Science concentration (in Psychology)"})
    for s_ in out:
        m = majs.get(s_["id"])
        if not m:
            continue
        if m.get("majors"):
            if s_["id"] in NO_COLLEGE_CHOICE:
                for v in m["majors"].values():
                    if isinstance(v, dict):
                        v["college"] = None
            s_["majors"] = m["majors"]
        coa = m.get("coa")
        if coa and (coa.get("direct") or coa.get("total")):
            s_.setdefault("stats", {})["coa"] = coa
        s_.setdefault("verified", {})["maj"] = verified.get(s_["id"], {}).get("maj")
        unc = [f"{u}" for u in (m.get("uncertain") or [])]
        if unc:
            s_["uncertain"] = (s_.get("uncertain") or []) + unc

    # 세계 순위 (QS 2027, THE 2027)
    ranks = {r["id"]: r for r in load_json("rank-2027.json")}
    for s_ in out:
        r = ranks.get(s_["id"])
        if r:
            s_["rank"] = {k: r.get(k) for k in ("qs", "the", "qsSource", "theSource", "note")}
    snu = ranks.get("snu") or {}
    rank_ref = {"qs": snu.get("qs"), "the": snu.get("the")}

    uk_out = []
    for sid, u in uks.items():
        # 순위 표기 통일: "2 (joint with Stanford)" -> "=2"
        for k in ("qs", "the"):
            v = (u.get("rank") or {}).get(k)
            if isinstance(v, str):
                m = re.match(r"^=?(\d+)\s*\(joint.*\)$", v.strip(), re.I)
                if m:
                    u["rank"][k] = "=" + m.group(1)
        u["checked"] = CHECKED
        u["verified"] = verified.get(sid, {}).get("uk")
        uk_out.append(u)

    intl = load_json("cand-intl.json")
    # 대조 정정이 원래 문장을 덮어쓴 것을 합쳐서 다시 씀
    SUMMER_PATCH = {
        "harvard-ssp": {"deadlineNote": "Early Jan 13, 2027 (opens Dec 1, 2026); regular and international Feb 10, 2027; "
                                        "late Mar 31 (no aid; internationals may use it for the 7-week Online SSP); application fee $75."},
    }
    for sid, patch_ in SUMMER_PATCH.items():
        summer[sid].update(patch_)
    summer_out = []
    for sid, pgm in summer.items():
        pgm["verified"] = verified.get(sid, {}).get("summer")
        summer_out.append(pgm)

    js = (
        "// tools/build_data.py 가 tools/raw/*.json 에서 만든 파일 (직접 고치지 말고 raw 나 FIX 를 고칠 것)\n"
        f"window.DATA_CHECKED = '{CHECKED}';\n"
        "window.SCHOOLS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n"
        "window.INTL_OPTS = " + json.dumps(intl, ensure_ascii=False, indent=1) + ";\n"
        "window.SUMMER = " + json.dumps(summer_out, ensure_ascii=False, indent=1) + ";\n"
        "window.RANK_REF = " + json.dumps(rank_ref, ensure_ascii=False) + ";\n"
        "window.UK = " + json.dumps(uk_out, ensure_ascii=False, indent=1) + ";\n"
    )
    (ROOT / "data.js").write_text(js, encoding="utf-8")
    for line in applied:
        print(line)
    print(f"data.js: {len(out)}곳")


if __name__ == "__main__":
    main()
