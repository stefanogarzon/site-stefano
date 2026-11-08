import { describe, expect, it } from 'vitest';
import { read } from './dist';

/**
 * What the notice says about retention must match sarzel-dist (src/v2/cadastro-repo.ts,
 * src/v2/cadastro-exclusao.ts): request records are purged by the next request after 24 h, not at
 * 24 h; they hold the e-mail too; erasure only happens on the link confirmation; the revoked token
 * hash stays, without the e-mail.
 */
const paginas = [
  {
    lang: 'pt',
    arquivo: 'downloads/science-tutor/privacidade/index.html',
    afirma: [
      /registro de cada pedido[^.]*HMAC do IP[^.]*e-mail/i,
      /apagado no primeiro pedido que chegar depois/i,
      /até a confirmação da exclusão/i,
      /hash do token[^.]*revogado[^.]*sem o e-mail/i,
    ],
    nega: [/apagad[oa] depois de 24 h/i, /HMAC do IP é apagado/i],
  },
  {
    lang: 'en',
    arquivo: 'en/downloads/science-tutor/privacy/index.html',
    afirma: [
      /record of each request[^.]*HMAC of your IP[^.]*email/i,
      /deleted by the first request that arrives after/i,
      /until the deletion is confirmed/i,
      /hash of the revoked token[^.]*without your email/i,
    ],
    nega: [/deleted after 24 hours/i],
  },
] as const;

const texto = (html: string) =>
  html
    .match(/<main[^>]*>([\s\S]*)<\/main>/)![1]
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');

describe.each(paginas)('aviso de privacidade ($lang): retenção conforme o sarzel-dist', (p) => {
  const t = texto(read(p.arquivo));

  it.each(p.afirma.map((re) => [re]))('diz %s', (re) => {
    expect(t).toMatch(re);
  });

  it.each(p.nega.map((re) => [re]))('não promete %s', (re) => {
    expect(t).not.toMatch(re);
  });
});
