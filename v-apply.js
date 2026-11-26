// 지원서 탭: 커먼앱 칸 그대로 (활동 10, 수상 5, 에세이, 추가 정보), 보충 에세이 모아보기, 다른 지원서
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, $$, esc, chip } = E;

  // 커먼앱 2026-27 기준 글자 수 제한 (공백 포함)
  const LIM = { position: 50, org: 100, desc: 150, honor: 100, essay: 650, essayMin: 250, addl: 650 };
  const ACT_TYPES = ['Academic', 'Art', 'Athletics: Club', 'Athletics: JV/Varsity', 'Career Oriented', 'Community Service (Volunteer)',
    'Computer/Technology', 'Cultural', 'Dance', 'Debate/Speech', 'Environmental', 'Family Responsibilities', 'Foreign Exchange',
    'Foreign Language', 'Internship', 'Journalism/Publication', 'Junior R.O.T.C.', 'LGBT', 'Music: Instrumental', 'Music: Vocal',
    'Religious', 'Research', 'Robotics', 'School Spirit', 'Science/Math', 'Social Justice', 'Student Govt./Politics', 'Theater/Drama',
    'Work (Paid)', 'Other Club/Activity'];
  const GRADES = ['9', '10', '11', '12', 'PG'];
  const TIMING = [['school', '학기 중'], ['break', '방학'], ['all', '1년 내내']];
  const LEVELS = [['school', '교내'], ['state', '지역'], ['national', '전국'], ['intl', '국제']];
  const ESSAY_ST = [['', '아직'], ['idea', '주제'], ['draft', '초안'], ['edit', '고치는 중'], ['done', '완성']];
  const SUPP_ST = [['', '아직'], ['draft', '초안'], ['done', '완성']];

  const filledAct = a => !!(a.org || a.position || a.desc || a.memo);
  const filledHonor = h => !!(h.title || h.memo);

  function suppSchools() {
    const c = E.chosen().filter(s => s.req && s.commonApp !== false);
    if (c.length) return c;
    return E.live().filter(s => s.req && E.isStar(s) && s.commonApp !== false);
  }

  function suppItems() {
    const out = [];
    for (const s of suppSchools()) {
      (s.req.supplements || []).forEach((x, i) => out.push({ s, x, i, status: (st.apply.supp[s.id] || {})[i] || '' }));
    }
    return out;
  }

  function counter(n, max, min) {
    const over = n > max;
    const under = min && n > 0 && n < min;
    return `<span class="cnt${over ? ' over' : ''}${under ? ' under' : ''}" data-cnt>${n} / ${max}</span>`;
  }

  /* ───── 왼쪽 목록 ───── */
  function nav(sel) {
    const a = st.apply;
    const items = suppItems();
    const doneSupp = items.filter(i => i.status === 'done').length;
    const other = E.live().filter(s => s.req && s.req.appFormat);
    const rows = [
      ['acts', '활동', `${a.acts.filter(filledAct).length}/10`],
      ['honors', '수상', `${a.honors.filter(filledHonor).length}/5`],
      ['essay', '본 에세이', `${C.words(a.essay.text)}단어`],
      ['addl', '추가 정보', `${C.words(a.addl.text)}단어`],
      ['supp', '보충 에세이', items.length ? `${doneSupp}/${items.length}` : '—'],
    ];
    if (other.length) rows.push(['other', '다른 지원서', other.map(s => s.name).join(', ')]);
    return rows.map(([k, l, v]) => `<a class="row${sel === k ? ' on' : ''}" href="#apply/${k}"><span></span><span class="nm">${l}</span><span></span><span></span><span class="dd">${esc(v)}</span></a>`).join('');
  }

  /* ───── 활동 ───── */
  function actsHtml() {
    const openI = st.open.act ?? -1;
    return `<h2 class="ph">활동 <span class="fine">중요한 것부터 위로</span></h2>
      <ol class="slots">${st.apply.acts.map((a, i) => {
        const has = filledAct(a);
        const over = C.chars(a.position) > LIM.position || C.chars(a.org) > LIM.org || C.chars(a.desc) > LIM.desc;
        const head = `<button type="button" class="slotHead" data-open-act="${i}">
          <span class="no">${i + 1}</span>
          <span class="st">${has ? `${a.org || a.position ? `<b>${esc(a.org || a.position)}</b>` : `<span class="memoPeek">${esc(a.memo.slice(0, 48))}${a.memo.length > 48 ? '…' : ''}</span>`}${a.type ? `<span class="fine">${esc(a.type)}</span>` : ''}` : '<span class="fine">비어 있음</span>'}</span>
          ${over ? '<span class="cnt over">글자 수 초과</span>' : a.desc ? `<span class="cnt">${C.chars(a.desc)}/150</span>` : ''}
        </button>`;
        if (openI !== i) return `<li class="slotI">${head}</li>`;
        return `<li class="slotI open">${head}<div class="ed" data-act="${i}">
          <label class="lbl">종류</label>
          <select data-f="type"><option value="">고르기</option>${ACT_TYPES.map(t => `<option${a.type === t ? ' selected' : ''}>${esc(t)}</option>`).join('')}</select>
          <label class="lbl">직책, 리더십 ${counter(C.chars(a.position), LIM.position)}</label>
          <input type="text" data-f="position" data-max="${LIM.position}" value="${esc(a.position)}">
          <label class="lbl">단체 이름 ${counter(C.chars(a.org), LIM.org)}</label>
          <input type="text" data-f="org" data-max="${LIM.org}" value="${esc(a.org)}">
          <label class="lbl">설명 ${counter(C.chars(a.desc), LIM.desc)}</label>
          <textarea data-f="desc" data-max="${LIM.desc}" rows="3">${esc(a.desc)}</textarea>
          <label class="lbl">학년</label>
          <div class="tgs">${GRADES.map(g => `<button type="button" class="tg${a.grades.includes(g) ? ' on' : ''}" data-grade="${g}">${g}</button>`).join('')}</div>
          <label class="lbl">시기</label>
          <div class="mini" role="group">${TIMING.map(([k, l]) => `<button type="button" data-timing="${k}" class="${a.timing === k ? 'on' : ''}">${l}</button>`).join('')}</div>
          <div class="two">
            <div><label class="lbl">주당 시간</label><div class="step"><button type="button" data-stp="hrs" data-d="-1">−</button><b>${a.hrs}</b><button type="button" data-stp="hrs" data-d="1">＋</button></div></div>
            <div><label class="lbl">1년 중 주 수</label><div class="step"><button type="button" data-stp="wks" data-d="-1">−</button><b>${a.wks}</b><button type="button" data-stp="wks" data-d="1">＋</button></div></div>
          </div>
          <button type="button" class="sw${a.college ? ' on' : ''}" data-college role="switch" aria-checked="${a.college}"><span>대학에서도 비슷한 활동</span><span class="knob"></span></button>
          <label class="lbl">메모 <span class="fine">제출 안 됨</span></label>
          <textarea data-f="memo" rows="3" class="memoF">${esc(a.memo)}</textarea>
          <div class="edBar">
            <button type="button" class="ghostBtn" data-move="-1" ${i === 0 ? 'disabled' : ''}>위로</button>
            <button type="button" class="ghostBtn" data-move="1" ${i === 9 ? 'disabled' : ''}>아래로</button>
            <button type="button" class="ghostBtn warnT" data-clear>비우기</button>
          </div>
        </div></li>`;
      }).join('')}</ol>`;
  }

  /* ───── 수상 ───── */
  function honorsHtml() {
    const openI = st.open.honor ?? -1;
    return `<h2 class="ph">수상 <span class="fine">5칸</span></h2>
      <ol class="slots">${st.apply.honors.map((h, i) => {
        const has = filledHonor(h);
        const lv = LEVELS.find(([k]) => k === h.level);
        const head = `<button type="button" class="slotHead" data-open-honor="${i}">
          <span class="no">${i + 1}</span>
          <span class="st">${has ? `${h.title ? `<b>${esc(h.title)}</b>` : `<span class="memoPeek">${esc(h.memo.slice(0, 48))}${h.memo.length > 48 ? '…' : ''}</span>`}${lv ? `<span class="fine">${lv[1]}</span>` : ''}` : '<span class="fine">비어 있음</span>'}</span>
          ${C.chars(h.title) > LIM.honor ? '<span class="cnt over">글자 수 초과</span>' : h.title ? `<span class="cnt">${C.chars(h.title)}/100</span>` : ''}
        </button>`;
        if (openI !== i) return `<li class="slotI">${head}</li>`;
        return `<li class="slotI open">${head}<div class="ed" data-honor="${i}">
          <label class="lbl">이름 ${counter(C.chars(h.title), LIM.honor)}</label>
          <input type="text" data-f="title" data-max="${LIM.honor}" value="${esc(h.title)}">
          <label class="lbl">학년</label>
          <div class="tgs">${GRADES.map(g => `<button type="button" class="tg${h.grades.includes(g) ? ' on' : ''}" data-grade="${g}">${g}</button>`).join('')}</div>
          <label class="lbl">수준</label>
          <div class="mini" role="group">${LEVELS.map(([k, l]) => `<button type="button" data-level="${k}" class="${h.level === k ? 'on' : ''}">${l}</button>`).join('')}</div>
          <label class="lbl">메모 <span class="fine">제출 안 됨</span></label>
          <textarea data-f="memo" rows="3" class="memoF">${esc(h.memo)}</textarea>
          <div class="edBar">
            <button type="button" class="ghostBtn" data-move="-1" ${i === 0 ? 'disabled' : ''}>위로</button>
            <button type="button" class="ghostBtn" data-move="1" ${i === 4 ? 'disabled' : ''}>아래로</button>
            <button type="button" class="ghostBtn warnT" data-clear>비우기</button>
          </div>
        </div></li>`;
      }).join('')}</ol>`;
  }

  /* ───── 에세이 ───── */
  function essayHtml() {
    const e = st.apply.essay;
    return `<h2 class="ph">본 에세이 <span class="fine">250~650단어</span></h2>
      <div class="ed flat" data-essay>
        <label class="lbl">주제 메모</label>
        <input type="text" data-f="topic" value="${esc(e.topic)}">
        <div class="mini" role="group">${ESSAY_ST.map(([k, l]) => `<button type="button" data-est="${k}" class="${e.status === k ? 'on' : ''}">${l}</button>`).join('')}</div>
        <label class="lbl">본문 ${counter(C.words(e.text), LIM.essay, LIM.essayMin).replace('</span>', '단어</span>')}</label>
        <textarea data-f="text" data-words="${LIM.essay}" data-min="${LIM.essayMin}" rows="18" class="big">${esc(e.text)}</textarea>
      </div>`;
  }

  function addlHtml() {
    const a = st.apply.addl;
    return `<h2 class="ph">추가 정보 <span class="fine">650단어까지, 꼭 쓸 필요는 없음</span></h2>
      <div class="ed flat" data-addl>
        <label class="lbl">본문 ${counter(C.words(a.text), LIM.addl).replace('</span>', '단어</span>')}</label>
        <textarea data-f="text" data-words="${LIM.addl}" rows="12" class="big">${esc(a.text)}</textarea>
      </div>`;
  }

  /* ───── 보충 에세이 ───── */
  function suppHtml() {
    const items = suppItems();
    const schools = suppSchools();
    if (!items.length) {
      return `<h2 class="ph">보충 에세이</h2><p class="empty">${schools.length ? '고른 학교에 확인된 보충 에세이가 없어요' : '학교 탭에서 지원 방식을 고르면 여기에 모여요'}</p>`;
    }
    const long = items.filter(i => (i.x.words || 0) >= 150 || (i.x.chars || 0) >= 1000);
    const short = items.filter(i => !long.includes(i));
    const reqLong = long.filter(i => i.x.required !== false);
    const types = [...new Set(reqLong.map(i => i.x.type))];
    const byType = st.open.suppView === 'type';
    const row = it => `<li class="sp">
      <div class="spTop">${byType ? `<b>${esc(it.s.name)}</b>` : `<span class="stype">${E.SUPP_TYPE[it.x.type] || it.x.type}</span>`}<span class="slim">${it.x.words ? `${it.x.words}단어` : it.x.chars ? `${it.x.chars}자` : ''}${it.x.count > 1 ? ` ×${it.x.count}` : ''}${it.x.choose ? `, ${esc(it.x.choose)}` : ''}${it.x.required === false ? ', 선택' : ''}</span></div>
      <div class="ssum">${esc(it.x.summary || '')}</div>
      <div class="mini sm" role="group">${SUPP_ST.map(([k, l]) => `<button type="button" data-sid="${esc(it.s.id)}" data-si="${it.i}" data-sv="${k}" class="${it.status === k ? 'on' : ''}">${l}</button>`).join('')}</div>
    </li>`;
    let body = '';
    if (byType) {
      for (const [k, l] of Object.entries(E.SUPP_TYPE)) {
        const g = items.filter(i => i.x.type === k);
        if (g.length) body += `<div class="sg"><h3>${l} <span class="fine">${g.length}</span></h3><ul class="supps">${g.map(row).join('')}</ul></div>`;
      }
    } else {
      for (const s of schools) {
        const g = items.filter(i => i.s === s);
        body += `<div class="sg"><h3><a href="#s/${encodeURIComponent(s.id)}">${esc(s.name)}</a> ${E.pickOf(s) ? chip(E.pickOf(s)) : ''}${s.req.supplementsUrl ? `<a class="lnk fine" href="${esc(s.req.supplementsUrl)}" target="_blank" rel="noopener">원문 ↗</a>` : ''}</h3>${g.length ? `<ul class="supps">${g.map(row).join('')}</ul>` : '<p class="fine">없음 또는 확인 못 함</p>'}</div>`;
      }
    }
    return `<h2 class="ph">보충 에세이 <span class="fine">${E.chosen().length ? '고른 학교' : '드림 학교'} 기준, 2026-27 질문</span></h2>
      <div class="tiles">
        <div class="tile"><div class="tk">긴 글</div><div class="tv">${long.length}편</div><div class="ts">150단어 이상</div></div>
        <div class="tile"><div class="tk">짧은 답</div><div class="tv">${short.length}개</div></div>
        <div class="tile"><div class="tk">필수 긴 글 유형</div><div class="tv">${types.length}가지</div><div class="ts">유형이 같으면 고쳐서 다시 쓰기</div></div>
      </div>
      <div class="mini" role="group"><button type="button" data-sview="school" class="${byType ? '' : 'on'}">학교별</button><button type="button" data-sview="type" class="${byType ? 'on' : ''}">유형별</button></div>
      ${body}`;
  }

  function otherHtml() {
    const list = E.live().filter(s => s.req && s.req.appFormat);
    return `<h2 class="ph">다른 지원서</h2>${list.map(s => `<div class="sg"><h3><a href="#s/${encodeURIComponent(s.id)}">${esc(s.name)}</a> <span class="fine">${esc(s.req.application || '')}</span></h3><p class="orig">${esc(s.req.appFormat)}</p></div>`).join('')}`;
  }

  /* ───── 입력 처리 ───── */
  function target(el) {
    const ed = el.closest('.ed');
    if (!ed) return null;
    if (ed.dataset.act != null) return st.apply.acts[Number(ed.dataset.act)];
    if (ed.dataset.honor != null) return st.apply.honors[Number(ed.dataset.honor)];
    if (ed.hasAttribute('data-essay')) return st.apply.essay;
    if (ed.hasAttribute('data-addl')) return st.apply.addl;
    return null;
  }

  function updateCount(el) {
    const lbl = el.previousElementSibling;
    const cnt = lbl && lbl.querySelector('[data-cnt]');
    if (!cnt) return;
    if (el.dataset.words) {
      const n = C.words(el.value);
      const max = Number(el.dataset.words);
      const min = Number(el.dataset.min || 0);
      cnt.textContent = `${n} / ${max}단어`;
      cnt.classList.toggle('over', n > max);
      cnt.classList.toggle('under', !!min && n > 0 && n < min);
    } else if (el.dataset.max) {
      const n = C.chars(el.value);
      cnt.textContent = `${n} / ${el.dataset.max}`;
      cnt.classList.toggle('over', n > Number(el.dataset.max));
    }
  }

  E.views.apply = {
    render(r) {
      const sel = ['acts', 'honors', 'essay', 'addl', 'supp', 'other'].includes(r.sub) ? r.sub : 'acts';
      const body = { acts: actsHtml, honors: honorsHtml, essay: essayHtml, addl: addlHtml, supp: suppHtml, other: otherHtml }[sel]();
      $('#view-apply').innerHTML = `<aside class="side">
          <p class="rule">커먼앱 규정: AI가 만든 글을 내 글로 내면 부정행위</p>
          ${nav(sel)}
        </aside>
        <article class="detail"><a class="back" href="#apply">‹ 목록</a>${body}</article>`;
      $('#view-apply').classList.toggle('open', !!r.sub);
    },
    bind() {
      const root = $('#view-apply');
      root.addEventListener('click', e => {
        const t = e.target;
        const oa = t.closest('[data-open-act]');
        if (oa) { const i = Number(oa.dataset.openAct); st.open.act = st.open.act === i ? -1 : i; E.save(); E.render(); return; }
        const oh = t.closest('[data-open-honor]');
        if (oh) { const i = Number(oh.dataset.openHonor); st.open.honor = st.open.honor === i ? -1 : i; E.save(); E.render(); return; }
        const obj = target(t);
        const ed = t.closest('.ed');
        const g = t.closest('[data-grade]');
        if (g && obj) { const v = g.dataset.grade; obj.grades = obj.grades.includes(v) ? obj.grades.filter(x => x !== v) : obj.grades.concat(v).sort((a, b) => GRADES.indexOf(a) - GRADES.indexOf(b)); E.save(); E.render(); return; }
        const tm = t.closest('[data-timing]');
        if (tm && obj) { obj.timing = obj.timing === tm.dataset.timing ? '' : tm.dataset.timing; E.save(); E.render(); return; }
        const lv = t.closest('[data-level]');
        if (lv && obj) { obj.level = obj.level === lv.dataset.level ? '' : lv.dataset.level; E.save(); E.render(); return; }
        const sp = t.closest('[data-stp]');
        if (sp && obj) { const k = sp.dataset.stp; const max = k === 'hrs' ? 40 : 52; obj[k] = Math.max(0, Math.min(max, (obj[k] || 0) + Number(sp.dataset.d))); E.save(); E.render(); return; }
        if (t.closest('[data-college]') && obj) { obj.college = !obj.college; E.save(); E.render(); return; }
        const es = t.closest('[data-est]');
        if (es) { st.apply.essay.status = es.dataset.est; E.save(); E.render(); return; }
        const mv = t.closest('[data-move]');
        if (mv && ed) {
          const isAct = ed.dataset.act != null;
          const arr = isAct ? st.apply.acts : st.apply.honors;
          const i = Number(isAct ? ed.dataset.act : ed.dataset.honor);
          const j = i + Number(mv.dataset.move);
          if (j < 0 || j >= arr.length) return;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          if (isAct) st.open.act = j; else st.open.honor = j;
          E.save(); E.render(); return;
        }
        if (t.closest('[data-clear]') && ed) {
          if (!confirm('이 칸을 비울까요?')) return;
          const isAct = ed.dataset.act != null;
          const arr = isAct ? st.apply.acts : st.apply.honors;
          const i = Number(isAct ? ed.dataset.act : ed.dataset.honor);
          arr[i] = isAct ? E.blank().apply.acts[0] : E.blank().apply.honors[0];
          E.save(); E.render(); return;
        }
        const sv = t.closest('[data-sv][data-sid]');
        if (sv) { st.apply.supp[sv.dataset.sid] = st.apply.supp[sv.dataset.sid] || {}; st.apply.supp[sv.dataset.sid][sv.dataset.si] = sv.dataset.sv; E.save(); E.render(); return; }
        const sw = t.closest('[data-sview]');
        if (sw) { st.open.suppView = sw.dataset.sview; E.save(); E.render(); }
      });
      root.addEventListener('input', e => {
        const el = e.target;
        if (!el.dataset.f) return;
        const obj = target(el);
        if (!obj) return;
        obj[el.dataset.f] = el.value;
        updateCount(el);
        E.save(false);
      });
      root.addEventListener('change', e => {
        const el = e.target;
        if (el.tagName === 'SELECT' && el.dataset.f) { const obj = target(el); if (obj) { obj[el.dataset.f] = el.value; E.save(); E.render(); } }
      });
      // 칸을 벗어나면 목록 요약 갱신
      root.addEventListener('focusout', e => {
        if (e.target.dataset && e.target.dataset.f && e.target.tagName !== 'SELECT') {
          E.save();
          const nav = root.querySelector('.side');
          if (nav) nav.innerHTML = `<p class="rule">커먼앱 규정: AI가 만든 글을 내 글로 내면 부정행위</p>${navCurrent()}`;
        }
      });
    },
  };

  function navCurrent() {
    const r = E.route();
    return nav(['acts', 'honors', 'essay', 'addl', 'supp', 'other'].includes(r.sub) ? r.sub : 'acts');
  }
})();
