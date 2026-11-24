// Les réglages du blog, tous au même endroit.
export const SITE = {
  nom: 'Corollaire',
  auteur: 'Orfraile',
  description: "Corollaire, le blog d'Orfraile : textes, chroniques, images et musiques.",
};

// Nombre d'articles affichés par page sur l'accueil.
export const ARTICLES_PAR_PAGE = 5;

// Le texte qui défile sous le menu. Laisse '' (vide) pour le retirer.
export const MESSAGE_DEFILANT =
  'Bienvenue sur Corollaire ✦ textes, chroniques, images et musiques ✦ merci de votre visite';

// Formulaire d'inscription à l'infolettre, créé dans Brevo (étape « Infolettre »).
// Colle ici l'adresse du formulaire : dans Brevo, Contacts > Formulaires > ton formulaire > Partager,
// choisis « Iframe » et copie ce qui se trouve entre les guillemets de src="…" (elle contient sibforms.com).
// Tant que cette ligne reste vide, le bouton d'inscription n'apparaît pas sur le site.
export const BREVO_FORMULAIRE = 'https://42287cf7.sibforms.com/v2/serve/MUIFABqv6YZVnc-MNzx_e0HeKzSJ8BmC_ti_rcnL-chTAInWRJj_Z2x1GD4tkcS-BIkhbqpQIlxQoa8BaUQCY3-ofcKdojVEeIi36zccFgo-saeeHPWsQ9DnHqYabjGKkzGSfhIZmiT3fNDHGkjG0pkgyyJpwSzZQ1r88KGir3I2uI1ZTnX8xM1j4xno19aWv4LYB6IS9s0MB22Tkg==';

// Hauteur (en pixels) de la fenêtre d'inscription. Augmente-la si le formulaire est coupé.
export const BREVO_HAUTEUR = 480;