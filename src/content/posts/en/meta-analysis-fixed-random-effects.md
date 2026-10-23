---
title: "Meta-analysis: fixed effect, random effects, heterogeneity and publication bias"
date: 2026-10-23
lang: en
translationKey: metanalise-efeito-fixo-aleatorio
description: "How fixed-effect and random-effects models weight studies, how to interpret heterogeneity, and how study selection and publication bias affect the pooled estimate."
category: estatistica
tags: [metodos, meta-analysis, heterogeneity, publication-bias]
draft: true
---

## Concept

A meta-analysis combines the results of several studies into a single estimate. It differs from a narrative review because it attaches a *p* value to its conclusion. Friedman et al. note that this value can convey more precision than the evidence supports.

The validity of the pooled estimate depends on three factors: which studies enter, how they are weighted, and whether the studies are comparable.

## Fixed effect and random effects

The **fixed-effect** model, such as the Mantel-Haenszel method, assumes all studies estimate one true effect. Differences between studies reflect only sampling error. Each study is weighted by the inverse of its variance, $w_i = 1/v_i$. Large studies receive more weight.

The **random-effects** model, such as DerSimonian and Laird's, assumes the true effect varies across studies. The between-study variance, $\tau^2$, enters the weight:

$$w_i^* = \frac{1}{v_i + \tau^2}$$

The pooled estimate is the weighted mean $\hat{\theta} = \sum w_i \hat{\theta}_i / \sum w_i$.

When $\tau^2$ is large, weights become more similar across studies. For this reason the random-effects model can give small studies disproportionate influence. Friedman et al. state a preference for the fixed-effect model and recommend running both to check whether the conclusion depends on the weighting. There is no consensus on which model is correct.

Bayesian analysis is a third valid, less used, form of synthesis. The forest plot is the standard graphical presentation: each study's effect and confidence interval, with the pooled estimate.

## Heterogeneity

Studies differ in population, intervention, outcome and logistics. Some inconsistency between results is expected. Cochran's $Q$ statistic tests homogeneity. The power of this test depends on the number of studies. Higgins and Thompson proposed the statistic $I^2 = (Q - df)/Q$, where $df$ is the number of studies minus 1. It describes the proportion of total variation in study estimates attributable to heterogeneity, and does not depend on the number of studies or the effect metric. The authors recommend reporting it in preference to the heterogeneity test.

Friedman et al. consider examination of clinical differences between studies more informative than the formal test. Study characteristics, such as population age, treatment duration or study size, can explain part of the heterogeneity.

**Quantitative** heterogeneity is a difference in magnitude with the effect in the same direction. **Qualitative** heterogeneity occurs when some studies show benefit and others harm. With qualitative heterogeneity, a pooled estimate is not advisable, especially when it reflects a time trend in dose or population.

## Study selection and publication bias

The choice of included studies is one of the main threats to validity. The defensible approach considers all relevant studies conducted. Meta-analyses of the same question with different inclusion criteria can reach different conclusions. A prespecified protocol reduces investigator bias.

Publication bias is the tendency of neutral or negative trials to remain unpublished, or to be published late. A systematic search of a standard database can miss a relevant share of published trials. Simes compared published trials with trials registered in advance in a cancer registry. In advanced ovarian cancer, published trials showed a survival advantage for combination chemotherapy (median survival ratio 1.16; *p* = 0.02). Registered trials showed no significant difference (1.05; *p* = 0.25). The funnel plot is the usual tool to inspect asymmetry compatible with this bias. Egger et al. proposed a regression test for this asymmetry. In eight pairs of a meta-analysis and a later large trial, four were discordant, all with a larger effect in the meta-analysis; asymmetry was present in three of the four discordant pairs and in none of the concordant pairs. The test has little power when the meta-analysis includes few small trials.

Data quality also varies across trials. For this reason meta-analysis works best with simple, objective outcomes, such as all-cause mortality or major events.

## Common errors when reading a paper

- The meta-analysis *p* value treated as equivalent to that of a large, well-conducted trial.
- Model choice made after seeing the results.
- High $I^2$ reported with no exploration of sources of heterogeneity.
- A pooled estimate presented despite effects in opposite directions.
- Search restricted to published studies, with no trial registries.

## What to check in a meta-analysis

- Registered protocol and prespecified inclusion criteria.
- Search sources, including registries and unpublished data.
- Results under both fixed and random effects.
- Heterogeneity assessed clinically and statistically.
- Assessment of publication bias.
- Objective outcomes defined similarly across studies.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Cochran WG. The combination of estimates from different experiments. Biometrics. 1954;10:101-29. doi: 10.2307/3001666
- DerSimonian R, Laird N. Meta-analysis in clinical trials. Control Clin Trials. 1986;7:177-88. doi: 10.1016/0197-2456(86)90046-2
- Higgins JPT, Thompson SG. Quantifying heterogeneity in a meta-analysis. Stat Med. 2002;21:1539-58. doi: 10.1002/sim.1186
- Higgins JPT, Thompson SG, Deeks JJ, Altman DG. Measuring inconsistency in meta-analyses. BMJ. 2003;327:557-60. doi: 10.1136/bmj.327.7414.557
- Egger M, Davey Smith G, Schneider M, Minder C. Bias in meta-analysis detected by a simple, graphical test. BMJ. 1997;315:629-34. doi: 10.1136/bmj.315.7109.629
- Simes RJ. Publication bias: the case for an international registry of clinical trials. J Clin Oncol. 1986;4:1529-41. doi: 10.1200/JCO.1986.4.10.1529
- Sterling TD. Publication decisions and their possible effects on inferences drawn from tests of significance—or vice versa. J Am Stat Assoc. 1959;54:30-4. doi: 10.1080/01621459.1959.10501497
- Thompson SG. Why sources of heterogeneity in meta-analysis should be investigated. BMJ. 1994;309:1351-5. doi: 10.1136/bmj.309.6965.1351
