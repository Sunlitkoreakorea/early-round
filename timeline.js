// 일정 탭 로드맵. 날짜가 있는 항목은 공식 페이지에서 확인한 것(2026-11-26), 날짜 없는 항목은 추천 시기.
(function () {
  const SAT = 'https://satsuite.collegeboard.org/sat/dates-deadlines';
  const AP = 'https://apstudents.collegeboard.org/exam-dates';

  window.TL_SOURCES = { SAT, AP };

  // kind: test(시험) | reg(접수 마감) | app(원서) | todo(추천 할 일)
  window.TIMELINE = [
    { id: 'sat-2612', date: '2026-12-05', kind: 'test', title: 'SAT', note: '접수 마감 지남', src: SAT },
    { id: 'sat-2703-reg', date: '2027-02-19', kind: 'reg', title: '3월 SAT 접수 마감', src: SAT },
    { id: 'sat-2703', date: '2027-03-06', kind: 'test', title: 'SAT', src: SAT },
    { id: 'sat-2705-reg', date: '2027-04-16', kind: 'reg', title: '5월 SAT 접수 마감', src: SAT },
    { id: 'sat-2705', date: '2027-05-01', kind: 'test', title: 'SAT', src: SAT },
    { id: 'ap-bio', date: '2027-05-03', kind: 'ap', ap: 'Biology', title: 'AP Biology', src: AP },
    { id: 'ap-micro', date: '2027-05-04', kind: 'ap', ap: 'Microeconomics', title: 'AP Microeconomics', src: AP },
    { id: 'ap-phys1', date: '2027-05-05', kind: 'ap', ap: 'Physics 1', title: 'AP Physics 1', src: AP },
    { id: 'ap-chem', date: '2027-05-06', kind: 'ap', ap: 'Chemistry', title: 'AP Chemistry', src: AP },
    { id: 'ap-calcbc', date: '2027-05-10', kind: 'ap', ap: 'Calculus BC', title: 'AP Calculus BC', src: AP },
    { id: 'ap-stats', date: '2027-05-11', kind: 'ap', ap: 'Statistics', title: 'AP Statistics', src: AP },
    { id: 'ap-lang', date: '2027-05-12', kind: 'ap', ap: 'English Language', title: 'AP English Language', src: AP },
    { id: 'ap-csa', date: '2027-05-12', kind: 'ap', ap: 'Computer Science A', title: 'AP Computer Science A', src: AP },
    { id: 'ap-psych', date: '2027-05-14', kind: 'ap', ap: 'Psychology', title: 'AP Psychology', src: AP },
    { id: 'sat-2706-reg', date: '2027-05-21', kind: 'reg', title: '6월 SAT 접수 마감', src: SAT },
    { id: 'sat-2706', date: '2027-06-05', kind: 'test', title: 'SAT', src: SAT },
    { id: 'ca-open', date: '2027-08-01', kind: 'app', title: '커먼앱 2027-28 열림', note: '매년 8월 1일' },
    { id: 'sat-2708', date: '2027-08-28', kind: 'test', title: 'SAT', note: '예정', src: SAT },
    { id: 'sat-2709', date: '2027-09-18', kind: 'test', title: 'SAT', note: '예정', src: SAT },
    { id: 'css-open', date: '2027-10-01', kind: 'app', title: 'CSS Profile 열림', note: '매년 10월 1일' },
    { id: 'sat-2710', date: '2027-10-09', kind: 'test', title: 'SAT', note: '예정', src: SAT },
    { id: 'sat-2711', date: '2027-11-06', kind: 'test', title: 'SAT', note: '예정', src: SAT },
    { id: 'sat-2712', date: '2027-12-04', kind: 'test', title: 'SAT', note: '예정', src: SAT },

    // 추천 시기 (월 단위)
    { id: 'm-list1', month: '2026-12', kind: 'todo', title: '학교 리스트 1차 정리' },
    { id: 'm-rw', month: '2026-12', kind: 'todo', title: '겨울방학 SAT RW 집중' },
    { id: 'm-awards', month: '2027-02', kind: 'todo', title: '대회 결과를 수상 칸에 정리' },
    { id: 'm-recs-pick', month: '2027-03', kind: 'todo', title: '추천서 부탁할 선생님 2명 정하기 (11학년 과목, 이과 1 + 인문 1)' },
    { id: 'm-summer', month: '2027-04', kind: 'todo', title: '여름방학 계획 확정 (연구, 프로그램)' },
    { id: 'm-recs-ask', month: '2027-06', kind: 'todo', title: '방학 전에 추천서 정식 부탁' },
    { id: 'm-counselor', month: '2027-06', kind: 'todo', title: '카운슬러와 학교 리스트 상의' },
    { id: 'm-essay', month: '2027-07', kind: 'todo', title: '본 에세이 주제 정하고 초안' },
    { id: 'm-acts', month: '2027-07', kind: 'todo', title: '활동 10칸, 수상 5칸 초안' },
    { id: 'm-early', month: '2027-08', kind: 'todo', title: '얼리 학교 확정' },
    { id: 'm-supp', month: '2027-08', kind: 'todo', title: '새 시즌 보충 에세이 질문 확인하고 쓰기 시작' },
    { id: 'm-refresh', month: '2027-08', kind: 'todo', title: '이 사이트 학교 정보를 새 시즌으로 갱신' },
    { id: 'm-intv', month: '2027-09', kind: 'todo', title: '인터뷰 신청 (학교별 마감 확인)' },
    { id: 'm-css', month: '2027-10', kind: 'todo', title: '얼리 학교 재정 서류 (CSS Profile 등)' },
    { id: 'm-final', month: '2027-10', kind: 'todo', title: '얼리 원서 최종 점검, 점수 보내기' },
    { id: 'm-rd', month: '2027-11', kind: 'todo', title: '정시 원서와 보충 에세이 마무리' },
    { id: 'm-dec', month: '2027-12', kind: 'todo', title: '얼리 결과 확인, 전략 탭 12월 시나리오대로' },
  ];
})();
