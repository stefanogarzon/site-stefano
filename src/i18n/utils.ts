import { categorySlugs, ui, type Category, type Lang, type UiKey } from './ui';

export type Kind = 'reviews' | 'posts';

/** Forma mínima de uma entrada de conteúdo, compatível com astro:content. */
export interface Entry {
  id: string;
  collection: Kind;
  data: { lang: Lang; translationKey: string; date: Date; draft: boolean; title: string };
}

export const t = (lang: Lang, key: UiKey): string => ui[lang][key];

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');

export const routes = (lang: Lang) => {
  const p = lang === 'pt' ? '' : '/en';
  return {
    home: `${p}/`,
    reviews: lang === 'pt' ? '/avaliacoes/' : '/en/reviews/',
    posts: lang === 'pt' ? '/textos/' : '/en/posts/',
    about: lang === 'pt' ? '/sobre/' : '/en/about/',
    rss: `${p}/rss.xml`,
  };
};

export const categorySlug = (cat: Category, lang: Lang) => categorySlugs[lang][cat];

export const categoryUrl = (cat: Category, lang: Lang) => `${routes(lang).posts}${categorySlug(cat, lang)}/`;

/** Slug da entrada: id vem como "pt/slug". */
export const slugOf = (entry: Pick<Entry, 'id'>) => entry.id.split('/').pop()!;

export const entryUrl = (entry: Entry) => `${routes(entry.data.lang)[entry.collection]}${slugOf(entry)}/`;

export const published = <T extends Entry>(entries: T[]): T[] =>
  entries.filter((e) => !e.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const findTranslation = <T extends Entry>(entry: T, all: T[]): T | undefined =>
  published(all).find(
    (e) =>
      e.collection === entry.collection &&
      e.data.lang !== entry.data.lang &&
      e.data.translationKey === entry.data.translationKey,
  );

export const alternateUrl = (entry: Entry, all: Entry[]) => {
  const tr = findTranslation(entry, all);
  return tr ? entryUrl(tr) : routes(otherLang(entry.data.lang)).home;
};

export const formatDate = (date: Date, lang: Lang) => {
  const s = new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
  return lang === 'pt' ? s.replace(/ de /g, ' ').replace('.', '') : s;
};
