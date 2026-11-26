// 날짜 계산과 얼리 조합 검사 (화면과 분리해서 node 테스트 가능)
(function (root) {
  'use strict';

  const EARLY = ['ED', 'EA', 'REA', 'SCEA'];
  const RESTRICT = ['REA', 'SCEA'];
  const BINDING = ['ED', 'ED2'];
  const ORDER = { ED: 0, REA: 1, SCEA: 1, EA: 2, ED2: 3, RD: 4 };
  const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
    'august', 'september', 'october', 'november', 'december'];

  function parse(iso) {
    if (!iso) return null;
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  // 학교 자료는 2026-27 시즌 날짜라 지원할 시즌(1년 뒤)로 옮겨서 보여준다.
  // 직접 추가한 학교(own)는 입력한 날짜 그대로.
  function shifted(iso, own) {
    const d = parse(iso);
    if (d && !own) d.setFullYear(d.getFullYear() + 1);
    return d;
  }

  function dday(date, today) {
    if (!date) return null;
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.round((date - t) / 86400000);
  }

  function md(date) {
    return date ? `${date.getMonth() + 1}/${date.getDate()}` : '';
  }

  // "mid-December" 같은 발표 시기를 "12월 중순"으로
  function notifyKo(p) {
    const txt = (p.notify || '').toLowerCase();
    // 글에서 가장 먼저 나오는 달 이름과, 그 바로 앞의 초/중순/말
    let first = -1;
    let at = Infinity;
    MONTHS.forEach((name, i) => {
      const k = txt.indexOf(name);
      if (k >= 0 && k < at) { at = k; first = i; }
    });
    if (first >= 0) {
      const m = first + 1;
      const before = txt.slice(Math.max(0, at - 20), at).split(/[,(;]/).pop();
      const q = (before.match(/early|mid|late|end/g) || []).map(w => (w === 'early' ? '초' : w === 'mid' ? '중순' : '말'));
      if (q.length) return `${m}월 ${q.length > 1 ? `${q[0]}~${q[q.length - 1]}` : q[0]}`;
      const day = txt.slice(at).match(new RegExp('^' + MONTHS[first] + '\\s+(\\d{1,2})'));
      if (day) return `${m}/${Number(day[1])}`;
      return `${m}월`;
    }
    if (p.notifyDate) {
      const d = parse(p.notifyDate);
      return `${d.getMonth() + 1}/${d.getDate()}`;
    }
    return p.notify || '';
  }

  function plan(s, type) {
    return (s.plans || []).find(p => p.type === type) || null;
  }

  function sortPlans(plans) {
    return plans.slice().sort((a, b) => (ORDER[a.type] ?? 9) - (ORDER[b.type] ?? 9));
  }

  // picks: { schoolId: 'ED' | 'EA' | 'REA' | 'SCEA' | 'ED2' | 'RD' | 'X' }
  // 결과 issues: { level: 'bad' | 'warn', ids: [...], msg }
  function check(schools, picks) {
    const chosen = [];
    for (const s of schools) {
      const t = picks[s.id];
      if (t && t !== 'X' && plan(s, t)) chosen.push({ s, t });
    }
    const issues = [];
    const names = list => list.map(c => c.s.name).join(', ');
    const ids = list => list.map(c => c.s.id);

    const eds = chosen.filter(c => c.t === 'ED');
    if (eds.length > 1) {
      issues.push({ level: 'bad', ids: ids(eds), msg: `ED는 한 곳만 쓸 수 있어요 (${names(eds)})` });
    }

    const res = chosen.filter(c => RESTRICT.includes(c.t));
    if (res.length > 1) {
      issues.push({ level: 'bad', ids: ids(res), msg: `REA와 SCEA는 한 곳만 쓸 수 있어요 (${names(res)})` });
    }

    const ed2s = chosen.filter(c => c.t === 'ED2');
    for (const r of res) {
      const others = chosen.filter(c => {
        if (c === r || !EARLY.includes(c.t) || RESTRICT.includes(c.t)) return false;
        if (c.s.public && c.t === 'EA' && r.s.publicEA !== false) return false;
        return true;
      });
      if (others.length) {
        issues.push({
          level: 'bad',
          ids: [r.s.id, ...ids(others)],
          msg: `${r.s.name} ${r.t}를 쓰면 다른 사립대 얼리는 못 써요 (${names(others)})`,
        });
      }
      if (ed2s.length && r.s.ed2Elsewhere === false) {
        issues.push({
          level: 'bad',
          ids: [r.s.id, ...ids(ed2s)],
          msg: `${r.s.name} ${r.t}는 다른 학교 ED2도 막아요 (${names(ed2s)})`,
        });
      }
    }

    if (ed2s.length > 1) {
      issues.push({ level: 'bad', ids: ids(ed2s), msg: `ED2도 구속이라 한 곳만 쓸 수 있어요 (${names(ed2s)})` });
    }

    for (const c of chosen) {
      if (!BINDING.includes(c.t)) continue;
      const tag = `${c.s.name} ${c.t}`;
      if (c.s.intlAid === 'need-aware') {
        issues.push({ level: 'warn', ids: [c.s.id], msg: `${tag}: 국제학생 need-aware라 재정지원 신청이 합격에 영향을 줄 수 있어요` });
      } else if (c.s.intlAid === 'limited' || c.s.intlAid === 'none') {
        issues.push({ level: 'warn', ids: [c.s.id], msg: `${tag}: 국제학생 재정지원이 거의 없어요` });
      } else if (c.s.meetsNeed === false) {
        issues.push({ level: 'warn', ids: [c.s.id], msg: `${tag}: 필요한 금액을 다 채워 주지 않을 수 있어요` });
      }
    }

    return { chosen, issues };
  }

  // 슬롯: 전략판의 칸과 그 칸에 들어갈 수 있는 방식
  const SLOTS = [
    { key: 'early', title: '11월 얼리', sub: 'ED, REA, SCEA 중 한 곳', types: ['ED', 'REA', 'SCEA'] },
    { key: 'ea', title: '11월 EA', sub: '여러 곳 가능', types: ['EA'] },
    { key: 'ed2', title: '1월 ED2', sub: '얼리 결과 보고, 한 곳', types: ['ED2'] },
    { key: 'rd', title: '정시', sub: '', types: ['RD'] },
  ];

  function slotOf(type) {
    return SLOTS.find(s => s.types.includes(type)) || null;
  }

  // 이 학교를 이 방식으로 넣으면 새로 생기는 'bad' 충돌이 있는지
  function wouldConflict(schools, picks, id, type) {
    const before = check(schools, picks).issues.filter(i => i.level === 'bad' && i.ids.includes(id)).length;
    const next = Object.assign({}, picks, { [id]: type });
    const after = check(schools, next).issues.filter(i => i.level === 'bad' && i.ids.includes(id)).length;
    return after > before || (after > 0 && picks[id] !== type);
  }

  /* ───── 가능성 판정 (규칙 기반, 퍼센트 없음) ───── */

  const TIERS = ['매우 어려움', '어려움', '도전', '적정', '안정'];
  const MUST_TEST = ['required', 'flexible'];

  // 지금 점수 또는 목표 점수
  function satOf(profile) {
    if (!profile) return null;
    const s = profile.useTarget ? profile.target : profile.sat;
    return s && s.rw && s.math ? { rw: s.rw, math: s.math, total: s.rw + s.math } : null;
  }

  function mid(arr) {
    if (!arr) return null;
    if (arr[1] != null) return arr[1];
    if (arr[0] != null && arr[2] != null) return Math.round((arr[0] + arr[2]) / 2);
    return null;
  }

  // 점수를 낼지 말지: key = required | blind | submit | maybe | skip | nodata | noscore
  function submitAdvice(s, st, sat) {
    if (s.testing === 'blind') return { key: 'blind', label: '안 봄' };
    const must = MUST_TEST.includes(s.testing);
    if (!sat) return { key: must ? 'required' : 'noscore', label: must ? '필수' : '점수 없음' };
    const e = st && st.satEBRW;
    const m = st && st.satMath;
    if (!e || !m || e[0] == null || m[0] == null) return { key: must ? 'required' : 'nodata', label: must ? '필수' : '자료 없음' };
    const p25 = e[0] + m[0];
    const p50 = (mid(e) ?? 0) + (mid(m) ?? 0);
    if (must) return { key: 'required', label: '필수', p25, p50 };
    if (sat.total >= p50) return { key: 'submit', label: '내기', p25, p50 };
    if (sat.total >= p25) return { key: 'maybe', label: '애매', p25, p50 };
    return { key: 'skip', label: '안 내기', p25, p50 };
  }

  // 영역별 위치: below | mid | above
  function sectionPos(score, arr) {
    if (!arr || arr[0] == null || arr[2] == null) return null;
    if (score < arr[0]) return 'below';
    if (score >= arr[2]) return 'above';
    return 'mid';
  }

  // 반환: { tier: 0~4 | null, label, reasons: [..] }
  function chance(s, st, profile, planType) {
    const reasons = [];
    if (!st || st.admitRate == null) return { tier: null, label: '자료 없음', reasons: ['합격률 자료 없음'] };
    const r = st.admitRate;
    const base = r >= 50 ? 4 : r >= 30 ? 3 : r >= 15 ? 2 : r >= 8 ? 1 : 0;
    let adj = 0;
    reasons.push(`전체 합격률 ${r}%`);

    const sat = satOf(profile);
    const adv = submitAdvice(s, st, sat);
    const counts = sat && (adv.key === 'required' || adv.key === 'submit');
    if (adv.key === 'blind') {
      reasons.push('SAT는 안 봐요');
    } else if (!sat) {
      reasons.push(MUST_TEST.includes(s.testing) ? 'SAT 필수인데 점수가 아직 없어요' : 'SAT 점수 없이 판단');
    } else if (counts && st.satEBRW && st.satMath) {
      const pe = sectionPos(sat.rw, st.satEBRW);
      const pm = sectionPos(sat.math, st.satMath);
      if (pe === 'below' || pm === 'below') {
        adj -= 1;
        const which = [pe === 'below' ? `RW ${sat.rw} < ${st.satEBRW[0]}` : null, pm === 'below' ? `Math ${sat.math} < ${st.satMath[0]}` : null].filter(Boolean).join(', ');
        reasons.push(`SAT 하위 25%선 아래 (${which})`);
      } else if (pe === 'above' && pm === 'above') {
        adj += 1;
        reasons.push('SAT 두 영역 모두 상위 25%선 이상');
      } else if (pe && pm) {
        reasons.push('SAT 중간 50% 안');
      }
    } else if (adv.key === 'nodata') {
      reasons.push('SAT 통계 자료가 없어 점수는 판단에서 빠져요');
    } else if (sat && !counts) {
      reasons.push('점수를 안 내면 SAT는 판단에서 빠져요');
    }

    if (profile && profile.needAid) {
      if (s.intlAid === 'need-aware') { adj -= 1; reasons.push('국제학생 need-aware인데 재정지원 신청'); }
      else if (s.intlAid === 'limited') { adj -= 1; reasons.push('국제학생 재정지원이 적어 신청자 합격이 더 어려움'); }
      else if (s.intlAid === 'none') reasons.push('합격해도 국제학생 재정지원 없음');
      else if (s.intlAid === 'need-blind') reasons.push('need-blind라 재정지원 신청이 합격에 영향 없음');
    }

    if (planType === 'ED' || planType === 'ED2') {
      if (st.ed && st.ed.rate != null) {
        if (st.ed.rate >= r * 1.5) { adj += 1; reasons.push(`ED 합격률 ${st.ed.rate}% (실제 이점은 이보다 작음)`); }
        else reasons.push(`ED 합격률 ${st.ed.rate}%`);
      }
    } else if (['EA', 'REA', 'SCEA'].includes(planType) && st.ea && st.ea.rate != null) {
      reasons.push(`${planType} 합격률 ${st.ea.rate}%`);
    }

    if (r < 30) reasons.push('국제학생은 보통 전체 합격률보다 낮아요');

    let tier = Math.max(0, Math.min(4, base + adj));
    if (r < 15) tier = Math.min(tier, 2);
    return { tier, label: TIERS[tier], reasons };
  }

  // 리스트 균형: 단계별 개수
  function balance(items) {
    const n = [0, 0, 0, 0, 0];
    let unknown = 0;
    for (const it of items) { if (it.tier == null) unknown++; else n[it.tier]++; }
    return { n, unknown, safe: n[3] + n[4] };
  }

  // 12월 시나리오: 얼리로 고른 학교마다 결과별 다음 수
  function scenarios(schools, picks) {
    const chosen = schools.filter(s => ['ED', 'EA', 'REA', 'SCEA'].includes(picks[s.id]) && plan(s, picks[s.id]));
    const restr = chosen.find(s => RESTRICT.includes(picks[s.id]));
    const ed2Blocked = restr && restr.ed2Elsewhere === false;
    const ed2 = schools.filter(s => picks[s.id] !== 'X' && plan(s, 'ED2'));
    return chosen.map(s => {
      const t = picks[s.id];
      const opts = ed2Blocked ? [] : ed2.filter(x => x.id !== s.id);
      return { school: s, type: t, binding: t === 'ED', ed2: opts, ed2Blocked: !!ed2Blocked };
    });
  }

  /* ───── 글자 수 ───── */
  function chars(str) { return [...String(str || '')].length; }
  function words(str) { const t = String(str || '').trim(); return t ? t.split(/\s+/).length : 0; }

  const api = {
    EARLY, RESTRICT, BINDING, ORDER, SLOTS, TIERS, parse, shifted, dday, md, notifyKo, plan, sortPlans, check, slotOf,
    wouldConflict, satOf, submitAdvice, sectionPos, chance, balance, scenarios, chars, words,
  };
  root.Core = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
