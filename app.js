(() => {
  'use strict';

  const C = window.Core;
  const BASE = window.SCHOOLS || [];
  const CHECKED = window.DATA_CHECKED || '';
  const KEY = 'early-round-v1';
  const $ = (s, el = document) => el.querySelector(s);
  const today = () => new Date();

  const TODOS = [
    ['supp', '보충 에세이'],
    ['aid', '재정 서류'],
    ['rec', '추천서'],
    ['test', '점수 보내기'],
    ['intv', '인터뷰'],
  ];
  const AID = { 'need-blind': 'need-blind', 'need-aware': 'need-aware', limited: '재정지원 제한적', none: '재정지원 없음' };
  const TEST = { required: '필수', optional: '선택', flexible: '유연', blind: '안 봄' };
  const FIELD = {
    plans: '일정', aidDeadlines: '재정 서류 마감', meetsNeed: '전액 충족', intlAid: '재정지원 방식',
    supplements: '보충 에세이', cogsci: '인지과학', interview: '인터뷰', english: '영어 시험',
    testing: '시험', testingNote: '시험', ed2Elsewhere: '다른 학교 ED2', publicEA: '공립 EA',
    commonApp: '커먼앱', aidForms: '재정 서류', notifyDate: '발표일', earlyRule: '얼리 규칙',
  };

  /* 저장 */
  function blank() { return { picks: {}, star: {}, todo: {}, memo: {}, custom: [], cal: null, open: {} }; }
  function load() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY));
      return v && typeof v === 'object' ? Object.assign(blank(), v) : blank();
    } catch (e) { return blank(); }
  }
  let st = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* 용량 초과 등 */ } }

  const all = () => BASE.concat(st.custom);
  const byId = id => all().find(s => s.id === id);
  const isStar = s => (s.id in st.star ? st.star[s.id] : !!s.dream);
  const pickOf = s => st.picks[s.id] || null;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const chip = (t, extra = '') => `<span class="chip t-${t} ${extra}">${t === 'X' ? '제외' : t === 'RD' ? '정시' : t}</span>`;
  const ddTxt = n => (n == null ? '' : n === 0 ? 'D-day' : n > 0 ? `D-${n}` : `D+${-n}`);
  const due = (s, p) => C.shifted(p.deadline, s.own);

  function result() { return C.check(all(), st.picks); }
  function issuesFor(id, res) { return res.issues.filter(i => i.ids.includes(id)); }

  // 목록에 보여줄 마감: 고른 방식, 없으면 가장 이른 얼리, 없으면 정시
  function keyPlan(s) {
    const p = pickOf(s);
    if (p && p !== 'X') return C.plan(s, p);
    const plans = C.sortPlans(s.plans || []);
    return plans.find(x => C.EARLY.includes(x.type)) || plans.find(x => x.type === 'ED2') || plans[0] || null;
  }

  /* 라우팅 */
  function route() {
    const h = location.hash.slice(1);
    if (h === 'board') return { tab: 'board' };
    if (h === 'cal') return { tab: 'cal' };
    if (h.startsWith('s/')) return { tab: 'schools', id: decodeURIComponent(h.slice(2)) };
    return { tab: 'schools', id: null };
  }

  function render() {
    const r = route();
    const res = result();
    document.querySelectorAll('.tabs a').forEach(a => {
      a.classList.toggle('on', a.dataset.tab === r.tab);
      a.setAttribute('aria-selected', a.dataset.tab === r.tab);
      const old = a.querySelector('.dot');
      if (old) old.remove();
      if (a.dataset.tab === 'board' && res.issues.some(i => i.level === 'bad')) a.insertAdjacentHTML('beforeend', '<span class="dot"></span>');
    });
    $('#view-schools').hidden = r.tab !== 'schools';
    $('#view-board').hidden = r.tab !== 'board';
    $('#view-cal').hidden = r.tab !== 'cal';
    if (r.tab === 'schools') {
      let id = r.id && byId(r.id) ? r.id : null;
      const narrow = matchMedia('(max-width: 760px)').matches;
      if (!id && !narrow) id = (all().find(isStar) || all()[0] || {}).id || null;
      renderList(id, res);
      renderDetail(id, res);
      $('#view-schools').classList.toggle('open', !!(r.id && byId(r.id)));
    } else if (r.tab === 'board') {
      renderBoard(res);
    } else {
      renderCal();
    }
  }

  /* 학교 목록 */
  function renderList(selId, res) {
    const groups = [
      ['early', '11월 얼리', s => ['ED', 'REA', 'SCEA', 'EA'].includes(pickOf(s))],
      ['ed2', '1월 ED2', s => pickOf(s) === 'ED2'],
      ['rd', '정시', s => pickOf(s) === 'RD'],
      ['none', '미정', s => !pickOf(s) && s.group !== 'explore'],
      ['explore', '탐색 후보', s => !pickOf(s) && s.group === 'explore'],
      ['x', '제외', s => pickOf(s) === 'X'],
    ];
    const bad = new Set(res.issues.filter(i => i.level === 'bad').flatMap(i => i.ids));
    const order = (a, b) => (isStar(b) - isStar(a));
    let html = '';
    for (const [key, label, fn] of groups) {
      const items = all().filter(fn).sort(order);
      if (!items.length) continue;
      const foldable = key === 'x';
      const open = !foldable || st.open.x || items.some(s => s.id === selId);
      html += `<div class="grp${foldable ? ' fold' : ''}${foldable && open ? ' open' : ''}" ${foldable ? 'data-fold="x"' : ''}>${label} ${items.length}</div>`;
      if (!open) continue;
      for (const s of items) html += rowHtml(s, s.id === selId, bad.has(s.id));
    }
    $('#list').innerHTML = html;
  }

  function rowHtml(s, on, bad) {
    const p = pickOf(s);
    let chips;
    if (p && p !== 'X') chips = chip(p);
    else chips = C.sortPlans(s.plans || []).filter(x => x.type !== 'RD').map(x => chip(x.type, 'ghost')).join('') || chip('RD', 'ghost');
    const kp = keyPlan(s);
    const n = kp && p !== 'X' ? C.dday(due(s, kp), today()) : null;
    const done = TODOS.filter(([k]) => st.todo[s.id] && st.todo[s.id][k]).length;
    return `<a class="row${on ? ' on' : ''}${p === 'X' ? ' x' : ''}" href="#s/${encodeURIComponent(s.id)}">
      <span class="star">${isStar(s) ? '★' : ''}</span>
      <span class="nm">${esc(s.name)}${bad ? '<span class="bad" title="충돌"></span>' : ''}</span>
      <span class="chips">${chips}</span>
      <span class="dd">${done ? `<span class="prog">${done}/${TODOS.length}</span>` : ''}${ddTxt(n)}</span>
    </a>`;
  }

  /* 학교 상세 */
  function renderDetail(id, res) {
    const el = $('#detail');
    const s = id && byId(id);
    if (!s) { el.innerHTML = ''; return; }
    const p = pickOf(s);
    const plans = C.sortPlans(s.plans || []);
    const segs = plans.map(x => `<button type="button" data-pick="${x.type}" class="${p === x.type ? 'on' : ''}" aria-pressed="${p === x.type}">${chip(x.type)}<span>${C.md(due(s, x))}</span></button>`).join('')
      + `<button type="button" class="x${p === 'X' ? ' on' : ''}" data-pick="X" aria-pressed="${p === 'X'}">제외</button>`;
    const iss = issuesFor(s.id, res);

    const sched = plans.map(x => {
      const d = due(s, x);
      return `<tr class="${p === x.type ? 'mine' : ''}">
        <td>${chip(x.type)}</td>
        <td><div class="big">${d ? `${d.getMonth() + 1}월 ${d.getDate()}일` : '미확인'}</div><div class="sub">${x.notify || x.notifyDate ? `발표 ${esc(C.notifyKo(x))}` : ''}</div></td>
        <td class="dd">${ddTxt(C.dday(d, today()))}</td>
      </tr>`;
    }).join('');

    el.innerHTML = `
      <div class="dhead">
        <div class="backWrap"><a class="back" href="#">‹ 목록</a></div>
        <div class="title">
          <h2>${esc(s.name)} <button type="button" class="starBtn${isStar(s) ? ' on' : ''}" data-star aria-label="드림 표시">${isStar(s) ? '★' : '☆'}</button></h2>
          ${s.full ? `<p class="full">${esc(s.full)}</p>` : ''}
        </div>
        ${s.url ? `<a class="ext" href="${esc(s.url)}" target="_blank" rel="noopener">입학처 ↗</a>` : ''}
      </div>
      <div class="seg" role="group" aria-label="지원 방식">${segs}</div>
      ${iss.length ? `<ul class="issues">${iss.map(i => `<li class="${i.level}">${esc(i.msg)}</li>`).join('')}</ul>` : ''}

      <section class="sec">
        <h3>일정 ${s.own ? '' : `<span class="fine">2026-27 날짜를 1년 뒤로 옮김</span>`}</h3>
        <table class="sched">${sched}</table>
      </section>

      ${s.own ? '' : rulesHtml(s)}
      ${s.own ? '' : aidHtml(s)}
      ${s.own ? '' : factsHtml(s)}

      <section class="sec">
        <h3>할 일</h3>
        <div class="todos">${TODOS.map(([k, label]) => {
          const on = !!(st.todo[s.id] && st.todo[s.id][k]);
          return `<button type="button" class="sw${on ? ' on' : ''}" data-todo="${k}" role="switch" aria-checked="${on}"><span>${label}</span><span class="knob"></span></button>`;
        }).join('')}</div>
      </section>

      <section class="sec">
        <h3>메모</h3>
        <textarea class="memo" data-memo placeholder="">${esc(st.memo[s.id] || '')}</textarea>
      </section>

      ${s.own ? `<button type="button" class="del" data-del>이 학교 지우기</button>` : srcHtml(s)}
    `;
  }

  function rulesHtml(s) {
    const types = (s.plans || []).map(x => x.type);
    const facts = [];
    const yn = (ok, yes, no) => facts.push(`<span class="fact ${ok ? 'yes' : 'no'}">${ok ? '○' : '✕'} ${ok ? yes : no}</span>`);
    if (types.includes('REA') || types.includes('SCEA')) {
      facts.push(`<span class="fact no">✕ 다른 사립대 얼리</span>`);
      if (s.publicEA != null) yn(s.publicEA, '공립대 EA', '공립대 EA');
      if (s.ed2Elsewhere != null) yn(s.ed2Elsewhere, '다른 학교 ED2', '다른 학교 ED2');
    }
    if (types.includes('ED')) facts.push(`<span class="fact"><b>ED</b> 붙으면 꼭 등록</span>`);
    if (types.includes('ED2')) facts.push(`<span class="fact"><b>ED2</b> 1월, 붙으면 꼭 등록</span>`);
    if (types.includes('EA')) facts.push(`<span class="fact"><b>EA</b> 구속 없음</span>`);
    if (!types.some(t => t !== 'RD')) facts.push(`<span class="fact">얼리 없음</span>`);
    if (s.commonApp === false) facts.push(`<span class="fact no">커먼앱 아님</span>`);
    return `<section class="sec"><h3>얼리 규칙</h3><div class="facts">${facts.join('')}</div>${s.earlyRule ? `<p class="orig">${esc(s.earlyRule)}</p>` : ''}</section>`;
  }

  function aidHtml(s) {
    const f = [];
    if (s.intlAid) f.push(`<span class="fact ${s.intlAid === 'need-blind' ? 'yes' : s.intlAid === 'need-aware' ? '' : 'no'}"><b>${esc(AID[s.intlAid] || s.intlAid)}</b></span>`);
    if (s.meetsNeed === true) f.push(`<span class="fact yes">필요 금액 전액 충족</span>`);
    if (s.meetsNeed === false) f.push(`<span class="fact no">전액 충족 아님</span>`);
    if (s.aidAfter) f.push(`<span class="fact">서류는 합격 후 제출</span>`);
    const ad = s.aidDeadlines || {};
    const dl = [['early', '얼리'], ['ed2', 'ED2'], ['rd', '정시']]
      .filter(([k]) => ad[k])
      .map(([k, label]) => `<span class="fact">${label} 서류 <b>${C.md(C.shifted(ad[k]))}</b></span>`).join('');
    const forms = s.aidForms && s.aidForms.length ? `<p class="orig">${esc(s.aidForms.join(' / '))}</p>` : '';
    return `<section class="sec"><h3>재정지원 <span class="fine">국제학생</span></h3><div class="facts">${f.join('')}${dl}</div>${forms}</section>`;
  }

  function factsHtml(s) {
    const rows = [];
    const add = (k, lead, v) => { if (lead || v) rows.push(`<dt>${k}</dt><dd>${lead ? `<span class="lead">${esc(lead)}</span>` : ''}${esc(v || '')}</dd>`); };
    add('시험', TEST[s.testing] || s.testing, s.testingNote);
    add('영어', '', s.english);
    add('보충 에세이', '', s.supplements);
    add('인지과학', '', s.cogsci);
    add('인터뷰', '', s.interview);
    if (s.nextCycle) add('내년 변경', '', s.nextCycle);
    return rows.length ? `<section class="sec"><dl class="dl">${rows.join('')}</dl></section>` : '';
  }

  function srcHtml(s) {
    const links = (s.sources || []).map((u, i) => `<a href="${esc(u)}" target="_blank" rel="noopener">출처 ${i + 1}</a>`).join('');
    const uns = (s.uncertain || []).map(u => {
      const k = String(u).split(':')[0].trim();
      return FIELD[k] || k;
    });
    const uniq = [...new Set(uns)];
    return `<div class="src"><span>확인 ${esc(s.checked || CHECKED)}</span>${links}${uniq.length ? `<span class="unsure">공식 페이지로 확정 못 한 것: ${esc(uniq.join(', '))}</span>` : ''}</div>`;
  }

  /* 전략판 */
  function renderBoard(res) {
    const bad = res.issues.filter(i => i.level === 'bad');
    const badIds = new Set(bad.flatMap(i => i.ids));
    let verdict;
    if (!res.chosen.length) verdict = `<div class="verdict none"><span class="ic"></span>아직 고른 학교가 없어요</div>`;
    else if (bad.length) verdict = `<div class="verdict bad"><span class="ic">✕</span>같이 못 쓰는 조합이 있어요</div>`;
    else verdict = `<div class="verdict ok"><span class="ic">✓</span>이 조합은 가능해요</div>`;

    const slots = C.SLOTS.map(sl => {
      const items = res.chosen.filter(c => sl.types.includes(c.t));
      const cards = items.map(({ s, t }) => {
        const pl = C.plan(s, t);
        const d = due(s, pl);
        return `<div class="card${badIds.has(s.id) ? ' bad' : ''}" data-go="${esc(s.id)}" role="link" tabindex="0">
          <div class="top">${chip(t)}${isStar(s) ? '<span class="star" style="color:var(--accent);font-size:12px">★</span>' : ''}</div>
          <div class="nm">${esc(s.name)}</div>
          <div class="meta"><b>${C.md(d)}</b><span>${ddTxt(C.dday(d, today()))}</span>${s.intlAid ? `<span>${esc(AID[s.intlAid] || s.intlAid)}</span>` : ''}</div>
          <button type="button" class="rm" data-rm="${esc(s.id)}" aria-label="빼기">×</button>
        </div>`;
      }).join('');
      return `<section class="slot">
        <header><h3>${sl.title}</h3>${sl.sub ? `<span>${sl.sub}</span>` : ''}</header>
        <div class="cards">${cards}<button type="button" class="addCard" data-slot="${sl.key}">+ 추가</button></div>
      </section>`;
    }).join('');

    $('#view-board').innerHTML = `${verdict}${res.issues.length ? `<ul class="issues">${res.issues.map(i => `<li class="${i.level}">${esc(i.msg)}</li>`).join('')}</ul>` : ''}${slots}`;
  }

  function openPicker(key) {
    const sl = C.SLOTS.find(x => x.key === key);
    const draw = () => {
      const rows = [];
      for (const s of all()) {
        for (const t of sl.types) {
          const pl = C.plan(s, t);
          if (!pl) continue;
          const on = st.picks[s.id] === t;
          const clash = !on && C.wouldConflict(all(), st.picks, s.id, t);
          const other = !on && st.picks[s.id] && st.picks[s.id] !== 'X' ? st.picks[s.id] : null;
          rows.push({ s, t, pl, on, clash, other });
        }
      }
      rows.sort((a, b) => (b.on - a.on) || (isStar(b.s) - isStar(a.s)) || (due(a.s, a.pl) - due(b.s, b.pl)));
      const body = rows.length ? rows.map(r => `<button type="button" class="pick${r.on ? ' on' : ''}" data-id="${esc(r.s.id)}" data-t="${r.t}">
          <span class="box">${r.on ? '✓' : ''}</span>
          <span><span class="nm">${isStar(r.s) ? '<span style="color:var(--accent)">★</span> ' : ''}${esc(r.s.name)}</span>
            <span class="sub"> ${C.md(due(r.s, r.pl))}${r.other ? `, 지금 ${r.other === 'RD' ? '정시' : r.other}` : ''}</span></span>
          ${r.clash ? '<span class="warnTag">충돌</span>' : '<span></span>'}
          ${chip(r.t)}
        </button>`).join('') : '<p class="empty">이 방식이 있는 학교가 없어요</p>';
      openSheet(`${sl.title} 고르기`, `<div class="body">${body}</div>`, sheet => {
        sheet.querySelectorAll('.pick').forEach(b => b.addEventListener('click', () => {
          const id = b.dataset.id;
          const t = b.dataset.t;
          if (st.picks[id] === t) delete st.picks[id];
          else st.picks[id] = t;
          save();
          draw();
          render();
        }));
      });
    };
    draw();
  }

  /* 달력 */
  function renderCal() {
    const anyPick = Object.values(st.picks).some(v => v && v !== 'X');
    const mode = st.cal || (anyPick ? 'mine' : 'all');
    const evs = [];
    const roundKey = t => (C.EARLY.includes(t) ? 'early' : t === 'ED2' ? 'ed2' : 'rd');
    for (const s of all()) {
      const pk = pickOf(s);
      if (pk === 'X') continue;
      if (mode === 'mine' && !pk) continue;
      for (const pl of s.plans || []) {
        if (mode === 'mine' && pl.type !== pk) continue;
        const mine = pl.type === pk;
        const d = due(s, pl);
        const ad = s.aidDeadlines && s.aidDeadlines[roundKey(pl.type)];
        const aidD = ad ? C.shifted(ad, s.own) : null;
        const same = aidD && d && +aidD === +d;
        if (d) evs.push({ d, s, t: pl.type, k: 'due', label: same ? '마감, 재정 서류' : '마감', mine });
        if (aidD && !same) evs.push({ d: aidD, s, t: pl.type, k: 'aid', label: '재정 서류', mine });
        if (pl.notifyDate) evs.push({ d: C.shifted(pl.notifyDate, s.own), s, t: pl.type, k: 'out', label: `발표${/mid|early|late|end/i.test(pl.notify || '') ? ' 무렵' : ''}`, mine });
      }
    }
    evs.sort((a, b) => a.d - b.d || (a.k === 'due' ? -1 : 1));
    let html = `<div class="calbar">
      <div class="mini" role="group"><button type="button" data-cal="mine" class="${mode === 'mine' ? 'on' : ''}">내 계획</button><button type="button" data-cal="all" class="${mode === 'all' ? 'on' : ''}">전체</button></div>
      <div class="legend"><span><i class="k-due"></i>마감</span><span><i class="k-aid"></i>재정 서류</span><span><i class="k-out"></i>발표</span></div>
    </div>`;
    if (!evs.length) {
      html += `<p class="empty">${mode === 'mine' ? '학교에서 지원 방식을 고르면 여기에 떠요' : '일정이 없어요'}</p>`;
    } else {
      let month = '';
      let lastDay = '';
      for (const e of evs) {
        const m = `${e.d.getFullYear()}년 ${e.d.getMonth() + 1}월`;
        if (m !== month) { html += `${month ? '</section>' : ''}<section class="month"><h3>${m}</h3>`; month = m; lastDay = ''; }
        const dayKey = String(e.d.getDate());
        html += `<div class="ev${mode === 'all' && !e.mine && anyPick ? ' dim' : ''}" data-go="${esc(e.s.id)}">
          <span class="day${dayKey === lastDay ? ' same' : ''}">${dayKey}</span>
          <i class="k-${e.k}"></i>
          <span class="what"><b>${esc(e.s.name)}</b><span>${e.label}</span></span>
          ${chip(e.t)}
          <span class="dd">${ddTxt(C.dday(e.d, today()))}</span>
        </div>`;
        lastDay = dayKey;
      }
      html += '</section>';
    }
    $('#view-cal').innerHTML = html;
  }

  /* 시트 */
  function openSheet(title, body, bind) {
    const sh = $('#sheet');
    const keepScroll = !sh.hidden && sh.querySelector('.body') ? sh.querySelector('.body').scrollTop : 0;
    sh.innerHTML = `<header><h3>${esc(title)}</h3><button type="button" class="done" data-close>완료</button></header>${body}`;
    sh.hidden = false;
    $('#scrim').hidden = false;
    const b = sh.querySelector('.body');
    if (b) b.scrollTop = keepScroll;
    sh.querySelector('[data-close]').addEventListener('click', closeSheet);
    if (bind) bind(sh);
  }
  function closeSheet() { $('#sheet').hidden = true; $('#scrim').hidden = true; $('#sheet').innerHTML = ''; }

  function openAdd() {
    const types = ['ED', 'EA', 'REA', 'SCEA', 'ED2', 'RD'];
    openSheet('학교 추가', `<div class="body"><div class="form">
      <label class="lbl" for="addName">이름</label>
      <input type="text" id="addName" autocomplete="off">
      <span class="lbl">방식과 마감</span>
      ${types.map(t => `<div class="prow"><button type="button" class="tg" data-tg="${t}">${t === 'RD' ? '정시' : t}</button><input type="date" data-date="${t}" disabled aria-label="${t} 마감"></div>`).join('')}
      <button type="button" class="save" id="addSave" disabled>추가</button>
    </div></div>`, sh => {
      const name = sh.querySelector('#addName');
      const btn = sh.querySelector('#addSave');
      const sync = () => {
        const any = [...sh.querySelectorAll('.tg.on')].length;
        btn.disabled = !name.value.trim() || !any;
      };
      sh.querySelectorAll('.tg').forEach(tg => tg.addEventListener('click', () => {
        tg.classList.toggle('on');
        const inp = sh.querySelector(`[data-date="${tg.dataset.tg}"]`);
        inp.disabled = !tg.classList.contains('on');
        if (!inp.disabled) inp.focus();
        sync();
      }));
      name.addEventListener('input', sync);
      btn.addEventListener('click', () => {
        const plans = [...sh.querySelectorAll('.tg.on')].map(tg => ({ type: tg.dataset.tg, deadline: sh.querySelector(`[data-date="${tg.dataset.tg}"]`).value || null }));
        const s = { id: 'c' + Date.now().toString(36), name: name.value.trim(), own: true, plans };
        st.custom.push(s);
        save();
        closeSheet();
        location.hash = `#s/${s.id}`;
        toast('추가했어요');
      });
      setTimeout(() => name.focus(), 30);
    });
  }

  /* 백업 */
  function exportJson() {
    const blob = new Blob([JSON.stringify({ app: 'early-round', v: 1, saved: new Date().toISOString(), state: st }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    const d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = `early-plan-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast('백업 파일을 저장했어요');
  }

  function importJson(file) {
    const fr = new FileReader();
    fr.onload = () => {
      try {
        const v = JSON.parse(fr.result);
        if (!v || v.app !== 'early-round' || !v.state) throw new Error('형식');
        if (!confirm('지금 기록을 백업 파일 내용으로 바꿀까요?')) return;
        st = Object.assign(blank(), v.state);
        save();
        render();
        toast('불러왔어요');
      } catch (e) {
        toast('얼리 플랜 백업 파일이 아니에요');
      }
    };
    fr.readAsText(file);
  }

  let toastT;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(() => { t.hidden = true; }, 1800);
  }

  /* 이벤트 */
  document.addEventListener('click', e => {
    const t = e.target;
    const menu = $('#menu');
    if (t.closest('#moreBtn')) {
      menu.hidden = !menu.hidden;
      $('#moreBtn').setAttribute('aria-expanded', !menu.hidden);
      return;
    }
    if (!t.closest('.menu')) menu.hidden = true;

    const act = t.closest('[data-act]');
    if (act) {
      menu.hidden = true;
      if (act.dataset.act === 'add') openAdd();
      if (act.dataset.act === 'export') exportJson();
      if (act.dataset.act === 'import') $('#importFile').click();
      return;
    }

    if (t.closest('#scrim')) { closeSheet(); return; }

    const fold = t.closest('[data-fold]');
    if (fold) { st.open.x = !st.open.x; save(); render(); return; }

    const r = route();
    const s = r.tab === 'schools' ? byId(r.id) || byId(($('.row.on') || {}).getAttribute?.('href')?.slice(3) || '') : null;

    const pk = t.closest('[data-pick]');
    if (pk && s) {
      const v = pk.dataset.pick;
      if (st.picks[s.id] === v) delete st.picks[s.id];
      else st.picks[s.id] = v;
      save();
      render();
      return;
    }

    if (t.closest('[data-star]') && s) {
      st.star[s.id] = !isStar(s);
      save();
      render();
      return;
    }

    const td = t.closest('[data-todo]');
    if (td && s) {
      st.todo[s.id] = st.todo[s.id] || {};
      st.todo[s.id][td.dataset.todo] = !st.todo[s.id][td.dataset.todo];
      save();
      render();
      return;
    }

    if (t.closest('[data-del]') && s && s.own) {
      if (!confirm(`${s.name}을(를) 지울까요?`)) return;
      st.custom = st.custom.filter(x => x.id !== s.id);
      delete st.picks[s.id]; delete st.todo[s.id]; delete st.memo[s.id]; delete st.star[s.id];
      save();
      location.hash = '#';
      render();
      return;
    }

    const rm = t.closest('[data-rm]');
    if (rm) { delete st.picks[rm.dataset.rm]; save(); render(); return; }

    const slot = t.closest('[data-slot]');
    if (slot) { openPicker(slot.dataset.slot); return; }

    const cal = t.closest('[data-cal]');
    if (cal) { st.cal = cal.dataset.cal; save(); render(); return; }

    const go = t.closest('[data-go]');
    if (go) { location.hash = `#s/${encodeURIComponent(go.dataset.go)}`; }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSheet(); $('#menu').hidden = true; }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.card[data-go]')) {
      e.preventDefault();
      location.hash = `#s/${encodeURIComponent(e.target.dataset.go)}`;
    }
  });

  let memoT;
  document.addEventListener('input', e => {
    if (!e.target.matches('[data-memo]')) return;
    const r = route();
    const s = byId(r.id) || byId(($('.row.on') || {}).getAttribute?.('href')?.slice(3) || '');
    if (!s) return;
    st.memo[s.id] = e.target.value;
    clearTimeout(memoT);
    memoT = setTimeout(save, 300);
  });

  $('#importFile').addEventListener('change', e => {
    const f = e.target.files && e.target.files[0];
    if (f) importJson(f);
    e.target.value = '';
  });

  window.addEventListener('hashchange', () => {
    closeSheet();
    render();
    if (route().tab === 'schools' && matchMedia('(max-width: 760px)').matches) window.scrollTo(0, 0);
  });
  window.addEventListener('storage', e => { if (e.key === KEY) { st = load(); render(); } });
  matchMedia('(max-width: 760px)').addEventListener('change', render);

  render();

  // 시험용
  window.__ep = { state: () => st, render, check: result };
})();
