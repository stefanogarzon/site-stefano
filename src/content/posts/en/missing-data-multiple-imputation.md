---
title: "Missing data: MCAR, MAR, MNAR and multiple imputation"
date: 2026-10-23
lang: en
translationKey: dados-faltantes-imputacao-multipla
description: "The three missing-data mechanisms, what each one allows you to conclude, and how multiple imputation combines estimates and uncertainty."
category: estatistica
tags: [metodos, missing-data, multiple-imputation, clinical-trials]
draft: false
---

## Concept

Every method for handling missing data depends on an assumption about why the data are missing. That assumption links the unobserved values to the observed ones. Because the missing values were never measured, the assumption cannot be checked in the data themselves.

The usual classification, proposed by Rubin (1976), defines three mechanisms.

- **MCAR** (missing completely at random): the probability that a value is missing does not depend on any variable, observed or not.
- **MAR** (missing at random): the probability of missingness depends on predictors and on outcomes already observed, but not on the missing value, once the observed information is accounted for.
- **MNAR** (missing not at random): the probability of missingness depends on the missing value itself or on other unobserved quantities.

## What each mechanism allows

Under MCAR, complete-case analysis is unbiased but loses precision. MCAR is rarely realistic in longitudinal studies, because losses increase with follow-up time. An association between an observed variable and dropout, such as worse baseline severity among those who leave, is evidence against MCAR.

Under MAR or MCAR, likelihood-based analyses and multiple imputation give valid inference. Friedman et al. note that in clinical trials MAR is hard to verify and often implausible. Dropout tends to relate to the participant's health status, not only to recorded covariates.

MNAR cannot be confirmed or excluded from the observed data. The recommended response is sensitivity analysis, for example multiple imputation adapted to MNAR scenarios, pattern-mixture models or selection models.

## Single imputation and its limits

Complete-case analysis is the default in most software. It silently drops any record with a missing value. The first step is to check how many observations were excluded.

Single imputation replaces each missing value with one value: the mean, the median, the last observation carried forward (LOCF) or the baseline value carried forward. Any single imputation treats the substituted value as observed. The result is standard errors that are too small and confidence intervals that are too narrow. LOCF assumes the value stayed constant since the last visit, which fails when the variable is still changing.

## Multiple imputation

Multiple imputation follows a defined sequence:

1. specify a probabilistic model relating the missing variable to observed variables;
2. draw imputed values from that model, with random variation;
3. repeat to obtain $m$ completed datasets;
4. fit the analysis model of interest in each dataset;
5. combine estimates and standard errors.

The combined estimate is the mean of the $m$ estimates, $\bar{Q} = \frac{1}{m}\sum_{j=1}^{m} \hat{Q}_j$. Total variance adds the average within-dataset variance ($\bar{U}$) to the between-dataset variance ($B$): $T = \bar{U} + (1 + 1/m)\,B$. The $B$ term carries the uncertainty that single imputation ignores.

The hardest part is the imputation model. It should include the outcome and the variables of the main analysis. Two usual approaches are chained equations (ICE) and multivariate normal imputation.

## Common errors when reading a paper

- Complete-case analysis with no report of how many records were excluded.
- LOCF presented as conservative with no discussion of the variable's trajectory.
- Multiple imputation treated as a fix for MNAR.
- A single missing-data method presented as definitive.

## What to check in a trial

- Proportion of missing data by arm and by variable.
- Assumed mechanism and its justification.
- Primary method and sensitivity analyses under different assumptions.
- Comparison of participants with and without complete data.
- Design and conduct measures to reduce losses. Friedman et al. consider prevention more effective than analytic correction.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012.
- Rubin DB. Inference and missing data. Biometrika. 1976;63:581-92. doi: 10.1093/biomet/63.3.581
