---
id: 0002
milestone: M1
objetivo: Páginas /downloads/science-tutor/ e /en/downloads/science-tutor/ (Base com alternate/hasTranslation, rotas em src/i18n/utils.ts) apresentando o Science Tutor e com o formulário estático: nome, sobrenome, email, rádios macos/windows, checkbox de aceite com link para a rota do aviso de privacidade do idioma, div.cf-turnstile com data-sitekey da variável de build, script do Turnstile, fieldset disabled, noscript com aviso de JavaScript, novalidate e maxlength 100; sem chave, aviso de cadastro indisponível. tests/global-setup.ts passa PUBLIC_TURNSTILE_SITEKEY=1x00000000000000000000AA no build. Visual com os tokens de src/styles/global.css
verify:
  - suite::npx vitest run tests/science-tutor.test.ts
  - repo::npm test
testes:
  - tests/**
cap: 4
status: pendente
consumidor: rotas públicas /downloads/science-tutor/ e /en/downloads/science-tutor/ geradas por src/pages/
depende_de:
  - 0001
---

# Páginas /downloads/science-tutor/ e /en/downloads/science-tutor/ (Base com alternate/hasTranslation, rotas em src/i18n/utils.ts) apresentando o Science Tutor e com o formulário estático: nome, sobrenome, email, rádios macos/windows, checkbox de aceite com link para a rota do aviso de privacidade do idioma, div.cf-turnstile com data-sitekey da variável de build, script do Turnstile, fieldset disabled, noscript com aviso de JavaScript, novalidate e maxlength 100; sem chave, aviso de cadastro indisponível. tests/global-setup.ts passa PUBLIC_TURNSTILE_SITEKEY=1x00000000000000000000AA no build. Visual com os tokens de src/styles/global.css
