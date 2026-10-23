import { defineConfig } from 'astro/config';
import { markdownConfig } from './src/lib/markdown-config.mjs';

export default defineConfig({
  site: 'https://drstefanogarzon.com',
  trailingSlash: 'always',
  markdown: markdownConfig,
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
