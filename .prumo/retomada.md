# Retomada

## Onde parou
M4 fechado e verificado, e com ele o plano inteiro (M1–M4 verificados). Aceite do M4 verde: passo-a-passo 10/10; `npm test` 232 em 19 arquivos. Páginas `/downloads/science-tutor/passo-a-passo/mac/` e `/windows/` (só PT, `InstallGuidePage.astro`). Nada de deploy nem push feito.

## Por que
- O texto do guia foi conferido contra o fluxo do sarzel-kit (`../science_tutor/mac/.build/checkouts/sarzel-kit`, `SarzelFluxoView.swift`) e o `activate.ts` do sarzel-dist: token → código do segundo e-mail (15 min) → senha → chave de recuperação → Touch ID → chave da Anthropic. Se o kit mudar o fluxo, mudar o guia junto.
- O guia do Windows segue o kit por suposição: o science_tutor ainda não tem build Windows.
- Pendências para o dono: aprovar o texto do aviso de privacidade (`PRIVACIDADE_RASCUNHO`, e aí escrever o teste do ramo `false`); o e-mail do sarzel-dist usa `https://www.stefanogarzon.com/...` sem barra, o que depende de redirect www→apex na Cloudflare.
- Opcionais: texto da senha sem asserção; `/código/` redundante no teste; mensagem de falha antiga fica em `#cadastro-status`/`#exclusao-status` quando o envio seguinte reprova na validação.

## Armadilha
- Estilo com escopo do Astro não alcança HTML injetado por `set:html`: usar `:global(a)`.
- `hreflang="en"` também aparece no seletor de idioma do Header (`<a class="lang">`); teste de tradução mira `<link rel="alternate" hreflang=...>`.
- `prumo tarefa-nova` lê o stdin quando não é TTY: passar `--corpo ''` e `</dev/null`.
