import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

/** Tokens de cor de um bloco `:root { ... }`. */
const tokens = (bloco: string) =>
  Object.fromEntries([...bloco.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)].map((m) => [m[1], m[2]]));

const css = readFileSync('src/styles/global.css', 'utf8');
const claro = tokens(css.match(/:root\s*\{([\s\S]*?)\}/)![1]);
const escuro = { ...claro, ...tokens(css.match(/prefers-color-scheme:\s*dark\)\s*\{\s*:root\s*\{([\s\S]*?)\}/)![1]) };

const lum = (hex: string) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const contraste = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

/** Cor da borda da regra dos campos de texto no componente da página. */
const componente = readFileSync('src/components/ScienceTutorPage.astro', 'utf8');
const regra = componente.match(/input\[type='text'\],\s*input\[type='email'\]\s*\{([\s\S]*?)\}/);
const corDaBorda = (tema: Record<string, string>) => {
  const decl = regra![1].match(/border(?:-color)?:\s*([^;]+);/)![1];
  const v = decl.match(/var\(--([\w-]+)\)/);
  return v ? tema[v[1]] : decl.match(/#[0-9a-fA-F]{6}/)![0];
};

describe('limite visível dos campos de texto (WCAG 1.4.11)', () => {
  it('a regra dos campos de texto existe', () => {
    expect(regra).not.toBeNull();
  });

  it.each([
    ['claro', claro],
    ['escuro', escuro],
  ] as const)('tema %s: borda com contraste >= 3:1 contra o cartão e o fundo do campo', (_, tema) => {
    const borda = corDaBorda(tema);
    expect(borda).toMatch(/^#[0-9a-fA-F]{6}$/);
    expect(contraste(borda, tema.card)).toBeGreaterThanOrEqual(3);
    expect(contraste(borda, tema.bg)).toBeGreaterThanOrEqual(3);
  });
});
