---
id: 0019
milestone: M5
objetivo: Re-revisão M5: o aviso (PrivacyPage.astro, PT/EN) fala só do aparelho 'em que o app foi ativado', mas o sarzel-dist grava a chave pública e o indicador do chip já no pedido de ativação (repo.ts:108 iniciarAtivacao, pendente_pubkey/pendente_hardware) e só os limpa na confirmação do código (repo.ts:168); a exclusão (cadastro-repo.ts:81) não mexe neles. Cenário: o aluno pede a ativação, não digita o código e depois confirma a exclusão; pendente_* ficam sem prazo com o hash revogado e o aviso não diz. Esperado: 'O que é guardado' diz que a chave pública e o indicador do chip são gravados já no pedido de ativação, mesmo que o código nunca seja confirmado; 'Por quanto tempo' e 'Como pedir a exclusão' dizem que a chave de uma ativação não confirmada também fica com o hash do token revogado. Raiz: o texto da 0018 seguiu só as colunas da ativação confirmada; conferir o caminho de cada coluna de tokens_v2 (pedido, confirmação, status, exclusão).
verify:
  - suite::npx vitest run tests/privacidade.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/privacidade.test.ts
cap: 4
status: pendente
consumidor: página /downloads/science-tutor/privacidade e /en/downloads/science-tutor/privacy
---

# Re-revisão M5: o aviso (PrivacyPage.astro, PT/EN) fala só do aparelho 'em que o app foi ativado', mas o sarzel-dist grava a chave pública e o indicador do chip já no pedido de ativação (repo.ts:108 iniciarAtivacao, pendente_pubkey/pendente_hardware) e só os limpa na confirmação do código (repo.ts:168); a exclusão (cadastro-repo.ts:81) não mexe neles. Cenário: o aluno pede a ativação, não digita o código e depois confirma a exclusão; pendente_* ficam sem prazo com o hash revogado e o aviso não diz. Esperado: 'O que é guardado' diz que a chave pública e o indicador do chip são gravados já no pedido de ativação, mesmo que o código nunca seja confirmado; 'Por quanto tempo' e 'Como pedir a exclusão' dizem que a chave de uma ativação não confirmada também fica com o hash do token revogado. Raiz: o texto da 0018 seguiu só as colunas da ativação confirmada; conferir o caminho de cada coluna de tokens_v2 (pedido, confirmação, status, exclusão).
