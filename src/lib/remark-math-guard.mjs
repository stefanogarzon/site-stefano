/**
 * Regras do Pandoc para `$...$`: o conteúdo não pode começar nem terminar com espaço,
 * e o `$` de fechamento não pode vir seguido de dígito.
 * Evita que "US$ 10 e US$ 20" ou "US$10 e US$20" vire fórmula. Roda depois de remark-math.
 */
export default function remarkMathGuard() {
  const walk = (node) => {
    node.children?.forEach((child, i) => {
      const next = node.children[i + 1];
      const digitAfter = next?.type === 'text' && /^\d/.test(next.value);
      if (child.type === 'inlineMath' && (/^\s|\s$/.test(child.value) || digitAfter)) {
        node.children[i] = { type: 'text', value: `$${child.value}$` };
      } else walk(child);
    });
  };
  return walk;
}
