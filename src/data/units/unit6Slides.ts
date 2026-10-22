import { Slide } from '../../types/curriculum';

/**
 * Unit 6: Questioning — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 79–90)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_6_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u6-s1',
    unitNumber: 6,
    slideNumber: 1,
    title: 'Unit 6: Questioning',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Quote Albert Einstein: "If I had an hour to solve a problem, I\'d spend 55 minutes thinking about the question and 5 minutes thinking about solutions." Ask students: "Why can a bad question ruin months of research?"',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.1',
      pages: '79–80'
    },
    content: {
      heading: 'The Compass of Academic Inquiry',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'In academic research, the quality of your answers is strictly limited by the quality of your questions.\n\nIf you ask a vague, biased, or confusing question, even thousands of survey responses will yield worthless, misleading data. But if you craft a sharp, objective question, the truth reveals itself.\n\nQuestioning is the foundational craft of designing inquiry tools—such as research questions, survey items, and interview protocols—that elicit reliable, unbiased empirical evidence.',
      bullets: [
        'Objective 1: Understand why research questions serve as the navigational compass for all inquiry.',
        'Objective 2: Master the 9 principles of effective question design for surveys and interviews.',
        'Objective 3: Diagnose and repair classic question defects: Leading, Loaded, Double-Barreled, and Vague questions.',
        'Objective 4: Design balanced Likert scales and conduct pilot testing to ensure instrument reliability.'
      ],
      keyTakeaway: 'Bad questions produce bad data; great questions unlock truthful discoveries.',
      sourceCitation: 'Textbook Section 6.1 (pp. 79–80)'
    }
  },

  // SLIDE 2: The Navigational Compass of Research
  {
    id: 'u6-s2',
    unitNumber: 6,
    slideNumber: 2,
    title: '6.1 Question as Compass',
    section: 'Inquiry Foundations',
    type: 'concept',
    teacherNote: 'Draw a ship on stormy seas without a rudder. Explain that without a clear, bounded research question, researchers get lost in thousands of irrelevant articles.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.1',
      pages: '79–81'
    },
    content: {
      heading: 'Why Every Study Needs a Clear Question',
      subheading: 'How the research question governs all methodology and analysis',
      body: 'In Global Perspectives, your primary research question is not merely a title—it is your navigational compass:\n\nEvery single choice you make later in your project must trace directly back to this central question:',
      bullets: [
        '1. Determines Methodology: A question asking "How much?" demands quantitative surveys; a question asking "Why do people feel?" demands qualitative interviews.',
        '2. Sets the Boundaries: A strong question specifies the population, geographic scope, and time frame, preventing scope creep.',
        '3. Defines Relevant Literature: It tells you which books to read and which 99% of articles you can safely ignore.',
        '4. Tests Your Conclusion: At the end of your project, your conclusion must directly answer this exact question—nothing more, nothing less.'
      ],
      keyTakeaway: 'If your question is blurry, your entire research journey will wander aimlessly.',
      sourceCitation: 'Textbook Section 6.1 (pp. 79–81)'
    }
  },

  // SLIDE 3: Open-Ended vs. Closed-Ended Questions
  {
    id: 'u6-s3',
    unitNumber: 6,
    slideNumber: 3,
    title: 'Open vs. Closed Questions',
    section: '6.1 Question Formats',
    type: 'comparison',
    teacherNote: 'Ask two students: Ask Student A: "Did you eat breakfast today?" (Closed: Yes/No). Ask Student B: "How did what you ate for breakfast affect your energy this morning?" (Open: Rich explanation).',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.1',
      pages: '81–82'
    },
    content: {
      heading: 'Two Foundational Question Architectures',
      subheading: 'When to lock down answers vs. when to encourage open exploration',
      body: 'Researchers balance two distinct formats depending on whether they seek statistical frequency or rich qualitative meaning:',
      comparison: {
        itemA: {
          label: 'Closed-Ended Questions',
          points: [
            'Format: Multiple-choice, Yes/No, rating scales, Likert scales.',
            'Best for: Large-scale surveys, statistical percentages, standardized comparisons.',
            'Advantage: Fast to answer, effortless to quantify and graph in spreadsheets.',
            'Limitation: Forces respondents into rigid boxes; cannot capture complex personal reasons.'
          ]
        },
        itemB: {
          label: 'Open-Ended Questions',
          points: [
            'Format: "How...?", "Why...?", "Describe your experience with..."',
            'Best for: In-depth interviews, exploratory pilot studies, focus groups.',
            'Advantage: Captures authentic human voices, unexpected insights, and emotional depth.',
            'Limitation: Time-consuming to analyze; requires thematic coding.'
          ]
        }
      },
      keyTakeaway: 'Use closed questions to measure how many; use open questions to discover why and how.',
      sourceCitation: 'Textbook Section 6.1 (pp. 81–82)'
    }
  },

  // SLIDE 4: The 9 Principles of Effective Question Design (Part 1)
  {
    id: 'u6-s4',
    unitNumber: 6,
    slideNumber: 4,
    title: '6.2 Principles of Design: Part 1',
    section: 'Instrument Construction',
    type: 'concept',
    teacherNote: 'Go through Principles 1 to 4. Emphasize Principle 3 (Objectivity): Researchers never push respondents to agree with their personal worldview.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.2',
      pages: '82–84'
    },
    content: {
      heading: 'The 9 Principles of Effective Questions (1–4)',
      subheading: 'Core standards that protect survey items from error',
      body: 'The textbook outlines 9 non-negotiable principles for writing professional research questions and survey items:',
      bullets: [
        'Principle 1 — Clarity: Use crystal-clear, simple language. Avoid ambiguous words that could have multiple interpretations.',
        'Principle 2 — Specificity: Narrow the focus to a concrete topic, time, or behavior (e.g., "In the past 7 days" instead of "recently").',
        'Principle 3 — Objectivity & Neutrality: The question must not suggest or favor a particular answer. It must remain strictly unbiased.',
        'Principle 4 — Single-Focus: Every item must test exactly ONE idea at a time (never combine two separate questions into one).'
      ],
      keyTakeaway: 'An effective question is clear, specific, neutral, and focused on a single idea.',
      sourceCitation: 'Textbook Section 6.2 (pp. 82–84)'
    }
  },

  // SLIDE 5: The 9 Principles of Effective Question Design (Part 2)
  {
    id: 'u6-s5',
    unitNumber: 6,
    slideNumber: 5,
    title: '6.2 Principles of Design: Part 2',
    section: 'Instrument Construction',
    type: 'concept',
    teacherNote: 'Highlight Principle 7 (Exhaustive & Mutually Exclusive): Options must not overlap, and must cover all possibilities (e.g., age brackets 10-14, 15-19, not 10-15, 15-20!).',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.2',
      pages: '83–85'
    },
    content: {
      heading: 'The 9 Principles of Effective Questions (5–9)',
      subheading: 'Ensuring relevance, accessibility, ethics, and testing',
      body: 'The remaining five principles ensure that your questionnaire respects participants and produces valid data:',
      bullets: [
        'Principle 5 — Relevance: Every single question must directly serve your research objective. Eliminate curiosity questions that do not answer your core inquiry.',
        'Principle 6 — Appropriate Language Level: Write at the reading level of your participants. Avoid heavy academic jargon, slang, or acronyms.',
        'Principle 7 — Exhaustive & Mutually Exclusive: For multiple-choice, options must cover all possibilities without overlapping (e.g., use "Other: ___").',
        'Principle 8 — Ethical Sensitivity: Respect privacy, protect anonymity, avoid humiliating personal topics, and allow respondents to skip sensitive questions.',
        'Principle 9 — Pilot-Tested: Always test your questions on 5 to 10 peers before launching the full survey.'
      ],
      keyTakeaway: 'Respect your participants\' time and intelligence by testing every item for clarity and ethics.',
      sourceCitation: 'Textbook Section 6.2 (pp. 83–85)'
    }
  },

  // SLIDE 6: Flawed Question 1: Leading Questions
  {
    id: 'u6-s6',
    unitNumber: 6,
    slideNumber: 6,
    title: '6.3 Diagnosing Leading Questions',
    section: 'Question Defects',
    type: 'concept',
    teacherNote: 'Show how subtle wording pushes people: "Don\'t you think our school food is delicious?" The word "delicious" leads the witness.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.3',
      pages: '84–86'
    },
    content: {
      heading: 'Defect 1: The Leading Question',
      subheading: 'Nudging respondents toward a predetermined conclusion',
      body: 'A leading question is an item phrased in a way that subtly or overtly suggests the "correct" or desired answer to the respondent.\n\nLeading questions destroy the scientific validity of a study because they collect coerced agreement rather than genuine human opinions.',
      example: {
        title: 'Diagnosing and Repairing a Leading Question',
        scenario: '❌ Flawed Leading Item: "Given how terrible and polluting single-use plastic is, don\'t you agree our school should ban plastic cups?"\n\n• Why it is flawed: The emotional words "terrible and polluting" and the phrase "don\'t you agree" exert intense psychological pressure on the student to say Yes.\n\n✅ Repaired Neutral Item: "To what extent do you support or oppose a ban on single-use plastic cups in the school canteen? [Strongly Oppose | Oppose | Neutral | Support | Strongly Support]"',
        takeaway: 'Neutral phrasing gives respondents total psychological freedom to express their true feelings.'
      },
      keyTakeaway: 'Remove all persuasive adjectives and pressure phrases to keep questions completely neutral.',
      sourceCitation: 'Textbook Section 6.3 (pp. 84–86)'
    }
  },

  // SLIDE 7: Flawed Question 2: Double-Barreled Questions
  {
    id: 'u6-s7',
    unitNumber: 6,
    slideNumber: 7,
    title: '6.3 Diagnosing Double-Barreled Questions',
    section: 'Question Defects',
    type: 'concept',
    teacherNote: 'The "Double-Barreled Shotgun": It shoots two bullets at once! If someone agrees with Bullet 1 but disagrees with Bullet 2, how can they possibly answer?',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.3',
      pages: '85–87'
    },
    content: {
      heading: 'Defect 2: The Double-Barreled Question',
      subheading: 'Asking two separate questions with only one answer space',
      body: 'A double-barreled question occurs when an item touches upon more than one issue, but allows only for one single response.\n\nLook for the conjunctions "AND" or "OR" in survey questions—they are almost always warning sirens for double-barreled errors.',
      example: {
        title: 'Diagnosing and Splitting a Double-Barreled Item',
        scenario: '❌ Flawed Double-Barreled Item: "Do you think our school library is quiet and has modern computers? [Yes / No]"\n\n• The Impossible Dilemma: What if the library is wonderfully quiet, but all the computers are 15-year-old broken relics? A "No" answer loses the compliment about quietness; a "Yes" answer lies about the computers!\n\n✅ Repaired Split Items:\n1. "How quiet is our school library? [Rating: 1–5]"\n2. "How modern and functional are the computers in our library? [Rating: 1–5]"',
        takeaway: 'Always split compound questions into separate, single-focus items.'
      },
      keyTakeaway: 'Never ask two things at once. One question = one measurable variable.',
      sourceCitation: 'Textbook Section 6.3 (pp. 85–87)'
    }
  },

  // SLIDE 8: Flawed Question 3: Loaded Questions
  {
    id: 'u6-s8',
    unitNumber: 6,
    slideNumber: 8,
    title: '6.3 Diagnosing Loaded Questions',
    section: 'Question Defects',
    type: 'concept',
    teacherNote: 'Classic courtroom example: "Have you stopped cheating on your exams?" If you say Yes, you admit you used to cheat. If you say No, you admit you still cheat! It traps the respondent.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.3',
      pages: '86–87'
    },
    content: {
      heading: 'Defect 3: The Loaded Question',
      subheading: 'Trapping respondents with unverified, baked-in assumptions',
      body: 'A loaded question is an item that contains a controversial or unjustified presupposition that the respondent is forced to accept regardless of how they answer.\n\nLoaded questions are intellectually dishonest because they treat an unproven accusation as an established fact.',
      example: {
        title: 'Diagnosing and Repairing a Loaded Question',
        scenario: '❌ Flawed Loaded Item: "Why do Grade 10 students waste so much time on TikTok instead of studying?"\n\n• The Trap: The question presupposes that all Grade 10 students are guilty of "wasting time". If a student only uses TikTok for 10 minutes to learn math tricks, they cannot answer truthfully.\n\n✅ Repaired Staged Items:\n1. "On an average weekday, approximately how many minutes do you spend on social media?"\n2. "For what primary purposes do you use these platforms? [Entertainment, Study tutorials, Messaging friends, News]"',
        takeaway: 'Never bake your personal accusations into the premise of the question.'
      },
      keyTakeaway: 'Do not trap participants with assumptions. Measure the baseline behavior before asking about reasons.',
      sourceCitation: 'Textbook Section 6.3 (pp. 86–87)'
    }
  },

  // SLIDE 9: Flawed Question 4: Vague and Ambiguous Questions
  {
    id: 'u6-s9',
    unitNumber: 6,
    slideNumber: 9,
    title: '6.3 Diagnosing Vague Questions',
    section: 'Question Defects',
    type: 'concept',
    teacherNote: 'Ask 3 students what the word "often" means to them: Student 1 says "twice a day", Student 2 says "once a week", Student 3 says "once a month". Subjective adverbs ruin survey precision!',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.3',
      pages: '86–88'
    },
    content: {
      heading: 'Defect 4: The Vague and Ambiguous Question',
      subheading: 'Using subjective words that mean different things to different people',
      body: 'Words like "regularly", "frequently", "often", "good", or "recently" seem clear, but they are disastrous in research instruments.\n\nEvery respondent defines these subjective adverbs differently, rendering the resulting statistical data uninterpretable.',
      example: {
        title: 'Diagnosing and Standardizing Vague Items',
        scenario: '❌ Flawed Vague Item: "Do you exercise regularly? [Yes / No]"\n\n• The Confusion: A varsity athlete defines "regularly" as 6 days a week; a casual walker defines it as once a month. Both answer "Yes", making the data meaningless!\n\n✅ Repaired Concrete Item: "During the past 7 days, on how many days did you engage in at least 30 minutes of physical exercise?\n[0 days | 1–2 days | 3–4 days | 5 or more days]"',
        takeaway: 'Replace subjective adverbs with precise numerical intervals and exact time frames.'
      },
      keyTakeaway: 'Anchor your questions to specific timeframes and exact numbers to eliminate subjective confusion.',
      sourceCitation: 'Textbook Section 6.3 (pp. 86–88)'
    }
  },

  // SLIDE 10: Active Checkpoint 1: Question Diagnosis
  {
    id: 'u6-s10',
    unitNumber: 6,
    slideNumber: 10,
    title: 'Checkpoint: Question Diagnosis',
    section: '6.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the question: Notice the word "AND" and the two completely separate topics (homework vs. classroom air conditioning).',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.3',
      pages: '84–88'
    },
    content: {
      heading: 'Diagnostic Challenge: Identify the Defect',
      body: 'Examine this survey question created by a student committee:\n"Do you agree that teachers give too much homework and that classroom air conditioning is too cold? [Yes / No]"\n\nWhat is the fatal technical flaw in this survey item?',
      interactiveData: {
        prompt: 'Which specific defect renders this question impossible for respondents to answer accurately?',
        options: [
          {
            id: 'opt-1',
            label: 'It is a Double-Barreled Question that joins two completely unrelated topics with "and".',
            explanation: 'Correct! A student might hate homework (Yes) but love the air conditioning (No). Because both issues are forced into one single item, the resulting Yes/No responses cannot be interpreted.',
            isCorrect: true
          },
          {
            id: 'opt-2',
            label: 'It is a Leading Question because air conditioning is universally loved.',
            explanation: 'Incorrect. While it has flaws, the primary structural defect is joining two completely different topics into one item (Double-Barreled).',
            isCorrect: false
          },
          {
            id: 'opt-3',
            label: 'It is a Likert Scale that has too many answer options.',
            explanation: 'Incorrect. The question uses a binary Yes/No format, not a Likert scale, and its flaw is its double-barreled structure.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Whenever you see "AND" joining two separate variables in a survey item, split it into two independent questions.',
      sourceCitation: 'Textbook Section 6.3 (pp. 84–88)'
    }
  },

  // SLIDE 11: Likert Scale Design
  {
    id: 'u6-s11',
    unitNumber: 6,
    slideNumber: 11,
    title: '6.4 Designing Likert Scales',
    section: 'Scale Architecture',
    type: 'concept',
    teacherNote: 'Explain Rensis Likert\'s invention: A balanced, symmetrical psychometric scale that converts subjective feelings into ordinal numbers (1 to 5).',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.4',
      pages: '87–89'
    },
    content: {
      heading: 'Measuring Human Attitudes: The Likert Scale',
      subheading: 'How to convert subjective human opinions into structured numerical data',
      body: 'Developed by psychologist Rensis Likert, the Likert scale is the most widely used psychometric tool in global perspectives research.\n\nIt presents a declarative statement and asks respondents to rate their level of agreement or satisfaction along a balanced, symmetrical scale.',
      bullets: [
        'The Classic 5-Point Balance: 1 = Strongly Disagree, 2 = Disagree, 3 = Neutral / Undecided, 4 = Agree, 5 = Strongly Agree.',
        'Symmetry Rule: There must be an equal number of positive and negative options on either side of the neutral center point.',
        'The Neutral Option: Always include a neutral midpoint (Option 3) so respondents are not forced to take a fake stand on issues they genuinely have no opinion on.',
        'Clear Anchors: Every number on the scale should have a clear verbal label to prevent subjective guessing.'
      ],
      keyTakeaway: 'Balanced Likert scales capture degrees of agreement with mathematical precision and fairness.',
      sourceCitation: 'Textbook Section 6.4 (pp. 87–89)'
    }
  },

  // SLIDE 12: Misconception: Leading Questions are Helpful
  {
    id: 'u6-s12',
    unitNumber: 6,
    slideNumber: 12,
    title: 'Misconception: The "Helpful" Leading Question',
    section: '6.4 Misconception Check',
    type: 'misconception',
    teacherNote: 'Ask students: "If a lawyer in court leads a witness, what does the judge shout? OBJECTION! Leading the witness!" The same rule applies in science.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.4',
      pages: '87–89'
    },
    content: {
      heading: '"Leading Questions Help Prove My Hypothesis Faster"',
      subheading: 'Why biased questions lead to academic disaster and rejection',
      body: 'Some students believe that because their team is passionate about a cause (e.g., stopping deforestation), it is acceptable to write questions that nudge respondents into agreeing.\n\nThis is a fatal research misconception: Collecting manipulated, coerced data invalidates your entire Cambridge portfolio.',
      comparison: {
        itemA: {
          label: 'The Manipulated Survey',
          points: [
            '"Don\'t you agree our school needs a recycling club?" -> 98% say Yes.',
            'Flaw: Cambridge examiners will instantly flag the question as biased.',
            'The entire dataset is rejected because the data was coerced.',
            'Outcome: Zero academic credibility.'
          ]
        },
        itemB: {
          label: 'The Objective Scientific Survey',
          points: [
            '"Rate your willingness to sort trash into 3 bins weekly." -> 62% say Yes, 38% say No.',
            'Success: True data! Now you discover that 38% of students find sorting confusing.',
            'Authentic Impact: Now you can design a real educational campaign to help that 38%!'
          ]
        }
      },
      keyTakeaway: 'Honest questions reveal real obstacles; leading questions create useless illusions.',
      sourceCitation: 'Textbook Section 6.4 (pp. 87–89)'
    }
  },

  // SLIDE 13: Pilot Testing Protocols
  {
    id: 'u6-s13',
    unitNumber: 6,
    slideNumber: 13,
    title: '6.5 Pilot Testing Your Instrument',
    section: 'Quality Assurance Protocol',
    type: 'concept',
    teacherNote: 'Analogy: A rocket manufacturer never sends astronauts into space on the first test rocket. They run test flights first. A pilot survey is a test flight for your questions.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.5',
      pages: '88–90'
    },
    content: {
      heading: 'The Pre-Flight Test of Research: Pilot Testing',
      subheading: 'How to catch embarrassing mistakes before sending your survey to 200 people',
      body: 'A pilot test is a small-scale trial run of your research instrument administered to a small sample of 5 to 10 participants before launching the full study.\n\nOnce a survey is distributed to 200 people, you CANNOT fix a broken question without throwing away all collected data!',
      bullets: [
        '1. Time the Test: Measure how many minutes it takes to complete. If it takes 25 minutes, participants will abandon it—cut it down to 8 minutes.',
        '2. The "Think-Aloud" Protocol: Watch a test participant answer your questions in real time. Ask them: "Did any word confuse you? Was any choice missing?"',
        '3. Inspect the Distribution: Did everyone choose Option A because the other options were silly? If so, rewrite the distractors.',
        '4. Revise and Polish: Fix all typos, split double-barreled items, and test once more before final deployment.'
      ],
      keyTakeaway: 'A 20-minute pilot test with 5 classmates prevents weeks of wasted research and ruined data.',
      sourceCitation: 'Textbook Section 6.5 (pp. 88–90)'
    }
  },

  // SLIDE 14: Active Checkpoint 2: Question Surgery
  {
    id: 'u6-s14',
    unitNumber: 6,
    slideNumber: 14,
    title: 'Checkpoint: Question Surgery',
    section: '6.5 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Challenge students to select the cleanest, most objective, and specific repair for this flawed cafeteria question.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.5',
      pages: '86–90'
    },
    content: {
      heading: 'Question Repair Challenge: The School Canteen',
      body: 'A student council researcher writes this survey item:\n"Don\'t you agree that the canteen food is overpriced and tastes bad? [Yes / No]"\n\nHow should this severely flawed item be repaired for an objective student survey?',
      interactiveData: {
        prompt: 'Which rewritten format transforms this flawed item into an objective, professional research tool?',
        options: [
          {
            id: 'opt-1',
            label: 'Change the title to: "Why is the canteen food both terrible and expensive?"',
            explanation: 'Incorrect. This makes the question loaded and even more biased!',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Split into two separate Likert scale items: one evaluating price fairness [1–5 scale] and one evaluating taste quality [1–5 scale].',
            explanation: 'Correct! This performs complete question surgery: it removes the leading bias ("Don\'t you agree"), splits the double-barreled topics (price vs. taste), and provides balanced 5-point rating scales.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Leave it unchanged, because students universally dislike cafeteria food.',
            explanation: 'Incorrect. Research assumes nothing; it measures reality objectively without bias.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Effective question surgery removes emotional bias, splits compound variables, and applies balanced measurement scales.',
      sourceCitation: 'Textbook Section 6.5 (pp. 86–90)'
    }
  },

  // SLIDE 15: Misconception: Academic Questions Must Be Complex
  {
    id: 'u6-s15',
    unitNumber: 6,
    slideNumber: 15,
    title: 'Misconception: The Jargon Trap',
    section: '6.5 Communication Clarity',
    type: 'misconception',
    teacherNote: 'Remind students of CEFR B1 clarity: The goal of language in research is to communicate truth, not to show off fancy vocabulary that confuses participants.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.5',
      pages: '88–90'
    },
    content: {
      heading: '"Academic Questions Must Use Complex, Sophisticated Vocabulary"',
      subheading: 'Why unnecessarily fancy words destroy data reliability',
      body: 'Many high school students mistakenly believe that to make their research look "scholarly", they must pack their survey items with high-level university jargon.\n\nIn survey methodology, complex vocabulary causes cognitive fatigue and misunderstanding, leading respondents to guess randomly.',
      example: {
        title: 'Comparing Jargon vs. Precision',
        scenario: '❌ Jargon-Laden Item: "To what degree do pedagogical interventions exacerbate the somatic manifestations of adolescent psychosocial anxiety?"\n\n• The Disaster: A Grade 10 student reading this has no idea what it means and randomly clicks Option 3 just to finish.\n\n✅ Clear B1 Precision: "During exam weeks, how frequently do you experience physical stress symptoms such as headaches or stomach pains? [Never | Rarely | Sometimes | Often | Very Often]"',
        takeaway: 'True intellectual sophistication lies in making deep ideas crystal-clear to everyone.'
      },
      keyTakeaway: 'Keep your questions simple and accessible. Save deep academic analysis for your discussion chapter.',
      sourceCitation: 'Textbook Section 6.5 (pp. 88–90)'
    }
  },

  // SLIDE 16: Applied Case Study: Mental Health Survey Transformation
  {
    id: 'u6-s16',
    unitNumber: 6,
    slideNumber: 16,
    title: 'Case Study: Survey Transformation',
    section: '6.6 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through how this Grade 10 team transformed 5 flawed questions into a peer-reviewed research tool for their school.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.6',
      pages: '89–90'
    },
    content: {
      heading: 'Transforming a Flawed High School Survey',
      subheading: 'How a student team overhauled their mental wellness questionnaire',
      body: 'Observe how a Grade 10 research team applied the 9 principles to rescue their project before launch:',
      example: {
        title: 'The Before-and-After Overhaul',
        scenario: '1. Original Flawed Item: "Do you suffer from severe depression because of homework and bad teachers? [Yes/No]"\n   • Defects: Highly loaded ("severe depression"), double-barreled ("homework and bad teachers"), and leading.\n\n2. Overhauled Research Battery:\n   • Item 1: "On average, how many hours do you spend on homework each evening? [Under 1hr | 1–2hrs | 2–3hrs | 3+hrs]"\n   • Item 2: "How manageable do you find your current academic workload? [1 = Completely Unmanageable to 5 = Very Manageable]"\n   • Item 3: "If you feel stressed about school, which support resources have you accessed? [Counselor, Parents, Friends, None]"\n\n• The Result: The school administration praised the revised survey as objective and used the data to create a quiet study hall period.',
        takeaway: 'Disciplined question design turns controversial topics into constructive institutional policy.'
      },
      keyTakeaway: 'Objective, ethical questions turn sensitive issues into credible, actionable evidence.',
      sourceCitation: 'Textbook Section 6.6 (pp. 89–90)'
    }
  },

  // SLIDE 17: Developing Interview Protocols
  {
    id: 'u6-s17',
    unitNumber: 6,
    slideNumber: 17,
    title: 'Qualitative Interview Protocols',
    section: '6.6 Qualitative Questioning',
    type: 'concept',
    teacherNote: 'Teach the "Funnel Technique": Start with broad easy warm-up questions, move into core detailed questions, and end with reflective wrap-up prompts.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.6',
      pages: '88–90'
    },
    content: {
      heading: 'Crafting Questions for Qualitative Interviews',
      subheading: 'The funnel method for deep semi-structured conversations',
      body: 'Interview questioning requires a flexible, conversational architecture called a Semi-Structured Interview Protocol:\n\nResearchers use the Funnel Architecture to build trust before exploring deep topics:',
      bullets: [
        '1. Warm-Up Stage (Wide): Broad, easy questions that build rapport (e.g., "Tell me about what subjects you enjoy most this semester?").',
        '2. Exploration Stage (Narrow): Specific, open-ended core inquiry questions (e.g., "Can you describe a specific time when you felt overwhelmed by group project deadlines?").',
        '3. Probing Follow-Ups (Deepening): "Can you tell me more about that?", "Why did that make you feel that way?", "What did you do next?"',
        '4. Wrap-Up Stage: "Is there anything else about this topic that we haven\'t covered that you would like to share?"'
      ],
      keyTakeaway: 'Great interviewers ask short, open questions and spend 80% of the time listening actively.',
      sourceCitation: 'Textbook Section 6.6 (pp. 88–90)'
    }
  },

  // SLIDE 18: Unit 6 Master Summary
  {
    id: 'u6-s18',
    unitNumber: 6,
    slideNumber: 18,
    title: 'Unit 6 Master Summary',
    section: '6.6 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the 4 primary defects and 9 principles. Remind students: "Before you launch any survey this year, run it through this checklist!"',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.6',
      pages: '89–90'
    },
    content: {
      heading: 'Mastering the Art of Scientific Questioning',
      subheading: 'Key takeaways from Unit 6: Questioning',
      body: 'You now possess the foundational psychometric and diagnostic skills to build reliable, unbiased data collection tools.',
      bullets: [
        '1. The Navigational Compass: The primary research question dictates methodology, boundaries, literature, and conclusions.',
        '2. Open vs. Closed: Closed questions measure statistical frequencies; open questions uncover deep motivations and human stories.',
        '3. The 4 Major Defects: Ruthlessly eliminate Leading bias, Double-Barreled compound questions, Loaded assumptions, and Vague adverbs.',
        '4. Likert Precision: Use balanced 5-point scales with a neutral midpoint and clear symmetrical verbal anchors.',
        '5. Pilot Testing: Always test your questions on 5–10 participants to catch timing issues and confusing wording before final deployment.'
      ],
      keyTakeaway: 'The questions you ask determine the reality you discover. Ask with precision, neutrality, and purpose.',
      sourceCitation: 'Textbook Section 6.6 (pp. 89–90)'
    }
  },

  // SLIDE 19: Final Exit Challenge
  {
    id: 'u6-s19',
    unitNumber: 6,
    slideNumber: 19,
    title: 'Unit 6 Exit Challenge',
    section: '6.6 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students audit this community survey item and identify the best surgical repair.',
    sourceRef: {
      unit: 'Unit 6',
      section: '6.6',
      pages: '90'
    },
    content: {
      heading: 'Exit Questioning Challenge: The Traffic Survey Audit',
      body: 'A student researcher studying traffic congestion in their city writes this questionnaire item for bus commuters:\n"Why is public transit in our city so horribly unreliable and filthy? [Open Text Box]"\n\nWhat is the most scientifically sound critique and correction for this item?',
      interactiveData: {
        prompt: 'How should this community survey item be evaluated and corrected?',
        options: [
          {
            id: 'opt-1',
            label: 'It is a strong, passionate question that captures the genuine anger of passengers.',
            explanation: 'Incorrect. Passionate anger has no place in survey phrasing. It is heavily loaded and leading.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'It is loaded and double-barreled; it should be replaced with two neutral Likert scales measuring: (1) schedule reliability and (2) vehicle cleanliness.',
            explanation: 'Correct! The original item contains two hostile presuppositions ("horribly unreliable" and "filthy") and joins two separate issues. Replacing it with two balanced, neutral rating scales measures commuter perceptions accurately and objectively.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'It should be changed to a Yes/No question: "Do you hate the bus? [Yes / No]".',
            explanation: 'Incorrect. This remains intensely leading and fails to capture useful, actionable data.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Replace loaded emotional attacks with neutral, multi-dimensional rating scales to produce actionable civic data.',
      sourceCitation: 'Textbook Section 6.6 (p. 90)'
    }
  }
];
