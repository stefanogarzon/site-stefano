import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { markdownConfig } from './src/lib/markdown-config.mjs';

export default defineConfig({
  site: 'https://drstefanogarzon.com',
  trailingSlash: 'always',
  markdown: markdownConfig,
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
