---
title: "Interpreting the p-value and the confidence interval"
date: 2026-10-23
lang: en
translationKey: valor-de-p-intervalo-de-confianca
description: "What the p-value and the confidence interval tell about a trial result, how the two relate, and the most frequent misreadings."
category: estatistica
tags: [metodos, valor-de-p, intervalo-de-confianca, inferencia]
draft: false
---

## Concept

The **p-value** is the probability of observing a difference equal to or larger than the one found, if the null hypothesis is true. It measures statistical uncertainty about the result. It does not measure effect size or clinical relevance.

The **confidence interval** (CI) combines the point estimate and its precision. A 95% CI is built by a procedure that, repeated over many samples, contains the true value in 95% of them. The width of the interval shows precision: a narrow interval indicates a precise estimate, a wide interval indicates uncertainty.

## How it works

For a between-group difference $d$ with standard error $SE$:

$$CI_{95\%} = d \pm 1.96 \times SE$$

The multiplier 1.96 is the same critical value as the two-sided test at $\alpha = 0.05$. For this reason the two tools are equivalent for decision purposes:

- If the 95% CI excludes the null value, $p < 0.05$ in the two-sided test.
- If the CI includes the null value, $p \geq 0.05$.

The null value is 0 for differences and 1 for ratios (relative risk, odds ratio, hazard ratio). For ratios, the interval is computed on the log scale.

The CI adds what the p-value leaves out: the range of effects compatible with the data. With the interval, each reader can judge whether the effect is clinically relevant without relying only on whether a threshold was crossed.

## Common errors when reading a paper

- **Reading the p-value as the probability that the null hypothesis is true.** The p-value is calculated assuming the null hypothesis is true.
- **Equating statistical significance with clinical importance.** In a large trial, a clinically trivial difference can have a very small $p$.
- **Reading $p \geq 0.05$ as proof of no effect.** A CI that includes the null may also include clinically relevant effects. A small study may fail to detect a true effect.
- **Comparing p-values across studies or subgroups.** One subgroup with $p = 0.03$ and another with $p = 0.20$ do not show different effects. The comparison requires an interaction test.
- **Ignoring the width of the interval.** Two studies with the same $p$ can have very different precision.

## What to check when reading a trial

1. The main result reports point estimate, CI, and p-value together.
2. The CI is narrow enough to guide a decision. Both limits would lead to the same course of action.
3. For a neutral result, the CI excludes the smallest effect considered clinically relevant. If it does not, the study is inconclusive.
4. For a positive result, the CI limit closest to the null still represents a clinically relevant effect.
5. The p-value refers to a prespecified comparison. P-values from uncorrected multiple comparisons carry different weight.

## Using the CI to compare studies

Confidence intervals allow an assessment of whether results from different trials are compatible. Two studies with overlapping intervals in the same direction point to a consistent effect, even if only one has $p < 0.05$.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Rothman KJ. A show of confidence. N Engl J Med. 1978;299:1362-3. doi: 10.1056/NEJM197812142992410
