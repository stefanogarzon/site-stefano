---
title: "Dichotomizing continuous predictors"
date: 2026-10-23
lang: en
translationKey: dicotomizacao-preditores-continuos
description: "What is lost when a continuous variable is split into two groups, why data-driven cutpoints distort results, and which alternatives to use."
category: estatistica
tags: [metodos, prediction-models, regression, cutpoints]
draft: false
---

## Concept

Dichotomizing means splitting a continuous variable into two groups at a cutpoint. Examples are age above or below a value, or ejection fraction above or below a threshold. The practice simplifies tables and figures. In a regression model, it changes the relationship the model represents.

## What dichotomization assumes

A dichotomized predictor assumes risk is constant on each side of the cutpoint and jumps at the threshold. Two people just below and just above the cutpoint get different risks, although they are nearly identical on the original variable. In most biological relationships, risk changes gradually across the range of the predictor.

Steyerberg shows that the step function gets risk right only near the points where it crosses the true relationship. Away from those points it misrepresents risk. The estimated pattern also depends on the distribution of the variable in the sample. If that distribution shifts, the step pattern can change considerably. Continuous coding is more stable to such shifts.

The loss of information reduces statistical power. Steyerberg describes the loss as substantial, both for dichotomization and for categorization into a few groups.

## Cutpoints chosen from the data

The problem grows when the cutpoint is chosen from the data being analyzed. Friedman et al. describe how a continuous outcome with no group difference under a standard test can appear significant or non-significant depending on where the cutpoint is placed. Moving the response threshold up or down can flip the result between significant and non-significant with no change in the data. Testing several cutpoints raises the chance of a spurious *p* < 0.05.

Searching for the "optimal" cutpoint that best separates outcomes is worse practice than dichotomizing at a prespecified value.

## Alternatives

For the final model, smooth functions represent nonlinear relationships with few extra degrees of freedom:

- a linear term, when the relationship is approximately linear on the model scale;
- a quadratic term or log transformation;
- restricted cubic splines (RCS), usually with 3 to 5 knots (2 to 4 degrees of freedom);
- fractional polynomials.

In a logistic model with a spline, the logit of risk is a sum of basis functions of $x$: $\text{logit}(p) = \beta_0 + \sum_k \beta_k f_k(x)$. There are no artificial jumps.

Grouping into a few categories remains useful at the exploratory stage, to inspect how risk varies across the predictor. Vittinghoff et al. suggest, absent a convention, cutpoints at quantiles of the distribution, to obtain groups of similar size. Categories with few observations, such as fewer than about ten, or homogeneous for the outcome should be merged with a neighbor.

For ordinal predictors, a linear-in-category term avoids the power loss of a single cutoff. It should be compared with the full categorical coding by a test of deviation from linearity.

## Common errors when reading a paper

- A cutpoint with no prior clinical justification or no report of how it was chosen.
- An "optimal" cutpoint derived from the ROC curve in the same sample and used for inference.
- A result that depends on a single threshold, with no analysis at neighboring cutpoints.
- A continuous outcome converted into "responder/non-responder" without a prespecified definition.

## What to check in a trial or study

- The cutpoint was defined before the analysis, by clinical convention or protocol.
- The result holds at nearby thresholds.
- The analysis with the continuous variable is reported.
- Prediction models use smooth functions in the final model.

## References

- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012.
