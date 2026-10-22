/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 132–144)
 * Language Level: CEFR B1 English
 * 
 * Contains verified curriculum challenges for:
 *  1. g10-1: Conclusion Matrix Architect (5-Step Conclusion Builder Matrix, 4 Fatal Defects)
 *  2. g10-2: Validity Judge (Internal vs. External Validity, Triangulation, Generalisability)
 *  3. g10-3: Hypothesis Fate (Supported, Refuted, Modified Hypotheses & Scientific Honesty)
 */

// ============================================================================
// GAME 1: CONCLUSION MATRIX ARCHITECT (g10-1)
// ============================================================================

export type MatrixStep = 
  | 'step1_question_hypothesis'
  | 'step2_evidence_synthesis'
  | 'step3_validity_evaluation'
  | 'step4_nuanced_answer'
  | 'step5_limitations_recommendations';

export type ConclusionDefect = 
  | 'none'
  | 'sudden_miracle_fact'
  | 'mechanical_copy_paste'
  | 'overreaching_leap'
  | 'wishful_thinking';

export interface ConclusionMatrixItem {
  id: string;
  stage: 1 | 2 | 3;
  projectTopic: string;
  researchQuestion: string;
  initialHypothesis: string;
  draftExcerpt: string;
  defectPresent: ConclusionDefect;
  targetMatrixStep: MatrixStep;
  options: {
    id: string;
    text: string;
    isCorrectDiagnosisOrRepair: boolean;
    analysisNote: string;
  }[];
  matrixAlignment: {
    stepName: string;
    scholarlyRole: string;
  };
  pedagogicalTakeaway: string;
}

export const G10_1_CHALLENGES: ConclusionMatrixItem[] = [
  // STAGE 1: MATRIX COMPONENT MAPPING (Items 1-4)
  {
    id: 'g10-1-c1',
    stage: 1,
    projectTopic: 'Urban School Commute and Dedicated Bus Lanes',
    researchQuestion: 'To what extent do dedicated bus lanes reduce morning commute times for high school students in South Jakarta?',
    initialHypothesis: 'Dedicated bus lanes reduce student commute times by at least 25%.',
    draftExcerpt: '"Triangulating our primary GPS travel logs (showing a 21.1% travel time drop) with municipal transit telemetry (showing a 24% bus speed increase) confirms a consistent 21% to 24% transit speed improvement across Corridor 1."',
    defectPresent: 'none',
    targetMatrixStep: 'step2_evidence_synthesis',
    options: [
      {
        id: 'opt-a',
        text: 'Step 2: Synthesize Primary & Secondary Evidence (Triangulates student GPS logs with municipal telemetry).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! This excerpt weaves together primary fieldwork and secondary official data into a synthesized evidentiary finding.'
      },
      {
        id: 'opt-b',
        text: 'Step 5: Recommend budget cuts for all city buses.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. This paragraph contains data synthesis, not policy recommendations.'
      },
      {
        id: 'opt-c',
        text: 'Step 1: Ask what a bus looks like.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The research question was established long before this synthesis.'
      }
    ],
    matrixAlignment: {
      stepName: 'Step 2: Evidence Synthesis',
      scholarlyRole: 'Combines multiple verified data streams to provide an empirical foundation for the conclusion.'
    },
    pedagogicalTakeaway: 'Step 2 synthesizes primary student data with secondary institutional benchmarks before reaching a final judgment.'
  },
  {
    id: 'g10-1-c2',
    stage: 1,
    projectTopic: 'Classroom Air Quality and Reading Focus',
    researchQuestion: 'How does HEPA indoor air filtration impact standardized reading comprehension among Grade 10 students?',
    initialHypothesis: 'HEPA filtration improves standardized reading comprehension scores by 15%.',
    draftExcerpt: '"While our controlled trial demonstrated a 14% reading score gain inside sealed air-conditioned rooms, these findings cannot be automatically generalized to open-air rural classrooms with natural cross-breeze ventilation."',
    defectPresent: 'none',
    targetMatrixStep: 'step3_validity_evaluation',
    options: [
      {
        id: 'opt-a',
        text: 'Step 3: Evaluate Internal and External Validity (Acknowledges high internal control while bounding external generalisability).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! The excerpt critically evaluates the boundary between controlled laboratory success and real-world applicability.'
      },
      {
        id: 'opt-b',
        text: 'Step 4: Declare that all rural schools must be demolished.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The text is assessing methodological validity boundaries.'
      },
      {
        id: 'opt-c',
        text: 'Step 1: State the hypothesis for the first time.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The excerpt assumes the study has already been conducted.'
      }
    ],
    matrixAlignment: {
      stepName: 'Step 3: Validity Evaluation',
      scholarlyRole: 'Transparently audits whether findings are internally robust and externally transferable.'
    },
    pedagogicalTakeaway: 'Step 3 critically assesses the boundaries of where your research findings can and cannot be legitimately applied.'
  },
  {
    id: 'g10-1-c3',
    stage: 1,
    projectTopic: 'Single-Use Plastic Ban in School Canteens',
    researchQuestion: 'What are the economic and behavioral impacts of replacing single-use plastic wrap with banana leaves in school canteens?',
    initialHypothesis: 'Using banana leaves eliminates single-use plastic while maintaining vendor profits.',
    draftExcerpt: '"The evidence indicates that replacing plastic wrap with banana leaves substantially reduces non-biodegradable waste; however, vendor profit margins remain stable only when the school cooperative provides wholesale leaf washing support."',
    defectPresent: 'none',
    targetMatrixStep: 'step4_nuanced_answer',
    options: [
      {
        id: 'opt-a',
        text: 'Step 4: Formulate the Nuanced Answer with Hedging and Qualifiers (Resolves the question with realistic boundary conditions).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Resolves the research question with precise scholarly nuance rather than simplistic sweeping claims.'
      },
      {
        id: 'opt-b',
        text: 'Step 2: Collect raw plastic wrappers from the playground floor.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. This sentence is a reasoned final answer, not primary data collection.'
      },
      {
        id: 'opt-c',
        text: 'Defect 4: Express emotional love for bananas.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The sentence is reasoned, measured, and evidence-grounded.'
      }
    ],
    matrixAlignment: {
      stepName: 'Step 4: Nuanced Answer',
      scholarlyRole: 'Provides the calibrated answer to the research inquiry with appropriate modal hedging.'
    },
    pedagogicalTakeaway: 'Step 4 delivers a direct, nuanced answer to the central research inquiry without dogmatism.'
  },
  {
    id: 'g10-1-c4',
    stage: 1,
    projectTopic: 'Household Composting in Urban Neighborhoods',
    researchQuestion: 'How can urban RT neighborhood committees increase household organic waste separation?',
    initialHypothesis: 'Providing free bucket composters will achieve 70% household participation.',
    draftExcerpt: '"The municipal waste agency should subsidize biopore drill kits for RT heads, while future researchers should conduct longitudinal studies tracking compost bin odor control during the rainy season."',
    defectPresent: 'none',
    targetMatrixStep: 'step5_limitations_recommendations',
    options: [
      {
        id: 'opt-a',
        text: 'Step 5: Articulate Limitations & Actionable Recommendations (Proposes stakeholder policy next steps and future research directions).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Targets concrete actions for municipal leaders and outlines future research needs.'
      },
      {
        id: 'opt-b',
        text: 'Step 1: Wonder if garbage smells bad.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The excerpt provides forward-looking actionable recommendations.'
      },
      {
        id: 'opt-c',
        text: 'Step 2: Count how many biopore holes were dug last week.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The text is making future-oriented recommendations.'
      }
    ],
    matrixAlignment: {
      stepName: 'Step 5: Recommendations & Limitations',
      scholarlyRole: 'Translates research discoveries into real-world civic impact and identifies unanswered questions.'
    },
    pedagogicalTakeaway: 'Step 5 ensures research does not end on paper, but provides actionable guidance for real-world stakeholders.'
  },

  // STAGE 2: DIAGNOSING THE FOUR FATAL CONCLUSION DEFECTS (Items 5-8)
  {
    id: 'g10-1-c5',
    stage: 2,
    projectTopic: 'Adolescent Sleep Deprivation and Screen Time',
    researchQuestion: 'To what extent does evening smartphone use affect sleep duration among Grade 10 students?',
    initialHypothesis: 'Late-night screen use reduces average sleep by more than 90 minutes.',
    draftExcerpt: '"In conclusion, smartphone blue light destroys sleep. Furthermore, a 2024 Harvard study on 10,000 lab mice proves that electromagnetic phone radiation shrinks the brain hippocampus by 42%!" (This Harvard study was never mentioned anywhere in the literature review or body chapters).',
    defectPresent: 'sudden_miracle_fact',
    targetMatrixStep: 'step4_nuanced_answer',
    options: [
      {
        id: 'opt-a',
        text: 'Defect 1: The Sudden Miracle Fact (Introducing brand new unanalyzed external evidence for the first time in the conclusion).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Cambridge examiners penalize introducing surprise studies in the final paragraphs that were never analyzed in the body.'
      },
      {
        id: 'opt-b',
        text: 'High-level synthesis of student survey logs.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Introducing surprise mouse radiation studies is a major defect.'
      },
      {
        id: 'opt-c',
        text: 'Perfect academic hedging.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The claim is sensationalist and unanalyzed.'
      }
    ],
    matrixAlignment: {
      stepName: 'Defect Diagnosis',
      scholarlyRole: 'Eliminates unexpected surprise data that undermines the integrity of the conclusion.'
    },
    pedagogicalTakeaway: 'Never introduce new evidence or statistics in your conclusion. A conclusion only evaluates evidence already analyzed in earlier chapters.'
  },
  {
    id: 'g10-1-c6',
    stage: 2,
    projectTopic: 'Mangrove Coastal Erosion Mitigation',
    researchQuestion: 'How effective are mangrove greenbelts in preventing coastal soil erosion along the North Java coastline?',
    initialHypothesis: 'Dense mangrove roots reduce sediment loss by over 60%.',
    draftExcerpt: '"As stated in Chapter 1, mangroves have roots. As stated in Chapter 2, waves hit the coast. As stated in Chapter 3, sediment washes away. As stated in Chapter 4, some trees died. Therefore, this concludes our report."',
    defectPresent: 'mechanical_copy_paste',
    targetMatrixStep: 'step2_evidence_synthesis',
    options: [
      {
        id: 'opt-a',
        text: 'Defect 2: The Mechanical Copy-Paste (Passively repeating earlier chapter headings without any higher-order synthesis or judgment).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! This robotic summary fails to resolve the research question or evaluate the initial hypothesis.'
      },
      {
        id: 'opt-b',
        text: 'Brilliant conceptual triangulation.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. This is a classic lazy copy-paste summary.'
      },
      {
        id: 'opt-c',
        text: 'Step 5 forward-looking policy proposal.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. No recommendations or actionable insights are offered.'
      }
    ],
    matrixAlignment: {
      stepName: 'Defect Diagnosis',
      scholarlyRole: 'Transforms passive mechanical recaps into active, judgmental synthesis.'
    },
    pedagogicalTakeaway: 'A conclusion is not a summary of what you wrote; it is an evidence-based answer to what your findings mean.'
  },
  {
    id: 'g10-1-c7',
    stage: 2,
    projectTopic: 'Solar-Powered Irrigation in East Sumba',
    researchQuestion: 'Does solar-powered groundwater pumping increase dry-season crop yield for smallholder onion farmers in East Sumba?',
    initialHypothesis: 'Solar pumping increases dry-season onion harvests by 30%.',
    draftExcerpt: '"We surveyed 12 onion farmers in one village in East Sumba and observed a 28% yield increase. Therefore, solar water pumps are guaranteed to permanently eliminate all poverty, drought, and hunger across every nation in Southeast Asia!"',
    defectPresent: 'overreaching_leap',
    targetMatrixStep: 'step3_validity_evaluation',
    options: [
      {
        id: 'opt-a',
        text: 'Defect 3: The Overreaching Leap (Making sweeping universal claims that vastly exceed what a sample of 12 farmers can prove).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Generalizing from 12 farmers in one village to the entire economy of Southeast Asia is a massive external validity violation.'
      },
      {
        id: 'opt-b',
        text: 'Careful adherence to external validity boundaries.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Claiming to end all poverty in Southeast Asia from 12 interviews is wildly overreaching.'
      },
      {
        id: 'opt-c',
        text: 'Appropriate scholarly modesty and hedging.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The excerpt demonstrates extreme dogmatic arrogance.'
      }
    ],
    matrixAlignment: {
      stepName: 'Defect Diagnosis',
      scholarlyRole: 'Enforces proportional scope so claims never outrun empirical evidence.'
    },
    pedagogicalTakeaway: 'Always bound your conclusions to the actual size and geography of your evidentiary sample.'
  },
  {
    id: 'g10-1-c8',
    stage: 2,
    projectTopic: 'Plastic Straw Reductions in Coffee Chains',
    researchQuestion: 'To what extent do paper straws reduce commercial beverage plastic waste?',
    initialHypothesis: 'Paper straws reduce beverage plastic volume by 20%.',
    draftExcerpt: '"Although our survey data showed that 85% of customers threw paper straws in the trash and the plastic cup lids remained unchanged, we firmly believe that if everyone just loved Mother Earth and smiled more, the universe would heal itself!"',
    defectPresent: 'wishful_thinking',
    targetMatrixStep: 'step4_nuanced_answer',
    options: [
      {
        id: 'opt-a',
        text: 'Defect 4: The Wishful Thinking Ending (Substituting emotional preaching and moral fantasies for empirical evidence).',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! The author ignores their own survey data (85% discarded straws and plastic lids) and ends with sentimental daydreaming.'
      },
      {
        id: 'opt-b',
        text: 'Scientifically rigorous causal deduction.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Wishing for universal healing is not empirical research.'
      },
      {
        id: 'opt-c',
        text: 'Exemplary Step 5 policy recommendation.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. There are no feasible administrative or operational recommendations.'
      }
    ],
    matrixAlignment: {
      stepName: 'Defect Diagnosis',
      scholarlyRole: 'Replaces sentimental wishful thinking with grounded, data-backed policy recommendations.'
    },
    pedagogicalTakeaway: 'Never end with emotional preaching. Cambridge demands rigorous analysis of real-world evidence and practical policy.'
  },

  // STAGE 3: ASSEMBLING NUANCED SCHOLARLY CONCLUSIONS (Items 9-11)
  {
    id: 'g10-1-c9',
    stage: 3,
    projectTopic: 'Peer Tutoring and Mathematics Anxiety',
    researchQuestion: 'To what extent does reciprocal peer tutoring reduce mathematics test anxiety among Grade 10 students?',
    initialHypothesis: 'Peer tutoring reduces mathematics anxiety scale scores by at least 20%.',
    draftExcerpt: 'A student drafts a flawed conclusion: "Peer tutoring was fun. Everyone liked it. Therefore peer tutoring solves math completely."',
    defectPresent: 'mechanical_copy_paste',
    targetMatrixStep: 'step4_nuanced_answer',
    options: [
      {
        id: 'opt-a',
        text: 'Repair into a scholarly conclusion: "Synthesized pre- and post-intervention survey scores indicated an average 18.5% reduction in mathematics anxiety; however, gains were concentrated among students preparing in structured pairs rather than informal drop-in groups."',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Provides quantitative synthesis, directly evaluates the hypothesis, and uses precise qualifying boundaries.'
      },
      {
        id: 'opt-b',
        text: 'Keep the original draft because brevity is always best.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. The draft is childish, unscientific, and lacks evidentiary backing.'
      },
      {
        id: 'opt-c',
        text: 'Claim that students who dislike peer tutoring should be barred from school.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Punitive authoritarianism has no place in academic conclusions.'
      }
    ],
    matrixAlignment: {
      stepName: 'Matrix Assembly',
      scholarlyRole: 'Transforms shallow assertions into an evidence-based, hedged conclusion matrix.'
    },
    pedagogicalTakeaway: 'A scholarly conclusion weaves exact empirical outcomes with careful boundary conditions.'
  },
  {
    id: 'g10-1-c10',
    stage: 3,
    projectTopic: 'School Roof Rainwater Harvesting for Garden Irrigation',
    researchQuestion: 'How viable is rainwater harvesting for meeting school garden water needs during dry season months?',
    initialHypothesis: 'Harvested rainwater supplies 100% of garden watering needs throughout the July–September dry season.',
    draftExcerpt: 'A student writes: "Our data showed rain tanks ran empty in the second week of August. But I will just write that the hypothesis was 100% supported so we get an A."',
    defectPresent: 'overreaching_leap',
    targetMatrixStep: 'step1_question_hypothesis',
    options: [
      {
        id: 'opt-a',
        text: 'Repair with scientific honesty: "The empirical findings refuted the 100% sufficiency hypothesis, revealing that collected rainwater met garden irrigation needs for only 42 days of the dry season, demonstrating the need for supplementary greywater filtration."',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Demonstrates academic honesty, accurately classifies the hypothesis as refuted, and proposes an actionable engineering fix.'
      },
      {
        id: 'opt-b',
        text: 'Falsify the rainfall records to match the 100% prediction.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Falsifying research data is an unforgivable ethical violation.'
      },
      {
        id: 'opt-c',
        text: 'Delete the entire research paper and pretend the garden does not exist.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Refuted hypotheses are valuable scientific discoveries.'
      }
    ],
    matrixAlignment: {
      stepName: 'Matrix Assembly',
      scholarlyRole: 'Maintains ethical fidelity by reporting refutations honestly and using them to formulate practical improvements.'
    },
    pedagogicalTakeaway: 'Reporting an empirical refutation with integrity earns highest marks for scientific rigor and diagnostic clarity.'
  },
  {
    id: 'g10-1-c11',
    stage: 3,
    projectTopic: 'Traditional Market Waste Sorting in Surakarta',
    researchQuestion: 'What structural incentives encourage market stallholders to separate organic produce waste from plastic wrappers?',
    initialHypothesis: 'Color-coded waste bins increase sorting compliance by 50%.',
    draftExcerpt: 'A student writes: "Color-coded bins did not work because market vendors threw everything in the blue bin anyway. People just don’t care about trash."',
    defectPresent: 'wishful_thinking',
    targetMatrixStep: 'step5_limitations_recommendations',
    options: [
      {
        id: 'opt-a',
        text: 'Synthesize into an actionable Step 5 conclusion: "While color-coded bins alone yielded only a 12% sorting rate due to rapid morning rush pacing, pairing visual icon labels with daily collection fee discounts raised compliance to 64%, indicating that behavioral nudges must be backed by tangible economic incentives."',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Correct! Identifies the causal limitation (rush hour pacing) and proposes a validated multi-factor solution (visual icons + economic incentives).'
      },
      {
        id: 'opt-b',
        text: 'Recommend that market vendors be fined 10 million rupiah per banana peel.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Disproportionate punitive fines destroy community livelihood and ignore root operational barriers.'
      },
      {
        id: 'opt-c',
        text: 'Conclude that market waste can never be solved and abandon research.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Incorrect. Defeatist cynicism is not academic scholarship.'
      }
    ],
    matrixAlignment: {
      stepName: 'Matrix Assembly',
      scholarlyRole: 'Transforms diagnostic frustration into an integrated, evidence-backed policy recommendation.'
    },
    pedagogicalTakeaway: 'Great conclusions dissect why simple interventions fail and propose sophisticated, empathetic system reforms.'
  }
];

// ============================================================================
// GAME 2: VALIDITY JUDGE (g10-2)
// ============================================================================

export type ValidityDimension = 'internal_validity' | 'external_validity';

export interface ValidityJudgeItem {
  id: string;
  stage: 1 | 2 | 3;
  caseTitle: string;
  studyDesign: string;
  studentConclusion: string;
  validityThreatIdentified: string;
  primaryDimensionAffected: ValidityDimension;
  verdict: 'upheld' | 'overturned_internal' | 'overturned_external';
  options: {
    id: string;
    verdictLabel: string;
    critique: string;
    isCorrectVerdict: boolean;
  }[];
  repairMethodology: string;
  pedagogicalTakeaway: string;
}

export const G10_2_CHALLENGES: ValidityJudgeItem[] = [
  // STAGE 1: IDENTIFYING INTERNAL VS. EXTERNAL VALIDITY THREATS (Items 1-4)
  {
    id: 'g10-2-c1',
    stage: 1,
    caseTitle: 'The Energy Drink Exam Study',
    studyDesign: 'A student gives an energy drink to 20 classmates at 7:30 AM before a biology test. There is no control group drinking water. The class average is 82%.',
    studentConclusion: '"Energy drinks scientifically boost biology test scores by 20%."',
    validityThreatIdentified: 'Lack of a control group and uncontrolled test difficulty (Confounds).',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'overturned_internal',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Fatal Internal Validity Flaw',
        critique: 'Without an isolated control group drinking water or a placebo, there is zero proof the energy drink caused the 82% score (the test might have simply been easy).',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Upheld: High External Validity',
        critique: 'The study applies to every student in Asia because everyone drinks beverages.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: Perfect Scientific Design',
        critique: '20 classmates is enough to prove universal medical truth.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Split the cohort into two randomized groups: one receiving the energy beverage and one receiving an identical-looking decaf placebo with pre- and post-testing.',
    pedagogicalTakeaway: 'Internal validity requires isolating the independent variable against a control group to prove causality.'
  },
  {
    id: 'g10-2-c2',
    stage: 1,
    caseTitle: 'The Air-Conditioned Virtual Lab Study',
    studyDesign: 'A student tests a biology VR simulation with 25 honors students in an air-conditioned private school computer lab. All 25 score 100% on the post-test under teacher supervision.',
    studentConclusion: '"This VR software is guaranteed to boost biology exam scores for every high school student across all 38 provinces of Indonesia."',
    validityThreatIdentified: 'Unrepresentative elite sample generalized to schools with varied device access and electrical grids.',
    primaryDimensionAffected: 'external_validity',
    verdict: 'overturned_external',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Fatal External Validity Flaw (Overreaching Scope)',
        critique: 'High internal success among 25 honors students in a high-tech lab cannot be generalized across diverse national schools with limited hardware, internet, and teacher training.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Overturned: Fatal Internal Validity Flaw',
        critique: '100% scores prove that the computer software had a virus.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: Universally Transferable',
        critique: 'All students across Indonesia have identical computers and electricity.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Bound the conclusion to well-resourced private labs, or replicate testing across urban public and rural community schools before generalizing.',
    pedagogicalTakeaway: 'External validity tests whether findings legitimately transfer to wider populations and diverse real-world settings.'
  },
  {
    id: 'g10-2-c3',
    stage: 1,
    caseTitle: 'The Biased Cafeteria Survey',
    studyDesign: 'A student surveying cafeteria food asks 100 students: "Given that our canteen food is notoriously overpriced and disgusting, do you agree we need a new vendor?" 94% answered Yes.',
    studentConclusion: '"Empirical data proves 94% of students despise the current canteen vendor."',
    validityThreatIdentified: 'Loaded, leading survey wording contaminating measurement accuracy.',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'overturned_internal',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Fatal Internal Validity Flaw (Measurement Bias)',
        critique: 'The heavily loaded, emotionally biased question forced participants toward agreement, invalidating the survey measurement tool itself.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Upheld: Strong Democratic Majority',
        critique: '94% is a massive number so question wording does not matter.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: External Generalisability',
        critique: 'This proves every canteen in the world serves bad food.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Replace loaded language with a neutral Likert scale question: "How satisfied are you with the value and quality of canteen food? (1 = Very Dissatisfied to 5 = Very Satisfied)".',
    pedagogicalTakeaway: 'Internal validity requires neutral, unbiased instruments so data reflects true participant perspectives rather than leading prompts.'
  },
  {
    id: 'g10-2-c4',
    stage: 1,
    caseTitle: 'The Triangulated Waste Separation Study',
    studyDesign: 'Researchers evaluated a neighborhood waste bank by combining: (1) weigh-scale logs from 300 households over 6 months, (2) monthly sales receipts to certified recyclers, and (3) semi-structured resident interviews.',
    studentConclusion: '"The waste bank initiative reduced household landfill disposal in RW 04 by 34% over 6 months, demonstrating viable localized waste reduction."',
    validityThreatIdentified: 'None; rigorous multi-method triangulation and clearly bounded scope.',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'upheld',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Upheld: High Internal Validity & Disciplined Scope',
        critique: 'Triangulating physical weigh-scale logs with commercial recycler receipts and resident interviews confirms high internal causal rigor, with scope strictly bounded to RW 04.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Overturned: Should Have Claimed Global World Peace',
        critique: 'The study is too modest and should have claimed to save the entire planet.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Overturned: Too Many Types of Data',
        critique: 'Combining scales and receipts confuses readers.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Maintain current methodology; consider longitudinal follow-up at 12 months.',
    pedagogicalTakeaway: 'Triangulating multiple objective data streams establishes high internal validity while honest boundary setting protects credibility.'
  },

  // STAGE 2: COMPLEX VALIDITY ADJUDICATION (Items 5-8)
  {
    id: 'g10-2-c5',
    stage: 2,
    caseTitle: 'The Volunteer Attrition Bias',
    studyDesign: 'An after-school math tutoring program started with 100 struggling students. 65 students dropped out due to frustration. The 35 students who remained until the end scored an average of 88% on the final test.',
    studentConclusion: '"Peer tutoring is 100% effective for all struggling mathematics students."',
    validityThreatIdentified: 'Survivor bias / participant attrition systematically filtering out struggling learners.',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'overturned_internal',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Fatal Internal Validity Flaw (Attrition Bias)',
        critique: 'The 65% dropout rate selected only the most resilient, motivated students, concealing the fact that the program failed the vast majority of struggling learners.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Upheld: High External Validity',
        critique: '35 students scoring 88% proves the curriculum is universally flawless.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: High Internal Validity',
        critique: 'Dropouts do not count in mathematical statistics.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Conduct intention-to-treat analysis and exit interviews with students who dropped out to understand why the tutoring program failed them.',
    pedagogicalTakeaway: 'Participant drop-out rates (attrition) create survivorship bias that invalidates causal claims if ignored.'
  },
  {
    id: 'g10-2-c6',
    stage: 2,
    caseTitle: 'The Bandung Bike Lane Transferability Claim',
    studyDesign: 'A study analyzed protected bike lanes in downtown Bandung, documenting a 45% increase in bicycle commuting along flat, tree-shaded heritage boulevards.',
    studentConclusion: '"Installing identical bike lanes on the steep, mountain roads of Puncak will produce the exact same 45% increase in daily bicycle commuters."',
    validityThreatIdentified: 'Ignoring geographical topography, climate, and elevation barriers (External Transferability).',
    primaryDimensionAffected: 'external_validity',
    verdict: 'overturned_external',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Fatal External Validity Flaw (Incompatible Context)',
        critique: 'Findings from flat, shaded urban boulevards cannot be transferred to steep mountain highways with heavy fog, commercial freight trucks, and severe topographic elevation changes.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Overturned: Internal Measurement Error',
        critique: 'Bicycles cannot be counted because they move too fast.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: Bicycles Are Bicycles Everywhere',
        critique: 'Physical geography has no impact on human transportation habits.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Clarify contextual transferability boundaries: bike lane adoption depends heavily on terrain gradient, weather, and commuter distances.',
    pedagogicalTakeaway: 'Contextual transferability requires evaluating whether target settings share similar geography, infrastructure, and climate.'
  },
  {
    id: 'g10-2-c7',
    stage: 2,
    caseTitle: 'The Hawthorne Effect in Waste Sorting',
    studyDesign: 'Student researchers stood wearing bright yellow vests and holding clipboards directly beside canteen trash bins for 5 days. Recorded waste sorting jumped from 20% to 92%.',
    studentConclusion: '"Students have internalized waste sorting values and will sort their trash permanently."',
    validityThreatIdentified: 'Observer effect (Hawthorne Effect) where subjects alter behavior temporarily while being actively watched.',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'overturned_internal',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Fatal Internal Validity Flaw (Hawthorne Observer Effect)',
        critique: 'Students sorted trash because researchers in high-visibility vests were watching them with clipboards; once observers depart, behavior is likely to revert.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Upheld: High External Validity',
        critique: 'Watching people with clipboards is the best way to run a city.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: Permanent Behavioral Conversion',
        critique: 'Five days of observation permanently changes human psychology forever.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Measure waste sorting unobtrusively after researchers leave (unannounced audits) to test if behavior persists without active surveillance.',
    pedagogicalTakeaway: 'The Hawthorne Effect occurs when participants change behavior simply because they know they are being monitored.'
  },
  {
    id: 'g10-2-c8',
    stage: 2,
    caseTitle: 'The Multilingual Reading App Evaluation',
    studyDesign: 'A randomized controlled trial across 16 diverse schools in Central Java compared 800 students using a mobile literacy app against 800 matched control students over a full school year, controlling for family income.',
    studentConclusion: '"The literacy app demonstrated a statistically significant 18% improvement in vocabulary acquisition among Javanese-Indonesian bilingual Grade 4 learners."',
    validityThreatIdentified: 'None; excellent experimental control, matched demographics, and honest cultural bounding.',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'upheld',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Upheld: High Internal & External Validity within Stated Scope',
        critique: 'Large randomized sample, matched socioeconomic controls, longitudinal duration, and precise demographic scope (Grade 4 bilingual learners) ensure high validity.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Overturned: Sample Size of 1,600 is Too Small',
        critique: 'Educational studies must test at least 500 million children.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Overturned: Apps Are Not Real Books',
        critique: 'Only paper printed in ink can teach reading.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Proceed to peer-reviewed publication and regional educational deployment.',
    pedagogicalTakeaway: 'Randomized controlled trials with demographic controls and realistic scope represent gold-standard educational validity.'
  },

  // STAGE 3: TRIANGULATION, PEER REVIEW & RESTORING VALIDITY (Items 9-11)
  {
    id: 'g10-2-c9',
    stage: 3,
    caseTitle: 'The Single-Source River Pollution Claim',
    studyDesign: 'A student tests water from one single spot behind a textile factory at 11:00 AM on a Sunday, finds high sulfur levels, and writes: "This factory poisons the entire 120km river basin every single day of the year."',
    studentConclusion: '"The entire river is 100% contaminated year-round based on my Sunday morning beaker test."',
    validityThreatIdentified: 'Severe sampling bias (single location, single timestamp, temporal confounding).',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'overturned_internal',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Methodological Triangulation Required',
        critique: 'A single water sample from one spot at one time cannot establish spatial or temporal causality for a 120km river basin; multi-point sampling and upstream controls are necessary.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Upheld: One Beaker is Completely Sufficient',
        critique: 'Chemicals never change location in moving water.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: External Generalisability to All Rivers',
        critique: 'This proves the Amazon and Nile rivers are also polluted.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Deploy spatial and temporal triangulation: sample upstream, discharge point, and downstream across rainy and dry seasons alongside municipal environmental agency sensor data.',
    pedagogicalTakeaway: 'Spatial and temporal triangulation prevents generalizing isolated measurements to entire ecological systems.'
  },
  {
    id: 'g10-2-c10',
    stage: 3,
    caseTitle: 'The Pre-Screened Focus Group Validation',
    studyDesign: 'A school uniform redesign committee invited 8 students who are all close friends of the student council president to evaluate new uniform fabrics. All 8 agreed the expensive blazer was stylish and comfortable.',
    studentConclusion: '"The entire student body of 1,200 students endorses purchasing the 500,000 rupiah blazer."',
    validityThreatIdentified: 'Extreme selection bias and social conformity in a peer network.',
    primaryDimensionAffected: 'external_validity',
    verdict: 'overturned_external',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Overturned: Selection Bias & Groupthink Invalidation',
        critique: 'A hand-picked circle of 8 affluent friends cannot represent the diverse financial capabilities and comfort preferences of 1,200 students.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Upheld: Friends Always Tell the Truth',
        critique: 'Close friends have better fashion judgment than the general public.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Upheld: 8 People is an Academic Consensus',
        critique: '8 students represents a statistically representative sample for high school policy.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Conduct a stratified random survey across all grade levels and socioeconomic brackets, combined with anonymous digital voting.',
    pedagogicalTakeaway: 'Homogeneous friendship networks create selection bias that fatally undermines external generalisability.'
  },
  {
    id: 'g10-2-c11',
    stage: 3,
    caseTitle: 'The Peer-Reviewed Mangrove Survival Model',
    studyDesign: 'Researchers submitted their mangrove planting survival data to an independent academic panel. Reviewers noted that rainfall was unusually heavy during the test year, which might have artificially inflated seedling survival.',
    studentConclusion: '"Initial survival reached 84% under favorable seasonal rainfall; continued monitoring during normal dry seasons is required to confirm baseline climate resilience."',
    validityThreatIdentified: 'Confounding weather factor identified during peer review and transparently integrated into a hedged conclusion.',
    primaryDimensionAffected: 'internal_validity',
    verdict: 'upheld',
    options: [
      {
        id: 'opt-a',
        verdictLabel: 'Upheld: Peer Review Integration & Scientific Humility',
        critique: 'The researchers acted on peer review feedback by transparently acknowledging the weather confounder and calibrating their conclusion with appropriate modality.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Overturned: Researchers Should Hide Unfavorable Weather',
        critique: 'Peer review comments should be ignored to make reports sound confident.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Overturned: Weather Never Impacts Plants',
        critique: 'Seedling biology is immune to rainfall variations.',
        isCorrectVerdict: false
      }
    ],
    repairMethodology: 'Maintain transparent longitudinal tracking across normal dry-season weather cycles.',
    pedagogicalTakeaway: 'Peer review identifies hidden confounders; integrating them with humility strengthens academic credibility.'
  }
];

// ============================================================================
// GAME 3: HYPOTHESIS FATE (g10-3)
// ============================================================================

export type HypothesisOutcome = 'supported' | 'refuted' | 'modified';

export interface HypothesisFateItem {
  id: string;
  stage: 1 | 2 | 3;
  inquiryDomain: string;
  researchQuestion: string;
  initialHypothesis: string;
  empiricalFindings: string;
  correctOutcome: HypothesisOutcome;
  options: {
    outcome: HypothesisOutcome;
    label: string;
    rationale: string;
  }[];
  explanation: string;
  reformulatedHypothesisOrAction: string;
  pedagogicalTakeaway: string;
}

export const HYPOTHESIS_OUTCOME_OPTIONS = [
  {
    outcome: 'supported' as HypothesisOutcome,
    label: 'Supported (Confirmed)',
    rationale: 'Empirical findings align directly with the predicted relationship between variables.'
  },
  {
    outcome: 'refuted' as HypothesisOutcome,
    label: 'Refuted (Disproven)',
    rationale: 'Empirical data contradicts the initial prediction or reveals the opposite causal effect.'
  },
  {
    outcome: 'modified' as HypothesisOutcome,
    label: 'Modified (Qualified / Conditional)',
    rationale: 'Data shows the relationship holds only under specific conditions or for certain subgroups.'
  }
];

export const G10_3_CHALLENGES: HypothesisFateItem[] = [
  // STAGE 1: DIRECT OUTCOME ADJUDICATION (Items 1-4)
  {
    id: 'g10-3-c1',
    stage: 1,
    inquiryDomain: 'School Library Environmental Acoustics',
    researchQuestion: 'How does acoustic wall carpeting impact average student study session duration?',
    initialHypothesis: 'Installing acoustic wall carpets will increase average quiet study session length by at least 20 minutes.',
    empiricalFindings: 'Digital library check-in logs over 8 weeks showed average study sessions increased from 32 minutes to 56 minutes (a 24-minute increase, p < 0.01).',
    correctOutcome: 'supported',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The empirical data directly confirms the prediction: average quiet study duration increased by 24 minutes, exceeding the predicted 20-minute threshold with statistical significance.',
    reformulatedHypothesisOrAction: 'Hypothesis is accepted; recommend acoustic carpeting expansion to secondary study halls.',
    pedagogicalTakeaway: 'When empirical data meets or exceeds predicted metrics, the hypothesis is formally supported.'
  },
  {
    id: 'g10-3-c2',
    stage: 1,
    inquiryDomain: 'Lunchtime Smartphone Bans & Social Interaction',
    researchQuestion: 'Does banning smartphones during lunch breaks increase peer face-to-face conversations?',
    initialHypothesis: 'Banning smartphones during lunch breaks will increase face-to-face peer conversations among Grade 10 students.',
    empiricalFindings: 'Four weeks of cafeteria observation revealed that face-to-face conversation counts did not increase; students brought personal laptops or silently read manga alone.',
    correctOutcome: 'refuted',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The empirical evidence directly contradicts the prediction: removing smartphones did not stimulate conversation; students simply shifted to alternative solo media.',
    reformulatedHypothesisOrAction: 'Report refutation honestly: removing screens alone does not automatically create social bonding without interactive group activities.',
    pedagogicalTakeaway: 'A refuted hypothesis is not a failure; it reveals that screen bans alone do not automatically build social connection.'
  },
  {
    id: 'g10-3-c3',
    stage: 1,
    inquiryDomain: 'Interactive Digital Quizzes & Exam Mastery',
    researchQuestion: 'To what extent do gamified daily quizzes improve history exam scores?',
    initialHypothesis: 'Using gamified daily quiz apps will raise history exam scores for all students by 15%.',
    empiricalFindings: 'Exam data showed high-achieving students gained only 2%, while struggling students improved by 22% when using the quiz app; overall cohort gain was 12%.',
    correctOutcome: 'modified',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The hypothesis is modified because the intervention was not universally 15% across all students; it had a targeted, differential effect benefiting struggling students disproportionately.',
    reformulatedHypothesisOrAction: 'Modified Hypothesis: Gamified daily quizzes primarily benefit students with baseline comprehension gaps rather than advanced learners.',
    pedagogicalTakeaway: 'When an intervention works powerfully for one subgroup but not universally, modify the hypothesis with boundary conditions.'
  },
  {
    id: 'g10-3-c4',
    stage: 1,
    inquiryDomain: 'Rooftop Solar Panels & School Energy Costs',
    researchQuestion: 'Can rooftop solar panels reduce school grid electricity bills by 50%?',
    initialHypothesis: 'Rooftop solar panels will cut school grid electricity expenses by at least 50%.',
    empiricalFindings: 'Municipal utility meter billing over 6 months showed an average monthly cost reduction of only 11% due to heavy tropical cloud cover and tree canopy shade.',
    correctOutcome: 'refuted',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The data strongly contradicts the 50% savings prediction: the measured drop was only 11%, demonstrating that cloud cover and site shading were major barriers.',
    reformulatedHypothesisOrAction: 'Report refutation with integrity: solar installation requires tree pruning and battery storage to achieve anticipated economic viability.',
    pedagogicalTakeaway: 'Disproving unrealistic expectations protects institutions from wasting financial resources.'
  },

  // STAGE 2: CONDITIONAL FINDINGS & HYPOTHESIS REFORMULATION (Items 5-8)
  {
    id: 'g10-3-c5',
    stage: 2,
    inquiryDomain: 'Morning Exercise and Afternoon Cognitive Fatigue',
    researchQuestion: 'Does a 15-minute morning aerobic workout eliminate afternoon student sluggishness?',
    initialHypothesis: 'Morning aerobic exercise will eliminate afternoon student sluggishness for all secondary students.',
    empiricalFindings: 'Students who slept at least 7 hours reported 40% higher afternoon alertness after morning workouts; however, sleep-deprived students (< 5 hours) felt more exhausted.',
    correctOutcome: 'modified',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The hypothesis predicted universal benefit, but findings revealed a critical conditional variable: adequate baseline sleep. Without sleep, morning exercise increased fatigue.',
    reformulatedHypothesisOrAction: 'Modified Hypothesis: Morning aerobic exercise enhances afternoon alertness only when paired with adequate baseline sleep (> 7 hours).',
    pedagogicalTakeaway: 'Conditional results require adding qualifiers to specify the necessary environmental and behavioral preconditions.'
  },
  {
    id: 'g10-3-c6',
    stage: 2,
    inquiryDomain: 'Biodegradable Cassava Bags in Wet Markets',
    researchQuestion: 'Will traditional wet market vendors voluntarily adopt biodegradable cassava bags if offered at identical prices to plastic?',
    initialHypothesis: 'Wet market vegetable and fish vendors will voluntarily adopt cassava bags if price parity is achieved.',
    empiricalFindings: 'Vegetable and dry goods vendors adopted cassava bags at a 92% rate. However, fish and meat vendors abandoned them within 2 days because the starch dissolved when wet.',
    correctOutcome: 'modified',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The hypothesis held true for dry produce, but failed for wet animal proteins due to material moisture breakdown. The hypothesis must be qualified by commodity category.',
    reformulatedHypothesisOrAction: 'Modified Hypothesis: Price-matched cassava bags are viable for dry produce, but moisture-resistant waterproof coatings are necessary for wet fish and poultry.',
    pedagogicalTakeaway: 'Modifying hypotheses based on material constraints guides practical engineering iterations.'
  },
  {
    id: 'g10-3-c7',
    stage: 2,
    inquiryDomain: 'Gamified Homework Deadlines and Assignment Quality',
    researchQuestion: 'Does rewarding digital badge streaks improve the depth and rigor of student research essays?',
    initialHypothesis: 'Digital badge streaks will increase the analytical depth and quality of student research essays.',
    empiricalFindings: 'Submissions arrived earlier to keep the streak alive, but rubric analysis showed essays were 30% shorter, superficial, and filled with copied bullet points.',
    correctOutcome: 'refuted',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The empirical evidence disproved the prediction: gamification accelerated submission speed but directly degraded analytical depth and quality.',
    reformulatedHypothesisOrAction: 'Report refutation: streak incentives encourage superficial speed-gaming rather than reflective scholarly inquiry.',
    pedagogicalTakeaway: 'When an intervention produces perverse unintended incentives, report the refutation to prevent harmful policy adoption.'
  },
  {
    id: 'g10-3-c8',
    stage: 2,
    inquiryDomain: 'Urban Biopore Drainage and Alley Flooding',
    researchQuestion: 'Do 30 biopore absorption holes per alley prevent localized puddling during monsoon downpours?',
    initialHypothesis: 'Drilling 30 biopores per residential alley will prevent localized standing water during seasonal downpours.',
    empiricalFindings: 'In alleys with sandy soil, puddles cleared within 15 minutes. In alleys with dense clay soil, standing water remained for over 3 hours despite identical biopores.',
    correctOutcome: 'modified',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The biopore intervention was successful in sandy soil, but failed in dense clay. The hypothesis must be modified to include soil permeability as a determining variable.',
    reformulatedHypothesisOrAction: 'Modified Hypothesis: Biopores accelerate drainage in permeable sandy soil, but require gravel sub-bases in low-permeability clay strata.',
    pedagogicalTakeaway: 'Soil and geological diversity require modifying universal infrastructure hypotheses with local environmental qualifiers.'
  },

  // STAGE 3: SCIENTIFIC INTEGRITY & ETHICAL ADJUDICATION (Items 9-11)
  {
    id: 'g10-3-c9',
    stage: 3,
    inquiryDomain: 'Commercial Brand Anti-Acne Cream Clinical Trial',
    researchQuestion: 'Does Tea Tree Gel reduce adolescent acne inflammation by 50% in 14 days?',
    initialHypothesis: 'Applying Tea Tree Gel twice daily reduces inflamed acne lesions by at least 50% in 14 days.',
    empiricalFindings: 'Dermatological lesion counts across 60 participants revealed only a 6% reduction, which was statistically indistinguishable from the plain water control group.',
    correctOutcome: 'refuted',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The clinical trial disproved the efficacy claim: a 6% change matching plain water proves the product had no measurable therapeutic effect beyond baseline healing.',
    reformulatedHypothesisOrAction: 'Ethical duty: Report the refuted hypothesis honestly; do not distort numbers to please commercial cosmetic sponsors.',
    pedagogicalTakeaway: 'Scientific integrity demands reporting medical non-efficacy to protect consumers from ineffective treatments.'
  },
  {
    id: 'g10-3-c10',
    stage: 3,
    inquiryDomain: 'Student Team Project Leadership Style',
    researchQuestion: 'Does an authoritarian student leader produce higher-quality Cambridge project portfolios than a democratic leader?',
    initialHypothesis: 'Authoritarian task assignment produces higher-scoring group project portfolios.',
    empiricalFindings: 'Groups with authoritarian leaders completed tasks 2 days earlier, but suffered severe internal conflict, member alienation, and received lower evaluation marks for collaboration.',
    correctOutcome: 'refuted',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'The hypothesis is refuted: speed was gained at the cost of team collaboration marks and portfolio depth, disproving that authoritarian control improves overall portfolio quality.',
    reformulatedHypothesisOrAction: 'Report refutation: collaborative democratic leadership fosters deeper multi-lens critical engagement required by Cambridge examiners.',
    pedagogicalTakeaway: 'Short-term speed does not equal deep analytical excellence. Refutations highlight structural trade-offs.'
  },
  {
    id: 'g10-3-c11',
    stage: 3,
    inquiryDomain: 'Community Gotong Royong Mobilization via WhatsApp',
    researchQuestion: 'Does sending reminder broadcast messages on WhatsApp increase neighborhood Sunday cleanup attendance?',
    initialHypothesis: 'Sending WhatsApp broadcast reminders will increase Sunday Gotong Royong community attendance by 40%.',
    empiricalFindings: 'Broadcast messages alone produced zero attendance increase among youth and elders. However, when the RT head sent personalized voice notes and youth leaders visited in person, attendance surged by 55%.',
    correctOutcome: 'modified',
    options: HYPOTHESIS_OUTCOME_OPTIONS,
    explanation: 'Passive broadcast messaging failed, but personalized multi-channel outreach succeeded. The hypothesis must be modified from mass digital broadcasts to relational community outreach.',
    reformulatedHypothesisOrAction: 'Modified Hypothesis: Digital reminders increase civic participation only when combined with relational personal invitations honoring cultural communal norms.',
    pedagogicalTakeaway: 'Modifying hypotheses bridges modern digital communication with enduring cultural community practices.'
  }
];
