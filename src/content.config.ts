import { defineCollection } from 'astro:content';
import type { SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Le « plan » des informations d'un article, partagé par les articles et les brouillons.
const schemaArticle = ({ image }: SchemaContext) =>
  z.object({
    titre: z.string(),
    date: z.coerce.date(),
    type: z.enum(['texte', 'chronique', 'video', 'musique', 'playlist', 'photos']),
    resume: z.string(),
    tags: z.array(z.string()).default([]),
    couverture: image().optional(),
    couvertureAlt: z.string().default(''),
    oeuvre: z.string().optional(), // pour les chroniques
    lien: z.string().optional(), // vidéo, musique, playlist
    liens: z.array(z.string()).default([]), // plusieurs lecteurs dans un même article
    photos: z
      .array(
        z.object({
          fichier: image(),
          legende: z.string().optional(),
          alt: z.string().optional(),
        })
      )
      .default([]),
    brouillon: z.boolean().default(false),
  });

// Chaque article est un dossier dans src/content/articles/
// contenant un fichier index.md (le texte) et ses images.
const articles = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/articles',
    // L'adresse de l'article = le nom de son dossier
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: schemaArticle,
});

// Les BROUILLONS : le dossier « brouillons » à la racine du projet.
// Il est exclu de GitHub (voir .gitignore) : personne d'autre ne peut le lire.
// Il n'est visible que sur ton ordinateur, à l'adresse /brouillons/.
const brouillons = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './brouillons',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: schemaArticle,
});

// Les pages « À propos », « Contact » et « Mentions légales » :
// de simples fichiers Markdown dans src/content/pages/
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    titre: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { articles, brouillons, pages };
