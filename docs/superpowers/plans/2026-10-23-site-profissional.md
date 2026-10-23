# Site profissional drstefanogarzon.com — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Site estático bilíngue (PT/EN) com avaliações críticas e textos, editável por painel visual, publicado em drstefanogarzon.com.

**Architecture:** Astro gera HTML estático a partir de Markdown em `src/content/`. Sveltia CMS em `/admin` grava commits no GitHub; Cloudflare Pages reconstrói a cada push. Testes: Vitest para helpers e um teste de build que inspeciona `dist/`.

**Tech Stack:** Node 22, Astro 5, Vitest, remark-math + rehype-katex, mermaid (cliente), @astrojs/sitemap, @astrojs/rss, Sveltia CMS, Cloudflare Pages/Registrar/Workers, Zoho Mail.

**Spec:** `docs/superpowers/specs/2026-10-23-site-profissional-design.md`

## Global Constraints
- Cores: fundo `#faf9f5`, texto `#191919`, cinza `#555`, linhas `#e6e3da`, destaque `#c96442`; modo escuro via `prefers-color-scheme`.
- Títulos Source Serif 4, corpo Inter, auto-hospedadas (`@fontsource`). Coluna de leitura 680px.
- PT em `/`, EN em `/en/`. Rotas PT: `/avaliacoes/`, `/textos/`, `/textos/<categoria>/`, `/sobre/`. EN: `/en/reviews/`, `/en/posts/`, `/en/posts/<category>/`, `/en/about/`.
- Categorias (slug): `estatistica|pesquisa|computacao` (EN: `statistics|research|computing`).
- `draft: true` nunca aparece em `dist/`, listas, RSS ou sitemap.
- Sem banners, pop-ups, sidebars, ícones decorativos, analytics.
- Repositório GitHub público. `/verificar-seguranca commit` antes de commits; `/verificar-seguranca publicar` antes do deploy (preferência do usuário).

## Review Focus
- Texto só em um idioma: seletor de idioma leva à home do outro idioma, sem link quebrado → teste em Task 2 e Task 6.
- Rascunho vazando para lista/RSS/sitemap → teste de build em Task 4 e Task 6.
- Fórmula com `$` em texto comum (ex.: "US$ 10") virando math → teste em Task 5.
- Avaliação sem DOI ou sem capa (opcionais) quebrando página → teste de build em Task 4.
- Mermaid em modo escuro ilegível → verificação visual em Task 5.

---

### Task 1: Scaffold e harness de testes

**Files:** Create `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `tests/build.test.ts`, `README.md`

- [ ] `git init`; `npm create astro@latest . -- --template minimal --typescript strict --no-install`; `npm i`; `npm i -D vitest`.
- [ ] `astro.config.mjs`: `site: 'https://drstefanogarzon.com'`, `i18n: { defaultLocale: 'pt', locales: ['pt','en'], routing: { prefixDefaultLocale: false } }`, `trailingSlash: 'always'`.
- [ ] `tests/build.test.ts`: `beforeAll` roda `astro build` uma vez; helper `read(path): string` lê `dist/<path>`. Primeiro teste: `dist/index.html` existe e contém `lang="pt"`.
- [ ] Scripts: `"test": "vitest run"`, `"build": "astro build"`. Rodar `npm test` → PASS.
- [ ] Commit `chore: scaffold astro`.

### Task 2: Schemas de conteúdo e i18n

**Files:** Create `src/content.config.ts`, `src/i18n/ui.ts`, `src/i18n/utils.ts`, `tests/i18n.test.ts`

**Produces:**
- Coleções `reviews` e `posts` (glob em `src/content/{reviews,posts}/{pt,en}/*.md`). Campos comuns: `title`, `date: z.coerce.date()`, `lang: 'pt'|'en'`, `translationKey: string`, `description: string`, `tags: string[] = []`, `cover?: image`, `draft: boolean = false`.
- `reviews` extra: `reference: string` (Vancouver), `doi?: string`, `design: string`, `n?: number`, `summary`, `strengths`, `problems`, `opinion` (strings Markdown).
- `posts` extra: `category: 'estatistica'|'pesquisa'|'computacao'`; corpo Markdown.
- `ui.ts`: `ui: Record<Lang, Record<UiKey,string>>` com menu, rótulos de seção (Resumo/Summary, Pontos fortes/Strengths, Problemas metodológicos/Methodological issues, Opinião/Opinion), nomes de categoria.
- `utils.ts`: `t(lang, key)`, `routes(lang)` → objeto de caminhos, `categorySlug(cat, lang)`, `findTranslation(entries, entry) → entry | undefined`, `alternateUrl(entry, all) → string` (URL da tradução ou home do outro idioma), `published(entries)` (filtra draft e ordena por data desc), `formatDate(date, lang)`.

- [ ] Testes: `alternateUrl` retorna `/en/reviews/<slug>/` quando existe tradução e `/en/` quando não; `published` remove draft e ordena; `categorySlug('estatistica','en') === 'statistics'`; `formatDate(new Date('2026-10-20'),'pt') === '20 out 2026'`.
- [ ] FAIL → implementar → PASS. Commit `feat: content schemas and i18n helpers`.

### Task 3: Layout base e página inicial

**Files:** Create `src/styles/global.css`, `src/layouts/Base.astro`, `src/components/{Header,Footer,LangSwitch,PostList}.astro`, `src/pages/index.astro`, `src/pages/en/index.astro`, `src/content/home/{pt,en}.md`

**Consumes:** Task 2 helpers. **Produces:** `Base` props `{ title, description, lang, alternate, image?, type?: 'website'|'article' }`; `PostList` props `{ items: {url,title,date,kind}[], lang }`.

- [ ] Teste de build: home PT contém nome, links do menu e lista "Recentes" mesclando reviews+posts publicados; `/en/index.html` tem `lang="en"` e "Recent".
- [ ] Implementar seguindo o mockup `estilo-v2.html` (header nome à esquerda + menu à direita, frase grande serifada, lista com linhas finas, rótulo do tipo em terracota). Frase de apresentação vem de `src/content/home/<lang>.md` (editável no CMS).
- [ ] PASS; conferir visualmente em `npm run dev` no celular (390px) e desktop. Commit.

### Task 4: Avaliações e textos

**Files:** Create `src/pages/avaliacoes/{index,[slug]}.astro`, `src/pages/textos/{index,[category]/index,[slug]}.astro`, espelhos em `src/pages/en/{reviews,posts}/...`, `src/components/ReviewBody.astro`, `src/lib/markdown.ts`, conteúdo de exemplo `draft: true` + um exemplo publicado de cada tipo em PT e um em EN.

**Produces:** `renderMarkdown(md: string): Promise<string>` em `src/lib/markdown.ts` usando o mesmo pipeline remark/rehype do Astro (Task 5 adiciona plugins nele), para os campos de avaliação.

- [ ] Testes de build: página de avaliação mostra referência, link DOI, seções na ordem Resumo → Pontos fortes → Problemas → Opinião, e Opinião dentro de `.opinion`; avaliação sem DOI e sem capa gera página sem erro; rascunho não existe em `dist/` nem nas listas; `/textos/estatistica/` lista só essa categoria; `/en/posts/statistics/` existe.
- [ ] Implementar; PASS. Commit.

### Task 5: Fórmulas, Mermaid e código

**Files:** Modify `astro.config.mjs`, `src/lib/markdown.ts`, `src/layouts/Base.astro`; Create `src/scripts/mermaid.ts`

- [ ] Testes de build (fixture publicada em teste): `$$\bar{x}$$` gera `class="katex"`; "custa US$ 10 e US$ 20" não gera katex (usar `remark-math` com `singleDollarTextMath: true` e validar; se falhar, exigir espaço-regra do remark-math e documentar no README); bloco ```` ```mermaid ```` vira `<pre class="mermaid">` e a página inclui o script de mermaid apenas se houver diagrama; bloco de código R/Python tem realce Shiki.
- [ ] `mermaid.ts`: import dinâmico de `mermaid`, `theme: 'base'` com `themeVariables` das cores do site, recalculadas no modo escuro.
- [ ] PASS; checar diagrama nos dois temas. Commit.

### Task 6: Sobre, SEO, RSS, 404

**Files:** Create `src/pages/{sobre,en/about,404}.astro`, `src/pages/rss.xml.ts`, `src/pages/en/rss.xml.ts`, `src/content/about/{pt,en}.md`, `public/favicon.svg` (iniciais SG), `public/robots.txt`

- [ ] Testes de build: toda página de conteúdo tem `<title>`, `meta description`, `og:title`, `og:image` (capa ou imagem padrão), `link rel=canonical`, `hreflang` pt/en/x-default (só quando há tradução; senão só o próprio); `sitemap-index.xml` existe e não contém rascunhos; `rss.xml` tem itens publicados PT; `404.html` existe.
- [ ] Integrar `@astrojs/sitemap` com `i18n`. Imagem OG padrão gerada estaticamente (`public/og-default.png`, 1200×630, nome + tagline).
- [ ] PASS. Commit.

### Task 7: Painel Sveltia CMS

**Files:** Create `public/admin/index.html`, `public/admin/config.yml`

- [ ] `config.yml`: `backend: { name: github, repo: <usuario>/site-stefano, branch: main, base_url: <url do worker> }`, `media_folder: public/images/uploads`, `public_folder: /images/uploads`. Coleções `reviews_pt`, `reviews_en`, `posts_pt`, `posts_en`, `home`, `about`, com campos idênticos aos schemas da Task 2 (widgets `markdown` para summary/strengths/problems/opinion/body, `image` para cover, `boolean` draft default false, `select` category).
- [ ] Teste: `tests/cms.test.ts` lê `config.yml` (yaml) e compara nomes de campo de cada coleção com as chaves do schema zod — evita divergência.
- [ ] Testar localmente com `npx @sveltia/cms` em modo local (botão "Work with Local Repository" no Chrome). Commit.

### Task 8: Publicação (manual, com o usuário, via Claude in Chrome)

Passos que exigem contas/pagamento — confirmar com o usuário antes de cada ação com custo ou irreversível.
- [ ] Rodar `/verificar-seguranca publicar`.
- [ ] Criar repo público `site-stefano` no GitHub e fazer push.
- [ ] Criar conta Cloudflare; registrar `drstefanogarzon.com` (pago — confirmar).
- [ ] Cloudflare Pages: conectar repo, build `npm run build`, output `dist`, `NODE_VERSION=22`; adicionar domínio `drstefanogarzon.com` e `www` (redireciona para raiz).
- [ ] Worker `sveltia-cms-auth` + GitHub OAuth App (callback do worker); preencher `base_url` no config.yml; testar login em `/admin`.
- [ ] Adicionar `drstefanogarzon.com.br` à Cloudflare; no registro.br trocar os servidores DNS pelos da Cloudflare; Redirect Rule 301 `*drstefanogarzon.com.br/*` → `https://drstefanogarzon.com/${2}`.
- [ ] Zoho Mail grátis: verificar domínio (TXT), MX, SPF, DKIM, DMARC na Cloudflare; criar endereço público; testar envio/recebimento.
- [ ] Verificação final: `curl -I` em .com, www, .com.br/qualquer-caminho; Google Search Console com sitemap. Atualizar `src/content/about` com o e-mail.
