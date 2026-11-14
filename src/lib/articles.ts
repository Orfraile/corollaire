import { getCollection } from 'astro:content';

export const typeLabels = {
  texte: 'Texte',
  chronique: 'Chronique',
  video: 'Vidéo',
  musique: 'Musique',
  playlist: 'Playlist',
  photos: 'Photos',
} as const;

// Tous les articles publiés (sans les brouillons), du plus récent au plus ancien.
export async function getArticles() {
  const all = await getCollection('articles', ({ data }) => !data.brouillon);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateCourte(d: Date) {
  return d.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Le « nom de fichier » affiché dans la barre de titre de chaque article.
export const extensions = {
  texte: 'txt',
  chronique: 'doc',
  video: 'avi',
  musique: 'mp3',
  playlist: 'm3u',
  photos: 'jpg',
} as const;
