import { beforeAll, describe, expect, it } from 'vitest';
import { build, read } from './dist';

beforeAll(build);

describe('home', () => {
  it('PT tem nome, menu e recentes de ambos os tipos', () => {
    const h = read('index.html');
    expect(h).toContain('lang="pt"');
    expect(h).toContain('Stefano Garzon');
    for (const href of ['/avaliacoes/', '/textos/', '/sobre/']) expect(h).toContain(`href="${href}"`);
    expect(h).toContain('Recentes');
    expect(h).toContain('href="/avaliacoes/exemplo-estatina/"');
    expect(h).toContain('href="/textos/exemplo-valor-p/"');
    expect(h).not.toContain('Rascunho que não pode aparecer');
    expect(h).toContain('href="/en/"');
  });

  it('EN tem lang e recentes em inglês', () => {
    const h = read('en/index.html');
    expect(h).toContain('lang="en"');
    expect(h).toContain('Recent');
    expect(h).toContain('href="/en/reviews/example-statin/"');
    expect(h).toContain('href="/"');
  });
});
