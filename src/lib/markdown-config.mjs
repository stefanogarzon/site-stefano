/** Configuração de Markdown compartilhada entre astro.config e renderMarkdown. */
export const markdownConfig = {
  remarkPlugins: [],
  rehypePlugins: [],
  shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid', 'math'] },
};
