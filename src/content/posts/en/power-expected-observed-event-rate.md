---
title: "Power and sample size: expected and observed event rates"
date: 2026-10-23
lang: en
translationKey: poder-taxa-de-eventos-esperada-observada
description: "How the event rate assumed at the design stage determines sample size, why the observed rate is often lower, and how that reduces a trial's power."
category: estatistica
tags: [metodos, poder, tamanho-amostral, taxa-de-eventos]
draft: false
---

## Concept

Power is the probability that a trial detects an effect of a specified size, if that effect exists. It equals $1 - \beta$, where $\beta$ is the type II error. The sample size calculation depends on four inputs: $\alpha$, desired power, control-group event rate, and expected intervention effect.

Two of these inputs are assumptions: the control event rate and the effect size. If either is optimistic, the trial has less power than stated.

## How it works

For a binary outcome, the expected rate in the intervention group is:

$$p_I = p_C\,(1 - RRR)$$

where $p_C$ is the control rate and $RRR$ is the assumed relative risk reduction. The sample size calculation must detect the absolute difference $p_C - p_I$. For the same $RRR$, a lower control rate yields a smaller absolute difference and requires a larger sample.

For time-to-event outcomes, statistical information comes mainly from the number of observed events, not the number of participants. With a low event rate and heavy censoring, enrolling more people without accruing events adds little power. For this reason many cardiovascular trials are event-driven: the study ends when it reaches a prespecified number of events.

## Why the observed rate is often lower

- **Screening effect.** Eligibility criteria exclude higher-risk people. The enrolled population has a lower event rate than the historical source.
- **Healthy volunteer effect.** People who agree to join a trial tend to be healthier than the general population.
- **Comparison with historical data.** Estimates taken from older or broader cohorts do not reflect the selected population or current background therapy.
- **Nonadherence.** Drop-out in the intervention group and drop-in in the control group dilute the difference between groups. Sample size should be adjusted for this.

The Physicians' Health Study randomized 22,071 physicians to aspirin or placebo, with cardiovascular mortality as the primary outcome. The aspirin component was stopped early. Myocardial infarction fell by 44% (RR 0.56; 95% CI 0.45 to 0.70). For cardiovascular mortality, the RR was 0.96 (95% CI 0.60 to 1.54). The authors judged that evidence inconclusive because of the small number of physicians with these events.

## Common errors when reading a paper

- Reading a neutral result as proof of no effect without comparing the observed event rate with the planned rate.
- Accepting the effect assumed in the sample size calculation without checking whether it is plausible given prior evidence.
- Judging trial size by the number of participants rather than the number of events.
- Ignoring design changes made during the study, such as broadening the composite outcome or extending follow-up, because events came in below forecast.

## What to check when reading a trial

1. The methods section reports control rate, expected effect, $\alpha$, and power.
2. The source of the assumed control rate is cited and the population is comparable.
3. The observed control-group rate is close to the planned rate.
4. The number of events reached the planned number.
5. The assumed effect is consistent with prior studies.
6. The confidence interval of a neutral result excludes clinically relevant effects. If it does not, the study is inconclusive.

## Consequence of underpowered trials

An underpowered trial can lead to abandoning a useful intervention. After a negative result, the intervention may never be tested again.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Steering Committee of the Physicians' Health Study Research Group. Final report on the aspirin component of the ongoing Physicians' Health Study. N Engl J Med. 1989;321:129-35. doi: 10.1056/NEJM198907203210301
