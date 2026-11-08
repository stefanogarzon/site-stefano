---
id: 0015
milestone: M4
objetivo: Páginas do passo a passo em PT (rotas scienceTutorSteps de src/i18n/utils.ts): dist/downloads/science-tutor/passo-a-passo/mac/index.html e .../windows/index.html, no Base com alternate para /en/downloads/science-tutor/ sem hreflang, title/description/canonical próprios. Passos num <ol>, na ordem pedida (índices crescentes no HTML). Mac: baixar o DMG pelo link do e-mail, arrastar para Aplicativos, abrir, colar o token, criar a senha do cofre, guardar a chave de recuperação, ativar o Touch ID, colar a chave da IA (chave da API da Anthropic). Windows: abrir o link da Microsoft Store do e-mail, instalar, abrir, colar o token, criar a senha do cofre, guardar a chave de recuperação, colar a chave da IA. Link de volta à página do Science Tutor (/downloads/science-tutor/). A página de cadastro (confirmação do M2, PT e EN) aponta para arquivos que existem no dist/. Telas novas no .claude/rules-of-ux.json.
verify:
  - suite::npx vitest run tests/passo-a-passo.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - !tests/passo-a-passo.test.ts
cap: 4
status: pendente
consumidor: link do e-mail do sarzel-dist (cadastro-email.ts) e a confirmação do cadastro em ScienceTutorPage.astro
depende_de:
arquivos:
tipo: funcional
---

# Páginas do passo a passo em PT (rotas scienceTutorSteps de src/i18n/utils.ts): dist/downloads/science-tutor/passo-a-passo/mac/index.html e .../windows/index.html, no Base com alternate para /en/downloads/science-tutor/ sem hreflang, title/description/canonical próprios. Passos num <ol>, na ordem pedida (índices crescentes no HTML). Mac: baixar o DMG pelo link do e-mail, arrastar para Aplicativos, abrir, colar o token, criar a senha do cofre, guardar a chave de recuperação, ativar o Touch ID, colar a chave da IA (chave da API da Anthropic). Windows: abrir o link da Microsoft Store do e-mail, instalar, abrir, colar o token, criar a senha do cofre, guardar a chave de recuperação, colar a chave da IA. Link de volta à página do Science Tutor (/downloads/science-tutor/). A página de cadastro (confirmação do M2, PT e EN) aponta para arquivos que existem no dist/. Telas novas no .claude/rules-of-ux.json.
