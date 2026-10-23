---
title: "Multiple comparisons and secondary outcomes"
date: 2026-10-23
lang: en
translationKey: multiplas-comparacoes-desfechos-secundarios
description: "How the number of tests in a trial raises the chance of a significant result by chance, and how to read secondary outcomes and subgroups with that problem in mind."
category: estatistica
tags: [metodos, multiplicidade, desfechos-secundarios, subgrupos]
draft: true
---

## Concept

Each statistical test run at $\alpha = 0.05$ has a 5% chance of being significant when there is no effect. A trial rarely runs a single test. It compares several outcomes, examines subgroups, combines outcomes into composites, and analyzes the data at more than one time point. Each additional comparison raises the chance of at least one false-positive result in the study.

Friedman and colleagues cite a review of trials published in major medical journals. The median was eight significance tests per trial. Some trials reported more than twenty. Pocock and colleagues examined 45 reports of comparative trials in the BMJ, the Lancet, and the NEJM. Abstracts tended to emphasize the endpoints with the greatest statistical significance.

## How it works

With $k$ independent tests, each at $\alpha$, the probability of at least one false positive is:

$$P = 1 - (1 - \alpha)^k$$

With 20 independent tests at 0.05, about one result is expected to be significant by chance.

Correction procedures control the overall (family-wise) type I error rate:

- **Bonferroni.** Divides $\alpha$ by the number of comparisons: $\alpha/k$. With ten comparisons at 0.05, each test needs $p < 0.005$. The method is conservative and reduces power.
- **Holm.** Orders the p-values from smallest to largest. The smallest is compared with $\alpha/k$, the next with $\alpha/(k-1)$, and so on. Testing stops at the first non-significant step. No later hypothesis can be rejected after that.
- **Hochberg.** A step-up procedure with the same goal of family-wise control.
- **Hierarchical testing.** The protocol orders outcomes by scientific priority. Each outcome is tested only if the previous one was significant.

When test statistics are correlated, as with related outcomes or overlapping subgroups, standard corrections tend to overcorrect.

The cost of correction is power. A stricter threshold requires a larger sample to detect the same effect. For this reason, sample size is usually calculated for a single primary outcome. Trials with more than one co-primary outcome need a sample size method designed for that situation.

## Common errors when reading a paper

- Treating a significant secondary outcome as confirmation when the primary outcome was neutral.
- Reading a subgroup p-value as standalone evidence of an effect in that subgroup.
- Ignoring how many tests were run and considering only those in the abstract.
- Accepting a correction procedure chosen after the data were seen. Different methods can give different conclusions on the same data.
- Adding up significance across several outcomes as if they were independent evidence.

## What to check when reading a trial

1. The primary outcome is single and was defined in the protocol before the study started.
2. The protocol or statistical analysis plan states the method for controlling multiplicity (Bonferroni, Holm, hierarchical, or other).
3. The paper reports the total number of comparisons performed, not only those presented.
4. Secondary outcomes and subgroups are labeled exploratory when there is no multiplicity control.
5. When primary and secondary outcomes disagree in direction, the authors discuss the disagreement instead of highlighting the secondary result.
6. The set of outcomes points in the same direction. Consistency across related outcomes carries more weight than a single p-value.

## Application in cardiology

Large cardiovascular trials usually have a composite primary outcome and a list of secondary outcomes: cardiovascular death, hospitalization, individual components of the composite. When the primary outcome is neutral and one component has $p < 0.05$, that finding generates a hypothesis. It does not establish benefit. One option described by Friedman is to require $p < 0.01$ for secondary outcomes or to label them explicitly as exploratory.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015.
- Pocock SJ, Hughes MD, Lee RJ. Statistical problems in the reporting of clinical trials. A survey of three medical journals. N Engl J Med. 1987;317:426-32. doi: 10.1056/NEJM198708133170706
- Miller RG. *Simultaneous Statistical Inference*. 2nd ed. Springer; 1981. doi: 10.1007/978-1-4613-8122-8
- Holm S. A simple sequentially rejective multiple test procedure. Scand J Stat. 1979;6:65-70.
- Hochberg Y. A sharper Bonferroni procedure for multiple tests of significance. Biometrika. 1988;75:800-2. doi: 10.1093/biomet/75.4.800
