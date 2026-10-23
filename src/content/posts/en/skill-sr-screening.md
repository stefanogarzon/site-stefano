---
title: "sr-screening: a Claude skill for systematic review screening"
date: 2026-10-23
lang: en
translationKey: skill-sr-screening
description: "Free Claude skill that runs a systematic review from the PICO question to the extraction table and PRISMA 2020 counts, with human approval of every exclusion."
category: computacao
tags: [claude, skills, revisao-sistematica, prisma]
draft: false
---

sr-screening is a Claude skill for systematic reviews. It covers the work between the clinical question and the data-extraction table. Code and instructions are in the [clinical-ai-skills](https://github.com/stefanogarzon/clinical-ai-skills) repository; download [sr-screening.zip](https://github.com/stefanogarzon/clinical-ai-skills/raw/master/skills/sr-screening.zip).

## Division of work

The AI reads, proposes and records. The user decides. No record is excluded without approval. Every proposed exclusion names the criterion that failed. Uncertain records are decided one by one by the user. Bulk approval is allowed only after the user has seen the exclusions grouped by reason.

The confidence the AI assigns to each proposal is self-rated (high, medium or low). The skill tells the user so and does not present it as a probability.

## Steps

1. **Question and protocol.** PICO(S), testable inclusion and exclusion criteria, and extraction fields. The skill suggests registering the protocol in PROSPERO before screening.
2. **Search strategy.** One string per database (PubMed, Embase, Cochrane), with each block explained. The user runs the searches and uploads the exports.
3. **Import and de-duplication.** nbib, RIS or CSV files. Re-importing the same file adds no duplicates.
4. **Calibration.** The user screens about 40 records blind. The skill shows where the AI proposal differs from the human decision.
5. **Title/abstract and full-text screening.** In batches, with design and outcome badges and highlighted passages.
6. **Extraction.** Every extracted value carries the page and the verbatim quote. A value absent from the text becomes `not_reported`. An unreadable value (scanned PDF, table as image) becomes `manual_extraction_required`.
7. **Export.** Extraction table (CSV/XLSX), PRISMA counts, decision log and RIS file of included studies.

## Checks done by code

Review state lives in `project.json` and changes only through a Python script (`srs.py`). The script rejects invalid input. For example, it rejects a quote taken from the article's introduction as evidence of what the study did. The AI never edits the file by hand.

Interaction uses buttons and interactive pages beside the chat. The user ticks decisions and pastes the result back, without typing lists of identifiers.

## Limits

The skill does not do meta-analysis, risk-of-bias assessment or dual independent screening. It does not run Embase or Scopus searches for the user and does not download paywalled papers. Claude plan usage limits apply.

## Install

1. Download the `.zip`.
2. In Claude: **Settings → Capabilities**, turn on *Code execution and file creation*.
3. **Settings → Capabilities → Skills → Upload skill**, choose the zip.
4. Recommended model: Sonnet.
5. Open a chat and describe the review.

At the end of each session the skill hands back the updated `project.json`. Next session, the user uploads the file to resume.

## License

Code under MIT. Skill text and documentation under CC BY 4.0.
