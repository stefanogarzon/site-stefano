---
title: "Composite outcomes: construction and interpretation"
date: 2026-10-23
lang: en
translationKey: desfechos-compostos
description: "Explains why trials use composite outcomes, how the overall result relates to each component, and what to check when reading a trial with a composite outcome."
category: estatistica
tags: [metodos, desfechos, ensaios-clinicos]
draft: true
---

## Concept

A composite outcome combines two or more kinds of events into a single response variable. Each participant contributes at most one event to the analysis. The unit of analysis is the participant, not the event. In time-to-event analyses, the first component to occur is counted.

## Reason for use

A composite raises the overall event rate compared with any single component. More events reduce the required sample size. The sample size calculation uses the combined rate. Approximately, if components do not overlap, the composite rate is the sum of component rates:

$$p_{\text{composite}} \approx p_1 + p_2 + \dots + p_k$$

In practice components overlap, because the same participant can have more than one type of event, and the observed rate falls below the sum.

A composite is also justified when components arise from the same condition or respond to the same mechanism of action. The combined result then stays clinically interpretable.

## Construction criteria

The source recommends components with:

- similar clinical importance;
- similar frequency;
- similar expected response to the treatment's mechanism.

When a less serious component is much more frequent, it dominates the event count. The overall result then reflects that component. Components of lesser clinical relevance reduce the interpretability of the composite.

## Composite and components

Each component has far fewer events than the composite. Power to detect an effect on a single component is therefore low. A nonsignificant component does not invalidate a significant composite.

Credibility depends on components pointing in the same direction. One proposed safeguard requires the most serious component, such as death, to move in the same direction as the overall result. Another restricts the primary composite to serious components and keeps milder events as secondary outcomes.

How the composite will be interpreted, and what can be claimed about each component, should be decided before the trial starts.

## Reporting problems

Cordoba and colleagues reviewed 40 randomized trials published in 2008 with a binary composite outcome. In 28 (70%), components were not of similar clinical importance; in 20 of these, death was combined with hospital admission. In 13, the composite definition changed between abstract, methods, and results. Only 24 (60%) gave reliable estimates for both the composite and its components. In 11 of 16 trials with a significant composite, the abstract conclusion implied that the effect also applied to the most important component.

## Common errors when reading a paper

- Reading a significant composite as an effect on each component, especially mortality.
- Not checking which component drives the events.
- Reading a nonsignificant component as no effect, without considering power.
- Ignoring components with effects in opposite directions.
- Comparing composites across trials that share a name but differ in definition.

## What to check in a trial

1. Definition of each component, and whether it is the same in methods, results, and supplement.
2. Number of events per component in each arm.
3. Direction of effect for each component, with attention to the most serious.
4. Whether components have comparable severity and frequency.
5. Whether the interpretation was prespecified.

## Generic cardiology example

Cardiovascular trials often use composites of cardiovascular death, myocardial infarction, and stroke, sometimes adding revascularization or hospitalization. When the mildest and most frequent component is included, reading should start with the component table before the composite curve.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapters on outcomes and reporting.
- Cordoba G, Schwartz L, Woloshin S, Bae H, et al. Definition, reporting, and interpretation of composite outcomes in clinical trials: systematic review. BMJ. 2010;341:c3920. doi: 10.1136/bmj.c3920
