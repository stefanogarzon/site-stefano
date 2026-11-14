---
translationKey: favor-iii-uqfr-pos-icp
title: 'FAVOR III China: post-PCI µQFR and 5-year events'
date: 2026-11-14
lang: en
description: Low post-PCI µQFR was associated with more 5-year MACE, driven by revascularization, with residual confounding and a cut-off optimized in the same sample.
reference: Zhang R, Xu J, Guan C, Jiang Y, Shi Y, Tu S, et al. Prognostic value of Murray law-based quantitative flow ratio after percutaneous coronary intervention. EuroIntervention. 2026;22:e1157-e1167.
doi: 10.4244/EIJ-D-26-00457
design: Subgroup analysis of the FAVOR III China randomized trial (26 centers; QFR- vs angiography-guided PCI; NCT03656848)
'n': 3455
summary: |-
  The analysis included 3,455 of the 3,825 FAVOR III China patients (90.3%) and 4,196 vessels with analyzable post-PCI µQFR. The question: does µQFR measured after PCI predict MACE (death, MI or ischemia-driven revascularization) at 5 years?

  | Post-PCI µQFR | 5-year MACE |
  |---|---|
  | ≤ 0.91 (lowest tertile) | 23.1% |
  | 0.92 to 0.95 | 19.0% |
  | > 0.95 (highest tertile) | 17.2% |

  The adjusted HR of the lowest versus highest tertile was 1.30 (95% CI 1.06 to 1.60). With the ROC cut-off of 0.94, 22.3% vs 17.4%, adjusted HR 1.23 (1.04 to 1.47). The difference sits in ischemia-driven revascularization: 13.6% vs 8.5%, HR 1.55 (1.17 to 2.05). Death had HR 1.11 (0.74 to 1.69).
strengths: |-
  - Cohort from a multicenter randomized trial, with 5-year follow-up.
  - Core-lab µQFR, wire-free and adenosine-free, in more than 4,000 vessels.
  - Proportional hazards tested with Schoenfeld residuals.
problems: |-
  - **"Prespecified" and "retrospective" in the same paper.** The Methods call the analysis prespecified. Appendix 1 says post-PCI QFR was not mandatory and µQFR was applied offline, retrospectively; the Limitations call the analysis retrospective. Tertiles, ROC cut-off and covariates become post hoc choices, which changes the weight of the P value. The SAP or registry item, with its date, is not cited.
  - **Residual confounding.** The Cox model adjusts for 12 covariates but not baseline SYNTAX (11.5 vs 9.9 vs 8.1), left main or three-vessel disease (25.0% vs 19.2% vs 14.1%), pre-PCI µQFR, or stent number and length. The patient value is the lowest µQFR among treated vessels, so more treated vessels mean more chances of a low minimum. The E-value is 1.69 for the HR of 1.30 and 1.25 for the lower bound (my calculation).
  - **Post-randomization selection.** Included were 1,648 of 1,913 (86.1%) in the QFR arm and 1,807 of 1,912 (94.5%) in the angiography arm (my calculation). Because the QFR strategy deferred more PCI, the treated subsets are not comparable. The interaction P of 0.23 corresponds to a ratio of HRs of 1.20 (0.88 to 1.63; my calculation), which does not separate the arms.
  - **The 0.94 cut-off was derived in the same sample.** AUC 0.56 (0.53 to 0.58), Youden index 0.079 (my calculation). Supp Table 3 implies a MACE prevalence of 14.3%, while Supp Table 4 shows 662 events in 3,455 patients (19.2%). The population and time window behind these metrics are unclear, and the HR of the optimized cut-off is optimistic.
  - **Endpoint and clinical language.** The effect sits in revascularization, defined partly by QFR or FFR ≤ 0.80, the same family as the exposure. The impact box cites diabetes, LAD and complex anatomy without testing effect modification. The authors themselves say it is unknown whether low µQFR is correctable.
opinion: |-
  The paper shows an association between low post-PCI µQFR and 5-year revascularization, with residual confounding.

  It does not show that optimizing µQFR reduces events, that 0.94 works as a target, that the continuous metric beats the binary one (continuous AUC 0.56; ΔAUC 0.02), or that there is any gain above 0.95 (intermediate vs high: HR 1.08; 0.87 to 1.34).

  To me, the question that matters is left for an RCT of post-PCI µQFR-guided optimization.
tags:
  - fisiologia-imagem
  - qfr
cover: ''
draft: false
---
