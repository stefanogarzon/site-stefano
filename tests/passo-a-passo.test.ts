import { describe, expect, it } from 'vitest';
import { exists, read } from './dist';

const SITE = 'https://stefanogarzon.com';
const CADASTRO = '/downloads/science-tutor/';

const guias = [
  {
    plataforma: 'mac',
    url: '/downloads/science-tutor/passo-a-passo/mac/',
    passos: [
      [/DMG/, /e-mail/],
      [/Aplicativos/],
      [/Abra/],
      [/token/],
      [/senha do cofre/],
      [/chave de recuperação/],
      [/Touch ID/],
      [/chave da API da Anthropic/],
    ],
  },
  {
    plataforma: 'windows',
    url: '/downloads/science-tutor/passo-a-passo/windows/',
    passos: [
      [/Microsoft Store/, /e-mail/],
      [/Instale/],
      [/Abra/],
      [/token/],
      [/senha do cofre/],
      [/chave de recuperação/],
      [/chave da API da Anthropic/],
    ],
  },
] as const;

const arquivo = (url: string) => `${url.replace(/^\//, '')}index.html`;
const corpo = (html: string) => html.match(/<main[^>]*>([\s\S]*)<\/main>/)![1];
const texto = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

describe.each(guias)('passo a passo ($plataforma)', (g) => {
  it('existe em PT com canonical próprio e sem hreflang de tradução', () => {
    expect(exists(arquivo(g.url))).toBe(true);
    const html = read(arquivo(g.url));
    expect(html).toContain('<html lang="pt"');
    expect(html).toContain(`<link rel="canonical" href="${SITE}${g.url}">`);
    expect(html).not.toMatch(/<link rel="alternate" hreflang="en"/);
    expect(html).toMatch(/<title>[^<]*Science Tutor[^<]*<\/title>/);
    expect(html).toMatch(/<meta name="description" content="[^"]+"/);
  });

  it('traz os passos na ordem pedida, um por item da lista', () => {
    const main = corpo(read(arquivo(g.url)));
    const ol = main.match(/<ol[^>]*>([\s\S]*?)<\/ol>/);
    expect(ol, '<ol> dos passos').not.toBeNull();
    const itens = [...ol![1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((m) => texto(m[1]));
    expect(itens).toHaveLength(g.passos.length);
    g.passos.forEach((res, i) => res.forEach((re) => expect(itens[i], `passo ${i + 1}`).toMatch(re)));
  });

  it('tem link de volta à página do Science Tutor', () => {
    expect(corpo(read(arquivo(g.url)))).toMatch(new RegExp(`<a[^>]+href="${CADASTRO}"`));
  });
});

describe.each(['downloads/science-tutor/index.html', 'en/downloads/science-tutor/index.html'])(
  'confirmação do cadastro (%s)',
  (pagina) => {
    it('aponta para os dois passo a passo, que existem no dist/', () => {
      const hrefs = [...read(pagina).matchAll(/href="(\/downloads\/science-tutor\/passo-a-passo\/[^"]+)"/g)].map((m) => m[1]);
      expect(hrefs.sort()).toEqual(guias.map((g) => g.url).sort());
      for (const href of hrefs) expect(exists(arquivo(href)), href).toBe(true);
    });
  },
);
