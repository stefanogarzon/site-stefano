import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';

const cfg = parse(readFileSync('public/admin/config.yml', 'utf8'));
const col = (name: string) => cfg.collections.find((c: { name: string }) => c.name === name);
const fieldNames = (c: { fields: { name: string }[] }) => c.fields.map((f) => f.name);
const frontKeys = (file: string) => {
  const fm = readFileSync(file, 'utf8').split('---')[1];
  return Object.keys(parse(fm));
};

const reviewFields = ['title', 'date', 'lang', 'translationKey', 'description', 'reference', 'doi', 'design', 'n', 'summary', 'strengths', 'problems', 'opinion', 'tags', 'cover', 'draft'];
const postFields = ['title', 'date', 'lang', 'translationKey', 'description', 'category', 'tags', 'cover', 'draft', 'body'];

describe('config do CMS', () => {
  it('backend GitHub e mídia', () => {
    expect(cfg.backend.name).toBe('github');
    expect(cfg.media_folder).toBe('public/images/uploads');
    expect(cfg.public_folder).toBe('/images/uploads');
  });

  it.each(['pt', 'en'])('coleções de %s apontam para a pasta certa e têm os campos do schema', (lang) => {
    const r = col(`reviews_${lang}`);
    const p = col(`posts_${lang}`);
    expect(r.folder).toBe(`src/content/reviews/${lang}`);
    expect(p.folder).toBe(`src/content/posts/${lang}`);
    expect(fieldNames(r)).toEqual(reviewFields);
    expect(fieldNames(p)).toEqual(postFields);
    expect(r.fields.find((f: { name: string }) => f.name === 'lang').default).toBe(lang);
  });

  it('campos dos arquivos de conteúdo existem no CMS', () => {
    for (const [dir, fields] of [['reviews', reviewFields], ['posts', postFields]] as const)
      for (const lang of ['pt', 'en'])
        for (const f of readdirSync(`tests/fixtures/${dir}/${lang}`).filter((f) => f.endsWith(".md")))
          for (const k of frontKeys(`tests/fixtures/${dir}/${lang}/${f}`)) expect(fields).toContain(k);
  });

  it('páginas fixas editáveis', () => {
    const files = col('pages').files.map((f: { file: string }) => f.file);
    expect(files).toEqual(['src/content/pages/home/pt.md', 'src/content/pages/home/en.md', 'src/content/pages/about/pt.md', 'src/content/pages/about/en.md']);
  });
});
