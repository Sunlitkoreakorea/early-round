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
   "RD notifyDate: only 'late March'"
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
   ]
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
   "req": "partial: essays/platforms/2 teacher recs/counselor confirmed; fee $80, interview, CSS 3987 not on pages read",
   "stats": "ok"
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
   "RD notifyDate: only 'early April'"
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
   ]
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
   "req": "partial: $100, 2 teacher recs, 5 short (3-50 words) + 3 essays (100-250) confirmed; pages list Common App only (QuestBridge not seen); interview page empty",
   "stats": "ok"
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
   "cogsci: absence of a cog sci program inferred from search, not from a full majors list"
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
   ]
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
   "req": "unreachable",
   "stats": "ok: 직접 확인"
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
   "supplement word limits: from requirements page, prompts not read in full"
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
   "cds": "Harvard published a 2025-26 CDS (OIRA, 2026-07-13)"
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
   "req": "partial: official 2026-27 PDF confirms $95, 5 prompts x150 words max, 2 teacher evals, Common App; interview/CSS not rechecked",
   "stats": "ok: applied/admitted match Gazette and Harvard CDS 2025-26; CDS exists, so null fields can be filled (see corrections)"
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
   "need-blind/meetsNeed: from official international page text (read) and search summary"
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
   ]
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
   "req": "partial: prompts/limits confirmed (250/400-500/250/3x50, graded paper required); fee, recs, interview, CSS null not rechecked",
   "stats": "ok"
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
   "MIT meetsNeed and need-blind from SFS international page and search summary"
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
   ]
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
   "req": "ok: 4 essays ~100-200, 4 short 40-50, 4 activities, 1 open box, $75, 2 teacher recs, interview waived if unavailable, own portal. CSS 3514 and optional counselor letter not rechecked",
   "stats": "ok"
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
   "fetch of admission.brown.edu apply pages 404"
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
   "uncertain": []
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
   "req": "partial: 4 essays (150-250/150-250/100-150/100-150), $80, Common App confirmed; interview/CSS not rechecked",
   "stats": "ok"
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
   "cogsci: confirmed via search snippet of Columbia psychology page, not read in full"
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
   ]
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
   "req": "unreachable",
   "stats": "ok"
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
   "earlyRule: Penn page read states only that ED is binding; restrictions on other early apps not stated"
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
   ]
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
   "req": "partial: 1 teacher required + 1 optional, counselor required, $75, platforms incl. QuestBridge, essays 3x50-200 confirmed; interview not on page",
   "stats": "unreachable: Box link redirects to boxcloud and cannot be read; arithmetic check only (3570/72544 = 4.9%); third-party Esslo transcription shows SAT composite 1510-1570 and 4.9% rate, consistent but unverified"
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
   "plans: EA and ED I share the Nov 2 deadline; page lists them as separate plans"
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
   ]
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
   "lx": 11,
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "req": "partial: pages gave no usable content (essay page empty, requirements page without details); essays page 403/empty",
   "stats": "ok"
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
   "aidDeadlines.rd: JHU deadlines table lists Jan 15, 2027 for RD aid; international-specific filter on the aid page was not separately verified"
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
   ]
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
   "req": "partial: 350-word essay, $70, 2 teachers, Common App+Coalition confirmed; interview not on page",
   "stats": "ok (H6 box reads 183, avg $43,101, total $7,887,392 = 183 x avg; B2 nonresident first-year is 188, separate from 183)"
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
   "cogsci: concentration status from search snippets (hub.williams.edu/cogsci, neuroscience.williams.edu), not read in full"
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
   ]
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
   "req": "unreachable",
   "stats": "filled"
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
   "cogsci: program structure from search snippets, not read in full"
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
   ]
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
   "req": "ok: $60, 2 teachers, counselor, 2x250-word required, optional interview, 3 platforms confirmed; CSS 2821 not rechecked",
   "stats": "ok"
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
   "testingNote: no 2026-27-specific testing page read; relied on international applicants page"
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
   ]
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
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "req": "partial: 150 + 1-of-3 250 confirmed, platforms ok, teacher recs 2 + 1 optional ok; fee/interview/counselor not on page",
   "stats": "filled"
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
   "interview: no UC interview policy statement read except English-skills note in search snippet"
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
   "uncertain": []
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
   "ly": -6,
   "la": "start"
  },
  "verified": {
   "req": "partial: 4 of 8 PIQs 350 words confirmed; activities/awards limit and fee not readable (PDF unreadable); no QuestBridge/Common App",
   "stats": "ok"
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
   "international page seen shows 2025-26 round dates labeled '2026-27 entry'; used the 2027-28 aid page instead"
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
   "scoreBasis": "합격자"
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
   "ly": -4,
   "la": "end"
  },
  "verified": {
   "req": "partial: $65 and Common App+Coalition confirmed; recs/supplements/interview not read; 'Member Questions' exist so supplements [] means unknown",
   "stats": "filled"
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
   "meetsNeed: search summary of international page says meets 100% without loans; the page fetched did not state it"
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
   ]
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
   "ly": 5,
   "la": "start"
  },
  "verified": {
   "req": "ok: no fee, 2 teachers + counselor, optional interview to Jan 15, 3 platforms, no essay on this page; CSS 6081 not rechecked",
   "stats": "partial: all values match; ED 760/263 sits under a 'Fall 2024 entering class' label in the 2025-26 CDS, so it may be the prior cycle"
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
   "interview/supplement: taken from apply-page summary, not independently cross-checked"
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
   ]
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
   "req": "partial: fee 70, platforms, optional interview ok; two 250-word essays optional ok; recs differ (see correction)",
   "stats": "partial: all values match; ED 1985/296 sits under a 'Fall 2024 entering class' label in the 2025-26 CDS, so it may be the prior cycle"
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
   "ED I application deadline Nov 2 is as read; page does not state entering year explicitly"
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
   ]
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
   "req": "partial: >=2 teachers, interview request dates, 3 platforms, no supplemental essay confirmed; fee not mentioned on page",
   "stats": "ok (headers say 2024-2025 but items say Fall 2025; admitted is September-only)"
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
   "ED II deposit date conflicts (Feb 14 vs Feb 20) between pages"
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
   ]
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
   "req": "ok: no fee, 2 teachers, optional 200-450 word supplement, Common App+QuestBridge, interview optional",
   "stats": "ok (CDS 2024-2025, fall 2024 cohort; values match)"
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
   "cogsci: not verified"
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
   "rateNote": "학교 발표 (반올림 값)"
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
   "req": "unreachable",
   "stats": "filled"
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
   "Common-App ED I admissions deadline Nov 1; aid Nov 16 (ED page says Nov 1 for aid, aid page says Nov 16)"
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
   "uncertain": []
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
   "req": "partial: 1 academic teacher required (2 recommended), fee waived, optional interview, Common App confirmed; supplement content unknown",
   "stats": "ok"
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
   "intlAid: Rochester says it meets full demonstrated need of all admitted students, but international admission is 'highly selective for students with financial need' and 'only a small number' receive need-based aid, so labelled limited"
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
   ]
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
   "req": "partial: 250-word required supplement and Common App+Coalition confirmed; fee/recs/interview not on page",
   "stats": "ok"
  }
 }
];
