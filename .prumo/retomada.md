# Retomada

## Onde parou
M5 fechado e verificado; com ele, M1–M5 verificados e o plano inteiro concluído. Aceite do M5 verde no HEAD final: privacidade 42/42; `npm test` 254 em 19 arquivos; `writings/` fora do git. O aviso de privacidade está publicado: base legal (LGPD 7º V), direitos (art. 18), `privacidade@sarzel.com`, PDF direto ao provedor de IA, dados do aparelho em `tokens_v2`. Ele sai indexável e no sitemap. Nada de deploy nem push feito (o loop externo cuida disso).

## Por que
- O ramo do rascunho (constante, faixa, `noindex`, filtro do sitemap) foi removido, não testado por fixture: se um rascunho voltar, ele está no commit 6507d56.
- O texto da retenção segue as colunas de `tokens_v2` do sarzel-dist (`excluir()` só muda `revoked_at`, `email`, `label`). Se o servidor passar a apagar ou guardar outra coluna, mudar `FICA_COM_HASH` e a lista "O que é guardado" em `PrivacyPage.astro`.
- Pendente fora deste repo: o e-mail do sarzel-dist usa `https://www.stefanogarzon.com/...`, e isso depende do redirect www→apex na Cloudflare.
- Opcionais, para o dono decidir: "revogação do consentimento" aparece na lista de direitos, mas a base legal é contrato; o EN diz "not ... shared" e a lista fala em "sharing"; o teste não amarra "formulário" à exclusão; a regex `/chip/` é frouxa.

## Armadilha
- Cada revisão do texto do aviso achou mais uma coluna esquecida: conferir o caminho de cada coluna (pedido, confirmação, status, exclusão) antes de escrever.
- `prumo tarefa-nova` lê o stdin: passar `--corpo ''` e `</dev/null`.
