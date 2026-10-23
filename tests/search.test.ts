import { describe, expect, it } from 'vitest';
import { exists, read } from './dist';

describe('busca', () => {
  it('gera o índice do Pagefind', () => {
    expect(exists('pagefind/pagefind.js')).toBe(true);
    expect(exists('pagefind/pagefind-ui.js')).toBe(true);
  });

  it('páginas de busca PT e EN com link no cabeçalho', () => {
    expect(read('busca/index.html')).toContain('id="search"');
    expect(read('en/search/index.html')).toContain('id="search"');
    expect(read('index.html')).toContain('href="/busca/"');
    expect(read('en/index.html')).toContain('href="/en/search/"');
  });

  it('indexa só o conteúdo dos textos', () => {
    expect(read('avaliacoes/exemplo-estatina/index.html')).toContain('data-pagefind-body');
    expect(read('textos/exemplo-git/index.html')).toContain('data-pagefind-body');
    expect(read('index.html')).not.toContain('data-pagefind-body');
  });
});
