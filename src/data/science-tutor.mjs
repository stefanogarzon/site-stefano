// Plain .mjs so astro.config.mjs can import it in the sitemap filter.

/** The privacy notice is a draft until the owner approves it: banner, noindex and out of the sitemap. */
export const PRIVACIDADE_RASCUNHO = true;

/** Routes of the privacy notice; src/i18n/utils.ts and the sitemap filter read them from here. */
export const PRIVACIDADE_PATH = {
  pt: '/downloads/science-tutor/privacidade/',
  en: '/en/downloads/science-tutor/privacy/',
};
