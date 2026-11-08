---
id: 0010
milestone: M3
objetivo: src/scripts/exclusao-form.ts exporta ligarExclusao(raiz, deps) que habilita o fieldset do #exclusao e, no submit: e-mail vazio, >100 ou fora do EMAIL_RE e Turnstile sem resposta mostram a mensagem PT/EN no p.erro e não chamam deps.fetch; envio válido faz POST https://downloads.sarzel.com/api/v2/cadastro/exclusao com exatamente {email, turnstile} via enviarJson de cadastro-form.ts (esperado 202), botão desabilitado durante o envio; 202 mostra o aviso de que a confirmação chega por link no e-mail, válido por 24 h; 400/403/429/503 mostram a message do servidor; rede e timeout de 15 s mostram falha de conexão com o e-mail intacto; depois de falha, Turnstile reiniciado e botão habilitado. Sem #exclusao devolve null. A página do aviso chama ligarExclusao com window.fetch e window.turnstile. Teste happy-dom sobre o HTML do dist/.
verify:
  - suite::npx vitest run tests/exclusao-form.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/exclusao-form.test.ts
cap: 4
status: pendente
consumidor: script da página do aviso de privacidade (PT e EN)
depende_de:
  - 0009
---

# src/scripts/exclusao-form.ts exporta ligarExclusao(raiz, deps) que habilita o fieldset do #exclusao e, no submit: e-mail vazio, >100 ou fora do EMAIL_RE e Turnstile sem resposta mostram a mensagem PT/EN no p.erro e não chamam deps.fetch; envio válido faz POST https://downloads.sarzel.com/api/v2/cadastro/exclusao com exatamente {email, turnstile} via enviarJson de cadastro-form.ts (esperado 202), botão desabilitado durante o envio; 202 mostra o aviso de que a confirmação chega por link no e-mail, válido por 24 h; 400/403/429/503 mostram a message do servidor; rede e timeout de 15 s mostram falha de conexão com o e-mail intacto; depois de falha, Turnstile reiniciado e botão habilitado. Sem #exclusao devolve null. A página do aviso chama ligarExclusao com window.fetch e window.turnstile. Teste happy-dom sobre o HTML do dist/.
