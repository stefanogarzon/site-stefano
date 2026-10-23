---
title: "claim-check: a Claude skill to find the evidence behind a claim"
date: 2026-10-23
lang: en
translationKey: skill-claim-check
description: "Free Claude skill that searches PubMed for the evidence behind a manuscript sentence, quotes the exact passage and keeps a per-manuscript Excel evidence table."
category: computacao
tags: [claude, skills, pubmed, escrita-cientifica]
draft: false
---

claim-check is a Claude skill for people writing or reading a manuscript. It handles one claim at a time: it searches PubMed, shows the verbatim passage that supports or contradicts the sentence, and records everything in an evidence table. Code is in the [clinical-ai-skills](https://github.com/stefanogarzon/clinical-ai-skills) repository; download [claim-check.zip](https://github.com/stefanogarzon/clinical-ai-skills/raw/master/skills/claim-check.zip).

## Two modes

**Claim.** A sentence with a direction of effect, such as "exercise training reduces hospitalisation in HFpEF". Each article gets a verdict: supports, contradicts or partial. Contradicting articles are listed first.

**Question.** An open question, such as "what is known about frailty in TAVI patients?". The skill shows short summaries for the user to pick from. It then fetches the full text and exact passages of the chosen articles.

## Rules

- No reference, number or quote goes in without a PMID or DOI and a verbatim passage checked by code against the article text.
- Contradicting evidence is shown as prominently as supporting evidence.
- "Not found" means "not found with this search". The search used is recorded.
- Primary sources are preferred. When a passage comes from a review or guideline, the skill names the original study and offers to look it up.
- A passage from an article's introduction does not count as its finding. The script rejects it.
- Only the user marks a row as verified.
- Searches use only PubMed, PubMed Central and, if the connector is on, ClinicalTrials.gov.

## Evidence table

Each manuscript has one Excel file. Columns: claim, verdict, finding, verbatim passage, design and N, Vancouver reference, PMID/DOI, search used, verified and notes. A second sheet, "Seen, not added", keeps contradicting or partial evidence the user saw and chose not to cite. Hidden sheets keep the source text, so passages can be re-checked after edits in Excel.

The skill exports a Vancouver reference list and a DOI block for Zotero (*Add Item by Identifier*).

## Limits

The skill runs a targeted search and does not replace a systematic review. It uses PubMed only. AI-generated summaries are labelled as such. The verbatim check and the user's approval carry the result.

## Install

1. Download the `.zip`.
2. In Claude: **Settings → Capabilities**, turn on *Code execution and file creation*.
3. **Settings → Capabilities → Skills → Upload skill**, choose the zip.
4. Turn on the **PubMed** connector (Settings → Connectors). Recommended model: Sonnet.

At the end of each session the skill hands back the updated `.xlsx`. Next session, the user uploads the file to continue.

## License

Code under MIT. Skill text and documentation under CC BY 4.0.
