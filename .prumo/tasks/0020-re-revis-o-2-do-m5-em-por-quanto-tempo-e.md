---
id: 0020
milestone: M5
objetivo: Re-revisão 2 do M5: em 'Por quanto tempo' e 'Como pedir a exclusão' (PrivacyPage.astro, PT/EN) a lista do que fica com o hash do token revogado tem a chave pública e as datas, mas não o indicador de a chave ficar no chip de segurança (tokens_v2.hardware / pendente_hardware), que cadastro-repo.ts excluir() também mantém. Cenário: o aluno ativa (ou só pede a ativação) e confirma a exclusão; hardware fica e o aviso não diz. Esperado: as duas seções, nas duas línguas, incluem o indicador do chip entre o que fica. Raiz: a mesma lista de dados do aparelho escrita à mão em três seções; conferir que as três dizem o mesmo conjunto.
verify:
  - suite::npx vitest run tests/privacidade.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/privacidade.test.ts
cap: 4
status: pendente
consumidor: página /downloads/science-tutor/privacidade e /en/downloads/science-tutor/privacy
---

# Re-revisão 2 do M5: em 'Por quanto tempo' e 'Como pedir a exclusão' (PrivacyPage.astro, PT/EN) a lista do que fica com o hash do token revogado tem a chave pública e as datas, mas não o indicador de a chave ficar no chip de segurança (tokens_v2.hardware / pendente_hardware), que cadastro-repo.ts excluir() também mantém. Cenário: o aluno ativa (ou só pede a ativação) e confirma a exclusão; hardware fica e o aviso não diz. Esperado: as duas seções, nas duas línguas, incluem o indicador do chip entre o que fica. Raiz: a mesma lista de dados do aparelho escrita à mão em três seções; conferir que as três dizem o mesmo conjunto.
