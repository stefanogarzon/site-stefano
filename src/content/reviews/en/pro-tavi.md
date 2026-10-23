---
title: "PRO-TAVI: deferring PCI in patients undergoing TAVI"
date: 2026-04-15
lang: en
translationKey: pro-tavi
description: "In PRO-TAVI, noninferiority of PCI deferral came from less bleeding; for ischemic events, the trial cannot exclude an increase of up to 71%."
reference: "Delewi R, Aarts HM, Broeze GM, Hemelrijk KI, van Ginkel DJ, Versteeg GAA, et al. Deferral of percutaneous coronary intervention in patients undergoing transcatheter aortic valve implantation (PRO-TAVI): an investigator-initiated, multicentre, open-label, non-inferiority, randomised controlled trial. Lancet. 2026;407(10537):1429-1438."
doi: 10.1016/S0140-6736(26)00308-9
design: Investigator-initiated open-label randomized noninferiority trial (12 centers, the Netherlands; NCT05078619)
n: 466
tags: [tavi-valvar, pci, noninferiority]
draft: false
summary: |
  PRO-TAVI randomized 466 patients with coronary artery disease undergoing TAVI to PCI deferral or routine PCI before TAVI. Median age 81 years, 36% women, median SYNTAX 10, no left main disease.

  The 1-year primary endpoint combined all-cause death, MI, stroke and major bleeding, with an 11 percentage point noninferiority margin. It occurred in 24% with deferral and 26% with PCI: difference −1.7% (95% CI −9.5 to 6.2), HR 0.89, p = 0.0008 for noninferiority and p = 0.68 for superiority.

  | Component | Deferral | PCI |
  |---|---|---|
  | Major bleeding | 6% | 15% |
  | Death | 12% | 11% |
  | MI | 6% | 5% |
  | Stroke | 6% | 4% |
  | Death, MI or stroke (prespecified secondary) | 21% | 16% |

  Major bleeding: HR 0.39. Ischemic composite: HR 1.28 (0.84 to 1.96), difference +4.3% (−2.7 to +11.4). Win ratio 1.04 (0.72 to 1.49). 11% of the deferral group underwent PCI during follow-up, without major complications.
strengths: |
  - Investigator-initiated multicenter randomized trial with a prespecified primary endpoint.
  - The ischemic composite was a prespecified secondary endpoint.
  - The authors write that noninferiority "should not be interpreted as ischaemic equivalence", and flag the wide margin and the higher-than-expected bleeding rate.
  - Long-term follow-up is ongoing.
problems: |
  - **Noninferiority obtained through bleeding.** Major bleeding fell from 15% to 6%, as expected without PCI and DAPT. Every ischemic component was numerically worse with deferral, none significantly. Bleeding matters and was prespecified. But the conclusion is that deferral trades less bleeding for more ischemic uncertainty.
  - **Wide margin.** At the planned 15% event rate, 11 points accept up to a 73% relative increase ($(15+11)/15$, RR 1.73). At the observed 25%, they accept 44% (RR 1.44).
  - **Ischemic composite outside the margin.** The upper bound of the difference (+11.4 points) exceeds the trial's own 11-point margin. With 16% in the PCI group, deferral could reach 27.4%: an RR of 1.71 is not excluded. At the point estimate, RR 1.31; at the lower bound, 0.83. There were only 86 ischemic events.
  - **Sample size built on wrong rates.** Planned: 15% events and 1–2% bleeding. Observed: 25% and 6–15%. More events narrow the CI and make it easier to stay within the margin, and the excess came from the component that favors deferral by design.
  - **Proportional hazards violated.** Acknowledged in the Table 3 footnote. Bleeding clusters early and ischemic events accumulate later. The HR of 0.89 averages over a non-proportional timeline; RMST or a landmark analysis would fit better. The win ratio, which ranks death above bleeding, moves the point estimate to 1.04.
opinion: |
  PRO-TAVI shows that in selected patients with low-complexity coronary disease (median SYNTAX 10), without left main disease, deferring PCI is a viable strategy. It reduces bleeding and allows later revascularization if needed.

  The trial does not show ischemic equivalence. The data fit a 31% increase in death, MI or stroke at the point estimate and up to 71% at the CI bound. It does not address complex coronary disease, long-term outcomes or younger patients.

  To me, the problem is how the headline travels: "deferral is noninferior" becomes "PCI is unnecessary". Still missing are long-term follow-up, an individual-patient meta-analysis of ACTIVATION, NOTION-3 and PRO-TAVI by coronary complexity, and a trial with a purely ischemic primary endpoint and mandatory physiological assessment.

  In practice, I defer selectively. For low SYNTAX, high bleeding risk and reliable follow-up, deferral is a legitimate strategy. For proximal LAD disease, reduced LVEF and life expectancy beyond 1 year, the ischemic signal in this trial calls for caution.
---
