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
        id: 'opt-b',
        text: 'Dismiss the GPS telemetry because student travel times fluctuate slightly during sudden morning monsoon rainstorms.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Methodological mistake: weather variations do not invalidate statistically consistent multi-week travel trends.'
      },
      {
        id: 'opt-a',
        text: 'Synthesize primary student GPS logs with city transit telemetry to establish a verified 21% to 24% speed increase.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Exemplary Step 2 synthesis: combines primary student field logs with official municipal telemetry data.'
      },
      {
        id: 'opt-c',
        text: 'Claim bus lanes eliminate all urban congestion across Jakarta without comparing secondary transit authority figures.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Unverified over-generalization: fails to synthesize cross-referenced evidence before reaching a conclusion.'
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
        id: 'opt-b',
        text: 'Assume indoor HEPA filter test gains apply equally to all open-air rural classrooms without testing natural airflow.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'External validity failure: ignores essential environmental differences between sealed and open learning spaces.'
      },
      {
        id: 'opt-a',
        text: 'Reject the 14% reading score increase completely because classroom filters require regular filter cartridge changes.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Hypercritical error: operational maintenance costs do not disprove internal reading comprehension score gains.'
      },
      {
        id: 'opt-c',
        text: 'Evaluate study boundaries: filter gains in sealed rooms cannot be transferred directly to open-air rural classrooms.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Exemplary Step 3 evaluation: transparently assesses external validity and transferability boundaries.'
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
        text: 'Deliver a nuanced answer: banana leaves cut plastic waste while cooperative leaf washing preserves vendor net profits.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Exemplary Step 4 nuanced answer: directly addresses the research inquiry while accounting for institutional support.'
      },
      {
        id: 'opt-b',
        text: 'Conclude banana leaves fail completely because canteen vendors spend ten additional minutes rinsing leaves each morning.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'One-sided dismissal: treats minor preparation time as total project failure while ignoring massive waste reduction.'
      },
      {
        id: 'opt-c',
        text: 'Claim banana leaves solve all canteen waste problems immediately without considering school cooperative labor costs.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Oversimplification: ignores that vendor economic stability depends directly on shared cooperative washing labor.'
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
        id: 'opt-b',
        text: 'Recommend making composting mandatory under criminal penalties without supplying drill kits or neighborhood support.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Unrealistic recommendation: punitive mandates without infrastructure or technical support alienate residents.'
      },
      {
        id: 'opt-a',
        text: 'Propose practical equipment subsidies for RT heads alongside longitudinal research into rainy season compost odor control.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Exemplary Step 5 recommendations: connects policy subsidies with future research into seasonal moisture hurdles.'
      },
      {
        id: 'opt-c',
        text: 'Limit all project conclusions to the dry season data and abandon further research into household participation barriers.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Academic evasion: ignoring rainy season challenges leaves critical practical research questions unanswered.'
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
        id: 'opt-b',
        text: 'Accept the surprise mouse study because prestigious university research automatically validates high school conclusions.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Methodological fallacy: outside sources cannot be introduced into a conclusion without prior evaluation.'
      },
      {
        id: 'opt-a',
        text: 'Conclude that smartphone screens have zero impact on student sleep duration because laboratory mice differ from humans.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'False dilemma: animal research differences do not invalidate primary survey data on adolescent sleep duration.'
      },
      {
        id: 'opt-c',
        text: 'Diagnose a sudden miracle fact: remove the unexamined mouse study because conclusions must evaluate previously analyzed data.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Accurate defect diagnosis: conclusions must synthesize existing analysis rather than introducing surprise data.'
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
        text: 'Diagnose mechanical copy-paste: replace the passive chapter listing with an analytical synthesis explaining root retention.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Accurate defect diagnosis: replaces passive chapter-by-chapter summaries with active evidentiary synthesis.'
      },
      {
        id: 'opt-b',
        text: 'Praise the chapter summary because repeating chapter opening lines proves that the student read every project section.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Pedagogical misconception: listing chapter topics does not evaluate empirical findings or answer the research question.'
      },
      {
        id: 'opt-c',
        text: 'Delete all coastal erosion data and recommend building concrete seawalls without evaluating mangrove ecological value.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Drastic abandonment: ignores empirical root retention data rather than repairing the analytical conclusion structure.'
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
        id: 'opt-b',
        text: 'Accept the regional prediction because positive local farm outcomes prove that solar pumps work identical across Asia.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Uncritical acceptance: small village trials cannot establish regional agricultural outcomes across diverse topographies.'
      },
      {
        id: 'opt-a',
        text: 'Diagnose an overreaching leap: restrict the claim to the surveyed Sumba village rather than regional poverty eradication.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Accurate defect diagnosis: aligns claim scope with actual sample size and geographical study parameters.'
      },
      {
        id: 'opt-c',
        text: 'Reject the 28% harvest gain completely because twelve smallholder farmers represent an invalid agricultural case study.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Hyper-skepticism: localized pilot findings remain valid for that village even if they cannot be broadly extrapolated.'
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
        id: 'opt-b',
        text: 'Accept the emotional appeal because inspiring love for nature is more important than empirical plastic waste audit data.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Sentimental fallacy: academic conclusions require empirical policy analysis rather than emotional exhortations.'
      },
      {
        id: 'opt-a',
        text: 'Conclude that paper straw initiatives failed totally and abandon all commercial waste reduction policies in retail cafes.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Premature defeatism: ignores that redesigning plastic lids could resolve the remaining volume problem.'
      },
      {
        id: 'opt-c',
        text: 'Diagnose wishful thinking: replace sentimental emotional appeals with objective data on customer disposal and lid redesign.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Accurate defect diagnosis: grounds recommendations in customer behavior patterns and packaging design data.'
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
        text: 'Assemble an evidence matrix: peer tutoring reduced reported anxiety by 18%, though algebra problem scores stayed level.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Nuanced synthesis: differentiates emotional anxiety reductions from cognitive standardized test score outcomes.'
      },
      {
        id: 'opt-b',
        text: 'Claim peer tutoring eliminates all learning difficulties because student survey ratings showed high emotional satisfaction.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Overclaiming: conflates enjoyable social interaction with mastery of difficult academic concepts.'
      },
      {
        id: 'opt-c',
        text: 'Conclude peer tutoring is useless because student friendships distract adolescents from formal teacher classroom lectures.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Unsubstantiated dismissal: ignores documented psychological benefits in lowering math-related test anxiety.'
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
        id: 'opt-b',
        text: 'Conceal the empty tank data to preserve the original hypothesis and ensure the final student project earns high marks.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Scientific fraud: falsifying empirical evidence to protect a hypothesis violates core academic ethics.'
      },
      {
        id: 'opt-a',
        text: 'Maintain scientific honesty: report that August tank depletion refuted the hypothesis, and recommend supplementary storage.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Exemplary scientific integrity: transparently reports hypothesis refutation and recommends expanded tank capacity.'
      },
      {
        id: 'opt-c',
        text: 'Abandon the rainwater project entirely because August shortages prove school rooftop catchment is completely unworkable.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Defeatist overreaction: meeting water needs through July demonstrates partial viability requiring expanded storage.'
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
        text: 'Propose systemic solutions: pair color-coded bins with daily organic collection schedules and stallholder fee discounts.',
        isCorrectDiagnosisOrRepair: true,
        analysisNote: 'Mature recommendations: pairs physical infrastructure with operational schedules and economic incentives.'
      },
      {
        id: 'opt-b',
        text: 'Conclude market stallholders cannot learn waste sorting habits and terminate municipal composting collection in Surakarta.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Defeatist stereotyping: blames vendor culture rather than analyzing bin placement or collection logistics.'
      },
      {
        id: 'opt-c',
        text: 'Blame stallholder attitudes for sorting failures without investigating whether bin placement or collection timing caused mixing.',
        isCorrectDiagnosisOrRepair: false,
        analysisNote: 'Superficial attribution: attributes sorting failure to personal carelessness without examining system constraints.'
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
        id: 'opt-b',
        verdictLabel: 'Sound and fully justified conclusion based on rigorous methodology',
        critique: 'The researcher surveyed a broad representative cross-section of the entire city',
        isCorrectVerdict: false
      },
      {
        id: 'opt-a',
        verdictLabel: 'Fatal Overgeneralization: Sample size of 15 cannot represent 3 million residents',
        critique: 'Fifteen high school friends in one suburban cafe cannot support sweeping claims about citywide transit preferences.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-c',
        verdictLabel: 'Valid deductive logic applying universal psychological principles',
        critique: 'Individual adolescent commute preferences reliably predict adult passenger behavior across provinces.',
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
        id: 'opt-b',
        verdictLabel: 'Empirically proven causal relationship between sports and school performance',
        critique: 'Higher blood circulation from exercise directly increases cognitive test performance in all subjects, completely disregarding methodological validity, representative sampling standards, multi-scalar trade-offs, and empirical rigor.',
        isCorrectVerdict: false
      },
{
        id: 'opt-a',
        verdictLabel: 'Sound inductive generalization backed by quantitative survey metrics',
        critique: 'Statistical correlation between two variables proves that increasing one directly elevates the other.',
        isCorrectVerdict: false
      },
{
        id: 'opt-c',
        verdictLabel: 'Correlation Confused with Causation: Confounding variables ignored',
        critique: 'Students who play varsity sports may have higher discipline, family support, or tutors; correlation is not causation.',
        isCorrectVerdict: true
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
        verdictLabel: 'Un-actionable Vague Moralizing: Lacks agency, timeline, mechanism, and budget',
        critique: 'Saying "people should care more" provides zero policy guidance, assigns no institutional responsibility, and costs nothing',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Pragmatic and actionable policy recommendation for municipal sanitation',
        critique: 'Public awareness campaigns asking citizens to care about nature solve urban littering challenges.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Legally enforceable municipal decree ready for parliamentary adoption',
        critique: 'Moral encouragement represents the most cost-effective regulatory tool for provincial governments.',
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
        id: 'opt-b',
        verdictLabel: 'Rigorous scientific methodology that correctly isolates positive outcomes',
        critique: 'Eliminating contradictory outlier data ensures that research graphs look clean and conclusive',
        isCorrectVerdict: false
      },
      {
        id: 'opt-a',
        verdictLabel: 'Academic Dishonesty & Confirmation Bias: Discarding contradicting data',
        critique: 'Concealing 40% of survey responses because they disproved the student’s hypothesis is scientific fraud.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-c',
        verdictLabel: 'Valid qualitative data trimming to maintain clear narrative synthesis',
        critique: 'Researchers have the academic right to remove survey entries that contradict their personal values.',
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
        id: 'opt-b',
        verdictLabel: 'Balanced multi-perspective synthesis evaluating diverse community viewpoints',
        critique: 'Interviewing three fellow factory workers guarantees complete representation of environmental concerns.',
        isCorrectVerdict: false
      },
{
        id: 'opt-a',
        verdictLabel: 'Objective economic assessment that properly prioritizes industrial growth',
        critique: 'Commercial factory job creation always outweighs localized environmental and river fishing concerns.',
        isCorrectVerdict: false
      },
{
        id: 'opt-c',
        verdictLabel: 'Severe Single-Lens Bias: Ignores public health, water quality, and fisheries',
        critique: 'Evaluating an industrial chemical plant solely through factory jobs while ignoring toxic river runoff is dangerously incomplete.',
        isCorrectVerdict: true
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
        verdictLabel: 'Parochial Scope Failure: Fails to connect local findings to broader scales',
        critique: 'A Cambridge capstone requires analyzing how local village issues reflect national policies and global dynamics',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Exemplary localized study that properly ignores external national noise',
        critique: 'Global Perspectives research should focus exclusively on isolated neighborhoods without national context.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Comprehensive multi-scalar research satisfying all examination standards',
        critique: 'Studying village rice fields automatically fulfills all global trade and climate treaty analysis criteria.',
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
        id: 'opt-b',
        verdictLabel: 'Technological Determinism: Digital software tools automatically guarantee learning',
        critique: 'Providing computer tablets without teacher training or digital curriculum results in games, not learning',
        isCorrectVerdict: false
      },
      {
        id: 'opt-a',
        verdictLabel: 'Premature Victory Declaration: Assumes hardware provision equals educational success',
        critique: 'Delivering tablets without training, electricity, or digital literacy support will not improve literacy outcomes.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-c',
        verdictLabel: 'Flawless educational policy recommendation ready for immediate budget funding',
        critique: 'Purchasing hardware devices represents the sole necessary step to eliminate rural educational inequality.',
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
        id: 'opt-b',
        verdictLabel: 'Transparent research limitation acknowledging sample demographic constraints',
        critique: 'Surveying only students who own luxury cars provides representative data for overall youth mobility.',
        isCorrectVerdict: false
      },
{
        id: 'opt-a',
        verdictLabel: 'Sound sociological inquiry using stratified probabilistic sampling methods',
        critique: 'Adolescent students from wealthy backgrounds exhibit transportation habits identical to factory workers.',
        isCorrectVerdict: false
      },
{
        id: 'opt-c',
        verdictLabel: 'Catastrophic Selection Bias: Generalizing elite youth habits to entire population',
        critique: 'Surveying wealthy private academy students cannot inform municipal public bus routes for low-income workers.',
        isCorrectVerdict: true
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
        verdictLabel: 'Disregard for Human Rights: Proposing authoritarian coercion for public health',
        critique: 'Forcing citizens into mandatory medical detention violates basic civil liberties and destroys community trust',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Pragmatic and legally sound public health policy for pandemic containment',
        critique: 'Authoritarian police surveillance represents the most effective strategy for municipal health emergencies.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Balanced bridge solution reconciling civil liberties with epidemiological safety',
        critique: 'Mandatory military detention camps protect individual constitutional freedoms while enforcing quarantine.',
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
        id: 'opt-b',
        verdictLabel: 'Objective scientific skepticism that appropriately challenges established data',
        critique: 'Questioning international climate consensus based on three personal hot days shows critical thinking.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-a',
        verdictLabel: 'Anecdotal Fallacy: Contrasting personal weather experience against climate models',
        critique: 'One student’s personal sensation of hot or cold days does not refute thirty years of peer-reviewed climate data.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-c',
        verdictLabel: 'Valid inductive reasoning deriving universal meteorology laws from daily life',
        critique: 'Personal thermal perception provides empirical evidence superior to computerized weather satellite models.',
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
        verdictLabel: 'Flawless Capstone Conclusion: Synthesizes evidence, hedges claims, and notes limitations',
        critique: 'Balances findings across scales, identifies methodological boundaries, and proposes actionable, funded solutions.',
        isCorrectVerdict: true
      },
      {
        id: 'opt-b',
        verdictLabel: 'Overly cautious conclusion that lacks decisive confidence and clear direction',
        critique: 'Acknowledging study limitations and proposing hedged solutions weakens the persuasive authority of an essay.',
        isCorrectVerdict: false
      },
      {
        id: 'opt-c',
        verdictLabel: 'Unscientific compromise that should take an absolute stand on one side of debate',
        critique: 'Academic researchers must declare an absolute winner between economic growth and environmental conservation.',
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
