/** Converte <pre><code class="language-mermaid"> em <pre class="mermaid"> (renderizado no navegador). */
export default function rehypeMermaidPre() {
  const text = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(text).join(''));
  const walk = (node) => {
    for (const child of node.children ?? []) {
      const code = child.tagName === 'pre' && child.children?.find((c) => c.tagName === 'code');
      const cls = code?.properties?.className ?? [];
      if (code && cls.includes('language-mermaid')) {
        child.properties = { className: ['mermaid'] };
        child.children = [{ type: 'text', value: text(code).trim() }];
      } else walk(child);
    }
  };
  return walk;
}
