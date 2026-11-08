---
id: 0005
milestone: M2
objetivo: src/scripts/cadastro-form.ts exporta ligarCadastro(raiz, deps) que habilita o fieldset do #cadastro e, no submit, valida no navegador (nome/sobrenome vazios ou >100 após trim, e-mail fora do EMAIL_RE do servidor, plataforma não escolhida, aceite desmarcado, Turnstile sem resposta via deps.turnstile.getResponse): mostra a mensagem PT/EN no p.erro do campo e não chama deps.fetch; sem #cadastro devolve null sem lançar. ScienceTutorPage.astro chama ligarCadastro com window.fetch e window.turnstile. Teste happy-dom (devDependency) sobre o HTML do dist/
verify:
  - suite::npx vitest run tests/cadastro-form.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/**
cap: 4
status: pendente
consumidor: script do formulário em ScienceTutorPage.astro (/downloads/science-tutor/ e /en/downloads/science-tutor/)
---

# src/scripts/cadastro-form.ts exporta ligarCadastro(raiz, deps) que habilita o fieldset do #cadastro e, no submit, valida no navegador (nome/sobrenome vazios ou >100 após trim, e-mail fora do EMAIL_RE do servidor, plataforma não escolhida, aceite desmarcado, Turnstile sem resposta via deps.turnstile.getResponse): mostra a mensagem PT/EN no p.erro do campo e não chama deps.fetch; sem #cadastro devolve null sem lançar. ScienceTutorPage.astro chama ligarCadastro com window.fetch e window.turnstile. Teste happy-dom (devDependency) sobre o HTML do dist/
