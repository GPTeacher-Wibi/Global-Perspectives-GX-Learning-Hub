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
    prescriptionOptionA: '"To what extent do you support or oppose a ban on single-use plastic bottles in the school cafeteria? [Strongly Oppose | Oppose | Neutral | Support | Strongly Support]"',
    prescriptionOptionB: '"Why do students hate marine life and insist on buying plastic bottles?"',
    prescriptionOptionC: '"Do you think plastic bottles are toxic and overpriced in the cafeteria?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'leading',
        label: 'Leading Question',
        description: 'Uses persuasive adjectives ("destructive", "toxic", "innocent turtles") and nudging syntax ("don\'t you agree") to steer respondents toward a desired answer.'
      },
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question',
        description: 'Combines two unrelated issues into one item.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague / Ambiguous Question',
        description: 'Uses subjective timeframes or undefined adverbs.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Neutral Question',
        description: 'Completely balanced with no emotional bias.'
      }
    ],
    explanation: 'The question is heavily Leading: emotional vocabulary and coercive phrasing pressure the student to answer "Yes". Option A provides an objective, balanced 5-point Likert scale.',
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
    prescriptionOptionB: '"Don\'t you love studying in the quiet library with super-fast Internet?"',
    prescriptionOptionC: '"Do you think the library needs more air conditioning and comfortable sofas?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question',
        description: 'Asks about two distinct variables ("quiet atmosphere" AND "fast Wi-Fi") in a single item, making it impossible to answer if one is true and the other is false.'
      },
      {
        defect: 'leading',
        label: 'Leading Question',
        description: 'Pushes the respondent toward a specific opinion.'
      },
      {
        defect: 'loaded',
        label: 'Loaded Question',
        description: 'Contains an unproven presupposition of guilt.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Neutral Question',
        description: 'Exemplary survey question.'
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
    prescriptionOptionA: 'Stage into two neutral empirical questions:\n1. "On an average school day, approximately how many minutes do you spend on social media video platforms?"\n2. "What are your primary purposes for using these platforms? [Entertainment, Educational Tutorials, News, Socializing with Friends]"',
    prescriptionOptionB: '"Don\'t you agree that TikTok ruins student intelligence?"',
    prescriptionOptionC: '"Do you watch TikTok videos and play online video games at night?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'loaded',
        label: 'Loaded Question (Presupposition Trap)',
        description: 'Contains an unproven, hostile assumption ("students waste time on brain-rotting videos") that forces respondents to accept guilt regardless of how they reply.'
      },
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question',
        description: 'Combines two questions into one.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'Missing timeframes.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Neutral Question',
        description: 'Completely fair.'
      }
    ],
    explanation: 'A Loaded question traps the participant with a baked-in accusation. Option A measures baseline minutes first, then neutrally investigates motivation without insult.',
    pedagogicalKey: 'Never bake personal accusations or stereotypes into research prompts.'
  },
  {
    id: 'g6-1-s1-q4',
    stage: 1,
    title: 'The Elastic Exercise Survey',
    inquiryField: 'Student Physical Fitness',
    patientQuestion: '"Do you engage in regular physical exercise frequently? [Yes / No]"',
    correctDefect: 'vague_ambiguous',
    prescriptionOptionA: '"In the past 7 days, on how many days did you participate in at least 30 minutes of moderate-to-vigorous physical exercise? [0 days | 1–2 days | 3–4 days | 5 or more days]"',
    prescriptionOptionB: '"Are you lazy or do you love sports?"',
    prescriptionOptionC: '"Don\'t you believe exercise is wonderful for teenagers?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'vague_ambiguous',
        label: 'Vague / Ambiguous Question',
        description: 'Relies on elastic adverbs like "regular" and "frequently", which vary wildly in meaning between different respondents.'
      },
      {
        defect: 'leading',
        label: 'Leading Question',
        description: 'Pressuring the respondent.'
      },
      {
        defect: 'loaded',
        label: 'Loaded Question',
        description: 'Presupposing guilt.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Neutral Question',
        description: 'Rigorous question.'
      }
    ],
    explanation: 'Words like "regularly" and "frequently" are subjective: an athlete thinks it means 6 times a week, while a couch potato thinks it means once a month. Option A replaces adverbs with exact days and duration.',
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
    prescriptionOptionA: '"Which of the following food categories would you most like to see expanded in the school canteen? [Fresh fruit / juices | Traditional Indonesian snacks | Balanced meals | Western food options | No change desired]"',
    prescriptionOptionB: '"Why do you think fried food is so dangerous for student organs?"',
    prescriptionOptionC: '"Do you eat fried tempeh and drink ice tea every single morning?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'leading',
        label: 'Leading Question (Sensational Adjectives)',
        description: 'Uses loaded adjectives ("delicious, nutritious" vs. "greasy, cancer-causing") to manipulate food preference results.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'Missing food names.'
      },
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question',
        description: 'Asking about fruit and vegetables together.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Question',
        description: 'Completely neutral.'
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
    prescriptionOptionA: 'Split into two separate standardized 5-point Likert items:\n1. "The amount of homework assigned in Grade 10 is manageable."\n2. "The current 7:00 AM school start time allows me to obtain adequate sleep."',
    prescriptionOptionB: '"Don\'t you agree that homework causes severe insomnia?"',
    prescriptionOptionC: '"Why do teachers assign homework if students are tired?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question (Conjoined Topics)',
        description: 'Pairs homework volume with school starting hours into a single binary prompt.'
      },
      {
        defect: 'loaded',
        label: 'Loaded Question',
        description: 'Assumes all teachers are incompetent.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'Fails to mention school.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Question',
        description: 'Already perfect.'
      }
    ],
    explanation: 'A respondent might believe homework is light, but school starts much too early. Combining them prevents any meaningful statistical conclusion. Option A isolates both variables cleanly.',
    pedagogicalKey: 'Separate homework policy from schedule policy into independent items.'
  },
  {
    id: 'g6-1-s2-q3',
    stage: 2,
    title: 'The Cheating Presumption',
    inquiryField: 'Academic Integrity and AI Tools',
    patientQuestion: '"How frequently do you use ChatGPT to cheat on your English essays without your teacher noticing?"',
    correctDefect: 'loaded',
    prescriptionOptionA: 'Step 1: "Have you ever used generative AI tools (such as ChatGPT) when working on English writing assignments? [Never | Rarely | Sometimes | Frequently]"\nStep 2: "If yes, for which tasks do you use it? [Brainstorming ideas | Grammar checking | Drafting paragraphs | Full essay writing]"',
    prescriptionOptionB: '"Why are students so dishonest when using AI software?"',
    prescriptionOptionC: '"Do you use ChatGPT and Google Translate on all exams?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'loaded',
        label: 'Loaded Question (Presumption of Dishonesty)',
        description: 'Equates any AI usage with covert cheating, preventing honest disclosure of legitimate learning uses.'
      },
      {
        defect: 'leading',
        label: 'Leading Question',
        description: 'Encouraging students to confess.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'Not mentioning English.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Question',
        description: 'Safe question.'
      }
    ],
    explanation: 'Presupposing guilt forces students to either lie or refuse to participate. Option A uses progressive filtering to explore ethical and pedagogical use neutrally.',
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
    prescriptionOptionB: '"Don\'t you think the school Wi-Fi is terribly slow?"',
    prescriptionOptionC: '"Why does the IT department refuse to upgrade our bandwidth?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'vague_ambiguous',
        label: 'Vague / Ambiguous Question (Undefined Thresholds)',
        description: '"Fast enough" has no standard bandwidth metric, and "recently" has no calendar boundary.'
      },
      {
        defect: 'leading',
        label: 'Leading Question',
        description: 'Steering the answer.'
      },
      {
        defect: 'loaded',
        label: 'Loaded Question',
        description: 'Blaming IT technicians.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Question',
        description: 'Clear question.'
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
    prescriptionOptionA: '"This question is already fully healthy and certified: It evaluates a single policy variable, uses neutral non-coercive syntax, provides a symmetrical balanced 5-point Likert scale, and anchors the scope clearly."',
    prescriptionOptionB: '"We should add emotional descriptions of solar power to make it more exciting."',
    prescriptionOptionC: '"We should combine solar panels with electric vehicle batteries."',
    correctPrescription: 'A',
    options: [
      {
        defect: 'healthy_question',
        label: 'Certified Healthy / Sound Research Question',
        description: 'Meets all 9 principles of sound question design: clear, single-focused, neutral, and psychometrically balanced.'
      },
      {
        defect: 'leading',
        label: 'Leading Question',
        description: 'It pushes people to buy solar panels.'
      },
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question',
        description: 'It mentions public funds and solar panels.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'It does not specify solar wattage.'
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
    prescriptionOptionA: 'Split and neutralize into two objective items:\n1. "How safe do you feel when traveling on local angkot minivans? [Very Unsafe to Very Safe]"\n2. "How would you rate driver compliance with traffic speed limits and signals? [Poor | Fair | Good | Excellent]"',
    prescriptionOptionB: '"Why are angkot drivers allowed to terrorize passengers on public roads?"',
    prescriptionOptionC: '"Do you take angkot or ride a motorcycle to school every morning?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'leading',
        label: 'Leading & Emotionally Coercive Question',
        description: 'Packs extreme emotional adjectives ("terrified", "angry", "unsafe", "recklessly", "irresponsible") that dictate the only acceptable answer.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'Does not name angkot.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Question',
        description: 'Already neutral.'
      },
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question Only',
        description: 'Only combines two modes of transport.'
      }
    ],
    explanation: 'The original item is aggressive advocacy, not scientific research. Option A replaces sensational adjectives with calm, standardized rating scales.',
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
    prescriptionOptionB: '"Don\'t you agree that universities are greedy and ignore rural youth?"',
    prescriptionOptionC: '"Why does the government refuse to build colleges in every village?"',
    correctPrescription: 'A',
    options: [
      {
        defect: 'double_barreled',
        label: 'Double-Barreled Question (Conflated Financial & Geographic Factors)',
        description: 'Tuition fees and geographic distance are two distinct barriers that require independent analysis.'
      },
      {
        defect: 'vague_ambiguous',
        label: 'Vague Question',
        description: 'Fails to define university.'
      },
      {
        defect: 'loaded',
        label: 'Loaded Question',
        description: 'Assumes universities are illegal.'
      },
      {
        defect: 'healthy_question',
        label: 'Healthy Question',
        description: 'Fully calibrated.'
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
        rule: 'symmetrical_likert',
        label: 'Asymmetric Likert Scale (Positive Skew)',
        description: 'All 5 options are positive or neutral, offering zero negative choices for dissatisfied respondents, which artificially inflates satisfaction ratings.'
      },
      {
        rule: 'avoid_jargon',
        label: 'Academic Jargon Overload',
        description: 'Uses words that high school students cannot understand.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Categories',
        description: 'Numbers overlap.'
      },
      {
        rule: 'pilot_testing',
        label: 'Failure to Pilot Test',
        description: 'Skipping testing.'
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
        rule: 'mutually_exclusive',
        label: 'Non-Mutually Exclusive (Overlapping) Brackets',
        description: 'A 14-year-old or 18-year-old fits into two separate options simultaneously, invalidating demographic categorization.'
      },
      {
        rule: 'symmetrical_likert',
        label: 'Asymmetric Scale',
        description: 'Scale lacks balance.'
      },
      {
        rule: 'avoid_jargon',
        label: 'Technical Jargon',
        description: 'Too academic.'
      },
      {
        rule: 'neutral_anchor',
        label: 'Missing Neutral Anchor',
        description: 'No middle choice.'
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
        label: 'Missing Neutral Anchor (Forced-Choice Distortion)',
        description: 'Omitting a neutral middle option ("Neither Agree nor Disagree") forces indifferent respondents to falsely express positive or negative opinions.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Categories',
        description: 'Categories overlap.'
      },
      {
        rule: 'avoid_jargon',
        label: 'Excessive Jargon',
        description: 'Difficult language.'
      },
      {
        rule: 'pilot_testing',
        label: 'Lack of Pilot Testing',
        description: 'Untested survey.'
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
        rule: 'avoid_jargon',
        label: 'Excessive Academic Jargon / Inaccessible Language',
        description: 'Using dense philosophical terms ("habitus", "epistemological self-efficacy", "hermeneutic") alienates high school participants and produces random guesses.'
      },
      {
        rule: 'symmetrical_likert',
        label: 'Asymmetric Likert Scale',
        description: 'Imbalanced scale.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Categories',
        description: 'Options overlap.'
      },
      {
        rule: 'neutral_anchor',
        label: 'Missing Neutral Anchor',
        description: 'No middle anchor.'
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
        rule: 'pilot_testing',
        label: 'Failure to Conduct Pilot Testing (Dry Run)',
        description: 'Distributing an untested instrument to hundreds of people guarantees that typos, confusing wording, and technical form bugs will permanently corrupt the entire dataset.'
      },
      {
        rule: 'symmetrical_likert',
        label: 'Likert Scale Asymmetry',
        description: 'Only 3 points.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Numbers',
        description: 'Numbers overlap.'
      },
      {
        rule: 'neutral_anchor',
        label: 'Missing Neutral Anchor',
        description: 'No middle option.'
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
        rule: 'mutually_exclusive',
        label: 'Incomplete / Non-Exhaustive Response Options',
        description: 'Fails to provide choices for all valid possibilities, forcing respondents to pick false answers or abandon the questionnaire.'
      },
      {
        rule: 'symmetrical_likert',
        label: 'Likert Scale Imbalance',
        description: 'Imbalanced points.'
      },
      {
        rule: 'avoid_jargon',
        label: 'Academic Jargon',
        description: 'Too complex.'
      },
      {
        rule: 'neutral_anchor',
        label: 'Neutral Anchor Gap',
        description: 'Missing neutral.'
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
        label: 'Unanchored Numerical Scale (Undefined Endpoints)',
        description: 'Numbers without verbal labels create severe ambiguity: some students think 1 is first place / best, while others think 10 is maximum excellence.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Categories',
        description: 'Options overlap.'
      },
      {
        rule: 'avoid_jargon',
        label: 'High Jargon Level',
        description: 'Language is too hard.'
      },
      {
        rule: 'pilot_testing',
        label: 'Lack of Pilot',
        description: 'No pilot test.'
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
        rule: 'avoid_jargon',
        label: 'Ethical Violation & Privacy Breach (Mandatory Sensitive Data)',
        description: 'Violates research ethics by forcing teenagers to disclose private financial identifiers without informed consent or anonymous protection.'
      },
      {
        rule: 'symmetrical_likert',
        label: 'Likert Asymmetry',
        description: 'Imbalanced scale.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Age Bands',
        description: 'Ages overlap.'
      },
      {
        rule: 'pilot_testing',
        label: 'No Pilot Test',
        description: 'Untested survey.'
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
        rule: 'symmetrical_likert',
        label: 'Exemplary Gold-Standard Survey Instrument',
        description: 'Demonstrates complete mastery of all Cambridge questionnaire design principles, psychometric symmetry, ethics, and pilot testing.'
      },
      {
        rule: 'avoid_jargon',
        label: 'Fatal Jargon Defect',
        description: 'Contains too many words.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Fatal Overlap',
        description: 'Categories are broken.'
      },
      {
        rule: 'pilot_testing',
        label: 'Untested Instrument',
        description: 'Has not been tested.'
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
        rule: 'mutually_exclusive',
        label: 'Truncated Incomplete Scale (Missing Zero / Infrequent Options)',
        description: 'Forces people who never eat fast food into declaring that they eat it at least once a week, severely distorting dietary statistics.'
      },
      {
        rule: 'avoid_jargon',
        label: 'Academic Jargon',
        description: 'Too complex.'
      },
      {
        rule: 'neutral_anchor',
        label: 'Missing Neutral Anchor',
        description: 'Needs a middle option.'
      },
      {
        rule: 'pilot_testing',
        label: 'Pilot Failure',
        description: 'Needs a pilot.'
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
        label: 'Double-Negative Syntactic Trap',
        description: '"Not be prohibited from not wearing" creates mental gridlock; clicking "Disagree" means you agree that people should wear uniforms, confusing respondents completely.'
      },
      {
        rule: 'symmetrical_likert',
        label: 'Asymmetric Points',
        description: 'Needs more points.'
      },
      {
        rule: 'mutually_exclusive',
        label: 'Overlapping Categories',
        description: 'Categories overlap.'
      },
      {
        rule: 'pilot_testing',
        label: 'Pilot Testing Gap',
        description: 'Missing dry run.'
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
        violation: 'leading_witness',
        label: 'Objection: Leading the Witness (Hostile Bias)',
        description: 'The investigator implants the catastrophic conclusion ("instantly ruin", "bankrupt") directly into the prompt rather than asking about actual economic effects.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Objection: False Consensus',
        description: 'Assuming all shopkeepers agree.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Objection: Pure Speculation',
        description: 'Asking about the year 2090.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Perfectly Neutral Inquiry',
        description: 'The prompt is completely objective.'
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
        label: 'Objection: Badgering & Loaded Presupposition',
        description: 'Treats unproven accusations ("administration is passive", "rampant bullying") as established facts, trapping the interviewee.'
      },
      {
        violation: 'leading_witness',
        label: 'Objection: Leading Witness',
        description: 'Asking a simple yes/no question.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Objection: Assumed Consensus',
        description: 'Believing everyone agrees.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Fair Academic Question',
        description: 'The question is fair.'
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
        violation: 'assumed_consensus',
        label: 'Objection: Assumed Universal Consensus',
        description: 'Falsely asserts that "all parents naturally agree" on a contentious cognitive issue, silencing parents who utilize digital educational tools successfully.'
      },
      {
        violation: 'leading_witness',
        label: 'Objection: Leading Witness',
        description: 'Asking about soda.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Objection: Unanchored Speculation',
        description: 'Asking about science fiction.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Standard Neutral Prompt',
        description: 'Balanced question.'
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
        violation: 'sustained_neutral',
        label: 'Overruled: Certified Objective & Evidence-Based',
        description: 'The prompt is completely neutral, specific, non-judgmental, grounded in measurable empirical parameters, and anchored to an exact timeframe.'
      },
      {
        violation: 'leading_witness',
        label: 'Objection: Leading Witness',
        description: 'Telling the engineer what to say.'
      },
      {
        violation: 'badgering_loaded',
        label: 'Objection: Loaded Presupposition',
        description: 'Accusing the engineer of pollution.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Objection: Wild Speculation',
        description: 'Asking unanswerable questions.'
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
        violation: 'leading_witness',
        label: 'Investigator Bias: Evaluative Non-Verbal & Verbal Chastisement',
        description: 'The interviewer shows visible disgust and morally chastises the respondent, destroying psychological safety and causing the respondent to alter future answers.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Assumed Consensus',
        description: 'Assuming all students are vegan.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Unanchored Speculation',
        description: 'Asking about outer space.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Standard Probing Technique',
        description: 'Interviewer acted professionally.'
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
        label: 'Objection: Unanchored Sci-Fi Speculation',
        description: 'Forces a field participant to guess about an impossible, speculative scenario 60 years in the future that has zero empirical connection to their current reality.'
      },
      {
        violation: 'leading_witness',
        label: 'Leading Witness',
        description: 'Pushing a specific answer.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Assumed Consensus',
        description: 'Assuming all fish are extinct.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Good Inquiry',
        description: 'Relevant research.'
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
        violation: 'badgering_loaded',
        label: 'Objection: Convoluted Double-Negative & Moral Trap',
        description: 'Deliberately puzzles the witness with triple negatives ("not agree", "failing to not electrify") while embedding a moral attack ("indefensible error").'
      },
      {
        violation: 'assumed_consensus',
        label: 'Assumed Consensus',
        description: 'Assuming buses are broken.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Speculation',
        description: 'Future prediction.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Clear Inquiry',
        description: 'Direct question.'
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
        violation: 'sustained_neutral',
        label: 'Overruled: Exemplary Symmetrical Open-Ended Probe',
        description: 'Gives equal, explicit weight to both positive benefits (enhancement) and potential negative drawbacks (dependencies), inviting authentic nuance.'
      },
      {
        violation: 'leading_witness',
        label: 'Objection: Leading Witness',
        description: 'Telling them AI is evil.'
      },
      {
        violation: 'badgering_loaded',
        label: 'Objection: Badgering',
        description: 'Accusing student of cheating.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Objection: Assumed Consensus',
        description: 'Assuming all students use AI.'
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
        violation: 'sustained_neutral',
        label: 'Approved Protocol: Culturally Respectful & Objective',
        description: 'Shows cultural respect (Hormat) while setting up an objective comparative study between customary law (adat) and state park policy.'
      },
      {
        violation: 'leading_witness',
        label: 'Leading Witness',
        description: 'Dictating the answer.'
      },
      {
        violation: 'badgering_loaded',
        label: 'Badgering',
        description: 'Insulting the elder.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Speculation',
        description: 'Unanchored guesses.'
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
        label: 'Objection: Extreme Hostile Accusation & Moral Bullying',
        description: 'Attacks the respondent\'s moral character, resulting in instant defensiveness or interview termination.'
      },
      {
        violation: 'speculation_unanchored',
        label: 'Speculation',
        description: 'Guessing the future.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Assumed Consensus',
        description: 'Assuming clothing is free.'
      },
      {
        violation: 'sustained_neutral',
        label: 'Sustained: Tough Questioning',
        description: 'Valid research inquiry.'
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
        violation: 'sustained_neutral',
        label: 'Certified Gold Standard: Multi-Stakeholder Trade-Off Inquiry',
        description: 'Investigates pedestrian volume, merchant revenue, and delivery congestion simultaneously, ensuring a holistic multi-perspective evaluation.'
      },
      {
        violation: 'leading_witness',
        label: 'Leading Witness',
        description: 'Steering the results.'
      },
      {
        violation: 'badgering_loaded',
        label: 'Badgering',
        description: 'Accusing the planner.'
      },
      {
        violation: 'assumed_consensus',
        label: 'Assumed Consensus',
        description: 'Assuming streets are closed.'
      }
    ],
    courtroomRuling: 'Overruled! Outstanding Cambridge Global Perspectives inquiry: balances economic, physical, and urban logistics indicators in one neutral, evidence-grounded prompt.',
    reconstructedQuestion: 'Protocol approved: Full marks for research rigor.',
    pedagogicalKey: 'A comprehensive inquiry inspects benefits, trade-offs, and logistics simultaneously.'
  }
];
