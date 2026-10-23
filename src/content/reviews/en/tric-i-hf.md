---
title: "TRIC-I-HF: transcatheter tricuspid repair in heart failure"
date: 2026-09-03
lang: en
translationKey: tric-i-hf
description: "In TRIC-I-HF, heart failure hospitalization carries most of the effect, and the decision to admit was made unblinded."
reference: "Hausleiter J, Stocker TJ, Geisler T, Lurz P, Rottbauer W, Lubos E, et al. Tricuspid-Valve Intervention in Heart Failure. N Engl J Med. 2026 (published online Aug 30, 2026)."
doi: 10.1056/NEJMoa2606934
design: Open-label randomized trial, 2:1, 29 centers in Germany (NCT04634266)
n: 360
tags: [ic, tricuspid, win-ratio]
draft: false
summary: |
  TRIC-I-HF randomized 360 patients with at least severe tricuspid regurgitation and increased risk of heart failure (HF) events. Allocation was 2:1 to transcatheter repair plus medical therapy (237) or medical therapy alone (123). The trial was open label, at 29 German centers, with enrollment from March 2022 to June 2025. Mean age 80.3 years, 56.4% women.

  The first primary endpoint was a hierarchical composite at 1 year: death, HF hospitalization and a KCCQ improvement of 15 points or more. Win ratio 2.42 (95% CI 1.76 to 3.33). The second primary endpoint, death or HF hospitalization through 3 years, had HR 0.40 (0.29 to 0.55).

  | Win ratio layer | Repair wins | Medical wins | Advantage (percentage points of pairs) |
  |---|---|---|---|
  | Death | 4366 | 3166 | 4.1 |
  | HF hospitalization | 9280 | 2871 | 22.0 |
  | KCCQ | 3263 | 929 | 8.0 |
  | Total | 16,909 | 6966 | 34.1 |

  At the mortality layer, 74.2% of pairs tie. HR for HF hospitalization through 3 years: 0.35 (0.25 to 0.51). Major adverse events at 30 days: 5.9%.
strengths: |
  - Randomized, with two primary endpoints tested in sequence.
  - Selection by documented event risk, which produced enough events for clinical endpoints.
  - Competing-risk analysis for the first hospitalization (Figure S3).
problems: |
  - **Effect concentrated in hospitalization.** Of the 34.1 points of win ratio advantage, 22.0 come from HF hospitalization, 8.0 from KCCQ and 4.1 from death.
  - **No stated assessor blinding.** The protocol describes the Clinical Events Committee as independent, not as masked to allocation. The appendix does not either. The committee was created by amendment on July 18, 2024, about two years after enrollment began.
  - **Unblinded decision to admit.** Adjudication classifies an admission that already happened. The decision to admit was made by a clinician who knew whether the patient still had torrential TR. Blinding the committee would not fix this.
  - **Change of primary endpoint.** The win ratio was not the original primary endpoint. The June 3, 2023 amendment adopted the TRILUMINATE endpoint after those results were published. The original endpoint became the second primary.
  - **Crossover in the control arm.** 48 of 123 patients (39.0%) crossed over to repair. In 28 of them, the procedure took place during the admission that counted as their primary event. Crossover was allowed only after a primary event, and the device is reimbursed in Germany. Crossover patients were sicker (Table S14): NYHA III/IV 81.3% vs 66.7%, prior MI 18.8% vs 9.3%. Both primaries are time to first event, so this does not bias them. All-cause mortality and the 1-year functional and echo endpoints in the control arm are contaminated.
  - **Mortality benefit not established.** HR 0.74 (0.42 to 1.29) at 1 year. HR 0.62 (0.40 to 0.96) at 3 years, as a secondary endpoint without multiplicity adjustment. With 79 deaths and 2:1 allocation, the smallest HR detectable with 80% power is about 0.51, and the observed effect sits above it.
  - **Incomplete 3-year follow-up.** Follow-up was complete in 20.5% of eligible patients at 3 years. Five control patients were at risk at day 1095.
  - **Recurrent burden not analyzed.** Time to first event counts three admissions followed by death the same as one admission and survival.
opinion: |
  ## How I would analyze the endpoint

  Recurrent-event models alone do not work here. Andersen-Gill, LWYY and negative binomial models treat death as censoring. Patients who die stop accumulating admissions, and the arm with more deaths looks like the arm with fewer events.

  Two methods handle both processes:

  - **Ghosh-Lin** estimates the mean cumulative function with death as a competing risk. Counts freeze at death. It answers how many admissions the strategy prevents.
  - **Joint frailty** shares a random effect between the recurrent process and the terminal hazard. The parameter α measures how tightly admission and death are linked. In advanced HF, that link is why naive censoring fails.

  Mao and Lin weight death into the counting process.

  TRIC-I-HF reported competing-risk cumulative incidence only for the first admission. In a trial whose effect lies in hospitalization, the recurrent-burden analysis is missing.

  ## What the trial proves

  Repair reduces HF hospitalization in elderly patients with predominantly secondary TR, systemic congestion and documented event risk. Centers averaged 176 prior procedures. Major adverse events at 30 days: 5.9%.

  ## What the trial does not prove

  A mortality benefit. Benefit without elevated event risk. Reproducibility outside very high-volume centers. The size of the hospitalization effect, since the decision to admit was unblinded and was also the route to crossover.
---
