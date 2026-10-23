---
title: "NOBLE at 10 years: PCI versus CABG for unprotected left main disease"
date: 2026-04-26
lang: en
translationKey: noble-10-anos
description: "NOBLE at 10 years showed no mortality difference between PCI and CABG for left main disease, but the design does not support the equivalence claim in the paper."
reference: "Holck EN, Holm NR, Hildick-Smith D, Lindsay MM, Spence MS, Erglis A, et al. Percutaneous coronary intervention versus coronary artery bypass grafting for unprotected left main stenosis: 10-year final results from the randomised, open-label, non-inferiority NOBLE trial. Lancet. 2026;407:1374-82."
doi: 10.1016/S0140-6736(26)00205-9
design: Open-label randomized trial, 36 sites in Northern Europe and the UK
n: 1201
tags: [tronco, pci-vs-cabg, non-inferiority]
draft: true
summary: |
  NOBLE randomized 1201 patients with unprotected left main disease, eligible for both treatments by heart-team consensus, between 2008 and 2015. 598 were assigned to PCI and 603 to CABG; 592 per arm entered the intention-to-treat analysis. Most received second-generation drug-eluting stents.

  The original design tested non-inferiority on a MACCE composite at 5 years. At 10 years, the reported primary endpoint is all-cause mortality. Vital status was available in 98% of patients.

  | Analysis | PCI | CABG | HR (95% CI) |
  |---|---|---|---|
  | 10-year mortality | 23% (136/592) | 25% (145/592) | 0.93 (0.74 to 1.18); p = 0.56 |
  | Landmark 0 to 5 years | 9% | 9% | 1.06 (0.73 to 1.55) |
  | Landmark 5 to 10 years | 15% | 17% | 0.86 (0.64 to 1.16) |

  In the acute coronary syndrome subgroup, the HR was 0.57 (0.32 to 0.99), with an interaction p of 0.049. The Bayesian-Weibull analysis, with an informative prior HR of 1.10, gave a posterior median of 0.95 (95% credible interval 0.74 to 1.18).

  The published conclusion is that PCI is "equally as safe as" CABG.
strengths: |
  - 98% follow-up at 10 years.
  - The 0 to 5 and 5 to 10 year landmark analysis tested the hypothesis of late mortality catch-up with PCI raised after EXCEL. Both windows were neutral.
  - The Bayesian sensitivity analysis used a conservative prior (HR 1.10, from SYNTAX and PRECOMBAT) and the result stayed neutral. Caveat: the prior comes from first-generation stent trials, applied to a comparison with mostly second-generation stents.
problems: |
  - **Analysis plan not prespecified.** The authors state that the statistical plan for the 10-year endpoint was not in the protocol. They reused the 5-year plan. In practice, the 10-year primary endpoint is post hoc.
  - **Not powered for mortality.** The original power calculation was for MACCE. With 281 deaths, the Schoenfeld formula gives about 80% power to detect an HR of 0.72. For an HR of 0.74, power is about 71%; about 346 events would be needed. The authors acknowledge that a type 2 error cannot be excluded.
  - **Equivalence claim without an equivalence test.** The trial ran a superiority test. p = 0.56 means only that no difference was shown. "Equally as safe" requires a prespecified margin, a power calculation for it and a CI entirely inside the margin. With a hypothetical margin of 0.87 to 1.15, the upper bound of 1.18 would fall outside and equivalence would fail.
  - **Fragile ACS subgroup.** The interaction p of 0.049 sits at the threshold. Nine subgroups were tested without correction. The chance of at least one false positive is $1 - 0.95^9 \approx 37\%$. The Bonferroni α would be about 0.0056, nine times lower than 0.049. CABG mortality in ACS was 31%, against about 22% in pooled SYNTAX and PRECOMBAT. Median delay to CABG in ACS was 6 days, against 1 day for PCI; the explanation is plausible, but it is post hoc reasoning on a borderline interaction.
  - **Proportional hazards tested only with log-log plots.** No Schoenfeld residuals or formal test were reported. In the ACS subgroup, the curves separate late. For that subgroup, RMST would be more appropriate than the HR.
  - **Confounded IVUS substudy.** Post hoc, the mortality HR against CABG was 0.79 (0.61 to 1.04) with final IVUS and 1.31 (0.94 to 1.83) without final IVUS. IVUS use varied by period, operator and center.
  - **No non-fatal events after year 5.** MI, stroke and repeat revascularization were not collected from years 5 to 10. That window has only mortality, the least sensitive endpoint for comparing PCI and CABG.
opinion: |
  A defensible reading: mortality was numerically similar at 10 years, the trial was not designed for equivalence, and the CI ranges from a 26% relative reduction to an 18% increase in mortality with PCI.

  OPTIMAL (Testa et al., NEJM 2026) randomized 806 patients with unprotected left main disease to IVUS-guided or angiography-guided PCI, mean SYNTAX 29.7. The HR for the patient-oriented composite was 1.11 (0.87 to 1.42) and for death 1.06 (0.74 to 1.50). The NOBLE substudy signal did not replicate under randomization. The most likely explanation is confounding by period, operator and center. A secondary explanation: the OPTIMAL angiography arm applied IVUS-derived practice, with post-dilation in 96.0% and POT in 85.1%, by high-volume operators.

  What NOBLE at 10 years shows: in selected patients with left main disease and no complex lesions, 10-year mortality is similar with PCI and CABG, with no late catch-up after year 5. What it does not show: equivalence, MACE parity at 10 years, PCI superiority in ACS and, after OPTIMAL, an incremental benefit of routine IVUS over angiography in expert centers.

  The question would be settled by a randomized trial of contemporary left main PCI (imaging at operator discretion, POT, current stents, optimized DAPT) against multi-arterial CABG, with MACE prespecified through 10 years and adequate representation of women, ACS and non-White patients. Until then, the decision should be shared case by case.
---
