import fs from 'fs';
import path from 'path';

// Load all capstone objects
import { UNIT_3_CAPSTONE_DATA } from '../src/data/games/unit3CapstoneData';
import { UNIT_4_CAPSTONE_DATA } from '../src/data/games/unit4CapstoneData';
import { UNIT_5_CAPSTONE_DATA } from '../src/data/games/unit5CapstoneData';
import { UNIT_6_CAPSTONE_DATA } from '../src/data/games/unit6CapstoneData';
import { UNIT_7_CAPSTONE_DATA } from '../src/data/games/unit7CapstoneData';
import { UNIT_8_CAPSTONE_DATA } from '../src/data/games/unit8CapstoneData';
import { UNIT_9_CAPSTONE_DATA } from '../src/data/games/unit9CapstoneData';
import { UNIT_10_CAPSTONE_DATA } from '../src/data/games/unit10CapstoneData';

// Map of descriptions by unit and option ID
const descUpdates: Record<number, Record<string, string>> = {
  // --------------------------------------------------------------------------
  // UNIT 3
  // --------------------------------------------------------------------------
  3: {
    's1-opt-a': 'Classify Folders A & D as quantitative datasets analyzed via descriptive statistics, Folder B as primary qualitative narratives requiring thematic coding, and Folder C as secondary benchmark census data for contextual comparison.',
    's1-opt-b': 'Convert all qualitative commuter interview transcripts in Folder B into simple lexical word counts, discard Folder C because it represents secondary pre-existing reports, and compute arithmetic averages on Folders A, B, and D.',
    's1-opt-c': 'Browse through Folder B to find two dramatic quotes, ignore the 120,000 automated smartcard tap-in logs because handling large numerical datasets is too time-consuming, and write an informal narrative opinion column for the agency.',

    's2-opt-b': 'Publish the arithmetic mean of 70.0 µg/m³ as the official district average without mentioning Station 7, ignoring how an isolated industrial fire distorted the overall measurement across normal residential zones.',
    's2-opt-c': 'Delete Station 7 from the database entirely without documentation and compute the mean of the remaining six stations, concealing anomalous sensor readings to produce an artificially low municipal air report.',
    's2-opt-a': 'Report the median of 34.0 µg/m³ as the robust measure of typical community exposure, while publishing Station 7 (250 µg/m³) in a separate outlier audit explaining the transient localized industrial fire.',

    's3-opt-b': 'Construct three separate 24-slice pie charts for hourly readings, user age groups, and travel modes, forcing continuous chronological time-series measurements into circular proportions that obscure trends.',
    's3-opt-a': 'Deploy a continuous Line Graph for hourly transit trends, a 100% Stacked Bar Chart for passenger trip demographic shares, and a Scatter Plot to examine the bivariate relationship between fares and ridership.',
    's3-opt-c': 'Use vertical bar charts where the Y-axis baseline begins at 85% instead of zero, exaggerating minute 2% ridership fluctuations into visual illusions of dramatic growth for government press releases.',

    's4-opt-a': 'Demonstrate that the correlation is spurious: seasonal peatland smoke haze independently caused both respiratory hospital visits and increased bus usage due to reduced motorcycle travel in smoky conditions.',
    's4-opt-b': 'Concede that electric buses cause respiratory sickness through electromagnetic radiation and propose reducing bus speeds by 50%, accepting the sensationalist tabloid claim without testing confounding variables.',
    's4-opt-c': 'Declare that statistical correlations are inherently fraudulent and ban all quantitative numerical data from student environmental research, replacing empirical measurements with purely speculative essays.',

    's5-opt-b': 'Sell the raw transit dataset including passenger phone numbers, home stops, and timestamps to private marketing firms to raise money for new high school environmental laboratory equipment and club field trips.',
    's5-opt-a': 'Refuse commercial monetization to protect commuter privacy, releasing fully anonymized open-access aggregate datasets with an academic methodology brief to assist municipal planners and clean-air advocates.',
    's5-opt-c': 'Lock all research files in a secure filing cabinet and refuse to share any findings with municipal authorities, commuter associations, or school administrators, preventing constructive policy reforms.'
  },

  // --------------------------------------------------------------------------
  // UNIT 4
  // --------------------------------------------------------------------------
  4: {
    's1-opt-b': 'Summarize Study A in one paragraph, Study B in the second paragraph, and Study C in the third paragraph sequentially without identifying thematic patterns, cross-study tensions, or common empirical threads.',
    's1-opt-c': 'Select Study A exclusively because it supports your personal environmental preference for renewable energy, while discarding Studies B and C as unhelpful distractions that complicate the school campaign.',
    's1-opt-a': 'Synthesize all three studies under thematic pillars (geological capacity, air pollution reduction, and economic retraining), reconciling technical feasibility with local socioeconomic transition costs.',

    's2-opt-b': 'Claim that all three research teams are in complete harmony and agree on every single policy recommendation, completely glossing over the acute economic tensions regarding coal worker unemployment.',
    's2-opt-a': 'Demonstrate that all three sources agree that geothermal energy stabilizes grid baseload power and slashes particulate pollution, while isolating coal worker labor transition as the sole contested policy domain.',
    's2-opt-c': 'Declare that the three studies contradict each other so completely that no reliable knowledge exists, advising the energy commission to abandon the renewable transition inquiry entirely.',

    's3-opt-a': 'Highlight that all three existing reports evaluate national infrastructure while leaving a critical empirical gap regarding local agricultural crop yields near volcanic steam vents.',
    's3-opt-b': 'Assume that agricultural impact is identical to industrial manufacturing impact and proceed to design geothermal installations without consulting local farming cooperatives or soil scientists.',
    's3-opt-c': 'Invent speculative crop damage statistics without conducting field interviews or soil assays, presenting fabricated yield reductions as factual evidence in the commission policy report.',

    's4-opt-b': 'Calculate a simple arithmetic average of the two diverging figures (+22% and -15%) to report an artificial +3.5% net yield, masking the real geographic differences between highland and lowland farms.',
    's4-opt-c': 'Accuse Report C of being falsified by anti-geothermal political activists and discard its negative findings entirely, avoiding the intellectual challenge of reconciling divergent scientific data.',
    's4-opt-a': 'Reconcile the divergence by identifying geographic elevation as the moderating variable: highland farms benefited from volcanic soil minerals, while lowland farms suffered from construction runoff.',

    's5-opt-b': 'Order an immediate shutdown of all regional geothermal drilling operations, returning to diesel fuel generators until every farmer agrees that zero ecological trade-offs exist.',
    's5-opt-a': 'Recommend a phased geothermal expansion paired with soil runoff settling basins, dedicated agricultural compensation funds, and guaranteed cooperative retraining for displaced workers.',
    's5-opt-c': 'Approve unrestricted commercial geothermal drilling across all farm areas without environmental safeguards, dismissing local agricultural livelihoods as acceptable collateral damage.'
  },

  // --------------------------------------------------------------------------
  // UNIT 5
  // --------------------------------------------------------------------------
  5: {
    'opt-1b': 'Moderate the team goal to focus on vague environmental awareness in the cafeteria, removing all quantitative targets and completion dates to keep tasks flexible for student schedules.',
    'opt-1a': 'Adopt a bounded SMART objective: audit plastic waste in 12 school stalls by November 15, partnering with vendor cooperatives to introduce reusable cups and reduce plastic trash by 40%.',
    'opt-1c': 'Pivot to an all-digital social media campaign on TikTok and Instagram, abandoning physical cafeteria waste audits because online advocacy requires less logistical coordination with stall owners.',

    'opt-2a': 'Re-scope field testing to focus on 4 accessible testing stations along the school drainage canal using portable colorimetric test kits, completing physical water analysis safely within budget.',
    'opt-2c': 'Abandon all physical water chemistry testing entirely and replace empirical measurements with a fictional story about clean water written by student council representatives.',
    'opt-2b': 'Launch a high-risk public crowdfunding campaign aiming to purchase a $15,000 industrial spectrometer from abroad, delaying all project milestones until international funding arrives.',

    'opt-3c': 'Request an emergency two-week project extension from the school principal, arguing that student teams cannot produce quality documentaries within standard academic terms.',
    'opt-3b': 'Cut the planned video documentary length from 10 minutes to 60 seconds of unedited smartphone clips, omitting expert interviews and student reflections to beat the deadline.',
    'opt-3a': 'Freeze non-essential video animation features and prioritize core interview editing, reallocating two student team members to complete video subtitles and policy briefs by Friday.',

    'opt-4b': 'Instruct the team facilitator to privately reprimand the three dominant speakers after school, leaving the silent members out of the loop and risking increased interpersonal hostility.',
    'opt-4a': 'Institutionalize structured conversational turns during team meetings, inviting quieter researchers to present written field notes first before opening the floor to wider discussion.',
    'opt-4c': 'Appoint the loudest speaker as absolute decision-maker to accelerate meeting votes, assuming that forceful leadership is more important than collaborative consensus building.',

    'opt-5a': 'Respect village customary authority by conducting a polite Sowan courtesy protocol with the Kepala Desa and elders, securing written ethical permission before conducting community interviews.',
    'opt-5c': 'Argue that public waterways are national government property and proceed to film local residents without courtesy greetings, claiming research accreditation overrides community customs.',
    'opt-5b': 'Relocate water sampling to an unmonitored canal 5 kilometers away from the village to avoid talking to elders, sacrificing geographic relevance to escape social formalities.'
  },

  // --------------------------------------------------------------------------
  // UNIT 6
  // --------------------------------------------------------------------------
  6: {
    'opt-1b': 'Diagnose Item 2 as defective because it uses informal phrasing, while overlooking the severe double-barreled defect in Item 1 that confuses dormitory food quality with study hall noise.',
    'opt-1c': 'Flag Item 3 as defective because Likert scales are inherently biased, recommending that all questionnaire items be converted into unstructured open-ended diary reflections.',
    'opt-1a': 'Diagnose Item 1 as a double-barreled defect: it conflates canteen nutritional quality and study hall noise into one question, making clear student interpretation impossible.',

    'opt-2a': 'Separate the compound prompt into two distinct items: one evaluating canteen nutritional quality and one measuring study hall noise, each with objective behavioral rating anchors.',
    'opt-2c': 'Convert the question into a leading emotional prompt asking students whether they agree that dorm life is depressing, biasing responses toward negative complaints.',
    'opt-2b': 'Modify the wording slightly by asking students how much they love dormitory life, maintaining a single prompt that forces students to give a single answer to multiple issues.',

    'opt-3b': 'Distribute an unannounced 60-question questionnaire during 10:00 PM quiet hours, threatening non-participating students with dormitory discipline penalties to maximize response rates.',
    'opt-3a': 'Conduct confidential semi-structured interviews with 15 purposively sampled dormitory residents, exploring lived experiences with sleep disruption, thermal comfort, and study habits.',
    'opt-3c': 'Analyze historical dormitory electricity billing records from five years ago, assuming that electrical power consumption reveals exact student emotional wellbeing in the rooms.',

    'opt-4b': 'Add a single negative option to an otherwise exclusively positive scale, creating an unbalanced response matrix that still heavily skews participant choices toward affirmative ratings.',
    'opt-4c': 'Compress the response choices into a binary Yes/No format, forcing students with nuanced, mixed experiences to choose extreme positions on complex residential issues.',
    'opt-4a': 'Deploy a balanced 5-point Likert scale (Strongly Dissatisfied to Strongly Satisfied) with a clear neutral midpoint and explicit operational criteria for each rating level.',

    'opt-5a': 'Enforce strict survey anonymity, remove mandatory name fields, and secure informed participant consent with secure aggregate data storage to protect student privacy.',
    'opt-5c': 'Make student names and classroom IDs mandatory fields and publish completed survey forms on the dormitory bulletin board to enforce public transparency and accountability.',
    'opt-5b': 'Retain student registration numbers on survey forms so administrators can cross-reference complaints with disciplinary files, compromising student trust and research ethics.'
  },

  // --------------------------------------------------------------------------
  // UNIT 7
  // --------------------------------------------------------------------------
  7: {
    'opt-1a': 'Classify Statement C as the central Claim, Statement A as empirical Grounds/Data, Statement B as the linking Warrant, and Statement D as the qualifying Backing.',
    'opt-1b': 'Classify Statement B as the central Claim, Statement C as incidental background context, and discard Statement A because numerical statistical figures complicate logic models.',
    'opt-1c': 'Declare that the speaker argument contains no logical structure whatsoever, asserting that all public debate statements are purely emotional propaganda without claims or data.',

    'opt-2b': 'Reject the argument solely because Kenji spoke angrily during the debate club session, dismissing the entire logic analysis as an emotional personality conflict.',
    'opt-2a': 'Expose the Non Sequitur fallacy: showing that high smartphone ownership rates do not logically prove that educational learning outcomes improve without instructional integration.',
    'opt-2c': 'Dismiss Kenji’s argument because older generations dislike smartphones, replacing logical deconstruction with sweeping sociological generalizations about age differences.',

    'opt-3c': 'Diagnose Statement C as a Straw Man fallacy while ignoring the blatant Ad Hominem attack in Statement A that targeted the researcher’s personal character instead of data.',
    'opt-3b': 'Diagnose Statement B as a False Dilemma, failing to recognize that Statement A committed an abusive Ad Hominem fallacy by insulting the opposing debater personally.',
    'opt-3a': 'Diagnose Statement A as a classic Ad Hominem fallacy: it attacks the policy director’s age and background rather than evaluating the empirical transit evidence presented.',

    'opt-4a': 'Acknowledge the synthetic AI hallucination transparently, retract the fabricated citation, and verify all claims against primary peer-reviewed databases before presenting.',
    'opt-4b': 'Insist that generative AI models never fabricate citations and accuse the faculty reviewers of failing to search obscure international databases properly.',
    'opt-4c': 'Claim that AI-generated citations are acceptable in high school research because modern technological shortcuts supersede traditional academic bibliography standards.',

    'opt-5b': 'Enforce an absolute total ban on all artificial intelligence tools in the school, threatening students with automatic suspension for accessing generative software platforms.',
    'opt-5c': 'Permit unrestricted AI usage without citation requirements or verification protocols, encouraging students to submit synthetic text as their own intellectual work.',
    'opt-5a': 'Establish a transparent AI Governance Protocol: permitting AI for brainstorming and coding while requiring mandatory disclosure logs and primary human verification of all cited facts.'
  },

  // --------------------------------------------------------------------------
  // UNIT 8
  // --------------------------------------------------------------------------
  8: {
    'opt-1b': 'Prioritize Source B (Shrimp Farm Marketing Brochure) because it contains glossy photographs and glowing commercial testimonials, despite clear financial bias.',
    'opt-1a': 'Prioritize Source C (IPB University Peer-Reviewed Journal) because it features rigorous double-blind peer review, disclosed methodology, and independent institutional authority.',
    'opt-1c': 'Prioritize Source A (TikTok Influencer Video) because it accumulated 500,000 views and viral comments, mistaking popularity for academic credibility and scientific rigor.',

    'opt-2b': 'Reject the chemical safety report solely because the font and formatting appear outdated, dismissing technical data based on superficial graphic design choices.',
    'opt-2c': 'Accept the corporate report unconditionally because the chemical manufacturer holds an official business trade license and employs certified public relations staff.',
    'opt-2a': 'Diagnose fatal CRAAP defects in Purpose and Authority: the document is an unverified promotional brochure authored by a company selling the chemical for profit.',

    'opt-3a': 'Deploy the SIFT lateral reading method: conduct reverse image searches to trace the photograph to its original 2018 mining spill source in another province.',
    'opt-3b': 'Accept the viral image as recent local evidence but claim that photo filters make it look more dramatic, failing to investigate the true chronological origin.',
    'opt-3c': 'Declare that all digital photographs on the internet are artificial intelligence fakes and discard visual evidence entirely from environmental research papers.',

    'opt-4b': 'Pour the chemical compound directly into the school estuary ecosystem to see whether wild mangrove seedlings wither, risking real environmental destruction.',
    'opt-4c': 'Avoid empirical testing altogether and rely on classroom debates to determine whether the chemical is safe, treating scientific facts as subjective matters of opinion.',
    'opt-4a': 'Design a controlled laboratory nursery trial comparing mangrove seedlings exposed to measured chemical dilutions against clean water controls over six weeks.',

    'opt-5b': 'Classify the claim as Partially Plausible without collecting water samples, relying on informal community rumors to estimate environmental contamination levels.',
    'opt-5a': 'Classify the claim as Empirically Unsubstantiated: laboratory assays confirmed zero active chemical toxicity, proving the viral post was an alarmist hoax.',
    'opt-5c': 'Classify the viral claim as 100% Proven Truth to show solidarity with online activists, ignoring scientific laboratory assays that disproved toxic runoff.'
  },

  // --------------------------------------------------------------------------
  // UNIT 9
  // --------------------------------------------------------------------------
  9: {
    'opt-1a': 'Classify Proposition 1 as an empirical Fact (verifiable sensor data), Proposition 2 as an informed Opinion (value judgment), and Proposition 3 as a reasoned Argument.',
    'opt-1b': 'Classify all three statements as subjective personal opinions, claiming that numbers and scientific measurements are simply opinions expressed with digits.',
    'opt-1c': 'Classify Proposition 3 as a pure objective fact, failing to recognize that policy proposals involve subjective value choices regarding budget priorities.',

    'opt-2b': 'Assume the shopping mall director is completely correct because commercial retail executives understand consumer psychology better than school students.',
    'opt-2a': 'Expose the unstated assumption: the retail manager assumes that consumers are motivated solely by short-term financial penalties rather than ecological values.',
    'opt-2c': 'Declare that economic incentives never influence consumer habits, asserting that citizens only change behavior when forced by strict criminal legislation.',

    'opt-3c': 'Discard the survey solely because the student researchers used an online questionnaire, claiming that electronic data collection is inherently untrustworthy.',
    'opt-3b': 'Accept the survey as representative of all city residents because 500 respondents participated, ignoring how collecting responses at an eco-store biased the sample.',
    'opt-3a': 'Identify severe Sampling Selection Bias: surveying patrons exclusively inside an organic eco-store overrepresents affluent, environmentally motivated citizens.',

    'opt-4b': 'Tell the traditional market vendor that modern supermarkets are the future of retail and small traditional stalls must adapt or face economic extinction.',
    'opt-4a': 'Acknowledge the vendor economic hardship while reframing the issue: proposing municipal subsidies for washable cloth bags to protect stall profit margins.',
    'opt-4c': 'Accuse the traditional market merchant of being paid by plastic manufacturing lobbies, escalating personal tension rather than addressing livelihood costs.',

    'opt-5a': 'Adopt a Phased Circular Economy Model: pairing plastic bag bans with bulk-purchased subsidized cloth alternatives and local vendor tax credits.',
    'opt-5c': 'Abolish all municipal plastic regulations immediately, allowing unmitigated single-use plastic waste to flood urban drainage waterways and coastal beaches.',
    'opt-5b': 'Enact an immediate zero-tolerance ban with heavy police fines on small vendors, ignoring supply disruptions and pushing vulnerable stall owners into debt.'
  },

  // --------------------------------------------------------------------------
  // UNIT 10
  // --------------------------------------------------------------------------
  10: {
    'opt-1b': 'Conclude that the school initiative was a complete catastrophic failure because plastic waste was reduced by 38% instead of the ambitious 50% target.',
    'opt-1c': 'Declare that the initiative achieved total 100% success by rounding 38% up to 50%, concealing the shortfall to guarantee a high grade from the teacher.',
    'opt-1a': 'Conclude that the trial achieved substantial progress (38% reduction in single-use plastics), while transparently analyzing why it fell short of the 50% goal.',

    'opt-2b': 'Ignore the distributor inventory stockout entirely in the final report, claiming that unforeseen logistical disruptions should not be mentioned in research papers.',
    'opt-2a': 'Identify the distributor stockout as an uncontrolled confounding variable that artificially restricted tumbler supply, moderating the intervention effect.',
    'opt-2c': 'Claim that the distributor stockout was intentional sabotage organized by rival plastic manufacturers, turning a supply chain hiccup into a conspiracy.',

    'opt-3a': 'Classify the initial research hypothesis as Partially Supported, transparently reporting that while daytime sales dropped, total waste reduction plateaued at 38%.',
    'opt-3b': 'Falsify data points in the final chart to make the line reach exactly 50%, arguing that small numerical adjustments are justifiable if the cause is noble.',
    'opt-3c': 'Declare the research hypothesis completely invalidated and useless, concluding that high school students should never attempt environmental projects.',

    'opt-4b': 'Adopt Draft A: an overly emotional editorial plea that attacks cafeteria vendors with angry rhetoric while failing to present empirical survey data or metrics.',
    'opt-4a': 'Adopt Draft C: an objective, balanced academic synthesis that documents quantitative waste reduction alongside qualitative student feedback and supply bottlenecks.',
    'opt-4c': 'Adopt Draft B: a dry mechanical list of numbers devoid of context, analysis, stakeholder interpretation, or practical policy recommendations for the school.',

    'opt-5b': 'Demand that the school administration immediately purchase expensive industrial recycling compactors, exceeding the annual school budget tenfold.',
    'opt-5c': 'Advise the school to abandon plastic reduction and install five additional trash incinerators behind the soccer field, polluting campus air.',
    'opt-5a': 'Propose an institutionalized tumbler refill subscription program combined with long-term supplier contracts and student environmental ambassador rewards.'
  }
};

// Process Units 3 to 10
const unitFiles = [
  { unit: 3, data: UNIT_3_CAPSTONE_DATA, file: 'src/data/games/unit3CapstoneData.ts' },
  { unit: 4, data: UNIT_4_CAPSTONE_DATA, file: 'src/data/games/unit4CapstoneData.ts' },
  { unit: 5, data: UNIT_5_CAPSTONE_DATA, file: 'src/data/games/unit5CapstoneData.ts' },
  { unit: 6, data: UNIT_6_CAPSTONE_DATA, file: 'src/data/games/unit6CapstoneData.ts' },
  { unit: 7, data: UNIT_7_CAPSTONE_DATA, file: 'src/data/games/unit7CapstoneData.ts' },
  { unit: 8, data: UNIT_8_CAPSTONE_DATA, file: 'src/data/games/unit8CapstoneData.ts' },
  { unit: 9, data: UNIT_9_CAPSTONE_DATA, file: 'src/data/games/unit9CapstoneData.ts' },
  { unit: 10, data: UNIT_10_CAPSTONE_DATA, file: 'src/data/games/unit10CapstoneData.ts' }
];

for (const uf of unitFiles) {
  const updates = descUpdates[uf.unit];
  if (!updates) continue;

  uf.data.stages.forEach(st => {
    st.options.forEach(opt => {
      if (updates[opt.id]) {
        opt.description = updates[opt.id];
      }
    });
  });

  const header = `/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT ${uf.unit} CAPSTONE CHALLENGE DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono
 */

export interface CapstoneDecisionOption {
  id: string;
  label: string;
  description: string;
  score: number; // Optimal: 160, Partial: 80, Weak: 30
  feedback: string;
  isOptimal: boolean;
  academicReasoning: string;
}

export interface CapstoneStage {
  stageNumber: number;
  stageKey: string;
  title: string;
  concept: string;
  textbookRef: string;
  scenarioHeading: string;
  scenarioBody: string;
  evidenceData?: {
    label: string;
    items: { key: string; value: string; note?: string }[];
  };
  prompt: string;
  options: CapstoneDecisionOption[];
}

export interface CapstoneMissionData {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  caseSetting: string;
  overview: string;
  maxScore: number;
  stages: CapstoneStage[];
}

export const UNIT_${uf.unit}_CAPSTONE_DATA: CapstoneMissionData = ${JSON.stringify(uf.data, null, 2)};
`;

  fs.writeFileSync(path.resolve(uf.file), header, 'utf-8');
  console.log('Unit ' + uf.unit + ' Capstone successfully written with balanced lengths.');
}
