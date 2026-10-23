import rss from '@astrojs/rss';
import { itemsIn } from './content';
import { entryUrl } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

export async function feed(lang: Lang, site: URL) {
  const items = await itemsIn(lang);
  return rss({
    title: 'Stefano Garzon',
    description: lang === 'pt' ? 'Leitura crítica de pesquisa, estatística e computação.' : 'Critical reading of research, statistics and computing.',
    site,
    customData: `<language>${lang === 'pt' ? 'pt-br' : 'en-us'}</language>`,
    items: items.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.date,
      link: entryUrl(e),
    })),
  });
}
