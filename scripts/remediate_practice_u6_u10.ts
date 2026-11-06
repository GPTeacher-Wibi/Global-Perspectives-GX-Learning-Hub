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
      const escapedText = o.text.replace(/'/g, "\\'");
      return `      {\n        id: '${o.id}',\n        text: '${escapedText}'\n      }`;
    }).join(',\n') + `\n    ]`;

    content = content.slice(0, optionsStart) + formattedOptions + content.slice(optionsEnd);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Successfully updated ${updates.length} questions in ${filePath}`);
}

// ============================================================================
// UNIT 6 UPDATES (10 Qs)
// ============================================================================
const u6Updates: OptionUpdate[] = [
  {
    id: 'u6-p-01', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Does recycling plastic bottles solve urban air pollution in Jakarta?' },
      { id: 'opt-b', text: 'Why is air pollution bad for children living in congested urban neighborhoods?' },
      { id: 'opt-c', text: 'How much money does the municipal government spend on street cleaning each year?' },
      { id: 'opt-d', text: 'To what extent do odd-even traffic rules reduce PM2.5 particulate levels in Central Jakarta?' }
    ]
  },
  {
    id: 'u6-p-02', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'It uses technical environmental terminology that average high school survey respondents cannot comprehend.' },
      { id: 'opt-b', text: 'It is a leading question that embeds an emotional presumption rather than maintaining neutral inquiry.' },
      { id: 'opt-c', text: 'It focuses on public transit rather than evaluating electric passenger car manufacturing incentives.' },
      { id: 'opt-d', text: 'It fails to specify whether the surveyed buses operate on diesel combustion or compressed natural gas.' }
    ]
  },
  {
    id: 'u6-p-03', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'The inquiry prompt is too narrow and can be answered completely in a single sentence using census data.' },
      { id: 'opt-b', text: 'The question focuses exclusively on international shipping laws while ignoring domestic water policies.' },
      { id: 'opt-c', text: 'It lacks geographic and demographic focus, making empirical data collection impossibly broad for a student.' },
      { id: 'opt-d', text: 'It relies on quantitative measurements instead of gathering personal narrative reflections from citizens.' }
    ]
  },
  {
    id: 'u6-p-04', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Revising closed "yes/no" prompts into open evaluative inquiries that invite multi-perspective debate.' },
      { id: 'opt-b', text: 'Adding emotive adjectives to encourage survey respondents to agree with the researcher’s thesis.' },
      { id: 'opt-c', text: 'Expanding the geographic boundary to evaluate all countries across the globe within a single essay.' },
      { id: 'opt-d', text: 'Eliminating all secondary research sources to rely exclusively on informal peer conversations.' }
    ]
  },
  {
    id: 'u6-p-05', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Using a balanced Likert scale ranging from "Strongly Disagree" to "Strongly Agree" with neutral options.' },
      { id: 'opt-b', text: 'Informing respondents about the study’s institutional sponsors and ethical data protection guidelines.' },
      { id: 'opt-c', text: 'Pre-testing survey questions on a small pilot sample to identify confusing wording before full launch.' },
      { id: 'opt-d', text: 'Combining two separate issues into a single question, making it impossible to know which issue is answered.' }
    ]
  },
  {
    id: 'u6-p-06', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Surveying only close friends guarantees honest answers because social familiarity eliminates test anxiety.' },
      { id: 'opt-b', text: 'Convenience sampling introduces sampling bias because classmates do not represent the broader community.' },
      { id: 'opt-c', text: 'Distributing online forms to student group chats ensures complete demographic coverage across all age brackets.' },
      { id: 'opt-d', text: 'Voluntary response surveys automatically eliminate bias because unmotivated participants decline to answer.' }
    ]
  },
  {
    id: 'u6-p-07', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'A completely neutral prompt that collects objective data on youth smartphone usage habits.' },
      { id: 'opt-b', text: 'An open-ended question that allows respondents to express diverse philosophical viewpoints.' },
      { id: 'opt-c', text: 'A loaded question using pejorative language to nudge respondents toward a predetermined answer.' },
      { id: 'opt-d', text: 'A double-barreled question asking about screen time and academic performance simultaneously.' }
    ]
  },
  {
    id: 'u6-p-08', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Frame questions neutrally, provide balanced response scales, and avoid emotionally charged descriptors.' },
      { id: 'opt-b', text: 'Explicitly inform respondents which answer supports the school’s community service accreditation goals.' },
      { id: 'opt-c', text: 'Only offer binary "Yes" or "No" response options to simplify data analysis and prevent ambiguous feedback.' },
      { id: 'opt-d', text: 'Discard questionnaires from participants who express disagreement with the researcher’s personal thesis.' }
    ]
  },
  {
    id: 'u6-p-09', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Conducting in-depth interviews with three family members provides sufficient proof for nationwide policy changes.' },
      { id: 'opt-b', text: 'Online social media polls represent the general voting public because internet access is nearly universal.' },
      { id: 'opt-c', text: 'A sample size of thirty students is always adequate regardless of total school population or subgroups.' },
      { id: 'opt-d', text: 'A representative sample must reflect the demographic characteristics and diversity of the target population.' }
    ]
  },
  {
    id: 'u6-p-10', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Pilot testing should be skipped whenever research deadlines are tight to ensure prompt report delivery.' },
      { id: 'opt-b', text: 'Testing a survey on a trial group invalidates research findings because respondents discuss questions.' },
      { id: 'opt-c', text: 'A pilot study detects ambiguous wording, leading phrasing, and procedural defects before full distribution.' },
      { id: 'opt-d', text: 'The primary purpose of pilot testing is to calculate the final statistical significance of survey findings.' }
    ]
  }
];

// ============================================================================
// UNIT 7 UPDATES (10 Qs)
// ============================================================================
const u7Updates: OptionUpdate[] = [
  {
    id: 'u7-p-01', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Deductive reasoning derives probable theories from observed empirical evidence.' },
      { id: 'opt-b', text: 'Abductive reasoning tests established scientific premises through controlled trials.' },
      { id: 'opt-c', text: 'Deductive reasoning begins with general premises to reach a logically certain conclusion.' },
      { id: 'opt-d', text: 'Inductive reasoning guarantees that conclusions must be true if premises are valid.' }
    ]
  },
  {
    id: 'u7-p-02', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Inductive generalizations offer probabilistic likelihood rather than absolute logical certainty.' },
      { id: 'opt-b', text: 'A single empirical counterexample confirms that the original generalization was universally correct.' },
      { id: 'opt-c', text: 'Inductive conclusions must be rejected as unscientific unless verified across all world continents.' },
      { id: 'opt-d', text: 'Observing fifty consistent cases mathematically proves that zero exceptions can ever exist in nature.' }
    ]
  },
  {
    id: 'u7-p-03', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Formulating a definitive deductive proof based on established mathematical geometry.' },
      { id: 'opt-b', text: 'Conducting an exhaustive quantitative survey across all thirty-eight provincial capitals.' },
      { id: 'opt-c', text: 'Rejecting all scientific explanations until a controlled laboratory trial is performed.' },
      { id: 'opt-d', text: 'Abductive reasoning (inference to the most plausible explanation based on available clues).' }
    ]
  },
  {
    id: 'u7-p-04', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Qualifiers should be excluded from academic writing to make policy claims appear strong and decisive.' },
      { id: 'opt-b', text: 'Qualifiers specify conditions, scope, and probability, preventing reckless overgeneralization in claims.' },
      { id: 'opt-c', text: 'Using qualifiers indicates that the researcher lacks confidence and has gathered insufficient evidence.' },
      { id: 'opt-d', text: 'Qualifiers are only permitted in informal debates, whereas formal essays require absolute statements.' }
    ]
  },
  {
    id: 'u7-p-05', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'The Warrant (the underlying reasoning that connects the grounds to the claim).' },
      { id: 'opt-b', text: 'The Backing (empirical statistical documentation verifying the primary evidence).' },
      { id: 'opt-c', text: 'The Rebuttal (acknowledging specific conditions where the claim does not apply).' },
      { id: 'opt-d', text: 'The Qualifier (words like "probably" or "in most cases" limiting claim scope).' }
    ]
  },
  {
    id: 'u7-p-06', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Ad Hominem fallacy, attacking the opposing debater’s personal lifestyle habits.' },
      { id: 'opt-b', text: 'Slippery Slope fallacy, claiming one step leads to an inevitable extreme disaster.' },
      { id: 'opt-c', text: 'Straw Man fallacy (misrepresenting the opponent’s argument to make it easier to attack).' },
      { id: 'opt-d', text: 'Appeal to Ignorance fallacy, arguing lack of evidence proves something is true.' }
    ]
  },
  {
    id: 'u7-p-07', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'It presents verified statistical evidence showing a direct causal connection between both events.' },
      { id: 'opt-b', text: 'False Cause (Post Hoc Ergo Propter Hoc), assuming that because B followed A, A caused B to occur.' },
      { id: 'opt-c', text: 'False Dilemma, restricting a complex multi-factor situation into only two mutually exclusive choices.' },
      { id: 'opt-d', text: 'Appeal to Authority, relying on quotes from famous celebrities who lack expertise in the subject.' }
    ]
  },
  {
    id: 'u7-p-08', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Circular Reasoning, repeating the claim as its own justification without adding any evidence.' },
      { id: 'opt-b', text: 'Hasty Generalization, drawing a sweeping conclusion from an unrepresentative single case.' },
      { id: 'opt-c', text: 'Red Herring, introducing an irrelevant topic to divert attention from the core issue debated.' },
      { id: 'opt-d', text: 'Ad Hominem (attacking the researcher’s character rather than evaluating their factual evidence).' }
    ]
  },
  {
    id: 'u7-p-09', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Framing complex policy debates into binary extremes encourages voters to compromise on middle options.' },
      { id: 'opt-b', text: 'It presents a False Dilemma, artificially ignoring viable middle solutions like hybrid energy transitions.' },
      { id: 'opt-c', text: 'Binary arguments are required by parliamentary debate rules to ensure clear legislative voting choices.' },
      { id: 'opt-d', text: 'It represents sound deductive logic because economic growth and environmental protection never co-exist.' }
    ]
  },
  {
    id: 'u7-p-10', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Include valid empirical evidence, sound logical connections, clear qualifiers, and address counterarguments.' },
      { id: 'opt-b', text: 'Use passionate rhetorical language, repeat assertions frequently, and dismiss all dissenting viewpoints.' },
      { id: 'opt-c', text: 'Rely exclusively on famous celebrity endorsements while avoiding complex statistical data tables.' },
      { id: 'opt-d', text: 'Present arguments as absolute universal truths that permit zero exceptions, caveats, or limitations.' }
    ]
  }
];

// ============================================================================
// UNIT 8 UPDATES (10 Qs)
// ============================================================================
const u8Updates: OptionUpdate[] = [
  {
    id: 'u8-p-01', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Credibility, Reliability, Accuracy, Appropriateness, and Popularity.' },
      { id: 'opt-b', text: 'Currency, Relevance, Authority, Accuracy, and Purpose in evaluating sources.' },
      { id: 'opt-c', text: 'Citation, Reference, Author, Argument, and Publication year checks.' },
      { id: 'opt-d', text: 'Clarity, Rigor, Authenticity, Application, and Perspective in research.' }
    ]
  },
  {
    id: 'u8-p-02', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'The website displays colorful data graphics and has over one million online followers.' },
      { id: 'opt-b', text: 'The article uses formal scientific vocabulary and includes a downloadable PDF file.' },
      { id: 'opt-c', text: 'The article was published within the last twenty-four hours on a popular lifestyle blog.' },
      { id: 'opt-d', text: 'Peer-reviewed research published in recognized academic journals with transparent methods.' }
    ]
  },
  {
    id: 'u8-p-03', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Leave the original website to search what independent third-party sources say about the publisher.' },
      { id: 'opt-b', text: 'Carefully read the organization’s self-authored "About Us" page to verify their stated mission.' },
      { id: 'opt-c', text: 'Check whether the website features a professional layout, high-resolution logos, and secure HTTPS.' },
      { id: 'opt-d', text: 'Accept all claims as factual if the article quotes two named individuals holding doctoral degrees.' }
    ]
  },
  {
    id: 'u8-p-04', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Stop reading immediately and discard the research question because online sources are untrustworthy.' },
      { id: 'opt-b', text: 'Investigate the source’s funding sources, find trusted coverage, and trace claims to original data.' },
      { id: 'opt-c', text: 'Stop, Investigate the source, Find trusted coverage, and Trace claims, quotes, and media back to context.' },
      { id: 'opt-d', text: 'Scan headings, Ignore conflicting viewpoints, Forward to classmates, and Translate into English.' }
    ]
  },
  {
    id: 'u8-p-05', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'It proves the video is authentic because digital video cameras record optical reality without bias.' },
      { id: 'opt-b', text: 'It indicates the video was filmed during an official press conference attended by journalists.' },
      { id: 'opt-c', text: 'It confirms that social media platforms verified the footage using automated content filters.' },
      { id: 'opt-d', text: 'It suggests synthetic manipulation, requiring verification against official speeches and lateral news.' }
    ]
  },
  {
    id: 'u8-p-06', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Commercial sponsorship guarantees high data accuracy because corporations possess massive research budgets.' },
      { id: 'opt-b', text: 'The financial conflict of interest compromises Purpose, as the authors have an incentive to minimize harms.' },
      { id: 'opt-c', text: 'Corporate white papers are superior to university studies because corporate scientists work in industry.' },
      { id: 'opt-d', text: 'Funding transparency eliminates all researcher bias, making corporate research fully objective and reliable.' }
    ]
  },
  {
    id: 'u8-p-07', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Approach vendors respectfully, explain the school project, and obtain voluntary consent before recording.' },
      { id: 'opt-b', text: 'Conceal recording equipment inside a backpack to capture authentic behavior without participant awareness.' },
      { id: 'opt-c', text: 'Offer monetary cash payments to children working in the market to pose for dramatic poverty photos.' },
      { id: 'opt-d', text: 'Publish all raw market video footage on public social media channels without blurring vendor faces.' }
    ]
  },
  {
    id: 'u8-p-08', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Ethical review is optional for high school students conducting local field observations.' },
      { id: 'opt-b', text: 'Informed consent is only required when participants receive monetary financial compensation.' },
      { id: 'opt-c', text: 'Researchers must respect local cultural norms, preserve community dignity, and avoid harm.' },
      { id: 'opt-d', text: 'Student researchers are exempt from privacy laws when completing accredited academic homework.' }
    ]
  },
  {
    id: 'u8-p-09', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Assume that AI-generated citations are fully verified because large language models access all books.' },
      { id: 'opt-b', text: 'Include AI citations directly in bibliographies as long as the journal title sounds academically formal.' },
      { id: 'opt-c', text: 'Use generative AI to write the entire literature review without reading any of the cited research papers.' },
      { id: 'opt-d', text: 'Manually verify every citation in academic databases, as generative AI models can hallucinate sources.' }
    ]
  },
  {
    id: 'u8-p-10', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Accept the article as factual because viral social media posts reflect genuine public consensus.' },
      { id: 'opt-b', text: 'Check only the comment section beneath the post to see whether casual online readers agree.' },
      { id: 'opt-c', text: 'Locate the original research paper to determine whether the headline accurately reflects the findings.' },
      { id: 'opt-d', text: 'Discard all scientific news reporting because journalism never accurately translates research.' }
    ]
  }
];

// ============================================================================
// UNIT 9 UPDATES (10 Qs)
// ============================================================================
const u9Updates: OptionUpdate[] = [
  {
    id: 'u9-p-01', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'An unstated, taken-for-granted belief or premise that underpins an argument without explicit proof.' },
      { id: 'opt-b', text: 'A verified statistical metric published in an official national census bureau report.' },
      { id: 'opt-c', text: 'A direct interview quotation transcribed verbatim from an expert witness testimony.' },
      { id: 'opt-d', text: 'A formal bibliographical citation formatted according to international academic style guidelines.' }
    ]
  },
  {
    id: 'u9-p-02', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Unmasking assumptions is unnecessary if the speaker has high social status and charismatic presence.' },
      { id: 'opt-b', text: 'Assumptions should be accepted as true whenever they match the researcher’s personal intuition.' },
      { id: 'opt-c', text: 'Arguments rest on hidden premises; exposing flawed assumptions reveals whether conclusions are sound.' },
      { id: 'opt-d', text: 'Critiquing assumptions is considered disrespectful in formal academic and policy debates.' }
    ]
  },
  {
    id: 'u9-p-03', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Assuming that older workers are completely incapable of learning any digital workplace applications.' },
      { id: 'opt-b', text: 'Assuming that economic efficiency and productivity are the sole priorities, ignoring social cohesion.' },
      { id: 'opt-c', text: 'Assuming that robotics manufacturing firms should receive zero tax incentives from the government.' },
      { id: 'opt-d', text: 'Assuming that factory automation will be permanently outlawed by international labor conventions.' }
    ]
  },
  {
    id: 'u9-p-04', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'An online discussion where participants debate conflicting ideas with rigorous intellectual humility.' },
      { id: 'opt-b', text: 'An audio recording studio designed with acoustic dampening panels to eliminate background noise.' },
      { id: 'opt-c', text: 'A scientific laboratory where peer-reviewed hypotheses are subjected to repeated empirical testing.' },
      { id: 'opt-d', text: 'An information environment where individuals encounter only beliefs that reinforce their preconceptions.' }
    ]
  },
  {
    id: 'u9-p-05', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Algorithmic curation ensures users encounter a wide spectrum of opposing political perspectives.' },
      { id: 'opt-b', text: 'Search engines are legally mandated to present only neutral, verified scientific consensus articles.' },
      { id: 'opt-c', text: 'Platforms optimize for user engagement, serving sensational content that reinforces existing biases.' },
      { id: 'opt-d', text: 'Digital algorithms prevent confirmation bias by automatically debunking false claims in real time.' }
    ]
  },
  {
    id: 'u9-p-06', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Tendency to search for, interpret, and recall information that confirms preexisting beliefs while dismissing counter-evidence.' },
      { id: 'opt-b', text: 'Methodological requirement to verify all survey respondents hold identical cultural and religious backgrounds.' },
      { id: 'opt-c', text: 'Psychological capacity to listen empathetically to opposing arguments without experiencing emotional defensiveness.' },
      { id: 'opt-d', text: 'Statistical procedure of confirming survey sample demographics against national census data distributions.' }
    ]
  },
  {
    id: 'u9-p-07', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Descriptive claims are verifiable facts written by scientists; normative claims are emotional personal opinions.' },
      { id: 'opt-b', text: 'Descriptive claims are always universally false; normative claims are mathematically and logically certain.' },
      { id: 'opt-c', text: 'Only national governments can formulate descriptive claims; individual citizens make normative claims.' },
      { id: 'opt-d', text: 'Descriptive claims state how the world actually is; normative claims prescribe how the world ought to be.' }
    ]
  },
  {
    id: 'u9-p-08', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Blocking all online contacts who express perspectives that diverge from one’s immediate family traditions.' },
      { id: 'opt-b', text: 'Actively seeking credible sources from rival viewpoints, practicing intellectual empathy, and testing beliefs.' },
      { id: 'opt-c', text: 'Reading only anonymous forum comments posted late at night to find unvarnished public sentiment.' },
      { id: 'opt-d', text: 'Assuming that all claims published on social media platforms are equally factual and trustworthy.' }
    ]
  },
  {
    id: 'u9-p-09', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Overgeneralization: a tiny, unrepresentative sample cannot support universal claims about millions of youth.' },
      { id: 'opt-b', text: 'The research report failed to explain the historical roots of modern Korean pop music choreography.' },
      { id: 'opt-c', text: 'The investigator should have restricted the survey sample exclusively to traditional cultural dancers.' },
      { id: 'opt-d', text: 'The research publication did not specify the operating system used to analyze the student questionnaires.' }
    ]
  },
  {
    id: 'u9-p-10', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'To prove that the proposed initiative carries zero financial cost and guarantees immediate universal wealth.' },
      { id: 'opt-b', text: 'Real-world decisions involve resource constraints and competing interests; evaluating trade-offs shows maturity.' },
      { id: 'opt-c', text: 'To ensure the spoken capstone presentation satisfies the strict sixty-minute maximum speaking limit.' },
      { id: 'opt-d', text: 'Because Cambridge examination rules dictate that students must actively criticize all civic proposals.' }
    ]
  }
];

// ============================================================================
// UNIT 10 UPDATES (10 Qs)
// ============================================================================
const u10Updates: OptionUpdate[] = [
  {
    id: 'u10-p-01', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Introducing several brand-new statistical datasets and concepts that were never analyzed in earlier chapters.' },
      { id: 'opt-b', text: 'Copying the opening introductory paragraph word for word without offering any evaluative synthesis of findings.' },
      { id: 'opt-c', text: 'Formulating apologies to the grading committee for incomplete research procedures and editing shortcomings.' },
      { id: 'opt-d', text: 'Synthesizing evidence, directly answering the research question, evaluating limitations, and noting implications.' }
    ]
  },
  {
    id: 'u10-p-02', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'Ad Hominem fallacy (attacking the vehicle manufacturer’s character rather than assessing performance).' },
      { id: 'opt-b', text: 'Overgeneralization (extending a narrow, limited finding far beyond the bounds of the actual evidence).' },
      { id: 'opt-c', text: 'Post Hoc fallacy (assuming that because vehicle sales rose, traffic congestion was directly eliminated).' },
      { id: 'opt-d', text: 'Straw Man fallacy (caricaturing opposing arguments to make public transit alternatives look unviable).' }
    ]
  },
  {
    id: 'u10-p-03', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'The plastic bag ban was an outright failure because small convenience stores experienced brief retail friction.' },
      { id: 'opt-b', text: 'All urban retail convenience stores should be permanently shut down by municipal decree to eliminate all waste.' },
      { id: 'opt-c', text: 'Strong drainage gains and broad civic adaptation justify continuing the ban alongside retail transition support.' },
      { id: 'opt-d', text: 'Plastic polymers naturally biodegrade within weeks and produce zero measurable impact on urban drainage systems.' }
    ]
  },
  {
    id: 'u10-p-04', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'Acknowledge the rise in speeding honestly, modify the hypothesis, and note the unintended positive crime drop.' },
      { id: 'opt-b', text: 'Falsify traffic accident statistics so the final report confirms the student’s original safety hypothesis.' },
      { id: 'opt-c', text: 'Discard all collected radar records and cancel the research project to avoid presenting conflicting findings.' },
      { id: 'opt-d', text: 'Accuse local traffic police officers of recording false speed data to explain why the hypothesis failed.' }
    ]
  },
  {
    id: 'u10-p-05', // correct: opt-b (Rank 2)
    options: [
      { id: 'opt-a', text: 'It provides examiners with concrete reasons to penalize the student’s research methodology score.' },
      { id: 'opt-b', text: 'It shows intellectual honesty by candidly noting sample constraints, unmeasured variables, and boundaries.' },
      { id: 'opt-c', text: 'It demonstrates that the researcher conducted superficial work and failed to complete assigned tasks.' },
      { id: 'opt-d', text: 'It allows students to complain about demanding academic expectations and insufficient library books.' }
    ]
  },
  {
    id: 'u10-p-06', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Community members should try to be environmentally conscious and voluntarily reduce plastic trash disposal.' },
      { id: 'opt-b', text: 'Government authorities should instantly eliminate all industrial pollution across the province without delay.' },
      { id: 'opt-c', text: 'Schools must eliminate all homework so students have adequate free time to participate in neighborhood cleanups.' },
      { id: 'opt-d', text: 'The Education Agency should mandate dual sorting bins in all public middle school cafeterias by August 2026.' }
    ]
  },
  {
    id: 'u10-p-07', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'Mathematics instruction should be permanently eliminated from secondary school curricula across the country.' },
      { id: 'opt-b', text: 'All further educational research into adolescent learning technologies should cease because results are known.' },
      { id: 'opt-c', text: 'Conduct a 12-month longitudinal study to test whether math retention persists after gamification novelty fades.' },
      { id: 'opt-d', text: 'School boards must require all parents to purchase top-tier commercial smartphones for daily homework.' }
    ]
  },
  {
    id: 'u10-p-08', // correct: opt-a (Rank 2)
    options: [
      { id: 'opt-a', text: 'The conclusion answers the question using evidence, while reflection evaluates how research shifted perspectives.' },
      { id: 'opt-b', text: 'There is zero difference; both sections consist of identical summaries of statistical data and graphs.' },
      { id: 'opt-c', text: 'Personal reflection is assessed solely on grammar, handwriting, and decorative margin illustrations.' },
      { id: 'opt-d', text: 'Reflecting on personal values is strictly prohibited under Cambridge examination assessment guidelines.' }
    ]
  },
  {
    id: 'u10-p-09', // correct: opt-c (Rank 2)
    options: [
      { id: 'opt-a', text: 'The syllogism is completely sound and scientifically factual across all biological classifications.' },
      { id: 'opt-b', text: 'It represents an invalid inductive generalization that fails to evaluate representative bird species.' },
      { id: 'opt-c', text: 'It is logically valid in deductive structure, but unsound because its first premise is factually false.' },
      { id: 'opt-d', text: 'It commits an Ad Hominem fallacy against ornithologists who study predatory avian flying habits.' }
    ]
  },
  {
    id: 'u10-p-10', // correct: opt-d (Rank 2)
    options: [
      { id: 'opt-a', text: 'Analyze local coastal fish yields while completely disregarding national environmental statutes and treaties.' },
      { id: 'opt-b', text: 'Claim that coastal mangrove ecosystems flourish identically across every continent including Antarctica.' },
      { id: 'opt-c', text: 'Advise all coastal fishing families to permanently relocate to inland industrial manufacturing cities.' },
      { id: 'opt-d', text: 'Connect local erosion (Local) to national carbon laws (National) and global climate agreements (Global).' }
    ]
  }
];

updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit6Practice.ts'), u6Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit7Practice.ts'), u7Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit8Practice.ts'), u8Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit9Practice.ts'), u9Updates);
updatePracticeFile(path.resolve(process.cwd(), 'src/data/practice/unit10Practice.ts'), u10Updates);
