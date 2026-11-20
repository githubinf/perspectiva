import { ALL_BOOKS, CANONICAL_URLS, FEATURED_BOOKS, NAV_ITEMS } from './constants.tsx';
import { getPageMeta, PageMeta } from './seo.ts';

const SITE_BASE_URL = 'https://fgperspectiva.vercel.app';

const NON_INDEXABLE_SYSTEM_PATHS = new Set<string>([
  '/404/',
  '/search/',
  '/buscar/',
  '/busqueda/',
  '/mapa-del-sitio/',
]);

export interface HtmlSitemapMainPage {
  path: string;
  title: string;
}

export interface HtmlSitemapCategory {
  path: string;
  title: string;
  bookCount: number;
}

export interface HtmlSitemapBook {
  path: string;
  title: string;
  categoryName: string;
}

export interface HtmlSitemapData {
  mainPages: HtmlSitemapMainPage[];
  categories: HtmlSitemapCategory[];
  books: HtmlSitemapBook[];
  totalUrls: number;
}

export const normalizeInternalPath = (rawTarget?: string): string | null => {
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

  const lastSegment = pathname.split('/').filter(Boolean).pop() || '';
  if (lastSegment.includes('.')) {
    return null;
  }

  if (NON_INDEXABLE_SYSTEM_PATHS.has(pathname)) {
    return null;
  }

  return pathname;
};

const validateIndexableMeta = (rawTarget?: string): { path: string; meta: PageMeta } | null => {
  const path = normalizeInternalPath(rawTarget);
  if (!path) return null;

  const meta = getPageMeta(path);
  if (meta.noindex === true) return null;

  const expectedCanonical = `${SITE_BASE_URL}${path}`;
  if (!meta.canonical || meta.canonical.includes('?') || meta.canonical.includes('#')) {
    return null;
  }
  if (meta.canonical !== expectedCanonical) {
    return null;
  }

  return { path, meta };
};

const resolveMainPageTitle = (path: string, meta: PageMeta): string => {
  if (path === '/') return 'Inicio';

  const schemas = Array.isArray(meta.schema) ? meta.schema : [meta.schema];
  const breadcrumbSchema = schemas.find((s) => s && s['@type'] === 'BreadcrumbList');
  if (breadcrumbSchema && Array.isArray(breadcrumbSchema.itemListElement)) {
    const items = breadcrumbSchema.itemListElement;
    const lastCrumb = items[items.length - 1];
    if (lastCrumb?.name) {
      if (path === '/sobre-fg-perspectiva/') {
        return meta.title.split('|')[0].trim() || lastCrumb.name;
      }
      return lastCrumb.name;
    }
  }

  const navMatch = NAV_ITEMS.find((n) => normalizeInternalPath(n.href) === path);
  if (navMatch?.label) return navMatch.label;

  return meta.h1 || meta.title.split('|')[0].trim();
};

/**
 * Generates structured, strictly indexable HTML sitemap sections dynamically
 * from centralized project data (`NAV_ITEMS`, `FEATURED_BOOKS`, `ALL_BOOKS`,
 * `CANONICAL_URLS`) validated against real `seo.ts` indexability rules.
 */
export function getHtmlSitemapData(): HtmlSitemapData {
  const seenPaths = new Set<string>();

  const knownCategoryPaths = new Set<string>();
  const categoryNameBySlug = new Map<string, string>();
  for (const cat of FEATURED_BOOKS) {
    const catPath = normalizeInternalPath(cat.path || (cat.slug ? `/${cat.slug}/` : ''));
    if (catPath) knownCategoryPaths.add(catPath);
    if (cat.slug) categoryNameBySlug.set(cat.slug, cat.category);
  }

  const knownBookPaths = new Set<string>();
  for (const book of ALL_BOOKS) {
    const bookPath = normalizeInternalPath(book.path || (book.slug ? `/${book.slug}/` : ''));
    if (bookPath) knownBookPaths.add(bookPath);
  }

  // A. Páginas principales públicas e indexables
  const mainPages: HtmlSitemapMainPage[] = [];
  const mainPageCandidates = [
    '/',
    ...NAV_ITEMS.map((item) => item.href),
    ...CANONICAL_URLS.filter((url) => {
      const p = normalizeInternalPath(url);
      return Boolean(p && !knownCategoryPaths.has(p) && !knownBookPaths.has(p));
    }),
  ];

  for (const candidate of mainPageCandidates) {
    const validated = validateIndexableMeta(candidate);
    if (!validated || seenPaths.has(validated.path)) continue;
    if (knownCategoryPaths.has(validated.path) || knownBookPaths.has(validated.path)) continue;

    seenPaths.add(validated.path);
    mainPages.push({
      path: validated.path,
      title: resolveMainPageTitle(validated.path, validated.meta),
    });
  }

  // B. Categorías activas e indexables de la Biblioteca
  const categories: HtmlSitemapCategory[] = [];
  for (const cat of FEATURED_BOOKS) {
    const activeBooks = Array.isArray(cat.books)
      ? cat.books.filter((b) => b.isAvailable !== false)
      : [];
    if (activeBooks.length === 0) continue;

    const rawCatPath = cat.path || (cat.slug ? `/${cat.slug}/` : '');
    const validated = validateIndexableMeta(rawCatPath);
    if (!validated || seenPaths.has(validated.path)) continue;

    seenPaths.add(validated.path);
    categories.push({
      path: validated.path,
      title: cat.category,
      bookCount: activeBooks.length,
    });
  }

  // C. Libros publicados, activos e indexables
  const books: HtmlSitemapBook[] = [];
  for (const book of ALL_BOOKS) {
    if (book.isAvailable === false) continue;

    const rawBookPath = book.path || (book.slug ? `/${book.slug}/` : '');
    const validated = validateIndexableMeta(rawBookPath);
    if (!validated || seenPaths.has(validated.path)) continue;

    seenPaths.add(validated.path);
    const parentCategory =
      (book.categorySlug && categoryNameBySlug.get(book.categorySlug)) ||
      FEATURED_BOOKS.find((c) => c.books.some((b) => b.slug === book.slug))?.category ||
      '';

    books.push({
      path: validated.path,
      title: book.title,
      categoryName: parentCategory,
    });
  }

  return {
    mainPages,
    categories,
    books,
    totalUrls: mainPages.length + categories.length + books.length,
  };
}
