---
id: 0021
milestone: M5
objetivo: Limpezas da revisão M5: (1) o ramo do rascunho do aviso ficou sem teste e sem uso com o texto aprovado: sai PRIVACIDADE_RASCUNHO de src/data/science-tutor.mjs, a faixa .rascunho, o CSS e as strings rascunho/rascunhoTexto de PrivacyPage.astro, foraDoSitemap de astro.config.mjs e a prop noindex do Base.astro (único uso); o histórico do git guarda o ramo se um rascunho voltar. (2) a lista do que fica com o hash do token revogado (chave pública, inclusive de ativação não confirmada, chip, datas) escrita à mão em 'Por quanto tempo' e 'Como pedir a exclusão' vira uma string por idioma usada nas duas seções. Sem mudança de comportamento: o dist/ sai igual no que os testes medem.
verify:
  - suite::npx vitest run tests/privacidade.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/**
cap: 4
status: pendente
consumidor: página /downloads/science-tutor/privacidade e /en/downloads/science-tutor/privacy; sitemap
tipo: limpeza
---

# Limpezas da revisão M5: (1) o ramo do rascunho do aviso ficou sem teste e sem uso com o texto aprovado: sai PRIVACIDADE_RASCUNHO de src/data/science-tutor.mjs, a faixa .rascunho, o CSS e as strings rascunho/rascunhoTexto de PrivacyPage.astro, foraDoSitemap de astro.config.mjs e a prop noindex do Base.astro (único uso); o histórico do git guarda o ramo se um rascunho voltar. (2) a lista do que fica com o hash do token revogado (chave pública, inclusive de ativação não confirmada, chip, datas) escrita à mão em 'Por quanto tempo' e 'Como pedir a exclusão' vira uma string por idioma usada nas duas seções. Sem mudança de comportamento: o dist/ sai igual no que os testes medem.
