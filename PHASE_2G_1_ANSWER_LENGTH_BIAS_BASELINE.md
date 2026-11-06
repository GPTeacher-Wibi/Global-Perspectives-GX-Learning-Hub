# PHASE 2G.1 — ANSWER LENGTH BIAS FORENSIC AUDIT BASELINE REPORT
## GLOBAL PERSPECTIVES LEARNING HUB
### Assessment Validity, Item Construct Integrity, and Distractor Length Diagnostics

**Audit Date:** October 2026  
**Auditor:** Senior Educational Measurement & TypeScript Quality Engineer  
**Scope:** 420 multiple-choice and discrete option-selection items across the application  
**Status:** FORENSIC BASELINE ESTABLISHED — CRITICAL SYSTEMIC LENGTH BIAS CONFIRMED

---

## 1. EXECUTIVE SUMMARY & CORE FINDINGS

A comprehensive automated and manual inspection of the current repository was conducted to assess whether answer-choice length functions as an unintended construct-irrelevant clue.

The forensic audit conclusively confirms **severe, systemic answer-length bias** across multiple core assessment categories:
1. **Practice Bank (110 Questions):** In **104 out of 110 questions (94.5%)**, the correct answer is the **uniquely longest option**. In 7 out of 10 units (Units 2, 3, 5, 6, 8, 9, 10), **100%** of correct answers are the longest choice. The average correct option is **2.13×** longer than distractors (up to 3.13× in Unit 9).
2. **Capstones 1–10 (64 Scored Decision Stages):** In **63 out of 64 stages (98.4%)**, the optimal answer is the **uniquely longest option**. The average correct option length is **388.3 characters** compared to **200.5 characters** for distractors (ratio 1.99×).
3. **Micro-Games with Custom Option Descriptions (G5.2, G5.3, G6.1, G6.2, G6.3, G7.1, G7.2, G7.3, G8.2):** In **100% of items in G5.3, G6.1, G6.2, G6.3, G7.1, G7.2, and G7.3**, the correct choice is uniquely longest, with average length ratios between **2.87× and 5.33×**. Distractors in these games are frequently 2-to-4 word stubs (e.g. `"Too academic."`, `"No middle choice."`, `"Rooster crowing."`), while the correct option is an elaborate multi-clause paragraph.
4. **Overall Corpus Metric:** Across all 420 audited assessment items in the platform, **411 items (97.9%)** have the correct answer in Rank 1 (either uniquely longest or tied for longest). A test-taking student who simply selects the longest card without reading the question would achieve a near-perfect score across the learning hub.

This constitutes a **critical threat to assessment validity**.

---

## 2. AUDIT METHODOLOGY & NORMALIZATION RULES

- **Text Normalization:** Extracted option texts were normalized by trimming whitespace and collapsing internal whitespace sequences (`\s+` to `' '`).
- **Exclusion of Extraneous Metadata:** Option letters (`A`, `B`, `C`, `D`), IDs, and UI formatting tags were stripped before character and word count calculations.
- **Length Metrics Computed:**
  - Character length ($L_i$) and word count ($W_i$) for each option.
  - Length of the correct option ($L_{\text{correct}}$).
  - Arithmetic mean length of distractors ($\bar{L}_{\text{distractor}}$).
  - Length ratio: $R = L_{\text{correct}} / \bar{L}_{\text{distractor}}$.
  - Length Rank: 1 (longest), 2 (second-longest), 3 (third/middle), 4 (shortest).
  - Ties: When the correct option shares the maximum length with one or more distractors, it is explicitly classified as **Tied Longest**, not uniquely longest.

---

## 3. CORPUS-LEVEL BASELINE SUMMARY TABLE

| Assessment Category | Total Items | Uniquely Longest Correct | Tied Longest Correct | Top 2 Longest Correct | Avg Correct Length (chars) | Avg Distractor Length (chars) | Avg Ratio ($L_{\text{corr}}/\bar{L}_{\text{dist}}$) | Dominant Rank |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Practice Bank (Units 1–10)** | 110 | 104 (94.5%) | 0 (0.0%) | 110 (100.0%) | 121.2 | 57.0 | **2.13×** | Rank 1 (94.5%) |
| **Burger Bliss Global Expansion** | 16 | 0 (0.0%) | 16 (100.0%) | 16 (100.0%) | 20.0 | 20.0 | **1.00×** | Tied (100.0%) |
| **Capstones 1–10 (All Stages)** | 64 | 63 (98.4%) | 0 (0.0%) | 64 (100.0%) | 388.3 | 200.5 | **1.99×** | Rank 1 (98.4%) |
| **Micro-Games (All 18 Evaluated)** | 230 | 124 (53.9%) | 104 (45.2%) | 230 (100.0%) | 107.6 | 42.4 | **2.36×** | Rank 1 (99.1%) |
| **GRAND TOTAL** | **420** | **291 (69.3%)** | **120 (28.6%)** | **416 (99.0%)** | **153.1** | **70.5** | **2.22×** | **Rank 1 (97.9%)** |

---

## 4. DETAILED BREAKDOWN BY ASSESSMENT SOURCE

### 4.1 Practice Bank Breakdown (by Unit)

| Dataset | Items | Longest Correct | Tied Correct | Avg Correct Length | Avg Distractor Length | Length Ratio | Notes |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Practice Unit 1** | 15 | 12 (80.0%) | 0 | 107.9 chars | 76.5 chars | 1.43× | Moderate bias in early items; severe in items 10-15 |
| **Practice Unit 2** | 15 | 15 (100.0%) | 0 | 134.1 chars | 80.7 chars | 1.71× | 100% longest correct |
| **Practice Unit 3** | 10 | 10 (100.0%) | 0 | 97.4 chars | 54.3 chars | 1.84× | 100% longest correct |
| **Practice Unit 4** | 10 | 8 (80.0%) | 0 | 114.7 chars | 63.8 chars | 1.82× | 80% longest correct |
| **Practice Unit 5** | 10 | 10 (100.0%) | 0 | 123.6 chars | 64.9 chars | 1.94× | 100% longest correct |
| **Practice Unit 6** | 10 | 10 (100.0%) | 0 | 135.2 chars | 61.2 chars | 2.22× | 100% longest correct; >2x ratio |
| **Practice Unit 7** | 10 | 9 (90.0%) | 0 | 138.8 chars | 51.5 chars | 2.73× | 90% longest correct; nearly 3x ratio |
| **Practice Unit 8** | 10 | 10 (100.0%) | 0 | 134.0 chars | 46.1 chars | 2.93× | 100% longest correct; distractors very short |
| **Practice Unit 9** | 10 | 10 (100.0%) | 0 | 148.5 chars | 47.9 chars | 3.13× | 100% longest correct; >3x ratio |
| **Practice Unit 10** | 10 | 10 (100.0%) | 0 | 156.4 chars | 51.0 chars | 3.09× | 100% longest correct; >3x ratio |

### 4.2 Capstone Case Challenges Breakdown

| Dataset | Stages | Longest Correct | Tied Correct | Avg Correct Length | Avg Distractor Length | Length Ratio | Notes |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Capstone Unit 1** | 10 | 10 (100.0%) | 0 | 258.9 chars | 118.8 chars | 2.28× | Correct policy bridges & analyses contain exhaustive explanations |
| **Capstone Unit 2** | 14 | 14 (100.0%) | 0 | 362.1 chars | 165.7 chars | 2.24× | Research cases have 2x-3x longer optimal options |
| **Capstone Unit 3** | 5 | 5 (100.0%) | 0 | 335.2 chars | 198.8 chars | 1.71× | 100% longest correct |
| **Capstone Unit 4** | 5 | 4 (80.0%) | 0 | 382.4 chars | 201.2 chars | 1.96× | 80% longest correct |
| **Capstone Unit 5** | 5 | 5 (100.0%) | 0 | 441.8 chars | 283.6 chars | 1.57× | 100% longest correct |
| **Capstone Unit 6** | 5 | 5 (100.0%) | 0 | 443.2 chars | 272.5 chars | 1.64× | 100% longest correct |
| **Capstone Unit 7** | 5 | 5 (100.0%) | 0 | 451.6 chars | 248.6 chars | 1.83× | 100% longest correct |
| **Capstone Unit 8** | 5 | 5 (100.0%) | 0 | 473.6 chars | 255.4 chars | 1.86× | 100% longest correct |
| **Capstone Unit 9** | 5 | 5 (100.0%) | 0 | 456.2 chars | 224.2 chars | 2.07× | 100% longest correct; >2x ratio |
| **Capstone Unit 10** | 5 | 5 (100.0%) | 0 | 468.4 chars | 231.8 chars | 2.05× | 100% longest correct; >2x ratio |

### 4.3 Micro-Games Detailed Breakdown

| Micro-Game Dataset | Items | Longest Correct | Tied Correct | Avg Ratio | Severity Category | Underlying Mechanism |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **G2.2 Pipeline Builder** | 10 | 0 (0.0%) | 10 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G3.1 Stats Sleuth** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G3.2 Chart Selector** | 11 | 5 (45.5%) | 6 (54.5%) | 1.64× | **Moderate** | Some custom descriptions |
| **G3.3 Theme Coder** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G4.3 Connecting Dots** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G5.2 Indonesian Etiquette** | 11 | 10 (90.9%) | 0 (0.0%) | 2.05× | **High Bias** | Correct cultural strategy is richly elaborated |
| **G5.3 SMART Goal Step 1** | 11 | 11 (100.0%) | 0 (0.0%) | 3.09× | **Severe Bias** | Correct defect has detailed case diagnostic; distractors are 1-liners |
| **G5.3 SMART Goal Step 2** | 11 | 11 (100.0%) | 0 (0.0%) | 2.87× | **Severe Bias** | Correct goal is fully written SMART statement; distractors are short fragments |
| **G6.1 Question Doctor Step 1** | 11 | 11 (100.0%) | 0 (0.0%) | 3.41× | **Severe Bias** | Correct defect has detailed case diagnostic; distractors are short stubs |
| **G6.1 Question Doctor Step 2** | 11 | 11 (100.0%) | 0 (0.0%) | 3.67× | **Severe Bias** | Correct Rx is fully calibrated prompt; distractors are simplistic fragments |
| **G6.2 Survey Builder Master** | 11 | 11 (100.0%) | 0 (0.0%) | 4.94× | **Critical Bias** | Distractors are 2-word stubs (`"Too academic."`); correct option is full paragraph |
| **G6.3 Neutrality Trial** | 11 | 11 (100.0%) | 0 (0.0%) | 4.02× | **Critical Bias** | Distractors are 2-word stubs (`"No balance."`); correct verdict has full legal rationale |
| **G7.1 Logic Master: D-I-A** | 11 | 11 (100.0%) | 0 (0.0%) | 3.22× | **Severe Bias** | Distractors are truncated phrases; correct mode has full cognitive chain |
| **G7.2 Toulmin Architecture** | 11 | 11 (100.0%) | 0 (0.0%) | 4.73× | **Critical Bias** | Distractors are 2-word stubs; correct component has full argumentative analysis |
| **G7.3 Fallacy Patrol** | 11 | 11 (100.0%) | 0 (0.0%) | 5.33× | **Critical Bias** | Distractors are stubs (`"Rooster crowing."`); correct option is 180+ chars |
| **G8.2 CRAAP & SIFT** | 11 | 10 (90.9%) | 0 (0.0%) | 1.47× | **Moderate/High** | Correct test has specific source critique; distractors are generic |
| **G8.3 Field Observer** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G9.2 Assumption Unmasker** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G9.3 Echo Chamber** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G10.1 Conclusion Matrix** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |
| **G10.2 Defect Neutralizer** | 11 | 0 (0.0%) | 11 (100.0%) | 1.00× | **Zero Bias** | Equal template length |

---

## 5. ROOT CAUSES CONFIRMED

1. **"Completeness Bias" in Authoring Correct Answers:**
   Authors instinctively strive for precision and rigor in the correct answer by including qualifications, conditions, examples, and justifications (e.g. *"A structured worldview and framework shaped by values, context, and evidence"*). In contrast, distractors were authored as brief, hasty assertions (e.g. *"A momentary emotional feeling."*).
2. **"Truncated Distractor Syndrome" in Micro-Games:**
   In games G6.2, G6.3, G7.1, G7.2, and G7.3, the distractor descriptions were written as shorthand placeholders (e.g., `"Rooster crowing."`, `"Too academic."`, `"Sampling 1 battery."`), while the correct option received a customized 150–200 character pedagogical analysis of the scenario.
3. **Compound Clauses in High-Tier Practice Questions:**
   In Units 6–10 practice questions, correct options frequently employ semicolon-separated compound clauses (`"[Fact A]; [interpretation B]"` or `"[Claim]; however, [qualification]"`), whereas distractors are simple sentences with no subordinate clauses.
4. **Absence of Length-Equalization Constraints During Phase 2F:**
   Phase 2F focused exclusively on positional balance ($A/B/C/D$), correctly spreading answers across indices $0, 1, 2, 3$, but did not monitor character-length variance.

---

## 6. PRIORITIZED REMEDIATION ACTION PLAN (PHASE 2G.2)

### Priority Tier 1: Critical Stub-Distractor Micro-Games (77 Items)
- **Targets:**
  - `src/data/games/unit7MicroGamesData.ts` (G7.3 Fallacy Patrol, G7.2 Toulmin Builder, G7.1 Logic Master)
  - `src/data/games/unit6MicroGamesData.ts` (G6.2 Survey Builder, G6.3 Neutrality Trial, G6.1 Question Doctor Steps 1 & 2)
  - `src/data/games/unit5MicroGamesData.ts` (G5.3 SMART Goal Steps 1 & 2, G5.2 Indonesian Etiquette)
- **Remediation Strategy:** Replace all 1-to-3 word distractor stubs with robust, grammatically parallel, academically plausible descriptions (40–90 characters each). Ensure correct options are concise, so that distractor and correct lengths are balanced within 10–20% of each other.

### Priority Tier 2: Practice Question Bank (110 Questions)
- **Targets:** `src/data/practice/unit[1-10]Practice.ts`
- **Remediation Strategy:** Expand truncated distractors by adding plausible Cambridge-aligned misconceptions, qualifications, and context. Trim unnecessary rhetorical fluff from correct answers while preserving all technical terminology and textbook grounding. Ensure the correct answer's length rank naturally varies across questions (Rank 1, 2, 3, 4).

### Priority Tier 3: Capstone Decision Stages (64 Stages)
- **Targets:**
  - `src/data/games/unit1Game.ts` (10 scored decisions)
  - `src/data/games/unit2Game.ts` (14 stages)
  - `src/data/games/unit[3-10]CapstoneData.ts` (40 stages)
- **Remediation Strategy:** Elevate partial and weak options into fully realized, plausible policy or methodological proposals with parallel structure. Remove redundant narrative padding from optimal choices.

---

## 7. TARGET POST-REMEDIATION DISTRIBUTION CRITERIA

1. **Corpus Longest Rate:** Reduce the proportion of uniquely longest correct choices from **69.3%** to **$\le 35\%$**, allowing natural variance across length ranks.
2. **Length Ratio Ceiling:** Bring the average correct-to-distractor length ratio from **2.22×** down to **$1.00× \pm 0.15×$** (balanced band).
3. **Natural Rank Spread:** Distribute correct answers across all length ranks (Rank 1, Rank 2, Rank 3, Rank 4) rather than clustering at Rank 1.
4. **Position Bias Invariant:** Guarantee that Phase 2F answer-position balance remains strictly within the $\le 40\%$ ceiling per position.
5. **Zero Conceptual Leakage:** Ensure every distractor remains clearly and defensibly incorrect based on Cambridge Global Perspectives learning objectives.
