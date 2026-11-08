# Plano

## Objetivo

Publicar no site (Astro estático, PT/EN) a página do Science Tutor com o formulário de cadastro que chama o sarzel-dist, o aviso de privacidade (LGPD) em rascunho e os passos a passos de instalação para Mac e Windows, para alunos que recebem o acesso por e-mail.

## Produto final

Quando tudo estiver pronto, o build (`npm run build`) gera:

- `/downloads/science-tutor/` (PT) e `/en/downloads/science-tutor/` (EN), uma tradução da outra (`hreflang` pelo `alternate` do `Base`, como Sobre e Busca). Apresentam o Science Tutor: ensina leitura crítica de artigos médicos a partir do PDF que o aluno envia; Mac e Windows; o aluno usa a própria chave da API da Anthropic (Claude). Trazem o formulário de cadastro.
- Formulário: nome, sobrenome, e-mail, plataforma (rádio Mac/Windows), aceite do aviso de privacidade (checkbox com link para o aviso) e widget Cloudflare Turnstile. A chave pública vem da variável de build `PUBLIC_TURNSTILE_SITEKEY`; sem ela a página mostra "cadastro indisponível" no lugar do envio. O build dos testes usa a chave de teste pública da Cloudflare `1x00000000000000000000AA`.
- Envio: `POST https://downloads.sarzel.com/api/v2/cadastro` com JSON de exatamente seis chaves `{nome, sobrenome, email, plataforma: 'macos'|'windows', aceite_privacidade: true, turnstile}` (o servidor recusa chave a mais). Contrato em `src/v2/cadastro.ts` do branch `plano/cadastro-science-tutor` de `../sarzel-dist`: `201 {ok:true}`; erros `{error, message}`, `message` em pt-BR, status 400/403/429/503. Sucesso troca o formulário pela confirmação com o link do passo a passo da plataforma escolhida.
- Entradas inválidas:
  - campo vazio, e-mail malformado (mesma regra do servidor, `EMAIL_RE`), plataforma não escolhida, aceite desmarcado ou Turnstile ainda sem resposta: mensagem no campo, no navegador, e o `fetch` não é chamado;
  - sarzel-dist fora (erro de rede) ou sem resposta em 15 s (AbortController): mensagem de falha de conexão, e todos os campos mantêm o que foi digitado;
  - resposta 4xx (e 503) com `{message}`: mostra a `message` do servidor; resposta sem JSON válido: mensagem genérica. Depois de qualquer falha o Turnstile é reiniciado (o token é de uso único);
  - JavaScript desligado: `<noscript>` com o aviso de que o formulário precisa de JavaScript, e o `<fieldset>` sai `disabled` no HTML (o JS o habilita), para o formulário nunca enviar por GET com o e-mail na URL.
- Aviso de privacidade em página própria, `/downloads/science-tutor/privacidade/` e `/en/downloads/science-tutor/privacy/`: o que é guardado (nome, sobrenome, e-mail, data do aceite; também o hash do token de acesso e, por 24 h, um HMAC do IP para o limite de pedidos), para quê (enviar o acesso ao app), onde (Cloudflare, sarzel.com; e-mail enviado pelo Resend), por quanto tempo (enquanto o cadastro existir, até o pedido de exclusão) e como pedir a exclusão: formulário com e-mail e Turnstile que faz `POST https://downloads.sarzel.com/api/v2/cadastro/exclusao` com `{email, turnstile}` (o contrato real exige o Turnstile) e mostra, no 202, que a confirmação chega por link no e-mail, válido por 24 h. Topo com o aviso visível "RASCUNHO — aguardando aprovação do dono" (EN: "DRAFT — awaiting owner approval"); enquanto o rascunho existir (uma constante em `src/data/science-tutor.mjs`), a página tem `<meta name="robots" content="noindex">` e fica fora do sitemap.
- Passo a passo em PT, nas URLs que o e-mail do sarzel-dist envia (`/downloads/science-tutor/passo-a-passo/mac` e `/windows`; o build grava `.../mac/index.html` e a Cloudflare Pages redireciona a URL sem barra):
  - Mac: baixar o DMG pelo link do e-mail, arrastar para Aplicativos, abrir, colar o token, criar a senha do cofre, guardar a chave de recuperação, ativar o Touch ID, colar a chave da IA;
  - Windows: abrir o link da Microsoft Store do e-mail, instalar, abrir, colar o token, criar a senha do cofre, guardar a chave de recuperação, colar a chave da IA.
- Visual: o do site, sem sistema novo — tokens de `src/styles/global.css` (`--card`, `--line`, `--text`, `--muted`, `--accent`, `--serif`, `--sans`), claro e escuro, `Base.astro` com `Header` e `Footer`.
- Nada de deploy nem de publicação. A pasta `writings/` do dono fica fora do git, intocada.

Verificação: os testes do repo (`npm test`, que faz um build com `FIXTURES=1` e `PUBLIC_TURNSTILE_SITEKEY` de teste) leem o `dist/` gerado; os testes do formulário carregam o HTML gerado em happy-dom com `fetch` simulado. Cada aceite termina conferindo que nada de `writings/` entrou no git.

## Milestones

| id | nome | aceite (comando) | status |
|---|---|---|---|
| M1 | página do Science Tutor com o formulário (PT/EN) | npx vitest run tests/science-tutor.test.ts tests/turnstile.test.ts && npm test && test -z "$(git ls-files writings)" | verificado |
| M2 | envio do cadastro e entradas inválidas | npx vitest run tests/cadastro-form.test.ts && npm test && test -z "$(git ls-files writings)" | verificado |
| M3 | aviso de privacidade em rascunho com pedido de exclusão | npx vitest run tests/privacidade.test.ts tests/exclusao-form.test.ts && npm test && test -z "$(git ls-files writings)" | verificado |
| M4 | passo a passo Mac e Windows | npx vitest run tests/passo-a-passo.test.ts && npm test && test -z "$(git ls-files writings)" | pendente |

### O que cada aceite afirma

- **M1** — `tests/turnstile.test.ts`: o leitor da chave devolve a chave aparada ou `null` (vazia/ausente). `tests/science-tutor.test.ts` (sobre o `dist/`): as duas páginas existem, com título, descrição, `canonical`, `hreflang` uma para a outra; texto de apresentação (PDF, Mac e Windows, chave própria da IA); formulário com os cinco campos, `novalidate`, `maxlength="100"` nos textos, rádios `macos`/`windows`, checkbox com link para a rota do aviso de privacidade do mesmo idioma, `<div class="cf-turnstile" data-sitekey="1x00000000000000000000AA">`, script do Turnstile, `<fieldset disabled>` e `<noscript>` com o aviso de JavaScript. Mais o `rules-of-ux` configurado para as telas novas.
- **M2** — `tests/cadastro-form.test.ts` (happy-dom, HTML do `dist/`, `fetch` simulado): cada entrada inválida mostra a mensagem do campo e não chama o `fetch`; envio válido faz um `POST` na URL do contrato com exatamente as seis chaves e `Content-Type: application/json`; 201 mostra a confirmação com o link do passo a passo da plataforma; 400/403/429/503 mostram a `message` do servidor; erro de rede e timeout de 15 s (timers falsos) mostram a falha de conexão com os campos intactos; o Turnstile é reiniciado depois de falha; o botão fica desabilitado durante o envio (sem envio duplo).
- **M3** — `tests/privacidade.test.ts` (sobre o `dist/`): páginas PT/EN com o aviso de rascunho no topo, `noindex`, ausentes do `sitemap-0.xml`, sem `data-pagefind-body`; texto com o que é guardado, finalidade, onde, prazo e como excluir. `tests/exclusao-form.test.ts` (happy-dom): e-mail vazio/malformado não chama o `fetch`; envio válido manda `{email, turnstile}` à rota de exclusão; 202 mostra o aviso do link no e-mail; 4xx mostra a `message`; rede/timeout mantém o e-mail digitado.
- **M4** — `tests/passo-a-passo.test.ts` (sobre o `dist/`): `downloads/science-tutor/passo-a-passo/mac/index.html` e `.../windows/index.html` existem, com os passos na ordem pedida (índices crescentes no HTML) e link de volta à página do Science Tutor; a página de cadastro e a confirmação do M2 apontam para elas.
