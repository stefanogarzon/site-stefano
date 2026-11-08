// Plain .mjs so astro.config.mjs can import it in the sitemap filter.

/**
 * True while the privacy notice is a draft awaiting the owner's approval: banner, noindex and out of the sitemap.
 * The owner approved the text on 2026-11-08.
 */
export const PRIVACIDADE_RASCUNHO = false;

/** Routes of the privacy notice; src/i18n/utils.ts and the sitemap filter read them from here. */
export const PRIVACIDADE_PATH = {
  pt: '/downloads/science-tutor/privacidade/',
  en: '/en/downloads/science-tutor/privacy/',
};
