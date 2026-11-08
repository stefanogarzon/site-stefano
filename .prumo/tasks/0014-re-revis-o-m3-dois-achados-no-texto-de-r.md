---
id: 0014
milestone: M3
objetivo: Re-revisão M3, dois achados no texto de retenção do aviso (PrivacyPage.astro PT/EN): (1) 'Por quanto tempo' põe o hash do token entre os dados que somem na confirmação da exclusão, mas o servidor mantém tokens_v2.hash revogado e anônimo sem prazo (cadastro-repo.ts excluir() faz UPDATE, não DELETE) e a seção de exclusão diz isso; (2) 'apagado no primeiro pedido que chegar depois de 24 h' é impreciso: a purga só roda em reservarPedido, depois de Turnstile e mailer ok, então pedidos recusados com 400/403/503 não apagam nada; o fiel é 'primeiro pedido válido'. Junto, no mesmo parágrafo: EN omite o sobrenome; o HMAC do IP conta numa janela de 1 h e o e-mail numa de 24 h. Procurar a raiz comum (a seção de retenção resume dados de tabelas diferentes como se fossem um só prazo) e escrever o prazo por tabela.
verify:
  - suite::npx vitest run tests/privacidade.test.ts tests/privacidade-retencao.test.ts tests/privacidade-prazos.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/privacidade-prazos.test.ts
cap: 4
status: pendente
consumidor: o leitor do aviso de privacidade (PT e EN)
---

# Re-revisão M3, dois achados no texto de retenção do aviso (PrivacyPage.astro PT/EN): (1) 'Por quanto tempo' põe o hash do token entre os dados que somem na confirmação da exclusão, mas o servidor mantém tokens_v2.hash revogado e anônimo sem prazo (cadastro-repo.ts excluir() faz UPDATE, não DELETE) e a seção de exclusão diz isso; (2) 'apagado no primeiro pedido que chegar depois de 24 h' é impreciso: a purga só roda em reservarPedido, depois de Turnstile e mailer ok, então pedidos recusados com 400/403/503 não apagam nada; o fiel é 'primeiro pedido válido'. Junto, no mesmo parágrafo: EN omite o sobrenome; o HMAC do IP conta numa janela de 1 h e o e-mail numa de 24 h. Procurar a raiz comum (a seção de retenção resume dados de tabelas diferentes como se fossem um só prazo) e escrever o prazo por tabela.
