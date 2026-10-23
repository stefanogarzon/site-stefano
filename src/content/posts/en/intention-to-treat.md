---
title: "Intention to treat and post-randomization exclusions"
date: 2026-10-23
lang: en
translationKey: intencao-de-tratar
description: "Defines intention-to-treat analysis, explains why excluding randomized participants introduces bias, and lists what to check in a trial's methods and flow diagram."
category: estatistica
tags: [metodos, itt, vies, ensaios-clinicos]
draft: false
---

## Concept

An intention-to-treat (ITT) analysis includes every randomized participant and every protocol-defined event. Each participant is analyzed in the assigned group, regardless of what happened afterward. Regulatory guidance requires this complete accounting.

Randomization balances known and unknown prognostic factors between groups. That balance holds for the randomized set. Any later removal of participants breaks the original comparison.

## Withdrawal and exclusion

The terms differ. Exclusion usually means failure to meet entry criteria at screening, before randomization. Withdrawal means a randomized participant whose data were removed from analysis, whose follow-up was stopped, or who left the study. When reading the flow diagram, identify whether each number refers to screening failure or to removal after randomization.

## Sources of bias in post-randomization exclusions

**Nonadherence.** Adherence depends on the assigned treatment, for example through tolerability. Excluding nonadherent participants compares groups that are no longer equivalent. The size and direction of this bias cannot be estimated or corrected afterward. The Coronary Drug Project showed the problem. Five-year mortality was 15.0% among good adherers to clofibrate and 24.6% among poor adherers. The placebo arm showed the same gap: 15.1% versus 28.3%. Adherence marked prognosis, whatever the pill.

**Equal numbers, different reasons.** Withdrawing the same number of participants from each arm does not rule out bias. Reasons can differ between groups and carry different outcome risks. In practice it is impossible to prove that withdrawal was not differential. The burden of proof lies with the investigator.

**Ineligibility found later.** Clerical errors, laboratory errors, or differing diagnostic interpretation can enroll participants who did not meet the criteria. Excluding them after randomization removes part of the balance between groups. Friedman cites the Canadian Cooperative Study Group stroke trial as a historical example of this practice. In the Anturane Reinfarction Trial, the FDA challenged the post-randomization exclusion of patients judged ineligible.

**Early events.** In prevention trials, some authors exclude events that occur soon after randomization, arguing the condition was already present. The mechanism of action of most therapies is not understood well enough to support this. When used, results should be reported with and without those events.

**Crossover.** Some authors propose censoring participants when they cross over to the other treatment, as in the Detre and Peduzzi reanalysis of the VA coronary bypass surgery trial. Adjustment for baseline covariates does not remove differences between crossovers and non-crossovers. Unmeasured factors can explain those differences.

## Safeguards when withdrawals occur

When a protocol allows withdrawals, the source recommends:

- a withdrawal rule written in the protocol before the trial starts;
- decisions made without knowledge of the assigned arm, ideally by someone outside the operational team;
- decisions made early in follow-up, before the outcome occurs;
- a rule that does not depend on overall study results.

If investigators present an analysis with exclusions, they should also present the ITT analysis. Agreement increases confidence. Disagreement means the ITT result should stand as the primary conclusion.

## Common errors when reading a paper

- Accepting the "ITT" label without checking that all randomized participants were analyzed. Many papers use the label and still exclude participants.
- Treating "modified ITT" as ITT. The source calls the term self-contradictory. The ITT label applies only when essentially all randomized participants are analyzed, or when the excluded fraction could not change the conclusion.
- Considering the per-protocol analysis more valid because it "reflects the real effect". It loses the protection of randomization.
- Concluding that withdrawals balanced across arms are harmless.

## What to check in a trial

1. Number randomized and number analyzed per arm for the primary outcome.
2. Reason for each exclusion and when it occurred (before or after randomization).
3. Exact definition of the analysis population in the methods.
4. If an analysis with exclusions is reported, whether the ITT analysis is also shown and whether they agree.
5. Whether the withdrawal rule was in the protocol and applied blind to assignment.

In noninferiority trials the logic changes: ITT tends to favor a noninferiority conclusion. That point is covered in the text on noninferiority.

## References

- Friedman LM, Furberg CD, DeMets DL, Reboussin DM, Granger CB. *Fundamentals of Clinical Trials*. 5th ed. Springer; 2015. Chapters on analysis, withdrawals, and adherence.
- Peto R, Pike MC, Armitage P, et al. Design and analysis of randomized clinical trials requiring prolonged observation of each patient. I. Introduction and design. Br J Cancer. 1976;34:585-612. doi: 10.1038/bjc.1976.220
- Coronary Drug Project Research Group. Influence of adherence to treatment and response of cholesterol on mortality in the Coronary Drug Project. N Engl J Med. 1980;303:1038-41. doi: 10.1056/NEJM198010303031804
- Canadian Cooperative Study Group. A randomized trial of aspirin and sulfinpyrazone in threatened stroke. N Engl J Med. 1978;299:53-9. doi: 10.1056/NEJM197807132990201
- Temple R, Pledger GW. The FDA's critique of the Anturane Reinfarction Trial. N Engl J Med. 1980;303:1488-92. doi: 10.1056/NEJM198012183032534
- Detre K, Peduzzi P. The problem of attributing deaths of nonadherers: the VA coronary bypass experience. Control Clin Trials. 1982;3:355-64. doi: 10.1016/0197-2456(82)90025-3
