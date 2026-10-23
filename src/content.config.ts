import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories, langs } from './i18n/ui';

const common = ({ image }: { image: () => z.ZodTypeAny }) => ({
  title: z.string(),
  date: z.coerce.date(),
  lang: z.enum(langs),
  translationKey: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  cover: image().optional(),
  draft: z.boolean().default(false),
});

const reviews = defineCollection({
  loader: glob({ pattern: '{pt,en}/*.md', base: './src/content/reviews' }),
  schema: (ctx) =>
    z.object({
      ...common(ctx),
      reference: z.string(),
      doi: z.string().optional(),
      design: z.string(),
      n: z.number().int().positive().optional(),
      summary: z.string(),
      strengths: z.string(),
      problems: z.string(),
      opinion: z.string(),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '{pt,en}/*.md', base: './src/content/posts' }),
  schema: (ctx) => z.object({ ...common(ctx), category: z.enum(categories) }),
});

/** Textos editáveis de páginas fixas (home, sobre), um arquivo por idioma. */
const pages = defineCollection({
  loader: glob({ pattern: '*/{pt,en}.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { reviews, posts, pages };
