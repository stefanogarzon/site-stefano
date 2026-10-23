---
title: "Kaplan-Meier, censoring and the independent censoring assumption"
date: 2026-10-23
lang: en
translationKey: kaplan-meier-censura
description: "How the Kaplan-Meier estimator uses censored follow-up, which types of censoring exist, and why the independent censoring assumption determines whether the curve is valid."
category: estatistica
tags: [metodos, sobrevida, kaplan-meier, censura]
draft: true
---

## Concept

In time-to-event outcomes, a participant's follow-up is censored when their status after some point is unknown. Under right censoring, the true time to the event is unknown. It is only known to exceed the observed follow-up time.

The survival function $S(t)$ is the probability that a participant remains event-free up to time $t$. The Kaplan-Meier (product-limit) estimator estimates $S(t)$ from censored data.

Comparing mean follow-up time between groups, for example with a t-test, does not estimate the effect on survival. Censored times understate the true times to the event.

## How the estimator works

Kaplan-Meier multiplies the conditional probabilities of surviving each interval, given survival to the start of that interval:

$$\hat S(t) = \prod_{t_j \le t} \left(1 - \frac{d_j}{n_j}\right)$$

Here $d_j$ is the number of events at time $t_j$ and $n_j$ is the number at risk just before $t_j$. A censored participant leaves the risk set from that point on. They contribute to earlier intervals and stop contributing to later ones.

Without censoring, Kaplan-Meier equals the simple proportion of participants still event-free.

The curve is a step function. It stays flat between events and drops at each event. With more participants and more events, the steps shrink and the curve approaches a smooth line. The variance at each point is estimated with Greenwood's formula.

## Types of censoring

- **Administrative censoring:** the trial reaches a common closing date before everyone completes planned follow-up, or stops early for benefit or harm.
- **Loss to follow-up:** the participant stops attending visits. This source is distinct from administrative closure.

The distinction matters because each source has a different chance of being linked to event risk.

## The independent censoring assumption

Standard survival methods (Kaplan-Meier, log-rank, Cox) assume independent censoring. After accounting for covariates, a censored participant's future risk must equal that of similar participants who remain under observation.

Administrative censoring usually meets the assumption. Loss to follow-up often does not. The reason for leaving can be linked to prognosis. Examples from the sources:

- Sicker participants can no longer perform a functional test and drop out.
- Participants are discharged from care because their health improved.
- The protocol stops counting events a few days after treatment discontinuation ("off intervention, off study"). Discontinuation is rarely independent of health status.

When censoring depends on event risk, it is informative (dependent), and the standard estimators are biased.

Dependent censoring can rarely be confirmed directly. The information needed to test it is the information that is missing.

## Common errors when reading a paper

- Reading the tail of the curve as if it had the same precision as the start. With few participants at risk, each event produces a large step.
- Accepting the curve without checking how many participants were lost and whether loss differed between arms.
- Treating censoring after treatment discontinuation as neutral.
- Reading Kaplan-Meier as absolute risk when a competing risk, such as death from other causes, is present. A separate text covers competing risks.

## What to check in a trial

- The number-at-risk table below the curve, by arm and time.
- Proportion lost to follow-up by arm, and the reasons for censoring.
- Whether event ascertainment continued after discontinuation of assigned treatment.
- Whether the authors ran a sensitivity analysis for informative censoring, such as inverse probability of censoring weights, which correct dependent censoring when measured covariates explain it.
- Confidence intervals for estimates at fixed time points.

## Example

In APPROVe, 2586 patients with prior colorectal adenoma were randomized to rofecoxib 25 mg daily or placebo. The relative risk of thrombotic cardiovascular events was 1.92 (95% CI 1.19 to 3.11). Event counting stopped shortly after rofecoxib discontinuation. Friedman and colleagues use the case to show that relevant events can occur after discontinuation. The general lesson is to continue outcome follow-up after treatment stops.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapters on survival analysis and on issues in data analysis (loss to follow-up).
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Chapters 3 and 6.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Bresalier RS, Sandler RS, Quan H, Bolognese JA, et al. Cardiovascular events associated with rofecoxib in a colorectal adenoma chemoprevention trial. N Engl J Med. 2005;352:1092-102. doi: 10.1056/NEJMoa050493
