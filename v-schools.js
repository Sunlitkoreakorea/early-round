// 학교 탭: 목록 + 상세
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, esc, chip, tierChip, ddTxt } = E;

  const DOCS = [
    ['supp', '보충 에세이'],
    ['rec', '추천서'],
    ['eng', '영어 시험'],
    ['test', '점수 보내기'],
    ['aid', '재정 서류'],
    ['intv', '인터뷰 신청'],
    ['fee', '원서비'],
  ];
  const SUPP_TYPE = { why: 'Why 학교/전공', community: '공동체', intellectual: '지적 호기심', background: '배경/정체성', activity: '활동 설명', short: '짧은 답', other: '기타' };
  const SUPP_STATUS = [['', '아직'], ['draft', '초안'], ['done', '완성']];
  const FIELD = {
    plans: '일정', aidDeadlines: '재정 서류 마감', meetsNeed: '전액 충족', intlAid: '재정지원 방식', supplements: '보충 에세이',
    cogsci: '인지과학', interview: '인터뷰', english: '영어 시험', testing: '시험', testingNote: '시험', ed2Elsewhere: '다른 학교 ED2',
    publicEA: '공립 EA', commonApp: '커먼앱', aidForms: '재정 서류', notifyDate: '발표일', earlyRule: '얼리 규칙',
  };

  // 확인 못 한 칸 이름을 한국어로
  function fieldKo(k) {
    if (FIELD[k]) return FIELD[k];
    const rules = [
      [/notif/i, '발표일'], [/netprice/i, '순비용 계산기'], [/fee/i, '원서비'], [/interview/i, '인터뷰'],
      [/supplement|short take|essay|prompt|member question/i, '보충 에세이'], [/english|toefl|ielts|duolingo/i, '영어 시험'],
      [/cogsci|cognitive/i, '인지과학'], [/aid|css|need|finaid|meets/i, '재정지원'], [/rec/i, '추천서'],
      [/sat|act|test/i, '시험 통계'], [/plans|deadline|ed2|date/i, '일정'],
      [/firstyear|intl|applied|admit|\bed\b|\bea\b|c2[12]|h6|b2|cds/i, '통계'], [/application|platform|coalition|questbridge/i, '지원서'],
      [/midyear/i, '중간 성적표'], [/counselor/i, '추천서'], [/portfolio/i, '추가 자료'],
    ];
    for (const [re, ko] of rules) if (re.test(k)) return ko;
    return k;
  }

  // 인터뷰가 있는 학교인지 (문장에 "no ... interview", "does not conduct interviews" 등이 있으면 없음)
  function hasInterview(text) {
    if (!text) return false;
    if (/^\s*none\b/i.test(text)) return false;
    if (/\b(no|not|does not|doesn't)\b[^.;]*\binterviews?\b/i.test(text)) return false;
    return /interview/i.test(text);
  }

  // 학교별로 실제 해당하는 서류만
  function docsFor(s) {
    const r = s.req || {};
    const out = [];
    const supp = r.supplements || [];
    if (supp.length) out.push(['supp', `보충 에세이 ${supp.reduce((a, x) => a + (x.count || 1), 0)}개`]);
    const tr = r.teacherRecs;
    if (tr && tr.required) out.push(['rec', `추천서: 선생님 ${tr.required}${tr.otherRequired ? ` + 기타 ${tr.otherRequired}` : ''}${r.counselorRec ? ' + 카운슬러' : ''}`]);
    else if (!(tr && tr.required === 0)) out.push(['rec', '추천서']);
    if (s.english && !/not required|no english|not mandatory/i.test(s.english)) out.push(['eng', '영어 시험']);
    const adv = C.submitAdvice(s, s.stats, C.satOf(st.profile));
    if (adv.key === 'required' || adv.key === 'submit' || adv.key === 'maybe') out.push(['test', '점수 보내기']);
    if (st.profile.needAid || (s.aidForms && s.aidForms.length)) out.push(['aid', s.aidAfter ? '재정 서류 (합격 후)' : '재정 서류']);
    if (hasInterview(r.interview || s.interview)) out.push(['intv', '인터뷰']);
    out.push(['fee', r.fee ? `원서비 $${r.fee}` : '원서비']);
    return out;
  }

  /* ───── 목록 ───── */
  function renderList(selId, res) {
    const pickOf = E.pickOf;
    const groups = [
      ['early', '11월 얼리', s => ['ED', 'REA', 'SCEA', 'EA'].includes(pickOf(s))],
      ['ed2', '1월 ED2', s => pickOf(s) === 'ED2'],
      ['rd', '정시', s => pickOf(s) === 'RD'],
      ['none', '미정', s => !pickOf(s) && s.group !== 'explore' && s.group !== 'candidate'],
      ['explore', '탐색 후보', s => !pickOf(s) && s.group === 'explore'],
      ['cand', '보강 후보', s => !pickOf(s) && s.group === 'candidate'],
      ['x', '제외', s => pickOf(s) === 'X'],
    ];
    const bad = new Set(res.issues.filter(i => i.level === 'bad').flatMap(i => i.ids));
    let html = '';
    for (const [key, label, fn] of groups) {
      const items = E.all().filter(fn).sort((a, b) => E.isStar(b) - E.isStar(a));
      if (!items.length) continue;
      const fold = key === 'x' || key === 'cand';
      const open = !fold || st.open[key] || items.some(s => s.id === selId);
      html += `<div class="grp${fold ? ' fold' : ''}${fold && open ? ' open' : ''}" ${fold ? `data-fold="${key}"` : ''}>${label} ${items.length}</div>`;
      if (!open) continue;
      for (const s of items) html += rowHtml(s, s.id === selId, bad.has(s.id));
    }
    $('#list').innerHTML = html;
  }

  function rowHtml(s, on, bad) {
    const p = E.pickOf(s);
    const chips = p && p !== 'X'
      ? chip(p)
      : C.sortPlans(s.plans || []).filter(x => x.type !== 'RD').map(x => chip(x.type, 'ghost')).join('') || chip('RD', 'ghost');
    const kp = E.keyPlan(s);
    const n = kp && p !== 'X' ? C.dday(E.due(s, kp), E.today()) : null;
    const ch = s.own ? null : E.chanceOf(s);
    return `<a class="row${on ? ' on' : ''}${p === 'X' ? ' x' : ''}" href="#s/${encodeURIComponent(s.id)}">
      <span class="star">${E.isStar(s) ? '★' : ''}</span>
      <span class="nm">${esc(s.name)}${bad ? '<span class="bad" title="충돌"></span>' : ''}</span>
      <span class="chips">${chips}</span>
      <span class="tb">${ch && ch.tier != null ? `<i class="tdot t${ch.tier}" title="${ch.label}"></i>` : ''}</span>
      <span class="dd">${ddTxt(n)}</span>
    </a>`;
  }

  /* ───── 상세 ───── */
  function renderDetail(id, res) {
    const el = $('#detail');
    const s = id && E.byId(id);
    if (!s) { el.innerHTML = ''; return; }
    const p = E.pickOf(s);
    const plans = C.sortPlans(s.plans || []);
    const segs = plans.map(x => `<button type="button" data-pick="${x.type}" class="${p === x.type ? 'on' : ''}" aria-pressed="${p === x.type}">${chip(x.type)}<span>${C.md(E.due(s, x))}</span></button>`).join('')
      + `<button type="button" class="x${p === 'X' ? ' on' : ''}" data-pick="X" aria-pressed="${p === 'X'}">제외</button>`;
    const iss = res.issues.filter(i => i.ids.includes(s.id));
    const loc = s.loc ? `${esc(s.loc.city)}, ${esc(s.loc.state)}` : '';

    el.innerHTML = `
      <div class="dhead">
        <div class="backWrap"><a class="back" href="#">‹ 목록</a></div>
        <div class="title">
          <h2>${esc(s.name)} <button type="button" class="starBtn${E.isStar(s) ? ' on' : ''}" data-star aria-label="드림 표시">${E.isStar(s) ? '★' : '☆'}</button></h2>
          <p class="full">${esc(s.full || '')}${loc ? `<span class="loc">${loc}</span>` : ''}</p>
        </div>
        ${s.url ? `<a class="ext" href="${esc(s.url)}" target="_blank" rel="noopener">입학처 ↗</a>` : ''}
      </div>
      <div class="seg" role="group" aria-label="지원 방식">${segs}</div>
      ${iss.length ? `<ul class="issues">${iss.map(i => `<li class="${i.level}">${esc(i.msg)}</li>`).join('')}</ul>` : ''}
      ${s.own ? '' : chanceHtml(s)}
      <section class="sec">
        <h3>일정 ${s.own ? '' : '<span class="fine">2026-27 날짜를 1년 뒤로 옮김</span>'}</h3>
        <table class="sched">${plans.map(x => {
          const d = E.due(s, x);
          return `<tr class="${p === x.type ? 'mine' : ''}"><td>${chip(x.type)}</td>
            <td><div class="big">${d ? `${d.getMonth() + 1}월 ${d.getDate()}일` : '미확인'}</div><div class="sub">${x.notify || x.notifyDate ? `발표 ${esc(C.notifyKo(x))}` : ''}</div></td>
            <td class="dd">${ddTxt(C.dday(d, E.today()))}</td></tr>`;
        }).join('')}</table>
      </section>
      ${s.own ? '' : rulesHtml(s)}
      ${s.own ? '' : statsHtml(s)}
      ${s.own ? '' : aidHtml(s)}
      ${s.own ? '' : suppHtml(s)}
      <section class="sec">
        <h3>서류</h3>
        <div class="todos">${(s.own ? DOCS.filter(([k]) => ['supp', 'rec', 'test', 'aid', 'fee'].includes(k)) : docsFor(s)).map(([k, label]) => {
          const on = !!(st.todo[s.id] && st.todo[s.id][k]);
          return `<button type="button" class="sw${on ? ' on' : ''}" data-todo="${k}" role="switch" aria-checked="${on}"><span>${esc(label)}</span><span class="knob"></span></button>`;
        }).join('')}</div>
      </section>
      ${s.own ? '' : factsHtml(s)}
      <section class="sec">
        <h3>메모</h3>
        <textarea class="memo" data-memo>${esc(st.memo[s.id] || '')}</textarea>
      </section>
      ${s.own ? '<button type="button" class="del" data-del>이 학교 지우기</button>' : srcHtml(s)}
    `;
  }

  function chanceHtml(s) {
    const p = E.pickOf(s);
    const sat = C.satOf(st.profile);
    const ch = E.chanceOf(s);
    const hasTarget = st.profile.target && st.profile.target.rw && st.profile.target.math;
    const toggle = hasTarget && st.profile.sat.rw
      ? `<div class="mini sm" role="group"><button type="button" data-view-score="now" class="${st.profile.useTarget ? '' : 'on'}">지금 ${st.profile.sat.rw + st.profile.sat.math}</button><button type="button" data-view-score="target" class="${st.profile.useTarget ? 'on' : ''}">목표 ${st.profile.target.rw + st.profile.target.math}</button></div>`
      : '';
    const noProfile = !sat && !st.profile.needAid ? '<a class="hint" href="#me">나 탭에서 점수를 넣으면 더 정확해져요</a>' : '';
    return `<section class="sec chance">
      <div class="chHead"><h3>가능성 ${p && p !== 'X' && p !== 'RD' ? `<span class="fine">${p} 기준</span>` : ''}</h3>${toggle}</div>
      <div class="chBody">${tierChip(ch.tier, ch.label)}<ul class="why">${ch.reasons.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>
      ${noProfile}
    </section>`;
  }

  function rulesHtml(s) {
    const types = (s.plans || []).map(x => x.type);
    const f = [];
    const yn = (ok, txt) => f.push(`<span class="fact ${ok ? 'yes' : 'no'}">${ok ? '○' : '✕'} ${txt}</span>`);
    if (types.includes('REA') || types.includes('SCEA')) {
      f.push('<span class="fact no">✕ 다른 사립대 얼리</span>');
      if (s.publicEA != null) yn(s.publicEA, '공립대 EA');
      if (s.ed2Elsewhere != null) yn(s.ed2Elsewhere, '다른 학교 ED2');
    }
    if (types.includes('ED')) f.push('<span class="fact"><b>ED</b> 붙으면 꼭 등록</span>');
    if (types.includes('ED2')) f.push('<span class="fact"><b>ED2</b> 1월, 붙으면 꼭 등록</span>');
    if (types.includes('EA')) f.push('<span class="fact"><b>EA</b> 구속 없음</span>');
    if (!types.some(t => t !== 'RD')) f.push('<span class="fact">얼리 없음</span>');
    if (s.commonApp === false) f.push('<span class="fact no">커먼앱 아님</span>');
    return `<section class="sec"><h3>얼리 규칙</h3><div class="facts">${f.join('')}</div>${s.earlyRule ? `<p class="orig">${esc(s.earlyRule)}</p>` : ''}</section>`;
  }

  // SAT 범위 막대: 25~75 띠, 50 눈금, 내 점수 점
  function rangeBar(label, arr, mine) {
    if (!arr || arr[0] == null || arr[2] == null) return `<div class="rb"><span class="rbL">${label}</span><span class="rbNa">자료 없음</span></div>`;
    const lo = 500;
    const hi = 800;
    const pct = v => `${Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100))}%`;
    const pos = mine != null ? C.sectionPos(mine, arr) : null;
    return `<div class="rb">
      <span class="rbL">${label}</span>
      <span class="rbT">
        <i class="band" style="left:${pct(arr[0])};width:calc(${pct(arr[2])} - ${pct(arr[0])})"></i>
        ${arr[1] != null ? `<i class="med" style="left:${pct(arr[1])}"></i>` : ''}
        ${mine != null ? `<i class="you ${pos}" style="left:${pct(mine)}" title="내 점수 ${mine}"></i>` : ''}
      </span>
      <span class="rbV">${arr[0]}–${arr[2]}${mine != null ? ` <b class="${pos}">${mine}</b>` : ''}</span>
    </div>`;
  }

  function statsHtml(s) {
    const t = s.stats;
    if (!t) return '';
    const sat = C.satOf(st.profile);
    const adv = C.submitAdvice(s, t, sat);
    const tiles = [];
    const tile = (k, v, sub) => tiles.push(`<div class="tile"><div class="tk">${k}</div><div class="tv">${v}</div>${sub ? `<div class="ts">${sub}</div>` : ''}</div>`);
    if (t.admitRate != null) tile('전체 합격률', `${t.admitRate}%`, t.admitted != null && t.applied ? `${E.num(t.admitted)} / ${E.num(t.applied)}` : esc(t.rateNote || ''));
    if (t.ed && t.ed.rate != null) tile('ED 합격률', `${t.ed.rate}%`, `${E.num(t.ed.admitted)} / ${E.num(t.ed.applied)}`);
    if (t.ea && t.ea.rate != null) {
      const et = (s.plans || []).find(x => ['EA', 'REA', 'SCEA'].includes(x.type));
      tile(`${et ? et.type : 'EA'} 합격률`, `${t.ea.rate}%`, `${E.num(t.ea.admitted)} / ${E.num(t.ea.applied)}`);
    }
    if (t.intl && t.intl.rate != null) tile('국제학생 합격률', `${t.intl.rate}%`, `${E.num(t.intl.admitted)} / ${E.num(t.intl.applied)}`);
    if (t.intlFirstYear != null && t.firstYearTotal) tile('신입생 중 국제학생', `${((t.intlFirstYear / t.firstYearTotal) * 100).toFixed(1)}%`, `${E.num(t.intlFirstYear)}명`);
    if (t.intlAidCount != null) tile('재정지원 받는 국제학생', `${E.num(t.intlAidCount)}명`, t.intlAidAvg ? `평균 $${E.num(t.intlAidAvg)}` : '');
    const advTxt = { required: '필수', blind: '안 봄', submit: '내기', maybe: '애매 (안 내는 쪽)', skip: '안 내기', nodata: '자료 없음', noscore: '점수 없음' }[adv.key];
    const bars = s.testing === 'blind' ? '' : `<div class="bars">
        ${rangeBar('RW', t.satEBRW, sat ? sat.rw : null)}
        ${rangeBar('Math', t.satMath, sat ? sat.math : null)}
        <div class="advice"><span>점수 내기</span><b class="adv-${adv.key}">${advTxt}</b>${adv.p50 && adv.key !== 'required' ? `<span class="fine">중간값 합계 ${adv.p50}</span>` : ''}${t.satSubmitPct != null ? `<span class="fine">신입생 ${t.satSubmitPct}%가 SAT 제출</span>` : ''}</div>
      </div>`;
    return `<section class="sec">
      <h3>합격 통계 <span class="fine">${t.cdsYear ? (/^\d{4}-\d{4}$/.test(t.cdsYear) ? `CDS ${esc(t.cdsYear)}` : esc(t.cdsYear)) : ''}${t.scoreBasis ? `, 점수는 ${esc(t.scoreBasis)} 기준` : ''}</span></h3>
      ${tiles.length ? `<div class="tiles">${tiles.join('')}</div>` : ''}
      ${t.intlNote ? `<p class="orig">${esc(t.intlNote)}</p>` : ''}
      ${bars}
    </section>`;
  }

  function aidHtml(s) {
    const f = [];
    if (s.intlAid) f.push(`<span class="fact ${s.intlAid === 'need-blind' ? 'yes' : s.intlAid === 'need-aware' ? '' : 'no'}"><b>${esc(E.AID[s.intlAid] || s.intlAid)}</b></span>`);
    if (s.meetsNeed === true) f.push('<span class="fact yes">필요 금액 전액 충족</span>');
    if (s.meetsNeed === false) f.push('<span class="fact no">전액 충족 아님</span>');
    if (s.aidAfter) f.push('<span class="fact">서류는 합격 후 제출</span>');
    const ad = s.aidDeadlines || {};
    for (const [k, label] of [['early', '얼리'], ['ed2', 'ED2'], ['rd', '정시']]) if (ad[k]) f.push(`<span class="fact">${label} 서류 <b>${C.md(C.shifted(ad[k]))}</b></span>`);
    const r = s.req || {};
    if (r.cssCode) f.push(`<span class="fact">CSS 코드 <b>${esc(r.cssCode)}</b></span>`);
    const forms = s.aidForms && s.aidForms.length ? `<p class="orig">${esc(s.aidForms.join(' / '))}</p>` : '';
    const npc = r.netPriceUrl ? `<p class="orig"><a class="lnk" href="${esc(r.netPriceUrl)}" target="_blank" rel="noopener">순비용 계산기 ↗</a>${r.netPriceIntl === false ? ' 국제학생 가정엔 안 맞는다고 학교가 밝힘' : ''}</p>` : '';
    return `<section class="sec"><h3>재정지원 <span class="fine">국제학생</span></h3><div class="facts">${f.join('')}</div>${forms}${npc}</section>`;
  }

  function suppHtml(s) {
    const r = s.req;
    if (!r) return '';
    const list = r.supplements || [];
    const mine = st.apply.supp[s.id] || {};
    const rows = list.map((x, i) => {
      const lim = x.words ? `${x.words}단어` : x.chars ? `${x.chars}자` : '';
      const cnt = x.count > 1 ? ` ×${x.count}` : '';
      const status = mine[i] || '';
      return `<li class="sp">
        <div class="spTop"><span class="stype">${SUPP_TYPE[x.type] || x.type}</span><span class="slim">${lim}${cnt}${x.choose ? `, ${esc(x.choose)}` : ''}${x.required === false ? ', 선택' : ''}</span></div>
        <div class="ssum">${esc(x.summary || '')}</div>
        <div class="mini sm" role="group">${SUPP_STATUS.map(([k, l]) => `<button type="button" data-supp="${i}" data-sv="${k}" class="${status === k ? 'on' : ''}">${l}</button>`).join('')}</div>
      </li>`;
    }).join('');
    const empty = !list.length ? `<p class="orig">${/none|no (additional )?(writing )?supplement/i.test(s.supplements || '') ? '보충 에세이 없음' : '질문 목록 확인 못 함'}</p>` : '';
    return `<section class="sec"><h3>보충 에세이 <span class="fine">2026-27 기준</span>${r.supplementsUrl ? `<a class="lnk fine" href="${esc(r.supplementsUrl)}" target="_blank" rel="noopener">질문 원문 ↗</a>` : ''}</h3>${rows ? `<ul class="supps">${rows}</ul>` : ''}${empty}</section>`;
  }

  function factsHtml(s) {
    const r = s.req || {};
    const rows = [];
    const add = (k, lead, v) => { if (lead || v) rows.push(`<dt>${k}</dt><dd>${lead ? `<span class="lead">${esc(lead)}</span>` : ''}${esc(v || '')}</dd>`); };
    add('지원서', '', r.application);
    if (r.appFormat) add('형식', '', r.appFormat);
    add('시험', E.TEST[s.testing] || s.testing, s.testingNote);
    add('영어', '', s.english);
    if (r.teacherRecs) {
      const tr = r.teacherRecs;
      const lead = tr.required == null ? '' : tr.required === 0 ? '안 받음' : `선생님 ${tr.required}${tr.otherRequired ? ` + 기타 ${tr.otherRequired}` : ''}${tr.optionalExtra ? ` + 선택 ${tr.optionalExtra}` : ''}`;
      add('추천서', lead, tr.note);
    }
    add('인터뷰', r.interviewDeadline ? `신청 ${C.md(C.shifted(r.interviewDeadline))}` : '', r.interview || s.interview);
    add('원서비', r.fee ? `$${r.fee}` : '', r.feeWaiver);
    const pol = s.policy;
    if (pol) {
      const mo = x => { const m = C.monthOf(x); return m ? `${m}월` : null; };
      const parts = [
        pol.superscore === true ? '최고점 합산' : pol.superscore === false ? '최고점 합산 안 함' : null,
        pol.selfReport === true ? '자기 보고 가능' : pol.selfReport === false ? '공식 점수 필요' : null,
        mo(pol.lastSatEarly) ? `얼리 SAT ${mo(pol.lastSatEarly)}까지` : null,
        mo(pol.lastSatRD) ? `정시 SAT ${mo(pol.lastSatRD)}까지` : null,
      ].filter(Boolean);
      if (parts.length || pol.note) add('점수 정책', parts.join(', '), `${pol.note || ''}${mo(pol.lastSatEarly) || mo(pol.lastSatRD) ? ' (시험 달은 학교 안내 기준, 권장일 수 있음)' : ''}`);
    }
    add('인지과학', '', s.cogsci);
    if (s.meritIntl) add('장학금', '', s.meritIntl);
    if (s.why) add('보강 이유', '', s.why);
    if (r.portfolio) add('추가 자료', '', r.portfolio);
    if (s.nextCycle) add('내년 변경', '', s.nextCycle);
    return rows.length ? `<section class="sec"><dl class="dl">${rows.join('')}</dl></section>` : '';
  }

  function srcHtml(s) {
    const urls = [...new Set([...(s.sources || []), ...((s.req && s.req.sources) || []), ...(s.stats && s.stats.source ? [s.stats.source] : []), ...(s.stats && s.stats.intlSource ? [s.stats.intlSource] : [])])];
    const links = urls.map((u, i) => `<a href="${esc(u)}" target="_blank" rel="noopener">출처 ${i + 1}</a>`).join('');
    const uns = [...new Set([...(s.uncertain || []), ...((s.req && s.req.uncertain) || []), ...((s.stats && s.stats.uncertain) || [])]
      .map(u => fieldKo(String(u).split(':')[0].trim())))];
    const vf = s.verified || {};
    const vs = k => { const v = String(vf[k] || ''); return v.startsWith('ok') ? '확인됨' : v.startsWith('partial') ? '일부' : v.startsWith('filled') ? '보충 자료 (한 번 확인)' : v.startsWith('unreachable') ? '못 함' : '안 함'; };
    const second = s.verified ? `<span>두 번째 대조: 통계 ${vs(s.group === 'candidate' ? 'cand' : 'stats')}${s.req ? `, 서류 ${vs('req')}` : ''}${s.policy ? `, 점수 정책 ${vs('policy')}` : ''}</span>` : '';
    return `<div class="src"><span>확인 ${esc(s.checked || window.DATA_CHECKED || '')}</span>${second}${links}${uns.length ? `<span class="unsure">공식 페이지로 확정 못 한 것: ${esc(uns.join(', '))}</span>` : ''}</div>`;
  }

  /* ───── 그리기, 이벤트 ───── */
  function current() {
    const r = E.route();
    if (r.tab !== 'schools') return null;
    if (r.id && E.byId(r.id)) return E.byId(r.id);
    const on = document.querySelector('.row.on');
    return on ? E.byId(decodeURIComponent(on.getAttribute('href').slice(3))) : null;
  }

  E.views.schools = {
    render(r, res) {
      let id = r.id && E.byId(r.id) ? r.id : null;
      const narrow = matchMedia('(max-width: 760px)').matches;
      if (!id && !narrow) id = (E.all().find(E.isStar) || E.all()[0] || {}).id || null;
      renderList(id, res);
      renderDetail(id, res);
      $('#view-schools').classList.toggle('open', !!(r.id && E.byId(r.id)));
    },
    bind() {
      const root = $('#view-schools');
      root.addEventListener('click', e => {
        const t = e.target;
        const fd = t.closest('[data-fold]');
        if (fd) { const k = fd.dataset.fold; st.open[k] = !st.open[k]; E.save(); E.render(); return; }
        const s = current();
        if (!s) return;
        const pk = t.closest('[data-pick]');
        if (pk) {
          const v = pk.dataset.pick;
          if (st.picks[s.id] === v) delete st.picks[s.id]; else st.picks[s.id] = v;
          E.save(); E.render(); return;
        }
        if (t.closest('[data-star]')) { st.star[s.id] = !E.isStar(s); E.save(); E.render(); return; }
        const td = t.closest('[data-todo]');
        if (td) {
          st.todo[s.id] = st.todo[s.id] || {};
          st.todo[s.id][td.dataset.todo] = !st.todo[s.id][td.dataset.todo];
          E.save(); E.render(); return;
        }
        const sp = t.closest('[data-supp]');
        if (sp) {
          st.apply.supp[s.id] = st.apply.supp[s.id] || {};
          st.apply.supp[s.id][sp.dataset.supp] = sp.dataset.sv;
          E.save(); E.render(); return;
        }
        const vs = t.closest('[data-view-score]');
        if (vs) { st.profile.useTarget = vs.dataset.viewScore === 'target'; E.save(); E.render(); return; }
        if (t.closest('[data-del]') && s.own) {
          if (!confirm(`${s.name}을(를) 지울까요?`)) return;
          st.custom = st.custom.filter(x => x.id !== s.id);
          for (const k of ['picks', 'todo', 'memo', 'star']) delete st[k][s.id];
          E.save();
          location.hash = '#';
        }
      });
      root.addEventListener('input', e => {
        if (!e.target.matches('[data-memo]')) return;
        const s = current();
        if (!s) return;
        st.memo[s.id] = e.target.value;
        E.save(false);
      });
    },
  };

  E.SUPP_TYPE = SUPP_TYPE;
})();
