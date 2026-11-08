---
id: 0006
milestone: M2
objetivo: Envio válido do cadastro: POST https://downloads.sarzel.com/api/v2/cadastro com Content-Type application/json e corpo de exatamente seis chaves {nome, sobrenome, email, plataforma, aceite_privacidade: true, turnstile}; botão desabilitado durante o envio (segundo submit não chama fetch de novo); 201 troca o formulário pela confirmação com o link do passo a passo da plataforma escolhida (/downloads/science-tutor/passo-a-passo/mac/ ou /windows/, rota em src/i18n/utils.ts)
verify:
  - suite::npx vitest run tests/cadastro-form.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/**
cap: 4
status: pendente
consumidor: formulário de /downloads/science-tutor/ e /en/downloads/science-tutor/
depende_de:
  - 0005
---

# Envio válido do cadastro: POST https://downloads.sarzel.com/api/v2/cadastro com Content-Type application/json e corpo de exatamente seis chaves {nome, sobrenome, email, plataforma, aceite_privacidade: true, turnstile}; botão desabilitado durante o envio (segundo submit não chama fetch de novo); 201 troca o formulário pela confirmação com o link do passo a passo da plataforma escolhida (/downloads/science-tutor/passo-a-passo/mac/ ou /windows/, rota em src/i18n/utils.ts)
