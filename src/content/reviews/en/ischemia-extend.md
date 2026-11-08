---
translationKey: ischemia-extend
title: 'ISCHEMIA-EXTEND: 11-year survival with an initial invasive or conservative strategy'
date: 2026-11-08
lang: en
description: Over a median of 9 years, the initial invasive strategy did not lower mortality (25.8% vs 26.9% at 11 years; HR 0.97, 95% CI 0.86 to 1.09). The split by cause of death is exploratory.
reference: Hochman JS, Anthopolos R, Reynolds HR, Bangalore S, Xu Y, O'Brien SM, et al. Long-Term Survival After Initial Invasive or Conservative Management of Stable Coronary Disease in ISCHEMIA-EXTEND. JAMA. 2026 (published online 7 Nov 2026).
doi: 10.1001/jama.2026.20375
design: Long-term follow-up of the ISCHEMIA randomized clinical trial, 320 sites in 37 countries
'n': 5179
summary: |-
  ISCHEMIA randomized 5,179 patients between 2012 and 2018 to an initial invasive strategy (angiography, revascularization when feasible and guideline-directed medical therapy) or an initial conservative strategy (medical therapy, with angiography for failure). All had moderate or severe ischemia, EF ≥35%, no left main stenosis ≥50%, no ACS within 2 months and no unacceptable angina. ISCHEMIA-EXTEND followed patients to 31 Dec 2025, with a median of 9 years (IQR 8 to 10) and 1,071 deaths. Outcomes were all-cause, cardiovascular and noncardiovascular death, by intention to treat.

  I read the main text and the three supplements: SAP v1.2 (19 Apr 2026), protocol guidance (3 Dec 2018) and eTables.

  | Outcome | Invasive | Conservative | Effect (95% CI) |
  |---|---|---|---|
  | All-cause death, events | 518 | 553 | Adjusted HR 0.97 (0.86 to 1.09) |
  | All-cause death, 11-year KM | 25.8% | 26.9% | −1.0 pp (−4.2 to 2.1) |
  | Cardiovascular death, events | 308 | 364 | Cause-specific HR 0.88 (0.75 to 1.02) |
  | Noncardiovascular death, events | 193 | 166 | Cause-specific HR 1.18 (0.96 to 1.45) |
  | 11-year restricted mean survival | 3,584 days | 3,564 days | Adjusted +14 days (−41 to 70) |

  The lower CI limit of the all-cause HR (0.86) rules out a relative reduction larger than 14%. With 1,071 deaths, the smallest HR detectable with 80% power at alpha 0.05 is 0.84 (my calculation). From the 11-year point estimate, the NNT is 96. The interval runs from NNT 24 to NNH 47 (my calculation).

  <figure><img src="/images/avaliacoes/ischemia-extend/hr-por-causa.en.svg" width="680" height="272" alt="HR invasive vs conservative: all-cause death 0.97 (0.86 to 1.09); cardiovascular 0.88 (0.75 to 1.02); noncardiovascular 1.18 (0.96 to 1.45); noncardiovascular after reclassification 1.10 (0.92 to 1.33)." loading="lazy"><figcaption>Figure 1. Hazard ratios for the invasive strategy by cause of death. The last row reclassifies the 98 deaths of unknown cause, which the main analysis counts as cardiovascular.</figcaption></figure>
strengths: |-
  - Randomized comparison with 5,179 patients and 1,071 deaths, 289 of them in the original trial phase.
  - 3.7% (191/5,179) censored early. 36 of the 37 countries contributed follow-up.
  - Competing risks handled with cause-specific and Fine-Gray models, plus RMST and Bayesian analysis.
  - Public SAP with version history. Sensitivity analysis for the 98 deaths of unknown cause.
  - The authors report the unfavorable findings: excess noncardiovascular death and a low Bayesian probability of benefit.
  - Events, numbers at risk and confidence intervals reported. The numbers I recomputed match the paper.
problems: |-
  - **No outcome hierarchy.** The SAP lists three outcomes and names no primary. The power calculation targets 10-year cardiovascular death (68% power for 2.25 percentage points). The headline of the paper is all-cause death.
  - **SAP finalized after unblinded review.** SAP v1.2 (19 Apr 2026) postdates the annual unblinded reviews by the OSMB.
  - **Cause of death.** After June 2019, cause of death was site-reported and not adjudicated. The 98 deaths of unknown cause are counted as cardiovascular. With reclassification, the noncardiovascular HR falls from 1.18 to 1.10 (0.92 to 1.33). The split between cardiovascular and noncardiovascular death is hypothesis-generating.

  <figure><img src="/images/avaliacoes/ischemia-extend/obitos-por-causa.en.svg" width="680" height="194" alt="Deaths with the invasive strategy: 308 cardiovascular, 193 noncardiovascular, 17 unclassified, total 518. Conservative: 364, 166 and 23, total 553." loading="lazy"><figcaption>Figure 2. Deaths by cause in each arm. The invasive strategy had 56 fewer cardiovascular deaths and 27 more noncardiovascular deaths.</figcaption></figure>

  - **Diluted contrast.** In the conservative arm, 26% were revascularized during the trial phase. Later procedures were not collected. The study compares initial strategies.
  - **Bayesian analysis at a reference profile.** The Bayesian absolute differences are computed for a fixed profile: male, no diabetes, covariates at the mean. The probability of a benefit >1 percentage point is 18.4% at 9 years. At 11 years it is 35.4%, a figure that appears only in eTable 7A. The prior sensitivity and imputation planned in the SAP are not reported.
  - **Cardiovascular benefit in ≥2-vessel disease.** The claim rests on an interaction with a nominal P <0.05, in the CCTA subset (3,913/5,179), with no multiplicity control. The paper has 3 outcomes, 12 time points and about 14 subgroups.
  - **Scope.** Left main disease, EF <35% and unacceptable angina were excluded. 77% of patients were men.
opinion: |-
  The main conclusion holds. Over a median of 9 years, routine invasive management did not lower all-cause death: 25.8% vs 26.9% at 11 years, HR 0.97 (0.86 to 1.09). The difference in mean survival was 14 days.

  The invasive strategy had fewer cardiovascular deaths (HR 0.88) and more noncardiovascular deaths (HR 1.18), with a similar net result. That split is exploratory. The cardiovascular benefit in ≥2-vessel disease is not supported by the data presented.

  In patients with moderate or severe ischemia, no left main disease and EF ≥35%, starting with medical therapy gave survival similar to starting with catheterization. The choice depends on angina and patient preference, through shared decision-making.

  In your practice, does an abnormal ischemia test still lead straight to the cath lab?
tags:
  - dac-cronica
  - competing-risks
  - bayesian
  - rmst
cover: ''
draft: false
---
