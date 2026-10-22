import { Slide } from '../../types/curriculum';

/**
 * Unit 7: Reasoning — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 91–103)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_7_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u7-s1',
    unitNumber: 7,
    slideNumber: 1,
    title: 'Unit 7: Reasoning',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Ask students: "If someone presents real facts, does that automatically mean their conclusion is correct?" Explain that facts are bricks, but reasoning is the cement that holds the building together.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.1',
      pages: '91–92'
    },
    content: {
      heading: 'The Logic of Human Thought',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'In previous units, we gathered data and crafted questions. But facts alone cannot convince anyone of anything until they are connected by logical reasoning.\n\nReasoning is the structured cognitive process of moving from known evidence, observations, and premises to valid, defensible conclusions.\n\nWithout reasoning, an essay is just a disjointed list of random facts; with reasoning, it becomes a powerful, unshakeable argument.',
      bullets: [
        'Objective 1: Distinguish between the three foundational modes of logic: Deductive, Inductive, and Abductive reasoning.',
        'Objective 2: Master Stephen Toulmin\'s 6-part Argumentation Model (Claim, Evidence, Warrant, Backing, Qualifier, Rebuttal).',
        'Objective 3: Identify and dismantle pervasive logical fallacies in social media, advertisements, and public debates.',
        'Objective 4: Construct nuanced, defensible arguments equipped with appropriate warrants and qualifiers.'
      ],
      keyTakeaway: 'Reasoning is the logical bridge that transforms raw facts into persuasive truth.',
      sourceCitation: 'Textbook Section 7.1 (pp. 91–92)'
    }
  },

  // SLIDE 2: Defining Reasoning
  {
    id: 'u7-s2',
    unitNumber: 7,
    slideNumber: 2,
    title: '7.1 What is Reasoning?',
    section: 'Foundational Definitions',
    type: 'definition',
    teacherNote: 'Define "Premise" clearly: A premise is a statement or proposition assumed to be true that serves as the starting point for an argument.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.1',
      pages: '91–93'
    },
    content: {
      heading: 'From Premises to Conclusions',
      subheading: 'How the human mind builds logical connections',
      body: 'In critical thinking, reasoning is the mental pathway that links premises to conclusions:\n\nA premise is an established fact, observation, or underlying assumption. A conclusion is the final claim you ask your audience to accept based on those premises.',
      comparison: {
        itemA: {
          label: 'Weak / Broken Reasoning',
          points: [
            'Premise: "It rained heavily in Jakarta this morning."',
            'Conclusion: "Therefore, all school exams should be cancelled permanently."',
            'Flaw: The conclusion does not follow from the premise (Non Sequitur). The bridge is broken.'
          ]
        },
        itemB: {
          label: 'Sound / Valid Reasoning',
          points: [
            'Premise 1: "Heavy monsoon rains flooded the school access roads with 1 meter of water."',
            'Premise 2: "Buses and emergency vehicles cannot safely navigate 1-meter floodwaters."',
            'Conclusion: "Therefore, school classes should transition online today for student safety."'
          ]
        }
      },
      keyTakeaway: 'Valid reasoning guarantees that every conclusion is logically warranted by its starting premises.',
      sourceCitation: 'Textbook Section 7.1 (pp. 91–93)'
    }
  },

  // SLIDE 3: The Three Modes of Logic Overview
  {
    id: 'u7-s3',
    unitNumber: 7,
    slideNumber: 3,
    title: '7.2 The Three Modes of Logic',
    section: 'Logical Frameworks',
    type: 'concept',
    teacherNote: 'Draw three arrows: Downward (Deductive: General to Specific), Upward (Inductive: Specific to General), and Detective Clue (Abductive: Best Explanation).',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.2',
      pages: '93–95'
    },
    content: {
      heading: 'Deductive, Inductive, and Abductive Logic',
      subheading: 'Three distinct cognitive engines for discovering truth',
      body: 'Human beings reason in three distinct ways depending on the type of information they possess and the level of certainty required:\n\nUnderstanding which mode you are using is essential for evaluating argument strength:',
      bullets: [
        '1. Deductive Reasoning (Top-Down): Moves from universal general rules to a specific instance. Provides 100% certainty if premises are true.',
        '2. Inductive Reasoning (Bottom-Up): Moves from specific observed samples to a broad general pattern. Provides high probability, but never absolute certainty.',
        '3. Abductive Reasoning (Inference to the Best Explanation): Takes an incomplete set of observations and identifies the most likely or plausible explanation.'
      ],
      keyTakeaway: 'Deduction guarantees certainty; induction calculates probability; abduction finds the most plausible explanation.',
      sourceCitation: 'Textbook Section 7.2 (pp. 93–95)'
    }
  },

  // SLIDE 4: Deductive Reasoning Explained
  {
    id: 'u7-s4',
    unitNumber: 7,
    slideNumber: 4,
    title: 'Deductive Logic: Guaranteed Certainty',
    section: '7.2 Mode 1: Deduction',
    type: 'concept',
    teacherNote: 'Explain the difference between "Valid" (structure is logically tight) and "Sound" (structure is valid AND premises are factually true in real life).',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.2',
      pages: '93–94'
    },
    content: {
      heading: 'Deductive Reasoning: The Top-Down Guarantee',
      subheading: 'When the conclusion MUST be true if the premises are true',
      body: 'Deductive reasoning starts with a broad general rule or universal scientific law and applies it to a specific individual case.\n\nIf the starting premises are factually true and the logical structure is valid, the conclusion is impossible to refute—it is guaranteed with 100% certainty.',
      example: {
        title: 'Classic Syllogism Example',
        scenario: '• Major Premise (General Law): All mammals are warm-blooded vertebrates with lungs.\n• Minor Premise (Specific Case): The blue whale is a mammal.\n• Deductive Conclusion: Therefore, the blue whale is a warm-blooded vertebrate with lungs.\n\n• Why it is infallible: You do not need to dissect every whale in the ocean. The universal definition of mammal guarantees the truth of the conclusion.',
        takeaway: 'Deduction unpacks what is already logically contained within the general premise.'
      },
      keyTakeaway: 'In a sound deductive argument, it is logically impossible for the premises to be true and the conclusion false.',
      sourceCitation: 'Textbook Section 7.2 (pp. 93–94)'
    }
  },

  // SLIDE 5: Inductive Reasoning Explained
  {
    id: 'u7-s5',
    unitNumber: 7,
    slideNumber: 5,
    title: 'Inductive Logic: Calculating Probability',
    section: '7.2 Mode 2: Induction',
    type: 'concept',
    teacherNote: 'Use the famous "Black Swan" example: Europeans observed 100,000 white swans and inductively concluded "All swans are white." Then they visited Australia and saw one black swan, shattering the conclusion!',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.2',
      pages: '94–95'
    },
    content: {
      heading: 'Inductive Reasoning: The Bottom-Up Generalizer',
      subheading: 'Moving from specific empirical observations to broad theories',
      body: 'Inductive reasoning is the engine of empirical science. It begins with specific repeated observations and detects a pattern to establish a general hypothesis or broad rule.\n\nInductive conclusions are never 100% guaranteed; they are characterized by degrees of probability (Weak, Strong, Cogent).',
      example: {
        title: 'Empirical Observation Example',
        scenario: '• Specific Observation 1: The sun rose in the east on Monday.\n• Specific Observation 2: The sun rose in the east on Tuesday, Wednesday, and every recorded day in history.\n• Inductive Conclusion: Therefore, the sun will probably rise in the east tomorrow.\n\n• The Scientific Nuance: While overwhelmingly probable (99.9999%), it is an inductive generalization based on past experience, not a purely mathematical proof.',
        takeaway: 'Induction expands knowledge beyond existing premises, but remains vulnerable to future exceptions.'
      },
      keyTakeaway: 'Inductive reasoning builds general theories from repeated observations, providing probability rather than absolute certainty.',
      sourceCitation: 'Textbook Section 7.2 (pp. 94–95)'
    }
  },

  // SLIDE 6: Abductive Reasoning Explained
  {
    id: 'u7-s6',
    unitNumber: 7,
    slideNumber: 6,
    title: 'Abductive Logic: The Detective\'s Tool',
    section: '7.2 Mode 3: Abduction',
    type: 'concept',
    teacherNote: 'Think of Sherlock Holmes or a medical doctor: The patient has a fever, cough, and loss of taste. The doctor infers the most likely diagnosis is COVID-19 or flu.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.2',
      pages: '95–96'
    },
    content: {
      heading: 'Abductive Reasoning: Inference to the Best Explanation',
      subheading: 'How researchers solve mysteries with incomplete evidence',
      body: 'In real-world research, medicine, and history, we rarely have universal laws (deduction) or millions of repeated trials (induction).\n\nAbductive reasoning takes a messy, incomplete set of observed clues and infers the single most plausible, likely explanation that accounts for all the facts.',
      example: {
        title: 'The Wet Grass Mystery',
        scenario: '• Clue 1: You wake up at 7 AM and notice the front lawn grass is soaking wet.\n• Clue 2: The street asphalt is completely dry, the sky is cloudless blue, and the garden sprinkler valve is turned to "ON".\n• Competing Explanations: (A) An alien spaceship sprayed water, (B) A localized rainstorm hit only your lawn, (C) The automatic sprinkler ran at 6 AM.\n• Abductive Inference: Explanation C is by far the most plausible and simplest explanation.',
        takeaway: 'Abduction chooses the best hypothesis based on evidence and Occam\'s razor (simplicity).'
      },
      keyTakeaway: 'Abductive reasoning determines the most plausible explanation for incomplete real-world evidence.',
      sourceCitation: 'Textbook Section 7.2 (pp. 95–96)'
    }
  },

  // SLIDE 7: Side-by-Side Comparison of the 3 Modes
  {
    id: 'u7-s7',
    unitNumber: 7,
    slideNumber: 7,
    title: 'Comparing the 3 Modes of Logic',
    section: '7.2 Comparative Matrix',
    type: 'comparison',
    teacherNote: 'Have students memorize the three key words: Certainty (Deductive), Probability (Inductive), Plausibility (Abductive).',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.2',
      pages: '93–96'
    },
    content: {
      heading: 'The Tri-Logic Comparison Matrix',
      subheading: 'How to diagnose the logic behind any academic argument',
      body: 'Study this matrix to distinguish how the three modes operate in research:',
      comparison: {
        itemA: {
          label: 'Deductive vs. Inductive',
          points: [
            'Deductive Direction: General premise → Specific case.',
            'Deductive Certainty: 100% Absolute Certainty (if valid and sound).',
            'Inductive Direction: Specific observations → General pattern.',
            'Inductive Certainty: High Probability (can be overturned by one outlier).'
          ]
        },
        itemB: {
          label: 'Abductive Reasoning',
          points: [
            'Abductive Direction: Incomplete clues/effects → Most likely cause.',
            'Abductive Certainty: Plausibility / Best Available Explanation.',
            'Prime Application: Medical diagnosis, historical crime scenes, troubleshooting technical failures.'
          ]
        }
      },
      keyTakeaway: 'Deduction guarantees; induction generalizes; abduction diagnoses.',
      sourceCitation: 'Textbook Section 7.2 (pp. 93–96)'
    }
  },

  // SLIDE 8: Active Checkpoint 1: Logic Classification
  {
    id: 'u7-s8',
    unitNumber: 7,
    slideNumber: 8,
    title: 'Checkpoint: Logic Mode Challenge',
    section: '7.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students trace the thinking: Are they applying a general law? Generalizing from observations? Or diagnosing the most likely cause?',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.2',
      pages: '93–96'
    },
    content: {
      heading: 'Classifying Logical Thinking',
      body: 'A marine biologist inspects coral reefs across 12 different bays in Bali. In every single bay where water temperatures exceeded 31°C, she observes severe coral bleaching. She concludes: "Ocean warming above 31°C will very likely cause widespread coral bleaching across Indonesia."\n\nWhich mode of reasoning is this scientist primarily using?',
      interactiveData: {
        prompt: 'Which reasoning mode moves from 12 specific bay observations to a broad national prediction?',
        options: [
          {
            id: 'opt-1',
            label: 'Deductive Reasoning, because coral bleaching is a 100% mathematical certainty.',
            explanation: 'Incorrect. She is not deducing from an abstract universal syllogism; she is observing empirical samples and generalizing.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Inductive Reasoning, because she moves from specific repeated field observations (12 bays) to a broad, probable general pattern.',
            explanation: 'Correct! Inductive reasoning observes specific repeated cases, detects a pattern, and formulates a broad probable rule for future cases.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Abductive Reasoning, because the coral is dying mysteriously.',
            explanation: 'Incorrect. There is no mystery to diagnose; she systematically measured temperatures across multiple sites to establish a broad pattern.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Observing specific cases to establish a broad, probable general rule is the hallmark of Inductive reasoning.',
      sourceCitation: 'Textbook Section 7.2 (pp. 93–96)'
    }
  },

  // SLIDE 9: The Toulmin Model of Argumentation Overview
  {
    id: 'u7-s9',
    unitNumber: 7,
    slideNumber: 9,
    title: '7.3 The Toulmin Model',
    section: 'Argumentation Architecture',
    type: 'concept',
    teacherNote: 'Introduce British philosopher Stephen Toulmin (1958). In real life, courtroom lawyers and scientists do not use ancient Greek syllogisms; they use the 6 parts of the Toulmin Model.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.3',
      pages: '96–98'
    },
    content: {
      heading: 'The Anatomy of Real Arguments: Stephen Toulmin',
      subheading: 'The global standard for analyzing academic debates',
      body: 'In 1958, philosopher Stephen Toulmin recognized that human arguments rarely follow rigid mathematical formulas. Instead, practical arguments are complex structures composed of six interconnected components:\n\nMastering Toulmin allows you to construct rock-solid arguments and surgically expose flaws in opponents\' reasoning:',
      bullets: [
        '1. Claim: The central assertion or thesis you want the audience to accept.',
        '2. Evidence (Data / Grounds): The verified empirical facts, statistics, or testimonies supporting the claim.',
        '3. Warrant: The underlying logical principle or bridge that authorizes moving from evidence to claim.',
        '4. Backing: The additional support or credentials that prove the warrant itself is valid.',
        '5. Qualifier: Words specifying the degree of certainty or boundary conditions (e.g., "probably", "in most cases").',
        '6. Rebuttal: Acknowledging valid counterarguments or conditions where the claim would NOT hold.'
      ],
      keyTakeaway: 'The Toulmin Model provides a complete 6-part blueprint for evaluating and constructing defensible arguments.',
      sourceCitation: 'Textbook Section 7.3 (pp. 96–98)'
    }
  },

  // SLIDE 10: Toulmin: Claim, Evidence, and Warrant
  {
    id: 'u7-s10',
    unitNumber: 7,
    slideNumber: 10,
    title: 'Toulmin: Claim, Evidence, Warrant',
    section: '7.3 Core Triad',
    type: 'concept',
    teacherNote: 'Emphasize the Warrant: Most people forget the warrant! The warrant answers: "Why does that evidence prove that claim?"',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.3',
      pages: '96–98'
    },
    content: {
      heading: 'The Core Triad: Claim, Evidence, and Warrant',
      subheading: 'The three essential foundations of every logical argument',
      body: 'An argument cannot stand without this primary triangle:',
      bullets: [
        'The Claim: "High school classes should start at 8:30 AM rather than 7:00 AM."',
        'The Evidence: "A 2023 pediatric sleep study showed that 78% of teenagers cannot fall asleep before 11:00 PM due to adolescent circadian biology, resulting in chronic sleep deprivation at 7:00 AM."',
        'The Warrant (The Unspoken Bridge): "Schools have an ethical obligation to structure operational schedules around human biological health to maximize learning efficiency."',
        'Why the Warrant Matters: If someone believes "schools should prepare kids for harsh military suffering regardless of health", the evidence about sleep deprivation will not convince them! The warrant reveals the shared value.'
      ],
      keyTakeaway: 'The warrant is the underlying bridge that explains why your evidence actually justifies your claim.',
      sourceCitation: 'Textbook Section 7.3 (pp. 96–98)'
    }
  },

  // SLIDE 11: Toulmin: Backing, Qualifier, and Rebuttal
  {
    id: 'u7-s11',
    unitNumber: 7,
    slideNumber: 11,
    title: 'Toulmin: Backing, Qualifier, Rebuttal',
    section: '7.3 Advanced Components',
    type: 'concept',
    teacherNote: 'Teach that a Qualifier and Rebuttal do NOT weaken an argument—they make it bulletproof by showing intellectual honesty and boundary awareness.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.3',
      pages: '97–99'
    },
    content: {
      heading: 'Strengthening the Argument: Backing, Qualifier, Rebuttal',
      subheading: 'How to make your arguments bulletproof against criticism',
      body: 'Novice arguments use arrogant, sweeping words like "always" and "100%". Sophisticated academic arguments use Toulmin\'s protective triad:',
      bullets: [
        'Backing: Additional evidence certifying the warrant (e.g., "Medical consensus from the World Health Organization affirms that cognitive development requires at least 8 hours of sleep for adolescents").',
        'Qualifier: Nuancing the claim\'s boundary (e.g., "In most urban high schools...", "Presumably...", "Except during emergency exam schedules..."). Eliminates arrogant generalizations.',
        'Rebuttal: Proactively addressing counterarguments (e.g., "Unless family morning transportation schedules cannot accommodate the later start time, in which case subsidized school buses should be deployed").'
      ],
      keyTakeaway: 'Qualifiers set safe boundaries; rebuttals disarm critics before they can attack.',
      sourceCitation: 'Textbook Section 7.3 (pp. 97–99)'
    }
  },

  // SLIDE 12: Complete Toulmin Argument Walkthrough
  {
    id: 'u7-s12',
    unitNumber: 7,
    slideNumber: 12,
    title: 'The Toulmin Model in Action',
    section: '7.3 Full Case Example',
    type: 'case-study',
    teacherNote: 'Have students point out all 6 parts in this single paragraph. This is the exact standard expected in Grade 10 Cambridge Global Perspectives written portfolios.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.3',
      pages: '98–99'
    },
    content: {
      heading: 'A Complete 6-Part Toulmin Argument',
      subheading: 'Deconstructing a real-world educational policy debate',
      body: 'Read how a student scholar weaves all six components into a unified argument:',
      example: {
        title: 'The 8:30 AM School Start Time Debate',
        scenario: '• Claim: Urban high schools should transition starting times to 8:30 AM.\n• Evidence: Peer-reviewed sleep trials show Grade 10 test scores rose by 14% and tardiness dropped by 40% when start times shifted.\n• Warrant: School policies should be grounded in empirical neurological data that optimizes student learning.\n• Backing: Cognitive neuroscience published in Nature confirms adolescent circadian melatonin release peaks later in the morning.\n• Qualifier: In most municipal public schools where bus infrastructure is available...\n• Rebuttal: Unless regional factory shift schedules make morning family carpools impossible, requiring localized transit solutions.',
        takeaway: 'Notice how the argument feels mature, grounded, persuasive, and completely impossible to dismiss.'
      },
      keyTakeaway: 'An argument equipped with all 6 Toulmin components withstands intense academic scrutiny.',
      sourceCitation: 'Textbook Section 7.3 (pp. 98–99)'
    }
  },

  // SLIDE 13: Misconception: Rebuttals Weaken Your Position
  {
    id: 'u7-s13',
    unitNumber: 7,
    slideNumber: 13,
    title: 'Misconception: The Rebuttal Paradox',
    section: '7.3 Critical Thinking',
    type: 'misconception',
    teacherNote: 'Explain the boxing analogy: If you leave your chin undefended, your opponent knocks you out. Acknowledging a counterargument is blocking the punch before it lands!',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.3',
      pages: '98–100'
    },
    content: {
      heading: '"Including a Rebuttal Makes My Argument Look Weak and Unsure"',
      subheading: 'Why acknowledging opposing views is the ultimate sign of strength',
      body: 'Many high school students avoid mentioning counterarguments because they fear it will make their paper look weak. This is a profound misunderstanding of academic inquiry.\n\nPretending that counterarguments do not exist makes an author look blind, dogmatic, or intellectually dishonest.',
      comparison: {
        itemA: {
          label: 'The Fragile Dogmatic Essay',
          points: [
            'Claims: "Electric vehicles are 100% perfect with zero environmental flaws whatsoever."',
            'Ignores: Cobalt mining, battery disposal, and coal-powered electric grids.',
            'Reader Reaction: The examiner spots the missing facts immediately and docks marks for biased, uncritical thinking.'
          ]
        },
        itemB: {
          label: 'The Robust Toulmin Essay',
          points: [
            'Claims: "EVs drastically cut urban tailpipe emissions compared to petrol cars.',
            'Addresses Rebuttal: \'Critics correctly observe that lithium battery extraction carries environmental costs; however, lifetime lifecycle analysis proves EVs still emit 60% less lifetime carbon.\'',
            'Reader Reaction: The examiner awards top marks for nuanced, balanced critical reasoning!'
          ]
        }
      },
      keyTakeaway: 'Anticipating and addressing rebuttals demonstrates intellectual maturity and invulnerability.',
      sourceCitation: 'Textbook Section 7.3 (pp. 98–100)'
    }
  },

  // SLIDE 14: Introduction to Logical Fallacies
  {
    id: 'u7-s14',
    unitNumber: 7,
    slideNumber: 14,
    title: '7.4 Logical Fallacies in Debate',
    section: 'Defective Reasoning',
    type: 'definition',
    teacherNote: 'Define "Fallacy": An error in reasoning that renders an argument invalid or unsound, even if the conclusion happens to sound superficially convincing.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.4',
      pages: '99–101'
    },
    content: {
      heading: 'The Viruses of Critical Thinking: Fallacies',
      subheading: 'Recognizing deceptive patterns in media, politics, and daily speech',
      body: 'A logical fallacy is an error in reasoning that occurs when an argument\'s conclusion is not supported by its premises, or when a deceptive trick is used to distract the audience.\n\nFallacies are dangerous because they often sound psychologically convincing to untrained listeners.\n\nThe textbook highlights five ubiquitous fallacies you must learn to spot and dismantle:',
      bullets: [
        '1. Ad Hominem: Attacking the person\'s character rather than addressing their argument.',
        '2. Straw Man: Caricaturing or exaggerating an opponent\'s stance to make it easy to attack.',
        '3. Hasty Generalization: Drawing a broad universal conclusion from an inadequate sample.',
        '4. Post Hoc Ergo Propter Hoc (False Cause): Assuming A caused B simply because B happened after A.',
        '5. False Dilemma (Either-Or): Artificially reducing a complex debate into only two extreme choices.'
      ],
      keyTakeaway: 'A fallacy is a broken link in the chain of reasoning that invalidates the conclusion.',
      sourceCitation: 'Textbook Section 7.4 (pp. 99–101)'
    }
  },

  // SLIDE 15: Fallacy 1 & 2: Ad Hominem & Straw Man
  {
    id: 'u7-s15',
    unitNumber: 7,
    slideNumber: 15,
    title: 'Ad Hominem & Straw Man',
    section: '7.4 Fallacy Deep-Dive 1',
    type: 'comparison',
    teacherNote: 'Have students act out both fallacies in a 30-second roleplay so they can physically feel the dishonesty of these tactics.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.4',
      pages: '100–102'
    },
    content: {
      heading: 'Personal Attacks and Fake Targets',
      subheading: 'Ad Hominem (Against the Person) & Straw Man (Distortion)',
      body: 'Two of the most common dirty tricks in political and social media debates:',
      comparison: {
        itemA: {
          label: 'Ad Hominem (Personal Attack)',
          points: [
            'Definition: Attacking the speaker\'s age, appearance, background, or character instead of answering their evidence.',
            'Example: "Dr. Sari claims plastic straws harm turtles, but she drives an old car and wears ugly glasses, so her research is garbage!"',
            'Flaw: The doctor\'s car has zero relevance to the marine biology of sea turtles.'
          ]
        },
        itemB: {
          label: 'Straw Man (Distortion)',
          points: [
            'Definition: Exaggerating, simplifying, or misrepresenting the opponent\'s argument to make it ridiculous.',
            'Example: Person A: "We should spend more budget on school solar panels." Person B: "You want us to freeze in the dark without electricity to save a few pennies!"',
            'Flaw: Person A never proposed freezing in the dark. Person B attacked a fake, ridiculous scarecrow.'
          ]
        }
      },
      keyTakeaway: 'Argue against the evidence, never the person. Attack what the person actually said, not an exaggerated distortion.',
      sourceCitation: 'Textbook Section 7.4 (pp. 100–102)'
    }
  },

  // SLIDE 16: Fallacy 3, 4 & 5: Hasty Generalization, False Cause, False Dilemma
  {
    id: 'u7-s16',
    unitNumber: 7,
    slideNumber: 16,
    title: 'False Cause, Hasty Gen, False Dilemma',
    section: '7.4 Fallacy Deep-Dive 2',
    type: 'concept',
    teacherNote: 'Highlight Post Hoc: In Latin, "Post hoc ergo propter hoc" means "After this, therefore because of this". Sequence in time does not prove cause!',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.4',
      pages: '101–103'
    },
    content: {
      heading: 'Faulty Sampling, False Causes, and Forced Choices',
      subheading: 'Three errors that deceive everyday decision-makers',
      body: 'Review these classic traps in empirical reasoning:',
      bullets: [
        'Hasty Generalization: "My friend studied for 10 minutes and scored 100 on the history exam. Therefore, studying is completely unnecessary for everyone!" (Sample size = 1 person; completely unrepresentative).',
        'Post Hoc (False Cause): "The rooster crowed at 5:00 AM, and the sun rose at 5:15 AM. Therefore, the rooster\'s crowing caused the sun to rise!" (Temporal sequence is mistaken for physical causality).',
        'False Dilemma (Either-Or): "Either you support building a massive highway through the mangrove forest, or you want our city to remain impoverished forever!" (Ignores sustainable eco-tourism, rail transit, and balanced alternatives).'
      ],
      keyTakeaway: 'Demand representative sample sizes, verify causal mechanisms, and reject artificial either-or choices.',
      sourceCitation: 'Textbook Section 7.4 (pp. 101–103)'
    }
  },

  // SLIDE 17: Active Checkpoint 2: Spot the Fallacy Challenge
  {
    id: 'u7-s17',
    unitNumber: 7,
    slideNumber: 17,
    title: 'Checkpoint: Identify the Fallacy',
    section: '7.4 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the politician\'s quote: Notice the forced choice between two extreme absolutes.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.4',
      pages: '100–103'
    },
    content: {
      heading: 'Fallacy Diagnostic Challenge',
      body: 'During a debate on city public parks, a politician declares:\n"Either we cut down the city park trees to build a commercial shopping mall, or our economy will collapse and our children will starve in poverty!"\n\nWhich logical fallacy is this speaker aggressively using to manipulate the audience?',
      interactiveData: {
        prompt: 'Which fallacy artificially restricts a complex policy debate to only two extreme, terrifying choices?',
        options: [
          {
            id: 'opt-1',
            label: 'Ad Hominem, because the politician hates shopping malls.',
            explanation: 'Incorrect. The speaker is not attacking any opponent\'s personal character.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'False Dilemma (Either-Or Fallacy), because it ignores intermediate alternatives like developing commercial areas elsewhere or building green commercial spaces.',
            explanation: 'Correct! The speaker artificially presents only two extreme options (cut trees for a mall OR total economic starvation), deliberately hiding numerous realistic compromises.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Deductive Syllogism, because economic collapse is guaranteed by nature.',
            explanation: 'Incorrect. This is not sound deductive logic; it is a manipulative rhetorical fallacy.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'When someone says "Either A or B", always look for Options C, D, and E.',
      sourceCitation: 'Textbook Section 7.4 (pp. 100–103)'
    }
  },

  // SLIDE 18: Applied Case Study: Public Transit Policy Debate
  {
    id: 'u7-s18',
    unitNumber: 7,
    slideNumber: 18,
    title: 'Case Study: Reconstructing an Argument',
    section: '7.5 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through how this student scholar took an emotional, flawed newspaper opinion piece and rebuilt it into an airtight Toulmin argument for their Cambridge portfolio.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.5',
      pages: '102–103'
    },
    content: {
      heading: 'Reconstructing an Urban Transit Debate',
      subheading: 'How a student repaired broken rhetoric with sound logic',
      body: 'Observe how a Grade 10 student transformed a fallacious debate into sound academic reasoning:',
      example: {
        title: 'From Fallacy to Toulmin Perfection',
        scenario: '1. Original Flawed Argument in Media: "Car drivers are selfish polluters who hate the poor! Either we ban all private cars from Jakarta tomorrow, or climate change will drown us all!" (Ad Hominem, False Dilemma, Hasty Generalization).\n\n2. Reconstructed Toulmin Architecture:\n• Claim: The city should implement congestion pricing on central avenues during peak hours.\n• Evidence: Traffic sensor data demonstrates average vehicle speeds are 8 km/h, causing $4 billion in annual economic fuel loss.\n• Warrant: Efficient urban mobility is a vital municipal public good that requires market-based incentives.\n• Backing: Transport economics models from London and Singapore demonstrate 20% congestion drops under pricing.\n• Qualifier: During weekdays between 7:00 AM and 10:00 AM on designated arterial corridors...\n• Rebuttal: Provided that low-income delivery drivers receive targeted toll rebates and TransJakarta feeder bus frequency is doubled.',
        takeaway: 'Notice how the reconstructed argument is calm, factual, persuasive, and actionable.'
      },
      keyTakeaway: 'Reconstructing flawed emotional rhetoric into disciplined Toulmin arguments is the essence of Global Perspectives.',
      sourceCitation: 'Textbook Section 7.5 (pp. 102–103)'
    }
  },

  // SLIDE 19: Constructing Stronger Reasoning
  {
    id: 'u7-s19',
    unitNumber: 7,
    slideNumber: 19,
    title: 'The Golden Rules of Sound Reasoning',
    section: '7.5 Practical Guidelines',
    type: 'concept',
    teacherNote: 'Have students write these 4 rules inside the front cover of their notebooks as their personal writing code.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.5',
      pages: '102–103'
    },
    content: {
      heading: 'The Four Rules of High-Impact Academic Reasoning',
      subheading: 'How to write arguments that earn top Cambridge marks',
      body: 'Whenever you write an essay, presentation, or portfolio reflection, audit your reasoning against these four golden standards:',
      bullets: [
        'Rule 1 — Make Your Warrants Explicit: Never assume your reader automatically knows why your evidence proves your point. State the logical bridge clearly.',
        'Rule 2 — Embrace Qualifiers: Replace words like "always", "proves", "undeniable", and "everyone" with measured scholarly phrases: "strongly suggests", "in most observed cases", "the preponderance of evidence indicates".',
        'Rule 3 — Welcome Rebuttals: Treat opposing arguments with intellectual respect. State them fairly before showing why your solution is superior.',
        'Rule 4 — Audit for Fallacies: Re-read your drafts to ensure you have not attacked a person (Ad Hominem), created a fake target (Straw Man), or forced a false choice (False Dilemma).'
      ],
      keyTakeaway: 'Sound reasoning wins arguments through clarity, evidence, and intellectual honesty.',
      sourceCitation: 'Textbook Section 7.5 (pp. 102–103)'
    }
  },

  // SLIDE 20: Unit 7 Master Summary
  {
    id: 'u7-s20',
    unitNumber: 7,
    slideNumber: 20,
    title: 'Unit 7 Master Summary',
    section: '7.5 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the 3 modes of logic and the 6 parts of Toulmin. Prompt students: "How will you use the Toulmin model in your next debate?"',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.5',
      pages: '102–103'
    },
    content: {
      heading: 'Mastering Critical Reasoning',
      subheading: 'Key takeaways from Unit 7: Reasoning',
      body: 'You now possess the foundational logical frameworks required to construct, analyze, and dismantle complex arguments.',
      bullets: [
        '1. Three Modes of Logic: Deductive (general to specific = certainty), Inductive (specific to general = probability), Abductive (clues to best explanation = plausibility).',
        '2. Toulmin Model: Master the 6 parts: Claim, Evidence, Warrant, Backing, Qualifier, and Rebuttal.',
        '3. The Power of the Warrant: The bridge connecting evidence to claims is where arguments are won or lost.',
        '4. Intellectual Honesty: Qualifiers and Rebuttals make arguments stronger, not weaker.',
        '5. Fallacy Immunity: Recognize and eliminate Ad Hominem, Straw Man, Hasty Generalization, False Cause, and False Dilemmas.'
      ],
      keyTakeaway: 'Reasoning is the ultimate tool of intellectual independence. Think critically, argue ethically, and seek the truth.',
      sourceCitation: 'Textbook Section 7.5 (pp. 102–103)'
    }
  },

  // SLIDE 21: Final Exit Challenge
  {
    id: 'u7-s21',
    unitNumber: 7,
    slideNumber: 21,
    title: 'Unit 7 Exit Challenge',
    section: '7.5 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students repair a broken claim by identifying the missing Toulmin warrant.',
    sourceRef: {
      unit: 'Unit 7',
      section: '7.5',
      pages: '103'
    },
    content: {
      heading: 'Exit Reasoning Challenge: The Missing Warrant',
      body: 'A student writer presents this argument:\n• Claim: Our school canteen should immediately replace all plastic soda bottles with fresh local fruit juice.\n• Evidence: A medical survey shows 45% of students consume more than 50 grams of refined sugar during lunch.\n\nWhich statement serves as the essential Toulmin Warrant connecting this evidence to the claim?',
      interactiveData: {
        prompt: 'Which underlying principle logically bridges the sugar data to the beverage policy claim?',
        options: [
          {
            id: 'opt-1',
            label: 'Juice tastes delicious and plastic bottles are ugly.',
            explanation: 'Incorrect. This is an aesthetic personal opinion, not a logical research warrant.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Schools have a responsibility to actively safeguard student physical health by providing nutritious dietary alternatives to reduce excessive sugar consumption.',
            explanation: 'Correct! This is the precise Toulmin Warrant. It explains WHY the high sugar data authorizes the school administration to change the beverage policy.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Anyone who drinks soda is a bad student who will fail their exams.',
            explanation: 'Incorrect. This is a hostile Ad Hominem fallacy that provides zero logical justification.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'A clear warrant reveals the shared institutional or moral value that justifies taking action on the evidence.',
      sourceCitation: 'Textbook Section 7.5 (p. 103)'
    }
  }
];
