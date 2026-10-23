import { getCollection } from 'astro:content';
import { categoryCollisions, categorySlug, slugOf } from '../i18n/utils';
import { categories, type Lang } from '../i18n/ui';

export async function entryPaths(collection: 'reviews' | 'posts', lang: Lang) {
  const entries = await getCollection(collection, (e) => e.data.lang === lang && !e.data.draft);
  const clash = collection === 'posts' ? categoryCollisions(entries) : [];
  if (clash.length) throw new Error(`Slug igual ao de uma categoria, renomeie o arquivo: ${clash.join(', ')}`);
  return entries.map((entry) => ({ params: { slug: slugOf(entry) }, props: { entry } }));
}

export const categoryPaths = (lang: Lang) =>
  categories.map((category) => ({ params: { category: categorySlug(category, lang) }, props: { category } }));
