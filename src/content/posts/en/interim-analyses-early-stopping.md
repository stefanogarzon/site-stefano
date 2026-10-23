---
title: "Interim analyses and early stopping: O'Brien-Fleming, Pocock, and Haybittle-Peto"
date: 2026-10-23
lang: en
translationKey: analises-interinas-interrupcao-precoce
description: "Why looking at trial data repeatedly inflates type I error, how the O'Brien-Fleming, Pocock, and Haybittle-Peto boundaries control it, and what to check when a trial stops early."
category: estatistica
tags: [metodos, analise-interina, monitoramento, interrupcao-precoce]
draft: false
---

## Concept

Long trials include interim analyses. An independent data monitoring committee reviews accumulating data at scheduled meetings. The aim is to stop the study if there is clear benefit, harm, or futility.

Each interim analysis is an additional test on the same outcome. If each analysis uses the 1.96 threshold (two-sided, $\alpha = 0.05$), the probability of a false-positive result at some point during the study exceeds 5%. Group sequential methods define stopping boundaries that keep the overall type I error at the nominal level.

## How it works

The trial plans $K$ analyses. At each analysis $k$, the statistic $Z_k$ is computed and compared with a boundary $c_k$. If $|Z_k| > c_k$, the trial may stop.

**Pocock.** Uses the same critical value at every analysis. With five analyses and two-sided $\alpha$ of 0.05, the critical value is about 2.413, larger than 1.96. The practical consequence: a moderately large final statistic may be judged non-significant even though it would be significant in a single test.

**O'Brien-Fleming.** The critical value falls over the course of the study:

$$c_k = c_{OBF}\sqrt{K/k}$$

With five analyses and two-sided $\alpha$ of 0.05, $c_{OBF}$ is about 2.04. Early analyses require very large values. These values can be capped (for example at 3.5) without materially changing the later boundaries. The final critical value stays close to that of a single test: about 2.05 versus 1.96 when there are fewer than ten analyses.

**Haybittle-Peto.** Uses a large fixed critical value, such as 3.0, at every interim analysis. The final analysis uses essentially the usual value. The rule is simple but does not guarantee an exact overall type I error.

**Alpha spending functions.** Lan and DeMets generalized these methods. Total alpha is distributed over the accumulated information fraction, and analyses do not need to occur at fixed dates. An O'Brien-Fleming-type function spends little alpha early. A Pocock-type function spends it sooner.

Many committees prefer conservative early boundaries. With few events, a handful of additional events can change the result substantially.

## Common errors when reading a paper

- Reading the effect estimate from a trial stopped for benefit as a precise estimate. Bassler and colleagues compared 91 trials stopped for benefit with 424 trials not stopped early on the same questions. The ratio of relative risks was 0.71 (95% CI 0.65 to 0.77). The difference was independent of a stopping rule and was largest in trials with fewer than 500 events.
- Ignoring the number of events at the time of stopping. Few events mean an imprecise estimate, even with a small $p$.
- Disregarding the boundary used and comparing the interim p-value with 0.05.
- Not checking whether the interim analyses and stopping rule were in the protocol.
- Treating secondary and safety outcomes of a stopped trial as if they had the planned power.

## What to check when reading a trial

1. The protocol defines the number of interim analyses, the information fraction of each, and the boundary method.
2. An independent committee performed the interim analyses.
3. The paper reports the boundary crossed and the value of the statistic at stopping.
4. The number of accumulated events supports a precise estimate.
5. There are separate boundaries for harm and futility, which are often asymmetric relative to the benefit boundary.
6. The observed effect is plausible given prior trials of the same intervention.

## Application in cardiology

Event-driven cardiovascular trials often use O'Brien-Fleming-type or Haybittle-Peto boundaries. These boundaries make early stopping for benefit unlikely at the start and keep a final threshold close to 0.05. When a trial stops early for benefit, the reading should take into account the boundary, the number of events, and the width of the confidence interval.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Pocock SJ. Group sequential methods in the design and analysis of clinical trials. Biometrika. 1977;64:191-9. doi: 10.1093/biomet/64.2.191
- O'Brien PC, Fleming TR. A multiple testing procedure for clinical trials. Biometrics. 1979;35:549-56. doi: 10.2307/2530245
- Haybittle JL. Repeated assessment of results in clinical trials of cancer treatment. Br J Radiol. 1971;44:793-7. doi: 10.1259/0007-1285-44-526-793
- Peto R, Pike MC, Armitage P, Breslow NE, et al. Design and analysis of randomized clinical trials requiring prolonged observation of each patient. I. Introduction and design. Br J Cancer. 1976;34:585-612. doi: 10.1038/bjc.1976.220
- Lan KKG, DeMets DL. Discrete sequential boundaries for clinical trials. Biometrika. 1983;70:659-63. doi: 10.2307/2336502
- Bassler D, Briel M, Montori VM, Lane M, et al. Stopping randomized trials early for benefit and estimation of treatment effects: systematic review and meta-regression analysis. JAMA. 2010;303:1180-7. doi: 10.1001/jama.2010.310
