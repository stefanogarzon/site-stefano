import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { turnstileSitekey, TURNSTILE_TEST_SITEKEY } from '../src/lib/turnstile';

describe('turnstileSitekey', () => {
  it('devolve a chave aparada', () => {
    expect(turnstileSitekey('  0x4AAAAAAAabc  ')).toBe('0x4AAAAAAAabc');
    expect(turnstileSitekey('1x00000000000000000000AA')).toBe('1x00000000000000000000AA');
  });

  it('devolve null quando ausente ou vazia', () => {
    expect(turnstileSitekey(undefined)).toBeNull();
    expect(turnstileSitekey(null)).toBeNull();
    expect(turnstileSitekey('')).toBeNull();
    expect(turnstileSitekey('   \n')).toBeNull();
  });

  it('exporta a chave de teste pública da Cloudflare', () => {
    expect(TURNSTILE_TEST_SITEKEY).toBe('1x00000000000000000000AA');
  });
});

describe('documentação da variável', () => {
  it('.env.example declara PUBLIC_TURNSTILE_SITEKEY vazia', () => {
    const env = readFileSync('.env.example', 'utf8');
    expect(env).toMatch(/^PUBLIC_TURNSTILE_SITEKEY=\s*$/m);
  });

  it('README cita a variável, a chave de teste e o build da Cloudflare Pages', () => {
    const readme = readFileSync('README.md', 'utf8');
    expect(readme).toContain('PUBLIC_TURNSTILE_SITEKEY');
    expect(readme).toContain('1x00000000000000000000AA');
    expect(readme).toContain('Cloudflare Pages');
  });
});
