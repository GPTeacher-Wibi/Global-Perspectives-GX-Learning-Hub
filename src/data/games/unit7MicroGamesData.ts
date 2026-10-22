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
        description: 'Applies an established universal law or definition to a specific case. If premises are true, the conclusion is guaranteed with 100% certainty.'
      },
      {
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Generalization)',
        description: 'Generalizes from a sample of repeated observations to a broad pattern.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Reasoning (Detective / Best Explanation)',
        description: 'Infers the most likely cause from an incomplete set of clues.'
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
        mode: 'inductive',
        label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
        description: 'Moves from specific observed empirical samples (14 bays) to extrapolate a general rule. Provides high probability, but remains subject to future observation.'
      },
      {
        mode: 'deductive',
        label: 'Deductive Reasoning (Guaranteed Certainty)',
        description: 'Applies a pure mathematical syllogism.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Reasoning (Inference to Best Explanation)',
        description: 'Diagnoses a single mystery.'
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
        mode: 'abductive',
        label: 'Abductive Reasoning (Inference to the Best Explanation)',
        description: 'Takes an incomplete set of clues/symptoms and infers the single most likely, plausible explanation that accounts for all observed facts.'
      },
      {
        mode: 'deductive',
        label: 'Deductive Reasoning',
        description: 'Proves a geometric theorem.'
      },
      {
        mode: 'inductive',
        label: 'Inductive Reasoning',
        description: 'Observes 10,000 computers shutting down.'
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
        label: 'Deductive Syllogism (Definitional Inescapability)',
        description: 'The conclusion is already logically contained within the definitions of the starting premises.'
      },
      {
        mode: 'inductive',
        label: 'Inductive Generalization',
        description: 'Checking 100 whales one by one.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Guess',
        description: 'Guessing why a whale surfaced.'
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
        mode: 'inductive',
        label: 'Inductive Overreach (Confusing Induction with Deduction)',
        description: 'The reasoning is inductive (extrapolating from observed samples), but mistakenly claims 100% deductive certainty, which is shattered by a single black swan.'
      },
      {
        mode: 'deductive',
        label: 'Sound Deductive Logic',
        description: 'Guaranteed by mathematical law.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Diagnosis',
        description: 'Explaining swan sickness.'
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
        mode: 'abductive',
        label: 'Abductive Reasoning (Clinical Diagnostic Inference)',
        description: 'Medical diagnosis is the prime real-world application of abduction: inferring the most likely underlying condition from an incomplete cluster of patient symptoms.'
      },
      {
        mode: 'deductive',
        label: 'Pure Deduction',
        description: 'A mathematical proof.'
      },
      {
        mode: 'inductive',
        label: 'Pure Induction',
        description: 'Testing the patient 1,000 times.'
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
        label: 'Inductive Reasoning (Empirical Testing Generalization)',
        description: 'Generalizes from a controlled sample of 200 tests to establish a broad predictive degradation pattern.'
      },
      {
        mode: 'deductive',
        label: 'Deductive Syllogism',
        description: 'Mathematical identity.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Guess',
        description: 'Guessing why a phone broke.'
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
        mode: 'deductive',
        label: 'Deductive Reasoning (Legal Syllogism / Constitutional Deduction)',
        description: 'Subsumes a specific citizen activity under a universal constitutional right to deduce legal entitlement.'
      },
      {
        mode: 'inductive',
        label: 'Inductive Generalization',
        description: 'Counting how many students read newspapers.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Guess',
        description: 'Guessing why the newsletter was printed.'
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
        mode: 'abductive',
        label: 'Abductive Reasoning (Forensic Reconstruction)',
        description: 'Forensics is pure abduction: evaluating physical traces to infer the most plausible sequence of past unseen events.'
      },
      {
        mode: 'deductive',
        label: 'Deductive Syllogism',
        description: 'Deducing a universal law.'
      },
      {
        mode: 'inductive',
        label: 'Inductive Sampling',
        description: 'Sampling 1,000 broken windows.'
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
        label: 'Inductive Reasoning (Large-Scale Clinical Induction)',
        description: 'Derives population-level medical effectiveness from controlled empirical cohort observations.'
      },
      {
        mode: 'deductive',
        label: 'Pure Deductive Certainty',
        description: 'Deductive mathematical theorem.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Conjecture',
        description: 'Guessing why a vaccine exists.'
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
        mode: 'deductive',
        label: 'Deductive Reasoning (Mathematical & Physical Proof)',
        description: 'Applies universal mathematical gravitational equations to celestial bodies to deduce precise orbital forces.'
      },
      {
        mode: 'inductive',
        label: 'Inductive Generalization',
        description: 'Waiting for the moon to fall.'
      },
      {
        mode: 'abductive',
        label: 'Abductive Guess',
        description: 'Speculating why the moon shines.'
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
        component: 'claim',
        label: 'Claim (The Core Assertion)',
        description: 'The primary thesis or central proposition that the author wants the audience to accept.'
      },
      {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Data)',
        description: 'The empirical facts, statistics, or observational data supporting the claim.'
      },
      {
        component: 'warrant',
        label: 'Warrant (Logical Bridge)',
        description: 'The underlying principle or rationale connecting the evidence to the claim.'
      },
      {
        component: 'qualifier',
        label: 'Qualifier (Boundary)',
        description: 'Words that state conditions of certainty or scope.'
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
        component: 'grounds_evidence',
        label: 'Grounds / Evidence (Empirical Data)',
        description: 'The concrete facts, measurements, clinical trials, or statistics that substantiate the claim.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The central recommendation.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'The underlying logical assumption.'
      },
      {
        component: 'rebuttal',
        label: 'Rebuttal',
        description: 'Counter-evidence.'
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
        component: 'warrant',
        label: 'Warrant (The Logical Bridge)',
        description: 'The implicit or explicit general principle that explains why the clinical evidence justifies the policy claim.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The policy assertion.'
      },
      {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence',
        description: 'Specific numbers and percentages.'
      },
      {
        component: 'backing',
        label: 'Backing',
        description: 'Additional citations for the warrant.'
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
        label: 'Rebuttal / Reservation (Counterargument & Exception)',
        description: 'Acknowledges specific real-world conditions or counterarguments where the claim might not hold or requires special accommodations.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The main goal.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'The logical principle.'
      },
      {
        component: 'backing',
        label: 'Backing',
        description: 'Supporting theory.'
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
        component: 'backing',
        label: 'Backing (Support for the Warrant)',
        description: 'Additional empirical evidence, legal precedent, or institutional authority that validates and certifies the truth of the Warrant itself.'
      },
      {
        component: 'grounds_evidence',
        label: 'Grounds / Evidence',
        description: 'Local test score data.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The policy rule.'
      },
      {
        component: 'qualifier',
        label: 'Qualifier',
        description: 'A hedging word.'
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
        component: 'qualifier',
        label: 'Qualifier (Scope & Certainty Boundary)',
        description: 'Nuances the claim with precise boundaries ("In most urban municipal districts...") to eliminate arrogant, sweeping generalizations.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The main point.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'The bridge.'
      },
      {
        component: 'rebuttal',
        label: 'Rebuttal',
        description: 'Counterargument.'
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
        component: 'claim',
        label: 'Claim',
        description: 'The central assertion being argued.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'The underlying value.'
      },
      {
        component: 'backing',
        label: 'Backing',
        description: 'Scientific backing.'
      },
      {
        component: 'qualifier',
        label: 'Qualifier',
        description: 'Scope limiter.'
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
        label: 'Rebuttal & Counter-Defense',
        description: 'Explicitly acknowledges valid criticisms (battery mining, coal grids) and provides counter-evidence to demonstrate net superiority.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The recommendation.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'The moral bridge.'
      },
      {
        component: 'qualifier',
        label: 'Qualifier',
        description: 'Boundary word.'
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
        component: 'grounds_evidence',
        label: 'Grounds / Evidence',
        description: 'Engineering models and empirical efficiency data from university researchers.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'Solar panels should be built.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'Schools should save electricity.'
      },
      {
        component: 'backing',
        label: 'Backing',
        description: 'National climate law.'
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
        component: 'warrant',
        label: 'Warrant (Institutional Stewardship Principle)',
        description: 'The ethical and operational premise that explains why solar data warrants school budget allocation.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'The recommendation.'
      },
      {
        component: 'grounds_evidence',
        label: 'Grounds',
        description: 'Wattage data.'
      },
      {
        component: 'qualifier',
        label: 'Qualifier',
        description: 'Scope limiter.'
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
        component: 'rebuttal',
        label: 'Rebuttal / Operational Exception',
        description: 'Identifies the precise structural safety condition where the solar policy must be withheld to protect student life.'
      },
      {
        component: 'claim',
        label: 'Claim',
        description: 'Install solar.'
      },
      {
        component: 'warrant',
        label: 'Warrant',
        description: 'Save money.'
      },
      {
        component: 'backing',
        label: 'Backing',
        description: 'Energy codes.'
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
        fallacy: 'ad_hominem',
        label: 'Ad Hominem (Personal Attack)',
        description: 'Attacking the speaker\'s personal character, appearance, or vehicle rather than addressing their actual empirical research evidence.'
      },
      {
        fallacy: 'straw_man',
        label: 'Straw Man (Distortion)',
        description: 'Exaggerating the opponent\'s argument to make it ridiculous.'
      },
      {
        fallacy: 'post_hoc',
        label: 'Post Hoc (False Cause)',
        description: 'Confusing sequence with cause.'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Presenting only two extreme choices.'
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
        fallacy: 'straw_man',
        label: 'Straw Man (Caricature & Distortion)',
        description: 'Distorting, exaggerating, and misrepresenting Person A\'s moderate proposal (5% solar on hospitals) into a ridiculous extreme (surgery by candlelight in total darkness) that is easy to attack.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking their clothes.'
      },
      {
        fallacy: 'hasty_generalization',
        label: 'Hasty Generalization',
        description: 'Sampling 1 battery.'
      },
      {
        fallacy: 'post_hoc',
        label: 'Post Hoc',
        description: 'Rooster crowing.'
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
        label: 'Hasty Generalization (Inadequate Sample)',
        description: 'Drawing a universal conclusion about all students from an isolated, unrepresentative sample of exactly one person (Kevin).'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Either study or die.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Insulting Kevin.'
      },
      {
        fallacy: 'valid_reasoning',
        label: 'Valid Reasoning',
        description: 'Scientifically sound proof.'
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
        fallacy: 'post_hoc',
        label: 'Post Hoc Ergo Propter Hoc (False Cause)',
        description: 'Falsely assuming that because Event B happened after Event A, Event A must have caused Event B, mistaking temporal sequence for physical causality.'
      },
      {
        fallacy: 'straw_man',
        label: 'Straw Man',
        description: 'Caricaturing an opponent.'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Either-or choices.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking the rooster.'
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
        fallacy: 'false_dilemma',
        label: 'False Dilemma (Either-Or Fallacy)',
        description: 'Artificially restricts a complex municipal debate into only two extreme choices (bulldoze trees OR total economic collapse), deliberately concealing realistic alternatives like public transit, commuter rail, and green corridors.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking city council members.'
      },
      {
        fallacy: 'post_hoc',
        label: 'Post Hoc',
        description: 'Citing rainfall records.'
      },
      {
        fallacy: 'hasty_generalization',
        label: 'Hasty Generalization',
        description: 'Sampling 2 trees.'
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
        fallacy: 'post_hoc',
        label: 'Post Hoc Ergo Propter Hoc (False Cause / Superstition)',
        description: 'Mistakes accidental coincidence in time for physical causality, ignoring actual variables like study hours and exam difficulty.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Insulting anime socks.'
      },
      {
        fallacy: 'straw_man',
        label: 'Straw Man',
        description: 'Distorting the exam.'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Either yellow socks or failing.'
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
        label: 'Hasty Generalization (Xenophobic Sampling Bias)',
        description: 'Extrapolates from a single unfortunate criminal encounter to brand an entire population of 10 million citizens as thieves.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking the train station.'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Either stay home or get robbed.'
      },
      {
        fallacy: 'post_hoc',
        label: 'Post Hoc',
        description: 'Train arrival caused theft.'
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
        fallacy: 'straw_man',
        label: 'Straw Man (Absurd Amplification)',
        description: 'Distorts a 45-minute classroom phone-stowing rule into an absurd desire to banish all modern technology and return to Stone Age cave painting.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking Teacher B.'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Either cave walls or smartphones.'
      },
      {
        fallacy: 'post_hoc',
        label: 'Post Hoc',
        description: 'Backpacks cause low grades.'
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
        fallacy: 'valid_reasoning',
        label: 'Sound & Valid Reasoning (Fallacy-Free Academic Rigor)',
        description: 'Demonstrates exemplary Cambridge Global Perspectives reasoning: grounds conclusions in multi-country empirical econometric data, acknowledges trade-offs (heating bills), and analyzes policy counter-measures (rebates).'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Forces people to pay taxes.'
      },
      {
        fallacy: 'straw_man',
        label: 'Straw Man',
        description: 'Exaggerates heating costs.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking OECD economies.'
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
        fallacy: 'ad_hominem',
        label: 'Ad Hominem (Ageist Character Dismissal)',
        description: 'Dismisses the empirical petition entirely based on the lead author\'s youth, age, and student status rather than examining the climate data presented.'
      },
      {
        fallacy: 'post_hoc',
        label: 'Post Hoc',
        description: 'Blaming climate on teenagers.'
      },
      {
        fallacy: 'straw_man',
        label: 'Straw Man',
        description: 'Caricaturing homework.'
      },
      {
        fallacy: 'false_dilemma',
        label: 'False Dilemma',
        description: 'Either algebra or climate.'
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
        label: 'False Dilemma (Manipulative Binary Framing)',
        description: 'Traps policymakers into believing there are only two choices (flood ancestral villages OR permanent economic collapse), hiding alternatives like solar micro-grids, geothermal energy, and energy efficiency upgrades.'
      },
      {
        fallacy: 'straw_man',
        label: 'Straw Man',
        description: 'Distorting indigenous rights.'
      },
      {
        fallacy: 'ad_hominem',
        label: 'Ad Hominem',
        description: 'Attacking electricity.'
      },
      {
        fallacy: 'hasty_generalization',
        label: 'Hasty Generalization',
        description: 'Sampling one dam.'
      }
    ],
    explanation: 'A textbook False Dilemma: deliberately omitting solar, geothermal, and biomass options to force approval of a controversial mega-project.',
    pedagogicalKey: 'Reject false choices that erase viable ecological alternatives.'
  }
];
