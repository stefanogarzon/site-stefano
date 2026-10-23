---
title: "Absolute and relative effect: RRR, ARR, and NNT"
date: 2026-10-23
lang: en
translationKey: efeito-absoluto-relativo-rrr-rar-nnt
description: "Definitions of relative risk reduction, absolute risk reduction, and number needed to treat, and why a relative effect alone does not tell the benefit for a patient."
category: estatistica
tags: [metodos, rrr, rar, nnt, risco-basal]
draft: false
---

## Concept

A treatment effect can be expressed on a relative or an absolute scale. Both scales describe the same data and answer different questions.

- **Relative scale.** Relative risk, odds ratio, hazard ratio, and relative risk reduction. They report the proportion of risk removed by treatment.
- **Absolute scale.** Absolute risk reduction and number needed to treat. They report how many events treatment prevents in a population with a given baseline risk.

## How it works

Let $p_C$ be the event rate in the control group and $p_I$ in the intervention group, over the same follow-up period.

$$RR = \frac{p_I}{p_C} \qquad RRR = 1 - RR = \frac{p_C - p_I}{p_C}$$

$$ARR = p_C - p_I \qquad NNT = \frac{1}{ARR}$$

The scales are linked through baseline risk:

$$ARR = p_C \times RRR$$

The same $RRR$ yields different absolute benefits depending on baseline risk. With an $RRR$ of 25%:

| Baseline risk ($p_C$) | ARR | NNT |
|---|---|---|
| 20% | 5% | 20 |
| 4% | 1% | 100 |

The numbers in the table are arithmetic and illustrate the relationship. They do not come from a trial.

The NNT only has meaning together with the follow-up period: "NNT of 20 over 3 years". It should also be paired with the number needed to harm (NNH), calculated the same way from the absolute increase in adverse events.

## Constant effect on one scale, variable on another

A treatment can have the same relative reduction in every risk stratum and very different absolute reductions across them. The same applies to the odds ratio. Homogeneity on one scale does not imply homogeneity on another. A subgroup analysis showing a constant relative effect does not tell whether the absolute benefit is the same.

This is why risk prediction models help with treatment decisions. A predicted probability is an absolute risk. An odds ratio or hazard ratio is a relative measure and does not state the patient's level of risk.

## Common errors when reading a paper

- Reporting only the $RRR$, which looks larger than the $ARR$ when baseline risk is low.
- Applying a trial's NNT to a patient whose baseline risk differs from that of the study population.
- Comparing NNTs from trials with different follow-up durations.
- Reading a hazard ratio as a cumulative relative risk at the end of follow-up.
- Concluding that benefit is equal in all subgroups because the relative effect was homogeneous.

## What to check when reading a trial

1. The paper reports event rates in both groups, not only the relative measure.
2. The period to which the absolute rate refers is explicit.
3. The $ARR$ and NNT have confidence intervals.
4. Adverse events are reported on an absolute scale, allowing the NNH to be calculated.
5. The baseline risk of the patient to be treated is comparable to that of the trial's control group.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
