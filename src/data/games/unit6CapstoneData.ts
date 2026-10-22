/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 6 CAPSTONE CHALLENGE DATA: QUESTION DESIGN LAB
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 79–90)
 *
 * Grounding:
 * - Section 6.1: The Compass of Academic Inquiry: Open vs. Closed Questions (pp. 79–82)
 * - Section 6.2: The 9 Principles of Effective Question Design (pp. 82–85)
 * - Section 6.3: Diagnosing Question Defects: Leading, Loaded, Double-Barreled, Vague (pp. 84–88)
 * - Section 6.4: Psychometric Scale Architecture: Balanced Likert Scales & Symmetry (pp. 87–89)
 * - Section 6.5: Ethical Inquiry, Privacy Protections & Pilot-Testing Iteration (pp. 88–90)
 *
 * Target Demographic: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Rigorous inquiry design, ethical sensitivity, and psychometric precision over fast clicking"
 */

export interface CapstoneDecisionOption {
  id: string;
  label: string;
  description: string;
  score: number; // Optimal: 160, Partial: 80, Weak: 30
  feedback: string;
  isOptimal: boolean;
  academicReasoning: string;
}

export interface CapstoneStage {
  stageNumber: number;
  stageKey: string;
  title: string;
  concept: string;
  textbookRef: string;
  scenarioHeading: string;
  scenarioBody: string;
  evidenceData?: {
    label: string;
    items: { key: string; value: string; note?: string }[];
  };
  prompt: string;
  options: CapstoneDecisionOption[];
}

export interface CapstoneMissionData {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  caseSetting: string;
  overview: string;
  maxScore: number;
  stages: CapstoneStage[];
}

export const UNIT_6_CAPSTONE_DATA: CapstoneMissionData = {
  id: 'g6-capstone',
  unitNumber: 6,
  title: 'Question Design Lab',
  subtitle: 'The Secondary School Wellbeing & Academic Support Survey Overhaul',
  caseSetting: 'SMA Merdeka Student Welfare Advisory Board (Grade 10 Inquiry Team)',
  overview:
    'A student research committee has drafted a school-wide survey intended to investigate student experiences with canteen nutrition, academic workload, sleep patterns, and counseling support. However, their draft instrument is plagued with severe methodological flaws: leading phrasing that pushes predetermined answers, double-barreled questions that fuse unrelated issues, skewed response scales with unipolar bias, and ethically invasive questions that violate participant privacy. As the Lead Question Design Specialist, you must audit the instrument, diagnose defects, reconstruct biased questions, choose appropriate data collection methods, and pilot-test the survey to produce an airtight, ethical research instrument.',
  maxScore: 800, // 5 stages * 160 max points
  stages: [
    // ------------------------------------------------------------------------
    // STAGE 1: SPOT THE DEFECT
    // ------------------------------------------------------------------------
    {
      stageNumber: 1,
      stageKey: 'spot-the-problem',
      title: 'Stage 1: Diagnosing Question Architecture Flaws',
      concept: 'Leading vs. Loaded vs. Double-Barreled vs. Vague Questions',
      textbookRef: 'Textbook Section 6.2 & 6.3 (pp. 82–88)',
      scenarioHeading: 'Auditing the Initial Draft Items',
      scenarioBody:
        'The student research committee has compiled four draft items for the school nutrition and wellbeing section. The committee chair claims all four questions are ready for school-wide distribution. However, during an initial audit, faculty reviewers noted that several items violate fundamental principles of survey design.',
      evidenceData: {
        label: 'Draft Survey Items Under Audit',
        items: [
          {
            key: 'Item 1',
            value: '"Don\'t you agree that our school canteen food is unhealthy and overpriced compared to outside warung?" [Yes / No]',
            note: 'Uses "Don\'t you agree" and joins nutritional health with monetary price.'
          },
          {
            key: 'Item 2',
            value: '"How often do you feel stressed by schoolwork?" [Often / Sometimes / Rarely]',
            note: 'Relies on subjective adverbs without defined time windows or numerical intervals.'
          },
          {
            key: 'Item 3',
            value: '"During the past 5 school days (Monday–Friday), did you purchase a hot meal from the school canteen?" [Yes / No]',
            note: 'Contains an exact 5-day boundary and a single, concrete behavioral indicator.'
          },
          {
            key: 'Item 4',
            value: '"Why do teachers assign meaningless busywork that ruins students\' family time?"',
            note: 'Open text field containing pejorative assumptions ("meaningless busywork").'
          }
        ]
      },
      prompt:
        'Which item represents the most damaging combination of leading pressure and double-barreled architecture, and how should it be methodologically diagnosed?',
      options: [
        {
          id: 'opt-1a',
          label: 'Diagnose Item 1 as a compound Leading and Double-Barreled question that invalidates responses.',
          description:
            'Identify that "Don\'t you agree" creates intense psychological pressure (Leading), while combining "unhealthy" and "overpriced" into a single binary Yes/No item (Double-Barreled) forces respondents into a false dilemma if they believe the food is nutritious but expensive.',
          score: 160,
          isOptimal: true,
          feedback:
            'Spot-on diagnostic analysis! Item 1 commits two fatal psychometric errors: it leads the respondent toward an affirmative answer and forces two distinct variables (nutritional quality vs. price affordability) into a single response checkbox. A respondent who thinks the meals are healthy but costly cannot answer truthfully.',
          academicReasoning:
            'Textbook Section 6.3 affirms that questions combining "AND" with suggestive opening phrases like "Don\'t you agree" produce uninterpretable data. Single-focus neutrality is the primary rule of empirical questionnaire design.'
        },
        {
          id: 'opt-1b',
          label: 'Diagnose Item 2 as flawed solely because questions about stress should never be asked to high schoolers.',
          description:
            'Argue that Item 2 is the most severe defect because asking adolescents about stress causes emotional panic and violates school safety rules.',
          score: 80,
          isOptimal: false,
          feedback:
            'Partially valid concern regarding emotional sensitivity, but methodologically inaccurate. Asking about academic stress is common and valuable when calibrated properly; the actual defect in Item 2 is vague, subjective adverbs ("often", "rarely") lacking anchored timeframes.',
          academicReasoning:
            'Subjective adverbs create measurement error because each person defines "often" differently (Textbook Section 6.3). However, stress inquiry itself is valid when quantified with anchored scales.'
        },
        {
          id: 'opt-1c',
          label: 'Flag Item 3 as defective because binary Yes/No questions are unscientific in all social research.',
          description:
            'Claim that Item 3 is completely unacceptable because legitimate research must always use 7-point scales rather than simple dichotomous Yes/No options.',
          score: 30,
          isOptimal: false,
          feedback:
            'Incorrect diagnostic evaluation! Item 3 is actually the cleanest and most reliable question in the entire draft: it tests a single factual behavior anchored to a precise 5-day time boundary. Binary items are completely valid for concrete factual filters.',
          academicReasoning:
            'Closed binary items with specific temporal boundaries ("During the past 5 school days") possess high empirical reliability for factual behavioral measurement (Textbook Section 6.1).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 2: REWRITE FOR FAIRNESS
    // ------------------------------------------------------------------------
    {
      stageNumber: 2,
      stageKey: 'rewrite-for-fairness',
      title: 'Stage 2: Reconstructing Biased Items for Neutrality',
      concept: 'Neutrality, Single-Focus, Anchored Numerical Scales & Objectivity',
      textbookRef: 'Textbook Section 6.2 & 6.3 (pp. 82–88)',
      scenarioHeading: 'Neutralizing Loaded Workload Assumptions',
      scenarioBody:
        'The student committee wants to investigate whether homework volume affects sleep duration among Grade 10 students. Their draft question currently reads: "Why do teachers overload Grade 10 students with excessive homework that ruins our sleep schedule?" When the faculty coordinator rejected this item, a debate erupted on how to rewrite it so that the data collected can be respected by school leadership.',
      evidenceData: {
        label: 'Defect Analysis of Loaded Item',
        items: [
          {
            key: 'Loaded Presupposition',
            value: '"Teachers overload students with excessive homework"',
            note: 'Treats an unverified accusation as an established fact.'
          },
          {
            key: 'Emotional / Pejorative Language',
            value: '"ruins our sleep schedule"',
            note: 'Uses emotive framing that biases respondents toward victimhood.'
          },
          {
            key: 'Measurement Flaw',
            value: 'Open grievance box with zero quantitative hours or sleep duration metrics.',
            note: 'Produces anecdotal rants rather than verifiable correlation data.'
          }
        ]
      },
      prompt:
        'Which revision transforms this loaded grievance into a neutral, empirically rigorous research item pair?',
      options: [
        {
          id: 'opt-2a',
          label: 'Split into two objective, anchored items: one measuring homework hours and one measuring sleep impact.',
          description:
            'Item A: "On average school nights (Monday–Thursday), approximately how many hours do you spend completing homework? [Under 1 hr | 1–2 hrs | 2–3 hrs | 3+ hrs]" and Item B: "To what extent does your academic workload affect your ability to get 7–8 hours of sleep? [1: Severely disrupts sleep to 5: Has no negative effect on sleep]".',
          score: 160,
          isOptimal: true,
          feedback:
            'Exemplary question reconstruction! You decoupled the loaded assumption, created objective numerical intervals for homework hours, and provided a balanced 5-point scale measuring sleep impact without blaming teachers or presuming guilt.',
          academicReasoning:
            'Principle 3 (Objectivity) and Principle 4 (Single-Focus) require separating independent behavioral variables (hours spent) from dependent subjective impacts (sleep disruption) using standardized ordinal brackets (Textbook Section 6.2).'
        },
        {
          id: 'opt-2b',
          label: 'Change the wording slightly to ask whether homework is fair and whether students sleep enough.',
          description:
            'Revise to: "Do you feel that your homework assignments are fair or too heavy, and do you usually get enough sleep? [Yes / No / Sometimes]".',
          score: 80,
          isOptimal: false,
          feedback:
            'Partially improved tone, but still double-barreled! Combining "fair or too heavy" with "enough sleep" into one question means a student who has fair homework but stays up late playing video games cannot answer accurately.',
          academicReasoning:
            'The conjunction "and" links two separate psychological variables (fairness of assignments vs. sufficiency of sleep), perpetuating the double-barreled trap (Textbook Section 6.3).'
        },
        {
          id: 'opt-2c',
          label: 'Ask students whether they support an immediate school policy banning all weekend homework.',
          description:
            'Revise to: "To protect student health, do you agree or disagree that our school should prohibit all homework on weekends? [Agree / Disagree]".',
          score: 30,
          isOptimal: false,
          feedback:
            'Methodologically defective shift. This abandons the empirical research question (measuring actual workload and sleep) in favor of a leading policy referendum that primes respondents with the phrase "To protect student health".',
          academicReasoning:
            'Leading preambles ("To protect student health...") contaminate respondent neutrality by making disagreement sound harmful or anti-health (Textbook Section 6.3).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 3: CHOOSE THE RIGHT METHOD
    // ------------------------------------------------------------------------
    {
      stageNumber: 3,
      stageKey: 'choose-the-right-method',
      title: 'Stage 3: Methodological Fit: Matching Inquiry to Method',
      concept: 'Quantitative Broad Survey vs. Qualitative Semi-Structured Interview',
      textbookRef: 'Textbook Section 6.1 (pp. 79–82)',
      scenarioHeading: 'Selecting Inquiry Architecture for Dormitory Stress',
      scenarioBody:
        'The school counseling team noticed an alarming trend: Grade 10 female students living in the campus boarding dormitory report significantly higher feelings of isolation and exam anxiety than day students. The principal asks the research team to investigate the underlying cultural, environmental, and academic reasons behind this specific dormitory stress to inform a new wellness intervention.',
      evidenceData: {
        label: 'Methodological Trade-Off Assessment',
        items: [
          {
            key: 'Target Population',
            value: '35 female boarding students living in on-campus dormitory blocks.',
            note: 'Small, cohesive cohort with complex shared living dynamics.'
          },
          {
            key: 'Nature of Inquiry',
            value: 'Exploratory & phenomenological: "Why" and "How" questions exploring lived experiences.',
            note: 'Requires deep contextual insights, interpersonal trust, and probing follow-ups.'
          },
          {
            key: 'Risk of Closed Checkbox Surveys',
            value: 'Pre-selected checkboxes cannot anticipate unique dormitory rules, curfews, or roommate dynamics.',
            note: 'Rigid closed questions risk missing the true underlying root causes.'
          }
        ]
      },
      prompt:
        'Which research methodology is best suited to uncover the authentic root causes of stress in this specific dormitory cohort?',
      options: [
        {
          id: 'opt-3a',
          label: 'Conduct confidential semi-structured interviews and focus groups with voluntary dormitory residents.',
          description:
            'Deploy an open-ended, semi-structured qualitative interview protocol in a private counseling space, allowing researchers to explore personal daily routines, study hall rules, emotional isolation, and unexpected community factors with empathetic follow-up probes.',
          score: 160,
          isOptimal: true,
          feedback:
            'Outstanding methodological alignment! For a small cohort (35 students) experiencing nuanced psychosocial challenges, semi-structured qualitative interviews allow researchers to probe unexpected institutional causes (such as rigid dormitory curfew hours or peer pressure) that rigid quantitative surveys would overlook.',
          academicReasoning:
            'Textbook Section 6.1 highlights that qualitative open-ended inquiry is superior for exploratory studies where the underlying variables are unknown, complex, or deeply personal.'
        },
        {
          id: 'opt-3b',
          label: 'Distribute a mandatory 60-question quantitative survey with closed checkboxes to all dormitory residents.',
          description:
            'Create a lengthy multiple-choice questionnaire requiring mandatory completion during evening study hall, covering 60 pre-written stress factors rated 1 to 5.',
          score: 80,
          isOptimal: false,
          feedback:
            'Suboptimal methodology. A mandatory 60-item survey induces survey fatigue, and pre-selected checkboxes restrict participants from expressing unexpected issues. Forcing participation also risks superficial, resentful answers.',
          academicReasoning:
            'Rigid closed questionnaires restrict respondent responses to the researcher’s pre-existing hypotheses, blind to novel exploratory factors (Textbook Section 6.1).'
        },
        {
          id: 'opt-3c',
          label: 'Analyze historical dormitory electricity usage and grade sheets without speaking to residents.',
          description:
            'Avoid talking to students entirely; extract historical dormitory lights-out logs and compare midterm exam grades to infer when and why students feel stressed.',
          score: 30,
          isOptimal: false,
          feedback:
            'Severely flawed proxy research. Inferring subjective human psychological stress and emotional isolation purely from light-switch logs and grade sheets commits a massive ecological fallacy and fails to capture human perspective.',
          academicReasoning:
            'Global Perspectives inquiry requires engaging directly with stakeholder voices. Physical proxies cannot substitute for direct human perspectives on wellbeing (Textbook Section 6.1).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 4: BUILD A BALANCED INSTRUMENT
    // ------------------------------------------------------------------------
    {
      stageNumber: 4,
      stageKey: 'build-balanced-instrument',
      title: 'Stage 4: Psychometric Scale Balance & Architecture',
      concept: 'Likert Scale Symmetry, Unipolar vs. Bipolar Bias, Neutral Anchors & Opt-Outs',
      textbookRef: 'Textbook Section 6.4 (pp. 87–89)',
      scenarioHeading: 'Auditing Counseling Service Satisfaction Scales',
      scenarioBody:
        'The committee drafted an item to evaluate student satisfaction with the school’s academic advising and peer-counseling clinic. The draft currently reads:\n"How satisfied are you with our school counseling service?\n[ ] 1. Extremely Happy\n[ ] 2. Very Satisfied\n[ ] 3. Satisfied\n[ ] 4. Somewhat Satisfied"\nThe team leader claims this scale is "100% positive and motivational for our school counselors."',
      evidenceData: {
        label: 'Psychometric Scale Audit',
        items: [
          {
            key: 'Scale Polarity',
            value: 'All 4 options are positive (unipolar satisfaction bias).',
            note: 'Zero negative options provided; impossible for dissatisfied students to register dissent.'
          },
          {
            key: 'Neutral Center Point',
            value: 'Missing true neutral anchor (e.g., "Neither Satisfied nor Dissatisfied").',
            note: 'Forces indifferent students to endorse positive praise.'
          },
          {
            key: 'Non-User Filter / Opt-Out',
            value: 'Missing "Have not used this service / Not Applicable" option.',
            note: 'Forces students who never visited counseling to fabricate an opinion.'
          }
        ]
      },
      prompt:
        'How should the Lead Question Design Specialist restructure this response scale to guarantee psychometric validity?',
      options: [
        {
          id: 'opt-4a',
          label: 'Implement a balanced 5-point symmetrical Likert scale with an explicit non-user opt-out anchor.',
          description:
            'Replace the biased scale with: [1: Very Dissatisfied | 2: Dissatisfied | 3: Neutral / Neither Satisfied nor Dissatisfied | 4: Satisfied | 5: Very Satisfied] plus an independent screening option: "[ ] I have never used the school counseling service".',
          score: 160,
          isOptimal: true,
          feedback:
            'Flawless psychometric design! A legitimate Likert scale must possess equal balance around an explicit neutral midpoint (two positive choices, two negative choices, one neutral). Adding the non-user opt-out prevents non-users from distorting the satisfaction distribution.',
          academicReasoning:
            'Textbook Section 6.4 establishes that unbalanced response categories artificially manufacture artificial positive consensus, destroying scientific validity. True symmetry and non-user screening are non-negotiable.'
        },
        {
          id: 'opt-4b',
          label: 'Add a single negative option at the end while keeping the positive options intact.',
          description:
            'Revise scale to: [1: Unhappy | 2: Somewhat Satisfied | 3: Satisfied | 4: Very Satisfied | 5: Extremely Happy], keeping all original positive levels.',
          score: 80,
          isOptimal: false,
          feedback:
            'Still psychometrically skewed. Having one negative option against four positive choices creates an asymmetrical scale that still artificially pulls responses toward positive satisfaction.',
          academicReasoning:
            'Likert scales must be mathematically symmetrical (equal positive and negative gradations). Asymmetrical scales skew statistical mean calculations (Textbook Section 6.4).'
        },
        {
          id: 'opt-4c',
          label: 'Compress the question into a forced binary choice: Helpful or Unhelpful.',
          description:
            'Eliminate all rating scales and force students to pick between two polar extremes: [Helpful | Unhelpful].',
          score: 30,
          isOptimal: false,
          feedback:
            'Poor psychometric choice. Forcing a binary choice destroys all gradations of student sentiment and prevents the counseling department from distinguishing minor issues from catastrophic dissatisfaction.',
          academicReasoning:
            'Complex human service experiences cannot be flattened into binary dichotomies without massive loss of diagnostic fidelity (Textbook Section 6.4).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 5: PILOT-TEST, ETHICS & REPAIR
    // ------------------------------------------------------------------------
    {
      stageNumber: 5,
      stageKey: 'pilot-test-ethics-repair',
      title: 'Stage 5: Pilot-Testing, Research Ethics & Privacy Overhaul',
      concept: 'Principle 8 (Ethical Sensitivity), Anonymity, Informed Consent & Pilot Iteration',
      textbookRef: 'Textbook Section 6.2 & 6.5 (pp. 83–85, 88–90)',
      scenarioHeading: 'Analyzing Pilot Run Feedback & Ethical Violations',
      scenarioBody:
        'The team conducted a pilot test with 10 Grade 10 volunteers. The pilot review revealed critical ethical and operational breakdowns: Item 8 asked students to disclose private trauma: "Have you ever experienced severe clinical depression or abusive family conflict at home? [Yes / No]". Furthermore, the top header demanded each student\'s Full Name, Class, and Student ID Number. Four pilot testers stopped taking the survey, and two students became visibly distressed.',
      evidenceData: {
        label: 'Pilot Testing Diagnostic Log (N = 10)',
        items: [
          {
            key: 'Participant Abandonment Rate',
            value: '40% of pilot participants quit the survey upon encountering Item 8.',
            note: 'Operational Breakdown: Invasive items cause high non-response and survey abandonment.'
          },
          {
            key: 'Privacy & Coercion Breach',
            value: 'Mandatory collection of Full Name and Student ID alongside sensitive personal topics.',
            note: 'Ethical Violation: Destroys anonymity; sparks fear that counselors or teachers will penalize students.'
          },
          {
            key: 'Scope & Competence Breach',
            value: 'High school peer researchers collecting clinical mental health diagnostic data.',
            note: 'Ethical Violation: Student researchers are not licensed psychiatric professionals.'
          }
        ]
      },
      prompt:
        'As research-design adviser, what comprehensive ethical and structural remediation must be applied before launching the survey?',
      options: [
        {
          id: 'opt-5a',
          label: 'Enforce complete anonymity, remove invasive clinical items, and add informed consent with counseling referrals.',
          description:
            'Remove Name and Student ID to ensure total anonymity; delete invasive clinical trauma items; replace with actionable institutional support items ("Do you know how to access confidential counseling on campus?"); provide an explicit informed consent preamble explaining purpose, voluntary participation, and contact info for certified school counselors.',
          score: 160,
          isOptimal: true,
          feedback:
            'Masterclass in research ethics and instrument refinement! High school peer researchers must never collect clinical psychological diagnoses. Ensuring complete anonymity protects vulnerable students, while providing counselor referrals upholds ethical duty of care.',
          academicReasoning:
            'Principle 8 (Ethical Sensitivity) and Cambridge Research Guidelines mandate voluntary informed consent, complete participant anonymity, and strict avoidance of intrusive psychological harm (Textbook Section 6.2 & 6.5).'
        },
        {
          id: 'opt-5b',
          label: 'Keep student names on the survey but add a promise that student researchers will not gossip.',
          description:
            'Retain the Name and Student ID so the team can track who participated, but add a written pledge on the cover sheet that researchers promise not to share names with other students.',
          score: 80,
          isOptimal: false,
          feedback:
            'Inadequate ethical protection. An informal student promise cannot overcome participant fear of disclosure, especially regarding sensitive wellbeing topics. True anonymity requires that identifying markers are never collected in the first place.',
          academicReasoning:
            'Identifiable data on sensitive topics induces massive social desirability bias and underreporting. Anonymity must be architected into the instrument, not promised informally (Textbook Section 6.5).'
        },
        {
          id: 'opt-5c',
          label: 'Make all questions mandatory and offer a candy incentive to anyone who answers every personal question.',
          description:
            'Solve the non-response rate by making every single question strictly compulsory and offering free canteen snacks to guarantee 100% completion.',
          score: 30,
          isOptimal: false,
          feedback:
            'Severe ethical breach! Compulsory completion of invasive personal questions combined with material inducements constitutes coercive research on minors, directly violating Cambridge and international research standards.',
          academicReasoning:
            'Coerced research violates the fundamental principle of voluntary participation. Participants must always have the freedom to skip sensitive items or withdraw at any time (Textbook Section 6.5).'
        }
      ]
    }
  ]
};
