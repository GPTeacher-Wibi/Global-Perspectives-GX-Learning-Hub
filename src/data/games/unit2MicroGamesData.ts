/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 2 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 22–38)
 * Language Level: CEFR B1 English (Clear, direct, controlled academic vocabulary)
 *
 * Micro-Games included:
 * - g2-1: Basic vs Applied Lab (Purpose, intent, fundamental vs practical utility)
 * - g2-2: Research Pipeline Builder (The 8-step lifecycle, prerequisites, dependencies)
 * - g2-3: Methodology Matcher (Quantitative vs Qualitative vs Mixed Methods alignment)
 */

export interface MisconceptionAlert {
  label: string;
  explanation: string;
}

// ============================================================================
// g2-1: BASIC VS APPLIED LAB DATA
// ============================================================================

export type ResearchInquiryType = 'basic' | 'applied';

export interface BasicAppliedItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  scenarioContext: string;
  researchGoal: string;
  correctType: ResearchInquiryType;
  primaryMotivation: string;
  explanation: string;
  keyDistinction: string;
  misconceptionAlert?: MisconceptionAlert;
  options: {
    type: ResearchInquiryType;
    label: string;
    description: string;
  }[];
}

export const G2_1_CHALLENGES: BasicAppliedItem[] = [
  // STAGE 1: FOUNDATIONAL RECOGNITION (4 items)
  {
    id: 'g2-1-s1-q1',
    stage: 1,
    title: 'Lab 1: Memory Encoding & Deep Sleep',
    scenarioContext: 'Cognitive neuroscientists at Universitas Indonesia monitor neural oscillations in volunteers during deep rapid-eye-movement (REM) sleep using EEG caps.',
    researchGoal: 'To map the biochemical signaling pathways that convert short-term experiences into long-term memories in human brain cells.',
    correctType: 'basic',
    primaryMotivation: 'Expanding fundamental scientific understanding of how the human brain functions, without targeting an immediate commercial therapy.',
    explanation: 'Basic research (also called pure or fundamental research) seeks to expand human knowledge and discover underlying mechanisms. It is driven by curiosity and theoretical understanding.',
    keyDistinction: 'Goal: Discovering biological mechanisms vs. developing an immediate drug or product.',
    misconceptionAlert: {
      label: 'Misconception: Basic research is useless',
      explanation: 'Basic research creates the foundation of knowledge. Without understanding how memory works, doctors can never invent cures for Alzheimer’s disease.'
    },
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Driven by curiosity to discover fundamental mechanisms and expand scientific theory.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Designed directly to solve a concrete, immediate problem or create a practical solution.'
      }
    ]
  },
  {
    id: 'g2-1-s1-q2',
    stage: 1,
    title: 'Lab 2: Biodegradable Cassava Food Wrappers',
    scenarioContext: 'Food technologists in Bandung formulate flexible packaging sheets made from agricultural cassava starch and vegetable oil waste.',
    researchGoal: 'To engineer water-resistant takeaway food containers that completely decompose in municipal compost heaps within 30 days to replace Styrofoam.',
    correctType: 'applied',
    primaryMotivation: 'Solving an urgent real-world environmental crisis (urban packaging waste) with a measurable, commercial intervention.',
    explanation: 'Applied research applies existing scientific principles to solve a specific, practical real-world problem with immediate social and economic benefits.',
    keyDistinction: 'Goal: Creating a practical replacement for plastic waste.',
    misconceptionAlert: {
      label: 'Misconception: Applied research requires no scientific rigor',
      explanation: 'Applied research uses strict scientific controls, but its primary purpose is practical utility rather than pure theoretical knowledge.'
    },
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Driven by curiosity to discover fundamental mechanisms and expand scientific theory.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Designed directly to solve a concrete, immediate problem or create a practical solution.'
      }
    ]
  },
  {
    id: 'g2-1-s1-q3',
    stage: 1,
    title: 'Lab 3: Gravitational Wave Detection in Deep Space',
    scenarioContext: 'Astrophysicists analyze laser interferometer signals from deep space to observe ripples in the fabric of spacetime caused by colliding black holes.',
    researchGoal: 'To test whether Albert Einstein’s General Theory of Relativity accurately describes gravitational wave propagation at extreme cosmic distances.',
    correctType: 'basic',
    primaryMotivation: 'Testing cosmological theories and advancing theoretical physics, with no immediate commercial or industrial use.',
    explanation: 'Basic research tests foundational scientific laws. Proving or refining theoretical models expands human understanding of the universe.',
    keyDistinction: 'Goal: Testing foundational theoretical models of the universe.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Driven by curiosity to discover fundamental mechanisms and expand scientific theory.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Designed directly to solve a concrete, immediate problem or create a practical solution.'
      }
    ]
  },
  {
    id: 'g2-1-s1-q4',
    stage: 1,
    title: 'Lab 4: Dengue Fever Rapid Warning Algorithm',
    scenarioContext: 'Public health epidemiologists in Surabaya analyze rainfall data, mosquito trap counts, and hospital admission records over five years.',
    researchGoal: 'To build a smartphone alerting system for city clinics that predicts neighborhood dengue fever outbreaks 14 days before they peak.',
    correctType: 'applied',
    primaryMotivation: 'Directly preventing illness and reducing patient hospitalizations in a specific metropolitan region.',
    explanation: 'Applied research takes clinical and weather data to deliver an actionable health intervention that protects lives in the local community.',
    keyDistinction: 'Goal: Preventing disease outbreaks in local clinics.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Driven by curiosity to discover fundamental mechanisms and expand scientific theory.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Designed directly to solve a concrete, immediate problem or create a practical solution.'
      }
    ]
  },

  // STAGE 2: NUANCED & BORDERLINE CASES (4 items)
  {
    id: 'g2-1-s2-q1',
    stage: 2,
    title: 'Lab 5: Mangrove Root Salt-Filtration Proteins',
    scenarioContext: 'Marine botanists in North Sumatra investigate how Avicennia mangrove roots filter sodium ions at the molecular membrane level in brackish coastal water.',
    researchGoal: 'To identify the specific transport proteins and cellular channels that allow mangrove roots to separate fresh water from ocean salt.',
    correctType: 'basic',
    primaryMotivation: 'Even though clean drinking water is a major world problem, this specific study aims solely to understand the biological protein transport mechanism.',
    explanation: 'Beware of topic confusion: while desalinating water is an applied challenge, discovering how a plant cell operates at the molecular level is fundamental basic research.',
    keyDistinction: 'Focus: Cellular mechanism discovery (Basic), even if the topic relates to a global environmental theme.',
    misconceptionAlert: {
      label: 'Misconception: Environmental topics are automatically Applied',
      explanation: 'If the investigation seeks to uncover "how nature works" rather than "building a working filter device", it is basic research.'
    },
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Focused on molecular mechanisms and cellular biology principles.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Focused on immediate water treatment facility implementation.'
      }
    ]
  },
  {
    id: 'g2-1-s2-q2',
    stage: 2,
    title: 'Lab 6: Bio-Mimetic Water Desalination Filter Prototype',
    scenarioContext: 'Following the botanical discovery of mangrove root proteins, chemical engineers in Semarang synthesize artificial polymer membranes that mimic those exact protein channels.',
    researchGoal: 'To manufacture low-cost water purification filters for coastal fishermen that produce 200 liters of potable water per day without electricity.',
    correctType: 'applied',
    primaryMotivation: 'Translating cellular protein theory into a durable, deployable consumer product for low-income coastal communities.',
    explanation: 'This is applied research in action: it takes the fundamental knowledge discovered by basic research and engineers a functional community tool.',
    keyDistinction: 'Focus: Engineering a deployable device for fishermen.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Observing protein structures in ocean plants.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Building and testing a working community filter unit.'
      }
    ]
  },
  {
    id: 'g2-1-s2-q3',
    stage: 2,
    title: 'Lab 7: Linguistics of Regional Javanese Dialect Shifts',
    scenarioContext: 'Sociolinguists record 500 hours of conversational speech among three generations of families in rural Central Java.',
    researchGoal: 'To document grammatical particle mutations and formulate a theoretical model of language attrition in bilingual societies.',
    correctType: 'basic',
    primaryMotivation: 'Expanding sociolinguistic theory regarding how human languages evolve across generations under modernization.',
    explanation: 'Basic research in the social sciences explores how human cultures, languages, and social systems function, building conceptual models rather than policy prescriptions.',
    keyDistinction: 'Focus: Theoretical modeling of dialect evolution.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Developing sociolinguistic theory on dialect evolution.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Creating a smartphone language-translation dictionary app.'
      }
    ]
  },
  {
    id: 'g2-1-s2-q4',
    stage: 2,
    title: 'Lab 8: School Breakfast Timing & Classroom Attention Spans',
    scenarioContext: 'Educational psychologists partner with five junior high schools in East Jakarta to adjust morning meal distribution schedules.',
    researchGoal: 'To determine whether serving an egg-and-fruit snack at 07:15 AM decreases mid-morning disciplinary referrals and increases quiz completion rates in Grade 10 students.',
    correctType: 'applied',
    primaryMotivation: 'Evaluating a concrete school intervention to immediately improve student academic engagement and classroom management.',
    explanation: 'Applied research directly evaluates an institutional intervention (meal timing) to provide school principals with evidence-based policy guidance.',
    keyDistinction: 'Focus: Evaluating school operational policy to improve pupil welfare.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Mapping brain glucose metabolism pathways.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Testing a direct school schedule intervention for policy adoption.'
      }
    ]
  },

  // STAGE 3: THE TRANSLATIONAL BRIDGE (3 items — Interdependence & Synthesis)
  {
    id: 'g2-1-s3-q1',
    stage: 3,
    title: 'Lab 9: The Solar Cell Efficiency Paradox',
    scenarioContext: 'A national renewable energy consortium debates funding allocations. Team Alpha studies the quantum electron spin in perovskite crystals. Team Beta designs rooftop mounting brackets for rainy tropical climates.',
    researchGoal: 'To understand the symbiotic relationship between Team Alpha’s basic physics and Team Beta’s applied engineering.',
    correctType: 'basic', // Team Alpha orientation
    primaryMotivation: 'Recognizing that basic research discovers the physical limits of materials, which applied research then turns into functional rooftop technology.',
    explanation: 'Team Alpha is conducting basic research (quantum electron dynamics). Without their basic discoveries, applied engineers would have no efficient materials to build with.',
    keyDistinction: 'Basic research provides the scientific bedrock that applied innovation depends upon.',
    misconceptionAlert: {
      label: 'Misconception: Basic and Applied research are opponents',
      explanation: 'They are two halves of the same pipeline. Basic research generates knowledge; applied research transforms knowledge into human solutions.'
    },
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Team Alpha Focus)',
        description: 'Investigating quantum electron behavior to discover energy transmission limits.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Team Beta Focus)',
        description: 'Engineering weather-resistant brackets for domestic rooftops.'
      }
    ]
  },
  {
    id: 'g2-1-s3-q2',
    stage: 3,
    title: 'Lab 10: Artificial Intelligence Ethics & Bias Audits',
    scenarioContext: 'Computer scientists at ITB audit a facial recognition algorithm used by Jakarta traffic police. They test error rates across diverse skin tones and lighting conditions to rewrite the system threshold.',
    researchGoal: 'To rectify algorithmic misidentification errors in municipal law enforcement to safeguard civil rights.',
    correctType: 'applied',
    primaryMotivation: 'Diagnosing and resolving an urgent operational flaw in an active public technology deployment.',
    explanation: 'This is applied research because the inquiry aims directly at reforming an existing municipal software system to prevent false arrests and injustice.',
    keyDistinction: 'Focus: Auditing and fixing an active municipal public service tool.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Developing mathematical proofs of universal matrix multiplication.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Fixing algorithmic bias errors in active police traffic software.'
      }
    ]
  },
  {
    id: 'g2-1-s3-q3',
    stage: 3,
    title: 'Lab 11: Deep-Sea Hydrothermal Vent Microbial Genetics',
    scenarioContext: 'Oceanographers explore volcanic ocean ridges 3,000 meters below sea level in the Banda Sea, isolating bacteria that thrive in superheated toxic sulfur vents.',
    researchGoal: 'To determine how bacterial DNA repair enzymes prevent degradation in water temperatures exceeding 115°C.',
    correctType: 'basic',
    primaryMotivation: 'Exploring the biological limits of life on Earth and discovering novel enzymatic mechanisms under extreme physical pressures.',
    explanation: 'Basic research explores uncharted natural frontiers. Even if pharmaceutical firms might someday use these heat-resistant enzymes, the current study is driven purely by scientific curiosity.',
    keyDistinction: 'Focus: Exploring the foundational limits of biological life on Earth.',
    options: [
      {
        type: 'basic',
        label: 'Basic Research (Pure Inquiry)',
        description: 'Investigating the fundamental biochemical survival limits of extremophiles.'
      },
      {
        type: 'applied',
        label: 'Applied Research (Practical Inquiry)',
        description: 'Manufacturing a commercial laundry detergent enzyme product.'
      }
    ]
  }
];

// ============================================================================
// g2-2: RESEARCH PIPELINE BUILDER DATA
// ============================================================================

export type ResearchStepKey =
  | 'problem-formulation'
  | 'literature-review'
  | 'research-question-objectives'
  | 'methodology-design'
  | 'data-collection'
  | 'data-analysis'
  | 'discussion-findings'
  | 'conclusion-recommendations';

export interface ResearchStepDefinition {
  key: ResearchStepKey;
  stepNumber: number;
  label: string;
  shortDesc: string;
  iconName: string;
}

export const CANONICAL_RESEARCH_STEPS: ResearchStepDefinition[] = [
  {
    key: 'problem-formulation',
    stepNumber: 1,
    label: '1. Problem Formulation',
    shortDesc: 'Identify an unresolved issue, real-world contradiction, or gap in knowledge.',
    iconName: 'AlertCircle'
  },
  {
    key: 'literature-review',
    stepNumber: 2,
    label: '2. Literature Review',
    shortDesc: 'Critically examine what prior academic researchers have already discovered and debated.',
    iconName: 'BookOpen'
  },
  {
    key: 'research-question-objectives',
    stepNumber: 3,
    label: '3. Question & Objectives',
    shortDesc: 'Frame a focused, answerable inquiry question and state precise investigation goals.',
    iconName: 'Compass'
  },
  {
    key: 'methodology-design',
    stepNumber: 4,
    label: '4. Methodology & Design',
    shortDesc: 'Select sampling techniques, ethical safeguards, and quantitative/qualitative tools.',
    iconName: 'Settings'
  },
  {
    key: 'data-collection',
    stepNumber: 5,
    label: '5. Data Collection',
    shortDesc: 'Gather empirical evidence through surveys, experiments, interviews, or observations.',
    iconName: 'Database'
  },
  {
    key: 'data-analysis',
    stepNumber: 6,
    label: '6. Data Analysis',
    shortDesc: 'Calculate statistical values or extract qualitative codes and themes from raw data.',
    iconName: 'BarChart2'
  },
  {
    key: 'discussion-findings',
    stepNumber: 7,
    label: '7. Discussion & Interpretation',
    shortDesc: 'Interpret what the findings mean and compare them against the literature review.',
    iconName: 'MessageSquare'
  },
  {
    key: 'conclusion-recommendations',
    stepNumber: 8,
    label: '8. Conclusion & Action',
    shortDesc: 'Summarize core insights, state research limitations, and propose actionable solutions.',
    iconName: 'CheckCircle'
  }
];

export interface PipelineChallengeItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  researchContext: string;
  flawOrChallengeDescription: string;
  promptQuestion: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G2_2_CHALLENGES: PipelineChallengeItem[] = [
  // STAGE 1: PIPELINE DIAGNOSTICS — WHAT IS MISSING? (4 items)
  {
    id: 'g2-2-s1-q1',
    stage: 1,
    title: 'Diagnostic 1: The Rushed Survey Blunder',
    researchContext: 'A Grade 10 student in Medan notices that many classmates feel exhausted on Monday mornings. He immediately prints 100 survey sheets and distributes them in homeroom during break, without reading previous studies on adolescent sleep.',
    flawOrChallengeDescription: 'The student skipped Step 2 (Literature Review) and Step 3 (Focused Question). As a result, his survey questions ask vague, unscientific questions that experts already proved unhelpful 10 years ago.',
    promptQuestion: 'Which prerequisite step was critically neglected before data collection?',
    options: [
      {
        id: 'opt-1a',
        text: 'Conducting a Literature Review to understand established variables and existing findings.',
        isCorrect: true,
        feedback: 'Correct! Skipping the literature review causes researchers to "reinvent the wheel" or use flawed questions that prior research has already refined.'
      },
      {
        id: 'opt-1b',
        text: 'Publishing the findings in an international medical journal.',
        isCorrect: false,
        feedback: 'Incorrect. Publishing occurs at the very end of the research lifecycle, not before data collection.'
      },
      {
        id: 'opt-1c',
        text: 'Calculating the standard deviation of classroom grades.',
        isCorrect: false,
        feedback: 'Incorrect. Calculating statistics is part of data analysis, which occurs after data is properly collected.'
      }
    ],
    pedagogicalKey: 'A literature review is not optional homework; it defines your variables and protects against amateur mistakes.',
    misconceptionAlert: {
      label: 'Misconception: Literature review is just a summary of books',
      explanation: 'A literature review shapes your research question and tells you what methods worked or failed for other researchers.'
    }
  },
  {
    id: 'g2-2-s1-q2',
    stage: 1,
    title: 'Diagnostic 2: The Premature Conclusion Trap',
    researchContext: 'Researchers in Yogyakarta test a new organic rice fertilizer on 10 test plots. After gathering harvesting weights, the team writes an energetic press release claiming the fertilizer "solves world hunger forever" before running any statistical tests.',
    flawOrChallengeDescription: 'The team jumped straight from Data Collection (Step 5) to Conclusion (Step 8), skipping Data Analysis (Step 6) and Discussion (Step 7).',
    promptQuestion: 'What vital analytical gate must be completed before any legitimate conclusion can be stated?',
    options: [
      {
        id: 'opt-2a',
        text: 'Analyzing numerical differences through statistical tests and interpreting whether the yield increases are statistically significant.',
        isCorrect: true,
        feedback: 'Correct! Raw numbers mean nothing without data analysis. A researcher cannot claim success without testing whether differences happened by random chance.'
      },
      {
        id: 'opt-2b',
        text: 'Rewriting the original research question to make it much easier to answer.',
        isCorrect: false,
        feedback: 'Incorrect. Changing your question to fit unanalyzed raw data is dishonest academic practice.'
      },
      {
        id: 'opt-2c',
        text: 'Purchasing 500 more hectares of farmland immediately.',
        isCorrect: false,
        feedback: 'Incorrect. Commercial expansion is a business decision, not a step in the scientific research pipeline.'
      }
    ],
    pedagogicalKey: 'Raw data is not evidence until it is systematically analyzed and critically discussed.',
    misconceptionAlert: {
      label: 'Misconception: Raw data speaks for itself',
      explanation: 'Data never speaks for itself. Rigorous analysis and comparison with existing literature are required to verify findings.'
    }
  },
  {
    id: 'g2-2-s1-q3',
    stage: 1,
    title: 'Diagnostic 3: The Missing Ethical Safeguard',
    researchContext: 'A university psychology team wants to study high school cyberbullying. They plan to secretly record students’ private WhatsApp chat groups without informing parents, teachers, or the students themselves.',
    flawOrChallengeDescription: 'The team failed to build ethical protocols and informed consent procedures into Step 4 (Methodology & Design).',
    promptQuestion: 'Why must ethical considerations be finalized during Methodology Design, rather than after data collection?',
    options: [
      {
        id: 'opt-3a',
        text: 'Because research ethics committees must approve consent protocols and privacy protections before any data collection begins to prevent harm.',
        isCorrect: true,
        feedback: 'Correct! In Cambridge Global Perspectives, ethical integrity is non-negotiable. Violating consent and privacy invalidates the entire study.'
      },
      {
        id: 'opt-3b',
        text: 'Because ethical reviews are only required if the study takes place in a foreign country.',
        isCorrect: false,
        feedback: 'Incorrect. Ethics applies to all research involving human participants, regardless of location.'
      },
      {
        id: 'opt-3c',
        text: 'Because ethics forms are simply bureaucratic paperwork that can be signed after the study is published.',
        isCorrect: false,
        feedback: 'Incorrect. Unethical data cannot be published and can result in severe legal and academic penalties.'
      }
    ],
    pedagogicalKey: 'Methodology is not just tools; it is the moral framework that guarantees safety, consent, and validity.',
    misconceptionAlert: {
      label: 'Misconception: Ethics is separate from methodology',
      explanation: 'Methodology encompasses participant safety, anonymity, and informed consent. Without ethics, research is invalid.'
    }
  },
  {
    id: 'g2-2-s1-q4',
    stage: 1,
    title: 'Diagnostic 4: The Unanchored Discussion',
    researchContext: 'A student writes a 5-page Discussion section explaining her survey results on plastic water bottles. However, she does not cite a single academic article or compare her findings to government environmental reports.',
    flawOrChallengeDescription: 'The student treats the Discussion as a personal opinion essay, failing to link Step 7 (Discussion) back to Step 2 (Literature Review).',
    promptQuestion: 'How does an authentic academic Discussion section connect with earlier research pipeline stages?',
    options: [
      {
        id: 'opt-4a',
        text: 'It compares current empirical findings against the theories and findings identified in the literature review to show what is confirmed or challenged.',
        isCorrect: true,
        feedback: 'Correct! The Discussion section closes the loop: it explains how your new data fits into the wider academic conversation established in Step 2.'
      },
      {
        id: 'opt-4b',
        text: 'It repeats the raw survey tables word-for-word without adding any explanatory text.',
        isCorrect: false,
        feedback: 'Incorrect. Repeating raw data belongs in the Findings section; the Discussion explains the significance and implications.'
      },
      {
        id: 'opt-4c',
        text: 'It apologizes to the reader for choosing a boring research topic.',
        isCorrect: false,
        feedback: 'Incorrect. Academic discussions are objective analyses of what the evidence reveals.'
      }
    ],
    pedagogicalKey: 'Research is a cumulative dialogue: your discussion must converse with the researchers who came before you.'
  },

  // STAGE 2: STAGE DEPENDENCIES & WORKFLOW (4 items)
  {
    id: 'g2-2-s2-q1',
    stage: 2,
    title: 'Dependency 1: Question Formulation vs. Methodology Choice',
    researchContext: 'A research advisor tells an undergraduate: "Stop trying to pick your favorite tool (like surveys or focus groups) until you have finalized your research question."',
    flawOrChallengeDescription: 'Students often choose a method they like (e.g. making an online Google Form) before deciding what they actually want to discover.',
    promptQuestion: 'Why does Step 3 (Research Question) strictly dictate Step 4 (Methodology)?',
    options: [
      {
        id: 'opt-1a',
        text: 'Because the nature of the inquiry question (measuring numbers vs. exploring human experiences) determines whether quantitative or qualitative tools are required.',
        isCorrect: true,
        feedback: 'Correct! The research question is the compass. The tool must serve the question, never the other way around.'
      },
      {
        id: 'opt-1b',
        text: 'Because research questions are always written in English, while methodologies are written in mathematics.',
        isCorrect: false,
        feedback: 'Incorrect. Both sections use academic English and disciplinary conventions.'
      },
      {
        id: 'opt-1c',
        text: 'Because surveys are universally required in every single research study regardless of topic.',
        isCorrect: false,
        feedback: 'Incorrect. Surveys are only appropriate when measuring population frequencies or attitudes.'
      }
    ],
    pedagogicalKey: 'Methodological tools are vehicles; your research question is the destination.'
  },
  {
    id: 'g2-2-s2-q2',
    stage: 2,
    title: 'Dependency 2: The Role of Hypotheses in Quantitative Studies',
    researchContext: 'In an experiment testing whether blue light from mobile phones reduces melatonin hormone secretion, researchers formulate a precise null hypothesis ($H_0$) and alternative hypothesis ($H_1$).',
    flawOrChallengeDescription: 'Understanding where hypotheses belong in the 8-step pipeline.',
    promptQuestion: 'At which stage must hypotheses be stated, and why can they not be invented after data collection?',
    options: [
      {
        id: 'opt-2a',
        text: 'In Step 3 (Objectives & Hypotheses), because hypotheses must be pre-registered predictions based on theory, not invented after seeing the results.',
        isCorrect: true,
        feedback: 'Correct! Formulating a hypothesis after looking at your data (known as HARKing) is scientific misconduct.'
      },
      {
        id: 'opt-2b',
        text: 'In Step 8 (Conclusion), because researchers only know what they predicted once the study is finished.',
        isCorrect: false,
        feedback: 'Incorrect. A prediction made after the fact is not a hypothesis; it is hindsight bias.'
      },
      {
        id: 'opt-2c',
        text: 'In Step 6 (Data Analysis), because computers automatically generate hypotheses during calculation.',
        isCorrect: false,
        feedback: 'Incorrect. Hypotheses are intellectual products grounded in prior literature.'
      }
    ],
    pedagogicalKey: 'A hypothesis is a priori: it is a testable prediction established before evidence is collected.'
  },
  {
    id: 'g2-2-s2-q3',
    stage: 2,
    title: 'Dependency 3: Piloting the Research Instrument',
    researchContext: 'Before launching an interview study with 40 traditional market traders in Solo, a researcher conducts a pilot interview with two vendors.',
    flawOrChallengeDescription: 'Piloting sits at the boundary between Step 4 (Methodology Design) and Step 5 (Data Collection).',
    promptQuestion: 'What essential pipeline function does pilot testing serve?',
    options: [
      {
        id: 'opt-3a',
        text: 'It identifies ambiguous questions, cultural misunderstandings, and timing issues so the instrument can be calibrated before full data collection.',
        isCorrect: true,
        feedback: 'Correct! Piloting is a quality-control dress rehearsal that prevents wasted time and invalid datasets.'
      },
      {
        id: 'opt-3b',
        text: 'It guarantees that all 40 participants will give identical answers.',
        isCorrect: false,
        feedback: 'Incorrect. Research does not seek identical answers; it seeks truthful, reliable data.'
      },
      {
        id: 'opt-3c',
        text: 'It allows the researcher to skip the final conclusion if the pilot goes well.',
        isCorrect: false,
        feedback: 'Incorrect. A pilot test tests the instrument, not the full research hypothesis.'
      }
    ],
    pedagogicalKey: 'Piloting tests the measurement tool so that your actual study tests the real phenomenon.'
  },
  {
    id: 'g2-2-s2-q4',
    stage: 2,
    title: 'Dependency 4: Transparent Limitations in the Conclusion',
    researchContext: 'A team concludes their study on urban flood awareness. In the final chapter, they dedicate two paragraphs to explaining that their sample only included smartphone owners, leaving elderly residents without phones unrepresented.',
    flawOrChallengeDescription: 'Understanding the integrity of Step 8 (Conclusion & Recommendations).',
    promptQuestion: 'Why does an authentic academic conclusion actively highlight its own limitations?',
    options: [
      {
        id: 'opt-4a',
        text: 'Because scientific honesty demands acknowledging scope boundaries, preventing over-generalization and guiding future researchers.',
        isCorrect: true,
        feedback: 'Correct! Stating limitations is a sign of high academic rigor, not weakness. It defines where the findings are valid.'
      },
      {
        id: 'opt-4b',
        text: 'Because the researchers want to convince readers that the study was completely useless.',
        isCorrect: false,
        feedback: 'Incorrect. Limitations define contextual boundaries, not failure.'
      },
      {
        id: 'opt-4c',
        text: 'Because it is a legal requirement to avoid paying municipal research taxes.',
        isCorrect: false,
        feedback: 'Incorrect. Limitations are an academic validity requirement, not a tax regulation.'
      }
    ],
    pedagogicalKey: 'Every study has boundaries: acknowledging limitations is the hallmark of honest inquiry.'
  },

  // STAGE 3: THE COMPLETE LIFECYCLE AUDIT (2 Synthesis Scenarios)
  {
    id: 'g2-2-s3-q1',
    stage: 3,
    title: 'Lifecycle Case 1: The Surabaya Green School Initiative',
    researchContext: 'A high school environmental club wants to investigate why plastic recycling bins placed in corridors are frequently contaminated with organic food waste. The club president suggests four possible next steps.',
    flawOrChallengeDescription: 'They have formulated the problem (Step 1). What is the most disciplined next sequence of actions?',
    promptQuestion: 'Which sequence maintains proper research pipeline integrity?',
    options: [
      {
        id: 'opt-1a',
        text: 'Review behavioral signage literature (Step 2) → formulate a specific question on bin placement and color cues (Step 3) → design an observational protocol (Step 4).',
        isCorrect: true,
        feedback: 'Correct! This follows the logical pipeline: study existing behavioral research first, refine the focus, then design the empirical observation method.'
      },
      {
        id: 'opt-1b',
        text: 'Immediately lock the bins (Step 5) → write disciplinary referral letters (Step 8) → guess what the literature says later (Step 2).',
        isCorrect: false,
        feedback: 'Incorrect. This jumps straight to punitive action without understanding the root causes through research.'
      },
      {
        id: 'opt-1c',
        text: 'Publish a school newspaper article claiming students are hopeless (Step 8) → interview two friends (Step 5).',
        isCorrect: false,
        feedback: 'Incorrect. This reverses the entire research sequence and replaces evidence with emotional frustration.'
      }
    ],
    pedagogicalKey: 'Master researchers move deliberately: Understanding precedes design; design precedes data; data precedes conclusion.'
  },
  {
    id: 'g2-2-s3-q2',
    stage: 3,
    title: 'Lifecycle Case 2: The Iterative Loop (When Findings Surprise You)',
    researchContext: 'An agricultural research team tests whether a soil fungus boosts chili pepper growth. To their astonishment, the fungus kills 80% of the seedlings. A junior researcher wants to delete the bad data.',
    flawOrChallengeDescription: 'Navigating unexpected empirical findings in Step 6 (Data Analysis) and Step 7 (Discussion).',
    promptQuestion: 'How should a scientific researcher respond when empirical findings contradict the initial hypothesis?',
    options: [
      {
        id: 'opt-2a',
        text: 'Report the unexpected outcome objectively in Findings, analyze why the mortality occurred in Discussion, and update agricultural theory.',
        isCorrect: true,
        feedback: 'Correct! In authentic science, "negative" or unexpected results are valuable discoveries. Falsifying a hypothesis advances knowledge.'
      },
      {
        id: 'opt-2b',
        text: 'Delete the mortality data and invent fictional high chili yields so the paper looks successful.',
        isCorrect: false,
        feedback: 'Incorrect. Falsifying data is the most severe crime in academic research and permanently ruins credibility.'
      },
      {
        id: 'opt-2c',
        text: 'Blame the seedlings and pretend the experiment never happened.',
        isCorrect: false,
        feedback: 'Incorrect. Science learns as much from what fails as from what succeeds.'
      }
    ],
    pedagogicalKey: 'Science is empirical: we conform our theories to reality, never reality to our theories.'
  }
];

// ============================================================================
// g2-3: METHODOLOGY MATCHER DATA
// ============================================================================

export type MethodologyType = 'quantitative' | 'qualitative' | 'mixed';

export interface MethodologyChallengeItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  researchQuestion: string;
  inquiryContext?: string;
  researchContext?: string;
  correctParadigm: MethodologyType;
  primaryDataNeeded: string;
  bestInstrument: string;
  inappropriateChoice: string;
  whyInappropriate: string;
  explanation: string;
  keyDistinction?: string;
  pedagogicalKey?: string;
  misconceptionAlert?: MisconceptionAlert;
  options: {
    paradigm: MethodologyType;
    label: string;
    description: string;
  }[];
}

export const G2_3_CHALLENGES: MethodologyChallengeItem[] = [
  // STAGE 1: PARADIGM ALIGNMENT (4 items)
  {
    id: 'g2-3-s1-q1',
    stage: 1,
    title: 'Inquiry 1: Nationwide Youth Smartphone Usage Frequencies',
    researchQuestion: 'What is the average daily screen time among Indonesian teenagers aged 14–18, and does it correlate with standardized math exam scores across 34 provinces?',
    inquiryContext: 'The Ministry of Education requires statistically representative numerical data across 10,000 high school students.',
    correctParadigm: 'quantitative',
    primaryDataNeeded: 'Numerical measurements (screen hours per day, exam scores from 0 to 100) analyzed through statistical correlation.',
    bestInstrument: 'Large-scale closed-ended survey with synchronized digital screen-time logging.',
    inappropriateChoice: 'Qualitative in-depth interviews with 5 students.',
    whyInappropriate: 'Five personal stories cannot establish a statistically valid correlation across 34 provinces.',
    explanation: 'When the research question asks "How much?", "What percentage?", or "Is there a correlation across a large population?", a Quantitative methodology is required.',
    keyDistinction: 'Quantifying numerical patterns across large representative samples.',
    misconceptionAlert: {
      label: 'Misconception: Quantitative is always "better" than Qualitative',
      explanation: 'Neither is superior. Quantitative answers "how many/how much"; Qualitative answers "why and how people experience it".'
    },
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Methodology',
        description: 'Measures numerical variables, uses statistical analysis, and tests hypotheses across representative samples.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Methodology',
        description: 'Explores lived experiences, cultural meanings, and personal narratives through in-depth textual analysis.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Combines both quantitative measurement and qualitative depth in a unified multi-phase study.'
      }
    ]
  },
  {
    id: 'g2-3-s1-q2',
    stage: 1,
    title: 'Inquiry 2: Lived Experience of First-Generation College Students',
    researchQuestion: 'How do first-generation university students from rural farming villages navigate emotional feelings of belonging, identity shifts, and family expectations in Jakarta?',
    inquiryContext: 'A higher education sociologist wants to understand the deep emotional transitions, cultural conflicts, and psychological resilience of 12 students.',
    correctParadigm: 'qualitative',
    primaryDataNeeded: 'Descriptive, nuanced personal narratives, metaphors, and emotional accounts in the students’ own words.',
    bestInstrument: 'In-depth semi-structured interviews and reflective narrative journals.',
    inappropriateChoice: 'A 10-question multiple-choice questionnaire with "Yes/No" tick boxes.',
    whyInappropriate: 'Tick-box surveys strip away all emotional complexity and nuance from personal life stories.',
    explanation: 'When an inquiry seeks to understand subjective experiences, personal feelings, and cultural identity, a Qualitative methodology is the optimal design.',
    keyDistinction: 'Exploring deep subjective meaning and cultural identity.',
    misconceptionAlert: {
      label: 'Misconception: Qualitative research is "just opinions"',
      explanation: 'Qualitative research uses systematic coding, triangulation, and rigorous thematic analysis to uncover dependable social patterns.'
    },
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Methodology',
        description: 'Numerical measurement of predefined variables.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Methodology',
        description: 'In-depth exploration of human meaning, emotional transitions, and cultural identity.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Combining numerical surveys and deep interviews.'
      }
    ]
  },
  {
    id: 'g2-3-s1-q3',
    stage: 1,
    title: 'Inquiry 3: Efficacy of an Organic Bio-Pesticide on Corn Borers',
    researchQuestion: 'Does spraying a 5% neem leaf extract solution reduce the larval population of corn borers per plant compared to synthetic chemical pesticides over 60 days?',
    inquiryContext: 'An agronomy lab manages 24 identical randomized crop plots with controlled moisture, soil chemistry, and lighting.',
    correctParadigm: 'quantitative',
    primaryDataNeeded: 'Direct counts of insect larvae per plant, percentage of damaged crop leaves, and grain harvest weight in kilograms.',
    bestInstrument: 'Controlled experiment with randomized experimental and control groups.',
    inappropriateChoice: 'Focus group discussions asking corn borers how they feel about neem leaves.',
    whyInappropriate: 'Natural science experiments require controlled empirical measurement, not participant dialogue.',
    explanation: 'Experimental science testing cause-and-effect relationships between physical variables requires controlled quantitative measurement.',
    keyDistinction: 'Controlled measurement of physical dependent and independent variables.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Methodology',
        description: 'Controlled experimental measurement of numerical counts and physical yields.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Methodology',
        description: 'Narrative exploration of descriptive accounts.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Combining experimental trials with social interviews.'
      }
    ]
  },
  {
    id: 'g2-3-s1-q4',
    stage: 1,
    title: 'Inquiry 4: Cultural Meaning of Sacred Weaving Patterns in Sumba',
    researchQuestion: 'What spiritual beliefs, ancestral mythologies, and clan lineage obligations are encoded in the traditional Ikat textile motifs woven by master artisans in East Sumba?',
    inquiryContext: 'An anthropological researcher lives in a traditional village for 4 months to document vanishing oral traditions.',
    correctParadigm: 'qualitative',
    primaryDataNeeded: 'Rich observational field notes, symbolic interpretations of motifs, and oral history narratives from elder master weavers.',
    bestInstrument: 'Ethnographic participant observation and open-ended oral history interviews.',
    inappropriateChoice: 'An automated numerical phone poll with 1,000 automated robocalls.',
    whyInappropriate: 'Cultural symbolism and sacred art cannot be captured by automated multiple-choice telephone buttons.',
    explanation: 'Understanding the symbolic meaning of cultural artifacts requires immersion and qualitative ethnographic methods.',
    keyDistinction: 'Documenting symbolic meaning and indigenous cultural heritage.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Methodology',
        description: 'Statistical tallies of textile colors.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Methodology',
        description: 'Ethnographic field immersion, symbolic analysis, and oral history interviews.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Combining textile export tallies with folklore interviews.'
      }
    ]
  },

  // STAGE 2: INSTRUMENT FIT & PARADIGM TRADE-OFFS (4 items)
  {
    id: 'g2-3-s2-q1',
    stage: 2,
    title: 'Inquiry 5: School Canteen Healthy Food Reform',
    researchQuestion: 'How does the introduction of a low-sugar fruit snack bar affect daily calorie consumption across 600 students, and what cultural barriers prevent students from buying it?',
    inquiryContext: 'The school health committee wants to know BOTH the exact drop in sugar grams purchased AND why students complain that the snacks "feel like medicine".',
    correctParadigm: 'mixed',
    primaryDataNeeded: 'Phase 1: Cash register sales data (numerical). Phase 2: Student focus group discussions (qualitative explanations).',
    bestInstrument: 'Explanatory Sequential Mixed Design: analyze register data first, then conduct student focus groups to explain the trend.',
    inappropriateChoice: 'Relying exclusively on sales data without ever asking students why they dislike the taste.',
    whyInappropriate: 'Numbers reveal what happened, but fail to explain why students hold negative cultural attitudes toward the snacks.',
    explanation: 'Mixed Methods is essential when numbers alone show a trend, but qualitative insight is required to explain human motivations behind the trend.',
    keyDistinction: 'Combining numerical trends with human motivation and context.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Only',
        description: 'Track cash register transactions only.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Only',
        description: 'Conduct interview discussions only.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Integrate quantitative sales tracking with qualitative student focus groups.'
      }
    ]
  },
  {
    id: 'g2-3-s2-q2',
    stage: 2,
    title: 'Inquiry 6: Public Transit Fare Sensitivity vs. Private Scooter Habits',
    researchQuestion: 'To what extent does a Rp 2,000 reduction in LRT ticket prices increase daily transit ridership among suburban commuters in Palembang?',
    inquiryContext: 'The municipal transport agency needs an exact mathematical model of price elasticity to balance City Hall’s transportation budget.',
    correctParadigm: 'quantitative',
    primaryDataNeeded: 'Turnstile tap counts, commuter travel distances, and fare elasticity calculations modeled statistically.',
    bestInstrument: 'Automated electronic fare-card data and regression modeling.',
    inappropriateChoice: 'Writing poems about commuter emotional feelings on the platform.',
    whyInappropriate: 'Municipal budgeting decisions require precise financial elasticity numbers and passenger volume data.',
    explanation: 'Economic price elasticity and municipal infrastructure modeling require quantitative measurement.',
    keyDistinction: 'Econometric modeling and numerical fare elasticity.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Methodology',
        description: 'Statistical modeling of ridership volume and fare elasticity.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Methodology',
        description: 'Diary entries of commuter emotional reflections.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Combining fare tallies with literary essays.'
      }
    ]
  },
  {
    id: 'g2-3-s2-q3',
    stage: 2,
    title: 'Inquiry 7: Stigma and Coping Strategies in Teenage Burn Survivors',
    researchQuestion: 'How do adolescent burn survivors construct self-worth and navigate social stigmatization when returning to secondary school after reconstructive surgery?',
    inquiryContext: 'A pediatric hospital counseling team seeks to develop empathetic psychological support protocols for 8 recovering teenagers.',
    correctParadigm: 'qualitative',
    primaryDataNeeded: 'Sensitive, trauma-informed interview transcripts, drawings, and therapeutic dialogues focusing on personal identity and resilience.',
    bestInstrument: 'In-depth, open-ended clinical qualitative interviews in a secure, confidential environment.',
    inappropriateChoice: 'A timed 100-question multiple-choice test scored by an automated scanner.',
    whyInappropriate: 'Standardized exams cannot provide the psychological safety or depth needed to explore sensitive personal trauma.',
    explanation: 'Sensitive clinical and psychological studies of stigma and personal coping demand patient-centered qualitative inquiry.',
    keyDistinction: 'Empathetic exploration of vulnerable human psychological experiences.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Methodology',
        description: 'Automated Likert-scale scoring sheets.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Methodology',
        description: 'Trauma-informed, in-depth psychological interviews and narrative reflection.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Testing heart rates while conducting speed quizzes.'
      }
    ]
  },
  {
    id: 'g2-3-s2-q4',
    stage: 2,
    title: 'Inquiry 8: National Flood Warning App Adoption in Coastal Semarang',
    researchQuestion: 'What proportion of coastal residents have installed the national tidal flood alert app, and what specific community beliefs lead others to ignore warnings?',
    inquiryContext: 'Disaster management authorities want to measure app adoption percentage across 2,000 households and also uncover why elderly residents rely on traditional drum signals instead.',
    correctParadigm: 'mixed',
    primaryDataNeeded: 'Quantitative installation rates across demographics, paired with qualitative interviews explaining traditional cultural beliefs.',
    bestInstrument: 'Convergent Parallel Mixed Design: household survey + community elder narrative interviews.',
    inappropriateChoice: 'Measuring app downloads and assuming non-users are simply "lazy".',
    whyInappropriate: 'Without qualitative inquiry, officials overlook deep cultural reliance on ancestral drum signaling (kentongan).',
    explanation: 'Disaster resilience requires both knowing the demographic scale of adoption (quantitative) and understanding the cultural worldview of community elders (qualitative).',
    keyDistinction: 'Combining adoption metrics with cultural worldview analysis.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Only',
        description: 'Count app download numbers from the server.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Only',
        description: 'Interview three fishermen about ocean folklore.'
      },
      {
        paradigm: 'mixed',
        label: 'Mixed Methods',
        description: 'Pair demographic survey data with ethnographic interviews on local signaling traditions.'
      }
    ]
  },

  // STAGE 3: ADVANCED DESIGN SYNTHESIS (3 items)
  {
    id: 'g2-3-s3-q1',
    stage: 3,
    title: 'Inquiry 9: Designing an Explanatory Sequential Study',
    researchContext: 'A nationwide survey reveals that math test anxiety among female Grade 10 students increased by 34% over three years, while male anxiety remained flat. The researcher now wants to design Phase 2.',
    researchQuestion: 'Why did math anxiety selectively surge among female students during this specific time period?',
    correctParadigm: 'mixed',
    primaryDataNeeded: 'Qualitative focus groups with female students, math teachers, and school counselors to unpack the underlying social and pedagogical reasons.',
    bestInstrument: 'Explanatory Sequential Design (Quantitative survey completed first, followed by Qualitative interviews to explain the surprising statistical gap).',
    inappropriateChoice: 'Repeating the exact same survey three more times without ever asking why.',
    whyInappropriate: 'Repeating a survey only confirms that the gap exists; it cannot uncover the root social causes.',
    explanation: 'Explanatory Sequential mixed methods is the gold standard when unexpected quantitative statistics demand qualitative investigation to explain their meaning.',
    keyDistinction: 'Using qualitative methods to explain unexpected quantitative statistics.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Repeat Quantitative Survey',
        description: 'Administer the identical survey again to 5,000 more students.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Only',
        description: 'Discard all survey data and interview two teachers.'
      },
      {
        paradigm: 'mixed',
        label: 'Explanatory Sequential Mixed Design',
        description: 'Use the quantitative survey results to frame in-depth qualitative focus groups that explain why the gender gap emerged.'
      }
    ]
  },
  {
    id: 'g2-3-s3-q2',
    stage: 3,
    title: 'Inquiry 10: The Myth of Qualitative "Subjective Weakness"',
    researchContext: 'A critic claims: "A study with only 15 qualitative interviews is unscientific because you cannot calculate an average or p-value from words."',
    researchQuestion: 'How does an authentic Global Perspectives researcher defend the scientific rigor of qualitative inquiry?',
    correctParadigm: 'qualitative',
    primaryDataNeeded: 'Demonstrating methodological rigor: prolonged engagement, audit trails, member checking, and systematic thematic saturation.',
    bestInstrument: 'Rigorous qualitative methodology with explicit coding frameworks and triangulation.',
    inappropriateChoice: 'Agreeing with the critic and pretending that qualitative research is just casual storytelling.',
    whyInappropriate: 'Qualitative research has its own established validity standards (credibility, transferability, dependability).',
    explanation: 'Qualitative inquiry does not seek statistical generalization to a population; it seeks deep conceptual transferability and authentic understanding of complex human phenomena.',
    keyDistinction: 'Qualitative rigor rests on depth, credibility, and systematic thematic analysis.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Force Numbers into Qualitative Data',
        description: 'Count how many letters are in each word and calculate an average word length.'
      },
      {
        paradigm: 'qualitative',
        label: 'Defend Qualitative Rigor',
        description: 'Explain that qualitative research uses systematic thematic coding, member checking, and triangulation to produce dependable human insights.'
      },
      {
        paradigm: 'mixed',
        label: 'Abandon Qualitative Research',
        description: 'Stop studying human experiences and only study physical objects.'
      }
    ]
  },
  {
    id: 'g2-3-s3-q3',
    stage: 3,
    title: 'Inquiry 11: The Convergent Triangulation Challenge',
    researchContext: 'A study investigates whether remote online schooling during monsoon floods caused learning loss in rural Sumatra. The team collects standardized reading test scores, interviews teachers, and conducts parent home observations simultaneously.',
    researchQuestion: 'How do the quantitative scores, teacher accounts, and family home realities converge to give an integrated picture of learning during climate emergencies?',
    correctParadigm: 'mixed',
    primaryDataNeeded: 'Convergent parallel integration: comparing numerical test score changes against qualitative home learning constraints to see where they corroborate.',
    bestInstrument: 'Convergent Parallel Mixed Design: collecting quantitative and qualitative data concurrently and merging them in a synthesis matrix.',
    inappropriateChoice: 'Treating the quantitative and qualitative datasets as completely unrelated projects published by different authors.',
    whyInappropriate: 'Failing to integrate the data destroys the entire purpose of a mixed-methods investigation.',
    explanation: 'A convergent mixed-methods study gathers quantitative metrics and qualitative experiences side-by-side to cross-validate findings and deliver a complete, multi-layered answer.',
    keyDistinction: 'Simultaneous convergence and cross-validation of metrics and lived realities.',
    options: [
      {
        paradigm: 'quantitative',
        label: 'Quantitative Only',
        description: 'Look only at test score spreadsheets.'
      },
      {
        paradigm: 'qualitative',
        label: 'Qualitative Only',
        description: 'Listen only to teacher anecdotes.'
      },
      {
        paradigm: 'mixed',
        label: 'Convergent Parallel Mixed Design',
        description: 'Collect test scores and lived experiences concurrently, integrating them to reveal the full multi-dimensional reality.'
      }
    ]
  }
];
