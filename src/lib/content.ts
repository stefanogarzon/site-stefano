import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { published } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

export type Item = CollectionEntry<'reviews'> | CollectionEntry<'posts'>;

/** Todas as entradas publicadas (reviews + posts), ambos os idiomas. */
export async function allItems(): Promise<Item[]> {
  const [r, p] = await Promise.all([getCollection('reviews'), getCollection('posts')]);
  return published<Item>([...r, ...p]);
}

export const itemsIn = async (lang: Lang) => (await allItems()).filter((e) => e.data.lang === lang);

export async function page(name: 'home' | 'about', lang: Lang) {
  const entry = await getEntry('pages', `${name}/${lang}`);
  if (!entry) throw new Error(`Página ausente: src/content/pages/${name}/${lang}.md`);
  return entry;
}

/** Tipo do item para a home: avaliação ou a categoria do texto. */
const kind = (e: Item) => (e.collection === 'reviews' ? 'reviews' : e.data.category);

/** Até `n` itens mais recentes de cada tipo, em ordem de data. */
export function perKind(items: Item[], n: number): Item[] {
  const count = new Map<string, number>();
  return items.filter((e) => {
    const c = count.get(kind(e)) ?? 0;
    count.set(kind(e), c + 1);
    return c < n;
  });
}
