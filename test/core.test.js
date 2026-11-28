// node test/core.test.js
const assert = require('assert');
const C = require('../core.js');

const S = (id, plans, extra = {}) => Object.assign({ id, name: id, plans: plans.map(t => ({ type: t, deadline: '2026-11-01' })) }, extra);
const schools = [
  S('yale', ['SCEA', 'RD'], { publicEA: true, ed2Elsewhere: true, intlAid: 'need-blind' }),
  S('stanford', ['REA', 'RD'], { publicEA: true, ed2Elsewhere: true, intlAid: 'need-aware' }),
  S('amherst', ['ED', 'RD'], { intlAid: 'need-blind' }),
  S('brown', ['ED', 'RD'], { intlAid: 'need-blind' }),
  S('mit', ['EA', 'RD'], { intlAid: 'need-blind' }),
  S('uchicago', ['ED', 'EA', 'ED2', 'RD'], { intlAid: 'need-aware' }),
  S('swat', ['ED', 'ED2', 'RD'], { intlAid: 'need-aware' }),
  S('pomona', ['ED', 'ED2', 'RD'], { intlAid: 'need-aware' }),
  S('umich', ['EA', 'RD'], { public: true, intlAid: 'limited' }),
  S('strict', ['REA', 'RD'], { publicEA: false, ed2Elsewhere: false }),
];
const bad = picks => C.check(schools, picks).issues.filter(i => i.level === 'bad');
const warn = picks => C.check(schools, picks).issues.filter(i => i.level === 'warn');

// 아무것도 안 고르면 문제 없음
assert.strictEqual(bad({}).length, 0);

// ED 두 곳
assert.strictEqual(bad({ amherst: 'ED', brown: 'ED' }).length, 1);

// 드림 3곳은 얼리에서 하나만
assert.ok(bad({ yale: 'SCEA', stanford: 'REA' }).length >= 1);
assert.ok(bad({ yale: 'SCEA', amherst: 'ED' }).length === 1);
assert.ok(bad({ stanford: 'REA', amherst: 'ED' }).length === 1);

// SCEA + 사립 EA(MIT)는 불가, 공립 EA는 가능
assert.strictEqual(bad({ yale: 'SCEA', mit: 'EA' }).length, 1);
assert.strictEqual(bad({ yale: 'SCEA', umich: 'EA' }).length, 0);
assert.strictEqual(bad({ strict: 'REA', umich: 'EA' }).length, 1);

// SCEA + 다른 학교 ED2는 학교 규칙대로
assert.strictEqual(bad({ yale: 'SCEA', swat: 'ED2' }).length, 0);
assert.strictEqual(bad({ strict: 'REA', swat: 'ED2' }).length, 1);

// ED + 자유 EA는 가능
assert.strictEqual(bad({ amherst: 'ED', mit: 'EA', uchicago: 'EA' }).length, 0);

// ED2 두 곳은 불가
assert.strictEqual(bad({ swat: 'ED2', pomona: 'ED2' }).length, 1);

// 정시는 아무 제약 없음
assert.strictEqual(bad({ yale: 'SCEA', brown: 'RD', mit: 'RD', amherst: 'RD' }).length, 0);

// 제외(X)나 없는 방식은 무시
assert.strictEqual(bad({ yale: 'SCEA', amherst: 'X', brown: 'EA' }).length, 0);

// 구속(ED/ED2) + need-aware면 경고, need-blind면 경고 없음
assert.strictEqual(warn({ swat: 'ED2' }).length, 1);
assert.strictEqual(warn({ amherst: 'ED' }).length, 0);
assert.strictEqual(warn({ stanford: 'REA' }).length, 0);

// 충돌 미리보기
assert.strictEqual(C.wouldConflict(schools, { yale: 'SCEA' }, 'mit', 'EA'), true);
assert.strictEqual(C.wouldConflict(schools, { amherst: 'ED' }, 'mit', 'EA'), false);
assert.strictEqual(C.wouldConflict(schools, { amherst: 'ED' }, 'brown', 'ED'), true);

// 날짜: 1년 뒤로, 직접 추가한 학교는 그대로
assert.strictEqual(C.shifted('2026-11-01').getFullYear(), 2027);
assert.strictEqual(C.shifted('2027-11-01', true).getFullYear(), 2027);
assert.strictEqual(C.dday(C.shifted('2026-11-01'), new Date(2026, 10, 25)), 341);
assert.strictEqual(C.md(new Date(2027, 0, 5)), '1/5');

// 발표 시기 한국어
assert.strictEqual(C.notifyKo({ notify: 'mid-December' }), '12월 중순');
assert.strictEqual(C.notifyKo({ notify: 'late March' }), '3월 말');
assert.strictEqual(C.notifyKo({ notify: 'early April' }), '4월 초');
assert.strictEqual(C.notifyKo({ notify: 'by end of March' }), '3월 말');
assert.strictEqual(C.notifyKo({ notify: 'December 15' }), '12/15');
assert.strictEqual(C.notifyKo({ notify: 'on or before February 15' }), '2/15');
assert.strictEqual(C.notifyKo({ notify: null, notifyDate: '2027-03-31' }), '3/31');
assert.strictEqual(C.notifyKo({ notify: 'late March to early April' }), '3월 말');
assert.strictEqual(C.notifyKo({ notify: 'early-to-mid December' }), '12월 초~중순');
assert.strictEqual(C.notifyKo({ notify: 'mid-to-late December' }), '12월 중순~말');
assert.strictEqual(C.notifyKo({ notify: 'by April 1 (late March)' }), '4/1');
assert.strictEqual(C.notifyKo({ notify: 'late March (on or around March 20)' }), '3월 말');
assert.strictEqual(C.notifyKo({ notify: 'end of March (UC window Mar 1-31)' }), '3월 말');
assert.strictEqual(C.notifyKo({ notify: 'Dec 11, 2026 (ED I)', notifyDate: '2026-12-11' }), '12/11');

/* ───── 가능성 판정 ───── */
const yale = { id: 'yale', testing: 'required', intlAid: 'need-blind' };
const yaleSt = { admitRate: 3.7, satEBRW: [740, 760, 780], satMath: [760, 790, 800], ed: null, ea: { rate: 9.4 } };
const prof = (rw, math, extra = {}) => Object.assign({ sat: { rw, math }, needAid: true }, extra);

// 합격률 8% 미만은 기본 '매우 어려움'
let c = C.chance(yale, yaleSt, prof(620, 800), 'SCEA');
assert.strictEqual(c.tier, 0);
assert.ok(c.reasons.some(x => x.includes('RW 620 < 740')));
// 점수가 두 영역 모두 75% 이상이어도 15% 미만 학교는 '도전' 위로 못 감
c = C.chance(yale, yaleSt, prof(790, 800));
assert.strictEqual(c.tier, 1);
// 목표 점수로 보기
c = C.chance(yale, yaleSt, prof(620, 800, { useTarget: true, target: { rw: 740, math: 800 } }));
assert.ok(c.reasons.includes('SAT 중간 50% 안'));
// 점수 없음
c = C.chance(yale, yaleSt, { needAid: true });
assert.ok(c.reasons.includes('SAT 필수인데 점수가 아직 없어요'));
// 자료 없으면 null
assert.strictEqual(C.chance(yale, null, prof(700, 700)).tier, null);

// 시험 선택 + need-blind + ED 이점, 15% 미만 상한
const amh = { id: 'amherst', testing: 'optional', intlAid: 'need-blind' };
const amhSt = { admitRate: 9.0, satEBRW: [720, 750, 770], satMath: [730, 770, 790], ed: { rate: 30.1 } };
c = C.chance(amh, amhSt, prof(620, 800), 'ED');
assert.strictEqual(c.tier, 2); // 기본 1 + ED 1, 상한 2
assert.ok(c.reasons.includes('점수를 안 내면 SAT는 판단에서 빠져요'));
c = C.chance(amh, amhSt, prof(620, 800));
assert.strictEqual(c.tier, 1);

// need-aware + 재정지원 → 한 단계 내림, 재정지원 안 받으면 그대로
const roch = { id: 'rochester', testing: 'optional', intlAid: 'limited' };
const rochSt = { admitRate: 38.9, satEBRW: [650, 700, 740], satMath: [680, 740, 790] };
assert.strictEqual(C.chance(roch, rochSt, prof(700, 760)).tier, 2);
assert.strictEqual(C.chance(roch, rochSt, prof(700, 760, { needAid: false })).tier, 3);

// 시험 안 보는 학교
const ucb = { id: 'berkeley', testing: 'blind', intlAid: 'none' };
c = C.chance(ucb, { admitRate: 11.0 }, prof(700, 700));
assert.strictEqual(c.tier, 1);
assert.ok(c.reasons.some(x => x.includes('필요 기반 재정지원은 거의 없음')));

// 국제학생 합격률이 있으면 그걸 기준으로 (전체 30% 라도 국제 5% 면 매우 어려움)
const tri = { id: 'trinity', testing: 'optional', intlAid: 'need-aware' };
c = C.chance(tri, { admitRate: 29.5, intl: { rate: 5.0 } }, prof(620, 800, { needAid: false }));
assert.strictEqual(c.tier, 0);
assert.ok(c.reasons[0].startsWith('국제학생 합격률 5%'));
assert.ok(!c.reasons.some(x => x.startsWith('국제학생 합격률 자료가 없어요')));
c = C.chance(tri, { admitRate: 79, intl: { rate: 39.9 } }, prof(620, 800, { needAid: false }));
assert.strictEqual(c.tier, 3);
// ED 이점은 전체 합격률과 비교
c = C.chance(tri, { admitRate: 30, intl: { rate: 20 }, ed: { rate: 40 } }, prof(620, 800, { needAid: false }), 'ED');
assert.strictEqual(c.tier, 2); // 40 < 30*1.5 → 이점 없음, 기본 2

// 전공별 합격률: 고른 전공 순서대로 처음 나오는 것, 더 낮으면 그걸 기준으로
const pub = { id: 'uiuc', testing: 'optional', intlAid: 'limited', public: true,
  majors: { cs: { offered: 'major', admitRate: 7.0, admitNote: '2025' }, cogsci: { offered: 'none' }, psych: { offered: 'major' } } };
c = C.chance(pub, { admitRate: 43, intl: { rate: 40 } }, prof(620, 800, { majors: ['cs'] }));
assert.strictEqual(c.tier, 0); // 7% 기준
assert.ok(c.reasons.some(x => x.startsWith('컴퓨터과학/AI 쪽 합격률 7%')));
c = C.chance(pub, { admitRate: 43, intl: { rate: 40 } }, prof(620, 800, { majors: ['psych'] }));
assert.strictEqual(c.tier, 3); // 40% 기준, 주립대 limited 는 감점 없음
assert.ok(c.reasons.some(x => x.includes('필요 기반 재정지원은 거의 없음')));
c = C.chance(pub, { admitRate: 43, intl: { rate: 40 } }, prof(620, 800, { majors: ['cogsci'] }));
assert.ok(c.reasons.includes('고른 전공이 이 학교엔 없어요'));
assert.strictEqual(C.majorHas(pub, ['cogsci']), false);
assert.strictEqual(C.majorHas(pub, ['cogsci', 'psych']), true);
assert.strictEqual(C.majorHas(pub, ['bio']), null);   // 자료 없음
assert.strictEqual(C.majorHas({ id: 'x' }, ['cs']), null);

// 점수 낼까
assert.strictEqual(C.submitAdvice(yale, yaleSt, C.satOf(prof(600, 600))).key, 'required');
assert.strictEqual(C.submitAdvice(amh, amhSt, C.satOf(prof(750, 790))).key, 'submit'); // 1540 >= 1520
assert.strictEqual(C.submitAdvice(amh, amhSt, C.satOf(prof(720, 760))).key, 'maybe'); // 1480: 1450~1520
assert.strictEqual(C.submitAdvice(amh, amhSt, C.satOf(prof(620, 800))).key, 'skip'); // 1420 < 1450
assert.strictEqual(C.submitAdvice(ucb, {}, C.satOf(prof(700, 700))).key, 'blind');
assert.strictEqual(C.submitAdvice(amh, { satEBRW: null }, C.satOf(prof(700, 700))).key, 'nodata');
// 50% 값이 없으면 25/75 가운데
assert.strictEqual(C.submitAdvice(amh, { satEBRW: [700, null, 760], satMath: [700, null, 780] }, C.satOf(prof(730, 740))).p50, 1470);

// 균형
const b = C.balance([{ tier: 0 }, { tier: 0 }, { tier: 2 }, { tier: 3 }, { tier: null }]);
assert.deepStrictEqual(b.n, [2, 0, 1, 1, 0]);
assert.strictEqual(b.safe, 1);
assert.strictEqual(b.unknown, 1);

// 12월 시나리오
const sc = C.scenarios(schools, { amherst: 'ED', mit: 'EA', swat: 'X' });
assert.strictEqual(sc.length, 2);
assert.ok(sc[0].ed2.every(x => x.id !== 'swat' && x.id !== 'amherst'));
assert.deepStrictEqual(sc[0].ed2.map(x => x.id).sort(), ['pomona', 'uchicago']);
assert.strictEqual(C.scenarios(schools, { strict: 'REA' })[0].ed2.length, 0);

// 글자 수: 커먼앱처럼 공백 포함, 한글 1자
assert.strictEqual(C.chars('ab c'), 4);
assert.strictEqual(C.chars('민사고'), 3);
assert.strictEqual(C.words('  one two\nthree  '), 3);
assert.strictEqual(C.words(''), 0);

/* ───── 시험 정책 ───── */
assert.strictEqual(C.monthOf('October'), 10);
assert.strictEqual(C.monthOf(' november '), 11);
assert.strictEqual(C.monthOf(null), null);
assert.strictEqual(C.satCountsForEarly({ lastSatEarly: 'November' }, new Date(2027, 10, 6)), true);
assert.strictEqual(C.satCountsForEarly({ lastSatEarly: 'October' }, new Date(2027, 10, 6)), false);
assert.strictEqual(C.satCountsForEarly({ lastSatEarly: 'October' }, new Date(2027, 9, 9)), true);
assert.strictEqual(C.satCountsForEarly({}, new Date(2027, 9, 9)), null);

/* ───── 원서 비용 ───── */
assert.strictEqual(C.usesCSS({ req: { cssCode: '3987' } }), true);
assert.strictEqual(C.usesCSS({ req: {}, aidForms: ['Princeton Financial Aid Application (free; CSS Profile neither required nor accepted)'] }), false);
assert.strictEqual(C.usesCSS({ req: {}, aidForms: ['CSS Profile (code 4704)'] }), true);
assert.strictEqual(C.usesCSS({ req: {}, aidForms: ['UChicago Student Financial Aid Worksheet'] }), false);
{
  const st = { admitRate: 5, satEBRW: [700, 750, 780], satMath: [700, 760, 790] };
  const mk = (id, extra) => Object.assign({ id, name: id, testing: 'required', intlAid: 'need-blind', stats: st, req: { fee: 80, cssCode: '1' }, plans: [{ type: 'RD', deadline: '2027-01-01' }] }, extra);
  const list = [
    mk('a'), mk('b'), mk('c'), mk('d'),
    mk('e', { policy: { selfReport: true } }),           // 점수는 합격 후
    mk('f', { aidAfter: true }),                         // CSS 는 합격 후
    mk('g', { req: { fee: null, cssCode: null }, aidForms: [] }), // 원서비 모름, CSS 안 씀
    mk('h'),
  ];
  const picks = { a: 'RD', b: 'RD', c: 'RD', d: 'RD', e: 'RD', f: 'RD', g: 'RD', h: 'X' };
  const r = C.appCost(list, picks, { sat: { rw: 650, math: 750 }, needAid: true });
  assert.strictEqual(r.rows.length, 7);         // 제외한 h 빠짐
  assert.strictEqual(r.feeKnown, 480);          // 80 × 6
  assert.strictEqual(r.feeUnknown, 1);
  assert.strictEqual(r.cssNow, 5);              // a b c d e
  assert.strictEqual(r.cssAfter, 1);            // f
  assert.strictEqual(r.cssCost, 25 + 16 * 4);
  assert.strictEqual(r.satNow, 6);              // e 는 자기 보고라 제외
  assert.strictEqual(r.satCost, 2 * 15);        // 무료 4개 뒤 2개
  assert.strictEqual(r.total, 480 + 89 + 30);
  // 재정지원 안 받으면 CSS 0
  assert.strictEqual(C.appCost(list, picks, { sat: { rw: 650, math: 750 }, needAid: false }).cssCost, 0);
}

/* ───── 세계 순위 ───── */
assert.strictEqual(C.rankNum('=16'), 16);
assert.strictEqual(C.rankNum('201-250'), 201);
assert.strictEqual(C.rankNum('unranked'), null);
assert.strictEqual(C.rankNum(null), null);
assert.strictEqual(C.vsRef('=16', '38'), 'above');
assert.strictEqual(C.vsRef('43', '38'), 'below');
assert.strictEqual(C.vsRef('38', '38'), 'same');
assert.strictEqual(C.vsRef('101-150', '56'), 'below');
assert.strictEqual(C.vsRef('51-60', '56'), null); // 구간이 서울대를 걸치면 판단 안 함
assert.strictEqual(C.vsRef('unranked', '56'), null);

/* ───── 영국 UCAS ───── */
{
  const L = (...xs) => xs.map(([school, course]) => ({ school, course }));
  assert.strictEqual(C.ucasCheck(L(['uk-ucl', 'psych'], ['uk-kcl', 'neuro'])).length, 0);
  let is = C.ucasCheck(L(['uk-oxford', 'psych'], ['uk-cambridge', 'psych']));
  assert.ok(is.some(i => i.level === 'bad' && i.msg.includes('하나만 지원')));
  assert.ok(is.some(i => i.level === 'warn' && i.msg.includes('10월 15일')));
  is = C.ucasCheck(L(['uk-ucl', 'a'], ['uk-ucl', 'b'], ['uk-kcl', 'c'], ['uk-lse', 'd'], ['uk-imperial', 'e'], ['uk-edinburgh', 'f']));
  assert.ok(is.some(i => i.msg.startsWith('UCAS는 최대 5개')));
  is = C.ucasCheck(L(['uk-oxford', 'psych'], ['uk-oxford', 'cs']));
  assert.ok(is.some(i => i.msg === 'Oxford는 과정 하나만 지원할 수 있어요'));
  // 가능성
  const sch = { satMin: 1470 };
  let c2 = C.ukChance(sch, { offerRate: 12.0 }, { sat: { rw: 620, math: 800 }, needAid: true });
  assert.strictEqual(c2.tier, 0); // 12% → 1, SAT 미달 −1
  assert.ok(c2.reasons.some(x => x.includes('못 미침')));
  c2 = C.ukChance(sch, { offerRate: 12.0 }, { sat: { rw: 730, math: 800 } });
  assert.strictEqual(c2.tier, 1);
  c2 = C.ukChance(sch, { offerRate: 60, satMin: 1300 }, { sat: { rw: 620, math: 800 } });
  assert.strictEqual(c2.tier, 4);
  c2 = C.ukChance(sch, { offerRate: null }, { sat: { rw: 620, math: 800 } });
  assert.strictEqual(c2.tier, null);
}

console.log('core tests passed');
