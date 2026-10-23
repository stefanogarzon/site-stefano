import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories, langs } from './i18n/ui';

/** Nos testes (FIXTURES=1) o conteúdo vem de tests/fixtures/, nunca publicado. */
const base = (name: string) => (process.env.FIXTURES ? `./tests/fixtures/${name}` : `./src/content/${name}`);

/** Campo opcional: o CMS pode gravar "" ou null quando vazio. */
const optional = <T extends z.ZodTypeAny>(t: T) => z.preprocess((v) => (v === '' || v === null ? undefined : v), t.optional());

const common = {
  title: z.string(),
  date: z.coerce.date(),
  lang: z.enum(langs),
  translationKey: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  /** Caminho público, ex. /images/uploads/capa.jpg (gravado pelo CMS). */
  cover: optional(z.string()),
  draft: z.boolean().default(false),
};

const reviews = defineCollection({
  loader: glob({ pattern: '{pt,en}/*.md', base: base('reviews') }),
  schema: z.object({
      ...common,
      reference: z.string(),
      doi: optional(z.string()),
      design: z.string(),
      n: optional(z.number().int().positive()),
      summary: z.string(),
      strengths: z.string(),
      problems: z.string(),
      opinion: z.string(),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '{pt,en}/*.md', base: base('posts') }),
  schema: z.object({ ...common, category: z.enum(categories) }),
});

/** Textos editáveis de páginas fixas (home, sobre), um arquivo por idioma. */
const pages = defineCollection({
  loader: glob({ pattern: '*/{pt,en}.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { reviews, posts, pages };
