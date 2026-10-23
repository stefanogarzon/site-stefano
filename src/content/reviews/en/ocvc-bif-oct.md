---
title: "OCVC-BIF OCT substudy: adjunctive side branch DCB after kissing balloon"
date: 2026-08-11
lang: en
translationKey: ocvc-bif-oct
description: "The lumen volume gain with side branch DCB rests on a t-test over a skewed distribution and does not survive the nonparametric test."
reference: "Nakamura D, Ishihara T, Dohi T, Sakamoto D, Kosugi S, Kida H, et al. Drug-coated versus conventional balloons for side branch treatment in coronary bifurcation lesions: an optical coherence tomography substudy of the OCVC-BIF randomised trial. EuroIntervention. 2026;22:e820-e831."
doi: 10.4244/EIJ-D-26-00428
design: Prespecified OCT substudy of a randomized trial (Japan; jRCTs052200077)
n: 221
tags: [dcb, bifurcation, oct]
draft: false
summary: |
  OCVC-BIF randomized 299 patients with bifurcation lesions, after main vessel stenting and kissing balloon, to adjunctive side branch DCB (n=149) or no DCB (n=150). The OCT substudy included 221 patients with analysable follow-up OCT. 198 had paired lumen volume.

  The main endpoint was the change in side branch lumen volume at 9 months:

  | Outcome | DCB | No DCB | Difference (95% CI) | p |
  |---|---|---|---|---|
  | Lumen volume, mm³ (mean ± SD) | +0.14 ± 5.64 | −2.15 ± 9.51 | 2.28 (0.08 to 4.48) | 0.042 (t-test) |
  | Lumen volume, mm³ (median, IQR) | 0.45 (−3.83 to 4.00) | −0.65 (−5.00 to 2.50) | | 0.093 (Wilcoxon) |
  | Ostial lumen area, mm² | −0.15 | −0.26 | | 0.39 |
  | Minimum lumen diameter, mm | −0.04 | −0.07 | | 0.56 |
  | Uncovered strut ratio at the bifurcation, % | 0.76 | 0.71 | 0.05 (−0.38 to 0.49) | |

  Within groups, the change was +0.135 mm³ (95% CI −0.984 to 1.254; p = 0.811) with DCB and −2.149 mm³ (p = 0.028) without DCB. Baseline side branch lumen volume was about 33 mm³.
strengths: |
  - The discordance between the parametric and nonparametric analyses appears in the abstract and in the central illustration.
  - High-resolution serial OCT, with strut healing analysis in the main vessel.
  - Prespecified nonparametric sensitivity analysis.
problems: |
  - **Skewed distribution.** In the no-DCB group the mean was −2.15 mm³ and the median −0.65 mm³, with a tail reaching −50 mm³. The mean does not describe the typical patient. The Wilcoxon test gives p = 0.093. The cumulative distribution curves nearly overlap except at the extremes: a few patients carry the result. Variances differ (ratio about 2.8), but with nearly equal n (100 vs 98) this matters little.
  - **Two OCT endpoints without a hierarchy.** Change in ostial lumen area and in lumen volume were declared without alpha allocation. Ostial area was null (p = 0.39), and the ostium is where side branch restenosis occurs. With alpha split between the two endpoints (0.025), p = 0.042 does not pass.
  - **Multiple comparisons.** Tables 4 and 5 and the subgroup figure carry about 45 unadjusted comparisons. The probability of at least one false positive at alpha 0.05 is about 90%. Bonferroni over 45 tests gives alpha 0.0011.
  - **No sample size of its own.** The sample size comes from the parent trial, computed for angiographic restenosis (20% vs 7%). With about 100 per arm and a pooled SD of 7.8 mm³, the minimum detectable difference at 80% power is about 3.1 mm³. Power for the observed effect (2.28) is close to 54%. In this setting a significant result tends to overestimate the true effect (type M error).
  - **Wide interval relative to the segment.** The CI of 0.08 to 4.48 mm³ over a baseline volume of about 33 mm³ runs from 0.24% of the segment to about 7%.
  - **The difference comes from the control group.** The DCB arm did not change (+0.135 mm³; p = 0.811). The discussion refers to late lumen enlargement and positive remodelling. Inhibiting neointimal hyperplasia predicts less loss, and less loss is what the data show.
  - **Loss to follow-up.** Of 299 randomized, 198 had paired volume: 34% without the main endpoint. Complete-case analysis, with no multiple imputation and no tipping-point analysis. Sex, diabetes, prior MI and Medina class were imbalanced, with no standardized differences and no adjusted analysis. ANCOVA on baseline volume would be the conventional choice for a change score.
  - **Safety without a margin.** Safety is presented as noninferiority with no margin, no M1/M2 justification and no power calculation. The minimum detectable difference in uncovered strut ratio is about 0.62 percentage points. In relative terms, the study cannot exclude a relevant increase.
opinion: |
  In absolute terms, the upper bound of the uncovered strut difference is half a percentage point. For that reason I read the safety message as reassuring, but not demonstrated.

  There is an alternative reading. If the effect is concentrated in a tail, that fits the parent trial's binary endpoint, with angiographic side branch restenosis of 8.1% vs 18.3%. A minority phenomenon would show up both as a binary difference and as a skewed continuous difference. In that case the mean is the wrong estimand. A quantile or threshold analysis restricted to Medina X,X,1 would inform more than a t-test on the whole cohort.

  I would change my mind with a prespecified analysis of the proportion of patients losing more than a defined volume threshold, restricted to true bifurcations with ostial disease. It would also need a plain balloon arm to separate the drug effect from the extra 30 seconds of inflation the DCB arm received.
---
