import { Slide } from '../../types/curriculum';

/**
 * Unit 1: Understanding Perspectives — Master Presentation Slides
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 6–21)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → What is it? → What does it mean? → Why does it matter? → Concrete Example → Thinking Check
 */
export const UNIT_1_SLIDES: Slide[] = [
  // SLIDE 1: Unit Hook & Orientation
  {
    id: 'u1-s1',
    unitNumber: 1,
    slideNumber: 1,
    title: 'Unit 1: Understanding Perspectives',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Ask students why two friends might watch the exact same movie and give it completely opposite reviews. Introduce the idea of "filters".',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '6–7'
    },
    content: {
      heading: 'How We See the World',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'When two people look at the same global issue—such as climate change, city traffic, or social media—they often reach very different conclusions.\n\nNeither person is necessarily wrong or uninformed. Instead, they are looking at the issue through different perspectives.\n\nIn this unit, we learn what perspectives are, how they work, and how to analyze issues using different lenses and scales.',
      bullets: [
        'Objective 1: Define what a perspective is and explain its 4 core characteristics.',
        'Objective 2: Explain the 5 functions that perspectives perform in our daily lives.',
        'Objective 3: Analyze issues using 4 analytical lenses: Cultural, Economic, Political, and Social.',
        'Objective 4: Examine issues across 4 levels: Personal, Local, National, and Global.'
      ],
      keyTakeaway: 'A perspective is not just what you see. It is the lens that shapes what you notice, what you value, and what you prioritize.',
      sourceCitation: 'Textbook Section 1.1 (pp. 6–7)'
    }
  },

  // SLIDE 2: Defining "Perspective"
  {
    id: 'u1-s2',
    unitNumber: 1,
    slideNumber: 2,
    title: '1.1 What is a Perspective?',
    section: 'Academic Definition',
    type: 'definition',
    teacherNote: 'Emphasize that a perspective is an interpretation of facts, not a replacement for facts. Both sides in a debate can accept the same fact but disagree on what to do.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '6–7'
    },
    content: {
      heading: 'The Frame of the Mind',
      subheading: 'Core Definition & Comparison',
      body: 'In Global Perspectives, a perspective is a particular attitude toward or way of regarding something; a point of view.\n\nIt is the frame through which an individual or group understands information, events, and experiences.\n\nThink of a perspective like a lens on a camera. The lens decides what is in sharp focus, what stays in the background, and what is left out of the picture.',
      comparison: {
        itemA: {
          label: 'An Objective Fact',
          points: [
            'Something that can be checked, measured, or proved with data.',
            'Does not change based on who is looking at it.',
            'Example: "The city average temperature increased by 1.2°C over 30 years."'
          ]
        },
        itemB: {
          label: 'A Perspective',
          points: [
            'The meaning, priority, or value that people give to a fact.',
            'Changes based on beliefs, background, and personal interests.',
            'Example: "We must close older factories immediately" vs. "We must protect factory jobs while reducing emissions slowly."'
          ]
        }
      },
      keyTakeaway: 'Facts give us the evidence. Perspectives help us decide what the evidence means and what action society should take.',
      sourceCitation: 'Textbook Section 1.1 (pp. 6–7)'
    }
  },

  // SLIDE 3: Misconception 1 — Perspective vs. Personal Opinion
  {
    id: 'u1-s3',
    unitNumber: 1,
    slideNumber: 3,
    title: 'Misconception: Opinion vs. Perspective',
    section: '1.1 Critical Clarification',
    type: 'misconception',
    teacherNote: 'Ask a student: "If I say \'vanilla ice cream is best\', is that a research perspective or a personal preference?" Help them see the difference in evidence and reasoning.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7'
    },
    content: {
      heading: 'Is "Perspective" Just Another Word for "Opinion"?',
      subheading: 'Misconception 1: Not all opinions are academic perspectives',
      body: 'A common mistake in Grade 10 is to say: "That is just my perspective, so nobody can question it."\n\nIn Global Perspectives, an unexamined personal feeling is very different from a structured academic perspective.',
      comparison: {
        itemA: {
          label: 'Casual Personal Opinion',
          points: [
            'A quick personal feeling, taste, or preference.',
            'Often has no research, evidence, or structured reasoning behind it.',
            'Examples: "I dislike rainy days" or "Rock music is noisy."'
          ]
        },
        itemB: {
          label: 'Structured Perspective',
          points: [
            'A coherent viewpoint shared by communities, experts, or organizations.',
            'Based on shared values, real-life experience, or research evidence.',
            'Example: An environmental perspective that argues for preserving mangrove forests to protect coastlines from storm surges.'
          ]
        }
      },
      keyTakeaway: 'Anyone can have a quick opinion. In Global Perspectives, we investigate the structured reasoning and evidence behind a viewpoint.',
      sourceCitation: 'Textbook Section 1.1 (p. 7)'
    }
  },

  // SLIDE 4: Misconception 2 — Perspective vs. Bias
  {
    id: 'u1-s4',
    unitNumber: 1,
    slideNumber: 4,
    title: 'Misconception: Perspective vs. Bias',
    section: '1.1 Critical Clarification',
    type: 'misconception',
    teacherNote: 'Clarify that having a background or culture is natural and universal. Bias happens when someone refuses to consider other evidence or treats others unfairly.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7–8'
    },
    content: {
      heading: 'Does Having a Perspective Mean You Are Biased?',
      subheading: 'Misconception 2: Perspective is natural; bias is unfairness',
      body: 'Students sometimes think: "If someone has a perspective, they must be biased and cannot be trusted." This is incorrect.\n\nEvery human being has a perspective because everyone lives in a specific time, place, and culture.',
      comparison: {
        itemA: {
          label: 'Having a Perspective (Normal & Universal)',
          points: [
            'Every person sees the world through their background and experience.',
            'A person with a perspective can still listen to new facts and change their mind.',
            'Example: A doctor looks at health through medical science, but can still understand economic challenges faced by patients.'
          ]
        },
        itemB: {
          label: 'Being Biased (Unfair Preference)',
          points: [
            'An unfair leaning toward one side that ignores evidence or rejects other views without good reason.',
            'A biased view refuses to look at facts that disagree with it.',
            'Example: A tobacco company scientist who hides research showing smoking harms health.'
          ]
        }
      },
      keyTakeaway: 'Having a perspective is natural. Bias occurs when someone refuses to look at evidence honestly or treats other viewpoints unfairly.',
      sourceCitation: 'Textbook Section 1.1 (pp. 7–8)'
    }
  },

  // SLIDE 5: Characteristic 1 — Subjective
  {
    id: 'u1-s5',
    unitNumber: 1,
    slideNumber: 5,
    title: 'Characteristic 1: Subjective',
    section: '1.1 Core Characteristics',
    type: 'concept',
    teacherNote: 'Oral question: "Why might heavy rain feel like a blessing to a farmer, but a frustrating problem to a street vendor?"',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7–8'
    },
    content: {
      heading: 'Characteristic 1: Perspectives are Subjective',
      subheading: 'Filtered through individual minds and experiences',
      body: 'What does "subjective" mean?\n\nIt means that perspectives depend on the person who holds them. They are shaped by personal feelings, beliefs, values, and past experiences.',
      bullets: [
        'Why do people disagree? Because each person carries a unique life story. Two people can witness the exact same event and give two different accounts.',
        'Why it matters: In research, we must ask: "Who is speaking? What experiences and interests influence their viewpoint?"'
      ],
      example: {
        title: 'Real-Life Example: Heavy Rainfall',
        scenario: 'A rice farmer in Central Java welcomes heavy rain because it fills irrigation channels for the planting season. An online motorcycle taxi driver in Jakarta views the same rain as a serious problem because it floods streets and cuts daily income.',
        takeaway: 'The rain is the same physical event. The two perspectives differ because of their different jobs and needs.'
      },
      keyTakeaway: 'Because perspectives are subjective, no single person can claim to see every side of an issue alone.',
      sourceCitation: 'Textbook Section 1.1 (pp. 7–8)'
    }
  },

  // SLIDE 6: Characteristic 2 — Influenced by Context
  {
    id: 'u1-s6',
    unitNumber: 1,
    slideNumber: 6,
    title: 'Characteristic 2: Influenced by Context',
    section: '1.1 Core Characteristics',
    type: 'concept',
    teacherNote: 'Define context simply as "the setting or background": when, where, and under what conditions a person lives.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7–8'
    },
    content: {
      heading: 'Characteristic 2: Influenced by Context',
      subheading: 'Shaped by time, geography, and social environment',
      body: 'What does "context" mean?\n\nContext is the environment and background surrounding a person. This includes their geographic location, historical period, family culture, and economic situation.',
      bullets: [
        'Time Period: People living 100 years ago had very different ideas about medicine, transport, and communication than people have today.',
        'Geographic Location: A community living in a tropical rainforest has different priorities regarding water and land than a community living in an arid desert.',
        'Why it matters: You cannot understand someone\'s viewpoint without understanding the situation they live in.'
      ],
      example: {
        title: 'Textbook Example: Rice Price Policy in Indonesia',
        scenario: 'An urban consumer in Surabaya wants low rice prices to keep monthly food expenses low. A rice farmer in Klaten wants higher rice prices to cover fertilizer costs and earn a fair living. Both viewpoints make sense within their own context.',
        takeaway: 'Context provides the background reasons that make a perspective reasonable to the person holding it.'
      },
      keyTakeaway: 'When you study an issue, always examine the context: where and when did this viewpoint develop?',
      sourceCitation: 'Textbook Section 1.1 (pp. 7–8)'
    }
  },

  // SLIDE 7: Characteristic 3 — Dynamic and Evolving
  {
    id: 'u1-s7',
    unitNumber: 1,
    slideNumber: 7,
    title: 'Characteristic 3: Dynamic and Evolving',
    section: '1.1 Core Characteristics',
    type: 'concept',
    teacherNote: 'Highlight that "dynamic" means changing, not frozen. Ask students if they have ever changed their mind after learning a new fact.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7–8'
    },
    content: {
      heading: 'Characteristic 3: Dynamic and Evolving',
      subheading: 'Perspectives change over time as new information arrives',
      body: 'What does "dynamic" mean?\n\nIt means that perspectives are not frozen in stone. They can grow, develop, and change as individuals and societies learn new facts or live through new events.',
      bullets: [
        'How they change: A perspective can change when a person gains new evidence, travels to a new place, or lives through a crisis.',
        'Why it matters: Because viewpoints can change, public education, scientific research, and open discussion can lead to better decisions over time.'
      ],
      example: {
        title: 'Real-Life Example: Tobacco and Public Health',
        scenario: 'In the 1950s, smoking was widely viewed as fashionable and harmless. As medical researchers collected clear evidence proving that smoking causes cancer and heart disease, public perspectives shifted completely. Today, laws protect non-smokers in public places.',
        takeaway: 'New scientific evidence changed how millions of people and governments viewed tobacco.'
      },
      keyTakeaway: 'Perspectives are dynamic. When we learn reliable new evidence, our viewpoints can and should evolve.',
      sourceCitation: 'Textbook Section 1.1 (pp. 7–8)'
    }
  },

  // SLIDE 8: Characteristic 4 — Interconnected
  {
    id: 'u1-s8',
    unitNumber: 1,
    slideNumber: 8,
    title: 'Characteristic 4: Interconnected',
    section: '1.1 Core Characteristics',
    type: 'concept',
    teacherNote: 'Explain that "interconnected" means linked together. When one part changes, other parts feel the effect.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7–8'
    },
    content: {
      heading: 'Characteristic 4: Perspectives are Interconnected',
      subheading: 'Viewpoints overlap and influence one another',
      body: 'What does "interconnected" mean?\n\nIt means that perspectives do not exist inside isolated bubbles. Different viewpoints touch, influence, and depend on each other.',
      bullets: [
        'How they connect: A cultural tradition influences economic spending; an economic decision influences political laws; a political policy impacts social well-being.',
        'Why it matters: You cannot solve a problem by looking at only one perspective. Changing one part often causes unexpected changes elsewhere.'
      ],
      example: {
        title: 'Real-Life Example: Cultural Traditions & Local Markets',
        scenario: 'Major cultural and religious celebrations (such as Eid, Christmas, or Nyepi in Indonesia) directly affect bus and flight bookings, food market prices, retail employment, and government work schedules.',
        takeaway: 'Cultural beliefs directly shape economic markets and public transport systems.'
      },
      keyTakeaway: 'Perspectives are interconnected. When examining any issue, look for how different viewpoints affect one another.',
      sourceCitation: 'Textbook Section 1.1 (pp. 7–8)'
    }
  },

  // SLIDE 9: Active Checkpoint 1 — Testing the Characteristics
  {
    id: 'u1-s9',
    unitNumber: 1,
    slideNumber: 9,
    title: 'Checkpoint: Characteristics in Action',
    section: '1.1 Comprehension Check',
    type: 'quick-check',
    teacherNote: 'Have students read the scenario carefully and point to the clue words: "In 2005... rejected... however, after severe floods and climate reports... voted to build".',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '7–8'
    },
    content: {
      heading: 'Testing Your Understanding: Characteristics',
      body: 'Read the real-world scenario below and select the statement that best explains what happened:',
      interactiveData: {
        prompt: 'Scenario: In 2005, a coastal village rejected building sea walls because residents wanted open access to the beach. However, after experiencing repeated tidal floods and reading new climate reports, the village council voted to plant mangrove barriers and construct protective dikes.',
        options: [
          {
            id: 'opt-a',
            label: 'Perspectives are permanent and cannot be changed once adopted.',
            explanation: 'Incorrect. The community clearly changed their decision over time as their environmental conditions and information changed.',
            isCorrect: false
          },
          {
            id: 'opt-b',
            label: 'Perspectives are dynamic and evolve when people experience new events and evidence.',
            explanation: 'Correct! When the community experienced tidal floods and reviewed climate data, their perspective evolved from open beach access to coastal safety.',
            isCorrect: true
          },
          {
            id: 'opt-c',
            label: 'Perspectives are not influenced by geographic location or weather.',
            explanation: 'Incorrect. Their geographic context (living on an exposed coastline) was the exact reason their perspective shifted.',
            isCorrect: false
          }
        ]
      },
      sourceCitation: 'Textbook Section 1.1 (pp. 7–8)'
    }
  },

  // SLIDE 10: Functions of Perspectives — Cognitive Roles
  {
    id: 'u1-s10',
    unitNumber: 1,
    slideNumber: 10,
    title: 'Functions: Filtering & Guiding',
    section: '1.1 Functions of Perspectives',
    type: 'concept',
    teacherNote: 'Ask students: "Why can\'t the human brain pay attention to every sound, sign, and person on the street at the same time?" Introduce the idea of filtering.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '8–9'
    },
    content: {
      heading: 'What Do Perspectives Do? (Part 1)',
      subheading: 'Cognitive Functions: How our minds process the world',
      body: 'Perspectives are not just passive thoughts. They perform active jobs in our minds every day. Here are the first two cognitive functions:',
      bullets: [
        '1. Filtering Information: Every day, we see thousands of news headlines, advertisements, and messages. Our perspective acts like a filter: it decides what we notice as important and what we ignore.',
        '2. Guiding Behavior: Our perspective turns values into real actions. If you hold an environmental perspective, you carry a reusable bag, turn off unused lights, and avoid single-use plastics.'
      ],
      example: {
        title: 'Filtering in Daily Life',
        scenario: 'Two people walk past a new electric car. An engineer notices the battery technology and charging port. An accountant notices the price tag and tax incentives. Each person\'s background filters what they notice first.',
        takeaway: 'Our perspectives focus our attention on the things we know and care about.'
      },
      keyTakeaway: 'Perspectives filter the massive amount of information around us and guide our daily decisions.',
      sourceCitation: 'Textbook Section 1.1 (pp. 8–9)'
    }
  },

  // SLIDE 11: Functions of Perspectives — Social & Cultural Roles
  {
    id: 'u1-s11',
    unitNumber: 1,
    slideNumber: 11,
    title: 'Functions: Identity, Meaning & Cohesion',
    section: '1.1 Functions of Perspectives',
    type: 'concept',
    teacherNote: 'Explain "gotong royong" as mutual assistance or community cooperation, a natural Indonesian example of shared values helping people work together.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '8–9'
    },
    content: {
      heading: 'What Do Perspectives Do? (Part 2)',
      subheading: 'Social & Cultural Functions: How communities work together',
      body: 'Perspectives also help human societies stay united and understand difficult situations. Here are the other three functions:',
      bullets: [
        '3. Shaping Identity: Perspectives give us a sense of who we are and what group we belong to (for example: identifying as an Indonesian citizen, a student, or a member of a local community).',
        '4. Providing Meaning: When a crisis or natural disaster happens, our perspective helps us understand why it matters and how we should respond morally.',
        '5. Facilitating Social Cohesion: When community members share core values, they can work together on common goals—such as community cooperation (gotong royong) to clean local rivers or repair neighborhood facilities.'
      ],
      keyTakeaway: 'Shared perspectives build trust and cooperation, allowing communities to solve common challenges together.',
      sourceCitation: 'Textbook Section 1.1 (pp. 8–9)'
    }
  },

  // SLIDE 12: Burger Bliss Case Study — Situation & Challenge
  {
    id: 'u1-s12',
    unitNumber: 1,
    slideNumber: 12,
    title: 'Case Study: Burger Bliss (The Situation)',
    section: '1.1 Textbook Case Study',
    type: 'case-study',
    teacherNote: 'Tell students this is a real-world pattern: many international companies fail when they assume all countries have the exact same habits.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '8–9'
    },
    content: {
      heading: 'When Global Business Meets Local Reality',
      subheading: 'Step 1: The Situation and Challenge',
      body: 'In Chapter 1, the textbook presents the case of "Burger Bliss", a popular Western fast-food chain famous for giant beef burgers and quick counter service.\n\nThe corporate managers decided to expand into Southeast Asia. They assumed that because their signature burger was a bestseller in the West, it would automatically be a bestseller in Southeast Asia with the exact same menu, sizes, and store design.',
      example: {
        title: 'The Challenge',
        scenario: 'After opening several stores, sales fell sharply. Local customers visited once out of curiosity, but rarely returned. The corporate managers were confused. Why did customers not embrace their famous burgers?',
        takeaway: 'The company treated food as a simple physical product, forgetting that eating is deeply rooted in local culture and habits.'
      },
      keyTakeaway: 'Assuming that your own habits and preferences are universal is a major perspective blind spot.',
      sourceCitation: 'Textbook Section 1.1 (p. 8)'
    }
  },

  // SLIDE 13: Burger Bliss Case Study — Comparing the Viewpoints
  {
    id: 'u1-s13',
    unitNumber: 1,
    slideNumber: 13,
    title: 'Burger Bliss: Deconstructing Viewpoints',
    section: '1.1 Textbook Case Study',
    type: 'comparison',
    teacherNote: 'Have students compare the two columns. Point out that neither group was wrong; they simply had different priorities and dining traditions.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '8–9'
    },
    content: {
      heading: 'Two Perspectives on the Same Meal',
      subheading: 'Step 2: Understanding the reasoning on both sides',
      body: 'Let us examine why the corporate team and the local customers saw the restaurant so differently:',
      comparison: {
        itemA: {
          label: 'Western Corporate Perspective',
          points: [
            'Goal: High speed, individual supersized portions, and standardized beef burgers.',
            'Assumption: Customers eat quickly and alone or in small pairs during short lunch breaks.',
            'Blind Spot: Assumed that fast-food habits in New York or London are the same everywhere.'
          ]
        },
        itemB: {
          label: 'Local Southeast Asian Perspective',
          points: [
            'Dietary Needs: Religious dietary rules (such as Halal certification) are essential for customer trust.',
            'Food Traditions: Warm rice and savory sauces are preferred over dry bread and giant beef patties.',
            'Dining Culture: Eating out is a social and family event. People want shared dishes and comfortable seating.'
          ]
        }
      },
      keyTakeaway: 'Both perspectives were logical from their own viewpoint. The company failed because it did not examine the local perspective first.',
      sourceCitation: 'Textbook Section 1.1 (pp. 8–9)'
    }
  },

  // SLIDE 14: Burger Bliss Case Study — What We Learn
  {
    id: 'u1-s14',
    unitNumber: 1,
    slideNumber: 14,
    title: 'Burger Bliss: What We Learn',
    section: '1.1 Case Analysis',
    type: 'concept',
    teacherNote: 'Ask students what international fast-food brands in Indonesia (like McDonald\'s or KFC) sell on their menus today (fried chicken with rice, sambal, Halal signs) to show how successful brands adapted.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.1',
      pages: '8–9'
    },
    content: {
      heading: 'What Burger Bliss Teaches Us About Perspective',
      subheading: 'Step 3: Lessons for Global Perspectives researchers',
      body: 'The Burger Bliss case illustrates two core lessons taught in Chapter 1:',
      bullets: [
        '1. Perspectives Filter Information: The executives filtered for "tasty burgers" and "fast service". Their perspective filtered out local religious requirements, staple foods, and social dining traditions.',
        '2. Solutions Require Understanding Local Viewpoints: Successful international chains adapted by adding localized items (such as fried chicken, warm rice, and local chili sauces) and obtaining proper Halal certification.'
      ],
      interactiveData: {
        prompt: 'Teacher Discussion Question: Can you think of another product that had to change to fit local culture?',
        revealedText: 'Examples include car manufacturers placing steering wheels on the right side for Indonesia and Japan, streaming services adding local subtitles and regional films, or clothing brands offering modest wear collections.'
      },
      keyTakeaway: 'To succeed in any international project, you must understand the cultural and social perspectives of the people you serve.',
      sourceCitation: 'Textbook Section 1.1 (pp. 8–9)'
    }
  },

  // SLIDE 15: 1.2 Four Types of Perspectives (Overview)
  {
    id: 'u1-s15',
    unitNumber: 1,
    slideNumber: 15,
    title: '1.2 Four Types of Perspectives',
    section: 'The 4 Analytical Lenses',
    type: 'concept',
    teacherNote: 'Introduce these 4 lenses as the "Cambridge analytical toolkit". In research essays, students should always look through all four.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.2',
      pages: '10–13'
    },
    content: {
      heading: 'Four Lenses for Analyzing Any Global Issue',
      subheading: 'Cultural, Economic, Political, and Social',
      body: 'When investigating any issue in Global Perspectives, we analyze it using four distinct analytical lenses:\n\nThese four lenses help researchers see different dimensions of a complex problem.',
      bullets: [
        'Cultural Perspective: Focuses on beliefs, heritage, religion, traditions, languages, and moral customs.',
        'Economic Perspective: Focuses on costs, resources, jobs, trade, income, and financial trade-offs.',
        'Political Perspective: Focuses on laws, government power, official policies, rights, and treaties.',
        'Social Perspective: Focuses on human equity, public health, education, community well-being, and vulnerable groups.'
      ],
      keyTakeaway: 'A strong research inquiry examines all four lenses, rather than looking only at one angle.',
      sourceCitation: 'Textbook Section 1.2 (pp. 10–13)'
    }
  },

  // SLIDE 16: Cultural Perspective vs. Economic Perspective
  {
    id: 'u1-s16',
    unitNumber: 1,
    slideNumber: 16,
    title: 'Cultural Lens vs. Economic Lens',
    section: '1.2 Analytical Lenses',
    type: 'comparison',
    teacherNote: 'Remind students: Economics is not just "money"—it is about resources, jobs, and trade-offs. Culture is not just "art"—it is about what people believe and value.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.2',
      pages: '10–12'
    },
    content: {
      heading: 'Values and Heritage vs. Resources and Livelihoods',
      subheading: 'Comparing concerns, questions, and examples',
      comparison: {
        itemA: {
          label: 'The Cultural Perspective',
          points: [
            'What it focuses on: Shared beliefs, moral heritage, religious values, language, and ancestral customs.',
            'Questions it asks: "Does this project respect or harm community traditions and sacred heritage?"',
            'Concerns: Protecting traditional practices, dietary laws, and cultural identity.',
            'Example: Debating whether ancient forests should remain protected because indigenous communities consider them sacred.'
          ]
        },
        itemB: {
          label: 'The Economic Perspective',
          points: [
            'What it focuses on: Costs, income, job creation, trade, investment, and resource allocation.',
            'Questions it asks: "Is this financially viable? What are the costs, benefits, and job impacts?"',
            'Concerns: Household budgets, business profit, government spending, and economic growth.',
            'Example: Calculating whether building a solar power plant will create sustainable local jobs or increase electricity costs.'
          ]
        }
      },
      keyTakeaway: 'Culture asks "What is sacred or meaningful to this community?"; Economics asks "What are the costs, benefits, and resources required?"',
      sourceCitation: 'Textbook Section 1.2 (pp. 10–12)'
    }
  },

  // SLIDE 17: Political Perspective vs. Social Perspective
  {
    id: 'u1-s17',
    unitNumber: 1,
    slideNumber: 17,
    title: 'Political Lens vs. Social Lens',
    section: '1.2 Analytical Lenses',
    type: 'comparison',
    teacherNote: 'Clarify the distinction: Politics is about who has the official legal power to pass and enforce laws. Social is about how real human beings and vulnerable groups live.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.2',
      pages: '12–13'
    },
    content: {
      heading: 'Governance and Power vs. Human Equity and Well-Being',
      subheading: 'Comparing legal authority with human community welfare',
      comparison: {
        itemA: {
          label: 'The Political Perspective',
          points: [
            'What it focuses on: Laws, state power, government regulations, voting rights, and international agreements.',
            'Questions it asks: "Who holds authority? What laws apply? How will this policy be enforced?"',
            'Concerns: National security, sovereignty, legal compliance, and diplomacy between governments.',
            'Example: A national government passing a law that sets limits on vehicle exhaust emissions.'
          ]
        },
        itemB: {
          label: 'The Social Perspective',
          points: [
            'What it focuses on: Human well-being, equality, education, healthcare access, and quality of life.',
            'Questions it asks: "How does this affect vulnerable groups? Does it reduce or increase inequality?"',
            'Concerns: Protecting low-income families, elderly citizens, children, and people with disabilities.',
            'Example: Checking whether public sidewalks have ramps and tactile paving for wheelchair users and visually impaired residents.'
          ]
        }
      },
      keyTakeaway: 'Politics focuses on laws, authority, and official policy; the Social lens focuses on human dignity, access, and community well-being.',
      sourceCitation: 'Textbook Section 1.2 (pp. 12–13)'
    }
  },

  // SLIDE 18: Multi-Lens Case — The Story of a Cup of Coffee
  {
    id: 'u1-s18',
    unitNumber: 1,
    slideNumber: 18,
    title: 'Multi-Lens Case: A Cup of Coffee',
    section: '1.2 Multi-Lens Thinking',
    type: 'diagram',
    teacherNote: 'Point out: The coffee cup did not change. But by switching our lens, we saw four completely different realities behind it.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.2',
      pages: '11'
    },
    content: {
      heading: 'One Product, Four Different Lenses',
      subheading: 'Textbook Section 1.2 Case Study (p. 11)',
      body: 'The textbook uses an everyday item to show how all four lenses apply to a single topic: a cup of coffee served in a cafe.\n\nNotice how each lens highlights a different part of the same cup of coffee:',
      bullets: [
        'Cultural Lens: Coffee as a social ritual. In Indonesia, "ngopi" at a warung kopi is an important space for community bonding, conversation, and hospitality.',
        'Economic Lens: Value along the supply chain. A customer pays Rp 40,000 for a cup in a cafe, but the smallholder farmer in Aceh or Toraja may receive less than Rp 2,000 in raw bean revenue.',
        'Political Lens: Trade regulations and export rules. Governments set export taxes, agricultural standards, and international treaties regarding deforested land.',
        'Social Lens: Labor conditions on farms. Working hours, fair wages for female pickers, and access to clean water and schooling for seasonal workers\' children.'
      ],
      keyTakeaway: 'No single lens gives you the whole story. You only understand the issue when you combine multiple lenses.',
      sourceCitation: 'Textbook Section 1.2 (p. 11)'
    }
  },

  // SLIDE 19: Recognizing Perspective Types (Clues & Questions)
  {
    id: 'u1-s19',
    unitNumber: 1,
    slideNumber: 19,
    title: 'Recognizing Perspective Types',
    section: '1.2 Analysis Guide',
    type: 'comparison',
    teacherNote: 'Caution students: Do not just search for a single word. Look at what the author is actually arguing about.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.2',
      pages: '10–13'
    },
    content: {
      heading: 'Vocabulary Clues and Investigative Questions',
      subheading: 'How to identify which perspective is being used in an article',
      comparison: {
        itemA: {
          label: 'Cultural & Economic Clues',
          points: [
            'CULTURAL CLUES: Words like "faith", "tradition", "heritage", "beliefs", "language", "identity".',
            'Investigative Question: "Does this concern beliefs, customs, or way of life?"',
            'ECONOMIC CLUES: Words like "cost", "revenue", "jobs", "budget", "market", "trade", "investment".',
            'Investigative Question: "Does this concern financial resources, jobs, or commercial trade?"'
          ]
        },
        itemB: {
          label: 'Political & Social Clues',
          points: [
            'POLITICAL CLUES: Words like "law", "government", "policy", "regulations", "treaty", "elections", "power".',
            'Investigative Question: "Does this concern state authority, legislation, or government action?"',
            'SOCIAL CLUES: Words like "equality", "well-being", "poverty", "healthcare", "education", "vulnerable groups".',
            'Investigative Question: "Does this concern human welfare, access, or fairness in society?"'
          ]
        }
      },
      keyTakeaway: 'When reading a source, look at the main question the author is trying to answer to identify their lens.',
      sourceCitation: 'Textbook Section 1.2 (pp. 10–13)'
    }
  },

  // SLIDE 20: Active Checkpoint 2 — Identifying the Lens
  {
    id: 'u1-s20',
    unitNumber: 1,
    slideNumber: 20,
    title: 'Checkpoint: Identifying the Lens',
    section: '1.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Guide students: The policy costs money and is enacted by a council, but what is its main goal? It aims to help vulnerable citizens travel independently.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.2',
      pages: '13'
    },
    content: {
      heading: 'Which Analytical Lens is Being Used?',
      body: 'Read the policy statement below and choose the perspective that best describes its main focus:',
      interactiveData: {
        prompt: 'Statement: "The city council approved a project to purchase low-floor buses and install audio signals at road crossings so that residents with physical disabilities and senior citizens can travel across town safely and independently."',
        options: [
          {
            id: 'opt-1',
            label: 'Economic Perspective',
            explanation: 'Incorrect. While buses cost money, the primary goal of the project is accessibility and equality for vulnerable residents, not profit or business investment.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Social Perspective',
            explanation: 'Correct! The main concern is community well-being, equal access to public services, and dignity for elderly residents and people with disabilities.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Cultural Perspective',
            explanation: 'Incorrect. This policy does not deal with religious beliefs, ancestral traditions, or artistic expression.',
            isCorrect: false
          }
        ]
      },
      sourceCitation: 'Textbook Quick Check 1.2 (p. 13)'
    }
  },

  // SLIDE 21: 1.3 Levels of Perspectives (The 4 Scales)
  {
    id: 'u1-s21',
    unitNumber: 1,
    slideNumber: 21,
    title: '1.3 Levels of Perspectives',
    section: 'The 4 Scales of Analysis',
    type: 'concept',
    teacherNote: 'Use the metaphor of a map zoom: Zoomed in to one house (Personal), a neighborhood (Local), an entire country (National), and the whole Earth (Global).',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.3',
      pages: '13–16'
    },
    content: {
      heading: 'The 4 Scales: From Personal to Global',
      subheading: 'Understanding at what altitude an issue operates',
      body: 'In addition to knowing WHAT lens you are using, you must determine at WHAT SCALE the issue is operating:\n\nGlobal Perspectives examines issues across four concentric levels:',
      bullets: [
        'Personal Level: An individual\'s direct lived experience, household budget, personal health, and daily choices (for example: how a bus fare increase affects your family budget).',
        'Local Level: The neighborhood, school, town, or city (for example: a village clean-water initiative or a municipal waste recycling center).',
        'National Level: The nation-state, domestic laws, countrywide taxes, and national policies (for example: Indonesia\'s national health insurance system, BPJS).',
        'Global Level: International bodies (UN, WHO), planetary climate systems, and worldwide agreements (for example: the Paris Climate Agreement).'
      ],
      keyTakeaway: 'The scope of an issue changes as you move from personal daily life to international agreements.',
      sourceCitation: 'Textbook Section 1.3 (pp. 13–16)'
    }
  },

  // SLIDE 22: Critical Distinction — Type vs. Level
  {
    id: 'u1-s22',
    unitNumber: 1,
    slideNumber: 22,
    title: 'Critical Distinction: Type vs. Level',
    section: '1.3 Conceptual Clarification',
    type: 'misconception',
    teacherNote: 'This is the most critical conceptual distinction in Unit 1. Make sure students understand that every issue has BOTH a Type and a Level.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.3',
      pages: '13–16'
    },
    content: {
      heading: 'Do Not Confuse "Lens" (Type) with "Scale" (Level)!',
      subheading: 'Misconception 3: "Economic" and "Personal" are not competing categories',
      body: 'A very common mistake in Grade 10 exams is treating "Personal" as a perspective type, or treating "Economic" as a level.\n\nThey are two completely different questions:',
      comparison: {
        itemA: {
          label: 'TYPE of Perspective (The "What" Lens)',
          points: [
            'What kind of issue are we examining?',
            'The Four Types: Cultural, Economic, Political, Social.',
            'Analogy: Which tool are you holding? A calculator (Economic), a law book (Political), or a community survey (Social)?'
          ]
        },
        itemB: {
          label: 'LEVEL of Perspective (The "Where" Scale)',
          points: [
            'At what geographic scale does it take place?',
            'The Four Levels: Personal, Local, National, Global.',
            'Analogy: What is your camera zoom? Zoomed into one student, or zoomed out to the entire planet?'
          ]
        }
      },
      interactiveData: {
        prompt: 'Teacher Check: Can an issue be BOTH Economic and Personal?',
        revealedText: 'YES! Your household\'s monthly electricity bill is an ECONOMIC type at the PERSONAL level. Meanwhile, Indonesia\'s national debt is an ECONOMIC type at the NATIONAL level. Every real issue has BOTH a type and a level!'
      },
      keyTakeaway: 'Always identify both: What lens am I using? (Type) and At what scale is this happening? (Level).',
      sourceCitation: 'Textbook Section 1.3 (pp. 13–16)'
    }
  },

  // SLIDE 23: Multi-Level Case Study — Electric Vehicles in Indonesia
  {
    id: 'u1-s23',
    unitNumber: 1,
    slideNumber: 23,
    title: 'Case Study: Electric Vehicles in Indonesia',
    section: '1.3 Multi-Level Analysis',
    type: 'case-study',
    teacherNote: 'Help students notice how an idea that sounds great at the Global level (reducing emissions) can create complex challenges at the Local level (mining runoff in small towns).',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.3',
      pages: '14–16'
    },
    content: {
      heading: 'Tracking One Technology Across 4 Scales',
      subheading: 'How Electric Vehicles (EVs) appear at each level',
      body: 'Indonesia is developing its electric vehicle and battery manufacturing industry using its nickel reserves. Notice how the issue looks different at each level:',
      bullets: [
        'Personal Level: A commuter in Jakarta compares the high purchase price of an electric scooter against fuel savings and exemption from odd-even traffic rules.',
        'Local Level: Communities in Morowali, Central Sulawesi, see new jobs at nickel smelters, but local fishing communities worry about water quality and coastal pollution from factories.',
        'National Level: The Indonesian government provides tax incentives for electric car factories to build national industrial strength and reduce expensive imported oil subsidies.',
        'Global Level: The United Nations and international climate agreements encourage electric vehicles worldwide to lower carbon emissions and combat planetary warming.'
      ],
      keyTakeaway: 'A complete research analysis does not stop at personal benefits. It examines how global goals and national plans impact local communities.',
      sourceCitation: 'Textbook Section 1.3 (pp. 14–16)'
    }
  },

  // SLIDE 24: Active Checkpoint 3 — Classifying Scale and Lens
  {
    id: 'u1-s24',
    unitNumber: 1,
    slideNumber: 24,
    title: 'Checkpoint: Scale and Lens',
    section: '1.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Ask students two separate questions: 1. Who is involved? (195 countries worldwide -> Global). 2. What action is being taken? (Signing a treaty -> Political/Legal).',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.3',
      pages: '15–16'
    },
    content: {
      heading: 'Two-Dimensional Diagnosis: Identify Type and Level',
      body: 'Read the international scenario below and classify BOTH its level and its perspective type:',
      interactiveData: {
        prompt: 'Scenario: "Delegates representing 195 countries at the United Nations COP Climate Conference signed a legally binding international treaty to reduce fossil fuel subsidies worldwide."',
        options: [
          {
            id: 'opt-1',
            label: 'Local Level + Cultural Perspective',
            explanation: 'Incorrect. The United Nations represents countries worldwide (Global level), and the treaty deals with international law and governance (Political perspective).',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Global Level + Political Perspective',
            explanation: 'Correct! The action takes place on a worldwide scale (195 countries at the UN), and involves international legal treaties, state power, and official diplomacy (Political perspective).',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'National Level + Social Perspective',
            explanation: 'Incorrect. While national leaders were present, the scope is international and worldwide (Global), and the mechanism is an international legal treaty (Political).',
            isCorrect: false
          }
        ]
      },
      sourceCitation: 'Textbook Section 1.3 (pp. 15–16)'
    }
  },

  // SLIDE 25: Misconception Check — Is There Only One "Correct" Perspective?
  {
    id: 'u1-s25',
    unitNumber: 1,
    slideNumber: 25,
    title: 'Misconception: The Single "Right" Answer',
    section: '1.3 Synthesis & Reflection',
    type: 'misconception',
    teacherNote: 'Emphasize that multiple perspectives do not mean "anything goes". Strong viewpoints must be supported by reliable evidence and clear reasoning.',
    sourceRef: {
      unit: 'Unit 1',
      section: '1.3',
      pages: '16–20'
    },
    content: {
      heading: 'Does a Complex Global Issue Have Only One "Correct" Perspective?',
      subheading: 'Misconception 4: Complex global challenges involve competing valid priorities',
      body: 'Students sometimes ask: "Which perspective is the right one? Should we only care about the environment, or only care about the economy?"\n\nIn Global Perspectives, we learn that complex problems usually involve multiple legitimate priorities.',
      comparison: {
        itemA: {
          label: 'The Simplistic View',
          points: [
            'Believes there is only one correct answer and that anyone who disagrees is foolish or evil.',
            'Ignores the trade-offs: for example, banning all logging immediately without considering where local timber workers will find food.'
          ]
        },
        itemB: {
          label: 'The Global Perspectives View',
          points: [
            'Understands that different people have real, legitimate needs and values.',
            'Looks for sustainable solutions that balance environmental protection, local livelihoods, and fair laws.'
          ]
        }
      },
      keyTakeaway: 'Understanding another viewpoint does not mean you must agree with it. It means understanding their reasons so you can build workable, fair solutions.',
      sourceCitation: 'Textbook Chapter 1 Review (pp. 16–20)'
    }
  },

  // SLIDE 26: Master Summary — Review of Key Ideas
  {
    id: 'u1-s26',
    unitNumber: 1,
    slideNumber: 26,
    title: 'Unit 1 Review: Key Ideas to Remember',
    section: 'Master Summary',
    type: 'summary',
    teacherNote: 'Use this slide for final recap. Ask students to summarize each of the 4 characteristics and 4 lenses in their own words.',
    sourceRef: {
      unit: 'Unit 1',
      section: 'Chapter 1 Review',
      pages: '20–21'
    },
    content: {
      heading: 'Core Lessons from Unit 1',
      subheading: 'What every Grade 10 student should take forward',
      body: 'As we conclude Unit 1, here are the key concepts that will guide your research throughout the course:',
      bullets: [
        '1. A Perspective is a Lens: It is not a casual guess; it is a structured viewpoint shaped by context, beliefs, and evidence.',
        '2. Four Core Characteristics: Perspectives are Subjective, Influenced by Context, Dynamic and Evolving, and Interconnected.',
        '3. Five Everyday Functions: Perspectives filter information, guide behavior, shape identity, provide meaning, and facilitate community cooperation.',
        '4. Four Analytical Lenses: Always examine the Cultural, Economic, Political, and Social aspects of an issue.',
        '5. Four Scales of Analysis: Track issues from Personal lived realities to Local, National, and Global levels.'
      ],
      keyTakeaway: 'Mastering multiple perspectives allows you to see the full picture and design thoughtful solutions to real-world challenges.',
      sourceCitation: 'Textbook Chapter 1 Review (pp. 20–21)'
    }
  },

  // SLIDE 27: Exit Thinking Challenge — Classroom Application
  {
    id: 'u1-s27',
    unitNumber: 1,
    slideNumber: 27,
    title: 'Exit Thinking Challenge',
    section: 'Student Application & Reflection',
    type: 'discussion-prompt',
    teacherNote: 'Divide the class into small pairs: one pair explores the student/parent viewpoint, and the other pair explores the teacher/school viewpoint. Then have them find a middle path.',
    sourceRef: {
      unit: 'Unit 1',
      section: 'Chapter 1 Review',
      pages: '21'
    },
    content: {
      heading: 'Classroom Application: The Smartphone Debate',
      subheading: 'Applying lenses and levels to a familiar debate',
      body: 'Consider this real-world debate taking place in schools around the world:\n\n"Should schools enforce a complete ban on smartphones during the entire school day?"\n\nHow would you examine this debate using different lenses and levels?',
      interactiveData: {
        prompt: 'Tap to examine a balanced deconstruction of this debate:',
        revealedText: '• Social & Educational Lens (Teachers & School Leaders):\nSmartphones can distract students during lessons, reduce face-to-face social conversations with peers, and increase online drama during school hours.\n\n• Practical & Personal Lens (Students & Parents):\nSmartphones give students a sense of security when commuting home on public buses, allow working parents to send emergency messages, and provide access to digital study tools.\n\n• A Balanced Solution:\nRather than an all-or-nothing fight, many schools require phones to be kept inside lockers during classes, while allowing phone access before and after school for transit and family safety.'
      },
      keyTakeaway: 'A Global Perspectives researcher looks beneath emotional arguments to understand the real needs and values on all sides.',
      sourceCitation: 'Textbook Chapter 1 Exit Reflection (p. 21)'
    }
  }
];
