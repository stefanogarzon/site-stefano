---
title: "Selecting confounders with a DAG"
date: 2026-10-23
lang: en
translationKey: confundidores-dag
description: "How a directed acyclic graph (DAG) defines which covariates to adjust for in an observational study, and why adjusting for mediators or colliders introduces bias."
category: estatistica
tags: [metodos, confounding, observational-studies, dag]
draft: false
---

## Concept

In an observational study, the central analytic task is to rule out confounding of the association between exposure and outcome. The choice of covariates in the model determines whether that happens. A directed acyclic graph (DAG) organizes this choice around explicit causal hypotheses instead of statistical criteria applied to the sample.

A DAG represents variables as nodes and hypothesized causal relations as arrows. No sequence of arrows returns to its starting node. With the diagram drawn, the investigator identifies a minimal sufficient adjustment set. This set controls confounding without unnecessary variables, which can reduce measurement cost and improve statistical efficiency.

## Paths, backdoors and colliders

A path between exposure and outcome is any sequence of arrows connecting them, in any direction. A backdoor path starts with an arrow pointing into the exposure. These paths carry non-causal association and must be blocked.

Paths that leave the exposure and pass through mediators are part of the causal effect. They should not be blocked.

A collider is a node where two arrowheads meet on the same path, that is, a common effect of its neighbors. The blocking rules are:

- a backdoor path is blocked by adjusting for at least one non-collider node on it;
- a path containing a collider is already blocked, as long as the collider is not adjusted for;
- adjusting for a collider opens the path and creates spurious association.

If all backdoor paths are blocked, the observed association can be attributed to the hypothesized causal effect, within the limits of the diagram.

## Variables that should stay out of the model

Vittinghoff et al. list three types of covariate that should not be adjusted for: alternative measures of the outcome, alternative measures of the exposure, and hypothesized mediators. A diagnosis largely defined by the outcome measure is an example of an outcome proxy.

Collider bias also appears outside covariate adjustment. Restricting study entry by participant characteristics is equivalent to conditioning on a collider when shared causes link those characteristics to exposure and outcome. The same mechanism explains part of the bias from informative censoring or dropout. In change-score analyses, adjusting for baseline can create bias when the exposure affects a baseline value measured with error. Glymour et al. showed this in 5,726 older adults: adjusting for the baseline cognitive score substantially inflated the coefficient of education on cognitive change. In a randomized trial this adjustment is legitimate, because allocation has no arrow into the baseline measurement.

## Alternative without a DAG: backward elimination with a liberal threshold

When not all confounders can be specified, backward elimination starts from the full model and removes the variable with the largest *p* value. For confounder control, Vittinghoff et al. recommend a removal threshold around 0.2, so that real confounders are not discarded in small samples. Another rule keeps a covariate if removing it changes the exposure coefficient by more than about 10 to 15%. In simulations, Mickey and Greenland, and later Maldonado and Greenland, found that the change-in-estimate criterion worked best with a 10% cutoff, and that significance-test criteria performed acceptably only with alpha of 0.20 or higher.

Too many predictors inflate standard errors. In logistic and survival models they can also introduce bias when there are many parameters for the number of events.

## Common errors when reading a paper

- Adjustment for post-exposure variables, such as mediators, presented as "full adjustment".
- Covariates selected only by statistical significance in the sample, without causal justification.
- Sample restricted by a condition affected by exposure and outcome, with no discussion of selection bias.
- No diagram or rationale for the adjustment set.

## What to check in an observational study

- The paper shows a DAG or describes the causal hypotheses behind the adjustment.
- The adjustment set excludes mediators, colliders and outcome proxies.
- Inclusion criteria and handling of losses are discussed as possible sources of collider bias.
- Unadjusted and adjusted models are both reported.

## References

- Vittinghoff E, Glidden DV, Shiboski SC, McCulloch CE. *Regression Methods in Biostatistics: Linear, Logistic, Survival, and Repeated Measures Models*. 2nd ed. Springer; 2012.
- Pearl J. Causal diagrams for empirical research. Biometrika. 1995;82:669-88. doi: 10.1093/biomet/82.4.669
- Greenland S, Pearl J, Robins JM. Causal diagrams for epidemiologic research. Epidemiology. 1999;10:37-48. doi: 10.1097/00001648-199901000-00008
- Greenland S. Quantifying biases in causal models: classical confounding vs collider-stratification bias. Epidemiology. 2003;14:300-6. doi: 10.1097/01.ede.0000042804.12056.6c
- Glymour MM, Weuve J, Berkman LF, Kawachi I, et al. When is baseline adjustment useful in analyses of change? An example with education and cognitive change. Am J Epidemiol. 2005;162:267-78. doi: 10.1093/aje/kwi187
- Hernán MA, Hernández-Díaz S, Robins JM. A structural approach to selection bias. Epidemiology. 2004;15:615-25. doi: 10.1097/01.ede.0000135174.63482.43
- Maldonado G, Greenland S. Simulation study of confounder-selection strategies. Am J Epidemiol. 1993;138:923-36. doi: 10.1093/oxfordjournals.aje.a116813
- Mickey RM, Greenland S. The impact of confounder selection criteria on effect estimation. Am J Epidemiol. 1989;129:125-37. doi: 10.1093/oxfordjournals.aje.a115101
