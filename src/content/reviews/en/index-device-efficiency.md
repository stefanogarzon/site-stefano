---
title: "Index of Device Efficiency: an IVUS metric for the cutting balloon in the RODIN-CUT technique"
date: 2026-04-08
lang: en
translationKey: index-device-efficiency
description: "IDE proposes an endpoint for cutting balloon preparation of calcified lesions. Threshold and validation come from the same 50 lesions, and the predictive analysis rests on 4 lesions."
reference: "Ungureanu C, Leibundgut G, Colletti G, Dumitrascu S, Spano A, Cocoi M, et al. Index of Device Efficiency: IVUS-Based Metric to Quantify Cutting Balloon Performance in Calcified Coronary Lesions. Catheter Cardiovasc Interv. 2026;107(7):2335-44."
doi: 10.1002/ccd.70597
design: Retrospective multicenter study with serial IVUS
n: 47
tags: [cto-pci-complexa, calcium, cutting-balloon, ivus]
draft: false
summary: |
  The study proposes the Index of Device Efficiency (IDE), an IVUS-derived ratio: maximal luminal diameter after the cutting balloon divided by the balloon's nominal diameter, × 100. The aim is to quantify cutting balloon performance in calcified lesions with the RODIN-CUT technique of repeated inflations.

  There were 50 lesions in 47 patients, with 270 IVUS pullbacks. Plateau was defined as a gain of ≤0.3 mm in diameter or ≤0.5 mm² in area between inflations.

  | Result | Value |
  |---|---|
  | IDE ≥100% after 1 inflation | 40% of lesions |
  | IDE ≥100% after 4 inflations | 92% of lesions, plateau afterwards |
  | Optimal stent expansion, IDE ≥100% vs <100% | 87% vs 10% (p = 0.007) |

  Rotational atherectomy preceded the cutting balloon in 14% of lesions (7/50). Lithotripsy was used afterwards in 4% (2/50). A non-compliant balloon at 1:1 sizing followed the cutting balloon in 86% (43/50).
strengths: |
  - Proposes a standardized metric for the endpoint of plaque preparation, which does not exist today.
  - High IVUS granularity, with imaging after each inflation.
  - Use of Firth penalized logistic regression for the small sample.
problems: |
  - **Threshold and validation from the same dataset.** The IDE ≥100% cutoff, the plateau definition and the predictive associations were all derived retrospectively from the same 50 lesions. There was no split sample, bootstrapping or external cohort. The test measures the fit of the authors' own assumptions.
  - **Cutting balloon undersized by about 0.5 mm.** With a 3.0 mm balloon in a 3.5 mm vessel, reaching a maximal luminal diameter ≥3.0 mm is a low bar. Undersizing is safe and effective, as the COPS study showed. But the 92% success after four inflations partly reflects that strategy.
  - **Several devices in the preparation.** IDE is measured only after the cutting balloon. A non-compliant balloon followed in 86% of lesions. Minimal stent area includes that effect. The paper does not report the minimal lumen area just before stenting, nor separate the cutting balloon gain from the non-compliant balloon gain.
  - **No control group.** Without comparison with standard angioplasty, lithotripsy alone or atherectomy alone, a technique effect cannot be told apart from a physical effect of repeated high-pressure inflations with any balloon.
  - **Predictive analysis rests on 4 lesions.** After four inflations, only 4 lesions had IDE <100%. The 87% vs 10% comparison is 46 vs 4 lesions. No statistical method makes up for a denominator of 4. The paper does not describe those 4 lesions: whether they needed atherectomy, were the most calcified or were in a different territory.
  - **The plateau is the stopping rule.** The protocol tells operators to inflate until there is no further luminal gain. Reporting that most lesions plateaued after four inflations describes the protocol.
  - **No comparison with minimal lumen area.** Minimal lumen area is already validated on IVUS and linked to stent expansion and outcomes. There is no C-statistic comparison, reclassification or decision-curve analysis. If post-cutting-balloon area predicts expansion as well as IDE, IDE repackages existing information.
  - **Diameter versus area.** IDE uses maximal diameter. Optimal expansion (ULTIMATE criteria) uses minimal stent area >5.0 mm² and expansion >90% of the distal reference area. In eccentric or elliptical lesions, a large maximal diameter can coexist with a restricted minimal diameter and suboptimal area.
opinion: |
  The paper explains the effect of repeated inflations by creep and material fatigue. Under Kelvin-Voigt viscoelasticity, creep requires sustained loading, not 5 to 10 second pulses. Under Griffith fracture mechanics, crack propagation depends on crack geometry and stress concentration at the tip, and also favors sustained stress. Both models indicate that time under load matters, in addition to the number of cycles.

  That leaves two untested questions. Would a non-compliant balloon with longer or repeated inflations achieve similar luminal gain? The non-compliant balloon used in 86% of lesions may have done much of the work. And would the cutting balloon itself do better with longer inflations? The protocol uses 5 to 10 seconds; one 60-second inflation might outperform four 10-second inflations.

  In the two lesions that needed lithotripsy, lithotripsy passed a limit the cutting balloon did not. This points to a device limit: calcium too thick or too deep for cracks started by the atherotomes. Griffith theory predicts this: once the propagatable cracks are exhausted, a different stress mechanism is needed.

  The study shows that four cutting balloon inflations produce a larger lumen area than one. The result is expected, but it needed to be measured. Before this study, saying the balloon had reached its limit after four inflations was conjecture.

  Everything else (predictive value, plateau and the metric itself) needs prospective validation in an independent cohort, with prespecified thresholds, clinical endpoints, a comparator arm, recording of the full multi-device preparation and head-to-head comparison with minimal lumen area. For now the data describe the feasibility and reproducibility of a measurement, not its clinical utility.
---
