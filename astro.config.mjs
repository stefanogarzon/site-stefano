import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drstefanogarzon.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
