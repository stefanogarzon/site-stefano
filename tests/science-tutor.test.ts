import { describe, expect, it } from 'vitest';
import { exists, read } from './dist';

const SITE = 'https://stefanogarzon.com';
const SITEKEY = '1x00000000000000000000AA';

const paginas = [
  {
    lang: 'pt',
    arquivo: 'downloads/science-tutor/index.html',
    url: '/downloads/science-tutor/',
    outra: '/en/downloads/science-tutor/',
    outraLang: 'en',
    privacidade: '/downloads/science-tutor/privacidade/',
    js: /JavaScript/,
    apresentacao: [/PDF/, /Mac/, /Windows/, /chave/i, /Anthropic/],
  },
  {
    lang: 'en',
    arquivo: 'en/downloads/science-tutor/index.html',
    url: '/en/downloads/science-tutor/',
    outra: '/downloads/science-tutor/',
    outraLang: 'pt',
    privacidade: '/en/downloads/science-tutor/privacy/',
    js: /JavaScript/,
    apresentacao: [/PDF/, /Mac/, /Windows/, /key/i, /Anthropic/],
  },
] as const;

/** Tag de abertura que casa com `re`; falha o teste se não houver. */
const tag = (html: string, re: RegExp) => {
  const m = html.match(re);
  expect(m, `tag ${re}`).not.toBeNull();
  return m![0];
};

const semTags = (html: string) => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');

describe.each(paginas)('página do Science Tutor ($lang)', (p) => {
  it('existe com título, descrição, canonical e hreflang da tradução', () => {
    expect(exists(p.arquivo)).toBe(true);
    const h = read(p.arquivo);
    expect(h).toMatch(/<html lang="/);
    expect(h).toContain(`<html lang="${p.lang}"`);
    expect(h).toMatch(/<title>[^<]*Science Tutor[^<]*<\/title>/);
    expect(h).toMatch(/name="description" content="[^"]{20,}"/);
    expect(h).toContain(`rel="canonical" href="${SITE}${p.url}"`);
    expect(h).toContain(`hreflang="${p.outraLang}" href="${SITE}${p.outra}"`);
    expect(h).toContain('hreflang="x-default"');
  });

  it('apresenta o app: PDF, Mac e Windows, chave própria da IA', () => {
    const texto = semTags(read(p.arquivo));
    for (const re of p.apresentacao) expect(texto).toMatch(re);
  });

  it('formulário com novalidate e fieldset disabled', () => {
    const h = read(p.arquivo);
    expect(tag(h, /<form\b[^>]*>/)).toMatch(/\snovalidate\b/);
    expect(tag(h, /<fieldset\b[^>]*>/)).toMatch(/\sdisabled\b/);
    const form = h.slice(h.indexOf('<form'), h.indexOf('</form>'));
    expect(form).toContain('<fieldset');
  });

  it('campos nome, sobrenome e email com maxlength 100', () => {
    const h = read(p.arquivo);
    for (const nome of ['nome', 'sobrenome', 'email']) {
      const t = tag(h, new RegExp(`<input\\b[^>]*name="${nome}"[^>]*>`));
      expect(t).toContain('maxlength="100"');
    }
    expect(tag(h, /<input\b[^>]*name="email"[^>]*>/)).toMatch(/type="email"/);
  });

  it('rádios macos e windows', () => {
    const h = read(p.arquivo);
    for (const v of ['macos', 'windows']) {
      const t = tag(h, new RegExp(`<input\\b[^>]*value="${v}"[^>]*>`));
      expect(t).toContain('type="radio"');
      expect(t).toContain('name="plataforma"');
    }
  });

  it('checkbox de aceite com link para o aviso de privacidade do idioma', () => {
    const h = read(p.arquivo);
    const t = tag(h, /<input\b[^>]*name="aceite_privacidade"[^>]*>/);
    expect(t).toContain('type="checkbox"');
    const form = h.slice(h.indexOf('<form'), h.indexOf('</form>'));
    expect(form).toContain(`href="${p.privacidade}"`);
  });

  it('widget e script do Turnstile com a chave de build', () => {
    const h = read(p.arquivo);
    const t = tag(h, /<div\b[^>]*class="[^"]*\bcf-turnstile\b[^"]*"[^>]*>/);
    expect(t).toContain(`data-sitekey="${SITEKEY}"`);
    expect(h).toMatch(/<script\b[^>]*src="https:\/\/challenges\.cloudflare\.com\/turnstile\/v0\/api\.js"/);
    expect(semTags(h)).not.toMatch(/indispon[ií]vel|unavailable/i);
  });

  it('noscript avisa que o formulário precisa de JavaScript', () => {
    const h = read(p.arquivo);
    const m = h.match(/<noscript>([\s\S]*?)<\/noscript>/);
    expect(m).not.toBeNull();
    expect(m![1]).toMatch(p.js);
  });
});
