---
translationKey: switch-swedeheart
title: 'SWITCH-SWEDEHEART: prasugrel versus ticagrelor as the default in acute coronary syndromes'
date: 2026-08-29
lang: en
description: A default prasugrel policy did not reduce death, MI or stroke at 1 year, but the neutral result depends on a primary model changed after follow-up ended.
reference: Omerovic E, Koul S, Andersson J, Pontén J, Björklund F, Kastberg R, et al. Prasugrel versus Ticagrelor in Acute Coronary Syndromes. N Engl J Med. 2026;395:1911-20.
doi: 10.1056/NEJMoa2609057
design: Registry-based, open-label, stepped-wedge cluster-randomized trial (Sweden; 7 regions in 3 clusters; NCT05183178)
'n': 17095
summary: |-
  SWITCH-SWEDEHEART switched the default P2Y12 inhibitor from ticagrelor to prasugrel in 7 Swedish regions, grouped into 3 clusters, in a randomized order across four 9-month periods between 2021 and 2024. It enrolled 17,095 patients with acute coronary syndrome treated with PCI. Outcomes came from national registries.

  The primary endpoint, death, MI or stroke at 1 year, occurred in 11.1% under the prasugrel policy and 11.8% under the ticagrelor policy (adjusted OR 0.90; 95% CI 0.77 to 1.06; P = 0.22). The authors conclude that ischemic risk was not lower. Deaths were 60.6% of patients with an event (1,188 of 1,961).

  | Outcome | Result |
  |---|---|
  | Primary composite, SAP 2.0 model | OR 0.90 (0.77 to 1.06) |
  | Primary composite, SAP 1.0 model | OR 0.82 (0.70 to 0.96) |
  | Bleeding, adjusted | OR 0.80 (0.64 to 0.99) |
  | Bleeding, crude | 4.2% vs 4.4%; OR 0.96 |
strengths: |-
  - 17,095 real-world patients with complete follow-up through national registries.
  - A service-policy question, the one that matters to whoever sets a network's default.
  - A single primary endpoint defined in protocol 2.0 (Jan 1, 2022), with death as its main component.
problems: |-
  - **Primary model changed after follow-up.** SAP 1.0 (Feb 7, 2025) specified categorical time (OR 0.82; 0.70 to 0.96; P ≈ 0.014, recalculated). SAP 2.0 (Dec 16, 2025), written after follow-up ended on Aug 31, 2025, moved to a continuous spline (OR 0.90; 0.77 to 1.06). The change is defensible and moved toward the null, but the neutral result depends on it. Both models side by side, and a statement that outcomes had not been seen, are missing.
  - **Three clusters and confounded time.** There are 6 possible crossover orders, so the smallest attainable randomization P is 0.17. The P = 0.22 comes from a z test in a 3-cluster model. An exploratory reanalysis of the Table S8 cells, without covariates and with 5 degrees of freedom, gives OR 0.94 (0.72 to 1.23). Intracoronary imaging (18.1% vs 13.7%) and cangrelor (9.4% vs 4.6%) rose together with the policy.
  - **Exposure contrast and reading the CI.** At discharge, the prasugrel policy dispensed prasugrel to 63.3% vs 0.6%, ticagrelor to 9.9% vs 77.4% and clopidogrel to 26.7% vs 22.0%. The CI excludes the planned reduction (OR 0.73) but spans −2.5 to +0.6 percentage points on a risk of 11.8%. The as-treated analyses planned in SAP 2.0 are not reported, so the attenuation by adherence the authors invoke is untested.
  - **Bleeding: adjusted 0.80 versus crude 0.96.** The adjusted figure comes from the spline-time model. The endpoint is an unadjudicated ICD-10 code, one of 7 outcomes without multiplicity control. It is exploratory.
  - **Numbers that do not reconcile and no absolute measure.** Table 2 sums 848 and 1,113 primary events; Table S8 sums 819 and 1,112. The absolute difference with CI, planned in SAP 2.0, is in neither the article nor the appendix.
opinion: |-
  The question is good and follow-up is complete, but the conclusion depends on the model.

  Shown: under the SAP 2.0 model, a default prasugrel policy does not reduce the 1-year composite by the planned magnitude. Not shown: absence of a smaller benefit, equivalence of the drugs, less bleeding with prasugrel, and subgroup effects.

  To me, this is a so-so paper. Prasugrel as the default did not reduce ischemic events, and nobody showed it is equal to ticagrelor.
tags:
  - laao-antitrombotico
  - dapt
  - sca
cover: ''
draft: false
---
