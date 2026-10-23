import { describe, expect, it } from 'vitest';
import { exists, read } from './dist';


const pages = [
  'index.html',
  'en/index.html',
  'avaliacoes/exemplo-estatina/index.html',
  'textos/exemplo-valor-p/index.html',
  'sobre/index.html',
  'en/about/index.html',
];

describe('seo', () => {
  it.each(pages)('%s tem metadados', (p) => {
    const h = read(p);
    for (const re of [/<title>[^<]+<\/title>/, /name="description" content="[^"]+"/, /property="og:title"/, /property="og:image" content="https:\/\/stefanogarzon\.com\/[^"]+"/, /rel="canonical" href="https:\/\/stefanogarzon\.com\//])
      expect(h).toMatch(re);
  });

  it('hreflang só quando há tradução', () => {
    const r = read('avaliacoes/exemplo-estatina/index.html');
    expect(r).toContain('hreflang="en" href="https://stefanogarzon.com/en/reviews/example-statin/"');
    expect(r).toContain('hreflang="x-default"');
    const p = read('textos/exemplo-git/index.html');
    expect(p).not.toMatch(/<link[^>]+hreflang="en"/);
  });

  it('sitemap sem rascunho', () => {
    expect(exists('sitemap-index.xml')).toBe(true);
    const s = read('sitemap-0.xml');
    expect(s).toContain('https://stefanogarzon.com/avaliacoes/exemplo-estatina/');
    expect(s).not.toContain('rascunho-teste');
  });

  it('RSS PT e EN', () => {
    const pt = read('rss.xml');
    expect(pt).toContain('/avaliacoes/exemplo-estatina/');
    expect(pt).not.toContain('rascunho-teste');
    expect(pt).not.toContain('/en/');
    expect(read('en/rss.xml')).toContain('/en/reviews/example-statin/');
  });

  it('sobre, 404, robots, favicon, og padrão', () => {
    expect(read('sobre/index.html')).toContain('contato@stefanogarzon.com');
    expect(read('404.html')).toContain('Página não encontrada');
    expect(read('robots.txt')).toContain('Sitemap: https://stefanogarzon.com/sitemap-index.xml');
    expect(exists('favicon.svg')).toBe(true);
    expect(exists('og-default.png')).toBe(true);
  });
});
