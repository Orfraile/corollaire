import { defineConfig } from 'astro/config';

// Adresse du site et dossier de base.
// Si tu changes de pseudo GitHub, de nom de dépôt ou si tu achètes
// un nom de domaine, c'est ICI qu'il faudra modifier ces deux lignes.
export default defineConfig({
  site: 'https://orfraile.github.io',
  base: '/corollaire',
  trailingSlash: 'always',
});
