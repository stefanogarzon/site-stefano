---
title: "Allocation concealment and baseline imbalance"
date: 2026-10-23
lang: en
translationKey: ocultacao-da-alocacao
description: "Explains concealment of the randomization sequence, its empirical link to baseline imbalance, and how to interpret and adjust for differences in a trial's table 1."
category: estatistica
tags: [metodos, randomizacao, vies, covariaveis]
draft: true
---

## Concept

Allocation concealment means that those who recruit and enroll participants cannot predict the next assignment. It protects the moment of enrollment. Blinding protects the period after assignment. They are separate safeguards.

Without concealment, enrolling staff can decide, consciously or not, who enters and when. A nominally randomized trial then behaves like a non-randomized study in terms of imbalance risk.

## Empirical evidence

Chalmers and colleagues reviewed 145 reports of acute myocardial infarction treatment. They split the studies into three groups: concealed randomization (57), possibly unconcealed randomization (45), and non-random controls (43).

| Group | Imbalance in ≥ 1 prognostic variable (p < 0.05) | Case-fatality difference (p < 0.05) |
|---|---|---|
| Concealed randomization | 14.0% | 8.8% |
| Possibly unconcealed randomization | 26.7% | 24.4% |
| Non-random controls | 58.1% | 58.1% |

Imbalance was about twice as common without concealment and about four times as common without randomization. The frequency of outcome differences followed the same gradient.

## Baseline imbalance in a properly randomized trial

Randomization does not guarantee perfect balance, especially in small samples. In large trials with adequate concealment, differences in table 1 reflect chance. Significance tests of baseline differences answer a question already known: the groups came from the same random process.

The relevance of an imbalance depends on how strongly the variable predicts the outcome. A small difference in a strong predictor can matter more than a large difference in a variable without prognostic value.

## Covariate adjustment

The literature holds two positions. One restricts adjustment to covariates with clear disparity and prefers the unadjusted estimate otherwise. The other adjusts for a small set of known prognostic factors regardless of observed imbalance. Canner and Beach and Meier took part in this debate.

Including covariates strongly associated with the outcome lowers the variance of the test statistic and increases the sensitivity of the analysis. Adjustment rarely removes all influence of an imbalance.

Under either position, the covariate set for the primary adjusted analysis must be in the protocol. Adjustments chosen after seeing the data are exploratory.

Stratification can occur before randomization or at analysis. In large trials, adjustment at analysis has power similar to prior stratification and allows inclusion of factors that only proved relevant later.

## Common errors when reading a paper

- Confusing allocation concealment with blinding.
- Accepting randomization as adequate because the paper says "randomized", without a description of the mechanism.
- Using table 1 p-values to judge the quality of randomization.
- Accepting as confirmatory an analysis adjusted for covariates chosen after seeing the data.
- Ignoring imbalance in a strong predictor because the p-value was not significant.

## What to check in a trial

1. Allocation mechanism: central, web-based system, sequential opaque envelopes, or other.
2. Whether enrolling staff had access to the sequence.
3. Trial size and magnitude of baseline differences in known outcome predictors.
4. Whether adjustment covariates were prespecified.
5. Whether adjusted and unadjusted estimates agree.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapters on randomization and analysis.
- Chalmers TC, Celano P, Sacks HS, Smith H. Bias in treatment assignment in controlled clinical trials. N Engl J Med. 1983;309:1358-61. doi: 10.1056/NEJM198312013092204
- Canner PL. Covariate adjustment of treatment effects in clinical trials. Control Clin Trials. 1991;12:359-66. doi: 10.1016/0197-2456(91)90016-f
- Beach ML, Meier P. Choosing covariates in the analysis of clinical trials. Control Clin Trials. 1989;10(4 Suppl):161S-175S. doi: 10.1016/0197-2456(89)90055-x
