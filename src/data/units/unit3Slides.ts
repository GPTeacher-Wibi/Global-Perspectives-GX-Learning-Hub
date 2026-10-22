import { Slide } from '../../types/curriculum';

/**
 * Unit 3: Data Analysis — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 39–53)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_3_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u3-s1',
    unitNumber: 3,
    slideNumber: 1,
    title: 'Unit 3: Data Analysis',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Show students a sheet filled with 500 raw test numbers. Ask: "Can anyone tell me what this means?" Explain that data analysis is the process that turns confusing numbers into clear meaning.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.1',
      pages: '39–40'
    },
    content: {
      heading: 'Making Sense of the Evidence',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'In Unit 2, we learned how researchers collect empirical data using surveys, observations, and experiments.\n\nHowever, raw data by itself is just a pile of numbers, survey responses, or interview notes. It does not answer any questions until we analyze it.\n\nData analysis is the systematic process of organizing, calculating, summarizing, and visualizing evidence to discover meaningful patterns, test claims, and answer research questions.',
      bullets: [
        'Objective 1: Distinguish between Quantitative vs. Qualitative data, and Primary vs. Secondary data.',
        'Objective 2: Calculate and interpret basic descriptive statistics: Mean, Median, and Mode.',
        'Objective 3: Understand data dispersion, outliers, and the role of Standard Deviation.',
        'Objective 4: Select the optimal chart or visual graph to communicate research findings effectively.'
      ],
      keyTakeaway: 'Raw data is silent. Data analysis gives evidence a clear, truthful voice.',
      sourceCitation: 'Textbook Section 3.1 (pp. 39–40)'
    }
  },

  // SLIDE 2: Defining Data Analysis
  {
    id: 'u3-s2',
    unitNumber: 3,
    slideNumber: 2,
    title: '3.1 What is Data Analysis?',
    section: 'Academic Definition',
    type: 'definition',
    teacherNote: 'Emphasize that data analysis asks: "What do the facts actually show?" It is strictly objective. We do not invent stories; we let the evidence speak.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.1',
      pages: '39–40'
    },
    content: {
      heading: 'From Raw Data to Usable Knowledge',
      subheading: 'What happens between data collection and final conclusions?',
      body: 'In academic research, data analysis is the disciplined process of cleaning, transforming, and modeling data to discover useful information, suggest conclusions, and support decision-making.\n\nWithout analysis, a researcher might have 200 completed questionnaires sitting in a folder, but still be unable to tell their community what the students actually need.',
      comparison: {
        itemA: {
          label: 'Raw Data (Unprocessed)',
          points: [
            'Individual survey answer sheets filled with numbers.',
            'Audio recordings of 15 separate student interviews.',
            'Disorganized, overwhelming, and impossible to interpret at a glance.',
            'Cannot be used directly to make policy decisions.'
          ]
        },
        itemB: {
          label: 'Analyzed Data (Processed Insight)',
          points: [
            'Calculated summary averages, percentages, and medians.',
            'Categorized themes showing common concerns across interviews.',
            'Clear charts revealing trends over time.',
            'Directly answers the original research question.'
          ]
        }
      },
      keyTakeaway: 'Data analysis transforms chaotic raw facts into structured, understandable evidence.',
      sourceCitation: 'Textbook Section 3.1 (pp. 39–40)'
    }
  },

  // SLIDE 3: The Data Matrix: Quantitative vs Qualitative & Primary vs Secondary
  {
    id: 'u3-s3',
    unitNumber: 3,
    slideNumber: 3,
    title: 'The Four Dimensions of Data',
    section: '3.1 Data Classification',
    type: 'concept',
    teacherNote: 'Draw a 2x2 grid on the board: Quantitative/Qualitative on one axis, Primary/Secondary on the other. Have students place examples in each quadrant.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.1',
      pages: '40–42'
    },
    content: {
      heading: 'Classifying Research Data',
      subheading: 'Two essential distinctions every researcher must make',
      body: 'Before beginning analysis, a researcher must know what kind of data they are holding. Research data is categorized along two major axes:',
      bullets: [
        'Form: Quantitative Data (numerical values, counts, percentages, measurable ratings) vs. Qualitative Data (descriptive words, interview quotes, observation notes).',
        'Source: Primary Data (collected directly by the researcher for this specific study) vs. Secondary Data (collected previously by other researchers, government bureaus, or organizations).'
      ],
      example: {
        title: 'Real-World Example: School Commute Times',
        scenario: '1. Primary Quantitative: You survey 100 students in your school about how many minutes they commute each morning.\n2. Primary Qualitative: You interview 5 students about why morning traffic makes them feel stressed.\n3. Secondary Quantitative: You download the 2023 Central Bureau of Statistics (BPS) report on public transit usage in your province.',
        takeaway: 'Each data type provides a different perspective and requires distinct analysis techniques.'
      },
      keyTakeaway: 'Knowing your data type dictates which mathematical or thematic tools you must use for analysis.',
      sourceCitation: 'Textbook Section 3.1 (pp. 40–42)'
    }
  },

  // SLIDE 4: Descriptive Statistics Overview
  {
    id: 'u3-s4',
    unitNumber: 3,
    slideNumber: 4,
    title: '3.2 Descriptive Statistics',
    section: 'Core Numerical Concepts',
    type: 'concept',
    teacherNote: 'Explain the word "descriptive": It means describing what the data looks like, without jumping to unverified conclusions or complex predictions.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '42–43'
    },
    content: {
      heading: 'Summarizing Numbers with Descriptive Statistics',
      subheading: 'How to describe large datasets with single representative numbers',
      body: 'When dealing with quantitative data from 50, 500, or 5,000 participants, you cannot list every individual score in your presentation.\n\nDescriptive statistics are mathematical procedures used to summarize, organize, and describe the main characteristics of a dataset.\n\nThe most important descriptive statistics are Measures of Central Tendency, which pinpoint the center or typical value of a dataset.',
      bullets: [
        'Mean (The Arithmetic Average): The sum of all values divided by the total count.',
        'Median (The Middle Value): The exact center score when all values are placed in order from lowest to highest.',
        'Mode (The Most Frequent Value): The number or category that appears most often in the dataset.'
      ],
      keyTakeaway: 'Measures of central tendency reduce complex numerical distributions into single, easy-to-understand reference points.',
      sourceCitation: 'Textbook Section 3.2 (pp. 42–43)'
    }
  },

  // SLIDE 5: The Mean: Arithmetic Average
  {
    id: 'u3-s5',
    unitNumber: 3,
    slideNumber: 5,
    title: 'The Mean: Calculation & Use',
    section: '3.2 Central Tendency',
    type: 'concept',
    teacherNote: 'Walk students through the simple calculation on the slide. Emphasize that the Mean uses every single score in the calculation.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '43–44'
    },
    content: {
      heading: 'The Arithmetic Mean Explained',
      subheading: 'How to calculate the average and when to use it',
      body: 'The mean is the most widely recognized measure of central tendency. It is calculated by adding all scores together and dividing by the number of observations (n).\n\nFormula: Mean = (Sum of all values) ÷ (Total number of items)',
      example: {
        title: 'Step-by-Step Calculation: Math Quiz Scores',
        scenario: 'Five Grade 10 students scored the following on a 10-point quiz: 6, 7, 8, 8, 9.\n\n1. Sum: 6 + 7 + 8 + 8 + 9 = 38\n2. Count (n): 5 students\n3. Mean: 38 ÷ 5 = 7.6 points',
        takeaway: 'The average student scored 7.6 points. The mean is ideal when data is evenly balanced without wild extreme numbers.'
      },
      keyTakeaway: 'The mean incorporates every value in the dataset, making it precise for balanced, symmetrical distributions.',
      sourceCitation: 'Textbook Section 3.2 (pp. 43–44)'
    }
  },

  // SLIDE 6: The Median: The Robust Center
  {
    id: 'u3-s6',
    unitNumber: 3,
    slideNumber: 6,
    title: 'The Median: The True Middle',
    section: '3.2 Central Tendency',
    type: 'concept',
    teacherNote: 'Demonstrate ranking numbers: "Always sort from smallest to largest first!" If there are an even number of values, take the average of the two middle values.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '44–45'
    },
    content: {
      heading: 'The Median Explained',
      subheading: 'Finding the center value that divides the data in half',
      body: 'The median is the exact midpoint of a dataset when values are arranged in numerical order from smallest to largest.\n\nFifty percent (50%) of all scores lie below the median, and 50% lie above it.\n\nUnlike the mean, the median is not pulled or distorted by extreme values at either end.',
      example: {
        title: 'Finding the Median: Daily Study Minutes',
        scenario: 'Seven students report daily study times: 20, 30, 45, 60, 60, 90, 120 minutes.\n\n• Step 1: Arrange in ascending order (already sorted).\n• Step 2: Identify the middle value: 4th number in a list of 7.\n• Median = 60 minutes.\n(Exactly 3 students study less than 60 minutes, and 3 study more).',
        takeaway: 'The median gives a reliable sense of the "typical" experience without being distorted by one student who studied 500 minutes.'
      },
      keyTakeaway: 'The median is the most trustworthy measure of center when a dataset contains extreme outliers.',
      sourceCitation: 'Textbook Section 3.2 (pp. 44–45)'
    }
  },

  // SLIDE 7: The Mode: The Most Common Value
  {
    id: 'u3-s7',
    unitNumber: 3,
    slideNumber: 7,
    title: 'The Mode: Most Frequent Score',
    section: '3.2 Central Tendency',
    type: 'concept',
    teacherNote: 'Highlight that the Mode is the only measure of central tendency that works for non-numerical categorical data (e.g., favorite subject, most common transport mode).',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '45–46'
    },
    content: {
      heading: 'The Mode Explained',
      subheading: 'Identifying popularity and frequency peaks',
      body: 'The mode is the value or category that appears most frequently in a dataset.\n\nA dataset can have one mode (unimodal), two modes (bimodal), or no mode at all if every value appears only once.\n\nThe mode is particularly useful for practical decisions involving inventory, scheduling, or categorical choices.',
      example: {
        title: 'Practical Example: School Canteen Shoe Sizes',
        scenario: 'A school uniform shop orders shoes for new students. Surveying shoe sizes reveals: 38, 39, 39, 40, 40, 40, 40, 41, 42.\n\n• Frequency: Size 40 appears 4 times (more than any other size).\n• Mode = Size 40.',
        takeaway: 'Calculating an average shoe size of 39.88 is useless because size 39.88 does not exist. The store owner needs the Mode (size 40) to order inventory.'
      },
      keyTakeaway: 'The mode identifies the most common or popular choice and is the only central measure applicable to categorical data.',
      sourceCitation: 'Textbook Section 3.2 (pp. 45–46)'
    }
  },

  // SLIDE 8: Misconception: "The Mean is Always the Best Average"
  {
    id: 'u3-s8',
    unitNumber: 3,
    slideNumber: 8,
    title: 'Misconception: The Outlier Trap',
    section: '3.2 Misconception Check',
    type: 'misconception',
    teacherNote: 'Use the "Billionaire walks into a cafe" analogy: If 9 normal people with $10 in their pockets sit in a cafe, the average pocket money is $10. If Elon Musk walks in with $10 billion, the "mean" pocket money becomes $1 billion, but nobody actually got richer!',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '45–46'
    },
    content: {
      heading: '"The Mean is Always the Most Accurate Average"',
      subheading: 'How extreme outliers completely deceive the arithmetic mean',
      body: 'Many students assume that the mean is always superior because it involves mathematical addition. This is a dangerous statistical misconception.\n\nAn outlier is an extreme data point that is drastically higher or lower than all other numbers. An outlier pulls the mean toward itself, creating a misleading picture of reality.',
      comparison: {
        itemA: {
          label: 'The Skewed Dataset (With Outlier)',
          points: [
            'Five students\' weekly pocket money (in IDR):',
            'Rp 50.000, Rp 50.000, Rp 50.000, Rp 60.000, Rp 1.000.000 (Outlier).',
            'Mean: Rp 1.210.000 ÷ 5 = Rp 242.000 per student.',
            'Flaw: Four of the five students have less than one-quarter of this "average"!'
          ]
        },
        itemB: {
          label: 'The Median Reality',
          points: [
            'Same dataset ordered: 50k, 50k, 50k, 60k, 1.000k.',
            'Median = Rp 50.000.',
            'Reality: Rp 50.000 accurately represents what typical students actually receive.',
            'Takeaway: When data is skewed by extreme outliers, always report the Median!'
          ]
        }
      },
      keyTakeaway: 'The mean is fragile against extreme outliers; the median is robust and truthful when data is unevenly skewed.',
      sourceCitation: 'Textbook Section 3.2 (pp. 45–46)'
    }
  },

  // SLIDE 9: Active Checkpoint 1: Mean vs. Median
  {
    id: 'u3-s9',
    unitNumber: 3,
    slideNumber: 9,
    title: 'Checkpoint: Mean or Median?',
    section: '3.2 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Ask students to look closely at the data: Is there an extreme outlier that makes the arithmetic mean unfair?',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '45–47'
    },
    content: {
      heading: 'Statistical Selection Challenge: Outliers in Action',
      body: 'A student council researcher surveys monthly transport expenses for 6 students living in the same neighborhood:\nRp 100.000, Rp 120.000, Rp 120.000, Rp 140.000, Rp 150.000, and Rp 1.500.000 (one student takes private taxis every day).\n\nWhich measure should the researcher report to describe the typical student\'s transport budget?',
      interactiveData: {
        prompt: 'Which measure of central tendency best represents this dataset without being distorted?',
        options: [
          {
            id: 'opt-1',
            label: 'The Mean (Rp 355.000)',
            explanation: 'Incorrect. Rp 355.000 is heavily distorted by the single taxi-riding student (Rp 1.500.000). Five out of six students spend less than half this amount!',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'The Median (Rp 130.000)',
            explanation: 'Correct! The middle value (between 120k and 140k) is Rp 130.000. It ignores the extreme taxi outlier and accurately describes the typical student\'s budget.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'The Mode only, because numbers with zeros cannot be averaged.',
            explanation: 'Incorrect. Numbers with zeros can certainly be averaged or ranked. While Rp 120.000 is the mode, the Median (Rp 130.000) is the standard and most robust measure of central tendency here.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Always check your data for extreme outliers before choosing whether to report the Mean or the Median.',
      sourceCitation: 'Textbook Section 3.2 (pp. 45–47)'
    }
  },

  // SLIDE 10: Dispersion & Standard Deviation
  {
    id: 'u3-s10',
    unitNumber: 3,
    slideNumber: 10,
    title: 'Measures of Dispersion',
    section: '3.2 Data Spread & Consistency',
    type: 'concept',
    teacherNote: 'Use a sports example: Two basketball players both average 15 points per game. Player A scores 14, 15, 16 (low deviation, reliable). Player B scores 0, 30, 15 (high deviation, erratic).',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.2',
      pages: '46–47'
    },
    content: {
      heading: 'Understanding Data Spread and Variation',
      subheading: 'Why knowing the average is only half the story',
      body: 'Two classes might both have an average exam score of 75. But are the two classes identical?\n\nIn Class A, almost everyone scored between 73 and 77 (consistent).\nIn Class B, half scored 50 and half scored 100 (heavily divided).\n\nMeasures of Dispersion tell researchers how spread out or clustered the numbers are around the center.',
      bullets: [
        'Range: The simplest measure of spread: Highest score minus Lowest score. (Easy to calculate, but sensitive to outliers).',
        'Standard Deviation (SD): A statistic that measures the average distance of each data point from the mean.',
        'Low Standard Deviation: Data points are tightly clustered near the mean (high consistency, predictable).',
        'High Standard Deviation: Data points are spread out widely across a broad range (high variation, unpredictable).'
      ],
      keyTakeaway: 'The mean tells you where the center is; the standard deviation tells you how reliable and consistent that center is.',
      sourceCitation: 'Textbook Section 3.2 (pp. 46–47)'
    }
  },

  // SLIDE 11: Visualizing Data: Why Charts Matter
  {
    id: 'u3-s11',
    unitNumber: 3,
    slideNumber: 11,
    title: '3.3 Data Visualization',
    section: 'Visual Communication',
    type: 'concept',
    teacherNote: 'Remind students of presentation delivery: In Cambridge Global Perspectives, presenting data visually in an IFP presentation is critical for engaging your audience.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.3',
      pages: '47–49'
    },
    content: {
      heading: 'The Art of Visual Communication',
      subheading: 'Turning spreadsheets into clear cognitive insights',
      body: 'The human brain processes visual patterns 60,000 times faster than raw text or tables of numbers.\n\nData visualization is the graphical representation of data and information using visual elements like charts, graphs, and maps.\n\nHowever, a chart is only effective if you choose the RIGHT type for your specific data relationship.',
      bullets: [
        '1. Reveal Trends: Visual lines make sudden drops and steady growth instantly noticeable.',
        '2. Highlight Comparisons: Bar heights make differences between groups obvious.',
        '3. Expose Proportions: Slices of a whole clarify budget shares and percentages.',
        '4. Prevent Misinterpretation: Clean axes and scales ensure honesty and clarity.'
      ],
      keyTakeaway: 'A great visualization does not decorate data; it reveals the story hidden within the numbers.',
      sourceCitation: 'Textbook Section 3.3 (pp. 47–49)'
    }
  },

  // SLIDE 12: Chart Types: Bar, Line, Pie, Scatter
  {
    id: 'u3-s12',
    unitNumber: 3,
    slideNumber: 12,
    title: 'Selecting the Right Chart Type',
    section: '3.3 Visualization Selection',
    type: 'comparison',
    teacherNote: 'Walk through each chart type. Emphasize: Line graphs MUST have a continuous variable (usually time) on the X-axis.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.3',
      pages: '48–50'
    },
    content: {
      heading: 'Matching Visual Format to Research Purpose',
      subheading: 'Four foundational charts and their optimal use cases',
      body: 'Choosing the wrong chart confuses your audience or distorts your data. Use this guide to select the right tool:',
      comparison: {
        itemA: {
          label: 'Bar Chart & Line Graph',
          points: [
            'Bar Chart: Compares discrete categories (e.g., test scores across 4 different schools, or plastic waste by neighborhood).',
            'Best for: Comparing separate, unrelated groups.',
            'Line Graph: Shows continuous change or trends over time (e.g., temperature changes over 12 months, daily stock prices).',
            'Best for: Tracking continuous progression over chronological intervals.'
          ]
        },
        itemB: {
          label: 'Pie Chart & Scatter Plot',
          points: [
            'Pie Chart: Displays percentage shares of a single whole (must always add up to exactly 100%).',
            'Best for: Budget allocations, demographic proportions (keep to ≤ 6 slices).',
            'Scatter Plot: Plots two continuous quantitative variables to test for correlation or patterns.',
            'Best for: Investigating relationships (e.g., hours of sleep vs. test scores).'
          ]
        }
      },
      keyTakeaway: 'Use bar charts to compare groups, line graphs for time trends, pie charts for parts of a whole, and scatter plots for correlations.',
      sourceCitation: 'Textbook Section 3.3 (pp. 48–50)'
    }
  },

  // SLIDE 13: Misconception: Misleading Visualizations
  {
    id: 'u3-s13',
    unitNumber: 3,
    slideNumber: 13,
    title: 'Misconception: Misleading Graphs',
    section: '3.3 Critical Visual Literacy',
    type: 'misconception',
    teacherNote: 'Teach students to inspect the Y-axis. Advertisers and political campaigns often start the Y-axis at 95% instead of 0% to make a tiny 1% difference look like a massive leap.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.3',
      pages: '49–50'
    },
    content: {
      heading: '"Charts Never Lie, Because Numbers Are Objective"',
      subheading: 'How dishonest scales and distorted axes deceive the viewer',
      body: 'Many people assume that if evidence is presented in a chart, it must be completely honest and objective. In reality, charts are frequently manipulated to mislead viewers.\n\nA researcher must maintain ethical visual integrity and critically audit charts presented by the media.',
      comparison: {
        itemA: {
          label: 'The Truncated Axis Trick',
          points: [
            'A company claims: "Sales doubled under our new CEO!"',
            'The bar graph shows a bar twice as tall as last year\'s.',
            'The Trick: The vertical axis starts at 98.000 instead of 0.',
            'Reality: Sales only grew from 98.500 to 99.000 units (less than a 1% increase!).'
          ]
        },
        itemB: {
          label: 'Ethical Visualization Rules',
          points: [
            'Always start continuous bar chart axes at zero (0).',
            'Keep scale intervals even and consistent (do not compress or stretch).',
            'Label both axes clearly with units of measurement.',
            'Ensure pie chart slices sum to exactly 100%.'
          ]
        }
      },
      keyTakeaway: 'Always inspect the axes and scale intervals of a graph before accepting its apparent conclusion.',
      sourceCitation: 'Textbook Section 3.3 (pp. 49–50)'
    }
  },

  // SLIDE 14: Active Checkpoint 2: Chart Selector Challenge
  {
    id: 'u3-s14',
    unitNumber: 3,
    slideNumber: 14,
    title: 'Checkpoint: Chart Selector',
    section: '3.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students identify the key variable: Is it over time? Is it parts of a whole? Is it a correlation between two numbers?',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.3',
      pages: '49–51'
    },
    content: {
      heading: 'Visual Decision Challenge: Match the Data',
      body: 'A student researcher records the daily average concentration of particulate matter (PM2.5 air pollution) in South Jakarta every single day for 365 days.\n\nWhich visualization format should the researcher use to present this 12-month trend in their presentation?',
      interactiveData: {
        prompt: 'Which chart best displays continuous changes across chronological time?',
        options: [
          {
            id: 'opt-1',
            label: 'A Pie Chart with 365 individual slices',
            explanation: 'Incorrect. A pie chart with 365 slices would be an unreadable visual disaster. Pie charts are only for small component shares (5-6 categories), not time sequences.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'A Line Graph with days/months on the X-axis and PM2.5 on the Y-axis',
            explanation: 'Correct! Line graphs are the optimal visual tool to display continuous change, fluctuations, and seasonal trends over chronological time.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'A Scatter Plot comparing pollution to shoe sizes',
            explanation: 'Incorrect. The researcher is tracking a single variable over time, not correlating pollution with an unrelated second variable like shoes.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'When tracking a variable over continuous time, the line graph is the standard and most powerful visual tool.',
      sourceCitation: 'Textbook Section 3.3 (pp. 49–51)'
    }
  },

  // SLIDE 15: Qualitative Data Analysis: Thematic Analysis
  {
    id: 'u3-s15',
    unitNumber: 3,
    slideNumber: 15,
    title: 'Analyzing Qualitative Data',
    section: '3.4 Qualitative Analysis',
    type: 'concept',
    teacherNote: 'Explain that qualitative analysis is not guessing. It uses a structured process called "Thematic Analysis" where text is read, highlighted, coded, and grouped into overarching themes.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.4',
      pages: '51–52'
    },
    content: {
      heading: 'How Do We Analyze Words and Stories?',
      subheading: 'Thematic analysis and qualitative coding protocols',
      body: 'When your research data consists of 12 recorded interviews, diary entries, or observational field notes, you cannot calculate a mean or draw a scatter plot.\n\nQualitative data analysis requires Thematic Analysis: the systematic examination of text to identify repeating patterns, core concepts, and shared meanings.',
      bullets: [
        'Step 1: Transcription & Immersion: Convert audio interviews into written text and read repeatedly to understand the context.',
        'Step 2: Coding: Highlight key phrases and label them with descriptive tags (e.g., "fear of failure", "family pressure", "lack of sleep").',
        'Step 3: Generating Themes: Cluster related codes together into broader overarching patterns.',
        'Step 4: Reviewing & Synthesizing: Verify that the themes accurately represent the original voices of the participants.'
      ],
      keyTakeaway: 'Qualitative analysis does not count numbers; it organizes human experiences into verified, meaningful themes.',
      sourceCitation: 'Textbook Section 3.4 (pp. 51–52)'
    }
  },

  // SLIDE 16: Misconception: Correlation vs. Causation
  {
    id: 'u3-s16',
    unitNumber: 3,
    slideNumber: 16,
    title: 'Misconception: Correlation ≠ Causation',
    section: '3.4 Critical Reasoning',
    type: 'misconception',
    teacherNote: 'Classic example: Ice cream sales and drowning incidents both rise in July. Does eating ice cream make people drown? No! Both are caused by a third variable: hot summer weather.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.4',
      pages: '51–53'
    },
    content: {
      heading: '"If Two Variables Move Together, One Caused the Other"',
      subheading: 'The most dangerous analytical error in social science',
      body: 'When quantitative analysis shows that Variable A and Variable B rise together (a positive correlation), novice researchers frequently rush to claim that Variable A caused Variable B.\n\nThis is a major logical flaw: Correlation shows that two things are connected, but it NEVER proves that one caused the other.',
      example: {
        title: 'Real-World Example: Ice Cream and Sunburns',
        scenario: 'A study discovers a strong statistical correlation (r = 0.92): on days when ice cream sales rise, sunburn hospital visits also rise dramatically.\n\n• Flawed Conclusion: "Eating ice cream causes severe skin sunburns!"\n• The Reality (Confounding Variable): Intense sunny weather causes BOTH people to buy ice cream and get sunburned.',
        takeaway: 'Never assume cause and effect without controlled experimental testing or rigorous investigation of third confounding variables.'
      },
      keyTakeaway: 'Correlation identifies a relationship; only controlled experimentation or deep causal investigation can prove causation.',
      sourceCitation: 'Textbook Section 3.4 (pp. 51–53)'
    }
  },

  // SLIDE 17: Applied Case Study: Grade 10 Study Habits Study
  {
    id: 'u3-s17',
    unitNumber: 3,
    slideNumber: 17,
    title: 'Case Study: Analyzing Exam Scores',
    section: '3.5 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Have students examine how the researcher uses both quantitative statistics and qualitative interview quotes to tell the complete analytical story.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.5',
      pages: '52–53'
    },
    content: {
      heading: 'Walking Through a Real Student Dataset',
      subheading: 'How a student research team analyzed study habits and exam anxiety',
      body: 'Let us observe how a Grade 10 research team analyzed their survey and interview data to answer: "How does study scheduling affect student performance?"',
      example: {
        title: 'The Grade 10 Study Habits Analysis',
        scenario: '1. Quantitative Findings (Surveys from 60 students):\n   • Mean study time: 2.4 hours/night.\n   • Median study time: 1.5 hours/night (pulled up by 4 students studying 8 hours!).\n   • Bimodal distribution: 25 students study in short daily 30-min bursts; 25 students cram 6 hours the night before.\n\n2. Qualitative Findings (Interviews with 8 students):\n   • Crammers reported extreme panic, insomnia, and rapid memory loss after the test.\n   • Daily 30-minute studiers reported feeling relaxed and confident.',
        takeaway: 'By reporting the Median and contrasting the two distinct groups, the team proved that consistent daily study produces better mental well-being than cramming.'
      },
      keyTakeaway: 'Combining descriptive statistics with qualitative themes provides a rich, complete understanding of research problems.',
      sourceCitation: 'Textbook Section 3.5 (pp. 52–53)'
    }
  },

  // SLIDE 18: Connecting Analysis to Decision-Making
  {
    id: 'u3-s18',
    unitNumber: 3,
    slideNumber: 18,
    title: 'Data-Driven Decision-Making',
    section: '3.5 Practical Application',
    type: 'concept',
    teacherNote: 'Remind students of the Global Perspectives mission: We do not analyze data just for fun; we analyze data to recommend solutions and improve communities.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.5',
      pages: '52–53'
    },
    content: {
      heading: 'From Analysis to Action',
      subheading: 'Why evidence must guide real-world policy and personal choices',
      body: 'Data analysis is not an academic chore done for a grade. In businesses, healthcare, environmental protection, and government, data analysis is the foundation of every smart decision.\n\nWhen leaders make decisions based on gut feelings or tradition, resources are wasted. When decisions are grounded in analyzed data, solutions succeed.',
      bullets: [
        'Healthcare: Analyzing disease transmission clusters enables doctors to deploy vaccines exactly where outbreaks begin.',
        'Environmental Policy: Analyzing river pollution levels over 5 years proves whether factory fines are actually working.',
        'School Life: Analyzing student cafeteria traffic patterns allows administrators to shorten queue times and reduce food waste.',
        'Personal Planning: Tracking your own study hours and screen time helps you eliminate unproductive habits.'
      ],
      keyTakeaway: 'Good analysis answers: "What does the data show, why does it matter, and what must we do next?"',
      sourceCitation: 'Textbook Section 3.5 (pp. 52–53)'
    }
  },

  // SLIDE 19: Unit 3 Master Summary
  {
    id: 'u3-s19',
    unitNumber: 3,
    slideNumber: 19,
    title: 'Unit 3 Master Summary',
    section: '3.5 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the four core bullet points. Ask students: "If you had to summarize Unit 3 in one single sentence, what would you say?"',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.5',
      pages: '52–53'
    },
    content: {
      heading: 'Mastering Data Analysis Foundations',
      subheading: 'Key takeaways from Unit 3: Data Analysis',
      body: 'You have now mastered the core techniques used by researchers to analyze, summarize, and communicate empirical evidence.',
      bullets: [
        '1. Data Types: Quantitative data requires numerical and statistical tools; Qualitative data requires thematic coding and interpretation.',
        '2. Central Tendency: The Mean is best for balanced data; the Median is the most reliable measure when extreme outliers skew the distribution; the Mode identifies categorical popularity.',
        '3. Dispersion: Standard deviation reveals whether data points are tightly clustered or widely scattered around the average.',
        '4. Visual Integrity: Choose bar charts for groups, line graphs for time trends, pie charts for proportions, and scatter plots for relationships—and never distort the Y-axis.',
        '5. Critical Thinking: Remember that correlation never proves causation without experimental evidence.'
      ],
      keyTakeaway: 'Data analysis is the bridge that converts raw, confusing observations into credible, actionable evidence.',
      sourceCitation: 'Textbook Section 3.5 (pp. 52–53)'
    }
  },

  // SLIDE 20: Final Exit Challenge
  {
    id: 'u3-s20',
    unitNumber: 3,
    slideNumber: 20,
    title: 'Unit 3 Exit Challenge',
    section: '3.5 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students evaluate this policy recommendation based on everything learned about outliers and central tendency.',
    sourceRef: {
      unit: 'Unit 3',
      section: '3.5',
      pages: '53'
    },
    content: {
      heading: 'Exit Analytical Challenge: The Library Funding Dilemma',
      body: 'The school principal reviews daily student attendance in the library over 10 days: 12, 14, 15, 15, 16, 16, 18, 19, 20, and 240 (one day had a mandatory school-wide assembly held in the library).\n\nThe school accountant calculates a Mean of 38.5 students/day and proposes buying 40 new computers. What should the student research council recommend?',
      interactiveData: {
        prompt: 'How should the researcher advise the principal based on statistical integrity?',
        options: [
          {
            id: 'opt-1',
            label: 'Agree with the accountant because the Mean calculation of 38.5 is mathematically correct.',
            explanation: 'Incorrect. While the math is correct, the Mean is heavily distorted by the assembly outlier (240). On normal days, only 12 to 20 students visit the library, so buying 40 computers would waste school funds.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Advise the principal that the assembly was an extreme outlier, and use the Median (16 students) to size computer purchases appropriately.',
            explanation: 'Correct! The 240-student assembly day is an extreme outlier that distorts the mean. The Median (16 students) accurately reflects typical daily attendance, preventing the school from wasting budget on unneeded computers.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Demand that the library be closed permanently because the numbers are inconsistent.',
            explanation: 'Incorrect. Inconsistent numbers simply require proper statistical analysis (reporting the median and noting the outlier), not abandoning the facility.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Real data analysis protects institutions from costly mistakes by distinguishing normal patterns from deceptive outliers.',
      sourceCitation: 'Textbook Section 3.5 (p. 53)'
    }
  }
];
