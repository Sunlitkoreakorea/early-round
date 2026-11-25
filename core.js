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

  const api = { EARLY, RESTRICT, BINDING, ORDER, SLOTS, parse, shifted, dday, md, notifyKo, plan, sortPlans, check, slotOf, wouldConflict };
  root.Core = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
