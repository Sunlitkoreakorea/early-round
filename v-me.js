// 나 탭: 점수, 재정지원, AP, GPA + 학교별 가능성 한눈에
(() => {
  'use strict';
  const E = window.EP;
  const { C, st, $, esc, chip, tierChip } = E;
  const AP_LIST = ['Biology', 'Psychology', 'Calculus BC', 'Chemistry', 'English Language', 'Microeconomics', 'Statistics', 'Computer Science A', 'Physics 1'];

  function stepper(key, val, label) {
    return `<div class="meStep"><span class="lbl">${label}</span>
      <div class="step"><button type="button" data-sat="${key}" data-d="-10" aria-label="${label} 10 내리기">−</button><b>${val ?? '—'}</b><button type="button" data-sat="${key}" data-d="10" aria-label="${label} 10 올리기">＋</button></div></div>`;
  }

  function overview() {
    const list = E.live().filter(s => !s.own).map(s => Object.assign({ s }, E.chanceOf(s)));
    list.sort((a, b) => ((b.tier ?? -1) - (a.tier ?? -1)) || a.s.name.localeCompare(b.s.name));
    return `<div class="ov">${list.map(x => {
      const p = E.pickOf(x.s);
      return `<a class="ovRow" href="#s/${encodeURIComponent(x.s.id)}">${tierChip(x.tier, x.label)}<span class="nm">${E.isStar(x.s) ? '<span class="cstar">★</span> ' : ''}${esc(x.s.name)}</span>${p ? chip(p) : '<span></span>'}</a>`;
    }).join('')}</div>`;
  }

  E.views.me = {
    render() {
      const p = st.profile;
      const now = p.sat.rw && p.sat.math ? p.sat.rw + p.sat.math : null;
      const tgt = p.target.rw && p.target.math ? p.target.rw + p.target.math : null;
      $('#view-me').innerHTML = `
        <div class="meGrid">
          <div class="meCol">
            <section class="card2">
              <h3>SAT</h3>
              <div class="satRow"><span class="satK">지금</span>${stepper('sat.rw', p.sat.rw, 'RW')}${stepper('sat.math', p.sat.math, 'Math')}<span class="satT">${now ?? '—'}</span></div>
              <div class="satRow"><span class="satK">목표</span>${stepper('target.rw', p.target.rw, 'RW')}${stepper('target.math', p.target.math, 'Math')}<span class="satT">${tgt ?? '—'}</span></div>
              <button type="button" class="sw${p.useTarget ? ' on' : ''}" data-me="useTarget" role="switch" aria-checked="${p.useTarget}" ${tgt ? '' : 'disabled'}><span>목표 점수로 판단</span><span class="knob"></span></button>
            </section>
            <section class="card2">
              <h3>재정지원</h3>
              <button type="button" class="sw${p.needAid ? ' on' : ''}" data-me="needAid" role="switch" aria-checked="${p.needAid}"><span>재정지원 필요</span><span class="knob"></span></button>
            </section>
            <section class="card2">
              <h3>AP <span class="fine">2027년 5월에 볼 과목, 받은 점수</span></h3>
              ${AP_LIST.map(k => {
                const v = p.ap[k] || {};
                return `<div class="apRow"><button type="button" class="ck${v.plan ? ' on' : ''}" data-ap-plan="${esc(k)}" aria-label="${esc(k)} 응시">${v.plan ? '✓' : ''}</button><span class="nm">${esc(k)}</span>
                  <div class="step sm"><button type="button" data-ap="${esc(k)}" data-d="-1" aria-label="점수 내리기">−</button><b>${v.score ?? '—'}</b><button type="button" data-ap="${esc(k)}" data-d="1" aria-label="점수 올리기">＋</button></div></div>`;
              }).join('')}
            </section>
            <section class="card2">
              <h3>GPA</h3>
              <div class="gpaRow">
                <input type="text" inputmode="decimal" autocomplete="off" class="gpaIn" data-gpa-in value="${p.gpa != null ? p.gpa : ''}" placeholder="4.94" aria-label="GPA">
                <span class="gpaMax">/ 5.0</span>
                <span class="gpaErr" hidden>0~5 사이 숫자로</span>
              </div>
            </section>
          </div>
          <div class="meCol">
            <section class="card2">
              <h3>학교별 가능성 <span class="fine">${p.useTarget && tgt ? `목표 ${tgt} 기준` : now ? `지금 ${now} 기준` : '점수 없이'}</span></h3>
              ${overview()}
              <p class="fine rulesNote">합격률, SAT 위치, 국제학생 재정지원 방식, ED 여부로 정한 규칙이에요. 합격률 15% 아래 학교는 '도전'보다 위로 안 올라가요.</p>
            </section>
          </div>
        </div>`;
    },
    bind() {
      $('#view-me').addEventListener('click', e => {
        const t = e.target;
        const p = st.profile;
        const sb = t.closest('[data-sat]');
        if (sb) {
          const [grp, k] = sb.dataset.sat.split('.');
          const cur = p[grp][k];
          const start = cur == null ? (k === 'math' ? 700 : 650) : cur + Number(sb.dataset.d);
          p[grp][k] = Math.max(200, Math.min(800, cur == null ? start : start));
          if (!(p.target.rw && p.target.math)) p.useTarget = false;
          E.save(); E.render(); return;
        }
        const me = t.closest('[data-me]');
        if (me && !me.disabled) { p[me.dataset.me] = !p[me.dataset.me]; E.save(); E.render(); return; }
        const ap = t.closest('[data-ap]');
        if (ap) {
          const k = ap.dataset.ap;
          const v = p.ap[k] = p.ap[k] || {};
          const d = Number(ap.dataset.d);
          if (v.score == null) v.score = d > 0 ? 1 : null;
          else { v.score += d; if (v.score < 1) v.score = null; if (v.score > 5) v.score = 5; }
          E.save(); E.render(); return;
        }
        const apP = t.closest('[data-ap-plan]');
        if (apP) { const k = apP.dataset.apPlan; p.ap[k] = p.ap[k] || {}; p.ap[k].plan = !p.ap[k].plan; E.save(); E.render(); return; }
      });
      // GPA 직접 입력: 칠 때마다 저장하고, 화면은 다시 그리지 않음(입력 칸 유지)
      $('#view-me').addEventListener('input', e => {
        const el = e.target;
        if (!el.matches('[data-gpa-in]')) return;
        const raw = el.value.trim().replace(',', '.');
        const err = el.parentElement.querySelector('.gpaErr');
        if (raw === '') { st.profile.gpa = null; el.classList.remove('bad'); err.hidden = true; E.save(false); return; }
        const ok = /^\d(\.\d{0,3})?$/.test(raw) && Number(raw) <= 5;
        el.classList.toggle('bad', !ok);
        err.hidden = ok;
        if (ok) { st.profile.gpa = Math.round(Number(raw) * 1000) / 1000; E.save(false); }
      });
      $('#view-me').addEventListener('keydown', e => {
        if (e.key === 'Enter' && e.target.matches('[data-gpa-in]')) e.target.blur();
      });
    },
  };
})();
