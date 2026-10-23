// Gera public/admin/config.yml (Sveltia CMS). Rodar: node scripts/cms-config.mjs
// Editar aqui, não no YAML gerado.
import { writeFileSync } from 'node:fs';
import { stringify } from 'yaml';

const REPO = 'stefanogarzon/site-stefano';

const md = (name, label, required = true) => ({ name, label, widget: 'markdown', required });

const common = (lang) => ({
  head: [
    { name: 'title', label: 'Título', widget: 'string' },
    { name: 'date', label: 'Data', widget: 'datetime', format: 'YYYY-MM-DD', time_format: false },
    { name: 'lang', label: 'Idioma', widget: 'hidden', default: lang },
    { name: 'translationKey', label: 'Chave de tradução (igual nas versões PT e EN)', widget: 'string' },
    { name: 'description', label: 'Descrição curta (Google e Instagram)', widget: 'text' },
  ],
  tail: [
    { name: 'tags', label: 'Tags', widget: 'list', required: false, default: [] },
    { name: 'cover', label: 'Imagem de capa', widget: 'image', required: false },
    { name: 'draft', label: 'Rascunho (não publicar)', widget: 'boolean', default: true },
  ],
});

const reviews = (lang) => {
  const c = common(lang);
  return {
    name: `reviews_${lang}`,
    label: lang === 'pt' ? 'Avaliações (PT)' : 'Avaliações (EN)',
    folder: `src/content/reviews/${lang}`,
    create: true,
    slug: '{{slug}}',
    extension: 'md',
    format: 'frontmatter',
    sortable_fields: ['date', 'title'],
    fields: [
      ...c.head,
      { name: 'reference', label: 'Referência (Vancouver)', widget: 'text' },
      { name: 'doi', label: 'DOI (só o código, ex. 10.1056/...)', widget: 'string', required: false },
      { name: 'design', label: 'Desenho do estudo', widget: 'string' },
      { name: 'n', label: 'n', widget: 'number', value_type: 'int', required: false },
      md('summary', 'Resumo'),
      md('strengths', 'Pontos fortes'),
      md('problems', 'Problemas metodológicos'),
      md('opinion', 'Opinião'),
      ...c.tail,
    ],
  };
};

const posts = (lang) => {
  const c = common(lang);
  const cats = lang === 'pt'
    ? [['Estatística', 'estatistica'], ['Pesquisa', 'pesquisa'], ['Computação', 'computacao']]
    : [['Statistics', 'estatistica'], ['Research', 'pesquisa'], ['Computing', 'computacao']];
  return {
    name: `posts_${lang}`,
    label: lang === 'pt' ? 'Textos (PT)' : 'Textos (EN)',
    folder: `src/content/posts/${lang}`,
    create: true,
    slug: '{{slug}}',
    extension: 'md',
    format: 'frontmatter',
    sortable_fields: ['date', 'title'],
    fields: [
      ...c.head,
      { name: 'category', label: 'Categoria', widget: 'select', options: cats.map(([label, value]) => ({ label, value })) },
      ...c.tail,
      md('body', 'Texto'),
    ],
  };
};

const pageFile = (name, label, lang) => ({
  name: `${name}_${lang}`,
  label: `${label} (${lang.toUpperCase()})`,
  file: `src/content/pages/${name}/${lang}.md`,
  fields: [
    { name: 'title', label: 'Título', widget: 'string' },
    { name: 'description', label: name === 'home' ? 'Frase de apresentação' : 'Descrição', widget: 'text' },
    md('body', 'Texto'),
  ],
});

const config = {
  // Login por token de acesso (fine-grained PAT) colado no painel; sem servidor OAuth.
  backend: { name: 'github', repo: REPO, branch: 'main' },
  site_url: 'https://stefanogarzon.com',
  locale: 'pt',
  media_folder: 'public/images/uploads',
  public_folder: '/images/uploads',
  slug: { encoding: 'ascii', clean_accents: true },
  omit_empty_optional_fields: true,
  collections: [
    reviews('pt'), reviews('en'), posts('pt'), posts('en'),
    {
      name: 'pages',
      label: 'Páginas fixas',
      files: [pageFile('home', 'Início', 'pt'), pageFile('home', 'Início', 'en'), pageFile('about', 'Sobre', 'pt'), pageFile('about', 'Sobre', 'en')],
    },
  ],
};

writeFileSync('public/admin/config.yml', `# Gerado por scripts/cms-config.mjs — não editar à mão.\n${stringify(config)}`);
