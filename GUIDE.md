# Guide de Corollaire

Ce guide est le mode d'emploi du blog **Corollaire** d'Orfraile. Il est écrit pour quelqu'un qui ne programme pas : on copie, on colle, on publie.

> Le blog est un **site statique** : les articles sont de simples fichiers de texte. Quand tu envoies tes modifications sur GitHub, un robot reconstruit et publie le site tout seul.

**Où se trouve quoi**

| Élément | Adresse |
|---|---|
| Le projet sur ton ordinateur | `Documents\corollaire` |
| Le blog en ligne | https://orfraile.github.io/corollaire/ |
| Le dépôt GitHub | https://github.com/Orfraile/corollaire |
| Le blog sur ton ordinateur (pendant `npm run dev`) | http://localhost:4321/corollaire/ |

## Sommaire

1. [Les gestes de tous les jours](#1-les-gestes-de-tous-les-jours)
2. [Écrire un article](#2-écrire-un-article)
3. [Ajouter des photos](#3-ajouter-des-photos)
4. [Ajouter une vidéo, une musique ou une playlist](#4-ajouter-une-vidéo-une-musique-ou-une-playlist)
5. [Les tags](#5-les-tags)
6. [Les brouillons privés](#6-les-brouillons-privés)
7. [Publier](#7-publier)
8. [Modifier, déplacer ou supprimer un article](#8-modifier-déplacer-ou-supprimer-un-article)
9. [L'infolettre](#9-linfolettre)
10. [Réglages du blog](#10-réglages-du-blog)
11. [Quand quelque chose ne marche pas](#11-quand-quelque-chose-ne-marche-pas)
12. [Aide-mémoire](#12-aide-mémoire)
13. [Plus tard : un nom de domaine](#13-plus-tard--un-nom-de-domaine)

---

## 1. Les gestes de tous les jours

### Ouvrir le projet

Ouvre **VS Code**, puis **Fichier > Ouvrir le dossier** et choisis `Documents\corollaire`. Tu vois la liste des fichiers à gauche.

### Voir le blog sur ton ordinateur

Ouvre un terminal dans VS Code (**Ctrl + J**), et tape :

```
npm run dev
```

Puis ouvre **http://localhost:4321/corollaire/** dans ton navigateur. Le site se met à jour tout seul quand tu enregistres un fichier (**Ctrl + S**).

Pour arrêter le site : clique dans le terminal et appuie **une seule fois** sur **Ctrl + C**.

### La recherche ne marche pas sur ton ordinateur ?

C'est normal avec `npm run dev`. L'index de recherche n'existe qu'après la construction complète du site :

```
npm run build
npm run preview
```

Ouvre ensuite l'adresse qu'indique le terminal. En ligne, la recherche fonctionne toute seule.

---

## 2. Écrire un article

Chaque article est un **dossier** dans `src/content/articles/`, qui contient :

- un fichier **`index.md`** : le texte et ses informations ;
- les **images** de l'article (couverture, photos).

### Pas à pas

1. Dans VS Code, ouvre `modeles/modele-article/` et copie le dossier `modele-article` (clic droit > Copier).
2. Colle-le dans `src/content/articles/` (clic droit sur le dossier `articles` > Coller).
3. **Renomme** le dossier avec le titre de l'article : en minuscules, sans accents, sans espaces, avec des tirets. Exemple : `le-chemin-des-ecoliers`.
   **Ce nom devient l'adresse de l'article** : `…/articles/le-chemin-des-ecoliers/`.
4. Ouvre `index.md` dans ce dossier et remplis-le (voir ci-dessous).
5. Ajoute l'image de couverture dans le même dossier, si tu en veux une (par exemple `couverture.jpg`).

### Anatomie d'un article

```
---
titre: "Le chemin des écoliers"
date: 2026-12-02
type: texte
resume: "Une courte fiction sur un trajet qui s'allonge."
tags: [fiction, brume]
couverture: ./couverture.jpg
couvertureAlt: "Un chemin de terre dans la brume"
---

Le texte de l'article commence ici, sous le deuxième trait.

## Un intertitre

Un paragraphe.

### Un sous-titre

Un autre paragraphe.
```

La partie entre les deux lignes `---` est l'**en-tête** : c'est la fiche d'identité de l'article. Le texte vient dessous.

### Les champs de l'en-tête

| Champ | Obligatoire ? | Ce qu'il faut écrire |
|---|---|---|
| `titre` | oui | Le titre, **entre guillemets** `"…"` |
| `date` | oui | Au format **ANNÉE-MOIS-JOUR** : `2026-12-02` |
| `type` | oui | Un seul mot parmi : `texte`, `chronique`, `video`, `musique`, `playlist`, `photos` |
| `resume` | oui | Une ou deux phrases, **entre guillemets** : affichées sur l'accueil |
| `tags` | non | Entre crochets, séparés par des virgules : `[fiction, brume]` |
| `couverture` | non | Le nom du fichier image, précédé de `./` : `./couverture.jpg` |
| `couvertureAlt` | non | Une description courte de la couverture (pour les personnes qui ne la voient pas) |
| `oeuvre` | non | Pour une **chronique** : l'œuvre dont tu parles |
| `lien` | non | Le lien d'une vidéo, d'une musique ou d'une playlist (voir la partie 4) |
| `liens` | non | Plusieurs liens, sous forme de liste (voir la partie 4) |
| `photos` | non | La liste des photos d'une galerie (voir la partie 3) |

**Astuce** : mets toujours des guillemets autour du titre et du résumé. Sans eux, un deux-points `:` dans le titre casse l'article.

Le `type` sert à classer l'article et à choisir le « nom de fichier » affiché dans la barre de titre de la fenêtre (`.txt`, `.doc`, `.avi`, `.mp3`, `.m3u`, `.jpg`). Il ne limite pas ce que tu peux mettre dedans.

### Mettre en forme le texte (Markdown)

| Tu veux | Tu écris |
|---|---|
| Un paragraphe | du texte, puis **une ligne vide** |
| Un intertitre | `## Mon intertitre` (bleu paon clair, grande taille) |
| Un sous-titre | `### Mon sous-titre` (bleu plus clair, taille intermédiaire) |
| *Italique* | `*mot*` |
| **Gras** | `**mot**` |
| Une citation | `> Le texte cité` |
| Une liste | une ligne par élément, commençant par `- ` |
| Un lien | `[le texte du lien](https://adresse.fr)` |
| Une image dans le texte | `![description de l'image](./mon-image.jpg)` |
| Une ligne de séparation | `---` sur une ligne seule, entourée de lignes vides |

Le titre de l'article n'est **pas** à répéter dans le texte : il est affiché à partir de l'en-tête.

Pour garder le texte lisible, tu peux écrire un article sur plusieurs lignes : une ligne vide sépare les paragraphes, un simple retour à la ligne ne compte pas.

### Les commentaires

Dans l'en-tête, une ligne qui commence par `#` est ignorée. Dans le texte, entoure une note personnelle de `<!--` et `-->` pour la cacher.

---

## 3. Ajouter des photos

### Préparer les photos

- **Réduis-les avant** : environ **3000 pixels de large** au maximum suffit. Le site fabrique lui-même des versions allégées.
- **Noms de fichiers** : en minuscules, sans espaces ni accents (`photo-1.jpg`). Sur GitHub, `Photo.JPG` et `photo.jpg` sont deux fichiers différents ; une faute de majuscule peut casser la mise en ligne alors que tout marche chez toi.
- **Poids total** : GitHub Pages recommande de rester sous **1 Go** pour l'ensemble du site. Évite les fichiers de plusieurs mégaoctets.

### Créer une galerie

1. Mets les photos dans le dossier de l'article.
2. Dans l'en-tête, liste-les :

```
type: photos
photos:
  - fichier: ./photo-1.jpg
    legende: "Première image : le ciel avant l'orage."
    alt: "Un ciel bleu pâle avec des nuages"
  - fichier: ./photo-2.jpg
    alt: "Un fond bleu-vert uni"
```

- `fichier` est obligatoire ; `legende` (affichée sous la vignette et dans la visionneuse) et `alt` (description pour les personnes qui ne voient pas l'image) sont facultatifs. Si tu ne mets pas de `alt`, la légende est utilisée.
- **Les espaces comptent** : chaque photo commence par un tiret `-`, et les lignes en dessous sont décalées de deux espaces.

### Ce que voit le visiteur

Des vignettes. Un clic ouvre une **visionneuse** : légende, boutons *Précédente* et *Suivante* (ou les flèches du clavier), **Échap** ou *Fermer* pour fermer.

### Une image isolée dans le texte

Écris `![description](./mon-image.jpg)` à l'endroit voulu. Elle est optimisée, mais ne s'agrandit pas au clic.

---

## 4. Ajouter une vidéo, une musique ou une playlist

Tu ajoutes le **lien** dans l'en-tête. Le lecteur apparaît dans l'article, dans une fenêtre du blog. Il ne se charge **qu'au clic** du visiteur : tant qu'il n'a pas cliqué, aucune plateforme n'est contactée.

```
type: video
lien: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
```

### Les liens acceptés

| Plateforme | Exemple de lien à coller |
|---|---|
| **YouTube** (vidéo ou playlist) | `https://www.youtube.com/watch?v=…` ou `https://youtu.be/…` ou `https://www.youtube.com/playlist?list=…` |
| **Vimeo** | `https://vimeo.com/123456789` |
| **Spotify** (titre, album, playlist, podcast) | `https://open.spotify.com/playlist/…` |
| **Deezer** | `https://www.deezer.com/fr/playlist/123456` |
| **SoundCloud** | `https://soundcloud.com/artiste/titre` |

### Bandcamp : un cas à part

Bandcamp n'accepte pas un lien de page ordinaire. Il faut son lien « **Intégrer** » :

1. Sur Bandcamp, ouvre l'album ou le morceau, clique sur **Partager**, puis **Intégrer**.
2. Choisis la taille, puis copie le code proposé.
3. Dans ce code, repère `src="…"` : l'adresse commence par `https://bandcamp.com/EmbeddedPlayer/…`. Colle **cette adresse** dans `lien:` (coller tout le code `<iframe …>` fonctionne aussi).

Un lien Bandcamp ordinaire s'affiche comme un simple lien cliquable, avec une explication.

### Plusieurs lecteurs dans un même article

Remplace `lien:` par `liens:` et une liste :

```
liens:
  - "https://www.youtube.com/watch?v=…"
  - "https://open.spotify.com/playlist/…"
```

### Si le lecteur ne s'affiche pas

- Vérifie les guillemets et que le lien est **complet** (il commence par `https://`).
- Les liens raccourcis (`on.soundcloud.com`, `spotify.link`…) ne sont pas reconnus : ouvre le lien dans ton navigateur et copie l'adresse finale.
- Certains contenus interdisent l'intégration : le lecteur affiche alors une erreur. Utilise le lien « Ouvrir sur … » sous le lecteur.

---

## 5. Les tags

- Les tags se mettent dans l'en-tête : `tags: [fiction, brume, enfance]`.
- Un tag de plusieurs mots est possible : `tags: [science fiction, brume]`.
- **Il n'y a rien à créer** : la page de chaque tag et la page « Tous les tags » (avec le nombre d'articles) se font toutes seules.
- Les tags sont cliquables partout : accueil, articles, pages de tags.
- Majuscules, accents et tirets sont ignorés pour regrouper : « Science-fiction », « science fiction » et « Science fiction » mènent à la même page. Pour garder une orthographe homogène, **recopie toujours le tag de la même façon**.
- Pour retirer un tag : enlève-le de la liste. S'il n'a plus aucun article, sa page disparaît.

---

## 6. Les brouillons privés

Le dépôt GitHub est **public** : tout ce qui est dedans peut être lu par n'importe qui. Pour qu'un brouillon reste secret, écris-le dans le dossier **`brouillons`** à la racine du projet. Ce dossier n'est **jamais** envoyé sur GitHub.

1. Crée un dossier dans `brouillons/` (même structure qu'un article : un `index.md` et ses images).
2. Pour le relire avec le décor complet du blog, lance `npm run dev` et ouvre :
   **http://localhost:4321/corollaire/brouillons/**
   Tu y vois la liste de tes brouillons. Ils n'apparaissent **jamais** dans le site publié, ni dans la recherche, ni dans le RSS.
3. Quand l'article est prêt, **déplace son dossier** dans `src/content/articles/`. Il sera publié à ton prochain envoi.

**Attention** : le dossier `brouillons` n'est pas sauvegardé sur GitHub. Si tu veux une copie de sécurité, copie-le de temps en temps sur une clé USB ou un autre disque.

> N'utilise pas `brouillon: true` dans l'en-tête d'un article : le texte resterait lisible dans le dépôt public.

---

## 7. Publier

### Avant de publier

- Relis ton article sur `http://localhost:4321/corollaire/`.
- Après un gros changement, vérifie que tout se construit : `npm run build` (ça prend une ou deux minutes). Si le message final ne contient pas d'erreur, c'est bon.

### Envoyer sur GitHub

Dans le terminal du projet :

```
npm run publier
```

(Ce raccourci fait trois choses d'un coup. Si tu ne l'as pas créé, voici les trois commandes à la main :)

```
git add .
git commit -m "Nouvel article"
git push
```

Pour créer le raccourci une fois pour toutes :

```
npm pkg set "scripts.publier=git add -A && git commit -m maj && git push"
```

### Suivre la mise en ligne

1. Va sur **github.com/Orfraile/corollaire**, onglet **Actions**.
2. La ligne « Mise en ligne du blog » passe d'un point orange à une **coche verte** en 2 à 4 minutes.
3. Recharge ton blog : **https://orfraile.github.io/corollaire/** (au besoin **Ctrl + F5** pour forcer le rechargement).

Si la ligne devient rouge (croix), clique dessus, ouvre l'étape en erreur, et lis le message : il indique souvent le fichier et le champ en cause (voir la partie 11).

---

## 8. Modifier, déplacer ou supprimer un article

- **Modifier** : ouvre le `index.md` de l'article, change ce que tu veux, enregistre (**Ctrl + S**), puis publie.
- **Changer l'ordre** : les articles sont classés par `date`, du plus récent au plus ancien. Change la date pour changer la place.
- **Renommer le dossier** : change l'adresse de l'article. Les anciens liens (dans une infolettre, par exemple) ne marcheront plus. Évite-le une fois l'article publié.
- **Supprimer un article** : supprime son dossier dans `src/content/articles/`, puis publie.

### Supprimer les articles d'exemple

Les six dossiers d'exemple, dans `src/content/articles/`, se suppriment sans risque :

- `le-ciel-de-novembre`
- `le-disque-qui-gresille`
- `une-video-pour-le-dimanche`
- `une-chanson-pour-le-retour`
- `playlist-de-fin-de-journee`
- `promenade-au-bord-de-leau`

Dans le dossier `brouillons`, tu peux aussi supprimer `exemple-de-brouillon`. Garde **au moins un** article publié, sinon l'accueil est vide.

---

## 9. L'infolettre

L'infolettre est gérée par **Brevo**. Elle est envoyée **à la main** : rien ne part automatiquement quand tu publies un article.

### Le formulaire sur le blog

Un bouton « S'abonner » apparaît dans la colonne latérale et en bas de chaque article. Il ouvre une fenêtre avec le formulaire Brevo, et ne charge rien avant le clic.

Il s'active quand tu colles l'adresse de ton formulaire Brevo dans `src/lib/config.ts` :

```
export const BREVO_FORMULAIRE = 'https://…sibforms.com/…';
```

L'adresse se trouve dans Brevo : **Contacts > Formulaires** > ton formulaire > **Partager** > version **Iframe**, adresse entre les guillemets de `src="…"`.

Si le formulaire est coupé dans la fenêtre, augmente `BREVO_HAUTEUR` dans le même fichier.

### Envoyer une infolettre

1. Dans Brevo, ouvre **Campagnes** et crée une **campagne e-mail**.
2. Renseigne le nom (pour toi), l'**expéditeur**, l'**objet**, et le destinataire : ta liste « Infolettre Corollaire ».
3. Écris le contenu. **Garde le pied de page par défaut** : il contient le lien de désinscription, obligatoire. Le fichier `modeles/modele-infolettre.md` te donne une trame.
4. L'adresse d'un article est : `https://orfraile.github.io/corollaire/articles/NOM-DU-DOSSIER/`.
5. Envoie-toi d'abord un **message de test**, relis-le.
6. Envoie la campagne, ou programme-la.

### À retenir

- Le plan gratuit permet environ 300 e-mails par jour.
- L'adresse d'expédition doit idéalement être sur un nom de domaine à toi (voir la partie 13).
- Les noms et l'adresse postale que tu as donnés à Brevo apparaissent en bas des messages.
- Les abonnés confirment leur inscription par e-mail (double confirmation).
- Un abonné peut se désinscrire à tout moment ; les inscriptions et désinscriptions se voient dans **Contacts**.

---

## 10. Réglages du blog

### Les réglages généraux : `src/lib/config.ts`

| Réglage | À quoi il sert |
|---|---|
| `SITE.nom` | Le nom du blog (« Corollaire ») |
| `SITE.auteur` | Ton pseudo (« Orfraile ») |
| `SITE.description` | La phrase de description du blog |
| `ARTICLES_PAR_PAGE` | Combien d'articles sur chaque page de l'accueil |
| `MESSAGE_DEFILANT` | Le texte qui défile sous le menu. Mets `''` (deux apostrophes) pour le retirer |
| `BREVO_FORMULAIRE` | L'adresse du formulaire d'inscription (voir la partie 9) |
| `BREVO_HAUTEUR` | La hauteur de la fenêtre d'inscription |

### Les phrases cachées : `src/data/phrases.txt`

Une phrase par ligne. Elles apparaissent au hasard dans la barre du pied de page (une nouvelle à chaque visite) et quand on clique sur l'étoile ✦ à côté du titre (la même tant que la page n'est pas rechargée). Les lignes qui commencent par `#` sont ignorées. Enregistre en **UTF-8** (c'est le réglage par défaut de VS Code) pour garder les accents.

### L'écho caché des mentions légales : `src/data/maison.txt`

Les lignes qui peuvent apparaître sous le paragraphe « Propriété intellectuelle » après un survol prolongé. Garde-les courtes.

### Les pages « À propos », « Contact », « Mentions légales »

Ce sont des fichiers dans `src/content/pages/` :
- `a-propos.md` : **réécris-le à ta façon** (c'est un texte provisoire) ;
- `contact.md` ;
- `mentions-legales.md` : à relire attentivement, ce n'est qu'un modèle de départ (je ne suis pas juriste).

### Changer l'adresse e-mail de contact

L'adresse `contact@orfrail.fr` est fictive pour l'instant. Quand tu en auras une vraie, remplace-la **à trois endroits** :
- dans `src/content/pages/contact.md`, **deux fois** (le lien et la ligne `data-text`, qui doivent rester identiques) ;
- dans `src/content/pages/mentions-legales.md`.

### La photo de la boîte aux lettres

L'image `src/assets/boite-aux-lettres.webp` est **provisoire** (dessinée à la main). Remplace-la par ta photo en gardant **exactement le même nom de fichier**. Elle apparaît sur la page « Mentions légales », au survol du paragraphe « Hébergeur ».

### Les couleurs, le curseur, les polices : `src/styles/theme.css`

- Les couleurs sont tout en haut, dans le bloc « LA PALETTE ». Le bleu paon vaut `#0090aa` (approximation à l'écran de PANTONE P 119-14 C).
- Pour retirer le curseur personnalisé : supprime les deux lignes sous « Curseur personnalisé ».
- Pour la police des titres : `--police-pixel`. Un bloc prêt à décommenter est prévu pour la police **Pixelta**, si tu achètes sa licence Web.
- Pour la largeur de la colonne de lecture : `--largeur-texte`.

### L'adresse du site : `astro.config.mjs`

Les lignes `site` et `base` donnent l'adresse du blog. Ne les change que si tu changes de pseudo GitHub, de nom de dépôt, ou si tu achètes un nom de domaine (voir la partie 13).

---

## 11. Quand quelque chose ne marche pas

La règle d'or : **lis le message d'erreur**, il est en général précis (il nomme le fichier et le champ). Copie-le tel quel si tu demandes de l'aide.

| Ce que tu vois | La cause probable | Que faire |
|---|---|---|
| Erreur parlant de `titre`, `date`, `type` ou `resume` « Required » | Un champ obligatoire manque ou est mal écrit | Compare avec la partie 2 |
| Erreur sur `date` | La date n'est pas au bon format | Écris `2026-12-02` (année-mois-jour) |
| Erreur sur `type` | Le mot n'est pas dans la liste | Choisis : `texte`, `chronique`, `video`, `musique`, `playlist`, `photos` |
| L'article casse après un deux-points dans le titre | Pas de guillemets | Mets `"…"` autour du titre et du résumé |
| Une image est introuvable | Mauvais nom, mauvais emplacement ou mauvaise casse (majuscules) | Vérifie que l'image est dans le **même dossier** que l'article et que le nom est identique, lettre pour lettre |
| `d.liens is not iterable` ou une erreur qui ne correspond plus à ce que tu as fait | Le site garde en mémoire une ancienne version | Arrête-le (Ctrl + C), puis `Remove-Item -Recurse -Force .astro` et `npm run dev` |
| Une page ne change pas après modification | Le navigateur a gardé l'ancienne | **Ctrl + F5** |
| Un article n'apparaît pas | Il est dans `brouillons`, ou son en-tête est incorrect | Vérifie son dossier et ses champs |
| Le robot GitHub est rouge | Une erreur de construction | Ouvre la ligne en erreur dans l'onglet **Actions** et lis le message |
| La recherche ne fonctionne pas sur ton ordinateur | Normal avec `npm run dev` | `npm run build` puis `npm run preview` |
| `git push` est refusé | Identité, connexion ou historique | Lis le message ; en cas de « GH007 », ton adresse e-mail Git doit être celle de GitHub masquée (« noreply ») |
| Le formulaire d'infolettre n'apparaît pas | `BREVO_FORMULAIRE` est vide | Voir la partie 9 |

### Si tu es bloqué

Prends le message d'erreur complet, dis quelle action tu venais de faire, et demande de l'aide en les joignant. Plus tu donnes de détails, plus vite on trouve.

---

## 12. Aide-mémoire

### Les commandes (dans le dossier du projet)

```
cd $HOME\Documents\corollaire
```

| Je veux | Je tape |
|---|---|
| Voir le blog chez moi | `npm run dev` (arrêt : **Ctrl + C**) |
| Vérifier que tout se construit | `npm run build` |
| Voir la version construite (avec recherche) | `npm run preview` |
| Publier mes modifications | `npm run publier` |
| Effacer la mémoire du site (en cas d'erreur étrange) | `Remove-Item -Recurse -Force .astro` |
| Voir ce que Git a repéré comme modifié | `git status` |

### Les cinq gestes pour publier un article

1. Copier `modeles/modele-article/` dans `src/content/articles/` et **renommer** le dossier.
2. Remplir l'en-tête et écrire le texte.
3. Ajouter les images dans le même dossier.
4. Vérifier avec `npm run dev`.
5. `npm run publier`, puis attendre la coche verte sur GitHub.

### Où se trouve chaque chose

```
corollaire/
├─ src/
│  ├─ content/
│  │  ├─ articles/        ← tes articles (un dossier chacun)
│  │  └─ pages/           ← À propos, Contact, Mentions légales
│  ├─ data/
│  │  ├─ phrases.txt      ← les phrases cachées
│  │  └─ maison.txt       ← l'écho caché des mentions légales
│  ├─ assets/             ← ciel, photo de la boîte aux lettres
│  ├─ lib/config.ts       ← les réglages du blog
│  └─ styles/theme.css    ← couleurs, polices, curseur
├─ brouillons/            ← brouillons privés (jamais envoyés sur GitHub)
├─ modeles/               ← modèle d'article, modèle d'infolettre
├─ public/                ← fichiers servis tels quels (icône du site…)
├─ astro.config.mjs       ← adresse du blog
└─ GUIDE.md               ← ce guide
```

---

## 13. Plus tard : un nom de domaine

Pour avoir une adresse comme `corollaire.fr` à la place de `orfraile.github.io/corollaire/` — et surtout une vraie adresse e-mail pour l'infolettre — il faudra :

1. **Acheter** un nom de domaine chez un registraire (environ une dizaine d'euros par an).
2. Le **relier à GitHub Pages** : dans le dépôt, **Settings > Pages > Custom domain**, avec les enregistrements DNS que GitHub indique.
3. **Adapter** `astro.config.mjs` : la ligne `site` devient `https://corollaire.fr`, et la ligne `base` est supprimée. Il faudra aussi mettre à jour les adresses dans le modèle d'infolettre et les mentions légales.
4. **Créer une adresse e-mail** sur ce domaine, la déclarer comme expéditeur dans Brevo, et **authentifier le domaine** (DKIM et DMARC) pour que les infolettres arrivent bien en boîte de réception.
5. Remplacer `contact@orfrail.fr` par la vraie adresse (partie 10).

Cette opération a quelques pièges : demande de l'aide pour la faire, pas à pas, quand tu y seras.

---

*Dernière mise à jour du guide : novembre 2026.*
