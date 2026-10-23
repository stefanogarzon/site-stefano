---
title: "Crossover, factorial, withdrawal and cluster designs"
date: 2026-10-23
lang: en
translationKey: desenhos-alternativos-ensaio
description: "Explains the variations on the parallel trial: crossover, factorial, withdrawal and group allocation, with the assumptions of each and what they require of the reader."
category: pesquisa
tags: [pesquisa-clinica, desenho-de-estudo, randomizacao, tamanho-amostral]
draft: false
---

## Concept

Most trials use a parallel design: each participant is allocated to one group and followed in it. Four variations change the unit of comparison or the number of questions. Each gains efficiency or feasibility at the cost of an assumption that needs checking.

## Crossover design

Each participant receives both interventions, A and B, in successive periods. The order (AB or BA) is randomized to separate the treatment effect from trends between periods. A washout interval may separate the periods.

The advantage is reduced variability: the effect is estimated within the same person. James and colleagues estimated that 59 crossover analgesic studies would have needed 2.4 times as many participants in a parallel design.

The assumption is strong: the effect of the first period must not persist into the second (no carryover). It fails if the treatment cures the disease or alters its course. Death and irreversible complications cannot serve as outcomes. The period-by-treatment interaction test compares the means of the AB and BA groups and therefore carries the between-person variability the design meant to avoid. It has little power. The ICH E9 guideline restricts the design to settings with few losses, such as bioequivalence in healthy volunteers.

Mills and colleagues reviewed 116 crossover trials published in December 2000. Median size was 15 participants; 29% addressed carryover in the methods and 20% reported a sample size calculation.

## Withdrawal study

Participants already on a treatment are randomized to continue or stop (or reduce the dose). The design assesses duration of benefit. In the Hypertension Control Program, after four years, 39% of those who stopped antihypertensive drugs with a nutritional program remained normotensive without medication, against 5% of those who stopped without it. In FLEX, women with 5 years of alendronate randomized to placebo had more clinical vertebral fractures (5.3% vs 2.4%; RR 0.45 favoring continuation) and similar risk of non-vertebral fractures.

The limitation is selection. Only those who tolerated and appeared to benefit from treatment enter. Those with adverse events have already left. The design tends to overestimate benefit and underestimate toxicity.

## Factorial design

In a 2×2, each participant is randomized twice: to X or control and to Y or control. The effect of X compares everyone who received X (cells a + c) with those who did not (b + d). Two questions are answered with a smaller sample than two separate trials. Examples: Physicians' Health Study (aspirin and beta carotene), WHI (hormones, diet, calcium and vitamin D) and ISIS-3. ACCORD used an incomplete factorial: intensive glycemic control combined with intensive blood pressure or lipid control.

The assumption is no interaction: the effect of X does not depend on Y. Interaction is more likely when mechanisms overlap. Power to detect it is lower than for the main effects. If interaction is present, X must be assessed separately with and without Y, with less power. McAlister and colleagues found 44 factorial trials with binary outcomes; 59% tested for interaction and 66% reported data for each cell.

## Group (cluster) allocation

The randomized unit is a school, clinic, city or village. The design suits interventions delivered to a whole group and avoids contamination between individuals. In REACT, ten pairs of cities were randomized; after 18 months of community education, time from symptoms to hospital arrival did not differ between groups (P = 0.54), although emergency medical service use increased. In a stepped wedge design, clusters cross to treatment in sequence.

The unit of analysis is the group. Effective sample size is smaller than the number of individuals, and the analysis must account for within-cluster correlation.

## Common errors when reading a paper

- Accepting a crossover trial without an argument for no carryover, or with an irreversible outcome.
- Reading a non-significant carryover test as proof of absence.
- Reading the main effect of a factorial without checking interaction and cell-level results.
- Generalizing a withdrawal study result to people who never took the treatment.
- Analyzing a cluster trial as if individuals were independent.

## What to check when reading a trial

1. Crossover: washout length, plausibility of carryover, losses by period.
2. Withdrawal: entry criteria, prior duration of use, reasons for exclusion.
3. Factorial: prespecified interaction test and a table with all four cells.
4. Cluster: number of clusters, intraclass correlation coefficient and analysis method.
5. Whether the sample size accounted for the design structure.

Related topics: [power and event rate](/en/posts/power-expected-observed-event-rate/), [subgroups](/en/posts/subgroups/).

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapter 5, Basic Study Design.
- Mills EJ, Chan AW, Wu P, Vail A, Guyatt GH, Altman DG. Design, analysis, and presentation of crossover trials. Trials. 2009;10:27. doi: 10.1186/1745-6215-10-27
- Stamler R, Stamler J, Grimm R, et al. Nutritional therapy for high blood pressure. Final report of a four-year randomized controlled trial: the Hypertension Control Program. JAMA. 1987;257(11):1484-91. doi: 10.1001/jama.257.11.1484
- Black DM, Schwartz AV, Ensrud KE, et al. Effects of continuing or stopping alendronate after 5 years of treatment: the Fracture Intervention Trial Long-term Extension (FLEX): a randomized trial. JAMA. 2006;296(24):2927-38. doi: 10.1001/jama.296.24.2927
- McAlister FA, Straus SE, Sackett DL, Altman DG. Analysis and reporting of factorial trials: a systematic review. JAMA. 2003;289(19):2545-53. doi: 10.1001/jama.289.19.2545
- Luepker RV, Raczynski JM, Osganian S, et al. Effect of a community intervention on patient delay and emergency medical service use in acute coronary heart disease: the Rapid Early Action for Coronary Treatment (REACT) trial. JAMA. 2000;284(1):60-7. doi: 10.1001/jama.284.1.60
- Hussey MA, Hughes JP. Design and analysis of stepped wedge cluster randomized trials. Contemp Clin Trials. 2007;28(2):182-91. doi: 10.1016/j.cct.2006.05.007
