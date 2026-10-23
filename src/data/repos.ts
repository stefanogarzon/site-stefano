import type { Lang } from '../i18n/ui';

/** Repositórios públicos de skills, listados na página de Computação. */
export const repos: { name: string; url: string; desc: Record<Lang, string> }[] = [
  {
    name: 'clinical-ai-skills',
    url: 'https://github.com/stefanogarzon/clinical-ai-skills',
    desc: {
      pt: 'Skills do Claude para pesquisa clínica: triagem de revisão sistemática (sr-screening) e checagem de afirmações no PubMed (claim-check).',
      en: 'Claude skills for clinical research: systematic review screening (sr-screening) and PubMed claim checking (claim-check).',
    },
  },
  {
    name: 'claude-para-saude',
    url: 'https://github.com/stefanogarzon/claude-para-saude',
    desc: {
      pt: 'Plugin do Claude Code que avalia conformidade de projetos de IA com dados de saúde no Brasil (CFM, LGPD/ANPD).',
      en: 'Claude Code plugin that checks AI projects handling health data for compliance with Brazilian rules (CFM, LGPD/ANPD).',
    },
  },
];
