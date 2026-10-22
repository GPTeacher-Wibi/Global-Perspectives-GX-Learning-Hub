import { Slide } from '../../types/curriculum';

/**
 * Unit 10: Drawing Conclusions — Master Instructional Presentation Deck (Remediated Curriculum)
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 132–144)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_10_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Core Objectives
  {
    id: 'u10-s1',
    unitNumber: 10,
    slideNumber: 1,
    title: 'Unit 10: Drawing Conclusions',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Ask students: "If you conduct 8 weeks of brilliant research, but your final conclusion is vague or contradicts your data, what happens to your findings?" Emphasize that a conclusion is the intellectual summit of the entire inquiry.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.1',
      pages: '132–133'
    },
    content: {
      heading: 'The Culmination of Academic Inquiry',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'You have traveled through the entire research cycle: exploring diverse perspectives, formulating questions, gathering primary and secondary data, calculating statistics, synthesizing findings, and evaluating claims.\n\nNow comes the decisive moment: Drawing Conclusions.\n\nA conclusion is not a casual repetition of earlier paragraphs. It is an evidence-based judgment that formally resolves your research question, evaluates your hypothesis, and explains what your findings mean for the real world.',
      bullets: [
        'Objective 1: Understand the nature of conclusions and determine whether a hypothesis is Supported, Refuted, or Modified.',
        'Objective 2: Master the 5-Step Conclusion Builder Matrix to construct disciplined, evidence-based endings.',
        'Objective 3: Evaluate conclusion validity by distinguishing between Internal Validity (accuracy within the study) and External Validity (generalisability to the world).',
        'Objective 4: Eliminate the 4 fatal conclusion defects, acknowledge research limitations with scholarly humility, and formulate actionable recommendations.'
      ],
      keyTakeaway: 'A conclusion is not a summary; it is the ultimate evidence-based answer to your central research inquiry.',
      sourceCitation: 'Textbook Section 10.1 (pp. 132–133)'
    }
  },

  // SLIDE 2: Defining an Academic Conclusion
  {
    id: 'u10-s2',
    unitNumber: 10,
    slideNumber: 2,
    title: '10.1 What is a Conclusion?',
    section: 'Academic Definition',
    type: 'definition',
    teacherNote: 'Contrast "Summary" (backward-looking mechanical list) with "Conclusion" (forward-looking synthesis and judgment). The conclusion must resolve the tension raised in the introduction.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.1',
      pages: '132–134'
    },
    content: {
      heading: 'Resolution, Judgment, and Significance',
      subheading: 'Moving beyond passive repetition to higher-order synthesis',
      body: 'In Cambridge Global Perspectives, drawing conclusions is defined as the process of synthesizing analyzed evidence and logical arguments to formulate a reasoned judgment that answers the research question.\n\nIt answers the vital question that every reader and policy-maker asks: "So what? Why do these findings matter, and what truth has been discovered?"',
      comparison: {
        itemA: {
          label: 'What a Conclusion is NOT',
          points: [
            '❌ A robotic copy-paste of previous topic sentences.',
            '❌ An emotional diary entry full of personal wishful thinking.',
            '❌ A dumping ground for surprise statistics never mentioned in the body.',
            '❌ A dogmatic claim that you solved every world problem with zero flaws.'
          ]
        },
        itemB: {
          label: 'What a Conclusion IS',
          points: [
            '✅ A direct, nuanced answer to the central research question.',
            '✅ An explicit evaluation of the study\'s initial hypothesis.',
            '✅ An honest appraisal of internal and external validity.',
            '✅ A practical roadmap offering targeted recommendations for action.'
          ]
        }
      },
      keyTakeaway: 'A great conclusion leaves the reader with a clear answer, a deep insight, and a call to meaningful action.',
      sourceCitation: 'Textbook Section 10.1 (pp. 132–134)'
    }
  },

  // SLIDE 3: The Three Structural Pillars (Instructional Strategy)
  {
    id: 'u10-s3',
    unitNumber: 10,
    slideNumber: 3,
    title: 'Three Structural Pillars',
    section: 'Instructional Framework',
    type: 'concept',
    teacherNote: 'Clarify for students: This 3-Pillar model is our instructional strategy to ensure no required Cambridge element is forgotten. Pillar 1: Direct Answer, Pillar 2: Synthesis & Validity, Pillar 3: Real-world Action.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.1',
      pages: '133–135'
    },
    content: {
      heading: 'The Three Structural Pillars of a Conclusion',
      subheading: 'An instructional architecture for comprehensive academic endings',
      body: 'To ensure your conclusion meets Cambridge assessment standards without gaps, follow this 3-Pillar instructional framework:\n\nIf any one of these pillars is omitted, the conclusion remains incomplete:',
      bullets: [
        'Pillar 1 — Direct Answer & Hypothesis Evaluation: Explicitly resolve the central question and declare whether the hypothesis was supported, refuted, or modified.',
        'Pillar 2 — Evidence Synthesis & Validity Assessment: Weave analyzed primary and secondary findings into a unified narrative while evaluating internal and external validity.',
        'Pillar 3 — Actionable Implications & Limitations: State concrete, stakeholder-targeted recommendations and transparently acknowledge the study\'s methodological boundaries.'
      ],
      keyTakeaway: 'Every complete conclusion must: (1) Answer the inquiry, (2) Synthesize evidence & validity, and (3) Propose actionable next steps.',
      sourceCitation: 'Instructional Framework based on Section 10.1 (pp. 133–135)'
    }
  },

  // SLIDE 4: Hypotheses and Conclusions: The Three Outcomes
  {
    id: 'u10-s4',
    unitNumber: 10,
    slideNumber: 4,
    title: '10.2 Hypotheses and Conclusions',
    section: 'Inquiry Verification',
    type: 'concept',
    teacherNote: 'Emphasize: In Unit 2, students learned to formulate testable hypotheses. Now, in Unit 10, the conclusion must formally reconcile that prediction with empirical reality.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.2',
      pages: '134–136'
    },
    content: {
      heading: 'Reconciling Predictions with Empirical Reality',
      subheading: 'The three possible relationships between an initial hypothesis and your final data',
      body: 'In Unit 2, we defined a hypothesis as a testable prediction about the relationship between two or more variables.\n\nWhen you reach the conclusion, you must evaluate your hypothesis against your synthesized data. There are exactly three scientific outcomes:',
      bullets: [
        '1. Supported Hypothesis: The empirical evidence confirms the initial prediction (e.g., data proves that interactive quizzes increased test scores by 22%).',
        '2. Refuted (Disproven) Hypothesis: The empirical evidence contradicts the initial prediction (e.g., data reveals that students using the quiz app scored 5% lower due to smartphone distractions).',
        '3. Modified Hypothesis: The evidence reveals that the prediction was true only under certain conditions, requiring the researcher to adjust variables or add qualifiers (e.g., quizzes improved scores only for students who studied in the morning, but not at night).'
      ],
      keyTakeaway: 'A conclusion must explicitly state whether the hypothesis was supported, refuted, or modified based on the evidence.',
      sourceCitation: 'Textbook Section 10.2 (pp. 134–136)'
    }
  },

  // SLIDE 5: Misconception: Refuted Hypothesis ≠ Failure
  {
    id: 'u10-s5',
    unitNumber: 10,
    slideNumber: 5,
    title: 'Misconception: Refutation ≠ Failure',
    section: '10.2 Scientific Integrity',
    type: 'misconception',
    teacherNote: 'Highlight Thomas Edison: "I have not failed 10,000 times. I have successfully found 10,000 ways that will not work." Disproving a false belief is just as valuable to humanity as confirming a true one.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.2',
      pages: '135–136'
    },
    content: {
      heading: '"If My Data Disproves My Hypothesis, My Project Failed"',
      subheading: 'Why disproving a hypothesis is a major scientific triumph',
      body: 'Many high school students believe that if their survey or experiment contradicts their hypothesis, they will receive a low grade. Some students even falsify data to make their prediction look correct!\n\nThis is a grave ethical and academic misconception. In authentic science, disproving a hypothesis is a successful discovery.',
      comparison: {
        itemA: {
          label: 'The Novice Misconception',
          points: [
            '"My hypothesis predicted solar panels would cut school energy costs by 50%. The data showed only a 10% cut."',
            'Mistake: "I am a failure. I will hide the numbers so my teacher thinks I was right."',
            'Academic Consequence: Academic dishonesty, loss of credibility, and zero learning.'
          ]
        },
        itemB: {
          label: 'The Scientific Scholar',
          points: [
            '"The data refuted my 50% hypothesis, revealing that seasonal cloud cover and dust accumulation on panels severely limit output."',
            'Insight: Disproving the hypothesis uncovered critical maintenance barriers that engineers must now solve.',
            'Academic Consequence: High marks for critical honesty and scientific rigor.'
          ]
        }
      },
      keyTakeaway: 'Falsifying an incorrect hypothesis protects society from wasted resources and expands scientific knowledge.',
      sourceCitation: 'Textbook Section 10.2 (pp. 135–136)'
    }
  },

  // SLIDE 6: Active Checkpoint 1: Hypothesis Outcome Audit
  {
    id: 'u10-s6',
    unitNumber: 10,
    slideNumber: 6,
    title: 'Checkpoint: Hypothesis Outcomes',
    section: '10.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Guide students: Did the data confirm the prediction, contradict it, or show that it only works under specific conditions?',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.2',
      pages: '134–136'
    },
    content: {
      heading: 'Inquiry Evaluation Challenge: Smartphone Ban Impact',
      body: 'A student researcher formulated this hypothesis: "Banning smartphones during lunch breaks will increase face-to-face peer conversations among Grade 10 students."\n\nAfter 4 weeks of cafeteria observation, the data showed: Face-to-face conversations did NOT increase; instead, students brought personal laptops or silently read manga alone.\n\nHow should the researcher classify this outcome in their conclusion?',
      interactiveData: {
        prompt: 'Which classification correctly describes the relationship between the hypothesis and findings?',
        options: [
          {
            id: 'opt-1',
            label: 'The hypothesis was supported, because students stopped using smartphones.',
            explanation: 'Incorrect. The hypothesis specifically predicted an increase in face-to-face peer conversations, which did not occur.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'The hypothesis was refuted (disproven), because removing phones did not cause students to talk to each other more.',
            explanation: 'Correct! The empirical evidence contradicted the predicted relationship: eliminating phones did not stimulate conversation; students simply shifted to laptops or solo reading.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'The research project is ruined and the student must delete all observations and start over.',
            explanation: 'Incorrect. Disproving the hypothesis is a valuable finding revealing that screen bans alone do not automatically build social connectivity.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'When evidence contradicts your prediction, report the refuted hypothesis with honesty and analyze why the expected outcome did not occur.',
      sourceCitation: 'Textbook Section 10.2 (pp. 134–136)'
    }
  },

  // SLIDE 7: The Conclusion Builder Matrix
  {
    id: 'u10-s7',
    unitNumber: 10,
    slideNumber: 7,
    title: '10.3 Conclusion Builder Matrix',
    section: 'Methodological Framework',
    type: 'concept',
    teacherNote: 'Introduce the textbook\'s 5-step Conclusion Builder Matrix. Have students copy the 5 headers into their research notebooks as their master writing template.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.3',
      pages: '136–138'
    },
    content: {
      heading: 'The 5-Step Conclusion Builder Matrix',
      subheading: 'A disciplined, step-by-step matrix for constructing scholarly conclusions',
      body: 'The textbook provides a structured 5-step tool called the Conclusion Builder Matrix. It guides researchers from raw findings to an unshakeable, evidence-backed conclusion:',
      bullets: [
        'Step 1: State the Research Question & Initial Hypothesis — Re-anchor the reader to the original puzzle.',
        'Step 2: Synthesize Primary & Secondary Evidence — Summarize key empirical numbers and qualitative patterns across sources.',
        'Step 3: Evaluate Internal and External Validity — Test whether findings are free from internal bias and whether they apply to other settings.',
        'Step 4: Formulate the Nuanced Answer (with Modality & Boundaries) — Provide the calibrated answer using appropriate hedging.',
        'Step 5: Articulate Limitations & Actionable Recommendations — Specify real-world stakeholder actions and transparently state what remains unknown.'
      ],
      keyTakeaway: 'The Conclusion Builder Matrix ensures that every conclusion is grounded in evidence, validated for rigor, and connected to action.',
      sourceCitation: 'Textbook Section 10.3 (pp. 136–138)'
    }
  },

  // SLIDE 8: Matrix Steps 1 & 2: Evidence Synthesis
  {
    id: 'u10-s8',
    unitNumber: 10,
    slideNumber: 8,
    title: 'Matrix Steps 1 & 2: Synthesis',
    section: '10.3 Matrix Deep-Dive',
    type: 'concept',
    teacherNote: 'Connect back to Unit 4 (Synthesis Matrix) and Unit 8 (Evidence). The conclusion must draw from BOTH primary data (student surveys) and secondary sources (academic journals, BPS data).',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.3',
      pages: '137–138'
    },
    content: {
      heading: 'Grounding Your Answer in Synthesized Evidence',
      subheading: 'Connecting Step 1 (Question & Hypothesis) to Step 2 (Evidence Synthesis)',
      body: 'A conclusion must never rely on memory or casual impressions. Step 2 of the Matrix requires synthesizing primary and secondary evidence collected across previous units:',
      example: {
        title: 'Matrix Steps 1 & 2 in Action: Urban Commute Study',
        scenario: '• Step 1 (Inquiry & Hypothesis): "To what extent does dedicated bus lane enforcement reduce commute times for South Jakarta students? (Hypothesis: Reduces commute times by at least 25%)."\n\n• Step 2 (Evidence Synthesis):\n  - Primary Data: Student GPS tracking logs recorded an average commute drop from 52 minutes to 41 minutes (a 21.1% reduction).\n  - Secondary Data: Jakarta Transportation Department (Dishub) traffic reports confirmed a 24% increase in bus speeds along Corridor 1.\n  - Synthesis: Both primary student logs and secondary municipal telemetry align, demonstrating a consistent 21–24% speed improvement.',
        takeaway: 'Notice how synthesizing primary and secondary data creates an unshakeable evidentiary base.'
      },
      keyTakeaway: 'Triangulating primary student data with secondary institutional reports establishes strong evidentiary credibility.',
      sourceCitation: 'Textbook Section 10.3 (pp. 137–138)'
    }
  },

  // SLIDE 9: Matrix Step 3: Internal vs. External Validity
  {
    id: 'u10-s9',
    unitNumber: 10,
    slideNumber: 9,
    title: '10.4 Internal vs. External Validity',
    section: 'Validity & Rigor',
    type: 'comparison',
    teacherNote: 'Use the "Lab vs. Real World" distinction. Internal validity = Did we measure the cause accurately without confounding variables? External validity = Does it work outside our small testing room?',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.4',
      pages: '138–140'
    },
    content: {
      heading: 'Evaluating Research Validity Before Concluding',
      subheading: 'Step 3 of the Matrix: Determining how trustworthy and generalisable your findings are',
      body: 'Before declaring an answer, rigorous researchers evaluate the validity of their inquiry. The textbook divides validity into two foundational dimensions:',
      comparison: {
        itemA: {
          label: 'Internal Validity (Trustworthiness Within)',
          points: [
            'Core Question: "Are our findings accurate and free from confounding bias within the study itself?"',
            'Focus: Did Variable A truly cause the outcome, or did an uncontrolled third variable distort the results?',
            'Threats: Measurement errors, leading survey questions, participant attrition, researcher bias.',
            'Goal: High confidence that the observed effect was genuine in your sample.'
          ]
        },
        itemB: {
          label: 'External Validity (Generalisability Beyond)',
          points: [
            'Core Question: "Can these findings be generalized or transferred to other people, settings, and times?"',
            'Focus: Does a finding from 40 students in one Jakarta school apply to rural schools in Kalimantan or Sumatra?',
            'Threats: Unrepresentative sample, unique local culture, artificial testing conditions.',
            'Goal: Clear awareness of the boundaries of transferability.'
          ]
        }
      },
      keyTakeaway: 'Internal validity proves your findings are true for your sample; external validity tests whether they apply to the wider world.',
      sourceCitation: 'Textbook Section 10.4 (pp. 138–140)'
    }
  },

  // SLIDE 10: Generalisability & Transferability
  {
    id: 'u10-s10',
    unitNumber: 10,
    slideNumber: 10,
    title: 'Generalisability & Transferability',
    section: '10.4 External Validity Deep-Dive',
    type: 'concept',
    teacherNote: 'Explain: Quantitative studies aim for "Generalisability" through statistical sampling. Qualitative studies aim for "Transferability" through rich contextual descriptions.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.4',
      pages: '139–141'
    },
    content: {
      heading: 'How Far Can Your Conclusions Travel?',
      subheading: 'Understanding the legitimate geographic and demographic scope of your findings',
      body: 'When drawing a conclusion, you must clearly define its scope. Do your findings apply universally, or only within specific contextual boundaries?',
      bullets: [
        'Statistical Generalisability (Quantitative): The degree to which numerical results from a sample accurately represent the broader target population. Requires random, representative sampling.',
        'Contextual Transferability (Qualitative): The degree to which rich qualitative findings and themes can be meaningfully applied to another similar community or cultural setting.',
        'The Ecological Fallacy: Falsely assuming that an average trend observed in a large national population automatically applies to every individual community member.',
        'The Boundary Rule: Always specify the demographic group, geographic location, and time period to which your conclusion legitimately applies.'
      ],
      keyTakeaway: 'Responsible scholars never claim universal truth when their evidence only represents a localized context.',
      sourceCitation: 'Textbook Section 10.4 (pp. 139–141)'
    }
  },

  // SLIDE 11: Verifying Conclusions: Triangulation & Peer Review
  {
    id: 'u10-s11',
    unitNumber: 10,
    slideNumber: 11,
    title: 'Triangulation & Peer Review',
    section: '10.4 Verification Protocols',
    type: 'concept',
    teacherNote: 'Triangulation is like GPS: Your phone needs signals from 3 satellites to pinpoint your location accurately. One satellite gives a blurry circle; three satellites give precise coordinates.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.4',
      pages: '140–142'
    },
    content: {
      heading: 'Protecting Conclusions from Bias and Blind Spots',
      subheading: 'Two essential scientific safeguards taught in Cambridge inquiry',
      body: 'How does an academic researcher ensure that their conclusion is not just personal prejudice in disguise?\nThe textbook highlights two gold-standard verification protocols:',
      bullets: [
        'Methodological Triangulation: Cross-verifying findings by combining at least three distinct sources or methods (e.g., student survey data + teacher interviews + official municipal statistics). If all three point in the same direction, conclusion confidence is high.',
        'Perspective Triangulation: Testing conclusions against competing lenses (Cultural, Economic, Political, Social) from Unit 1 to ensure balanced neutrality.',
        'Peer Review Protocol: Submitting draft findings to independent peers or academic mentors before finalizing conclusions. Peer reviewers critically scrutinize data for hidden assumptions, calculation errors, or unjustified leaps.'
      ],
      keyTakeaway: 'Triangulation confirms evidence across independent lines of inquiry; peer review eliminates unexamined personal blind spots.',
      sourceCitation: 'Textbook Section 10.4 (pp. 140–142)'
    }
  },

  // SLIDE 12: Active Checkpoint 2: Validity & Generalisability Audit
  {
    id: 'u10-s12',
    unitNumber: 10,
    slideNumber: 12,
    title: 'Checkpoint: Validity Audit',
    section: '10.4 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze: The testing method was very strict and controlled (high internal validity), but the sample was limited to one elite classroom (low external validity).',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.4',
      pages: '138–142'
    },
    content: {
      heading: 'Validity Diagnostic Challenge: The Virtual Lab Study',
      body: 'A student tests a new virtual biology simulation in an air-conditioned private school computer lab with 25 honors students. Under strict supervision, all 25 students score 100% on the post-test.\n\nThe student concludes: "This software is guaranteed to boost biology exam scores for every high school student across Indonesia."\n\nHow should an academic examiner evaluate this conclusion\'s validity?',
      interactiveData: {
        prompt: 'Which evaluation of internal and external validity is accurate?',
        options: [
          {
            id: 'opt-1',
            label: 'The study has high external validity because 100% is a perfect score.',
            explanation: 'Incorrect. A high score in one classroom does not prove the finding applies to schools with limited computers, unstable electricity, or different student backgrounds.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'The study has strong internal validity in that lab, but low external validity (generalisability) across diverse Indonesian schools.',
            explanation: 'Correct! The study controlled conditions well inside the private lab (internal validity), but 25 honors students in an elite school cannot represent 5 million diverse students nationwide with varying device access and teacher support (weak external validity).',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'The study has zero validity of any kind and the simulation should be banned.',
            explanation: 'Incorrect. The simulation worked well in that specific setting; the error lies only in making an overreaching claim of national generalisability.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Never confuse high internal success in a controlled setting with universal external generalisability across the real world.',
      sourceCitation: 'Textbook Section 10.4 (pp. 138–142)'
    }
  },

  // SLIDE 13: Four Fatal Conclusion Defects Overview
  {
    id: 'u10-s13',
    unitNumber: 10,
    slideNumber: 13,
    title: '10.5 Four Fatal Conclusion Defects',
    section: 'Common Pitfalls',
    type: 'concept',
    teacherNote: 'Review these 4 traps carefully. Have students raise their hands if they have ever committed one of these in an essay!',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.5',
      pages: '141–143'
    },
    content: {
      heading: 'The Four Traps that Ruin Student Conclusions',
      subheading: 'Recognizing and eliminating chronic mistakes in final chapters',
      body: 'Cambridge examiners report that otherwise brilliant student portfolios frequently lose top marks in the final 300 words due to four predictable defects:\n\nLearning to identify these four defects ensures your conclusion remains disciplined and academically bulletproof:',
      bullets: [
        'Defect 1: The Sudden Miracle Fact — Introducing brand new evidence or statistics for the first time in the conclusion.',
        'Defect 2: The Mechanical Copy-Paste — Paraphrasing topic sentences from earlier paragraphs without higher-order synthesis.',
        'Defect 3: The Overreaching Leap — Making grand, universal claims that far exceed what your small sample size proved.',
        'Defect 4: The Wishful Thinking Ending — Ending with emotional preaching, moral sermons, and hopes rather than evidence-based realities.'
      ],
      keyTakeaway: 'Protect your final chapter: Never introduce new facts, avoid robotic copying, curb overreach, and eliminate emotional preaching.',
      sourceCitation: 'Textbook Section 10.5 (pp. 141–143)'
    }
  },

  // SLIDE 14: Defect Deep-Dive 1 & 2: Sudden Facts & Copy-Paste
  {
    id: 'u10-s14',
    unitNumber: 10,
    slideNumber: 14,
    title: 'Defects 1 & 2: Sudden Facts & Copy-Paste',
    section: '10.5 Defect Deep-Dive',
    type: 'comparison',
    teacherNote: 'Analogy: A murder mystery movie where the detective reveals a killer who was never introduced in the film! In academic writing, zero new evidence belongs in the conclusion.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.5',
      pages: '141–142'
    },
    content: {
      heading: 'Eliminating Sudden Facts and Robotic Summaries',
      subheading: 'Why timing and cognitive synthesis separate amateur essays from scholarship',
      body: 'Examine why Defects 1 and 2 undermine academic credibility:',
      comparison: {
        itemA: {
          label: 'Defect 1: The Sudden Miracle Fact',
          points: [
            'Violation: Dropping a brand-new statistic into the conclusion that was never analyzed in the body.',
            'Why it Fails: The reader cannot check its methodology, CRAAP score, or context.',
            'The Golden Rule: If a fact is important enough for your conclusion, move it to the body paragraphs and analyze it properly.'
          ]
        },
        itemB: {
          label: 'Defect 2: The Mechanical Copy-Paste',
          points: [
            'Violation: "In Section 1 I showed X. In Section 2 I showed Y. In Section 3 I showed Z."',
            'Why it Fails: Readers have memories! Repeating body sentences with synonyms demonstrates zero higher-order synthesis.',
            'The Solution: Connect the dots between sections to show the overarching systemic insight.'
          ]
        }
      },
      keyTakeaway: 'The conclusion is strictly for synthesis and judgment; never introduce new facts or mechanically restate past paragraphs.',
      sourceCitation: 'Textbook Section 10.5 (pp. 141–142)'
    }
  },

  // SLIDE 15: Defect Deep-Dive 3 & 4: Overreach & Wishful Thinking
  {
    id: 'u10-s15',
    unitNumber: 10,
    slideNumber: 15,
    title: 'Defects 3 & 4: Overreach & Wishful Thinking',
    section: '10.5 Defect Deep-Dive',
    type: 'comparison',
    teacherNote: 'Connect Defect 3 to Unit 9 (Academic Hedging/Modality). Connect Defect 4 to Policy Recommendations: Research demands concrete institutional mechanisms, not sermons.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.5',
      pages: '142–143'
    },
    content: {
      heading: 'Curbing Overreach and Emotional Platitudes',
      subheading: 'Aligning claim boldness with sample size and grounding recommendations in policy',
      body: 'Examine how Defect 3 and Defect 4 damage the scholarly weight of your conclusion:',
      comparison: {
        itemA: {
          label: 'Defect 3: The Overreaching Leap',
          points: [
            'Violation: Surveying 30 school peers and concluding: "All 280 million Indonesians prefer electric motorbikes."',
            'Why it Fails: Violates external validity and commits a hasty generalization fallacy.',
            'The Solution: Calibrate your language using academic modality: "Among the 30 surveyed students, findings suggest a localized preference worthy of broader study."'
          ]
        },
        itemB: {
          label: 'Defect 4: Wishful Thinking Preaching',
          points: [
            'Violation: "If everyone just opens their hearts and loves Mother Earth, pollution will vanish forever."',
            'Why it Fails: Emotional moralizing ignores economic realities, infrastructure gaps, and enforcement.',
            'The Solution: Ground endings in concrete institutional mechanisms, municipal levies, and community sorting hubs.'
          ]
        }
      },
      keyTakeaway: 'Keep your claims proportional to your sample size and replace emotional preaching with feasible policy mechanisms.',
      sourceCitation: 'Textbook Section 10.5 (pp. 142–143)'
    }
  },

  // SLIDE 16: Transparently Acknowledging Limitations
  {
    id: 'u10-s16',
    unitNumber: 10,
    slideNumber: 16,
    title: '10.6 Acknowledging Limitations',
    section: 'Scholarly Humility & Rigor',
    type: 'concept',
    teacherNote: 'Emphasize that the Cambridge rubric explicitly awards marks for "Evaluation of Limitations". Students who honestly evaluate their flaws get HIGHER grades than students who pretend to be perfect!',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.6',
      pages: '142–144'
    },
    content: {
      heading: 'The Mark of Maturity: Research Limitations',
      subheading: 'Why true scholars transparently articulate what their study could not prove',
      body: 'Every research study in the world has boundaries and weaknesses—even multi-million dollar international trials!\n\nTransparently articulating your study\'s limitations demonstrates intellectual honesty, critical self-awareness, and methodological rigor:\n\nFour standard categories of research limitations to evaluate in your conclusion:',
      bullets: [
        '1. Sample Boundaries: Acknowledge if your sample was small (e.g., 45 students) or skewed toward one demographic (e.g., only urban private school peers).',
        '2. Temporal Constraints: Acknowledge that a 4-week school project cannot track 10-year longitudinal behavioral impacts.',
        '3. Methodological Barriers: Did bad weather cancel field observations? Did an institutional official decline an interview?',
        '4. Self-Report Bias: Recognize that survey participants sometimes give socially desirable answers rather than admitting bad habits.',
        'Scholarly Framing: Articulating limitations does not weaken your paper; it proves to Cambridge examiners that you understand the scientific method.'
      ],
      keyTakeaway: 'Admitting your limitations is not a confession of failure; it is the ultimate proof of academic maturity.',
      sourceCitation: 'Textbook Section 10.6 (pp. 142–144)'
    }
  },

  // SLIDE 17: Misconception: The "Perfection" Myth
  {
    id: 'u10-s17',
    unitNumber: 10,
    slideNumber: 17,
    title: 'Misconception: The Perfection Trap',
    section: '10.6 Assessment Integrity',
    type: 'misconception',
    teacherNote: 'Remind students of the Cambridge Grade 10 mark scheme: Assessment Objective 3 specifically evaluates the candidate\'s ability to reflect critically on limitations.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.6',
      pages: '143–144'
    },
    content: {
      heading: '"If I Admit My Study Has Flaws, My Grade Will Suffer"',
      subheading: 'Why claiming your project was 100% flawless guarantees lower marks',
      body: 'Many high school students believe that academic writing is a competition to look invincible. They hide missing data and pretend their tiny classroom survey proved a universal law.\n\nCambridge examiners are seasoned researchers who know that no student project is flawless. Hiding limitations proves you lack critical evaluation skills!',
      comparison: {
        itemA: {
          label: 'The Arrogant Student (Low Score)',
          points: [
            '"My research had zero flaws and proved everything with 100% absolute perfection."',
            'Examiner Reaction: "The candidate lacks critical self-reflection and fails to recognize obvious sampling bias. Score: Level 2."',
            'Outcome: Disappointing grade.'
          ]
        },
        itemB: {
          label: 'The Critical Scholar (Top Score)',
          points: [
            '"While our survey illuminated student attitudes, the sample was restricted to Grade 10 private school peers, meaning rural public school dynamics require dedicated comparative study."',
            'Examiner Reaction: "Outstanding critical self-awareness and insightful evaluation of boundaries! Score: Level 5."',
            'Outcome: Top band marks.'
          ]
        }
      },
      keyTakeaway: 'Cambridge rewards honest, critical self-evaluation of limitations, not fictional claims of perfection.',
      sourceCitation: 'Textbook Section 10.6 (pp. 143–144)'
    }
  },

  // SLIDE 18: Formulating Actionable Recommendations
  {
    id: 'u10-s18',
    unitNumber: 10,
    slideNumber: 18,
    title: '10.7 Actionable Recommendations',
    section: 'Prescriptive Impact',
    type: 'comparison',
    teacherNote: 'Teach the "Who, What, How" formula for recommendations. Never write "Society should be better." Specify the exact actor and concrete action.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.7',
      pages: '143–144'
    },
    content: {
      heading: 'Crafting Recommendations That Actually Work',
      subheading: 'How to transition from empirical findings to targeted, feasible intervention',
      body: 'Pillar 3 requires you to formulate recommendations based on your findings. To be academically valid, recommendations must be actionable, targeted, and feasible:',
      comparison: {
        itemA: {
          label: 'Vague Platitudes (Unusable)',
          points: [
            '❌ "People should care more about mental health."',
            '❌ "The government should fix all schools immediately."',
            '❌ "Society must stop being lazy and recycle."',
            'Flaw: No designated actor, zero operational steps, unmeasurable, and impossible to implement.'
          ]
        },
        itemB: {
          label: 'Actionable & Targeted (Professional)',
          points: [
            '✅ "The School Principal should designate a mandatory 15-minute quiet mindfulness break during Wednesday homeroom."',
            '✅ "The Municipal Sanitation Agency should pilot 5 color-coded sorting bins in Pasar Senen by March 2025."',
            'Strength: Identifies the exact stakeholder, exact action, and measurable timeframe.'
          ]
        }
      },
      keyTakeaway: 'Every recommendation must name a specific stakeholder, a concrete action, and a realistic timeframe.',
      sourceCitation: 'Textbook Section 10.7 (pp. 143–144)'
    }
  },

  // SLIDE 19: Active Checkpoint 3: Recommendation Quality Audit
  {
    id: 'u10-s19',
    unitNumber: 10,
    slideNumber: 19,
    title: 'Checkpoint: Recommendation Audit',
    section: '10.7 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students evaluate which recommendation provides a realistic, targeted, and actionable path forward.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.7',
      pages: '143–144'
    },
    content: {
      heading: 'Evaluating Policy Recommendations: Cafeteria Food Waste',
      body: 'After completing a research report on student food waste in their school cafeteria, three students propose different concluding recommendations.\n\nWhich recommendation satisfies the criteria for an actionable, targeted, and feasible academic proposal?',
      interactiveData: {
        prompt: 'Which recommendation provides a professionally structured, targeted path to action?',
        options: [
          {
            id: 'opt-1',
            label: '"World leaders must pass a global treaty to ban all cafeteria food waste worldwide by tomorrow."',
            explanation: 'Incorrect. This is absurdly unrealistic, overreaching, and completely beyond the scope or power of a school cafeteria project.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: '"The School Canteen Committee should introduce \'Half-Portion\' meal options at a 30% price discount starting next semester, monitored weekly by student council volunteers."',
            explanation: 'Correct! This is targeted (School Canteen Committee), concrete (half-portion options at 30% discount), feasible, time-bound (next semester), and includes monitoring mechanisms.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: '"Everyone should just eat all their vegetables because wasting food is a sin."',
            explanation: 'Incorrect. This is emotional moral preaching rather than an actionable, structured institutional policy.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Targeted institutional recommendations transform research insights into measurable school and community improvements.',
      sourceCitation: 'Textbook Section 10.7 (pp. 143–144)'
    }
  },

  // SLIDE 20: Metacognitive Reflection & Personal Perspective Growth
  {
    id: 'u10-s20',
    unitNumber: 10,
    slideNumber: 20,
    title: '10.8 Metacognitive Reflection',
    section: 'Personal Growth & Evolution',
    type: 'concept',
    teacherNote: 'Connect directly back to Unit 1 (Understanding Perspectives). The ultimate goal of Global Perspectives is personal cognitive transformation.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.8',
      pages: '143–144'
    },
    content: {
      heading: 'The Full Circle: How Your Perspective Changed',
      subheading: 'Connecting the end of your inquiry back to Unit 1: Understanding Perspectives',
      body: 'In Cambridge Global Perspectives, research is not an impersonal, robotic exercise. It is a transformative personal journey.\n\nIn your final reflection, you must answer: "How did researching other people\'s perspectives and empirical data transform my own original perspective?"',
      bullets: [
        'Before the Study: "I entered this research believing that street food vendors were simply careless polluters who didn\'t care about the environment."',
        'During Fieldwork: "Interviewing vendors revealed that single-use plastic bags cost 50% less than banana leaves, and that municipal compost collection does not exist in their alley."',
        'After the Study (Transformed Perspective): "I now understand that vendor behavior is shaped by economic survival and infrastructure gaps, not moral apathy. My perspective shifted from blaming individuals to advocating for systemic municipal waste subsidies."',
        'The Cambridge Standard: This deep, honest reflection on personal perspective evolution earns the highest marks in your assessment.'
      ],
      keyTakeaway: 'The true triumph of research is when empirical evidence deepens and matures your own worldview.',
      sourceCitation: 'Textbook Section 10.8 (pp. 143–144)'
    }
  },

  // SLIDE 21: Applied Case Study: Coastal Mangrove Conservation
  {
    id: 'u10-s21',
    unitNumber: 10,
    slideNumber: 21,
    title: 'Case Study: The Mangrove Report',
    section: '10.8 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through how this Grade 10 student achieved top Cambridge marks by evaluating hypothesis outcomes, assessing validity, acknowledging limitations, and reflecting on personal growth.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.8',
      pages: '142–144'
    },
    content: {
      heading: 'A Complete Cambridge Individual Report Conclusion',
      subheading: 'Deconstructing an exemplar Grade 10 conclusion on coastal mangroves',
      body: 'Observe how a student scholar weaves all elements of Unit 10 into a cohesive final section:',
      example: {
        title: 'Exemplar Mangrove Conclusion Breakdown',
        scenario: '1. Hypothesis Evaluation & Direct Answer: "The initial hypothesis that eco-tourism guarantees 100% mangrove survival was modified: findings demonstrate that eco-tourism preserves North Jakarta mangroves to a moderate extent (60% canopy survival), balancing economic livelihood with environmental protection.\n2. Synthesis & Triangulation: Primary drone canopy surveys aligned with secondary Maritime Ministry telemetry, confirming that boardwalk construction damaged 8 hectares of root zones despite raising fisherman tour revenue by 25%.\n3. Validity Evaluation: Internal validity was high across the 3-month sample, but external validity is limited to calm sheltered bays and cannot transfer to open oceanic coastlines.\n4. Transparent Limitations: The study lacked tidal monsoon data due to seasonal timing constraints.\n5. Targeted Recommendation: The Maritime Agency must cap daily visitor boats at 12 and introduce floating boardwalks by Q3 2025.\n6. Personal Growth: Investigating fisherman perspectives challenged my naive assumption that conservation is easy, teaching me that ecological policies must secure human survival first."',
        takeaway: 'Notice how every single required element is balanced with precision, humility, and intellectual rigor.'
      },
      keyTakeaway: 'Combine hypothesis evaluation, validity assessment, honest limitations, targeted policies, and personal growth for an unshakeable conclusion.',
      sourceCitation: 'Textbook Section 10.8 (pp. 142–144)'
    }
  },

  // SLIDE 22: The Complete 10-Unit Journey
  {
    id: 'u10-s22',
    unitNumber: 10,
    slideNumber: 22,
    title: 'The 10-Unit Cambridge Journey',
    section: 'Curriculum Synthesis',
    type: 'summary',
    teacherNote: 'Celebrate the completion of the 10-unit curriculum! Trace the journey from Unit 1 to Unit 10. Every skill learned is an interconnected superpower.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.8',
      pages: '143–144'
    },
    content: {
      heading: 'The Full 10-Unit Global Perspectives Architecture',
      subheading: 'From initial perspective to finalized academic conclusion',
      body: 'You have completed the entire Grade 10 Cambridge Global Perspectives instructional curriculum. Behold the unified architecture of your inquiry superpowers:',
      bullets: [
        'Unit 1 — Perspectives: Recognizing worldviews across Personal, Local, National, and Global scales.',
        'Unit 2 — Research: Navigating basic vs applied inquiry, quantitative vs qualitative paradigms, and the 8-step research lifecycle.',
        'Unit 3 — Data Analysis: Calculating central tendencies, interpreting graphs, and coding qualitative themes.',
        'Unit 4 — Data Synthesis: Weaving multiple sources into unified insights via narrative synthesis and meta-analysis.',
        'Unit 5 — Planning: Executing the 6-step cycle, defeating Groupthink, and facilitating with cultural respect (Hormat & Musyawarah).',
        'Unit 6 — Questioning: Designing bias-free inquiry tools and eliminating leading, loaded, and double-barreled traps.',
        'Unit 7 — Reasoning: Deploying Deduction, Induction, and Abduction within the 6-part Toulmin Model.',
        'Unit 8 — Evidence: Auditing sources with CRAAP, debunking misinformation with SIFT, and conducting ethical fieldwork.',
        'Unit 9 — Claims: Dissecting Fact, Value, and Policy claims and mastering academic hedging.',
        'Unit 10 — Conclusions: Testing hypotheses, evaluating validity, acknowledging limitations, and driving actionable change.'
      ],
      keyTakeaway: 'You are no longer passive consumers of internet information; you are rigorous, ethical, global researchers.',
      sourceCitation: 'Textbook Complete Curriculum Synthesis (pp. 6–144)'
    }
  },

  // SLIDE 23: Unit 10 Master Summary
  {
    id: 'u10-s23',
    unitNumber: 10,
    slideNumber: 23,
    title: 'Unit 10 Master Summary',
    section: '10.8 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the 5 essential takeaways. Remind students: "End strong, stay humble, evaluate validity, and propose action!"',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.8',
      pages: '143–144'
    },
    content: {
      heading: 'Mastering the Art of Conclusion',
      subheading: 'Key takeaways from Unit 10: Drawing Conclusions',
      body: 'You now possess the complete toolkit to craft powerful, defensible conclusions that command academic respect.',
      bullets: [
        '1. Direct Answer & Hypothesis: State your finding clearly and declare whether your hypothesis was Supported, Refuted, or Modified.',
        '2. The Conclusion Builder Matrix: Use the 5-step matrix to transition systematically from synthesized data to qualified judgments.',
        '3. Validity & Verification: Distinguish internal validity (study accuracy) from external validity (generalisability/transferability), and verify through triangulation and peer review.',
        '4. Eliminate Fatal Defects: Avoid Sudden Facts, Mechanical Copy-Paste, Overreaching Leaps, and Wishful Thinking preaching.',
        '5. Humility & Impact: Transparently evaluate methodological limitations, propose targeted institutional recommendations, and reflect on personal perspective growth.'
      ],
      keyTakeaway: 'Great research does not end with a period; it ends with an insight that inspires change.',
      sourceCitation: 'Textbook Section 10.8 (pp. 143–144)'
    }
  },

  // SLIDE 24: Final Curriculum Capstone Challenge
  {
    id: 'u10-s24',
    unitNumber: 10,
    slideNumber: 24,
    title: 'Curriculum Capstone Challenge',
    section: '10.8 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket for Unit 10: Have students evaluate this draft conclusion sentence for multiple defects (wishful thinking, overreach, sudden new fact).',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.8',
      pages: '144'
    },
    content: {
      heading: 'Curriculum Capstone Challenge: Conclusion Audit',
      body: 'A student completes an impressive 2,000-word Individual Report on urban flood management in Semarang. Here is her draft concluding sentence:\n"In conclusion, flooding is terrible, and my research proves that if everyone in Semarang just prays and stops littering, all floods will permanently disappear forever, as proven by a new Japanese satellite study I found yesterday."\n\nWhat combination of fatal defects has ruined this student\'s conclusion?',
      interactiveData: {
        prompt: 'Which combination of defects severely undermines this conclusion?',
        options: [
          {
            id: 'opt-1',
            label: 'It is a flawless conclusion because faith and Japanese technology solve all problems.',
            explanation: 'Incorrect. This sentence violates multiple core standards of academic research.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Wishful Thinking (praying stops floods), Overreaching Leap (floods will disappear permanently forever), and Sudden Miracle Fact (introducing a new Japanese study never analyzed in the body).',
            explanation: 'Correct! This conclusion commits three fatal defects at once: (1) Wishful Thinking and preaching instead of infrastructure policy, (2) an extreme Overreaching Leap promising permanent elimination of floods, and (3) dropping a brand new Japanese satellite fact into the last sentence without prior analysis.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'The Mechanical Copy-Paste, because she repeated her introduction word-for-word.',
            explanation: 'Incorrect. The major flaws are the sudden new fact, wild overreach, and wishful emotional thinking.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Eliminate wishful thinking, curb overreach, and never introduce surprise facts in your final paragraph.',
      sourceCitation: 'Textbook Section 10.8 (p. 144)'
    }
  },

  // SLIDE 25: Graduation & Next Steps
  {
    id: 'u10-s25',
    unitNumber: 10,
    slideNumber: 25,
    title: 'Course Complete: The Journey Begins',
    section: 'Graduation & Research Practice',
    type: 'concept',
    teacherNote: 'Congratulate the class! They have completed the entire instructional curriculum for Grade 10 Cambridge Global Perspectives & Research. Direct them to the Practice Hub and Team Project simulations.',
    sourceRef: {
      unit: 'Unit 10',
      section: '10.8',
      pages: '144'
    },
    content: {
      heading: 'Congratulations, Global Researchers!',
      subheading: 'You have mastered the Grade 10 Global Perspectives Instructional Curriculum',
      body: 'You have completed all 10 instructional units of Cambridge Global Perspectives & Research.\n\nYou now possess the cognitive tools, ethical frameworks, and research methodologies to examine any complex global controversy, uncover empirical truth, and propose actionable solutions.',
      bullets: [
        'Next Step 1: Head to the Practice Hub to test your skills in real-world scenarios and interactive simulations.',
        'Next Step 2: Form your Team Project groups, apply the 6-Step Planning Cycle, and start your collaborative investigation.',
        'Next Step 3: Begin drafting your Individual Report using Toulmin reasoning, CRAAP-tested evidence, and validated conclusions.'
      ],
      keyTakeaway: 'The world is complex, but with critical inquiry and compassionate understanding, you can help shape a better future.',
      sourceCitation: 'Textbook Complete Curriculum (pp. 6–144)'
    }
  }
];
