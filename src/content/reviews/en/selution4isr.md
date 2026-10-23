---
title: "SELUTION4ISR: sirolimus-eluting balloon versus DES or balloon angioplasty for in-stent restenosis"
date: 2026-08-03
lang: en
translationKey: selution4isr
description: "SELUTION4ISR met its primary endpoint against a blended control but failed the comparison with DES in single-layer restenosis."
reference: "Cutlip DE, Mehran R, Sharma S, Doros G, Jefferson B, Stefanini G, et al. Sirolimus-Eluting Balloon vs Repeat Drug-Eluting Stent or Balloon Angioplasty for Coronary In-Stent Restenosis. J Am Coll Cardiol. 2026;88:62-72."
doi: 10.1016/j.jacc.2026.03.021
design: Single-blind Bayesian noninferiority randomized trial (48 sites, 7 countries; NCT04280029)
n: 418
tags: [dcb, in-stent-restenosis, bayesian]
draft: false
summary: |
  SELUTION4ISR randomized 418 of 1508 screened patients to a sirolimus drug-eluting balloon (DEB) or a "usual care" control designed to mirror NCDR 2009–2017. The control was contemporary DES (everolimus or zotarolimus) in 80% and balloon angioplasty in up to 20%. The operator chose DES or balloon before randomization. The balloon cap was reached after 176 patients; after that, randomization was DEB vs DES.

  Lesions up to 26 mm, reference diameter 2.5–2.6 mm, 78% with a single prior stent layer and 88–92% with prior DES. Randomization took place after successful predilation, a requirement that failed in 15 of 1508 screened (1%). Intracoronary imaging in 98% of both arms.

  | Analysis | DEB | Control | Difference (95% CrI) | Posterior prob. of NI |
  |---|---|---|---|---|
  | Primary, per protocol (n=390), TLF | 16.2% | 14.5% | +1.7 (−5.5 to 8.9) | 98.80% |
  | Intention to treat | | | +1.8 | 99.18% |
  | Multiple imputation | | | +1.4 | 99.1% |
  | Gated secondary: DEB vs DES in single-layer ISR | 14.2% (22/155) | 6.5% (9/138) | +7.7 (0.6 to 14.6) | 76.07% |
  | Selected control = DES | 15.3% | 7.1% | +8.1 (1.4 to 15.0) | |
  | Selected control = balloon | 23.6% | 43.6% | −23.7 (−41.4 to −1.5) | |

  P for interaction by selected control = 0.0026. The noninferiority margin was 10 percentage points, with a 97.5% threshold.

  | Component | DEB | Control |
  |---|---|---|
  | Clinically driven TLR | 12.7% | 12.4% |
  | Lesion thrombosis | 2.0% | 2.1% |
  | Periprocedural MI (SCAI) | 1.0% | 2.1% |
  | Postprocedure target vessel MI (4th universal definition) | 6.6% (13) | 3.6% (7) |
strengths: |
  - Per-protocol primary analysis, with the rationale stated: intention to treat is anticonservative in noninferiority.
  - Declared noninformative priors, and tipping-point and competing-risk sensitivity analyses.
  - Funder explicitly excluded from analysis, interpretation and writing.
  - Event committee blinded to allocation and independent core lab.
  - The 10-point margin was derived as 50% of an estimated DES-over-balloon effect of at least 20 points: an explicit M1/M2 construction.
  - The authors report how many patients failed predilation (15 of 1508), which allows the enrichment concern to be assessed.
  - The failed secondary, the interaction, the margin width and the screen failures are in the paper, several in the abstract and the conclusion.
problems: |
  - **Margin anchored on another contrast.** M1 comes from the DES vs balloon contrast, but the comparator tested is 80% DES. Against the observed control rate (14.5%), the 10-point margin allows a risk ratio of 1.69. M1 was taken as a minimum estimate: a conservative M1 should shrink the margin, not widen it.
  - **Study resolution equal to the margin.** Reconstructed from the published data, the minimum detectable effect at the design power (85%) is 10.9 points; at 80%, 10.2 points. The authors state that an upper limit below 8.9% "would have required a much larger trial."
  - **Margin sensitivity and fragility.** Against the 97.5% threshold, the trial fails at any margin of 8 points or less. At a 5-point margin the posterior probability is 81%. The fragility index is about 3 events in 390 patients. Realized power for noninferiority was 78% at a true difference of zero and 62% at the observed difference.
  - **Failed gated secondary.** In single-layer ISR, DEB vs DES had an RR of 2.18 and an NNH of about 13. This was a formal test, gated on the primary succeeding. It is not a subgroup, so multiplicity arguments do not apply.
  - **Blended comparator.** The two halves of the control gave opposite answers, with intervals excluding zero. The headline result is their arithmetic average. "Noninferior to usual care" does not describe a therapy a clinician can choose. The comparison by control is not randomized (chosen before allocation, not stratified) and the strata differ in complexity: it is exploratory, but it points the same way as the gated test.
  - **Difference concentrated in postprocedure MI.** Postprocedure target vessel MI (13 vs 7; +2.9, CI −1.5 to 7.6) accounts for almost all of the composite difference. The interval crosses zero: it generates a hypothesis, it does not establish one.
  - **Different acute result and DAPT.** The arms were identical after lesion preparation (MLD 1.9 vs 1.9 mm; DS 23.8% vs 22.8%) and diverged after device deployment (MLD 2.3 vs 2.5 mm; DS 15.6% vs 11.4%). The protocol prohibited post-DEB optimization. Recommended DAPT was 6 months after DES and 1 month after DEB or balloon, although DAPT or P2Y12 monotherapy remained high at 6 months in all groups.
opinion: |
  The trial was better conducted than the headline suggests, but the claim it supports is weaker. The failed secondary answers the question most of us have.

  The balloon arm result: 43.6% TLF at 1 year. The DEB halved it, NNT about 4. The sirolimus has a real antirestenotic effect, but smaller than that of a new DES in single-layer restenosis.

  The trial proves that, in up to 2-layer, non-complex, imaging-optimized ISR, the DEB falls within 10 points of a blend of DES (154 patients, 80%) and balloon (39, 20%) at 1 year. There was no difference in death, MI, thrombosis or bleeding. The DEB is superior to balloon angioplasty. The trial does not prove noninferiority to DES in single-layer ISR. That is consistent with RIBS IV (10% vs 18%), DAEDALUS (TLR 13.4% vs 20.3%) and with AGENT being approved on superiority to balloon, without DES-controlled data.

  The investigators did not oversell this. The phrase "first and only DEB noninferior to standard of care including 80% DES" is literally accurate and omits both findings the authors chose to lead with. Scepticism should be aimed at how the trial is cited, not at the manuscript.

  I would change my mind with the OCT and angiographic substudy (30 per group), if it provides an anatomic basis for the postprocedure MI signal. Also with 5-year data showing that avoiding a second metal layer buys back the 1-year difference. That is a lifetime-management trade-off, not a noninferiority test at 12 months, and the authors framed it that way.

  The reconstructed figures (fragility, minimum detectable effect, margin sensitivity, realized power) are mine, computed from the published aggregates and calibrated against the reported credible intervals. All other results are the paper's own.
---
