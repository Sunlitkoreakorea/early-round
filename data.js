// tools/build_data.py 가 tools/raw/*.json 에서 만든 파일 (직접 고치지 말고 raw 나 FIX 를 고칠 것)
window.DATA_CHECKED = '2026-11-25';
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
   "Yale-specific aid instructions sent to international applicants after applying (CSS Profile only if requested)",
   "Signed tax documents"
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
  "interview": "not confirmed",
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
   "aidForms: CSS Profile only if Yale requests; exact international form list not confirmed",
   "english: tests/minimums not named",
   "cogsci: not verified on official page",
   "interview: not found on pages read",
   "RD notifyDate: only 'late March'"
  ],
  "nextCycle": null,
  "dream": true,
  "group": "target",
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
   "CSS Profile"
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
   "aidForms: Amherst page only says CSS Profile generally; did not read a separate international aid-form page (ISFAA alternative not confirmed)",
   "plans.ED.notifyDate: school gives only 'early-to-mid December'",
   "cogsci: absence of a cog sci program inferred from search, not from a full majors list"
  ],
  "nextCycle": null,
  "dream": true,
  "group": "target",
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
   "intlAid: finaid page still says need-blind for fall 2025 entrants only; June 2026 counselor newsletter says need-blind for all first-years regardless of citizenship",
   "english: policy not found",
   "supplements: only Open Curriculum prompt confirmed",
   "cogsci: not verified",
   "RD notifyDate: newsletter says March 31, RD page says early April",
   "fetch of admission.brown.edu apply pages 404"
  ],
  "nextCycle": null,
  "dream": false,
  "group": "target",
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "supplements": "Not confirmed (page links to Essay Tips; Common App writing only).",
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
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
  "checked": "2026-11-25"
 }
];
