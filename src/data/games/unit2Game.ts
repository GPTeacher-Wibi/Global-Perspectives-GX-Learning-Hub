/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3D: UNIT 2 RESEARCH PROJECT CHALLENGE DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 22–38)
 *
 * Grounding:
 * - 4 Scientific Pillars (Empirical, Systematic, Replicable, Purposive) [pp. 22-24]
 * - Basic vs. Applied Inquiry [pp. 24-27]
 * - Quantitative, Qualitative & Mixed Methods [pp. 27-31]
 * - 9 Components of a Research Study (Problem -> Question -> Objectives ->
 *   Hypothesis -> Literature -> Sample -> Method -> Findings -> Discussion) [pp. 31-36]
 * - The 8-Step Research Process & Iterative Refinement [pp. 36-38]
 *
 * Design Rule: NOT a reskin of Unit 1. The mechanic emerges directly from
 * research design logic, variable alignment, sampling validity, and peer-review audits.
 */

import { SourceReference } from '../../types/practiceGame';

export type ResearchInquiryType = 'basic' | 'applied' | 'exploratory';
export type ResearchParadigm = 'quantitative' | 'qualitative' | 'mixed-methods';

export interface ResearchStageOption {
  id: string;
  label: string;
  description: string;
  isOptimal: boolean;
  rigorScore: number; // 0 to 100
  methodologicalTradeoff: string;
  simulatedConsequence: string;
  misconceptionId?: string;
  detailedFeedback: string;
  variablesIdentified?: {
    independent?: string;
    dependent?: string;
    controlled?: string[];
  };
}

export interface ResearchStage {
  stageNumber: number;
  stageKey:
    | 'inquiry-type'
    | 'question-formulation'
    | 'literature-gap'
    | 'objectives-hypothesis'
    | 'methodology-sampling'
    | 'findings-interpretation'
    | 'audit-repair';
  stageTitle: string;
  stageConcept: string;
  textbookReference: string;
  prompt: string;
  scenarioContext: string;
  diagnosticFocus: string;
  options: ResearchStageOption[];
}

export interface ResearchCase {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  location: string;
  targetPopulation: string;
  background: string;
  realWorldProblem: string;
  sourceRef: SourceReference;
  stages: ResearchStage[];
  summaryDebrief: {
    idealPathSummary: string;
    keyLearningTakeaway: string;
    cambridgeRelevance: string;
  };
}

export const UNIT_2_RESEARCH_CASES: ResearchCase[] = [
  // ==========================================================================
  // CASE 1: THE CANTEEN NUTRITION & STUDENT FATIGUE PARADOX
  // ==========================================================================
  {
    id: 'case-nutrition-fatigue',
    title: 'The Canteen Nutrition & Student Fatigue Paradox',
    subtitle: 'Investigating Afternoon Drowsiness at SMA Harapan Bangsa',
    theme: 'School Health, Adolescent Cognition & Applied Nutrition',
    location: 'SMA Harapan Bangsa (1,200 enrolled students)',
    targetPopulation: 'Grade 10–12 High School Students (Ages 15–18)',
    background:
      'At SMA Harapan Bangsa, afternoon teachers report a severe drop in classroom alertness after 1:00 PM. Students are observed resting their heads on desks, and average scores on 2:00 PM mathematics and chemistry quizzes are 22% lower than morning quizzes. Conflicting rumors circulate: the student council blames inadequate air conditioning; the parent association blames late-night smartphone gaming; and school counselors suspect the high-carbohydrate fried lunch meals served at the subsidized school cafeteria.',
    realWorldProblem:
      'A widespread post-lunch cognitive fatigue slump is undermining afternoon academic achievement, but school administrators do not know the actual root causes and risk wasting funds on ineffective remedies.',
    sourceRef: {
      unitNumber: 2,
      section: '2.1-2.5',
      pageRange: '22-38',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    stages: [
      // STAGE 1: Inquiry Type & Purpose
      {
        stageNumber: 1,
        stageKey: 'inquiry-type',
        stageTitle: 'Stage 1: Defining the Inquiry Type',
        stageConcept: 'Basic vs. Applied Research (Section 2.2, pp. 24–27)',
        textbookReference: 'Textbook pp. 24–27',
        diagnosticFocus: 'Distinguishing practical problem-solving from abstract theory',
        prompt:
          'As the Lead Student Researcher, what is the primary purpose and classification of this research inquiry?',
        scenarioContext:
          'Before spending school resources, you must determine whether this investigation is Basic (fundamental science), Applied (practical problem-solving), or purely casual speculation.',
        options: [
          {
            id: 's1-opt-a',
            label: 'Applied Research: Practical School Intervention',
            description:
              'Design an empirical investigation to determine the concrete relationship between cafeteria lunch composition, sleep habits, and afternoon alertness, generating actionable recommendations for the school.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Focuses on immediate, contextualized problem-solving; findings are tailored to SMA Harapan Bangsa rather than universal cellular laws.',
            simulatedConsequence:
              'School administration approves formal research permissions because the study directly targets a recognized campus problem.',
            detailedFeedback:
              'Excellent. Applied research seeks practical solutions to existing real-world problems (pp. 24–27). You are using scientific inquiry to inform campus food and schedule policies.'
          },
          {
            id: 's1-opt-b',
            label: 'Basic Research: Molecular Mitochondrial Genetics',
            description:
              'Extract white blood cells from students to study the pure biochemical genetic transcription of insulin receptor enzymes under laboratory microscopes.',
            isOptimal: false,
            rigorScore: 35,
            misconceptionId: 'misc-basic-is-useless',
            methodologicalTradeoff:
              'Highly fundamental biology, but completely unfeasible for a high school study and disconnected from the school’s immediate operational question.',
            simulatedConsequence:
              'The school biology lab lacks biochemical gene sequencers; research halts due to excessive scope and unachievable laboratory demands.',
            detailedFeedback:
              'Basic research seeks fundamental theoretical knowledge without immediate practical application (pp. 24–26). While mitochondrial genetics is real science, it does not answer whether cafeteria fried food or sleep habits cause the classroom slump.'
          },
          {
            id: 's1-opt-c',
            label: 'Casual Polling: Quick Social Media Poll',
            description:
              'Post an unverified question on Instagram stories asking: "Who feels sleepy today? Vote Yes or No." and show the screenshot to the principal.',
            isOptimal: false,
            rigorScore: 15,
            misconceptionId: 'misc-research-is-googling',
            methodologicalTradeoff:
              'Extremely fast, but lacks scientific rigor, sampling control, variable measurement, and empirical validity.',
            simulatedConsequence:
              'The principal rejects the screenshot as unscientific gossip; no meaningful evidence is gathered.',
            detailedFeedback:
              'Casual social polling lacks the systematic, empirical, and replicable structure required for authentic research (pp. 22–24). It cannot control for who voted or why.'
          }
        ]
      },

      // STAGE 2: Question Formulation & Scope Calibration
      {
        stageNumber: 2,
        stageKey: 'question-formulation',
        stageTitle: 'Stage 2: Calibrating the Research Question',
        stageConcept: 'Formulating Investigable Questions (Section 2.4, pp. 31–33)',
        textbookReference: 'Textbook pp. 31–33',
        diagnosticFocus: 'Focus, investigability, and variable specification',
        prompt:
          'Which Research Question provides the most focused, rigorous, and investigable foundation for this study?',
        scenarioContext:
          'The broad topic is "Post-lunch student fatigue." You must craft an empirical question that specifies measurable variables and a clear boundary.',
        options: [
          {
            id: 's2-opt-a',
            label: 'Rigorous Empirical Question: Multi-Variable Correlation',
            description:
              '"To what extent does the macronutrient composition of school lunches correlate with self-reported afternoon cognitive alertness among Grade 10 students at SMA Harapan Bangsa, when controlling for prior nocturnal sleep duration?"',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Requires tracking both lunch nutrition and night sleep; provides strong empirical clarity and testable variables.',
            simulatedConsequence:
              'Research ethics committee praises the clarity: variables (lunch macronutrients, alertness scores, sleep hours) are clearly defined and bounded.',
            variablesIdentified: {
              independent: 'Lunch macronutrient composition (high refined carbohydrate vs. balanced)',
              dependent: 'Afternoon cognitive alertness score (Epworth Sleepiness Scale)',
              controlled: ['Nocturnal sleep duration', 'Grade level', 'Classroom environment']
            },
            detailedFeedback:
              'Outstanding. A high-quality research question specifies the relationship between clear variables, identifies a distinct target population, and is empirically answerable (pp. 31–33).'
          },
          {
            id: 's2-opt-b',
            label: 'Vague Moral Statement: "Why is junk food bad for students?"',
            description:
              '"Why is unhealthy cafeteria junk food ruining our minds and making our society lazy?"',
            isOptimal: false,
            rigorScore: 30,
            misconceptionId: 'misc-topic-equals-question',
            methodologicalTradeoff:
              'Loaded with emotional bias; assumes guilt without evidence; cannot be objectively tested.',
            simulatedConsequence:
              'Cafeteria vendor files a formal complaint regarding leading bias; data collected under this question will be dismissed as biased advocacy.',
            detailedFeedback:
              'This is an emotional value assertion, not an investigable research question (pp. 31–33). It presumes the conclusion before gathering any evidence.'
          },
          {
            id: 's2-opt-c',
            label: 'Factual Lookup: "What food does the cafeteria sell?"',
            description:
              '"How many plates of fried rice and spring rolls did the school cafeteria sell last Tuesday?"',
            isOptimal: false,
            rigorScore: 25,
            misconceptionId: 'misc-research-is-googling',
            methodologicalTradeoff:
              'A simple factual lookup; requires no scientific inquiry, correlation, or causal analysis.',
            simulatedConsequence:
              'You retrieve the cafeteria receipt in 2 minutes, but learn zero information about whether students are drowsy or why.',
            detailedFeedback:
              'This is an administrative data lookup, not a research study (pp. 22–23). An authentic research question must investigate an unknown relationship, not just count receipts.'
          }
        ]
      },

      // STAGE 3: Literature Review & Gap Identification
      {
        stageNumber: 3,
        stageKey: 'literature-gap',
        stageTitle: 'Stage 3: Literature Review & Research Gap',
        stageConcept: 'Mapping Scholarly Context & Gaps (Section 2.4, pp. 32–33)',
        textbookReference: 'Textbook pp. 32–33',
        diagnosticFocus: 'Synthesizing prior research to establish originality and necessity',
        prompt:
          'You consult medical and educational journals and find two published studies:\n1. Gomez (2019): High glycemic index meals cause rapid blood sugar spikes followed by reactive hypoglycemia (sleepiness) in adults.\n2. Rahardjo (2021): 65% of urban Indonesian adolescents sleep less than 6.5 hours per night.\nWhat is the critical RESEARCH GAP your study addresses?',
        scenarioContext:
          'A literature review is not a summary; it identifies what is still missing in current knowledge to justify why your new study is necessary.',
        options: [
          {
            id: 's3-opt-a',
            label: 'Contextual Interaction Gap: School Canteen Diet vs. Sleep Interaction',
            description:
              'Existing literature studies adult diet in laboratory settings or adolescent sleep in isolation; no study has examined how Indonesian high-carbohydrate school canteen meals interact specifically with chronic adolescent sleep deprivation during afternoon classes.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Directly connects existing theories to a specific, unstudied local context with high real-world relevance.',
            simulatedConsequence:
              'Your paper demonstrates scholarly grounding: you are not reinventing the wheel, but testing established theory in a vital new context.',
            detailedFeedback:
              'Precisely. A literature review identifies the scholarly frontier (the research gap) where prior knowledge stops and your empirical study begins (pp. 32–33).'
          },
          {
            id: 's3-opt-b',
            label: 'Passive Duplication: Re-test Gomez with Adult Office Workers',
            description:
              'Ignore the school context entirely and repeat Gomez’s exact adult laboratory test on 10 adult teachers.',
            isOptimal: false,
            rigorScore: 40,
            misconceptionId: 'misc-lit-review-as-summary',
            methodologicalTradeoff:
              'Redundant replication that fails to address the student population problem at SMA Harapan Bangsa.',
            simulatedConsequence:
              'The student fatigue problem remains unsolved because you spent all your time studying adult teachers.',
            detailedFeedback:
              'Simply duplicating prior studies without extending them to unexamined contexts misses the core purpose of defining a research gap (pp. 32–33).'
          },
          {
            id: 's3-opt-c',
            label: 'Ignore Literature: Start Completely from Personal Intuition',
            description:
              '"Published journals are written by professors and do not apply to our school; we will ignore all past medical studies and rely only on our feelings."',
            isOptimal: false,
            rigorScore: 10,
            misconceptionId: 'misc-lit-review-as-summary',
            methodologicalTradeoff:
              'Abandons scientific cumulative knowledge; high risk of repeating known errors and using discredited theories.',
            simulatedConsequence:
              'Your methodology fails because you do not know how to measure glycemic index or sleepiness scales reliably.',
            detailedFeedback:
              'Science is cumulative. Ignoring the literature review cuts your study off from validated diagnostic instruments and established physiological mechanisms (pp. 32–33).'
          }
        ]
      },

      // STAGE 4: SMART Objectives & Hypothesis Formulation
      {
        stageNumber: 4,
        stageKey: 'objectives-hypothesis',
        stageTitle: 'Stage 4: Objectives & Scientific Hypothesis',
        stageConcept: 'SMART Objectives & Falsifiability (Section 2.4, pp. 32–34)',
        textbookReference: 'Textbook pp. 32–34',
        diagnosticFocus: 'Falsifiability, directional prediction, and operational steps',
        prompt:
          'Formulate the operational SMART research objective and testable hypothesis for the investigation.',
        scenarioContext:
          'Your objective must specify concrete actions, and your hypothesis must be a falsifiable prediction between the independent and dependent variables.',
        options: [
          {
            id: 's4-opt-a',
            label: 'SMART Objective + Directional Falsifiable Hypothesis',
            description:
              'Objective: To measure and compare post-lunch alertness scores across 120 Grade 10 students consuming high-carbohydrate vs. balanced lunches over a two-week period.\nHypothesis: Students consuming lunches containing >70% refined carbohydrates will report significantly higher drowsiness scores (p < 0.05) on the Epworth scale than students consuming balanced meals with protein and fiber, even when adjusting for sleep hours.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Sets a high scientific bar; requires standardized nutritional classification and rigorous tracking.',
            simulatedConsequence:
              'The study has a clear benchmark for success: the hypothesis can either be supported or refuted by statistical data.',
            detailedFeedback:
              'Exemplary research architecture. The objective is Specific, Measurable, Achievable, Relevant, and Time-bound. The hypothesis is testable, directional, and capable of being falsified (pp. 32–34).'
          },
          {
            id: 's4-opt-b',
            label: 'Aspirational Slogan + Unfalsifiable Prediction',
            description:
              'Objective: To make the entire school healthy, happy, and energized forever.\nHypothesis: Good vibes in the cafeteria lead to spiritual wellness that cannot be measured by mortal numbers.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-vague-objectives',
            methodologicalTradeoff:
              'Completely untestable; lacks measurable variables; cannot be verified or falsified by empirical evidence.',
            simulatedConsequence:
              'Data analysis is impossible because "spiritual wellness" was never operationally defined.',
            detailedFeedback:
              'A research objective must define concrete operational steps, not poetic wishes. An unfalsifiable statement is outside the realm of empirical science (pp. 32–34).'
          },
          {
            id: 's4-opt-c',
            label: 'One-Sided Certainty Without Variables',
            description:
              'Objective: To prove that the cafeteria vendor is guilty.\nHypothesis: Everyone knows fried food is bad, so our hypothesis is that we are 100% right.',
            isOptimal: false,
            rigorScore: 15,
            misconceptionId: 'misc-hypothesis-is-wild-guess',
            methodologicalTradeoff:
              'Violates scientific objectivity; treats a hypothesis as a predetermined verdict rather than an open test.',
            simulatedConsequence:
              'Researchers discard any data that contradicts their personal belief, invalidating the entire study.',
            detailedFeedback:
              'A hypothesis is a tentative proposition to be tested against empirical evidence, not an ideological dogma to be protected at all costs (pp. 32–34).'
          }
        ]
      },

      // STAGE 5: Methodology Blueprint & Sampling Architecture
      {
        stageNumber: 5,
        stageKey: 'methodology-sampling',
        stageTitle: 'Stage 5: Methodology Blueprint & Sampling Architecture',
        stageConcept: 'Quantitative/Qualitative Alignment & Sampling Validity (Section 2.3 & 2.4, pp. 27–35)',
        textbookReference: 'Textbook pp. 27–35',
        diagnosticFocus: 'Preventing selection bias and aligning tools with data requirements',
        prompt:
          'Design the sampling plan and data collection methodology for SMA Harapan Bangsa (1,200 students total, 400 in Grade 10).',
        scenarioContext:
          'You need reliable empirical data on food consumed, sleep hours, and alertness. Watch out for sampling bias and uncalibrated measurement tools.',
        options: [
          {
            id: 's5-opt-a',
            label: 'Mixed-Methods Stratified Sampling Blueprint',
            description:
              'Sample: Stratified random sample of 120 Grade 10 students (representing academic streams and genders equally).\nQuantitative: 10-day validated daily food log (calibrated with canteen menu nutrient breakdown), nocturnal sleep logs, and validated Epworth Sleepiness Scale surveys at 1:45 PM.\nQualitative: 3 focus groups (18 students) to explore reasons for meal choices, energy feelings, and study habits.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Demands careful coordination and participant compliance over 10 days; produces high internal and external validity.',
            simulatedConsequence:
              'Data provides both statistical correlation (numbers) and contextual depth (student voices), providing actionable evidence.',
            detailedFeedback:
              'Superb methodological design. Stratified random sampling prevents selection bias (pp. 33–35). Combining quantitative logs with qualitative focus groups leverages the strengths of both paradigms (pp. 27–31).'
          },
          {
            id: 's5-opt-b',
            label: 'Convenience Sampling: 8 Friends at Debate Club',
            description:
              'Survey 8 close friends who sit at your lunch table during one Friday break, and assume their answers represent all 1,200 students.',
            isOptimal: false,
            rigorScore: 25,
            misconceptionId: 'misc-sample-equals-population',
            methodologicalTradeoff:
              'Takes only 5 minutes; results suffer from catastrophic sampling bias and cannot be generalized.',
            simulatedConsequence:
              'External validity warning: Debate club members bring specialized homemade packed lunches; findings are completely irrelevant to regular cafeteria eaters.',
            detailedFeedback:
              'Convenience sampling of close friends is one of the most common research pitfalls (pp. 33–35). It cannot represent the diverse school population.'
          },
          {
            id: 's5-opt-c',
            label: 'Pure Qualitative Storytelling Without Measurement',
            description:
              'Conduct an informal 10-minute chat with 2 tired students while walking to the bus stop, without any food logs, sleep tracking, or standardized questions.',
            isOptimal: false,
            rigorScore: 30,
            misconceptionId: 'misc-qualitative-unscientific',
            methodologicalTradeoff:
              'Completely subjective; impossible to replicate; cannot test nutritional correlation.',
            simulatedConsequence:
              'The administrative board rejects the report because 2 casual quotes cannot prove a nutritional correlation.',
            detailedFeedback:
              'While qualitative research is rigorous when systematic, unstructured casual chats lack coding frameworks, protocols, and triangulation (pp. 28–30).'
          }
        ]
      },

      // STAGE 6: Findings Analysis vs. Interpretation Triad
      {
        stageNumber: 6,
        stageKey: 'findings-interpretation',
        stageTitle: 'Stage 6: Findings Analysis vs. Discussion Triad',
        stageConcept: 'The Analysis Triad: Findings vs. Discussion (Section 2.4, pp. 34–36)',
        textbookReference: 'Textbook pp. 34–36',
        diagnosticFocus: 'Distinguishing raw objective data from critical causal interpretation',
        prompt:
          'Your 10-day fieldwork yields the following data:\n• Group A (High-Carb Fried Meal + <6 hrs sleep): 88% reported severe drowsiness (Epworth score > 12).\n• Group B (High-Carb Fried Meal + >7.5 hrs sleep): 42% reported moderate drowsiness.\n• Group C (Balanced Meal + <6 hrs sleep): 38% reported moderate drowsiness.\n• Group D (Balanced Meal + >7.5 hrs sleep): Only 9% reported drowsiness.\nHow do you report these results in your Research Paper?',
        scenarioContext:
          'In academic research, Findings report unadorned empirical facts; Discussion interprets what they mean and explains the underlying interaction.',
        options: [
          {
            id: 's6-opt-a',
            label: 'Strict Triad Separation: Objective Findings + Interaction Discussion',
            description:
              'Findings Section: Report exact percentages, mean sleep hours, and Epworth scores across all four cohorts without personal speculation.\nDiscussion Section: Interpret the dual-factor interaction: high-carbohydrate lunches compound pre-existing sleep deprivation, creating an acute metabolic dip. Neither factor alone explains the slump as strongly as their combination.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Requires nuanced analytical writing; avoids simplistic single-cause finger-pointing.',
            simulatedConsequence:
              'Teachers, cafeteria vendors, and parents all accept the findings because the data is reported neutrally and reflects real complexity.',
            detailedFeedback:
              'Masterful academic analysis. Keeping raw Findings distinct from the analytical Discussion maintains scientific integrity, while identifying the interaction effect demonstrates advanced critical reasoning (pp. 34–36).'
          },
          {
            id: 's6-opt-b',
            label: 'Premature Speculation: Blame Solely One Scapegoat',
            description:
              'State in the findings: "This proves cafeteria fried rice is toxic poison and the vendor should be fired immediately."',
            isOptimal: false,
            rigorScore: 25,
            misconceptionId: 'misc-findings-equal-discussion',
            methodologicalTradeoff:
              'Ignores the sleep data completely; confuses raw results with aggressive personal advocacy.',
            simulatedConsequence:
              'Cafeteria vendor threatens legal action for defamation; the report is discredited for ignoring student sleep habits.',
            detailedFeedback:
              'Findings must never contain sensationalist accusations or unverified leaps (pp. 34–36). Group B showed that well-rested students experienced less than half the drowsiness on the same meal, proving diet is not the sole factor.'
          },
          {
            id: 's6-opt-c',
            label: 'Dismiss Findings: "Numbers are meaningless without feelings"',
            description:
              'Hide the 10-day dataset and write a 5-page personal essay about your own feeling of tiredness during Monday geometry class.',
            isOptimal: false,
            rigorScore: 15,
            misconceptionId: 'misc-numbers-tell-everything',
            methodologicalTradeoff:
              'Discards 120 students’ empirical contributions; reduces scientific research to an unverified diary.',
            simulatedConsequence:
              'Your research supervisor fails the paper for abandoning empirical evidence.',
            detailedFeedback:
              'Empirical research requires honoring the collected data. Personal anecdotes cannot replace systematic evidence collected from 120 participants (pp. 34–36).'
          }
        ]
      },

      // STAGE 7: The Final Boss Audit & Iterative Refinement
      {
        stageNumber: 7,
        stageKey: 'audit-repair',
        stageTitle: 'Stage 7: Peer Review Audit & Iterative Refinement (The Boss Challenge)',
        stageConcept: 'The 8-Step Research Process & Iteration (Section 2.5, pp. 36–38)',
        textbookReference: 'Textbook pp. 36–38',
        diagnosticFocus: 'Responding to methodological critique through scientific iteration',
        prompt:
          'AUDIT SHOCK: An external peer reviewer from the University Education Faculty audits your study draft and issues a formal critique:\n"CONFOUNDING VARIABLE DETECTED: Your 10-day data collection occurred during Semester Midterm Exam Week. Heightened stress, exam cramming, and late-night studying distorted student baseline sleep and alertness levels. Your conclusions may reflect exam anxiety rather than regular canteen diet."\nHow do you handle this critical peer-review finding?',
        scenarioContext:
          'Research is an iterative cycle (Section 2.5, pp. 36–38). When a valid vulnerability is uncovered, how does a rigorous researcher respond?',
        options: [
          {
            id: 's7-opt-a',
            label: 'Iterative Refinement: Conduct a Non-Exam Baseline Control Phase',
            description:
              'Acknowledge the exam week limitation transparently in the Limitations section. Execute an iterative 5-day replication phase during a standard, non-exam instructional week to compare baseline fatigue against the exam week data and isolate the nutritional effect.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Requires additional field time and data reconciliation; elevates the research paper to university-grade credibility.',
            simulatedConsequence:
              'The University Reviewer approves the revised paper with distinction; the findings are published in the Regional Youth Science Journal.',
            detailedFeedback:
              'Flawless scientific maturity. Acknowledging limitations and executing iterative control phases is the very essence of the self-correcting 8-step research process (pp. 36–38).'
          },
          {
            id: 's7-opt-b',
            label: 'Defensive Denial: Attack the Reviewer’s Motives',
            description:
              'Write an angry rebuttal claiming the university professor does not know high school life and refuse to adjust any part of the paper.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-research-is-straight-line',
            methodologicalTradeoff:
              'Saves time by ignoring criticism; permanently damages academic credibility.',
            simulatedConsequence:
              'The paper is rejected by the ethics review board; school administrators refuse to implement any of the recommendations.',
            detailedFeedback:
              'Science advances through peer review and open critique. Defensiveness violates academic integrity and prevents researchers from uncovering the truth (pp. 36–38).'
          },
          {
            id: 's7-opt-c',
            label: 'Total Surrender: Delete the Project and Give Up',
            description:
              'Assume that because a confounding variable was found, your entire research team has failed and all 10 days of work are useless.',
            isOptimal: false,
            rigorScore: 25,
            misconceptionId: 'misc-research-is-straight-line',
            methodologicalTradeoff:
              'Premature abandonment; misunderstands that confounding variables are normal occurrences in real-world research.',
            simulatedConsequence:
              'Months of student effort are thrown in the trash; the school canteen problem remains unsolved.',
            detailedFeedback:
              'Research is not a fragile all-or-nothing game. Discovering a confounding variable is an opportunity for iterative refinement and deeper discovery, not a reason to surrender (pp. 36–38).'
          }
        ]
      }
    ],
    summaryDebrief: {
      idealPathSummary:
        'Applied Problem Framing -> Multi-variable Research Question -> Localized Research Gap -> SMART Objectives & Falsifiable Hypothesis -> Stratified Mixed-Methods Sampling -> Objective Findings vs. Interaction Discussion -> Iterative Control Phase Refinement.',
      keyLearningTakeaway:
        'Research is an interconnected system: if your research question lacks measurable variables or your sample suffers from selection bias, even the most advanced statistics cannot rescue your conclusions. Iteration is not failure—it is scientific rigor in action.',
      cambridgeRelevance:
        'Grounded in Cambridge Global Perspectives Research Report standards (Component 02 / 03) and Andri Wibisono Textbook Chapter 2.'
    }
  },

  // ==========================================================================
  // CASE 2: THE ESTUARY MICROPLASTICS & ARTISANAL FISHERY DILEMMA
  // ==========================================================================
  {
    id: 'case-microplastics-fishery',
    title: 'The Estuary Microplastics & Artisanal Fishery Dilemma',
    subtitle: 'Ecological Integrity vs. Coastal Community Livelihoods in Teluk Biru',
    theme: 'Environmental Science, Marine Ecology & Local Livelihoods',
    location: 'Teluk Biru Estuary & Mangrove Reserve (Regency Coastline)',
    targetPopulation: 'Benthic Mangrove Crabs & 320 Artisanal Fishing Families',
    background:
      'In the Teluk Biru coastal regency, 320 artisanal fishing families rely on harvesting mangrove mud crabs (Scylla serrata) for their livelihoods. Over the past three years, fishers report that harvested crabs have become smaller, shell discoloration has risen, and local crab meat prices have plummeted due to rumors of plastic contamination from upstream industrial packaging mills. Meanwhile, municipal authorities claim the estuary is clean and blame declining catches on seasonal monsoon tides.',
    realWorldProblem:
      'Severe conflict between industrial growth, coastal marine ecology, and artisanal fishing survival, with zero independent empirical scientific data on whether microplastics actually contaminate the food web.',
    sourceRef: {
      unitNumber: 2,
      section: '2.1-2.5',
      pageRange: '22-38',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    stages: [
      // STAGE 1: Inquiry Type & Purpose
      {
        stageNumber: 1,
        stageKey: 'inquiry-type',
        stageTitle: 'Stage 1: Defining the Inquiry Type',
        stageConcept: 'Basic vs. Applied Research (Section 2.2, pp. 24–27)',
        textbookReference: 'Textbook pp. 24–27',
        diagnosticFocus: 'Framing environmental problem-solving with empirical rigor',
        prompt:
          'As the Lead Environmental Researcher, what is the strategic classification and purpose of this study?',
        scenarioContext:
          'Local fishers and regional factory managers are in active dispute. What type of research will produce credible, neutral, and actionable evidence?',
        options: [
          {
            id: 'c2-s1-opt-a',
            label: 'Applied Environmental Research: Eco-Toxicological & Livelihood Assessment',
            description:
              'Conduct an applied empirical investigation measuring microplastic contamination in water, sediment, and benthic crab tissues across estuary zones, assessing the direct threat to community health and economy.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Bridges ecological measurement with community socio-economic impact; requires structured water sampling and laboratory microscopy.',
            simulatedConsequence:
              'Both the fishing cooperative and the regional environmental agency agree to grant waterway access and laboratory support.',
            detailedFeedback:
              'Excellent. Applied environmental research uses scientific measurement to solve concrete ecological and community crises (pp. 24–27).'
          },
          {
            id: 'c2-s1-opt-b',
            label: 'Pure Theoretical Astronomy: Solar Radiation on Outer Planets',
            description:
              'Study how ultraviolet radiation from distant stars affects cosmic dust in deep space.',
            isOptimal: false,
            rigorScore: 10,
            misconceptionId: 'misc-basic-is-useless',
            methodologicalTradeoff:
              'Completely detached from the urgent ecological crisis in Teluk Biru.',
            simulatedConsequence:
              'Fishers and factory workers walk away in disgust as the estuary continues to degrade.',
            detailedFeedback:
              'Research must be purposive and aligned with the problem under investigation (pp. 22–24).'
          },
          {
            id: 'c2-s1-opt-c',
            label: 'Unverified Boycott Advocacy Campaign',
            description:
              'Print protest flyers demanding the immediate shutdown of all factories without taking any water or crab samples.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-research-is-googling',
            methodologicalTradeoff:
              'Activates political conflict without any verifiable empirical data; easily dismissed in court.',
            simulatedConsequence:
              'Factory lawyers file an injunction; the claims are dismissed because no scientific evidence was collected.',
            detailedFeedback:
              'Research is an objective empirical investigation, not ungrounded political activism (pp. 22–24). Without verifiable evidence, claims carry zero academic or legal weight.'
          }
        ]
      },

      // STAGE 2: Question Formulation & Scope Calibration
      {
        stageNumber: 2,
        stageKey: 'question-formulation',
        stageTitle: 'Stage 2: Calibrating the Research Question',
        stageConcept: 'Formulating Investigable Questions (Section 2.4, pp. 31–33)',
        textbookReference: 'Textbook pp. 31–33',
        diagnosticFocus: 'Spatial and variable precision in environmental inquiry',
        prompt:
          'Which Research Question establishes the most rigorous and investigable foundation for the Teluk Biru study?',
        scenarioContext:
          'The issue involves industrial discharge, river currents, and crab biology. The question must define measurable parameters.',
        options: [
          {
            id: 'c2-s2-opt-a',
            label: 'Precise Eco-Toxicological Question with Spatial Gradient',
            description:
              '"To what extent do microplastic concentrations in water, sediment, and benthic mangrove crab (Scylla serrata) tissues vary across a 10 km gradient from the Kali Biru industrial drainage outlet to the outer marine reserve in Teluk Biru?"',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Requires sampling across multiple geographic points; provides clear spatial cause-and-effect evidence.',
            simulatedConsequence:
              'Scientific reviewers praise the spatial gradient design: it will clearly show whether pollution originates from the factory canal or oceanic tides.',
            variablesIdentified: {
              independent: 'Distance from industrial drainage outlet (spatial gradient in km)',
              dependent: 'Microplastic concentration (particles / liter water; particles / gram crab tissue)',
              controlled: ['Crab species (Scylla serrata)', 'Sampling depth', 'Tidal phase']
            },
            detailedFeedback:
              'Outstanding. This question specifies the exact organism, spatial gradient, environmental matrices (water, sediment, tissue), and geographical boundaries (pp. 31–33).'
          },
          {
            id: 'c2-s2-opt-b',
            label: 'Moral Generalization: "Are plastic factories evil?"',
            description:
              '"Why do greedy industrial corporations hate nature and ruin the lives of honest fishermen?"',
            isOptimal: false,
            rigorScore: 25,
            misconceptionId: 'misc-topic-equals-question',
            methodologicalTradeoff:
              'Purely subjective; relies on moral judgment rather than empirical measurement.',
            simulatedConsequence:
              'Rejected by academic journals for extreme investigator bias.',
            detailedFeedback:
              'A scientific research question must be objective and measurable, not a loaded rhetorical prosecution (pp. 31–33).'
          },
          {
            id: 'c2-s2-opt-c',
            label: 'Trivial Geography Lookup: "What is the name of the river?"',
            description:
              '"What is the total length in kilometers of the Kali Biru river on the provincial map?"',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-research-is-googling',
            methodologicalTradeoff:
              'A simple map lookup that provides zero insight into microplastic pollution or crab health.',
            simulatedConsequence:
              'You write "42 km" on a piece of paper, but have learned nothing about water contamination.',
            detailedFeedback:
              'Looking up geographic coordinates is information retrieval, not empirical research (pp. 22–23).'
          }
        ]
      },

      // STAGE 3: Literature Review & Gap Identification
      {
        stageNumber: 3,
        stageKey: 'literature-gap',
        stageTitle: 'Stage 3: Literature Review & Research Gap',
        stageConcept: 'Mapping Scholarly Context & Gaps (Section 2.4, pp. 32–33)',
        textbookReference: 'Textbook pp. 32–33',
        diagnosticFocus: 'Identifying missing research in tropical estuarine food webs',
        prompt:
          'Prior literature review reveals:\n1. Kurniawan (2020): High floating macro-plastic debris (bottles, bags) documented in North Java seas.\n2. Wright (2018): Microplastics (<5mm) ingested by marine pelagic fish in temperate Pacific waters.\nWhat is the specific RESEARCH GAP in Teluk Biru?',
        scenarioContext:
          'What has NOT yet been researched in existing regional scientific literature?',
        options: [
          {
            id: 'c2-s3-opt-a',
            label: 'Benthic Tropical Mangrove Bioaccumulation Gap',
            description:
              'Existing studies focus on floating macro-plastics or pelagic open-ocean fish; no research has investigated microplastic trophic transfer into benthic mud-burrowing mangrove crabs supporting artisanal community diets in tropical Indonesian estuaries.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Justifies sampling sediment and benthic tissues rather than simply skimming surface water bottles.',
            simulatedConsequence:
              'Marine biology faculty offers to mentor the project because the study addresses a recognized, unstudied ecological gap.',
            detailedFeedback:
              'Spot-on. Identifying that benthic (bottom-dwelling) mangrove species have been overlooked in microplastic literature creates a compelling justification for your study (pp. 32–33).'
          },
          {
            id: 'c2-s3-opt-b',
            label: 'Summarize 10 Newspaper Articles About Garbage',
            description:
              'Copy paragraphs from regional newspapers about beach cleanups and present it as your literature review.',
            isOptimal: false,
            rigorScore: 30,
            misconceptionId: 'misc-lit-review-as-summary',
            methodologicalTradeoff:
              'Relies on unverified journalistic media rather than peer-reviewed ecological science.',
            simulatedConsequence:
              'Your paper lacks scientific citations; you do not know the standard chemical digestion protocols for crab tissue.',
            detailedFeedback:
              'A literature review must analyze peer-reviewed empirical science, not merely summarize popular newspaper stories (pp. 32–33).'
          },
          {
            id: 'c2-s3-opt-c',
            label: 'Assume Nothing Has Ever Been Discovered',
            description:
              'Claim that microplastics were completely unknown to humanity until your team arrived at the river.',
            isOptimal: false,
            rigorScore: 15,
            misconceptionId: 'misc-lit-review-as-summary',
            methodologicalTradeoff:
              'Displays total ignorance of global marine science; alienates academic reviewers.',
            simulatedConsequence:
              'Reviewers reject the proposal for failing to review basic polymer science.',
            detailedFeedback:
              'Every scientific study builds upon decades of prior scholarship. Claiming no one has ever studied plastic ignores thousands of foundational studies (pp. 32–33).'
          }
        ]
      },

      // STAGE 4: SMART Objectives & Hypothesis Formulation
      {
        stageNumber: 4,
        stageKey: 'objectives-hypothesis',
        stageTitle: 'Stage 4: Objectives & Scientific Hypothesis',
        stageConcept: 'SMART Objectives & Falsifiability (Section 2.4, pp. 32–34)',
        textbookReference: 'Textbook pp. 32–34',
        diagnosticFocus: 'Falsifiable spatial decay hypothesis and measurable parameters',
        prompt:
          'Set the operational SMART objective and scientific hypothesis for the estuary study.',
        scenarioContext:
          'The hypothesis must be testable through field sampling across the river transects.',
        options: [
          {
            id: 'c2-s4-opt-a',
            label: 'Operational SMART Sampling Plan + Inverse Distance Hypothesis',
            description:
              'Objective: To collect and quantify microplastic particles from 30 water, 30 sediment, and 30 crab digestive gland samples across 5 designated transect stations over a 4-week dry season campaign.\nHypothesis: Microplastic particle density in sediment and crab tissue will exhibit a significant negative correlation with distance from the industrial canal outlet (highest near the canal, decreasing toward the outer marine reserve).',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Requires strict geographic coordinates and uniform sampling; clearly verifiable or falsifiable.',
            simulatedConsequence:
              'The testing protocol is transparent: if microplastics are equally distributed everywhere or highest in the ocean, the hypothesis is refuted.',
            detailedFeedback:
              'Exemplary research formulation. The objective specifies exact sample quantities (30/30/30) and timeframes. The hypothesis makes a testable, falsifiable spatial prediction (pp. 32–34).'
          },
          {
            id: 'c2-s4-opt-b',
            label: 'Vague Wish + Circular Prediction',
            description:
              'Objective: To clean up the entire river forever.\nHypothesis: If plastic is bad, then crabs will be sad because pollution is harmful.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-vague-objectives',
            methodologicalTradeoff:
              'Contains no measurable variables, numbers, or operational testing criteria.',
            simulatedConsequence:
              'The team collects random mud with no idea what to measure under the microscope.',
            detailedFeedback:
              '"Sad crabs" is an anthropomorphic emotion, not a scientific dependent variable. Objectives must be operationally measurable (pp. 32–34).'
          },
          {
            id: 'c2-s4-opt-c',
            label: 'Unfalsifiable Superstition',
            description:
              'Objective: To ask local spirits whether the river is angry.\nHypothesis: Invisible ocean magic will reveal the truth without needing to touch dirty mud.',
            isOptimal: false,
            rigorScore: 10,
            misconceptionId: 'misc-hypothesis-is-wild-guess',
            methodologicalTradeoff:
              'Rejects empirical evidence entirely; non-scientific.',
            simulatedConsequence:
              'Immediate disqualification from scientific research presentation.',
            detailedFeedback:
              'Empirical research requires observation, measurement, and falsifiable claims grounded in the natural world (pp. 22–24).'
          }
        ]
      },

      // STAGE 5: Methodology Blueprint & Sampling Architecture
      {
        stageNumber: 5,
        stageKey: 'methodology-sampling',
        stageTitle: 'Stage 5: Methodology Blueprint & Sampling Architecture',
        stageConcept: 'Quantitative/Qualitative Alignment & Sampling Validity (Section 2.3 & 2.4, pp. 27–35)',
        textbookReference: 'Textbook pp. 27–35',
        diagnosticFocus: 'Transect sampling protocols, contamination controls, and triangulation',
        prompt:
          'Design the field sampling methodology and lab protocol to prevent sample contamination.',
        scenarioContext:
          'Microplastics are everywhere, including airborne synthetic fibers from clothing. How do you ensure empirical validity?',
        options: [
          {
            id: 'c2-s5-opt-a',
            label: 'Standardized Transect Protocol with Procedural Blanks & Mixed Triangulation',
            description:
              'Field: 5 geo-referenced transect stations (0km, 2km, 4km, 7km, 10km). Use glass and stainless steel tools (zero plastic equipment).\nLab: Potassium hydroxide (KOH) tissue digestion, stereomicroscopy, and hot-needle polymer confirmation, running negative air-blanks to control for airborne synthetic clothing fibers.\nSocial Triangulation: Semi-structured interviews with 25 artisanal fishers to document multi-year catch changes and economic impacts.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Requires strict anti-contamination protocols and lab rigor; produces indisputable evidence.',
            simulatedConsequence:
              'The environmental laboratory certifies the results as forensic-grade; findings cannot be dismissed as laboratory contamination.',
            detailedFeedback:
              'Outstanding methodological rigor. Using procedural blanks eliminates false positives, and combining ecological spectroscopy with fisher interviews connects environmental data to human livelihoods (pp. 27–35).'
          },
          {
            id: 'c2-s5-opt-b',
            label: 'Plastic Bucket Convenience Scoop at One Boat Dock',
            description:
              'Scoop water using brightly colored cracked plastic buckets right next to the diesel boat motor, wearing frayed polyester fleece jackets with no lab blanks.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-replicability-optional',
            methodologicalTradeoff:
              'Severe sample contamination; plastic buckets and synthetic fleece shed thousands of microfibers into the sample.',
            simulatedConsequence:
              'The factory’s scientists easily prove your samples were contaminated by your own plastic buckets and clothing.',
            detailedFeedback:
              'Without contamination controls and procedural blanks, field measurements of microplastics are completely invalidated by background plastic shedding (pp. 23–24).'
          },
          {
            id: 'c2-s5-opt-c',
            label: 'Pure Survey Without Physical Field Sampling',
            description:
              'Ask 50 tourists at a beach hotel 15 km away if they think crabs have plastic in them, and take zero water or crab samples.',
            isOptimal: false,
            rigorScore: 25,
            misconceptionId: 'misc-numbers-tell-everything',
            methodologicalTradeoff:
              'Asks people who have never touched a mangrove crab; produces zero biochemical data.',
            simulatedConsequence:
              'You produce a chart of tourist opinions, but have zero evidence about actual river contamination.',
            detailedFeedback:
              'Public opinion cannot substitute for physical biochemical evidence when investigating eco-toxicological contamination (pp. 27–29).'
          }
        ]
      },

      // STAGE 6: Findings Analysis vs. Interpretation Triad
      {
        stageNumber: 6,
        stageKey: 'findings-interpretation',
        stageTitle: 'Stage 6: Findings Analysis vs. Discussion Triad',
        stageConcept: 'The Analysis Triad: Findings vs. Discussion (Section 2.4, pp. 34–36)',
        textbookReference: 'Textbook pp. 34–36',
        diagnosticFocus: 'Interpreting complex multi-source pollution findings objectively',
        prompt:
          'Your field and laboratory data reveals:\n• Transect 1 (Canal Outlet): 142 microplastic particles/L (85% polyethylene fragments matching packaging molds).\n• Transect 2 (2km): 68 particles/L (60% fragments, 30% synthetic fibers).\n• Transect 3 & 4 (Mid-Estuary): 32 particles/L; crab tissues averaged 6.4 particles per individual.\n• Transect 5 (Marine Reserve): 12 particles/L (80% synthetic blue nylon fibers, 10% fragments).\nHow do you structure the Findings and Discussion?',
        scenarioContext:
          'Notice that while industrial fragments dominate near the canal, synthetic textile fibers appear throughout the bay.',
        options: [
          {
            id: 'c2-s6-opt-a',
            label: 'Nuanced Source Apportionment: Dual-Source Discussion',
            description:
              'Findings: Report precise particle counts, polymer types (spectroscopy), and tissue densities across stations neutrally with standard deviation error bars.\nDiscussion: Conclude that industrial packaging discharge is the primary driver of heavy fragment contamination in the upper estuary (Transects 1–2), but domestic laundry/sewage runoff contributes significant synthetic textile fibers across the wider marine bay (Transect 5). Recommend targeted industrial wastewater filtration AND municipal domestic sewage improvements.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Demonstrates scientific nuance; resists the temptation to oversimplify multi-source pollution.',
            simulatedConsequence:
              'Both the municipality and the factory agree to joint mediation: the factory agrees to install secondary polymer filters, while the city upgrades domestic sewage pipes.',
            detailedFeedback:
              'Masterful discussion. A skilled researcher lets the empirical data reveal the full truth: industrial discharge was the main culprit near the river, but domestic fibers also contributed. Nuance builds lasting solutions (pp. 34–36).'
          },
          {
            id: 'c2-s6-opt-b',
            label: 'Conceal Textile Fiber Data: Single-Villain Narrative',
            description:
              'Erase the synthetic nylon fiber data from Transect 5 and claim 100% of all plastic in the ocean comes exclusively from the packaging factory.',
            isOptimal: false,
            rigorScore: 30,
            misconceptionId: 'misc-findings-equal-discussion',
            methodologicalTradeoff:
              'Academic data falsification; conceals inconvenient evidence to support a preconceived villain narrative.',
            simulatedConsequence:
              'An independent audit uncovers the omitted raw spectra; your team is investigated for research misconduct and data manipulation.',
            detailedFeedback:
              'Researchers must never hide data to protect a preferred narrative. Scientific integrity requires reporting all empirical findings honestly (pp. 34–36).'
          },
          {
            id: 'c2-s6-opt-c',
            label: 'Declare All Crabs Lethal Poison Without Toxicity Thresholds',
            description:
              'Hold a press conference announcing: "Eating one single crab will instantly kill you!" causing mass panic and bankrupting all 320 fishing families.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-findings-equal-discussion',
            methodologicalTradeoff:
              'Reckless sensationalism; confuses microplastic presence with acute lethal toxicity thresholds.',
            simulatedConsequence:
              'Local fishers lose their entire livelihood overnight; suicide and poverty spike among fishing families.',
            detailedFeedback:
              'Responsible scientists distinguish between detecting trace particles and verified toxicological risk thresholds. Unsubstantiated sensationalism harms the very community you intended to help (pp. 34–36).'
          }
        ]
      },

      // STAGE 7: The Final Boss Audit & Iterative Refinement
      {
        stageNumber: 7,
        stageKey: 'audit-repair',
        stageTitle: 'Stage 7: Peer Review Audit & Iterative Refinement (The Boss Challenge)',
        stageConcept: 'The 8-Step Research Process & Iteration (Section 2.5, pp. 36–38)',
        textbookReference: 'Textbook pp. 36–38',
        diagnosticFocus: 'Iterative refinement: controlling for monsoonal tidal dilution',
        prompt:
          'AUDIT SHOCK: An oceanographic reviewer raises a critical methodological challenge:\n"TIDAL DILUTION ANOMALY: Your water sampling at Transect 1 occurred during Spring High Tide, where oceanic saltwater influx diluted the canal discharge. Conversely, Transect 3 was sampled during Low Tide. Your water concentration numbers may reflect tidal timing rather than true emission rates!"\nHow does your research team execute an iterative refinement?',
        scenarioContext:
          'A tidal flaw could compromise water concentration comparisons. How do you scientifically repair and strengthen the study?',
        options: [
          {
            id: 'c2-s7-opt-a',
            label: 'Iterative Multi-Phase Repair: Tidal Cycle Synchronization & Sediment Core Validation',
            description:
              '1. Normalize water sampling by conducting synchronized 24-hour tidal cycle sampling (testing both peak high and peak low tide at all 5 stations).\n2. Prioritize Sediment Core and Crab Tissue data as the primary long-term biological indicators, because benthic sediment and crab organs accumulate microplastics over months and are immune to hourly tidal dilution.',
            isOptimal: true,
            rigorScore: 100,
            methodologicalTradeoff:
              'Adds 72 hours of synchronized field monitoring; completely neutralizes the reviewer’s tidal critique.',
            simulatedConsequence:
              'The peer reviewer formally withdraws the objection and commends the team for an ironclad multi-phase study design.',
            detailedFeedback:
              'Brilliant iterative repair. Relying on benthic bioaccumulation (crabs and sediment) provides historical permanence that hourly tides cannot alter, while tidal synchronization proves professional research rigor (pp. 36–38).'
          },
          {
            id: 'c2-s7-opt-b',
            label: 'Ignore the Tide: Claim Tides Do Not Exist in Tropical Indonesia',
            description:
              'Argue in your final defense that tidal cycles are a myth invented by European oceanographers.',
            isOptimal: false,
            rigorScore: 15,
            misconceptionId: 'misc-research-is-straight-line',
            methodologicalTradeoff:
              'Demonstrates scientific illiteracy; instantly discredits the study.',
            simulatedConsequence:
              'The study is rejected as scientifically incompetent.',
            detailedFeedback:
              'Tidal dynamics are fundamental physical oceanography. Denying natural phenomena destroys research credibility (pp. 36–38).'
          },
          {
            id: 'c2-s7-opt-c',
            label: 'Throw Out the Study and Blame the University',
            description:
              'Abandon the project, delete the laboratory photos, and tell the fishermen that science is impossible.',
            isOptimal: false,
            rigorScore: 20,
            misconceptionId: 'misc-research-is-straight-line',
            methodologicalTradeoff:
              'Total capitulation; abandons the community.',
            simulatedConsequence:
              'The coastal fishery collapses without scientific data to protect it.',
            detailedFeedback:
              'Scientific obstacles are solved through iterative refinement and improved controls, never through defeatist abandonment (pp. 36–38).'
          }
        ]
      }
    ],
    summaryDebrief: {
      idealPathSummary:
        'Applied Eco-Toxicological Framing -> Spatial Gradient Research Question -> Benthic Bioaccumulation Research Gap -> SMART Transect Objectives & Negative Correlation Hypothesis -> Contamination-Controlled Field Sampling with Fisher Triangulation -> Objective Triad Reporting with Multi-Source Apportionment -> Synchronized Tidal Iteration.',
      keyLearningTakeaway:
        'Environmental research requires rigorous procedural controls: contamination blanks, standardized spatial gradients, and multi-factor source attribution. Real science unites empirical laboratory spectrometry with community lived experience.',
      cambridgeRelevance:
        'Directly reflects Cambridge Global Perspectives Environmental Sustainability and Academic Inquiry strands (Component 02/03).'
    }
  }
];
