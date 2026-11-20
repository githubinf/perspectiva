import { ALL_BOOKS, CANONICAL_URLS, FEATURED_BOOKS, HTML_SITEMAP_PATH, LEGAL_PATHS, NAV_ITEMS } from './constants.tsx';
import { getPageMeta } from './seo.ts';

export const SITE_BASE_URL = 'https://fgperspectiva.vercel.app';

const EXCLUDED_SYSTEM_PATHS = new Set<string>([
  '/404/',
  '/search/',
  '/buscar/',
  '/busqueda/',
  HTML_SITEMAP_PATH,
  ...LEGAL_PATHS,
]);

const escapeXml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

/**
 * Normalizes a local internal route into canonical trailing-slash form (`/ruta/`).
 * Rejects query strings, hash fragments, external hosts, empty targets, or non-page files.
 */
export const normalizeSitemapPath = (rawTarget: string): string | null => {
  if (!rawTarget) return null;
  const trimmed = rawTarget.trim();
  if (!trimmed || trimmed.includes('?') || trimmed.includes('#')) {
    return null;
  }

  let pathname = trimmed;
  if (/^https?:\/\//i.test(pathname)) {
    if (!pathname.startsWith(SITE_BASE_URL)) {
      return null;
    }
    pathname = pathname.slice(SITE_BASE_URL.length) || '/';
  }

  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`;
  }
  if (pathname !== '/' && !pathname.endsWith('/')) {
    pathname = `${pathname}/`;
  }

  // Reject explicit file paths (e.g. .xml, .txt, .png, .html)
  const lastSegment = pathname.split('/').filter(Boolean).pop() || '';
  if (lastSegment.includes('.')) {
    return null;
  }

  if (EXCLUDED_SYSTEM_PATHS.has(pathname)) {
    return null;
  }

  return pathname;
};

/**
 * Dynamically collects indexable canonical URLs directly from the project's
 * real data sources (`NAV_ITEMS`, `FEATURED_BOOKS`, `ALL_BOOKS`, `CANONICAL_URLS`)
 * validated against `getPageMeta` SEO rules (`noindex`, canonical domain, trailing slash).
 */
export function getIndexableSitemapUrls(): string[] {
  const candidatePaths: string[] = [];
  const seenCandidates = new Set<string>();

  const disabledBookPaths = new Set<string>();
  for (const book of ALL_BOOKS) {
    if (book.isAvailable === false) {
      const p = normalizeSitemapPath(book.path || (book.slug ? `/${book.slug}/` : ''));
      if (p) disabledBookPaths.add(p);
    }
  }

  const disabledCategoryPaths = new Set<string>();
  for (const cat of FEATURED_BOOKS) {
    const hasActiveBook = Array.isArray(cat.books) && cat.books.some((b) => b.isAvailable !== false);
    if (!hasActiveBook) {
      const p = normalizeSitemapPath(cat.path || (cat.slug ? `/${cat.slug}/` : ''));
      if (p) disabledCategoryPaths.add(p);
    }
  }

  const addCandidate = (rawPath?: string) => {
    if (!rawPath) return;
    const normalized = normalizeSitemapPath(rawPath);
    if (!normalized) return;
    if (disabledBookPaths.has(normalized) || disabledCategoryPaths.has(normalized)) return;
    if (seenCandidates.has(normalized)) return;
    seenCandidates.add(normalized);
    candidatePaths.push(normalized);
  };

  // 1. Página de inicio
  addCandidate('/');

  // 2. Páginas principales públicas (navegación principal)
  for (const navItem of NAV_ITEMS) {
    addCandidate(navItem.href);
  }

  // 3. Categorías activas
  for (const category of FEATURED_BOOKS) {
    const hasActiveBook =
      Array.isArray(category.books) && category.books.some((b) => b.isAvailable !== false);
    if (hasActiveBook) {
      addCandidate(category.path || (category.slug ? `/${category.slug}/` : ''));
    }
  }

  // 4. Libros publicados y activos
  for (const book of ALL_BOOKS) {
    if (book.isAvailable !== false) {
      addCandidate(book.path || (book.slug ? `/${book.slug}/` : ''));
    }
  }

  // 5. Otras páginas públicas declaradas en la configuración canónica
  for (const canonicalUrl of CANONICAL_URLS) {
    addCandidate(canonicalUrl);
  }

  // Validación estricta de indexabilidad SEO real y URL canónica definitiva
  const indexableUrls: string[] = [];
  const seenCanonicalUrls = new Set<string>();

  for (const candidatePath of candidatePaths) {
    const meta = getPageMeta(candidatePath);

    // Excluir automáticamente noindex, 404 (fallback devuelve noindex: true) o rutas no destinadas a indexación
    if (meta.noindex === true) continue;

    // Validar que el canonical es absoluto, pertenece al dominio oficial y coincide con URL normalizada
    const expectedCanonical = `${SITE_BASE_URL}${candidatePath}`;
    if (!meta.canonical || !meta.canonical.startsWith(`${SITE_BASE_URL}/`)) continue;
    if (meta.canonical.includes('?') || meta.canonical.includes('#')) continue;
    if (meta.canonical !== expectedCanonical) continue;

    if (!seenCanonicalUrls.has(meta.canonical)) {
      seenCanonicalUrls.add(meta.canonical);
      indexableUrls.push(meta.canonical);
    }
  }

  return indexableUrls;
}

/**
 * Generates a clean, valid Sitemap XML document following Sitemaps.org 0.9 protocol
 * without invented lastmod dates or arbitrary priority/changefreq values.
 */
export function generateSitemapXml(): string {
  const urls = getIndexableSitemapUrls();
  const entries = urls
    .map(
      (loc) => `  <url>
    <loc>${escapeXml(loc)}</loc>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}
