import fs from 'fs';
import path from 'path';
import { UNIT_2_RESEARCH_CASES } from '../src/data/games/unit2Game';

// Descriptions map for Case 1
const c1Descriptions: Record<string, Record<string, string>> = {
  '1': {
    's1-opt-b': 'Extract white blood cells from student volunteers to conduct genetic transcription assays of insulin receptor kinases under electron microscopes in a university hospital research lab.',
    's1-opt-a': 'Design an empirical school investigation to measure post-lunch fatigue patterns and evaluate targeted dietary and scheduling interventions across the student body.',
    's1-opt-c': 'Post an informal Instagram poll asking students whether they feel drowsy after eating fried food, treating casual online responses as definitive proof of dietary causation.'
  },
  '2': {
    's2-opt-b': 'Why is unhealthy, greasy cafeteria food destroying our student body alertness and causing widespread classroom exhaustion during important afternoon study periods?',
    's2-opt-c': 'How many plates of fried rice, vegetable fritters, and sweetened bottled teas did the school cafeteria vendor sell during typical weekday afternoon lunch hours?',
    's2-opt-a': 'To what extent does the macronutrient composition of school lunches correlate with measured afternoon cognitive alertness among Grade 10 students at SMA Harapan Bangsa?'
  },
  '3': {
    's3-opt-a': 'Existing studies test adult diets in clinical labs, leaving an empirical gap regarding how adolescent nutrition interacts with tropical school schedules and sleep.',
    's3-opt-b': 'Replicate an existing university workplace study on corporate executives, ignoring secondary school developmental physiology and unique canteen eating environments.',
    's3-opt-c': 'Dismiss peer-reviewed academic literature completely as theoretical ivory-tower speculation and rely purely on student council intuition to design interventions.'
  },
  '4': {
    's4-opt-b': 'Objective: Inspire students to adopt healthier lifestyle habits. Hypothesis: Nutritious meals will magically elevate school spirit and student energy levels everywhere.',
    's4-opt-a': 'Objective: Measure post-lunch reaction times across carbohydrate-heavy and balanced diets. Hypothesis: High-glycemic meals significantly increase afternoon sleepiness.',
    's4-opt-c': 'Objective: Prove the cafeteria vendor guilty of student exhaustion. Hypothesis: The food stalls are solely responsible for all observed afternoon classroom drowsiness.'
  },
  '5': {
    's5-opt-b': 'Survey a convenience sample of 12 close debate teammates during lunchtime, extrapolating their self-reported alertness to represent the entire 1,200-student school body.',
    's5-opt-c': 'Conduct unstructured 10-minute chats with 3 sleepy students in the hallway, omitting standardized cognitive measurements, dietary logs, or baseline alertness controls.',
    's5-opt-a': 'Deploy stratified random sampling across 120 students to compare standardized reaction times and alertness logs between high-glycemic and balanced dietary groups.'
  },
  '6': {
    's6-opt-a': 'Report objective cognitive speed metrics and dietary logs clearly, discussing how nutrition, nocturnal screen habits, and classroom ventilation interact.',
    's6-opt-b': 'Selectively highlight cafeteria fried food correlations while concealing nocturnal phone usage data to produce a dramatic headline blaming the school vendor.',
    's6-opt-c': 'Discard all quantitative reaction-time logs and statistical averages, claiming that numbers are emotionally detached and only subjective stories matter.'
  },
  '7': {
    's7-opt-b': 'Attack the peer-reviewers as biased critics who misunderstand high school realities, refusing to acknowledge potential exam-week anxiety confounds.',
    's7-opt-a': 'Acknowledge the exam-week confound transparently, implementing an unannounced post-exam control phase with continuous sleep telemetry tracking.',
    's7-opt-c': 'Abandon the investigation completely upon discovering the confound, concluding that empirical educational research is impossible in school settings.'
  }
};

// Descriptions map for Case 2
const c2Descriptions: Record<string, Record<string, string>> = {
  '1': {
    'c2-s1-opt-b': 'Investigate cosmic gamma-ray radiation patterns on planetary ring systems using mathematical simulations in deep-space astrophysics.',
    'c2-s1-opt-c': 'Organize student protest boycotts outside local packaging plants without gathering chemical water assays or biological tissue samples.',
    'c2-s1-opt-a': 'Conduct an empirical investigation measuring estuarine microplastic contamination gradients and evaluating biological impacts on local fisheries.'
  },
  '2': {
    'c2-s2-opt-a': 'To what extent do microplastic concentrations in estuarine sediment and benthic crabs correlate with distance from the industrial outflow zone?',
    'c2-s2-opt-b': 'Why do heartless corporate manufacturing factories dump harmful synthetic waste into vulnerable community rivers and poison nature?',
    'c2-s2-opt-c': 'What is the official river length in kilometers and total annual water volume discharge of the Kali Brantas tributary into the estuary?'
  },
  '3': {
    'c2-s3-opt-b': 'Compile secondary news clippings discussing beach plastic litter, ignoring peer-reviewed ecological data and chemical sediment methodologies.',
    'c2-s3-opt-a': 'Address the critical gap in benthic mangrove sediment bioaccumulation in tropical estuaries, bridging marine data with artisanal fishery health.',
    'c2-s3-opt-c': 'Assume that no scientific researcher in history has studied microplastics, designing the entire field inquiry from casual imagination.'
  },
  '4': {
    'c2-s4-opt-b': 'Objective: Eradicate plastic waste from all Indonesian rivers. Hypothesis: Cleaning the river will permanently restore ancestral harmony.',
    'c2-s4-opt-c': 'Objective: Consult spiritual custodians about river spirits. Hypothesis: Unseen ecological guardians will reveal hidden water contaminants.',
    'c2-s4-opt-a': 'Objective: Quantify microplastic particles along a 10km river transect. Hypothesis: Particle counts decline inversely with distance from outflow.'
  },
  '5': {
    'c2-s5-opt-a': 'Deploy 5 geo-referenced transect sampling stations using stainless-steel sieves, procedural contamination blanks, and fisher catch audits.',
    'c2-s5-opt-b': 'Collect single surface water samples with a cracked colored plastic bucket at one tourist dock, risking severe polymer cross-contamination.',
    'c2-s5-opt-c': 'Survey 30 tourists at a coastal hotel 20 kilometers away regarding their opinions on ocean cleanliness instead of conducting physical sampling.'
  },
  '6': {
    'c2-s6-opt-b': 'Conceal synthetic textile fiber findings to maintain a simple single-villain corporate narrative, blaming the industrial plant for all waste.',
    'c2-s6-opt-a': 'Report particle counts and polymer signatures objectively, identifying both industrial plastic pellets and municipal laundry textile fibers.',
    'c2-s6-opt-c': 'Declare all estuarine crabs lethal biohazards without measuring clinical toxicity thresholds, triggering panic across local fishing villages.'
  },
  '7': {
    'c2-s7-opt-a': 'Synchronize water sampling across standardized tidal stages and add benthic core sampling to control for daily hydraulic flush variability.',
    'c2-s7-opt-b': 'Deny the physical existence of tidal cycles in tropical estuaries, claiming oceanographic ebb and flow does not affect river mouth salinity.',
    'c2-s7-opt-c': 'Abandon the entire environmental research project upon facing reviewer questions regarding tidal flow, terminating community partnerships.'
  }
};

// Apply updates
UNIT_2_RESEARCH_CASES.forEach((rc, ci) => {
  const descMap = ci === 0 ? c1Descriptions : c2Descriptions;
  rc.stages.forEach(st => {
    const stageMap = descMap[st.stageNumber.toString()];
    if (stageMap) {
      st.options.forEach(opt => {
        if (stageMap[opt.id]) {
          opt.description = stageMap[opt.id];
        }
      });
    }
  });
});

// Format back to source file
const u2FilePath = path.resolve('src/data/games/unit2Game.ts');
const header = `/**
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

export const UNIT_2_RESEARCH_CASES: ResearchCase[] = ${JSON.stringify(UNIT_2_RESEARCH_CASES, null, 2)};
`;

fs.writeFileSync(u2FilePath, header, 'utf-8');
console.log('Unit 2 Game successfully remediated with balanced lengths.');
