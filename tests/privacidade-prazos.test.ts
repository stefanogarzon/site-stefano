import { describe, expect, it } from 'vitest';
import { read } from './dist';

/**
 * Retention per table, as sarzel-dist does it (src/v2/cadastro-repo.ts, cadastro.ts,
 * cadastro-exclusao.ts): the sign-up row goes on confirmed erasure; the revoked token hash stays in
 * tokens_v2 with no time limit; request records are purged only inside a request that passed the
 * form and Turnstile checks; the IP HMAC counts per hour, the e-mail per 24 h.
 */
const paginas = [
  {
    lang: 'pt',
    arquivo: 'downloads/science-tutor/privacidade/index.html',
    frasePrazoCadastro: /enquanto o cadastro existir/i,
    listaNaFrase: [/sobrenome/i],
    afirma: [/hash[^.]*sem prazo/i, /passar pelas verificações do formulário e anti-robô/i, /HMAC do IP limita os pedidos por hora/i],
  },
  {
    lang: 'en',
    arquivo: 'en/downloads/science-tutor/privacy/index.html',
    frasePrazoCadastro: /as long as the sign-up exists/i,
    listaNaFrase: [/last name/i],
    afirma: [/hash[^.]*with no time limit/i, /passes the form and anti-bot checks/i, /HMAC of your IP limits requests per hour/i],
  },
] as const;

const texto = (html: string) =>
  html
    .match(/<main[^>]*>([\s\S]*)<\/main>/)![1]
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');

describe.each(paginas)('aviso de privacidade ($lang): prazo por tabela', (p) => {
  const t = texto(read(p.arquivo));
  const frases = t.split(/(?<=[.;])\s/);

  it('a frase do prazo do cadastro não inclui o hash do token, que fica depois da exclusão', () => {
    const frase = frases.find((f) => p.frasePrazoCadastro.test(f));
    expect(frase).toBeDefined();
    expect(frase).not.toMatch(/hash/i);
    for (const re of p.listaNaFrase) expect(frase).toMatch(re);
  });

  it.each(p.afirma.map((re) => [re]))('diz %s', (re) => {
    expect(t).toMatch(re);
  });
});
