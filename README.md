# drstefanogarzon.com

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
