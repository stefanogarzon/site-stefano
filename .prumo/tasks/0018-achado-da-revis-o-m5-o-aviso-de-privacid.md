---
id: 0018
milestone: M5
objetivo: Achado da revisão M5: o aviso de privacidade aprovado (PrivacyPage.astro, PT/EN) omite o que o sarzel-dist grava por token na ativação e na checagem de status. Cenário: o aluno ativa o app e o app consulta o status; tokens_v2 (migrations/0002_tokens_v2.sql) guarda pubkey (chave pública do aparelho), hardware (se a chave fica no chip do aparelho), ativado_em e ultimo_status (repo.ts marcarStatus, a cada checagem); na exclusão (cadastro-repo.ts excluir) só revoked_at, email e label mudam, e esses campos ficam com o hash. Hoje o texto diz que fica só 'o hash do token' e, na exclusão, 'o hash dele continua guardado, sem o e-mail'. Esperado: 'O que é guardado' lista a chave pública do aparelho, se ela fica no chip do aparelho, a data da ativação e a da última checagem de status; 'Por quanto tempo' e 'Como pedir a exclusão' dizem que esses dados ficam junto do hash do token revogado, sem o e-mail. Raiz comum: o texto do M3 seguiu as tabelas do cadastro (cadastros, cadastro_pedidos), não a de tokens_v2; conferir cada coluna de tokens_v2 (e nonces, código de ativação) contra o texto antes de consertar.
verify:
  - suite::npx vitest run tests/privacidade.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/privacidade.test.ts
cap: 4
status: pendente
consumidor: página /downloads/science-tutor/privacidade e /en/downloads/science-tutor/privacy
---

# Achado da revisão M5: o aviso de privacidade aprovado (PrivacyPage.astro, PT/EN) omite o que o sarzel-dist grava por token na ativação e na checagem de status. Cenário: o aluno ativa o app e o app consulta o status; tokens_v2 (migrations/0002_tokens_v2.sql) guarda pubkey (chave pública do aparelho), hardware (se a chave fica no chip do aparelho), ativado_em e ultimo_status (repo.ts marcarStatus, a cada checagem); na exclusão (cadastro-repo.ts excluir) só revoked_at, email e label mudam, e esses campos ficam com o hash. Hoje o texto diz que fica só 'o hash do token' e, na exclusão, 'o hash dele continua guardado, sem o e-mail'. Esperado: 'O que é guardado' lista a chave pública do aparelho, se ela fica no chip do aparelho, a data da ativação e a da última checagem de status; 'Por quanto tempo' e 'Como pedir a exclusão' dizem que esses dados ficam junto do hash do token revogado, sem o e-mail. Raiz comum: o texto do M3 seguiu as tabelas do cadastro (cadastros, cadastro_pedidos), não a de tokens_v2; conferir cada coluna de tokens_v2 (e nonces, código de ativação) contra o texto antes de consertar.
