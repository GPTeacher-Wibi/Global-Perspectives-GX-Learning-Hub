import { Slide } from '../../types/curriculum';

/**
 * Unit 9: Claims — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 121–134)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_9_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u9-s1',
    unitNumber: 9,
    slideNumber: 1,
    title: 'Unit 9: Claims',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Ask students: "When someone says \'Social media is evil\', are they stating a fact, making a value judgment, or proposing a policy?" Explain that every argument in the world is built on claims.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.1',
      pages: '121–122'
    },
    content: {
      heading: 'The Assertions that Shape Our World',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'Every debate, political speech, academic paper, and commercial advertisement revolves around claims.\n\nA claim is an assertive declarative statement or proposition asserting that something is true, that something has value, or that a specific action must be taken.\n\nTo become an independent critical thinker, you must learn to dissect claims: What kind of claim is this? Is it explicitly stated or secretly implied? And most importantly—is it justified by sound evidence?',
      bullets: [
        'Objective 1: Master the Tri-Claim Framework: Claims of Fact, Claims of Value, and Claims of Policy.',
        'Objective 2: Uncover hidden implicit claims and unstated ideological assumptions.',
        'Objective 3: Distinguish between unjustified assertions and justified academic claims.',
        'Objective 4: Apply academic modality and hedging to avoid dangerous absolutism.'
      ],
      keyTakeaway: 'A claim is an invitation to believe or act. Always demand the evidence before accepting.',
      sourceCitation: 'Textbook Section 9.1 (pp. 121–122)'
    }
  },

  // SLIDE 2: What is a Claim?
  {
    id: 'u9-s2',
    unitNumber: 9,
    slideNumber: 2,
    title: '9.1 What is a Claim?',
    section: 'Foundational Definitions',
    type: 'definition',
    teacherNote: 'Distinguish a claim from a question or topic: "Climate Change" is a topic. "Is climate change real?" is a question. "Human activities are accelerating global climate change" is a CLAIM.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.1',
      pages: '121–123'
    },
    content: {
      heading: 'The Nature of an Academic Claim',
      subheading: 'Moving from topics and questions to assertive propositions',
      body: 'A claim is never just a topic or a passive observation. It is an assertive stance that requires justification:\n\nNotice the progression in academic research:',
      bullets: [
        'Topic (Broad Area): "Renewable Energy in Southeast Asia."',
        'Research Question (Open Inquiry): "To what extent can geothermal energy replace coal power in Java by 2030?"',
        'Claim (Definite Proposition): "Investing in geothermal energy on Java will reduce national greenhouse gas emissions by 35% over the next decade while maintaining grid stability."',
        'Core Characteristic: A claim is always debatable—a reasonable, informed person could potentially disagree with it and demand proof.'
      ],
      keyTakeaway: 'A claim takes a definite, debatable stand that requires supporting evidence and logical reasoning.',
      sourceCitation: 'Textbook Section 9.1 (pp. 121–123)'
    }
  },

  // SLIDE 3: The Tri-Claim Framework Overview
  {
    id: 'u9-s3',
    unitNumber: 9,
    slideNumber: 3,
    title: '9.2 The Tri-Claim Framework',
    section: 'Taxonomy of Claims',
    type: 'concept',
    teacherNote: 'Memorize the three questions: Fact = What is true? Value = What is good/bad? Policy = What should we do?',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.2',
      pages: '123–125'
    },
    content: {
      heading: 'The Three Master Categories of Claims',
      subheading: 'Fact, Value, and Policy: Three distinct ways of interpreting reality',
      body: 'Classical rhetoric and modern argumentation theory divide all claims into three foundational categories:\n\nRecognizing the category is vital because each claim requires completely different standards of proof:',
      bullets: [
        '1. Claims of Fact: Assert that a condition has existed, exists, or will exist. Verified through empirical data, measurements, and physical observation.',
        '2. Claims of Value: Assert that something is good or bad, moral or immoral, just or unjust, beautiful or ugly. Grounded in ethical, cultural, or philosophical principles.',
        '3. Claims of Policy: Assert that specific rules, laws, or courses of action should or must be adopted. Driven by words like "should", "must", and "ought to".'
      ],
      keyTakeaway: 'Fact claims tell us what IS; Value claims tell us what is WORTHWHILE; Policy claims tell us what we MUST DO.',
      sourceCitation: 'Textbook Section 9.2 (pp. 123–125)'
    }
  },

  // SLIDE 4: Claims of Fact Deep Dive
  {
    id: 'u9-s4',
    unitNumber: 9,
    slideNumber: 4,
    title: 'Claims of Fact: Empirical Truths',
    section: '9.2 Category 1: Fact',
    type: 'concept',
    teacherNote: 'Clarify: A Claim of Fact is NOT necessarily an established fact! It is a claim ABOUT a factual condition that can be empirically verified or disproven.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.2',
      pages: '123–124'
    },
    content: {
      heading: 'Claims of Fact: What Is, Was, or Will Be True',
      subheading: 'Assertions that can be verified through data and physical evidence',
      body: 'A Claim of Fact posits that an observable reality exists. It answers questions of definition, existence, or cause and effect:\n\nNotice that Claims of Fact can look forward into the future as verifiable projections:',
      example: {
        title: 'Examples of Claims of Fact',
        scenario: '• Past Fact: "Average global temperatures rose by 1.1°C between 1880 and 2020." (Verifiable via historical meteorological records).\n• Present Fact: "72% of Indonesian junior high students own a smartphone." (Verifiable via demographic surveys).\n• Future Fact / Prediction: "Without flood barrier reinforcement, 30% of North Jakarta will be submerged by 2050." (Verifiable via hydrological topographic modeling).',
        takeaway: 'How to prove a Claim of Fact: Present statistical data, scientific studies, sensor measurements, and historical archives.'
      },
      keyTakeaway: 'Claims of fact are tested against empirical data, measurements, and physical observation.',
      sourceCitation: 'Textbook Section 9.2 (pp. 123–124)'
    }
  },

  // SLIDE 5: Claims of Value Deep Dive
  {
    id: 'u9-s5',
    unitNumber: 9,
    slideNumber: 5,
    title: 'Claims of Value: Ethical Judgments',
    section: '9.2 Category 2: Value',
    type: 'concept',
    teacherNote: 'Challenge students: "Can you measure \'fairness\' with a ruler or thermometer?" No! Value claims require moral criteria and philosophical principles.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.2',
      pages: '124–126'
    },
    content: {
      heading: 'Claims of Value: Judging Worth and Morality',
      subheading: 'Assertions grounded in ethics, justice, aesthetics, and cultural standards',
      body: 'A Claim of Value judges whether an idea, action, or state of affairs is desirable or undesirable, right or wrong, superior or inferior.\n\nYou cannot prove a value claim with a calculator alone; you must define and defend clear moral or aesthetic criteria:',
      example: {
        title: 'Examples of Claims of Value',
        scenario: '• Ethical Value: "Protecting ancestral indigenous rainforest rights is morally superior to expanding palm oil corporate profits."\n• Aesthetic Value: "Traditional Indonesian batik architecture creates a more community-affirming environment than glass corporate skyscrapers."\n• Educational Value: "Fostering creative critical thinking is more important than memorizing dates for standardized exams."',
        takeaway: 'How to prove a Claim of Value: Establish shared moral criteria (human rights, cultural dignity, ecological stewardship) and demonstrate how the subject satisfies those criteria.'
      },
      keyTakeaway: 'Claims of value require establishing clear ethical criteria to judge what is good, fair, or worthy.',
      sourceCitation: 'Textbook Section 9.2 (pp. 124–126)'
    }
  },

  // SLIDE 6: Claims of Policy Deep Dive
  {
    id: 'u9-s6',
    unitNumber: 9,
    slideNumber: 6,
    title: 'Claims of Policy: Calls to Action',
    section: '9.2 Category 3: Policy',
    type: 'concept',
    teacherNote: 'Spot the linguistic markers: "should", "must", "ought to", "prohibit", "mandate". A policy claim always urges institutional change.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.2',
      pages: '125–127'
    },
    content: {
      heading: 'Claims of Policy: Demanding Action and Change',
      subheading: 'Prescribing what rules, laws, or behaviors MUST be enacted',
      body: 'A Claim of Policy argues that a specific action, policy, or institutional reform should or must be undertaken to solve a problem.\n\nA complete policy claim always rests on both a Claim of Fact (there is a problem) and a Claim of Value (it is important to fix):',
      example: {
        title: 'The Architecture of a Policy Claim',
        scenario: '• Fact: "Urban air pollution causes 10,000 respiratory deaths annually in our province."\n• Value: "Clean air is a fundamental human right that the government is obligated to protect."\n• Policy Claim: "Therefore, the provincial parliament MUST mandate that all municipal public buses transition to electric power by 2028."\n\n• Key Markers: Look for normative verbs: should, must, ought to, require, ban, subsidize.',
        takeaway: 'A policy claim translates factual evidence and ethical values into legal and practical action.'
      },
      keyTakeaway: 'Claims of policy demand actionable change, combining factual reality with ethical conviction.',
      sourceCitation: 'Textbook Section 9.2 (pp. 125–127)'
    }
  },

  // SLIDE 7: Side-by-Side Comparison Matrix
  {
    id: 'u9-s7',
    unitNumber: 9,
    slideNumber: 7,
    title: 'Comparing Fact, Value, and Policy',
    section: '9.2 Comparative Matrix',
    type: 'comparison',
    teacherNote: 'Have students trace this single environmental issue through all three claim types.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.2',
      pages: '123–127'
    },
    content: {
      heading: 'The Tri-Claim Diagnostic Matrix',
      subheading: 'How one topic generates three completely different types of claims',
      body: 'Study how the topic of "Ocean Plastic Waste" unfolds across the three categories:',
      comparison: {
        itemA: {
          label: 'Fact & Value Claims',
          points: [
            'Claim of Fact: "Over 8 million tons of plastic enter global oceans each year, killing 100,000 marine mammals annually."',
            'Verification: Marine biology survey reports and satellite debris tracking.',
            'Claim of Value: "Allowing marine biodiversity to perish for the convenience of disposable coffee cups is ethically unconscionable."',
            'Verification: Environmental ethics and intergenerational justice philosophy.'
          ]
        },
        itemB: {
          label: 'Claim of Policy',
          points: [
            'Claim of Policy: "The national government should impose a 100% luxury tax on single-use plastic packaging to fund municipal compost infrastructure."',
            'Verification: Economic feasibility models, administrative viability, and legislative policy analysis.'
          ]
        }
      },
      keyTakeaway: 'Sound research projects weave all three: establish the Facts, affirm the Values, and propose the Policy.',
      sourceCitation: 'Textbook Section 9.2 (pp. 123–127)'
    }
  },

  // SLIDE 8: Active Checkpoint 1: Tri-Claim Classification
  {
    id: 'u9-s8',
    unitNumber: 9,
    slideNumber: 8,
    title: 'Checkpoint: Claim Classification',
    section: '9.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Look at the verb "ought to implement" and the proposed institutional action (free lunches). That is a direct Policy claim.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.2',
      pages: '123–127'
    },
    content: {
      heading: 'Classifying Academic Assertions',
      body: 'Examine this statement from a youth advocacy report:\n"The Ministry of Education ought to implement a universal free nutritious breakfast program across all public primary schools in rural provinces."\n\nWhich master category of claim is this author making?',
      interactiveData: {
        prompt: 'Which master claim category does this policy proposal represent?',
        options: [
          {
            id: 'opt-1',
            label: 'Claim of Fact, because primary students definitely eat food.',
            explanation: 'Incorrect. The statement is not merely stating that food exists; it is prescribing an institutional government action.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Claim of Policy, because it uses the normative verb "ought to implement" and advocates a specific governmental program of action.',
            explanation: 'Correct! The presence of "ought to" and the proposal of a concrete administrative action (universal breakfast program) makes this an unmistakable Claim of Policy.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Claim of Value, because breakfast is delicious.',
            explanation: 'Incorrect. While grounded in the value that children deserve nutrition, the explicit sentence itself is a call for institutional policy implementation.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Whenever a statement proposes that an institution or society "should", "must", or "ought to" take action, it is a Claim of Policy.',
      sourceCitation: 'Textbook Section 9.2 (pp. 123–127)'
    }
  },

  // SLIDE 9: Explicit vs. Implicit Claims
  {
    id: 'u9-s9',
    unitNumber: 9,
    slideNumber: 9,
    title: '9.3 Explicit vs. Implicit Claims',
    section: 'Subtext & Hidden Assertions',
    type: 'comparison',
    teacherNote: 'Analogy: An iceberg. Explicit claims are above the water. Implicit claims are the massive frozen mountain hidden underneath!',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.3',
      pages: '127–129'
    },
    content: {
      heading: 'Uncovering the Hidden Iceberg: Explicit vs. Implicit',
      subheading: 'How authors convey powerful claims without stating them out loud',
      body: 'Critical thinkers do not just read the surface text; they detect the unspoken ideological assumptions buried underneath:',
      comparison: {
        itemA: {
          label: 'Explicit Claims (Direct)',
          points: [
            'Definition: Directly stated in unambiguous, plain language on the page.',
            'Example: "Our company\'s electric scooters reduce carbon emissions by 40% compared to gasoline motorbikes."',
            'Auditing: Easy to find, analyze, and test against data.'
          ]
        },
        itemB: {
          label: 'Implicit Claims (Subtext / Hidden)',
          points: [
            'Definition: Unstated assumptions, suggestions, or worldviews implied through imagery, selective facts, and word choice.',
            'Example: An ad shows an ultra-wealthy handsome model riding a scooter through a private resort.',
            'Hidden Implicit Claim: "Buying our scooter will make you wealthy, sexually attractive, and high-status."',
            'Auditing: Requires critical deconstruction of subconscious rhetoric.'
          ]
        }
      },
      keyTakeaway: 'Always ask: What is this author asking me to assume or believe without actually stating it out loud?',
      sourceCitation: 'Textbook Section 9.3 (pp. 127–129)'
    }
  },

  // SLIDE 10: Active Checkpoint 2: Detecting Implicit Claims
  {
    id: 'u9-s10',
    unitNumber: 9,
    slideNumber: 10,
    title: 'Checkpoint: Unmask the Subtext',
    section: '9.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze fast-fashion marketing: What unspoken message makes teenagers buy cheap clothes every 2 weeks?',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.3',
      pages: '127–129'
    },
    content: {
      heading: 'Deconstructing Hidden Advertising Claims',
      body: 'A fast-fashion brand launches an Instagram campaign with the slogan:\n"Never wear the same outfit twice! New $5 dresses dropping every Tuesday!"\nAccompanied by images of popular teenage influencers throwing previous clothes into the trash.\n\nWhat is the dangerous implicit claim embedded within this campaign?',
      interactiveData: {
        prompt: 'Which unstated value assumption is this advertisement secretly promoting?',
        options: [
          {
            id: 'opt-1',
            label: 'The explicit claim that clothes cost $5.',
            explanation: 'Incorrect. The $5 price is explicitly stated, not implicit.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'The implicit claim that repeating outfits is socially humiliating and that disposable, wasteful consumerism is essential for social popularity.',
            explanation: 'Correct! The campaign subtext subtly brainwashes teenagers into believing that rewearing clothes damages their social worth, actively encouraging destructive environmental waste.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'That cotton farming requires lots of irrigation water.',
            explanation: 'Incorrect. The ad deliberately hides environmental realities; that is not an implicit claim they want consumers to absorb.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Unmasking implicit claims reveals how marketing and political rhetoric manipulate subconscious human desires.',
      sourceCitation: 'Textbook Section 9.3 (pp. 127–129)'
    }
  },

  // SLIDE 11: Justified vs. Unjustified Claims
  {
    id: 'u9-s11',
    unitNumber: 9,
    slideNumber: 11,
    title: '9.4 The Anatomy of Justification',
    section: 'Epistemic Rigor',
    type: 'concept',
    teacherNote: 'Emphasize: Anyone can claim anything on the internet. What separates scholarship from conspiracy theories is JUSTIFICATION.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.4',
      pages: '129–131'
    },
    content: {
      heading: 'When is a Claim Academically Justified?',
      subheading: 'The three essential requirements for defensible assertions',
      body: 'A claim is not true simply because a confident person says it loudly. In Cambridge Global Perspectives, a claim is deemed justified only when it satisfies three strict criteria:',
      bullets: [
        '1. Adequate Evidentiary Weight: The claim is supported by credible, peer-reviewed, or statistically representative data (passing the CRAAP test).',
        '2. Logical Coherence (Sound Warrant): The evidence presented actually authorizes the conclusion without fallacies or logical leaps.',
        '3. Proportional Scope: The breadth of the claim matches the limits of the evidence. (If you studied 50 students in Bandung, you cannot claim to know how 50 million students across Indonesia think!).'
      ],
      keyTakeaway: 'A justified claim is supported by verified evidence, connected by sound logic, and bounded by honest scope.',
      sourceCitation: 'Textbook Section 9.4 (pp. 129–131)'
    }
  },

  // SLIDE 12: Academic Modality & Hedging
  {
    id: 'u9-s12',
    unitNumber: 9,
    slideNumber: 12,
    title: '9.4 Modality & Scholarly Hedging',
    section: 'Linguistic Nuance',
    type: 'comparison',
    teacherNote: 'Show the linguistic spectrum: Absolute (always, never, 100%) vs. Hedged (tends to, indicates, in observed cases). Cambridge examiners reward hedging!',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.4',
      pages: '130–132'
    },
    content: {
      heading: 'The Language of Wisdom: Modality and Hedging',
      subheading: 'Why great scholars avoid arrogant absolutes like "always" and "never"',
      body: 'Novice writers believe that using aggressive words makes their paper sound authoritative. In truth, sweeping absolutes make claims instantly false because a single exception destroys the entire sentence:',
      comparison: {
        itemA: {
          label: 'Fragile Absolute Claims (Novice)',
          points: [
            '"Artificial Intelligence will completely destroy all human jobs."',
            '"Video games always cause aggressive criminal behavior in boys."',
            '"Solar panels are 100% useless in cloudy countries."',
            'Flaw: Easily debunked by one plumber keeping his job, or one gentle gamer.'
          ]
        },
        itemB: {
          label: 'Robust Hedged Claims (Scholar)',
          points: [
            '"AI is likely to automate repetitive clerical tasks while creating new engineering roles."',
            '"Excessive gaming under certain psychosocial conditions correlates with irritability."',
            '"Solar panels experience reduced efficiency during prolonged overcast seasons."',
            'Strength: Nuanced, scientifically accurate, and defensible.'
          ]
        }
      },
      keyTakeaway: 'Hedge your claims with modal verbs (may, tends to, suggests) to reflect the realistic boundaries of scientific evidence.',
      sourceCitation: 'Textbook Section 9.4 (pp. 130–132)'
    }
  },

  // SLIDE 13: Misconception: Absolutes Make You Stronger
  {
    id: 'u9-s13',
    unitNumber: 9,
    slideNumber: 13,
    title: 'Misconception: The Strength Paradox',
    section: '9.4 Misconception Check',
    type: 'misconception',
    teacherNote: 'Analogy: An oak tree vs. bamboo. The rigid oak tree snaps in a hurricane. The flexible bamboo bends with the wind and survives. Hedged claims bend and survive criticism!',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.4',
      pages: '131–133'
    },
    content: {
      heading: '"Using Extreme Words Like \'Undeniable\' Makes My Argument Powerful"',
      subheading: 'Why dogmatic language is an immediate sign of intellectual weakness',
      body: 'Many students write phrases like "It is indisputably proven that..." or "Everyone knows that..." because they think it silences debate.\n\nIn academic research, dogmatic certainty indicates a lack of critical self-awareness. Real science is humble and acknowledges uncertainty.',
      example: {
        title: 'The "Undeniable" Trap',
        scenario: 'A student writes: "It is an undeniable, 100% proven fact that organic farming can feed the entire planet without any chemical fertilizers."\n\n• The Examiner\'s Audit: The examiner immediately notes that organic yields are currently 20–30% lower per hectare, requiring massive land clearance that could cause global starvation if implemented overnight without yield improvements.\n\n• The Score Impact: Marks are docked for over-simplification, dogma, and refusal to engage with agricultural complexities.',
        takeaway: 'Scholarly power comes from precision and honest nuance, never from exaggerated dogmatism.'
      },
      keyTakeaway: 'Replace dogmatic swagger with precise scholarly nuance. True confidence does not fear boundary conditions.',
      sourceCitation: 'Textbook Section 9.4 (pp. 131–133)'
    }
  },

  // SLIDE 14: The Claims Audit Matrix
  {
    id: 'u9-s14',
    unitNumber: 9,
    slideNumber: 14,
    title: '9.5 The Claims Audit Matrix',
    section: 'Analytical Tool',
    type: 'concept',
    teacherNote: 'Teach students to draw this 5-column table whenever evaluating an op-ed or debate transcript in their coursework.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.5',
      pages: '132–134'
    },
    content: {
      heading: 'The Professional Claims Audit Matrix',
      subheading: 'A 5-column systematic tool for dismantling any complex text',
      body: 'When analyzing a newspaper editorial, NGO report, or speech, use this standardized audit grid to classify and test every claim:',
      bullets: [
        'Column 1 — The Claim Statement: Quote or paraphrase the exact assertion.',
        'Column 2 — Claim Category: Classify as Claim of Fact, Value, or Policy.',
        'Column 3 — Stance Type: Is the claim explicitly stated or implicitly hinted?',
        'Column 4 — Supporting Evidence: What empirical data, citations, or warrants are provided? (CRAAP audit).',
        'Column 5 — Justification Rating: Unjustified (no proof) | Weakly Justified (anecdote/outdated) | Fully Justified (credible peer-reviewed consensus).'
      ],
      keyTakeaway: 'The Claims Audit Matrix transforms subjective impressions into disciplined, structured academic critique.',
      sourceCitation: 'Textbook Section 9.5 (pp. 132–134)'
    }
  },

  // SLIDE 15: Misconception: Values Cannot Be Argued
  {
    id: 'u9-s15',
    unitNumber: 9,
    slideNumber: 15,
    title: 'Misconception: Values Are Just Opinions',
    section: '9.5 Epistemological Nuance',
    type: 'misconception',
    teacherNote: 'Ask students: "Is slavery wrong just because it\'s an opinion, or can we rationally justify why human liberty is a universal moral principle?"',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.5',
      pages: '131–133'
    },
    content: {
      heading: '"Claims of Value are Pure Opinions That Cannot Be Debated"',
      subheading: 'Why ethical argumentation is a rigorous, rational academic discipline',
      body: 'Some students believe that because a Claim of Value involves moral concepts like "justice" or "fairness", it is purely a matter of personal taste (like preferring chocolate over vanilla) and cannot be argued.\n\nThis is completely false: The entire field of human rights, international law, and bioethics is built on rigorously justified Claims of Value.',
      comparison: {
        itemA: {
          label: 'Casual Personal Taste',
          points: [
            '"I like spicy sambal better than sweet soy sauce."',
            'Nature: Pure sensory preference.',
            'Cannot be debated rationally with empirical evidence.'
          ]
        },
        itemB: {
          label: 'Academic Claim of Value',
          points: [
            '"Child labor in textile factories is morally unacceptable."',
            'Justification: Grounded in the UN Convention on the Rights of the Child, developmental psychology, and universal human dignity.',
            'Can be debated, defended, and enshrined into binding international treaties.'
          ]
        }
      },
      keyTakeaway: 'Claims of value can be rationally debated and justified through ethical philosophy, human rights, and shared criteria.',
      sourceCitation: 'Textbook Section 9.5 (pp. 131–133)'
    }
  },

  // SLIDE 16: Applied Case Study: Sumatra Dam Controversy
  {
    id: 'u9-s16',
    unitNumber: 9,
    slideNumber: 16,
    title: 'Case Study: The Hydroelectric Dam',
    section: '9.6 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through the competing claims: The government makes a Policy claim based on Fact (clean energy). Indigenous leaders make a Value and Policy claim based on ancestral rights.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.6',
      pages: '133–134'
    },
    content: {
      heading: 'Auditing Claims in a Real Environmental Conflict',
      subheading: 'The Batang Toru Hydroelectric Project in North Sumatra',
      body: 'Observe how a student researcher used the Claims Matrix to dissect a fierce public controversy over a green energy project:',
      example: {
        title: 'Dissecting the Clashing Claims',
        scenario: '1. Government / Energy Developer Claim:\n   • Fact: The 510 MW dam will produce renewable energy, avoiding 1.6 million tons of carbon emissions annually.\n   • Policy: The provincial government must complete dam construction to eliminate coal dependency.\n\n2. Conservationists & Indigenous Community Claim:\n   • Fact: The dam reservoir floods the unique primary habitat of the critically endangered Tapanuli orangutan (only 800 remaining on Earth).\n   • Value: Species extinction is an irreversible moral tragedy that cannot be balanced against megawatts of electricity.\n   • Policy: The Supreme Court should order the dam relocated to degraded agricultural lands downstream.\n\n• Synthesis: By mapping the facts, values, and policies, the student discovered a creative win-win compromise: modifying the water tunnel layout to spare the critical forest corridor while preserving 90% of electricity generation.',
        takeaway: 'Dissecting claims reveals the underlying values, opening pathways to innovative solutions.'
      },
      keyTakeaway: 'Auditing opposing claims of fact, value, and policy allows researchers to find mediated solutions to real-world crises.',
      sourceCitation: 'Textbook Section 9.6 (pp. 133–134)'
    }
  },

  // SLIDE 17: Developing Justified Policy Proposals
  {
    id: 'u9-s17',
    unitNumber: 9,
    slideNumber: 17,
    title: 'Building Justified Policy Claims',
    section: '9.6 Practical Application',
    type: 'concept',
    teacherNote: 'Teach the 3-layer sandwich: Bottom slice = Fact (The Problem). Middle filling = Value (Why it matters). Top slice = Policy (The Action).',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.6',
      pages: '132–134'
    },
    content: {
      heading: 'How to Write an Unshakeable Policy Proposal',
      subheading: 'The three-layer foundation of winning Cambridge recommendations',
      body: 'Whenever you formulate a recommendation for your Global Perspectives Team Project or Individual Report, construct your claim using the Three-Layer Sandwich:',
      bullets: [
        'Layer 1 — The Factual Foundation (What is the reality?): Provide empirical statistics proving the scale, severity, and cause of the problem.',
        'Layer 2 — The Value Core (Why does it matter ethically?): Articulate the shared moral imperative (equity, environmental sustainability, public health, human dignity).',
        'Layer 3 — The Actionable Policy (What must be done?): Formulate a specific, feasible, and hedged policy proposal with clear accountability and realistic timelines.',
        'The Result: An argument that convinces both the logical mind (facts) and the moral conscience (values).'
      ],
      keyTakeaway: 'Ground your policies in empirical reality and human values to create proposals that inspire real-world action.',
      sourceCitation: 'Textbook Section 9.6 (pp. 132–134)'
    }
  },

  // SLIDE 18: Unit 9 Master Summary
  {
    id: 'u9-s18',
    unitNumber: 9,
    slideNumber: 18,
    title: 'Unit 9 Master Summary',
    section: '9.6 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the Tri-Claim model and hedging strategies. Remind students: "Every sentence in your essays is either a Fact, a Value, or a Policy!"',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.6',
      pages: '133–134'
    },
    content: {
      heading: 'Mastering Claims and Assertions',
      subheading: 'Key takeaways from Unit 9: Claims',
      body: 'You now command the conceptual taxonomy and diagnostic tools to evaluate and construct justified academic claims.',
      bullets: [
        '1. The Tri-Claim Framework: Distinguish Claims of Fact (what is), Claims of Value (what is good/just), and Claims of Policy (what should be done).',
        '2. Explicit vs. Implicit: Look beneath the surface text to unmask hidden ideological assumptions and commercial subtext.',
        '3. Justification Standards: Demand adequate empirical evidence, sound warrants, and proportional scope.',
        '4. Scholarly Hedging: Avoid fragile absolutes (always, never); use nuanced modal phrasing (likely, suggests, in observed contexts).',
        '5. Value Rigor: Recognize that Claims of Value are not mere taste; they can be rationally defended through ethical criteria.'
      ],
      keyTakeaway: 'Claims are the building blocks of conviction. Build them with facts, shape them with values, and test them with evidence.',
      sourceCitation: 'Textbook Section 9.6 (pp. 133–134)'
    }
  },

  // SLIDE 19: Final Exit Challenge
  {
    id: 'u9-s19',
    unitNumber: 9,
    slideNumber: 19,
    title: 'Unit 9 Exit Challenge',
    section: '9.6 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students audit this real-world civic campaign quote for its underlying claim structure.',
    sourceRef: {
      unit: 'Unit 9',
      section: '9.6',
      pages: '134'
    },
    content: {
      heading: 'Exit Claims Challenge: Campaign Speech Audit',
      body: 'A youth activist proclaims:\n"Childhood malnutrition stunts 21% of our nation\'s toddlers [Sentence 1]. Allowing young children to suffer permanent brain impairment when our nation has agricultural surpluses is a profound moral failure [Sentence 2]. The national parliament must reallocate 2% of the military budget to universal child nutrition subsidies [Sentence 3]."\n\nHow is this argument structurally composed across the Tri-Claim model?',
      interactiveData: {
        prompt: 'Which sequence accurately maps Sentence 1, Sentence 2, and Sentence 3 to the Tri-Claim model?',
        options: [
          {
            id: 'opt-1',
            label: 'Sentence 1 = Value, Sentence 2 = Policy, Sentence 3 = Fact.',
            explanation: 'Incorrect. Sentence 1 presents statistical percentages (Fact), not an ethical judgment.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Sentence 1 = Claim of Fact; Sentence 2 = Claim of Value; Sentence 3 = Claim of Policy.',
            explanation: 'Correct! Sentence 1 asserts a measurable empirical condition (21% stunting = Fact); Sentence 2 makes an ethical condemnation of moral failure (Value); and Sentence 3 demands a specific legislative budgetary action ("must reallocate" = Policy).',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'All three sentences are Claims of Fact because malnutrition is real.',
            explanation: 'Incorrect. Malnutrition is real, but Sentence 2 is an ethical judgment of moral failure and Sentence 3 is a legislative policy demand.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'The most persuasive arguments integrate all three: establish the Facts, affirm the Values, and demand the Policy.',
      sourceCitation: 'Textbook Section 9.6 (p. 134)'
    }
  }
];
