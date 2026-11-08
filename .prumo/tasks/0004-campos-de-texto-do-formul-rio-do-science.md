---
id: 0004
milestone: M1
objetivo: Campos de texto do formulário do Science Tutor com limite visível: a cor da borda de input[type=text]/[type=email] em ScienceTutorPage.astro tem contraste >= 3:1 contra --card e contra --bg nos temas claro e escuro (WCAG 1.4.11; hoje --line dá 1,2-1,4:1). Procurar a raiz comum nos controles do formulário (rádio, checkbox) antes de consertar.
verify:
  - suite::npx vitest run tests/science-tutor-contraste.test.ts
  - aceite::npx vitest run tests/science-tutor.test.ts tests/turnstile.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/**
cap: 4
status: pendente
consumidor: formulário de /downloads/science-tutor/ e /en/downloads/science-tutor/
depende_de:
arquivos:
tipo: funcional
---

# Campos de texto do formulário do Science Tutor com limite visível: a cor da borda de input[type=text]/[type=email] em ScienceTutorPage.astro tem contraste >= 3:1 contra --card e contra --bg nos temas claro e escuro (WCAG 1.4.11; hoje --line dá 1,2-1,4:1). Procurar a raiz comum nos controles do formulário (rádio, checkbox) antes de consertar.
