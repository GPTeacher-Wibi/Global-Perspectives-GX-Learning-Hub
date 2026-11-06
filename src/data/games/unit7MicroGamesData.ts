/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 7 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 91–103)
 * Language Level: CEFR B1 English (Clear, direct, controlled academic vocabulary)
 *
 * Micro-Games included:
 * - g7-1: Logic Master: D-I-A (Deductive certainty, Inductive probability, Abductive best explanation)
 * - g7-2: Toulmin Architecture Builder (Claim, Grounds/Evidence, Warrant, Backing, Qualifier, Rebuttal)
 * - g7-3: Fallacy Patrol (Ad Hominem, Straw Man, Hasty Generalization, Post Hoc / False Cause, False Dilemma)
 */

export interface MisconceptionAlert {
  label: string;
  explanation: string;
}

// ============================================================================
// g7-1: LOGIC MASTER D-I-A DATA
// ============================================================================

export type ReasoningMode = 'deductive' | 'inductive' | 'abductive';

export interface LogicMasterItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  inquiryDomain: string;
  argumentText: string;
  premiseStructure: {
    startingPoint: string;
    stepToConclusion: string;
    finalClaim: string;
  };
  correctMode: ReasoningMode;
  certaintyLevel: '100% Certain (if sound)' | 'High Probability (Empirical)' | 'Plausibility / Best Explanation';
  options: {
    mode: ReasoningMode;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G7_1_CHALLENGES: LogicMasterItem[] = [
  // STAGE 1: THREE MODES OF LOGIC DISCOVERY (4 items)
  {
    id: 'g7-1-s1-q1',
    stage: 1,
    title: 'The Universal Chemistry Law',
    inquiryDomain: 'Physical Chemistry & Gas Laws',
    argumentText: 'Major Premise: By Charles\'s Law, all ideal gases expand in volume proportionally when absolute temperature rises at constant pressure.\nMinor Premise: Neon gas inside this sealed glass syringe is an ideal gas currently being heated from 300K to 400K.\nConclusion: Therefore, the neon gas in this syringe will expand in volume.',
    premiseStructure: {
      startingPoint: 'Universal physical law applying to all ideal gases',
      stepToConclusion: 'Identifies neon in syringe as an instance of an ideal gas',
      finalClaim: 'Deduces with 100% certainty that the volume will expand'
    },
    correctMode: 'deductive',
    certaintyLevel: '100% Certain (if sound)',
    options: [
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Deductive reasoning moves from the universal general rule (Charles\'s Law) down to a specific instance (this syringe). The conclusion is logically inescapable.',
    pedagogicalKey: 'Deduction applies universal general laws to specific individual cases.'
  },
  {
    id: 'g7-1-s1-q2',
    stage: 1,
    title: 'The Coral Bleaching Field Survey',
    inquiryDomain: 'Marine Ecology in Bali',
    argumentText: 'Observation: Marine biologists surveyed coral reefs across 14 distinct coastal bays in Bali during March.\nFinding: In all 14 bays where water temperatures exceeded 31.5°C, severe coral bleaching was recorded.\nConclusion: Therefore, prolonged sea surface temperatures above 31.5°C will very likely trigger widespread coral bleaching across Indonesian reefs.',
    premiseStructure: {
      startingPoint: 'Specific empirical observations across 14 field sites',
      stepToConclusion: 'Identifies a consistent repeated correlation between temperature and bleaching',
      finalClaim: 'Extrapolates a high-probability general ecological rule'
    },
    correctMode: 'inductive',
    certaintyLevel: 'High Probability (Empirical)',
    options: [
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Inductive logic is the engine of empirical science: repeated observations across specific samples form a probable general theory.',
    pedagogicalKey: 'Induction builds general theories from repeated specific observations.'
  },
  {
    id: 'g7-1-s1-q3',
    stage: 1,
    title: 'The Darkened Computer Lab Mystery',
    inquiryDomain: 'Campus IT Diagnostic Investigation',
    argumentText: 'Observation: At 10:15 AM, all 30 desktop computers and the projector in Lab 2 shut down instantly.\nClues: The hallway lights outside are still on, the air conditioner fan in Lab 2 is still spinning, but the master surge-protector circuit breaker switch on the back wall has tripped to "OFF".\nConclusion: The sudden power loss was most likely caused by a localized electrical overload tripping the Lab 2 breaker, rather than a campus-wide blackout or individual PC failures.',
    premiseStructure: {
      startingPoint: 'Messy set of sudden observations and partial clues',
      stepToConclusion: 'Weighs competing hypotheses against observed electrical behavior',
      finalClaim: 'Selects the single most plausible and simplest explanation'
    },
    correctMode: 'abductive',
    certaintyLevel: 'Plausibility / Best Explanation',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Abductive reasoning acts like a detective: given the clues (hallway lights on, breaker switch tripped), a localized circuit trip is by far the most plausible explanation.',
    pedagogicalKey: 'Abduction determines the most plausible explanation for incomplete real-world evidence.'
  },
  {
    id: 'g7-1-s1-q4',
    stage: 1,
    title: 'The Mammalian Whale Proof',
    inquiryDomain: 'Biological Classification',
    argumentText: 'Premise 1: By biological definition, all mammals possess lungs and breathe atmospheric air.\nPremise 2: The humpback whale is scientifically classified as a marine mammal.\nConclusion: Therefore, humpback whales possess lungs and breathe atmospheric air.',
    premiseStructure: {
      startingPoint: 'Definitional universal rule defining mammals',
      stepToConclusion: 'Classifies humpback whale as a mammal',
      finalClaim: 'Inescapable logical conclusion'
    },
    correctMode: 'deductive',
    certaintyLevel: '100% Certain (if sound)',
    options: [
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'A classic deductive syllogism: if Premise 1 and Premise 2 are true, it is logically impossible for the conclusion to be false.',
    pedagogicalKey: 'In a sound deductive syllogism, true premises guarantee a true conclusion.'
  },

  // STAGE 2: EPISTEMIC COMPARISON & ERROR DETECTION (4 items)
  {
    id: 'g7-1-s2-q1',
    stage: 2,
    title: 'The Black Swan Epistemic Trap',
    inquiryDomain: 'Philosophy of Empirical Science',
    argumentText: 'Observation: A European traveler observed 50,000 swans across 12 countries over 20 years, and every single swan was white.\nConclusion: "It is an absolute universal law of nature that 100% of swans in the universe are white; a non-white swan is physically impossible."',
    premiseStructure: {
      startingPoint: '50,000 specific observations of white swans',
      stepToConclusion: 'Inductive pattern recognized',
      finalClaim: 'Illegitimately claims 100% deductive certainty for an inductive sample'
    },
    correctMode: 'inductive',
    certaintyLevel: 'High Probability (Empirical)',
    options: [
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Inductive reasoning can establish high probability, but never 100% absolute certainty. When Europeans visited Australia and saw black swans, this inductive claim collapsed.',
    pedagogicalKey: 'Inductive conclusions provide high probability, but can be shattered by a single outlier.'
  },
  {
    id: 'g7-1-s2-q2',
    stage: 2,
    title: 'The Medical Doctor\'s Diagnosis',
    inquiryDomain: 'Clinical Medicine',
    argumentText: 'A high school student visits the school clinic with a 38.8°C fever, sudden joint pain, severe headache behind the eyes, and low platelet count after rainy season mosquito bites.\nDoctor\'s Reasoning: While influenza or typhoid are possible, dengue hemorrhagic fever is by far the most plausible diagnosis fitting all these symptoms.\nConclusion: The doctor orders an urgent NS1 antigen blood test for dengue.',
    premiseStructure: {
      startingPoint: 'Patient exhibits complex cluster of clinical symptoms',
      stepToConclusion: 'Doctor tests symptoms against known infectious diseases',
      finalClaim: 'Infers dengue as the best available working explanation'
    },
    correctMode: 'abductive',
    certaintyLevel: 'Plausibility / Best Explanation',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Doctors use abductive reasoning (inference to the best explanation) to form diagnostic working hypotheses from observed symptoms.',
    pedagogicalKey: 'Abductive reasoning generates the best working diagnosis from clinical symptoms.'
  },
  {
    id: 'g7-1-s2-q3',
    stage: 2,
    title: 'The Smartphone Battery Degradation Trend',
    inquiryDomain: 'Consumer Electronics Testing',
    argumentText: 'Testing: An engineering lab tests 200 lithium-ion phone batteries under 500 charge cycles at 35°C.\nFinding: All 200 batteries lost between 16% and 22% of original capacity.\nConclusion: High ambient operating temperatures consistently accelerate battery degradation across lithium-ion mobile devices.',
    premiseStructure: {
      startingPoint: 'Standardized empirical test of 200 battery samples',
      stepToConclusion: 'Identifies uniform statistical degradation range',
      finalClaim: 'Generalizes high-probability trend to all similar batteries'
    },
    correctMode: 'inductive',
    certaintyLevel: 'High Probability (Empirical)',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Testing a sample of 200 units to establish a general engineering principle is standard inductive empirical methodology.',
    pedagogicalKey: 'Inductive testing of sample cohorts establishes reliable engineering probabilities.'
  },
  {
    id: 'g7-1-s2-q4',
    stage: 2,
    title: 'The Constitutional Free Speech Case',
    inquiryDomain: 'Constitutional Jurisprudence',
    argumentText: 'Major Premise: Article 28E(3) of the Indonesian Constitution guarantees all citizens the right to freedom of peaceful association and expression.\nMinor Premise: High school students publishing an independent student journalism newsletter are Indonesian citizens peacefully expressing ideas.\nConclusion: Therefore, high school students publishing this newsletter are constitutionally entitled to freedom of peaceful expression.',
    premiseStructure: {
      startingPoint: 'Universal legal statute in the national constitution',
      stepToConclusion: 'Subsumes student journalists under the constitutional category of citizens',
      finalClaim: 'Logically deduces constitutional entitlement'
    },
    correctMode: 'deductive',
    certaintyLevel: '100% Certain (if sound)',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Legal arguments are traditionally structured as deductive syllogisms: applying a general statutory law to a specific documented action.',
    pedagogicalKey: 'Legal and constitutional arguments apply universal statutes deductively to specific cases.'
  },

  // STAGE 3: SYNTHESIS & REAL-WORLD INQUIRY (3 items)
  {
    id: 'g7-1-s3-q1',
    stage: 3,
    title: 'The Forensic Crime Scene Reconstruction',
    inquiryDomain: 'Forensic Science & Criminology',
    argumentText: 'Clues: Broken glass on the outside lawn, mud footprints entering through the window frame, mud treads matching a size 42 hiking boot, and the computer missing from the desk while expensive jewelry on the dresser was untouched.\nForensic Analysis: The burglar entered from the outside and specifically targeted computer data or electronics rather than general valuables.\nConclusion: This is the most coherent explanation uniting the broken glass, footprints, and selective theft.',
    premiseStructure: {
      startingPoint: 'Physical evidence fragments at a crime scene',
      stepToConclusion: 'Reconstructs sequence of events using Occam\'s razor',
      finalClaim: 'Selects the single most plausible explanation of the crime'
    },
    correctMode: 'abductive',
    certaintyLevel: 'Plausibility / Best Explanation',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Forensic investigations use abductive reasoning to reconstruct past events from physical clues and circumstantial evidence.',
    pedagogicalKey: 'Forensic investigators use abduction to infer past unseen events from physical clues.'
  },
  {
    id: 'g7-1-s3-q2',
    stage: 3,
    title: 'The Vaccination Cohort Clinical Trial',
    inquiryDomain: 'Epidemiology and Public Health',
    argumentText: 'Empirical Trial: A clinical study followed 40,000 vaccinated individuals and 40,000 unvaccinated individuals over 12 months in Jakarta.\nResult: Hospitalization rates among the vaccinated cohort were 89% lower than the unvaccinated cohort across all age groups.\nConclusion: The vaccine is highly effective at reducing severe viral illness in the general population.',
    premiseStructure: {
      startingPoint: '80,000-person clinical trial data',
      stepToConclusion: 'Calculates relative risk and statistical significance',
      finalClaim: 'Extrapolates high-probability population efficacy'
    },
    correctMode: 'inductive',
    certaintyLevel: 'High Probability (Empirical)',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Randomized controlled trials and cohort studies provide high inductive probability supporting public health interventions.',
    pedagogicalKey: 'Clinical trials use inductive reasoning to infer population efficacy from sample cohorts.'
  },
  {
    id: 'g7-1-s3-q3',
    stage: 3,
    title: 'The Gravitational Orbit Syllogism',
    inquiryDomain: 'Astrophysics and Orbital Mechanics',
    argumentText: 'Universal Law: According to Newton\'s Law of Universal Gravitation, any two bodies with mass exert a gravitational force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.\nSpecific Case: Earth and the Moon have known masses and a measured orbital distance.\nConclusion: Therefore, Earth and the Moon exert a predictable gravitational attractive force governing the Moon\'s elliptical orbit.',
    premiseStructure: {
      startingPoint: 'Newtonian gravitational equation',
      stepToConclusion: 'Plugs in Earth and Moon parameters',
      finalClaim: 'Deduces orbital trajectory with mathematical certainty'
    },
    correctMode: 'deductive',
    certaintyLevel: '100% Certain (if sound)',
    options: [
        {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
      },
        {
        mode: 'deductive',
        label: 'Deductive Reasoning (Top-Down / Universal Rule)',
        description: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
      },
        {
        mode: 'abductive',
        label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
        description: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
      }
      ],
    explanation: 'Applying universal physical formulas to specific celestial bodies is pure deductive calculation.',
    pedagogicalKey: 'Mathematical astrophysics applies universal physical laws deductively to celestial bodies.'
  }
];

// ============================================================================
// g7-2: TOULMIN ARCHITECTURE BUILDER DATA
// ============================================================================

export type ToulminComponent =
  | 'claim'
  | 'grounds_evidence'
  | 'warrant'
  | 'backing'
  | 'qualifier'
  | 'rebuttal';

export interface ToulminBuilderItem {
  id: string;
  stage: 1 | 2 | 3;
  caseTitle: string;
  policyDebate: string;
  targetStatement: string;
  correctComponent: ToulminComponent;
  options: {
    component: ToulminComponent;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G7_2_CHALLENGES: ToulminBuilderItem[] = [
  // STAGE 1: IDENTIFYING THE TOULMIN SKELETON (4 items)
  {
    id: 'g7-2-s1-q1',
    stage: 1,
    caseTitle: 'The High School Start Time Policy',
    policyDebate: 'Adolescent Sleep and School Hours',
    targetStatement: '"Municipal public high schools in Jakarta should delay daily morning classes to 8:30 AM."',
    correctComponent: 'claim',
    options: [
        {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'qualifier',
        label: 'Qualifier (Scope & Degree)',
        description: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
      }
      ],
    explanation: 'The statement is the central proposition and policy assertion (the Claim) that the rest of the argument seeks to justify.',
    pedagogicalKey: 'The Claim is the central destination of your argument.'
  },
  {
    id: 'g7-2-s1-q2',
    stage: 1,
    caseTitle: 'The Neurological Trial Data',
    policyDebate: 'Adolescent Sleep and School Hours',
    targetStatement: '"Controlled clinical trials published in The Lancet demonstrated that high schools starting after 8:30 AM recorded a 14% improvement in standardized academic test scores and a 38% reduction in morning student tardiness."',
    correctComponent: 'grounds_evidence',
    options: [
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
      },
        {
        component: 'rebuttal',
        label: 'Rebuttal (Counter-Condition)',
        description: 'Specific exceptional circumstances, counter-evidence, or opposing arguments that would invalidate the central claim.'
      }
      ],
    explanation: 'Concrete empirical statistics (14% score improvement, 38% tardiness reduction) published in a peer-reviewed journal constitute the Grounds/Evidence.',
    pedagogicalKey: 'Grounds provide the empirical foundation that anchors your claim.'
  },
  {
    id: 'g7-2-s1-q3',
    stage: 1,
    caseTitle: 'The Underlying Educational Principle',
    policyDebate: 'Adolescent Sleep and School Hours',
    targetStatement: '"Educational institutions have a fundamental duty to structure scheduling around verified adolescent neurological development to optimize cognitive performance and student wellbeing."',
    correctComponent: 'warrant',
    options: [
        {
        component: 'backing',
        label: 'Backing (Theoretical Support)',
        description: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      }
      ],
    explanation: 'The Warrant bridges the gap between raw data (higher scores) and policy action (changing start times) by asserting that school schedules should align with neurological science.',
    pedagogicalKey: 'The Warrant answers: "Why does this specific evidence justify this specific claim?"'
  },
  {
    id: 'g7-2-s1-q4',
    stage: 1,
    caseTitle: 'The Counter-Schedule Challenge',
    policyDebate: 'Adolescent Sleep and School Hours',
    targetStatement: '"Unless working parents in industrial districts depend on earlier 7:00 AM school drop-offs due to factory shifts, in which case subsidized early morning breakfast study halls should be provided."',
    correctComponent: 'rebuttal',
    options: [
        {
        component: 'rebuttal',
        label: 'Rebuttal (Counter-Condition)',
        description: 'Specific exceptional circumstances, counter-evidence, or opposing arguments that would invalidate the central claim.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'backing',
        label: 'Backing (Theoretical Support)',
        description: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
      }
      ],
    explanation: 'The Rebuttal addresses opposing logistical realities (parent work hours) and provides an exception/accommodation, making the argument realistic and defensible.',
    pedagogicalKey: 'Rebuttals anticipate objections and disarm critics before they attack.'
  },

  // STAGE 2: ADVANCED TOULMIN ARCHITECTURE (4 items)
  {
    id: 'g7-2-s2-q1',
    stage: 2,
    caseTitle: 'The Institutional Authority Certification',
    policyDebate: 'Adolescent Sleep and School Hours',
    targetStatement: '"The World Health Organization (WHO) and the American Academy of Pediatrics both officially endorse adolescent circadian rhythm synchronization as a public health imperative."',
    correctComponent: 'backing',
    options: [
        {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
      },
        {
        component: 'backing',
        label: 'Backing (Theoretical Support)',
        description: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'qualifier',
        label: 'Qualifier (Scope & Degree)',
        description: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
      }
      ],
    explanation: 'Backing supports the Warrant: it proves that relying on circadian neuroscience is certified by global medical authorities like WHO.',
    pedagogicalKey: 'Backing certifies the authority and credibility of your Warrant.'
  },
  {
    id: 'g7-2-s2-q2',
    stage: 2,
    caseTitle: 'The Boundary Nuance',
    policyDebate: 'Adolescent Sleep and School Hours',
    targetStatement: '"In most urban municipal districts where public transit infrastructure is fully operational..."',
    correctComponent: 'qualifier',
    options: [
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'qualifier',
        label: 'Qualifier (Scope & Degree)',
        description: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
      },
        {
        component: 'rebuttal',
        label: 'Rebuttal (Counter-Condition)',
        description: 'Specific exceptional circumstances, counter-evidence, or opposing arguments that would invalidate the central claim.'
      }
      ],
    explanation: 'Qualifiers state the degree of certainty or boundary of applicability ("In most urban districts..."), protecting the argument from being dismantled by remote rural exceptions.',
    pedagogicalKey: 'Qualifiers set safe operational boundaries around your claim.'
  },
  {
    id: 'g7-2-s2-q3',
    stage: 2,
    caseTitle: 'Electric Vehicle Environmental Policy',
    policyDebate: 'Urban Carbon Emissions Reduction',
    targetStatement: '"Transitioning public transport bus fleets to electric propulsion will drastically decrease local urban tailpipe air pollution."',
    correctComponent: 'claim',
    options: [
        {
        component: 'qualifier',
        label: 'Qualifier (Scope & Degree)',
        description: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'backing',
        label: 'Backing (Theoretical Support)',
        description: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      }
      ],
    explanation: 'The statement asserts the central policy outcome (the Claim).',
    pedagogicalKey: 'Identify the core Claim before evaluating its supporting structural components.'
  },
  {
    id: 'g7-2-s2-q4',
    stage: 2,
    caseTitle: 'The EV Battery Lifecycle Dilemma',
    policyDebate: 'Urban Carbon Emissions Reduction',
    targetStatement: '"Critics correctly observe that lithium battery extraction and coal-powered electric grids generate upstream emissions; however, comprehensive lifecycle analyses prove EVs still emit 58% less total lifecycle carbon than diesel buses."',
    correctComponent: 'rebuttal',
    options: [
        {
        component: 'rebuttal',
        label: 'Rebuttal (Counter-Condition)',
        description: 'Specific exceptional circumstances, counter-evidence, or opposing arguments that would invalidate the central claim.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'qualifier',
        label: 'Qualifier (Scope & Degree)',
        description: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
      }
      ],
    explanation: 'A strong Rebuttal does not ignore counterarguments; it acknowledges them and uses lifecycle data to demonstrate that the primary claim remains valid.',
    pedagogicalKey: 'Confronting counterarguments directly elevates academic maturity.'
  },

  // STAGE 3: FULL ARGUMENT ASSEMBLY & SYNTHESIS (3 items)
  {
    id: 'g7-2-s3-q1',
    stage: 3,
    caseTitle: 'The Complete 6-Part Architecture Check',
    policyDebate: 'Renewable Solar Energy on Public School Rooftops',
    targetStatement: '"Solar energy conversion efficiency models published by ITB engineers."',
    correctComponent: 'grounds_evidence',
    options: [
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'backing',
        label: 'Backing (Theoretical Support)',
        description: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
      }
      ],
    explanation: 'Engineering models and measured efficiency figures provide the empirical Grounds/Data for the solar investment proposal.',
    pedagogicalKey: 'Empirical university engineering models serve as Grounds.'
  },
  {
    id: 'g7-2-s3-q2',
    stage: 3,
    caseTitle: 'The Environmental Responsibility Principle',
    policyDebate: 'Renewable Solar Energy on Public School Rooftops',
    targetStatement: '"Public educational facilities should actively model sustainable fiscal and ecological stewardship by reducing recurring municipal operational expenditures."',
    correctComponent: 'warrant',
    options: [
        {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'qualifier',
        label: 'Qualifier (Scope & Degree)',
        description: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
      }
      ],
    explanation: 'The Warrant articulates the institutional duty of schools to model stewardship, connecting engineering feasibility to budget policy.',
    pedagogicalKey: 'The Warrant establishes the normative justification for action.'
  },
  {
    id: 'g7-2-s3-q3',
    stage: 3,
    caseTitle: 'The Rooftop Structural Constraint',
    policyDebate: 'Renewable Solar Energy on Public School Rooftops',
    targetStatement: '"Except on older school buildings whose structural roof load capacity has not been certified by municipal safety inspectors."',
    correctComponent: 'rebuttal',
    options: [
        {
        component: 'backing',
        label: 'Backing (Theoretical Support)',
        description: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
      },
        {
        component: 'claim',
        label: 'Claim (Core Proposition)',
        description: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
      },
        {
        component: 'warrant',
        label: 'Warrant (Logical Principle)',
        description: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
      },
        {
        component: 'rebuttal',
        label: 'Rebuttal (Counter-Condition)',
        description: 'Specific exceptional circumstances, counter-evidence, or opposing arguments that would invalidate the central claim.'
      }
      ],
    explanation: 'The word "Except" introduces a critical safety reservation (the Rebuttal) that prevents reckless blanket installations on structurally weak roofs.',
    pedagogicalKey: 'Safety reservations ensure policy claims are executed responsibly.'
  }
];

// ============================================================================
// g7-3: FALLACY PATROL DATA
// ============================================================================

export type FallacyType =
  | 'ad_hominem'
  | 'straw_man'
  | 'hasty_generalization'
  | 'post_hoc'
  | 'false_dilemma'
  | 'valid_reasoning';

export interface FallacyPatrolItem {
  id: string;
  stage: 1 | 2 | 3;
  caseTitle: string;
  speakerContext: string;
  speechTranscript: string;
  correctFallacy: FallacyType;
  options: {
    fallacy: FallacyType;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G7_3_CHALLENGES: FallacyPatrolItem[] = [
  // STAGE 1: IDENTIFYING THE 5 SOURCE-ALIGNED FALLACIES (4 items)
  {
    id: 'g7-3-s1-q1',
    stage: 1,
    caseTitle: 'The Discredited Marine Biologist',
    speakerContext: 'Public debate on banning single-use plastic straws.',
    speechTranscript: '"Why should we listen to Dr. Sari\'s research on sea turtle mortality? She drives an old, beat-up car, wears unfashionable clothes, and was seen arguing with her neighbor last week. Her scientific data is totally untrustworthy!"',
    correctFallacy: 'ad_hominem',
    options: [
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      },
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      }
      ],
    explanation: 'Ad Hominem attacks the person instead of the argument. Dr. Sari\'s car or clothing has zero bearing on the biological accuracy of her turtle research.',
    pedagogicalKey: 'Argue against the evidence, never the personal character of the speaker.'
  },
  {
    id: 'g7-3-s1-q2',
    stage: 1,
    caseTitle: 'The Solar Energy Scarecrow',
    speakerContext: 'City council debate on investing in municipal solar power.',
    speechTranscript: '"Person A proposes that our city allocate 5% of its electricity budget to install solar panels on hospital roofs. Person B responds: \'My opponent wants to plunge our entire city into cold, pitch-black darkness and force doctors to perform surgery by candlelight to save a few pennies!\'"',
    correctFallacy: 'straw_man',
    options: [
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'hasty_generalization',
        label: "Hasty Generalization (Inadequate Sample)",
        description: "Draws a sweeping universal conclusion from an isolated, insufficient, or unrepresentative sample of empirical observations."
      },
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      }
      ],
    explanation: 'Person B constructs a Straw Man: Person A never proposed surgery by candlelight. Person B invented a ridiculous caricature to attack instead.',
    pedagogicalKey: 'Attack what the opponent actually proposed, not an exaggerated caricature.'
  },
  {
    id: 'g7-3-s1-q3',
    stage: 1,
    caseTitle: 'The 10-Minute History Genius',
    speakerContext: 'High school hallway discussion before final exams.',
    speechTranscript: '"My friend Kevin studied for exactly 10 minutes the night before the national history exam and scored a perfect 100! This proves conclusively that studying is a complete waste of time for every student in Indonesia."',
    correctFallacy: 'hasty_generalization',
    options: [
        {
        fallacy: 'hasty_generalization',
        label: "Hasty Generalization (Inadequate Sample)",
        description: "Draws a sweeping universal conclusion from an isolated, insufficient, or unrepresentative sample of empirical observations."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'valid_reasoning',
        label: "Sound & Valid Reasoning",
        description: "Applies logically necessary inferences from verified empirical premises to reach a balanced, scientifically sound conclusion."
      }
      ],
    explanation: 'A sample size of N=1 is completely inadequate to establish a universal educational rule. This is a classic Hasty Generalization.',
    pedagogicalKey: 'Never generalize universal truths from an unrepresentative sample of one.'
  },
  {
    id: 'g7-3-s1-q4',
    stage: 1,
    caseTitle: 'The Rooster and the Dawn',
    speakerContext: 'Village folklore debate on agricultural timing.',
    speechTranscript: '"The rooster crowed at 5:00 AM, and the sun rose at 5:15 AM. Therefore, the rooster\'s loud crowing physically commanded the sun to rise into the sky!"',
    correctFallacy: 'post_hoc',
    options: [
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      }
      ],
    explanation: 'Post Hoc Ergo Propter Hoc ("After this, therefore because of this"): chronological sequence does not establish causal mechanics. Earth\'s rotation causes sunrise, not the rooster.',
    pedagogicalKey: 'Sequence in time does not prove cause and effect.'
  },

  // STAGE 2: SUBTLE FALLACIES IN POLICY & MEDIA (4 items)
  {
    id: 'g7-3-s2-q1',
    stage: 2,
    caseTitle: 'The Urban Expressway Ultimatum',
    speakerContext: 'Political press conference on city infrastructure.',
    speechTranscript: '"Either our city council votes today to bulldoze 40 hectares of urban forest to build a concrete 6-lane elevated expressway, or our regional economy will permanently collapse and all our children will starve in poverty!"',
    correctFallacy: 'false_dilemma',
    options: [
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'hasty_generalization',
        label: "Hasty Generalization (Inadequate Sample)",
        description: "Draws a sweeping universal conclusion from an isolated, insufficient, or unrepresentative sample of empirical observations."
      }
      ],
    explanation: 'The speaker manufactures an artificial either-or trap (bulldoze forest or starve in poverty), hiding numerous viable compromise solutions.',
    pedagogicalKey: 'When presented with "Either A or B", always look for Options C, D, and E.'
  },
  {
    id: 'g7-3-s2-q2',
    stage: 2,
    caseTitle: 'The Lucky Exam Socks',
    speakerContext: 'Student discussing test superstition.',
    speechTranscript: '"I wore my bright yellow anime socks on Monday and scored an A on chemistry. On Wednesday I forgot to wear them and scored a C on physics! My yellow socks clearly possess supernatural exam-passing powers."',
    correctFallacy: 'post_hoc',
    options: [
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      }
      ],
    explanation: 'Coincidence is not causation. Yellow socks have no neurological or physical causal mechanism to alter exam performance.',
    pedagogicalKey: 'Demand verified causal mechanisms, not coincidental timing.'
  },
  {
    id: 'g7-3-s2-q3',
    stage: 2,
    caseTitle: 'The Tourist Pickpocket Generalization',
    speakerContext: 'Travel blog forum post about visiting a foreign capital.',
    speechTranscript: '"I landed in City X, and within two hours a pickpocket stole my wallet at the central train station. Everyone living in City X is a thieving criminal and the entire country is completely unsafe for tourists!"',
    correctFallacy: 'hasty_generalization',
    options: [
        {
        fallacy: 'hasty_generalization',
        label: "Hasty Generalization (Inadequate Sample)",
        description: "Draws a sweeping universal conclusion from an isolated, insufficient, or unrepresentative sample of empirical observations."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      }
      ],
    explanation: 'A single bad experience at a train station does not justify branding millions of citizens as criminals. Representative crime statistics are required.',
    pedagogicalKey: 'Broad demographic claims require representative statistical datasets.'
  },
  {
    id: 'g7-3-s2-q4',
    stage: 2,
    caseTitle: 'The Smartphone Ban Straw Man',
    speakerContext: 'Parent-teacher association debate.',
    speechTranscript: '"Parent A suggests: \'Let us ask students to keep phones in their backpacks during the 45-minute math lecture.\' Teacher B shouts: \'Parent A wants to banish all technology from modern education and return our students to the Stone Age writing on cave walls!\'"',
    correctFallacy: 'straw_man',
    options: [
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      }
      ],
    explanation: 'Teacher B attacked an invented extreme caricature (returning to the Stone Age) rather than debating the actual modest proposal.',
    pedagogicalKey: 'Recognize when an opponent exaggerates a policy into an absurd extreme.'
  },

  // STAGE 3: SYNTHESIS & SOUND REASONING RECOGNITION (3 items)
  {
    id: 'g7-3-s3-q1',
    stage: 3,
    caseTitle: 'The Multi-Factor Carbon Tax Analysis',
    speakerContext: 'Academic economic forum on carbon pricing.',
    speechTranscript: '"Controlled econometric data from 12 OECD economies demonstrated that introducing a $40/ton carbon fee reduced industrial greenhouse emissions by 8% over 5 years. While low-income households initially experienced higher heating bills, revenue-recycling through direct cash dividend rebates successfully neutralized this regressivity without dampening the emissions reduction."',
    correctFallacy: 'valid_reasoning',
    options: [
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'valid_reasoning',
        label: "Sound & Valid Reasoning",
        description: "Applies logically necessary inferences from verified empirical premises to reach a balanced, scientifically sound conclusion."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      }
      ],
    explanation: 'This passage is free of logical fallacies: it cites empirical multi-country data, candidly addresses adverse equity impacts, and evaluates compensatory mechanisms.',
    pedagogicalKey: 'Sound academic arguments cite data, acknowledge trade-offs, and avoid fallacies.'
  },
  {
    id: 'g7-3-s3-q2',
    stage: 3,
    caseTitle: 'The Youth Activist Dismissal',
    speakerContext: 'TV news panel on climate legislation.',
    speechTranscript: '"Why should Parliament debate this youth climate petition? The lead petitioner is only a 16-year-old high school girl who probably doesn\'t even pay taxes or understand how a corporation works. She is just an emotional teenager who should stick to doing her algebra homework."',
    correctFallacy: 'ad_hominem',
    options: [
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'post_hoc',
        label: "Post Hoc Ergo Propter Hoc (False Cause)",
        description: "Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one."
      },
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      }
      ],
    explanation: 'Discrediting research purely because the researcher is 16 years old is classic Ad Hominem. Scientific claims must be evaluated on empirical evidence, not the age or identity of the author.',
    pedagogicalKey: 'Scientific evidence must be judged on its merits, never the age of the researcher.'
  },
  {
    id: 'g7-3-s3-q3',
    stage: 3,
    caseTitle: 'The River Dam Either-Or Fallacy',
    speakerContext: 'Regional development council meeting.',
    speechTranscript: '"We face a binary destiny: Either we construct this massive hydroelectric dam that floods three indigenous valley villages, or our province will suffer permanent energy blackouts and economic stagnation forever."',
    correctFallacy: 'false_dilemma',
    options: [
        {
        fallacy: 'false_dilemma',
        label: "False Dilemma (Either-Or Trap)",
        description: "Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives."
      },
        {
        fallacy: 'straw_man',
        label: "Straw Man (Caricature & Distortion)",
        description: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
      },
        {
        fallacy: 'ad_hominem',
        label: "Ad Hominem (Personal Attack)",
        description: "Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument."
      },
        {
        fallacy: 'hasty_generalization',
        label: "Hasty Generalization (Inadequate Sample)",
        description: "Draws a sweeping universal conclusion from an isolated, insufficient, or unrepresentative sample of empirical observations."
      }
      ],
    explanation: 'A textbook False Dilemma: deliberately omitting solar, geothermal, and biomass options to force approval of a controversial mega-project.',
    pedagogicalKey: 'Reject false choices that erase viable ecological alternatives.'
  }
];
