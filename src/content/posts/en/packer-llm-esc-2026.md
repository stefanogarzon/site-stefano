---
title: "Packer's ESC 2026 talk on LLMs in clinical decisions"
date: 2026-08-30
lang: en
translationKey: packer-llm-esc-2026
description: "Milton Packer argued against commercial LLMs in clinical decision-making. The two studies he cited do not involve LLMs, and the randomized evidence locates the deficit in the physician-tool handoff."
category: computacao
tags: [ia, llm, automation-bias]
draft: false
---

At ESC Congress 2026 in Munich, Dr. Milton Packer argued against the use of current commercial large language models (LLMs) in clinical decision-making. His record in heart failure trials is why the talk deserves appraisal. I disagree with his conclusion. The slides were posted on X.

## Scope and claims of the talk

The talk covered text-generating LLMs used by physicians to make clinical decisions. The opening slide excluded proprietary AI for ECG and echocardiogram reading, documentation, insurance filings and office organisation. Five claims followed, in his words:

1. "Commercial Large Language Models Are Trained on the Lowest Quality Information"
2. "Commercial Large Language Models Cannot Read Most Papers Physicians Care About, But They Pretend They Can"
3. "Commercial LLMs Falsely Claim They Can Update With New Information"
4. "Commercial Large Language Models Cannot Weigh Evidence, Reason or Think"
5. "Commercial LLMs Do Not Seek the Truth. They Seek to Seduce You in the Shortest Possible Time"

He summarised the five as "a poorly trained person who also suffers from dementia". The analogy inverts the mechanism it describes. Dementia is the progressive loss of a function that was once present. A frozen weight set never had that function and does not decline. He closed by asking whether a copilot of that description should receive clinical decisions.

## The two cited studies

The five claims came with two citations. Neither study involves an LLM. Both were offered as evidence of a mechanism: automation bias and skill loss under decision support.

**Budzyń et al.** (Lancet Gastroenterol Hepatol 2025;10:896-903) appeared on the slide as Romańczyk et al., who is second and corresponding author. Four Polish centres introduced AI polyp detection at the end of 2021. The study compared unassisted colonoscopies in the 3 months before that date with unassisted colonoscopies in the 3 months after.

| Period | ADR without AI |
|---|---|
| Before AI introduction | 28.4% (226/795) |
| After AI introduction | 22.4% (145/648) |

Absolute difference −6.0 percentage points (95% CI −10.5 to −1.6; p=0.0089), adjusted OR 0.69 (0.53 to 0.89). Per-endoscopist analyses were not possible, so the within-operator mechanism is inferred, not measured. The design is retrospective and observational, comparing two calendar periods. The slide described it as randomised and as measuring performance after AI withdrawal. The randomisation belonged to the parent ACCEPT trial, and the comparison is before against after exposure. The authors wrote "might reduce" and "suggesting a negative effect".

**Dratsch et al.** (Radiology 2023;307:e222176) had 27 radiologists read 50 mammograms with suggestions from a purported AI system. The system was simulated.

| Reader experience | Accuracy, suggestion correct | Accuracy, suggestion wrong |
|---|---|---|
| Inexperienced | 79.7% | 19.8% |
| Moderately experienced | 81.3% | 24.8% |
| Very experienced | 82.3% | 45.5% |

There was no unaided arm. The slide emphasised the inexperienced readers. The gap appears in every experience group.

## Randomized evidence on LLMs

**Goh et al.** (JAMA Netw Open 2024;7:e2440969; NCT06157944) randomised 50 physicians to an LLM plus conventional resources or to conventional resources alone, across clinical vignettes. Median diagnostic reasoning score was 76% vs 74%, adjusted difference 2 points (95% CI −4 to 8; p=0.60). In a secondary exploratory comparison, the model alone scored 16 points higher than the control arm (95% CI 2 to 30; p=0.03). That comparison was not itself randomised.

**Healy et al.** (Diagnosis 2026, doi 10.1515/dx-2025-0176) used a within-subjects design with 22 UK physicians. LLM access followed a fixed alternating sequence, and only case order was randomised. LLM access raised scores over conventional resources, 74.3% vs 65.7% (p=0.001). Physicians using the LLM still scored 21.3 points below the model alone (p<0.001). Only 30% of case questions were put to the model.

In my reading, the model scores above physicians using conventional resources. The handoff captures none of that gain in Goh and part of it in Healy. The gap lies between the physician and the tool. Both studies used vignettes, and that limitation applies to the result in the model's favour as much as to any other.

## Claims without an anchor

The figure of more than 40,000 predatory papers a year comes without a denominator, a corpus fraction or a measure of influence on output. Training composition cannot be audited from outside the developers, so the claim cannot be tested in either direction.

Claim 5 holds that "nothing you say can move a LLM to ignore its training", and that models do not check the validity of a response. The first half is partly right. Running a model for inference does not change its training: the weights are fixed, and no prompt alters them. The context window changes what the model conditions on, and therefore the answer. Curated retrieval, harnesses and bounded scope do this deliberately. The second half is true, and it is also true of physicians. Clinical error is corrected by external structure: second reads, checklists, audit trails. Internal self-verification fails as a criterion for both.

Claim 5 also conflicts with claim 2. Claim 2 holds that models cannot read the papers physicians care about and fabricate from title and abstract. Loading the full text into the context window is the correction that claim 2 implies and claim 5 rules out. A later slide put the motion to an LLM and reported its answer in support of the argument. An instrument declared unreliable cannot then serve as testimony.

## Deskilling

The deskilling argument does not depend on model accuracy, and it needs a condition attached. Skill loss follows substitution. Clinicians stopped calculating with slide rules and stopped compounding their own drugs. I propose three conditions under which the loss is tolerable:

- the instrument is validated for the task;
- it is available at the point of need;
- its failures are visible to the operator.

AI-assisted colonoscopy has regulatory validation and point-of-care availability. Failure visibility is the condition Dratsch tests, and it is the one that fails. The unassisted operator is the check on the tool, and that check is called on after the tool has erred.

Budzyń matters for as long as unassisted work persists: equipment failure, services without the technology, cases outside the device indication. Budzyń reports one side of the ledger. The ADR of AI-assisted colonoscopy in the same centres was not presented, so the net effect on patients across both modes is unknown. Automation bias is a property of the operator and needs a countermeasure at the operator.

## What the talk establishes

Commercial LLMs used without provenance, bounded scope or audit trail are not defensible instruments of clinical decision-making. In one retrospective cohort, continuous exposure to decision support was associated with lower unassisted performance.

The talk does not establish that the tool underperforms the physician, or that the deficit lies in the model. Two studies locate the deficit in the handoff.

## Conditions for competent use

These conditions are untested against outcome. A trial of competent use would have to hold them fixed.

- Retrieval over a defined corpus that you assembled: guidelines, trials, institutional protocols. Not the open web.
- Output grounded to a source, with every citation opened and checked before it enters a decision.
- Scope declared in advance. Differential generation, dose checking and literature triage are different tasks with different failure costs.
- An audit trail: prompt, output, model version and the record of human review.
- Scheduled unassisted practice, for as long as unassisted work exists in the service. Where the tool becomes universal and permanent, unassisted performance stops being a relevant endpoint.

None of this comes from opening a consumer chatbot and expecting a precise answer, which is the workflow most of this debate assumes. Dr. Packer described that interface accurately. His conclusion goes further than the evidence he presented. A poor default interface is an argument for building a better one.
