# Retomada

## Onde parou
M3 fechado e verificado (aceite verde: privacidade + exclusão 63 testes; `npm test` 222 em 18 arquivos). Revisão com 1 achado (0012), re-revisão com 2 achados no mesmo texto (0014), limpeza 0013 (envio e regra de e-mail compartilhados em `cadastro-form.ts`). Próximo: M4 (passo a passo Mac e Windows), tarefas ainda por escrever.

## Por que
- O texto do aviso foi conferido frase a frase contra `../sarzel-dist` (branch `plano/cadastro-science-tutor`: `cadastro-repo.ts`, `cadastro-exclusao.ts`, `cadastro.ts`). Se o servidor mudar retenção ou limite, mudar o aviso junto; `tests/privacidade-retencao.test.ts` e `tests/privacidade-prazos.test.ts` fixam as frases.
- Limpeza não feita: o ramo `PRIVACIDADE_RASCUNHO = false` (faixa some, robots sai, URLs entram no sitemap) não tem teste; pede teste novo, não é limpeza. Fazer quando o dono aprovar o texto.
- Opcionais: falta o caso de e-mail com exatamente 100 caracteres aceito no teste da exclusão; `tests/scripts-da-pagina.ts` não segue import de script inline nem caminho absoluto `/_astro/`; mensagem de falha antiga fica em `#exclusao-status`/`#cadastro-status` quando o envio seguinte reprova na validação; sucesso sem o bloco de confirmação na página deixa o form sem retorno (latente, as páginas sempre têm o bloco).

## Armadilha
- `prumo tarefa-nova` lê o stdin quando não é TTY e fica pendurado: passar `--corpo ''` e `</dev/null`.
- Código importado por duas páginas vira chunk compartilhado no Vite; teste que lê o JS da página usa `tests/scripts-da-pagina.ts` (segue os import).
- Tela nova no rules-of-ux traz como "erro novo" o alvo-pequeno do nav do Header (já na linha de base das outras telas): corrigir os erros da página e regravar com `ux.py baseline`.
