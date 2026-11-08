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
    secoes: {
      responsavel: /^Quem é o responsável$/,
      baseLegal: /^Base legal$/,
      direitos: /^Seus direitos$/,
      artigos: /^(Para quê|Os artigos que você lê)$/,
    },
    aprovado: {
      baseLegal: [/execução de contrato/i, /procedimentos preliminares/i, /a pedido do titular/i, /LGPD/, /art\. 7º, V/],
      direitos: [/acesso/i, /correção/i, /portabilidade/i, /compartilhamento/i, /revogação/i, /exclusão/i, /LGPD/, /art\. 18/, /formulário/i, /privacidade@sarzel\.com/],
      artigos: [/PDF/, /diretamente ao provedor de IA que você escolher/i, /sua própria chave/i, /sarzel\.com não recebe nem guarda os artigos/i],
    },
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
    secoes: {
      responsavel: /^Who is responsible$/,
      baseLegal: /^Legal basis$/,
      direitos: /^Your rights$/,
      artigos: /^(Why|The articles you read)$/,
    },
    aprovado: {
      baseLegal: [/performance of a contract/i, /preliminary (steps|procedures)/i, /at the request of the data subject/i, /LGPD/, /Art\. 7\(V\)/],
      direitos: [/access/i, /correct/i, /portability/i, /shar/i, /revo/i, /delet/i, /LGPD/, /Art\. 18/, /form/i, /privacidade@sarzel\.com/],
      artigos: [/PDF/, /directly to the AI provider you choose/i, /your own key/i, /sarzel\.com does not receive or store the articles/i],
    },
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

/** HTML of every <section> of the page whose <h2> text matches the title. */
const secoes = (html: string, titulo: RegExp) => {
  const todas = [...corpo(html).matchAll(/<section[^>]*>[\s\S]*?<\/section>/g)].map((m) => m[0]);
  const achadas = todas.filter((s) => {
    const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    return h2 !== null && titulo.test(semTags(h2[1]).trim());
  });
  expect(achadas.length, `seção ${titulo}`).toBeGreaterThan(0);
  return achadas.join('\n');
};

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

  it('aprovado: sem faixa de rascunho', () => {
    const html = read(p.arquivo);
    expect(html).not.toContain(p.rascunho);
    expect(html).not.toMatch(/class="[^"]*rascunho[^"]*"/);
  });

  it('aprovado: indexável e no sitemap, fora da busca', () => {
    const html = read(p.arquivo);
    expect(html).not.toContain('name="robots"');
    expect(html).not.toContain('noindex');
    expect(html).not.toContain('data-pagefind-body');
    expect(read('sitemap-0.xml')).toContain(`<loc>${SITE}${p.url}</loc>`);
    expect(read(p.cadastro)).not.toContain('name="robots"');
    expect(read('sitemap-0.xml')).toContain(`${SITE}/${p.cadastro.replace('index.html', '')}`);
  });

  it.each(['baseLegal', 'direitos', 'artigos'] as const)('texto aprovado: seção %s', (chave) => {
    const texto = semTags(secoes(read(p.arquivo), p.secoes[chave]));
    for (const re of p.aprovado[chave]) expect(texto, `${chave}: ${re}`).toMatch(re);
  });

  it.each(['responsavel', 'direitos'] as const)('contato privacidade@sarzel.com na seção %s', (chave) => {
    const html = secoes(read(p.arquivo), p.secoes[chave]);
    expect(html).toContain('href="mailto:privacidade@sarzel.com"');
    expect(semTags(html)).toContain('privacidade@sarzel.com');
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
