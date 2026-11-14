import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArticles } from '../lib/articles';
import { SITE } from '../lib/config';
import { url } from '../lib/url';

// Le flux RSS : la liste des articles, lisible par les lecteurs de flux
// et utilisée plus tard pour envoyer la newsletter automatiquement.
export async function GET(context: APIContext) {
  const articles = await getArticles();
  return rss({
    title: SITE.nom,
    description: SITE.description,
    site: new URL(url('/'), context.site).href,
    items: articles.map((a) => ({
      title: a.data.titre,
      pubDate: a.data.date,
      description: a.data.resume,
      link: url(`/articles/${a.id}/`),
      categories: a.data.tags,
    })),
    customData: '<language>fr-fr</language>',
  });
}
