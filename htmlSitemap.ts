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

const CATEGORY_THEMATIC_DESCRIPTIONS: Record<string, string> = {
  origen:
    'El punto de partida para comprender la creación, transformación y aprovechamiento de recursos digitales.',
  iniciacion:
    'Fundamentos para comenzar a construir una presencia digital, desarrollar un blog y comprender las estrategias de marketing online.',
  ingresos:
    'Estrategias de afiliación, monetización, marketing CPA y modelos de generación de ingresos en el entorno digital.',
  tecnologia:
    'Herramientas, inteligencia artificial y nuevas posibilidades tecnológicas aplicadas a la creación y desarrollo de proyectos digitales.',
  crecimiento:
    'Estrategias de tráfico web, marketing de contenidos, email marketing y crecimiento de proyectos digitales.',
  mindset:
    'Mentalidad, creatividad, escritura, desarrollo personal y creación de productos digitales.',
};

export interface HtmlSitemapMainPage {
  path: string;
  title: string;
}

export interface HtmlSitemapBook {
  path: string;
  title: string;
}

export interface HtmlSitemapCategory {
  number: string;
  slug: string;
  path: string;
  title: string;
  description: string;
  books: HtmlSitemapBook[];
}

export interface HtmlSitemapData {
  mainPages: HtmlSitemapMainPage[];
  categories: HtmlSitemapCategory[];
  totalBooks: number;
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
 * `CANONICAL_URLS`), grouping active books under their canonical categories.
 */
export function getHtmlSitemapData(): HtmlSitemapData {
  const seenPaths = new Set<string>();

  const knownCategoryPaths = new Set<string>();
  for (const cat of FEATURED_BOOKS) {
    const catPath = normalizeInternalPath(cat.path || (cat.slug ? `/${cat.slug}/` : ''));
    if (catPath) knownCategoryPaths.add(catPath);
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

  // B. Biblioteca de libros: categorías activas con sus libros activos y canónicos
  const categories: HtmlSitemapCategory[] = [];
  let totalBooks = 0;

  for (const cat of FEATURED_BOOKS) {
    const rawCatPath = cat.path || (cat.slug ? `/${cat.slug}/` : '');
    const validatedCat = validateIndexableMeta(rawCatPath);
    if (!validatedCat || seenPaths.has(validatedCat.path)) continue;

    const categoryBooks: HtmlSitemapBook[] = [];
    const sourceBooks = Array.isArray(cat.books) ? cat.books : [];

    for (const book of sourceBooks) {
      if (book.isAvailable === false) continue;

      const rawBookPath = book.path || (book.slug ? `/${book.slug}/` : '');
      const validatedBook = validateIndexableMeta(rawBookPath);
      if (!validatedBook || seenPaths.has(validatedBook.path)) continue;

      seenPaths.add(validatedBook.path);
      categoryBooks.push({
        path: validatedBook.path,
        title: book.title,
      });
    }

    if (categoryBooks.length === 0) continue;

    seenPaths.add(validatedCat.path);
    totalBooks += categoryBooks.length;

    const slug = cat.slug || validatedCat.path.replace(/\//g, '');
    categories.push({
      number: String(categories.length + 1).padStart(2, '0'),
      slug,
      path: validatedCat.path,
      title: cat.category,
      description: CATEGORY_THEMATIC_DESCRIPTIONS[slug] || cat.intro,
      books: categoryBooks,
    });
  }

  return {
    mainPages,
    categories,
    totalBooks,
    totalUrls: mainPages.length + categories.length + totalBooks,
  };
}
