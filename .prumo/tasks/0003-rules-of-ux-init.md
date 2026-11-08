---
id: 0003
milestone: M1
objetivo: Rodar /rules-of-ux:init neste repo: .claude/rules-of-ux.json com o app (astro dev/preview) e as telas, incluindo /downloads/science-tutor/ e /en/downloads/science-tutor/, e a linha de base gravada; corrigir na página nova os achados de erro do check
verify:
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
  - repo::npm test
testes:
  - tests/**
cap: 4
status: pendente
consumidor: tarefas de interface de M2–M4, que passam a levar o verify ux::
depende_de:
  - 0002
---

# Rodar /rules-of-ux:init neste repo: .claude/rules-of-ux.json com o app (astro dev/preview) e as telas, incluindo /downloads/science-tutor/ e /en/downloads/science-tutor/, e a linha de base gravada; corrigir na página nova os achados de erro do check
