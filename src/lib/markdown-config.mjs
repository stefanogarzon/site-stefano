import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkMathGuard from './remark-math-guard.mjs';
import rehypeMermaidPre from './rehype-mermaid-pre.mjs';

/** Configuração de Markdown compartilhada entre astro.config e renderMarkdown. */
export const markdownConfig = {
  remarkPlugins: [remarkMath, remarkMathGuard],
  rehypePlugins: [rehypeKatex, rehypeMermaidPre],
  shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid', 'math'] },
};
