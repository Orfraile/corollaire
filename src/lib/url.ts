// Construit une adresse interne en tenant compte du dossier de base (/corollaire).
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : '/' + path;
  return base + p;
}
