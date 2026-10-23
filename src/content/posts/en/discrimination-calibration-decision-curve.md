---
title: "Discrimination, calibration and decision curves"
date: 2026-10-23
lang: en
translationKey: discriminacao-calibracao-curva-decisao
description: "The two performance properties of a prediction model, how they relate, and how net benefit assesses clinical usefulness across decision thresholds."
category: estatistica
tags: [metodos, prediction-models, calibration, net-benefit]
draft: true
---

## Concept

A prediction model estimates each patient's absolute risk of an outcome. Its performance has two components.

**Discrimination** is the ability to assign higher risk to those who will have the event than to those who will not. The usual measure is the C statistic, which for a binary outcome equals the area under the ROC curve. Survival models use a version for censored data.

**Calibration** is the agreement between predicted and observed risk. A calibrated model that predicts 20% risk for a group should observe about 20% events in that group.

## Calibration measures

Steyerberg describes a calibration hierarchy: mean, weak, moderate and strong.

- **Calibration-in-the-large**: compares mean predicted risk with observed incidence.
- **Calibration slope**: the coefficient of the linear predictor when the outcome is refit against the predictions in new data. The ideal value is 1. In the development data, the slope is 1 by construction.

Both come from the recalibration model:

$$\text{logit}(P(Y=1)) = a + b \cdot LP$$

where $LP$ is the original linear predictor. Calibration-in-the-large is tested with $LP$ as an offset. A slope $b < 1$ indicates predictions that are too extreme, typical of overfitting.

The calibration plot shows predicted against observed risk. Goodness-of-fit tests, such as Hosmer-Lemeshow, assess moderate calibration.

## How discrimination and calibration relate

Calibration-in-the-large is independent of discrimination. Changing the incidence, as in a case-control design, alters calibration-in-the-large without affecting the C statistic. The calibration slope is linked to discrimination. A slope below 1 at external validation implies lower discrimination.

A model can be well calibrated and discriminate poorly, if all predictions cluster near the average event rate. A model can discriminate well and be miscalibrated for the population where it is applied.

Some authors prioritize discrimination, because calibration could be corrected later. Steyerberg notes that this holds in retrospective research. In real-time clinical decisions, the degree of miscalibration is unknown and cannot be corrected before the decision.

## Net benefit and decision curves

Discrimination and calibration do not say whether using the model improves decisions. Net benefit addresses that question at a decision threshold $p_t$:

$$NB = \frac{TP}{n} - \frac{FP}{n} \cdot \frac{p_t}{1 - p_t}$$

$TP$ and $FP$ are true and false positives at the threshold, and $n$ is the sample size. The weight $p_t/(1-p_t)$ expresses the relative harm of a false positive against the benefit of a true positive. The threshold comes from the ratio of harms to benefits of the clinical action. Vickers and Elkin proposed the method starting from the idea that the threshold at which a patient would opt for treatment expresses how that patient weighs a false positive against a false negative.

The decision curve shows net benefit across a range of plausible thresholds. It compares the model with the "treat all" and "treat none" strategies.

The position of the threshold relative to the distribution of predicted risks matters. For a calibrated model, net benefit peaks when the threshold equals the event rate. If nearly all predictions fall on one side of the threshold, the model has no usefulness at that threshold, whatever its C statistic.

The standard net reclassification improvement (NRI) adds the change in sensitivity and in specificity. This weights events and non-events by the event rate, not by the clinical balance of harm and benefit. Steyerberg considers the standard NRI an inadequate summary of clinical usefulness.

## Common errors when reading a paper

- C statistic reported with no calibration measure.
- Calibration assessed only by Hosmer-Lemeshow, with no plot or slope.
- Apparent performance in the development data presented as expected performance.
- A new marker justified only by NRI or a small gain in the C statistic.

## What to check in a prediction study

- Internal (bootstrap) or external validation.
- Calibration-in-the-large, slope and calibration plot.
- Decision curve over a clinically plausible range of thresholds.
- Distribution of predicted risks relative to decision thresholds.

## References

- Steyerberg EW. *Clinical Prediction Models: A Practical Approach to Development, Validation, and Updating*. 2nd ed. Springer; 2019.
- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012.
- Vickers AJ, Elkin EB. Decision curve analysis: a novel method for evaluating prediction models. Med Decis Making. 2006;26:565-74. doi: 10.1177/0272989X06295361
