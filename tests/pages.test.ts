import { describe, expect, it } from 'vitest';
import { exists, read } from './dist';


describe('avaliações', () => {
  it('mostra referência, DOI e seções na ordem, com Opinião destacada', () => {
    const h = read('avaliacoes/exemplo-estatina/index.html');
    expect(h).toContain('N Engl J Med. 2026');
    expect(h).toContain('href="https://doi.org/10.1056/NEJMoa0000000"');
    expect(h).toContain('n = 4.200');
    const idx = ['Resumo', 'Pontos fortes', 'Problemas metodológicos', 'Opinião'].map((s) => h.indexOf(`>${s}<`));
    expect(idx.every((i) => i > 0)).toBe(true);
    expect([...idx].sort((a, b) => a - b)).toEqual(idx);
    expect(h).toMatch(/class="opinion[^"]*"[\s\S]*Exemplo de opinião pessoal/);
    expect(h).toContain('<li>Randomização centralizada</li>');
  });

  it('avaliação sem DOI, sem n e sem capa gera página', () => {
    const h = read('en/reviews/example-statin/index.html');
    expect(h).toContain('Methodological issues');
    expect(h).not.toContain('doi.org');
    expect(h).toContain('href="/avaliacoes/exemplo-estatina/"');
  });

  it('rascunho não é publicado nem listado', () => {
    expect(exists('avaliacoes/rascunho-teste/index.html')).toBe(false);
    expect(read('avaliacoes/index.html')).not.toContain('rascunho-teste');
  });

  it('lista PT de avaliações', () => {
    expect(read('avaliacoes/index.html')).toContain('href="/avaliacoes/exemplo-estatina/"');
  });
});

describe('textos', () => {
  it('lista todos e links de categoria', () => {
    const h = read('textos/index.html');
    expect(h).toContain('href="/textos/exemplo-valor-p/"');
    expect(h).toContain('href="/textos/exemplo-git/"');
    expect(h).toContain('href="/textos/estatistica/"');
  });

  it('página de categoria filtra', () => {
    const h = read('textos/estatistica/index.html');
    expect(h).toContain('href="/textos/exemplo-valor-p/"');
    expect(h).not.toContain('href="/textos/exemplo-git/"');
  });

  it('categorias EN existem', () => {
    expect(exists('en/posts/statistics/index.html')).toBe(true);
    expect(exists('en/posts/index.html')).toBe(true);
  });

  it('texto sem tradução: seletor leva à home EN', () => {
    expect(read('textos/exemplo-git/index.html')).toContain('href="/en/"');
  });
});

describe('conteúdo salvo pelo CMS', () => {
  it('aceita doi vazio, n nulo e capa em /images/uploads', () => {
    const h = read('avaliacoes/fixture-cms-vazio/index.html');
    expect(h).toContain('property="og:image" content="https://stefanogarzon.com/images/uploads/capa-teste.png"');
    expect(h).not.toContain('doi.org');
    expect(h).not.toContain('n = ');
  });

  it('"US$10 e US$20" sem espaço não vira fórmula', () => {
    expect(read('avaliacoes/fixture-cms-vazio/index.html')).toContain('Custa US$10 e US$20.');
  });
});
