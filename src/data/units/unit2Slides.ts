import { Slide } from '../../types/curriculum';

/**
 * Unit 2: Understanding Research — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 22–38)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_2_SLIDES: Slide[] = [
  // SLIDE 1: Unit Hook & Orientation
  {
    id: 'u2-s1',
    unitNumber: 2,
    slideNumber: 1,
    title: 'Unit 2: Understanding Research',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Ask students how they know whether an online claim is true (e.g., "drinking lemon water prevents flu"). Connect their answers to the need for systematic research rather than personal belief or casual guessing.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.1',
      pages: '22–23'
    },
    content: {
      heading: 'The Power of Systematic Inquiry',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'How do we know what is actually true in the world?\n\nEvery day, people make decisions based on traditions, viral social media posts, advertising, or personal feelings. Sometimes these beliefs are helpful, but often they are incomplete, biased, or mistaken.\n\nResearch is humanity\'s most dependable tool to test ideas, solve critical problems, and create reliable new knowledge. In this unit, we learn what authentic research is, how researchers choose their methods, and how an investigation moves from an initial question to a verified conclusion.',
      bullets: [
        'Objective 1: Define research and explain the 4 core pillars of scientific inquiry.',
        'Objective 2: Differentiate between Basic Research (expanding knowledge) and Applied Research (solving practical problems).',
        'Objective 3: Distinguish between Quantitative (numerical) and Qualitative (descriptive/meaning) methodologies.',
        'Objective 4: Identify the 9 essential components of a research study and master the 8-step research lifecycle.'
      ],
      keyTakeaway: 'Research is not simply collecting facts. It is a disciplined, systematic journey from an unanswered question to verified evidence and actionable knowledge.',
      sourceCitation: 'Textbook Section 2.1 (pp. 22–23)'
    }
  },

  // SLIDE 2: Defining Research
  {
    id: 'u2-s2',
    unitNumber: 2,
    slideNumber: 2,
    title: '2.1 What is Research?',
    section: 'Academic Definition',
    type: 'definition',
    teacherNote: 'Emphasize that finding an existing answer on Google or Wikipedia is information retrieval, not original research. Research investigates what is unknown or tests whether an existing belief holds true under systematic evidence.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.1',
      pages: '22–23'
    },
    content: {
      heading: 'Defining the Craft of Inquiry',
      subheading: 'What makes an investigation authentic research?',
      body: 'In academic inquiry, research is defined as a systematic, empirical, replicable, and purposive process of investigation designed to discover, interpret, or revise facts, behaviors, and theories.\n\nResearch is not an accidental discovery or a random collection of personal thoughts. It is an intentional, organized effort to find answers to questions that matter.',
      comparison: {
        itemA: {
          label: 'Casual Information Search',
          points: [
            'Looking up existing facts that someone else already verified.',
            'Unstructured reading without an explicit methodology.',
            'Accepts claims on authority or search-engine rankings.',
            'Example: Looking up the population of Jakarta on Wikipedia.'
          ]
        },
        itemB: {
          label: 'Authentic Scientific Research',
          points: [
            'Investigating an unanswered question or unsolved problem.',
            'Follows a structured, documented, repeatable methodology.',
            'Collects and analyzes empirical evidence to test claims.',
            'Example: Measuring whether new bus routes reduced commute times in South Jakarta.'
          ]
        }
      },
      keyTakeaway: 'Anyone can search for facts that are already known. Researchers create new understanding through disciplined, methodical inquiry.',
      sourceCitation: 'Textbook Section 2.1 (pp. 22–23)'
    }
  },

  // SLIDE 3: The 4 Pillars of Scientific Inquiry
  {
    id: 'u2-s3',
    unitNumber: 2,
    slideNumber: 3,
    title: 'The 4 Pillars of Research',
    section: '2.1 Core Characteristics',
    type: 'concept',
    teacherNote: 'Highlight "replicability" as the gold standard of scientific honesty. If another researcher follows your exact steps but gets opposite results, your conclusions cannot be accepted as reliable.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.1',
      pages: '23–24'
    },
    content: {
      heading: 'The Four Hallmarks of Rigorous Inquiry',
      subheading: 'How to recognize authentic academic research',
      body: 'To produce trustworthy knowledge, any research investigation must rest upon four foundational pillars:',
      bullets: [
        '1. Systematic: The investigation follows a planned, logical sequence of steps (from problem formulation to data analysis) rather than haphazard, chaotic guessing.',
        '2. Empirical: Conclusions are grounded in observable, measurable real-world evidence (data from experiments, surveys, or observations) rather than pure speculation or personal dogma.',
        '3. Replicable: The methodology is documented so clearly that an independent researcher anywhere in the world could follow the exact same steps and verify the findings.',
        '4. Purposive & Objective: The study is designed with a clear, specific goal to uncover truth or solve a problem, actively guarding against the researcher\'s personal prejudices and wishful thinking.'
      ],
      keyTakeaway: 'If an inquiry is not systematic, empirical, replicable, and objective, it cannot produce credible scientific knowledge.',
      sourceCitation: 'Textbook Section 2.1 (pp. 23–24)'
    }
  },

  // SLIDE 4: Misconception: Research is NOT Just Googling
  {
    id: 'u2-s4',
    unitNumber: 2,
    slideNumber: 4,
    title: 'Misconception: Research ≠ Googling',
    section: '2.1 Misconception Check',
    type: 'misconception',
    teacherNote: 'Address the common student habit of typing a sentence into Google, copying three paragraphs, and submitting it as a "research paper". Explain that reading sources is only the preparatory phase.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.1',
      pages: '23–24'
    },
    content: {
      heading: '"I Googled It for 10 Minutes, So I Did Research"',
      subheading: 'Overcoming the information retrieval illusion',
      body: 'A very common mistake among beginning students is confusing browsing the web with conducting research.\n\nSearching Google, skimming websites, or watching videos is information gathering. That is a valuable first step, but it is NOT research.\n\nResearch begins when you identify an unanswered question, design a method to gather evidence, analyze what you find, and reach an evidence-backed conclusion.',
      comparison: {
        itemA: {
          label: 'Information Retrieval (Browsing)',
          points: [
            'Question: "What is the boiling point of water at sea level?"',
            'Question: "When was the first electric car invented?"',
            'Process: Finding pre-existing answers written by others.',
            'Result: Memorizing or summarizing established knowledge.'
          ]
        },
        itemB: {
          label: 'Authentic Research Inquiry',
          points: [
            'Question: "How do microplastics in local tap water affect aquatic plant growth in our river?"',
            'Question: "Why did 40% of Grade 10 students stop using the school library this semester?"',
            'Process: Collecting fresh evidence, comparing data, and testing patterns.',
            'Result: Creating new insight that did not exist before.'
          ]
        }
      },
      keyTakeaway: 'Reading someone else\'s research is studying. Generating new insight from evidence is doing research.',
      sourceCitation: 'Textbook Section 2.1 (pp. 23–24)'
    }
  },

  // SLIDE 5: Two Broad Purposes: Basic vs. Applied Research
  {
    id: 'u2-s5',
    unitNumber: 2,
    slideNumber: 5,
    title: '2.2 Types of Research',
    section: '2.2 Purpose Classification',
    type: 'concept',
    teacherNote: 'Introduce the concept of purpose. Ask students: "Why does a scientist spend 10 years studying how deep-sea worms breathe in volcanic vents? Is that useless, or is there another purpose?"',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.2',
      pages: '24–25'
    },
    content: {
      heading: 'Why Do We Conduct Research?',
      subheading: 'Two distinct motivations driving scientific discovery',
      body: 'While all research follows disciplined inquiry, researchers conduct studies for two fundamentally different reasons.\n\nSome researchers seek to uncover the fundamental principles of the universe, nature, and human psychology purely to expand knowledge.\n\nOther researchers seek to engineer immediate practical solutions to pressing everyday problems affecting human societies.',
      bullets: [
        'Basic Research (Pure / Fundamental Inquiry): Driven by curiosity to understand how the world works. It asks: "Why does this happen? What is the fundamental mechanism?"',
        'Applied Research (Practical / Problem-Solving Inquiry): Driven by the need to solve a specific, real-world challenge. It asks: "How can we fix this problem or improve this outcome?"'
      ],
      keyTakeaway: 'All research has purpose. Basic research expands the frontier of human understanding, while Applied research translates that understanding into practical solutions.',
      sourceCitation: 'Textbook Section 2.2 (pp. 24–25)'
    }
  },

  // SLIDE 6: Basic Research Deep-Dive
  {
    id: 'u2-s6',
    unitNumber: 2,
    slideNumber: 6,
    title: 'Basic Research: Expanding Knowledge',
    section: '2.2 Basic Research',
    type: 'concept',
    teacherNote: 'Emphasize that Basic Research does not care about immediate commercial profit. Its value lies in creating the theoretical foundation that future technologies will rely upon.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.2',
      pages: '24–26'
    },
    content: {
      heading: 'Basic (Fundamental) Research Explained',
      subheading: 'The curiosity-driven engine of human discovery',
      body: 'Basic research—often called fundamental or pure research—aims to expand human knowledge without any immediate commercial or practical goal in mind.\n\nIts focus is on formulating, testing, and refining theories that explain how physical nature, human biology, societies, or minds operate.\n\nBasic researchers do not ask: "How much money will this product make next year?" They ask: "What fundamental truth of the universe can we understand today?"',
      example: {
        title: 'Real-World Example: Brain Waves and Sleep',
        scenario: 'Cognitive neuroscientists place electrodes on volunteers in a sleep laboratory to record brain wave frequencies during REM sleep, mapping how neural synapses reorganize memories.',
        takeaway: 'The researchers are not creating a sleep drug or selling an app. They are uncovering the fundamental biological architecture of human cognition.'
      },
      keyTakeaway: 'Basic research builds the library of human knowledge. Without it, applied scientists would have no theories or principles to build upon.',
      sourceCitation: 'Textbook Section 2.2 (pp. 24–26)'
    }
  },

  // SLIDE 7: Applied Research Deep-Dive
  {
    id: 'u2-s7',
    unitNumber: 2,
    slideNumber: 7,
    title: 'Applied Research: Solving Real Problems',
    section: '2.2 Applied Research',
    type: 'concept',
    teacherNote: 'Encourage students to think of local problems in their community (traffic jams, flood water drainage, food waste in school) as prime candidates for applied research.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.2',
      pages: '25–27'
    },
    content: {
      heading: 'Applied Research Explained',
      subheading: 'Putting scientific knowledge into action for immediate impact',
      body: 'Applied research is designed to solve a specific, practical problem facing individuals, communities, businesses, or governments.\n\nInstead of seeking abstract knowledge for its own sake, applied researchers take existing scientific theories and develop practical technologies, health treatments, or public policies to resolve immediate challenges.',
      example: {
        title: 'Real-World Example: Flood Prevention in North Jakarta',
        scenario: 'Civil engineers test whether installing porous permeable pavements along residential alleys allows monsoon rainwater to seep directly into the aquifer, reducing street flooding compared to solid concrete.',
        takeaway: 'The goal is directly practical: to provide city planners with a tested, verified engineering solution to protect residents\' homes from water damage.'
      },
      keyTakeaway: 'Applied research produces tangible interventions, policies, and prototypes that directly improve daily life and solve pressing human crises.',
      sourceCitation: 'Textbook Section 2.2 (pp. 25–27)'
    }
  },

  // SLIDE 8: Side-by-Side Comparison: Basic vs. Applied
  {
    id: 'u2-s8',
    unitNumber: 2,
    slideNumber: 8,
    title: 'Comparing Basic & Applied Research',
    section: '2.2 Side-by-Side Analysis',
    type: 'comparison',
    teacherNote: 'Have students analyze each row of the comparison. Emphasize that the difference is in the primary goal, not the degree of scientific rigor.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.2',
      pages: '25–27'
    },
    content: {
      heading: 'Direct Matrix: Basic vs. Applied Inquiry',
      subheading: 'Distinguishing the two approaches across key dimensions',
      body: 'Researchers categorize their work as basic or applied depending on their core objective, timeframe, and direct outcome:',
      comparison: {
        itemA: {
          label: 'Basic Research (Pure / Fundamental)',
          points: [
            'Primary Goal: Expand theoretical understanding and uncover natural laws.',
            'Guiding Question: "Why does this phenomenon happen? How does it work?"',
            'Direct Outcome: New scientific theories, mathematical formulas, and publications.',
            'Timeframe: Long-term value; practical uses may take decades to emerge.',
            'Classic Example: Studying how photosynthesis operates at a molecular level in marine algae.'
          ]
        },
        itemB: {
          label: 'Applied Research (Practical / Problem-Solving)',
          points: [
            'Primary Goal: Solve an immediate practical problem or improve a specific system.',
            'Guiding Question: "How can we fix this specific issue or improve this process?"',
            'Direct Outcome: Actionable policies, commercial prototypes, treatments, or programs.',
            'Timeframe: Short-to-medium-term value; designed for immediate implementation.',
            'Classic Example: Formulating an organic, drought-resistant fertilizer for East Java rice farmers.'
          ]
        }
      },
      keyTakeaway: 'Basic research feeds curiosity and creates theoretical foundations; applied research feeds society and solves practical challenges.',
      sourceCitation: 'Textbook Section 2.2 (pp. 25–27)'
    }
  },

  // SLIDE 9: Misconception: Is Basic Research a Waste of Time?
  {
    id: 'u2-s9',
    unitNumber: 2,
    slideNumber: 9,
    title: 'Misconception: "Is Basic Research Useless?"',
    section: '2.2 Misconception Check',
    type: 'misconception',
    teacherNote: 'Remind students of the smartphone in their pocket. Ask: "Could engineers have built touchscreens, GPS, and Wi-Fi if earlier physicists had not spent decades studying quantum mechanics and radio wave theory?"',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.2',
      pages: '26–27'
    },
    content: {
      heading: 'The Myth of the "Useless Academic"',
      subheading: 'Understanding the vital interdependence of Basic and Applied science',
      body: 'A frequent misconception among politicians and beginning students is that Basic Research is a waste of public funding because it produces no immediate products, and that only Applied Research should be financed.\n\nThis belief is completely false. Applied research cannot exist without basic research. You cannot apply knowledge that has not yet been discovered!',
      example: {
        title: 'The Foundation of the Modern Smartphone',
        scenario: 'In the 1960s, physicists studied the quantum behavior of electrons passing through semiconductor crystals out of pure scientific curiosity (Basic Research). Forty years later, applied engineers used those exact equations to invent computer microchips, Wi-Fi antennas, and smartphone touchscreens.',
        takeaway: 'Without decades of pure basic physics research, modern smartphones, laptops, and digital medicine could never have been invented.'
      },
      keyTakeaway: 'Basic research creates the scientific capital; applied research spends that capital to solve human problems.',
      sourceCitation: 'Textbook Section 2.2 (pp. 26–27)'
    }
  },

  // SLIDE 10: Interactive Checkpoint 1: Basic vs. Applied Inquiry
  {
    id: 'u2-s10',
    unitNumber: 2,
    slideNumber: 10,
    title: 'Checkpoint: Basic or Applied?',
    section: '2.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students discuss in pairs before voting. Ask them to identify the clue words: "biochemical reaction" and "documenting the enzyme" (expanding knowledge) vs. creating a commercial spray.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.2',
      pages: '26–27'
    },
    content: {
      heading: 'Classification Challenge: Basic vs. Applied',
      body: 'Read the research investigation below and determine whether it represents Basic or Applied research:',
      interactiveData: {
        prompt: 'Research Investigation: "A team of biochemists at an Indonesian university investigates how a rare mangrove fungus produces an enzyme that dissolves cellulose, purely to document the molecular reaction and understand how fungi adapt to saltwater."',
        options: [
          {
            id: 'opt-1',
            label: 'Applied Research',
            explanation: 'Incorrect. The team is studying the molecular reaction to understand how nature works (expanding fundamental knowledge), not designing a commercial product or solving an immediate industrial problem.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Basic Research',
            explanation: 'Correct! The primary objective is to discover and document the fundamental molecular reaction (expanding human knowledge). If they later use this enzyme to manufacture biodegradable packaging for local factories, that second phase would be Applied Research.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Casual Information Search',
            explanation: 'Incorrect. Documenting undiscovered molecular reactions in a laboratory is a rigorous scientific empirical investigation, not casual web searching.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Look at the core goal: if the study seeks to understand natural mechanisms, it is Basic; if it seeks to solve a specific practical problem, it is Applied.',
      sourceCitation: 'Textbook Section 2.2 (pp. 26–27)'
    }
  },

  // SLIDE 11: Methodological Approaches: Numbers vs. Words
  {
    id: 'u2-s11',
    unitNumber: 2,
    slideNumber: 11,
    title: '2.3 Methodological Approaches',
    section: '2.3 Quantitative vs. Qualitative',
    type: 'concept',
    teacherNote: 'Use a school cafeteria example: Counting how many students buy mineral water (Quantitative) vs. asking 5 students why they prefer iced tea and how it makes them feel (Qualitative).',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.3',
      pages: '27–28'
    },
    content: {
      heading: 'Two Lenses on Reality: Numbers and Words',
      subheading: 'Quantitative and Qualitative paradigms in research',
      body: 'Once a researcher identifies what they want to study, they must decide HOW to gather and examine evidence.\n\nShould we measure the world using numbers, statistical frequencies, and mathematical models? Or should we explore the world through spoken words, written stories, and lived human experiences?\n\nThese two broad approaches are known as Quantitative Research and Qualitative Research. Both are rigorous and valid, but each asks different questions and uncovers different truths.',
      bullets: [
        'Quantitative Research: Focuses on measurable variables, numerical data, statistical patterns, and generalizable trends. It asks: "How many? How much? What percentage? Is variable X correlated with variable Y?"',
        'Qualitative Research: Focuses on meanings, interpretations, underlying reasons, and personal experiences. It asks: "Why? How do people experience this? What cultural beliefs explain this behavior?"'
      ],
      keyTakeaway: 'Quantitative research maps the landscape from 10,000 feet; qualitative research walks through the village on the ground.',
      sourceCitation: 'Textbook Section 2.3 (pp. 27–28)'
    }
  },

  // SLIDE 12: Quantitative Research Deep-Dive
  {
    id: 'u2-s12',
    unitNumber: 2,
    slideNumber: 12,
    title: 'Quantitative: Measuring Patterns',
    section: '2.3 Quantitative Research',
    type: 'concept',
    teacherNote: 'Remind students that quantitative research requires standardized measurement tools. Every participant must answer the exact same questions under identical conditions.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.3',
      pages: '27–29'
    },
    content: {
      heading: 'Quantitative Research Explained',
      subheading: 'The power of numerical evidence, measurement, and statistical rigor',
      body: 'Quantitative research collects and analyzes numerical data to identify patterns, calculate averages, test statistical correlations, and generalize findings across large populations.\n\nIt relies on structured, standardized instruments such as closed-ended surveys, digital sensors, and controlled laboratory experiments.',
      bullets: [
        'Primary Data Form: Hard numbers, percentages, test scores, Likert scales (e.g., 1 to 5), and physical measurements (height, weight, time).',
        'Key Instruments: Multiple-choice surveys, standardized questionnaires, calibrated sensors, experimental control groups.',
        'Major Strengths: High objectivity, can examine large representative sample sizes, easily presented in charts, and easily replicated by other researchers.',
        'Main Limitation: Cannot easily capture complex, nuanced personal feelings or explain the deep cultural reasons behind the numbers.'
      ],
      example: {
        title: 'Real-World Example: High School Sleep and Screen Time',
        scenario: 'A researcher distributes a structured survey to 450 Grade 10 students across five schools. Using statistical analysis, the study calculates that students who report more than 2 hours of smartphone use in bed sleep an average of 52 minutes less per night.',
        takeaway: 'The study provides objective, numerical, and generalizable evidence of a clear correlation across a large student population.'
      },
      keyTakeaway: 'Quantitative research excels at measuring "how much" and demonstrating statistical relationships across broad populations.',
      sourceCitation: 'Textbook Section 2.3 (pp. 27–29)'
    }
  },

  // SLIDE 13: Qualitative Research Deep-Dive
  {
    id: 'u2-s13',
    unitNumber: 2,
    slideNumber: 13,
    title: 'Qualitative: Exploring Meaning',
    section: '2.3 Qualitative Research',
    type: 'concept',
    teacherNote: 'Highlight that qualitative research is not "casual chatting". It uses structured interview guides, thematic coding protocols, and reflexivity to maintain high academic rigor.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.3',
      pages: '28–30'
    },
    content: {
      heading: 'Qualitative Research Explained',
      subheading: 'The power of words, lived experience, and human depth',
      body: 'Qualitative research explores how people experience, understand, and navigate the world around them.\n\nInstead of counting frequencies or calculating percentages, qualitative researchers examine words, stories, cultural behaviors, and observational notes to understand the human reasons behind actions.',
      bullets: [
        'Primary Data Form: Spoken words, interview transcripts, open-ended reflections, observation field notes, and visual artifacts.',
        'Key Instruments: In-depth semi-structured interviews, focus group discussions (FGDs), participant observation, and diary studies.',
        'Major Strengths: Provides rich, detailed, nuanced understanding of emotions, cultural contexts, and complex personal motivations.',
        'Main Limitation: Small sample sizes mean findings cannot be mechanically generalized as mathematical rules for entire national populations.'
      ],
      example: {
        title: 'Real-World Example: The Lived Experience of Exam Anxiety',
        scenario: 'A researcher conducts 45-minute in-depth interviews with 12 high school students who experience severe exam panic, asking them to describe their inner self-talk, physical sensations, and family expectations.',
        takeaway: 'The transcripts reveal deep underlying themes—such as intense fear of disappointing grandparents—that a simple 1-to-5 rating scale could never capture.'
      },
      keyTakeaway: 'Qualitative research gives voice to participants, uncovering the rich "why" and "how" behind human decisions and emotions.',
      sourceCitation: 'Textbook Section 2.3 (pp. 28–30)'
    }
  },

  // SLIDE 14: Side-by-Side Comparison: Quantitative vs. Qualitative
  {
    id: 'u2-s14',
    unitNumber: 2,
    slideNumber: 14,
    title: 'Comparing Methodological Approaches',
    section: '2.3 Side-by-Side Analysis',
    type: 'comparison',
    teacherNote: 'Explain that neither approach is better than the other. Advanced researchers frequently combine both in "Mixed Methods" to get both broad breadth and rich depth.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.3',
      pages: '29–30'
    },
    content: {
      heading: 'Direct Matrix: Quantitative vs. Qualitative',
      subheading: 'Comparing purpose, data, sample, and analysis',
      body: 'Review how the two methodological approaches differ across every stage of the research investigation:',
      comparison: {
        itemA: {
          label: 'Quantitative Research (Numerical & Statistical)',
          points: [
            'Core Focus: Measuring quantities, testing hypotheses, finding statistical patterns.',
            'Data Type: Numerical data, percentages, counts, rating scales.',
            'Sample Size: Large, representative samples (often hundreds or thousands).',
            'Core Questions: "How many? How much? What percentage? Is X correlated with Y?"',
            'Key Advantage: Objective, precise, easily graphed, can generalize across large groups.'
          ]
        },
        itemB: {
          label: 'Qualitative Research (Descriptive & Meaningful)',
          points: [
            'Core Focus: Understanding feelings, motivations, beliefs, and social contexts.',
            'Data Type: Spoken words, text transcripts, observational field notes.',
            'Sample Size: Smaller, purposive samples (often 8 to 25 participants in depth).',
            'Core Questions: "Why? How do people experience this? What does this mean to them?"',
            'Key Advantage: Deep, nuanced, flexible, captures authentic human voices.'
          ]
        }
      },
      keyTakeaway: 'The choice between quantitative and qualitative is determined by the research question: use quantitative to measure, qualitative to understand meaning.',
      sourceCitation: 'Textbook Section 2.3 (pp. 29–30)'
    }
  },

  // SLIDE 15: Misconception: Is Quantitative "Better Science"?
  {
    id: 'u2-s15',
    unitNumber: 2,
    slideNumber: 15,
    title: 'Misconception: "Is Quantitative Better?"',
    section: '2.3 Misconception Check',
    type: 'misconception',
    teacherNote: 'Emphasize that numbers without human context can lead to terrible policies. A government can count 10,000 empty housing units, but without qualitative interviews, they will never know why families refuse to live in them.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.3',
      pages: '29–30'
    },
    content: {
      heading: 'The "Numbers Are Real Science" Fallacy',
      subheading: 'Debunking methodological prejudice in research',
      body: 'Many novice researchers assume that quantitative research is "real science" because it contains mathematical formulas and charts, while qualitative research is dismissed as "unscientific opinion or storytelling".\n\nThis is a serious mistake. Both approaches are equally scientific when executed with rigor.\n\nNumbers tell you WHAT is happening across a population; words tell you WHY it is happening and what people feel about it.',
      comparison: {
        itemA: {
          label: 'What Quantitative Numbers Tell You',
          points: [
            '"78% of rural students in District X stopped attending online classes during the dry season."',
            'Clear, objective, measurable fact.',
            'Identifies the scale of the emergency, but cannot explain the cause.'
          ]
        },
        itemB: {
          label: 'What Qualitative Words Tell You',
          points: [
            'Interviews reveal families walked 4 km each day to fetch drinking water, leaving no time or electricity for smartphones.',
            'Provides the vital human reality behind the statistical drop.',
            'Enables policymakers to design real solutions (water wells, not more apps).'
          ]
        }
      },
      keyTakeaway: 'Numbers without context are blind; words without evidence are weak. Great researchers respect both approaches.',
      sourceCitation: 'Textbook Section 2.3 (pp. 29–30)'
    }
  },

  // SLIDE 16: Interactive Checkpoint 2: Choosing the Right Approach
  {
    id: 'u2-s16',
    unitNumber: 2,
    slideNumber: 16,
    title: 'Checkpoint: Quant or Qual?',
    section: '2.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the inquiry: Is it trying to count frequencies, or explore complex emotional and psychological adjustments? Guide them to see why multiple choice would fail here.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.3',
      pages: '30–31'
    },
    content: {
      heading: 'Method Selection Challenge: Match the Inquiry',
      body: 'Read the research goal below and determine which methodological approach is most appropriate:',
      interactiveData: {
        prompt: 'Research Goal: "An investigator wants to understand the emotional grief, loss of identity, and personal coping mechanisms experienced by teenage athletes who suffered career-ending knee injuries."',
        options: [
          {
            id: 'opt-1',
            label: 'Quantitative Research',
            explanation: 'Incorrect. Emotional grief, loss of personal identity, and unique psychological coping mechanisms are deeply personal human experiences that cannot be accurately captured with simple numbers or a 1-to-5 rating scale.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Qualitative Research',
            explanation: 'Correct! Exploring deep personal feelings, identity shifts, and psychological coping mechanisms requires in-depth semi-structured interviews and qualitative narrative analysis to capture authentic human voices.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Casual Social Media Polling',
            explanation: 'Incorrect. Investigating career-ending psychological trauma requires ethical, rigorous qualitative inquiry, not casual internet polling.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Match your method to your objective: choose quantitative for measurement and statistical patterns; choose qualitative for depth, emotion, and human meaning.',
      sourceCitation: 'Textbook Section 2.3 (pp. 30–31)'
    }
  },

  // SLIDE 17: Anatomy of a Research Study: 9 Key Components
  {
    id: 'u2-s17',
    unitNumber: 2,
    slideNumber: 17,
    title: '2.4 Components of a Research Study',
    section: '2.4 Research Anatomy Overview',
    type: 'diagram',
    teacherNote: 'Walk students through the 9 components as an interconnected chain. If the research question is blurry, the methodology will be confused, and the conclusions will be invalid.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '31–32'
    },
    content: {
      heading: 'The Anatomy of a Research Study',
      subheading: 'The 9 interconnected building blocks of every academic paper',
      body: 'Whether an academic research study is published by a Grade 10 student or a university professor, it is organized into a standardized architecture of 9 essential components.\n\nEach component performs a specific function, and all 9 must link together in a continuous chain of logical reasoning:',
      bullets: [
        '1. Research Question: The central inquiry that guides the entire study.',
        '2. Literature Review: The survey of prior academic scholarship, revealing what is known and where gaps lie.',
        '3. Research Objectives: The specific, operational actions the researcher commits to completing.',
        '4. Hypothesis: A formal, testable prediction regarding the relationship between variables (if testing a theory).',
        '5. Methodology: The operational blueprint detailing sample selection, data tools, and ethical procedures.',
        '6. Findings (Results): The raw, objective empirical data discovered, presented without personal speculation.',
        '7. Discussion: The critical interpretation explaining what the findings mean in context of prior literature.',
        '8. Conclusion: The direct answer to the research question, broader implications, and future recommendations.',
        '9. References: Complete academic citations acknowledging all intellectual sources.'
      ],
      keyTakeaway: 'A research paper is a linked chain of logic: if one link breaks (e.g., a flawed question or weak methodology), the entire study collapses.',
      sourceCitation: 'Textbook Section 2.4 (pp. 31–32)'
    }
  },

  // SLIDE 18: Research Question vs. Broad Topic
  {
    id: 'u2-s18',
    unitNumber: 2,
    slideNumber: 18,
    title: 'Research Question vs. Broad Topic',
    section: '2.4 Component Focus: Question Formulation',
    type: 'comparison',
    teacherNote: 'Teach the "Goldilocks Rule": A research question must not be too broad (unmanageable in one paper) or too narrow (answered with a single Google search), but analytical and investigable.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '31–33'
    },
    content: {
      heading: 'Turning a Vague Topic into a Sharp Question',
      subheading: 'The most important initial decision in any research project',
      body: 'A frequent stumbling block for students is confusing a general topic with a research question.\n\nA topic is merely a subject area (e.g., "Climate Change" or "Social Media"). A research question is a focused, specific, arguable, and investigable inquiry that demands evidence:',
      comparison: {
        itemA: {
          label: 'Weak Topics & Vague Questions',
          points: [
            'Topic: "Plastic Waste" (Too vast; impossible to research in one paper).',
            'Question: "Is pollution bad for the ocean?" (Vague, biased, opinion-based, already obvious).',
            'Question: "When was solar energy invented?" (Simple factual lookup; answered in 3 seconds).'
          ]
        },
        itemB: {
          label: 'Sharp, Investigable Research Questions',
          points: [
            'Focused: "To what extent did the ban on single-use plastic bags in Denpasar reduce commercial plastic waste along Sanur Beach over a 12-month period?"',
            'Focused: "How does nightly smartphone use exceeding 90 minutes correlate with self-reported attention span during morning mathematics classes among Grade 10 students?"',
            'Focused: "What are the primary economic barriers preventing smallholder coffee farmers in West Java from adopting solar drying beds?"'
          ]
        }
      },
      keyTakeaway: 'A great research question is narrow enough to investigate deeply, specific enough to measure, and open enough to require real evidence.',
      sourceCitation: 'Textbook Section 2.4 (pp. 31–33)'
    }
  },

  // SLIDE 19: The Literature Review
  {
    id: 'u2-s19',
    unitNumber: 2,
    slideNumber: 19,
    title: 'The Literature Review',
    section: '2.4 Component Focus: Literature Review',
    type: 'concept',
    teacherNote: 'Quote Isaac Newton: "If I have seen further, it is by standing on the shoulders of giants." Explain that without reading previous literature, a student might waste 6 months proving something already proven in 1995.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '32–33'
    },
    content: {
      heading: 'Standing on the Shoulders of Giants',
      subheading: 'Why researchers must read existing studies before collecting data',
      body: 'Before a researcher designs an experiment or hands out a survey, they must conduct a Literature Review—a thorough examination of books, journal articles, and official reports already published on the topic.\n\nA literature review is NOT an uncritical book report. It is an analytical review that answers three essential questions:',
      bullets: [
        '1. What is already known? Summarizes established facts, consensus theories, and standard methodologies in the field.',
        '2. What is still unknown, disputed, or contradictory? Identifies the "research gap"—the missing piece of the puzzle that nobody has adequately resolved.',
        '3. How does my study fit in? Proves that your research is necessary, original, and builds meaningfully upon the work of prior scholars.'
      ],
      keyTakeaway: 'A literature review proves why your research matters by locating the gap where new knowledge is urgently needed.',
      sourceCitation: 'Textbook Section 2.4 (pp. 32–33)'
    }
  },

  // SLIDE 20: Objectives & Hypotheses
  {
    id: 'u2-s20',
    unitNumber: 2,
    slideNumber: 20,
    title: 'Objectives & Hypotheses',
    section: '2.4 Component Focus: Goals & Predictions',
    type: 'concept',
    teacherNote: 'Clarify the difference: Objectives describe what the researcher will DO (the action plan); a Hypothesis describes what the researcher PREDICTS will happen based on theory.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '32–34'
    },
    content: {
      heading: 'Direction and Testable Prediction',
      subheading: 'Defining what you will do and what you predict will happen',
      body: 'Once your research question is clear and your literature reviewed, you define your Research Objectives and formulate a Hypothesis (if conducting an empirical quantitative/experimental study).\n\nA hypothesis is NOT a wild guess or a random hunch. It is a formal, testable proposition grounded in scientific theory:',
      comparison: {
        itemA: {
          label: 'Research Objectives (Action Plan)',
          points: [
            'State the concrete, actionable steps the researcher will execute.',
            'Action verb format: "To measure...", "To compare...", "To identify..."',
            'Example: "To measure average weekly screen time across 3 classrooms and compare test scores between students sleeping <6 hours vs. >7 hours."'
          ]
        },
        itemB: {
          label: 'Testable Hypothesis (Predicted Relationship)',
          points: [
            'A specific prediction of the relationship between two or more variables.',
            'Must be falsifiable—capable of being proven wrong by empirical data.',
            'Example: "Students who use smartphones for >2 hours immediately before sleep will achieve significantly lower short-term recall scores on morning memory assessments."'
          ]
        }
      },
      keyTakeaway: 'Objectives guide your actions; a hypothesis states your testable prediction. If a hypothesis cannot be proven wrong by evidence, it is not scientific.',
      sourceCitation: 'Textbook Section 2.4 (pp. 32–34)'
    }
  },

  // SLIDE 21: Methodology: The Operational Blueprint
  {
    id: 'u2-s21',
    unitNumber: 2,
    slideNumber: 21,
    title: 'Methodology: The Operational Blueprint',
    section: '2.4 Component Focus: Methodology',
    type: 'concept',
    teacherNote: 'Stress Cambridge exam standards: A methodology cannot just be a list of steps. The student must justify WHY each method, sample size, and tool was chosen over alternatives.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '33–35'
    },
    content: {
      heading: 'The Operational Blueprint of Inquiry',
      subheading: 'Explaining how data is collected systematically and ethically',
      body: 'The Methodology section is the recipe book of your research. It explains exactly how you gathered your data, ensuring that other researchers can evaluate your rigor and replicate your study.\n\nA great methodology must address four critical elements:',
      bullets: [
        '1. Research Design: What is the overarching approach? (e.g., cross-sectional survey, controlled laboratory experiment, ethnographic case study).',
        '2. Population & Sampling: Who was studied? How were they selected (random sampling vs. purposive sampling)? How many participants, and why is that sample size adequate?',
        '3. Data Collection Instruments: What specific tools were used? (e.g., a 15-question Likert survey, calibrated digital pH meters, semi-structured audio-recorded interviews).',
        '4. Research Ethics & Limitations: How was participant privacy protected? Did you obtain informed consent? What potential biases or limitations existed?'
      ],
      keyTakeaway: 'A strong methodology is so clear and transparent that an independent researcher anywhere in the world could follow your steps and test your conclusions.',
      sourceCitation: 'Textbook Section 2.4 (pp. 33–35)'
    }
  },

  // SLIDE 22: Triad Breakdown: Findings vs. Discussion vs. Conclusion
  {
    id: 'u2-s22',
    unitNumber: 2,
    slideNumber: 22,
    title: 'Findings, Discussion, and Conclusion',
    section: '2.4 Component Focus: The Analysis Triad',
    type: 'comparison',
    teacherNote: 'This is the #1 area where Grade 10 students lose marks. Drill the distinction: Findings = what happened (facts); Discussion = why it happened (meaning); Conclusion = what it means for the big picture.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '34–36'
    },
    content: {
      heading: 'Disentangling the Analysis Triad',
      subheading: 'The three most commonly confused sections in student research',
      body: 'Students frequently mix up Results, Discussion, and Conclusion. In professional academic inquiry, each section serves a fundamentally different intellectual purpose:',
      comparison: {
        itemA: {
          label: 'Findings / Results (Raw Evidence)',
          points: [
            'Function: Reports purely objective, factual data without personal commentary.',
            'Presentation: Tables, graphs, statistical counts, and exact participant quotes.',
            'Tone: Completely neutral and descriptive.',
            'Example: "72% of surveyed students reported falling asleep after 11:30 PM, with an average sleep duration of 5.8 hours."'
          ]
        },
        itemB: {
          label: 'Discussion & Conclusion (Meaning & Verdict)',
          points: [
            'Discussion: Interprets *why* the findings occurred, connects them back to the literature review, and explains unexpected anomalies.',
            'Example (Discussion): "This high rate of late sleep aligns with Rahman\'s (2021) findings on academic homework loads, but contradicts Tan\'s (2019) social media model..."',
            'Conclusion: Directly answers the overarching research question, states the final judgment, and provides recommendations for policy or future research.'
          ]
        }
      },
      keyTakeaway: 'Findings provide the raw facts; Discussion explains what the facts mean; Conclusion delivers the final verdict and future recommendations.',
      sourceCitation: 'Textbook Section 2.4 (pp. 34–36)'
    }
  },

  // SLIDE 23: References & Academic Integrity
  {
    id: 'u2-s23',
    unitNumber: 2,
    slideNumber: 23,
    title: 'References & Academic Integrity',
    section: '2.4 Component Focus: Referencing',
    type: 'concept',
    teacherNote: 'Highlight that referencing is not an annoying formatting rule—it is how scholars honor intellectual debt and allow skeptical readers to verify that evidence is real.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.4',
      pages: '35–36'
    },
    content: {
      heading: 'Intellectual Honesty and Academic Debt',
      subheading: 'Why proper citations are the currency of scientific progress',
      body: 'Every academic research report ends with a complete list of References (or Bibliography). Whenever you borrow a theory, statistic, quote, or idea that you did not invent yourself, you must cite the original author.\n\nReferencing is the bedrock of intellectual honesty and scientific credibility:',
      bullets: [
        '1. Intellectual Honesty: Acknowledges credit to the scholars who did the hard work before you, preventing the academic crime of plagiarism.',
        '2. Verifiability & Trust: Allows your teacher, examiner, or a skeptical reader to locate the original source and confirm that your data was not invented or distorted.',
        '3. Scientific Replicability: Connects your personal project into the global network of published scholarship, showing you understand the academic conversation.'
      ],
      keyTakeaway: 'Citing your sources does not make your research look weak; it proves you are honest, well-read, and backed by reputable evidence.',
      sourceCitation: 'Textbook Section 2.4 (pp. 35–36)'
    }
  },

  // SLIDE 24: The 8-Step Research Process
  {
    id: 'u2-s24',
    unitNumber: 2,
    slideNumber: 24,
    title: '2.5 The 8-Step Research Process',
    section: '2.5 Research Workflow & Lifecycle',
    type: 'diagram',
    teacherNote: 'Point out the cyclical nature of research. Step 8 (reporting conclusions) always uncovers new unanswered questions, which restart Step 1 for the next investigation.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.5',
      pages: '36–37'
    },
    content: {
      heading: 'The 8-Step Cycle of Scientific Inquiry',
      subheading: 'The complete lifecycle from initial curiosity to published insight',
      body: 'Research is not a chaotic jumble of activities; it is a systematic, sequential workflow. Each step depends on the rigor of the step before it:',
      bullets: [
        'Step 1: Identify the Problem / Topic: Spot an unsolved puzzle, social challenge, or contradiction in society or nature.',
        'Step 2: Review the Literature: Study what prior scholars discovered to understand the background and find the research gap.',
        'Step 3: Formulate Research Questions & Objectives: Sharpen your inquiry into specific, investigable questions (and a testable hypothesis).',
        'Step 4: Design the Methodology: Choose your paradigm (quant/qual), sample, data collection instruments, and ethical protections.',
        'Step 5: Collect the Data: Gather empirical evidence systematically in the field, lab, or through surveys.',
        'Step 6: Analyze the Data: Calculate statistics, identify qualitative themes, and create visual charts.',
        'Step 7: Interpret & Discuss Findings: Explain what the data means in light of your literature review and note limitations.',
        'Step 8: Draw Conclusions & Report: Answer the research question, suggest practical recommendations, and share your report.'
      ],
      keyTakeaway: 'Research is a continuous cycle. The conclusions of one study highlight new gaps, sparking the next generation of inquiry.',
      sourceCitation: 'Textbook Section 2.5 (pp. 36–37)'
    }
  },

  // SLIDE 25: Case Study: School Cafeteria Food Waste
  {
    id: 'u2-s25',
    unitNumber: 2,
    slideNumber: 25,
    title: 'Case Study: School Food Waste',
    section: '2.5 Applied Research Case Study',
    type: 'case-study',
    teacherNote: 'Have students trace how this student team used both quantitative and qualitative methods (mixed methods) to diagnose the problem and produce a real solution.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.5',
      pages: '36–37'
    },
    content: {
      heading: 'Walking Through the 8 Steps in Action',
      subheading: 'How a Grade 10 student team solved a real school problem',
      body: 'Let us observe how a team of Grade 10 students applied the 8-step research process to an everyday challenge in their own school:',
      example: {
        title: 'The Cafeteria Food Waste Investigation',
        scenario: '• Step 1 (Problem): Students noticed overflowing lunch trays and wasted food in the school canteen.\n• Step 2 (Literature): They read that food waste generates methane and wastes school budget.\n• Step 3 (Question): "What factors cause Grade 10 students to discard cooked vegetables during lunch?"\n• Step 4 (Method): Mixed Methods: Weighing vegetable waste for 10 days (Quant) + 12 student interviews (Qual).\n• Step 5 (Data): 48 kg of vegetables thrown away; 12 interviews completed.\n• Step 6 (Analysis): 74% of waste was boiled spinach; interviews revealed it was served cold and portions were too large.\n• Step 7 (Discussion): Students do not dislike vegetables; they dislike cold temperature and forced portion sizes.\n• Step 8 (Action & Conclusion): School cafeteria introduced heated serving pans and self-serve portion tongs. Vegetable waste dropped by 45%!',
        takeaway: 'Systematic research transformed a daily complaint into an evidence-backed school policy that achieved measurable success.'
      },
      keyTakeaway: 'Authentic research is not confined to distant laboratories. It is an everyday superpower you can use to improve your school, city, and world.',
      sourceCitation: 'Textbook Section 2.5 (pp. 36–37)'
    }
  },

  // SLIDE 26: Interactive Checkpoint 3: Process & Diagnosis
  {
    id: 'u2-s26',
    unitNumber: 2,
    slideNumber: 26,
    title: 'Checkpoint: Process & Diagnosis',
    section: '2.5 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Ask students: "What makes this student\'s claim unscientific?" Have them list every single flaw (tiny sample, leading question, no control, wild generalization).',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.5',
      pages: '37–38'
    },
    content: {
      heading: 'Diagnostic Challenge: Spot the Research Defect',
      body: 'A student conducted the project described below. Read their procedure and identify the primary methodological failure:',
      interactiveData: {
        prompt: 'A student wanted to prove that listening to music improves homework memory. Without reading prior literature, they sent a WhatsApp message to three best friends: "Music helped you study last night, right?" All three replied "Yes." The student concluded: "Scientific research proves music enhances memory for all high school students."',
        options: [
          {
            id: 'opt-1',
            label: 'The only error was choosing music instead of silence.',
            explanation: 'Incorrect. The topic itself is valid; the total failure lies in how the investigation was conducted.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'The inquiry failed all 4 pillars: leading question, tiny biased sample (3 friends), no objective empirical measurement, and an overgeneralized conclusion.',
            explanation: 'Correct! The investigation violated every principle of research: it used a biased leading question that forced agreement, sampled only 3 close friends, measured no actual memory recall empirically, and claimed a universal conclusion without evidence.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'The research was scientifically valid because qualitative interviews with friends count as authentic research.',
            explanation: 'Incorrect. Casual biased text messages with friends do not meet academic standards of qualitative methodology.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Scientific validity requires unbiased instruments, representative samples, objective measurement, and disciplined execution.',
      sourceCitation: 'Textbook Section 2.5 (pp. 37–38)'
    }
  },

  // SLIDE 27: Master Summary & Exit Challenge
  {
    id: 'u2-s27',
    unitNumber: 2,
    slideNumber: 27,
    title: 'Unit 2 Master Summary',
    section: '2.5 Unit Summary & Exit Challenge',
    type: 'summary',
    teacherNote: 'Final Exit Ticket: Ask each student to formulate one focused research question about a local issue in their neighborhood, identifying whether it requires a quantitative or qualitative approach.',
    sourceRef: {
      unit: 'Unit 2',
      section: '2.5',
      pages: '37–38'
    },
    content: {
      heading: 'Research as a Way of Thinking',
      subheading: 'Key takeaways from Unit 2: Understanding Research',
      body: 'You have now completed the foundations of research methodology in Global Perspectives.\n\nResearch is far more than a classroom assignment or a technical report. It is a critical habit of mind: an intellectual commitment to question unverified assumptions, demand empirical evidence, and seek truth systematically.',
      bullets: [
        '1. The 4 Pillars: Authentic research is systematic, empirical, replicable, and purposive—distinct from casual web browsing.',
        '2. Basic vs. Applied: Basic research expands fundamental understanding; Applied research solves immediate problems. Both are indispensable.',
        '3. Quantitative vs. Qualitative: Quantitative measures numbers and correlations across populations; Qualitative explores meanings, emotions, and lived experiences.',
        '4. The 9 Core Components: Every study links research questions, literature reviews, hypotheses, methodologies, findings, and conclusions.',
        '5. The 8-Step Lifecycle: A disciplined continuous cycle that transforms everyday challenges into verified knowledge and actionable solutions.'
      ],
      keyTakeaway: 'The world is full of loud, confident claims. A critical researcher does not accept assertions at face value—they ask: "What was your question, what was your method, and where is your evidence?"',
      sourceCitation: 'Textbook Section 2.5 (pp. 37–38)'
    }
  }
];
