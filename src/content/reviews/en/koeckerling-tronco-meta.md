---
title: "Koeckerling et al.: 10-year mortality after PCI or CABG for left main disease, reconstructed IPD meta-analysis"
date: 2026-04-03
lang: en
translationKey: koeckerling-tronco-meta
description: "The meta-analysis of the 5 left main randomized trials showed equal 10-year mortality with PCI and CABG; EXCEL stops at 5 years and non-fatal outcomes were left out."
reference: "Koeckerling D, Reddy RK, Howard JP, Bansal R, Bernstein H, Lehmann L, et al. Long-Term Mortality After PCI or CABG for Left Main Stem Disease: Updated Meta-Analysis of Randomized Trials Using Reconstructed Individual-Participant Survival Data. J Am Coll Cardiol. 2026 [CONFIRMAR volume and pages]."
doi: 10.1016/j.jacc.2026.01.079
design: Meta-analysis of 5 randomized trials using reconstructed individual survival data
n: 4499
tags: [tronco, pci-vs-cabg, meta-analysis]
draft: true
summary: |
  The meta-analysis pooled the 5 randomized trials of PCI versus CABG for left main disease: LE MANS, SYNTAX, PRECOMBAT, EXCEL and NOBLE, with 4499 patients. Individual time-to-event data were reconstructed from Kaplan-Meier curves (IPDfromKM algorithm), with 98.7% accuracy for event counts.

  The main analysis used a 1-stage Cox model with γ-frailty for trial. The proportional hazards assumption was checked (Schoenfeld residuals, p = 0.59). RMST and conventional fixed- and random-effects meta-analysis were run as complementary analyses.

  | Outcome | PCI | CABG | Effect |
  |---|---|---|---|
  | 10-year mortality | 23.4% | 23.3% | HR 1.02 (0.89 to 1.17) |
  | RMST difference | | | 0.0 years (−0.2 to 0.1) |

  All approaches converged on the same result.
strengths: |
  - Includes every randomized trial of the comparison.
  - High reconstruction fidelity (98.7%).
  - 1-stage model with trial frailty, checked proportional hazards and RMST as a complementary analysis.
  - All-cause mortality is the endpoint least exposed to ascertainment bias.
problems: |
  - **EXCEL censored at 5 years.** EXCEL is the largest trial (n = 1905, 23% of the weight) and the only one with a second-generation (everolimus) drug-eluting stent. It was the only trial with a significant mortality excess with PCI at 5 years (13.0% vs 9.9%). The EXCEL authors wrote in 2019 that the hazard curves were still diverging and that 10-year follow-up was needed. Administrative censoring does not bias the HR within the observed window, but it prevents knowing whether the divergence continued. The 4 trials with 10-year data used first-generation or bare-metal stents.
  - **Reconstructed IPD cannot recover covariates.** Treatment interactions with diabetes, acute coronary syndrome or SYNTAX score at 10 years cannot be tested. The Sabatine et al. IPD meta-analysis (Lancet 2021) found no interaction at 5 years; extending that to 10 years is an assumption. NOBLE at 10 years reported an interaction with ACS (HR 0.57 favoring PCI, interaction p 0.049), which could not be tested here.
  - **Mortality only.** There is no MI, stroke or repeat revascularization. The choice is defensible, but it leaves the comparison incomplete.
opinion: |
  As an exercise, I pooled the 3 trials that report non-fatal endpoints at their longest available follow-up: LE MANS (10 years), PRECOMBAT (10 years) and EXCEL (5 years), about 2610 patients. This is an exploratory analysis.

  | Outcome, PCI vs CABG | RR (95% CI) |
  |---|---|
  | Repeat revascularization | 1.66 (1.36 to 2.03) |
  | Total MI | 1.12 (0.87 to 1.46) |
  | Spontaneous MI (EXCEL data) | 1.64 (1.14 to 2.38); p = 0.008 |

  Total MI looks neutral because, in EXCEL, periprocedural MI favored PCI (RR about 0.66) and spontaneous MI favored CABG (RR about 1.92). The two cancel out in the total. CABG appears to protect better against late spontaneous MI, possibly because grafts bypass proximal plaques that stents do not treat. SYNTAX and NOBLE did not collect these endpoints between 5 and 10 years, so this analysis is incomplete.

  OPTIMAL (Testa et al., NEJM 2026) showed no benefit of IVUS-guided over angiography-guided PCI in left main disease (HR 1.11; 0.87 to 1.42). This seems to contradict the NOBLE IVUS substudy (mortality 20% vs 31% with and without final IVUS). In my view, the NOBLE observation was confounded by indication. In OPTIMAL, the angiography arm had post-dilation in 96% and POT in 85%. These operators apply IVUS criteria even without IVUS. If even IVUS does not change outcomes in expert centers, the mortality parity in the meta-analysis does not depend on a hypothetically better PCI.

  My conclusions:

  1. PCI and CABG give the same probability of being alive at 10 years in patients with left main disease and SYNTAX ≤ 32.
  2. Equal survival does not mean equal outcomes. PCI brings about 66% more repeat revascularization and probably more spontaneous MI. CABG brings more periprocedural stroke and a harder early recovery.
  3. The choice depends on which set of trade-offs fits the patient: anatomy, comorbidities, values, fear of surgery and tolerance for reintervention. Equal mortality is the foundation; the rest is shared decision-making.
---
