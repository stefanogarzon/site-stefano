# stefanogarzon.com

Site pessoal (Astro, estático, PT/EN). Conteúdo em `src/content/`, painel em `/admin` (Sveltia CMS).

## Comandos
- `npm run dev` — servidor local em http://localhost:4321
- `npm test` — build + testes
- `node scripts/cms-config.mjs` — regenera `public/admin/config.yml` (editar o script, não o YAML)
- `node scripts/og-default.mjs` — regenera a imagem padrão de compartilhamento

## Escrita
- Fórmulas: `$x$` inline, `$$...$$` em bloco. `$` seguido de espaço não abre fórmula (ex.: "US$ 10").
- Diagramas: bloco ```` ```mermaid ````.
- Tradução: mesma `translationKey` nas versões PT e EN.
- `draft: true` não publica.

## Variáveis de build
- `PUBLIC_TURNSTILE_SITEKEY` — chave pública do Cloudflare Turnstile do formulário de cadastro do Science Tutor (`/downloads/science-tutor/`). Modelo em `.env.example`. Sem ela, a página mostra "cadastro indisponível" e o build não quebra.
- Antes de publicar, a variável tem de existir nas variáveis de build do projeto na Cloudflare Pages.
- Os testes (`npm test`) usam a chave de teste pública da Cloudflare `1x00000000000000000000AA`, que sempre passa.
