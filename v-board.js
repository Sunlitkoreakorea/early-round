// 전략 탭: 조합 검사, 칸, 리스트 균형, 12월 시나리오, ED 고르기
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, esc, chip, tierChip, ddTxt } = E;
  const CRIT = ['인지과학 전공', '연구 기회', '재정지원', '학부 환경'];

  function card(s, t, bad) {
    const pl = C.plan(s, t);
    const d = E.due(s, pl);
    const ch = E.chanceOf(s);
    return `<div class="card${bad ? ' bad' : ''}" data-go="${esc(s.id)}" role="link" tabindex="0">
      <div class="top">${chip(t)}${E.isStar(s) ? '<span class="cstar">★</span>' : ''}</div>
      <div class="nm">${esc(s.name)}</div>
      <div class="meta"><b>${C.md(d)}</b><span>${ddTxt(C.dday(d, E.today()))}</span>${s.intlAid ? `<span>${esc(E.AID[s.intlAid] || s.intlAid)}</span>` : ''}</div>
      ${ch.tier != null ? `<div class="meta">${tierChip(ch.tier, ch.label)}</div>` : ''}
      <button type="button" class="rm" data-rm="${esc(s.id)}" aria-label="빼기">×</button>
    </div>`;
  }

  function balanceHtml() {
    const base = E.chosen().length ? E.chosen() : E.live().filter(s => !s.own && s.group !== 'candidate' && s.group !== 'public');
    const items = base.map(s => Object.assign({ s }, E.chanceOf(s)));
    const b = C.balance(items);
    const total = items.length;
    if (!total) return '';
    const seg = b.n.map((n, i) => (n ? `<i class="bseg t${i}" style="flex:${n}" title="${C.TIERS[i]} ${n}"></i>` : '')).join('') + (b.unknown ? `<i class="bseg tn" style="flex:${b.unknown}"></i>` : '');
    const warn = st.profile.needAid && b.safe === 0
      ? '<ul class="issues"><li class="warn">적정이나 안정 학교가 없어요. 재정지원이 필요하면 미국 밖 학교도 같이 챙기세요</li></ul>' : '';
    return `<section class="slot">
      <header><h3>리스트 균형</h3><span>${E.chosen().length ? '고른 학교' : '제외 안 한 학교 전체'} ${total}곳</span></header>
      <div class="bbar">${seg}</div>
      <div class="blegend">${b.n.map((n, i) => `<span>${tierChip(i)} ${n}</span>`).join('')}${b.unknown ? `<span>${tierChip(null)} ${b.unknown}</span>` : ''}</div>
      ${warn}
    </section>`;
  }

  // 원서 비용: 원서비 + CSS Profile + SAT 점수 보내기
  function costHtml() {
    const c = C.appCost(E.all(), st.picks, st.profile);
    if (!c.rows.length) return '';
    const F = C.FEES;
    const money = n => `$${E.num(n)}`;
    const rows = c.rows.map(r => `<tr>
      <td><a href="#s/${encodeURIComponent(r.s.id)}">${esc(r.s.name)}</a></td>
      <td>${r.fee == null ? '<span class="fine">확인 필요</span>' : r.fee === 0 ? '무료' : money(r.fee)}</td>
      <td>${r.css === 'now' ? '○' : r.css === 'after' ? '<span class="fine">합격 후</span>' : '—'}</td>
      <td>${r.satSend === 'now' ? '○' : r.satSend === 'after' ? '<span class="fine">합격 후</span>' : '—'}</td>
      <td>${r.s.stats && r.s.stats.coa && (r.s.stats.coa.direct || r.s.stats.coa.total) ? money(r.s.stats.coa.direct || r.s.stats.coa.total) : '<span class="fine">—</span>'}</td>
    </tr>`).join('');
    return `<section class="slot">
      <header><h3>원서 비용</h3><span>고른 학교 ${c.rows.length}곳</span></header>
      <div class="tiles">
        <div class="tile"><div class="tk">지원할 때 합계</div><div class="tv">${money(c.total)}</div><div class="ts">${c.feeUnknown ? `원서비 모르는 학교 ${c.feeUnknown}곳 빼고` : '원서비 + CSS + SAT'}</div></div>
        <div class="tile"><div class="tk">원서비</div><div class="tv">${money(c.feeKnown)}</div></div>
        <div class="tile"><div class="tk">CSS Profile</div><div class="tv">${money(c.cssCost)}</div><div class="ts">${c.cssNow}곳: 첫 곳 $${F.cssFirst}, 추가 $${F.cssMore}${c.cssAfter ? `, 합격 후 ${c.cssAfter}곳 더` : ''}</div></div>
        <div class="tile"><div class="tk">SAT 점수 보내기</div><div class="tv">${money(c.satCost)}</div><div class="ts">${c.satNow}곳: 무료 ${F.satFree}곳 뒤 1곳 $${F.satReport}</div></div>
      </div>
      <table class="costT"><thead><tr><th>학교</th><th>원서비</th><th>CSS</th><th>SAT 보내기</th><th>1년 비용</th></tr></thead><tbody>${rows}</tbody></table>
      <p class="fine costNote">요금은 College Board 2026-27 기준 (CSS Profile 첫 곳 $25, 추가 $16 / SAT 시험 뒤 9일 안에 고른 4곳 무료, 그 뒤 $15). 점수 자기 보고가 되는 학교는 합격 후에만 공식 점수를 보내요.</p>
    </section>`;
  }

  // 미국 밖 선택지
  function intlHtml() {
    const list = window.INTL_OPTS || [];
    if (!list.length) return '';
    return `<section class="slot">
      <header><h3>미국 밖 선택지</h3><span>재정지원이 필요하면 같이 보기</span></header>
      <div class="intlList">${list.map(o => {
        const on = !!st.intlOpt[o.id];
        const d = o.deadline && /^\d{4}-\d{2}-\d{2}$/.test(o.deadline) ? C.parse(o.deadline) : null;
        const newCycle = (/\b2028 (admission|entry)|entry 2028/i.test(o.cycle || '') && !/not yet published/i.test(o.cycle || ''));
        return `<div class="intlCard${on ? ' on' : ''}">
          <div class="sumTop"><b class="sumName">${esc(o.name)}</b><span class="fine">${esc(o.country || '')}</span>
            <button type="button" class="starBtn${on ? ' on' : ''}" data-intl="${esc(o.id)}" aria-label="관심">${on ? '★' : '☆'}</button></div>
          <div class="sumFacts">
            <span><i>마감</i>${d ? `${newCycle ? '' : '<span class="fine">지난 시즌</span> '}<b>${d.getFullYear()}. ${C.md(d)}</b>` : '<span class="fine">확인 못 함</span>'}</span>
            ${o.cost ? `<span><i>비용</i>${esc(o.cost)}</span>` : ''}
          </div>
          ${o.notes ? `<p class="orig">${esc(o.notes)}</p>` : ''}
          <details class="more2"><summary>자세히</summary>
            ${o.cycle ? `<p class="orig fine">${esc(o.cycle)}</p>` : ''}
            ${o.deadlineNote ? `<p class="orig">${esc(o.deadlineNote)}</p>` : ''}
            ${o.scholarship ? `<p class="orig"><b>장학금</b> ${esc(o.scholarship)}</p>` : ''}
            ${o.programs ? `<p class="orig"><b>전공</b> ${esc(o.programs)}</p>` : ''}
            ${o.apAccepted ? `<p class="orig"><b>AP/SAT</b> ${esc(o.apAccepted)}</p>` : ''}
            ${o.english ? `<p class="orig"><b>영어</b> ${esc(o.english)}</p>` : ''}
          </details>
          <a class="lnk fine" href="${esc(o.url)}" target="_blank" rel="noopener">공식 ↗</a>
        </div>`;
      }).join('')}</div>
      <p class="fine costNote">날짜는 대부분 지난 시즌(2027 입학) 것이라 로드맵엔 안 넣어요. 보통 1년 뒤 비슷한 때라, 2028 입학 일정이 나오면 다시 확인하세요. 별은 관심 표시예요.</p>
    </section>`;
  }

  function scenHtml() {
    const sc = C.scenarios(E.all(), st.picks);
    if (!sc.length) return '';
    const ed2Row = list => (list.length
      ? `<div class="e2">${list.map(x => {
        const pl = C.plan(x, 'ED2');
        const ch = E.chanceOf(x, 'ED2');
        return `<a class="e2i${st.picks[x.id] === 'ED2' ? ' on' : ''}" href="#s/${encodeURIComponent(x.id)}">${esc(x.name)}<span class="fine">${C.md(E.due(x, pl))}</span>${tierChip(ch.tier, ch.label)}</a>`;
      }).join('')}</div>`
      : '<p class="fine">쓸 수 있는 ED2 학교가 없어요</p>');
    return `<section class="slot"><header><h3>12월 시나리오</h3></header>${sc.map(x => {
      const s = x.school;
      const notify = C.notifyKo(C.plan(s, x.type));
      return `<div class="scen">
        <div class="scHead">${chip(x.type)}<b>${esc(s.name)}</b><span class="fine">발표 ${esc(notify)}</span></div>
        <div class="scRow"><span class="out ok">합격</span><span>${x.binding ? '나머지 지원 모두 취소, 재정지원 확인 후 등록' : '5월 1일까지 결정, 다른 지원은 계속'}</span></div>
        <div class="scRow"><span class="out mid">보류</span><span>정시로 넘어감. 1월에 성적 업데이트와 계속 관심 편지, ED2도 가능${x.binding ? ' (보류면 대부분 구속이 풀리지만 학교별 확인)' : ''}</span></div>
        <div class="scRow"><span class="out no">불합격</span><span>정시 원서 계속 + ED2 중 하나</span></div>
        <div class="scSub">ED2로 쓸 수 있는 곳</div>
        ${ed2Row(x.ed2)}
      </div>`;
    }).join('')}</section>`;
  }

  function compareHtml() {
    const ids = st.compare.ids.filter(id => E.byId(id));
    const cols = ids.map(id => {
      const s = E.byId(id);
      const sc = st.compare.score[id] || {};
      const sum = CRIT.reduce((a, _, i) => a + (sc[i] || 0), 0);
      const ed = s.stats && s.stats.ed && s.stats.ed.rate != null ? `${s.stats.ed.rate}%` : '—';
      const ch = E.chanceOf(s, C.plan(s, 'ED') ? 'ED' : undefined);
      return `<div class="cmpCol">
        <div class="cmpHead"><a href="#s/${encodeURIComponent(id)}">${esc(s.name)}</a><button type="button" class="rm" data-cmp-rm="${esc(id)}" aria-label="빼기">×</button></div>
        <div class="cmpFact"><span>ED 합격률</span><b>${ed}</b></div>
        <div class="cmpFact"><span>재정지원</span><b>${esc(E.AID[s.intlAid] || '—')}</b></div>
        <div class="cmpFact"><span>가능성</span>${tierChip(ch.tier, ch.label)}</div>
        ${CRIT.map((c, i) => `<div class="cmpCrit"><span>${c}</span>
          <div class="step"><button type="button" data-cs="${esc(id)}" data-ci="${i}" data-d="-1" aria-label="${c} 빼기">−</button><b>${sc[i] || 0}</b><button type="button" data-cs="${esc(id)}" data-ci="${i}" data-d="1" aria-label="${c} 더하기">＋</button></div></div>`).join('')}
        <div class="cmpSum"><span>합계</span><b>${sum}</b><span class="fine">/ 20</span></div>
      </div>`;
    }).join('');
    return `<section class="slot">
      <header><h3>ED 고르기</h3><span>2~3곳 나란히</span></header>
      <div class="cmp">${cols}${ids.length < 3 ? '<button type="button" class="addCard cmpAdd" data-cmp-add>+ 학교</button>' : ''}</div>
    </section>`;
  }

  function openPicker(key) {
    const sl = C.SLOTS.find(x => x.key === key);
    const draw = () => {
      const rows = [];
      for (const s of E.all()) {
        for (const t of sl.types) {
          const pl = C.plan(s, t);
          if (!pl) continue;
          const on = st.picks[s.id] === t;
          const clash = !on && C.wouldConflict(E.all(), st.picks, s.id, t);
          const other = !on && st.picks[s.id] && st.picks[s.id] !== 'X' ? st.picks[s.id] : null;
          rows.push({ s, t, pl, on, clash, other });
        }
      }
      rows.sort((a, b) => (b.on - a.on) || (E.isStar(b.s) - E.isStar(a.s)) || (E.due(a.s, a.pl) - E.due(b.s, b.pl)));
      const body = rows.length ? rows.map(r => `<button type="button" class="pick${r.on ? ' on' : ''}" data-id="${esc(r.s.id)}" data-t="${r.t}">
          <span class="box">${r.on ? '✓' : ''}</span>
          <span><span class="nm">${E.isStar(r.s) ? '<span class="cstar">★</span> ' : ''}${esc(r.s.name)}</span>
            <span class="sub"> ${C.md(E.due(r.s, r.pl))}${r.other ? `, 지금 ${r.other === 'RD' ? '정시' : r.other}` : ''}</span></span>
          ${r.clash ? '<span class="warnTag">충돌</span>' : '<span></span>'}
          ${chip(r.t)}
        </button>`).join('') : '<p class="empty">이 방식이 있는 학교가 없어요</p>';
      E.openSheet(`${sl.title} 고르기`, `<div class="body">${body}</div>`, sh => {
        sh.querySelectorAll('.pick').forEach(b => b.addEventListener('click', () => {
          const id = b.dataset.id;
          if (st.picks[id] === b.dataset.t) delete st.picks[id]; else st.picks[id] = b.dataset.t;
          E.save(); draw(); E.render();
        }));
      });
    };
    draw();
  }

  function openCmpPicker() {
    const list = E.live().filter(s => !s.own && !st.compare.ids.includes(s.id))
      .sort((a, b) => (E.isStar(b) - E.isStar(a)) || a.name.localeCompare(b.name));
    E.openSheet('비교할 학교', `<div class="body">${list.map(s => `<button type="button" class="pick" data-cid="${esc(s.id)}"><span class="box"></span><span class="nm">${E.isStar(s) ? '<span class="cstar">★</span> ' : ''}${esc(s.name)}</span><span></span>${C.plan(s, 'ED') ? chip('ED') : '<span></span>'}</button>`).join('')}</div>`, sh => {
      sh.querySelectorAll('[data-cid]').forEach(b => b.addEventListener('click', () => {
        st.compare.ids.push(b.dataset.cid);
        E.save(); E.closeSheet(); E.render();
      }));
    });
  }

  E.views.board = {
    render(r, res) {
      const bad = res.issues.filter(i => i.level === 'bad');
      const badIds = new Set(bad.flatMap(i => i.ids));
      let verdict;
      if (!res.chosen.length) verdict = '<div class="verdict none"><span class="ic"></span>아직 고른 학교가 없어요</div>';
      else if (bad.length) verdict = '<div class="verdict bad"><span class="ic">✕</span>같이 못 쓰는 조합이 있어요</div>';
      else verdict = '<div class="verdict ok"><span class="ic">✓</span>이 조합은 가능해요</div>';
      const slots = C.SLOTS.map(sl => {
        const items = res.chosen.filter(c => sl.types.includes(c.t));
        return `<section class="slot">
          <header><h3>${sl.title}</h3>${sl.sub ? `<span>${sl.sub}</span>` : ''}</header>
          <div class="cards">${items.map(({ s, t }) => card(s, t, badIds.has(s.id))).join('')}<button type="button" class="addCard" data-slot="${sl.key}">+ 추가</button></div>
        </section>`;
      }).join('');
      $('#view-board').innerHTML = `${verdict}${res.issues.length ? `<ul class="issues">${res.issues.map(i => `<li class="${i.level}">${esc(i.msg)}</li>`).join('')}</ul>` : ''}${slots}${balanceHtml()}${E.ucasHtml ? E.ucasHtml() : ''}${intlHtml()}${scenHtml()}${compareHtml()}${costHtml()}`;
    },
    bind() {
      $('#view-board').addEventListener('click', e => {
        const t = e.target;
        const rm = t.closest('[data-rm]');
        if (rm) { e.stopPropagation(); delete st.picks[rm.dataset.rm]; E.save(); E.render(); return; }
        const slot = t.closest('[data-slot]');
        if (slot) { openPicker(slot.dataset.slot); return; }
        if (t.closest('[data-cmp-add]')) { openCmpPicker(); return; }
        const crm = t.closest('[data-cmp-rm]');
        if (crm) { st.compare.ids = st.compare.ids.filter(x => x !== crm.dataset.cmpRm); E.save(); E.render(); return; }
        const io = t.closest('[data-intl]');
        if (io) { const id = io.dataset.intl; if (st.intlOpt[id]) delete st.intlOpt[id]; else st.intlOpt[id] = true; E.save(); E.render(); return; }
        const cs = t.closest('[data-cs]');
        if (cs) {
          const id = cs.dataset.cs;
          const i = cs.dataset.ci;
          st.compare.score[id] = st.compare.score[id] || {};
          st.compare.score[id][i] = Math.max(0, Math.min(5, (st.compare.score[id][i] || 0) + Number(cs.dataset.d)));
          E.save(); E.render();
        }
      });
    },
  };
})();
