---
title: "ROLLING STONE: intravascular lithotripsy versus atherectomy in calcified coronary arteries"
date: 2026-03-24
lang: en
translationKey: rolling-stone
description: "A well-run prospective registry. Procedural success was equal. The 12-month advantage of lithotripsy depends on a propensity model with limitations and on 11 vs 23 events."
reference: "Cerrato E, Pavani M, Zecchino S, Leoncini M, Zanda G, Abdirashid M, et al. Intravascular Lithotripsy or Mechanical Debulking in Complex Calcified Coronary Arteries: Multicenter, Prospective ROLLING STONE Study. JACC Cardiovasc Interv. 2026;19(5):571-82."
doi: 10.1016/j.jcin.2025.11.033
design: Prospective multicenter registry with blinded core lab and independent events committee (Italy; NCT05016726)
n: 1005
tags: [cto-pci-complexa, calcium, lithotripsy, atherectomy]
draft: true
summary: |
  ROLLING STONE enrolled 1,005 consecutive patients with calcified coronary disease at 23 Italian centers. The comparison was intravascular lithotripsy (IVL, n = 544) versus rotational or orbital atherectomy (AT, n = 380); 81 patients treated with both were excluded. Angiograms were analyzed at a blinded core lab, and 30-day follow-up was complete in 99.8%.

  Procedural success was 85.4% with IVL and 86.3% with AT.

  | MACE | Crude | Propensity matching (n = 320) | IPW (n = 532) |
  |---|---|---|---|
  | 30 days | HR 0.60 (0.36 to 0.99), P = 0.045 | HR 0.49 (0.17 to 1.44), P = 0.20 | HR 0.49 (0.17 to 1.45), P = 0.20 |
  | 12 months | HR 0.71 (0.49 to 1.04), P = 0.079 | HR 0.43 (0.21 to 0.89), P = 0.022 | HR 0.44 (0.22 to 0.90), P = 0.024 |

  In the matched cohort, 12-month MACE was 6.8% with IVL and 14.3% with AT (11 vs 23 events).

  AT patients had longer stents (median 50 vs 33 mm), more multivessel disease (84% vs 74%) and more bifurcations (35% vs 24%).
strengths: |
  - Prospective, large, with a blinded core lab and an independent events committee. For an investigator-initiated registry, the methodological standard is high.
  - 30-day follow-up in 99.8%.
  - Two adjustment methods (matching and IPW) with concordant results.
  - Proportional hazards tested with Schoenfeld residuals, a strict 0.1 caliper for matching, and the result framed as hypothesis-generating.
problems: |
  - **Sample loss with matching.** The cohort fell from 924 to 320 patients. Two thirds were left out of the main adjusted analysis. IPW keeps more patients (532).
  - **Same propensity model for both methods.** Agreement between matching and IPW shows stability across techniques, not that the model is correctly specified.
  - **Post-treatment variables in the model.** Stent length and vessel diameter are set during the procedure, shaped by device and operator strategy. Including them conditions on a mediator and can bias the estimate.
  - **MACE predictors missing from the model.** CTO, bifurcation, left main, LVEF, renal insufficiency and clinical presentation subtype were not included. Some showed significant imbalance in Table 1.
  - **Calcium burden not quantified.** No CT scoring and no IVUS or OCT calcium arc. Assessment was angiographic only, subjective and insensitive to deep calcium.
  - **Indication bias.** Operators chose AT for more complex anatomy. That decision carries clinical judgment no covariate list captures. Matching and IPW do not resolve indication bias.
  - **Exclusion of bailout IVL.** Before matching, 56 patients with IVL used only as bailout for stent underexpansion were excluded. These are high-risk patients. Their exclusion lowers the IVL event rate asymmetrically.
  - **Late separation without early difference.** Crude 30-day MACE was significant and 12-month was not. After matching, the reverse occurred. Early convergence is expected, since matching balanced anatomy. A late separation with no early difference needs explanation.
  - **Few events.** The matched 12-month result rests on 11 vs 23 events, with a CI of 0.21 to 0.89, a fourfold range. Moving a few events changes the conclusion.
opinion: |
  The crude 30-day difference fits the biology: AT is more aggressive and was used in more complex anatomy, with more periprocedural events. After the procedure, trajectories should converge.

  I see two readings of the late separation after matching. In the first, in the true equipoise population, IVL causes less vessel trauma and better healing, with a late benefit. That would be clinically relevant and is plausible. In the second, the exclusion of bailout IVL and the post-treatment covariates shaped a matched cohort in which IVL MACE fell from about 11% to 6.8%, while AT barely changed. In that case the separation would be partly an artifact of sample composition. With this precision, I cannot tell the two apart.

  ROLLING STONE shows that IVL and atherectomy are feasible, effective and safe for complex calcified PCI, with equivalent procedural success. The registry is well executed and asks the right question. It does not yet show superiority, and the authors are transparent about that.

  The next step is a randomized trial with calcium quantification, stratification by severity and hard clinical endpoints.
---
