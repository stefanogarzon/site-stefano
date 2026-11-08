---
id: 0009
milestone: M3
objetivo: Páginas do aviso de privacidade /downloads/science-tutor/privacidade/ e /en/downloads/science-tutor/privacy/ (rotas scienceTutorPrivacy de src/i18n/utils.ts, uma tradução da outra com hreflang), no Base: faixa no topo 'RASCUNHO — aguardando aprovação do dono' / 'DRAFT — awaiting owner approval', <meta name="robots" content="noindex"> (prop nova noindex no Base) e exclusão do sitemap enquanto a constante PRIVACIDADE_RASCUNHO de src/data/science-tutor.mjs for true (filtro do sitemap em astro.config.mjs importa a constante); sem data-pagefind-body. Texto: o que é guardado (nome, sobrenome, e-mail, data do aceite, hash do token, HMAC do IP por 24 h), finalidade (enviar o acesso ao app), onde (Cloudflare, sarzel.com; e-mail pelo Resend), prazo (enquanto o cadastro existir, até o pedido de exclusão) e como excluir (seção com o formulário estático: e-mail maxlength 100, div.cf-turnstile, fieldset disabled, noscript, novalidate). O href do checkbox do cadastro aponta para um arquivo que existe no dist/. Telas novas no .claude/rules-of-ux.json.
verify:
  - suite::npx vitest run tests/privacidade.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/privacidade.test.ts
cap: 4
status: pendente
consumidor: link do aceite no formulário de cadastro (ScienceTutorPage.astro) e o leitor do aviso
---

# Páginas do aviso de privacidade /downloads/science-tutor/privacidade/ e /en/downloads/science-tutor/privacy/ (rotas scienceTutorPrivacy de src/i18n/utils.ts, uma tradução da outra com hreflang), no Base: faixa no topo 'RASCUNHO — aguardando aprovação do dono' / 'DRAFT — awaiting owner approval', <meta name="robots" content="noindex"> (prop nova noindex no Base) e exclusão do sitemap enquanto a constante PRIVACIDADE_RASCUNHO de src/data/science-tutor.mjs for true (filtro do sitemap em astro.config.mjs importa a constante); sem data-pagefind-body. Texto: o que é guardado (nome, sobrenome, e-mail, data do aceite, hash do token, HMAC do IP por 24 h), finalidade (enviar o acesso ao app), onde (Cloudflare, sarzel.com; e-mail pelo Resend), prazo (enquanto o cadastro existir, até o pedido de exclusão) e como excluir (seção com o formulário estático: e-mail maxlength 100, div.cf-turnstile, fieldset disabled, noscript, novalidate). O href do checkbox do cadastro aponta para um arquivo que existe no dist/. Telas novas no .claude/rules-of-ux.json.
