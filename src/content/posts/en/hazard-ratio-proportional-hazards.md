---
title: "Hazard ratio and the proportional hazards assumption"
date: 2026-10-23
lang: en
translationKey: hazard-ratio-riscos-proporcionais
description: "What the hazard ratio summarizes, what the proportional hazards assumption means, and how it is checked with the log-minus-log plot and Schoenfeld residuals."
category: estatistica
tags: [metodos, sobrevida, cox, hazard-ratio]
draft: true
---

## Concept

The hazard is the instantaneous event rate among those who have not yet had the event. The hazard ratio (HR) is the intervention-group hazard divided by the control-group hazard.

- HR = 1: the survival curves are identical.
- HR > 1: the intervention group has the higher hazard, and its curve lies below the control curve.
- HR < 1: the intervention group has the lower hazard, and its curve lies above the control curve.

The HR is the most common single-number summary for comparing two survival curves.

## How it works

The Cox model writes a participant's hazard as a baseline hazard multiplied by a factor that depends on covariates:

$$h(t \mid x) = h_0(t)\, e^{\beta x}$$

The baseline hazard $h_0(t)$ is left unspecified, which makes the model semi-parametric. The HR for one unit of $x$ is $e^{\beta}$.

The proportional hazards assumption states that the ratio of the two groups' hazards is constant over follow-up. When it holds, one number describes the effect. When it does not, the estimated HR is a weighted average of ratios that change over time and has no single interpretation.

Fitting a Cox model does not require the assumption to hold exactly. Log-rank and Cox keep reasonable performance, with some loss of power, as long as the hazards do not cross. A significant result still indicates a real difference between the curves. What is lost is a description of how that difference behaves over time. Under non-proportional hazards, the favored group can change depending on the point in follow-up.

## Checking the assumption

**Log-minus-log plot.** For a categorical predictor, plot $\log[-\log \hat S(t)]$ from Kaplan-Meier against time, by group. Under proportional hazards, the curves stay parallel, separated by a vertical distance equal to the log HR. Converging curves indicate a shrinking effect. Diverging curves indicate a growing effect. Crossing curves suggest the effect reverses.

**Scaled Schoenfeld residuals.** A smoothed (LOWESS) plot of the residuals against time estimates how the log HR changes over follow-up. A roughly flat line is compatible with the assumption. The formal test assesses the correlation between residuals and time. A positive correlation suggests a rising log HR. A negative correlation suggests a falling log HR.

The formal test has limitations:

- It best detects a linear drift in the log HR.
- A few extreme residuals can distort it.
- It is underpowered in small samples and flags trivial departures in large ones.

Graphical inspection should come before the test.

**HR by interval.** Estimate the HR in separate follow-up periods. The values should be similar if the assumption holds. Another option is to test the interaction between the predictor and log time.

## When the assumption fails

- **Stratified Cox model:** suits a categorical confounder that is not the focus. The stratification factor gets no coefficient.
- **Time-varying coefficient:** an interaction between the predictor and a function of time, entered as a time-dependent covariate. A simple version splits follow-up into a few periods and estimates a constant HR within each.

## Common errors when reading a paper

- Reading the HR as a ratio of cumulative risks. The HR compares instantaneous rates.
- Accepting a single HR when the Kaplan-Meier curves cross.
- Concluding the assumption holds because the Schoenfeld test gave p > 0.05 in a small study.
- Concluding the assumption failed from a small p in a large study without looking at the size of the departure on the plot.

## What to check in a trial

- Whether the authors report how they checked the assumption (plot, test, or both).
- Whether the Kaplan-Meier curves cross or converge.
- Whether period-specific HRs or another complementary measure are given when the assumption fails.
- Whether absolute risk at a fixed time is reported alongside the HR.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapter on survival analysis.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012. Chapter 6.
- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Schoenfeld D. Partial residuals for the proportional hazards regression model. Biometrika. 1982;69:239-41. doi: 10.1093/biomet/69.1.239
- Therneau TM, Grambsch PM. *Modeling Survival Data: Extending the Cox Model*. Springer; 2000.
