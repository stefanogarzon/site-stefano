---
title: "Subgroup analysis: prespecification, interaction tests, and replication"
date: 2026-10-23
lang: en
translationKey: subgrupos
description: "Explains how to interpret subgroup analyses in randomized trials: interaction tests, multiplicity, power, prespecification, and failure to replicate."
category: estatistica
tags: [metodos, subgrupos, interacao, multiplicidade]
draft: true
---

## Concept

Subgroup analysis splits participants by baseline characteristics and checks whether the treatment effect differs across groups. It can support the overall result or generate hypotheses about a specific group. Subgroup findings are often overstated or reported confusingly.

There are two types of treatment-covariate interaction. In a quantitative interaction, the size of the benefit varies but the same treatment is favored at all levels. In a qualitative interaction, the treatment benefits at some levels and harms at others.

## Interaction test

The relevant question is whether the effect differs between subgroups. An interaction test answers it with a single statistic. Testing the effect separately within each subgroup answers a different question: whether the effect at each level differs from zero.

In a regression model, the interaction is the coefficient of the product of treatment and subgroup:

$$g(Y) = \beta_0 + \beta_1 T + \beta_2 S + \beta_3 (T \times S)$$

The test evaluates $\beta_3$. One subgroup can reach significance and another not simply because of different sample sizes. That pattern does not indicate a different effect.

## Multiplicity

The more subgroups examined, the higher the probability of at least one false positive. Bonferroni-type corrections control that rate. Another option is to state how many false positives would be expected among the reported p-values. Correction does not prevent overinterpretation of a finding.

## Power

Each subgroup has fewer participants than the trial. Power to detect an effect or an interaction is lower. Smaller subgroups are also more prone to chance baseline imbalance, which can create or mask an apparent effect. For this reason, the overall trial result usually estimates the effect within a subgroup better than the subgroup's own estimate. Subgroup confidence intervals indicate consistency in an exploratory way.

## Prespecification

Subgroups should be defined in the protocol, by baseline variables, with biological rationale and an analysis plan. Subgroups tied to stratification variables of the randomization can be considered anticipated. Persistent post-trial exploration almost always finds some suggestive subgroup, even with an inert treatment. Post hoc findings generate hypotheses for independent trials.

Subgroups defined by a shared outcome, or by any variable measured after randomization, do not preserve the randomized comparison. The correct approach is to redefine the grouping by baseline data within each arm.

Biological plausibility is not enough. Subgroup effects with a plausible explanation also fail to replicate.

Lee and colleagues randomly split 1,073 medically treated coronary patients into two groups, with no intervention. There was no overall survival difference. In a subgroup of 397 patients with three-vessel disease and abnormal ventricular contraction, survival differed significantly between groups. Multivariable adjustment attributed the difference to small imbalances in several prognostic factors.

## Non-replication

A subgroup finding gains credibility when the effect reappears in independent studies or in most centers of a multicenter trial. Different subgroup definitions across studies make this confirmation harder.

PRAISE tested amlodipine in 1,153 patients with severe heart failure and ejection fraction below 30%. The overall effect on death was not significant (16% reduction; p=0.07). In the prespecified nonischemic cardiomyopathy subgroup, death fell by 46% (p<0.001); in the ischemic subgroup, there was no difference. PRAISE-2 randomized 1,654 patients with nonischemic cardiomyopathy only. There were 278 deaths with amlodipine and 262 with placebo (HR 1.09; 95% CI 0.92 to 1.29). Combining the nonischemic patients from both trials, the HR was 0.97 (95% CI 0.83 to 1.13).

## Common errors when reading a paper

- Concluding that the effect differs because one subgroup was significant and another was not.
- Highlighting the subgroup with the largest difference without considering the number of comparisons.
- Treating a post hoc finding as confirmatory.
- Accepting biological plausibility as proof.
- Reading a forest plot without the interaction p-value.

## What to check in a trial

1. Whether subgroups were in the protocol and how many were analyzed.
2. Interaction p-value for each variable.
3. Whether the variables were baseline variables.
4. Whether the interaction is quantitative or qualitative.
5. Whether the finding recurs in other trials or across centers.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapters on subgroups and multiplicity.
- Steyerberg EW. *Clinical Prediction Models*. 2nd ed. Springer; 2019. Section on subgroup treatment effects.
- Byar DP. Assessing apparent treatment--covariate interactions in randomized clinical trials. Stat Med. 1985;4:255-63. doi: 10.1002/sim.4780040304
- Gail M, Simon R. Testing for qualitative interactions between treatment effects and patient subsets. Biometrics. 1985;41:361-72. doi: 10.2307/2530862
- Lee KL, McNeer JF, Starmer CF, Harris PJ, et al. Clinical judgment and statistics. Lessons from a simulated randomized trial in coronary artery disease. Circulation. 1980;61:508-15. doi: 10.1161/01.cir.61.3.508
- Packer M, O'Connor CM, Ghali JK, Pressler ML, et al. Effect of amlodipine on morbidity and mortality in severe chronic heart failure. N Engl J Med. 1996;335:1107-14. doi: 10.1056/NEJM199610103351504
- Packer M, Carson P, Elkayam U, Konstam MA, et al. Effect of amlodipine on the survival of patients with severe chronic heart failure due to a nonischemic cardiomyopathy: results of the PRAISE-2 study. JACC Heart Fail. 2013;1:308-14. doi: 10.1016/j.jchf.2013.04.004
