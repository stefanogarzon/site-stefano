---
title: "Fauchier et al.: reduced-dose DOAC versus antiplatelet strategies after left atrial appendage occlusion"
date: 2026-09-17
lang: en
translationKey: fauchier-laao-antitrombotico
description: "After LAAO, the SAPT advantage over DAPT survives the paper's own sensitivity analyses. The reduced-dose DOAC advantage over DAPT does not."
reference: "Fauchier L, Nasarre M, Pierre B, Bisson A, Lip GYH. Reduced-dose direct oral anticoagulant versus antiplatelet strategies after left atrial appendage occlusion. EuroIntervention. 2026;22:e935-e945."
doi: 10.4244/EIJ-D-26-00102
design: Retrospective propensity-matched cohort (TriNetX network, 2010–2025)
n: 48788
tags: [laao-antitrombotico, laao, observational]
draft: false
summary: |
  The study used the TriNetX network to identify 48,788 AF patients who underwent percutaneous left atrial appendage occlusion (LAAO) between 2010 and 2025. Three independent comparisons were run, with 1:1 propensity score matching on 89 covariates. Mean follow-up was 1.4 to 1.6 years.

  The primary endpoint was net clinical benefit (NCB): death, ischaemic stroke, MI and major bleeding.

  | Comparison | Pairs | NCB, HR (95% CI) |
  |---|---|---|
  | Reduced-dose DOAC vs DAPT | 1,773 | 0.866 (0.782 to 0.958) |
  | SAPT vs DAPT | 4,914 | 0.865 (0.814 to 0.920) |
  | Reduced-dose DOAC vs SAPT | 1,582 | 1.056 (0.947 to 1.178) |
strengths: |
  - Largest comparative dataset on antithrombotic therapy after LAAO. The randomised data (ADRIFT, ADALA, ANDES) are small and short.
  - The three estimates are coherent. If DOAC and SAPT have HRs of 0.866 and 0.865 against DAPT, DOAC vs SAPT should be about 1.001. The observed value was 1.056, a 5.5% gap.
  - Supplementary Appendix 3 holds a more complete limitations section than usual for this design. Supplementary Figure 3 publishes self-critical data.
  - The bleeding code list is published (Supplementary Table 1).
problems: |
  - **DOAC vs DAPT does not survive the paper's own analyses.** I applied Benjamini-Hochberg to the 30 tests in the three main tables. For DOAC vs DAPT: NCB q = 0.060, death q = 0.075, bleeding q = 0.075. With time zero at day 28: NCB 0.904 (p = 0.15) and bleeding 0.915 (p = 0.29). In the 2020–2025 cohort the NCB CI is 0.939 to 1.242, which excludes the main estimate and puts the point estimate above 1. For mortality, the post-2020 CI (0.717 to 1.217) still contains 0.789: imprecision, not contradiction.
  - **Proportional hazards not tested.** About half of non-fatal events occurred in the first 90 days (NCB 48% and 51%, major bleeding 50% and 52%, stroke 46% and 49%), against 14% of deaths. Early stroke runs at about 22%/year and then 5.6%/year. The methods state that Schoenfeld residuals were tested, but no result appears in the paper or supplement. RMST would have been informative.
  - **Code-based major bleeding.** It includes R31 (haematuria), R04 (respiratory tract haemorrhage, which contains epistaxis), N93 (abnormal uterine bleeding, in a cohort with mean age 78 and 53% men), M25.0 (haemarthrosis) and S06.4 (traumatic extradural haemorrhage). The observed rate is 13.8 to 15.3%/year. With 515 bleeds against 757 NCB events, this component drives the composite, and coded haematuria weighs the same as death.
  - **Residual confounding.** I calculated E-values (VanderWeele approximation for common outcomes) at the confidence limit nearest 1: 1.20 for mortality in the DOAC comparison, 1.21 for NCB, 1.24 for mortality in the SAPT comparison and 1.43 for bleeding in the SAPT comparison. A confounder associated about 1.2-fold with both treatment and death erases the mortality findings. Frailty, cognition and functional status were unavailable.
  - **Similar mortality with opposite strategies.** DOAC and SAPT, opposites on the thrombotic axis, reduce mortality against DAPT by a similar amount (0.789 and 0.839). The common factor is not being on DAPT, a prescriber choice. Selection of patients judged fit for anticoagulation would push the result in this direction.
  - **Two thrombotic signals not discussed.** With time zero at day 28, device-related or intracardiac thrombosis with DOAC vs DAPT: 2.153 (1.050 to 4.418; p = 0.03). In the post-2020 cohort, ischaemic stroke: 1.325 (1.003 to 1.751; p = 0.05), with 113 vs 88 events. Both are exploratory and share the multiplicity problem. The text describes the comparisons that lost significance in the recent cohort and omits this one, which gained significance in the opposite direction.
  - **Yearly rates that do not reconcile.** Dividing events by the annual rate gives 3,796 person-years for NCB in the DOAC arm, against a ceiling of 2,482 (1,773 × 1.4 years). It also gives more time at risk for non-fatal endpoints than for death. Absolute effects are not reported and crude counts are nearly identical (death 202 vs 206, NCB 757 vs 757, bleeding 515 vs 526). ARR and NNT cannot be calculated. I leave it as a question: how does TriNetX define this denominator?
opinion: |
  SAPT vs DAPT is the part I would defend. After Benjamini-Hochberg, three tests survive at 5% FDR, all from the SAPT block: major bleeding (q = 0.0008), NCB (q = 0.0008) and death (q = 0.040). With time zero at day 28 the effect grows (death 0.737, bleeding 0.825, NCB 0.850, all p < 0.0001). In the 2020–2025 cohort NCB holds (0.918; 0.843 to 0.999). Intracranial haemorrhage, the bleeding endpoint hardest to miscode, moves the same way (0.673; 0.487 to 0.929; p = 0.02).

  On DOAC vs SAPT, I do not dispute the word "comparable". The CI is 0.947 to 1.178, and a conventional margin, had one been declared, would plausibly have been met. With an endpoint this frequent the upper bound still matters: NCB in 668 of 1,582 (42.2%) with DOAC and 622 of 1,582 (39.3%) with SAPT over 1.5 years. I would keep the abstract wording: "no clear advantage over SAPT".

  What the paper establishes: after LAAO, SAPT is associated with less coded bleeding, less intracranial haemorrhage and lower mortality than DAPT, and the association survives multiplicity correction, the time-zero shift and the calendar restriction. Routine DAPT after LAAO has no stronger empirical basis than the alternatives. What it does not establish: that reduced-dose DOAC beats DAPT in current practice, or causality for any of the three strategies. The early mortality advantage of DOAC over SAPT (0 to 90 days) has a fragility index of 1, and the authors state it does not persist.

  The next step is a randomised trial with time zero at discharge, SAPT vs reduced-dose DOAC vs DAPT, BARC 3 to 5 bleeding, device-related thrombosis on a fixed imaging protocol, blinded adjudication and a prespecified equivalence margin for DOAC vs SAPT. Until then, this is the largest comparative dataset available, and the supplement is worth reading.
---
