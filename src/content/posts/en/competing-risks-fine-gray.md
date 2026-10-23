---
title: "Competing risks and the Fine-Gray model"
date: 2026-10-23
lang: en
translationKey: riscos-competitivos-fine-gray
description: "What a competing risk is, why Kaplan-Meier overstates absolute risk in that setting, and how the cause-specific hazard differs from the Fine-Gray subdistribution hazard."
category: estatistica
tags: [metodos, sobrevida, riscos-competitivos, fine-gray]
draft: false
---

## Concept

A competing risk is an event that prevents the outcome of interest from being observed. The typical example is death before a non-fatal complication. For each participant, only one of the competing events can occur first.

The problem is most frequent in older populations and long follow-up, where death from other causes is common.

## Two strategies

Vittinghoff and colleagues describe two strategies:

- **Elimination:** extrapolates to a world where the competing event does not occur. Censoring does this.
- **Accommodation:** includes the competing event in the analysis as another outcome that ends observation.

Loss to follow-up is usually handled by elimination. Death is usually handled by accommodation, because projecting a population without mortality has no clinical meaning.

## Cause-specific hazard

The cause-specific hazard is the instantaneous rate of the event of interest among those who have had neither that event nor a competing one:

$$h_k(t) = \lim_{\Delta t \to 0} \frac{P(t \le T < t+\Delta t,\ \text{cause}=k \mid T \ge t)}{\Delta t}$$

In practice it is estimated with an ordinary Cox model in which competing events are censored. The cause-specific HR answers an etiologic question: does treatment change the rate of the event of interest among those at risk?

The error lies in turning this model into a probability. The 1 − Kaplan-Meier curve with death censored has a probability interpretation only if death were removable and independent of the event of interest. When a competing risk is present, that curve overstates absolute risk. It treats patients who died as if they could still have the event.

## Cumulative incidence function

The cumulative incidence function (CIF) estimates the actual probability of the event of interest by time $t$, given that the competing event removes patients from risk. It is the appropriate measure when the question concerns absolute risk.

## The Fine-Gray model

The Fine-Gray model defines a subdistribution hazard. Patients who had the competing event stay in the risk set indefinitely, as if their censoring time were infinite. The coefficient is read as an effect on that hazard, assuming proportionality on that scale.

A subdistribution HR above 1 means a higher predicted cumulative incidence at every follow-up time. The model gives absolute risk at a chosen time directly.

Properties described by Steyerberg:

- The actual risk estimate is lower than the actuarial (censoring) estimate.
- The gap grows when many competing events occur early.
- Cause-specific and subdistribution HRs diverge more when the predictor also affects the competing event.
- The two coefficients are not comparable. Each model assumes proportionality on its own scale, and both assumptions cannot hold at once.

## Common errors when reading a paper

- Presenting 1 − Kaplan-Meier as absolute risk of a non-fatal event in a high-mortality population.
- Reading the subdistribution HR as an effect on the event rate among survivors.
- Comparing a cause-specific HR from one study directly with a Fine-Gray HR from another.
- Analyzing a non-fatal outcome only among survivors when mortality differs between arms.
- Ignoring that treatment can change the rate of the competing event, which changes the interpretation.

## What to check in a trial

- Frequency of the competing event in each arm.
- Which question the model answers: etiologic (cause-specific) or absolute risk (CIF, Fine-Gray).
- Whether all-cause mortality is reported alongside the cause-specific outcome. Friedman recommends reporting all major outcome categories: all-cause mortality, cause-specific mortality and other morbid events.
- Whether the treatment effect on the competing event is shown.

## Example

In heart failure trials with a hospitalization outcome, cardiovascular or non-cardiovascular death prevents future admissions. A therapy that lowers mortality keeps more patients at risk of hospitalization. The cause-specific HR and the CIF can show different magnitudes for the same treatment.

## References

- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019. Chapter on survival outcomes and competing risks.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Chapter 6.
- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Section on competing events.
- Fine JP, Gray RJ. A proportional hazards model for the subdistribution of a competing risk. J Am Stat Assoc. 1999;94:496-509. doi: 10.1080/01621459.1999.10474144
