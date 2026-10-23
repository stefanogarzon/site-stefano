---
title: "Recurrent events as an outcome"
date: 2026-10-23
lang: en
translationKey: eventos-recorrentes
description: "When to use the total number of events instead of time to first event, which models apply (Poisson, negative binomial, Cox extensions with frailty), and the role of death as a terminal event."
category: estatistica
tags: [metodos, sobrevida, eventos-recorrentes, dados-de-contagem]
draft: true
---

## Concept

Some events can occur more than once in the same participant. Examples: heart failure hospitalizations, transient ischemic attacks, seizures, implantable defibrillator shocks.

The conventional analysis uses time to first event. It discards later events. A patient with one hospitalization and a patient with five count the same.

A recurrent-event outcome uses event frequency. It captures differences in disease burden among participants who had at least one event.

## How it works

**Crude pooled rate.** Summing all events in a group and dividing by the number of participants is not a valid method. Friedman points out that the calculation must respect each participant's event history. A few participants with many events dominate the sum, and follow-up time varies between participants.

**Count models.** Poisson regression models the number of events with a log link and follow-up time as an offset:

$$\log E(Y_i) = \log(\text{time}_i) + \beta_0 + \beta_1 x_i$$

The exponentiated coefficient is an incidence rate ratio. Poisson assumes the variance equals the mean. In clinical data the variance usually exceeds the mean (overdispersion). This comes from unmeasured heterogeneity between patients and from correlated events within a patient.

Under overdispersion, Poisson point estimates remain consistent if the mean model is correct, but the standard errors are too small. Type I error increases. Two corrections exist:

- **Robust (sandwich) variance:** keeps the Poisson mean model and corrects the standard errors.
- **Negative binomial:** a Poisson-gamma mixture with variance $\mu + \alpha\mu^2$. The parameter $\alpha$ is estimated jointly with the coefficients.

The two approaches can diverge when the distribution is skewed or has extreme counts. The choice should be prespecified in the analysis plan.

**Cox extensions.** Repeated events in the same patient are correlated through an unobserved individual frailty. The standard Cox model ignores this dependence. Frailty models and other Cox extensions for recurrent events account for it. The Andersen-Gill model treats events as a counting process, with successive risk intervals for each patient. The Lin, Wei, Yang and Ying (LWYY) model estimates the ratio of mean event rates and uses robust variance for dependence between events in the same patient.

**Win ratio.** Pocock et al. proposed comparing pairs of patients from the two arms in order of clinical priority: first, who had cardiovascular death earlier; if that cannot be decided, who had heart failure hospitalization earlier. The win ratio is the number of treatment wins divided by the number of losses. The method gives priority to death instead of to whichever event came first. The authors illustrated it with reanalyses of EMPHASIS-HF, PARTNER B and CHARM.

## Death as a terminal event

Death ends the possibility of further events. A treatment that lowers mortality keeps patients alive and exposed to more hospitalizations. A treatment that raises mortality can reduce hospitalizations by removing patients from risk.

For this reason, an analysis of recurrent non-fatal events must be read together with mortality. Friedman recommends reporting all-cause mortality, cause-specific mortality and other morbid events. Restricting the analysis to survivors biases the result when mortality differs between arms.

## Common errors when reading a paper

- Reading a rate ratio for total events as if it were a first-event HR.
- Accepting a rate computed as total events divided by participants.
- Ignoring overdispersion and accepting confidence intervals from an uncorrected Poisson model.
- Interpreting a reduction in recurrent hospitalizations without looking at the effect on death.
- Attributing the effect to all patients when a few participants account for most events.

## What to check in a trial

- Whether the recurrent-event analysis was prespecified as primary or secondary.
- Which model was used and how overdispersion or within-patient correlation was handled.
- Whether follow-up time entered as an offset or otherwise.
- How death was incorporated: as a component of the outcome, as a terminal event or as censoring.
- Whether a table shows the distribution of event counts per participant in each arm.
- Whether the time-to-first-event result is shown alongside.

## Example

In heart failure trials, composites of cardiovascular death and total heart failure hospitalizations have been used as an alternative to first event. Reading them requires checking the three points above: model, handling of death and concentration of events.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Andersen PK, Gill RD. Cox's regression model for counting processes: a large sample study. Ann Stat. 1982;10:1100-20. doi: 10.1214/aos/1176345976
- Lin DY, Wei LJ, Yang I, Ying Z. Semiparametric regression for the mean and rate functions of recurrent events. J R Stat Soc Series B Stat Methodol. 2000;62:711-30. doi: 10.1111/1467-9868.00259
- Pocock SJ, Ariti CA, Collier TJ, Wang D. The win ratio: a new approach to the analysis of composite endpoints in clinical trials based on clinical priorities. Eur Heart J. 2012;33:176-82. doi: 10.1093/eurheartj/ehr352
