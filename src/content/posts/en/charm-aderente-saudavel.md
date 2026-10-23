---
title: "CHARM and the healthy adherer effect"
date: 2026-06-04
lang: en
translationKey: charm-aderente-saudavel
description: "In CHARM, good adherence to placebo reduced mortality as much as adherence to candesartan. Inverse probability weighting for time-varying adherence removes most of that association."
category: estatistica
tags: [ic, adherence, causal-inference]
draft: true
---

David Cohen recently posted about CHARM. Here I look more closely at one point of the adherence analysis.

## Placebo adherence in CHARM

The placebo arm is the most instructive part of the analysis. Good adherence to candesartan and good adherence to placebo carried almost identical mortality reductions: HR 0.66 and 0.64. Placebo has no pharmacology. The signal comes from the patient, not the pill.

## The Coronary Drug Project precedent

CHARM reproduced the Coronary Drug Project. There, placebo adherers had five-year mortality of about 15%, against 28% in non-adherers. The gap persisted at 9.4 percentage points after adjustment for 40 baseline covariates.

For three decades, this was read as proof that adherence cannot be adjusted for. The conclusion was that only intention-to-treat can be trusted. That verdict applies to the adjustment method used, not to the phenomenon.

## Adherence as a time-varying process

Adherence changes over time, and so does its confounder. The patient who is slowly deteriorating takes fewer pills and also dies. Baseline adjustment cannot reach a confounder that changes over time.

Murray and Hernán reanalyzed the same data with inverse probability weighting (IPW) for post-randomization predictors of adherence. The placebo association fell to 2.5 percentage points (95% CI −2.1 to 7.0).

## What this means

The per-protocol effect can be estimated once adherence is modeled as a time-varying process. The healthy adherer effect is real, but it is confounding. In principle, confounding can be removed.
