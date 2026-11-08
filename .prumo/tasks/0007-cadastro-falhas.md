---
id: 0007
milestone: M2
objetivo: Falhas do envio do cadastro: 400/403/429/503 com {message} mostram a message do servidor; resposta sem JSON válido mostra mensagem genérica; erro de rede e falta de resposta em 15 s (AbortController, timers falsos) mostram a falha de conexão com todos os campos intactos; depois de qualquer falha o Turnstile é reiniciado (deps.turnstile.reset) e o botão volta a ficar habilitado
verify:
  - suite::npx vitest run tests/cadastro-form.test.ts
  - aceite::npx vitest run tests/cadastro-form.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/**
cap: 4
status: pendente
consumidor: formulário de /downloads/science-tutor/ e /en/downloads/science-tutor/
depende_de:
  - 0006
---

# Falhas do envio do cadastro: 400/403/429/503 com {message} mostram a message do servidor; resposta sem JSON válido mostra mensagem genérica; erro de rede e falta de resposta em 15 s (AbortController, timers falsos) mostram a falha de conexão com todos os campos intactos; depois de qualquer falha o Turnstile é reiniciado (deps.turnstile.reset) e o botão volta a ficar habilitado
