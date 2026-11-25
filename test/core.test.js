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

console.log('core tests passed');
