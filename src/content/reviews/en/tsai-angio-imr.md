---
title: "Tsai et al.: five angio-IMR methods compared with pressure-wire IMR in a core lab"
date: 2026-04-06
lang: en
translationKey: tsai-angio-imr
description: "The five angio-IMR methods had AUCs of 0.53 to 0.58 against invasive IMR; part of the problem lies in the variability of the IMR used as reference."
reference: "Tsai TY, et al. Core Laboratory Comparison of Angiography-Derived Indexes of Microvascular Resistance Versus Pressure-Wire IMR and Absolute Resistance. JACC Cardiovasc Interv. 2026;19(6):755-72."
doi: 10.1016/j.jcin.2025.10.027
design: Diagnostic accuracy study with blinded analysis at an independent core lab (CORRIB, Galway)
n: 270
tags: [fisiologia-imagem, imr, microcirculation]
draft: false
summary: |
  The study compared 5 angio-IMR formulas from 3 platforms (QAngio XA 3D, FlashAngio and AngioPlus Core) with pressure-wire IMR (PW-IMR) in 274 vessels and with absolute resistance by continuous thermodilution (Rmicro) in 109 vessels. Three independent analysts used anonymized software; a dedicated investigator selected the frames.

  - Correlation between angio-IMR and PW-IMR: r of 0.04 to 0.12.
  - Three methods overestimated IMR, with mean bias of −20 to −26 units.
  - AUC for PW-IMR ≥ 25: 0.53 to 0.58.
  - Against Rmicro, three methods had AUCs of 0.68 to 0.70.
  - Median PW-IMR: 19.02 (IQR 12.79 to 28.08).
strengths: |
  - Independent core lab, blinded analysis, three analysts and anonymized software.
  - Two references: PW-IMR and Rmicro by continuous thermodilution.
problems: |
  - **Reference with high variability.** Gallinoro et al. (EuroIntervention 2023) performed duplicate bolus thermodilution measurements in 102 patients with ANOCA. Test-retest variability of IMR was 24.2 ± 19.3%. With a true IMR of 22, the 95% range on a repeat measurement is about 17 to 27, and the chance of being classified abnormal is about 30%. With a true IMR of 28, the range is about 21 to 35, with a 25 to 30% chance of being classified normal.
  - **Population clustered at the threshold.** In STEMI, a true IMR of 70 has a range of about 53 to 87, and the signal-to-noise ratio is between 3:1 and 10:1. In ANOCA, "abnormal" patients sit around 28 to 40 and "normal" ones around 12 to 22. With 24% noise, the signal-to-noise ratio drops to about 1:1.
  - **AUC ceiling limited by the reference.** With about 25% misclassification of PW-IMR near the threshold, the maximum AUC of a perfect test would be about 0.80 to 0.85. The observed values are below that ceiling, so angio-IMR has problems of its own, but the gap to the best possible result is smaller than it looks.
  - **Compounding errors in angio-IMR.** The formula combines contrast velocity from TIMI frame counts (r of 0.17 to 0.26 with hyperemic velocity in this study), angiographic contour (error squared when converting diameter to area), estimated hyperemic pressure and angio-FFR (r of 0.33 to 0.38 with invasive FFR). Each error source propagates through the formula.
opinion: |
  IMR was introduced by Fearon et al. in 2003 and validated in a porcine model with microsphere obliteration of the microcirculation. The logic is Ohm's law: resistance equals pressure over flow. Since flow is proportional to 1/mean transit time, IMR is distal pressure multiplied by transit time at hyperemia. In STEMI, IMR then correlated with infarct size and predicted mortality. In a registry of 253 patients, IMR > 40 after primary PCI was the only independent predictor of death or heart failure readmission at 1 year. Validation took place in extensive microvascular destruction and was extended to populations such as ANOCA, where differences are smaller.

  Continuous thermodilution was validated against ¹⁵O-H₂O PET and measures absolute flow and resistance. Its variability is about 12%, against about 24% for bolus thermodilution. IMR does not correlate with absolute hyperemic microvascular resistance from continuous thermodilution: r = 0.06, p = 0.425 (Gallinoro et al., JACC Interv 2023). In the Gallinoro reproducibility study (EuroIntervention 2023), continuous and bolus CFR disagreed on classification in 35.3% at the 2.5 cutoff; IMR and MRR had r = 0.1 (p = 0.305). Fawaz et al. (IJC Heart Vasc 2024; 96 patients, 116 vessels) found disagreement of 35% and 39% at CFR cutoffs of 2.0 and 2.5. Jansen et al. (JAHA 2023; 246 patients with ANOCA) reported high disagreement between methods and found that bolus CFR and IMR did not correlate with symptoms, while continuous thermodilution parameters did. In a Stanford study of 20 transplant patients (Circ Cardiovasc Interv 2025), IMR had an ICC of 0.95. IMR behavior seems to depend on the population.

  I see circular reasoning in the validation of IMR. It separated injured from intact microcirculation in extreme settings. From there, we assumed it measures resistance precisely, classifies well in other settings and can serve as the reference for other methods. It is like a thermometer that tells ice from boiling water: that does not prove it can tell 36.8 °C from 37.2 °C.

  CorMicA showed that treatment stratified by IMR and CFR improved angina and quality of life at 1 year. In my view, this shows that IMR works as a crude triage tool, and not that it measures precisely.

  What Tsai et al. show: current angio-IMR methods cannot replace PW-IMR in the individual patient, and compounding errors in frame-count formulas reduce the signal below clinical utility. What the study does not show: that angio-IMR is useless. Prognostic value and diagnostic accuracy are different properties; a noisy estimate associated with outcomes may serve for screening or stratification.

  My reading: PW-IMR is not the stable reference we treat it as. Continuous thermodilution (Rmicro, MRR) is more reproducible and correlates with symptoms, but it is not widely available and has its own limitations. The next steps I propose:

  - Validate angio-IMR and future wire-free tools against Rmicro as the main reference.
  - Run prospective studies in pure ANOCA cohorts, with full endotyping (including acetylcholine) and adequate power.
  - Replace single-frame CFD equations with full cine-run analysis using machine learning.
  - Accept that the microcirculation may require more than one measurement, and not a single index.
---
