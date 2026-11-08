import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { markdownConfig } from './src/lib/markdown-config.mjs';

export default defineConfig({
  site: 'https://stefanogarzon.com',
  trailingSlash: 'always',
  // Cache separado para o build de testes, para o conteúdo de tests/fixtures/ não vazar.
  cacheDir: process.env.FIXTURES ? './node_modules/.astro-fixtures' : './node_modules/.astro',
  // A revisão de UX roda o dev com FIXTURES=1; a barra de ferramentas do dev cobriria a tela.
  devToolbar: { enabled: !process.env.FIXTURES },
  markdown: markdownConfig,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
