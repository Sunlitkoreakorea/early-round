// 일정 탭: 마감 달력 + 지금부터 지원까지 로드맵
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, esc, chip, ddTxt } = E;
  const KIND = { test: '시험', reg: '접수 마감', ap: 'AP', app: '원서', todo: '할 일', mine: '내 일정' };

  function dueHtml() {
    const anyPick = Object.values(st.picks).some(v => v && v !== 'X');
    const mode = st.cal || (anyPick ? 'mine' : 'all');
    const evs = [];
    const roundKey = t => (C.EARLY.includes(t) ? 'early' : t === 'ED2' ? 'ed2' : 'rd');
    for (const s of E.all()) {
      const pk = E.pickOf(s);
      if (pk === 'X') continue;
      if (mode === 'mine' && !pk) continue;
      for (const pl of s.plans || []) {
        if (mode === 'mine' && pl.type !== pk) continue;
        const mine = pl.type === pk;
        const d = E.due(s, pl);
        const ad = s.aidDeadlines && s.aidDeadlines[roundKey(pl.type)];
        const aidD = ad ? C.shifted(ad, s.own) : null;
        const same = aidD && d && +aidD === +d;
        if (d) evs.push({ d, s, t: pl.type, k: 'due', label: same ? '마감, 재정 서류' : '마감', mine });
        if (aidD && !same) evs.push({ d: aidD, s, t: pl.type, k: 'aid', label: '재정 서류', mine });
        if (pl.notifyDate) evs.push({ d: C.shifted(pl.notifyDate, s.own), s, t: pl.type, k: 'out', label: `발표${/mid|early|late|end/i.test(pl.notify || '') ? ' 무렵' : ''}`, mine });
      }
      const iv = s.req && s.req.interviewDeadline;
      if (iv && (mode === 'all' || pk)) evs.push({ d: C.shifted(iv), s, t: pk || 'RD', k: 'aid', label: '인터뷰 신청 마감', mine: !!pk });
    }
    evs.sort((a, b) => a.d - b.d || (a.k === 'due' ? -1 : 1));
    let html = `<div class="calbar">
      <div class="mini" role="group"><button type="button" data-cal="mine" class="${mode === 'mine' ? 'on' : ''}">내 계획</button><button type="button" data-cal="all" class="${mode === 'all' ? 'on' : ''}">전체</button></div>
      <div class="legend"><span><i class="k-due"></i>마감</span><span><i class="k-aid"></i>서류, 인터뷰</span><span><i class="k-out"></i>발표</span></div>
    </div>`;
    if (!evs.length) return html + `<p class="empty">${mode === 'mine' ? '학교에서 지원 방식을 고르면 여기에 떠요' : '일정이 없어요'}</p>`;
    let month = '';
    let lastDay = '';
    for (const e of evs) {
      const m = `${e.d.getFullYear()}년 ${e.d.getMonth() + 1}월`;
      if (m !== month) { html += `${month ? '</section>' : ''}<section class="month"><h3>${m}</h3>`; month = m; lastDay = ''; }
      const dayKey = String(e.d.getDate());
      html += `<div class="ev${mode === 'all' && !e.mine && anyPick ? ' dim' : ''}" data-go="${esc(e.s.id)}">
        <span class="day${dayKey === lastDay ? ' same' : ''}">${dayKey}</span><i class="k-${e.k}"></i>
        <span class="what"><b>${esc(e.s.name)}</b><span>${e.label}</span></span>${chip(e.t)}
        <span class="dd">${ddTxt(C.dday(e.d, E.today()))}</span></div>`;
      lastDay = dayKey;
    }
    return html + '</section>';
  }

  function roadHtml() {
    const now = E.today();
    const apPlan = Object.entries(st.profile.ap || {}).filter(([, v]) => v && v.plan).map(([k]) => k);
    const items = [];
    for (const it of window.TIMELINE || []) {
      if (it.kind === 'ap' && apPlan.length && !apPlan.includes(it.ap)) continue;
      const month = it.month || it.date.slice(0, 7);
      items.push(Object.assign({ month, sort: it.date || `${it.month}-99` }, it));
    }
    for (const ev of st.plan.events || []) {
      if (!ev || !ev.date) continue;
      items.push({ id: ev.id, date: ev.date, month: ev.date.slice(0, 7), sort: ev.date, kind: 'mine', title: ev.title, own: true });
    }
    items.sort((a, b) => (a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0));
    const curMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const showPast = !!st.open.pastRoad;
    let html = `<div class="calbar"><div class="legend">
      <span><i class="k-test"></i>시험</span><span><i class="k-reg"></i>접수 마감</span><span><i class="k-app"></i>원서</span><span><i class="k-todo"></i>추천 시기</span><span><i class="k-mine"></i>내 일정</span>
      </div><button type="button" class="ghostBtn" data-add-ev>+ 내 일정</button></div>`;
    if (!apPlan.length) html += '<p class="fine apNote">AP는 전 과목 날짜가 보여요. 나 탭에서 볼 과목을 고르면 그것만 남아요</p>';
    let month = '';
    let hidden = 0;
    for (const it of items) {
      if (!showPast && it.month < curMonth) { hidden++; continue; }
      if (it.month !== month) {
        const [y, m] = it.month.split('-');
        html += `${month ? '</section>' : ''}<section class="month"><h3>${y}년 ${Number(m)}월</h3>`;
        month = it.month;
      }
      const done = !!st.plan.done[it.id];
      const d = it.date ? C.parse(it.date) : null;
      const n = d ? C.dday(d, now) : null;
      html += `<div class="road${done ? ' done' : ''}">
        <button type="button" class="ck${done ? ' on' : ''}" data-done="${esc(it.id)}" aria-label="완료">${done ? '✓' : ''}</button>
        <span class="day">${d ? d.getDate() : ''}</span><i class="k-${it.kind}"></i>
        <span class="what"><b>${esc(it.title)}</b>${it.note ? `<span>${esc(it.note)}</span>` : ''}<span class="kind">${KIND[it.kind] || ''}</span></span>
        <span class="dd">${n != null && n >= 0 ? ddTxt(n) : ''}</span>
        ${it.own ? `<button type="button" class="rm" data-del-ev="${esc(it.id)}" aria-label="지우기">×</button>` : it.src ? `<a class="srcA" href="${esc(it.src)}" target="_blank" rel="noopener" aria-label="출처">↗</a>` : '<span></span>'}
      </div>`;
    }
    if (month) html += '</section>';
    if (hidden) html += `<button type="button" class="ghostBtn past" data-past>지난 항목 ${hidden}개 보기</button>`;
    else if (showPast) html += '<button type="button" class="ghostBtn past" data-past>지난 항목 숨기기</button>';
    return html;
  }

  function openAddEvent() {
    E.openSheet('내 일정 추가', `<div class="body"><div class="form">
      <label class="lbl" for="evTitle">이름</label><input type="text" id="evTitle" autocomplete="off">
      <label class="lbl" for="evDate">날짜</label><input type="date" id="evDate">
      <button type="button" class="save" id="evSave" disabled>추가</button></div></div>`, sh => {
      const ti = sh.querySelector('#evTitle');
      const da = sh.querySelector('#evDate');
      const btn = sh.querySelector('#evSave');
      const sync = () => { btn.disabled = !ti.value.trim() || !da.value; };
      ti.addEventListener('input', sync);
      da.addEventListener('input', sync);
      btn.addEventListener('click', () => {
        st.plan.events.push({ id: 'e' + Date.now().toString(36), date: da.value, title: ti.value.trim() });
        E.save(); E.closeSheet(); E.render();
      });
      setTimeout(() => ti.focus(), 30);
    });
  }

  E.views.plan = {
    render(r) {
      const mode = r.sub === 'due' || r.sub === 'road' ? r.sub : (st.plan.mode || 'road');
      $('#view-plan').innerHTML = `<div class="planTabs mini" role="group">
        <button type="button" data-pmode="road" class="${mode === 'road' ? 'on' : ''}">로드맵</button>
        <button type="button" data-pmode="due" class="${mode === 'due' ? 'on' : ''}">학교 마감</button>
      </div>${mode === 'road' ? roadHtml() : dueHtml()}`;
    },
    bind() {
      $('#view-plan').addEventListener('click', e => {
        const t = e.target;
        const pm = t.closest('[data-pmode]');
        if (pm) { st.plan.mode = pm.dataset.pmode; E.save(); location.hash = `#plan/${pm.dataset.pmode}`; return; }
        const cal = t.closest('[data-cal]');
        if (cal) { st.cal = cal.dataset.cal; E.save(); E.render(); return; }
        const dn = t.closest('[data-done]');
        if (dn) { const id = dn.dataset.done; if (st.plan.done[id]) delete st.plan.done[id]; else st.plan.done[id] = true; E.save(); E.render(); return; }
        if (t.closest('[data-add-ev]')) { openAddEvent(); return; }
        const de = t.closest('[data-del-ev]');
        if (de) { st.plan.events = st.plan.events.filter(x => x.id !== de.dataset.delEv); E.save(); E.render(); return; }
        if (t.closest('[data-past]')) { st.open.pastRoad = !st.open.pastRoad; E.save(); E.render(); }
      });
    },
  };
})();
