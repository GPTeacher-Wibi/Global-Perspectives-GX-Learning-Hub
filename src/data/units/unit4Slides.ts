import { Slide } from '../../types/curriculum';

/**
 * Unit 4: Data Synthesis — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 54–65)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_4_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u4-s1',
    unitNumber: 4,
    slideNumber: 1,
    title: 'Unit 4: Data Synthesis',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Bring three jigsaw puzzle pieces to class. Ask: "Can anyone tell what the whole picture is from just one piece?" Explain that synthesis is fitting multiple pieces together to see the complete picture.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.1',
      pages: '54–55'
    },
    content: {
      heading: 'Connecting Findings to Form the Big Picture',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'In Unit 3, we explored how researchers analyze individual datasets to discover patterns.\n\nHowever, a single study rarely gives us the complete truth. One study might only examine 50 students in Jakarta, while another tests 200 adults in Surabaya.\n\nData synthesis is the advanced research process of combining, comparing, and integrating findings from multiple independent studies to build a comprehensive, holistic understanding.',
      bullets: [
        'Objective 1: Understand the core distinction between Data Analysis (examining parts) and Data Synthesis (integrating wholes).',
        'Objective 2: Master the three primary synthesis methodologies: Narrative Synthesis, Meta-Analysis, and Thematic Synthesis.',
        'Objective 3: Use a Synthesis Matrix to organize multiple sources, identify patterns, spot contradictions, and find research gaps.',
        'Objective 4: Apply synthesized evidence to formulate balanced, defensible global policy recommendations.'
      ],
      keyTakeaway: 'Analysis examines individual findings; synthesis connects multiple findings into a coherent whole.',
      sourceCitation: 'Textbook Section 4.1 (pp. 54–55)'
    }
  },

  // SLIDE 2: Analysis vs. Synthesis
  {
    id: 'u4-s2',
    unitNumber: 4,
    slideNumber: 2,
    title: '4.1 Analysis vs. Synthesis',
    section: 'Conceptual Distinction',
    type: 'comparison',
    teacherNote: 'Highlight the Greek roots: Analysis means "loosening apart / breaking down", while Synthesis means "putting together / combining".',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.1',
      pages: '54–56'
    },
    content: {
      heading: 'Breaking Down vs. Putting Together',
      subheading: 'Two complementary phases of deep scientific inquiry',
      body: 'Novice researchers frequently confuse analysis with synthesis. While both are critical research skills, they operate in opposite cognitive directions:',
      comparison: {
        itemA: {
          label: 'Data Analysis (Breaking Down)',
          points: [
            'Direction: Moves from the whole to the parts.',
            'Focus: Scrutinizes a single dataset or single study.',
            'Guiding Question: "What do the numbers or interview quotes in THIS study show?"',
            'Outcome: Summary statistics, averages, identified themes for one sample.'
          ]
        },
        itemB: {
          label: 'Data Synthesis (Putting Together)',
          points: [
            'Direction: Moves from diverse parts to a new whole.',
            'Focus: Connects multiple independent studies and diverse perspectives.',
            'Guiding Question: "How do findings across ALL these studies fit together?"',
            'Outcome: Broader conclusions, reconciled contradictions, identified research gaps.'
          ]
        }
      },
      keyTakeaway: 'You analyze one study at a time; you synthesize across multiple studies together.',
      sourceCitation: 'Textbook Section 4.1 (pp. 54–56)'
    }
  },

  // SLIDE 3: The Forest and Trees Metaphor
  {
    id: 'u4-s3',
    unitNumber: 4,
    slideNumber: 3,
    title: 'The Forest vs. The Trees Metaphor',
    section: '4.1 Conceptual Framework',
    type: 'concept',
    teacherNote: 'Have students sketch a single tree in their notebook, then sketch an entire mountain forest. Emphasize that you cannot navigate an entire region by only inspecting one branch of one tree.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.1',
      pages: '55–56'
    },
    content: {
      heading: 'Seeing the Entire Academic Landscape',
      subheading: 'Why researchers must look beyond individual studies',
      body: 'In academic literature, researchers often use the proverb: "You cannot see the forest for the trees."\n\nThis metaphor perfectly describes the journey from data collection to synthesis:',
      bullets: [
        'The Tree (Single Study): A close-up view of one specific trunk, leaf, or branch. For example, a single survey of 40 students at your school regarding social media habits.',
        'The Forest (Synthesized Knowledge): Stepping back to observe the entire woodland. Synthesizing 25 studies conducted across Asia, Europe, and Latin America over 10 years.',
        'The Risk of Single Trees: If you only look at one tree, you might think the whole forest is dying because that one tree has insects.',
        'The Power of the Forest: Synthesis reveals the true global climate, ecosystem health, and universal trends.'
      ],
      keyTakeaway: 'Individual studies are trees; synthesis reveals the shape, depth, and boundary of the entire forest.',
      sourceCitation: 'Textbook Section 4.1 (pp. 55–56)'
    }
  },

  // SLIDE 4: Why Synthesis is Necessary
  {
    id: 'u4-s4',
    unitNumber: 4,
    slideNumber: 4,
    title: '4.2 Why Synthesis is Necessary',
    section: 'Scientific Rigor',
    type: 'concept',
    teacherNote: 'Ask students: "Have you ever seen two news articles report opposite health advice (e.g., coffee is good for you vs. coffee causes heart disease)?" Explain how synthesis resolves this confusion.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.2',
      pages: '56–57'
    },
    content: {
      heading: 'Why Relying on a Single Study is Risky',
      subheading: 'How synthesis builds reliable, bias-resistant scientific evidence',
      body: 'Science does not advance through single isolated studies. Relying on one study can lead to disastrous decisions because individual studies have inherent limitations:\n\nSynthesis is essential for four primary reasons:',
      bullets: [
        '1. Resolving Contradictions: When Study A says homework improves test scores and Study B says homework harms sleep, synthesis examines differences in age, dosage, and culture to explain why both findings occurred.',
        '2. Eliminating Local Bias: A study done in a wealthy private school in Jakarta cannot represent rural schools in Papua. Synthesis combines diverse samples to test for generalizability.',
        '3. Enhancing Statistical Power: Combining results from ten small studies (50 participants each) creates a robust sample of 500 participants.',
        '4. Identifying Research Gaps: By mapping what is already known, synthesis clearly reveals what has NOT yet been investigated.'
      ],
      keyTakeaway: 'Synthesis protects us from cherry-picking individual studies that happen to support our personal biases.',
      sourceCitation: 'Textbook Section 4.2 (pp. 56–57)'
    }
  },

  // SLIDE 5: Misconception: "Synthesis is Multiple Summaries"
  {
    id: 'u4-s5',
    unitNumber: 4,
    slideNumber: 5,
    title: 'Misconception: The Summary Trap',
    section: '4.2 Misconception Check',
    type: 'misconception',
    teacherNote: 'Show students what bad student essays look like: Paragraph 1 summarizes Author A, Paragraph 2 summarizes Author B, Paragraph 3 summarizes Author C. That is a bibliography, not a synthesis!',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.2',
      pages: '57–58'
    },
    content: {
      heading: '"Synthesis Just Means Writing Three Summaries Side-by-Side"',
      subheading: 'The most common essay mistake made by Grade 10 students',
      body: 'Many students believe that if they read three articles and write a summary paragraph for each one, they have produced a synthesis. This is completely false.\n\nWriting three consecutive summaries is merely a list of book reports. True synthesis actively compares, contrasts, and integrates findings theme by theme.',
      comparison: {
        itemA: {
          label: 'Isolated Summaries (Weak)',
          points: [
            'Paragraph 1: "Smith (2020) studied screen time and found..."',
            'Paragraph 2: "Tanaka (2021) surveyed 100 gamers and found..."',
            'Paragraph 3: "Wibisono (2023) interviewed parents and found..."',
            'Flaw: The authors never interact. The sources exist in separate silos with zero connections.'
          ]
        },
        itemB: {
          label: 'Integrated Synthesis (Strong)',
          points: [
            '"Across three continents, researchers agree that excessive screen time reduces sleep duration (Smith, 2020; Tanaka, 2021).',
            'However, while Smith attributes this to blue light emissions, Tanaka and Wibisono (2023) demonstrate that social peer pressure is the primary driver.',
            'Success: Sources are woven together to build a sophisticated, comparative argument.'
          ]
        }
      },
      keyTakeaway: 'Synthesis does not summarize authors one by one; it organizes authors around themes, debates, and shared evidence.',
      sourceCitation: 'Textbook Section 4.2 (pp. 57–58)'
    }
  },

  // SLIDE 6: Active Checkpoint 1: Analysis vs. Synthesis
  {
    id: 'u4-s6',
    unitNumber: 4,
    slideNumber: 6,
    title: 'Checkpoint: Analysis or Synthesis?',
    section: '4.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Challenge students: Is the researcher breaking down one dataset, or are they combining multiple independent studies?',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.2',
      pages: '56–58'
    },
    content: {
      heading: 'Cognitive Task Classification',
      body: 'Read this scenario: A public health researcher gathers 14 clinical trials from Indonesia, Thailand, and Malaysia evaluating dengue fever prevention programs. She compares their results, explains why urban programs had higher adoption rates than rural ones, and presents a combined regional framework.\n\nWhat research process is she performing?',
      interactiveData: {
        prompt: 'Is this researcher primarily performing Data Analysis or Data Synthesis?',
        options: [
          {
            id: 'opt-1',
            label: 'Data Analysis, because she is examining data collected by healthcare workers.',
            explanation: 'Incorrect. She is not analyzing raw primary data from one trial. She is integrating findings across 14 independent published studies.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Data Synthesis, because she is integrating findings across multiple separate studies to discover broader regional patterns.',
            explanation: 'Correct! By connecting 14 independent studies across three nations, resolving contextual differences (urban vs. rural), and building a combined model, she is performing authentic data synthesis.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Neither, because health research cannot be synthesized without blood samples.',
            explanation: 'Incorrect. Literature synthesis is a cornerstone of medical and global health policy worldwide.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Whenever a researcher combines findings across multiple published studies, they are performing Data Synthesis.',
      sourceCitation: 'Textbook Section 4.2 (pp. 56–58)'
    }
  },

  // SLIDE 7: The Three Synthesis Methodologies Overview
  {
    id: 'u4-s7',
    unitNumber: 4,
    slideNumber: 7,
    title: '4.3 Synthesis Methodologies',
    section: 'Methodological Approaches',
    type: 'concept',
    teacherNote: 'Introduce the three approaches: Narrative Synthesis (story & text), Meta-Analysis (mathematical pooling), and Thematic Synthesis (qualitative themes).',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.3',
      pages: '58–60'
    },
    content: {
      heading: 'The Three Tools for Combining Knowledge',
      subheading: 'How researchers choose the right synthesis technique',
      body: 'Just as researchers choose between quantitative and qualitative methods in primary research, synthesis researchers choose specific methodologies based on the types of studies they are combining:\n\nThe textbook highlights three foundational synthesis approaches:',
      bullets: [
        '1. Narrative Synthesis: Uses words, structured text, and conceptual frameworks to combine findings from studies that use diverse methods (heterogeneous data).',
        '2. Meta-Analysis: Uses advanced statistical formulas to calculate a single pooled numerical "effect size" across multiple identical quantitative experiments.',
        '3. Thematic Synthesis: Translates and synthesizes qualitative concepts, interviews, and lived experiences across multiple qualitative research papers.'
      ],
      keyTakeaway: 'The nature of your source studies determines whether your synthesis is narrative, statistical, or thematic.',
      sourceCitation: 'Textbook Section 4.3 (pp. 58–60)'
    }
  },

  // SLIDE 8: Narrative Synthesis Explained
  {
    id: 'u4-s8',
    unitNumber: 4,
    slideNumber: 8,
    title: 'Narrative Synthesis Deep-Dive',
    section: '4.3 Methodology 1',
    type: 'concept',
    teacherNote: 'Emphasize that "narrative" does NOT mean writing fiction. It means using structured explanatory prose to weave diverse evidence together.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.3',
      pages: '58–59'
    },
    content: {
      heading: 'Narrative Synthesis: Combining Heterogeneous Evidence',
      subheading: 'The versatile tool for real-world global perspectives topics',
      body: 'Narrative synthesis is an approach to systematic review that relies primarily on words and text to summarize, explain, and integrate findings from multiple studies.\n\nIt is the primary method used when studies are "heterogeneous"—meaning they used different methodologies, measured different variables, or studied different cultures.',
      bullets: [
        'How it works: The researcher builds a theoretical framework, develops a preliminary synthesis of findings, explores relationships between studies, and assesses the robustness of the synthesis.',
        'Strength: High flexibility. It can successfully combine a qualitative interview study from Bandung with a quantitative statistical survey from Singapore.',
        'Limitation: Potential researcher subjectivity. Without strict rules, the researcher might emphasize studies they agree with.'
      ],
      keyTakeaway: 'Narrative synthesis is the ideal approach when combining diverse studies with different methods and cultural settings.',
      sourceCitation: 'Textbook Section 4.3 (pp. 58–59)'
    }
  },

  // SLIDE 9: Meta-Analysis Explained
  {
    id: 'u4-s9',
    unitNumber: 4,
    slideNumber: 9,
    title: 'Meta-Analysis: Statistical Pooling',
    section: '4.3 Methodology 2',
    type: 'concept',
    teacherNote: 'Use the medicine trial analogy: 10 hospitals each test a new vaccine on 50 patients (too small to prove safety alone). A meta-analysis mathematically combines all 10 trials into one massive trial of 500 patients.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.3',
      pages: '59–60'
    },
    content: {
      heading: 'Meta-Analysis: The Gold Standard of Quantitative Rigor',
      subheading: 'Combining numbers across multiple identical experiments',
      body: 'A meta-analysis is a statistical technique that pools numerical data from multiple independent studies to calculate a single overall effect size.\n\nInstead of treating each study as a separate opinion, meta-analysis treats each study as one data point in a mega-calculation.',
      bullets: [
        'Homogeneity Requirement: Studies must measure the exact same variables using comparable instruments (e.g., all measuring blood pressure drop in millimeters of mercury).',
        'Effect Size Calculation: Produces a weighted average result that gives greater weight to studies with larger sample sizes and lower statistical error.',
        'Forest Plots: Results are displayed visually in a "forest plot" showing individual study confidence intervals and the diamond-shaped combined average.',
        'Limitation: Cannot combine qualitative words or studies that used completely different measurement scales.'
      ],
      keyTakeaway: 'Meta-analysis combines quantitative numbers mathematically, providing the highest level of empirical certainty.',
      sourceCitation: 'Textbook Section 4.3 (pp. 59–60)'
    }
  },

  // SLIDE 10: Thematic Synthesis Explained
  {
    id: 'u4-s10',
    unitNumber: 4,
    slideNumber: 10,
    title: 'Thematic Synthesis: Qualitative Integration',
    section: '4.3 Methodology 3',
    type: 'concept',
    teacherNote: 'Explain the 3 steps: Line-by-line coding of source findings, generating descriptive themes, and translating them into analytical themes.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.3',
      pages: '60–61'
    },
    content: {
      heading: 'Thematic Synthesis: Integrating Qualitative Studies',
      subheading: 'Combining human voices and lived experiences across literature',
      body: 'When your source literature consists of qualitative studies (e.g., 8 studies interviewing teenage refugees about their school integration), a meta-analysis is impossible.\n\nThematic synthesis applies qualitative coding principles across multiple published qualitative papers to generate new interpretive concepts.',
      bullets: [
        'Stage 1: Line-by-Line Coding: The synthesizer extracts findings and direct quotes from all published papers and labels them with codes.',
        'Stage 2: Developing Descriptive Themes: Similar codes are clustered into descriptive categories (e.g., "language barriers", "peer isolation", "teacher support").',
        'Stage 3: Generating Analytical Themes: The researcher steps beyond the original authors\' interpretations to create fresh theoretical insights that answer the review question.'
      ],
      keyTakeaway: 'Thematic synthesis preserves the richness of qualitative human experiences while elevating findings into broad academic theory.',
      sourceCitation: 'Textbook Section 4.3 (pp. 60–61)'
    }
  },

  // SLIDE 11: Side-by-Side Comparison Matrix of Synthesis Types
  {
    id: 'u4-s11',
    unitNumber: 4,
    slideNumber: 11,
    title: 'Comparing the 3 Synthesis Methods',
    section: '4.3 Comparative Matrix',
    type: 'comparison',
    teacherNote: 'Walk students through the table. Ask: "If you have 10 clinical trials with identical math, which method? If you have 6 interview studies, which method? If you have mixed methods, which method?"',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.3',
      pages: '58–61'
    },
    content: {
      heading: 'Methodological Comparison Matrix',
      subheading: 'How to select the right synthesis tool for your research deck',
      body: 'Review this matrix to match your source material with the appropriate synthesis methodology:',
      comparison: {
        itemA: {
          label: 'Narrative Synthesis vs. Meta-Analysis',
          points: [
            'Narrative Synthesis: Textual integration; accommodates mixed, heterogeneous studies; uses structured narrative frameworks.',
            'Meta-Analysis: Statistical pooling; requires homogeneous quantitative trials; outputs pooled numerical effect sizes.'
          ]
        },
        itemB: {
          label: 'Thematic Synthesis',
          points: [
            'Data Type: Qualitative studies (interview transcripts, case studies, ethnographic observations).',
            'Analytical Output: Generates overarching analytical themes and new theoretical models.',
            'Core Benefit: Preserves cultural context and human meaning across multiple studies.'
          ]
        }
      },
      keyTakeaway: 'Choose Meta-Analysis for identical quantitative trials, Thematic Synthesis for qualitative interviews, and Narrative Synthesis for diverse mixed sources.',
      sourceCitation: 'Textbook Section 4.3 (pp. 58–61)'
    }
  },

  // SLIDE 12: Active Checkpoint 2: Method Selector Challenge
  {
    id: 'u4-s12',
    unitNumber: 4,
    slideNumber: 12,
    title: 'Checkpoint: Choose the Synthesis Method',
    section: '4.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the nature of the data: Are the studies identical numerical trials, or are they diverse mixed methods?',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.3',
      pages: '59–61'
    },
    content: {
      heading: 'Synthesis Method Selection Challenge',
      body: 'A global health organization gathers 18 independent randomized controlled trials testing the exact same malaria medication. Every single study used the exact same dosage and measured patient recovery in days using standard blood counts.\n\nWhich synthesis method should the research team use to calculate the medication\'s true overall effectiveness?',
      interactiveData: {
        prompt: 'Which synthesis methodology is mathematically and scientifically optimal for this dataset?',
        options: [
          {
            id: 'opt-1',
            label: 'Narrative Synthesis only, because writing a story is easier than calculating statistics.',
            explanation: 'Incorrect. While narrative synthesis could be used, it would discard the immense statistical power of having 18 identical quantitative trials.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Meta-Analysis, because all 18 studies are homogeneous quantitative trials measuring the exact same outcome.',
            explanation: 'Correct! When multiple studies measure identical variables with standard quantitative instruments, meta-analysis mathematically pools the data to calculate the most accurate overall effect size.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Thematic Synthesis, because malaria causes subjective feelings of fever.',
            explanation: 'Incorrect. Thematic synthesis is designed for qualitative interview texts, not quantitative blood count measurements and recovery day numbers.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'When studies are quantitatively identical and homogeneous, Meta-Analysis is the gold standard.',
      sourceCitation: 'Textbook Section 4.3 (pp. 59–61)'
    }
  },

  // SLIDE 13: The Synthesis Matrix
  {
    id: 'u4-s13',
    unitNumber: 4,
    slideNumber: 13,
    title: '4.4 The Synthesis Matrix',
    section: 'Practical Research Tool',
    type: 'concept',
    teacherNote: 'Show how to create a Synthesis Matrix in Excel or Google Sheets. The rows are authors/studies, the columns are themes or core variables.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.4',
      pages: '61–63'
    },
    content: {
      heading: 'Organizing Evidence with a Synthesis Matrix',
      subheading: 'The indispensable tool for mapping multiple research sources',
      body: 'When you are reviewing 6 to 10 research papers, your notes can quickly become tangled and confusing.\n\nA Synthesis Matrix is an organized table that researchers use to categorize, compare, and integrate evidence across multiple sources according to shared themes or variables.',
      bullets: [
        'Rows (Sources): Each horizontal row represents one specific study (Author, Year, Country, Sample Size).',
        'Columns (Themes/Variables): Each vertical column represents a key theme or research question (e.g., Cost, Academic Impact, Mental Well-being).',
        'Grid Cells (Findings): Fill each cell with brief evidence, statistics, or quotes from that author on that specific theme.',
        'Vertical Scanning: Reading down a column instantly reveals where authors agree, where they contradict each other, and where data is completely missing!'
      ],
      keyTakeaway: 'A Synthesis Matrix turns piles of research papers into a structured map of agreement, disagreement, and gaps.',
      sourceCitation: 'Textbook Section 4.4 (pp. 61–63)'
    }
  },

  // SLIDE 14: Patterns, Contradictions, and Research Gaps
  {
    id: 'u4-s14',
    unitNumber: 4,
    slideNumber: 14,
    title: 'Interpreting the Matrix',
    section: '4.4 Synthesis Outcomes',
    type: 'concept',
    teacherNote: 'Train students to look for empty cells in their matrix. An empty column across all rows means nobody has studied that variable yet—that is a research gap you can investigate!',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.4',
      pages: '62–64'
    },
    content: {
      heading: 'What Does a Synthesis Matrix Reveal?',
      subheading: 'Three vital discoveries that emerge from cross-source analysis',
      body: 'Once you populate your Synthesis Matrix, you analyze the relationships across cells. Three critical insights will emerge:',
      bullets: [
        '1. Consensuses & Patterns (Agreements): When multiple authors using different methods all reach the same finding (e.g., 5 studies all find that smartphone bans improve test scores). This proves the finding is robust and credible.',
        '2. Contradictions & Debates (Disagreements): When Study A reports positive effects while Study B reports negative effects. The synthesizer investigates: Did they study different age groups? Did one study use rural schools while the other used urban schools?',
        '3. Research Gaps (The Missing Pieces): When a column remains empty across almost all studies (e.g., plenty of studies on high school students, but zero studies on elementary students). Gaps show where future research is urgently needed.'
      ],
      keyTakeaway: 'Synthesis does not just find what is agreed upon; it exposes the boundaries of what is still unknown.',
      sourceCitation: 'Textbook Section 4.4 (pp. 62–64)'
    }
  },

  // SLIDE 15: Misconception: "If Studies Disagree, One is Fake"
  {
    id: 'u4-s15',
    unitNumber: 4,
    slideNumber: 15,
    title: 'Misconception: Disagreement ≠ Fraud',
    section: '4.4 Critical Inquiry',
    type: 'misconception',
    teacherNote: 'Teach the concept of "contextual moderating variables". Different results usually reflect different human environments, not dishonest researchers.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.4',
      pages: '63–64'
    },
    content: {
      heading: '"If Two Studies Disagree, One of Them Must Be False"',
      subheading: 'Understanding contextual moderators in social science',
      body: 'Novice students often assume that when two scientific studies reach opposing conclusions, one of the researchers must have made an error or fabricated their data.\n\nIn reality, scientific disagreements in human and social research almost always stem from moderating contextual variables.',
      example: {
        title: 'Real-World Example: Remote Online Learning Effectiveness',
        scenario: '• Study A (Seoul, South Korea): Found that online learning boosted exam scores by 15%.\n• Study B (Rural Nusa Tenggara, Indonesia): Found that online learning caused exam scores to drop by 30%.\n\n• Flawed Reaction: "One of these professors is lying!"\n• Synthesized Truth: In Seoul, students had ultra-fast 5G fiber internet and laptop subsidies. In rural NTT, students suffered frequent power outages and shared one smartphone among 4 siblings. Both studies are truthful; the differing outcome was caused by the infrastructural context.',
        takeaway: 'Synthesis explains contradictions by identifying how local contexts shape outcomes.'
      },
      keyTakeaway: 'Conflicting research findings reflect the diversity of human environments, not scientific failure.',
      sourceCitation: 'Textbook Section 4.4 (pp. 63–64)'
    }
  },

  // SLIDE 16: Applied Case Study: School Uniform Policy Synthesis
  {
    id: 'u4-s16',
    unitNumber: 4,
    slideNumber: 16,
    title: 'Case Study: School Uniform Synthesis',
    section: '4.5 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through how the student research council synthesized 4 diverse sources (economic, disciplinary, creative, and local climate) to recommend a modern uniform policy.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.5',
      pages: '64–65'
    },
    content: {
      heading: 'Synthesizing Multiple Lenses on Uniforms',
      subheading: 'How a student committee resolved a heated school debate',
      body: 'A school board asked Grade 10 researchers: "Should our school abolish mandatory school uniforms?" The students synthesized four diverse studies:',
      example: {
        title: 'The Multi-Source Synthesis Matrix',
        scenario: '• Study 1 (Economic Survey): Uniforms save low-income families 40% compared to buying branded fashion clothes.\n• Study 2 (Discipline Statistics): Uniforms reduce bullying related to socioeconomic status.\n• Study 3 (Psychological Study): Rigid formal uniforms stifle creative self-expression among teenagers.\n• Study 4 (Ergonomic/Climate Study): Heavy traditional uniforms cause heat exhaustion during tropical afternoons in Indonesia.\n\n• The Synthesized Recommendation: The team did NOT simply vote "Yes" or "No". They recommended keeping standardized uniforms to protect low-income families, but transitioning to breathable, athletic polo shirts with custom creative pins.',
        takeaway: 'Synthesis creates innovative solutions that honor the valid truths of all stakeholder perspectives.'
      },
      keyTakeaway: 'Synthesizing multiple perspectives leads to balanced, practical policy compromises that single studies miss.',
      sourceCitation: 'Textbook Section 4.5 (pp. 64–65)'
    }
  },

  // SLIDE 17: Unit 4 Master Summary
  {
    id: 'u4-s17',
    unitNumber: 4,
    slideNumber: 17,
    title: 'Unit 4 Master Summary',
    section: '4.5 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the four major pillars of synthesis. Prompt students: "How will you use a synthesis matrix in your own Team Project?"',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.5',
      pages: '64–65'
    },
    content: {
      heading: 'Mastering Data Synthesis Foundations',
      subheading: 'Key takeaways from Unit 4: Data Synthesis',
      body: 'You now possess the advanced tools needed to integrate diverse research literature into unified, credible knowledge.',
      bullets: [
        '1. Synthesis vs. Analysis: Analysis dissects single datasets into parts; synthesis combines multiple independent findings into a new whole.',
        '2. The Metaphor: Never get lost in individual trees; step back to view the entire research forest.',
        '3. Methodologies: Meta-Analysis pools identical quantitative trials mathematically; Thematic Synthesis combines qualitative interviews; Narrative Synthesis integrates diverse mixed-method sources.',
        '4. The Synthesis Matrix: Use rows for sources and columns for themes to spot agreements, explain contradictions, and identify research gaps.',
        '5. Contextual Thinking: When studies disagree, look for differences in geography, culture, sample age, and infrastructure rather than assuming fraud.'
      ],
      keyTakeaway: 'Data synthesis transforms fragmented opinions into authoritative, global-perspectives intelligence.',
      sourceCitation: 'Textbook Section 4.5 (pp. 64–65)'
    }
  },

  // SLIDE 18: Final Exit Challenge
  {
    id: 'u4-s18',
    unitNumber: 4,
    slideNumber: 18,
    title: 'Unit 4 Exit Challenge',
    section: '4.5 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students evaluate how to synthesize contradictory community evidence regarding e-scooters.',
    sourceRef: {
      unit: 'Unit 4',
      section: '4.5',
      pages: '65'
    },
    content: {
      heading: 'Exit Synthesis Challenge: The Electric Scooter Debate',
      body: 'A city mayor reviews three studies on electric rental scooters:\n• Study A (Environmental Agency): E-scooters reduced short car trips by 22%, cutting carbon emissions.\n• Study B (Hospital Trauma Unit): E-scooter pedestrian collisions increased emergency room visits by 35% on crowded sidewalks.\n• Study C (Small Business Union): Retail shops near scooter stations saw a 15% increase in foot traffic.\n\nHow should a researcher synthesize these findings to advise city hall?',
      interactiveData: {
        prompt: 'Which synthesized recommendation best integrates the evidence from all three sources?',
        options: [
          {
            id: 'opt-1',
            label: 'Ban all e-scooters completely because Study B proves they are dangerous.',
            explanation: 'Incorrect. This ignores the substantial environmental (Study A) and economic (Study C) benefits.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Allow unlimited scooters everywhere because economic and carbon benefits outweigh human injuries.',
            explanation: 'Incorrect. This dismisses the 35% rise in emergency hospital trauma injuries (Study B).',
            isCorrect: false
          },
          {
            id: 'opt-3',
            label: 'Synthesize the findings: permit e-scooters to preserve carbon and business benefits, but mandate dedicated bike lanes and prohibit sidewalk riding to resolve the hospital safety crisis.',
            explanation: 'Correct! This is authentic data synthesis. It reconciles environmental, economic, and medical findings by designing a targeted policy solution that captures the benefits while eliminating the harm.',
            isCorrect: true
          }
        ]
      },
      keyTakeaway: 'Data synthesis enables researchers to formulate sophisticated policies that resolve complex real-world dilemmas.',
      sourceCitation: 'Textbook Section 4.5 (p. 65)'
    }
  }
];
