---
title: "Noninferiority: margin and analysis population"
date: 2026-10-23
lang: en
translationKey: nao-inferioridade-margem
description: "Explains how the noninferiority margin is set and tested, why intention-to-treat analysis favors a noninferiority conclusion, and what to check when reading this type of trial."
category: estatistica
tags: [metodos, nao-inferioridade, itt, ensaios-clinicos]
draft: false
---

## Concept

A noninferiority trial compares a new treatment with an active control of established efficacy. The aim is to rule out a loss of efficacy larger than an acceptable limit. The design is justified when the new treatment offers another advantage: lower toxicity, lower cost, simpler administration, or better quality of life.

An equivalence trial tests whether the difference lies within a range in both directions. A noninferiority trial tests one direction only. Having an active control does not make a trial noninferiority by default. The stated question defines the type.

## The margin

The margin $\delta$ is the largest tolerated loss of efficacy. It must be in the protocol, fixed before the trial starts, and justified on clinical and statistical grounds.

For an unfavorable outcome expressed as a risk ratio, the hypotheses are:

$$H_0: RR_{I/C} \geq \delta \quad \text{versus} \quad H_a: RR_{I/C} < \delta, \quad \delta > 1$$

Noninferiority is declared when the upper bound of the two-sided 95% CI (or one-sided 97.5% CI) falls below $\delta$.

The margin depends on prior trials of the control against placebo. They provide the historical effect that the margin partly preserves. The choice balances two points: the margin must be small enough to convince and large enough for a feasible sample size. Absolute margins change meaning when the observed event rate differs greatly from the rate assumed at planning. In SPORTIF V (ximelagatran versus warfarin in atrial fibrillation), the primary event rate was 1.6% per year with ximelagatran and 1.2% per year with warfarin (difference 0.45% per year; 95% CI −0.13% to 1.03%). Noninferiority was declared under the prespecified criterion (p<0.001). The reader needs to compare the absolute margin with the 1.2% per year control rate.

## Sample size

For a binary outcome, assuming equal rates in both arms ($p$), total sample size is:

$$2N = \frac{4\,p(1-p)\,(Z_\alpha + Z_\beta)^2}{\delta^2}$$

with $\delta$ on the absolute difference scale. Sample size grows with the inverse square of the margin. Halving the margin quadruples the sample size.

## Assumptions

The indirect comparison with a putative placebo rests on two assumptions that are hard to verify. The control's effect must have stayed constant over time. The current population must resemble that of the original placebo-controlled trials.

The active control must be delivered as well as in the trials that established its benefit. The outcome must be able to detect a difference between treatments (assay sensitivity). Choosing outcomes similar to those of the original placebo-controlled trials helps here.

## ITT versus per protocol

In superiority trials, intention-to-treat analysis is conservative: nonadherence dilutes the difference and makes benefit harder to show. In noninferiority trials, the same dilution brings the arms closer and favors a noninferiority conclusion. A poorly conducted trial with high nonadherence tends to "show" noninferiority.

A per-protocol analysis, restricted to adherers, better reflects the biological effect. Excluding nonadherers, however, introduces bias of unpredictable direction. Neither analysis solves the problem alone.

The source recommends designing the trial to minimize nonadherence, sizing it to keep power under expected nonadherence, and reporting both analyses. When both point to noninferiority and the margin is reasonable, the conclusion is stronger.

## Common errors when reading a paper

- Accepting the margin without looking for its justification in the control's historical effect.
- Reading noninferiority as equivalence or as superiority.
- Considering ITT analysis sufficient in a noninferiority trial.
- Not checking control adherence and concomitant medication use across arms.
- Applying an absolute margin planned for one event rate to a trial with a very different rate.

## What to check in a trial

1. Margin value, scale (absolute or relative), and justification.
2. Whether the margin was set before the trial started.
3. ITT and per-protocol results, and whether they agree.
4. Adherence in each arm and imbalance in concomitant treatments.
5. Similarity of current population and outcome to those of the control-versus-placebo trials.
6. Observed versus assumed event rate in the sample size calculation.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapters on design, sample size, and analysis of noninferiority trials.
- Makuch R, Simon R. Sample size requirements for evaluating a conservative therapy. Cancer Treat Rep. 1978;62:1037-40.
- Blackwelder WC. "Proving the null hypothesis" in clinical trials. Control Clin Trials. 1982;3:345-53. doi: 10.1016/0197-2456(82)90024-1
- Blackwelder WC, Chang MA. Sample size graphs for "proving the null hypothesis". Control Clin Trials. 1984;5:97-105. doi: 10.1016/0197-2456(84)90116-8
- Albers GW, Diener HC, Frison L, Grind M, et al. Ximelagatran vs warfarin for stroke prevention in patients with nonvalvular atrial fibrillation: a randomized trial. JAMA. 2005;293:690-8. doi: 10.1001/jama.293.6.690
