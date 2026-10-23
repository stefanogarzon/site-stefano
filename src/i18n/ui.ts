export const langs = ['pt', 'en'] as const;
export type Lang = (typeof langs)[number];

export const categories = ['estatistica', 'pesquisa', 'computacao'] as const;
export type Category = (typeof categories)[number];

export const categorySlugs: Record<Lang, Record<Category, string>> = {
  pt: { estatistica: 'estatistica', pesquisa: 'pesquisa', computacao: 'computacao' },
  en: { estatistica: 'statistics', pesquisa: 'research', computacao: 'computing' },
};

export const ui = {
  pt: {
    'nav.reviews': 'Avaliações',
    'nav.posts': 'Textos',
    'nav.about': 'Sobre',
    'kind.reviews': 'Avaliação crítica',
    'kind.posts': 'Texto',
    recent: 'Recentes',
    eyebrow: 'Médico e pesquisador',
    empty: 'Nada publicado ainda.',
    all: 'Todos',
    reference: 'Referência',
    design: 'Desenho',
    summary: 'Resumo',
    strengths: 'Pontos fortes',
    problems: 'Problemas metodológicos',
    opinion: 'Opinião',
    'cat.estatistica': 'Estatística',
    'cat.pesquisa': 'Pesquisa',
    'cat.computacao': 'Computação',
    'lang.other': 'English',
    'notfound.title': 'Página não encontrada',
    'notfound.back': 'Voltar ao início',
  },
  en: {
    'nav.reviews': 'Reviews',
    'nav.posts': 'Posts',
    'nav.about': 'About',
    'kind.reviews': 'Critical review',
    'kind.posts': 'Post',
    recent: 'Recent',
    eyebrow: 'Physician and researcher',
    empty: 'Nothing published yet.',
    all: 'All',
    reference: 'Reference',
    design: 'Design',
    summary: 'Summary',
    strengths: 'Strengths',
    problems: 'Methodological issues',
    opinion: 'Opinion',
    'cat.estatistica': 'Statistics',
    'cat.pesquisa': 'Research',
    'cat.computacao': 'Computing',
    'lang.other': 'Português',
    'notfound.title': 'Page not found',
    'notfound.back': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];
