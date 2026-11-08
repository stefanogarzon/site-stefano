import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/** Caminhos /images/... citados no conteúdo (src="..." ou ](...)). */
const refs = () =>
  (readdirSync('src/content', { recursive: true }) as string[])
    .filter((f) => f.endsWith('.md'))
    .flatMap((f) => {
      const md = readFileSync(`src/content/${f}`, 'utf8');
      return [...md.matchAll(/(?:src="|\]\()(\/images\/[^")\s]+)/g)].map((m) => ({ f, path: m[1] }));
    });

describe('figuras do conteúdo', () => {
  it('toda imagem citada existe em public/', () => {
    const r = refs();
    expect(r.length).toBeGreaterThan(0);
    expect(r.filter(({ path }) => !existsSync(`public${path}`))).toEqual([]);
  });

  it('a versão de cada idioma usa a figura do próprio idioma', () => {
    const wrong = refs().filter(({ f, path }) => {
      const lang = f.split('/')[1];
      const m = path.match(/\.(pt|en)\.svg$/);
      return m && m[1] !== lang;
    });
    expect(wrong).toEqual([]);
  });
});
