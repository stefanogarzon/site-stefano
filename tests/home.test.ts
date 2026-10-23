import { describe, expect, it } from 'vitest';
import { read } from './dist';


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

describe('foto', () => {
  it('home e sobre mostram a foto com texto alternativo', () => {
    expect(read('index.html')).toMatch(/<img[^>]+src="\/images\/stefano-quadrado\.webp"[^>]+alt="Stefano Garzon"/);
    expect(read('sobre/index.html')).toMatch(/<img[^>]+src="\/images\/stefano\.webp"[^>]+alt="Stefano Garzon"/);
    expect(read('en/about/index.html')).toContain('/images/stefano.webp');
  });
});

describe('layout v3', () => {
  it('home tem cartões com barra de tipo, forma geométrica por categoria e destaque', () => {
    const h = read('index.html');
    expect(h).toMatch(/class="card feature[^"]*"/);
    expect(h).toContain('data-shape="reviews"');
    expect(h).toContain('data-shape="estatistica"');
    expect(h).toContain('Médico e pesquisador');
    expect(h).toContain('href="/textos/estatistica/"');
  });

  it('listas e artigos usam as formas', () => {
    expect(read('avaliacoes/index.html')).toContain('data-shape="reviews"');
    expect(read('textos/exemplo-git/index.html')).toContain('data-shape="computacao"');
  });

  it('logo no cabeçalho, antes do nome', () => {
    expect(read('sobre/index.html')).toMatch(/<a class="name"[^>]*>\s*<picture/);
  });
});

describe('logo', () => {
  it('cabeçalho usa a marca, com versão para modo escuro', () => {
    const h = read('sobre/index.html');
    expect(h).toContain('srcset="/logo/marca-cor-fundo-escuro.svg" media="(prefers-color-scheme: dark)"');
    expect(h).toMatch(/<img[^>]+src="\/logo\/marca-cor\.svg"/);
  });

  it('favicons e ícone de atalho', () => {
    const h = read('index.html');
    expect(h).toContain('href="/favicon.ico"');
    expect(h).toContain('rel="apple-touch-icon" href="/apple-touch-icon.png"');
  });
});
