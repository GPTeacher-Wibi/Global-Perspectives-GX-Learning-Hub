import * as fs from 'fs';
import * as path from 'path';

interface OptionUpdate {
  id: string;
  options: { id: string; text: string }[];
}

function updatePracticeFile(filePath: string, updates: OptionUpdate[]) {
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const update of updates) {
    const qIndex = content.indexOf(`id: '${update.id}'`);
    if (qIndex === -1) {
      throw new Error(`Question ${update.id} not found in ${filePath}`);
    }

    const optionsStart = content.indexOf('options: [', qIndex);
    if (optionsStart === -1) {
      throw new Error(`Options start not found for ${update.id}`);
    }

    // Find the closing bracket for options array
    let depth = 0;
    let optionsEnd = -1;
    for (let i = optionsStart; i < content.length; i++) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') {
        depth--;
        if (depth === 0) {
          optionsEnd = i + 1;
          break;
        }
      }
    }

    if (optionsEnd === -1) {
      throw new Error(`Options end not found for ${update.id}`);
    }

    const formattedOptions = `options: [\n` + update.options.map(o => {
      // Escape single quotes in text if any
      const escapedText = o.text.replace(/'/g, "\\'");
      return `      {\n        id: '${o.id}',\n        text: '${escapedText}'\n      }`;
    }).join(',\n') + `\n    ]`;

    content = content.slice(0, optionsStart) + formattedOptions + content.slice(optionsEnd);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Successfully updated ${updates.length} questions in ${filePath}`);
}

// ============================================================================
// UNIT 1 UPDATES (15 Qs)
// ============================================================================
const u1Updates: OptionUpdate[] = [
  {
    id: 'u1-p-01', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'A momentary emotional feeling, spontaneous reaction, or personal food preference.' },
      { id: 'opt-b', text: 'An absolute, unchangeable scientific law that cannot be questioned or debated.' },
      { id: 'opt-c', text: 'A structured worldview and framework shaped by values, context, and evidence.' },
      { id: 'opt-d', text: 'A single statistical number collected during an isolated local government survey.' }
    ]
  },
  {
    id: 'u1-p-02', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'The temperature rise is an objective fact; the leaders’ proposals are perspectives interpreting what action to take.' },
      { id: 'opt-b', text: 'Leader A provides an objective scientific fact, while Leader B offers an entirely subjective and invalid opinion.' },
      { id: 'opt-c', text: 'Both leaders are stating verified objective facts simply because both individuals hold elected government offices.' },
      { id: 'opt-d', text: 'Because elected leaders disagree on solutions, the recorded scientific temperature data cannot be considered true.' }
    ]
  },
  {
    id: 'u1-p-03', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Perspectives remain permanent, unyielding, and cannot be modified by changing economic climates.' },
      { id: 'opt-b', text: 'One of the two factory workers is holding a deliberately biased, deceitful, and invalid viewpoint.' },
      { id: 'opt-c', text: 'Only municipal city workers have genuine economic perspectives, while rural workers hold opinions.' },
      { id: 'opt-d', text: 'Perspectives are subjective, filtered through individual livelihoods, practical roles, and needs.' }
    ]
  },
  {
    id: 'u1-p-04', // correct: opt-b (Rank 3)
    options: [
      { id: 'opt-a', text: 'Community perspectives remain static, permanent, and strictly unalterable once recorded.' },
      { id: 'opt-b', text: 'Perspectives are dynamic and evolve when people encounter new evidence and experiences.' },
      { id: 'opt-c', text: 'The village council completely abandoned cultural values to adopt purely commercial goals.' },
      { id: 'opt-d', text: 'Revising an established community policy proves that former village leaders acted dishonestly.' }
    ]
  },
  {
    id: 'u1-p-05', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Facilitating social cohesion by uniting people around shared community values.' },
      { id: 'opt-b', text: 'Filtering scientific information so neighborhoods can ignore environmental risks.' },
      { id: 'opt-c', text: 'Enforcing mandatory political regulations decreed by international authorities.' },
      { id: 'opt-d', text: 'Replacing formal municipal infrastructure budgets through voluntary manual labor.' }
    ]
  },
  {
    id: 'u1-p-06', // correct: opt-c (Rank 1 - equal/close)
    options: [
      { id: 'opt-a', text: 'Economic Perspective' },
      { id: 'opt-b', text: 'Political Perspective' },
      { id: 'opt-c', text: 'Cultural Perspective' },
      { id: 'opt-d', text: 'Scientific Perspective' }
    ]
  },
  {
    id: 'u1-p-07', // correct: opt-b (Rank 1 - equal/close)
    options: [
      { id: 'opt-a', text: 'Political Lens' },
      { id: 'opt-b', text: 'Economic Lens' },
      { id: 'opt-c', text: 'Cultural Lens' },
      { id: 'opt-d', text: 'Personal Lens' }
    ]
  },
  {
    id: 'u1-p-08', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Economic Perspective, because low-floor buses generate massive corporate sales for foreign transit equipment manufacturers.' },
      { id: 'opt-b', text: 'Cultural Perspective, because riding municipal transit is an ancestral tradition that strengthens local urban folklore heritage.' },
      { id: 'opt-c', text: 'Global Perspective, because foreign tourists visiting the capital city demand modern Western transit accommodations.' },
      { id: 'opt-d', text: 'Social Perspective, because its primary focus is equity, human dignity, and accessibility for vulnerable groups.' }
    ]
  },
  {
    id: 'u1-p-09', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Cultural, Economic, Political, Social' },
      { id: 'opt-b', text: 'Personal, Local, National, Global' },
      { id: 'opt-c', text: 'Primary, Secondary, Tertiary, Quaternary' },
      { id: 'opt-d', text: 'Individual, Family, Provincial, Regional' }
    ]
  },
  {
    id: 'u1-p-10', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Every real issue has BOTH a Type (the lens) and a Level (the scale); a family electric bill is an Economic Type at the Personal Level.' },
      { id: 'opt-b', text: 'The student is right: Personal issues only relate to psychological emotions, whereas financial costs belong strictly to national accounts.' },
      { id: 'opt-c', text: 'Electricity bills are strictly national issues because power plants belong to the government and utility grids span across multiple islands.' },
      { id: 'opt-d', text: 'Economic issues only exist at the Global level when multi-billion-dollar transnational corporations trade raw oil across oceans.' }
    ]
  },
  {
    id: 'u1-p-11', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Local coastal fishing communities should be dismissed because international climate treaties carry superior moral authority.' },
      { id: 'opt-b', text: 'Electric vehicle manufacturing programs operate in isolation and have zero direct impact on domestic mining regions.' },
      { id: 'opt-c', text: 'Local community viewpoints always align smoothly with global treaty targets without generating trade-offs or friction.' },
      { id: 'opt-d', text: 'Global environmental solutions can create immediate, unintended social and ecological challenges for local communities.' }
    ]
  },
  {
    id: 'u1-p-12', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Doubling television advertising budgets while strictly preserving the standardized Western beef burger menu.' },
      { id: 'opt-b', text: 'Filing legal copyright lawsuits against local street food vendors who prepare traditional warm rice lunches.' },
      { id: 'opt-c', text: 'Introducing Halal-certified chicken, warm rice, local savory sambals, and family-friendly dining spaces.' },
      { id: 'opt-d', text: 'Permanently closing all suburban branches under the assumption that Southeast Asian consumers reject fast dining.' }
    ]
  },
  {
    id: 'u1-p-13', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Complex issues involve competing, legitimate priorities—such as protecting local worker livelihoods versus preserving ecosystems.' },
      { id: 'opt-b', text: 'Cambridge Global Perspectives teaches that objective empirical facts do not exist and all subjective viewpoints are equally valid.' },
      { id: 'opt-c', text: 'Academic researchers are ethically forbidden from holding values, requiring them to stay indifferent on all policy questions.' },
      { id: 'opt-d', text: 'International development agencies will inevitably intervene to mandate uniform policies that eliminate stakeholder debates.' }
    ]
  },
  {
    id: 'u1-p-14', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Impose an absolute municipal ban on all mobile devices across city limits with strict police fines for adolescents carrying phones in public.' },
      { id: 'opt-b', text: 'Require phones to be secured inside individual lockers during classroom lessons, while permitting access before and after school for transit.' },
      { id: 'opt-c', text: 'Allow unrestricted phone use at all times during classroom instruction, claiming digital independence outweighs teacher classroom focus.' },
      { id: 'opt-d', text: 'Prohibit parental contact during transit hours while transferring full student travel surveillance to private municipal security contractors.' }
    ]
  },
  {
    id: 'u1-p-15', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Both groups agree that all commercial fishing operations should cease permanently across the entire coastal province.' },
      { id: 'opt-b', text: 'Both groups want to immediately close the international commercial shipping port to eliminate water pollution risks.' },
      { id: 'opt-c', text: 'Both groups need clean, unpolluted waterways free of toxic chemical spills and require long-term maritime navigation safety.' },
      { id: 'opt-d', text: 'Conflicting commercial stakeholders never share common interests because economic competition prevents any policy compromise.' }
    ]
  }
];

// ============================================================================
// UNIT 2 UPDATES (15 Qs)
// ============================================================================
const u2Updates: OptionUpdate[] = [
  {
    id: 'u2-p-01', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Formulate an actionable municipal ordinance to penalize urban households dumping plastic waste.' },
      { id: 'opt-b', text: 'Discover fundamental biochemical mechanisms without targeting an immediate commercial product.' },
      { id: 'opt-c', text: 'Manufacture affordable consumer water filtration kits sold directly to local rural clinics.' },
      { id: 'opt-d', text: 'Design an industrial production facility to generate commercial chemical fertilizer for export.' }
    ]
  },
  {
    id: 'u2-p-02', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Both teams pursue basic science because both investigations employ laboratory equipment and test tubes.' },
      { id: 'opt-b', text: 'Dr. Lestari conducts applied research because studying biological membranes requires private grants.' },
      { id: 'opt-c', text: 'Both research programs represent applied science because all biochemical research ultimately aids human life.' },
      { id: 'opt-d', text: 'Dr. Lestari conducts basic research (pure knowledge), while Dr. Setiawan conducts applied research (practical tool).' }
    ]
  },
  {
    id: 'u2-p-03', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Basic research creates the foundational theoretical knowledge that applied scientists utilize to build practical solutions.' },
      { id: 'opt-b', text: 'Applied research must always precede basic research because funding agencies demand functional gadgets before theory.' },
      { id: 'opt-c', text: 'Basic research has been rendered obsolete by digital computing because computer models replace natural observation.' },
      { id: 'opt-d', text: 'Government science ministries should defund pure laboratory research because theoretical papers produce zero jobs.' }
    ]
  },
  {
    id: 'u2-p-04', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Step 1: Problem Formulation, because identifying student dissatisfaction must precede every other research decision.' },
      { id: 'opt-b', text: 'Step 4: Methodology Design, because choosing between paper surveys and online forms determines student responses.' },
      { id: 'opt-c', text: 'Step 2: Literature Review, because reviewing prior research reveals existing validated tools and prevents naive repetition.' },
      { id: 'opt-d', text: 'Step 6: Data Analysis, because calculating descriptive statistical metrics determines whether student opinions are reliable.' }
    ]
  },
  {
    id: 'u2-p-05', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Collecting survey data before writing any research question guarantees spontaneous, unbiased answers from students.' },
      { id: 'opt-b', text: 'Conducting statistical tests before cleaning survey datasets accelerates the publication timeline in school journals.' },
      { id: 'opt-c', text: 'Finalizing research recommendations before interviewing community elders ensures the project stays on schedule.' },
      { id: 'opt-d', text: 'Distributing questionnaires without a literature review and clear question creates unscientific, disorganized data.' }
    ]
  },
  {
    id: 'u2-p-06', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Surveys should only gather numerical responses because written words cannot be evaluated systematically by scientists.' },
      { id: 'opt-b', text: 'Quantitative data provides statistical patterns and generalizability, while qualitative data reveals lived experiences.' },
      { id: 'opt-c', text: 'Qualitative research is merely preliminary anecdotal evidence that must be discarded once formal numbers are tallied.' },
      { id: 'opt-d', text: 'Combining numbers with open-ended interviews invalidates scientific rigor because statistical tests demand purity.' }
    ]
  },
  {
    id: 'u2-p-07', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Quantitative Methodology, because the research objective demands measuring numerical prevalence across a large representative sample.' },
      { id: 'opt-b', text: 'Qualitative Methodology, because interviewing 10 students provides deeper personal anecdotes about emotional sleep stress.' },
      { id: 'opt-c', text: 'Mixed Methods Methodology, because every high school inquiry project must include both numbers and unstructured interviews.' },
      { id: 'opt-d', text: 'Historical Archival Methodology, because reviewing school attendance registers from thirty years ago confirms sleep habits.' }
    ]
  },
  {
    id: 'u2-p-08', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Publishing student names alongside their test results to promote academic transparency across the province.' },
      { id: 'opt-b', text: 'Discarding negative survey responses so the final research report highlights the program’s positive outcomes.' },
      { id: 'opt-c', text: 'Obtaining informed consent, safeguarding participant confidentiality, and avoiding emotional or physical harm.' },
      { id: 'opt-d', text: 'Offering financial cash payments to guarantee that low-income participants give favorable responses to questions.' }
    ]
  },
  {
    id: 'u2-p-09', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Secure institutional permissions, obtain informed consent from parents and students, and guarantee strict anonymity.' },
      { id: 'opt-b', text: 'Publish all raw interview recordings on public social media channels to establish transparent public debate.' },
      { id: 'opt-c', text: 'Hide microphones under classroom desks to record authentic student discussions without their awareness or consent.' },
      { id: 'opt-d', text: 'Promise students higher end-of-term academic grades if they agree to participate in confidential focus groups.' }
    ]
  },
  {
    id: 'u2-p-10', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Proceed with the publication immediately because environmental truth is more important than municipal business privacy.' },
      { id: 'opt-b', text: 'Alter the water laboratory test values in the spreadsheet so the findings show completely clean drinking water.' },
      { id: 'opt-c', text: 'Uphold academic honesty by reporting the actual findings while consulting school supervisors on ethical data disclosure.' },
      { id: 'opt-d', text: 'Destroy the lab samples and terminate the investigation to avoid upsetting commercial relations with local business sponsors.' }
    ]
  },
  {
    id: 'u2-p-11', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Subjective speculation, emotional conviction, personal popularity, and charismatic rhetorical delivery.' },
      { id: 'opt-b', text: 'Speed of publication, length of bibliography, number of colorful diagrams, and endorsement by online influencers.' },
      { id: 'opt-c', text: 'Uniformity of public opinion, commercial marketability, lack of controversy, and simple binary conclusions.' },
      { id: 'opt-d', text: 'Empirical evidence, systematic methodology, transparent limitations, and rigorous peer-review evaluation.' }
    ]
  },
  {
    id: 'u2-p-12', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Relying exclusively on non-peer-reviewed personal lifestyle blogs to establish medical scientific definitions.' },
      { id: 'opt-b', text: 'Synthesizing empirical findings from peer-reviewed journals, identifying research gaps, and evaluating methodologies.' },
      { id: 'opt-c', text: 'Summarizing the plot lines of popular fictional television dramas about teenage hospital patients in Bandung.' },
      { id: 'opt-d', text: 'Copying and pasting verbatim paragraphs from five Wikipedia articles without verifying original primary citations.' }
    ]
  },
  {
    id: 'u2-p-13', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Sampling only close personal friends during lunch breaks guarantees high data validity because friends answer questions honestly.' },
      { id: 'opt-b', text: 'Using stratified random sampling ensures every subgroup within the student body is proportionally represented in the survey.' },
      { id: 'opt-c', text: 'Surveying only the highest-achieving science students provides the most accurate data for overall school social policies.' },
      { id: 'opt-d', text: 'Excluding students who commute by public transport simplifies research logistics and prevents data collection delays.' }
    ]
  },
  {
    id: 'u2-p-14', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Qualitative analysis using thematic coding to identify recurring concepts across transcripts.' },
      { id: 'opt-b', text: 'Quantitative analysis calculating standard deviation and regression coefficients for quotes.' },
      { id: 'opt-c', text: 'Purely mathematical correlation analysis measuring numerical frequency of single consonants.' },
      { id: 'opt-d', text: 'Financial cost-benefit accounting comparing paper transcription costs to digital recorders.' }
    ]
  },
  {
    id: 'u2-p-15', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'A strong conclusion ignores research limitations to make universal claims that impress government funding committees.' },
      { id: 'opt-b', text: 'A strong conclusion introduces completely new raw datasets that were never mentioned in the data analysis chapter.' },
      { id: 'opt-c', text: 'A strong conclusion guarantees that following the study’s policy recommendations will solve all related societal problems.' },
      { id: 'opt-d', text: 'A strong conclusion synthesizes key findings, acknowledges methodological limitations, and proposes practical solutions.' }
    ]
  }
];

// ============================================================================
// UNIT 3 UPDATES (10 Qs)
// ============================================================================
const u3Updates: OptionUpdate[] = [
  {
    id: 'u3-p-01', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'The Mean is always the most accurate representation of typical values in every dataset.' },
      { id: 'opt-b', text: 'Extreme outliers exert zero mathematical influence on the calculated arithmetic Mean.' },
      { id: 'opt-c', text: 'The Median provides a more robust measure of central tendency when datasets contain severe outliers.' },
      { id: 'opt-d', text: 'The Mode should be discarded because qualitative categories cannot have repeated frequencies.' }
    ]
  },
  {
    id: 'u3-p-02', // correct: opt-a (Rank 1 - equal/close)
    options: [
      { id: 'opt-a', text: 'Median' },
      { id: 'opt-b', text: 'Mean' },
      { id: 'opt-c', text: 'Mode' },
      { id: 'opt-d', text: 'Range' }
    ]
  },
  {
    id: 'u3-p-03', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Standard deviation measures the exact difference between the highest value and the lowest value in a survey sample.' },
      { id: 'opt-b', text: 'A higher standard deviation always proves that the underlying research methodology suffered from sampling errors.' },
      { id: 'opt-c', text: 'Standard deviation calculates the percentage of survey respondents who selected the neutral option on a Likert scale.' },
      { id: 'opt-d', text: 'Standard deviation quantifies the dispersion of data points around the mean; low values indicate high consistency.' }
    ]
  },
  {
    id: 'u3-p-04', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Pie Chart showing parts of 100%' },
      { id: 'opt-b', text: 'Line Graph showing continuous trends over time' },
      { id: 'opt-c', text: 'Bar Chart comparing discrete categories' },
      { id: 'opt-d', text: 'Scatter Plot assessing correlation between variables' }
    ]
  },
  {
    id: 'u3-p-05', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Histogram showing numerical data distribution' },
      { id: 'opt-b', text: 'Line Graph tracking monthly temperature shifts' },
      { id: 'opt-c', text: 'Scatter Plot examining the relationship between two variables' },
      { id: 'opt-d', text: 'Box Plot highlighting median and interquartile ranges' }
    ]
  },
  {
    id: 'u3-p-06', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Truncating the y-axis creates a visually dramatic slope that exaggerates small, statistically minor differences.' },
      { id: 'opt-b', text: 'Starting the vertical scale at 50% is required by international cartographic and graphic visualization standards.' },
      { id: 'opt-c', text: 'Using a line graph for percentage data is fundamentally invalid because lines can only represent physical speed.' },
      { id: 'opt-d', text: 'Labeling the horizontal axis with calendar years distorts longitudinal trends by concealing seasonal fluctuations.' }
    ]
  },
  {
    id: 'u3-p-07', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Qualitative thematic coding converts written narratives into exact mathematical equations for regression analysis.' },
      { id: 'opt-b', text: 'Thematic analysis requires researchers to discard all participant quotes that contradict the researcher’s hypothesis.' },
      { id: 'opt-c', text: 'Qualitative coding is performed exclusively by computer software without any human interpretive judgments.' },
      { id: 'opt-d', text: 'Thematic analysis involves systematically organizing raw narrative data into meaningful codes to identify overarching themes.' }
    ]
  },
  {
    id: 'u3-p-08', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Counting the total number of words in an interview transcript.' },
      { id: 'opt-b', text: 'A shorthand label assigned to a text excerpt representing an idea.' },
      { id: 'opt-c', text: 'A statistical test proving the statistical significance of a quote.' },
      { id: 'opt-d', text: 'The final policy recommendation presented to government ministers.' }
    ]
  },
  {
    id: 'u3-p-09', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Triangulation means surveying exactly three participants to maintain a small, highly manageable qualitative dataset.' },
      { id: 'opt-b', text: 'Triangulation requires researchers to discard the lowest and highest survey responses before calculating statistical means.' },
      { id: 'opt-c', text: 'Triangulation combines multiple data sources, methods, or observers to cross-verify findings and enhance research credibility.' },
      { id: 'opt-d', text: 'Triangulation replaces formal ethical consent procedures by cross-referencing public social media profiles of participants.' }
    ]
  },
  {
    id: 'u3-p-10', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Correlation indicates that two variables change together, but does not prove that one variable causes the other to occur.' },
      { id: 'opt-b', text: 'Whenever two statistical variables demonstrate strong correlation, a direct causal link is mathematically guaranteed.' },
      { id: 'opt-c', text: 'Correlation can only be calculated for biological experiments, whereas social science data requires thematic causality.' },
      { id: 'opt-d', text: 'Negative correlation indicates that research data was recorded incorrectly and must be discarded from the final analysis.' }
    ]
  }
];

// ============================================================================
// UNIT 4 UPDATES (10 Qs)
// ============================================================================
const u4Updates: OptionUpdate[] = [
  {
    id: 'u4-p-01', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'A single immediate factor that triggers an event, such as a lightning strike igniting a forest fire.' },
      { id: 'opt-b', text: 'An underlying, systemic factor that creates the vulnerabilities allowing a crisis to develop over time.' },
      { id: 'opt-c', text: 'The visible physical damage documented by journalists immediately following a natural disaster.' },
      { id: 'opt-d', text: 'An emergency relief donation organized by international non-governmental organizations.' }
    ]
  },
  {
    id: 'u4-p-02', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Root Cause Factor' },
      { id: 'opt-b', text: 'Systemic Vulnerability' },
      { id: 'opt-c', text: 'Long-term Condition' },
      { id: 'opt-d', text: 'Immediate Trigger' }
    ]
  },
  {
    id: 'u4-p-03', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Root causes are systemic and structural conditions, whereas triggers are immediate catalytic events.' },
      { id: 'opt-b', text: 'Root causes occur exclusively at international scales, while triggers happen only within private households.' },
      { id: 'opt-c', text: 'Addressing triggers permanently resolves social problems, while studying root causes produces academic delay.' },
      { id: 'opt-d', text: 'Triggers are verifiable empirical facts, while root causes are subjective opinions without statistical evidence.' }
    ]
  },
  {
    id: 'u4-p-04', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'A primary effect that occurs immediately at the point of intervention.' },
      { id: 'opt-b', text: 'An unverified rumor shared across informal community communication channels.' },
      { id: 'opt-c', text: 'An unintended secondary consequence triggered indirectly along a causal chain.' },
      { id: 'opt-d', text: 'A planned policy outcome that matches all initial government projections.' }
    ]
  },
  {
    id: 'u4-p-05', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Installing coastal flood barriers in response to rising sea levels.' },
      { id: 'opt-b', text: 'Subsidizing corn biofuels leading to global food price inflation.' },
      { id: 'opt-c', text: 'Distributing mosquito nets that immediately reduce malaria cases.' },
      { id: 'opt-d', text: 'Building a school library that directly increases reading scores.' }
    ]
  },
  {
    id: 'u4-p-06', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Linear causality guarantees that complex ecosystems respond predictably to single-variable chemical modifications.' },
      { id: 'opt-b', text: 'Ecosystems operate on simple one-to-one cause-and-effect mechanisms where side effects never compound.' },
      { id: 'opt-c', text: 'Chemical interventions always produce purely localized outcomes without influencing adjacent food chains.' },
      { id: 'opt-d', text: 'Complex systems involve interconnected feedback loops where interventions generate cascading ripple effects.' }
    ]
  },
  {
    id: 'u4-p-07', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'A self-reinforcing cycle where an initial change produces effects that amplify the original condition.' },
      { id: 'opt-b', text: 'A stabilizing mechanism that automatically restores a natural ecosystem back to its original equilibrium.' },
      { id: 'opt-c', text: 'A formal legal agreement between national governments to regulate greenhouse gas emissions.' },
      { id: 'opt-d', text: 'A data collection technique where researchers survey the same participant three consecutive times.' }
    ]
  },
  {
    id: 'u4-p-08', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Linear Cause' },
      { id: 'opt-b', text: 'Direct Driver' },
      { id: 'opt-c', text: 'Feedback Loop' },
      { id: 'opt-d', text: 'Static Factor' }
    ]
  },
  {
    id: 'u4-p-09', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Assuming that every global crisis can be traced back to a single malicious individual or corporation.' },
      { id: 'opt-b', text: 'Examining relationships, feedback loops, and structural patterns rather than isolating single events.' },
      { id: 'opt-c', text: 'Focusing exclusively on short-term emergency interventions while ignoring long-term historical trends.' },
      { id: 'opt-d', text: 'Relying solely on anecdotal interviews with local officials without verifying systemic economic data.' }
    ]
  },
  {
    id: 'u4-p-10', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Complex global challenges will naturally self-correct if governments refrain from regulatory interventions.' },
      { id: 'opt-b', text: 'Single-factor solutions are universally effective because eliminating one root cause terminates all consequences.' },
      { id: 'opt-c', text: 'Local communities must bear the entire financial burden of mitigating unintended global environmental side effects.' },
      { id: 'opt-d', text: 'Effective interventions require mapping multi-tiered causal chains to anticipate unintended systemic consequences.' }
    ]
  }
];

// ============================================================================
// UNIT 5 UPDATES (10 Qs)
// ============================================================================
const u5Updates: OptionUpdate[] = [
  {
    id: 'u5-p-01', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Specific, Measurable, Achievable, Relevant, and Time-bound.' },
      { id: 'opt-b', text: 'Simple, Manageable, Ambitious, Realistic, and Tested.' },
      { id: 'opt-c', text: 'Strategic, Meaningful, Actionable, Resilient, and Timely.' },
      { id: 'opt-d', text: 'Structured, Monitored, Accurate, Reliable, and Targeted.' }
    ]
  },
  {
    id: 'u5-p-02', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'It lacks an Achievable component because students cannot improve reading speeds.' },
      { id: 'opt-b', text: 'It lacks a Relevant component because adolescent reading habits are not academic.' },
      { id: 'opt-c', text: 'It lacks Measurable and Time-bound criteria to evaluate progress and completion.' },
      { id: 'opt-d', text: 'It lacks a Specific focus because the student did not select an author biography.' }
    ]
  },
  {
    id: 'u5-p-03', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Read more books every weekend whenever free time permits during the school semester.' },
      { id: 'opt-b', text: 'Read two Global Perspectives articles weekly and summarize core arguments by November 30.' },
      { id: 'opt-c', text: 'Become the fastest academic reader in the entire school before the semester concludes.' },
      { id: 'opt-d', text: 'Complete all school library reading assignments perfectly without making any errors.' }
    ]
  },
  {
    id: 'u5-p-04', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Assigning all research tasks to the most academically gifted student to maximize presentation quality.' },
      { id: 'opt-b', text: 'Allowing team members to work without deadlines or coordination to encourage spontaneous creativity.' },
      { id: 'opt-c', text: 'Resolving team disagreements by having the team leader make all decisions without consulting peers.' },
      { id: 'opt-d', text: 'Establishing clear roles, shared milestones, active listening, and constructive conflict resolution.' }
    ]
  },
  {
    id: 'u5-p-05', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Schedule a structured team check-in to realign task allocations, review deadlines, and offer mutual support.' },
      { id: 'opt-b', text: 'Expel the struggling student from the group immediately and report their failure to the school principal.' },
      { id: 'opt-c', text: 'Ignore the missed deadline and complete the entire remaining research workload without informing the teammate.' },
      { id: 'opt-d', text: 'Publicly criticize the teammate’s work ethic during the final classroom presentation in front of the teacher.' }
    ]
  },
  {
    id: 'u5-p-06', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'A team leader should make all major decisions independently to ensure maximum speed and efficiency.' },
      { id: 'opt-b', text: 'Leadership should be avoided entirely in collaborative student projects to prevent power struggles.' },
      { id: 'opt-c', text: 'Facilitating open communication, coordinating responsibilities, and ensuring every member contributes.' },
      { id: 'opt-d', text: 'Doing the majority of research personally while assigning minor administrative tasks to others.' }
    ]
  },
  {
    id: 'u5-p-07', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Reflecting on personal learning is unnecessary once a project report has received a passing grade.' },
      { id: 'opt-b', text: 'Metacognitive reflection helps learners evaluate collaborative processes and improve future research.' },
      { id: 'opt-c', text: 'Reflection should focus exclusively on assigning blame for team mistakes to individual group members.' },
      { id: 'opt-d', text: 'Reflective writing is only valuable for qualitative humanities studies, not scientific inquiries.' }
    ]
  },
  {
    id: 'u5-p-08', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Listing the final presentation grades received by each student in the team portfolio.' },
      { id: 'opt-b', text: 'Describing the physical layout of the school library where the team held meetings.' },
      { id: 'opt-c', text: 'Summarizing the factual content of the research topic without discussing team dynamics.' },
      { id: 'opt-d', text: 'Analyzing how personal biases shifted and identifying strategies for stronger future teamwork.' }
    ]
  },
  {
    id: 'u5-p-09', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Active listening involves giving full attention, seeking clarification, and validating the speaker’s viewpoint.' },
      { id: 'opt-b', text: 'Active listening means remaining silent while privately planning one’s counter-argument during a debate.' },
      { id: 'opt-c', text: 'Active listening requires agreeing with every statement made by peers to prevent interpersonal conflict.' },
      { id: 'opt-d', text: 'Active listening is only necessary when communicating with teachers, not between student teammates.' }
    ]
  },
  {
    id: 'u5-p-10', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Adopting a competitive mindset where winning individual debates is prioritized over team consensus.' },
      { id: 'opt-b', text: 'Focusing on the shared objective, de-personalizing criticisms, and negotiating a fair middle ground.' },
      { id: 'opt-c', text: 'Demanding that the teacher intervene immediately to dictate which student’s proposal must be chosen.' },
      { id: 'opt-d', text: 'Refusing to participate in further team tasks until all other members surrender to your proposal.' }
    ]
  }
];

updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit1Practice.ts'), u1Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit2Practice.ts'), u2Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit3Practice.ts'), u3Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit4Practice.ts'), u4Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit5Practice.ts'), u5Updates);

