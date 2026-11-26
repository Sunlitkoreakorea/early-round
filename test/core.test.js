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
assert.ok(c.reasons.includes('합격해도 국제학생 재정지원 없음'));

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

console.log('core tests passed');
