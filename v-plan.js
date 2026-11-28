// 일정 탭: 마감 달력 + 지금부터 지원까지 로드맵
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, esc, chip, ddTxt } = E;
  const KIND = { test: '시험', reg: '접수 마감', ap: 'AP', app: '원서', todo: '할 일', mine: '내 일정', sum: '여름 프로그램' };
  const SUM_ST = [['like', '관심'], ['applied', '지원함'], ['in', '합격'], ['out', '불합격']];

  // 가을 SAT 가 고른 얼리 학교에 들어가는지 한 줄로
  function satEarlyNote(it) {
    if (it.kind !== 'test' || !it.date || it.date < '2027-08-01' || it.date > '2027-12-31') return '';
    const d = C.parse(it.date);
    const early = E.all().filter(s => ['ED', 'EA', 'REA', 'SCEA'].includes(E.pickOf(s)) && s.policy && s.policy.lastSatEarly);
    if (!early.length) return '';
    const ok = early.filter(s => C.satCountsForEarly(s.policy, d)).map(s => s.name);
    const late = early.filter(s => C.satCountsForEarly(s.policy, d) === false).map(s => s.name);
    return [ok.length ? `얼리에 맞음: ${ok.join(', ')}` : '', late.length ? `얼리엔 늦음: ${late.join(', ')}` : ''].filter(Boolean).join(' / ');
  }

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
    if (E.ukRoadItems) for (const it of E.ukRoadItems()) items.push(Object.assign({ month: it.date.slice(0, 7), sort: it.date }, it));
    for (const p of window.SUMMER || []) {
      const v = st.summer[p.id];
      if (!v || v === 'out' || !p.deadline2027) continue;
      items.push({ id: `sum-${p.id}`, date: p.deadline2027, month: p.deadline2027.slice(0, 7), sort: p.deadline2027, kind: 'sum', title: `${p.name} 마감`, note: p.deadlineNote || '', src: p.url });
    }
    for (const o of window.INTL_OPTS || []) {
      if (!st.intlOpt[o.id] || !(/\b2028 (admission|entry)|entry 2028/i.test(o.cycle || '') && !/not yet published/i.test(o.cycle || '')) || !o.deadline || !/^\d{4}-\d{2}-\d{2}$/.test(o.deadline)) continue;
      items.push({ id: `intl-${o.id}`, date: o.deadline, month: o.deadline.slice(0, 7), sort: o.deadline, kind: 'app', title: `${o.name} 마감`, note: o.deadlineNote || '', src: o.url });
    }
    items.sort((a, b) => (a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0));
    const curMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const showPast = !!st.open.pastRoad;
    let html = `<div class="calbar"><div class="legend">
      <span><i class="k-test"></i>시험</span><span><i class="k-reg"></i>접수 마감</span><span><i class="k-app"></i>원서</span><span><i class="k-todo"></i>추천 시기</span><span><i class="k-sum"></i>여름</span><span><i class="k-mine"></i>내 일정</span>
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
        <span class="what"><b>${esc(it.title)}</b>${it.note ? `<span>${esc(it.note)}</span>` : ''}<span class="kind">${KIND[it.kind] || ''}</span>${satEarlyNote(it) ? `<span class="earlyFit">${esc(satEarlyNote(it))}</span>` : ''}</span>
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

  // 여름 프로그램 목록
  function summerHtml() {
    const list = (window.SUMMER || []).slice();
    if (!list.length) return '<p class="empty">여름 프로그램 자료가 없어요</p>';
    const now = E.today();
    const key = p => p.deadline2027 || (p.deadline2026 ? `${Number(p.deadline2026.slice(0, 4)) + 1}${p.deadline2026.slice(4)}` : '9999');
    list.sort((a, b) => (key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0));
    const cards = list.map(p => {
      const v = st.summer[p.id] || '';
      const d27 = p.deadline2027 ? C.parse(p.deadline2027) : null;
      const past = d27 && C.dday(d27, now) < 0;
      let due;
      if (d27) due = `<b>${C.md(d27)}</b> <span class="fine">${past ? '마감 지남' : ddTxt(C.dday(d27, now))}</span>`;
      else if (p.deadline2026) due = `<span class="fine">작년 ${C.md(C.parse(p.deadline2026))} (2027년 미발표)</span>`;
      else due = '<span class="fine">마감 확인 못 함</span>';
      return `<div class="sumCard${past ? ' past' : ''}${v === 'out' ? ' dim' : ''}">
        <div class="sumTop">
          <span class="sk ${p.kind === 'selective' ? 'sel' : 'paid'}">${p.kind === 'selective' ? '선발형' : '유료'}</span>
          <b class="sumName">${esc(p.name)}</b>
          <a class="lnk fine" href="${esc(p.url)}" target="_blank" rel="noopener">공식 ↗</a>
        </div>
        <div class="sumHost">${esc(p.host || '')}${p.where ? `, ${esc(p.where)}` : ''}</div>
        <div class="sumFacts">
          <span><i>마감</i>${due}</span>
          ${p.cost ? `<span><i>비용</i>${esc(p.cost)}</span>` : ''}
          ${p.selectivity ? `<span><i>경쟁</i>${esc(p.selectivity)}</span>` : ''}
          ${p.dates2027 || p.dates2026 ? `<span><i>기간</i>${esc(p.dates2027 || `작년 ${p.dates2026}`)}</span>` : ''}
        </div>
        ${p.eligibility ? `<p class="orig"><b>대상</b> ${esc(p.eligibility)}</p>` : ''}
        ${p.summary ? `<p class="orig">${esc(p.summary)}</p>` : ''}
        <details class="more2"><summary>자세히</summary>
          ${p.deadlineNote ? `<p class="orig">${esc(p.deadlineNote)}</p>` : ''}
          ${p.aid ? `<p class="orig"><b>재정지원</b> ${esc(p.aid)}</p>` : ''}
          ${p.intlNote ? `<p class="orig"><b>국제학생</b> ${esc(p.intlNote)}</p>` : ''}
        </details>
        ${p.verified ? `<p class="orig fine">두 번째 대조: ${String(p.verified).startsWith('ok') ? '확인됨' : String(p.verified).startsWith('partial') ? '일부' : '못 함'}</p>` : ''}
        <div class="mini sm" role="group">${SUM_ST.map(([k, l]) => `<button type="button" data-sum="${esc(p.id)}" data-sv="${k}" class="${v === k ? 'on' : ''}">${l}</button>`).join('')}</div>
      </div>`;
    }).join('');
    return `<p class="fine sumNote">관심 이상으로 표시하면 2027년 마감이 로드맵에 들어가요. 선발형(무료나 장학금)이 입시에서 더 무게가 있어요.</p><div class="sumList">${cards}</div>`;
  }

  E.views.plan = {
    render(r) {
      const mode = ['due', 'road', 'summer'].includes(r.sub) ? r.sub : (st.plan.mode || 'road');
      const body = mode === 'road' ? roadHtml() : mode === 'due' ? dueHtml() : summerHtml();
      $('#view-plan').innerHTML = `<div class="planTabs mini" role="group">
        <button type="button" data-pmode="road" class="${mode === 'road' ? 'on' : ''}">로드맵</button>
        <button type="button" data-pmode="due" class="${mode === 'due' ? 'on' : ''}">학교 마감</button>
        <button type="button" data-pmode="summer" class="${mode === 'summer' ? 'on' : ''}">여름 프로그램</button>
      </div>${body}`;
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
        if (t.closest('[data-past]')) { st.open.pastRoad = !st.open.pastRoad; E.save(); E.render(); return; }
        const sm = t.closest('[data-sum]');
        if (sm) { const id = sm.dataset.sum; if (st.summer[id] === sm.dataset.sv) delete st.summer[id]; else st.summer[id] = sm.dataset.sv; E.save(); E.render(); }
      });
    },
  };
})();
