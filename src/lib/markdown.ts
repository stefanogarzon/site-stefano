import { createMarkdownProcessor, type MarkdownProcessor } from '@astrojs/markdown-remark';
import { markdownConfig } from './markdown-config.mjs';

let processor: Promise<MarkdownProcessor> | undefined;

/** Renderiza um campo Markdown do frontmatter com o mesmo pipeline do corpo. */
export async function renderMarkdown(md: string): Promise<string> {
  processor ??= createMarkdownProcessor(markdownConfig as never);
  return (await (await processor).render(md)).code;
}
