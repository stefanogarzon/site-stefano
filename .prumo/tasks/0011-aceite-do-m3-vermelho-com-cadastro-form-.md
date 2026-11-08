---
id: 0011
milestone: M3
objetivo: Aceite do M3 vermelho: com cadastro-form.ts importado também pela página do aviso, o Vite o põe num chunk compartilhado (dist/_astro/cadastro-form.*.js) e o script da página de cadastro só faz import dele; o teste 'a página carrega o script do formulário' (tests/cadastro-form.test.ts) lê só o arquivo do src e não segue os import, e reprova nas duas línguas. O helper que monta o JS que a página carrega vai para tests/scripts-da-pagina.ts, seguindo os import estáticos relativos dos módulos (recursivo, sem repetir), usado pelos dois testes de formulário; nenhuma asserção afrouxa.
verify:
  - aceite::npx vitest run tests/privacidade.test.ts tests/exclusao-form.test.ts && npm test && ! git ls-files writings | grep -q .
testes:
  - tests/dist.ts
  - tests/cadastro-form.test.ts
  - tests/exclusao-form.test.ts
cap: 4
status: pendente
consumidor: tests/cadastro-form.test.ts e tests/exclusao-form.test.ts
depende_de:
arquivos:
tipo: funcional
---

# Aceite do M3 vermelho: com cadastro-form.ts importado também pela página do aviso, o Vite o põe num chunk compartilhado (dist/_astro/cadastro-form.*.js) e o script da página de cadastro só faz import dele; o teste 'a página carrega o script do formulário' (tests/cadastro-form.test.ts) lê só o arquivo do src e não segue os import, e reprova nas duas línguas. O helper que monta o JS que a página carrega passa a seguir os import estáticos relativos dos módulos (recursivo, sem repetir), num lugar só (tests/dist.ts) usado pelos dois testes de formulário; nenhuma asserção afrouxa.
