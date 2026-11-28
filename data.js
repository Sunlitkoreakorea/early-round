// tools/build_data.py 가 tools/raw/*.json 에서 만든 파일 (직접 고치지 말고 raw 나 FIX 를 고칠 것)
window.DATA_CHECKED = '2026-11-26';
window.SCHOOLS = [
 {
  "id": "yale",
  "name": "Yale",
  "full": "Yale University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "SCEA",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-02",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "SCEA is non-binding; you may not also apply EA/ED elsewhere, except non-binding rolling programs, non-binding early programs at public institutions, ED/EA programs that notify after Jan 1 (Round 2), and non-US early programs.",
  "ed2Elsewhere": true,
  "publicEA": true,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 3987)",
   "IDOC documents"
  ],
  "aidDeadlines": {
   "early": "2026-12-01",
   "ed2": null,
   "rd": "2027-02-15"
  },
  "testing": "required",
  "testingNote": "SAT or ACT scores required (self-reported)",
  "english": "Required for non-native speakers whose school did not teach in English; specific tests not named on page I read",
  "supplements": "Short answer (academic areas, <=200 words) + 3 short takes (<=200 characters each) + 1 essay of 400 words (Common App/Coalition)",
  "cogsci": "Cognitive Science (major)",
  "interview": "Optional alumni interview; Yale requests one when helpful, not guaranteed, no penalty if none",
  "url": "https://admissions.yale.edu/apply",
  "sources": [
   "https://admissions.yale.edu/apply",
   "https://admissions.yale.edu/timelines",
   "https://admissions.yale.edu/requirements",
   "https://admissions.yale.edu/essay-topics",
   "https://finaid.yale.edu/faq",
   "search result summary of finaid.yale.edu/apply/prospective"
  ],
  "uncertain": [
   "aidDeadlines: Dec 1 (intl early) and Feb 15 (RD) come from a search summary labeled 2027-28 aid cycle, not read directly",
   "english: tests/minimums not named",
   "cogsci: not verified on official page",
   "RD notifyDate: only 'late March'",
   "majors.restricted: no cap info found, set open from absence only",
   "bio.note: pre-med advising not read on a Yale page"
  ],
  "nextCycle": null,
  "dream": true,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://oir.yale.edu/sites/default/files/yale_cds_2025-26_md_20260616.pdf",
   "applied": 50264,
   "admitted": 2387,
   "admitRate": 4.7,
   "ed": null,
   "ea": null,
   "satSubmitPct": 67,
   "satEBRW": [
    730,
    760,
    780
   ],
   "satMath": [
    740,
    780,
    790
   ],
   "actComposite": [
    33,
    34,
    35
   ],
   "firstYearTotal": 1633,
   "intlFirstYear": 155,
   "intlAidCount": 459,
   "intlAidAvg": 84185,
   "notes": "No ED; C22 SCEA yes but counts blank. applied/admitted = men+women sums (no unknown-sex row).",
   "uncertain": [
    "firstYearTotal: C1 enrolled 799+834; B2 first-year column total row not seen on page"
   ],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 72500,
    "fees": 185,
    "housing": 21600,
    "direct": 94285,
    "full": 97985,
    "intlExtra": "Travel excluded from total. Aid may have US tax implications for international students.",
    "source": "https://finaid.yale.edu/coa"
   }
  },
  "req": {
   "application": "Common App, Coalition (Scoir), QuestBridge",
   "appFormat": null,
   "fee": 80,
   "feeWaiver": "No Yale waiver; use Common App/Coalition waiver; QuestBridge free; US military automatic",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "Two recent core-academic teachers (language, math, science, social studies); arts or leadership teacher letters only as supplemental"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional alumni (ASC) interview; Yale requests when helpful, not guaranteed; no penalty if none",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 200,
     "chars": null,
     "choose": null,
     "summary": "Pick up to three academic areas, explain one exciting topic"
    },
    {
     "type": "short",
     "required": true,
     "count": 3,
     "words": null,
     "chars": 200,
     "choose": null,
     "summary": "Three brief answers: dream course, growth goal, unshared detail"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 400,
     "chars": null,
     "choose": "1 of 3",
     "summary": "Essay on disagreement, community, or enriching personal experience"
    }
   ],
   "supplementsUrl": "https://admissions.yale.edu/essays",
   "portfolio": "Optional supplement in Visual Art, Dance, Music, Film or STEM research",
   "cssCode": "3987",
   "netPriceUrl": "https://npc.collegeboard.org/app/yale",
   "netPriceIntl": false,
   "sources": [
    "https://admissions.yale.edu/essays",
    "https://admissions.yale.edu/requirements",
    "https://admissions.yale.edu/posts/2026-11-04-2026-27-review-process-update-1",
    "https://admissions.yale.edu/posts/2026-08-17-application-update-2026-2027",
    "https://admissions.yale.edu/affordability-details",
    "https://admissions.yale.edu/estimate-your-cost",
    "https://finaid.yale.edu/ewsp"
   ],
   "uncertain": [
    "fee: $80 only from a search excerpt of a Yale international-applicant page; fee amount not on pages I read (platform sets it)",
    "interview: no official page read gives a request/sign-up deadline; 'alumni ASC' wording from search excerpt",
    "short takes: essays page lists three at 200 characters (about 35 words); search excerpt once listed only two",
    "netPriceIntl: false is based on Yale statement that the tools are inaccurate for international families",
    "teacherRecs.optionalExtra: supplemental letters allowed but count not stated"
   ]
  },
  "loc": {
   "city": "New Haven",
   "state": "CT",
   "lat": 41.3163,
   "lon": -72.9223,
   "region": "ne",
   "lx": -10,
   "ly": 18,
   "la": "end"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (page: Oct or Nov exams 'generally available' for SCEA, Jan or Feb for RD; not a hard cutoff)",
   "req": "partial: essays/platforms/2 teacher recs/counselor confirmed; fee $80, interview, CSS 3987 not on pages read",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "May report a superscore; sending-all rule not stated",
   "lastSatEarly": "November",
   "lastSatRD": "February",
   "note": "Early: Oct or Nov exams generally available; RD: Jan or Feb generally available",
   "sources": [
    "https://admissions.yale.edu/standardized-testing"
   ],
   "uncertain": [
    "lastSatEarly/lastSatRD: page says generally and does not name the cycle"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (B.A./B.S.)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (B.A./B.S.), sponsored by MCDB and Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (B.A./B.S.)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (B.A./B.S.); also joint CS & Psychology (B.A.), CS & Math, CS & Economics, CS & EE",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Molecular, Cellular, and Developmental Biology (MCDB) and Ecology and Evolutionary Biology (EEB); no major named just Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Many fields allow choosing major in sophomore year; STEM majors want a first-year course sequence. Pre-med is advising only."
   }
  },
  "rank": {
   "qs": "=16",
   "the": "=9",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "stanford",
  "name": "Stanford",
  "full": "Stanford University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "REA",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "early April",
    "notifyDate": null
   }
  ],
  "earlyRule": "REA is non-binding; no early binding plan (ED) at any public university, and no other private early plans; non-binding public early plans are allowed.",
  "ed2Elsewhere": true,
  "publicEA": true,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 4704)",
   "International Student Supplement",
   "IDOC/tax documents",
   "Intl Student Application for Financial Assistance only if CSS fee unaffordable"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": null,
   "rd": "2027-02-15"
  },
  "testing": "required",
  "testingNote": "SAT or ACT required (was optional for Class of 2029); AP/IB/A-level cannot replace it; self-report all AP scores",
  "english": "No English proficiency test required (may self-report); cannot substitute for SAT/ACT",
  "supplements": "5 short questions (3-50 words) + 3 short essays (100-250 words)",
  "cogsci": "Symbolic Systems (major) and Psychology/Neuroscience",
  "interview": "alumni, optional, not guaranteed (area and volunteer availability)",
  "url": "https://admission.stanford.edu/apply/first-year/",
  "sources": [
   "https://admission.stanford.edu/apply/first-year/",
   "https://admission.stanford.edu/apply/first-year/decision_process.html",
   "https://admission.stanford.edu/apply/first-year/testing.html",
   "https://admission.stanford.edu/apply/first-year/apply.html",
   "https://admission.stanford.edu/apply/first-year/interview.html",
   "https://admission.stanford.edu/apply/international/index.html",
   "https://financialaid.stanford.edu/undergrad/apply/requirements/rea_international.html"
  ],
  "uncertain": [
   "ed2Elsewhere: page says ED II allowed if Stanford denies or defers (Stanford REA decisions come before Jan ED II notices)",
   "aidDeadlines.rd: Feb 15 from search summary of financial aid table, intl RD page not read",
   "cogsci: not verified",
   "RD notifyDate: only 'early April'",
   "coa.fees: 'Student Fees Allowance' used as fees",
   "neuro: from search summary of Stanford SUNS/symsys pages, not a full catalog read"
  ],
  "nextCycle": null,
  "dream": true,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://irds.stanford.edu/data-findings/cds (2025-2026 file: https://drive.google.com/file/d/1GIPKgVj1d86dkmLkHI_mZVCk_iY6kiCp/view)",
   "applied": 60646,
   "admitted": 2302,
   "admitRate": 3.8,
   "ed": null,
   "ea": null,
   "satSubmitPct": 55.57,
   "satEBRW": [
    750,
    760,
    780
   ],
   "satMath": [
    770,
    790,
    800
   ],
   "actComposite": [
    34,
    35,
    36
   ],
   "firstYearTotal": 1866,
   "intlFirstYear": 237,
   "intlAidCount": 260,
   "intlAidAvg": 85424,
   "notes": "No ED; REA yes but counts not in extracted text (page 19 image not viewed). satSubmitPct 55.57 as printed (ACT 20.94).",
   "uncertain": [
    "ea: C22 counts appear blank in text layer; not visually confirmed",
    "firstYearTotal: B2 1,866 vs C1 enrolled 1,839"
   ],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 67731,
    "fees": 2610,
    "housing": 22944,
    "direct": 93285,
    "full": 97545,
    "intlExtra": "Cardinal Care health insurance assumed for international students and included in their budget (premium not listed); new students also pay $525 orientation + $250 document fee.",
    "source": "https://financialaid.stanford.edu/undergrad/budget/index.html"
   }
  },
  "req": {
   "application": "Common App, QuestBridge",
   "appFormat": null,
   "fee": 100,
   "feeWaiver": "Fee waiver request submitted with Common App",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": 1,
    "note": "Two academic teachers from grade 11-12 (grade 10 if advanced); one optional 'Other Recommender'"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional alumni interview, only where alumni available; many not invited; not on campus",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "short",
     "required": true,
     "count": 4,
     "words": 50,
     "chars": null,
     "choose": null,
     "summary": "Societal challenge, last two summers, historical moment, five important things"
    },
    {
     "type": "activity",
     "required": true,
     "count": 1,
     "words": 50,
     "chars": null,
     "choose": null,
     "summary": "Briefly elaborate on an activity, job or family duty"
    },
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "An idea or experience that excites you about learning"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "A note to your future roommate revealing something about you"
    },
    {
     "type": "community",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "How your background and character would enrich Stanford"
    }
   ],
   "supplementsUrl": "https://admission.stanford.edu/apply/first-year/apply.html",
   "portfolio": "Optional arts portfolio (art practice, dance, music, theater); materials due Oct 20 (REA) and Dec 10 (RD); not for QuestBridge",
   "cssCode": null,
   "netPriceUrl": "https://npc.collegeboard.org/app/stanford",
   "netPriceIntl": null,
   "sources": [
    "https://admission.stanford.edu/apply/first-year",
    "https://admission.stanford.edu/apply/first-year/apply.html",
    "https://admission.stanford.edu/apply/first-year/interview.html",
    "https://admission.stanford.edu/apply/first-year/arts.html",
    "https://admission.stanford.edu/apply/first-year/forms.html",
    "https://financialaid.stanford.edu/undergrad/how/calculator/index.html"
   ],
   "uncertain": [
    "cssCode: not found on pages read; Stanford aid pages say apply for aid in the admission application (international students may use CSS Profile or ISAFA per search excerpt)",
    "netPriceIntl: calculator says it is inaccurate for those living abroad; no explicit yes/no",
    "application page was last updated July 21, 2026 but does not name the cycle",
    "QuestBridge/Common App fee mention: applications list read from apply.html; Coalition not mentioned",
    "short question word counts: 3 minimum, 50 maximum each; essays 100 minimum, 250 maximum"
   ]
  },
  "loc": {
   "city": "Stanford",
   "state": "CA",
   "lat": 37.4275,
   "lon": -122.1697,
   "region": "w",
   "lx": 11,
   "ly": 16,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (page: scores 'by the end of October (REA)' / 'end of December (RD)')",
   "req": "partial: $100, 2 teacher recs, 5 short (3-50 words) + 3 essays (100-250) confirmed; pages list Common App only (QuestBridge not seen); interview page empty",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Self-report highest scores; official scores for ALL self-reported sittings required if enrolling",
   "lastSatEarly": "October",
   "lastSatRD": "December",
   "note": "Scores by end of Oct (REA) / end of Dec (RD)",
   "sources": [
    "https://admission.stanford.edu/apply/freshman/testing.html"
   ],
   "uncertain": []
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Symbolic Systems (equivalent to cognitive science)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare after at least one quarter, with SYMSYS 1, course plan and advisor interview/approval."
   },
   "neuro": {
    "offered": "track",
    "name": "No Neuroscience major; neuroscience track/concentration inside Psychology, Biology (Neurobiology) and Symbolic Systems",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (also Data Science, Data Science & Social Systems)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology (also Human Biology)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified on a page)."
   }
  },
  "rank": {
   "qs": "=2",
   "the": "=3",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "amherst",
  "name": "Amherst",
  "full": "Amherst College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-09",
    "notify": "early-to-mid December",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "late March (on or around March 20)",
    "notifyDate": "2027-03-20"
   }
  ],
  "earlyRule": "ED is binding and you may not be an ED candidate elsewhere; if admitted you must withdraw all other applications (no ED II round exists).",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 3003)",
   "ISFAA only on request for fee hardship"
  ],
  "aidDeadlines": {
   "early": "2026-11-13",
   "ed2": null,
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "SAT/ACT optional for all applicants incl. international; superscored if submitted; self-reported scores accepted at application stage.",
  "english": "Required (TOEFL iBT, IELTS Academic, or Duolingo) for non-native speakers unless last two years of secondary school were in English-medium; self-reported scores OK, official only if enrolling. Waiver rules are strict.",
  "supplements": "One required writing supplement: Option A = 350-word essay on a choice of 3 quotation prompts (Options B/C = submit a graded paper).",
  "cogsci": "Neuroscience (major, with cognitive neuroscience courses); no cog sci major or concentration found",
  "interview": "No interviews offered (InitialView interview may be sent if already done)",
  "url": "https://www.amherst.edu/admission/apply/firstyear",
  "sources": [
   "https://www.amherst.edu/admission/apply/firstyear",
   "https://www.amherst.edu/admission/apply/firstyear/calendar_deadlines",
   "https://www.amherst.edu/admission/apply/firstyear/writingsupplement",
   "https://www.amherst.edu/admission/apply/firstyear/testing",
   "https://www.amherst.edu/admission/apply/international",
   "https://www.amherst.edu/admission/financial_aid"
  ],
  "uncertain": [
   "plans.ED.notifyDate: school gives only 'early-to-mid December'",
   "cogsci: absence of a cog sci program inferred from search, not from a full majors list",
   "cogsci none: absence in search results only",
   "coa read via search summary; WebFetch blocked by amherst.edu (405)"
  ],
  "nextCycle": null,
  "dream": true,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "Class of 2029 프로필",
   "source": "https://www.amherst.edu/about/facts/secondary_school_reports/class-of-2029-admission-and-enrollment-profile",
   "applied": 15819,
   "admitted": 1222,
   "admitRate": 7.7,
   "ed": null,
   "ea": null,
   "satSubmitPct": 39.6,
   "satEBRW": [
    730,
    null,
    770
   ],
   "satMath": [
    730,
    null,
    790
   ],
   "actComposite": [
    33,
    null,
    35
   ],
   "firstYearTotal": 485,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "notes": "enrolled mid-50%; means EBRW 750 / Math 756; SAT submitted by 192 of 485 enrolled; about 10% international",
   "uncertain": [
    "ed: profile gives no ED applicant/admit counts"
   ],
   "intlNote": "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요",
   "coa": {
    "year": "2026-27",
    "tuition": 75330,
    "fees": 710,
    "housing": 20320,
    "direct": 96360,
    "full": null,
    "intlExtra": "Health insurance required or waivable; fall plan listed $3,627 (not in billed total). Sample aid packages show total COA about $98,000-99,500.",
    "source": "https://www.amherst.edu/tuition"
   }
  },
  "req": {
   "application": "Common App, QuestBridge (other platforms not confirmed)",
   "appFormat": null,
   "fee": null,
   "feeWaiver": "Fee waiver available (details not confirmed)",
   "teacherRecs": {
    "required": null,
    "optionalExtra": null,
    "note": "not confirmed; amherst.edu pages blocked"
   },
   "counselorRec": null,
   "midYearReport": null,
   "interview": null,
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 350,
     "chars": null,
     "choose": "Option A: 1 of 3 quotations; or Option B: graded paper",
     "summary": "Personal response to a quotation prompt, or submit graded analytical paper"
    }
   ],
   "supplementsUrl": "https://www.amherst.edu/admission/apply/firstyear/writingsupplement",
   "portfolio": "Option C only for A2A applicants",
   "cssCode": "3003",
   "netPriceUrl": "https://www.amherst.edu/offices/financialaid/calculator",
   "netPriceIntl": false,
   "sources": [
    "https://www.amherst.edu/admission/apply/firstyear/writingsupplement (search summary; direct fetch 405)",
    "https://admission.amherst.edu/register/qbrdsupplement",
    "https://www.amherst.edu/offices/financialaid/international_students/appleton (search summary)"
   ],
   "uncertain": [
    "application: platforms not read (amherst.edu fetch blocked)",
    "fee: sources conflict ($60 vs $65)",
    "teacherRecs/counselorRec/midYearReport/interview: not read for 2026-27",
    "supplements: only Option A limit (350 words) seen; full prompt list not read"
   ]
  },
  "loc": {
   "city": "Amherst",
   "state": "MA",
   "lat": 42.3709,
   "lon": -72.517,
   "region": "ne",
   "lx": -10,
   "ly": 15,
   "la": "end"
  },
  "verified": {
   "maj": "partial: coa ok via search of official controller page (page blocked 405); cogsci none not shown on a full official list, only absence in search of amherst.edu",
   "policy": "partial: official page fetch 405; official-domain search summaries confirm self-report and most-favorable-combination superscore regardless of date; no test dates stated",
   "req": "unreachable",
   "stats": "ok: 직접 확인"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Optional; superscore across dates; official only if enrolling",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Test-optional; self-report via Common App/Coalition/portal",
   "sources": [
    "https://www.amherst.edu/admission/apply/firstyear/testing"
   ],
   "uncertain": [
    "superscore/selfReport: from search-result summary of amherst.edu; page fetch blocked (405)",
    "lastSat*: not stated"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science major found; cognitive content sits in Neuroscience and Psychology; students can design an interdisciplinary major"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Amherst was first to offer a neuroscience major; declare in second year."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "harvard",
  "name": "Harvard",
  "full": "Harvard College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "REA",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-01",
    "notify": "by end of March",
    "notifyDate": "2027-03-31"
   }
  ],
  "earlyRule": "REA is non-binding; you may not apply to any other private institution under ED, EA or REA, nor to a binding early plan at a public university.",
  "ed2Elsewhere": true,
  "publicEA": true,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 3434)",
   "IDOC packet",
   "Alternate paper Financial Statement for Students from Foreign Countries if CSS fee unaffordable"
  ],
  "aidDeadlines": {
   "early": "2026-11-01",
   "ed2": null,
   "rd": "2027-02-01"
  },
  "testing": "required",
  "testingNote": "SAT or ACT required; exceptions may be made with AP, IB, GCSE/A-Level or national leaving exam results",
  "english": "No English proficiency exam required; TOEFL/IELTS/DET may be submitted but do not substitute for SAT/ACT (from search summary)",
  "supplements": "Harvard supplement: 5 short written questions (150 words each per requirements page), plus concentration/activity checklists; $95 fee or waiver",
  "cogsci": "Mind, Brain & Behavior (secondary field/interdisciplinary program), Psychology, Neuroscience, Linguistics concentrations - no standalone Cognitive Science concentration in the 2026-27 supplement list",
  "interview": "not confirmed (alumni interviews commonly offered",
  "url": "https://college.harvard.edu/admissions/apply/first-year-applicants",
  "sources": [
   "https://college.harvard.edu/admissions/apply/application-requirements",
   "https://college.harvard.edu/admissions/apply/application-timeline/restrictive-early-action",
   "https://college.harvard.edu/sites/default/files/2026-08/Harvard_FY_supplement_2026-2027.pdf",
   "search summaries of college.harvard.edu FAQ and financial-aid prospective-students page"
  ],
  "uncertain": [
   "interview: not found",
   "MBB secondary field: from general knowledge, not on pages read",
   "aid deadlines: from search summary of official aid page (Nov 1 REA, Feb 1 RD)",
   "need-blind and CSS code: from search summary of official pages",
   "supplement word limits: from requirements page, prompts not read in full",
   "cs.college: SEAS is part of Harvard College, not chosen at application (from background knowledge)",
   "full left null because the page gives a range"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://oira.harvard.edu/files/2026/07/CDS_2025-2026.pdf",
   "applied": 47893,
   "admitted": 2003,
   "admitRate": 4.2,
   "ed": null,
   "ea": null,
   "satSubmitPct": 79,
   "satEBRW": [
    720,
    750,
    770
   ],
   "satMath": [
    730,
    770,
    790
   ],
   "actComposite": [
    33,
    35,
    35
   ],
   "firstYearTotal": 1673,
   "intlFirstYear": 251,
   "intlAidCount": 805,
   "intlAidAvg": 83013,
   "notes": "No CDS. Class of 2029 (fall 2025) per Harvard Gazette; 1,675 accepted (83.6% yield). Harvard no longer releases EA data; no SAT/ACT stats found. Harvard admissions-statistics page (https://college.harvard.edu/admissions/admissions-statistics) now shows Class of 2030: 55,104 applied, 2,037 admitted, ~1,648 enrolling, 15% international.",
   "uncertain": [],
   "cds": "Harvard published a 2025-26 CDS (OIRA, 2026-07-13)",
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 62226,
    "fees": 6216,
    "housing": 23192,
    "direct": 91634,
    "full": null,
    "intlExtra": "Required health insurance $4,954 (waivable if covered). Total billed+unbilled $95,134-$100,134 depending on travel ($0-5,000).",
    "source": "https://college.harvard.edu/financial-aid/how-aid-works/cost-attendance"
   }
  },
  "req": {
   "application": "Common App (QuestBridge Match also referenced on aid page)",
   "appFormat": null,
   "fee": 95,
   "feeWaiver": "Waived if hardship and applying for aid; request via Common App",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "Two teachers in different academic subjects; extra letters may be sent after submitting"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Alumni interview at Admissions Committee discretion; cannot be requested, not guaranteed; no penalty if none",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "background",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "How your life experiences let you contribute to Harvard"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "A time you strongly disagreed and how you engaged"
    },
    {
     "type": "activity",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Activity, job, travel or family duty that shaped you"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "How you hope to use your Harvard education later"
    },
    {
     "type": "short",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Top three things roommates might like to know about you"
    }
   ],
   "supplementsUrl": "https://college.harvard.edu/sites/default/files/2026-08/Harvard_FY_supplement_2026-2027.pdf",
   "portfolio": "Optional supplementary materials (arts, research papers, creative writing) via SlideRoom or applicant portal; neither expected nor required",
   "cssCode": "3434",
   "netPriceUrl": "https://college.harvard.edu/financial-aid/net-price-calculator",
   "netPriceIntl": null,
   "sources": [
    "https://college.harvard.edu/admissions/apply/application-requirements",
    "https://college.harvard.edu/sites/default/files/2026-08/Harvard_FY_supplement_2026-2027.pdf",
    "https://college.harvard.edu/financial-aid/apply-financial-aid/prospective-students",
    "https://college.harvard.edu/financial-aid/net-price-calculator",
    "https://college.harvard.edu/guides/what-expect-after-you-apply",
    "https://college.harvard.edu/resources/faq/paying-admissions-application-fee-hardship-my-family-can-i-get-waiver"
   ],
   "uncertain": [
    "fee: $95 comes from the official 2026-27 supplement PDF; requirements/waiver pages gave no amount, so confirm in Common App",
    "netPriceIntl: calculator page says all students may apply for aid but is built on US norms; no explicit yes/no for international families",
    "supplement 'other' types are my best fit for topics that match no listed category"
   ]
  },
  "loc": {
   "city": "Cambridge",
   "state": "MA",
   "lat": 42.377,
   "lon": -71.1167,
   "region": "ne",
   "lx": 9,
   "ly": -9,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (page asks for results by end of October for REA but says November tests acceptable if needed => Nov is allowed, Oct is the recommendation; RD 'as late as February'; superscore not addressed, null correct)",
   "req": "partial: official 2026-27 PDF confirms $95, 5 prompts x150 words max, 2 teacher evals, Common App; interview/CSS not rechecked",
   "stats": "ok: applied/admitted match Gazette and Harvard CDS 2025-26; CDS exists, so null fields can be filled (see corrections)"
  },
  "policy": {
   "superscore": null,
   "selfReport": true,
   "scoreChoice": "Score Choice allowed, need not send all",
   "lastSatEarly": "November",
   "lastSatRD": "February",
   "note": "Early: end of October, November series may be submitted if needed; RD: tests as late as February",
   "sources": [
    "https://college.harvard.edu/admissions/apply/application-requirements"
   ],
   "uncertain": [
    "superscore: page does not address SAT superscoring",
    "lastSatRD: February wording ambiguous"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "track",
    "name": "Mind, Brain, and Behavior (MBB) track in Psychology ('Cognitive Science (MBB)' track), also MBB tracks in CS and Neuroscience",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Psychology MBB track requires a thesis."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (committee concentration, home MCB)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare fall of sophomore year; Neuro 80 usually fall sophomore."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (B.A.), SEAS",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "No separate admission to SEAS; concentration declared sophomore year."
   },
   "bio": {
    "offered": "major",
    "name": "Molecular and Cellular Biology; Integrative Biology; Human Developmental and Regenerative Biology; Chemical and Physical Biology; Human Evolutionary Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "5",
   "the": "6",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "princeton",
  "name": "Princeton",
  "full": "Princeton University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "SCEA",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-01",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "SCEA is non-binding; you may not apply to an early program at any other private college or university, but may apply early to public institutions, service academies, international institutions and nonbinding rolling programs.",
  "ed2Elsewhere": null,
  "publicEA": true,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "Princeton Financial Aid Application (free; CSS Profile neither required nor accepted)"
  ],
  "aidDeadlines": {
   "early": "2026-11-09",
   "ed2": null,
   "rd": "2027-02-01"
  },
  "testing": "optional",
  "testingNote": "Test-optional for fall 2026 and fall 2027 entry; required again for fall 2028 entry (2027-28 cycle). Submit SAT/ACT to code 2672/2588 if sending.",
  "english": "DET, TOEFL, IELTS Academic or PTE Academic required unless English is native or 3+ years at an English-instruction secondary school",
  "supplements": "Academic prompt (<=250) + Your Voice (400-500 and <=250) + 3 short answers (<=50 each) + graded written paper",
  "cogsci": "Cognitive Science (certificate program) and Neuroscience (major)",
  "interview": "alumni, optional, not guaranteed (depends on alumni availability)",
  "url": "https://admission.princeton.edu/apply",
  "sources": [
   "https://admission.princeton.edu/apply/first-year-application-dates-deadlines",
   "https://admission.princeton.edu/apply/application-checklist",
   "https://admission.princeton.edu/apply/international-students",
   "https://admission.princeton.edu/apply/princeton-specific-questions"
  ],
  "uncertain": [
   "ed2Elsewhere: page does not mention ED II",
   "cogsci: not verified on official page",
   "RD notifyDate: only 'late March'",
   "need-blind/meetsNeed: from official international page text (read) and search summary",
   "cs.college: A.B./B.S.E. applicant choice per Princeton admission page via search summary",
   "neuro/psych/bio offered status from search summaries"
  ],
  "nextCycle": "Testing required again for fall 2028 entry (the 2027-28 cycle) - per Princeton application checklist page",
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://ir.princeton.edu/sites/g/files/toruqf2041/files/documents/CDS_2526_Princeton_v2.pdf",
   "applied": 42303,
   "admitted": 1868,
   "admitRate": 4.4,
   "ed": null,
   "ea": null,
   "satSubmitPct": 60,
   "satEBRW": [
    740,
    760,
    780
   ],
   "satMath": [
    760,
    790,
    800
   ],
   "actComposite": [
    34,
    35,
    35
   ],
   "firstYearTotal": 1404,
   "intlFirstYear": 200,
   "intlAidCount": 597,
   "intlAidAvg": 86736,
   "notes": "No ED; SCEA (restrictive) yes but C22 counts blank. applied uses C1 residency-table total 42,303 (incl. 18 unknown sex).",
   "uncertain": [
    "firstYearTotal: B2 total 1,404 vs C1 enrolled 1,408"
   ],
   "intl": {
    "applied": 10567,
    "admitted": 241,
    "rate": 2.3
   },
   "coa": {
    "year": "2026-27",
    "tuition": 68140,
    "fees": 314,
    "housing": 22120,
    "direct": 90574,
    "full": 94624,
    "intlExtra": "Student Health Plan $4,220 unless family policy confirmed. Figures are first-year/sophomore; junior/senior higher. Transportation excluded ($50-5,000).",
    "source": "https://finaid.princeton.edu/how-aid-works/student-budget"
   }
  },
  "req": {
   "application": "Common App (QuestBridge for Match participants)",
   "appFormat": null,
   "fee": 100,
   "feeWaiver": "Common App waiver (counselor verifies) or Princeton/ACT/College Board/NACAC waiver; free for low-income and US military",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "Two teachers from higher-level courses in different core academic areas"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional alumni interview, 30-45 min, not guaranteed; can opt out without penalty",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": "1 of 2 (A.B. or B.S.E. track)",
     "summary": "Academic interests and fit with Princeton programs, or why engineering"
    },
    {
     "type": "background",
     "required": true,
     "count": 1,
     "words": 500,
     "chars": null,
     "choose": null,
     "summary": "How your experiences shape campus conversations (400-500 words)"
    },
    {
     "type": "community",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "Connect your story to Princeton's service and civic engagement"
    },
    {
     "type": "short",
     "required": true,
     "count": 3,
     "words": 50,
     "chars": null,
     "choose": null,
     "summary": "New skill to learn, what brings joy, life soundtrack song"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "Graded written paper from schoolwork, preferably English or history"
    }
   ],
   "supplementsUrl": "https://admission.princeton.edu/apply/princeton-specific-questions",
   "portfolio": "Optional Arts Supplement (architecture, creative writing, dance, music, music theater, theater, visual arts); REA materials Nov 6, RD Jan 8; not for QuestBridge",
   "cssCode": null,
   "netPriceUrl": "https://puwebp.princeton.edu/financial-aid-public/ui/#/net-price-calculator",
   "netPriceIntl": false,
   "sources": [
    "https://admission.princeton.edu/apply/princeton-specific-questions",
    "https://admission.princeton.edu/apply/application-checklist",
    "https://admission.princeton.edu/apply/application-requirements",
    "https://finaid.princeton.edu/apply-aid-prospective-students",
    "https://admission.princeton.edu/cost-aid/net-price-calculator"
   ],
   "uncertain": [
    "cssCode: Princeton aid page says it does not use CSS Profile or IDOC (own Princeton Financial Aid Application, due Nov 9 REA / Feb 1 RD); the 2025-26 Common Data Set listed CSS, which conflicts",
    "graded written paper: required per checklist page; could not confirm it is still required for 2026-27 vs the requirements page (not listed there)",
    "interviewDeadline: none published; interview detail from checklist page plus search excerpt of FAQ",
    "tax year for aid documents inconsistent on finaid page (2024 vs 2025)",
    "youth voice prompt cap shown as 500 words (range 400-500)"
   ]
  },
  "loc": {
   "city": "Princeton",
   "state": "NJ",
   "lat": 40.3431,
   "lon": -74.6551,
   "region": "ne",
   "lx": 11,
   "ly": 4,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (page: take SAT 'by the October test date' for SCEA and 'December date' for RD; this is guidance, not a hard cutoff; no cross-format superscore; self-report of SAT not addressed)",
   "req": "partial: prompts/limits confirmed (250/400-500/250/3x50, graded paper required); fee, recs, interview, CSS null not rechecked",
   "stats": "ok"
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Score choice allowed; submission of all scores encouraged",
   "lastSatEarly": "October",
   "lastSatRD": "December",
   "note": "Take SAT by October date for SCEA; December date for RD. No superscoring between paper and digital",
   "sources": [
    "https://admission.princeton.edu/how-apply/standardized-testing"
   ],
   "uncertain": [
    "superscore: page only says no cross-format superscore",
    "selfReport: not stated on page",
    "lastSat*: should-take-by guidance, not a hard cutoff"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "minor",
    "name": "Program in Cognitive Science (undergraduate certificate)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (concentration; also a certificate)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (concentration)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science, offered as A.B. or B.S.E.",
    "college": "A.B. or B.S.E. degree path (choice made at application)",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "A.B. needs junior IW + senior thesis; B.S.E. thesis optional; about 25% of each class is B.S.E."
   },
   "bio": {
    "offered": "major",
    "name": "Molecular Biology; Ecology and Evolutionary Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "27",
   "the": "=3",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "mit",
  "name": "MIT",
  "full": "Massachusetts Institute of Technology",
  "public": false,
  "commonApp": false,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-04",
    "notify": "mid-March (Regular Action)",
    "notifyDate": "2027-03-14"
   }
  ],
  "earlyRule": "EA is non-binding and you may apply only once per entry year (EA or RA); page read states no other restriction.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 3514)",
   "IDOC: parental tax returns/income documents"
  ],
  "aidDeadlines": {
   "early": "2026-11-30",
   "ed2": null,
   "rd": "2027-02-15"
  },
  "testing": "required",
  "testingNote": "SAT or ACT required; take before Nov 30 (EA) or Dec 31 (RA)",
  "english": "Exams strongly recommended for certain non-native speakers; RA applicants must test before Jan 31",
  "supplements": "4 short essays (~100-200 words) + 4 short answers (40-50 words) + 4 activities + open additional info box",
  "cogsci": "Brain and Cognitive Sciences (Course 9 major)",
  "interview": "Educational Counselor interview if available; waived with no penalty otherwise",
  "url": "https://mitadmissions.org/apply/firstyear/",
  "sources": [
   "https://mitadmissions.org/apply/firstyear/deadlines-requirements/",
   "https://mitadmissions.org/apply/firstyear/essays-activities-academics/",
   "https://sfs.mit.edu/undergraduate-students/apply-for-aid/international/"
  ],
  "uncertain": [
   "commonApp: MIT uses its own MyMIT application and does not take the Common App (general knowledge, not on page read)",
   "RD notifyDate: 'mid-March' mapped to 03-14 (Pi Day), not a confirmed date",
   "ed2Elsewhere/publicEA: MIT EA is not restrictive per page, only 'one application per entry year'; not applicable",
   "aid deadlines: Nov 30 / Feb 15 from MIT deadlines page",
   "MIT meetsNeed and need-blind from SFS international page and search summary",
   "psych none: not verified on an MIT page",
   "restricted open: Course 6 may have its own process, not verified"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://ir.mit.edu/projects/2025-26-common-data-set/",
   "applied": 29281,
   "admitted": 1334,
   "admitRate": 4.6,
   "ed": null,
   "ea": null,
   "satSubmitPct": 83,
   "satEBRW": [
    740,
    760,
    780
   ],
   "satMath": [
    780,
    790,
    800
   ],
   "actComposite": [
    34,
    35,
    35
   ],
   "firstYearTotal": 1152,
   "intlFirstYear": 124,
   "intlAidCount": 411,
   "intlAidAvg": 81991,
   "notes": "CDS is a web page (no PDF); values read via WebFetch extraction, gender sums reconcile to totals. EA counts blank (MIT EA not reported in C22); no ED. SAT composite 1520/1550/1570.",
   "uncertain": [
    "all values read via WebFetch summarizer, not eyeballed in the page; intlFirstYear 124 and H6 not independently verified"
   ],
   "intl": {
    "applied": 6926,
    "admitted": 136,
    "rate": 2.0
   },
   "intlSource": "https://mitadmissions.org/apply/process/stats/",
   "coa": {
    "year": "2026-27",
    "tuition": 66720,
    "fees": 420,
    "housing": 22194,
    "direct": 89334,
    "full": 92760,
    "intlExtra": "Massachusetts requires coverage: auto-enrolled in MIT SHIP unless waived (premium not listed). Housing/dining are the max-priced double/21-meal plan. Travel allowance excluded. Catalog PDF lists $93,730 total (unexplained $970 gap).",
    "source": "https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/coa/"
   }
  },
  "req": {
   "application": "MIT's own application (MyMIT portal at apply.mitadmissions.org); no Common App",
   "appFormat": "Own MIT form: exactly 4 activities (not a resume), 4 short essays of roughly 100-200 words, 4 short answers of 40-50 words, plus one optional open text box",
   "fee": 75,
   "feeWaiver": "Fee waiver available (details in MIT FAQ)",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": 1,
    "note": "Recommend one math/science + one humanities/social science/language; one optional supplemental letter"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional alumni Educational Counselor interview when available; waived without penalty if not; EA in Nov, RA in Jan",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 200,
     "chars": null,
     "choose": null,
     "summary": "Chosen field of study and what sparked your interest"
    },
    {
     "type": "background",
     "required": true,
     "count": 2,
     "words": 200,
     "chars": null,
     "choose": null,
     "summary": "Unconventional educational path; handling an unexpected challenge"
    },
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 200,
     "chars": null,
     "choose": null,
     "summary": "Problems you want to solve and impact on community"
    },
    {
     "type": "short",
     "required": true,
     "count": 4,
     "words": 50,
     "chars": null,
     "choose": null,
     "summary": "Fun, someone admired, endless topic, generalist or specialist"
    },
    {
     "type": "other",
     "required": false,
     "count": 1,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "Open box for anything else MIT should know"
    }
   ],
   "supplementsUrl": "https://mitadmissions.org/apply/firstyear/essays-activities-academics/",
   "portfolio": "Optional via SlideRoom: Research Supplement, Music and Theater Arts, Visual Art and Architecture, Maker portfolio; same deadline as application round",
   "cssCode": "3514",
   "netPriceUrl": "https://npc.collegeboard.org/app/mit",
   "netPriceIntl": null,
   "sources": [
    "https://mitadmissions.org/apply/firstyear/essays-activities-academics/",
    "https://mitadmissions.org/apply/firstyear/deadlines-requirements/",
    "https://mitadmissions.org/apply/firstyear/interview/",
    "https://mitadmissions.org/apply/firstyear/portfolios-additional-material/",
    "https://sfs.mit.edu/undergraduate-students/apply-for-aid/international/",
    "https://sfs.mit.edu/quick-cost-estimator/"
   ],
   "uncertain": [
    "counselorRec: Secondary School Report with transcript is required; the counselor letter itself is optional",
    "midYearReport: February Updates & Notes form applies to deferred EA, admitted EA and admitted RA students only",
    "netPriceIntl: MIT says the Quick Cost Estimator is inaccurate for international students; no statement about the NPC itself",
    "'words' for the 4 essays use the 200 upper bound of 'roughly 100-200 words'; open text box has no stated limit",
    "deadlines page does not label the cycle as 2026-27 explicitly"
   ]
  },
  "loc": {
   "city": "Cambridge",
   "state": "MA",
   "lat": 42.3601,
   "lon": -71.0942,
   "region": "ne",
   "lx": 11,
   "ly": 12,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (page: tests 'before November 30 (EA)' and 'before December 31 (RA)'; November/December inference reasonable; highest section scores; self-report on application)",
   "req": "ok: 4 essays ~100-200, 4 short 40-50, 4 activities, 1 open box, $75, 2 teacher recs, interview waived if unavailable, own portal. CSS 3514 and optional counselor letter not rechecked",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Must self-report all exams taken; no picking",
   "lastSatEarly": "November",
   "lastSatRD": "December",
   "note": "Tests must be taken before Nov 30 (EA) and Dec 31 (RD); page lists no specific SAT dates",
   "sources": [
    "https://mitadmissions.org/apply/firstyear/tests-scores/"
   ],
   "uncertain": [
    "lastSat*: inferred from before Nov 30 / Dec 31 wording"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Brain and Cognitive Sciences (Course 9); also 6-9 Computation and Cognition",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Most students declare spring of first year."
   },
   "neuro": {
    "offered": "major",
    "name": "Brain and Cognitive Sciences (Course 9) covers neuroscience",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No psychology major found; Course 9 is closest. Minor availability not verified"
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science and Engineering (6-3); AI and Decision Making (6-4)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology (Course 7); also 6-7 Computer Science and Molecular Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "1",
   "the": "2",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "brown",
  "name": "Brown",
  "full": "Brown University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "March 31",
    "notifyDate": "2027-03-31"
   }
  ],
  "earlyRule": "ED is binding and single-choice; admitted students must enroll and withdraw all RD applications and any pending non-binding early applications.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 3189, no fee waivers)",
   "IDOC only if requested"
  ],
  "aidDeadlines": {
   "early": "2026-11-02",
   "ed2": null,
   "rd": "2027-02-01"
  },
  "testing": "required",
  "testingNote": "SAT or ACT required, considered in context",
  "english": "not confirmed",
  "supplements": "3 short essays for all applicants incl. Open Curriculum prompt (150-250 words); other prompts not confirmed; optional 90-second video introduction",
  "cogsci": "Cognitive Science and Cognitive Neuroscience concentrations",
  "interview": "no alumni interviews; optional 90-second video and alumni events",
  "url": "https://admission.brown.edu/",
  "sources": [
   "https://admission.brown.edu/sites/default/files/2026-07/2026-27%20Brown%20University%20Counselor%20Newsletter.pdf",
   "https://finaid.brown.edu/apply/first-year-international",
   "search summaries of admission.brown.edu"
  ],
  "uncertain": [
   "english: policy not found",
   "supplements: only Open Curriculum prompt confirmed",
   "cogsci: not verified",
   "RD notifyDate: newsletter says March 31, RD page says early April",
   "fetch of admission.brown.edu apply pages 404",
   "coa read from search summary",
   "fees = activities 442 + resources 1136 + recreation 110 + health services 1296"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://tableau.brown.edu/t/PublicContent/views/CommonDataSet/C-Admissions.pdf (also B-Enrollment.pdf, H-FinancialAid.pdf; Brown OIR page https://oir.brown.edu/institutional-data/common-data-set)",
   "applied": 42774,
   "admitted": 2710,
   "admitRate": 6.3,
   "ed": {
    "applied": 5062,
    "admitted": 907,
    "rate": 17.9
   },
   "ea": null,
   "satSubmitPct": 77,
   "satEBRW": [
    730,
    750,
    770
   ],
   "satMath": [
    730,
    770,
    790
   ],
   "actComposite": [
    33,
    35,
    35
   ],
   "firstYearTotal": 1750,
   "intlFirstYear": 227,
   "intlAidCount": 254,
   "intlAidAvg": 85194,
   "notes": "Brown CDS only as Tableau dashboard (exported to PDF, selected year 2025-2026). No EA. applied = men 17,972 + women 24,771 + unknown 31. Brown press release said 42,765/2,418 but CDS includes 295 waitlist admits.",
   "uncertain": [],
   "intl": {
    "applied": 9861,
    "admitted": 404,
    "rate": 4.1
   },
   "coa": {
    "year": "2026-27",
    "tuition": 74568,
    "fees": 2984,
    "housing": 19464,
    "direct": 97016,
    "full": 99994,
    "intlExtra": "Health insurance $5,283 waivable; one-time $100 academic record fee for new students (not in direct). Brown ISSS I-20 estimate differs (tuition+fees $77,552, room+board $19,464, other $9,314).",
    "source": "https://finaid.brown.edu/estimate-cost-aid/cost"
   }
  },
  "req": {
   "application": "Common App, QuestBridge",
   "appFormat": null,
   "fee": 80,
   "feeWaiver": "Automatic for free/reduced lunch, TRIO etc.; or College Board/NACAC form, or counselor letter to documents@brown.edu",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "Two from major academic subjects; at least one math/science if applying for BS or PLME"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "No alumni interviews for first-year applicants; optional video introduction page exists",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "How you would use Brown's Open Curriculum (150-250 words)"
    },
    {
     "type": "background",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "How upbringing shaped you and what you add to Brown"
    },
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "A class you would teach, on any topic"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Something that brings you joy"
    }
   ],
   "supplementsUrl": "https://admission.brown.edu/apply/how-apply",
   "portfolio": "Optional music or visual art supplements via SlideRoom (account by Nov 4 ED, Jan 7 RD); PLME and Brown-RISD have extra essays",
   "cssCode": "3189",
   "netPriceUrl": "https://npc.collegeboard.org/student/app/brown",
   "netPriceIntl": false,
   "sources": [
    "https://admission.brown.edu/apply/how-apply",
    "https://admission.brown.edu/first-year/application-checklist",
    "https://finaid.brown.edu/apply/first-year-international",
    "https://finaid.brown.edu/",
    "https://admission.brown.edu/sites/default/files/2026-07/2026-27%20Brown%20University%20Counselor%20Newsletter.pdf"
   ],
   "uncertain": [
    "interview: checklist lists a 'Video Introduction' page with no detail; 'no alumni interviews' comes from search excerpt and the 2026-27 newsletter wording about alumni interaction opportunities",
    "netPriceIntl: false because finaid page limits the calculator to US citizens, permanent residents, DACA and undocumented students; not an explicit 'international cannot'",
    "midyear deadline Feb 27 from checklist page",
    "teacherRecs.optionalExtra: search excerpt suggests an optional extra letter; not confirmed on pages read",
    "word limits for essays 1 and 2 are 150-250; I use 250 as the max"
   ]
  },
  "loc": {
   "city": "Providence",
   "state": "RI",
   "lat": 41.8268,
   "lon": -71.4025,
   "region": "ne",
   "lx": 11,
   "ly": 6,
   "la": "start"
  },
  "verified": {
   "maj": "partial: tuition 74568, housing+food 19464 ok; page lists fees 3084 incl. one-time $100 record fee (3084-100=2984 as stored, recurring fees); direct 97016 excludes the $100",
   "policy": "ok (page: testing complete by 'last October test date' for ED, 'last December test date' for RD; superscore SAT/ACT; self-report via Common App)",
   "req": "partial: 4 essays (150-250/150-250/100-150/100-150), $80, Common App confirmed; interview/CSS not rechecked",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Self-report on Common App; Score Choice not mentioned",
   "lastSatEarly": "October",
   "lastSatRD": "December",
   "note": "Testing complete by last October test date (ED) / last December date (RD); testing required",
   "sources": [
    "https://admission.brown.edu/first-year/standardized-tests"
   ],
   "uncertain": [
    "scoreChoice: not stated",
    "page does not say which exam the dates cover; assumed SAT/ACT"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (also Cognitive Neuroscience)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (also Cognitive Neuroscience, Computational Neuroscience)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (also Applied Math-CS, CS-Economics, Math-CS)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology (also Computational Biology, Applied Math-Biology)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "66",
   "the": "=73",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=2",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 },
 {
  "id": "columbia",
  "name": "Columbia",
  "full": "Columbia University (Columbia College / Columbia Engineering)",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-01",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED is binding and one-school-only, but Columbia does not prohibit also filing a non-binding EA application elsewhere (the ED commitment still controls).",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile",
   "Parent tax/income documents via IDOC"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": null,
   "rd": "2027-02-15"
  },
  "testing": "optional",
  "testingNote": "Test-optional for 2026-27 only; SAT/ACT will be REQUIRED starting with the 2027-28 cycle (waiver possible for hardship).",
  "english": "Required unless English is home or school language of instruction, or SAT R&W 700+ / ACT English or Reading 29+. Otherwise TOEFL iBT min 5.5 on new 1-6 scale (105 on old scale), IELTS 7.5, DET 135, Cambridge 191.",
  "supplements": "Columbia-specific questions: one list question (100 words) plus six short answers (150 words each).",
  "cogsci": "Cognitive Science (major, joint Columbia College/Barnard)",
  "interview": "No interviews in the application process (optional InitialView/Vericant language video allowed).",
  "url": "https://undergrad.admissions.columbia.edu/apply/firstyear",
  "sources": [
   "https://undergrad.admissions.columbia.edu/apply/firstyear",
   "https://undergrad.admissions.columbia.edu/early-decision",
   "https://undergrad.admissions.columbia.edu/apply/process/testing",
   "https://undergrad.admissions.columbia.edu/english-proficiency",
   "https://undergrad.admissions.columbia.edu/apply/process/columbia-questions",
   "https://undergrad.admissions.columbia.edu/apply/international/aid",
   "https://undergrad.admissions.columbia.edu/affordability/apply",
   "https://psychology.columbia.edu/content/cognitive-science-major"
  ],
  "uncertain": [
   "plans.notifyDate: Columbia only says 'mid-December' / 'late March' (dates 'may vary'); exact release dates are emailed to applicants",
   "cogsci: confirmed via search snippet of Columbia psychology page, not read in full",
   "cogsci none: absence only",
   "coa: admissions page vs bulletin disagree on fees; admissions figures used",
   "cs: SEAS offering and CS in CC from search summaries"
  ],
  "nextCycle": "Standardized testing (SAT or ACT) becomes REQUIRED effective the 2027-28 admission cycle (August 2027), i.e. likely applies to this student; hardship waiver available.",
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://opir.columbia.edu/sites/opir.columbia.edu/files/content/Common%20Data%20Set/2025-26_Columbia_College_and_Columbia_Enginnering_CDS.pdf",
   "applied": 59611,
   "admitted": 2946,
   "admitRate": 4.9,
   "ed": {
    "applied": 5868,
    "admitted": 819,
    "rate": 14.0
   },
   "ea": null,
   "satSubmitPct": 50,
   "satEBRW": [
    740,
    760,
    777
   ],
   "satMath": [
    760,
    780,
    800
   ],
   "actComposite": [
    34,
    35,
    35
   ],
   "firstYearTotal": 1797,
   "intlFirstYear": 273,
   "intlAidCount": 248,
   "intlAidAvg": 92699,
   "notes": "Columbia College + Columbia Engineering CDS only (General Studies is a separate CDS, excluded). No EA.",
   "uncertain": [
    "satEBRW p75 777 is as printed (unusual value)"
   ],
   "intl": {
    "applied": 15380,
    "admitted": 407,
    "rate": 2.6
   },
   "coa": {
    "year": "2026-27",
    "tuition": 72800,
    "fees": 4160,
    "housing": 19650,
    "direct": 96610,
    "full": 99774,
    "intlExtra": "Travel listed separately, not included. College bulletin shows a different total ($99,044: fees $3,430, room+board $19,650, books+personal $3,164).",
    "source": "https://undergrad.admissions.columbia.edu/affordability/cost"
   }
  },
  "req": {
   "application": "Common App, Coalition (Scoir), QuestBridge",
   "appFormat": null,
   "fee": 85,
   "feeWaiver": "Automatic waiver request in application; income below $66,000 or other financial-burden criteria",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "Two academic teachers; Columbia Engineering applicants need one math or science teacher"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "No interviews in Columbia admissions process; optional InitialView or Vericant video for language fluency",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 100,
     "chars": null,
     "choose": null,
     "summary": "List of books, media and sources that shaped your thinking"
    },
    {
     "type": "background",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Lived experience and how it shapes your contribution to Columbia"
    },
    {
     "type": "community",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "A disagreement and how you engaged with the person"
    },
    {
     "type": "background",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Navigating adversity and how you changed"
    },
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Why you want to attend Columbia"
    },
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "What draws you to your preferred areas of study"
    }
   ],
   "supplementsUrl": "https://undergrad.admissions.columbia.edu/apply/process/columbia-questions",
   "portfolio": "Optional research abstract (with mentor letter), creative portfolios via SlideRoom (architecture, writing, dance, theater, film, music, art), resume",
   "cssCode": "2116",
   "netPriceUrl": "https://npc.collegeboard.org/student/app/columbia",
   "netPriceIntl": false,
   "sources": [
    "https://undergrad.admissions.columbia.edu/apply/process/columbia-questions",
    "https://undergrad.admissions.columbia.edu/apply/firstyear",
    "https://undergrad.admissions.columbia.edu/apply/process/application-fees",
    "https://undergrad.admissions.columbia.edu/apply/process/supplementary-materials",
    "https://undergrad.admissions.columbia.edu/affordability/calculator",
    "https://cc-seas.financialaid.columbia.edu/application/codes"
   ],
   "uncertain": [
    "netPriceIntl: false relies on Columbia aid pages (seen via search excerpt) saying the NPC is for US residents; admissions page only lists 'families living outside the US' as an accuracy factor",
    "testing: 2026-27 is test-optional, SAT/ACT required from the 2027-28 cycle",
    "teacherRecs.optionalExtra: not stated"
   ]
  },
  "loc": {
   "city": "New York",
   "state": "NY",
   "lat": 40.8075,
   "lon": -73.9626,
   "region": "ne",
   "lx": 11,
   "ly": 4,
   "la": "start"
  },
  "verified": {
   "maj": "partial: coa ok (admissions page via search snippet, page itself 403); cogsci corrected; official Columbia pages returned 403 on direct fetch",
   "policy": "partial: direct fetch 403; official-domain search summary confirms ED through Nov 2026, RD through Feb 2027, superscore, self-report",
   "req": "unreachable",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional; yes/no whether scores considered",
   "lastSatEarly": "November",
   "lastSatRD": "February",
   "note": "Test-optional for 2026-27; required from 2027-28. Test dates through Nov 2026 (ED), Feb 2027 (RD)",
   "sources": [
    "https://undergrad.admissions.columbia.edu/apply/process/testing"
   ],
   "uncertain": [
    "all fields from search-result summary; direct page fetch returned 403",
    "scoreChoice: all-scores rule not stated"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science major found at Columbia College; Neuroscience and Behavior and Psychology are closest"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience and Behavior (co-sponsored by Biological Sciences and Psychology)",
    "college": "Columbia College",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": "Columbia College",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (Columbia Engineering/SEAS; Columbia College also offers CS)",
    "college": "Columbia College or SEAS (choice at application)",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology (Biological Sciences); also Computational Biology",
    "college": "Columbia College",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "3-2 Combined Plan with Engineering exists. Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "=43",
   "the": "19",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "penn",
  "name": "UPenn",
  "full": "University of Pennsylvania",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "December",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "April",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED is binding; Penn's page states only that it is binding (no EA/SCEA restrictions listed), standard rule is ED to one school only and withdraw all others if admitted.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 2933)",
   "Parent tax return or earnings statement uploaded to Penn Document Submission Portal (not IDOC)",
   "Non-Tax Filer Form if applicable"
  ],
  "aidDeadlines": {
   "early": "2026-11-06",
   "ed2": null,
   "rd": "2027-02-05"
  },
  "testing": "required",
  "testingNote": "SAT or ACT required (hardship waiver via application). Last dates: ED Oct 2026 ACT / Nov 2026 SAT; RD Dec 2026.",
  "english": "TOEFL/IELTS Academic/DET required unless English is native language or primary instruction language for 3+ years. Competitive: TOEFL 5+ (new scale) or 100+ (old), IELTS 7+, DET 130+. Only tests taken on/after Apr 1 2025; no MyBest.",
  "supplements": "Three Penn short answers: thank-you note (50-200 words), community prompt (50-200 words), school-specific prompt (limit not stated on page).",
  "cogsci": "Cognitive Science (BA, College of Arts & Sciences; tracks incl. Cognitive Neuroscience, Computation and Cognition, Language & Mind)",
  "interview": "No interview requirement found; international applicants may optionally submit an InitialView video (per Penn FAQ).",
  "url": "https://admissions.upenn.edu/apply/first-year-applicants",
  "sources": [
   "https://admissions.upenn.edu/apply/first-year-applicants",
   "https://admissions.upenn.edu/how-to-apply/first-year-applicants/application-requirements",
   "https://admissions.upenn.edu/how-to-apply/international-applicants",
   "https://admissions.upenn.edu/affording-penn/international-aid",
   "https://srfs.upenn.edu/financial-aid/apply/prospective-UG-checklists/international",
   "https://srfs.upenn.edu/financial-aid/international",
   "https://catalog.upenn.edu/undergraduate/programs/cognitive-science-computation-cognition-ba/"
  ],
  "uncertain": [
   "plans.notifyDate: Penn only says 'December' / 'April'; exact time announced one week ahead",
   "aidDeadlines.early/rd: Penn's SRFS table gives Nov 6 2026 / Feb 5 2027 as target dates to have an award letter at admission; late filing still gets full consideration (not a hard cutoff)",
   "interview: Penn pages read do not state an alumni-interview policy; only the optional InitialView FAQ (seen in search snippet)",
   "earlyRule: Penn page read states only that ED is binding; restrictions on other early apps not stated",
   "coa from search summary of SRFS page",
   "cs direct-admit: applicants apply to SEAS directly (school-level, from background knowledge)",
   "Penn does not publish admit rate by school"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://upenn.box.com/s/woo7d85yxpol6j9e2o121aucjc6dc1k5 (UPenn-Common-Data-Set-2025-26-June-2026.pdf)",
   "applied": 72544,
   "admitted": 3570,
   "admitRate": 4.9,
   "ed": {
    "applied": 9503,
    "admitted": 1266,
    "rate": 13.3
   },
   "ea": null,
   "satSubmitPct": 52,
   "satEBRW": [
    740,
    760,
    770
   ],
   "satMath": [
    770,
    790,
    800
   ],
   "actComposite": [
    34,
    35,
    35
   ],
   "firstYearTotal": 2414,
   "intlFirstYear": 311,
   "intlAidCount": 448,
   "intlAidAvg": 80607,
   "notes": "No EA. SAT Composite row blank in C9. firstYearTotal from B2 (C1 enrolled 2,420).",
   "uncertain": [
    "firstYearTotal: B2 2,414 vs C1 enrolled 2,420"
   ],
   "intlNote": "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요",
   "coa": {
    "year": "2026-27",
    "tuition": 65670,
    "fees": 8308,
    "housing": 20604,
    "direct": 94582,
    "full": 99082,
    "intlExtra": "None listed on page; first two years must live on campus.",
    "source": "https://srfs.upenn.edu/costs-budgeting/undergraduate-cost-attendance"
   }
  },
  "req": {
   "application": "Common App, Coalition (Scoir), QuestBridge",
   "appFormat": null,
   "fee": 75,
   "feeWaiver": "Waiver request via Common App or Coalition",
   "teacherRecs": {
    "required": 1,
    "optionalExtra": 1,
    "note": "One core-subject teacher plus counselor letter; optional second teacher or community supporter"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "No Penn interview described on requirement pages; international applicants may optionally submit an InitialView video",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": 200,
     "chars": null,
     "choose": null,
     "summary": "Thank-you note to someone you have not yet thanked (50-200)"
    },
    {
     "type": "community",
     "required": true,
     "count": 1,
     "words": 200,
     "chars": null,
     "choose": null,
     "summary": "How you will explore community at Penn (50-200)"
    },
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 200,
     "chars": null,
     "choose": "school-specific prompt for your undergraduate school",
     "summary": "Curiosity or goals tied to College, Wharton, Engineering or Nursing"
    }
   ],
   "supplementsUrl": "https://admissions.upenn.edu/how-to-apply/preparing-your-application/writing",
   "portfolio": null,
   "cssCode": "2933",
   "netPriceUrl": null,
   "netPriceIntl": null,
   "sources": [
    "https://admissions.upenn.edu/how-to-apply/first-year-applicants/application-requirements",
    "https://admissions.upenn.edu/how-to-apply/preparing-your-application/writing",
    "https://srfs.upenn.edu/financial-aid/apply/prospective-UG-checklists/international"
   ],
   "uncertain": [
    "netPriceUrl: no net price calculator URL read; an 'Estimate Your Costs' page exists at srfs.upenn.edu but its content was not read",
    "teacherRecs: requirements page states two letters, one counselor and one core teacher; counts of teacher letters differ from other schools, verify in Common App",
    "interview: no official page read states Penn's interview policy; international InitialView note comes from search excerpt of Ask Penn",
    "need-aware status for international applicants not stated on aid page read",
    "dual-degree and program essays (Huntsman, LSM, M&T and others) not included"
   ]
  },
  "loc": {
   "city": "Philadelphia",
   "state": "PA",
   "lat": 39.9522,
   "lon": -75.1932,
   "region": "ne",
   "lx": 11,
   "ly": 2,
   "la": "start"
  },
  "verified": {
   "maj": "ok after corrections (restricted)",
   "policy": "ok (official table: Nov 7, 2026 SAT for ED, Dec 5, 2026 for RD; superscore; self-report)",
   "req": "partial: 1 teacher required + 1 optional, counselor required, $75, platforms incl. QuestBridge, essays 3x50-200 confirmed; interview not on page",
   "stats": "unreachable: Box link redirects to boxcloud and cannot be read; arithmetic check only (3570/72544 = 4.9%); third-party Esslo transcription shows SAT composite 1510-1570 and 4.9% rate, consistent but unverified"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Score Choice allowed but entire testing history encouraged",
   "lastSatEarly": "November",
   "lastSatRD": "December",
   "note": "Nov 7, 2026 SAT for ED; Dec 5, 2026 SAT for RD. Testing required (waiver available)",
   "sources": [
    "https://admissions.upenn.edu/how-to-apply/preparing-your-application/testing"
   ],
   "uncertain": []
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science, BA (tracks: Cognitive Neuroscience, Computation and Cognition, Language & Mind, Individualized)",
    "college": "College of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Major chosen by end of sophomore year; requires 2.0 GPA in major courses. Also a CogSci minor open to engineering students."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": "College of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": "College of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BSE; BAS also offered)",
    "college": "SEAS",
    "restricted": "direct-admit",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": "College of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "15",
   "the": "14",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "uchicago",
  "name": "UChicago",
  "full": "University of Chicago",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-02",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED",
    "deadline": "2026-11-02",
    "notify": "mid-December (ED I)",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-04",
    "notify": "mid-February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-04",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "EA is non-binding and non-restrictive (reply by May 1, can apply EA/ED elsewhere); ED I and ED II are binding (ED I reply mid-January, ED II reply mid-March).",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "UChicago Student Financial Aid Worksheet (via UChicago Account)",
   "Family income and asset documentation (home-country tax forms, translated, in USD)"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-02-15"
  },
  "testing": "optional",
  "testingNote": "Test-optional with 'No Harm' policy: submitted SAT/ACT used only if it helps; superscored.",
  "english": "Not required: students 'invited' to submit TOEFL/IELTS/DET/etc. if they wish; no formal minimum.",
  "supplements": "Q1 'Why UChicago' (required) plus Q2 extended essay (choose one of several prompts); no strict word limits (official FAQ suggests roughly 300-600 words for Q1 and 500-700 for the extended essay).",
  "cogsci": "Cognitive Science (major)",
  "interview": "No on-campus or alumni interviews; optional (highly recommended) 2-minute video profile, Glimpse/InitialView accepted instead.",
  "url": "https://collegeadmissions.uchicago.edu/apply/application/",
  "sources": [
   "https://collegeadmissions.uchicago.edu/apply/application/",
   "https://collegeadmissions.uchicago.edu/apply/uchicago-admissions-faq/",
   "https://collegeadmissions.uchicago.edu/apply/international-applicants/",
   "https://collegeadmissions.uchicago.edu/financial-support/international-financial-aid/",
   "https://collegeadmissions.uchicago.edu/financial-support/applying-for-aid/",
   "https://collegeadmissions.uchicago.edu/apply/essay/",
   "http://collegecatalog.uchicago.edu/thecollege/cognitivescience/"
  ],
  "uncertain": [
   "plans.notifyDate: only 'mid-December' / 'mid-February' / 'late March' published",
   "aidDeadlines: Nov 15 / Jan 15 / Feb 15 are listed on the page for US citizens/PRs; the international aid page read gives no separate dates (international application deadlines are stated as same as all first-years). Nov 15 2026 is a Sunday, so rule says next business day (Nov 16)",
   "intlAid need-aware: from a search snippet of UChicago's QuestBridge page ('must be need-aware for international candidates'), not read in full",
   "earlyRule: EA non-restrictive per task statement and page (reply May 1); official 'what decisions mean/early rules' page text did not render, so restriction wording not directly read",
   "plans: EA and ED I share the Nov 2 deadline; page lists them as separate plans",
   "coa from search summary",
   "housing: 21,414 is the aid allowance, not the billed room rate"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://data.uchicago.edu/files/2026/08/CDS_2025-2026_to_publish-1.pdf",
   "applied": 45533,
   "admitted": 2039,
   "admitRate": 4.5,
   "ed": null,
   "ea": null,
   "satSubmitPct": 57,
   "satEBRW": [
    740,
    760,
    770
   ],
   "satMath": [
    760,
    780,
    790
   ],
   "actComposite": [
    34,
    35,
    35
   ],
   "firstYearTotal": 1786,
   "intlFirstYear": 323,
   "intlAidCount": 269,
   "intlAidAvg": 74765,
   "notes": "PDF page headers say 'Common Data Set 2024-2025' but content is Fall 2025 entering class (file is the 2025-26 CDS). Applied/admitted include 1,026 unknown-sex applicants.",
   "uncertain": [
    "ed: C21 offers ED but applied/admitted left blank in CDS",
    "ea: C22 says Yes but no EA counts reported (CDS has no fields for EA counts)",
    "header-label: PDF header reads 2024-2025"
   ],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 75960,
    "fees": 1995,
    "housing": 21414,
    "direct": 99369,
    "full": 103821,
    "intlExtra": "Health insurance excluded from figures. First-years pay $720 class fee in each of first two years (not in direct). Fees = Student Services 1,677 + UPASS 318. Room and board no longer billed by the university.",
    "source": "https://financialaid.uchicago.edu/undergraduate/how-aid-works/undergraduate-costs/"
   }
  },
  "req": {
   "application": "Common App, Coalition (Scoir), QuestBridge",
   "appFormat": null,
   "fee": 90,
   "feeWaiver": "No fee for students applying for need-based aid; otherwise waiver via platform",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": 1,
    "note": "Two academic teachers; one optional supplemental letter"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "No interview in process; optional 2-minute video profile",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "How UChicago fits your wishes for learning, community, future"
    },
    {
     "type": "other",
     "required": true,
     "count": 1,
     "words": null,
     "chars": null,
     "choose": "1 of 6 (includes your own prompt)",
     "summary": "Creative extended essay on one of several quirky prompts"
    }
   ],
   "supplementsUrl": "https://collegeadmissions.uchicago.edu/apply/essay/",
   "portfolio": "Optional art, creative, research or other supplements uploaded in UChicago Account; Schoolhouse.world certificates accepted",
   "cssCode": null,
   "netPriceUrl": "https://financialaid.uchicago.edu/undergraduate/resources-and-tools/net-price-calculator/",
   "netPriceIntl": null,
   "sources": [
    "https://collegeadmissions.uchicago.edu/apply/essay/",
    "https://collegeadmissions.uchicago.edu/apply/application/",
    "https://collegeadmissions.uchicago.edu/apply/application/required-materials/",
    "https://collegeadmissions.uchicago.edu/apply/application/optional-materials/",
    "https://collegeadmissions.uchicago.edu/financial-support/international-financial-aid/"
   ],
   "uncertain": [
    "supplements words: essay page and required-materials page state no word limits; left null",
    "cssCode: UChicago says international aid applicants should NOT submit CSS Profile or FAFSA (own Student Financial Aid Worksheet)",
    "netPriceIntl: calculator page read gave no text; search excerpt says it is meant for domestic students",
    "prompt count: five listed options plus a choose-your-own option"
   ]
  },
  "loc": {
   "city": "Chicago",
   "state": "IL",
   "lat": 41.7886,
   "lon": -87.5987,
   "region": "mw",
   "lx": 0,
   "ly": 18,
   "la": "middle"
  },
  "verified": {
   "maj": "partial: coa 75960/1677+318/21414 confirmed via search snippet of official aid page (direct fetch returned empty); majors not rechecked (all offered=major/open)",
   "policy": "partial: FAQ fetch returned no body text; official-domain search summary confirms self-report and superscore; no test dates stated",
   "req": "partial: pages gave no usable content (essay page empty, requirements page without details); essays page 403/empty",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional; submit only if it helps; self-reported as-is",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Test-optional no-harm policy",
   "sources": [
    "https://collegeadmissions.uchicago.edu/apply/uchicago-admissions-faq/"
   ],
   "uncertain": [
    "superscore/selfReport: from search-result summary only",
    "lastSat*: only a third-party claim (Nov SAT EA/ED I, Jan RD), not verified on official page"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (BA)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BA and BS)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA only)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BA/BS)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biological Sciences (BA/BS)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "24",
   "the": "16",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "jhu",
  "name": "Johns Hopkins",
  "full": "Johns Hopkins University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "Dec 11, 2026 (ED I)",
    "notifyDate": "2026-12-11"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-02",
    "notify": "Feb 12, 2027",
    "notifyDate": "2027-02-12"
   },
   {
    "type": "RD",
    "deadline": "2027-01-02",
    "notify": "Mar 24, 2027",
    "notifyDate": "2027-03-24"
   }
  ],
  "earlyRule": "ED I and ED II are both binding (signed agreement by student, parent and counselor); you may apply ED to only one school at a time and must withdraw other applications if admitted.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 5332)",
   "Certification of Finances (COF)"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "required",
  "testingNote": "SAT or ACT required; scores read holistically, superscored; aim to finish testing by Oct for ED.",
  "english": "Not mandatory: TOEFL/IELTS/DET/Cambridge recommended if non-native/not 3 yrs English schooling, esp. if SAT ERW below 690 or ACT Reading and English below 30. Competitive: TOEFL 5+ (new scale), IELTS 7.0 each band, DET 120+.",
  "supplements": "One Hopkins supplemental essay, 350 words max (2026-27: learning from engaging across differences / building community); optional DMP essay only for those programs.",
  "cogsci": "Cognitive Science (major, Krieger School)",
  "interview": "Not confirmed (no interview policy found on pages read).",
  "url": "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements",
  "sources": [
   "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements",
   "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/standardized-testing/",
   "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/early-decision/",
   "https://apply.jhu.edu/international-applicants/",
   "https://apply.jhu.edu/tuition-aid/how-to-apply-for-financial-aid/",
   "https://cogsci.jhu.edu/undergraduate/"
  ],
  "uncertain": [
   "interview: no statement found on apply.jhu.edu pages read",
   "aidDeadlines.rd: JHU deadlines table lists Jan 15, 2027 for RD aid; international-specific filter on the aid page was not separately verified",
   "psych and bio names, cs college, not confirmed by a page read (search did not return them)",
   "coa.fees/direct null: page lists only the one-time $500 matriculation fee; full is freshman total",
   "housing = freshman double 13,073 + meals 8,894"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://oira.jhu.edu/wp-content/uploads/2025-2026-CDS-Johns-Hopkins-University-v2.pdf",
   "applied": 50259,
   "admitted": 3072,
   "admitRate": 6.1,
   "ed": {
    "applied": 7639,
    "admitted": 835,
    "rate": 10.9
   },
   "ea": null,
   "satSubmitPct": 57,
   "satEBRW": [
    750,
    760,
    780
   ],
   "satMath": [
    780,
    790,
    800
   ],
   "actComposite": [
    35,
    35,
    35
   ],
   "firstYearTotal": 1389,
   "intlFirstYear": 188,
   "intlAidCount": 183,
   "intlAidAvg": 43101,
   "notes": "Applied/admitted include unknown-sex (45 / 11). No EA (C22 = No). ED total is both ED rounds as reported.",
   "uncertain": [
    "intlAidCount: 183 coincides with the international enrolled count in the C1 residency table; H6 box itself reads 183"
   ],
   "intl": {
    "applied": 10705,
    "admitted": 404,
    "rate": 3.8
   }
  },
  "req": {
   "application": "Common App, Coalition (Scoir)",
   "appFormat": null,
   "fee": 70,
   "feeWaiver": "Waiver request in Common App or Coalition; otherwise school-submitted fee waiver form",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "Two teachers of two different academic subjects"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "No interviews offered (per JHU FAQ via search excerpt)",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "community",
     "required": true,
     "count": 1,
     "words": 350,
     "chars": null,
     "choose": null,
     "summary": "Engaging across differences and building community with others"
    }
   ],
   "supplementsUrl": "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/",
   "portfolio": "Optional Schoolhouse portfolio or resume upload; Peabody applicants follow separate audition requirements",
   "cssCode": "5332",
   "netPriceUrl": "https://apply.jhu.edu/tuition-aid/estimate-your-college-costs/",
   "netPriceIntl": null,
   "sources": [
    "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/",
    "https://apply.jhu.edu/tuition-aid/how-to-apply-for-financial-aid/"
   ],
   "uncertain": [
    "interview: FAQ statement seen only via search excerpt; official requirements page does not mention interviews",
    "netPriceIntl: estimation tools page not read; no international statement",
    "need-blind status for international applicants not stated on aid page read"
   ]
  },
  "loc": {
   "city": "Baltimore",
   "state": "MD",
   "lat": 39.3299,
   "lon": -76.6205,
   "region": "ne",
   "lx": -10,
   "ly": 5,
   "la": "end"
  },
  "verified": {
   "maj": "partial: tuition 68670 and housing 13073+8894=21967 ok; no recurring fee line on page so fees/direct left null",
   "policy": "ok (page: 'encourage' tests no later than October (ED) / December (RD): recommendation, not cutoff; superscore; self-report)",
   "req": "partial: 350-word essay, $70, 2 teachers, Common App+Coalition confirmed; interview not on page",
   "stats": "ok (H6 box reads 183, avg $43,101, total $7,887,392 = 183 x avg; B2 nonresident first-year is 188, separate from 183)"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Report all available scores; most competitive profile considered",
   "lastSatEarly": "October",
   "lastSatRD": "December",
   "note": "Testing required; encourage no later than October (ED) / December (RD) of senior year",
   "sources": [
    "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/standardized-testing/"
   ],
   "uncertain": [
    "page names no cycle; lastSat* are encouragement, not hard cutoffs"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (BA)",
    "college": "Krieger School of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BS)",
    "college": "Krieger School of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (Psychological and Brain Sciences)",
    "college": "Krieger School of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BS, Whiting School of Engineering)",
    "college": "Whiting School of Engineering",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Molecular and Cellular Biology",
    "college": "Krieger School of Arts and Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "=20",
   "the": "=17",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "williams",
  "name": "Williams",
  "full": "Williams College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "by December 14",
    "notifyDate": "2026-12-14"
   },
   {
    "type": "RD",
    "deadline": "2027-01-04",
    "notify": "by April 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "ED is binding, only one ED application allowed, and you must withdraw other applications if admitted; Williams has no ED II and no EA.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "Mark aid intent on the application; aid forms only after admission (CSS Profile presumed)"
  ],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Truly test-optional; SAT/ACT superscored if submitted; can change mind before deadline.",
  "english": "Not required; TOEFL/IELTS/Duolingo encouraged if English is not first language or school language (competitive: TOEFL 5-6, IELTS 7.5-9, DET 135-160).",
  "supplements": "No required writing supplement (Williams section of Common App only); optional academic paper, arts portfolio, research abstract.",
  "cogsci": "Cognitive Science (concentration, not a major); Neuroscience (concentration on top of a major, often Psych or Bio)",
  "interview": "No interviews offered (InitialView interview may be shared)",
  "url": "https://www.williams.edu/admission-aid/how-to-apply/",
  "sources": [
   "https://www.williams.edu/admission-aid/how-to-apply/",
   "https://www.williams.edu/admission-aid/how-to-apply/first-year/",
   "https://www.williams.edu/admission-aid/tuition-aid/requirements-and-deadlines/",
   "https://www.williams.edu/admission-aid/how-to-apply/additional-applicant-information/international/"
  ],
  "uncertain": [
   "aidForms: exact form for internationals (CSS Profile presumed) is only given to admitted students; not stated on public page",
   "plans: deadline pages carry no explicit year label; aid page references 2027-28 academic year so treated as current",
   "cogsci: concentration status from search snippets (hub.williams.edu/cogsci, neuroscience.williams.edu), not read in full",
   "neuro: listed as major from search summary, not a catalog read",
   "coa from search summary"
  ],
  "nextCycle": null,
  "aidAfter": true,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "Class of 2029 (Fast Facts, updated April 2026)",
   "source": "https://www.williams.edu/about/fast-facts/",
   "applied": 15520,
   "admitted": 1336,
   "admitRate": 8.6,
   "ed": null,
   "ea": null,
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "actComposite": null,
   "firstYearTotal": 567,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "notes": "Official Fast Facts: Entered 567 (584 including deferred students). Early decision was 44% of the entering class (no ED applicant/admit counts). Undergraduate non-U.S. enrollment 9% (all undergrads, not first-year count). Williams has no EA. CDS PDF blocked (403); no scores, intl aid on the page.",
   "uncertain": [
    "firstYearTotal: 567 vs 584 incl. deferred, CDS B2 not seen",
    "all test/intl/aid fields: CDS not accessible"
   ],
   "intlNote": "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요",
   "coa": {
    "year": "2026-27",
    "tuition": 76300,
    "fees": 340,
    "housing": 19320,
    "direct": 95960,
    "full": null,
    "intlExtra": "Williams health plan $3,365 if not waived; optional study-away fee $1,500 not included; books about $1,000 outside comprehensive fee (covered for aid students).",
    "source": "https://catalog.williams.edu/tuition-fees/"
   }
  },
  "req": {
   "application": "Common App, Coalition with Scoir, QuestBridge (per search summary)",
   "appFormat": null,
   "fee": 65,
   "feeWaiver": "Waiver on request via Common App, Coalition or CSS Profile; no disadvantage",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "2 teachers sent by school"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Williams does not conduct interviews",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": false,
     "count": 1,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "Optional 3-5 page graded academic paper from last year"
    }
   ],
   "supplementsUrl": "https://admission.williams.edu/application-supplement",
   "portfolio": "Optional arts portfolio via SlideRoom ($10, waivable); deadlines Nov 15 ED, Jan 4 RD",
   "cssCode": "3965",
   "netPriceUrl": "https://finaid.williams.edu/financial-aid-calculator/",
   "netPriceIntl": false,
   "sources": [
    "https://www.williams.edu/admission-aid/how-to-apply/first-year/ (search summary; direct fetch 403)",
    "https://www.williams.edu/admission-aid/financial-aid/international/ (search summary)"
   ],
   "uncertain": [
    "accepted platforms and fee from search summaries only",
    "midyear report due Feb 6 per summary",
    "CSS 3965 seen on current-student international page; confirm for applicants"
   ]
  },
  "loc": {
   "city": "Williamstown",
   "state": "MA",
   "lat": 42.7128,
   "lon": -73.2032,
   "region": "ne",
   "lx": -10,
   "ly": 5,
   "la": "end"
  },
  "verified": {
   "maj": "partial: coa ok via search snippet of official page (direct fetch 403); majors corrected from search snippets of williams.edu pages (direct fetch 403)",
   "policy": "partial: fetch 403; official-domain search summary confirms superscore and self-report; no test dates",
   "req": "unreachable",
   "stats": "filled"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional; full set of scores required (no sections only); Score Choice allowed",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS 2025-26 lists scores received by Jan 12; no SAT date list found",
   "sources": [
    "https://www.williams.edu/admission-aid/how-to-apply/first-year/"
   ],
   "uncertain": [
    "all fields from search-result summary; direct fetch 403",
    "lastSat*: not stated"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "track",
    "name": "Cognitive Science (concentration, not a major)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Two core courses + four electives; declare spring of sophomore year."
   },
   "neuro": {
    "offered": "track",
    "name": "Neuroscience (interdisciplinary program)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "swarthmore",
  "name": "Swarthmore",
  "full": "Swarthmore College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-04",
    "notify": "mid-February (Winter Early Decision)",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-04",
    "notify": "by April 1 (late March)",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "Fall and Winter ED are both binding; apply ED to only one school and withdraw other applications if admitted.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (fee waived for admitted internationals)",
   "Certificate of Finances, within 7 days of admission"
  ],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Standardized test scores optional; no penalty for not submitting.",
  "english": "Applicants schooled outside the US must submit ONE of: free Swarthmore Video Response, English test (TOEFL/IELTS/DET), or InitialView/Vericant interview.",
  "supplements": "Two required short answers, 250 words each (identity/background and a recently fascinating topic); optional video response and arts supplement.",
  "cogsci": "Cognitive Science (minor and special major); Neuroscience (major, joint Psych/Bio)",
  "interview": "Optional",
  "url": "https://www.swarthmore.edu/admissions-aid/application-materials-deadlines",
  "sources": [
   "https://www.swarthmore.edu/admissions-aid/application-materials-deadlines",
   "https://www.swarthmore.edu/financial-aid/financial-aid-deadlines",
   "https://www.swarthmore.edu/admissions-aid/international-students"
  ],
  "uncertain": [
   "plans.notifyDate: only 'mid-December' / 'mid-February' given",
   "aidDeadlines: internationals apply for aid after admission (no round deadline); domestic aid deadlines equal admission deadlines (Nov 15, Jan 4, Jan 4)",
   "cogsci: program structure from search snippets, not read in full",
   "coa.tuition: source labels 72,722 as 'tuition and books' (books apparently included; separate 825 course materials in full)",
   "cogsci/neuro 'special major' counted as major"
  ],
  "nextCycle": null,
  "aidAfter": true,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.swarthmore.edu/sites/default/files/assets/documents/institutional-effectiveness-research-assessment/Swarthmore-CDS-2025-26.pdf",
   "applied": 12995,
   "admitted": 977,
   "admitRate": 7.5,
   "ed": {
    "applied": 1281,
    "admitted": 228,
    "rate": 17.8
   },
   "ea": null,
   "satSubmitPct": 40.14,
   "satEBRW": [
    740,
    760,
    770
   ],
   "satMath": [
    740,
    770,
    790
   ],
   "actComposite": [
    33,
    34,
    35
   ],
   "firstYearTotal": 426,
   "intlFirstYear": 57,
   "intlAidCount": 75,
   "intlAidAvg": 87434,
   "notes": "Applied = men 5,709 + women 7,286; admitted = 472 + 505. ACT submit 14.79%. No EA. Waitlist admits 14.",
   "uncertain": [
    "ed: single ED total given (likely ED I + ED II combined)"
   ],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 72722,
    "fees": 482,
    "housing": 22566,
    "direct": 95770,
    "full": 98370,
    "intlExtra": "Student health insurance and transportation not included (vary).",
    "source": "https://www.swarthmore.edu/financial-aid/tuition-books-housing-food-plan-activities-fee"
   }
  },
  "req": {
   "application": "Common App, Coalition with Scoir, QuestBridge",
   "appFormat": null,
   "fee": 60,
   "feeWaiver": "Waiver via Swarthmore SwatPass, Common App, NACAC, College Board or ACT",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "2 academic teachers"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional; no disadvantage if skipped",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "background",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "Identity/background that matters and engaging across differences"
    },
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "Recently fascinating topic, its spark, links to other interests"
    }
   ],
   "supplementsUrl": "https://www.swarthmore.edu/admissions-aid/application-materials-deadlines",
   "portfolio": "Optional video response after submitting, via portal",
   "cssCode": "2821",
   "netPriceUrl": null,
   "netPriceIntl": null,
   "sources": [
    "https://www.swarthmore.edu/admissions-aid/application-materials-deadlines",
    "https://www.swarthmore.edu/financial-aid/international-students"
   ],
   "uncertain": [
    "netPriceUrl: no calculator mentioned on pages read",
    "aid forms: CSS Profile plus ISAFA required of admitted internationals per aid page"
   ]
  },
  "loc": {
   "city": "Swarthmore",
   "state": "PA",
   "lat": 39.9054,
   "lon": -75.3541,
   "region": "ne",
   "lx": -10,
   "ly": 16,
   "la": "end"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (superscore SAT, self-report accepted in lieu of official; no cutoff dates on page)",
   "req": "ok: $60, 2 teachers, counselor, 2x250-word required, optional interview, 3 platforms confirmed; CSS 2821 not rechecked",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Not required to send all scores",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "SAT superscore only (ACT not); strongly encourages testing by mid-December",
   "sources": [
    "https://www.swarthmore.edu/admissions-aid/standardized-testing-policy"
   ],
   "uncertain": [
    "lastSat*: only mid-December encouragement from search summary"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (special major; also minor)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (special major run by Psychology and Biology)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (course major, minor, honors)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (course major/minor, honors)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Department applies via sophomore paper and departmental form."
   },
   "bio": {
    "offered": "major",
    "name": "Biology (course major/minor, honors)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "pomona",
  "name": "Pomona",
  "full": "Pomona College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-08",
    "notify": "by December 15",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-08",
    "notify": "by February 15",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-08",
    "notify": "by April 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "ED I and ED II are binding; you may also apply through non-binding plans (e.g., EA) elsewhere but not ED, and must withdraw others if admitted.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 4607) or Pomona International Financial Aid Application if fee is a burden",
   "translated prior-prior-year tax/earnings documents via IDOC or admissions portal"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "All applicants may self-report SAT/ACT; test-optional.",
  "english": "Required (TOEFL, IELTS, or Duolingo) if school's primary language of instruction is not English; listed minimums TOEFL 5 (new scale), IELTS 7, Duolingo 130.",
  "supplements": "Two Pomona essays on prior page (150-word academic interest + 250-word short response) plus Common App essay; prompts seen were for Fall 2026 entry.",
  "cogsci": "Cognitive Science (major, interdisciplinary, in Linguistics and Cognitive Science dept); Neuroscience (major)",
  "interview": null,
  "url": "https://www.pomona.edu/admissions/apply",
  "sources": [
   "https://www.pomona.edu/admissions/paths-apply",
   "https://www.pomona.edu/admissions/apply",
   "https://www.pomona.edu/admissions/apply/international-applicants",
   "https://www.pomona.edu/financial-aid/applying-aid/application-materials-and-deadlines",
   "https://www.pomona.edu/financial-aid/applying-for-aid/international-aid"
  ],
  "uncertain": [
   "plans: Paths to Apply page lists Nov 8 / Jan 8 with no year label; other text on pomona.edu refers to 2026 admitted-student events, so page may be stale for 2026-27 (note Nov 8, 2026 is a Sunday). Confirm on pomona.edu",
   "aidDeadlines: aid page (Nov 15 / Jan 15 / Jan 15) has no year label and differs from admission dates",
   "supplements: prompts on apply page were labeled Fall 2026 cycle, not confirmed for 2026-27",
   "interview: no page found stating interview policy",
   "testingNote: no 2026-27-specific testing page read; relied on international applicants page",
   "cogsci name inconsistent across Pomona pages",
   "coa from search summary; Pomona pages disagree on off-campus totals"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "Class of 2029 profile",
   "source": "https://www.pomona.edu/node/8273 (applications, test-submit, intl); https://www.pomona.edu/node/7962 (admitted); https://www.pomona.edu/node/4116 (medians)",
   "applied": 12470,
   "admitted": 861,
   "admitRate": 6.9,
   "ed": null,
   "ea": null,
   "satSubmitPct": 48,
   "satEBRW": null,
   "satMath": null,
   "actComposite": null,
   "firstYearTotal": null,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "notes": "Applied 12,470 from the class profile; admitted 861 from the March 2025 admission announcement (Students Offered Admission), a different page. Test-optional: 48% of incoming class submitted scores. Medians only, of submitters: SAT EBRW 755, SAT Math 770, ACT Composite 34 (no percentiles). International 15% by citizenship (count not given). Profile lists ED matriculants 210, RD matriculants 204 (sum 414, not confirmed as total class). ED applied/admitted not given.",
   "uncertain": [
    "admitted: from a separate announcement page, not the same page as applied",
    "firstYearTotal: not stated; 414 matriculant sum unconfirmed",
    "admitRate: 861/12470 computed"
   ],
   "intlNote": "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요",
   "coa": {
    "year": "2026-27",
    "tuition": 71660,
    "fees": 420,
    "housing": 23590,
    "direct": 95670,
    "full": null,
    "intlExtra": "Medical insurance $3,312 per Cost of Attendance page ($3,219 per catalog); books included in comprehensive fee from fall 2026.",
    "source": "https://www.pomona.edu/administration/finance-office/student-accounts/tuition-and-costs"
   }
  },
  "req": {
   "application": "Common App, Coalition on Scoir, QuestBridge",
   "appFormat": null,
   "fee": 80,
   "feeWaiver": "Pomona Access Pass form waives fee for aid applicants; also via admissions office",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": 1,
    "note": "2 core academic teachers; optional 3rd from elective teacher/coach/other"
   },
   "counselorRec": null,
   "midYearReport": null,
   "interview": "Optional; no staff/alumni interviews; third-party InitialView, Vericant, Duolingo accepted",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "intellectual",
     "required": true,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "What draws you to intended major or an academic passion"
    },
    {
     "type": "community",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": "1 of 3",
     "summary": "Community, out-of-class experience, or how others see you"
    }
   ],
   "supplementsUrl": "https://www.pomona.edu/admissions/apply",
   "portfolio": null,
   "cssCode": "4607",
   "netPriceUrl": "https://www.pomona.edu/financial-aid/cost-attendance/estimate-your-aid",
   "netPriceIntl": false,
   "sources": [
    "https://www.pomona.edu/admissions/apply",
    "https://www.pomona.edu/admissions/paths-apply (search summary)",
    "https://www.pomona.edu/financial-aid/cost-attendance/estimate-your-aid (search summary)"
   ],
   "uncertain": [
    "supplements: apply page labeled Fall 2026; required status not stated; 2026-27 set not confirmed",
    "counselorRec/midYearReport not stated on pages read",
    "fee $80 from search summary"
   ]
  },
  "loc": {
   "city": "Claremont",
   "state": "CA",
   "lat": 34.0977,
   "lon": -117.7131,
   "region": "w",
   "lx": 11,
   "ly": -4,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (SAT superscore not addressed, null correct; self-report in portal; no dates)",
   "req": "partial: 150 + 1-of-3 250 confirmed, platforms ok, teacher recs 2 + 1 optional ok; fee/interview/counselor not on page",
   "stats": "filled"
  },
  "policy": {
   "superscore": null,
   "selfReport": true,
   "scoreChoice": "Test-optional; yes/no on application, self-report in portal",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "ED I deadline Nov 8; ED II/RD Jan 8; page only states ACT superscore",
   "sources": [
    "https://www.pomona.edu/admissions/paths-apply"
   ],
   "uncertain": [
    "superscore: SAT not addressed",
    "lastSat*: not stated"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Linguistics and Cognitive Science (catalog); academics page lists Cognitive Science",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychological Science (catalog) / Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "berkeley",
  "name": "UC Berkeley",
  "full": "University of California, Berkeley",
  "public": true,
  "commonApp": false,
  "plans": [
   {
    "type": "RD",
    "deadline": "2026-11-30",
    "notify": "end of March (UC window Mar 1-31)",
    "notifyDate": null
   }
  ],
  "earlyRule": "No early programs: Berkeley offers no early admission or early decision, so applying early elsewhere has no interaction; single UC application (filing Oct 1-Nov 30) is the only route.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "blind",
  "testingNote": "Test-free/test-blind: SAT/ACT not used in admissions or scholarships even if submitted (used only for placement/credit).",
  "english": "Required if less than 3 years of English instruction: TOEFL iBT 4.5 (new scale; 80 old) / IELTS 6.5 / DET 115, or AP/IB English, ACT English 24+, SAT Writing and Language 31+. Berkeley wants it satisfied by Jan 31.",
  "supplements": "UC Personal Insight Questions: answer 4 of 8, each max 350 words.",
  "cogsci": "Cognitive Science (major)",
  "interview": "No interview in the UC process (UC says a campus may occasionally request one to assess English).",
  "url": "https://admissions.berkeley.edu/apply-to-berkeley/freshman-applicants/",
  "sources": [
   "https://admissions.berkeley.edu/apply-to-berkeley/dates-deadlines/",
   "https://admissions.berkeley.edu/international-students/",
   "https://financialaid.berkeley.edu/international-students/",
   "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/dates-and-deadlines.html",
   "https://admission.universityofcalifornia.edu/admission-requirements/first-year-requirements/english-language-proficiency.html",
   "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
   "https://cogsci.berkeley.edu/undergraduate-program/major-program"
  ],
  "uncertain": [
   "plans.notifyDate: UC says decisions posted Mar 1-31, Berkeley says 'end of March'; exact date emailed",
   "testing: test-free wording taken from search snippet of Berkeley FAQ, not read in full",
   "meetsNeed/aidForms: Berkeley states international students are ineligible for federal, state and need-based university aid; only private/outside scholarships (Berkeley international merit scholarships page not checked)",
   "interview: no UC interview policy statement read except English-skills note in search snippet",
   "admitRate: no official per-college/major freshman rate found (Engineering brochure says 6% for 2023-24, not major-level)",
   "cogsci/psych/bio status from search summary; L&S entry rules not verified",
   "coa fees null: tuition and fees combined on page; direct excludes SHIP"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://docs.google.com/spreadsheets/d/1INsGFH6MhaO-MFMBZ1Dngcn84FeN-hc0BLS0-v8TL_k (official Berkeley OPA CDS 2025-26, read via PDF export)",
   "applied": 126864,
   "admitted": 14524,
   "admitRate": 11.4,
   "ed": null,
   "ea": null,
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "actComposite": null,
   "firstYearTotal": 6687,
   "intlFirstYear": 762,
   "intlAidCount": null,
   "intlAidAvg": null,
   "notes": "Test-free; C9 blank. No ED/EA (UC). H6 blank in CDS. Applied total is the CDS C1 total (men 62,395 + women 64,469 + unknown-sex remainder).",
   "uncertain": [],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 57484,
    "fees": null,
    "housing": 23640,
    "direct": 81124,
    "full": 93944,
    "intlExtra": "Nonresident Supplemental Tuition $39,270 (tuition 57,484 = 18,214 tuition+fees combined + 39,270). Student Health Insurance Plan $5,066 charged to international students (budget direct total incl. SHIP is $86,190). Housing = residence hall 16,640 + meal plan 7,000.",
    "source": "https://financialaid.berkeley.edu/how-aid-works/student-budgets-cost-of-attendance/"
   }
  },
  "req": {
   "application": "UC Application (University of California)",
   "appFormat": "UC Application: 4 personal insight questions chosen from 8, max 350 words each; activity/award/work/volunteer sections (entry counts not confirmed); no separate supplement, letters, or transcripts at application",
   "fee": 95,
   "feeWaiver": "UC waiver only for US citizens, permanent residents or California residents; not for international",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "UC does not read letters at application; a campus may request later"
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "No interviews at Berkeley; optional InitialView video cannot replace English score",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 4,
     "words": 350,
     "chars": null,
     "choose": "4 of 8",
     "summary": "Four short essays chosen from eight UC insight prompts"
    }
   ],
   "supplementsUrl": "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "sources": [
    "https://admission.universityofcalifornia.edu/counselors/_files/documents/quick-reference-guide-to-uc-admissions.pdf",
    "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
    "https://admissions.berkeley.edu/apply-to-berkeley/international-students/requirements-for-international-students/",
    "https://admissions.berkeley.edu/apply-to-berkeley/first-year-applicants-uc-berkeley/freshmen-requirements/"
   ],
   "uncertain": [
    "fee: $95 is the UC fee for non-California residents attending school outside the US (UC Quick Reference Guide, August 2026)",
    "activities/awards entry limits: not found on pages read",
    "midYearReport: UC has no counselor midyear report in the application; senior-grade updates not confirmed, left null",
    "cssCode and netPriceUrl: Berkeley cost pages not read; earlier note says international students are ineligible for need-based university aid",
    "supplements type: PIQ prompts not paraphrased individually"
   ]
  },
  "loc": {
   "city": "Berkeley",
   "state": "CA",
   "lat": 37.8719,
   "lon": -122.2585,
   "region": "w",
   "lx": 11,
   "ly": 2,
   "la": "start"
  },
  "verified": {
   "maj": "partial: coa ok (18214+39270 tuition/fees combined, housing 16640+7000, direct excludes SHIP); neuro restricted corrected; cogsci/psych/bio entry rules left null",
   "policy": "ok (nothing to verify; all null)",
   "req": "partial: 4 of 8 PIQs 350 words confirmed; activities/awards limit and fee not readable (PDF unreadable); no QuestBridge/Common App",
   "stats": "ok"
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": null,
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Test-free: SAT/ACT not used in any part of admissions; scores only for placement/credit if admitted",
   "sources": [
    "https://admissions.berkeley.edu/apply-to-berkeley/first-year-applicants-uc-berkeley/first-year-policy-changes/"
   ],
   "uncertain": []
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science",
    "college": "College of Letters and Science",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "L&S major; freshmen generally enter L&S undeclared; requirements not verified."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (launched July 2024)",
    "college": "College of Letters and Science",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare after prerequisites (Chem 1A, Math 10A/B, Bio 1A, Physics 8A) before end of 5th semester; Neurobiology emphasis in MCB closed to new majors 2025-26."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": "College of Letters and Science",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Entry rules not verified."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (CDSS), or EECS (College of Engineering)",
    "college": "CDSS or College of Engineering (EECS)",
    "restricted": "direct-admit",
    "admitRate": null,
    "admitNote": null,
    "note": "CDSS admits directly into CS/DS/Stats major; Engineering applicants apply to the college; L&S CS petition route also reported."
   },
   "bio": {
    "offered": "major",
    "name": "Molecular and Cell Biology (and Integrative Biology)",
    "college": "College of Letters and Science",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": "=20",
   "the": "=9",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "wesleyan",
  "name": "Wesleyan",
  "full": "Wesleyan University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-01",
    "notify": "mid-February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-01",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED I and II are binding with a signed agreement; must withdraw other applications and not start new ones.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 3959)",
   "ISFAA if Profile unavailable/unaffordable",
   "tax documents via IDOC if requested"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-01",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "SAT/ACT optional for most students; exam-based curricula (A level, IB, etc.) must provide exam scores.",
  "english": "Advanced English expected; TOEFL/IELTS/DET/Cambridge optional but strongly recommended for non-native speakers (TOEFL 100/5-6, IELTS 7.5, DET 130).",
  "supplements": "Wesleyan member questions on Common App; no confirmed required essay.",
  "cogsci": "Neuroscience and Behavior (major); Cognitive Science concentration within Psychology; no cog sci major",
  "interview": null,
  "url": "https://www.wesleyan.edu/admission/undergraduate-admission/first-year.html",
  "sources": [
   "https://www.wesleyan.edu/admission/undergraduate-admission/first-year.html",
   "https://www.wesleyan.edu/admission/application-process.html",
   "https://www.wesleyan.edu/admission/affordability-and-aid/applying-for-aid.html",
   "http://www.wesleyan.edu/admission/undergraduate-admission/international/",
   "https://www.wesleyan.edu/admission/undergraduate-admission/early-decision.html"
  ],
  "uncertain": [
   "plans: admission deadline table has no year label (aid page for 2027-28 confirms ED I Nov 15, ED II Jan 1, RD Jan 15 aid)",
   "intlAid: Wesleyan does not use the term; page says international aid is limited and admission for aid-seekers is 'extremely competitive', treated as need-aware (US applicants need-blind not re-verified)",
   "supplements: could not confirm whether member questions include an essay",
   "interview: not mentioned on pages read",
   "international page seen shows 2025-26 round dates labeled '2026-27 entry'; used the 2027-28 aid page instead",
   "cogsci none: from CIS pathways page via search summary",
   "coa from search summary"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "Class of 2029 profile (Profile of Students Offered Admission for Fall 2025)",
   "source": "https://www.wesleyan.edu/admission/class-profile.html",
   "applied": 14973,
   "admitted": 2453,
   "admitRate": 16.4,
   "ed": {
    "applied": 1262,
    "admitted": 512,
    "rate": 40.6
   },
   "ea": null,
   "satSubmitPct": 64,
   "satEBRW": [
    730,
    750,
    770
   ],
   "satMath": [
    730,
    770,
    790
   ],
   "actComposite": [
    34,
    35,
    35
   ],
   "firstYearTotal": 842,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "notes": "Test scores and 64% submit are for ADMITTED students (those who asked for scores to be considered), not enrolled. Class size 842 (887 incl. 45 transfers). International: 10% of admits, 11% in the 2029 trend column (no count). Wesleyan has no EA (ED I/II only; page gives a single ED figure).",
   "uncertain": [
    "scores/submit% are admit-pool, not enrolled-class like CDS C9",
    "intlFirstYear: percent only",
    "ed: single figure, may combine ED rounds"
   ],
   "scoreBasis": "합격자",
   "intlNote": "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요",
   "coa": {
    "year": "2026-27",
    "tuition": 75916,
    "fees": 404,
    "housing": 21660,
    "direct": 97980,
    "full": 100780,
    "intlExtra": "First-years also pay one-time $300 matriculation fee (first-year total $101,080); full includes optional $50 Green Fund fee and $2,750 books/personal.",
    "source": "https://www.wesleyan.edu/admission/affordability-and-aid/cost-of-attendance.html"
   }
  },
  "req": {
   "application": "Common App, Coalition on Scoir",
   "appFormat": null,
   "fee": 65,
   "feeWaiver": "Waived for all applicants who apply for financial aid",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "2 academic teachers (one humanities/social/language, one math/science)"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "No evaluative interviews; international applicants may submit optional InitialView or Vericant",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://www.wesleyan.edu/admission/application-process.html",
   "portfolio": "Optional arts supplements (music, theatre, visual art, film, dance)",
   "cssCode": "3959",
   "netPriceUrl": null,
   "netPriceIntl": null,
   "sources": [
    "https://www.wesleyan.edu/admission/application-process.html",
    "https://www.wesleyan.edu/admission/undergraduate-admission/first-year.html (search summary)",
    "https://www.wesleyan.edu/admission/undergraduate-admission/international/index.html (search summary)"
   ],
   "uncertain": [
    "supplements: Wesleyan member questions exist but prompts not found; empty array means UNKNOWN, not none",
    "netPriceUrl: calculator exists but direct URL not found",
    "recs/midyear from search summary of first-year page"
   ]
  },
  "loc": {
   "city": "Middletown",
   "state": "CT",
   "lat": 41.5566,
   "lon": -72.6569,
   "region": "ne",
   "lx": -10,
   "ly": 12,
   "la": "end"
  },
  "verified": {
   "maj": "partial: coa ok; cogsci none: catalog shows a Cognitive Science concentration inside the Psychology major (departmental certificate) via search snippet, not a standalone major, so none/track is a judgement call and was left",
   "policy": "ok (SAT best sections across any dates; self-report null acceptable, Common App choice only)",
   "req": "partial: $65 and Common App+Coalition confirmed; recs/supplements/interview not read; 'Member Questions' exist so supplements [] means unknown",
   "stats": "filled"
  },
  "policy": {
   "superscore": true,
   "selfReport": null,
   "scoreChoice": "Test-optional; choose via Common App which scores considered",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Best SAT section scores across dates used",
   "sources": [
    "https://www.wesleyan.edu/admission/admission-faq.html"
   ],
   "uncertain": [
    "all fields from search-result summary",
    "selfReport: not clearly stated",
    "lastSat*: not found"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "track",
    "name": "Cognitive Science concentration (in Psychology)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science major; cognitive science is a pathway grouping CS, Neuroscience and Behavior, and Psychology"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience and Behavior",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Tied to health studies pathway; pre-med is advising only."
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "carleton",
  "name": "Carleton",
  "full": "Carleton College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "December 15",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "February 15",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "April 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "Both ED rounds (Fall and Winter) are binding; Carleton says most international aid is awarded in RD and recommends RD for aid applicants.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 6081) or free ISAFA",
   "Certification of Finances (required of all internationals)"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Permanent test-optional policy; scores due Nov 20 (fall ED) / Jan 20 (winter ED, RD) per search summary, but the materials page says Nov 15 / Jan 15.",
  "english": "TOEFL, IELTS or Duolingo required if primary language of instruction is not English; no minimum published on page read.",
  "supplements": "No writing supplement (optional arts supplements only)",
  "cogsci": "Cognitive Science",
  "interview": "Optional; offered early June through Jan 15",
  "url": "https://www.carleton.edu/admissions/apply/",
  "sources": [
   "https://www.carleton.edu/admissions/apply/steps/materials/",
   "https://www.carleton.edu/financial-aid/apply-for-aid/international-students/",
   "https://www.carleton.edu/admissions/apply/steps/international/ (search summary)"
  ],
  "uncertain": [
   "intlAid: Carleton pages say 'limited funding for international students' and that most international aid is awarded in RD; no explicit need-blind/need-aware statement found, treat as need-aware/limited",
   "notifyDate RD: April 1 on admissions page vs April 15 on aid page",
   "supplements: not read",
   "cogsci: major not verified on official page",
   "meetsNeed: search summary of international page says meets 100% without loans; the page fetched did not state it",
   "coa from search summary",
   "neuro minor-only per Carleton program finder via search summary"
  ],
  "nextCycle": "Starting 2027-28, Carleton plans to replace loans in need-based packages with grants and scholarships (no-loan policy announced); 2027-28 admission dates not found.",
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://carleton-wp-production.s3.amazonaws.com/uploads/sites/292/2026/04/CDS-PDF-2025-2026_PDF_Carleton_041426.pdf",
   "applied": 6796,
   "admitted": 1480,
   "admitRate": 21.8,
   "ed": {
    "applied": 760,
    "admitted": 263,
    "rate": 34.6
   },
   "ea": null,
   "satSubmitPct": 39.4,
   "satEBRW": [
    730,
    750,
    770
   ],
   "satMath": [
    720,
    760,
    780
   ],
   "actComposite": [
    32,
    34,
    35
   ],
   "firstYearTotal": 518,
   "intlFirstYear": 51,
   "intlAidCount": 63,
   "intlAidAvg": 81596,
   "notes": "C1 totals are sums of men+women+unknown sex (6796 matches residency table total; 1480 likewise). No EA plan.",
   "uncertain": [
    "ed: CDS C21 block is labeled 'For the Fall 2024 entering class' in the 2025-26 file, so it may be the prior cycle"
   ],
   "intl": {
    "applied": 3290,
    "admitted": 132,
    "rate": 4.0
   },
   "coa": {
    "year": "2026-27",
    "tuition": 75186,
    "fees": 480,
    "housing": 19314,
    "direct": 94980,
    "full": 97870,
    "intlExtra": "Carleton's international-student estimate is $104,746 (adds books, personal, travel, health insurance ~$2,355, break expenses).",
    "source": "https://www.carleton.edu/financial-aid/cost/"
   }
  },
  "req": {
   "application": "Common App, QuestBridge, Coalition",
   "appFormat": null,
   "fee": 0,
   "feeWaiver": "No application fee",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "2 academic teachers"
   },
   "counselorRec": true,
   "midYearReport": null,
   "interview": "Optional; high school students may interview early June through Jan 15 of senior year",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://www.carleton.edu/admissions/apply/steps/materials/",
   "portfolio": "Optional arts supplements (visual art, music, theater, dance, film)",
   "cssCode": "6081",
   "netPriceUrl": "http://www.carleton.edu/admissions/apply/afford/aid-estimators/npc/",
   "netPriceIntl": null,
   "sources": [
    "https://www.carleton.edu/admissions/apply/steps/materials/",
    "https://www.carleton.edu/admissions/apply/afford/aid-estimators/",
    "https://www.carleton.edu/financial-aid/apply-for-aid/international-students/ (search summary)"
   ],
   "uncertain": [
    "page cycle not stated (Class of 2030 reference)",
    "midyear: page only asks first-term senior grades",
    "CSS 6081 from search summary; internationals may use CSS or ISAFA",
    "interview end date year not stated"
   ]
  },
  "loc": {
   "city": "Northfield",
   "state": "MN",
   "lat": 44.4605,
   "lon": -93.1544,
   "region": "mw",
   "lx": 11,
   "ly": 10,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (self-report in lieu of official; receipt deadlines Nov 15 / Jan 15 only; superscore not stated)",
   "req": "ok: no fee, 2 teachers + counselor, optional interview to Jan 15, 3 platforms, no essay on this page; CSS 6081 not rechecked",
   "stats": "partial: all values match; ED 760/263 sits under a 'Fall 2024 entering class' label in the 2025-26 CDS, so it may be the prior cycle"
  },
  "policy": {
   "superscore": null,
   "selfReport": true,
   "scoreChoice": "Test-optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Self-report in lieu of official; score receipt deadlines Nov 15 (Fall ED), Jan 15 (Winter ED/RD)",
   "sources": [
    "https://www.carleton.edu/admissions/apply/steps/materials/"
   ],
   "uncertain": [
    "superscore: not stated",
    "lastSat*: only receipt deadlines given"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (major and minor; merged department with Linguistics)",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "minor",
    "name": "Neuroscience (minor)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising only (not verified)."
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "bowdoin",
  "name": "Bowdoin",
  "full": "Bowdoin College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-05",
    "notify": "by early February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "mid-March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED I and II are binding with an agreement signed by student, parent and counselor; apply ED to only one school.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-blind",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile, within 7 days of admission (ISFAA no longer accepted)"
  ],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "SAT/ACT optional; yes/no choice per test can be changed until the deadline.",
  "english": "TOEFL/IELTS/Duolingo/Cambridge optional, no minimum score; admitted students must already be highly proficient (no ESL).",
  "supplements": "Bowdoin Supplement with two optional essays, up to 250 words each; optional video response and arts supplement.",
  "cogsci": "Neuroscience (major, 13 courses, no minor); no cog sci program found",
  "interview": "Strongly encouraged but not required",
  "url": "https://www.bowdoin.edu/admissions/apply/index.html",
  "sources": [
   "https://www.bowdoin.edu/admissions/apply/index.html",
   "https://www.bowdoin.edu/admissions/apply/dates-deadlines/index.html",
   "https://www.bowdoin.edu/admissions/apply/international-students/index.html"
  ],
  "uncertain": [
   "plans: deadlines page has no year label (Nov 15 / Jan 5 / Jan 5; domestic RD aid Feb 1); one search snippet showed ED2 aid Jan 1 on the student-aid calendar vs Jan 5 on admissions page",
   "notifyDate: school gives month-level wording only",
   "interview/supplement: taken from apply-page summary, not independently cross-checked",
   "cogsci: absence inferred from major list/search, not an explicit statement",
   "coa.full: page says $97,900+ (travel varies)"
  ],
  "nextCycle": null,
  "aidAfter": true,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.bowdoin.edu/ir/pdf/bowdoin-cds_2025-2026.pdf",
   "applied": 14045,
   "admitted": 957,
   "admitRate": 6.8,
   "ed": {
    "applied": 1985,
    "admitted": 296,
    "rate": 14.9
   },
   "ea": null,
   "satSubmitPct": 34.76,
   "satEBRW": [
    730,
    750,
    770
   ],
   "satMath": [
    730,
    760,
    780
   ],
   "actComposite": [
    33,
    34,
    35
   ],
   "firstYearTotal": 515,
   "intlFirstYear": 26,
   "intlAidCount": 102,
   "intlAidAvg": 84882,
   "notes": "C1 sums: men 6690+women 7355 applied, 440+517 admitted. No EA plan. SAT 34.76% (ACT 17.28%).",
   "uncertain": [
    "ed: CDS C21 block is labeled 'For the Fall 2024 entering class' in the 2025-26 file, so it may be the prior cycle"
   ],
   "intl": {
    "applied": 6041,
    "admitted": 76,
    "rate": 1.3
   },
   "coa": {
    "year": "2026-27",
    "tuition": 74268,
    "fees": 700,
    "housing": 20432,
    "direct": 95400,
    "full": 97900,
    "intlExtra": null,
    "source": "https://www.bowdoin.edu/student-aid/cost-of-attendance/index.html"
   }
  },
  "req": {
   "application": "Common App, Coalition on Scoir, QuestBridge",
   "appFormat": null,
   "fee": 70,
   "feeWaiver": "Automatic for aid seekers, first-gen, veterans, hardship",
   "teacherRecs": {
    "required": 1,
    "optionalExtra": 0,
    "otherRequired": 1,
    "note": "Counselor + 1 core-academic teacher + 1 other (second teacher, coach, employer, etc.), all required"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Strongly encouraged, not required; staff/student/alumni or approved vendors (InitialView, Vericant, Duolingo)",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": false,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "Reflect on a line of The Offer of the College"
    },
    {
     "type": "background",
     "required": false,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "Unique perspectives you would bring or navigating difference"
    }
   ],
   "supplementsUrl": "https://www.bowdoin.edu/admissions/apply/index.html",
   "portfolio": null,
   "cssCode": "3089",
   "netPriceUrl": "https://www.bowdoin.edu/student-aid/estimate-aid/",
   "netPriceIntl": false,
   "sources": [
    "https://www.bowdoin.edu/admissions/apply/index.html",
    "https://www.bowdoin.edu/student-aid/estimate-aid/ (search summary)"
   ],
   "uncertain": [
    "supplements: page labels both essays optional; confirm on 2026-27 Common App",
    "midyear required for RD and ED2; ED1 sends first-quarter grades"
   ]
  },
  "loc": {
   "city": "Brunswick",
   "state": "ME",
   "lat": 43.9077,
   "lon": -69.964,
   "region": "ne",
   "lx": -10,
   "ly": 16,
   "la": "end"
  },
  "verified": {
   "maj": "partial: coa ok; cogsci none not shown (IR page list empty), absence unconfirmed on official list",
   "policy": "ok (superscore, self-report for all applicants)",
   "req": "partial: fee 70, platforms, optional interview ok; two 250-word essays optional ok; recs differ (see correction)",
   "stats": "partial: all values match; ED 1985/296 sits under a 'Fall 2024 entering class' label in the 2025-26 CDS, so it may be the prior cycle"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional; applicants choose yes/no per test",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Highest CR and Math across dates considered",
   "sources": [
    "https://www.bowdoin.edu/admissions/apply/test-optional-policy/index.html"
   ],
   "uncertain": [
    "lastSat*: not on page"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science program found; Digital and Computational Studies is a coordinate major"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "middlebury",
  "name": "Middlebury",
  "full": "Middlebury College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-02",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-04",
    "notify": "mid-February",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-04",
    "notify": "late March",
    "notifyDate": "2027-03-25"
   }
  ],
  "earlyRule": "Both ED rounds are binding; must sign the ED Commitment Statement and withdraw other applications if admitted.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (electronic only; ISFAA not accepted)",
   "IDOC: translated parent tax/income documents"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-04",
   "rd": "2027-02-01"
  },
  "testing": "optional",
  "testingNote": "Test optional; self-reported scores accepted at application.",
  "english": "Required unless native English or all high school classes in English; TOEFL iBT, DET, IELTS or Cambridge. Recommended minimums: TOEFL 105 (5.5 band note on page), DET 130, IELTS 7.0, Cambridge C1.",
  "supplements": "No supplemental essay required.",
  "cogsci": "Neuroscience (major); no cognitive science major confirmed",
  "interview": "Optional alumni interview (request by Nov 8 ED I, Jan 9 ED II, Jan 16 RD); not required for internationals",
  "url": "https://www.middlebury.edu/college/admissions",
  "sources": [
   "https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines",
   "https://www.middlebury.edu/student-financial-services/apply-aid/first-year-and-transfer-students"
  ],
  "uncertain": [
   "cogsci: not verified on official program list",
   "TOEFL recommended minimum text garbled (page says 5.5 and 105 pre Jan 21 2026); verify current TOEFL minimum",
   "notifyDate approximations: mid-December / mid-February / late March are the school's wording only",
   "ED I application deadline Nov 2 is as read; page does not state entering year explicitly",
   "coa.fees: Student Government Association fee"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.middlebury.edu/sites/default/files/2026-11/Fall 2025 CDS FINAL.pdf",
   "applied": 11831,
   "admitted": 1511,
   "admitRate": 12.8,
   "ed": {
    "applied": 1179,
    "admitted": 460,
    "rate": 39.0
   },
   "ea": null,
   "satSubmitPct": 33,
   "satEBRW": [
    730,
    750,
    770
   ],
   "satMath": [
    720,
    750,
    780
   ],
   "actComposite": [
    33,
    34,
    35
   ],
   "firstYearTotal": 634,
   "intlFirstYear": 84,
   "intlAidCount": 198,
   "intlAidAvg": 83697,
   "notes": "File named 'Fall 2025 CDS FINAL' contains fall 2025 data but page headers read 'Common Data Set 2024-2025' (template header not updated). Admits are September admits only (Feb admits excluded). C1 applied = 5311+6506+14 sum, matches residency table 11831.",
   "uncertain": [
    "cdsYear: headers say 2024-2025 but all items refer to Fall 2025",
    "ed.admitted: excludes February (ED II) admits per the form, so ED rate is understated",
    "admitted: September-only admits (school states 12.8% admit rate on form)",
    "intlAid: H6 text extraction misaligned but values 198 x $83,697 = $16,572,104 total, consistent"
   ],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 72924,
    "fees": 542,
    "housing": 20920,
    "direct": 94386,
    "full": 97386,
    "intlExtra": null,
    "source": "https://www.middlebury.edu/student-financial-services/tuition-fees-and-payment/tuition-and-fees"
   }
  },
  "req": {
   "application": "Common App, Coalition, QuestBridge",
   "appFormat": null,
   "fee": 0,
   "feeWaiver": "No application fee (free from 2026-27 per search summary)",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "request at least 2"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional alumni interview requested after applying, not guaranteed; Glimpse video/audio if unmatched",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines",
   "portfolio": "Optional arts supplements via SlideRoom",
   "cssCode": "3526",
   "netPriceUrl": "https://www.middlebury.edu/student-financial-services/financial-tools-and-resources/cost-calculators",
   "netPriceIntl": false,
   "sources": [
    "https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines",
    "https://www.middlebury.edu/student-financial-services/financial-tools-and-resources/cost-calculators (search summary)"
   ],
   "uncertain": [
    "fee 0 from search summary, not on page fetched",
    "interview request dates Nov 8 (ED I), Jan 9 (ED II), Jan 16 (RD); year not stated",
    "midyear: ED II Jan 15, RD Feb 15"
   ]
  },
  "loc": {
   "city": "Middlebury",
   "state": "VT",
   "lat": 44.0081,
   "lon": -73.1774,
   "region": "ne",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (self-report at application; superscore not stated)",
   "req": "partial: >=2 teachers, interview request dates, 3 platforms, no supplemental essay confirmed; fee not mentioned on page",
   "stats": "ok (headers say 2024-2025 but items say Fall 2025; admitted is September-only)"
  },
  "policy": {
   "superscore": null,
   "selfReport": true,
   "scoreChoice": "Test-optional; box on Common App to have scores considered",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Self-report accepted at application",
   "sources": [
    "https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines"
   ],
   "uncertain": [
    "all fields from search-result summary",
    "superscore/lastSat*: not found"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science major or minor listed"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "grinnell",
  "name": "Grinnell",
  "full": "Grinnell College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-to-late December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-05",
    "notify": "early February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "late March to early April",
    "notifyDate": null
   }
  ],
  "earlyRule": "Both ED rounds are binding; ED agreement signed by student, counselor and parent; no application fee.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile or Grinnell International Student Application for Financial Assistance"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-05",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Must declare by deadline whether you will submit scores; cannot change afterward.",
  "english": "Required if native language not English or schooling not primarily English; DET, IELTS, TOEFL iBT or Essentials; official report required.",
  "supplements": "Optional short answer supplement, 200-450 words; no required supplement.",
  "cogsci": "Neuroscience, Psychology; no cog sci program confirmed",
  "interview": "Recommended, not required",
  "url": "https://www.grinnell.edu/admission/apply/first-year",
  "sources": [
   "https://www.grinnell.edu/admission/apply/first-year/requirements",
   "https://www.grinnell.edu/admission/apply/international",
   "https://www.grinnell.edu/admission/apply/first-year"
  ],
  "uncertain": [
   "cogsci: not verified",
   "notifyDate: school gives only ranges",
   "ED II deposit date conflicts (Feb 14 vs Feb 20) between pages",
   "coa: figures from search summary of official pages, not read directly",
   "intlExtra: whether insurance is waivable not verified"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2024-2025",
   "source": "https://www.grinnell.edu/doc/grinnell-college-common-data-set-2024-2025",
   "applied": 9758,
   "admitted": 1416,
   "admitRate": 14.5,
   "ed": {
    "applied": 828,
    "admitted": 283,
    "rate": 34.2
   },
   "ea": null,
   "satSubmitPct": 29,
   "satEBRW": [
    700,
    730,
    750
   ],
   "satMath": [
    710,
    760,
    790
   ],
   "actComposite": [
    31,
    33,
    34
   ],
   "firstYearTotal": 438,
   "intlFirstYear": 98,
   "intlAidCount": 243,
   "intlAidAvg": 56853,
   "notes": "2025-2026 CDS not posted on Grinnell IR page as of 2026-11-26; used 2024-2025 (fall 2024 entering class). No EA plan (C22 = N).",
   "uncertain": [
    "whole record is fall 2024 cohort, not fall 2025"
   ],
   "intlNote": "학교 통계표(CDS)에 국제학생 지원/합격 칸이 비어 있어요",
   "coa": {
    "year": "2026-27",
    "tuition": 73582,
    "fees": 572,
    "housing": 17784,
    "direct": 91938,
    "full": 93338,
    "intlExtra": "Student health insurance $2,769 appears on the bill; transportation estimate $1,300 for students from abroad",
    "source": "https://www.grinnell.edu/admission/financial-aid/cost-attendance"
   }
  },
  "req": {
   "application": "Common App, QuestBridge",
   "appFormat": null,
   "fee": 0,
   "feeWaiver": "No application fee",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "2 teacher evaluations"
   },
   "counselorRec": true,
   "midYearReport": null,
   "interview": "Encouraged, not required; can request one",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "background",
     "required": false,
     "count": 1,
     "words": 450,
     "chars": null,
     "choose": null,
     "summary": "Background and openness helping you thrive and serve common good"
    }
   ],
   "supplementsUrl": "https://www.grinnell.edu/admission/apply/first-year/requirements",
   "portfolio": null,
   "cssCode": "6252",
   "netPriceUrl": "https://www.grinnell.edu/admission/financial-aid/estimate-aid",
   "netPriceIntl": null,
   "sources": [
    "https://www.grinnell.edu/admission/apply/first-year/requirements",
    "https://www.grinnell.edu/admission/financial-aid/apply-aid/prospective-students (search summary)"
   ],
   "uncertain": [
    "netPriceUrl taken from CDS 2023-24, not confirmed current",
    "supplement length is 200-450 words",
    "page lists only Common App and QuestBridge"
   ]
  },
  "loc": {
   "city": "Grinnell",
   "state": "IA",
   "lat": 41.749,
   "lon": -92.7199,
   "region": "mw",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "maj": "ok",
   "policy": "ok (superscore SAT math+ERW, self-reported accepted; Dec SAT strongly encouraged for RD)",
   "req": "ok: no fee, 2 teachers, optional 200-450 word supplement, Common App+QuestBridge, interview optional",
   "stats": "ok (CDS 2024-2025, fall 2024 cohort; values match)"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional; either official or self-reported",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Highest subscores across reports; enrolling students send official scores",
   "sources": [
    "https://www.grinnell.edu/admission/apply/first-year/faqs-domestic"
   ],
   "uncertain": [
    "from search-result summary",
    "a Standardized Testing page says scores required, contradicting rest of site"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Cognitive science only as an independent major"
   },
   "neuro": {
    "offered": "track",
    "name": "Neuroscience (concentration)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "colby",
  "name": "Colby",
  "full": "Colby College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "on or before December 15",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-04",
    "notify": "on or before February 15",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-04",
    "notify": "by April 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "Both ED rounds are binding; signed ED Agreement required.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "aidForms": [
   "International CSS Profile (fee waiver available)"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-04",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Applicants decide whether to send scores.",
  "english": "Required if first language not English or schooling mainly not in English; TOEFL iBT, IELTS Academic or DET; self-reported allowed at application.",
  "supplements": "Official page: no additional writing supplement required.",
  "cogsci": "Neuroscience (major); cognitive science not verified",
  "interview": "No admissions interviews; video interviews (Duolingo, Vericant, InitialView) accepted but not required",
  "url": "https://www.colby.edu/admission/",
  "sources": [
   "WebSearch summaries of https://afa.colby.edu/apply/dates-and-deadlines/ , /requirements/ , /faq/ , /requirements/international-applicants/ (direct fetch returned 403)"
  ],
  "uncertain": [
   "all Colby fields: afa.colby.edu returned 403 to fetch; read only via search summaries of official pages",
   "ED II / RD admissions deadline: summaries say Jan 4 but some pages say Jan 1, 2 or 5; aid deadlines for RD Jan 15",
   "intlAid: Colby FAQ labels need-aware per summary; third-party lists once said need-blind",
   "supplements: 'none required' per summary; verify against 2026-27 Common App",
   "cogsci: not verified",
   "coa: tuition figure $75,790 includes fees (fees set 0 as not separately listed)",
   "coa.full: range $97,020-$98,270 by travel; lower bound used",
   "majors: Colby major pages blocked (403/refused); based on search summaries",
   "neuro: concentration structure not confirmed on official page"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "Class of 2029 (official news releases)",
   "source": "https://news.colby.edu/story/class-of-2029-admitted-to-colby/ ; https://news.colby.edu/story/colby-class-of-2029-is-ready-to-get-to-work/",
   "applied": 20144,
   "admitted": null,
   "admitRate": 7.0,
   "ed": null,
   "ea": null,
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "actComposite": null,
   "firstYearTotal": 639,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "notes": "Official: 20,144 applicants; 7 percent offered admission (exact admit count not published, so null); 639 arrived in fall plus 40 January entrants. Medians: admitted SAT 1520 / ACT 34 (April 2025); enrolled SAT 1500 / ACT 33 (Sept 2025). 10 percent of the class are non-U.S. citizens (about 64, count not published). Colby does not publish ED figures. afa.colby.edu profile now shows Class of 2030 only.",
   "uncertain": [
    "admitRate: only rounded 7% published",
    "intlFirstYear: only a percent (10% non-U.S. citizens)"
   ],
   "rateNote": "학교 발표 (반올림 값)",
   "intlNote": "학교 통계표를 열지 못해 국제학생 합격률은 확인 못 했어요",
   "coa": {
    "year": "2026-27",
    "tuition": 72590,
    "fees": 3200,
    "housing": 19480,
    "direct": 95270,
    "full": 97020,
    "intlExtra": null,
    "source": "https://afa.colby.edu/apply/college-profile/"
   }
  },
  "req": {
   "application": "Common App, Coalition, QuestBridge, Colby Application",
   "appFormat": null,
   "fee": 0,
   "feeWaiver": "No application fee",
   "teacherRecs": {
    "required": 2,
    "optionalExtra": null,
    "note": "2 teacher recs"
   },
   "counselorRec": true,
   "midYearReport": null,
   "interview": "No interviews; optional InitialView video",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://afa.colby.edu/apply/requirements/",
   "portfolio": "Optional arts materials uploaded after submitting",
   "cssCode": "3280",
   "netPriceUrl": "https://afa.colby.edu/cost-and-aid/calculate-your-costs/",
   "netPriceIntl": null,
   "sources": [
    "https://afa.colby.edu/apply/requirements/ (search summary; direct fetch 403)",
    "https://afa.colby.edu/cost-and-aid/calculate-your-costs/ (search summary)"
   ],
   "uncertain": [
    "all Colby fields from search summaries only; afa.colby.edu blocked",
    "midYearReport not found"
   ]
  },
  "loc": {
   "city": "Waterville",
   "state": "ME",
   "lat": 44.5639,
   "lon": -69.6626,
   "region": "ne",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "maj": "partial: coa corrected via search snippet of official pages (direct fetch 403); neuro track consistent with Psychology-with-neuroscience-concentration and Biology neuroscience concentration; cogsci none found no listing",
   "policy": "partial: fetch 403; official-domain search summary confirms superscore and self-report. FAQ says take tests by Nov 15 (ED I) and Jan 4 (ED II); lastSat fields left null",
   "req": "unreachable",
   "stats": "filled"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Superscores all exams; official report before enrollment",
   "sources": [
    "https://afa.colby.edu/apply/requirements/"
   ],
   "uncertain": [
    "from search-result summary",
    "lastSat*: not found"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science program; closest is Computational Psychology major"
   },
   "neuro": {
    "offered": "track",
    "name": "Neuroscience (concentration within Biology or Psychology major)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Also Psychology with neuroscience concentration and Computational Psychology majors"
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "AI concentration available; Data Science major separate"
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "conncoll",
  "name": "Conn College",
  "full": "Connecticut College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "mid-February",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "late March",
    "notifyDate": "2027-03-25"
   }
  ],
  "earlyRule": "Both ED rounds are binding; EA is non-binding.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": null,
  "aidForms": [
   "CSS Profile (code 3284, fee, no waivers)",
   "Verification of Financial Support",
   "translated parent income documents via Applicant Portal"
  ],
  "aidDeadlines": {
   "early": "2026-11-16",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "SAT/ACT optional.",
  "english": "Required if secondary school was outside the US; TOEFL, IELTS or Duolingo.",
  "supplements": "Common App supplement required; prompts and word limits not confirmed.",
  "cogsci": "Neuroscience (major); cognitive science not verified",
  "interview": "Optional",
  "url": "https://www.conncoll.edu/admission/apply/",
  "sources": [
   "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
   "https://www.conncoll.edu/admission/international-applicants/requirements-and-deadlines/",
   "https://www.conncoll.edu/financial-aid/applying-for-financial-aid/international-students/",
   "https://www.conncoll.edu/financial-aid/applying-for-financial-aid/first-year-and-transfer-students/"
  ],
  "uncertain": [
   "intlAid: pages say internationals should not expect aid unless they applied at admission; no need-blind/aware or meets-full-need statement found",
   "meetsNeed: not stated",
   "supplements: prompts not read",
   "cogsci: not verified",
   "Common-App ED I admissions deadline Nov 1; aid Nov 16 (ED page says Nov 1 for aid, aid page says Nov 16)",
   "cogsci minor unverified",
   "bio official name unverified (Biological Sciences per fact sheet)",
   "coa: one page lists tuition+fees as $72,730 vs $72,281+$449 elsewhere"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.conncoll.edu/media/Common-Data-Set-2025-26.pdf",
   "applied": 7338,
   "admitted": 2875,
   "admitRate": 39.2,
   "ed": {
    "applied": 546,
    "admitted": 222,
    "rate": 40.7
   },
   "ea": null,
   "satSubmitPct": 52,
   "satEBRW": [
    610,
    660,
    710
   ],
   "satMath": [
    550,
    610,
    670
   ],
   "actComposite": [
    26,
    29,
    32
   ],
   "firstYearTotal": 459,
   "intlFirstYear": 38,
   "intlAidCount": 111,
   "intlAidAvg": 69638,
   "notes": "C1 totals from residency table (7,338 / 2,875), match men+women+unknown sums. No EA plan. Test-optional: SAT 52%, ACT 14%.",
   "uncertain": [],
   "intl": {
    "applied": 2552,
    "admitted": 115,
    "rate": 4.5
   },
   "coa": {
    "year": "2026-27",
    "tuition": 72281,
    "fees": 449,
    "housing": 20070,
    "direct": 92800,
    "full": 94800,
    "intlExtra": "Health insurance may be billed; can be waived",
    "source": "https://www.conncoll.edu/admission/tuition-fees/"
   }
  },
  "req": {
   "application": "Common App with Conn supplemental application",
   "appFormat": null,
   "fee": 0,
   "feeWaiver": "Application fee waived for all",
   "teacherRecs": {
    "required": 1,
    "optionalExtra": 1,
    "note": "1 academic teacher required, 2 recommended; optional non-academic"
   },
   "counselorRec": true,
   "midYearReport": null,
   "interview": "Optional",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
   "portfolio": null,
   "cssCode": "3284",
   "netPriceUrl": null,
   "netPriceIntl": null,
   "sources": [
    "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
    "https://www.conncoll.edu/financial-aid/applying-for-financial-aid/international-students/ (search summary)"
   ],
   "uncertain": [
    "supplements: Conn supplemental application required but prompts not listed; one summary said no supplemental essay; empty array means unknown",
    "netPriceUrl: calculator exists but URL not found",
    "CSS Profile: no fee waivers"
   ]
  },
  "loc": {
   "city": "New London",
   "state": "CT",
   "lat": 41.379,
   "lon": -72.1043,
   "region": "ne",
   "lx": 11,
   "ly": 14,
   "la": "start"
  },
  "verified": {
   "maj": "partial: comprehensive fee 92800 confirmed but page gives no tuition/fees/housing split so 72281/449/20070 not verified; cogsci minor not found on any official page (could not confirm); neuroscience major confirmed",
   "policy": "ok except selfReport (see correction); Oct tests 'typically arrive' for ED I, Dec for ED II/RD, general tests not SAT-specific",
   "req": "partial: 1 academic teacher required (2 recommended), fee waived, optional interview, Common App confirmed; supplement content unknown",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Send scores from every date with a best section score; may switch to no-tests election",
   "lastSatEarly": "October",
   "lastSatRD": "December",
   "note": "Oct tests typically arrive for ED I; Dec tests for ED II and RD",
   "sources": [
    "https://www.conncoll.edu/admission/apply/standardized-test-policy/"
   ],
   "uncertain": [
    "selfReport: not stated",
    "from search-result summary of official pages"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "minor",
    "name": "Cognitive Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Only source is an international brochure; unconfirmed"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Interdisciplinary (formerly Behavioral Neuroscience)"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biological Sciences",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "rochester",
  "name": "Rochester",
  "full": "University of Rochester",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "mid-December (ED I)",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-05",
    "notify": "early February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "April 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "ED I and ED II are binding (one ED school only); a non-binding Dec 1 priority-scholarship deadline gives earlier notice (late February) and top merit consideration without commitment.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": true,
  "aidForms": [
   "CSS Profile (code 2928)",
   "International Financial Support Form (only if NOT requesting need-based aid)",
   "CSS Profile fee waivers limited, request by Jan 15"
  ],
  "aidDeadlines": {
   "early": "2026-11-01",
   "ed2": "2027-01-05",
   "rd": "2027-01-05"
  },
  "testing": "optional",
  "testingNote": "Truly test-optional (applicant chooses test-optional or test-flexible); no disadvantage in review or scholarships.",
  "english": "Required for all internationals via TOEFL/IELTS/DET or a waiver request. Recommended: DET 130, IELTS 7.5, TOEFL 5 (new scale) / 100 (old). Sub-scores not superscored; no TOEFL MyBest.",
  "supplements": "One supplemental essay, 250 words (2026-27 prompt: combining academic flexibility and co-curricular opportunities).",
  "cogsci": "Brain and Cognitive Sciences (major, BA/BS); no separate 'cognitive science' major found",
  "interview": "Strongly recommended (admissions counselor, alumni or student); alumni interview requests open through Jan 7.",
  "url": "https://admissions.rochester.edu/applying/first-year-students/",
  "sources": [
   "https://admissions.rochester.edu/applying/dates-and-deadlines/",
   "https://admissions.rochester.edu/applying/testing-policies/",
   "https://admissions.rochester.edu/applying/international-students/",
   "https://admissions.rochester.edu/applying/interviewing/",
   "https://admissions.rochester.edu/applying/how-to-apply/",
   "https://www.rochester.edu/financial-aid/prospective-undergraduates/",
   "https://www.sas.rochester.edu/bcs/undergraduate/index.html"
  ],
  "uncertain": [
   "plans: dates page lists no year; consistent with 2026-27 (supplement page and aid page are labelled 2026-27 / fall 2027)",
   "plans.notifyDate: only RD has a fixed date (April 1); ED I/II are 'mid-December' / 'early February'",
   "aidDeadlines: Dec 1 / Jan 5 / Feb 15 come from the page for US citizens and eligible non-citizens; the international page says the CSS Profile is due 'by the application deadline for your admission plan' (so intl early aid may be Nov 1 / Jan 5 / Jan 5); verify",
   "intlAid: Rochester says it meets full demonstrated need of all admitted students, but international admission is 'highly selective for students with financial need' and 'only a small number' receive need-based aid, so labelled limited",
   "whether applicants choose a school at application not verified (college field is where program is housed)",
   "major/track labels inferred from program listing",
   "books included in tuition (UR Essentials)"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "explore",
  "checked": "2026-11-26",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.rochester.edu/provost/wp-content/uploads/2026/06/CDS-2025-26-completed-for-web.pdf",
   "applied": 21609,
   "admitted": 9056,
   "admitRate": 41.9,
   "ed": {
    "applied": 1129,
    "admitted": 472,
    "rate": 41.8
   },
   "ea": null,
   "satSubmitPct": 15.7,
   "satEBRW": [
    680,
    720,
    750
   ],
   "satMath": [
    700,
    740,
    780
   ],
   "actComposite": [
    31,
    33,
    34
   ],
   "firstYearTotal": 1245,
   "intlFirstYear": 254,
   "intlAidCount": 510,
   "intlAidAvg": 40057,
   "notes": "June 2026 version ('Updated June 9'); an April 2026 version also exists. No EA plan. B2 first-year total 1245 vs C1 enrolled 1231 (as printed). Rochester is test-optional: SAT 15.7%, ACT 6.4%.",
   "uncertain": [
    "satSubmitPct: low share because test-optional; scores reflect only submitters"
   ],
   "intl": {
    "applied": 7998,
    "admitted": 1453,
    "rate": 18.2
   },
   "coa": {
    "year": "2026-27",
    "tuition": 71750,
    "fees": 1622,
    "housing": 21328,
    "direct": 94700,
    "full": 96022,
    "intlExtra": "None listed; higher travel allowance than standard $300 for international",
    "source": "https://www.rochester.edu/financial-aid/undergraduate-tuition-expenses/"
   }
  },
  "req": {
   "application": "Common App, Coalition (Scoir)",
   "appFormat": null,
   "fee": 50,
   "feeWaiver": "Fee waiver request form for first-year and transfer, regardless of citizenship",
   "teacherRecs": {
    "required": 1,
    "optionalExtra": 2,
    "note": "One teacher recommendation required; up to three allowed"
   },
   "counselorRec": true,
   "midYearReport": true,
   "interview": "Optional but highly recommended",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 250,
     "chars": null,
     "choose": null,
     "summary": "Combine academic flexibility and co-curriculars into your experience"
    }
   ],
   "supplementsUrl": "https://admissions.rochester.edu/applying/how-to-apply/",
   "portfolio": "Optional media links (video, art portfolio) uploaded in MyROC after applying; 4 MB file maximum",
   "cssCode": "2928",
   "netPriceUrl": null,
   "netPriceIntl": null,
   "sources": [
    "https://admissions.rochester.edu/applying/first-year-students/",
    "https://admissions.rochester.edu/applying/how-to-apply/",
    "https://admissions.rochester.edu/applying/dates-and-deadlines/",
    "https://www.rochester.edu/financial-aid/international-undergraduates/"
   ],
   "uncertain": [
    "interviewDeadline: Interviewing page not read",
    "netPriceUrl: financial aid page only links to general cost calculators; no URL or international statement read",
    "dates page does not name a year"
   ]
  },
  "loc": {
   "city": "Rochester",
   "state": "NY",
   "lat": 43.1306,
   "lon": -77.626,
   "region": "ne",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "maj": "partial: coa ok; cogsci BCS BA/BS ok; neuro appears as 'Biological Sciences: Neuroscience (BS)' registered program, labeled track by collector, left; college field is where program is housed, applicant choice unverified",
   "policy": "ok (page: Nov SAT accepted for ED, Dec for RD; superscore SAT/ACT subscores; self-report on application)",
   "req": "partial: 250-word required supplement and Common App+Coalition confirmed; fee/recs/interview not on page",
   "stats": "ok"
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Test-optional; no hybrid SAT/ACT superscore",
   "lastSatEarly": "November",
   "lastSatRD": "December",
   "note": "Latest SAT: Nov for ED I, Dec for RD (CDS says Jan 5 receipt)",
   "sources": [
    "https://admissions.rochester.edu/applying/testing-policies/"
   ],
   "uncertain": [
    "from search-result summary; page may be ~8 months old"
   ]
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Brain and Cognitive Sciences (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Treated as cognitive science equivalent"
   },
   "neuro": {
    "offered": "track",
    "name": "Biological Sciences: Neuroscience (BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Neuroscience track in Biological Sciences"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Housed in Hajim"
   },
   "bio": {
    "offered": "major",
    "name": "Biology (BA) / Biological Sciences (BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": "251",
   "the": "=136",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=6",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=3",
   "note": null
  }
 },
 {
  "id": "macalester",
  "name": "Macalester",
  "full": "Macalester College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "December 6",
    "notifyDate": "2026-12-06"
   },
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "December 19",
    "notifyDate": "2026-12-19"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-01",
    "notify": "January 31",
    "notifyDate": "2027-01-31"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "March 14",
    "notifyDate": "2027-03-14"
   }
  ],
  "earlyRule": "ED I/II are binding (if admitted you must enroll and withdraw other applications); EA is non-binding.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": null,
  "meritIntl": null,
  "aidForms": [
   "CSS Profile",
   "ISAFA",
   "Macalester Financial Declaration Form"
  ],
  "aidDeadlines": {
   "early": "2026-11-09",
   "ed2": "2027-01-08",
   "rd": "2027-01-22"
  },
  "testing": "optional",
  "testingNote": "Test-optional; no disadvantage for not submitting (SAT code 6390, ACT 2122).",
  "english": "Optional but recommended for applicants with fewer than two years in English-medium schooling (TOEFL, IELTS, Duolingo); minimums and waivers not stated.",
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": "No online interviews for international applicants; optional third-party InitialView or Vericant interview.",
  "url": "https://www.macalester.edu/admissions/apply/first-year/",
  "sources": [
   "https://www.macalester.edu/admissions/deadlines/",
   "https://www.macalester.edu/admissions/apply/international/",
   "https://www.macalester.edu/financial-aid/apply/prospective/",
   "https://www.macalester.edu/institutional-research/wp-content/uploads/sites/515/Macalester-College_Legacy-CDS_2024-2025-1.xlsx",
   "https://www.macalester.edu/neuroscience/major/"
  ],
  "uncertain": [
   "stats: used CDS 2024-25 because the 2025-26 CDS PDF exceeded the fetch size limit (10 MB)",
   "intlAid/meetsNeed: official pages read do not state need-aware vs need-blind or whether full need is met for internationals; need-aware is from general knowledge, meetsNeed left null",
   "ea: C22 gives no EA applicant/admit counts",
   "intl admit rate: CDS C1 international row not filled, so intl admit rate unknown",
   "aidDeadlines: dates are 'priority for financial aid' on deadlines page (not form-specific)",
   "lastSat: not stated",
   "coa: tuition includes required course materials; admissions page says activity fee $230 vs $330",
   "coa.full: federal COA about $96k-97k not confirmed",
   "major types from search summary; academics page did not label types"
  ],
  "why": "A Midwest liberal arts college with about 29% overall admit rate and the largest international first-year group on this list (117), though aid-seeking internationals face competition.",
  "stats": {
   "cdsYear": "2024-2025",
   "source": "https://www.macalester.edu/institutional-research/wp-content/uploads/sites/515/Macalester-College_Legacy-CDS_2024-2025-1.xlsx",
   "applied": 8968,
   "admitted": 2558,
   "admitRate": 28.5,
   "ed": {
    "applied": 447,
    "admitted": 176,
    "rate": 39.4
   },
   "ea": null,
   "satSubmitPct": 29,
   "satEBRW": [
    680,
    720,
    750
   ],
   "satMath": [
    670,
    720,
    760
   ],
   "firstYearTotal": 560,
   "intlFirstYear": 117,
   "intlAidCount": 255,
   "intlAidAvg": 60806,
   "coa": {
    "year": "2026-27",
    "tuition": 74394,
    "fees": 330,
    "housing": 17430,
    "direct": 92154,
    "full": null,
    "intlExtra": null,
    "source": "https://www.macalester.edu/student-accounts/tuition-and-fees-2/"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test-optional; scores considered if submitted",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Testing page does not state test-date cutoffs."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Saint Paul",
   "state": "MN",
   "lat": 44.938,
   "lon": -93.168,
   "region": "mw",
   "lx": -10,
   "ly": 2,
   "la": "end"
  },
  "verified": {
   "cand": "unreachable: CDS residency row not filled (collector) and 2025-26 file too large; not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "track",
    "name": "Cognitive Science (concentration)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "oberlin",
  "name": "Oberlin",
  "full": "Oberlin College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "mid-January",
    "notifyDate": null
   },
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-05",
    "notify": "February 1",
    "notifyDate": "2027-02-01"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "April 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "ED I/II are binding (if admitted you must enroll and withdraw other applications); EA is non-binding.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": null,
  "meritIntl": null,
  "aidForms": [
   "CSS Profile",
   "ISAFA"
  ],
  "aidDeadlines": {
   "early": "2026-11-01",
   "ed2": "2027-01-05",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Test-optional; self-reported scores accepted, official report only if enrolling.",
  "english": "Not stated on the page read (no fee waivers offered for English proficiency tests).",
  "cogsci": "Neuroscience (major), Psychology (major); Cognitive Sciences is a minor only",
  "interview": "Virtual interviews for U.S. citizens and permanent residents only; internationals may use independent InitialView or Vericant interviews.",
  "url": "https://oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants",
  "sources": [
   "https://oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants",
   "https://www.oberlin.edu/index%2Ephp/media/37695/download",
   "https://oberlin.edu/cognitive-sciences"
  ],
  "uncertain": [
   "applied: C1 gender sum is 11738; C1 residency table total shows 11732; used 11738 (rate 33.0 either way)",
   "international admit rate is only about 8% for fall 2026 per Oberlin page (CDS: 446/4015 = 11.1%), far below the overall rate",
   "page says the international aid budget is limited and aid cannot be added later; meetsNeed unknown",
   "ea: CDS C22 gives dates but no counts",
   "deadline table on page has no year printed; matches CDS 2025-26 dates",
   "lastSat: not stated",
   "college field: College vs Conservatory choice exists at application, programs here are in the College",
   "fees = activity 592 + health 500 + Green Edge 50 (summed from search summary)",
   "coa.full: books $930 and personal $978 estimates not added"
  ],
  "why": "One-third overall admit rate and a large intl aid pool (292 recipients, about $51.6k average), but internationals admit at only about 8-11%.",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.oberlin.edu/index%2Ephp/media/37695/download",
   "applied": 11738,
   "admitted": 3873,
   "admitRate": 33.0,
   "ed": {
    "applied": 668,
    "admitted": 263,
    "rate": 39.4
   },
   "ea": null,
   "satSubmitPct": 34,
   "satEBRW": [
    690,
    730,
    760
   ],
   "satMath": [
    660,
    700,
    740
   ],
   "firstYearTotal": 768,
   "intlFirstYear": 93,
   "intlAidCount": 292,
   "intlAidAvg": 51631,
   "intl": {
    "applied": 4015,
    "admitted": 446,
    "rate": 11.1
   },
   "coa": {
    "year": "2026-27",
    "tuition": 70320,
    "fees": 1142,
    "housing": 20700,
    "direct": 92162,
    "full": null,
    "intlExtra": "Student health insurance $3,028 unless waived",
    "source": "https://www.oberlin.edu/admissions-and-aid/tuition-and-fees"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": true,
   "scoreChoice": "Test-optional; self-report on application",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS C8: SAT/ACT must be received by Jan 15; no per-round SAT month stated."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Oberlin",
   "state": "OH",
   "lat": 41.2939,
   "lon": -82.2174,
   "region": "mw",
   "lx": 0,
   "ly": 16,
   "la": "middle"
  },
  "verified": {
   "cand": "partial: C1 totals and international 446/4015 checked by hand (793+6924+4015=11732, 283+3144+446=3873); deadlines/aid not re-checked",
   "maj": "partial: coa ok; cogsci minor vs concentration unresolved (catalog shows Cognitive Sciences Minor, older pages say concentration); neuro major not labeled on fetched page"
  },
  "majors": {
   "cogsci": {
    "offered": "minor",
    "name": "Cognitive Sciences",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Also an integrative concentration"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "BA or BS"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "lafayette",
  "name": "Lafayette",
  "full": "Lafayette College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "mid-February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED I/II (and RD converted to ED II by Feb 1) are binding; you must sign the Early Decision Agreement.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "meritIntl": null,
  "aidForms": [
   "CSS Profile"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Optional for fall 2027 and fall 2028 entry; self-reported scores allowed, official required on enrollment; superscored.",
  "english": "Required; typically TOEFL 100, IELTS 7, or Duolingo 130; waiver by request if English is first language or 3 years of English-medium instruction.",
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": "Not required, encouraged; virtual interviews available.",
  "url": "https://admissions.lafayette.edu/apply/",
  "sources": [
   "https://admissions.lafayette.edu/apply/",
   "https://admissions.lafayette.edu/deadlines-and-forms/",
   "https://admissions.lafayette.edu/apply/international-students/",
   "https://oir.lafayette.edu/wp-content/uploads/sites/196/2025/10/CDS2024-2025.pdf"
  ],
  "uncertain": [
   "stats: full 2025-26 CDS not found (only the supplemental SCDS 2025-26); used full CDS 2024-25",
   "applied: C1 gender sum 10193 vs residency total 10195 in the CDS",
   "international admit rate only 7.0% (258 of 3705) in CDS 2024-25",
   "notification dates given only as months on the page",
   "a search summary showed Nov 1/Jan 5 dates on another Lafayette page; deadlines page and apply page both say Nov 15 / Jan 15, which were used",
   "meritIntl: not stated on page read",
   "cogsci: majors from general knowledge, not read on a page",
   "coa.full: billed 91,742 plus books $1,000, transport $250, misc $940 not summed; federal COA first-year $95,580"
  ],
  "why": "About 31% overall admit rate and an explicit guarantee to meet full need for admitted internationals (105 recipients, about $69k average), though internationals admit near 7%.",
  "stats": {
   "cdsYear": "2024-2025",
   "source": "https://oir.lafayette.edu/wp-content/uploads/sites/196/2025/10/CDS2024-2025.pdf",
   "applied": 10193,
   "admitted": 3206,
   "admitRate": 31.5,
   "ed": {
    "applied": 870,
    "admitted": 369,
    "rate": 42.4
   },
   "ea": null,
   "satSubmitPct": 23,
   "satEBRW": [
    670,
    710,
    740
   ],
   "satMath": [
    680,
    720,
    760
   ],
   "firstYearTotal": 698,
   "intlFirstYear": 46,
   "intlAidCount": 105,
   "intlAidAvg": 69176,
   "intl": {
    "applied": 3705,
    "admitted": 258,
    "rate": 7.0
   },
   "coa": {
    "year": "2026-27",
    "tuition": 70486,
    "fees": 360,
    "housing": 20896,
    "direct": 91742,
    "full": null,
    "intlExtra": "Optional health insurance $3,131; one-time $750 matriculation fee for new students",
    "source": "https://president.lafayette.edu/2026/01/23/tuition-and-fees-for-2026-27/"
   }
  },
  "policy": {
   "superscore": true,
   "selfReport": true,
   "scoreChoice": "Optional; may change testing status by the round deadline via email",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Page gives no test-date cutoff."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Easton",
   "state": "PA",
   "lat": 40.6987,
   "lon": -75.2086,
   "region": "ne",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "cand": "partial: C1 (fall 2024) international 258/3705 checked by hand (1180+5310+3705=10195, 419+2529+258=3206); deadlines/aid not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science program found"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (AB/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (AB/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology (AB/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "kenyon",
  "name": "Kenyon",
  "full": "Kenyon College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "mid-February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "mid-March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED options are binding; if admitted you must enroll and withdraw other applications.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "meritIntl": "Four merit scholarships of $20,000-$35,000/year (Excellence, Honors, President's, Distinguished Academic), automatic with application; intl eligibility not stated on the page.",
  "aidForms": [
   "CSS Profile",
   "Kenyon International Financial Aid Application"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Test-optional for all applicants; only 7.5% of enrolled first-years submitted SAT.",
  "english": null,
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": null,
  "url": "https://www.kenyon.edu/admissions-aid/how-to-apply/admissions-deadlines/",
  "sources": [
   "https://www.kenyon.edu/admissions-aid/how-to-apply/admissions-deadlines/",
   "https://kenyon.edu/admissions-aid/financial-aid/apply-for-financial-aid",
   "https://kenyon.edu/scholarships",
   "https://www.kenyon.edu/files/resources/cds-2025-26-kenyon.xlsx"
  ],
  "uncertain": [
   "meetsNeed and need-aware: from a search-result summary of Kenyon pages, not read directly",
   "a search summary quoted an official Kenyon page saying fewer than 5% of international applicants requiring need-based aid were admitted last cycle; this may make Kenyon a poor balance school for an aid-seeking international",
   "CDS C1 international row not filled, so intl admit rate unknown",
   "SAT percentiles come from only 30 submitters",
   "english/interview: not read",
   "dates on page have no year printed",
   "cogsci: majors from general knowledge",
   "cs: only Computing concentration appears in departments list; a CS major not ruled out beyond that"
  ],
  "why": "About 30% overall admit rate with strong aid per recipient (149 recipients, about $73k), but a published note suggests aid-seeking internationals are rarely admitted.",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.kenyon.edu/files/resources/cds-2025-26-kenyon.xlsx",
   "applied": 7091,
   "admitted": 2138,
   "admitRate": 30.2,
   "ed": {
    "applied": 663,
    "admitted": 231,
    "rate": 34.8
   },
   "ea": null,
   "satSubmitPct": 7.5,
   "satEBRW": [
    700,
    720,
    740
   ],
   "satMath": [
    680,
    720,
    765
   ],
   "firstYearTotal": 412,
   "intlFirstYear": 39,
   "intlAidCount": 149,
   "intlAidAvg": 73082,
   "intlNote": "Kenyon 공식 페이지 요약: 재정지원이 필요한 국제학생 합격은 5% 미만 (직접 확인 못 함)",
   "coa": {
    "year": "2026-27",
    "tuition": 72880,
    "fees": 350,
    "housing": 19860,
    "direct": 93090,
    "full": 96940,
    "intlExtra": "Optional student health insurance $1,938",
    "source": "https://www.kenyon.edu/admissions-aid/financial-aid-scholarships/tuition-costs/"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test-optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS C8E: scores received by Feb 1; no per-round SAT month stated."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Gambier",
   "state": "OH",
   "lat": 40.3756,
   "lon": -82.3974,
   "region": "mw",
   "lx": 11,
   "ly": 9,
   "la": "start"
  },
  "verified": {
   "cand": "partial: CDS C1 residency rows are blank, so no international admit rate; other fields not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science program found"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Also a concentration"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "track",
    "name": "Computing (concentration)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No standalone CS major found"
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "richmond",
  "name": "Richmond",
  "full": "University of Richmond",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "late January",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-01",
    "notify": "mid-February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-01",
    "notify": "April 1",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED I/II are binding; EA is non-binding; apply by Dec 1 for automatic Richmond Scholars merit consideration.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": null,
  "meetsNeed": null,
  "meritIntl": "Richmond Scholars merit program: admission application is the scholarship application; automatic for EA and for RD applications by Dec 1 (intl eligibility not stated on page).",
  "aidForms": [
   "CSS Profile",
   "University of Richmond Certification of Financial Responsibility"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-02-01",
   "rd": "2027-02-01"
  },
  "testing": "optional",
  "testingNote": "Test optional for 2027 entrants; submitted scores are superscored.",
  "english": "If English is not your native language: TOEFL, IELTS, Duolingo, or a University-approved waiver; minimums not stated.",
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": null,
  "url": "https://admission.richmond.edu/process/",
  "sources": [
   "https://admission.richmond.edu/process/",
   "https://financialaid.richmond.edu/applying/apply.html",
   "https://ifx.richmond.edu/pdfs/CDS2025-2026SectionB.pdf",
   "https://ifx.richmond.edu/pdfs/CDS2025-2026SectionC.pdf",
   "https://ifx.richmond.edu/pdfs/CDS2025-2026SectionH.pdf"
  ],
  "uncertain": [
   "ED counts: CDS section C labels them 'Fall 2024 entering class' (1154 applied, 421 admitted), so they may be one year older",
   "notification dates came from a search summary and conflict across Richmond pages (Dec 12/15, Jan 23-26, Feb 13/15, Apr 1); only months kept",
   "intlAid/meetsNeed: aid page does not say whether internationals are eligible or fully met; general policy is to meet demonstrated need",
   "international admit rate only 6.8% (280 of 4104)",
   "aid deadlines Nov 15 / Feb 1 are from the financial aid page (differ from admission deadlines)",
   "cogsci: majors from general knowledge",
   "college: I believe applicants choose among A&S, Jepson, Robins at application; not verified on page read",
   "coa: required fees not separately listed (0 used); housing/food are aid-office averages"
  ],
  "why": "A 22% admit-rate school that sits at the low end of this list but pays about $68k average to 187 international recipients.",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://ifx.richmond.edu/pdfs/CDS2025-2026SectionC.pdf (sections B, C, H; index https://ifx.richmond.edu/research/common-data.html)",
   "applied": 16560,
   "admitted": 3683,
   "admitRate": 22.2,
   "ed": {
    "applied": 1154,
    "admitted": 421,
    "rate": 36.5
   },
   "ea": null,
   "satSubmitPct": 18.6,
   "satEBRW": [
    700,
    720,
    750
   ],
   "satMath": [
    700,
    720,
    770
   ],
   "firstYearTotal": 857,
   "intlFirstYear": 72,
   "intlAidCount": 187,
   "intlAidAvg": 67911,
   "intl": {
    "applied": 4104,
    "admitted": 280,
    "rate": 6.8
   },
   "coa": {
    "year": "2026-27",
    "tuition": 70725,
    "fees": 0,
    "housing": 18815,
    "direct": 89540,
    "full": 92320,
    "intlExtra": null,
    "source": "https://financialaid.richmond.edu/applying/cost.html"
   }
  },
  "policy": {
   "superscore": true,
   "selfReport": null,
   "scoreChoice": "Test optional; opt out of sending results when prompted",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Page gives no test-date cutoff."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Richmond",
   "state": "VA",
   "lat": 37.5743,
   "lon": -77.5388,
   "region": "s",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "cand": "partial: C1 international 280/4104 checked by hand (2273+10183+4104=16560, 495+2908+280=3683); deadlines/aid not re-checked",
   "maj": "partial: tuition 70725, housing 8705+food 10110 ok; no fees line on official page so fees 0 unverified; cogsci BA major and neuro concentration-only confirmed; college field applicant choice unverified"
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (BA)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Interdisciplinary, housed with Psychology"
   },
   "neuro": {
    "offered": "track",
    "name": "Neuroscience (concentration; BS only)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Taken with Biology, Psychology or BMB major"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "case-western",
  "name": "Case Western",
  "full": "Case Western Reserve University",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "December 19",
    "notifyDate": "2026-12-19"
   },
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "December 5",
    "notifyDate": "2026-12-05"
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "February 6",
    "notifyDate": "2027-02-06"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "March 20",
    "notifyDate": "2027-03-20"
   }
  ],
  "earlyRule": "ED I/II are binding (agreement signed by student, counselor, and parent; withdraw other applications); EA is non-binding.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": false,
  "meritIntl": "Special scholarship competitions open to first-year internationals (names/amounts not on page read); students are also automatically considered for merit.",
  "aidForms": [
   "CSS Profile"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-22",
   "rd": "2027-02-01"
  },
  "testing": "optional",
  "testingNote": "Test optional; no minimum GPA or score (SAT code 1105, ACT 3244).",
  "english": null,
  "cogsci": "Cognitive Science (major), Neuroscience (major), Psychology (major)",
  "interview": "None for general applicants (required only for finalists of the Pre-Professional Scholars Program).",
  "url": "https://case.edu/admission/apply/first-year-applicants",
  "sources": [
   "https://case.edu/admission/apply/dates-deadlines",
   "https://case.edu/admission/apply/first-year-applicants",
   "https://case.edu/financialaid/undergraduate/int/",
   "https://case.edu/ir/sites/default/files/2026-02/CDS%202025-26%20Adjusted%20Final.pdf"
  ],
  "uncertain": [
   "intlFirstYear 92 comes from the CDS text layer only (B2 cells render blank in the PDF)",
   "CDS international applied/admitted (about 11112 / 2360, roughly 21%) inferred from a garbled table, not stated cleanly",
   "intl aid page says only a limited amount of need-based aid is offered (so meetsNeed false); a search snippet claimed full need is met for all admitted students",
   "deadline table has no year printed; weekdays match the 2026-27 cycle",
   "also lists a Pre-Professional Scholars Program round (Dec 1) and spring entry, not included",
   "english: not on page read",
   "cogsci: major titles from general knowledge, not read on a page",
   "lastSat: not stated",
   "restricted/direct-admit status of programs not verified",
   "CS college not verified; no AI-specific major found",
   "full includes matriculation fee, books, personal; nursing students +$1,450"
  ],
  "why": "A 35% admit-rate research university with a cognitive science major and merit scholarship competitions open to internationals (about 21% intl admit rate).",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://case.edu/ir/sites/default/files/2026-02/CDS%202025-26%20Adjusted%20Final.pdf",
   "applied": 39332,
   "admitted": 13890,
   "admitRate": 35.3,
   "ed": {
    "applied": 1053,
    "admitted": 263,
    "rate": 25.0
   },
   "ea": null,
   "satSubmitPct": 52,
   "satEBRW": [
    710,
    730,
    760
   ],
   "satMath": [
    730,
    760,
    780
   ],
   "firstYearTotal": 1663,
   "intlFirstYear": 92,
   "intlAidCount": 275,
   "intlAidAvg": 43200,
   "intl": {
    "applied": 11112,
    "admitted": 2360,
    "rate": 21.2
   },
   "coa": {
    "year": "2026-27",
    "tuition": 71410,
    "fees": 696,
    "housing": 20288,
    "direct": 92394,
    "full": 95704,
    "intlExtra": "None listed; $760 one-time matriculation fee; student medical plan charged per term unless waived",
    "source": "https://case.edu/financialaid/undergraduates/estimated-costs-attendance-2026-27"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Page gives no test-date cutoff."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Cleveland",
   "state": "OH",
   "lat": 41.5043,
   "lon": -81.6084,
   "region": "mw",
   "lx": 11,
   "ly": -3,
   "la": "start"
  },
  "verified": {
   "cand": "partial: C1 international 2360/11112 checked by hand (3596+24624+11112=39332, 972+10558+2360=13890); deadlines/aid not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (BA)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Joint Biology and School of Medicine program"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "BA in Arts and Sciences; BS offered through engineering (not verified)"
   },
   "bio": {
    "offered": "major",
    "name": "Biology (BA/BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": "=326",
   "the": "=147",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=7",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=3",
   "note": null
  }
 },
 {
  "id": "trinity-ct",
  "name": "Trinity (CT)",
  "full": "Trinity College (Hartford)",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "mid-February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "early April",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED is binding; RD (and any early action) is non-binding.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": null,
  "meetsNeed": true,
  "meritIntl": null,
  "aidForms": [
   "CSS Profile"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Test-optional per Trinity standardized testing page.",
  "english": "Duolingo, IELTS, or TOEFL required; recommended Duolingo 130, IELTS 7.0, TOEFL 100; waiver after 3 years of English-medium high school.",
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": "Optional, strongly encouraged.",
  "url": "https://www.trincoll.edu/admissions/",
  "sources": [
   "https://www.trincoll.edu/admissions/finaid/international-students/",
   "https://www.trincoll.edu/asic/wp-content/uploads/sites/125/2026/06/CDS-2025-2026-Trinity-College.pdf"
  ],
  "uncertain": [
   "first-year admissions page returned 404; deadlines come from the international aid page (ED1 Nov 15, ED2 Jan 15, RD Jan 15) and cycle year is not printed",
   "CDS text lists ED closing 12/15 and notification 1/12, which conflicts with Nov 15; not verified",
   "intlFirstYear 47 from CDS international enrollment (B2 table layout unclear)",
   "intlAidCount 295 looks high against about 252 total nonresidents in B2; may count differently",
   "international admit rate only 5.0% (167 of 3348)",
   "need-blind/aware not stated; policy says meets full need if admitted",
   "notification months from a search summary",
   "interview and English details from search summary of Trinity pages",
   "cogsci: no standalone cognitive science major; neuroscience and psychology majors",
   "cogsci minor and CS/Biology majors from search summaries, not an official list",
   "fees = general 2,900 + activity 430",
   "full from consumer information page via search (travel $0-1,500)"
  ],
  "why": "29.5% overall admit rate with a full-need pledge and heavy intl aid (295 recipients, about $70k), but internationals admit near 5%.",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.trincoll.edu/asic/wp-content/uploads/sites/125/2026/06/CDS-2025-2026-Trinity-College.pdf",
   "applied": 7272,
   "admitted": 2148,
   "admitRate": 29.5,
   "ed": {
    "applied": 643,
    "admitted": 261,
    "rate": 40.6
   },
   "ea": null,
   "satSubmitPct": 9,
   "satEBRW": [
    670,
    710,
    740
   ],
   "satMath": [
    660,
    690,
    730
   ],
   "firstYearTotal": 478,
   "intlFirstYear": 47,
   "intlAidCount": 295,
   "intlAidAvg": 70437,
   "intl": {
    "applied": 3348,
    "admitted": 167,
    "rate": 5.0
   },
   "coa": {
    "year": "2026-27",
    "tuition": 72820,
    "fees": 3330,
    "housing": 20330,
    "direct": 96480,
    "full": 98480,
    "intlExtra": null,
    "source": "https://www.trincoll.edu/student-accounts/tuition-and-fees/"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test-optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Not stated."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Hartford",
   "state": "CT",
   "lat": 41.7479,
   "lon": -72.6905,
   "region": "ne",
   "lx": -10,
   "ly": -3,
   "la": "end"
  },
  "verified": {
   "cand": "partial: C1 international 167/3348 checked by hand (663+3262+3348=7273, 241+1740+167=2148); deadlines/aid not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "minor",
    "name": "Cognitive Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Interdisciplinary minor, 6 courses"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BS)",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "whitman",
  "name": "Whitman",
  "full": "Whitman College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "EA",
    "deadline": "2026-12-01",
    "notify": "early February",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-05",
    "notify": "late January",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "early March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED1/ED2 are binding (applicants reviewed in a smaller pool); EA is non-binding.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": true,
  "meritIntl": "International applicants considered automatically for merit (amounts not on page read); talent awards need a separate application.",
  "aidForms": [
   "Whitman International Student Financial Aid Application (WISFAA)"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-05",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "CDS lists SAT/ACT as not required but considered if submitted; scores due Jan 15.",
  "english": null,
  "cogsci": "Brain, Behavior and Cognition (major, neuroscience-focused), Psychology (major)",
  "interview": null,
  "url": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/first-year-students",
  "sources": [
   "https://www.whitman.edu/admission-and-aid/applying-to-whitman/first-year-students",
   "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/international-and-daca-students",
   "https://www.whitman.edu/documents/offices/institutional-research/2026/CDS-2025-26-Whitman-College-Final-V2.pdf"
  ],
  "uncertain": [
   "EA (Dec 1) is labeled 'for reference' on the page while CDS C22 says no early action; unverified",
   "CDS composite SAT row is internally inconsistent (1190/1420/1415); only EBRW and Math used",
   "deadlines page has no year printed; cycle not confirmed",
   "international admit rate only 7.7% (253 of 3265); page says to apply RD for aid and Whitman is 'highly need-aware'",
   "english/interview not read",
   "no major titled Neuroscience; the Brain, Behavior and Cognition major is the neuroscience route",
   "coa.fees/direct: ASWC fee amount not confirmed, so null",
   "full excludes travel"
  ],
  "why": "40% overall admit rate with a stated full-need commitment for internationals (201 recipients, about $52k average).",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.whitman.edu/documents/offices/institutional-research/2026/CDS-2025-26-Whitman-College-Final-V2.pdf",
   "applied": 6950,
   "admitted": 2791,
   "admitRate": 40.2,
   "ed": {
    "applied": 542,
    "admitted": 114,
    "rate": 21.0
   },
   "ea": null,
   "satSubmitPct": 25,
   "satEBRW": [
    650,
    700,
    740
   ],
   "satMath": [
    660,
    720,
    770
   ],
   "firstYearTotal": 373,
   "intlFirstYear": 41,
   "intlAidCount": 201,
   "intlAidAvg": 51730,
   "intl": {
    "applied": 3265,
    "admitted": 253,
    "rate": 7.7
   },
   "coa": {
    "year": "2026-27",
    "tuition": 68692,
    "fees": 576,
    "housing": 15952,
    "direct": 85220,
    "full": 86620,
    "intlExtra": null,
    "source": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-much-does-whitman-cost"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Optional; considered if submitted",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS C8E: scores by Jan 15; testing-policy page returned 404."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Walla Walla",
   "state": "WA",
   "lat": 46.0716,
   "lon": -118.3283,
   "region": "w",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "cand": "partial: C1 international 253/3265 checked by hand (1178+2507+3265=6950, 818+1720+253=2791); deadlines/aid not re-checked",
   "maj": "ok after corrections (fees and direct)"
  },
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Brain, Behavior & Cognition",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Neuroscience-focused interdisciplinary major (Biology+Psychology), counted as cogsci equivalent; launched 2023"
   },
   "neuro": {
    "offered": "major",
    "name": "Brain, Behavior & Cognition",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Whitman neuroscience major; no major named Neuroscience"
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "dickinson",
  "name": "Dickinson",
  "full": "Dickinson College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-15",
    "notify": "mid-December",
    "notifyDate": null
   },
   {
    "type": "EA",
    "deadline": "2026-11-15",
    "notify": "mid-January",
    "notifyDate": null
   },
   {
    "type": "ED2",
    "deadline": "2027-01-15",
    "notify": "late February",
    "notifyDate": null
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "ED I/II are binding; EA is non-binding; RD applicants may switch to ED II by Jan 28.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "need-aware",
  "meetsNeed": false,
  "meritIntl": "Merit scholarships open to internationals, automatic with application (no separate application; amounts not on page read).",
  "aidForms": [
   "CSS Profile",
   "ISFAA",
   "International Certification of Finances"
  ],
  "aidDeadlines": {
   "early": "2026-11-15",
   "ed2": "2027-01-15",
   "rd": "2027-01-15"
  },
  "testing": "optional",
  "testingNote": "Test optional since 1994 (13% of enrolled first-years submitted SAT).",
  "english": "Recommended TOEFL iBT 90, IELTS 7.0, or Duolingo 120 with interview (from search summary); not stated as hard minimums.",
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": null,
  "url": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
  "sources": [
   "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
   "https://www.dickinson.edu/info/20045/admissions/1179/international_student_financial_aid",
   "https://www.dickinson.edu/download/downloads/id/17199/cds_2025-2026.pdf"
  ],
  "uncertain": [
   "deadline table has no entry year printed (only a note about no spring 2027 cycle)",
   "CDS text lists ED closing 12/15 and EA unclear, conflicting with the page's Nov 15; page used",
   "aid page says need-based aid is limited and does not say full need is met (meetsNeed false); international admit rate 13.4% (208 of 1549)",
   "international enrolled is 36 in C residency table vs 34 in B2; B2 used",
   "cogsci: majors from general knowledge",
   "costs may not be finalized per aid guide (total $93,642 there)",
   "cogsci absence based on search only"
  ],
  "why": "About 41% overall admit rate and a 13% intl admit rate with sizeable aid (221 recipients, about $59k).",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.dickinson.edu/download/downloads/id/17199/cds_2025-2026.pdf",
   "applied": 5719,
   "admitted": 2373,
   "admitRate": 41.5,
   "ed": {
    "applied": 454,
    "admitted": 258,
    "rate": 56.8
   },
   "ea": null,
   "satSubmitPct": 13,
   "satEBRW": [
    680,
    710,
    730
   ],
   "satMath": [
    660,
    680,
    710
   ],
   "firstYearTotal": 485,
   "intlFirstYear": 34,
   "intlAidCount": 221,
   "intlAidAvg": 58593,
   "intl": {
    "applied": 1549,
    "admitted": 208,
    "rate": 13.4
   },
   "coa": {
    "year": "2026-27",
    "tuition": 71100,
    "fees": 550,
    "housing": 18650,
    "direct": 90300,
    "full": 93706,
    "intlExtra": "Student health insurance about $1,829-$2,000 billed unless waived (sources differ)",
    "source": "https://www.dickinson.edu/info/20081/financial_aid/1125/cost_of_attendance"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Deadlines page does not list test-date cutoffs."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Carlisle",
   "state": "PA",
   "lat": 40.2033,
   "lon": -77.199,
   "region": "ne",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "cand": "partial: C1 international 208/1549 checked by hand (1068+3102+1549=5719, 539+1626+208=2373); deadlines/aid not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science program found"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "earlham",
  "name": "Earlham",
  "full": "Earlham College",
  "public": false,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "December 1",
    "notifyDate": "2026-12-01"
   },
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "December 1",
    "notifyDate": "2026-12-01"
   },
   {
    "type": "RD",
    "deadline": "2027-02-01",
    "notify": "March 1",
    "notifyDate": "2027-03-01"
   }
  ],
  "earlyRule": "ED is binding; EA I and II are non-binding. Second EA round deadline 2026-12-01.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": false,
  "meritIntl": "International merit scholarships up to $37,000/year for up to eight semesters; set by the International Financial Aid Committee.",
  "aidForms": [
   "International Student Financial Information Form"
  ],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Test optional, but advisers use scores or other tests to document preparedness and English proficiency for the I-20.",
  "english": "Accepted: TOEFL (79 required/92 recommended), IELTS (6.0/7.0), Duolingo (115/125), SAT EBRW (400/600), ACT Reading (20/26), others; no waivers listed.",
  "cogsci": "Neuroscience (major), Psychology (major)",
  "interview": "Interview with the director of international admissions recommended, not required.",
  "url": "https://earlham.edu/apply",
  "sources": [
   "https://earlham.edu/apply",
   "https://earlham.edu/admissions/international-admissions/",
   "https://earlham.edu/wp-content/uploads/2026/04/Earlham-College_CDS-2025-2026_PDF.pdf"
  ],
  "uncertain": [
   "deadlines: apply page (labelled cycle 2027-28) says ED/EA I Nov 1, EA II Dec 1, RD Feb 1 while the international page says ED/EA1 Nov 15, EA2 Dec 15, RD Jan 15; apply page used",
   "ed: CDS shows an ED plan but no ED applicant/admit counts were captured",
   "meetsNeed false because families must contribute at least $25,000 in the first year; need-blind/aware not stated",
   "international admit rate 39.9% (258 of 647); only 16 international first-years enrolled",
   "SAT stats come from only 50 submitters",
   "aidDeadlines not stated for internationals",
   "cogsci: neuroscience and psychology majors confirmed via search summary of Earlham catalog",
   "housing = double room 8,300 + 19-meal board 7,462",
   "coa.full not read"
  ],
  "why": "A true higher-admit option (79% overall, about 40% for internationals) with merit awards up to $37k, though need is not fully met.",
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://earlham.edu/wp-content/uploads/2026/04/Earlham-College_CDS-2025-2026_PDF.pdf",
   "applied": 2128,
   "admitted": 1682,
   "admitRate": 79.0,
   "ed": null,
   "ea": null,
   "satSubmitPct": 30,
   "satEBRW": [
    550,
    645,
    695
   ],
   "satMath": [
    532,
    580,
    638
   ],
   "firstYearTotal": 169,
   "intlFirstYear": 16,
   "intlAidCount": 120,
   "intlAidAvg": 42042,
   "intl": {
    "applied": 647,
    "admitted": 258,
    "rate": 39.9
   },
   "coa": {
    "year": "2026-27",
    "tuition": 56784,
    "fees": 980,
    "housing": 15762,
    "direct": 73526,
    "full": null,
    "intlExtra": "Health insurance estimate $2,285",
    "source": "https://catalog.earlham.edu/academic-catalog-2026-27/2026-2027-tuition-and-fees"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test optional",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Not stated."
  },
  "group": "candidate",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Richmond",
   "state": "IN",
   "lat": 39.8226,
   "lon": -84.9109,
   "region": "mw",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "cand": "partial: C1 international 258/647 checked by hand (556+925+647=2128, 536+888+258=1682); deadlines/aid not re-checked",
   "maj": "ok"
  },
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No cognitive science program found"
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": null
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is health-professions advising, not a major"
   }
  },
  "rank": {
   "qs": null,
   "the": null,
   "qsSource": null,
   "theSource": null,
   "note": "Liberal arts college; full tables not checked, so null (likely unranked)"
  }
 },
 {
  "id": "ucla",
  "name": "UCLA",
  "full": "University of California, Los Angeles",
  "public": true,
  "commonApp": false,
  "plans": [
   {
    "type": "RD",
    "deadline": "2026-11-30",
    "notify": "late March",
    "notifyDate": null
   }
  ],
  "earlyRule": "No early rounds; a single UC Application filing window Oct 1 - Nov 30, 2026 with decisions in spring.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": null,
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "blind",
  "testingNote": "UCLA does not consider SAT or ACT for admission or scholarship; scores are not requested on the UC Application.",
  "english": "Required if all secondary school was in a non-English-language country or under 3 years of English instruction. UCLA competitive scores: TOEFL iBT 5 (new scale; above 100 old scale), IELTS 7.5, Duolingo 135 (UC systemwide minimums are TOEFL 4.5/IELTS 6.5/DET 115).",
  "cogsci": "Cognitive Science major in the Dept. of Psychology (College of Letters and Science); freshmen enter as pre-major, complete prep courses, then apply to the major.",
  "interview": "UCLA does not accept letters of recommendation or interviews.",
  "url": "https://admission.ucla.edu/apply/international-applicants",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science",
    "college": "College of Letters and Science (Psychology dept.)",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": null,
    "note": "Apply after prep courses by end of fall of year 3; prep GPA 3.2+ with all requirements reportedly guarantees admission to the major, 2.9-3.19 competitive pool. Transfers must be admitted directly."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (B.S.)",
    "college": "College of Letters and Science (Life Sciences, interdepartmental program)",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Freshman admits declare after finishing prep courses with C- or better and good standing per the department; capacity limit not stated. Psychobiology (B.S., Psychology dept.) is a related major."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": "College of Letters and Science (Psychology dept.)",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-major, then apply by end of fall of year 3; prep GPA 2.9+ reportedly guaranteed, 2.5-2.89 competitive pool."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (B.S.)",
    "college": "Samueli School of Engineering",
    "restricted": "capped",
    "admitRate": 7.3,
    "admitNote": "Fall 2025 first-year admit rate for Samueli Computer Science (6,806 applicants), UCLA first-year profile admission.ucla.edu/apply/first-year/first-year-profile/major",
    "note": "Admitted to the major directly. Changing into CS later is difficult: earliest after 2 quarters and the major is severely impacted. Computer Science and Engineering is a separate Samueli major."
   },
   "bio": {
    "offered": "major",
    "name": "Biology (B.S.)",
    "college": "College of Letters and Science (Life Sciences; Ecology and Evolutionary Biology dept.)",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare after finishing the entry life-sciences course with C- or better (LS 7B or LS 1; version uncertain). Pre-med is advising only (UCLA has no designated pre-health program); Life Sciences division admit rate was 11% in Fall 2025 but major is not considered in College admission."
   }
  },
  "sources": [
   "https://apb.ucla.edu/file/f8f5c864-93be-4b44-b646-7807a685749f",
   "https://admission.ucla.edu/sites/default/files/documents/UCLA-International-Admission-Guide-2026.pdf",
   "https://admission.ucla.edu/tuition-fees",
   "https://admission.ucla.edu/apply/international-applicants",
   "https://admission.ucla.edu/apply/first-year/first-year-profile/major",
   "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html"
  ],
  "uncertain": [
   "stats.intl: CDS C1 residency table and CDS sections G (cost) and H (aid) are blank in UCLA's 2025-26 CDS; intlFirstYear 549 is the B2 nonresident first-time first-year count. UCLA International Guide 2026 reports Fall 2026 international applicants 24,728 and an 8% acceptance rate (mid-summer, rounded).",
   "stats.firstYearTotal: B2 degree-seeking first-time first-year 6,551 (C1 enrolled sums to 6,553)",
   "coa.tuition: combined tuition+fees+nonresident supplemental; fees field null because UCLA lists a single University Fees line",
   "majors GPA thresholds for cogsci/psych and neuro declaration rules come from department pages seen only via search summaries; fetch of psych.ucla.edu and neurosci.ucla.edu failed",
   "majors.bio.note: EEB vs Life Sciences pages disagree on the entry course"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://apb.ucla.edu/file/f8f5c864-93be-4b44-b646-7807a685749f",
   "applied": 145086,
   "admitted": 13659,
   "admitRate": 9.4,
   "ed": null,
   "ea": null,
   "intl": null,
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 6551,
   "intlFirstYear": 549,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": 55700,
    "fees": null,
    "housing": 19867,
    "total": 84770,
    "source": "https://admission.ucla.edu/tuition-fees",
    "note": "Nonresident, residence halls. tuition = University Fees $16,430 (tuition+fees, UCLA lists them combined) + nonresident supplemental tuition $39,270; housing = food $7,568 + housing $12,299; total also includes books $1,588, transportation, personal and health insurance $3,885.",
    "direct": 75567
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "SAT/ACT are not considered and not requested (test-blind)",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "UC does not use SAT/ACT for admission or scholarships."
  },
  "req": {
   "application": "UC Application",
   "fee": 95,
   "feeWaiver": "$80 domestic / $95 international per campus; UC fee waiver is for US applicants and is not available to non-immigrant visa holders (based on a 2024-25 UC waiver form)",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "Letters of recommendation are not accepted by UCLA"
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "Not accepted (UCLA does not accept interviews)",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 4,
     "words": 350,
     "chars": null,
     "choose": "4 of 8",
     "summary": "Answer four of eight Personal Insight Questions, max 350 words each (leadership, creativity, talent, education, challenge, subject you love, community, why you)."
    },
    {
     "type": "other",
     "required": false,
     "count": 1,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "Only applicants to Arts and Architecture, Music, Nursing, or Theater, Film and Television submit a separate supplemental application."
    }
   ],
   "supplementsUrl": "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": "UC Application (shared by all UC campuses): self-reported grades and A-G coursework, activities and awards lists, 4 Personal Insight Questions (350 words each), international external exams section; no SAT/ACT, no recommendations.",
   "sources": [
    "https://admission.ucla.edu/apply/international-applicants",
    "https://admission.ucla.edu/sites/default/files/documents/UCLA-International-Admission-Guide-2026.pdf"
   ],
   "uncertain": [
    "interview: UCLA says not accepted (International Guide 2026)"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Los Angeles",
   "state": "CA",
   "lat": 34.0689,
   "lon": -118.4452,
   "region": "w",
   "lx": -10,
   "ly": 4,
   "la": "end"
  },
  "verified": {
   "pub": "ok: CDS C1 read from PDF (applied 65,079+73,508+6,499=145,086; admitted 13,659); residency table blank in CDS so intl null is right; B2 nonresident first-year 549 ok; CS 7.3% (6,806 applicants, fall 2025) ok on UCLA first-year profile; COA 2026-27 page matches (16,430+39,270+12,299+7,568+1,588=84,770). Not verified: cogsci/psych/neuro apply-later GPA thresholds"
  },
  "rank": {
   "qs": "49",
   "the": "20",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=1",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "ucsd",
  "name": "UC San Diego",
  "full": "University of California, San Diego",
  "public": true,
  "commonApp": false,
  "plans": [
   {
    "type": "RD",
    "deadline": "2026-11-30",
    "notify": "March",
    "notifyDate": null
   }
  ],
  "earlyRule": "No early rounds; a single UC Application filing window Oct 1 - Nov 30, 2026 with decisions in spring.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "CDS 2025-26 H6: 214 nonresident undergraduates received institutional aid, average $10,290 (type not specified)",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "blind",
  "testingNote": "UC San Diego does not consider SAT or ACT in admission; scores may be used to meet eligibility or for placement only if submitted.",
  "english": "Needed if instruction was not in English (under 3 years of English). UCSD minimums: TOEFL iBT 4.5 (exams from Jan 2026; 83 before), IELTS 7, Duolingo 115; AP/IB English also accepted.",
  "cogsci": "Cognitive Science B.A./B.S. in the Division of Social Sciences with B.S. specializations (Machine Learning and Neural Computation, Neuroscience, Clinical Aspects, Design and Interaction, Language and Culture).",
  "interview": "No interview.",
  "url": "https://admissions.ucsd.edu/international/index.html",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (B.A./B.S.) with B.S. specializations",
    "college": "Division of Social Sciences (applicants also pick one of the residential colleges)",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Not on UCSD's selective-major list. Specializations: Clinical Aspects, Design and Interaction, Language and Culture, Machine Learning and Neural Computation, Neuroscience."
   },
   "neuro": {
    "offered": "major",
    "name": "Neurobiology (B.S.)",
    "college": "Division of Biological Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "No standalone Neuroscience major. Other options: Cognitive and Behavioral Neuroscience (B.S.) and Cognitive Science with Specialization in Neuroscience (B.S.)."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (B.A.) plus B.S. options",
    "college": "Division of Social Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "B.S. options: Clinical Psychology, Experimental Psychology, Business Psychology, Cognitive and Behavioral Neuroscience."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (B.S.)",
    "college": "Jacobs School of Engineering (CS and Engineering dept.)",
    "restricted": "capped",
    "admitRate": null,
    "admitNote": null,
    "note": "Selective major; admitted directly. First-year admits may apply to switch into selective majors only after first year (cycle opens July 2027, deadline Sep 1, 2027 for Fall 2025/2026 admits), no guarantee. Also Artificial Intelligence B.S. and CS with Bioinformatics."
   },
   "bio": {
    "offered": "major",
    "name": "Biology majors (General Biology, Molecular and Cell Biology, Human Biology, etc., B.S.)",
    "college": "Division of Biological Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Not on UCSD's official selective-major list. Pre-med is advising, not a major; pre-health advising is offered."
   }
  },
  "sources": [
   "https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final4.pdf",
   "https://admissions.ucsd.edu/international/index.html",
   "https://fas.ucsd.edu/applying/international-students/index.html",
   "https://students.ucsd.edu/finances/fees/registration/2026-27/index.html",
   "https://undergrad.ucsd.edu/academics/selective-major-process/index.html",
   "http://students.ucsd.edu/academics/advising/majors-minors/undergraduate-majors.html"
  ],
  "uncertain": [
   "stats.firstYearTotal: C1 enrolled total (3,511+4,096+194)",
   "intlAid: UCSD pages say international students are not eligible for federal/state aid; CDS H6 boxes are blank and H7 says Not eligible, yet 214 nonresidents received institutional aid averaging $10,290 (merit or other)",
   "coa: official 2026-27 housing/food and total not retrieved; fees left null",
   "meetsNeed false: not applicable to internationals",
   "english: UCSD 'Alternative' TOEFL minimum from admissions.ucsd.edu page"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final4.pdf",
   "applied": 136750,
   "admitted": 39054,
   "admitRate": 28.6,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": 24254,
    "admitted": 7496,
    "rate": 30.9
   },
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 7801,
   "intlFirstYear": 1409,
   "intlAidCount": 214,
   "intlAidAvg": 10290,
   "coa": {
    "year": "2026-27",
    "tuition": 54858,
    "fees": null,
    "housing": null,
    "total": null,
    "source": "https://students.ucsd.edu/finances/fees/registration/2026-27/index.html",
    "note": "Nonresident, class first enrolled 2026-27. tuition = tuition $14,202 + Student Services Fee $1,386 + nonresident supplemental tuition $39,270 (quarterly rates x3). Campus fees about $2,464 plus mandatory health insurance $3,195 (sum of listed items, not stated as annual). Official on-campus housing/food and total not retrieved.",
    "direct": null
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "SAT/ACT are not considered and not requested (test-blind)",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "UC does not use SAT/ACT for admission or scholarships."
  },
  "req": {
   "application": "UC Application",
   "fee": 95,
   "feeWaiver": "$80 domestic / $95 international per campus; UC fee waiver is for US applicants and is not available to non-immigrant visa holders (based on a 2024-25 UC waiver form)",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "No letters of recommendation required by UC"
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "No interview",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 4,
     "words": 350,
     "chars": null,
     "choose": "4 of 8",
     "summary": "Answer four of eight Personal Insight Questions, max 350 words each (leadership, creativity, talent, education, challenge, subject you love, community, why you)."
    }
   ],
   "supplementsUrl": "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": "https://fas.ucsd.edu/resources/helpful-tools/financial-aid-estimator/",
   "netPriceIntl": null,
   "appFormat": "UC Application (shared by all UC campuses): self-reported grades and A-G coursework, activities and awards lists, 4 Personal Insight Questions (350 words each), international external exams section; no SAT/ACT, no recommendations.",
   "sources": [
    "https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final4.pdf",
    "https://admissions.ucsd.edu/international/index.html"
   ],
   "uncertain": [
    "interview and recommendation: UC-wide practice; not verified on a UCSD page"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "La Jolla",
   "state": "CA",
   "lat": 32.8801,
   "lon": -117.234,
   "region": "w",
   "lx": 11,
   "ly": 8,
   "la": "start"
  },
  "verified": {
   "pub": "ok: CDS C1 read (136,750 / 39,054; intl 24,254 / 7,496; enrolled 7,801 / intl 1,409). Registrar page confirms nonresident 2026-27 tuition 14,202+1,386+39,270=54,858 (quarterly rates x3). partial: on-campus housing/food and total still not found (fas.ucsd.edu cost page has no figures)"
  },
  "rank": {
   "qs": "81",
   "the": "37",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=2",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "ucdavis",
  "name": "UC Davis",
  "full": "University of California, Davis",
  "public": true,
  "commonApp": false,
  "plans": [
   {
    "type": "RD",
    "deadline": "2026-11-30",
    "notify": "March",
    "notifyDate": null
   }
  ],
  "earlyRule": "No early rounds; a single UC Application filing window Oct 1 - Nov 30, 2026 with decisions in spring.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "Institutional and prestigious scholarships may be open to internationals (amounts not published on pages read); CDS 2025-26 H6: 195 nonresident undergraduates received institutional aid, average $14,753",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "blind",
  "testingNote": "UC Davis does not use SAT or ACT in admission (UC test-blind policy).",
  "english": "UC requirement if under 3 years of English instruction: TOEFL iBT 4.5 (80 on old scale), IELTS 6.5, Duolingo 115; AP/IB English, SAT/ACT sub-scores also accepted by UC. Campus may ask for more after admission.",
  "cogsci": "Cognitive Science major in the College of Letters and Science.",
  "interview": "No interview.",
  "url": "https://www.ucdavis.edu/international",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science",
    "college": "College of Letters and Science",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Listed among L&S majors. Switching from Cognitive Science into Computer Science is reported as very difficult."
   },
   "neuro": {
    "offered": "major",
    "name": "Neurobiology, Physiology and Behavior",
    "college": "College of Biological Sciences",
    "restricted": "capped",
    "admitRate": null,
    "admitNote": null,
    "note": "Selective major (higher overall/series GPA requirements); strong pre-health focus."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": "College of Letters and Science",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Listed among L&S majors; admission restrictions not verified."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (also Computer Science and Engineering)",
    "college": "College of Engineering",
    "restricted": "capped",
    "admitRate": null,
    "admitNote": null,
    "note": "Impacted: changing in requires MAT 21A/21B with C- or better and 3.0 GPA; admitted under another major makes switching very difficult."
   },
   "bio": {
    "offered": "major",
    "name": "Biological Sciences",
    "college": "College of Biological Sciences",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising, not a major; pre-health advising is offered through the colleges."
   }
  },
  "sources": [
   "https://aggiedata.ucdavis.edu/sites/g/files/dgvnsk1841/files/media/documents/CDS_UCD_0.pdf",
   "https://www.ucdavis.edu/sites/default/files/media/documents/F27_International_One_Pager.pdf",
   "https://www.ucdavis.edu/sites/default/files/media/documents/F26_International_One_Pager_digital_FINAL.pdf",
   "https://cs.ucdavis.edu/undergraduate/changing-majors-double-majors"
  ],
  "uncertain": [
   "intlAid: CDS H6 checks both need-based and non-need-based institutional aid for nonresidents (H7: International Work-Study Application), but UC pages say internationals are eligible for very few scholarships and generally not loans; need-based eligibility not confirmed",
   "stats: firstYearTotal is the C1 enrolled total",
   "majors restricted values left null for cogsci/psych/bio: Davis pages not read",
   "english: Davis-specific extra testing not verified"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://aggiedata.ucdavis.edu/sites/g/files/dgvnsk1841/files/media/documents/CDS_UCD_0.pdf",
   "applied": 102988,
   "admitted": 45674,
   "admitRate": 44.3,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": 21246,
    "admitted": 11886,
    "rate": 55.9
   },
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 6824,
   "intlFirstYear": 926,
   "intlAidCount": 195,
   "intlAidAvg": 14753,
   "coa": {
    "year": "2026-27",
    "tuition": 54858,
    "fees": 2904,
    "housing": 30931,
    "total": 88693,
    "source": "https://www.ucdavis.edu/sites/default/files/media/documents/F27_International_One_Pager.pdf",
    "note": "International, living on campus (residence hall). tuition = systemwide tuition and fees $15,588 + nonresident supplemental tuition $39,270; fees = international student administrative fee $414 + campus-based fees $2,490; housing = total student living expenses $30,931 (room and board, books, personal, transportation, optional health insurance).",
    "direct": 88693
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "SAT/ACT are not considered and not requested (test-blind)",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "UC does not use SAT/ACT for admission or scholarships."
  },
  "req": {
   "application": "UC Application",
   "fee": 95,
   "feeWaiver": "$80 domestic / $95 international per campus; UC fee waiver is for US applicants and is not available to non-immigrant visa holders (based on a 2024-25 UC waiver form)",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "No letters of recommendation required by UC"
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "No interview",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 4,
     "words": 350,
     "chars": null,
     "choose": "4 of 8",
     "summary": "Answer four of eight Personal Insight Questions, max 350 words each (leadership, creativity, talent, education, challenge, subject you love, community, why you)."
    }
   ],
   "supplementsUrl": "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": "UC Application (shared by all UC campuses): self-reported grades and A-G coursework, activities and awards lists, 4 Personal Insight Questions (350 words each), international external exams section; no SAT/ACT, no recommendations.",
   "sources": [
    "https://aggiedata.ucdavis.edu/sites/g/files/dgvnsk1841/files/media/documents/CDS_UCD_0.pdf",
    "https://www.ucdavis.edu/sites/default/files/media/documents/F27_International_One_Pager.pdf"
   ],
   "uncertain": [
    "interview and recommendation: UC-wide practice; not verified on a Davis page"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Davis",
   "state": "CA",
   "lat": 38.5382,
   "lon": -121.7617,
   "region": "w",
   "lx": 11,
   "ly": -6,
   "la": "start"
  },
  "verified": {
   "pub": "ok: CDS C1 read (102,988 / 45,674; intl 21,246 / 11,886; enrolled 6,824 / intl 926). partial: COA one-pager not re-opened; intlAid 'none' is plausible (UC pages) but CDS H6 shows institutional aid to nonresidents"
  },
  "rank": {
   "qs": "137",
   "the": "65",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=3",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 },
 {
  "id": "uci",
  "name": "UC Irvine",
  "full": "University of California, Irvine",
  "public": true,
  "commonApp": false,
  "plans": [
   {
    "type": "RD",
    "deadline": "2026-11-30",
    "notify": "March",
    "notifyDate": null
   }
  ],
  "earlyRule": "No early rounds; a single UC Application filing window Oct 1 - Nov 30, 2026 with decisions in spring.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "UCI Distinguished Scholarships and Campuswide Scholarships (merit, no separate application) can go to internationals; amounts not verified. CDS 2025-26 H6: 52 nonresident undergraduates received institutional aid, average $24,494",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "blind",
  "testingNote": "Per CDS: standardized exams (SAT, ACT) are not used for admissions or scholarship decisions; may be used for placement after admission.",
  "english": "UC requirement if under 3 years of English instruction: TOEFL iBT 4.5 (80 on old scale), IELTS 6.5, Duolingo 115. UCI-specific higher scores not verified.",
  "cogsci": "Department of Cognitive Sciences (School of Social Sciences) offers a B.S. in Cognitive Sciences (cognitive psychology, cognitive neuroscience, math, stats, CS) and a B.S. in Psychology.",
  "interview": "No interview.",
  "url": "https://admissions.uci.edu/",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Sciences (B.S.)",
    "college": "School of Social Sciences",
    "restricted": "direct-admit",
    "admitRate": null,
    "admitNote": null,
    "note": "Interdisciplinary: cognitive psychology, cognitive neuroscience, math, statistics, CS. Changing in later requires 3.2 UC GPA and 3.2 prior-quarter GPA; no double majoring within the department."
   },
   "neuro": {
    "offered": "major",
    "name": "Neurobiology (B.S.)",
    "college": "School of Biological Sciences",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": null,
    "note": "Run by the Dept. of Neurobiology and Behavior; the department says students apply by change-of-major, most in years 2-3."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (B.S.); also Psychological Science (B.A.)",
    "college": "School of Social Sciences (B.S.); School of Social Ecology (B.A.)",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Two psychology majors on different schools; B.S. is in the Dept. of Cognitive Sciences."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (B.S.)",
    "college": "Donald Bren School of Information and Computer Sciences",
    "restricted": "capped",
    "admitRate": null,
    "admitNote": null,
    "note": "ICS does not accept pre-admission change-of-major requests; later change needs 3.0 cumulative and prior-quarter GPA plus prerequisites. Computer Science and Engineering (Samueli, 2.7 GPA) is separate."
   },
   "bio": {
    "offered": "major",
    "name": "Biological Sciences (B.S.)",
    "college": "School of Biological Sciences",
    "restricted": "direct-admit",
    "admitRate": null,
    "admitNote": null,
    "note": "Change-of-major criteria: 2.00 cumulative and prior-quarter GPA plus course grades. Pre-med is advising, not a major; pre-health advising is offered."
   }
  },
  "sources": [
   "https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/2/5478/files/2026/05/2025-26-CDS-PDF-Upload.pdf",
   "https://www.reg.uci.edu/fees/2026-2027/undergrad_26.html",
   "https://ics.uci.edu/academics/undergrad/change-of-major/",
   "https://neurobiology.uci.edu/undergraduate-programs/neurobiology-major/",
   "https://catalogue.uci.edu/schoolofsocialsciences/departmentofcognitivesciences/cognitivesciences_bs"
  ],
  "uncertain": [
   "stats.intl enrolled etc.: CDS C1 table text is scrambled; applied/admitted columns cross-checked against totals (OOS admitted 7,784 and enrolled 472 confirmed by form fields)",
   "intlAid: UCI aid office says internationals are not eligible for most aid and only merit scholarships (seen via search summary, page blocked); CDS H6 checks both need-based and non-need-based for 52 nonresidents (own aid form on H7)",
   "coa.housing: from a search-result snippet of ofas.uci.edu; total null",
   "majors neuro: apply-later based on department page; direct freshman admission to Neurobiology not verified",
   "majors psych restricted left null; url is the general UCI admissions home (international page blocked)"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/2/5478/files/2026/05/2025-26-CDS-PDF-Upload.pdf",
   "applied": 124231,
   "admitted": 35964,
   "admitRate": 28.9,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": 21620,
    "admitted": 9258,
    "rate": 42.8
   },
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 6421,
   "intlFirstYear": 1079,
   "intlAidCount": 52,
   "intlAidAvg": 24494,
   "coa": {
    "year": "2026-27",
    "tuition": 54858,
    "fees": 1303,
    "housing": 20926,
    "total": null,
    "source": "https://www.reg.uci.edu/fees/2026-2027/undergrad_26.html",
    "note": "Nonresident, class first enrolled 2026-27. tuition = tuition $14,202 + Student Services Fee $1,386 + nonresident supplemental tuition $39,270; fees = sum of listed campus fees $1,303 (excludes one-time document/writing/eTech fees and health insurance $3,214); housing = on-campus housing and food $20,926 per UCI aid office (seen in a search result, page itself blocked). Registrar total incl. health insurance $59,375. Overall total not published in retrieved sources.",
    "direct": null
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "SAT/ACT are not considered and not requested (test-blind)",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "UC does not use SAT/ACT for admission or scholarships."
  },
  "req": {
   "application": "UC Application",
   "fee": 95,
   "feeWaiver": "$80 domestic / $95 international per campus; UC fee waiver is for US applicants and is not available to non-immigrant visa holders (based on a 2024-25 UC waiver form)",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "No letters of recommendation required by UC"
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "No interview",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "other",
     "required": true,
     "count": 4,
     "words": 350,
     "chars": null,
     "choose": "4 of 8",
     "summary": "Answer four of eight Personal Insight Questions, max 350 words each (leadership, creativity, talent, education, challenge, subject you love, community, why you)."
    }
   ],
   "supplementsUrl": "https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/personal-insight-questions.html",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": "https://www.ofas.uci.edu/cost/net-price-calculator.php",
   "netPriceIntl": null,
   "appFormat": "UC Application (shared by all UC campuses): self-reported grades and A-G coursework, activities and awards lists, 4 Personal Insight Questions (350 words each), international external exams section; no SAT/ACT, no recommendations.",
   "sources": [
    "https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/2/5478/files/2026/05/2025-26-CDS-PDF-Upload.pdf",
    "https://www.reg.uci.edu/fees/2026-2027/undergrad_26.html"
   ],
   "uncertain": [
    "interview and recommendation: UC-wide practice; not verified on a UCI page"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Irvine",
   "state": "CA",
   "lat": 33.6405,
   "lon": -117.8443,
   "region": "w",
   "lx": 11,
   "ly": 6,
   "la": "start"
  },
  "verified": {
   "pub": "ok: CDS C1 read (124,231 / 35,964; intl 21,620 / 9,258; enrolled 6,421 / intl 1,079). Registrar fee page confirms tuition 14,202+1,386+39,270=54,858 and listed fees; total incl. insurance $59,375. partial: housing 20,926 from search snippet only"
  },
  "rank": {
   "qs": "=252",
   "the": "=97",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=6",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 },
 {
  "id": "umich",
  "name": "Michigan",
  "full": "University of Michigan",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "by Dec 24 (reply Jan 6)",
    "notifyDate": "2026-12-24"
   },
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "by Jan 29",
    "notifyDate": "2027-01-29"
   },
   {
    "type": "RD",
    "deadline": "2027-02-01",
    "notify": "by Apr 2",
    "notifyDate": "2027-04-02"
   }
  ],
  "earlyRule": "ED is binding (new plan; CDS 2025-26 still lists none) and EA is non-binding and non-restrictive per CDS C22; no international-specific restriction found.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "None described; U-M admissions says international students on temporary visas are not eligible for aid and few scholarships exist. CDS H6: no institutional aid for nonresidents.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Application page says SAT/ACT optional; CDS C8 ticks SAT/ACT as 'recommended' for Fall 2027. CDS C8E: scores received by Feb 1.",
  "english": "Required of non-native English speakers: TOEFL (code 1839), IELTS or MET Digital (4-skill); U-M publishes score ranges (minimums not read).",
  "cogsci": "Cognitive Science major in LSA with four tracks; gateway course COGSCI 200 to declare.",
  "interview": "No admissions interview found.",
  "url": "https://admissions.umich.edu/apply/international-applicants/requirements-deadlines",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science",
    "college": "College of Literature, Science, and the Arts (LSA)",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Four tracks; declare after gateway COGSCI 200."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": "LSA",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Can declare without finishing all prerequisites; cannot be combined with Biology or BCN."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (also Biopsychology, Cognition, and Neuroscience, BCN)",
    "college": "LSA",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare after intro psych (C) and statistics (C-); 32 credits, major GPA 2.0. BCN is a separate major."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (LSA BS or Engineering BSE)",
    "college": "LSA or College of Engineering",
    "restricted": "capped",
    "admitRate": null,
    "admitNote": null,
    "note": "Students admitted Fall 2023 or later must be selected into CS before declaring, in either college."
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": "LSA",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising, not a major; Biology is not combinable with Neuroscience."
   }
  },
  "sources": [
   "https://obp.umich.edu/wp-content/uploads/pubdata/cds/cds_2025-26_umaa.pdf",
   "https://teamdynamix.umich.edu/TDClient/154/Portal/KB/Article/7570/Materials-Needed-to-Complete-a-First-year-Application",
   "https://teamdynamix.umich.edu/TDClient/154/Portal/KB/Article/7497/Admissions-Application-Deadline",
   "https://www.ivystrides.com/blog/umich-early-decision/"
  ],
  "uncertain": [
   "plans: ED/EA/RD decision dates from a third-party blog (ivystrides); official page 403",
   "english: minimum scores not read",
   "majors.bio.restricted: not verified",
   "stats.intl: CDS residency table left blank by U-M",
   "ed/ea counts: not reported in CDS"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://obp.umich.edu/wp-content/uploads/pubdata/cds/cds_2025-26_umaa.pdf",
   "applied": 109112,
   "admitted": 17915,
   "admitRate": 16.4,
   "ed": null,
   "ea": null,
   "intl": null,
   "satSubmitPct": 55,
   "satEBRW": [
    690,
    730,
    750
   ],
   "satMath": [
    680,
    740,
    780
   ],
   "firstYearTotal": 8178,
   "intlFirstYear": 391,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": 66602,
    "fees": 1494,
    "housing": 17220,
    "total": 89394,
    "source": "https://obp.umich.edu/wp-content/uploads/pubdata/cds/cds_2025-26_umaa.pdf",
    "note": "CDS G1 international first-year: tuition 66,602; fees 494 + 1,000 international fee; food+housing 17,220. Total derived by adding G5 books 1,220, transport 400, other 2,458. Official OBP 2025-26 out-of-state lower division total was 84,164.",
    "direct": 89394
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Optional; submit only if you want them considered",
   "lastSatEarly": null,
   "lastSatRD": "2027-02-01",
   "note": "CDS C8E: scores must arrive by 2/1."
  },
  "req": {
   "application": "Common App + U-M questions",
   "fee": 75,
   "feeWaiver": "Waiver available for financial need",
   "teacherRecs": {
    "required": 1,
    "optionalExtra": null,
    "note": "One teacher evaluation from a core academic teacher or non-relative"
   },
   "counselorRec": true,
   "midYearReport": null,
   "interview": "No admissions interview found",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "leadership/citizenship",
     "required": true,
     "count": 1,
     "words": 300,
     "chars": null,
     "choose": null,
     "summary": "Short essay on leading or contributing to a community (not verified for this cycle)."
    },
    {
     "type": "why",
     "required": true,
     "count": 1,
     "words": 550,
     "chars": null,
     "choose": null,
     "summary": "Why the specific U-M college or school fits your interests (not verified for this cycle)."
    }
   ],
   "supplementsUrl": "https://admissions.umich.edu/essay-questions",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": null,
   "sources": [
    "https://teamdynamix.umich.edu/TDClient/154/Portal/KB/Article/7570/Materials-Needed-to-Complete-a-First-year-Application"
   ],
   "uncertain": [
    "supplements: prompts/word limits (300 and 550) come from third-party guides; official page 403 to fetch",
    "midYearReport: not on materials page"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Ann Arbor",
   "state": "MI",
   "lat": 42.278,
   "lon": -83.738,
   "region": "mw",
   "lx": 0,
   "ly": 16,
   "la": "middle"
  },
  "verified": {
   "pub": "partial: CDS C1 read (53,044+56,068=109,112 applied; 7,593+10,322=17,915 admitted), residency table blank so intl null ok. Deadlines (ED Nov 1 -> by Dec 24; EA Nov 1 -> by Jan 29; RD Feb 1 -> by Apr 2) match official U-M search-result text (admissions.umich.edu pages 403 to WebFetch); ED is new and binding. COA: official OBP 2025-26 lower-division OOS total 84,164 confirmed (matches collector note); 2026-27 66,602 tuition is from CDS G1, not re-read"
  },
  "rank": {
   "qs": "51",
   "the": "23",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=2",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "uva",
  "name": "UVA",
  "full": "University of Virginia",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "ED",
    "deadline": "2026-11-01",
    "notify": "by Dec 15",
    "notifyDate": "2026-12-15"
   },
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "by Feb 15",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "by Apr 1",
    "notifyDate": "2027-04-01"
   }
  ],
  "earlyRule": "ED is binding; EA is non-binding; apply to one of the first-year schools (College of A&S, Engineering, Architecture, Nursing, Kinesiology) through Common App.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "None for undergraduates: UVA Admission and Student Financial Services say no funds for foreign nationals (United World College graduates are the stated exception); AccessUVA is US citizens/permanent residents only.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Fall 2027 applicants may choose whether to share scores; no disadvantage. Enrolled middle 50% SAT 1410-1510 (secondary transcription of CDS).",
  "english": "Strongly encouraged for all applicants whose first language is not English; Financial Guarantee for Foreign National Applicants is required to accept an offer.",
  "cogsci": "Interdisciplinary Cognitive Science BA in College of A&S (five areas: cognitive psychology, neuroscience, linguistics, philosophy, CS).",
  "interview": "InitialView or Vericant evaluations accepted for international applicants (deadlines Nov 1 ED/EA, Jan 5 RD).",
  "url": "https://admission.virginia.edu/i-am/international",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Cognitive Science (interdisciplinary BA)",
    "college": "College of Arts & Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare with two approved courses from two areas at C+; CS concentration needs form approval."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (interdisciplinary BA); also Behavioral Neuroscience BS in Psychology",
    "college": "College of Arts & Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare needs a 3000-level BIOL/PSYC course at C+ and 2.5 GPA."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA) and Behavioral Neuroscience (BS)",
    "college": "College of Arts & Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare after STAT 1601, PSYC 2005 and two 2000-level PSYC courses; BS is pre-med friendly."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BS in SEAS or BA in A&S)",
    "college": "School of Engineering and Applied Science, or College of Arts & Sciences",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": null,
    "note": "Apply first-year to a school, not a CS major; CS entry is by major application after early CS courses."
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": "College of Arts & Sciences",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising, not a major."
   }
  },
  "sources": [
   "https://ira.virginia.edu/common-data-set/common-data-set-2025-2026",
   "https://www.esslo.org/colleges/university-of-virginia/llms.txt",
   "https://sfs.virginia.edu/our-financial-aid-commitment-you-0",
   "https://cogsci.as.virginia.edu/admission-and-requirements",
   "https://psychology.as.virginia.edu/bs-behavioral-neuroscience"
  ],
  "uncertain": [
   "stats: applied 64,457 matches two secondary sources; admitted 10,086 and 15.6% only from esslo transcription of CDS (UVA CDS and admission pages returned 403)",
   "stats: SAT submit %, EBRW/Math split, first-year total, intl counts not read",
   "coa: totals not official; fee figure conflicts (4,552 vs 4,614)",
   "req: application fee, recs, mid-year not verified",
   "majors.bio and neuro/psych 'open': inferred from declaration prerequisites"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://ira.virginia.edu/common-data-set/common-data-set-2025-2026",
   "applied": 64457,
   "admitted": 10086,
   "admitRate": 15.6,
   "ed": null,
   "ea": null,
   "intl": null,
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": null,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "CDS G1",
    "tuition": 59035,
    "fees": 3945,
    "housing": 16070,
    "direct": 79050,
    "source": "UVA Common Data Set G1 (via second check)",
    "note": "nonresident"
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Optional; may change choice by Nov 22 (ED/EA) or Jan 15 (RD)",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Test-optional for Fall 2027."
  },
  "req": {
   "application": "Common App",
   "fee": null,
   "feeWaiver": null,
   "teacherRecs": {
    "required": null,
    "optionalExtra": null,
    "note": "Not verified"
   },
   "counselorRec": null,
   "midYearReport": null,
   "interview": "InitialView/Vericant accepted for international applicants",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://admission.virginia.edu/admission/deadlines-instructions",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": null,
   "sources": [
    "https://cavalierdaily.com/article/2025/10/uva-removes-supplemental-essay-prompt-from-2025-2026-undergraduate-application"
   ],
   "uncertain": [
    "supplements: per secondary sources UVA dropped its general supplement for 2026-27 (Nursing short answer only); not confirmed on UVA site",
    "fee, recommendations, mid-year report: UVA pages 403"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Charlottesville",
   "state": "VA",
   "lat": 38.0336,
   "lon": -78.508,
   "region": "s",
   "lx": -10,
   "ly": 2,
   "la": "end"
  },
  "verified": {
   "pub": "partial: ED 11/1 -> 12/15 and EA 11/1 -> 2/15 confirmed by UVA CDS section C page; RD Jan 5 -> by Apr 1 confirmed by UVA admission site search result. C1 applied 64,457 / admitted 10,086 only seen via third-party transcriptions (UVA CDS C1 table loads dynamically, admission.virginia.edu 403) so not officially confirmed. COA: UVA CDS G1 page (2026-27) shows first-year out-of-state tuition 59,035, required fees 3,945, food+housing 16,070, which differs from collector's A&S 57,432 / 4,552 / ~21-23k (likely different basis: CDS G1 vs SFS A&S page); not changed, recheck sfs.virginia.edu"
  },
  "rank": {
   "qs": "268",
   "the": "179",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=6",
   "theSource": "https://www.timeshighereducation.com/world-university-rankings/university-virginia",
   "note": null
  }
 },
 {
  "id": "unc",
  "name": "UNC Chapel Hill",
  "full": "University of North Carolina at Chapel Hill",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-10-15",
    "notify": "by Dec 20 (NC residents) / Feb 15 (others)",
    "notifyDate": "2027-02-15"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "by Mar 31",
    "notifyDate": "2027-03-31"
   }
  ],
  "earlyRule": "EA is non-binding and non-restrictive; there is no ED; confirmation due May 1 for both rounds.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "None found; UNC says non-citizens are not eligible for need-based aid and should plan to pay full non-resident cost. CDS H6: no institutional aid for nonresidents.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Optional for most; required only if weighted GPA is below 2.8. 28% of enrolled first-years submitted SAT, 41% ACT (CDS C9).",
  "english": "Non-native speakers: TOEFL (code C182), IELTS, Duolingo, Cambridge C1/C2. Typical strong scores: TOEFL 100 (or 5 on new scale for tests from Jan 21, 2026), IELTS 7.5, Duolingo 130, not stated as minimums; waived after 4 years in English-speaking country or school.",
  "cogsci": "No Cognitive Science major; the minor is deactivated. Related study via Psychology and Neuroscience.",
  "interview": "None found.",
  "url": "https://admissions.unc.edu/apply/types-of-applications/international-first-year-students/",
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No major; cognitive science minor deactivated (no new declarations)."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BS)",
    "college": "College of Arts & Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Start chemistry sequence first; gateway grade of C required, 2.0 GPA in major core."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA/BS)",
    "college": "College of Arts & Sciences",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Department of Psychology and Neuroscience; declaration rules not fully read."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BS and BA)",
    "college": "College of Arts & Sciences",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": null,
    "note": "Apply to the major in spring after finishing or while taking COMP 210; department GPA bars differ across pages."
   },
   "bio": {
    "offered": "major",
    "name": "Biology (BA/BS)",
    "college": "College of Arts & Sciences",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising, not a major."
   }
  },
  "sources": [
   "https://oira.unc.edu/wp-content/uploads/sites/297/2026/06/CDS_UNCCH_2025-26_20260615.pdf",
   "https://admissions.unc.edu/apply/types-of-applications/international-first-year-students/ (via search summary)",
   "https://admissions.unc.edu/faqs/what-is-the-deadline-to-send-in-my-supporting-documents/",
   "https://cogpsych.unc.edu/application-process/"
  ],
  "uncertain": [
   "plans: EA notification Jan 31 (CDS) vs Feb 15 for non-NC (admissions page); used Feb 15",
   "english: scores are typical strong scores per UNC page via search summary, page itself 403",
   "majors.psych/bio 'open': not directly verified",
   "intl admit/enrolled counts come from CDS residency table (labelled Fall 2024 in file but sums match 2025 totals)"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://oira.unc.edu/wp-content/uploads/sites/297/2026/06/CDS_UNCCH_2025-26_20260615.pdf",
   "applied": 76247,
   "admitted": 12751,
   "admitRate": 16.7,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": 9756,
    "admitted": 1461,
    "rate": 15.0
   },
   "satSubmitPct": 28,
   "satEBRW": [
    690,
    730,
    750
   ],
   "satMath": [
    700,
    750,
    780
   ],
   "firstYearTotal": 5091,
   "intlFirstYear": 300,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2025-26",
    "tuition": 47472,
    "fees": 2129,
    "housing": 15870,
    "total": 69137,
    "source": "https://oira.unc.edu/wp-content/uploads/sites/297/2026/06/CDS_UNCCH_2025-26_20260615.pdf",
    "note": "CDS G1 out-of-state values (2026-27 costs flagged 'not available', due August, so treated as 2025-26). Housing = room 9,168 + board 6,702. Total derived adding G5 books 638, transport 1,078, other 1,950. Check studentaid.unc.edu for 2026-27.",
    "direct": 69137
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Optional; considered as one factor if shared",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS C8E: scores received by Jan 31; EA supporting materials/scores due Nov 7, RD Feb 15-21 (sources differ)."
  },
  "req": {
   "application": "Common App",
   "fee": 85,
   "feeWaiver": "Waiver available for financial need",
   "teacherRecs": {
    "required": null,
    "optionalExtra": null,
    "note": "Not verified"
   },
   "counselorRec": null,
   "midYearReport": null,
   "interview": "None found",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://admissions.unc.edu/apply/types-of-applications/first-year/",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": null,
   "sources": [
    "https://oira.unc.edu/wp-content/uploads/sites/297/2026/06/CDS_UNCCH_2025-26_20260615.pdf"
   ],
   "uncertain": [
    "supplements: third-party guides say short answers were removed for 2026-27; Honors Carolina has its own short response; not confirmed on UNC site",
    "recommendations and mid-year report: UNC pages 403",
    "supporting-materials deadlines differ between sources (Feb 15 vs Feb 21)"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Chapel Hill",
   "state": "NC",
   "lat": 35.9132,
   "lon": -79.0558,
   "region": "s",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "pub": "ok: CDS C1 read (76,247 / 12,751; intl 9,756 / 1,461; enrolled 5,091 / intl 300). Official admissions page: EA Oct 15 (materials Nov 7), decision Feb 15 for international (Dec 20 NC only); RD Jan 15 (materials Feb 15), decision Mar 31. UNC page says international students are not eligible for need-based aid (intlAid none ok). COA not re-verified"
  },
  "rank": {
   "qs": "=158",
   "the": "85",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=4",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 },
 {
  "id": "uiuc",
  "name": "Illinois",
  "full": "University of Illinois Urbana-Champaign",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "Jan 29",
    "notifyDate": "2027-01-29"
   },
   {
    "type": "RD",
    "deadline": "2027-01-05",
    "notify": "Feb 26",
    "notifyDate": "2027-02-26"
   }
  ],
  "earlyRule": "EA is non-binding; materials due Nov 7 (EA) / Jan 11 (RD); you apply directly to a first-choice major with an optional second choice.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "Limited scholarships and loans via International Student & Scholar Services (no amounts stated); no need-based aid for international undergraduates.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "Test-optional for all; scores cannot be added later for scholarships, honors or placement; no major requires SAT/ACT.",
  "english": "Required unless grades 10-12 were in an approved English-speaking country: TOEFL iBT, IELTS or Duolingo (or SAT/ACT); cannot be waived; scores within 2 years; no minimums stated (ranges on class profile).",
  "cogsci": "Brain & Cognitive Science BSLAS major in LAS (psychology, neuroscience, computation).",
  "interview": "No interview except Fine and Applied Arts audition/portfolio.",
  "url": "https://www.admissions.illinois.edu/international-requirements/",
  "majors": {
   "cogsci": {
    "offered": "major",
    "name": "Brain & Cognitive Science (BSLAS)",
    "college": "College of Liberal Arts & Sciences",
    "restricted": null,
    "admitRate": 40.6,
    "admitNote": "LAS first-choice-major admit rate for the 2026 entering class (admissions.illinois.edu/admit-rates); not major-specific.",
    "note": "Core covers psychology, neuroscience, programming and statistics, lab."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (BSLAS)",
    "college": "College of Liberal Arts & Sciences",
    "restricted": null,
    "admitRate": 40.6,
    "admitNote": "LAS college rate, 2026 entering class; not major-specific.",
    "note": "Newer interdisciplinary LAS major; declaration needs 2.5 major GPA after a semester of coursework."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BSLAS), incl. Cognitive Neuroscience concentration",
    "college": "College of Liberal Arts & Sciences",
    "restricted": "direct-admit",
    "admitRate": 40.6,
    "admitNote": "LAS college rate, 2026 entering class; not major-specific.",
    "note": "Apply directly to the major; Cognitive Neuroscience concentration 35 hours."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (BS, Grainger Engineering), plus CS+X",
    "college": "The Grainger College of Engineering",
    "restricted": "direct-admit",
    "admitRate": 23.3,
    "admitNote": "Grainger first-choice-major admit rate, 2026 entering class; CS alone is lower but no verified official figure.",
    "note": "Closed to on-campus transfer for students who entered as first-years, so the application is the only way in."
   },
   "bio": {
    "offered": "major",
    "name": "Integrative Biology / Molecular and Cellular Biology (BSLAS)",
    "college": "College of Liberal Arts & Sciences",
    "restricted": "direct-admit",
    "admitRate": 40.6,
    "admitNote": "LAS college rate, 2026 entering class; not major-specific.",
    "note": "Pre-med is advising, not a major."
   }
  },
  "sources": [
   "https://www.admissions.illinois.edu/invest/financial-aid",
   "https://admissions.illinois.edu/first-year-dates/",
   "https://www.admissions.illinois.edu/international-requirements/",
   "https://www.admissions.illinois.edu/admit-rates/",
   "https://www.pb.uillinois.edu/documents/transfer-characteristics/PB_Freshman_Characteristics_Fall25.pdf",
   "https://news.illinois.edu/illinois-sets-another-freshman-record-as-enrollment-tops-60000/"
  ],
  "uncertain": [
   "stats.admitRate 36.6 is as reported by UIUC-linked sources, admitted count not verified; applied 83,045 per UIUC news bureau",
   "stats: CDS xlsx unreachable so SAT split, ED/EA, intl applied/admitted not read; esslo transcription suggests intl admit about 30.5% (not used)",
   "majors.cogsci/neuro restricted: whether applied at entry not verified; neuro rate is LAS college rate only",
   "majors.psych/bio direct-admit: inferred from 'apply directly to a major' policy",
   "coa fees derived; fall 2027 rate unknown"
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://dair.illinois.edu/access-data/common-data-set/",
   "applied": 83045,
   "admitted": null,
   "admitRate": 36.6,
   "ed": null,
   "ea": null,
   "intl": null,
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 9207,
   "intlFirstYear": 1435,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": 38576,
    "fees": 3672,
    "housing": 15858,
    "total": 62146,
    "source": "https://www.admissions.illinois.edu/invest/tuition",
    "note": "International first-year, LAS base rate: tuition 38,576 (cost.illinois.edu, new fall 2026 rate); fees derived as 42,248 minus 38,576; food+housing 15,858; books 1,200; other 2,840. Admissions page range for international is 62,146-72,976 (Engineering/CS higher: tuition 47,800 total at fall 2026 rate). Fall 2027 entrants' rate may differ.",
    "direct": 62146
   }
  },
  "policy": {
   "superscore": false,
   "selfReport": true,
   "scoreChoice": "Optional; report highest composite/total, no superscoring; official scores only after enrollment",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "SAT code 1836, ACT 1154; cannot change test-optional choice after submitting."
  },
  "req": {
   "application": "Common App",
   "fee": 75,
   "feeWaiver": "Counselor-submitted fee waiver form",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "Illinois does not accept letters of recommendation; removed before review"
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "None for most majors",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "major",
     "required": true,
     "count": 2,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Major-related experience, and goals after graduation with the major."
    },
    {
     "type": "second-choice major",
     "required": false,
     "count": 1,
     "words": 150,
     "chars": null,
     "choose": null,
     "summary": "Interest in second-choice major, only if one is listed."
    }
   ],
   "supplementsUrl": "https://admissions.illinois.edu/essays",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": null,
   "sources": [
    "https://admissions.illinois.edu/essays",
    "https://admissions.illinois.edu/first-year-apply/"
   ],
   "uncertain": [
    "admitted count and CDS residency table not read (Box xlsx not fetchable)",
    "counselorRec: no counselor letter appears in listed materials, inferred from 'no recommendations' rule"
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Urbana",
   "state": "IL",
   "lat": 40.102,
   "lon": -88.2272,
   "region": "mw",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "pub": "partial: dates page confirms EA Nov 1 (materials Nov 7, decision Jan 29), RD Jan 5 (materials Jan 11, decision Feb 26); year not printed on page. applied 83,045 and 36.6% total admit rate confirmed via search (archived official admit-rate page, fall 2025); admitted count (~30,384) not confirmed from an official source; CDS xlsx on Box not readable; intl applied/admitted not found. Major rates on the current page are for the 2026 entering class (LAS 40.6, Grainger 23.3, university 38.1), not fall 2025, so they are not the same year as stats.admitRate. International COA range 62,146-72,976 and components (tuition 42,248-53,078, food+housing 15,858, books 1,200, other 2,840) confirmed on admissions tuition page"
  },
  "rank": {
   "qs": "74",
   "the": "48",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=2",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "uw",
  "name": "UW Seattle",
  "full": "University of Washington",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "RD",
    "deadline": "2026-12-01",
    "notify": "March 1-15, 2027 (deadline extended from Nov 15)",
    "notifyDate": null
   }
  ],
  "earlyRule": "No Early Decision or Early Action; one application deadline (Dec 1, extended from Nov 15) with decisions March 1-15.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "none",
  "meetsNeed": false,
  "meritIntl": "None: UW states it does not provide financial aid or scholarships to undergraduate international students.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "SAT/ACT not required for most applicants; required only for homeschooled or schools without grades.",
  "english": "TOEFL iBT 76 (4.0 on new scale for tests from Jan 21, 2026), IELTS 6.0, Duolingo 110; or SAT EBRW 580 / ACT English 22 plus B average in English; exempt if primary and secondary school in US/UK/Ireland/Canada/Australia/NZ.",
  "cogsci": "No Cognitive Science major or minor at UW Seattle; nearest options are Psychology, Neuroscience, Linguistics, and the Neural Computation and Engineering minor.",
  "interview": "None; UW does not interview or consider demonstrated interest.",
  "url": "https://admit.washington.edu/apply/first-year/how-to-apply/",
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No Cognitive Science major or minor listed in UW advising major/minor lists."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": "College of Arts & Sciences",
    "restricted": "capped",
    "admitRate": null,
    "admitNote": "No first-year admit rate published on admissions page.",
    "note": "Capacity-constrained; a small percentage admitted directly as first-years by listing it first choice, most apply after enrolling."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology",
    "college": "College of Arts & Sciences",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": "No first-year admit rate published.",
    "note": "Capacity-constrained with no direct option; separate department application after enrolling."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (Allen School; also Computer Engineering)",
    "college": "Paul G. Allen School / College of Arts & Sciences",
    "restricted": "direct-admit",
    "admitRate": 3.5,
    "admitNote": "Allen School published 2026 direct-to-major rates: international 37 of 1,049 (stated as 4%; 3.5% computed), WA residents 41%, domestic non-residents 8%.",
    "note": "Direct to Major applies autumn only; list CS or CE as first choice; no minimum GPA; priority to Washington residents. Other CS applicants enter as pre-major."
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": "College of Arts & Sciences",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": "No first-year admit rate published.",
    "note": "Capacity-constrained, no direct option; second application after enrolling. Pre-med is advising, not a major."
   }
  },
  "sources": [
   "https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/162/2026/02/27111247/CDS_2025-2026_Seattle.pdf",
   "https://admit.washington.edu/apply/first-year/how-to-apply/",
   "https://admit.washington.edu/apply/first-year/how-to-apply/english-proficiency/",
   "https://admit.washington.edu/costs/scholarships",
   "https://admit.washington.edu/apply/dates-deadlines/",
   "https://www.cs.washington.edu/academics/undergraduate/admissions/direct-major",
   "https://admit.washington.edu/majors/neuroscience/",
   "https://admit.washington.edu/majors/psychology/",
   "https://admit.washington.edu/majors/biology/",
   "https://advising.uw.edu/degree-overview/majors/list-of-undergraduate-majors/",
   "https://advising.uw.edu/degree-overview/minors/"
  ],
  "uncertain": [
   "plans: Dec 1 2026 deadline stated as extended from Nov 15; page and CS page (Autumn 2027 cycle) agree, but check for further change.",
   "stats.admitRate/intl: CDS C1 residency table used as-is (CDS Fall 2025 entrants).",
   "intlAidCount/intlAidAvg: CDS H2 not split by international status.",
   "COA total includes books/personal/transportation estimate."
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://uw-s3-cdn.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/162/2026/02/27111247/CDS_2025-2026_Seattle.pdf",
   "applied": 72933,
   "admitted": 30446,
   "admitRate": 41.7,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": 13054,
    "admitted": 4653,
    "rate": 35.6
   },
   "satSubmitPct": 19.1,
   "satEBRW": [
    650,
    710,
    740
   ],
   "satMath": [
    650,
    730,
    780
   ],
   "firstYearTotal": 7129,
   "intlFirstYear": 691,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": 44580,
    "fees": 1676,
    "housing": 18858,
    "total": 69596,
    "source": "https://cdn.uw.edu/wp-content/uploads/sites/162/2026/06/12115617/Cost-of-Attendance-for-the-2026-27-academic-year.pdf",
    "note": "Nonresident first-year, Seattle; housing = room and board; total also includes $4,482 books/personal/transportation.",
    "direct": 69596
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": "Test-optional; submitted scores are considered. Only 19.1% of enrolled first-years submitted SAT (CDS C9).",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS SAT percentiles are for the 19% who submitted; Fall 2025 enrollees."
  },
  "req": {
   "application": "Common App plus STARS self-reported courses and grades (required of all first-year applicants incl. international).",
   "fee": 95,
   "feeWaiver": "Not available to international applicants ($85 and waivers for US students).",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "Letters of recommendation not accepted; applicants asked not to send them."
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "None",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "essay",
     "required": true,
     "count": 1,
     "words": 650,
     "chars": null,
     "choose": 7,
     "summary": "Common App personal essay only; no UW-specific supplement found."
    }
   ],
   "supplementsUrl": "https://admit.washington.edu/apply/first-year/how-to-apply/",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": "https://www.washington.edu/financialaid/getting-started/net-price-calculator/",
   "netPriceIntl": null,
   "appFormat": "Common App",
   "sources": [
    "https://admit.washington.edu/apply/first-year/how-to-apply/",
    "https://admit.washington.edu/apply/first-year/how-to-apply/app-fee/"
   ],
   "uncertain": [
    "No international transcript page fetched beyond how-to-apply summary."
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Seattle",
   "state": "WA",
   "lat": 47.6553,
   "lon": -122.3035,
   "region": "w",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "pub": "ok: CDS C1 read (72,933 / 30,446; intl 13,054 / 4,653; enrolled 7,129 / intl 691). Dec 1 deadline confirmed on admit.washington.edu dates page and CS page (extended from Nov 15; decisions Mar 1-15). Allen School DTM 2026: international 37 of 1,049 (page says 4%, 3.5% computed), WA 41%, domestic nonresident 8% confirmed. COA PDF confirmed (nonresident tuition 44,580, fees 1,676, room and board 18,858, books/personal/transport 4,482, total 69,596)"
  },
  "rank": {
   "qs": "=92",
   "the": "26",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=2",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=1",
   "note": null
  }
 },
 {
  "id": "utaustin",
  "name": "UT Austin",
  "full": "The University of Texas at Austin",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-10-15",
    "notify": "By Jan 15, 2027 (supplemental materials Oct 22)",
    "notifyDate": "2027-01-15"
   },
   {
    "type": "RD",
    "deadline": "2026-12-01",
    "notify": "By Feb 15, 2027 (supplemental materials Dec 10)",
    "notifyDate": "2027-02-15"
   }
  ],
  "earlyRule": "Early Action (Oct 15) and Regular (Dec 1) both via Common App or ApplyTexas; Honors decisions March 1.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": false,
  "meritIntl": "No central need-based or merit aid found for first-year internationals; ISSS offers small awards (Feb 1-Mar 1 application, e.g. STEM Scholarship $4,800 fall tuition) mostly restricted by region or after two semesters.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "required",
  "testingNote": "At least one official SAT, ACT or Classic Learning Test score required for fall 2025 applicants and later.",
  "english": "Official TOEFL, IELTS or Duolingo 'if applicable'; admissions page lists no minimum scores.",
  "cogsci": "No Cognitive Science major or minor found at UT Austin; only CGS courses. Related: Psychology (Liberal Arts), Neuroscience (Natural Sciences).",
  "interview": "Not mentioned on official admissions pages.",
  "url": "https://admissions.utexas.edu/apply/international-students/",
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No Cognitive Science major or minor found in catalog search; CGS courses only."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience",
    "college": "College of Natural Sciences",
    "restricted": "direct-admit",
    "admitRate": null,
    "admitNote": "No major-level admit rate published.",
    "note": "Restricted entry-level major: only students admitted by the Office of Admissions (or later by internal transfer)."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA/BS)",
    "college": "College of Liberal Arts",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Admission process for Psychology not confirmed on official pages fetched."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science",
    "college": "College of Natural Sciences (School of Computing)",
    "restricted": "direct-admit",
    "admitRate": null,
    "admitNote": "No major-level admit rate published.",
    "note": "Restricted entry-level major; admitted directly by Admissions, otherwise very competitive internal transfer."
   },
   "bio": {
    "offered": "major",
    "name": "Biology / Human Biology (CNS)",
    "college": "College of Natural Sciences",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is a pathway, not a major (CNS statement). Biology major admission rules not confirmed."
   }
  },
  "sources": [
   "https://reports.utexas.edu/common-data-set/pdf",
   "https://admissions.utexas.edu/apply/international-students/",
   "https://admissions.utexas.edu/apply/freshman/",
   "https://onestop.utexas.edu/managing-costs/cost-tuition-rates/cost-of-attendance/",
   "https://global.utexas.edu/isss/advising-services/scholarships",
   "https://news.utexas.edu/2025/09/18/ut-sets-all-time-highs-for-enrollment-and-student-performance/",
   "https://cns.utexas.edu/info-future-students/first-year-applications",
   "https://cns.utexas.edu/info-future-students/faqs-undergrad-applicants"
  ],
  "uncertain": [
   "stats: 2025-26 CDS is on Box and could not be opened; all CDS-derived values left null.",
   "stats.firstYearTotal 9,900 is the UT News figure for entering FTIC students (Fall 2025), not CDS.",
   "english: minimum scores not found.",
   "plans: Oct 15 / Dec 1 deadlines inferred as 2026 cycle (decisions dated Jan/Feb 2027).",
   "majors.psych/bio restricted status unconfirmed; cogsci 'none' based on catalog search only.",
   "coa.tuition/total null because tuition varies by college."
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://utexas.box.com/s/z5p8zzbr6yk4eluam3v3dt2wyaha3cja",
   "applied": 90690,
   "admitted": null,
   "admitRate": null,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": null,
    "admitted": null
   },
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 9900,
   "intlFirstYear": null,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": null,
    "fees": null,
    "housing": 15420,
    "total": null,
    "source": "https://onestop.utexas.edu/managing-costs/cost-tuition-rates/cost-of-attendance/",
    "note": "Nonresident undergraduate; total ranges $64,204-$72,916 by college (tuition $42,554-$51,106, housing and food $15,420-$15,580, transportation $1,840, books $724, personal $3,666). Housing is the lower bound.",
    "direct": null
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": null,
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "UT does not publish admitted score ranges in the CDS per third-party report; CDS PDF (Box) could not be read."
  },
  "req": {
   "application": "Common App or ApplyTexas; MyStatus for uploads.",
   "fee": 90,
   "feeWaiver": "Not available for international applicants ($75 with waiver for domestic).",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": 2,
    "note": "Up to two optional letters, ideally from outside the high school."
   },
   "counselorRec": null,
   "midYearReport": null,
   "interview": "Not mentioned",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "essay",
     "required": true,
     "count": null,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "At least one essay plus required short answers; optional 250-300 word note on circumstances affecting high school performance."
    }
   ],
   "supplementsUrl": "https://admissions.utexas.edu/apply/freshman/",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": "Common App or ApplyTexas",
   "sources": [
    "https://admissions.utexas.edu/apply/international-students/",
    "https://admissions.utexas.edu/apply/freshman/"
   ],
   "uncertain": [
    "Essay count and word limits not stated on official page fetched."
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Austin",
   "state": "TX",
   "lat": 30.2849,
   "lon": -97.7341,
   "region": "s",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "pub": "partial: deadlines confirmed on admissions.utexas.edu (EA Oct 15, supplemental Oct 22, decision by Jan 15 2027; RD Dec 1, supplemental Dec 10, decision Feb 15 2027; Honors Mar 1). CDS is on Box and could not be opened. COA page confirmed: nonresident total 64,204-72,916, tuition 42,554-51,106, housing/food 15,420-15,580. UT's own news reports 90,690 fall 2025 applications; admitted 20,154 and international 8,543 / 673 appear only in third-party transcriptions of the CDS (esslo, collegewise)"
  },
  "rank": {
   "qs": "72",
   "the": "=53",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=2",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 },
 {
  "id": "wisc",
  "name": "UW-Madison",
  "full": "University of Wisconsin-Madison",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "On or before Jan 31, 2027 (materials by Nov 9)",
    "notifyDate": "2027-01-31"
   },
   {
    "type": "RD",
    "deadline": "2027-01-15",
    "notify": "On or before Mar 31, 2027 (materials by Jan 22)",
    "notifyDate": "2027-03-31"
   }
  ],
  "earlyRule": "Non-binding Early Action (Nov 1) with decision by Jan 31; Regular Jan 15; reply by May 1.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": false,
  "meritIntl": "King-Morgridge Scholars (full four-year, need-based, six per year, only for Africa/Caribbean/Latin America/South Asia/Southeast Asia, so not Korea); Western Union $1,000 one-time for underrepresented countries.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "SAT/ACT optional through the spring 2028 term; not submitting does not hurt review; no superscore.",
  "english": "TOEFL iBT 80 (4.5 for tests from Jan 21, 2026), IELTS 6.5, Duolingo 115; waived only if English was the language of instruction all four secondary years.",
  "cogsci": "No undergraduate Cognitive Science major or certificate found; closest are Psychology, Neurobiology, Computer Sciences (all L&S).",
  "interview": "None (only dance and music auditions).",
  "url": "https://admissions.wisc.edu/apply-as-a-freshman/",
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No undergraduate Cognitive Science major or certificate found."
   },
   "neuro": {
    "offered": "major",
    "name": "Neurobiology (BA/BS)",
    "college": "College of Letters & Science",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Guide lists no application, GPA or credit prerequisites; declare with an advisor by 86 credits."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (BA/BS)",
    "college": "College of Letters & Science",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "Declare after PSYCH 202 (or equivalent) with C or better via department form."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Sciences (BA/BS)",
    "college": "College of Letters & Science",
    "restricted": "open",
    "admitRate": null,
    "admitNote": null,
    "note": "No direct admit; declare after COMP SCI 300, MATH 222 and BC in intro programming with 2.25 GPA on eligible courses; no cap found. Computer Engineering is in College of Engineering."
   },
   "bio": {
    "offered": "major",
    "name": "Biology",
    "college": "College of Letters & Science",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Cannot combine with Neurobiology. Pre-med is advising, not a major. Declaration rules not confirmed."
   }
  },
  "sources": [
   "https://www.wisconsin.edu/education-reports-statistics/wp-content/uploads/sites/364/2026/03/MSN_202526_Admissions.pdf",
   "https://admissions.wisc.edu/deadlines/",
   "https://admissions.wisc.edu/required-materials/",
   "https://admissions.wisc.edu/international/",
   "https://admissions.wisc.edu/international-scholarships/",
   "https://financialaid.wisc.edu/cost-of-attendance/",
   "https://www.wisc.edu/about/facts/"
  ],
  "uncertain": [
   "stats: from IPEDS ADM 2025-26 (UW System PDF), not CDS; CDS 2025-26 is Excel on Box.",
   "stats.intl uses IPEDS 'U.S. Nonresident'.",
   "stats.satEBRW/Math percentiles apply only to the 12% who submitted SAT.",
   "plans: dates not labeled with a cycle year on page; assumed 2026-27.",
   "majors.bio: declaration rules not confirmed; cs 'open' reflects eligibility thresholds without cap.",
   "english TOEFL 4.5 new-scale threshold looks unusual per page; confirm."
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://www.wisconsin.edu/education-reports-statistics/wp-content/uploads/sites/364/2026/03/MSN_202526_Admissions.pdf",
   "applied": 69640,
   "admitted": 30164,
   "admitRate": 43.3,
   "ed": null,
   "ea": {
    "applied": 53981,
    "admitted": 20050,
    "rate": 37.1
   },
   "intl": {
    "applied": 12316,
    "admitted": 4582,
    "rate": 37.2
   },
   "satSubmitPct": 12,
   "satEBRW": [
    680,
    710,
    740
   ],
   "satMath": [
    700,
    740,
    780
   ],
   "firstYearTotal": 8495,
   "intlFirstYear": 490,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": 45518,
    "fees": null,
    "housing": 14994,
    "total": 66152,
    "source": "https://financialaid.wisc.edu/cost-of-attendance/",
    "note": "Nonresident incoming first-year on campus; tuition figure is tuition and fees combined. Total excludes $330 new student fee and $68 loan fees; includes books/computer $1,800, personal $2,618, transportation $1,222.",
    "direct": 66152
   }
  },
  "policy": {
   "superscore": false,
   "selfReport": null,
   "scoreChoice": "Test-optional; only top composite considered if submitted; choice on application is final.",
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "Source is IPEDS ADM 2025-26 (Fall 2025), not the CDS (CDS posted only as Excel on Box); 12% SAT, 29% ACT submitted; percentile figures are for submitters. International = IPEDS 'U.S. Nonresident'."
  },
  "req": {
   "application": "Common App or UW (Universities of Wisconsin) Application.",
   "fee": 80,
   "feeWaiver": "Available for financial hardship (in application or by form).",
   "teacherRecs": {
    "required": 1,
    "optionalExtra": 1,
    "note": "One academic letter (teacher, counselor or professor) required; one optional second letter."
   },
   "counselorRec": null,
   "midYearReport": null,
   "interview": "None",
   "interviewDeadline": null,
   "supplements": [
    {
     "type": "essay",
     "required": true,
     "count": 2,
     "words": null,
     "chars": null,
     "choose": null,
     "summary": "One Common App/UW essay plus a why-UW-Madison and why-your-major essay."
    }
   ],
   "supplementsUrl": "https://admissions.wisc.edu/required-materials/",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": "Common App or UW Application",
   "sources": [
    "https://admissions.wisc.edu/required-materials/",
    "https://admissions.wisc.edu/deadlines/",
    "https://admissions.wisc.edu/international/",
    "https://admissions.wisc.edu/international-scholarships/"
   ],
   "uncertain": [
    "Essay word limits not stated on page."
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Madison",
   "state": "WI",
   "lat": 43.0766,
   "lon": -89.4125,
   "region": "mw",
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "pub": "partial: EA Nov 1 (materials Nov 9, decision by Jan 31) and RD Jan 15 (materials Jan 22, decision by Mar 31) confirmed on admissions.wisc.edu/deadlines (cycle year inferred). COA page confirmed: tuition and fees 45,518, housing/meals 14,994, personal 2,618, transportation 1,222, computer-adjusted books 1,800 (collector total 66,152 excludes $68 loan fee and $330 new student fee; official page total without computer is 65,120). Admissions stats are IPEDS not CDS; not re-read"
  },
  "rank": {
   "qs": "=131",
   "the": "=53",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=3",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 },
 {
  "id": "umn",
  "name": "UMN Twin Cities",
  "full": "University of Minnesota, Twin Cities",
  "public": true,
  "commonApp": true,
  "plans": [
   {
    "type": "EA",
    "deadline": "2026-11-01",
    "notify": "Early Action I: by Jan 31, 2027",
    "notifyDate": "2027-01-31"
   },
   {
    "type": "RD",
    "deadline": "2027-01-01",
    "notify": "By Mar 31, 2027",
    "notifyDate": "2027-03-31"
   }
  ],
  "earlyRule": "Two early action deadlines (Nov 1, Dec 1) and a Jan 1 regular deadline; decisions by Jan 31, Feb 28, Mar 31. Also: another EA round 2026-12-01.",
  "ed2Elsewhere": null,
  "publicEA": null,
  "intlAid": "limited",
  "meetsNeed": false,
  "meritIntl": "Global Excellence Scholarship: tuition waiver of $5,000-$20,000 per year for up to four years, merit-based, automatic if applied by deadline and Certification of Finances submitted.",
  "aidForms": [],
  "aidDeadlines": {
   "early": null,
   "ed2": null,
   "rd": null
  },
  "testing": "optional",
  "testingNote": "ACT/SAT not required for freshmen (sources differ on end date: fall 2027 vs fall 2029).",
  "english": "TOEFL iBT 79, IELTS Academic 6.5, Duolingo 110 listed as benchmarks (also PTE, C1 Advanced); some countries exempt.",
  "cogsci": "No undergraduate Cognitive Science major or minor at Twin Cities (graduate minor and PhD only; B.A. exists at UMN Duluth).",
  "interview": "None found.",
  "url": "https://admissions.tc.umn.edu/admissions/international-freshman-admissions-timeline",
  "majors": {
   "cogsci": {
    "offered": "none",
    "name": null,
    "college": null,
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "No undergraduate Cognitive Science at Twin Cities; UMN Duluth offers B.A. and minor."
   },
   "neuro": {
    "offered": "major",
    "name": "Neuroscience (B.S.)",
    "college": "College of Biological Sciences",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": null,
    "note": "Entrance requirement after admission to CBS (catalog snippet: 60+ credits, 3.25 GPA); verify."
   },
   "psych": {
    "offered": "major",
    "name": "Psychology (B.A./B.S.)",
    "college": "College of Liberal Arts",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Admission rules for Psychology not confirmed."
   },
   "cs": {
    "offered": "major",
    "name": "Computer Science (B.S. in CSE; B.A. in CLA)",
    "college": "College of Science and Engineering / College of Liberal Arts",
    "restricted": "apply-later",
    "admitRate": null,
    "admitNote": "CSE says nearly 90% of internal applicants admitted in recent cycles; not a first-year admit rate.",
    "note": "Incoming students typically start as pre-majors and apply after prerequisites; 3.2 technical GPA gives guaranteed fall admission."
   },
   "bio": {
    "offered": "major",
    "name": "Biology (CBS)",
    "college": "College of Biological Sciences",
    "restricted": null,
    "admitRate": null,
    "admitNote": null,
    "note": "Pre-med is advising, not a major. Major details not confirmed."
   }
  },
  "sources": [
   "https://idr.umn.edu/sites/idr.umn.edu/files/cds_2025_2026_tc.pdf",
   "https://admissions.tc.umn.edu/admissions/international-freshman-admissions-timeline",
   "https://admissions.tc.umn.edu/apply/application-checklist/application-checklist-freshman",
   "https://admissions.tc.umn.edu/global-excellence-scholarships",
   "https://onestop.umn.edu/finances/costs/cost-attendance",
   "https://pub.umn.edu/oem/Undergraduate-Enrollment-Report-26/files/Accessible-OEM-Report.pdf"
  ],
  "uncertain": [
   "All umn.edu admissions pages returned 403 to WebFetch; values taken from WebSearch snippets of official pages.",
   "stats: CDS C values null; firstYearTotal 7,180 and intl 541 from 2025-26 OEM enrollment report snippet.",
   "english benchmarks from older/international factsheet; timeline page says program minimums apply.",
   "COA numbers conflict between OneStop, Admissions and Carlson pages.",
   "majors: neuro/cs entry rules from search snippets; psych/bio unconfirmed."
  ],
  "stats": {
   "cdsYear": "2025-2026",
   "source": "https://idr.umn.edu/sites/idr.umn.edu/files/cds_2025_2026_tc.pdf",
   "applied": null,
   "admitted": null,
   "admitRate": null,
   "ed": null,
   "ea": null,
   "intl": {
    "applied": null,
    "admitted": null
   },
   "satSubmitPct": null,
   "satEBRW": null,
   "satMath": null,
   "firstYearTotal": 7180,
   "intlFirstYear": 541,
   "intlAidCount": null,
   "intlAidAvg": null,
   "coa": {
    "year": "2026-27",
    "tuition": 43348,
    "fees": null,
    "housing": 15552,
    "total": 63762,
    "source": "https://onestop.umn.edu/finances/costs/cost-attendance",
    "note": "Nonresident living in residence hall; tuition figure is tuition and fees combined; CSE and Carlson add $3,010 per year; Carlson page lists different room and board.",
    "direct": 63762
   }
  },
  "policy": {
   "superscore": null,
   "selfReport": null,
   "scoreChoice": null,
   "lastSatEarly": null,
   "lastSatRD": null,
   "note": "CDS PDF returned 403 so C-section values left null; about 50% of fall 2025 admits submitted no test score; enrolled SAT composite middle 50% 1310-1460 per enrollment report."
  },
  "req": {
   "application": "Common App or Golden Gopher Application (one only) plus Self-Reported Academic Record.",
   "fee": 55,
   "feeWaiver": "Waivable for financial need or specific programs; applicability to international applicants not confirmed.",
   "teacherRecs": {
    "required": 0,
    "optionalExtra": null,
    "note": "No letters of recommendation required."
   },
   "counselorRec": false,
   "midYearReport": null,
   "interview": "None",
   "interviewDeadline": null,
   "supplements": [],
   "supplementsUrl": "https://admissions.tc.umn.edu/apply/application-checklist/application-checklist-freshman",
   "portfolio": null,
   "cssCode": null,
   "netPriceUrl": null,
   "netPriceIntl": null,
   "appFormat": "Common App or Golden Gopher Application",
   "sources": [
    "https://admissions.tc.umn.edu/apply/application-checklist/application-checklist-freshman"
   ],
   "uncertain": [
    "Essays stated as not required (search snippet); admissions pages blocked WebFetch."
   ]
  },
  "group": "public",
  "dream": false,
  "checked": "2026-11-26",
  "loc": {
   "city": "Minneapolis",
   "state": "MN",
   "lat": 44.974,
   "lon": -93.2277,
   "region": "mw",
   "lx": 11,
   "ly": -7,
   "la": "start"
  },
  "verified": {
   "pub": "partial: EA I Nov 1 -> by Jan 31, EA II Dec 1 -> by Feb 28 (another page says Feb 15), RD Jan 1 -> by Mar 31 per umn.edu search results (umn.edu pages 403 to WebFetch). CDS PDF 403, so C1 still unfilled; third-party (esslo) transcription: applied about 43,929, admitted about 34,648, enrolled 7,180 (matches OEM report), intl 7,903 / 6,040; CollegeData lists different numbers (21,161 applicants) so definition unresolved. COA not re-verified (onestop 403)"
  },
  "rank": {
   "qs": "=255",
   "the": "88",
   "qsSource": "https://xuanxiao.org/en/rankings/qs/world-university-rankings/2027?page=6",
   "theSource": "https://xuanxiao.org/en/rankings/the/world-university-rankings/2027?page=2",
   "note": null
  }
 }
];
window.INTL_OPTS = [
 {
  "id": "hku",
  "name": "University of Hong Kong",
  "country": "Hong Kong",
  "city": "Hong Kong",
  "cycle": "entry 2027 values (2028 not yet published)",
  "appOpen": "2026-09-23",
  "deadline": "2026-11-25",
  "deadlineNote": "first-round deadline (noon HKT); later applications rolling until final close 2027-08-25",
  "programs": "Psychology (BSocSc), Cognitive Science and Neuroscience majors (listed in a 2024 HKU brochure, not re-verified for 2027), BSc Applied Artificial Intelligence (2027 sheet); English-medium",
  "apAccepted": "Yes. Lower boundary: 3 AP subjects at grade 3+ plus SAT superscore 1380+, or 3 AP plus 2 more AP at grade 3+ (AP English Lang, Seminar, Research do not count); competitive programmes expect higher",
  "english": "IELTS 6.5 (W and S >= 6.0), TOEFL iBT 5.0 new scale (W and S >= 5.0) or 95 legacy (W and S >= 25), or SAT Reading and Writing >= 610",
  "cost": "HK$224,000/yr (Arts, Social Sciences, Business etc.) or HK$249,000/yr (Science, Engineering, Computing) for the 2026-27 cohort",
  "scholarship": "HKU Entrance Scholarships: all applicants considered automatically, no separate application; top award up to full tuition waiver plus accommodation and living allowance (per HKU search-result text)",
  "notes": "The first-round deadline is 2026-11-25 and the 2028-entry cycle should be mirrored about a year later, so plan for Sept to Nov 2027.",
  "url": "https://admissions.hku.hk/apply/international-qualifications",
  "sources": [
   "https://admissions.hku.hk/apply/international-qualifications",
   "https://admissions.hku.hk/apply/international-qualifications/english-language-requirement",
   "https://admissions.hku.hk/node/2303",
   "https://www.hku.hk/en/admission-aid/tuition-fee-scholarships"
  ],
  "uncertain": [
   "cost: 2027 non-local rate may be about HK$250,000 for non-STEM per a 2027 HKU sheet snippet; PDF unreadable, unconfirmed",
   "programs: Cognitive Science and Neuroscience majors not confirmed on a 2027 page",
   "scholarship: coverage wording came from a search summary of an HKU PDF, not read directly",
   "apAccepted: node/2303 appeared to be the US-qualification page; programme-specific scores not read"
  ]
 },
 {
  "id": "hkust",
  "name": "Hong Kong University of Science and Technology",
  "country": "Hong Kong",
  "city": "Hong Kong (Clear Water Bay)",
  "cycle": "entry 2027 values (2028 not yet published)",
  "appOpen": "2026-10-02",
  "deadline": "2026-11-25",
  "deadlineNote": "priority round (early offers late Dec 2026); rolling from 2026-11-26; system closes 2027-06-30",
  "programs": null,
  "apAccepted": "Yes (SAT/ACT/AP accepted). Business School benchmark SAT 1350 to 1510 plus 5s in two AP, or five AP subjects; Engineering needs 2 AP with SAT/ACT or 5 AP without",
  "english": "TOEFL, IELTS Academic, SAT, AP and other options accepted; minimums not stated on page read",
  "cost": null,
  "scholarship": "Merit (no separate application): University Admissions Scholarship for Other Qualifications Holders, Global Learners Scholarship. Application-based: Future Leaders Award, Beyond Academic Admissions Scholarship (BAAS), priority-round deadline 2026-11-25. Amounts not stated",
  "notes": "Strong AI and engineering, but a cognitive science or psychology major was not verified, so check the programme list.",
  "url": "https://join.hkust.edu.hk/admissions/international-qualifications",
  "sources": [
   "https://join.hkust.edu.hk/admissions/international-qualifications",
   "https://join.hkust.edu.hk/intlscholarships"
  ],
  "uncertain": [
   "programs: not read from any official page",
   "cost: tuition on a separate PDF not read",
   "english: minimum scores not read",
   "apAccepted: only school-level rules from search snippets (Business, Engineering)",
   "scholarship: amounts not stated"
  ]
 },
 {
  "id": "cuhk",
  "name": "Chinese University of Hong Kong",
  "country": "Hong Kong",
  "city": "Hong Kong (Shatin)",
  "cycle": "entry 2027 values (2028 not yet published)",
  "appOpen": "2026-10-02",
  "deadline": "2027-01-07",
  "deadlineNote": "regular round; advance offer round deadline 2026-11-12 (Medicine excluded from advance round)",
  "programs": null,
  "apAccepted": "Yes. SAT, ACT, AP, IB, A-level and others considered; minimum scores on a separate CUHK page not read. CUHK code 5690 for SAT and AP",
  "english": "General language requirement applies; scores not read",
  "cost": null,
  "scholarship": null,
  "notes": "A Korean citizen at a Korean school is a non-local applicant, so the HK$500 application fee and the two-round structure apply.",
  "url": "https://admission.cuhk.edu.hk/application/overseas-other-qualifications-non-local-international-team/application-guides/",
  "sources": [
   "https://admission.cuhk.edu.hk/application/overseas-other-qualifications-non-local-international-team/application-guides/",
   "https://admission.cuhk.edu.hk/application/non-jupas/important-dates/"
  ],
  "uncertain": [
   "appOpen: 2026-10-02 comes from the Non-JUPAS Local dates page; the non-local/international page did not list an opening date",
   "programs: not read",
   "cost: not read",
   "scholarship: not read",
   "english: not read"
  ]
 },
 {
  "id": "nus",
  "name": "National University of Singapore",
  "country": "Singapore",
  "city": "Singapore",
  "cycle": "AY2026/27 values (AY2027/28 not yet published; usually opens early December)",
  "appOpen": "2025-12-03",
  "deadline": "2026-02-23",
  "deadlineNote": "AY2026/27 international qualifications window 3 Dec 2025 to 23 Feb 2026; most outcomes by July",
  "programs": null,
  "apAccepted": "Yes. Either at least 5 AP subjects, or SAT plus at least 3 AP (SAT minimums 600 Reading and Writing, 650 Math, scores sent via College Board code 3720); min AP score 3; AP Calculus BC required for all programmes except Law",
  "english": null,
  "cost": null,
  "scholarship": null,
  "notes": "The deadline is around Feb 2028 for this student, which is later than Oct to Nov rounds elsewhere, and AP Calculus BC is required.",
  "url": "https://www.nus.edu.sg/oam/admissions/international-qualifications-for-foreigners",
  "sources": [
   "https://www.nus.edu.sg/oam/admissions/international-qualifications-for-foreigners",
   "https://nus.edu.sg/oam/apply-to-nus/application",
   "https://nus.edu.sg/oam/docs/default-source/default-document-library/standardised_test.pdf"
  ],
  "uncertain": [
   "appOpen/deadline: dates come from official NUS page search summaries; the pages themselves would not load for reading",
   "programs: not read from an official page",
   "english: not read",
   "cost: not read",
   "scholarship: not read",
   "apAccepted: from a Dec 2025 NUS standardised-test PDF search summary"
  ]
 },
 {
  "id": "ntu",
  "name": "Nanyang Technological University",
  "country": "Singapore",
  "city": "Singapore",
  "cycle": "AY2027 values (applications open 2026-10-15; AY2028 not yet published)",
  "appOpen": "2026-10-15",
  "deadline": "2027-03-19",
  "deadlineNote": "reported closing date for American HS Diploma/AP applicants; AP scores must reach NTU by 2027-07-15",
  "programs": null,
  "apAccepted": "Yes. At least 5 AP tests scored 4 or 5 (3 for Singapore citizens/PR); AP Calculus BC required for Engineering, Computing and most Science; AP Physics C if Physics required; SAT not required",
  "english": "Only if English not medium of instruction: IELTS 6.5, TOEFL 90, SAT 1250 with R and W 600, ACT 30/30/7, etc.",
  "cost": null,
  "scholarship": null,
  "notes": "Five 4 or 5 AP scores are a heavy requirement for a Korean international-track student.",
  "url": "https://www.ntu.edu.sg/admissions/undergraduate/admissions/general-admission-requirements/international-qualifications/american-high-school-diploma",
  "sources": [
   "https://www.ntu.edu.sg/admissions/undergraduate/admissions/general-admission-requirements/international-qualifications/american-high-school-diploma",
   "https://www.ntu.edu.sg/admissions/undergraduate/important-links/important-dates"
  ],
  "uncertain": [
   "deadline: 2027-03-19 came from a search summary; the AP page itself listed no open/close dates",
   "programs: not verified on an official page",
   "cost: not read",
   "scholarship: not read"
  ]
 },
 {
  "id": "uoft",
  "name": "University of Toronto (incl. Lester B. Pearson Scholarship)",
  "country": "Canada",
  "city": "Toronto",
  "cycle": "fall 2027 entry values (fall 2028 not yet published)",
  "appOpen": "late September 2026 (OUAC)",
  "deadline": "2027-01-15",
  "deadlineNote": "final OUAC deadline; early consideration 2026-11-07; supporting documents around 2027-02-01. Pearson: school nomination 2026-10-09, OUAC 2026-10-16, scholarship application 2026-11-06",
  "programs": null,
  "apAccepted": null,
  "english": null,
  "cost": null,
  "scholarship": "Lester B. Pearson International Scholarship: about 37 per year, tuition, books, incidental fees and full residence for four years; school nominates one student per year, applicant must be in final year and apply to U of T",
  "notes": "Pearson requires a school nomination in early October of senior year, so ask the school in Sept 2027 whether it participates.",
  "url": "https://future.utoronto.ca/scholarships/lester-b-pearson-international-scholarship-program",
  "sources": [
   "https://future.utoronto.ca/scholarships/lester-b-pearson-international-scholarship-program"
  ],
  "uncertain": [
   "deadline/appOpen: general dates came from a search summary of U of T pages; the bulletin PDF was unreadable",
   "programs: not verified",
   "apAccepted: not read",
   "english: not read",
   "cost: not read",
   "scholarship: a Pearson applicant must be nominated by a school that is allowed to nominate; whether the student's school participates is unknown"
  ]
 },
 {
  "id": "ubc",
  "name": "University of British Columbia (incl. International Scholars Program)",
  "country": "Canada",
  "city": "Vancouver",
  "cycle": "September 2027 entry values (2028 not yet published)",
  "appOpen": "late November 2026 (EducationPlannerBC)",
  "deadline": "2026-12-02",
  "deadlineNote": "International Scholars Program deadline (12:00 PCT); general UBC admission deadline not verified",
  "programs": null,
  "apAccepted": null,
  "english": "TOEFL iBT 90 overall (Reading 22, Listening 22, Writing 21, Speaking 21) in one sitting; scores dated from 2025-01-01 for 2027/28 session",
  "cost": null,
  "scholarship": "International Scholars Program (includes Karen McKellin International Leader of Tomorrow Award, up to full cost of program and living for those with significant financial need, plus Wehrung and International Impact awards); needs nominator and teacher referee; school may nominate up to two students",
  "notes": "Application is mandatory within a short window (documents due by 31 January), and the awardee needs significant financial need and all-A grades.",
  "url": "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/",
  "sources": [
   "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/international-scholars/",
   "https://you.ubc.ca/applying-ubc/requirements/english-language-competency/"
  ],
  "uncertain": [
   "deadline: UBC general application deadline was not found on an official page; Dec 2 is the ISP deadline only",
   "appOpen: the 'late November' wording is from the ISP page timeline",
   "apAccepted: not read",
   "cost: not read",
   "programs: not verified",
   "english: from a search summary of the UBC English page",
   "scholarship: eligibility lists study permit status; confirm how it applies from overseas"
  ]
 },
 {
  "id": "mcgill",
  "name": "McGill University",
  "country": "Canada",
  "city": "Montreal",
  "cycle": "fall 2027 entry values (fall 2028 not yet published)",
  "appOpen": null,
  "deadline": "2027-01-15",
  "deadlineNote": "application deadline; transcripts and supporting documents 2027-03-01; Major Entrance Scholarship application 2027-01-21",
  "programs": null,
  "apAccepted": "AP results must be declared on the application; credit policies vary by faculty. SAT/ACT optional for US applicants fall 2027 per FAQ; policy for Korean applicants not confirmed",
  "english": null,
  "cost": null,
  "scholarship": "Major Entrance Scholarship (separate application by 2027-01-21); amounts not verified",
  "notes": "Official deadlines pages returned errors, so the dates come from McGill search summaries and need a recheck.",
  "url": "https://www.mcgill.ca/undergraduate-admissions/apply/deadlines",
  "sources": [
   "https://www.mcgill.ca/undergraduate-admissions/apply/deadlines"
  ],
  "uncertain": [
   "all dates: deadlines page returned 403; dates came from McGill search-result summaries (US applicant FAQ and a 2026-27 brochure)",
   "appOpen: not found",
   "apAccepted: Korean-school requirements not read",
   "english: not read",
   "cost: not read",
   "programs: not verified"
  ]
 },
 {
  "id": "yonsei-uic",
  "name": "Yonsei University, Underwood International College (UIC)",
  "country": "South Korea",
  "city": "Seoul",
  "cycle": "2028 admission (Korean-citizen route; apply autumn 2027, matriculate March 2028)",
  "appOpen": "2027-09-20 (reported start of 2028 early admission, per a news article)",
  "deadline": null,
  "deadlineNote": "exact application close date not published; 2028 early-admission period start only from a news report",
  "programs": "UIC majors include Life Science and Biotechnology, Bio-Convergence; Cognitive Science and Psychology are not among the 16 listed majors; instruction language not stated on the page read",
  "apAccepted": "UIC states that the international track is only for those whose parents and applicant are all non-Korean by passport, so a Korean citizen does not qualify. Korean citizens apply through the regular Yonsei Seoul early-admission tracks (UIC seats listed under 학생부종합 종합인재형/탐구인재형)",
  "english": null,
  "cost": null,
  "scholarship": null,
  "notes": "For a Korean citizen the AP/SAT international route is closed, so UIC means the Korean 학생부종합 track and a Korean-style application.",
  "url": "https://uic.yonsei.ac.kr/main/admission.php?mid=m04_05",
  "sources": [
   "https://uic.yonsei.ac.kr/main/admission.php?mid=m04_05",
   "https://uic.yonsei.ac.kr/",
   "https://www2.yonsei.ac.kr/entrance/plan/2028_plan.pdf"
  ],
  "uncertain": [
   "appOpen: from a news article (hangyo.com) citing 대교협, not an official admission page",
   "deadline: not found",
   "apAccepted: whether international-track rules could ever apply is stated as 'not considered an International Student' only; no explicit bar found",
   "programs: 2028 UIC seat counts (humanities/social 144, life sci/eng 15) came from a search summary of the 2028 plan; PDF unreadable",
   "cost: not read",
   "scholarship: not read"
  ]
 },
 {
  "id": "kaist",
  "name": "KAIST",
  "country": "South Korea",
  "city": "Daejeon",
  "cycle": "2027 admission values (2028 not yet published)",
  "appOpen": null,
  "deadline": null,
  "deadlineNote": "2027 early-admission application dates not found",
  "programs": null,
  "apAccepted": null,
  "english": null,
  "cost": null,
  "scholarship": null,
  "notes": "KAIST is science and engineering focused, so a cognitive science route would be Brain and Cognitive Sciences or AI.",
  "url": "https://admission.kaist.ac.kr/undergraduate/admission/rsub/2027",
  "sources": [
   "https://admission.kaist.ac.kr/undergraduate/admission/rsub/2027"
  ],
  "uncertain": [
   "appOpen/deadline: not found on the page",
   "programs: no major list read",
   "apAccepted: stated from seat table; qualification rules not read",
   "cost: not read",
   "scholarship: not read",
   "english: not read"
  ]
 }
];
window.SUMMER = [
 {
  "id": "rsi",
  "name": "Research Science Institute (RSI)",
  "host": "CEE, at MIT (2027 also at Stanford)",
  "kind": "selective",
  "field": "STEM research mentorship",
  "format": "residential",
  "where": "Cambridge, MA (MIT); Stanford, CA added for 2027",
  "intlOk": true,
  "intlNote": "Internationals apply only through a participating country's own selection process, arranged via CEE; check with CEE whether South Korea participates. US citizens abroad apply directly.",
  "eligibility": "Current high school juniors (grade 11); seniors not eligible. No age limits stated on the page.",
  "deadline2027": "2026-12-11",
  "deadlineNote": "US applications due 11:59pm ET Dec 11, 2026, no late applications; international countries set their own schedules.",
  "deadline2026": null,
  "dates2027": null,
  "dates2026": null,
  "cost": "free",
  "aid": "Cost-free to all admitted students (CEE states it is the first cost-free summer science program); applies to internationals who are admitted.",
  "selectivity": "~100 students at MIT (+50 at Stanford in 2027); rate not published",
  "summary": "Students take one week of intensive STEM classes, then complete a five-week mentored research internship, and finish with a week of presentations.",
  "url": "https://www.cee.org/research-science-institute",
  "sources": [
   "https://www.cee.org/research-science-institute",
   "http://www.cee.org/apply-rsi"
  ],
  "uncertain": [
   "intlOk: whether South Korea is a participating country is not stated on the page",
   "dates2027: not published on the pages read",
   "deadline2026: not found"
  ],
  "verified": "partial: deadline Dec 11 2026 and grade 11 confirmed; page does not say whether South Korea participates (intlOk unconfirmed, verify with CEE)"
 },
 {
  "id": "ssp",
  "name": "Summer Science Program (SSP)",
  "host": "Summer Science Program (nonprofit)",
  "kind": "selective",
  "field": "Astrophysics, biochemistry, genomics, chemistry research",
  "format": "residential",
  "where": "US university campuses (host campus list not read)",
  "intlOk": true,
  "intlNote": "International applicants accepted (anyone attending school outside the US or not a US citizen/PR); must submit English proficiency scores; international decisions mid-March.",
  "eligibility": "Current high school juniors (grade 11), age at least 15 and not yet 19 during program; relevant coursework completed by June.",
  "deadline2027": null,
  "deadlineNote": "Deadlines to be announced in early December 2026; applications open Jan 4, 2027 10am ET.",
  "deadline2026": null,
  "dates2027": "Five weeks, begins mid-June 2027",
  "dates2026": null,
  "cost": "2026 fee USD 11,800 (2027 fee to be posted Dec 2026)",
  "aid": "Covers 100% of demonstrated need; need does not affect admission. International applicants can request aid at admission (income documents translated to English); aid can include airfare and a stipend. Over 50% of 2026 participants received aid.",
  "selectivity": "~700 admitted in 2026; applicant count not published",
  "summary": "Students spend five weeks on a college campus doing a team-based, hands-on research project in a chosen science track.",
  "url": "https://ssp.org/",
  "sources": [
   "https://ssp.org/",
   "https://ssp.org/getting-started/",
   "https://ssp.org/application/",
   "https://ssp.org/fees-financial-aid/",
   "https://ssp.org/faqs/"
  ],
  "uncertain": [
   "deadline2027: not announced until early Dec 2026",
   "dates2027: only 'mid-June' start given",
   "host campuses not read",
   "deadline2026: not found"
  ],
  "verified": "partial: eligibility, Jan 4 2027 opening, intl aid confirmed; 2027 deadline still unpublished (early Dec 2026)"
 },
 {
  "id": "yygs",
  "name": "Yale Young Global Scholars (YYGS)",
  "host": "Yale University",
  "kind": "paid",
  "field": "Science and technology, global issues, law/politics/economics (IST, SGC, PLE)",
  "format": "residential",
  "where": "New Haven, CT",
  "intlOk": true,
  "intlNote": "Accepts applications from all countries; need-based aid open to students from all countries.",
  "eligibility": "Current high school sophomore or junior (or international equivalent); age 16-18 by July 18, 2027 (no exceptions); graduating 2028 or 2029 (Northern Hemisphere); first-time participants only.",
  "deadline2027": "2027-01-06",
  "deadlineNote": "Regular Decision Jan 6, 2027 11:59pm ET; Early Action was Oct 15, 2026 (passed). Application fee $85 EA / $100 RD, waivers available.",
  "deadline2026": null,
  "dates2027": "Session I Jun 20-Jul 2; Session II Jul 4-16; Session III Jul 18-30 (one two-week session)",
  "dates2026": null,
  "cost": "USD 7,500 tuition (travel not included)",
  "aid": "Need-based aid for domestic and international students, up to full tuition; students pay own travel.",
  "selectivity": "Not published (Yale reports 10,000+ applications in recent years)",
  "summary": "Students attend one two-week interdisciplinary session on Yale's campus with lectures, seminars, and a group project.",
  "url": "https://globalscholars.yale.edu/",
  "sources": [
   "https://globalscholars.yale.edu/",
   "https://globalscholars.yale.edu/eligibility",
   "https://globalscholars.yale.edu/application-deadlines",
   "https://globalscholars.yale.edu/tuition",
   "https://globalscholars.yale.edu/apply/"
  ],
  "uncertain": [
   "deadline2026: not given on pages read",
   "selectivity: not published; the 10,000+ figure comes from a search-result headline, not read directly",
   "age rule: must be 16-18 by July 18, 2027, check birth date"
  ],
  "verified": "partial: deadlines Oct 15 2026 / Jan 6 2027 confirmed; eligibility/tuition/aid not re-read on this pass"
 },
 {
  "id": "rockefeller-ssrp",
  "name": "Summer Science Research Program (SSRP)",
  "host": "The Rockefeller University (RockEDU)",
  "kind": "selective",
  "field": "Biomedical laboratory research",
  "format": "residential",
  "where": "New York, NY",
  "intlOk": true,
  "intlNote": "FAQ says students outside the Tri-State Area, including outside the US, are encouraged to apply; no housing, travel help, or visa help provided.",
  "eligibility": "Current high school junior or senior; at least 16 years old at program start; must attend the entire seven weeks (about 35 hrs/week).",
  "deadline2027": "2027-01-04",
  "deadlineNote": "Application and recommendation letters due Jan 4, 2027 5:00pm ET; Zoom interviews in March, decisions in April.",
  "deadline2026": null,
  "dates2027": "Jun 21-Aug 5, 2027",
  "dates2026": null,
  "cost": "free (application free; no housing provided, so living costs in NYC are on the student)",
  "aid": "Program is free; stipends are not guaranteed but may go to students with financial hardship. No housing assistance, so international students must fund NYC lodging.",
  "selectivity": null,
  "summary": "Students work full time in a Rockefeller University laboratory on a mentored biomedical research project for seven weeks.",
  "url": "https://www.rockefeller.edu/outreach/ssrp/",
  "sources": [
   "https://www.rockefeller.edu/outreach/ssrp/",
   "https://www.rockefeller.edu/outreach/ssrp/faqs/"
  ],
  "uncertain": [
   "selectivity: not published on pages read",
   "housing for a non-local student is the main hurdle and cost is not quantified",
   "deadline2026: not found"
  ],
  "verified": "partial: deadline Jan 4 2027 5pm ET, dates, age, junior/senior confirmed; main page silent on internationals and cost (FAQ not re-read)"
 },
 {
  "id": "pioneer",
  "name": "Pioneer Research Institute (Pioneer Research Program)",
  "host": "Pioneer Academics",
  "kind": "paid",
  "field": "Online mentored research across many fields (incl. psychology, neuroscience, CS/AI)",
  "format": "online",
  "where": "online",
  "intlOk": true,
  "intlNote": "Online and globally accessible; no separate international rules. Need-based scholarships only in countries where need can be assessed or via partner nonprofits.",
  "eligibility": "High school students (grade/age requirements not stated on page; marketed for grades 9-12); counselor assessment, transcript, essays, video interview and timed writing task required.",
  "deadline2027": null,
  "deadlineNote": "Spring-through-Summer term final deadline 11:59pm EST Dec 13, 2026 (page labels term as 2026, banner says 2027 cycle; confirm). Summer term deadline to be released in 2nd week of January.",
  "deadline2026": null,
  "dates2027": null,
  "dates2026": null,
  "cost": "USD 7,465 tuition (plus lab/materials fee up to 2%)",
  "aid": "Limited need-based scholarships requiring verified family need; availability depends on country. Full-scholarship students pay a refundable deposit.",
  "selectivity": null,
  "summary": "Students complete a college-level, professor-mentored research paper online and earn four college credits.",
  "url": "https://pioneeracademics.com/admission/",
  "sources": [
   "https://pioneeracademics.com/admission/"
  ],
  "uncertain": [
   "deadline2027: Summer term deadline not announced; Dec 13 date's year is ambiguous on the page",
   "dates2027: no program dates on page (a search summary said June-July 2027, not confirmed)",
   "whether South Korea qualifies for need-based aid is unknown",
   "selectivity: not given"
  ],
  "verified": "partial: Dec 13 2026 deadline (year labeling ambiguous on page), tuition 7,465 confirmed; no grade/age rules; summer-term deadline unpublished"
 },
 {
  "id": "wolfram-wsrp",
  "name": "Wolfram High School Summer Research Program",
  "host": "Wolfram Research (at Bentley University)",
  "kind": "paid",
  "field": "Computational research, AI, data science, STEM projects",
  "format": "residential",
  "where": "Waltham/Boston area, MA (Bentley University)",
  "intlOk": true,
  "intlNote": "International students accepted per official admission page.",
  "eligibility": "Any STEM background; must be under 18 at the end of the program (Jul 17, 2027). Coding experience not required.",
  "deadline2027": "2027-03-15",
  "deadlineNote": "Regular Decision Mar 15; Early Decision Jan 18 (results by Feb 15). Page does not print the year; inferred as 2027 because it lists June 28-July 17, 2027. Need-based aid requests must come with the application.",
  "deadline2026": null,
  "dates2027": "Jun 28-Jul 17, 2027",
  "dates2026": null,
  "cost": null,
  "aid": "Need-based aid available and admissions are need-blind; aid request must be submitted with the application (none considered after Apr 23). Applies to international students per page (not explicit).",
  "selectivity": "~80 students admitted per year from hundreds of qualified applicants",
  "summary": "Students spend three weeks designing and completing a computational project with a mentor, using Wolfram Language, and finish with a presentation.",
  "url": "https://education.wolfram.com/summer-research-high-school/admission/",
  "sources": [
   "https://education.wolfram.com/summer-research-high-school/admission/"
  ],
  "uncertain": [
   "deadline2027: year inferred from 2027 program dates, not printed",
   "cost: not on official page (a third-party blog said USD 5,500, unverified)",
   "age: student must be under 18 on Jul 17, 2027, so a birth date before Jul 17, 2009 would be ineligible",
   "whether aid is open to internationals is not explicit"
  ],
  "verified": "ok"
 },
 {
  "id": "ucla-neuro-hs",
  "name": "Neuroscience High School Scholars Program (Virtual Summer Program)",
  "host": "UCLA Easton Center for Alzheimer's and Related Dementias",
  "kind": "selective",
  "field": "Neuroscience (Alzheimer's/neurology seminars, journal club, research project)",
  "format": "online",
  "where": "online",
  "intlOk": null,
  "intlNote": "Page does not say whether students outside the US may apply; ask the program.",
  "eligibility": "Virtual Summer Program: rising juniors and seniors currently enrolled in high school; virtual interview; must attend all sessions (evening Pacific time).",
  "deadline2027": null,
  "deadlineNote": "Dates, deadline and decision timeline to be posted December 2026.",
  "deadline2026": null,
  "dates2027": null,
  "dates2026": null,
  "cost": "free ($0 fee)",
  "aid": "No fee; no stipend mentioned.",
  "selectivity": null,
  "summary": "Students attend live neuroscience seminars and neurology grand rounds, join a journal club, and complete a final research project, all online.",
  "url": "https://eastonad.ucla.edu/about/neuroscience-high-school-scholars-program",
  "sources": [
   "https://eastonad.ucla.edu/about/neuroscience-high-school-scholars-program"
  ],
  "uncertain": [
   "intlOk: not stated",
   "deadline2027 and dates2027: not yet posted",
   "time zone could be hard from Korea if sessions run in Pacific evening or daytime"
  ],
  "verified": "ok: deadline and intl status still not stated on page"
 },
 {
  "id": "ucsb-rmp",
  "name": "Research Mentorship Program (RMP)",
  "host": "UC Santa Barbara Summer Sessions",
  "kind": "paid",
  "field": "University research mentorship (engineering, biology, astrophysics, global studies, others)",
  "format": "hybrid",
  "where": "Santa Barbara, CA (virtual kickoff Jun 14-17)",
  "intlOk": true,
  "intlNote": "Described as for students from all over the world; TOEFL/English test not required.",
  "eligibility": "10th or 11th grade (9th case by case); minimum 3.80 weighted academic GPA; must attend full program",
  "deadline2027": "2027-03-09",
  "deadlineNote": "Priority Feb 15, 2027; final Mar 9, 2027; applications open Dec 15, 2026.",
  "deadline2026": null,
  "dates2027": "Jun 14-Jul 30, 2027 (virtual component Jun 14-17)",
  "dates2026": null,
  "cost": "2026: USD 5,675 commuter / 13,274 residential (2027 prices due early Dec 2026)",
  "aid": "Limited need-based scholarships; California residents get priority; guardian submits tax returns after admission. Unclear how often internationals receive awards.",
  "selectivity": null,
  "summary": "Students join a research project in a UCSB lab or group with a faculty/grad mentor for several weeks and write up results for college credit.",
  "url": "https://www.summer.ucsb.edu/programs/research-mentorship-program/overview",
  "sources": [
   "https://www.summer.ucsb.edu/programs/research-mentorship-program/overview",
   "https://summer.ucsb.edu/programs/research-mentorship-program/admissions",
   "https://summer.ucsb.edu/programs/research-mentorship-program/cost-of-attendance"
  ],
  "uncertain": [
   "neuroscience/psychology projects not confirmed on page",
   "2027 cost not posted; 2026 prices shown",
   "deadline2026: not found",
   "aid for non-California internationals unclear"
  ],
  "verified": "ok: deadlines confirmed; NOTE additional rule min 3.80 weighted GPA; 2026 prices only"
 },
 {
  "id": "stanford-spcs",
  "name": "Stanford Pre-Collegiate Summer Institutes (online)",
  "host": "Stanford University (SPCS)",
  "kind": "paid",
  "field": "Live online courses incl. AI, engineering, math, philosophy (85+ options)",
  "format": "online",
  "where": "online",
  "intlOk": true,
  "intlNote": "Students from 60+ countries attend; aid open to international applicants per search result (not read on an official aid page).",
  "eligibility": "Students currently in grades 8-11; no separate age rule stated.",
  "deadline2027": null,
  "deadlineNote": "2027 application opens early December 2026; deadlines not yet posted.",
  "deadline2026": "2026-03-13",
  "dates2027": "Session One Jun 14-25; Session Two Jul 12-23, 2027",
  "dates2026": null,
  "cost": "2026 tuition USD 3,200 (2027 price not confirmed)",
  "aid": "Need-based aid reported as available to domestic and international students; aid deadline usually about a week after admissions deadline.",
  "selectivity": null,
  "summary": "Students take one two-week live online course taught by Stanford-affiliated instructors with daily class meetings and assignments.",
  "url": "https://summerinstitutes.spcs.stanford.edu/",
  "sources": [
   "https://summerinstitutes.spcs.stanford.edu/"
  ],
  "uncertain": [
   "deadline2026: Mar 13, 2026 comes from a search result summary of Stanford pages, not read directly",
   "cost 2026 and international aid availability come from a search result summary; official tuition/aid pages returned 404/403",
   "no neuroscience course confirmed; AI listed"
  ],
  "verified": "partial: 2027 application opens early Dec, no deadline; tuition/aid pages not read"
 },
 {
  "id": "harvard-ssp",
  "name": "Secondary School Program (SSP)",
  "host": "Harvard Summer School",
  "kind": "paid",
  "field": "Credit-bearing college courses across fields (psychology, neuroscience, CS and more)",
  "format": "hybrid",
  "where": "Cambridge, MA, or online",
  "intlOk": true,
  "intlNote": "International applicants accepted; international deadline Feb 10, 2027 for residential/commuting SSP; TOEFL/IELTS/Duolingo required for non-native speakers; F-1 visa route for SSP.",
  "eligibility": "Age at least 16 by Jun 13, 2027 and not 19 before Jul 31, 2027; graduating and entering college in 2027, 2028 or 2029.",
  "deadline2027": "2027-02-10",
  "deadlineNote": "Early Jan 13, 2027 (opens Dec 1, 2026); regular and international Feb 10, 2027; late Mar 31 (no aid; internationals may use it for the 7-week Online SSP); application fee $75.",
  "deadline2026": null,
  "dates2027": null,
  "dates2026": null,
  "cost": "USD 15,980 (7-wk residential), 9,260 (4-wk residential), 4,180-8,160 (online/commuting)",
  "aid": "Financial aid only for US citizens, permanent residents and DACA; international students not eligible.",
  "selectivity": null,
  "summary": "Students take for-credit Harvard Summer School courses alongside college students for four or seven weeks.",
  "url": "https://summer.harvard.edu/high-school-programs/secondary-school-program/",
  "sources": [
   "https://summer.harvard.edu/high-school-programs/secondary-school-program/admissions/",
   "https://summer.harvard.edu/high-school-programs/secondary-school-program/cost-and-financial-aid"
  ],
  "uncertain": [
   "dates2027: not on admissions page (calendar page not read)",
   "specific psychology/neuroscience course offering not checked"
  ],
  "verified": "ok"
 },
 {
  "id": "jhu-precollege",
  "name": "Summer at Hopkins Pre-College Programs",
  "host": "Johns Hopkins University",
  "kind": "paid",
  "field": "Pre-college courses incl. biomedical, CS, other sciences",
  "format": "hybrid",
  "where": "Baltimore, MD (Homewood), or online",
  "intlOk": true,
  "intlNote": "International students may apply; English proficiency evidence, transcript evaluation, F-1 visa guidance; apply by Feb 23, 2027 for F-1 timing.",
  "eligibility": "Must have completed 9th grade (2-week programs) or 10th grade (Next Generation Scholars and Summer Term); cumulative GPA at least 3.0.",
  "deadline2027": "2027-02-23",
  "deadlineNote": "On-campus Regular Decision Feb 23, 2027; Early Action Jan 26, 2027; online is rolling from Dec 1, 2026; Dean's Fellowship application Mar 16, 2027.",
  "deadline2026": null,
  "dates2027": null,
  "dates2026": null,
  "cost": null,
  "aid": "Need-based Dean's Fellowship up to USD 1,100 (avg about 500), online programs only; page does not say whether internationals are eligible.",
  "selectivity": null,
  "summary": "Students take short for-credit or noncredit pre-college courses taught by Johns Hopkins faculty on campus or online.",
  "url": "https://summer.jhu.edu/admissions/pre-college",
  "sources": [
   "https://summer.jhu.edu/admissions/pre-college",
   "https://summer.jhu.edu/admissions/financial-assistance"
  ],
  "uncertain": [
   "cost: tuition page not read",
   "dates2027: not on page",
   "neuroscience/cognitive science course availability not confirmed",
   "international eligibility for Dean's Fellowship not stated"
  ],
  "verified": "partial: dates confirmed; tuition and fellowship intl eligibility not read"
 },
 {
  "id": "columbia-precollege",
  "name": "Columbia Pre-College Summer Programs (NYC Residential/Commuter and Online)",
  "host": "Columbia University School of Professional Studies",
  "kind": "paid",
  "field": "Pre-college courses across fields (psychology, neuroscience, CS and others)",
  "format": "hybrid",
  "where": "New York, NY, or online",
  "intlOk": true,
  "intlNote": "International students may attend summer programs on a B visa/Visa Waiver or F-1 under stated conditions.",
  "eligibility": "Rising seniors may apply; NYC Residential requires age 15 and turning 16 by Dec 31 of program year.",
  "deadline2027": null,
  "deadlineNote": "Summer 2027 application is open but the general deadline was not on the pages read; financial aid deadline Feb 10, 2027 (US citizens/PRs in US only).",
  "deadline2026": null,
  "dates2027": null,
  "dates2026": "Residential Session A Jun 29-Jul 17; Session B Jul 21-Aug 7, 2026",
  "cost": "2027: USD 12,838 (3-wk residential), 6,381 (3-wk commuter), 4,018 (2-wk online, one course)",
  "aid": "Need-based aid only for US citizens/permanent residents located in the US or territories, limited to a single commuter/online course (25-50% of course cost); internationals not eligible.",
  "selectivity": null,
  "summary": "Students take college-level courses in New York or online with Columbia instructors for one to three weeks.",
  "url": "https://precollege.sps.columbia.edu/",
  "sources": [
   "https://precollege.sps.columbia.edu/node/11845",
   "https://precollege.sps.columbia.edu/highschool/summer-immersion-new-york-city/program-costs/3-week-residential"
  ],
  "uncertain": [
   "deadline2027: general application deadline not found",
   "dates2027: not published on pages read",
   "specific psychology/neuroscience courses not checked"
  ],
  "verified": "partial: general deadlines now published; aid/eligibility pages not re-read"
 }
];
window.RANK_REF = {"qs": "38", "the": "56"};
