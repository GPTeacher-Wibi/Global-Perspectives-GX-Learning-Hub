import { Slide } from '../../types/curriculum';

/**
 * Unit 8: Evidence — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 104–120)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_8_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u8-s1',
    unitNumber: 8,
    slideNumber: 1,
    title: 'Unit 8: Evidence',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Ask students: "In a criminal courtroom trial, who wins: the lawyer with the loudest voice, or the lawyer with the verified fingerprints and DNA evidence?" Explain that in scholarship, evidence is everything.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.1',
      pages: '104–105'
    },
    content: {
      heading: 'The Bedrock of Academic Truth',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'In Unit 7, we learned how to reason logically. But logic without facts is merely abstract philosophy.\n\nEvidence is the available body of verifiable facts, data, documentation, and expert observations indicating whether a belief, proposition, or claim is true or valid.\n\nIn a world saturated with social media misinformation, AI hallucinations, and manipulated deepfakes, learning how to critically audit evidence is an essential life skill.',
      bullets: [
        'Objective 1: Understand the nature and role of evidence and categorize the 4 primary types of evidence.',
        'Objective 2: Master the CRAAP Test (Currency, Relevance, Authority, Accuracy, Purpose) for academic sources.',
        'Objective 3: Apply the SIFT method and Lateral Reading to navigate digital misinformation and deepfakes.',
        'Objective 4: Conduct ethical field research in Indonesian local communities adhering to the Sopan Santun protocol.'
      ],
      keyTakeaway: 'A claim without evidence is just an opinion; a claim backed by verified evidence is scholarship.',
      sourceCitation: 'Textbook Section 8.1 (pp. 104–105)'
    }
  },

  // SLIDE 2: Defining Evidence & Its Role
  {
    id: 'u8-s2',
    unitNumber: 8,
    slideNumber: 2,
    title: '8.1 The Meaning of Evidence',
    section: 'Epistemological Foundations',
    type: 'definition',
    teacherNote: 'Highlight the phrase "Verifiable by an independent observer". If nobody else can inspect, test, or verify your data, it cannot qualify as academic evidence.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.1',
      pages: '104–106'
    },
    content: {
      heading: 'What Qualifies as Academic Evidence?',
      subheading: 'The difference between subjective assertion and objective proof',
      body: 'In Global Perspectives, evidence is defined as objective information that can be independently verified, tested, and inspected by other researchers.\n\nEvidence performs three indispensable functions in scientific inquiry:',
      bullets: [
        '1. Confirmatory: Provides empirical proof that supports a proposed hypothesis or claim.',
        '2. Refutational: Disproves false assertions, myths, and ungrounded superstitions with concrete data.',
        '3. Evaluative: Enables decision-makers to weigh competing policy options based on measured outcomes rather than political rhetoric.'
      ],
      keyTakeaway: 'Evidence bridges the gap between what someone claims and what is actually true in reality.',
      sourceCitation: 'Textbook Section 8.1 (pp. 104–106)'
    }
  },

  // SLIDE 3: The Hierarchy of Evidence Types
  {
    id: 'u8-s3',
    unitNumber: 8,
    slideNumber: 3,
    title: '8.2 The Four Types of Evidence',
    section: 'Evidence Classification',
    type: 'concept',
    teacherNote: 'Draw an evidentiary pyramid: Experimental & Statistical at the solid base; Expert Testimony in the middle; Anecdotal at the narrow top.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.2',
      pages: '106–108'
    },
    content: {
      heading: 'The Four Primary Types of Evidence',
      subheading: 'From broad statistical consensus to individual stories',
      body: 'Researchers draw upon four main categories of evidence, each offering different degrees of reliability and generalizability:',
      bullets: [
        '1. Statistical Evidence: Numerical data collected from large, representative samples (e.g., National Census, BPS reports, standardized test scores). Highest generalizability.',
        '2. Experimental / Scientific Evidence: Data generated through controlled clinical trials or laboratory testing that isolates cause and effect.',
        '3. Expert Testimony: Opinions, evaluations, and conclusions published by peer-reviewed scholars or credentialed specialists in that specific discipline.',
        '4. Anecdotal Evidence: Personal stories, isolated experiences, or individual testimonials. Powerful for illustration, but lowest scientific generalizability.'
      ],
      keyTakeaway: 'Combine statistical breadth with expert insight, and never rely on anecdotes alone to prove a universal rule.',
      sourceCitation: 'Textbook Section 8.2 (pp. 106–108)'
    }
  },

  // SLIDE 4: Statistical & Experimental Evidence
  {
    id: 'u8-s4',
    unitNumber: 8,
    slideNumber: 4,
    title: 'Statistical & Experimental Rigor',
    section: '8.2 Hard Empirical Evidence',
    type: 'comparison',
    teacherNote: 'Discuss why governments rely on statistical data (census, health surveys) when allocating billions of rupiah in public budgets.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.2',
      pages: '106–107'
    },
    content: {
      heading: 'Hard Evidence: Statistics and Controlled Experiments',
      subheading: 'The pillars of public policy and natural science',
      body: 'When decisions impact millions of citizens, researchers demand empirical rigor:',
      comparison: {
        itemA: {
          label: 'Statistical Evidence',
          points: [
            'Nature: Quantifies frequency, scale, and distribution across whole populations.',
            'Example: "Ministry of Health data shows childhood stunting fell from 24% to 21% nationwide across 100,000 surveyed households."',
            'Strength: Broad generalizability and high representative validity.',
            'Limitation: Can mask individual human suffering behind aggregate averages.'
          ]
        },
        itemB: {
          label: 'Experimental Evidence',
          points: [
            'Nature: Compares a test group against an isolated control group.',
            'Example: "Double-blind clinical trials of 1,000 patients demonstrated the new dengue vaccine reduced hospitalizations by 84%."',
            'Strength: Proves direct physical causality, eliminating confounding variables.',
            'Limitation: High financial cost and complex laboratory equipment required.'
          ]
        }
      },
      keyTakeaway: 'Statistical data proves widespread scale; experimental data proves direct causality.',
      sourceCitation: 'Textbook Section 8.2 (pp. 106–107)'
    }
  },

  // SLIDE 5: Expert Testimony vs. Anecdotal Evidence
  {
    id: 'u8-s5',
    unitNumber: 8,
    slideNumber: 5,
    title: 'Expert Testimony vs. Anecdotes',
    section: '8.2 Human-Centered Evidence',
    type: 'comparison',
    teacherNote: 'Highlight: An Olympic swimmer knows about swimming technique (Expert). But if that swimmer gives financial advice on cryptocurrency, they are NOT an expert in finance!',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.2',
      pages: '107–109'
    },
    content: {
      heading: 'Qualifying Voices: Experts vs. Personal Stories',
      subheading: 'When to trust human testimony in research',
      body: 'Researchers must strictly distinguish between credentialed domain authority and casual personal stories:',
      comparison: {
        itemA: {
          label: 'Expert Testimony',
          points: [
            'Definition: Insights from someone with verified advanced training, peer-reviewed publications, and domain expertise.',
            'Criteria: Must be speaking within their specific field of study.',
            'Value: Provides synthesized interpretation of complex data that non-specialists cannot parse.'
          ]
        },
        itemB: {
          label: 'Anecdotal Evidence',
          points: [
            'Definition: A single person recounting their personal experience ("My cousin ate garlic and cured his flu in 2 hours!").',
            'Flaw: Sample size = 1. Subject to placebo effect, memory bias, and coincidence.',
            'Value: Excellent as a qualitative hook to humanize a presentation, but zero proof of medical or scientific efficacy.'
          ]
        }
      },
      keyTakeaway: 'Verify that experts are speaking within their actual specialty, and never substitute anecdotes for clinical data.',
      sourceCitation: 'Textbook Section 8.2 (pp. 107–109)'
    }
  },

  // SLIDE 6: Misconception: "My Uncle\'s Story Proves It"
  {
    id: 'u8-s6',
    unitNumber: 8,
    slideNumber: 6,
    title: 'Misconception: The Anecdotal Fallacy',
    section: '8.2 Misconception Check',
    type: 'misconception',
    teacherNote: 'Ask students: "Have you ever heard someone say: \'Smoking can\'t be bad for you, because my grandfather smoked 2 packs a day and lived until 95!\'?" That is the classic anecdotal fallacy.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.2',
      pages: '108–109'
    },
    content: {
      heading: '"Personal Experience Trumps Scientific Studies"',
      subheading: 'Why single personal stories deceive human intuition',
      body: 'Because human beings are wired for storytelling, our brains find vivid personal anecdotes far more memorable than dry statistics. This leads to the dangerous Anecdotal Fallacy.\n\nIn science, one person\'s lucky survival is an outlier, not a universal law.',
      example: {
        title: 'The Motorcycle Helmet Debate',
        scenario: '• Comprehensive Statistical Evidence: Global traffic safety records covering 500,000 accidents prove wearing a certified helmet reduces fatal head injuries by 73%.\n• The Anecdote: "My neighbor crashed his motorcycle without a helmet and only got a scratched elbow! Therefore helmets are totally useless."\n• Flawed Conclusion: The neighbor got exceptionally lucky. The 500,000 statistical cases prove that without a helmet, 73% more riders suffer fatal brain trauma.',
        takeaway: 'Individual luck does not overturn mathematical and physical realities.'
      },
      keyTakeaway: 'Never use one person\'s unique story to overturn verified scientific consensus.',
      sourceCitation: 'Textbook Section 8.2 (pp. 108–109)'
    }
  },

  // SLIDE 7: The CRAAP Test Overview
  {
    id: 'u8-s7',
    unitNumber: 8,
    slideNumber: 7,
    title: '8.3 The CRAAP Test',
    section: 'Source Evaluation Framework',
    type: 'concept',
    teacherNote: 'Introduce the famous CRAAP acronym created by Sarah Blakeslee at California State University. It is the gold standard for evaluating research papers and websites.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.3',
      pages: '109–112'
    },
    content: {
      heading: 'The Gold Standard of Source Evaluation: CRAAP',
      subheading: 'Five rigorous filters every research source must pass',
      body: 'Before citing any website, journal article, or book in your Cambridge portfolio, run it through the five CRAAP criteria:\n\nIf a source fails even two of these criteria, it must be discarded immediately:',
      bullets: [
        'C — Currency: The timeliness of the information. When was it published or last updated? Are the facts outdated?',
        'R — Relevance: The importance of the information for your specific research question. Does it match your geographic and topical scope?',
        'A — Authority: The source of the information. Who is the author/publisher? What are their organizational credentials?',
        'A — Accuracy: The reliability, truthfulness, and correctness of the content. Is it supported by cited evidence? Has it been peer-reviewed?',
        'P — Purpose: The reason the information exists. Is it intended to inform, educate, sell a commercial product, or push political propaganda?'
      ],
      keyTakeaway: 'The CRAAP Test protects your bibliography from outdated, biased, and fraudulent sources.',
      sourceCitation: 'Textbook Section 8.3 (pp. 109–112)'
    }
  },

  // SLIDE 8: CRAAP in Action: Evaluating an Online Source
  {
    id: 'u8-s8',
    unitNumber: 8,
    slideNumber: 8,
    title: 'Applying CRAAP: Case Walkthrough',
    section: '8.3 Practical Audit',
    type: 'case-study',
    teacherNote: 'Walk through each letter for this realistic online article about a miracle health drink. Show how Purpose and Authority expose the fraud.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.3',
      pages: '110–113'
    },
    content: {
      heading: 'Auditing a Real-World Website with CRAAP',
      subheading: 'How a student spotted a commercial scam disguised as science',
      body: 'A student researching childhood diabetes finds an article: "Miracle Herbal Tea Cures All Blood Sugar Problems in 7 Days!"',
      example: {
        title: 'Step-by-Step CRAAP Audit',
        scenario: '• Currency: Published in 2011; links are broken (FAILED).\n• Relevance: Mentions blood sugar, but offers no adolescent data (WEAK).\n• Authority: Author is listed as "HealthGuru99" with no medical degree or institutional affiliation (FAILED).\n• Accuracy: Zero bibliography or clinical citations; claims 100% cure rate without hospital trials (FAILED).\n• Purpose: At the bottom of the page is a giant green button: "BUY 3 BOTTLES TODAY FOR ONLY $49.99!" (FAILED - Commercial sales pitch).\n\n• Verdict: Utterly unscholarly and dangerous. Rejected from research portfolio.',
        takeaway: 'Notice how the Purpose (making money) explains the total lack of Accuracy and Authority.'
      },
      keyTakeaway: 'Commercial motivation (Purpose) is often the root cause of inaccurate and fraudulent claims.',
      sourceCitation: 'Textbook Section 8.3 (pp. 110–113)'
    }
  },

  // SLIDE 9: Active Checkpoint 1: CRAAP Diagnostic
  {
    id: 'u8-s9',
    unitNumber: 8,
    slideNumber: 9,
    title: 'Checkpoint: CRAAP Test Challenge',
    section: '8.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the flaw: The study was funded directly by the company selling the product (Purpose / Conflict of Interest).',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.3',
      pages: '109–113'
    },
    content: {
      heading: 'Source Evaluation Diagnostic',
      body: 'A student finds an impressive-looking article titled "Why Energy Drinks Improve Teenage Concentration by 50%". It features glossy laboratory graphs and was published last month. However, looking at the fine print at the bottom, the research was funded and published directly by the "MegaMonster Energy Beverage Corporation".\n\nUnder the CRAAP framework, which primary criterion is severely compromised?',
      interactiveData: {
        prompt: 'Which CRAAP criterion makes this source untrustworthy for academic citation?',
        options: [
          {
            id: 'opt-1',
            label: 'Currency, because energy drinks were invented long ago.',
            explanation: 'Incorrect. The article was published last month, so its Currency is very high.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Purpose (and Authority), because the publisher has a direct financial conflict of interest to sell their own product.',
            explanation: 'Correct! The purpose of the study is commercial marketing and profit, not objective scientific discovery. The corporate sponsor has a massive financial incentive to hide health dangers (like heart palpitations) and exaggerate benefits.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Relevance, because energy drinks have nothing to do with teenagers.',
            explanation: 'Incorrect. The topic is directly relevant to teenagers; the fatal flaw is corporate bias and commercial purpose.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Always check who funded the research. Financial conflicts of interest fatally corrupt Purpose and Accuracy.',
      sourceCitation: 'Textbook Section 8.3 (pp. 109–113)'
    }
  },

  // SLIDE 10: The SIFT Method for Digital Information
  {
    id: 'u8-s10',
    unitNumber: 8,
    slideNumber: 10,
    title: '8.4 The SIFT Method',
    section: 'Digital Fact-Checking',
    type: 'concept',
    teacherNote: 'Introduce Mike Caulfield\'s SIFT framework: S - Stop, I - Investigate source, F - Find better coverage, T - Trace claims. Explain "Lateral Reading".',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.4',
      pages: '113–115'
    },
    content: {
      heading: 'Navigating the Digital Wild West: SIFT',
      subheading: 'Four rapid moves for evaluating web content and social media',
      body: 'The internet is filled with websites designed by professional disinformation agents to mimic real news outlets.\n\nDigital literacy researcher Mike Caulfield developed the SIFT method to help students fact-check viral online claims in under 90 seconds:',
      bullets: [
        'S — STOP: When you feel strong emotion (anger, shock, fear), pause! Disinformation creators engineer extreme emotions to make you share before thinking.',
        'I — INVESTIGATE the Source: Don\'t just look at the site\'s "About" page. Open a new tab and search what independent third parties say about this publisher.',
        'F — FIND Trusted Coverage: Check if reputable global or national news agencies (Reuters, BBC, Kompas, AP) are reporting the same story.',
        'T — TRACE Claims, Quotes, and Media to the Original Context: Find where the quote or video actually originated. Was a 10-year-old disaster video re-labeled as today\'s news?'
      ],
      keyTakeaway: 'SIFT gives you four rapid verification moves to prevent being deceived by viral digital falsehoods.',
      sourceCitation: 'Textbook Section 8.4 (pp. 113–115)'
    }
  },

  // SLIDE 11: Lateral Reading Explained
  {
    id: 'u8-s11',
    unitNumber: 8,
    slideNumber: 11,
    title: 'Lateral Reading vs. Vertical Reading',
    section: '8.4 Digital Verification Technique',
    type: 'comparison',
    teacherNote: 'Demonstrate tabs in a browser: Novice readers scroll down one page (Vertical). Fact-checkers immediately open 5 new browser tabs to check what others say (Lateral).',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.4',
      pages: '114–116'
    },
    content: {
      heading: 'How Professional Fact-Checkers Actually Read',
      subheading: 'Why scrolling down a suspicious website is the worst mistake you can make',
      body: 'Stanford University researchers tested professional historians, university professors, and professional fact-checkers. They discovered two radically different reading habits:',
      comparison: {
        itemA: {
          label: 'Vertical Reading (The Amateur Way)',
          points: [
            'Behavior: Stays on the website, reads top to bottom, clicks the site\'s "About Us" tab.',
            'Flaw: Easily fooled by slick web design, fake credentials, and forged testimonials written by the scammers themselves.',
            'Result: High rate of falling for disinformation.'
          ]
        },
        itemB: {
          label: 'Lateral Reading (The Fact-Checker Way)',
          points: [
            'Behavior: Leaves the site immediately! Opens 3 new browser tabs to search: "Who owns [Site Name]?" and "Is [Site Name] reliable?"',
            'Advantage: Discovers what independent journalists, fact-checking bureaus, and academics report about the publisher.',
            'Result: Uncovers frauds and front groups in under 60 seconds.'
          ]
        }
      },
      keyTakeaway: 'Never trust what a website says about itself. Read laterally across multiple independent sources.',
      sourceCitation: 'Textbook Section 8.4 (pp. 114–116)'
    }
  },

  // SLIDE 12: Misinformation, Deepfakes, and AI Hallucinations
  {
    id: 'u8-s12',
    unitNumber: 8,
    slideNumber: 12,
    title: '8.4 Navigating AI & Deepfakes',
    section: 'Contemporary Information Threats',
    type: 'concept',
    teacherNote: 'Show examples of synthetic media. Warn students that AI chatbots (ChatGPT, etc.) frequently invent fake book titles and fake page numbers (Hallucinations). Always verify citations manually!',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.4',
      pages: '115–117'
    },
    content: {
      heading: 'The Era of Synthetic Media and AI Hallucinations',
      subheading: 'Why "seeing is no longer believing" in modern research',
      body: 'Artificial intelligence and generative media have transformed the nature of evidence in global society:\n\nResearchers must apply advanced verification tools to confirm media authenticity:',
      bullets: [
        'Deepfakes & Synthetic Video: AI tools can generate realistic video and audio of world leaders saying things they never uttered. Verification: Check official press offices, look for irregular facial boundary artifacts and unnatural blinking.',
        'AI Hallucinations: Large language models frequently invent fake academic studies, complete with fake DOIs, fake authors, and fake journal names! Verification: Always locate the original PDF on Google Scholar or JSTOR yourself.',
        'Reverse Image Search: Upload suspicious viral photos to Google Images or TinEye to check when and where the photograph was first uploaded to the internet.'
      ],
      keyTakeaway: 'Never cite an AI-generated reference without locating and reading the real primary PDF yourself.',
      sourceCitation: 'Textbook Section 8.4 (pp. 115–117)'
    }
  },

  // SLIDE 13: Active Checkpoint 2: Lateral Reading Challenge
  {
    id: 'u8-s13',
    unitNumber: 8,
    slideNumber: 13,
    title: 'Checkpoint: Fact-Check Challenge',
    section: '8.4 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the moves: Notice how Lateral Reading and SIFT guide the correct verification behavior.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.4',
      pages: '113–117'
    },
    content: {
      heading: 'Digital Verification Simulation',
      body: 'A sensational video appears on TikTok showing a sudden volcanic eruption in West Java, with text claiming: "Mount Tangkuban Parahu erupted 10 minutes ago, fleeing tourists in panic!" It has 500,000 views within an hour.\n\nApplying the SIFT method, what is your immediate first research move?',
      interactiveData: {
        prompt: 'Which action follows the professional SIFT fact-checking protocol?',
        options: [
          {
            id: 'opt-1',
            label: 'Forward the video immediately to your family WhatsApp group to warn them.',
            explanation: 'Incorrect. This violates the "S" in SIFT (STOP) and spreads unverified panic.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'STOP, open a new tab, and check the official geological agency (PVMBG / BMKG) and national news outlets to see if an eruption actually occurred.',
            explanation: 'Correct! This executes "Stop" and "Find trusted coverage". Checking official volcano monitoring monitors (PVMBG) will instantly reveal if the video is authentic breaking news or recycled footage from 2019.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Assume it is true because 500,000 views proves it must be verified.',
            explanation: 'Incorrect. High view counts only prove virality and emotional clickbait, never factual accuracy.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Stop and seek official, independent confirmation before accepting or sharing breaking viral claims.',
      sourceCitation: 'Textbook Section 8.4 (pp. 113–117)'
    }
  },

  // SLIDE 14: Ethical Local Observation & Field Research
  {
    id: 'u8-s14',
    unitNumber: 8,
    slideNumber: 14,
    title: '8.5 Ethical Local Observation',
    section: 'Fieldwork Methodology',
    type: 'concept',
    teacherNote: 'Remind students: In Cambridge Global Perspectives, your Team Project often requires local fieldwork. You are researchers, not intrusive tourists.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.5',
      pages: '117–119'
    },
    content: {
      heading: 'Conducting Research in Real Communities',
      subheading: 'Ethical standards and observational protocols for local fieldwork',
      body: 'Research does not just happen in libraries. Global Perspectives encourages local empirical observation—inspecting waste disposal, public transit queues, or community markets.\n\nHowever, entering a living community as a researcher requires strict ethical standards to protect the dignity, safety, and privacy of residents:',
      bullets: [
        'Non-Intrusive Observation: Do not disrupt the daily lives, businesses, or spiritual practices of the community you are studying.',
        'Informed Consent: If interviewing individuals or taking photographs where faces are recognizable, you must explain your project and secure written or verbal consent.',
        'Protection of Vulnerable Groups: Never photograph minors (children) or vulnerable individuals without formal parental and institutional authorization.',
        'Data Anonymization: Store notes securely and use pseudonyms (e.g., "Resident A", "Vendor 1") to protect participants\' personal privacy.'
      ],
      keyTakeaway: 'Ethical research puts the dignity and privacy of human participants above all academic curiosity.',
      sourceCitation: 'Textbook Section 8.5 (pp. 117–119)'
    }
  },

  // SLIDE 15: The Indonesian Context: Sopan Santun Protocol
  {
    id: 'u8-s15',
    unitNumber: 8,
    slideNumber: 15,
    title: 'Local Context: Sopan Santun Protocol',
    section: '8.5 Cultural Fieldwork Protocol',
    type: 'concept',
    teacherNote: 'Highlight Indonesian civic culture: Never walk into an RT/RW with clipboards and cameras without formally introducing yourselves to the community elders first.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.5',
      pages: '118–119'
    },
    content: {
      heading: 'Fieldwork in Indonesia: The Sopan Santun Protocol',
      subheading: 'Navigating local neighborhood governance with cultural respect',
      body: 'In Indonesian neighborhoods (Kelurahan, RW, RT), researchers must honor established communal protocols of respect and permission:\n\nIgnoring these protocols causes communal offense and shuts down research cooperation:',
      bullets: [
        '1. Gaining Official Permission (Sowan ke Pak RT / RW): Always visit the neighborhood head (Ketua RT / RW) first with an official school letter explaining your research purpose and requesting formal permission.',
        '2. Sopan Santun (Polite Demeanor & Modest Dress): Wear neat, respectful clothing (school uniform or modest attire) and address elders with proper cultural titles (Bapak, Ibu).',
        '3. Gotong Royong Reciprocity: Never treat a community like lab rats. Share your final findings with the RT head so your research actively benefits the neighborhood!',
        '4. Respecting Local Taboos: Be mindful of prayer times (avoid conducting surveys during Maghrib or Friday prayer) and local sacred spaces.'
      ],
      keyTakeaway: 'Respecting local governance and cultural protocols opens doors and builds trust for authentic fieldwork.',
      sourceCitation: 'Textbook Section 8.5 (pp. 118–119)'
    }
  },

  // SLIDE 16: Misconception: Professional Looks = Credibility
  {
    id: 'u8-s16',
    unitNumber: 8,
    slideNumber: 16,
    title: 'Misconception: The Aesthetic Illusion',
    section: '8.5 Misconception Check',
    type: 'misconception',
    teacherNote: 'Warn students: Scammers and corporate lobbying firms have millions of dollars to hire top web designers. A beautiful website does not equal scientific truth.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.5',
      pages: '118–120'
    },
    content: {
      heading: '"A Source is Credible If It Has Professional, Sleek Design"',
      subheading: 'Why graphic design has zero correlation with scientific truth',
      body: 'Many high school students judge website credibility based entirely on visual aesthetics: clean modern fonts, beautiful color palettes, and stock photos of smiling doctors.\n\nIn reality, modern web-building tools allow anyone to build a breathtaking website in 15 minutes for $10.',
      example: {
        title: 'Comparing the Two Websites',
        scenario: '• Site A: Beautiful minimalist design, 4K video animations, slick interactive charts. But its articles are written by anonymous marketing interns with zero medical citations.\n• Site B: Ugly 1990s HTML design, plain black text on white background, zero animations. But it is hosted by the World Health Organization (WHO) and contains peer-reviewed epidemiological raw data curated by 50 medical doctors.\n\n• The Lesson: Site B is infinitely superior and credible! Never mistake graphic design for empirical evidence.',
        takeaway: 'Examine the author, citations, and methodology—never the color scheme.'
      },
      keyTakeaway: 'True authority is found in methodology and peer review, not in graphic design.',
      sourceCitation: 'Textbook Section 8.5 (pp. 118–120)'
    }
  },

  // SLIDE 17: Applied Case Study: Urban River Fieldwork
  {
    id: 'u8-s17',
    unitNumber: 8,
    slideNumber: 17,
    title: 'Case Study: Ethical Field Observation',
    section: '8.6 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through how this Grade 10 team conducted an ethical, culturally respectful river pollution study in East Jakarta.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.6',
      pages: '119–120'
    },
    content: {
      heading: 'Investigating River Waste in Kampung Melayu',
      subheading: 'How a student team combined CRAAP, SIFT, and Sopan Santun',
      body: 'Observe how a Grade 10 research team conducted ethical local fieldwork to study river plastic waste:',
      example: {
        title: 'The Multi-Method Fieldwork Walkthrough',
        scenario: '1. CRAAP Audit: Reviewed municipal environmental agency reports on river sediment levels (Currency: 2023, High Authority).\n2. Sopan Santun: Visited Pak RW 03 with an official teacher introduction letter, drank tea, explained the project, and secured a community guide.\n3. Ethical Observation: Counted discarded plastic bags along a 500-meter riverbank at 8 AM and 4 PM; asked permission before photographing trash disposal bins.\n4. Reciprocity: After completing their report, the team returned to the RW office and presented a poster showing the most clogged drainage alleys, helping residents organize a targeted Gotong Royong clean-up.',
        takeaway: 'Notice how rigorous science and cultural respect reinforced each other.'
      },
      keyTakeaway: 'Ethical fieldwork honors human relationships and transforms academic research into community impact.',
      sourceCitation: 'Textbook Section 8.6 (pp. 119–120)'
    }
  },

  // SLIDE 18: Linking Local Observations to Macro Global Trends
  {
    id: 'u8-s18',
    unitNumber: 8,
    slideNumber: 18,
    title: 'Connecting Local to Global Evidence',
    section: '8.6 Global Perspectives Integration',
    type: 'concept',
    teacherNote: 'Remind students of Cambridge GP Criteria: Always link your Local observation back to National and Global perspectives (Unit 1).',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.6',
      pages: '119–120'
    },
    content: {
      heading: 'The Global Perspectives Micro-to-Macro Bridge',
      subheading: 'How local observations illuminate worldwide challenges',
      body: 'In Cambridge Global Perspectives, local evidence is never evaluated in isolation. Great researchers use local fieldwork as a microcosm of global systemic challenges:',
      bullets: [
        'Local Level: Counting plastic bottles clogging a specific drainage ditch in North Jakarta.',
        'National Level: Connecting this local observation to Indonesian national waste statistics from the Ministry of Environment and Forestry (KLHK).',
        'Global Level: Connecting Indonesia\'s river waste challenges to the United Nations Sustainable Development Goal 14 (Life Below Water) and global ocean plastics treaties.',
        'The Analytical Synthesis: Demonstrates how international supply chains (global) interact with municipal waste collection (national) and household habits (local).'
      ],
      keyTakeaway: 'Every local observation is a window into a national debate and a global phenomenon.',
      sourceCitation: 'Textbook Section 8.6 (pp. 119–120)'
    }
  },

  // SLIDE 19: Unit 8 Master Summary
  {
    id: 'u8-s19',
    unitNumber: 8,
    slideNumber: 19,
    title: 'Unit 8 Master Summary',
    section: '8.6 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the CRAAP test, SIFT framework, and ethical fieldwork principles. Prompt students: "How will you verify your online sources tonight?"',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.6',
      pages: '119–120'
    },
    content: {
      heading: 'Mastering Evidence Evaluation',
      subheading: 'Key takeaways from Unit 8: Evidence',
      body: 'You now possess the critical evidentiary tools required to navigate the modern information landscape with absolute integrity.',
      bullets: [
        '1. Hierarchy of Evidence: Distinguish Statistical (broad scale), Experimental (causality), Expert (domain interpretation), and Anecdotal (illustration only).',
        '2. The CRAAP Test: Audit every academic source for Currency, Relevance, Authority, Accuracy, and Purpose.',
        '3. The SIFT Method: Stop, Investigate source, Find trusted coverage, Trace original context using Lateral Reading.',
        '4. AI & Media Literacy: Beware of deepfakes and AI hallucinations; always find and verify the primary source document.',
        '5. Ethical Local Research: Secure informed consent, protect participant anonymity, and respect Indonesian cultural protocols (Pak RT/RW permission, Sopan Santun).'
      ],
      keyTakeaway: 'Evidence is the foundation of truth. Demand verification, read laterally, and research ethically.',
      sourceCitation: 'Textbook Section 8.6 (pp. 119–120)'
    }
  },

  // SLIDE 20: Final Exit Challenge
  {
    id: 'u8-s20',
    unitNumber: 8,
    slideNumber: 20,
    title: 'Unit 8 Exit Challenge',
    section: '8.6 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students evaluate three conflicting sources on electric vehicle battery emissions.',
    sourceRef: {
      unit: 'Unit 8',
      section: '8.6',
      pages: '120'
    },
    content: {
      heading: 'Exit Evidence Challenge: Conflicting EV Sources',
      body: 'A student investigating electric vehicle (EV) battery emissions finds three sources with opposing claims:\n• Source 1: An online blog post by an oil company executive claiming EVs produce more pollution than diesel trucks.\n• Source 2: A marketing pamphlet from an EV manufacturer claiming EVs have 0.0% lifetime emissions.\n• Source 3: A peer-reviewed 2024 lifecycle meta-analysis by the International Energy Agency (IEA) concluding EVs emit 55–70% less lifetime greenhouse gases than petrol cars, including battery manufacturing.\n\nWhich source provides the most authoritative and accurate evidence for an academic portfolio?',
      interactiveData: {
        prompt: 'Which source passes the CRAAP test with the highest Authority and Purpose?',
        options: [
          {
            id: 'opt-1',
            label: 'Source 1, because oil executives know the most about vehicle fuel.',
            explanation: 'Incorrect. The oil executive has a massive commercial conflict of interest (Purpose) to defend fossil fuels.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Source 2, because electric car companies are heroes fighting climate change.',
            explanation: 'Incorrect. The car company has a direct commercial sales purpose and dishonestly hides battery manufacturing emissions.',
            isCorrect: false
          },
          {
            id: 'opt-3',
            label: 'Source 3, because the IEA meta-analysis is a peer-reviewed, independent global agency conducting comprehensive lifecycle empirical research without commercial bias.',
            explanation: 'Correct! Source 3 possesses impeccable Authority (independent global energy agency), high Currency (2024), rigorous Accuracy (lifecycle meta-analysis), and an objective research Purpose.',
            isCorrect: true
          }
        ]
      },
      keyTakeaway: 'Independent, peer-reviewed global agencies provide the most bias-resistant evidentiary benchmarks.',
      sourceCitation: 'Textbook Section 8.6 (p. 120)'
    }
  }
];
