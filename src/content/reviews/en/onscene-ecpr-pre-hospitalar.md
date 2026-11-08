---
translationKey: onscene-ecpr-pre-hospitalar
title: 'OnScene: prehospital ECPR and the survivors who were never cannulated'
date: 2026-11-08
lang: en
description: Helicopter teams with ECPR capability had 40% vs 20% survival to discharge. The design cannot separate the effect of the cannula from base, period and selection effects, and 23 of the 57 ECPR-arm survivors were never cannulated.
reference: Reis Miranda D, Moors X, Ali S, Maissan IM, van Schuppen HL, Mommers L, et al. Prehospital Extracorporeal Life Support in Refractory Out-of-Hospital Cardiac Arrest. N Engl J Med. 2026 (published online 7 Nov 2026).
doi: 10.1056/NEJMoa2602919
design: Nonrandomized stepped-wedge study, 4 helicopter (HEMS) bases in the Netherlands (NCT04620070)
'n': 231
summary: |-
  OnScene compared two phases at the 4 helicopter emergency medical service (HEMS) bases in the Netherlands, from October 2021 to June 2025. In the intervention phase, the helicopter team could start ECPR on scene. In the conventional phase, the patient was taken to hospital, where ECPR could be started. Each base switched phase on its own date. Eligible patients were 18 to 50 years old, with out-of-hospital cardiac arrest refractory for more than 20 minutes, witnessed or with signs of life, in VF/VT or in PEA with suspected pulmonary embolism. Of 3,362 dispatches, 231 patients were enrolled (144 intervention, 87 conventional). The plan called for 390.

  I read the paper, the Supplementary Appendix, the protocol (v3.0 and v5.0), the SAP and the ClinicalTrials.gov record. Numbers marked as my calculation come from the published counts.

  | Outcome | ECPR | Conventional | Effect (95% CI) |
  |---|---|---|---|
  | Survival to discharge | 57/144 (40%) | 17/87 (20%) | OR 2.72 (1.59 to 4.66); adjusted 2.66 (1.56 to 4.55) |
  | CPC 1 to 2 at 6 months | 51/141 (36%) | 11/85 (13%) | OR 4.22 (2.82 to 6.32) |
  | Time to ECMO flow, median (IQR) | 45 min (37 to 50) | 77 min (65 to 90) | |

  The analysis used GEE (binomial logit, independence working correlation, robust standard errors), with base as the cluster and period as a fixed effect.
strengths: |-
  - Prehospital ECPR delivered at national scale, with about 90 HEMS professionals trained to cannulate on scene.
  - Time to ECMO flow fell by about 30 minutes, which makes the direction of the effect plausible.
  - The primary endpoint matches the registry and the protocol.
  - Protocol, SAP and detailed supplementary tables (S7 to S9) allow much of the analysis to be recomputed.
problems: |-
  - **Four clusters and robust standard errors.** The paper's 95% CI for survival is 1.59 to 4.66 (implied standard error 0.274). The crude binomial CI is 1.44 to 5.05 (standard error 0.320, my calculation). For CPC 1 to 2, the paper gives 2.82 to 6.32 and the crude CI is 1.85 to 7.84 (my calculation). With few clusters, the sandwich estimator underestimates the standard error ([Mancl and DeRouen, Biometrics 2001](https://doi.org/10.1111/j.0006-341X.2001.00126.x)). A small-sample correction and a mixed-model sensitivity analysis are missing.

  <figure><img src="/images/avaliacoes/onscene-ecpr-pre-hospitalar/or-sobrevida.en.svg" width="680" height="312" alt="Survival odds ratio: paper GEE 2.72 (1.59 to 4.66); crude 2.70 (1.44 to 5.05); stratified by base 2.27; excluding Rotterdam 2.13 (0.98 to 4.61); VF/VT only 2.23 (1.15 to 4.34)." loading="lazy"><figcaption>Figure 1. Odds ratio for survival to discharge in the paper and in four of my recalculations from the published counts.</figcaption></figure>

  - **One base carried the ECPR arm.** The transition order was not randomized. Protocol section 8.2 describes the study as "cluster randomized", with Rotterdam excluded. Rotterdam, the only base with prior ECMO experience (4 of 14 physicians), contributed 87 of the 144 intervention patients and 8 of the 87 controls. I identified the bases by matching the Supplement's list of institutions with Table S9. Stratified by base, the OR is 2.27. Excluding Rotterdam, it is 2.13 (0.98 to 4.61). The receiving hospital by arm is not reported. 192 of the 231 patients appear at 12 ECMO centers, and 39 are not listed (at least 32 died before hospital).

  <figure><img src="/images/avaliacoes/onscene-ecpr-pre-hospitalar/pacientes-por-base.en.svg" width="680" height="270" alt="ECPR and conventional patients by base: Rotterdam 87 and 8, Nijmegen 40 and 12, Groningen 8 and 16, Amsterdam 9 and 51." loading="lazy"><figcaption>Figure 2. Patients by base and phase.</figcaption></figure>

  - **Estimand.** Of the 57 ECPR-arm survivors, 23 (40%) never received prehospital ECPR. Of the 46 ECPR-arm patients who were not cannulated, 32 had ROSC first, 11 had no visible femoral vessels and in 3 cannulation was not started. They survived at 50%. In the conventional arm, patients who did not receive ECPR survived at 17% (P<0.001, my calculation). The subsets are not strictly comparable, because ROSC timing differs. If the phases differed only in the cannula, the two groups should fare alike. Possible explanations: different resuscitation (epinephrine 4 vs 6 mg), different destination, selection at enrollment and base effects. The intention-to-treat analysis estimates the effect of the whole HEMS-ECPR system. Without randomization, it fixes the population compared but does not protect against confounding.

  <figure><img src="/images/avaliacoes/onscene-ecpr-pre-hospitalar/sobrevida-subgrupos.en.svg" width="680" height="318" alt="Survival to discharge: ECPR arm with cannulation attempted 35%, ECPR arm never cannulated 50%, conventional with in-hospital ECPR 25%, conventional without ECPR 17%." loading="lazy"><figcaption>Figure 3. Survival to discharge by subgroup. ECPR-arm patients who were never cannulated survived more often than those who were.</figcaption></figure>

  - **Case mix between phases.** PEA at enrollment was 11% in the intervention phase and 25% in the conventional phase (P=0.006). Pulmonary embolism as the cause was 11% and 23% (P=0.04). Standardizing control survival to the intervention rhythm mix moves it from 20% to 22% (my calculation), which explains 2 to 3 of the 20 points. In VF/VT only, the OR is 2.23 (1.15 to 4.34). The imbalance suggests that the threshold for "suspected PE" shifted between phases, and rhythm adjustment does not correct that selection.
  - **Neurological outcome.** Only 6 patients had CPC 3 (2 vs 4), so the difference in CPC 1 to 2 (23 points) mirrors survival (20 points). The relative risk is 2.8 (my calculation). The OR of 4.22 exaggerates the effect because the outcome is common. Assessment was by a single unblinded intensivist, one of the co-first authors, in a three-question phone interview. For the crude CI to cross 1, 18 of the 51 favorable outcomes would need reclassification (my calculation). The 12-month CPC and cost per QALY specified in the protocol are not reported.
  - **Location of death.** Of intervention deaths, 60% occurred in the ICU (52/87) and 13% in the emergency department (11/87). Of control deaths, 34% occurred in the ICU (24/70) and 50% in the emergency department (35/70). Withdrawal of care enters the outcome, but withdrawal decisions and cause of ICU death are not reported.
  - **Safety.** Table S8 reports double venous cannulation leading to death in 12 of 98 attempts, plus one nonfatal and one suspected case. The main text reports only cannulation failure (15%).
  - **Prespecification.** The SAP sample size tests a 5-percentage-point margin. The paper reports plain superiority. Covariates were selected by a P<0.20 screen, and the prespecified time to HEMS arrival was left out of the final model.
opinion: |-
  The study shows that prehospital ECPR is feasible at national scale and shortens time to ECMO flow by about 30 minutes. A HEMS-ECPR system was associated with higher survival in young patients with witnessed, mostly shockable arrests. The direction of the effect is plausible. The OR of 2.72 is probably an upper bound.

  It leaves open how much of the 20 points comes from the cannula, how precise the estimate really is with 4 clusters, and whether the effect holds outside Rotterdam.

  The number I would ask the authors for: survival by arm among patients with ROSC before cannulation or hospital arrival.

  Even with these limits, OnScene is a reference for deciding where ECPR should start.
tags:
  - ecpr
  - cardiac-arrest
  - observational
cover: ''
draft: false
---
