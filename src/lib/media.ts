// Reconnaît le lien collé (YouTube, Vimeo, Spotify, Deezer, SoundCloud, Bandcamp)
// et fabrique l'adresse du lecteur à intégrer.

export interface InfoMedia {
  fournisseur: string;
  lien: string; // adresse d'origine, pour « Ouvrir sur … »
  embed?: string; // adresse du lecteur intégré
  hauteur?: number; // hauteur du lecteur audio, en pixels
  ratio?: string; // pour les vidéos, par exemple '16 / 9'
  autoplay?: boolean;
  aideBandcamp?: boolean;
}

function secondes(t: string | null) {
  if (!t) return 0;
  if (/^\d+$/.test(t)) return parseInt(t, 10);
  const m = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!m) return 0;
  return (parseInt(m[1] || '0', 10) * 3600) + (parseInt(m[2] || '0', 10) * 60) + parseInt(m[3] || '0', 10);
}

export function analyserLien(brut: string): InfoMedia {
  let texte = (brut ?? '').trim();
  // Si on a collé tout le code <iframe ...>, on récupère juste l'adresse src="..."
  const iframe = texte.match(/src=["']([^"']+)["']/i);
  if (iframe) texte = iframe[1];

  let u: URL;
  try {
    u = new URL(texte);
  } catch (e) {
    return { fournisseur: 'Lien', lien: texte };
  }
  const h = u.hostname.toLowerCase().replace(/^(www|m)\./, '');
  const chemin = u.pathname;

  // ----- YouTube -----
  if (h === 'youtube.com' || h === 'youtu.be' || h === 'youtube-nocookie.com') {
    let id: string | null = null;
    if (h === 'youtu.be') id = chemin.split('/')[1] || null;
    else if (/^\/(shorts|embed|live|v)\//.test(chemin)) id = chemin.split('/')[2] || null;
    else id = u.searchParams.get('v');
    const liste = u.searchParams.get('list');
    const debut = secondes(u.searchParams.get('t') ?? u.searchParams.get('start'));
    const q = new URLSearchParams();
    q.set('rel', '0');
    if (debut) q.set('start', String(debut));
    if (liste) q.set('list', liste);
    if (id && id !== 'videoseries') {
      return { fournisseur: 'YouTube', lien: texte, embed: `https://www.youtube-nocookie.com/embed/${id}?${q}`, ratio: '16 / 9', autoplay: true };
    }
    if (liste) {
      return { fournisseur: 'YouTube', lien: texte, embed: `https://www.youtube-nocookie.com/embed/videoseries?${q}`, ratio: '16 / 9', autoplay: true };
    }
    return { fournisseur: 'YouTube', lien: texte };
  }

  // ----- Vimeo -----
  if (h === 'vimeo.com' || h === 'player.vimeo.com') {
    const segments = chemin.split('/').filter(Boolean);
    const i = segments.findIndex((s) => /^\d+$/.test(s));
    if (i >= 0) {
      const q = new URLSearchParams({ dnt: '1' });
      const cle = u.searchParams.get('h') || (segments[i + 1] && /^[a-z0-9]{8,}$/i.test(segments[i + 1]) ? segments[i + 1] : '');
      if (cle) q.set('h', cle);
      return { fournisseur: 'Vimeo', lien: texte, embed: `https://player.vimeo.com/video/${segments[i]}?${q}`, ratio: '16 / 9', autoplay: true };
    }
    return { fournisseur: 'Vimeo', lien: texte };
  }

  // ----- Spotify -----
  if (h === 'open.spotify.com') {
    const m = chemin.match(/(track|album|playlist|episode|show|artist)\/([A-Za-z0-9]+)/);
    if (m) {
      const court = m[1] === 'track' || m[1] === 'episode';
      return { fournisseur: 'Spotify', lien: texte, embed: `https://open.spotify.com/embed/${m[1]}/${m[2]}`, hauteur: court ? 152 : 352 };
    }
    return { fournisseur: 'Spotify', lien: texte };
  }

  // ----- Deezer -----
  if (h === 'deezer.com' || h === 'widget.deezer.com') {
    const m = chemin.match(/(track|album|playlist|episode|show)\/(\d+)/);
    if (m) {
      return { fournisseur: 'Deezer', lien: texte, embed: `https://widget.deezer.com/widget/dark/${m[1]}/${m[2]}`, hauteur: m[1] === 'track' ? 150 : 300 };
    }
    return { fournisseur: 'Deezer', lien: texte };
  }

  // ----- SoundCloud -----
  if (h === 'soundcloud.com') {
    const q = new URLSearchParams({
      url: texte,
      color: '#0090aa',
      auto_play: 'false',
      hide_related: 'true',
      show_comments: 'false',
      show_user: 'true',
      show_reposts: 'false',
      show_teaser: 'false',
      visual: 'false',
    });
    return { fournisseur: 'SoundCloud', lien: texte, embed: `https://w.soundcloud.com/player/?${q}`, hauteur: chemin.includes('/sets/') ? 380 : 166 };
  }

  // ----- Bandcamp : seul le lien « intégrer » (EmbeddedPlayer) peut être affiché -----
  if (h === 'bandcamp.com' && chemin.startsWith('/EmbeddedPlayer')) {
    return { fournisseur: 'Bandcamp', lien: texte, embed: texte, hauteur: /tracklist=false/.test(texte) ? 120 : 470 };
  }
  if (h === 'bandcamp.com' || h.endsWith('.bandcamp.com')) {
    return { fournisseur: 'Bandcamp', lien: texte, aideBandcamp: true };
  }

  return { fournisseur: h, lien: texte };
}
