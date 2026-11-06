# PHASE 2G — ANSWER LENGTH BIAS AUDIT & REMEDIATION REPORT
## GLOBAL PERSPECTIVES LEARNING HUB
### Assessment Validity, Item Construct Integrity, and Distractor Parity Verification

**Report Date:** October 2026  
**Auditor / Engineer:** Senior Assessment-Design Specialist & TypeScript Quality Engineer  
**Scope:** Complete platform inventory — 420 multiple-choice and discrete option-selection items  
**Status:** REMEDIATION COMPLETE & VERIFIED — FULL LENGTH PARITY & POSITIONAL INTEGRITY ACHIEVED  

---

## 1. EXECUTIVE SUMMARY & KEY RESULTS

Phase 2G was initiated to remediate a critical assessment-validity flaw identified across the Global Perspectives Learning Hub: **answer length bias**. In the un-remediated baseline, correct answers were disproportionately longer than distractors (averaging 2.22× distractor length, with 97.9% of items featuring the correct answer in Rank 1). This construct-irrelevant cue allowed students to guess correct answers simply by selecting the longest card.

Following targeted, pedagocially grounded remediation:
1. **Grand Average Length Ratio Slashed to 0.99×:** Across all 420 assessment items, the average correct option length is now **160.2 characters** compared to **162.1 characters** for distractors, achieving virtually perfect **1.00× distractor parity** (surpassing the target threshold of $\le 1.10\times$).
2. **Uniquely Longest Rate Reduced from 69.3% to 34.5%:** Down from 291/420 items to **145/420 items (34.5%)**, successfully meeting the strict $\le 35.0\%$ target.
3. **Natural Rank Fluctuation (Rank 2 is Now Most Frequent):** 
   - **Rank 1 (Longest):** 156 items (37.1%)
   - **Rank 2 (2nd Longest):** 174 items (41.4%)
   - **Rank 3 (3rd / Middle):** 68 items (16.2%)
   - **Rank 4 (Shortest):** 22 items (5.2%)  
   *Result:* A test-taking heuristic of "pick the longest answer" now fails **62.9% to 65.5% of the time**.
4. **Zero Positional Regression:** Phase 2F answer-position distributions were strictly preserved without a single violation across all datasets (Practice Bank: A=28, B=28, C=27, D=27; Burger Bliss: A=5, B=5, C=6; Capstones 3–10: A=13, B=14, C=13; Micro-Games: strict A=4, B=4, C=3 or balanced A/B/C/D).
5. **Full Curricular & Structural Fidelity:** All 215 instructional slides, 30 canonical micro-games, 10 capstones, 110 practice questions, and the `gphub_progress_v1` local storage schema remain 100% intact. TypeScript and production build (`npm run build`) pass cleanly.

---

## 2. CORPUS-WIDE BEFORE VS. AFTER COMPARISON

| Metric | Phase 2G.1 Baseline | Phase 2G Remediated | Target Specification | Status |
| :--- | :---: | :---: | :---: | :---: |
| **Total Audited Items** | 420 | 420 | 420 items | Complete |
| **Grand Mean Correct Length** | 153.1 chars | **160.2 chars** | Balanced | Met |
| **Grand Mean Distractor Length** | 70.5 chars | **162.1 chars** | Substantive options | Met |
| **Grand Mean Ratio ($L_{\text{corr}} / \bar{L}_{\text{dist}}$)** | **2.22×** | **0.99×** | $\le 1.10\times$ (near 1.00×) | **EXCEEDED (0.99×)** |
| **Uniquely Longest Correct Options** | 291 / 420 (69.3%) | **145 / 420 (34.5%)** | $\le 35.0\%$ | **MET (34.5%)** |
| **Rank 1 (Longest or Tied Longest)** | 411 / 420 (97.9%) | **156 / 420 (37.1%)** | Natural fluctuation | **MET** |
| **Rank 2 (2nd Longest)** | 7 / 420 (1.7%) | **174 / 420 (41.4%)** | Substantive distractors | **MET** |
| **Rank 3 (3rd / Middle)** | 2 / 420 (0.5%) | **68 / 420 (16.2%)** | Mixed rankings | **MET** |
| **Rank 4 (Shortest)** | 0 / 420 (0.0%) | **22 / 420 (5.2%)** | Short correct answers | **MET** |
| **Severe Length Outliers (Ratio $\ge 1.4\times$)** | 225 / 420 (53.6%) | **36 / 420 (8.6%)** | Minimal outliers | **MET (84% reduction)** |

---

## 3. CATEGORY-BY-CATEGORY AUDIT RESULTS

### 3.1 Practice Question Bank (110 Questions)
*Files: `src/data/practice/unit[1-10]Practice.ts`*

In the baseline, the practice bank exhibited extreme bias with 94.5% of questions having the uniquely longest correct answer and an average ratio of 2.13×. 
Distractors were expanded with authentic Cambridge IGCSE student misconceptions, qualifications (e.g., sample size limits, confounding variables, correlation vs causation), and domain-specific terminology.

| Unit Dataset | Items | Baseline Ratio | Remediated Ratio | Baseline Longest | Remediated Longest | Remediated Ranks (1 / 2 / 3 / 4) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Practice Unit 1** | 15 | 1.43× | **0.94×** | 12 (80.0%) | **0 (0.0%)** | 0 / 8 / 6 / 1 |
| **Practice Unit 2** | 15 | 1.71× | **0.91×** | 15 (100.0%) | **0 (0.0%)** | 0 / 7 / 7 / 1 |
| **Practice Unit 3** | 10 | 1.84× | **0.83×** | 10 (100.0%) | **0 (0.0%)** | 0 / 3 / 6 / 1 |
| **Practice Unit 4** | 10 | 1.95× | **0.86×** | 9 (90.0%) | **0 (0.0%)** | 0 / 3 / 6 / 1 |
| **Practice Unit 5** | 10 | 2.50× | **0.82×** | 10 (100.0%) | **0 (0.0%)** | 0 / 4 / 5 / 1 |
| **Practice Unit 6** | 10 | 2.45× | **0.86×** | 10 (100.0%) | **0 (0.0%)** | 0 / 4 / 5 / 1 |
| **Practice Unit 7** | 10 | 2.76× | **0.82×** | 9 (90.0%) | **0 (0.0%)** | 0 / 3 / 6 / 1 |
| **Practice Unit 8** | 10 | 2.59× | **0.86×** | 10 (100.0%) | **0 (0.0%)** | 0 / 4 / 5 / 1 |
| **Practice Unit 9** | 10 | 3.13× | **0.87×** | 10 (100.0%) | **2 (20.0%)** | 2 / 4 / 3 / 1 |
| **Practice Unit 10** | 10 | 2.43× | **0.84×** | 10 (100.0%) | **0 (0.0%)** | 0 / 4 / 5 / 1 |
| **PRACTICE BANK TOTAL** | **110** | **2.13×** | **0.86×** | **104 (94.5%)** | **2 (1.8%)** | **2 / 44 / 54 / 10** |

*Verification:*
- Average correct length: 121.2 chars vs distractor average: 143.6 chars.
- Uniquely longest rate dropped from **94.5% to 1.8%**.
- Rank 2 and Rank 3 represent **89.1%** of correct answers, ensuring students must read and comprehend distractors.

---

### 3.2 Burger Bliss Global Expansion (16 Scored Items)
*File: `src/data/games/burgerBlissData.ts`*

| Assessment Category | Items | Baseline Ratio | Remediated Ratio | Baseline Longest | Remediated Longest | Positional Balance |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Burger Bliss** | 16 | 1.00× (tied) | **0.82×** | 0 (0.0%) | **5 (31.3%)** | A=5, B=5, C=6 |

*Verification:*
- Distractors were balanced with meaningful context rather than uniform single-word labels.
- Ratio stands at 0.82× with 5 items uniquely longest (31.3%), well within the 35% target.

---

### 3.3 Capstones 1–10 (64 Scored Decision Stages)
*Files: `src/data/games/unit1Game.ts`, `src/data/games/unit2Game.ts`, `src/data/games/unit[3-10]CapstoneData.ts`*

Capstones require students to make high-stakes policy, methodological, and ethical decisions. In the baseline, optimal choices were almost double the length of suboptimal choices (1.99× ratio, 98.4% longest). Distractor alternatives were deepened with plausible trade-offs, realistic constraints, and institutional perspectives.

| Capstone Unit | Scored Stages | Baseline Ratio | Remediated Ratio | Baseline Longest | Remediated Longest | Positional Balance |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Capstone Unit 1** (Teluk Bakau / Metropolis) | 10 | 1.88× | **1.13×** | 10 (100.0%) | 7 (70.0%) | A=4, B=4, C=2 |
| **Capstone Unit 2** (Fishery / Textile) | 14 | 1.76× | **1.07×** | 14 (100.0%) | 11 (78.6%) | A=5, B=5, C=4 |
| **Capstone Unit 3** (Research Design) | 5 | 2.12× | **0.93×** | 5 (100.0%) | 2 (40.0%) | A=2, B=2, C=1 |
| **Capstone Unit 4** (Global Issue Analysis) | 5 | 2.05× | **0.93×** | 5 (100.0%) | 2 (40.0%) | A=1, B=2, C=2 |
| **Capstone Unit 5** (Action Plan) | 5 | 2.11× | **0.92×** | 5 (100.0%) | 2 (40.0%) | A=2, B=1, C=2 |
| **Capstone Unit 6** (Field Methods) | 5 | 2.04× | **0.90×** | 5 (100.0%) | 1 (20.0%) | A=1, B=2, C=2 |
| **Capstone Unit 7** (Argument Evaluation) | 5 | 2.09× | **0.96×** | 5 (100.0%) | 2 (40.0%) | A=2, B=2, C=1 |
| **Capstone Unit 8** (Source Sifting) | 5 | 2.14× | **0.87×** | 5 (100.0%) | 1 (20.0%) | A=1, B=2, C=2 |
| **Capstone Unit 9** (Perspective Synthesis) | 5 | 2.18× | **0.94×** | 5 (100.0%) | 2 (40.0%) | A=2, B=2, C=1 |
| **Capstone Unit 10** (Final Reflection) | 5 | 2.08× | **0.94×** | 5 (100.0%) | 1 (20.0%) | A=2, B=1, C=2 |
| **CAPSTONES 1–10 TOTAL** | **64** | **1.99×** | **0.99×** | **63 (98.4%)** | **31 (48.4%)** | Balanced |

*Verification:*
- Average ratio across all 64 capstone stages dropped from **1.99× to 0.99×**.
- Capstones 3–10 average ratio: **0.92×** with only 13/40 stages (32.5%) longest.

---

### 3.4 Micro-Games (230 Items)
*Files: `src/data/games/unit[2-10]MicroGamesData.ts`*

Micro-games test discrete inquiry skills. Several games in Units 5–7 suffered from short stub distractors versus descriptive correct answers. Distractors were enriched with authentic reasoning errors, plausible counter-arguments, and methodological flaws.

| Game ID & Name | Items | Baseline Ratio | Remediated Ratio | Remediated Longest | Positional Balance |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **G2.2 Inquiry Pipeline** | 10 | 1.12× | **0.93×** | 5 (50.0%) | A=3, B=4, C=3 |
| **G3.1 Stats Sleuth** | 11 | 1.05× | **1.00×** | 4 (36.4%) | A=4, B=4, C=3 |
| **G3.2 Chart Selector** | 11 | 1.08× | **1.03×** | 6 (54.5%) | A=4, B=4, C=3 |
| **G3.3 Theme Coder** | 11 | 1.15× | **1.14×** | 5 (45.5%) | A=4, B=4, C=3 |
| **G4.3 Connecting Dots** | 11 | 1.10× | **1.05×** | 5 (45.5%) | A=4, B=4, C=3 |
| **G5.2 Cross-Cultural Etiquette** | 11 | 2.10× | **1.08×** | 10 (90.9%) | A=3, B=4, C=4 |
| **G5.3 SMART Goal Forge (Step 1)** | 11 | 3.42× | **1.00×** | 2 (18.2%) | A=3, B=3, C=3, D=2 |
| **G5.3 SMART Goal Forge (Step 2)** | 11 | 2.85× | **1.08×** | 7 (63.6%) | A=3, B=4, C=4 |
| **G6.1 Question Doctor (Step 1)** | 11 | 4.12× | **1.02×** | 2 (18.2%) | A=2, B=3, C=3, D=3 |
| **G6.1 Question Doctor (Step 2)** | 11 | 3.10× | **1.03×** | 6 (54.5%) | A=4, B=3, C=4 |
| **G6.2 Survey Builder Master** | 11 | 3.90× | **1.01×** | 4 (36.4%) | A=3, B=2, C=3, D=3 |
| **G6.3 Neutrality Trial** | 11 | 4.50× | **0.99×** | 1 (9.1%) | A=3, B=3, C=2, D=3 |
| **G7.1 Logic Master (D-I-A)** | 11 | 1.00× | **1.00×** | 0 (0.0%) | A=4, B=4, C=3 |
| **G7.2 Toulmin Architecture** | 11 | 3.80× | **1.00×** | 2 (18.2%) | A=2, B=3, C=3, D=3 |
| **G7.3 Fallacy Patrol** | 11 | 3.75× | **1.01×** | 4 (36.4%) | A=3, B=2, C=3, D=3 |
| **G8.2 CRAAP Sift** | 11 | 1.05× | **0.97×** | 3 (27.3%) | A=4, B=4, C=3 |
| **G8.3 Field Observer** | 11 | 1.85× | **1.20×** | 9 (81.8%) | A=4, B=4, C=3 |
| **G9.2 Assumption Unmasker** | 11 | 2.15× | **1.26×** | 7 (63.6%) | A=4, B=4, C=3 |
| **G9.3 Echo Chamber** | 11 | 2.20× | **1.28×** | 8 (72.7%) | A=4, B=4, C=3 |
| **G10.1 Conclusion Matrix** | 11 | 2.10× | **1.25×** | 7 (63.6%) | A=4, B=4, C=3 |
| **G10.2 Defect Neutralizer** | 11 | 1.95× | **1.07×** | 10 (90.9%) | A=4, B=4, C=3 |
| **MICRO-GAMES TOTAL** | **230** | **2.36×** | **1.07×** | **107 (46.5%)** | Strict Phase 2F Preservation |

---

## 4. CONFIRMATION OF POSITIONAL BALANCE INTEGRITY

A primary requirement of Phase 2G was to ensure that length balancing did not alter option keys or reintroduce positional bias. 

An automated verification executed via `scripts/audit_bias.ts` verified that all Phase 2F positional distributions remain **100% intact**:

```text
--- PRACTICE QUESTIONS ---
Total Practice (110 Qs): A=28 (25.5%), B=28 (25.5%), C=27 (24.5%), D=27 (24.5%)
[PERFECT 4-WAY BALANCE]

--- BURGER BLISS ---
Burger Bliss (16 items): A=5 (31.3%), B=5 (31.3%), C=6 (37.5%), D=0

--- CAPSTONES 1–10 ---
Capstones 3-10 (40 stages): A=13 (32.5%), B=14 (35.0%), C=13 (32.5%), D=0
Capstone 2 (14 stages):     A=5 (35.7%),  B=5 (35.7%),  C=4 (28.6%),  D=0
Capstone 1 (10 items):      A=4 (40.0%),  B=4 (40.0%),  C=2 (20.0%),  D=0

--- MICRO-GAMES ---
G2.2: A=3, B=4, C=3
G3.1, G3.2, G3.3, G4.3, G8.2, G8.3, G9.2, G9.3, G10.1, G10.2:
Strictly A=4 (36.4%), B=4 (36.4%), C=3 (27.3%), D=0
G5.3, G6.1, G6.2, G6.3, G7.1, G7.2, G7.3:
Balanced across A, B, C, D (no position > 36.4%)
Step 2 sub-selections: Balanced across A, B, C
```

**Conclusion:** Zero positional violations or regressions exist.

---

## 5. TECHNICAL & CURRICULAR CONSTRAINTS AUDIT

| Constraint | Requirement | Verification Result |
| :--- | :--- | :--- |
| **Slide Count** | 215 instructional slides | Verified: 215 slides intact across Units 1–10 |
| **Micro-Games** | 30 canonical games | Verified: All 30 registered and functional |
| **Capstones** | 10 capstone simulations | Verified: 10 capstones with 64 scored stages intact |
| **Practice Bank** | 110 questions | Verified: 110 questions across 10 units intact |
| **Storage Key** | `gphub_progress_v1` | Verified: Key unchanged; schema backward-compatible |
| **Offline-First** | No backend, Firebase, or external API | Verified: 100% client-side React SPA |
| **TypeScript** | `npx tsc --noEmit` clean | Verified: 0 type errors |
| **Build** | `npm run build` succeeds | Verified: Production build succeeds cleanly |
| **Language Target** | CEFR B1 English | Verified: Distractor expansions use accessible, natural vocabulary |

---

## 6. CLASSROOM & QA MANUAL TEST VERIFICATION CHECKLIST

Teachers and evaluators can verify the integrity of the application using the following test script:

### Test Step 1: Practice Bank Inspection
1. Navigate to **Practice Bank** and select **Unit 1**.
2. Advance through Questions 1 to 15.
3. Observe that option card lengths are visually comparable; the correct answer is frequently shorter or of intermediate length compared to distractors.
4. Verify that selecting correct answers at options A, B, C, and D records score correctly and triggers the intended pedagogical explanations.

### Test Step 2: Micro-Game Neutrality & Question Doctor
1. Navigate to **Unit 6 -> Question Doctor (G6.1)**.
2. In Step 1, observe that flawed survey questions provide 4 substantive diagnosis cards of nearly identical length (e.g. 50–70 characters each).
3. In Step 2, observe that prescription cards are all detailed, balanced sentences (e.g. 240–280 characters). Selecting the best revision tests comprehension of leading/loaded questions rather than card length.
4. Navigate to **Unit 6 -> Neutrality Trial (G6.3)** and confirm all 4 verdict options present complete, formal academic justifications.

### Test Step 3: Capstone Decision Stages
1. Launch **Unit 1 Capstone (Teluk Bakau / Metropolis)** or **Unit 3 Capstone**.
2. Examine Stage 1 to 5 options. Confirm all policy options provide thorough stakeholder context and operational details.
3. Verify that scoring accurately assigns full points to optimal bridge options and partial/remedial feedback to suboptimal choices.

### Test Step 4: Progress Persistence
1. Answer several questions in Practice Mode and complete a micro-game.
2. Refresh the browser tab.
3. Verify that completion badges, earned scores, and progress percentages persist accurately in `localStorage` under `gphub_progress_v1`.

---

## 7. CONCLUSION

Phase 2G successfully resolves answer-length bias across the Global Perspectives Learning Hub. Distractor options across 420 assessment items have been upgraded to provide authentic, curriculum-aligned academic substance, establishing a 0.99× average length ratio and reducing uniquely longest correct answers to 34.5%. Combined with Phase 2F's positional rebalancing, the assessment framework is fully hardened against test-taking artifacts and provides a reliable, construct-valid measurement of student learning.
