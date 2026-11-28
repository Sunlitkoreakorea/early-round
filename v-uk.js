// 영국 대학: 학교 탭 묶음과 학교 화면, 전략 탭 UCAS 칸, 로드맵 마감
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, esc, tierChip, ddTxt } = E;

  const ukAll = () => window.UK || [];
  const ukById = id => ukAll().find(s => s.id === id);
  const keysOf = () => ((st.profile.majors && st.profile.majors.length) ? st.profile.majors : C.MAJORS.map(m => m[0]));
  const inUcas = (sid, key) => (st.ucas || []).some(x => x.school === sid && x.course === key);
  const due = s => (s.deadline ? C.shifted(s.deadline) : null);

  // 고른 전공에 맞는 과정 (같은 과정이 여러 전공에 걸치면 한 번만)
  function coursesOf(s, keys) {
    const seen = new Set();
    const out = [];
    for (const k of keys) {
      const c = s.courses && s.courses[k];
      if (!c || !c.name) continue;
      const id = `${c.name}|${c.ucas || ''}`;
      if (seen.has(id)) continue;
      seen.add(id);
      out.push([k, c]);
    }
    return out;
  }

  function best(s) {
    let top = null;
    for (const [, c] of coursesOf(s, keysOf())) {
      const ch = C.ukChance(s, c, st.profile);
      if (ch.tier != null && (top == null || ch.tier > top.tier)) top = ch;
    }
    return top;
  }

  /* ───── 학교 탭 목록 ───── */
  function listHtml(selId) {
    const list = ukAll();
    if (!list.length) return '';
    const open = st.open.uk || (selId || '').startsWith('uk-');
    let html = `<div class="grp fold${open ? ' open' : ''}" data-fold="uk">영국 ${list.length}</div>`;
    if (!open) return html;
    for (const s of list) {
      const n = due(s) ? C.dday(due(s), E.today()) : null;
      const b = best(s);
      const cnt = (st.ucas || []).filter(x => x.school === s.id).length;
      html += `<a class="row${s.id === selId ? ' on' : ''}" href="#s/${encodeURIComponent(s.id)}">
        <span class="star"></span>
        <span class="nm">${esc(s.name)}</span>
        <span class="chips"><span class="chip ${cnt ? 't-ED' : 'ghost'}">UCAS${cnt > 1 ? ` ${cnt}` : ''}</span></span>
        <span class="tb">${b ? `<i class="tdot t${b.tier}" title="${b.label}"></i>` : ''}</span>
        <span class="dd">${ddTxt(n)}</span>
      </a>`;
    }
    return html;
  }

  /* ───── 학교 화면 ───── */
  function detailHtml(id) {
    const s = ukById(id);
    if (!s) return '';
    const ref = window.RANK_REF || {};
    const vs = { above: '서울대보다 위', below: '서울대보다 아래', same: '서울대와 같음' };
    const rk = s.rank || {};
    const tiles = [];
    for (const [k, label] of [['qs', 'QS 2027'], ['the', 'THE 2027']]) {
      if (rk[k] == null) continue;
      const cmp = C.vsRef(rk[k], ref[k]);
      tiles.push(`<div class="tile"><div class="tk">${label} 세계 순위</div><div class="tv">${esc(String(rk[k]).replace(/^=/, '공동 '))}위</div><div class="ts">${cmp ? vs[cmp] : ''}${ref[k] ? ` (서울대 ${esc(ref[k])}위)` : ''}</div></div>`);
    }
    const f = s.fees || {};
    if (f.tuition) tiles.push(`<div class="tile"><div class="tk">국제학생 학비</div><div class="tv tvs">${esc(f.tuition)}</div><div class="ts">${esc(f.year || '')}${f.living ? `, 생활비 ${esc(f.living)}` : ''}</div></div>`);
    const d = due(s);
    const courses = coursesOf(s, keysOf()).map(([k, c]) => {
      const ch = C.ukChance(s, c, st.profile);
      const on = inUcas(s.id, k);
      const bits = [
        [c.degree, c.years ? `${c.years}년` : ''].filter(Boolean).join(' '),
        c.ucas ? `UCAS ${esc(c.ucas)}` : '',
        c.test ? `시험: ${esc(c.test)}` : '',
        c.interview ? `인터뷰: ${esc(c.interview)}` : '',
      ].filter(Boolean).join(', ');
      return `<div class="ukc">
        <div class="ukcTop"><span class="mk2">${C.MAJOR_KO[k]}</span><b>${esc(c.name)}</b>${tierChip(ch.tier, ch.label)}
          <button type="button" class="ghostBtn${on ? ' onBtn' : ''}" data-ucas-add="${esc(s.id)}" data-ucas-key="${k}">${on ? 'UCAS에서 빼기' : 'UCAS에 넣기'}</button></div>
        ${bits ? `<div class="sub">${bits}</div>` : ''}
        ${c.offerRate != null ? `<div class="sub">오퍼 비율 ${c.offerRate}%${c.offerNote ? ` (${esc(c.offerNote)})` : ''}</div>` : ''}
        ${c.apReq ? `<div class="sub">${esc(c.apReq)}</div>` : ''}
        <ul class="why">${ch.reasons.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
        ${c.url ? `<a class="lnk fine" href="${esc(c.url)}" target="_blank" rel="noopener">과정 페이지 ↗</a>` : ''}
      </div>`;
    }).join('');
    const facts = [];
    const add = (k, v) => { if (v) facts.push(`<dt>${k}</dt><dd>${esc(v)}</dd>`); };
    add('미국식 기준', s.apReq);
    add('AP 메모', s.apNote);
    add('영어', s.english);
    add('장학금', s.scholarship);
    add('국제학생', s.intlNote);
    add('학비 메모', f.note);
    const urls = [...new Set([s.url, ...(s.sources || [])].filter(Boolean))];
    const uns = (s.uncertain || []).map(u => String(u).split(':')[0].trim());
    return `
      <div class="dhead">
        <div class="backWrap"><a class="back" href="#">‹ 목록</a></div>
        <div class="title"><h2>${esc(s.name)}</h2><p class="full">${esc(s.full || '')}<span class="loc">${esc(s.city || '')}, 영국</span></p></div>
        ${s.url ? `<a class="ext" href="${esc(s.url)}" target="_blank" rel="noopener">입학처 ↗</a>` : ''}
      </div>
      <section class="sec">
        <h3>UCAS 마감 <span class="fine">2027 입학 날짜를 1년 뒤로 옮김</span></h3>
        <div class="facts"><span class="fact"><b>${d ? `${d.getMonth() + 1}월 ${d.getDate()}일` : '미확인'}</b></span>${d ? `<span class="fact">${ddTxt(C.dday(d, E.today()))}</span>` : ''}${s.oxbridge ? '<span class="fact no">Oxford와 Cambridge 중 하나만</span>' : ''}</div>
        ${s.deadlineNote ? `<p class="orig">${esc(s.deadlineNote)}</p>` : ''}
      </section>
      ${tiles.length ? `<section class="sec"><div class="tiles">${tiles.join('')}</div></section>` : ''}
      <section class="sec"><h3>과정 ${st.profile.majors && st.profile.majors.length ? '<span class="fine">내가 고른 전공</span>' : '<a class="fine lnk" href="#me">나 탭에서 관심 전공 고르기</a>'}</h3>${courses || '<p class="orig">고른 전공에 맞는 과정이 없어요</p>'}</section>
      ${facts.length ? `<section class="sec"><dl class="dl">${facts.join('')}</dl></section>` : ''}
      <div class="src"><span>확인 ${esc(s.checked || '')}</span>${s.verified ? `<span>두 번째 대조: ${String(s.verified).startsWith('ok') ? '확인됨' : String(s.verified).startsWith('partial') ? '일부' : '못 함'}</span>` : ''}${urls.map((u, i) => `<a href="${esc(u)}" target="_blank" rel="noopener">출처 ${i + 1}</a>`).join('')}${uns.length ? `<span class="unsure">공식 페이지로 확정 못 한 것: ${esc([...new Set(uns)].join(', '))}</span>` : ''}</div>`;
  }

  /* ───── 전략 탭 UCAS 칸 ───── */
  function ucasHtml() {
    if (!ukAll().length) return '';
    const list = (st.ucas || []).filter(x => ukById(x.school));
    const issues = C.ucasCheck(list);
    const cards = list.map(x => {
      const s = ukById(x.school);
      const c = s.courses && s.courses[x.course];
      const ch = C.ukChance(s, c, st.profile);
      const d = due(s);
      return `<div class="card" data-go="${esc(s.id)}" role="link" tabindex="0">
        <div class="top"><span class="chip t-REA">UCAS</span></div>
        <div class="nm">${esc(s.name)}</div>
        <div class="meta"><span>${esc(c ? c.name : x.course)}</span></div>
        <div class="meta"><b>${d ? C.md(d) : ''}</b><span>${d ? ddTxt(C.dday(d, E.today())) : ''}</span>${tierChip(ch.tier, ch.label)}</div>
        <button type="button" class="rm" data-ucas-rm="${esc(s.id)}|${esc(x.course)}" aria-label="빼기">×</button>
      </div>`;
    }).join('');
    return `<section class="slot">
      <header><h3>UCAS (영국)</h3><span>최대 5개, ${list.length}/5</span></header>
      ${issues.length ? `<ul class="issues">${issues.map(i => `<li class="${i.level}">${esc(i.msg)}</li>`).join('')}</ul>` : ''}
      <div class="cards">${cards}${list.length < 5 ? '<button type="button" class="addCard" data-ucas-pick>+ 과정</button>' : ''}</div>
    </section>`;
  }

  function openPicker() {
    const draw = () => {
      const rows = [];
      for (const s of ukAll()) {
        for (const [k, c] of coursesOf(s, keysOf())) rows.push({ s, k, c, on: inUcas(s.id, k), ch: C.ukChance(s, c, st.profile) });
      }
      const body = rows.length ? rows.map(r => `<button type="button" class="pick${r.on ? ' on' : ''}" data-up="${esc(r.s.id)}" data-uk="${r.k}">
          <span class="box">${r.on ? '✓' : ''}</span>
          <span><span class="nm">${esc(r.s.name)}</span><span class="sub"> ${esc(r.c.name)}</span></span>
          <span></span>${tierChip(r.ch.tier, r.ch.label)}
        </button>`).join('') : '<p class="empty">과정 자료가 없어요</p>';
      E.openSheet('UCAS 과정 고르기', `<div class="body">${body}</div>`, sh => {
        sh.querySelectorAll('[data-up]').forEach(b => b.addEventListener('click', () => { toggle(b.dataset.up, b.dataset.uk); draw(); }));
      });
    };
    draw();
  }

  function toggle(sid, key) {
    st.ucas = st.ucas || [];
    const i = st.ucas.findIndex(x => x.school === sid && x.course === key);
    if (i >= 0) st.ucas.splice(i, 1); else st.ucas.push({ school: sid, course: key });
    E.save();
    E.render();
  }

  /* ───── 로드맵 항목 ───── */
  function roadItems() {
    const list = (st.ucas || []).filter(x => ukById(x.school));
    if (!list.length) return [];
    const out = [];
    const ox = list.some(x => ukById(x.school).oxbridge);
    const seen = new Set();
    for (const x of list) {
      const s = ukById(x.school);
      if (s.deadline) {
        const d = C.shifted(s.deadline);
        const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const key = `ucas-${iso}`;
        if (!seen.has(key)) {
          seen.add(key);
          out.push({ id: key, date: iso, kind: 'app', title: s.oxbridge ? 'UCAS 마감 (Oxford/Cambridge)' : 'UCAS 마감', note: s.oxbridge ? '이걸 넣으면 지원서 전체를 이날까지' : '' });
        }
      }
      const c = s.courses && s.courses[x.course];
      if (c && c.testDate && /^\d{4}-\d{2}-\d{2}$/.test(c.testDate)) {
        const d = C.shifted(c.testDate);
        const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        out.push({ id: `uktest-${s.id}-${x.course}`, date: iso, kind: 'test', title: `${s.name} ${c.test || '입학시험'}`, note: '작년 날짜를 1년 뒤로 옮김' });
      }
    }
    if (ox) out.forEach(o => { if (o.title === 'UCAS 마감') o.note = 'Oxford/Cambridge가 있으면 10월 마감이 우선'; });
    return out;
  }

  E.ukAll = ukAll;
  E.ukById = ukById;
  E.ukListHtml = listHtml;
  E.ukDetailHtml = detailHtml;
  E.ucasHtml = ucasHtml;
  E.ukRoadItems = roadItems;

  E.views.uk = {
    render() {},
    bind() {
      document.addEventListener('click', e => {
        const t = e.target;
        const add = t.closest('[data-ucas-add]');
        if (add) { toggle(add.dataset.ucasAdd, add.dataset.ucasKey); return; }
        const rm = t.closest('[data-ucas-rm]');
        if (rm) { e.stopPropagation(); const [sid, key] = rm.dataset.ucasRm.split('|'); toggle(sid, key); return; }
        if (t.closest('[data-ucas-pick]')) openPicker();
      }, true);
    },
  };
})();
