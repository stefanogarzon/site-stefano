---
id: 0008
milestone: M2
objetivo: Achado da revisão M2: o prazo de 15 s de enviarJson (src/scripts/cadastro-form.ts) cobre também a leitura do corpo. Cenário: fetch resolve 503 com corpo em stream que nunca fecha; hoje o envio fica pendente para sempre (botão desabilitado, 'Enviando…', Turnstile sem reset). Esperado: aos 15 s a falha de conexão aparece, o botão volta habilitado, o Turnstile é reiniciado e os campos ficam intactos. Procurar a raiz comum (timer limpo no finally antes do res.json) antes de consertar; o M3 reaproveita enviarJson.
verify:
  - suite::npx vitest run tests/cadastro-form.test.ts
  - aceite::npx vitest run tests/cadastro-form.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/**
cap: 4
status: pendente
consumidor: formulário de /downloads/science-tutor/ e /en/downloads/science-tutor/
---

# Achado da revisão M2: o prazo de 15 s de enviarJson (src/scripts/cadastro-form.ts) cobre também a leitura do corpo. Cenário: fetch resolve 503 com corpo em stream que nunca fecha; hoje o envio fica pendente para sempre (botão desabilitado, 'Enviando…', Turnstile sem reset). Esperado: aos 15 s a falha de conexão aparece, o botão volta habilitado, o Turnstile é reiniciado e os campos ficam intactos. Procurar a raiz comum (timer limpo no finally antes do res.json) antes de consertar; o M3 reaproveita enviarJson.
