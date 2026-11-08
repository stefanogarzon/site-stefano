---
id: 0012
milestone: M3
objetivo: Achado da revisão M3: o aviso de privacidade (PrivacyPage.astro, PT/EN) promete prazos que o sarzel-dist não cumpre. Cenário: um pedido de cadastro ou de exclusão no dia D e nenhum outro por 7 dias; a linha (ip_hmac, email, criado_em) de cadastro_pedidos continua lá em D+7 (cadastro-repo.ts só purga dentro do próximo reservarPedido, sem cron), mas o texto diz 'O HMAC do IP é apagado depois de 24 h'. Também omite que o registro do pedido guarda o e-mail (inclusive 'exclusao:'+email de quem pede exclusão sem cadastro), que a exclusão só acontece depois da confirmação pelo link, e que o hash do token revogado fica, sem e-mail, para auditoria. Esperado: o texto diz o que o servidor faz (registro de cada pedido com HMAC do IP e e-mail, usado por 24 h no limite e apagado no primeiro pedido seguinte depois disso, ou na exclusão; prazo até a confirmação da exclusão; hash do token revogado e anônimo mantido), sem afirmar 'apagado depois de 24 h'. Procurar a raiz comum (texto escrito pelo plano, não pelo contrato) e conferir as outras afirmações contra cadastro-repo.ts e cadastro-exclusao.ts antes de consertar.
verify:
  - suite::npx vitest run tests/privacidade.test.ts tests/privacidade-retencao.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/privacidade-retencao.test.ts
cap: 4
status: pendente
consumidor: o leitor do aviso de privacidade (PT e EN)
---

# Achado da revisão M3: o aviso de privacidade (PrivacyPage.astro, PT/EN) promete prazos que o sarzel-dist não cumpre. Cenário: um pedido de cadastro ou de exclusão no dia D e nenhum outro por 7 dias; a linha (ip_hmac, email, criado_em) de cadastro_pedidos continua lá em D+7 (cadastro-repo.ts só purga dentro do próximo reservarPedido, sem cron), mas o texto diz 'O HMAC do IP é apagado depois de 24 h'. Também omite que o registro do pedido guarda o e-mail (inclusive 'exclusao:'+email de quem pede exclusão sem cadastro), que a exclusão só acontece depois da confirmação pelo link, e que o hash do token revogado fica, sem e-mail, para auditoria. Esperado: o texto diz o que o servidor faz (registro de cada pedido com HMAC do IP e e-mail, usado por 24 h no limite e apagado no primeiro pedido seguinte depois disso, ou na exclusão; prazo até a confirmação da exclusão; hash do token revogado e anônimo mantido), sem afirmar 'apagado depois de 24 h'. Procurar a raiz comum (texto escrito pelo plano, não pelo contrato) e conferir as outras afirmações contra cadastro-repo.ts e cadastro-exclusao.ts antes de consertar.
