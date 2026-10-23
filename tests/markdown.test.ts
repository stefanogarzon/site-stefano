import { beforeAll, describe, expect, it } from 'vitest';
import { build, read } from './dist';

beforeAll(build);

describe('markdown', () => {
  const post = () => read('textos/exemplo-valor-p/index.html');

  it('fórmula em bloco vira KaTeX', () => {
    expect(post()).toContain('class="katex-display"');
  });

  it('"US$ 10 e US$ 20" não vira fórmula', () => {
    expect(post()).toContain('Custa US$ 10 e US$ 20');
  });

  it('fórmula inline nos campos da avaliação', () => {
    expect(read('avaliacoes/exemplo-estatina/index.html')).toContain('class="katex"');
  });

  it('mermaid vira <pre class="mermaid"> e carrega script só onde há diagrama', () => {
    const h = post();
    expect(h).toMatch(/<pre class="mermaid">flowchart LR/);
    expect(h).toMatch(/<script type="module" src="[^"]+"/);
    expect(read('textos/exemplo-git/index.html')).not.toMatch(/<script type="module"/);
  });

  it('código R e Python com realce Shiki', () => {
    expect(post()).toMatch(/<pre class="astro-code[^"]*"[^>]*data-language="r"/);
    expect(read('textos/exemplo-git/index.html')).toContain('data-language="python"');
  });
});
