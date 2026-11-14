import type { CollectionEntry } from 'astro:content';

type Article = CollectionEntry<'articles'>;

// "Science-fiction" et "science fiction" donnent la même adresse : science-fiction
export function slugify(texte: string) {
  return texte
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function collectTags(articles: Article[]) {
  const map = new Map<string, { slug: string; nom: string; articles: Article[] }>();
  for (const article of articles) {
    for (const tag of article.data.tags) {
      const slug = slugify(tag);
      if (!slug) continue;
      if (!map.has(slug)) map.set(slug, { slug, nom: tag.trim(), articles: [] });
      const entry = map.get(slug)!;
      if (!entry.articles.includes(article)) entry.articles.push(article);
    }
  }
  return [...map.values()].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
}
