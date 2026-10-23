import { getCollection } from 'astro:content';
import { categorySlug, slugOf } from '../i18n/utils';
import { categories, type Lang } from '../i18n/ui';

export const entryPaths = async (collection: 'reviews' | 'posts', lang: Lang) =>
  (await getCollection(collection, (e) => e.data.lang === lang && !e.data.draft)).map((entry) => ({
    params: { slug: slugOf(entry) },
    props: { entry },
  }));

export const categoryPaths = (lang: Lang) =>
  categories.map((category) => ({ params: { category: categorySlug(category, lang) }, props: { category } }));
