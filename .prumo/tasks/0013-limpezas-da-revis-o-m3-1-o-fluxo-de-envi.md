---
id: 0013
milestone: M3
objetivo: Limpezas da revisão M3: (1) o fluxo de envio do submit (guarda do botão, 'Enviando…', enviarJson, troca do form pela confirmação com foco, mensagem de falha, reset do Turnstile, reabilitar o botão) repetido em cadastro-form.ts e exclusao-form.ts vira uma função só em cadastro-form.ts usada pelos dois; (2) a regra e as mensagens de e-mail (vazio ou > MAX_CAMPO, senão EMAIL_RE; email, emailInvalido, turnstile, enviando) copiadas em exclusao-form.ts passam a vir de cadastro-form.ts; (3) com a função única, um 202/201 sem o bloco de confirmação na página deixa de cair na mensagem de falha.
verify:
  - aceite::npx vitest run tests/privacidade.test.ts tests/exclusao-form.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/**
cap: 4
status: pendente
tipo: limpeza
---

# Limpezas da revisão M3: (1) o fluxo de envio do submit (guarda do botão, 'Enviando…', enviarJson, troca do form pela confirmação com foco, mensagem de falha, reset do Turnstile, reabilitar o botão) repetido em cadastro-form.ts e exclusao-form.ts vira uma função só em cadastro-form.ts usada pelos dois; (2) a regra e as mensagens de e-mail (vazio ou > MAX_CAMPO, senão EMAIL_RE; email, emailInvalido, turnstile, enviando) copiadas em exclusao-form.ts passam a vir de cadastro-form.ts; (3) com a função única, um 202/201 sem o bloco de confirmação na página deixa de cair na mensagem de falha.
