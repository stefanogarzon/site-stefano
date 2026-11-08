import { describe, expect, it } from 'vitest';
import { exists, read } from './dist';

const SITE = 'https://stefanogarzon.com';
const SITEKEY = '1x00000000000000000000AA';

const paginas = [
  {
    lang: 'pt',
    arquivo: 'downloads/science-tutor/privacidade/index.html',
    url: '/downloads/science-tutor/privacidade/',
    outra: '/en/downloads/science-tutor/privacy/',
    outraLang: 'en',
    cadastro: 'downloads/science-tutor/index.html',
    rascunho: 'RASCUNHO — aguardando aprovação do dono',
    texto: {
      guardado: [/nome/i, /sobrenome/i, /e-mail/i, /data do aceite/i, /hash do token/i, /HMAC do IP/i, /24 h/],
      finalidade: [/enviar o acesso/i],
      onde: [/Cloudflare/, /sarzel\.com/, /Resend/],
      prazo: [/enquanto o cadastro existir/i, /pedido de exclusão/i],
      exclusao: [/excluir/i],
    },
    js: /JavaScript/,
  },
  {
    lang: 'en',
    arquivo: 'en/downloads/science-tutor/privacy/index.html',
    url: '/en/downloads/science-tutor/privacy/',
    outra: '/downloads/science-tutor/privacidade/',
    outraLang: 'pt',
    cadastro: 'en/downloads/science-tutor/index.html',
    rascunho: 'DRAFT — awaiting owner approval',
    texto: {
      guardado: [/first name/i, /last name/i, /email/i, /date you accepted/i, /hash of the access token/i, /HMAC of your IP/i, /24 hours/],
      finalidade: [/send you access/i],
      onde: [/Cloudflare/, /sarzel\.com/, /Resend/],
      prazo: [/as long as the sign-up exists/i, /deletion request/i],
      exclusao: [/delet/i],
    },
    js: /JavaScript/,
  },
] as const;

const tag = (html: string, re: RegExp) => {
  const m = html.match(re);
  expect(m, `tag ${re}`).not.toBeNull();
  return m![0];
};

const semTags = (html: string) =>
  html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');

const corpo = (html: string) => html.match(/<main[^>]*>([\s\S]*)<\/main>/)![1];

describe.each(paginas)('aviso de privacidade ($lang)', (p) => {
  it('existe com canonical e hreflang da tradução', () => {
    expect(exists(p.arquivo)).toBe(true);
    const html = read(p.arquivo);
    expect(html).toContain(`<html lang="${p.lang}"`);
    expect(html).toContain(`<link rel="canonical" href="${SITE}${p.url}">`);
    expect(html).toContain(`<link rel="alternate" hreflang="${p.outraLang}" href="${SITE}${p.outra}">`);
    expect(exists(`${p.outra.slice(1)}index.html`)).toBe(true);
  });

  it('o link do aceite no cadastro aponta para esta página, que existe no dist/', () => {
    const cadastro = read(p.cadastro);
    const label = tag(cadastro, /<input[^>]*name="aceite_privacidade"[\s\S]*?<\/label>/);
    const href = label.match(/<a href="([^"]+)"/)![1];
    expect(href).toBe(p.url);
    expect(exists(`${href.slice(1)}index.html`)).toBe(true);
  });

  it('faixa de rascunho no topo do conteúdo', () => {
    const main = corpo(read(p.arquivo));
    const texto = semTags(main).trim();
    expect(texto.startsWith(p.rascunho)).toBe(true);
    const faixa = tag(main, /<[a-z]+[^>]*class="[^"]*rascunho[^"]*"[^>]*>/);
    expect(faixa).toBeTruthy();
  });

  it('noindex, fora do sitemap e fora da busca', () => {
    const html = read(p.arquivo);
    expect(html).toContain('<meta name="robots" content="noindex">');
    expect(html).not.toContain('data-pagefind-body');
    expect(read('sitemap-0.xml')).not.toContain(`${SITE}${p.url}`);
    // As demais páginas continuam indexáveis.
    expect(read(p.cadastro)).not.toContain('name="robots"');
    expect(read('sitemap-0.xml')).toContain(`${SITE}/${p.cadastro.replace('index.html', '')}`);
  });

  it.each(['guardado', 'finalidade', 'onde', 'prazo', 'exclusao'] as const)('texto diz o %s', (secao) => {
    const texto = semTags(corpo(read(p.arquivo)));
    for (const re of p.texto[secao]) expect(texto, `${secao}: ${re}`).toMatch(re);
  });

  it('formulário de exclusão estático: e-mail, Turnstile, fieldset disabled, noscript, novalidate', () => {
    const html = read(p.arquivo);
    const form = tag(html, /<form[^>]*id="exclusao"[^>]*>/);
    expect(form).toContain('novalidate');
    expect(form).toContain(`data-lang="${p.lang}"`);
    const dentro = html.slice(html.indexOf(form));
    expect(dentro).toMatch(/^[\s\S]*?<fieldset disabled/);
    const email = tag(html, /<input[^>]*name="email"[^>]*>/);
    expect(email).toContain('type="email"');
    expect(email).toContain('maxlength="100"');
    expect(html).toMatch(new RegExp(`<label for="${email.match(/id="([^"]+)"/)![1]}"`));
    expect(html).toContain(`class="cf-turnstile" data-sitekey="${SITEKEY}"`);
    expect(html).toContain('src="https://challenges.cloudflare.com/turnstile/v0/api.js"');
    expect(tag(html, /<noscript>[\s\S]*?<\/noscript>/)).toMatch(p.js);
  });
});
