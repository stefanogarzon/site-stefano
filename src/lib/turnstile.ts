/** Chave de teste pública da Cloudflare: o widget sempre passa. Usada no build dos testes. */
export const TURNSTILE_TEST_SITEKEY = '1x00000000000000000000AA';

/** Chave pública do Turnstile lida da variável de build; `null` quando ausente ou vazia. */
export function turnstileSitekey(valor: string | null | undefined): string | null {
  const chave = (valor ?? '').trim();
  return chave === '' ? null : chave;
}
