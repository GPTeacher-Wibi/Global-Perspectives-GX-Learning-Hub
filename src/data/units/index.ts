import { Unit, Slide, PracticeQuestion } from '../../types/curriculum';
import { Game } from '../../types/game';
import { UNIT_1_PRACTICE_QUESTIONS } from '../practice/unit1Practice';
import { UNIT_2_PRACTICE_QUESTIONS } from '../practice/unit2Practice';
import { UNIT_3_PRACTICE_QUESTIONS } from '../practice/unit3Practice';
import { UNIT_4_PRACTICE_QUESTIONS } from '../practice/unit4Practice';
import { UNIT_5_PRACTICE_QUESTIONS } from '../practice/unit5Practice';
import { UNIT_6_PRACTICE_QUESTIONS } from '../practice/unit6Practice';
import { UNIT_7_PRACTICE_QUESTIONS } from '../practice/unit7Practice';
import { UNIT_8_PRACTICE_QUESTIONS } from '../practice/unit8Practice';
import { UNIT_9_PRACTICE_QUESTIONS } from '../practice/unit9Practice';
import { UNIT_10_PRACTICE_QUESTIONS } from '../practice/unit10Practice';
import { UNIT_1_SLIDES } from './unit1Slides';
import { UNIT_2_SLIDES } from './unit2Slides';
import { UNIT_3_SLIDES } from './unit3Slides';
import { UNIT_4_SLIDES } from './unit4Slides';
import { UNIT_5_SLIDES } from './unit5Slides';
import { UNIT_6_SLIDES } from './unit6Slides';
import { UNIT_7_SLIDES } from './unit7Slides';
import { UNIT_8_SLIDES } from './unit8Slides';
import { UNIT_9_SLIDES } from './unit9Slides';
import { UNIT_10_SLIDES } from './unit10Slides';

export {
  UNIT_1_SLIDES,
  UNIT_2_SLIDES,
  UNIT_3_SLIDES,
  UNIT_4_SLIDES,
  UNIT_5_SLIDES,
  UNIT_6_SLIDES,
  UNIT_7_SLIDES,
  UNIT_8_SLIDES,
  UNIT_9_SLIDES,
  UNIT_10_SLIDES,
  UNIT_1_PRACTICE_QUESTIONS,
  UNIT_2_PRACTICE_QUESTIONS,
  UNIT_3_PRACTICE_QUESTIONS,
  UNIT_4_PRACTICE_QUESTIONS,
  UNIT_5_PRACTICE_QUESTIONS,
  UNIT_6_PRACTICE_QUESTIONS,
  UNIT_7_PRACTICE_QUESTIONS,
  UNIT_8_PRACTICE_QUESTIONS,
  UNIT_9_PRACTICE_QUESTIONS,
  UNIT_10_PRACTICE_QUESTIONS
};
export const SAMPLE_UNIT1_SLIDES = UNIT_1_SLIDES;

export const UNITS_DATA: Unit[] = [
  {
    id: 'unit-1',
    number: 1,
    title: 'Understanding Perspectives',
    shortDescription: 'Explore cultural, economic, political, and social lenses from personal to global levels.',
    dimension: 'Kewargaan (Citizenship)',
    themeColor: 'from-blue-600 to-indigo-700',
    accentBg: 'bg-blue-50 text-blue-800 border-blue-200',
    objectives: [
      "Define 'perspective' and explain its key characteristics.",
      'Distinguish between cultural, economic, political, and social perspectives using local examples.',
      'Analyze a global issue from at least three different levels (Personal, Local, National, Global).'
    ],
    keyConcepts: [
      'Subjective & Evolving Nature of Perspectives',
      'Four Analytical Lenses (Cultural, Economic, Political, Social)',
      'Four Levels of Perspective (Personal, Local, National, Global)'
    ],
    keywords: [
      'Perspective',
      'Cultural Lens',
      'Economic Outlook',
      'Political Ideology',
      'Social Stratification',
      'Global Citizenship'
    ],
    textbookPageStart: 6,
    textbookPageEnd: 21,
    plannedSlidesCount: 27,
    plannedQuestionsCount: 15,
    plannedGamesCount: 3,
    slides: UNIT_1_SLIDES,
    sampleQuestions: UNIT_1_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-2',
    number: 2,
    title: 'Understanding Research',
    shortDescription: 'Understand basic vs. applied inquiry, quantitative vs. qualitative methods, and the 8-step research process.',
    dimension: 'Penalaran Kritis (Critical Reasoning)',
    themeColor: 'from-emerald-600 to-teal-700',
    accentBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    objectives: [
      'Define research and differentiate between basic and applied research.',
      'Distinguish between quantitative and qualitative research methodologies.',
      'Identify the key components and the 8-step cycle of a research study.'
    ],
    keyConcepts: [
      'Empirical, Systematic & Replicable Inquiry',
      'Basic vs. Applied Research',
      'Quantitative vs. Qualitative Paradigms'
    ],
    keywords: [
      'Research',
      'Basic Research',
      'Applied Research',
      'Quantitative',
      'Qualitative',
      'Hypothesis',
      'Methodology'
    ],
    textbookPageStart: 22,
    textbookPageEnd: 38,
    plannedSlidesCount: 27,
    plannedQuestionsCount: 15,
    plannedGamesCount: 3,
    slides: UNIT_2_SLIDES,
    sampleQuestions: UNIT_2_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-3',
    number: 3,
    title: 'Data Analysis',
    shortDescription: 'Transform raw data into meaningful insights using descriptive statistics, spreadsheet tools, and clear charts.',
    dimension: 'Penalaran Kritis (Critical Reasoning)',
    themeColor: 'from-amber-600 to-orange-700',
    accentBg: 'bg-amber-50 text-amber-800 border-amber-200',
    objectives: [
      'Distinguish between quantitative and qualitative data, and primary vs. secondary data.',
      'Calculate basic descriptive statistics (Mean, Median, Mode) using spreadsheets.',
      'Select the appropriate chart type to visualize different datasets.'
    ],
    keyConcepts: [
      'Primary vs. Secondary Data Quality',
      'Measures of Central Tendency & Dispersion',
      'Visual Data Communication (Bar, Line, Pie, Scatter)'
    ],
    keywords: [
      'Data Analysis',
      'Quantitative Data',
      'Qualitative Data',
      'Primary Data',
      'Secondary Data',
      'Mean, Median, Mode',
      'Visualization'
    ],
    textbookPageStart: 39,
    textbookPageEnd: 53,
    plannedSlidesCount: 20,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_3_SLIDES,
    sampleQuestions: UNIT_3_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-4',
    number: 4,
    title: 'Data Synthesis',
    shortDescription: 'Combine findings from diverse studies into holistic insights using narrative synthesis and meta-analysis.',
    dimension: 'Kolaborasi (Collaboration)',
    themeColor: 'from-purple-600 to-violet-700',
    accentBg: 'bg-purple-50 text-purple-800 border-purple-200',
    objectives: [
      'Define data synthesis and explain its importance in moving from single findings to a holistic picture.',
      'Distinguish between narrative synthesis, meta-analysis, and thematic synthesis.',
      'Apply data synthesis techniques to integrate findings from multiple sources.'
    ],
    keyConcepts: [
      'Forest vs. Trees Metaphor',
      'Narrative Synthesis for Heterogeneous Studies',
      'Meta-Analysis for Pooled Quantitative Effect Sizes'
    ],
    keywords: [
      'Data Synthesis',
      'Narrative Synthesis',
      'Meta-Analysis',
      'Thematic Synthesis',
      'Triangulation',
      'Heterogeneity'
    ],
    textbookPageStart: 54,
    textbookPageEnd: 65,
    plannedSlidesCount: 18,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_4_SLIDES,
    sampleQuestions: UNIT_4_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-5',
    number: 5,
    title: 'Planning',
    shortDescription: 'Master the 6-step group planning cycle, avoid groupthink, and use culturally sensitive Indonesian facilitation.',
    dimension: 'Kemandirian (Independence)',
    themeColor: 'from-rose-600 to-pink-700',
    accentBg: 'bg-rose-50 text-rose-800 border-rose-200',
    objectives: [
      'Define planning and explain its importance for personal and business success.',
      'Describe the 6-step group planning process and identify common challenges like groupthink.',
      'Use culturally sensitive strategies (Silent Round-Robin, Stop-Light check-in) for inclusive collaboration.'
    ],
    keyConcepts: [
      'The 6 Steps of Group Planning',
      'Groupthink & Scope Creep Hazards',
      'Culturally Sincere Facilitation (Hormat & Rukun)'
    ],
    keywords: [
      'Planning',
      'Objectives',
      'Groupthink',
      'Stakeholder',
      'SWOT Analysis',
      'SMART Goals',
      'Facilitation'
    ],
    textbookPageStart: 66,
    textbookPageEnd: 78,
    plannedSlidesCount: 19,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_5_SLIDES,
    sampleQuestions: UNIT_5_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-6',
    number: 6,
    title: 'Questioning',
    shortDescription: 'Apply the 9 principles of question design, diagnose flawed items, and craft unbiased research tools.',
    dimension: 'Penalaran Kritis (Critical Reasoning)',
    themeColor: 'from-cyan-600 to-sky-700',
    accentBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    objectives: [
      'Explain the importance of questioning as a compass for the research process.',
      'Apply the principles of effective questioning (clarity, relevance, avoiding bias, specificity).',
      'Identify and correct poorly constructed questions (leading, double-barreled, vague).'
    ],
    keyConcepts: [
      'Research Questions as Navigational Compass',
      'The 9 Principles of Effective Data Collection Questions',
      'Diagnosing Double-Barreled, Leading & Loaded Questions'
    ],
    keywords: [
      'Questioning',
      'Bias',
      'Leading Question',
      'Double-Barreled Question',
      'Open-Ended',
      'Closed-Ended',
      'Likert Scale'
    ],
    textbookPageStart: 79,
    textbookPageEnd: 90,
    plannedSlidesCount: 19,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_6_SLIDES,
    sampleQuestions: UNIT_6_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-7',
    number: 7,
    title: 'Reasoning',
    shortDescription: 'Differentiate deductive, inductive, and abductive logic, build Toulmin arguments, and spot fallacies.',
    dimension: 'Penalaran Kritis (Critical Reasoning)',
    themeColor: 'from-violet-600 to-indigo-700',
    accentBg: 'bg-violet-50 text-violet-800 border-violet-200',
    objectives: [
      'Distinguish between deductive, inductive, and abductive reasoning.',
      'Deconstruct an argument using the Toulmin Model (Claim, Evidence, Warrant, Backing, Qualifier, Rebuttal).',
      'Identify common logical fallacies in everyday arguments and media.'
    ],
    keyConcepts: [
      'Three Modes of Logic (Deductive, Inductive, Abductive)',
      'The 6 Parts of the Toulmin Argumentation Model',
      'Recognizing Fallacies (Ad Hominem, Straw Man, Hasty Generalization)'
    ],
    keywords: [
      'Reasoning',
      'Deductive',
      'Inductive',
      'Abductive',
      'Toulmin Model',
      'Claim',
      'Warrant',
      'Rebuttal',
      'Logical Fallacy'
    ],
    textbookPageStart: 91,
    textbookPageEnd: 103,
    plannedSlidesCount: 21,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_7_SLIDES,
    sampleQuestions: UNIT_7_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-8',
    number: 8,
    title: 'Evidence',
    shortDescription: 'Evaluate source credibility with CRAAP and SIFT, counter deepfakes, and conduct ethical field observations.',
    dimension: 'Penalaran Kritis & Kewargaan',
    themeColor: 'from-emerald-700 to-green-800',
    accentBg: 'bg-green-50 text-green-800 border-green-200',
    objectives: [
      'Define evidence and evaluate four primary types (Statistical, Anecdotal, Expert, Experimental).',
      'Evaluate source credibility using the CRAAP test and SIFT method to navigate AI and misinformation.',
      'Conduct ethical local observations (Sopan Santun, Pak RT/RW permission) and link findings to macro trends.'
    ],
    keyConcepts: [
      'Hierarchy of Evidence Types',
      'Digital Verification (CRAAP, SIFT, Lateral Reading)',
      'Ethical Local Observation (Sopan Santun Protocol)'
    ],
    keywords: [
      'Evidence',
      'Statistical Evidence',
      'Anecdotal Evidence',
      'CRAAP Test',
      'SIFT Method',
      'Deepfake',
      'Ethical Observation'
    ],
    textbookPageStart: 104,
    textbookPageEnd: 120,
    plannedSlidesCount: 20,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_8_SLIDES,
    sampleQuestions: UNIT_8_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-9',
    number: 9,
    title: 'Claims',
    shortDescription: 'Distinguish claims of fact, value, and policy, unpack underlying assumptions, and break online echo chambers.',
    dimension: 'Penalaran Kritis (Critical Reasoning)',
    themeColor: 'from-orange-600 to-amber-700',
    accentBg: 'bg-orange-50 text-orange-800 border-orange-200',
    objectives: [
      'Define a claim and explain its role in argumentation.',
      'Distinguish between claims of fact, value, and policy.',
      'Analyze claims for clarity, underlying assumptions, and algorithmic echo chamber distortion.'
    ],
    keyConcepts: [
      'The Nature of Claims (Debatable Assertions)',
      'Fact vs. Value vs. Policy Classification',
      'Uncovering Hidden Assumptions & Algorithmic Incentives'
    ],
    keywords: [
      'Claim',
      'Claim of Fact',
      'Claim of Value',
      'Claim of Policy',
      'Assumption',
      'Counterargument',
      'Algorithm',
      'Echo Chamber'
    ],
    textbookPageStart: 121,
    textbookPageEnd: 131,
    plannedSlidesCount: 19,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_9_SLIDES,
    sampleQuestions: UNIT_9_PRACTICE_QUESTIONS
  },
  {
    id: 'unit-10',
    number: 10,
    title: 'Drawing Conclusions',
    shortDescription: 'Synthesize evidence into nuanced judgments using the Conclusion Builder Matrix and evaluate validity.',
    dimension: 'Kemandirian & Penalaran Kritis',
    themeColor: 'from-blue-700 to-cyan-800',
    accentBg: 'bg-blue-50 text-blue-900 border-blue-200',
    objectives: [
      'Define drawing conclusions and explain its role in translating data into actionable knowledge.',
      'Explain the relationship between hypotheses and conclusions (Supported, Refuted, Modified).',
      'Use the Conclusion Builder Matrix and evaluate internal and external validity.'
    ],
    keyConcepts: [
      'Conclusions as Answers to Research Questions',
      'The 5-Step Conclusion Builder Matrix',
      'Internal vs. External Validity & Generalizability'
    ],
    keywords: [
      'Conclusion',
      'Hypothesis',
      'Internal Validity',
      'External Validity',
      'Generalizability',
      'Bias',
      'Triangulation'
    ],
    textbookPageStart: 132,
    textbookPageEnd: 144,
    plannedSlidesCount: 25,
    plannedQuestionsCount: 10,
    plannedGamesCount: 3,
    slides: UNIT_10_SLIDES,
    sampleQuestions: UNIT_10_PRACTICE_QUESTIONS
  }
];


export const CANONICAL_GAMES_BY_UNIT: Record<number, Game[]> = {
  1: [
    {
      id: 'g1-1',
      unitNumber: 1,
      title: 'Perspective Switcher',
      description: 'Sort real-world statements into Cultural, Economic, Political, and Social lenses.',
      targetConcept: 'Four Analytical Lenses',
      difficulty: 'Foundation',
      mechanic: 'Category Sorter',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Categorization', 'Perspective-taking', 'Lens Identification'],
      componentKey: 'PerspectiveSwitcher'
    },
    {
      id: 'g1-2',
      unitNumber: 1,
      title: 'Scale Detective',
      description: 'Classify complex statements and scenarios into Personal, Local, National, and Global levels.',
      targetConcept: 'Four Levels of Perspective',
      difficulty: 'Application',
      mechanic: 'Scale Slider',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 6,
      skillsDeveloped: ['Multi-level Analysis', 'Contextual Evaluation', 'Scale Calibration'],
      componentKey: 'ScaleDetective'
    },
    {
      id: 'g1-3',
      unitNumber: 1,
      title: 'Burger Bliss Global Expansion',
      description: 'Make strategic menu, labor, and operational decisions for a cross-cultural restaurant expansion.',
      targetConcept: 'Business Cultural Adaptation',
      difficulty: 'Challenge',
      mechanic: 'Branching Scenario Decision',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 8,
      skillsDeveloped: ['Problem-solving', 'Cross-cultural Empathy', 'Trade-off Analysis'],
      componentKey: 'BurgerBlissExpansion'
    }
  ],
  2: [
    {
      id: 'g2-1',
      unitNumber: 2,
      title: 'Basic vs Applied Lab',
      description: 'Classify scientific, social, and technological investigations into pure basic research vs. practical applied research.',
      targetConcept: 'Basic vs. Applied Inquiry',
      difficulty: 'Foundation',
      mechanic: 'Binary Classifier',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Research Literacy', 'Inquiry Classification', 'Method Recognition'],
      componentKey: 'BasicAppliedLab'
    },
    {
      id: 'g2-2',
      unitNumber: 2,
      title: 'Research Pipeline Builder',
      description: 'Diagnose and connect the 8 sequential stages of the research lifecycle from problem definition to dissemination.',
      targetConcept: '8-Step Research Process',
      difficulty: 'Application',
      mechanic: 'Sequence Reordering',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 6,
      skillsDeveloped: ['Workflow Organization', 'Process Rigor', 'Methodological Sequence'],
      componentKey: 'ResearchPipelineBuilder'
    },
    {
      id: 'g2-3',
      unitNumber: 2,
      title: 'Methodology Matcher',
      description: 'Pair distinct inquiry questions with optimal methodological paradigms (Quantitative, Qualitative, or Mixed Methods).',
      targetConcept: 'Methodological Paradigms',
      difficulty: 'Challenge',
      mechanic: 'Methodology Matching',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Method Selection', 'Data Instrument Alignment', 'Research Design'],
      componentKey: 'MethodologyMatcher'
    }
  ],
  3: [
    {
      id: 'g3-1',
      unitNumber: 3,
      title: 'Stats Sleuth',
      description: 'Investigate skewed distributions and determine whether Mean, Median, or Mode provides the most truthful central tendency.',
      targetConcept: 'Descriptive Statistics & Skewness',
      difficulty: 'Foundation',
      mechanic: 'Interactive Data Challenge',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 6,
      skillsDeveloped: ['Quantitative Reasoning', 'Outlier Detection', 'Statistical Truth'],
      componentKey: 'StatsSleuth'
    },
    {
      id: 'g3-2',
      unitNumber: 3,
      title: 'Chart Selector Showdown',
      description: 'Select the optimal data visualization format (Bar, Line, Scatter, Pie, Box Plot) for diverse research questions.',
      targetConcept: 'Visual Data Communication',
      difficulty: 'Application',
      mechanic: 'Visual Match',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Visual Literacy', 'Data Presentation', 'Chart Aptitude'],
      componentKey: 'ChartSelectorShowdown'
    },
    {
      id: 'g3-3',
      unitNumber: 3,
      title: 'Qualitative Theme Coder',
      description: 'Extract, tag, and organize recurring qualitative themes from raw interview transcripts and observational logs.',
      targetConcept: 'Qualitative Thematic Coding',
      difficulty: 'Challenge',
      mechanic: 'Text Highlighter & Tagger',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 8,
      skillsDeveloped: ['Thematic Analysis', 'Textual Synthesis', 'Qualitative Rigor'],
      componentKey: 'QualitativeThemeCoder'
    }
  ],
  4: [
    {
      id: 'g4-1',
      unitNumber: 4,
      title: 'Forest or Tree?',
      description: 'Distinguish between micro-level data extraction (trees/analysis) and macro-level pattern integration (forest/synthesis).',
      targetConcept: 'Analysis vs. Synthesis Metaphor',
      difficulty: 'Foundation',
      mechanic: 'Card Sorting',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Holistic Thinking', 'Conceptual Distinction', 'Pattern Recognition'],
      componentKey: 'ForestOrTree'
    },
    {
      id: 'g4-2',
      unitNumber: 4,
      title: 'Synthesis Method Matrix',
      description: 'Triage diverse real-world research problems to either Narrative Synthesis, Thematic Synthesis, or Meta-Analysis.',
      targetConcept: 'Synthesis Methodologies',
      difficulty: 'Application',
      mechanic: 'Case-study Triage',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Methodological Rigor', 'Synthesis Strategy', 'Literature Integration'],
      componentKey: 'SynthesisMethodMatrix'
    },
    {
      id: 'g4-3',
      unitNumber: 4,
      title: 'Connecting the Dots',
      description: 'Build conceptual bridges and synthesize intersecting findings between conflicting research papers.',
      targetConcept: 'Synthesizing Divergent Findings',
      difficulty: 'Challenge',
      mechanic: 'Network Connector',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 8,
      skillsDeveloped: ['Interdisciplinary Synthesis', 'Divergence Reconciliation', 'Academic Coherence'],
      componentKey: 'ConnectingTheDots'
    }
  ],
  5: [
    {
      id: 'g5-1',
      unitNumber: 5,
      title: 'Groupthink Buster',
      description: 'Detect subtle symptoms of groupthink, self-censorship, and false consensus in collaborative project meetings.',
      targetConcept: 'Group Dynamics & Conformity Risks',
      difficulty: 'Foundation',
      mechanic: 'Dialogue Audit',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 6,
      skillsDeveloped: ['Collaboration', 'Critical Reflection', 'Cognitive Bias Detection'],
      componentKey: 'GroupthinkBuster'
    },
    {
      id: 'g5-2',
      unitNumber: 5,
      title: 'Indonesian Etiquette Challenge',
      description: 'Construct respectful yet rigorous counter-arguments in Indonesian intercultural teamwork contexts (Musyawarah & Gotong Royong).',
      targetConcept: 'Culturally Sensitive Planning',
      difficulty: 'Application',
      mechanic: 'Roleplay Decision Tree',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Constructive Disagreement', 'Cultural Empathy', 'Team Diplomacy'],
      componentKey: 'IndonesianEtiquetteChallenge'
    },
    {
      id: 'g5-3',
      unitNumber: 5,
      title: 'SMART Goal Forge',
      description: 'Transform vague, aspirational team intentions into rigorous, Specific, Measurable, Achievable, Relevant, and Time-bound milestones.',
      targetConcept: 'SMART Planning Principles',
      difficulty: 'Challenge',
      mechanic: 'Goal Transformation Lab',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 6,
      skillsDeveloped: ['Project Architecture', 'Milestone Formulation', 'Operational Planning'],
      componentKey: 'SmartGoalForge'
    }
  ],
  6: [
    {
      id: 'g6-1',
      unitNumber: 6,
      title: 'Question Doctor',
      description: 'Perform diagnostic surgery on flawed research questions (leading, loaded, double-barreled, jargon-heavy) to restore neutrality.',
      targetConcept: 'Principles of Effective Questions',
      difficulty: 'Foundation',
      mechanic: 'Diagnostic Surgery',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 6,
      skillsDeveloped: ['Question Design', 'Bias Elimination', 'Clarity Optimization'],
      componentKey: 'QuestionDoctor'
    },
    {
      id: 'g6-2',
      unitNumber: 6,
      title: 'Survey Builder Master',
      description: 'Architect balanced survey instruments by assembling unbiased Likert scales, open-ended prompts, and filter gates.',
      targetConcept: 'Survey Instrument Design',
      difficulty: 'Application',
      mechanic: 'Instrument Builder',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Instrument Construction', 'Response Bias Prevention', 'Psychometric Balance'],
      componentKey: 'SurveyBuilderMaster'
    },
    {
      id: 'g6-3',
      unitNumber: 6,
      title: 'Neutrality Trial',
      description: 'Cross-examine contentious interview prompts in a simulated academic courtroom to evaluate researcher neutrality.',
      targetConcept: 'Investigator Bias & Neutrality',
      difficulty: 'Challenge',
      mechanic: 'Courtroom Trial Simulator',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 8,
      skillsDeveloped: ['Neutral Inquiry', 'Ethics of Questioning', 'Interviewer Discipline'],
      componentKey: 'NeutralityTrial'
    }
  ],
  7: [
    {
      id: 'g7-1',
      unitNumber: 7,
      title: 'Logic Master: D-I-A',
      description: 'Classify arguments into Deductive (certain conclusions), Inductive (probabilistic generalization), and Abductive (best explanation).',
      targetConcept: 'Three Modes of Reasoning',
      difficulty: 'Foundation',
      mechanic: '3-Way Sorter',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Logical Classification', 'Reasoning Assessment', 'Epistemic Precision'],
      componentKey: 'LogicMasterDIA'
    },
    {
      id: 'g7-2',
      unitNumber: 7,
      title: 'Toulmin Architecture Builder',
      description: 'Assemble complex arguments into Claim, Grounds/Data, Warrant, Backing, Qualifier, and Reservation/Rebuttal.',
      targetConcept: 'Toulmin Argumentation Model',
      difficulty: 'Application',
      mechanic: 'Structural Assembly',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 8,
      skillsDeveloped: ['Argument Construction', 'Structural Logic', 'Defensible Justification'],
      componentKey: 'ToulminArchitectureBuilder'
    },
    {
      id: 'g7-3',
      unitNumber: 7,
      title: 'Fallacy Patrol',
      description: 'Identify informal logical fallacies (Ad Hominem, Straw Man, Hasty Generalization, Post Hoc, False Dilemma) in public policy speeches.',
      targetConcept: 'Informal Logical Fallacies',
      difficulty: 'Challenge',
      mechanic: 'Fallacy Detector',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Fallacy Spotting', 'Rhetorical Defense', 'Logical Scrutiny'],
      componentKey: 'FallacyPatrol'
    }
  ],
  8: [
    {
      id: 'g8-1',
      unitNumber: 8,
      title: 'Evidence Tier Rater',
      description: 'Sort evidence across the hierarchy of authority: peer-reviewed meta-analyses, observational studies, expert consensus, and anecdotal claims.',
      targetConcept: 'Hierarchy of Scientific Evidence',
      difficulty: 'Foundation',
      mechanic: 'Tier Sorter',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Evidence Appraisal', 'Epistemic Weighting', 'Source Hierarchy'],
      componentKey: 'EvidenceTierRater'
    },
    {
      id: 'g8-2',
      unitNumber: 8,
      title: 'CRAAP & SIFT Fact-Checker',
      description: 'Verify suspicious online reports, viral assertions, and simulated deepfakes using Currency, Relevance, Authority, Accuracy, and Purpose.',
      targetConcept: 'Source Credibility & Digital Lateral Reading',
      difficulty: 'Application',
      mechanic: 'Verification Simulator',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Lateral Reading', 'Fact-checking', 'Source Triangulation'],
      componentKey: 'CraapSiftFactChecker'
    },
    {
      id: 'g8-3',
      unitNumber: 8,
      title: 'Field Observer Protocol',
      description: 'Establish ethical observational protocols, field notes standards, and informed consent checkpoints in primary field research.',
      targetConcept: 'Observational Ethics & Validity',
      difficulty: 'Challenge',
      mechanic: 'Protocol Simulator',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Observational Rigor', 'Research Ethics', 'Protocol Integrity'],
      componentKey: 'FieldObserverProtocol'
    }
  ],
  9: [
    {
      id: 'g9-1',
      unitNumber: 9,
      title: 'Claim Classifier',
      description: 'Rapidly distinguish whether controversial statements represent Claims of Fact, Claims of Value, or Claims of Policy.',
      targetConcept: 'Three Types of Claims',
      difficulty: 'Foundation',
      mechanic: 'Speed Classifier',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 5,
      skillsDeveloped: ['Argument Dissection', 'Precision of Language', 'Claim Categorization'],
      componentKey: 'ClaimClassifier'
    },
    {
      id: 'g9-2',
      unitNumber: 9,
      title: 'Assumption Unmasker',
      description: 'Surface unstated warrants, hidden ontological assumptions, and ideological presuppositions embedded within policy claims.',
      targetConcept: 'Underlying & Unstated Assumptions',
      difficulty: 'Application',
      mechanic: 'Unmasking Laboratory',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Assumption Detection', 'Presupposition Analysis', 'Critical Deconstruction'],
      componentKey: 'AssumptionUnmasker'
    },
    {
      id: 'g9-3',
      unitNumber: 9,
      title: 'Echo Chamber Breaker',
      description: 'Inject counter-evidence and alternative perspectives into ideologically polarized algorithmic filter bubbles.',
      targetConcept: 'Confirmation Bias & Polarization',
      difficulty: 'Challenge',
      mechanic: 'Bubble Infiltration Simulation',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 8,
      skillsDeveloped: ['Counter-framing', 'Echo Chamber Disruption', 'Intellectual Humility'],
      componentKey: 'EchoChamberBreaker'
    }
  ],
  10: [
    {
      id: 'g10-1',
      unitNumber: 10,
      title: 'Conclusion Matrix Architect',
      description: 'Synthesize research claims, empirical evidence, acknowledged limitations, and qualifiers into defensible conclusion matrices.',
      targetConcept: 'Conclusion Builder Matrix',
      difficulty: 'Foundation',
      mechanic: 'Matrix Builder',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Synthesis', 'Nuanced Conclusion Writing', 'Qualifier Calibration'],
      componentKey: 'ConclusionMatrixArchitect'
    },
    {
      id: 'g10-2',
      unitNumber: 10,
      title: 'Validity Judge',
      description: 'Appraise student research conclusions for Internal Validity (causal rigor, confound control) and External Validity (generalizability).',
      targetConcept: 'Internal vs. External Validity',
      difficulty: 'Application',
      mechanic: 'Validity Courtroom',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Validity Assessment', 'Generalizability Limits', 'Confounder Scrutiny'],
      componentKey: 'ValidityJudge'
    },
    {
      id: 'g10-3',
      unitNumber: 10,
      title: 'Hypothesis Fate',
      description: 'Adjudicate whether experimental findings warrant a hypothesis being Supported, Refuted, or Modified without confirmation bias.',
      targetConcept: 'Hypothesis Adjudication (Supported, Refuted, Modified)',
      difficulty: 'Challenge',
      mechanic: 'Adjudication Tribunal',
      status: 'available',
      type: 'micro',
      estimatedMinutes: 7,
      skillsDeveloped: ['Empirical Objectivity', 'Falsification Acceptance', 'Reflective Modification'],
      componentKey: 'HypothesisFate'
    }
  ]
};

export const CAPSTONE_CHALLENGES_BY_UNIT: Record<number, Game[]> = {
  1: [
    {
      id: 'g1-case',
      unitNumber: 1,
      title: 'Perspective Case Challenge',
      description: 'Navigate complex multi-stakeholder dilemmas across 7 stages: analyze voices, classify lenses and levels, evaluate tensions, discover common ground, and formulate bridge solutions.',
      targetConcept: 'Lenses, Scales & Bridge Solutions',
      difficulty: 'Challenge',
      mechanic: 'Branching Scenario Decision',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 12,
      skillsDeveloped: ['Multi-lens Analysis', 'Stakeholder Empathy', 'Bridge Formulation', 'Trade-off Evaluation']
    }
  ],
  2: [
    {
      id: 'g2-project',
      unitNumber: 2,
      title: 'Research Project Challenge',
      description: 'Design, conduct, and defend an authentic high school research study across 7 stages: define inquiry type, formulate focused questions, locate literature gaps, establish SMART objectives and testable hypotheses, architect sampling and methodology, analyze findings vs. discussion, and repair flaws during peer review audit.',
      targetConcept: 'Research Lifecycle & Methodological Rigor',
      difficulty: 'Challenge',
      mechanic: 'Research Design & Peer Review Audit',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: [
        'Question Formulation',
        'Sampling Validity',
        'Variable Alignment',
        'Data vs. Discussion',
        'Peer Review Audit & Iterative Refinement'
      ]
    }
  ],
  3: [
    {
      id: 'g3-capstone',
      unitNumber: 3,
      title: 'Data Analysis Mission',
      description: 'Audit transit usage and air quality datasets across 5 stages: triage raw data, resolve extreme statistical outliers, match findings to optimal visual formats, expose false causal claims, and enforce ethical data protocols.',
      targetConcept: 'Descriptive Stats, Chart Architecture & Causal Rigor',
      difficulty: 'Challenge',
      mechanic: 'Multi-Stage Analysis & Decision',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Data Classification', 'Outlier Auditing', 'Chart Selection', 'Causation Analysis', 'Data Ethics']
    }
  ],
  4: [
    {
      id: 'g4-capstone',
      unitNumber: 4,
      title: 'Evidence Synthesis Challenge',
      description: 'Compare multi-source empirical studies on the Sumatra energy transition across 5 stages: distinguish synthesis from summary, map convergence and divergence, construct synthesis matrices, resolve heterogeneity, and craft integrated policy arguments.',
      targetConcept: 'Evidence Synthesis, Convergence & Argumentation',
      difficulty: 'Challenge',
      mechanic: 'Multi-Stage Evidence Synthesis',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Synthesis vs Summary', 'Convergence & Divergence', 'Synthesis Matrices', 'Heterogeneity Resolution', 'Policy Synthesis']
    }
  ],
  5: [
    {
      id: 'g5-capstone',
      unitNumber: 5,
      title: 'Project Rescue Mission',
      description: 'Rescue a collapsing community watershed initiative across 5 stages: reconstruct SMART goals, conduct environmental SWOT audits, eliminate scope creep with Gantt milestones, dismantle groupthink using cultural facilitation, and secure community gatekeeper permissions.',
      targetConcept: 'SMART Objectives, Scope Defense & Group Facilitation',
      difficulty: 'Challenge',
      mechanic: 'Strategic Project Repair & Rescue',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['SMART Goal Setting', 'SWOT Auditing', 'Scope Creep Defense', 'Groupthink Neutralization', 'Cultural Field Etiquette']
    }
  ],
  6: [
    {
      id: 'g6-capstone',
      unitNumber: 6,
      title: 'Question Design Lab',
      description: 'Overhaul a flawed student wellbeing questionnaire across 5 stages: diagnose leading and double-barreled defects, reconstruct loaded items into neutral anchors, match inquiry to qualitative and quantitative methods, build balanced Likert scales, and apply ethical pilot-testing protections.',
      targetConcept: 'Question Neutrality, Psychometrics & Ethical Pilot Testing',
      difficulty: 'Challenge',
      mechanic: 'Inquiry Instrument Refinement & Audit',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Question Defect Diagnosis', 'Neutral Item Reconstruction', 'Methodological Fit', 'Likert Scale Design', 'Research Ethics & Privacy']
    }
  ],
  7: [
    {
      id: 'g7-capstone',
      unitNumber: 7,
      title: 'Reasoning Under Pressure',
      description: 'Navigate a contentious school hearing on AI in education across 5 stages: isolate premises from conclusions, expose non-sequiturs and certainty gaps, dismantle rhetorical fallacies (Straw Man), construct principled Toulmin rebuttals, and synthesize a qualified evidence-based policy.',
      targetConcept: 'Argument Architecture, Fallacy Dismantling & Toulmin Synthesis',
      difficulty: 'Challenge',
      mechanic: 'Judicial Hearing Reasoning & Debate',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Premise & Conclusion Deconstruction', 'Inferential Gap Auditing', 'Fallacy Detection', 'Toulmin Rebuttal Architecture', 'Qualified Policy Synthesis']
    }
  ],
  8: [
    {
      id: 'g8-capstone',
      unitNumber: 8,
      title: 'Evidence Verification Mission',
      description: 'Audit mangrove restoration claims across 5 stages: rank statistical vs. anecdotal evidence, apply CRAAP source tests, lateral-read through SIFT protocols, design ethical field observations, and synthesize defensible verdicts.',
      targetConcept: 'Evidence Hierarchy, CRAAP Evaluation & SIFT Verification',
      difficulty: 'Challenge',
      mechanic: 'Multi-Stage Scientific Verification',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Evidence Hierarchy', 'CRAAP Testing', 'SIFT Lateral Reading', 'Field Observation Protocol', 'Defensible Verdict Synthesis']
    }
  ],
  9: [
    {
      id: 'g9-capstone',
      unitNumber: 9,
      title: 'Claim and Counterargument Arena',
      description: 'Debate urban textile waste policy across 5 stages: classify claims into fact, value, and policy, expose hidden ideological assumptions, audit selective evidence and echo-chamber biases, construct principled counterarguments, and synthesize a defensible circular economy policy.',
      targetConcept: 'Tri-Claim Framework, Assumption Unmasking & Counterarguments',
      difficulty: 'Challenge',
      mechanic: 'Policy Arena Stakeholder Debate',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Tri-Claim Taxonomy', 'Hidden Assumption Unmasking', 'Echo Chamber Auditing', 'Toulmin Rebuttal Construction', 'Policy Synthesis']
    }
  ],
  10: [
    {
      id: 'g10-capstone',
      unitNumber: 10,
      title: 'Final Conclusion Board',
      description: 'Guide the school sustainability taskforce across 5 judicial stages: distinguish empirical findings from interpretations, audit internal/external validity and confounders, decide the hypothesis\'s fate, construct an airtight 3-Pillar conclusion, and neutralize the 4 fatal conclusion defects.',
      targetConcept: 'Inquiry Synthesis, Validity Auditing & 3-Pillar Conclusions',
      difficulty: 'Challenge',
      mechanic: 'Judicial Peer Review Examination',
      status: 'available',
      type: 'capstone',
      estimatedMinutes: 15,
      skillsDeveloped: ['Findings vs Interpretations', 'Validity & Confounder Auditing', 'Hypothesis Falsification Acceptance', 'Defect Neutralization', 'Actionable Recommendation Formulation']
    }
  ]
};

// Backward-compatible unified dictionary combining canonical micro-games and capstones
export const PLANNED_GAMES_BY_UNIT: Record<number, Game[]> = {
  1: [...(CANONICAL_GAMES_BY_UNIT[1] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[1] || [])],
  2: [...(CANONICAL_GAMES_BY_UNIT[2] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[2] || [])],
  3: [...(CANONICAL_GAMES_BY_UNIT[3] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[3] || [])],
  4: [...(CANONICAL_GAMES_BY_UNIT[4] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[4] || [])],
  5: [...(CANONICAL_GAMES_BY_UNIT[5] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[5] || [])],
  6: [...(CANONICAL_GAMES_BY_UNIT[6] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[6] || [])],
  7: [...(CANONICAL_GAMES_BY_UNIT[7] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[7] || [])],
  8: [...(CANONICAL_GAMES_BY_UNIT[8] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[8] || [])],
  9: [...(CANONICAL_GAMES_BY_UNIT[9] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[9] || [])],
  10: [...(CANONICAL_GAMES_BY_UNIT[10] || []), ...(CAPSTONE_CHALLENGES_BY_UNIT[10] || [])]
};
