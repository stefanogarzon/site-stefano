import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { markdownConfig } from './src/lib/markdown-config.mjs';

export default defineConfig({
  site: 'https://drstefanogarzon.com',
  trailingSlash: 'always',
  // Cache separado para o build de testes, para o conteúdo de tests/fixtures/ não vazar.
  cacheDir: process.env.FIXTURES ? './node_modules/.astro-fixtures' : './node_modules/.astro',
  markdown: markdownConfig,
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
