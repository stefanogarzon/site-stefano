# Site profissional — drstefanogarzon.com

## Intenção
Site pessoal de Stefano Garzon (médico e pesquisador) para publicar avaliações críticas de artigos científicos e textos sobre estatística, pesquisa e computação. Visitantes chegam por link no Instagram profissional ou por busca no Google, direto num texto específico.

## Objetivos
- Cada texto abre rápido no celular e é bem indexado no Google (título, descrição, metadados Open Graph para preview no Instagram, sitemap).
- Stefano escreve e edita sozinho num painel visual, com upload de imagens, desenhos e esquemas, sem tocar em código.
- Conteúdo em Markdown, versionado no GitHub dele.
- Custo recorrente zero, além da renovação do domínio.

## Não-objetivos
- Comentários, newsletter, login de leitores, analytics invasivo, monetização.

## Anti-objetivos
- Visual poluído: banners, pop-ups, ícones decorativos, sidebars, carrosséis.
- Ferramenta que exija Stefano editar código para publicar.

## Decisões do usuário
- Textos em Markdown; painel com editor visual para ajustes e imagens.
- Avaliações críticas com estrutura fixa, incluindo um item "Opinião".
- Estilo visual: "acadêmico" (A) com estética tipo Anthropic: limpo, moderno, fácil de ler, sem clutter, honesto. Mockup aprovado: `.superpowers/brainstorm/41951-1792754410/content/estilo-v2.html`.
- Tem conta GitHub; não tem conta Cloudflare (criar junto na publicação).
- Domínio registrado no registro.br; acesso ao painel via Claude in Chrome.

## Stack (decisão do Claude)
- **Astro** (site estático), coleções de conteúdo `avaliacoes` e `textos` em Markdown.
- **Sveltia CMS** em `/admin` (compatível com config Decap), backend GitHub, imagens em `public/images/uploads`.
- **Cloudflare Pages**: build automático a cada commit no GitHub.
- **DNS**: mudar os servidores DNS do domínio no registro.br para os nameservers da Cloudflare; `www` redireciona para o domínio raiz.
- Login do CMS: autenticação GitHub via OAuth, usando o worker `sveltia-cms-auth` hospedado na Cloudflare (gratuito).

## Estrutura
- `/` início: nome, frase de apresentação, lista de recentes (tipo, data, título).
- `/avaliacoes/` lista; `/avaliacoes/<slug>/` avaliação.
- `/textos/` lista com filtro por categoria (Estatística, Pesquisa, Computação); `/textos/<slug>/`.
- `/sobre/` biografia, formação, link do Instagram e contato.
- RSS em `/rss.xml`, sitemap, página 404.

## Campos da avaliação crítica (formulário no CMS)
Título; data; referência (autores, revista, ano, volume, páginas, formato Vancouver); DOI (link); desenho do estudo e n; resumo; pontos fortes; problemas metodológicos; opinião; tags; imagem de capa opcional (usada no preview do Instagram). Página renderiza nessa ordem, com Opinião num bloco de fundo levemente diferente. Resumo, pontos fortes, problemas e opinião são campos Markdown separados, cada um aceitando imagens e fórmulas (decisão do Claude).

## Rascunhos e repositório (decisão do Claude)
Repositório público; rascunho via campo `draft: true` (não publicado no site, mas visível no GitHub). Filtro de categorias em `/textos/` por páginas estáticas (`/textos/estatistica/` etc.), indexáveis.

## Campos dos textos
Título, data, categoria, descrição curta (SEO), corpo em Markdown com imagens, tags, capa opcional.

## Visual
- Fundo `#faf9f5`, texto `#191919`, cinza `#555`, linhas `#e6e3da`, destaque único terracota `#c96442` (rótulo do tipo de texto e links).
- Títulos em serifada (ex.: Source Serif 4), corpo sem serifa (ex.: Inter), auto-hospedadas.
- Coluna de leitura ~680px, muito espaço em branco, sem caixas exceto o bloco Opinião.
- Suporte a modo escuro com a mesma paleta invertida (decisão do Claude).
- Fórmulas matemáticas renderizadas com KaTeX; blocos de código com realce (relevante para estatística/computação).

## Fórmulas e esquemas (decisão do usuário)
- Fórmulas digitadas em LaTeX (`$...$` e `$$...$$`), renderizadas no site com KaTeX.
- Esquemas em Mermaid: blocos ```` ```mermaid ```` no Markdown. Renderização no navegador com mermaid.js, carregado só nas páginas que têm diagrama, com tema nas cores do site (decisão do Claude; evita navegador headless no build da Cloudflare). Imagens enviadas pelo painel continuam disponíveis para desenhos.

## Domínios e e-mail (decisão do usuário)
- Registrar `drstefanogarzon.com` (Cloudflare Registrar) como domínio principal.
- `drstefanogarzon.com.br` (registro.br): nameservers para a Cloudflare, redirecionamento 301 de todas as URLs para o .com. Sem e-mail ou outros registros a migrar.
- E-mail próprio no .com via Zoho Mail (plano gratuito): registros MX, SPF, DKIM e DMARC na Cloudflare. Endereço público a definir (ex.: contato@).

## Idioma (decisão do usuário: bilíngue)
- Português em `/`, inglês em `/en/` (rotas espelhadas: `/en/reviews/`, `/en/posts/`, `/en/about/`).
- i18n nativo do Astro; interface (menu, rótulos das seções da avaliação, datas) traduzida.
- Cada texto tem um campo de idioma e um identificador comum que liga as versões PT/EN; seletor de idioma aponta para a tradução quando existe, senão para a home do outro idioma. Tags `hreflang` e sitemap com alternâncias.
- Um texto pode existir em só um idioma (decisão do Claude).
- No CMS, coleções separadas por idioma (decisão do Claude; o i18n do Sveltia pode ser usado se funcionar bem com o schema).

## Deixado ao construtor
Textos de exemplo (uma avaliação e um texto fictícios, marcados como rascunho), favicon com iniciais, detalhes de tipografia e espaçamento dentro da linha aprovada.

## Conteúdo pendente do Stefano
Frase de apresentação, texto do "Sobre", foto (opcional), link exato do Instagram, e-mail de contato público.
