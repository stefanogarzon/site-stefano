---
id: 0016
milestone: M4
objetivo: Achados da revisão M4 no texto do passo a passo (InstallGuidePage.astro, Mac e Windows): (1) entre 'cole o token' e 'crie a senha do cofre' falta a confirmação da ativação. Cenário: o aluno cola o token, o sarzel-dist (activate.ts) manda um segundo e-mail 'Código de ativação sarzel' com código e link, válido por 15 minutos, e o app mostra 'Confirmar ativação: Digite o código de confirmação que você recebeu' (SarzelFluxoView .codigo); o guia manda criar a senha, que não é a tela que aparece. Esperado: passo próprio, depois do token e antes da senha, com o segundo e-mail, o código (ou o link do e-mail) e os 15 minutos. (2) o passo da chave de recuperação diz 'Ela abre o cofre se você esquecer a senha', mas o app não tem tela que use a chave (abrir_recuperacao só no núcleo, fora da fachada e da UI); a tela do kit diz 'Sem ela, quem esquecer a senha perde os dados. Ela não será mostrada de novo.' Esperado: o texto diz o que o app diz, sem prometer abrir o cofre. Raiz comum: o texto seguiu a lista do PLANO.md, não o fluxo do sarzel-kit (FluxoModelo: ativar → codigo → criarSenha → recuperacao → ofertaBiometria → liberado → chave da IA); conferir cada passo contra o kit antes de consertar e acertar a lista do produto final no PLANO.md.
verify:
  - suite::npx vitest run tests/passo-a-passo.test.ts
  - ux::python3 ~/.claude/rules-of-ux/ux.py check
testes:
  - tests/passo-a-passo.test.ts
cap: 4
status: pendente
consumidor: aluno que segue o passo a passo vindo do e-mail do sarzel-dist
---

# Achados da revisão M4 no texto do passo a passo (InstallGuidePage.astro, Mac e Windows): (1) entre 'cole o token' e 'crie a senha do cofre' falta a confirmação da ativação. Cenário: o aluno cola o token, o sarzel-dist (activate.ts) manda um segundo e-mail 'Código de ativação sarzel' com código e link, válido por 15 minutos, e o app mostra 'Confirmar ativação: Digite o código de confirmação que você recebeu' (SarzelFluxoView .codigo); o guia manda criar a senha, que não é a tela que aparece. Esperado: passo próprio, depois do token e antes da senha, com o segundo e-mail, o código (ou o link do e-mail) e os 15 minutos. (2) o passo da chave de recuperação diz 'Ela abre o cofre se você esquecer a senha', mas o app não tem tela que use a chave (abrir_recuperacao só no núcleo, fora da fachada e da UI); a tela do kit diz 'Sem ela, quem esquecer a senha perde os dados. Ela não será mostrada de novo.' Esperado: o texto diz o que o app diz, sem prometer abrir o cofre. Raiz comum: o texto seguiu a lista do PLANO.md, não o fluxo do sarzel-kit (FluxoModelo: ativar → codigo → criarSenha → recuperacao → ofertaBiometria → liberado → chave da IA); conferir cada passo contra o kit antes de consertar e acertar a lista do produto final no PLANO.md.
