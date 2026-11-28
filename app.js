// 공통: 저장, 라우팅, 도우미, 시트/토스트/백업. 화면은 v-*.js 가 EP.views 에 등록한다.
(() => {
  'use strict';

  const C = window.Core;
  const BASE = window.SCHOOLS || [];
  const KEY = 'early-round-v1';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const TABS = ['schools', 'map', 'board', 'plan', 'apply', 'me'];

  const AID = { 'need-blind': 'need-blind', 'need-aware': 'need-aware', limited: '재정지원 적음', none: '재정지원 없음' };
  const TEST = { required: '필수', optional: '선택', flexible: '필수 (종류 자유)', blind: '안 봄' };

  /* ───── 저장 ───── */
  function blankAct() { return { type: '', position: '', org: '', desc: '', grades: [], timing: '', hrs: 0, wks: 0, college: false, memo: '' }; }
  function blankHonor() { return { title: '', grades: [], level: '', memo: '' }; }
  function blank() {
    return {
      picks: {}, star: {}, todo: {}, memo: {}, custom: [], cal: null, open: {},
      profile: { gpa: null, sat: { rw: null, math: null }, target: { rw: null, math: null }, useTarget: false, ap: {}, needAid: false, majors: [] },
      apply: {
        acts: Array.from({ length: 10 }, blankAct),
        honors: Array.from({ length: 5 }, blankHonor),
        essay: { topic: '', text: '', status: '' },
        addl: { text: '' },
        supp: {},
      },
      plan: { done: {}, events: [], mode: null },
      compare: { ids: [], score: {} },
      summer: {},
      intlOpt: {},
      ucas: [],
    };
  }

  // 저장된 값에 빠진 칸을 기본값으로 채움 (옛 버전 백업도 받기 위해)
  function normalize(v) {
    const b = blank();
    if (!v || typeof v !== 'object') return b;
    const out = Object.assign(b, v);
    out.profile = Object.assign(blank().profile, v.profile || {});
    out.profile.sat = Object.assign({ rw: null, math: null }, out.profile.sat || {});
    out.profile.target = Object.assign({ rw: null, math: null }, out.profile.target || {});
    out.profile.ap = out.profile.ap || {};
    if (!Array.isArray(out.profile.majors)) out.profile.majors = [];
    const a = v.apply || {};
    out.apply = Object.assign(blank().apply, a);
    out.apply.acts = Array.from({ length: 10 }, (_, i) => Object.assign(blankAct(), (a.acts || [])[i] || {}));
    out.apply.honors = Array.from({ length: 5 }, (_, i) => Object.assign(blankHonor(), (a.honors || [])[i] || {}));
    out.apply.essay = Object.assign({ topic: '', text: '', status: '' }, a.essay || {});
    out.apply.addl = Object.assign({ text: '' }, a.addl || {});
    out.apply.supp = a.supp || {};
    out.plan = Object.assign(blank().plan, v.plan || {});
    out.compare = Object.assign(blank().compare, v.compare || {});
    for (const k of ['picks', 'star', 'todo', 'memo', 'open', 'summer', 'intlOpt']) if (!out[k] || typeof out[k] !== 'object') out[k] = {};
    if (!Array.isArray(out.custom)) out.custom = [];
    if (!Array.isArray(out.ucas)) out.ucas = [];
    return out;
  }

  function load() {
    try { return normalize(JSON.parse(localStorage.getItem(KEY))); } catch (e) { return blank(); }
  }
  const st = load();
  function replaceState(v) {
    const n = normalize(v);
    for (const k of Object.keys(st)) delete st[k];
    Object.assign(st, n);
  }
  let saveT;
  function save(now) {
    clearTimeout(saveT);
    const run = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { toast('저장 공간이 부족해요'); } };
    if (now === false) saveT = setTimeout(run, 350); else run();
  }

  /* ───── 학교 도우미 ───── */
  const all = () => BASE.concat(st.custom);
  const byId = id => all().find(s => s.id === id);
  const isStar = s => (s.id in st.star ? st.star[s.id] : !!s.dream);
  const pickOf = s => st.picks[s.id] || null;
  const live = () => all().filter(s => pickOf(s) !== 'X');
  const chosen = () => all().filter(s => pickOf(s) && pickOf(s) !== 'X');
  const due = (s, p) => C.shifted(p && p.deadline, s.own);
  const chanceOf = (s, planType) => C.chance(s, s.stats, st.profile, planType === undefined ? pickOf(s) : planType);

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const chip = (t, extra = '') => `<span class="chip t-${t} ${extra}">${t === 'X' ? '제외' : t === 'RD' ? '정시' : t}</span>`;
  const tierChip = (tier, label) => (tier == null ? '<span class="tier tn">자료 없음</span>' : `<span class="tier t${tier}">${label || C.TIERS[tier]}</span>`);
  const ddTxt = n => (n == null ? '' : n === 0 ? 'D-day' : n > 0 ? `D-${n}` : `D+${-n}`);
  const today = () => new Date();
  const num = n => (n == null ? '' : Number(n).toLocaleString('en-US'));

  function keyPlan(s) {
    const p = pickOf(s);
    if (p && p !== 'X') return C.plan(s, p);
    const plans = C.sortPlans(s.plans || []);
    return plans.find(x => C.EARLY.includes(x.type)) || plans.find(x => x.type === 'ED2') || plans[0] || null;
  }

  /* ───── 라우팅 ───── */
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith('s/')) return { tab: 'schools', id: h.slice(2) };
    if (h === 'cal') return { tab: 'plan', sub: 'due' };
    const [tab, sub] = h.split('/');
    if (TABS.includes(tab)) return { tab, sub: sub || null };
    return { tab: 'schools', id: null };
  }

  const views = {};
  let lastTab = null;
  function render() {
    const r = route();
    const res = C.check(all(), st.picks);
    $$('.tabs a').forEach(a => {
      const on = a.dataset.tab === r.tab;
      a.classList.toggle('on', on);
      a.setAttribute('aria-selected', on);
      const old = a.querySelector('.dot');
      if (old) old.remove();
      if (a.dataset.tab === 'board' && res.issues.some(i => i.level === 'bad')) a.insertAdjacentHTML('beforeend', '<span class="dot"></span>');
    });
    for (const t of TABS) $(`#view-${t}`).hidden = t !== r.tab;
    if (r.tab !== lastTab) { hideTip(); lastTab = r.tab; }
    const v = views[r.tab];
    if (v) v.render(r, res);
  }

  /* ───── 시트, 툴팁, 토스트 ───── */
  function openSheet(title, body, bind) {
    const sh = $('#sheet');
    const b0 = sh.querySelector('.body');
    const keep = !sh.hidden && b0 ? b0.scrollTop : 0;
    sh.innerHTML = `<header><h3>${esc(title)}</h3><button type="button" class="done" data-close>완료</button></header>${body}`;
    sh.hidden = false;
    $('#scrim').hidden = false;
    const b = sh.querySelector('.body');
    if (b) b.scrollTop = keep;
    sh.querySelector('[data-close]').addEventListener('click', closeSheet);
    if (bind) bind(sh);
  }
  function closeSheet() {
    const sh = $('#sheet');
    if (sh.hidden) return;
    sh.hidden = true;
    $('#scrim').hidden = true;
    sh.innerHTML = '';
  }

  function showTip(html, x, y) {
    const t = $('#tip');
    t.innerHTML = html;
    t.hidden = false;
    const w = t.offsetWidth;
    const h = t.offsetHeight;
    const left = Math.min(window.innerWidth - w - 8, Math.max(8, x - w / 2));
    const top = y - h - 14 < 60 ? y + 16 : y - h - 14;
    t.style.left = `${left}px`;
    t.style.top = `${top}px`;
  }
  function hideTip() { $('#tip').hidden = true; }

  let toastT;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(() => { t.hidden = true; }, 1900);
  }

  /* ───── 학교 추가 ───── */
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
      const sync = () => { btn.disabled = !name.value.trim() || !sh.querySelector('.tg.on'); };
      sh.querySelectorAll('.tg').forEach(tg => tg.addEventListener('click', () => {
        tg.classList.toggle('on');
        const inp = sh.querySelector(`[data-date="${tg.dataset.tg}"]`);
        inp.disabled = !tg.classList.contains('on');
        if (!inp.disabled) inp.focus();
        sync();
      }));
      name.addEventListener('input', sync);
      btn.addEventListener('click', () => {
        const plans = $$('.tg.on', sh).map(tg => ({ type: tg.dataset.tg, deadline: sh.querySelector(`[data-date="${tg.dataset.tg}"]`).value || null }));
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

  /* ───── 백업 / 불러오기 ───── */
  function exportJson() {
    const blob = new Blob([JSON.stringify({ app: 'early-round', v: 2, saved: new Date().toISOString(), state: st }, null, 2)], { type: 'application/json' });
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
      let v;
      try { v = JSON.parse(fr.result); } catch (e) { v = null; }
      if (!v || v.app !== 'early-round' || !v.state) { toast('얼리 플랜 파일이 아니에요'); return; }
      if (v.kind === 'seed') {
        // 내 정보 파일: 들어 있는 칸만 채우고 나머지(고른 학교 등)는 그대로
        if (!confirm('내 정보 파일로 프로필, 지원서, 개인 일정을 채울까요?')) return;
        const cur = JSON.parse(JSON.stringify(st));
        const s2 = v.state;
        if (s2.profile) cur.profile = Object.assign(cur.profile, s2.profile);
        if (s2.apply) cur.apply = Object.assign(cur.apply, s2.apply);
        if (s2.plan && s2.plan.events) cur.plan.events = s2.plan.events;
        if (s2.memo) cur.memo = Object.assign(cur.memo, s2.memo);
        replaceState(cur);
      } else {
        if (!confirm('지금 기록을 백업 파일 내용으로 바꿀까요?')) return;
        replaceState(v.state);
      }
      save();
      render();
      toast('불러왔어요');
    };
    fr.readAsText(file);
  }

  /* ───── 공통 이벤트 ───── */
  function bindGlobal() {
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
      if (!t.closest('#tip') && !t.closest('[data-tipkeep]')) hideTip();
      const go = t.closest('[data-go]');
      if (go && !t.closest('button:not([data-go])')) { location.hash = `#s/${encodeURIComponent(go.dataset.go)}`; }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeSheet(); hideTip(); $('#menu').hidden = true; }
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-go][tabindex]')) {
        e.preventDefault();
        location.hash = `#s/${encodeURIComponent(e.target.dataset.go)}`;
      }
    });
    $('#importFile').addEventListener('change', e => {
      const f = e.target.files && e.target.files[0];
      if (f) importJson(f);
      e.target.value = '';
    });
    window.addEventListener('hashchange', () => {
      closeSheet();
      render();
      const r = route();
      if (r.tab !== 'schools' || matchMedia('(max-width: 760px)').matches) window.scrollTo(0, 0);
    });
    window.addEventListener('storage', e => { if (e.key === KEY) { replaceState(load()); render(); } });
    matchMedia('(max-width: 760px)').addEventListener('change', render);
  }

  window.EP = {
    C, st, KEY, AID, TEST, TABS, views,
    $, $$, esc, chip, tierChip, ddTxt, today, num,
    all, byId, isStar, pickOf, live, chosen, due, chanceOf, keyPlan,
    save, render, route, openSheet, closeSheet, showTip, hideTip, toast, replaceState, normalize, blank,
    start() {
      bindGlobal();
      for (const v of Object.values(views)) if (v.bind) v.bind();
      render();
    },
  };
  // 시험용
  window.__ep = { state: () => st, render, check: () => C.check(all(), st.picks) };
})();
