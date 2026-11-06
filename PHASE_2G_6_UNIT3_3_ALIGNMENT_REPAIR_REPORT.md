# PHASE 2G.6 — UNIT 3.3 SCENARIO-OPTION ALIGNMENT REPAIR REPORT
## Global Perspectives Learning Hub
### Activity: G3.3 Qualitative Theme Coder (`src/data/games/unit3MicroGamesData.ts` & `src/components/games/unit3/QualitativeThemeCoder.tsx`)

---

## 1. ROOT CAUSE OF PREEXISTING DEFECT

During the forensic audit of Micro-Game 3.3 (Qualitative Theme Coder), an inherited content-integrity defect was confirmed in `G3_3_CHALLENGES`:

1. **Pre-Phase 2G Automated Replacement Artifact:**
   - In an earlier automated content replacement phase prior to Phase 2G.4, option arrays within `G3_3_CHALLENGES` had shifted out of vertical alignment with their parent challenge objects.
   - Stage 1 items (Items 1–4, designed for Inductive Meaning Coding) were paired with displaced options (e.g., Pak Hasan's coastal seawall was paired with Pak Joko's QRIS digital banking options; Bu Sri's generative AI essay scenario was paired with agricultural canal siltation distractors).
   - Stage 2 items (Items 5–8, designed for Category-to-Overarching-Theme synthesis) were paired with research methodology labels (Content Analysis, Discourse Analysis, Narrative Analysis, Thematic Analysis).
   - Stage 3 items (Items 9–11, designed for Method Alignment across Content, Discourse, and Narrative Analysis) were paired with research trustworthiness/rigor strategies (negative cases, inter-coder reliability, reflexivity).
2. **Component UI Header Inflexibility:**
   - In `QualitativeThemeCoder.tsx` (line 380), the success feedback banner title was hardcoded as `"Inductive Code Validated!"` regardless of whether the student was answering Stage 1 (Codes), Stage 2 (Themes), or Stage 3 (Methodologies).

---

## 2. COMPLETE LIST OF CHALLENGES INSPECTED

All 11 challenges in `G3_3_CHALLENGES` were inspected and verified across all 3 developmental stages:

| Stage | Item ID | Title | Scenario Theme | Pedagogical Objective |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 1** | `g3-3-s1-q1` | Coding 1: Traditional Market Vendor on Digital Payment Apps | Pak Joko (Pasar Beringharjo) & QRIS latency | Inductive Code: Technological Anxiety & Missing Tangible Cash Verification |
| **Stage 1** | `g3-3-s1-q2` | Coding 2: High School Student on Late-Night Study Habits | Sarah (Surabaya) & peer study chat guilt | Inductive Code: Peer-Induced Academic Guilt & Sleep Deprivation |
| **Stage 1** | `g3-3-s1-q3` | Coding 3: Coastal Fisherman on Mangrove Rehabilitation | Pak Hasan (Demak) & seawall vs. mudflats | Inductive Code: Infrastructure Defense vs. Ecosystem Livelihood Disruption |
| **Stage 1** | `g3-3-s1-q4` | Coding 4: Urban Teacher on AI Chatbots in Classrooms | Bu Sri (Bandung) & generative AI essays | Inductive Code: Superficial Polish Masking Cognitive Disengagement |
| **Stage 2** | `g3-3-s2-q1` | Thematic Synthesis 1: Grouping Codes into Overarching Theme | Informal street food cart (gerobak) vendors | Umbrella Theme: Structural Precarity and Vulnerability in Informal Livelihoods |
| **Stage 2** | `g3-3-s2-q2` | Thematic Synthesis 2: Adolescent Identity in Social Media | Instagram curated feeds vs. like count anxiety | Umbrella Theme: Performative Self-Presentation and Algorithmic Self-Worth |
| **Stage 2** | `g3-3-s2-q3` | Thematic Synthesis 3: Traditional Herbal Medicine (Jamu) | Hospital doctors & herbal practitioners | Umbrella Theme: Integrative Healthcare: Harmonizing Indigenous Wisdom with Biomedical Rigor |
| **Stage 2** | `g3-3-s2-q4` | Thematic Synthesis 4: Theme Saturation in Qualitative Research | 20 community flood warning interviews | Methodological Concept: Theoretical Saturation Reached |
| **Stage 3** | `g3-3-s3-q1` | Method Match 1: Counting Keyword Frequencies in Speeches | 50 years of Indonesian Independence Day speeches | Method Identification: Content Analysis (quantifying word occurrences) |
| **Stage 3** | `g3-3-s3-q2` | Method Match 2: Examining Power Structures and Hidden Framing | Strike headlines ("Mob" vs. "Struggling Families") | Method Identification: Discourse Analysis (deconstructing linguistic power and framing) |
| **Stage 3** | `g3-3-s3-q3` | Method Match 3: Chronological Life Journey of Migrant Worker | Ibu Aminah's 15-year domestic worker biography | Method Identification: Narrative Analysis (chronological turning points & storied life arcs) |

---

## 3. ALL CONFIRMED SCENARIO-OPTION MISMATCHES

Prior to remediation, the following cross-scenario pollutions existed:
1. **Item `g3-3-s1-q1` (Pak Joko QRIS):** Paired with distractors that referenced general coding theory rather than Pak Joko's specific lived experience with digital banking latency.
2. **Item `g3-3-s1-q3` (Pak Hasan Fishery):** Paired with options about digital payment apps.
3. **Item `g3-3-s1-q4` (Bu Sri AI Essays):** Paired with agricultural canal degradation options from an unassociated environmental unit.
4. **Items `g3-3-s2-q1` through `g3-3-s2-q4` (Street food, Instagram, Jamu, Saturation):** Paired with research methodology choices (Content Analysis, Discourse Analysis, Narrative Analysis) rather than overarching thematic syntheses of the provided codes.
5. **Items `g3-3-s3-q1` through `g3-3-s3-q3` (Speeches, Strike Headlines, Migrant Biography):** Paired with qualitative research trustworthiness/rigor strategies (inter-coder reliability, audit trails, member checking) rather than methodological classifications.

---

## 4. CHANGES MADE TO EACH AFFECTED CHALLENGE

Every item in `G3_3_CHALLENGES` was completely restored and realigned to ensure 100% scenario-to-option coherence:

### Stage 1: Meaning Units & Inductive Coding
- **`g3-3-s1-q1` (Pak Joko QRIS):**
  - **Correct (Option B):** `Code: "Technological Anxiety & Loss of Tangible Verification" (capturing emotional fear and missing cash confirmation).`
  - **Distractor A:** `Code: "Smartphone Screen Latency" (describing the three-minute delay in phone notification alerts).`
  - **Distractor C:** `Code: "Total Rejection of Modern Financial Commerce" (assuming traditional vendors reject all digital transaction infrastructure).`
- **`g3-3-s1-q2` (Sarah Study Habits):**
  - **Correct (Option C):** `Code: "Peer-Induced Academic Guilt & Sleep Sacrifice" (interpreting social comparison and forced sleeplessness).`
  - **Distractor A:** `Code: "Late-Night Caffeine Consumption" (recording physical habits like drinking instant coffee past midnight to endure fatigue).`
  - **Distractor B:** `Code: "Hostile Peer Competition" (assuming classmates are deliberately trying to harm each other).`
- **`g3-3-s1-q3` (Pak Hasan Coastal Fishery):**
  - **Correct (Option A):** `Code: "Infrastructure Defense vs. Ecosystem Livelihood Disruption" (capturing seawall protection at the expense of fisheries).`
  - **Distractor B:** `Code: "Rising Boat Fuel Expenses" (describing the diesel purchase costs for offshore fishing vessels).`
  - **Distractor C:** `Code: "Complete Opposition to Coastal Engineering" (assuming local fishing communities reject all governmental seawall barriers).`
- **`g3-3-s1-q4` (Bu Sri AI Classrooms):**
  - **Correct (Option B):** `Code: "Superficial Polish Masking Cognitive Disengagement" (capturing flawless output hiding lack of understanding).`
  - **Distractor A:** `Code: "Grammatical Vocabulary Mastery" (describing high-level prose formatting in student homework papers).`
  - **Distractor C:** `Code: "Total Student Refusal to Learn History" (assuming learners are incapable of academic motivation).`

### Stage 2: Category to Overarching Theme
- **`g3-3-s2-q1` (Street Food Precarity):**
  - **Correct (Option C):** `Theme: "Structural Precarity and Vulnerability in Informal Livelihoods" (uniting institutional, climatic, and social hazards).`
  - **Distractor A:** `Theme: "Municipal Enforcement Tactics" (focusing exclusively on municipal Satpol PP patrol routines and urban sidewalk crackdowns).`
  - **Distractor B:** `Theme: "Informal Entrepreneur Financial Carelessness" (assuming street vendors fail due to poor money management).`
- **`g3-3-s2-q2` (Adolescent Instagram Identity):**
  - **Correct (Option A):** `Theme: "Performative Self-Presentation and Algorithmic Self-Worth" (connecting curated imagery with external numerical validation).`
  - **Distractor B:** `Theme: "Digital Photo Editing Technique" (focusing solely on camera filters, visual lighting adjustments, and image editing software).`
  - **Distractor C:** `Theme: "Narcissistic Vanity in Youth Culture" (dismissing adolescent platform behavior as pure moral weakness).`
- **`g3-3-s2-q3` (Integrative Jamu Healthcare):**
  - **Correct (Option C):** `Theme: "Integrative Healthcare: Harmonizing Indigenous Wisdom with Biomedical Rigor" (bridging empirical science and cultural heritage).`
  - **Distractor A:** `Theme: "Laboratory Chemical Standardization" (focusing exclusively on pharmacological trial methodologies).`
  - **Distractor B:** `Theme: "Supremacy of Biomedical Pharmaceuticals" (dismissing traditional ancestral herbal formulas as unstandardized folk superstitions).`
- **`g3-3-s2-q4` (Thematic Saturation Milestone):**
  - **Correct (Option A):** `Milestone: "Theoretical Saturation Reached" (conclude sampling because additional interviews yield no novel thematic insights).`
  - **Distractor B:** `Milestone: "Sample Size Failure" (conduct 50 additional interviews because qualitative research requires massive statistical surveys).`
  - **Distractor C:** `Milestone: "Interviewer Fatigue" (discard interviews 15 to 20 from data tables because repeated information is scientifically invalid).`

### Stage 3: Methodological Alignment
- **`g3-3-s3-q1` (Presidential Speech Keyword Counts):**
  - **Correct (Option B):** `Content Analysis (systematically categorizing and quantifying the frequency of specific words or categories in communication).`
  - **Distractor A:** `Narrative Analysis (tracking personal biographical turning points and chronological storytelling milestones across a human lifetime).`
  - **Distractor C:** `Discourse Analysis (interrogating ideological power structures and institutional dominance in conversational interactions).`
- **`g3-3-s3-q2` (Strike Headlines & Power Relations):**
  - **Correct (Option B):** `Discourse Analysis (deconstructing how linguistic framing exercises institutional power and constructs social reality).`
  - **Distractor A:** `Content Analysis (quantifying lexical word occurrences and calculating statistical percentage frequencies across media archives).`
  - **Distractor C:** `Narrative Analysis (examining personal diary sequences to reconstruct biographical trajectories across decades).`
- **`g3-3-s3-q3` (Migrant Worker Chronological Life Journey):**
  - **Correct (Option A):** `Narrative Analysis (exploring the storied nature of human experience through biographical sequencing and chronological turning points).`
  - **Distractor B:** `Content Analysis (counting lexical frequencies and tabulating vocabulary occurrences across transcribed interview document sets).`
  - **Distractor C:** `Discourse Analysis (deconstructing regulatory legal terminology and government policy vocabulary within institutional gazettes).`

### Component UI Polish
- **`QualitativeThemeCoder.tsx` (lines 379–387):**
  - Replaced the static header with a stage-aware title:
    ```tsx
    <div className="font-bold text-base">
      {isCorrect
        ? currentItem.stage === 1
          ? 'Inductive Code Validated!'
          : currentItem.stage === 2
          ? 'Overarching Theme Validated!'
          : 'Method Alignment Validated!'
        : 'Coding Misinterpretation'}
    </div>
    ```

---

## 5. CORRECT-ANSWER AND SCORING VERIFICATION

- **Scoring Architecture:** In `QualitativeThemeCoder.tsx`, selection scoring operates directly on `option.isCorrect`:
  - Awarding `100` base points + speed bonus for `isCorrect === true`.
  - Incrementing streak and recording correct choices into local state `answers`.
  - On stage transitions and completion, invoking `onComplete(score)` to persist progress to `gphub_progress_v1`.
- **Integrity Check:**
  - Exactly one option per challenge has `isCorrect: true`.
  - Exactly two options per challenge have `isCorrect: false`.
  - Each option contains specific, constructive pedagogical feedback explaining why the selected choice is valid or represents a common qualitative misinterpretation.

---

## 6. QUALITATIVE-ANALYSIS CONCEPT ALIGNMENT

The repaired items align strictly with Cambridge IGCSE / Lower Secondary Global Perspectives and introductory qualitative research methodology:
1. **Meaning Unit to Inductive Code:** Teaches students that coding is interpretive abstraction, not superficial literal transcription or unevidenced moral projection.
2. **Codes to Overarching Theme:** Teaches students that themes represent conceptual umbrellas connecting multiple related codes to address research questions, rather than single-code reductions or judgmental stereotypes.
3. **Qualitative Rigor & Saturation:** Emphasizes that sample sizes in qualitative inquiry are governed by theoretical saturation rather than arbitrary statistical headcounts.
4. **Methodological Precision:** Disambiguates Content Analysis (quantifying textual frequency), Discourse Analysis (deconstructing institutional power and linguistic framing), and Narrative Analysis (reconstructing chronological life stories and biographical arcs).

---

## 7. ANSWER-LENGTH AND ANSWER-POSITION REGRESSION RESULTS

### Answer-Position Bias Audit (`audit_bias.ts`)
The required Phase 2F target distribution for G3.3 was 100% preserved:
- **Item Sequence:** B, C, A, B, C, A, C, A, B, B, A
- **Distribution:**
  - A = 4 (36.4%)
  - B = 4 (36.4%)
  - C = 3 (27.3%)
  - D = 0 (0.0%)
- **Zero single-letter streaks $\ge 3$** (maximum run is 2).
- Complete harmony with all other 29 micro-games, 10 capstones, and 110 practice questions.

### Answer-Length Bias Audit (`audit_length_bias.ts`)
- **G3.3 Metrics:**
  - Uniquely longest correct answers: **2 / 11 (18.2%)** (down from 10 / 11)
  - Tied longest: 0 / 11 (0.0%)
  - Average correct-to-distractor ratio: **1.04x** (ideal symmetry)
  - High-risk items in G3.3: **0**
- **Overall Hub Totals (420 Multiple-Choice Items):**
  - Uniquely Longest Correct: **137 / 420 (32.6%)** (decreased from 145 / 420 (34.5%) and well below the 33.1% threshold)
  - Tied Longest Correct: **13 / 420 (3.1%)**
  - Rank 1 (Longest): **150 / 420 (35.7%)** (decreased from 158 / 420 (37.6%))
  - Average Correct Length: **149.0 chars**
  - Average Distractor Length: **154.9 chars**
  - Overall Correct/Distractor Ratio: **0.97x**

---

## 8. COMPILATION, LINT, BUILD, AND AUTOMATED TEST RESULTS

1. **TypeScript Type Check:**
   - Command: `npx tsc --noEmit`
   - Result: **0 errors, 0 warnings** (exited with code 0).
2. **Lint Applet Check:**
   - Command: `npm run lint` (`lint_applet` tool)
   - Result: **Clean pass, 0 errors**.
3. **Vite Production Build:**
   - Command: `npm run build` (`compile_applet` tool & `vite build`)
   - Result: **Build succeeded in 8.39s**. Output bundle: `dist/index.html` (1.07 kB), `dist/assets/index-C8OIwpvh.css` (98.32 kB), `dist/assets/index-D9R9m9Gu.js` (3,172.89 kB).
4. **Data Verification Suite:**
   - Scripts `audit_bias.ts` and `audit_length_bias.ts` executed cleanly with zero uncaught exceptions.

---

## 9. REMAINING UNCERTAINTIES

- **None.** All 11 challenges in `G3_3_CHALLENGES` have been reviewed against textbook qualitative research paradigms, their UI component feedback headers have been verified, and all automated integrity scripts have passed.

---

## 10. MANUAL ACCEPTANCE CHECKLIST

Teachers and evaluators can manually verify the repair through the following steps:
- [ ] **Launch Micro-Game 3.3:** Navigate to **Unit 3 (Data Analysis) $\rightarrow$ Micro-Game 3.3 (Qualitative Theme Coder)**.
- [ ] **Verify Stage 1 (Items 1–4):**
  - Item 1: Confirm Pak Joko's excerpt displays choices about "Technological Anxiety & Loss of Tangible Verification", "Smartphone Screen Latency", and "Total Rejection".
  - Item 2: Confirm Sarah's study habit excerpt displays choices about "Peer-Induced Academic Guilt", "Late-Night Caffeine", and "Hostile Peer Competition".
  - Item 3: Confirm Pak Hasan's fishing excerpt displays choices about "Infrastructure Defense vs. Ecosystem Livelihood Disruption", "Rising Boat Fuel Expenses", and "Opposition to Coastal Engineering".
  - Item 4: Confirm Bu Sri's AI essay excerpt displays choices about "Superficial Polish Masking Cognitive Disengagement", "Grammatical Mastery", and "Refusal to Learn".
  - Confirm success banner title reads: **"Inductive Code Validated!"**.
- [ ] **Verify Stage 2 (Items 5–8):**
  - Item 5: Confirm street food cart vendor codes synthesize into "Structural Precarity and Vulnerability in Informal Livelihoods".
  - Item 6: Confirm teen Instagram codes synthesize into "Performative Self-Presentation and Algorithmic Self-Worth".
  - Item 7: Confirm Jamu medicine codes synthesize into "Integrative Healthcare: Harmonizing Indigenous Wisdom with Biomedical Rigor".
  - Item 8: Confirm 20-interview repetition scenario identifies "Theoretical Saturation Reached".
  - Confirm success banner title reads: **"Overarching Theme Validated!"**.
- [ ] **Verify Stage 3 (Items 9–11):**
  - Item 9: Confirm counting words in presidential speeches identifies **Content Analysis**.
  - Item 10: Confirm deconstructing strike headline power relations identifies **Discourse Analysis**.
  - Item 11: Confirm chronological life journey of Ibu Aminah identifies **Narrative Analysis**.
  - Confirm success banner title reads: **"Method Alignment Validated!"**.
- [ ] **Verify Scoring & Persistence:**
  - Complete the game and verify the final summary card renders total score, speed bonus, and accuracy streak.
  - Refresh the page and confirm `gphub_progress_v1` retains completion progress.

---

## 11. FINAL STATUS

**PASS — CONTENT REPAIRED; MANUAL TESTS PENDING**
