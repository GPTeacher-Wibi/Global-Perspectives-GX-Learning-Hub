/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 6 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 79–90)
 * Language Level: CEFR B1 English (Clear, direct, controlled academic vocabulary)
 *
 * Micro-Games included:
 * - g6-1: Question Doctor (Leading, Loaded, Double-Barreled, Vague/Ambiguous diagnosis & repair)
 * - g6-2: Survey Builder Master (Likert scale symmetry, closed vs open, response anchors, pilot testing)
 * - g6-3: Neutrality Trial (Academic courtroom simulator evaluating investigator bias, loaded wording, leading probes)
 */

export interface MisconceptionAlert {
  label: string;
  explanation: string;
}

// ============================================================================
// g6-1: QUESTION DOCTOR DATA
// ============================================================================

export type QuestionDefectType =
  | 'leading'
  | 'double_barreled'
  | 'loaded'
  | 'vague_ambiguous'
  | 'healthy_question';

export interface QuestionDoctorItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  inquiryField: string;
  patientQuestion: string;
  correctDefect: QuestionDefectType;
  prescriptionOptionA: string;
  prescriptionOptionB: string;
  prescriptionOptionC: string;
  correctPrescription: 'A' | 'B' | 'C';
  options: {
    defect: QuestionDefectType;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G6_1_CHALLENGES: QuestionDoctorItem[] = [
  // STAGE 1: DEFECT DIAGNOSIS (4 items)
  {
    id: 'g6-1-s1-q1',
    stage: 1,
    title: 'The Eco-Pressure Inquiry',
    inquiryField: 'School Environmental Policy',
    patientQuestion: '"Given how destructive and toxic single-use plastic bottles are to innocent marine turtles, don\'t you agree our school cafeteria should immediately ban them?"',
    correctDefect: 'leading',
    prescriptionOptionA: '"To what degree do you agree that single-use plastic bottles sold in the campus cafeteria are environmentally toxic and unfairly priced? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionB: '"Why do cafeteria students consistently choose to purchase non-biodegradable disposable plastic bottles rather than bringing environmentally sustainable insulated tumblers from home?"',
    prescriptionOptionC: '"To what extent do you support or oppose a ban on single-use plastic bottles in the school cafeteria? [Strongly Oppose | Oppose | Neutral | Support | Strongly Support]"',


    correctPrescription: 'C',
    options: [
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      }
      ],
    explanation: 'The question is heavily Leading: emotional vocabulary and coercive phrasing pressure the student to answer "Yes". Option C provides an objective, balanced 5-point Likert scale.',
    pedagogicalKey: 'Neutral questions never pressure respondents to adopt the researcher\'s viewpoint.'
  },
  {
    id: 'g6-1-s1-q2',
    stage: 1,
    title: 'The Compound Campus Critique',
    inquiryField: 'Campus Facilities Evaluation',
    patientQuestion: '"Do you feel that our school library is quiet and has fast, reliable Wi-Fi Internet? [Yes / No]"',
    correctDefect: 'double_barreled',
    prescriptionOptionA: 'Split into two distinct rating items:\n1. "How quiet is the school library for study? [1: Very Noisy to 5: Completely Silent]"\n2. "How reliable is the library Wi-Fi connection? [1: Frequently Disconnects to 5: Always Fast and Stable]"',
    prescriptionOptionB: 'Combine into a single satisfaction index:\n1. "Overall, how satisfied are you with the quiet study atmosphere and high-speed Wi-Fi provided inside the campus library? [1: Very Dissatisfied to 5: Very Satisfied]"',
    prescriptionOptionC: 'Split into two leading agreement items:\n1. "Don\'t you agree that the campus library is much too noisy for serious study? [Yes / No]"\n2. "Don\'t you agree that library Wi-Fi connections frequently disconnect? [Yes / No]"',


    correctPrescription: 'A',
    options: [
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      }
      ],
    explanation: 'The conjunction "AND" combines two separate topics. If the library is silent but has broken Wi-Fi, a "No" answer misreports noise levels while a "Yes" answer lies about connectivity. Option A splits the item into two isolated variables.',
    pedagogicalKey: 'One question must evaluate exactly one measurable concept at a time.'
  },
  {
    id: 'g6-1-s1-q3',
    stage: 1,
    title: 'The Accusatory Screen Time Probe',
    inquiryField: 'Adolescent Media Habits',
    patientQuestion: '"Why do Grade 10 students waste so many hours watching brain-rotting TikTok dances instead of completing their academic assignments?"',
    correctDefect: 'loaded',
    prescriptionOptionA: 'Stage into two accusatory questions:\n1. "How many hours do you waste watching entertaining TikTok dance videos on typical weekday evenings?"\n2. "Do you agree that social media video platforms cause students to neglect essential homework assignments?"',
    prescriptionOptionB: 'Stage into two neutral empirical questions:\n1. "On an average school day, approximately how many minutes do you spend on social media video platforms?"\n2. "What are your primary purposes for using these platforms? [Entertainment, Educational Tutorials, News, Socializing with Friends]"',
    prescriptionOptionC: 'Stage into two vague recreational questions:\n1. "Do you spend a substantial amount of your leisure time browsing online video applications regularly? [Yes / No]"\n2. "Do you enjoy social media videos more than reading physical textbooks? [Yes / No]"',


    correctPrescription: 'B',
    options: [
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      },
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      }
      ],
    explanation: 'A Loaded question traps the participant with a baked-in accusation. Option B measures baseline minutes first, then neutrally investigates motivation without insult.',
    pedagogicalKey: 'Never bake personal accusations or stereotypes into research prompts.'
  },
  {
    id: 'g6-1-s1-q4',
    stage: 1,
    title: 'The Elastic Exercise Survey',
    inquiryField: 'Student Physical Fitness',
    patientQuestion: '"Do you engage in regular physical exercise frequently? [Yes / No]"',
    correctDefect: 'vague_ambiguous',
    prescriptionOptionA: '"Don\'t you strongly believe that regular daily physical exercise and sports activities are absolutely vital for maintaining long-term adolescent cardiovascular health and fitness? [Yes / No]"',
    prescriptionOptionB: '"Compared to other students in your grade level, how frequently do you participate in vigorous athletic sports and aerobic physical activities during typical school weeks? [Rarely | Occasionally | Frequently | Always]"',
    prescriptionOptionC: '"In the past 7 days, on how many days did you participate in at least 30 minutes of moderate-to-vigorous physical exercise? [0 days | 1–2 days | 3–4 days | 5 or more days]"',


    correctPrescription: 'C',
    options: [
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      }
      ],
    explanation: 'Words like "regularly" and "frequently" are subjective: an athlete thinks it means 6 times a week, while a couch potato thinks it means once a month. Option C replaces adverbs with exact days and duration.',
    pedagogicalKey: 'Replace subjective adverbs with precise numerical intervals and exact time frames.'
  },

  // STAGE 2: QUESTION SURGERY & REPAIR (4 items)
  {
    id: 'g6-1-s2-q1',
    stage: 2,
    title: 'The Biased Canteen Menu Vote',
    inquiryField: 'Student Nutrition Survey',
    patientQuestion: '"Shouldn\'t our school canteen introduce delicious, nutritious organic smoothies instead of greasy, cancer-causing fried tempeh? [Yes / No]"',
    correctDefect: 'leading',
    prescriptionOptionA: '"Which of the following food categories would you most like to see expanded in the school cafeteria? [Fresh fruit / juices | Traditional Indonesian snacks | Balanced meals | Western food options | No change desired]"',
    prescriptionOptionB: '"To what extent do you support replacing greasy fried snacks with health-promoting certified organic fruit smoothies in the cafeteria to prevent future lifestyle illnesses? [1: Strongly Oppose to 5: Strongly Support]"',
    prescriptionOptionC: '"How frequently do you purchase deep-fried foods from the school cafeteria despite widespread medical warnings regarding cholesterol and cardiovascular health risks? [Daily | Weekly | Rarely | Never]"',


    correctPrescription: 'A',
    options: [
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      }
      ],
    explanation: 'By contrasting heavily loaded positive terms with catastrophic health claims ("cancer-causing"), the question invalidates data integrity. Option A neutrally offers balanced menu categories.',
    pedagogicalKey: 'Eliminate emotional adjectives to measure true consumer preferences.'
  },
  {
    id: 'g6-1-s2-q2',
    stage: 2,
    title: 'The Homework and Sleep Dilemma',
    inquiryField: 'Academic Workload and Wellbeing',
    patientQuestion: '"Do you agree that teachers assign far too much homework and school starts too early in the morning? [Yes / No]"',
    correctDefect: 'double_barreled',
    prescriptionOptionA: '"To what extent do you agree that excessive daily homework assignments combined with unreasonably early morning school start times cause severe chronic sleep deprivation among Grade 10 students? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionB: 'Split into two separate standardized 5-point Likert items:\n1. "The amount of homework assigned in Grade 10 is manageable."\n2. "The current 7:00 AM school start time allows me to obtain adequate sleep."',
    prescriptionOptionC: '"Why do subject teachers continue to assign burdensome homework packages while school administrators stubbornly refuse to adjust our excessively early 7:00 AM daily classroom start schedule?"',


    correctPrescription: 'B',
    options: [
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      }
      ],
    explanation: 'A respondent might believe homework is light, but school starts much too early. Combining them prevents any meaningful statistical conclusion. Option B isolates both variables cleanly.',
    pedagogicalKey: 'Separate homework policy from schedule policy into independent items.'
  },
  {
    id: 'g6-1-s2-q3',
    stage: 2,
    title: 'The Cheating Presumption',
    inquiryField: 'Academic Integrity and AI Tools',
    patientQuestion: '"How frequently do you use ChatGPT to cheat on your English essays without your teacher noticing?"',
    correctDefect: 'loaded',
    prescriptionOptionA: 'Step 1: "Do you ever use generative artificial intelligence tools (such as ChatGPT) to complete graded English essays without teacher authorization? [Yes / No]"\nStep 2: "If yes, do you believe this practice violates academic integrity rules? [Yes / No]"',
    prescriptionOptionB: 'Step 1: "How often do you rely on artificial intelligence chatbots and automated online translation tools when working on school assignments? [Never | Rarely | Often]"\nStep 2: "Why do you prefer using automated software over writing independently?"',
    prescriptionOptionC: 'Step 1: "Have you ever used generative AI tools (such as ChatGPT) when working on English writing assignments? [Never | Rarely | Sometimes | Frequently]"\nStep 2: "If yes, for which tasks do you use it? [Brainstorming ideas | Grammar checking | Drafting paragraphs | Full essay writing]"',


    correctPrescription: 'C',
    options: [
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      }
      ],
    explanation: 'Presupposing guilt forces students to either lie or refuse to participate. Option C uses progressive filtering to explore ethical and pedagogical use neutrally.',
    pedagogicalKey: 'Stage questions progressively to avoid humiliating participants.'
  },
  {
    id: 'g6-1-s2-q4',
    stage: 2,
    title: 'The Nebulous Internet Query',
    inquiryField: 'Digital Infrastructure Research',
    patientQuestion: '"Is the school internet connection fast enough recently? [Yes / No]"',
    correctDefect: 'vague_ambiguous',
    prescriptionOptionA: '"During school hours, how often do you experience video buffering or download failures when accessing online learning materials? [Never | 1–2 times per week | Daily | Multiple times per day]"',
    prescriptionOptionB: '"Don\'t you agree that campus Wi-Fi infrastructure is unacceptably slow, unreliable, and frequently disconnects during important digital classroom assignments? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionC: '"How would you evaluate the overall speed, stability, and campus coverage of the school wireless network recently during your regular academic study periods? [Very Poor | Poor | Adequate | Good | Excellent]"',


    correctPrescription: 'A',
    options: [
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      }
      ],
    explanation: '"Fast enough" depends on whether a student is checking text email or streaming 4K video. Option A anchors the question to concrete buffering events and exact weekly frequencies.',
    pedagogicalKey: 'Define tangible symptoms (buffering, failure rates) rather than vague qualities.'
  },

  // STAGE 3: PROTOCOL CERTIFICATION & HEALTHY DESIGN (3 items)
  {
    id: 'g6-1-s3-q1',
    stage: 3,
    title: 'The Fully Certified Neutral Item',
    inquiryField: 'Renewable Energy Policy Survey',
    patientQuestion: '"To what extent do you agree or disagree with the following statement: \'Public funds should subsidize solar panel installation on residential rooftops in our municipality\'? [Strongly Disagree | Disagree | Neither Agree nor Disagree | Agree | Strongly Agree]"',
    correctDefect: 'healthy_question',
    prescriptionOptionA: '"We should rephrase the prompt to emphasize catastrophic global warming projections so that survey respondents clearly recognize their urgent civic and moral duty to support residential solar panel subsidies."',
    prescriptionOptionB: '"This question is already fully healthy and certified: It evaluates a single policy variable, uses neutral non-coercive syntax, provides a symmetrical balanced 5-point Likert scale, and anchors the scope clearly."',
    prescriptionOptionC: '"We should combine residential rooftop solar installations with municipal electric public transit fleet subsidies into a single overarching clean energy transition referendum question for citizen voting."',


    correctPrescription: 'B',
    options: [
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      },
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      }
      ],
    explanation: 'This question represents gold-standard survey design: neutral statement formulation, single conceptual focus, and balanced Likert anchors.',
    pedagogicalKey: 'A balanced Likert item gives equal weight to agreement and disagreement.'
  },
  {
    id: 'g6-1-s3-q2',
    stage: 3,
    title: 'Repairing the Compound Emotion Trap',
    inquiryField: 'Public Transit Accessibility',
    patientQuestion: '"Don\'t you feel terrified and angry that local city angkot minivans are unsafe and driven recklessly by irresponsible drivers? [Yes / No]"',
    correctDefect: 'leading',
    prescriptionOptionA: 'Split into two leading transport preference questions:\n1. "Don\'t you agree that private motorbikes are far more convenient and reliable than public angkot minivans? [Yes / No]"\n2. "Should the city restrict angkot routes on major roads? [Yes / No]"',
    prescriptionOptionB: 'Combine into a single emotional public transit complaint item:\n1. "How angry and frustrated do you feel when reckless angkot minivan drivers violate traffic signals and endanger student safety? [1: Not at All to 5: Extremely Angry]"',
    prescriptionOptionC: 'Split and neutralize into two objective items:\n1. "How safe do you feel when traveling on local angkot minivans? [Very Unsafe to Very Safe]"\n2. "How would you rate driver compliance with traffic speed limits and signals? [Poor | Fair | Good | Excellent]"',


    correctPrescription: 'C',
    options: [
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      },
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'leading',
        label: "Leading Question",
        description: "Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      }
      ],
    explanation: 'The original item is aggressive advocacy, not scientific research. Option C replaces sensational adjectives with calm, standardized rating scales.',
    pedagogicalKey: 'Researchers measure public sentiment; they never manufacture it through biased words.'
  },
  {
    id: 'g6-1-s3-q3',
    stage: 3,
    title: 'The Multi-Barrier University Access Survey',
    inquiryField: 'Higher Education Access Inquiry',
    patientQuestion: '"Do high tuition fees and distance from home prevent rural students from attending university? [Yes / No]"',
    correctDefect: 'double_barreled',
    prescriptionOptionA: '"Which of the following factors pose the greatest barrier to attending university for students in your village? (Rank from 1 = Greatest Barrier to 4 = Smallest Barrier):\n[ ] Tuition and living expenses\n[ ] Geographic distance and transport\n[ ] Family work obligations\n[ ] Academic entrance exam requirements"',
    prescriptionOptionB: '"To what extent do you agree with the following combined proposition: High university tuition fees and geographic distance from provincial campuses prevent qualified rural secondary students from completing higher education? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionC: '"Why do national higher education institutions maintain prohibitively expensive tuition fee structures while consistently failing to establish regional branch campuses or accessible distance-learning programs in underserved rural districts?"',


    correctPrescription: 'A',
    options: [
        {
        defect: 'healthy_question',
        label: "Healthy Neutral Question",
        description: "Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales."
      },
        {
        defect: 'vague_ambiguous',
        label: "Vague / Ambiguous Question",
        description: "Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people."
      },
        {
        defect: 'loaded',
        label: "Loaded / Presupposition Question",
        description: "Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer."
      },
        {
        defect: 'double_barreled',
        label: "Double-Barreled Question",
        description: "Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately."
      }
      ],
    explanation: 'By bundling economic cost with geographic distance, the researcher cannot determine which factor is the true primary obstacle. Option A uses ranking to isolate relative weights.',
    pedagogicalKey: 'Comparative ranking reveals which barrier is most severe.'
  }
];

// ============================================================================
// g6-2: SURVEY BUILDER MASTER DATA
// ============================================================================

export type SurveyDesignRule =
  | 'symmetrical_likert'
  | 'mutually_exclusive'
  | 'pilot_testing'
  | 'neutral_anchor'
  | 'avoid_jargon';

export interface SurveyBuilderItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  researchTopic: string;
  draftScaleOrItem: string;
  identifiedFlaw: SurveyDesignRule;
  options: {
    rule: SurveyDesignRule;
    label: string;
    description: string;
  }[];
  correctedDesign: string;
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G6_2_CHALLENGES: SurveyBuilderItem[] = [
  // STAGE 1: LIKERT SCALE SYMMETRY & SCALING (4 items)
  {
    id: 'g6-2-s1-q1',
    stage: 1,
    title: 'The Asymmetric Satisfaction Trap',
    researchTopic: 'School Canteen Satisfaction Survey',
    draftScaleOrItem: 'Scale Options:\n1. Acceptable\n2. Good\n3. Very Good\n4. Excellent\n5. Absolutely Outstanding',
    identifiedFlaw: 'symmetrical_likert',
    options: [
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      }
      ],
    correctedDesign: 'Balanced Symmetrical 5-Point Scale:\n1. Very Dissatisfied\n2. Dissatisfied\n3. Neutral / Neither\n4. Satisfied\n5. Very Satisfied',
    explanation: 'A scientifically sound Likert scale must provide an equal number of positive and negative anchors around a neutral center to prevent positive response bias.',
    pedagogicalKey: 'Likert scales must be balanced mirrors: equal positive and negative choices.'
  },
  {
    id: 'g6-2-s1-q2',
    stage: 1,
    title: 'The Overlapping Age Brackets',
    researchTopic: 'Demographic Section of Youth Study',
    draftScaleOrItem: 'Age Question:\n"Please select your age bracket:\n[ ] 10–14 years old\n[ ] 14–18 years old\n[ ] 18–22 years old\n[ ] 22+ years old"',
    identifiedFlaw: 'mutually_exclusive',
    options: [
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      },
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      }
      ],
    correctedDesign: 'Mutually Exclusive Brackets:\n[ ] 10–13 years old\n[ ] 14–17 years old\n[ ] 18–21 years old\n[ ] 22 years and older',
    explanation: 'Options must be exhaustive and mutually exclusive. If boundaries overlap, data analysts cannot assign respondents to unambiguous demographic groups.',
    pedagogicalKey: 'Demographic categories must never share border numbers.'
  },
  {
    id: 'g6-2-s1-q3',
    stage: 1,
    title: 'The Forged Neutrality Void',
    researchTopic: 'Student Stance on Mandatory Uniforms',
    draftScaleOrItem: 'Scale Options:\n1. Strongly Disagree\n2. Disagree\n3. Agree\n4. Strongly Agree\n(No middle option; respondent has no strong opinion but is forced to pick a side)',
    identifiedFlaw: 'neutral_anchor',
    options: [
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      }
      ],
    correctedDesign: 'Odd-Numbered Balanced Likert Scale:\n1. Strongly Disagree\n2. Disagree\n3. Neutral / No Opinion\n4. Agree\n5. Strongly Agree',
    explanation: 'In general population opinion research, forcing a binary choice distorts findings by recording artificial polarization where genuine indifference exists.',
    pedagogicalKey: 'Neutral anchors give honest voice to undecided or indifferent participants.'
  },
  {
    id: 'g6-2-s1-q4',
    stage: 1,
    title: 'The High-Altitude Academic Jargon',
    researchTopic: 'Student Reading Habits Survey',
    draftScaleOrItem: '"To what degree does your home habitus foster epistemological self-efficacy regarding hermeneutic textual deconstruction during leisure periods?"',
    identifiedFlaw: 'avoid_jargon',
    options: [
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      }
      ],
    correctedDesign: '"How confident do you feel when reading and understanding complex books for fun at home? [1: Not at all confident to 5: Extremely confident]"',
    explanation: 'Survey instruments must match the reading level of the participant cohort (CEFR B1). Alienating language guarantees measurement error.',
    pedagogicalKey: 'Write for clarity and accessibility, never to display personal vocabulary.'
  },

  // STAGE 2: INSTRUMENT ARCHITECTURE & FLOW (4 items)
  {
    id: 'g6-2-s2-q1',
    stage: 2,
    title: 'Skipping the Pilot Testing Protocol',
    researchTopic: 'Citywide Adolescent Sleep Quality Study',
    draftScaleOrItem: 'The student team finished writing 25 survey questions at 2:00 AM and immediately blasted the survey link to 800 school contacts across WhatsApp without doing a dry-run test with anyone.',
    identifiedFlaw: 'pilot_testing',
    options: [
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      },
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      }
      ],
    correctedDesign: 'Pilot Protocol: Administer the draft survey to 5–10 representative classmates first; sit with them while they complete it, identify questions that cause confusion or hesitation, refine the items, and only then launch the mass survey.',
    explanation: 'Principle 9 mandates pilot testing: testing on a small pilot sample catches wording confusion, broken logic jumps, and time burdens before mass rollout.',
    pedagogicalKey: 'Always pilot test on 5–10 peers to catch fatal design defects before launch.'
  },
  {
    id: 'g6-2-s2-q2',
    stage: 2,
    title: 'The Missing "Other / Specify" Escape Gate',
    researchTopic: 'Commuter Mode to School',
    draftScaleOrItem: '"How do you commute to school each day?\n[ ] Private Car\n[ ] Motorcycle\n[ ] Walking\n[ ] TransJakarta Bus"\n(A student who travels by commuter rail train, bicycle, or angkot has nowhere to click!)',
    identifiedFlaw: 'mutually_exclusive',
    options: [
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      },
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      }
      ],
    correctedDesign: 'Add Exhaustive Categories and an Open Gate:\n[ ] Private Car\n[ ] Motorcycle\n[ ] Walking / Bicycle\n[ ] Public Transit (Bus / Train / Angkot)\n[ ] Other (Please specify): [___________]',
    explanation: 'Multiple-choice questions must be exhaustive. Including an "Other (Please specify)" option prevents data loss from unpredicted variations.',
    pedagogicalKey: 'Always include "Other (specify)" so every respondent can answer truthfully.'
  },
  {
    id: 'g6-2-s2-q3',
    stage: 2,
    title: 'The Unanchored Number Game',
    researchTopic: 'Teacher Feedback Rating System',
    draftScaleOrItem: '"Please rate your science teacher\'s feedback effectiveness on a scale of 1 to 10.\n[1] [2] [3] [4] [5] [6] [7] [8] [9] [10]\n(No word labels explaining what 1 means or what 10 means!)',
    identifiedFlaw: 'neutral_anchor',
    options: [
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      }
      ],
    correctedDesign: 'Fully Anchored Scale:\n1 (Extremely Ineffective / No Useful Feedback)\n5 (Moderately Effective / Basic Feedback)\n10 (Extremely Effective / Comprehensive, Actionable Guidance)',
    explanation: 'Unanchored numbers lead to inverted ratings where students give a "1" meaning "Number One in the school" when the researcher records it as "terrible".',
    pedagogicalKey: 'Explicitly define endpoint and midpoint meanings on every numerical scale.'
  },
  {
    id: 'g6-2-s2-q4',
    stage: 2,
    title: 'The Intrusive Unskippable Identity Probe',
    researchTopic: 'Study on Family Financial Stress',
    draftScaleOrItem: 'Question 1: "Write down your family\'s exact monthly bank income in Rupiah and your home address. [Mandatory Question — cannot continue without answering]"',
    identifiedFlaw: 'avoid_jargon', // mapped conceptually to ethical sensitivity
    options: [
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      }
      ],
    correctedDesign: 'Ethical Anonymity Protocol:\nMake survey 100% anonymous (no names or addresses). For financial context, use broad optional ranges and include: "[ ] Prefer not to answer".',
    explanation: 'Ethical standards require protecting participant privacy and allowing optional opt-outs for sensitive socioeconomic indicators.',
    pedagogicalKey: 'Protect participant privacy with anonymous, optional demographic brackets.'
  },

  // STAGE 3: SYNTHESIS & INSTRUMENT CERTIFICATION (3 items)
  {
    id: 'g6-2-s3-q1',
    stage: 3,
    title: 'The Master Survey Instrument Blueprint',
    researchTopic: 'High School Digital Screen Time and Sleep Latency',
    draftScaleOrItem: 'A student portfolio includes: Clear introductory consent text, guaranteed anonymity, 5-point symmetrical Likert items with verbal anchors, non-overlapping demographic bands, an "Other" option on multiple-choice, and documentation of a 7-student pilot test.',
    identifiedFlaw: 'symmetrical_likert',
    options: [
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      }
      ],
    correctedDesign: 'Ready for full field deployment: The instrument satisfies all validity and reliability benchmarks.',
    explanation: 'This blueprint represents the benchmark standard required for Grade 10 Cambridge Global Perspectives research portfolios.',
    pedagogicalKey: 'A certified instrument balances ethics, clarity, symmetry, and pilot verification.'
  },
  {
    id: 'g6-2-s3-q2',
    stage: 3,
    title: 'The Biased Frequency Scale',
    researchTopic: 'Fast Food Consumption Frequency',
    draftScaleOrItem: 'Scale Options:\n[ ] Every day\n[ ] 4–6 times a week\n[ ] 2–3 times a week\n[ ] Once a week\n(No option for "Never" or "Less than once a month"!)',
    identifiedFlaw: 'mutually_exclusive',
    options: [
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      },
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'neutral_anchor',
        label: "Missing Neutral Anchor (Forced Choice)",
        description: "Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      }
      ],
    correctedDesign: 'Comprehensive Frequency Scale:\n[ ] Never\n[ ] Less than once a month\n[ ] 1–3 times a month\n[ ] 1–2 times a week\n[ ] 3 or more times a week',
    explanation: 'Truncating the lower end of a frequency scale forces non-consumers into artificial participation, ruining empirical truth.',
    pedagogicalKey: 'Always include "Never" or zero baselines on behavioral frequency scales.'
  },
  {
    id: 'g6-2-s3-q3',
    stage: 3,
    title: 'The Confusing Double-Negative Scale',
    researchTopic: 'Student Opinion on Exam Regulations',
    draftScaleOrItem: 'Prompt: "Students should not be prohibited from not wearing uniforms during exam week."\nOptions: [Disagree | Agree]',
    identifiedFlaw: 'avoid_jargon',
    options: [
        {
        rule: 'avoid_jargon',
        label: "Academic Jargon Overload",
        description: "Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret."
      },
        {
        rule: 'symmetrical_likert',
        label: "Asymmetric Likert Scale (Positive Skew)",
        description: "Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings."
      },
        {
        rule: 'mutually_exclusive',
        label: "Non-Mutually Exclusive Categories",
        description: "Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously."
      },
        {
        rule: 'pilot_testing',
        label: "Failure to Pilot Test",
        description: "Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts."
      }
      ],
    correctedDesign: 'Clear Direct Affirmative Syntax:\n"Students should be allowed to wear casual clothing during exam week." [Strongly Disagree to Strongly Agree]',
    explanation: 'Double negatives force respondents to solve grammatical algebra instead of expressing their true opinion. Always write in simple, direct affirmative syntax.',
    pedagogicalKey: 'Eliminate double negatives; state propositions in direct affirmative syntax.'
  }
];

// ============================================================================
// g6-3: NEUTRALITY TRIAL DATA (Courtroom Simulator)
// ============================================================================

export type InvestigatorViolation =
  | 'leading_witness'
  | 'badgering_loaded'
  | 'assumed_consensus'
  | 'speculation_unanchored'
  | 'sustained_neutral';

export interface NeutralityTrialItem {
  id: string;
  stage: 1 | 2 | 3;
  caseTitle: string;
  inquiryContext: string;
  investigatorQuestion: string;
  witnessProfile: string;
  verdict: InvestigatorViolation;
  options: {
    violation: InvestigatorViolation;
    label: string;
    description: string;
  }[];
  courtroomRuling: string;
  reconstructedQuestion: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G6_3_CHALLENGES: NeutralityTrialItem[] = [
  // STAGE 1: TRIAL OF THE INTERVIEW PROBES (4 items)
  {
    id: 'g6-3-s1-q1',
    stage: 1,
    caseTitle: 'The Sugar Tax Interrogation',
    inquiryContext: 'Interviewing a neighborhood traditional warung shopkeeper about soda taxes.',
    investigatorQuestion: '"Isn\'t it obvious that taxing sugary drinks will instantly ruin small shopkeepers like you and bankrupt your family business?"',
    witnessProfile: 'Ibu Warsi, local warung owner for 18 years.',
    verdict: 'leading_witness',
    options: [
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      }
      ],
    courtroomRuling: 'Sustained! The interviewer is testifying rather than interviewing. The emotional catastrophic framing coerces the witness into confirming the researcher\'s anti-tax bias.',
    reconstructedQuestion: '"If a government excise tax on sweetened packaged beverages is introduced, what impact—if any—do you anticipate on your shop\'s weekly sales and customer purchasing habits?"',
    pedagogicalKey: 'Interviewers must never put their own dramatic words into a participant\'s mouth.'
  },
  {
    id: 'g6-3-s1-q2',
    stage: 1,
    caseTitle: 'The Accusatory Principal Interview',
    inquiryContext: 'Interviewing the school principal on bullying prevention policies.',
    investigatorQuestion: '"Why has the school administration chosen to stay passive and ignore the rampant cyberbullying happening in Grade 10 classrooms?"',
    witnessProfile: 'Pak Bambang, high school principal.',
    verdict: 'badgering_loaded',
    options: [
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      }
      ],
    courtroomRuling: 'Sustained! The question presupposes administrative neglect without citing baseline evidence. A professional researcher asks about current monitoring systems objectively.',
    reconstructedQuestion: '"What institutional protocols and reporting channels currently exist in our school to detect and respond to reported incidents of student cyberbullying?"',
    pedagogicalKey: 'Investigate institutional protocols neutrally before making accusations of neglect.'
  },
  {
    id: 'g6-3-s1-q3',
    stage: 1,
    caseTitle: 'The Universal Agreement Assumption',
    inquiryContext: 'Focus group with parents regarding online remote learning.',
    investigatorQuestion: '"Since all parents in our city naturally agree that smartphone usage during study hours completely destroys memory retention, how should schools enforce phone bans?"',
    witnessProfile: 'Parent association representatives.',
    verdict: 'assumed_consensus',
    options: [
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      }
      ],
    courtroomRuling: 'Sustained! Declaring unanimous parental agreement erases diverse perspectives (e.g., parents who use educational apps) and contaminates focus group dynamics.',
    reconstructedQuestion: '"How do parents in your household perceive the relationship between smartphone usage and study habits, both in terms of potential educational benefits and potential distractions?"',
    pedagogicalKey: 'Never claim universal consensus on complex topics; explore diversity of experience.'
  },
  {
    id: 'g6-3-s1-q4',
    stage: 1,
    caseTitle: 'The Airtight Evidentiary Cross-Examination',
    inquiryContext: 'Interview with a municipal water engineer regarding river siltation.',
    investigatorQuestion: '"What specific changes in sediment concentrations and flow velocity have you recorded at the Kali Brantas monitoring stations over the past 3 dry seasons?"',
    witnessProfile: 'Ir. Dewi, senior hydrological engineer.',
    verdict: 'sustained_neutral',
    options: [
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      },
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      }
      ],
    courtroomRuling: 'Overruled! The question is a masterclass in objective academic inquiry: it anchors to specific technical metrics (sediment, velocity) and an exact timeframe (3 dry seasons).',
    reconstructedQuestion: 'Prompt is already exemplary: Proceed with witness testimony.',
    pedagogicalKey: 'Objective questions anchor directly to measurable data and defined timeframes.'
  },

  // STAGE 2: TRIAL OF INTERVIEWER INFLUENCE & BODY LANGUAGE (4 items)
  {
    id: 'g6-3-s2-q1',
    stage: 2,
    caseTitle: 'The Disapproving Interviewer Nod',
    inquiryContext: 'Interviewing a high school student about vegan vs meat diets.',
    investigatorQuestion: 'Student respondent says: "I actually enjoy eating beef rendang and don\'t plan to stop." The student interviewer scowls, rolls her eyes, sighs heavily, and asks: "Really? Even with the climate crisis?"',
    witnessProfile: 'Grade 10 student respondent.',
    verdict: 'leading_witness',
    options: [
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      }
      ],
    courtroomRuling: 'Violation Confirmed! Professional researchers maintain a calm, neutral poker face. Expressing moral disgust or rolling eyes contaminates the scientific integrity of the interview.',
    reconstructedQuestion: 'Neutral follow-up: "Thank you for sharing that perspective. What factors—such as cultural tradition, nutrition, or taste—most heavily influence your daily dietary choices?"',
    pedagogicalKey: 'Maintain neutral, non-judgmental composure regardless of what a participant says.'
  },
  {
    id: 'g6-3-s2-q2',
    stage: 2,
    caseTitle: 'The Unanchored Sci-Fi Speculation',
    inquiryContext: 'Field interview with a traditional fisherman in Banyuwangi.',
    investigatorQuestion: '"If artificial intelligence robots completely replace human commercial fishing trawlers in the year 2085, how will traditional wooden boat carpenters survive emotionally?"',
    witnessProfile: 'Pak Joko, coastal artisanal fisherman.',
    verdict: 'speculation_unanchored',
    options: [
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      }
      ],
    courtroomRuling: 'Sustained! Research questions must be grounded in observable, answerable phenomena. Asking rural fishermen to predict sci-fi scenarios in 2085 generates worthless fantasy data.',
    reconstructedQuestion: '"Over the past 5 years, how have changes in fuel prices and motorized commercial trawler competition affected your household fishing income?"',
    pedagogicalKey: 'Anchor field interviews to lived experience, not unanchored science fiction.'
  },
  {
    id: 'g6-3-s2-q3',
    stage: 2,
    caseTitle: 'The Double-Negative Courtroom Trap',
    inquiryContext: 'Interviewing a public transport official on electric bus adoption.',
    investigatorQuestion: '"Would you not agree that failing to not electrify the city bus fleet would be an indefensible ecological error?"',
    witnessProfile: 'Transportation Department director.',
    verdict: 'badgering_loaded',
    options: [
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      }
      ],
    courtroomRuling: 'Sustained! Convoluted negative syntax confuses participants and renders answers uninterpretable.',
    reconstructedQuestion: '"What are the primary operational challenges and potential environmental advantages currently considered in the transition toward electric buses?"',
    pedagogicalKey: 'Keep grammar simple, direct, and affirmative.'
  },
  {
    id: 'g6-3-s2-q4',
    stage: 2,
    caseTitle: 'The Neutral Balanced Deep-Dive',
    inquiryContext: 'Investigating student perspectives on artificial intelligence in homework.',
    investigatorQuestion: '"In what specific ways has the use of AI tools enhanced your learning, and conversely, in what ways has it created challenges or dependencies for your study routine?"',
    witnessProfile: 'Grade 10 peer respondent.',
    verdict: 'sustained_neutral',
    options: [
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      }
      ],
    courtroomRuling: 'Overruled! The question is an academic masterpiece: perfectly balanced across benefits and hazards, allowing the student to articulate trade-offs freely.',
    reconstructedQuestion: 'Prompt is sound: Proceed with testimony.',
    pedagogicalKey: 'Symmetrical open-ended questions explicitly invite both positive and negative evidence.'
  },

  // STAGE 3: THE FINAL PROTOCOL AUDIT (3 items)
  {
    id: 'g6-3-s3-q1',
    stage: 3,
    caseTitle: 'The Cross-Cultural Elder Interview Protocol',
    inquiryContext: 'Interviewing a village elder (Tetua Adat) on ancestral forest conservation.',
    investigatorQuestion: '"Hormat kami kepada Bapak. Kami ingin mempelajari pandangan masyarakat adat mengenai perlindungan hutan larangan: Bagaimana kearifan leluhur mengelola hutan ini, dan bagaimana interaksinya dengan regulasi taman nasional saat ini?"',
    witnessProfile: 'Tetua Adat Kampung Adat.',
    verdict: 'sustained_neutral',
    options: [
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      }
      ],
    courtroomRuling: 'Certified Sound! The protocol honors local cultural norms while maintaining rigorous academic neutrality.',
    reconstructedQuestion: 'Exemplary protocol: Proceed with academic interview.',
    pedagogicalKey: 'Cultural courtesy enhances research access without diluting scientific neutrality.'
  },
  {
    id: 'g6-3-s3-q2',
    stage: 3,
    caseTitle: 'The Pre-Emptive Confirmation Bias Trial',
    inquiryContext: 'Investigating fast fashion purchase habits among wealthy teenagers.',
    investigatorQuestion: '"You only buy Shein and Zara clothes because you care more about Instagram clout than third-world factory sweatshops, right?"',
    witnessProfile: 'High school consumer respondent.',
    verdict: 'badgering_loaded',
    options: [
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'speculation_unanchored',
        label: "Unanchored Speculation (Futility)",
        description: "Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      }
      ],
    courtroomRuling: 'Severe Violation! Research is not an ideological interrogation. Moral bullying alienates subjects and destroys scientific validity.',
    reconstructedQuestion: '"What key criteria—such as price, trend speed, quality, or brand sustainability—most strongly guide your fashion purchase decisions?"',
    pedagogicalKey: 'Academic research investigates decision criteria neutrally, avoiding self-righteous moral bullying.'
  },
  {
    id: 'g6-3-s3-q3',
    stage: 3,
    caseTitle: 'The Balanced Policy Trade-Off Evaluation',
    inquiryContext: 'Interview with a city council urban planner on pedestrian zoning.',
    investigatorQuestion: '"What measured changes in pedestrian foot traffic, retail revenue, and vehicular delivery congestion were documented after converting Jalan Malioboro into a semi-pedestrian corridor?"',
    witnessProfile: 'Bappeda Urban Planning Division Chief.',
    verdict: 'sustained_neutral',
    options: [
        {
        violation: 'leading_witness',
        label: "Leading Question (Hostile Bias)",
        description: "Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response."
      },
        {
        violation: 'sustained_neutral',
        label: "Sustained: Objective Inquiry",
        description: "Poses an impartial, balanced research question that allows the participant to answer freely without steering."
      },
        {
        violation: 'badgering_loaded',
        label: "Loaded Question (Presupposition Trap)",
        description: "Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question."
      },
        {
        violation: 'assumed_consensus',
        label: "False Consensus (Majority Presumption)",
        description: "Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective."
      }
      ],
    courtroomRuling: 'Overruled! Outstanding Cambridge Global Perspectives inquiry: balances economic, physical, and urban logistics indicators in one neutral, evidence-grounded prompt.',
    reconstructedQuestion: 'Protocol approved: Full marks for research rigor.',
    pedagogicalKey: 'A comprehensive inquiry inspects benefits, trade-offs, and logistics simultaneously.'
  }
];
