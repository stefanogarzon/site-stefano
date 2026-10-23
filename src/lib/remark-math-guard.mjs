/**
 * Regra do Pandoc para `$...$`: o conteúdo não pode começar nem terminar com espaço.
 * Evita que "US$ 10 e US$ 20" vire fórmula. Roda depois de remark-math.
 */
export default function remarkMathGuard() {
  const walk = (node) => {
    node.children?.forEach((child, i) => {
      if (child.type === 'inlineMath' && /^\s|\s$/.test(child.value)) {
        node.children[i] = { type: 'text', value: `$${child.value}$` };
      } else walk(child);
    });
  };
  return walk;
}
