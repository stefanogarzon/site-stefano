---
title: "Immortal time bias"
date: 2026-10-23
lang: en
translationKey: vies-tempo-imortal
description: "How immortal time bias arises when an exposure that starts during follow-up is treated as present from the start, and how time-dependent covariates and landmark analysis avoid it."
category: estatistica
tags: [metodos, sobrevida, vies, estudos-observacionais]
draft: false
---

## Concept

Immortal time bias arises when a period in which the outcome could not be observed is classified as exposed time. The result is an exposure that appears beneficial without being so.

The mechanism is simple. To be classified as exposed, the patient must survive until the exposure. The interval between the start of follow-up and the exposure is "immortal" for that group. If the interval counts as exposed time, the exposed group accumulates event-free person-time.

The bias is one case of a general problem: using information from later in follow-up to describe a patient's status at an earlier time.

## When it occurs

The risk exists whenever exposure is defined by something that happens during follow-up and is then treated as if it applied from the start. Typical structures:

- Receiving a transplant after listing.
- Starting a drug after hospital discharge.
- Completing a rehabilitation program.
- Receiving a device after a period of medical optimization.

In each, patients who die early have no time to be exposed and fall into the unexposed group. This raises apparent mortality in the unexposed and lowers it in the exposed.

Randomized trials analyzed by intention to treat do not have this bias in the primary comparison, because exposure is defined at time zero. The bias returns in secondary analyses that classify patients by something that happened after randomization, such as adherence or treatment actually received.

## How the correction works

**Time-dependent covariate.** Exposure enters the Cox model as a variable that changes value during follow-up:

$$h(t) = h_0(t)\, e^{\beta\, X(t)}$$

$X(t) = 0$ before the qualifying event and $X(t) = 1$ afterward. Each patient contributes unexposed time until exposure and exposed time from then on. The dataset must be restructured into multiple records per patient, one per interval.

A time-dependent covariate may use only information available up to the current time. Later values can never describe an earlier time.

**Landmark analysis.** A fixed point in follow-up is chosen. Only patients alive and under follow-up at that point enter the analysis. Exposure is classified by what happened up to the landmark. Patients exposed after the landmark stay in their original group.

## Common errors when reading a paper

- Groups defined by a post-baseline event ("patients who received X during the admission") with follow-up counted from admission.
- Excluding patients who died before they could be exposed without explaining the effect of that exclusion.
- Comparing responders and non-responders from the start of treatment.
- Large protective associations in observational studies of drugs started after discharge, with no description of how time to initiation was handled.

## What to check in a study

- The time zero of each group and whether it matches the time exposure is classified.
- Whether exposure was modeled as a time-dependent covariate or with a landmark.
- Whether some patients died before they could be exposed, and which group counted them.
- In trials, whether adherence or as-treated analyses handle pre-exposure time correctly.

## Example

Aurora and colleagues followed 124 children with cystic fibrosis accepted for lung transplantation. Time zero was listing. 47 received a transplant and 68 died while waiting. Transplantation entered the Cox model as a time-dependent covariate. The adjusted HR for transplantation was 0.31 (95% CI 0.13 to 0.72). Vittinghoff and colleagues use the study as an example of this exposure structure.

Suissa quantified the bias in pharmacoepidemiologic cohorts. The bias in the rate ratio grows in proportion to the duration of immortal time and is larger when the hazard of the outcome decreases over time.

## References

- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Chapter 6, time-dependent covariates.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019. Section on landmarking.
- Suissa S. Immortal time bias in pharmaco-epidemiology. Am J Epidemiol. 2008;167:492-9. doi: 10.1093/aje/kwm324
- Aurora P, Whitehead B, Wade A, Bowyer J, et al. Lung transplantation and life extension in children with cystic fibrosis. Lancet. 1999;354:1591-3. doi: 10.1016/s0140-6736(99)03031-7
