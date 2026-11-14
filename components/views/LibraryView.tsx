import React, { useMemo, useState } from 'react';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { Search, X, RotateCcw } from 'lucide-react';

interface RouteMetadata {
  number: string;
  label: string;
  descriptor: string;
  summary: string;
}

const ROUTE_METADATA: Record<string, RouteMetadata> = {
  origen: {
    number: '01',
    label: 'Origen',
    descriptor: 'Producto estrella',
    summary: 'La base metodológica de toda la colección: transformar contenidos digitales en infoproductos estructurados y rentables.',
  },
  iniciacion: {
    number: '02',
    label: 'Iniciación',
    descriptor: 'Fundamentos digitales',
    summary: 'Para quienes buscan construir su primer activo online con bases sólidas en blogging optimizado, SEO e inbound marketing.',
  },
  ingresos: {
    number: '03',
    label: 'Ingresos',
    descriptor: 'Monetización y afiliación',
    summary: 'Estrategias prácticas de afiliación, marketing CPA y canales de monetización orientados a la conversión sostenible.',
  },
  tecnologia: {
    number: '04',
    label: 'Tecnología',
    descriptor: 'Inteligencia Artificial aplicada',
    summary: 'Aplicaciones reales de la inteligencia artificial y ChatGPT para crear, escribir, sistematizar y optimizar proyectos.',
  },
  crecimiento: {
    number: '05',
    label: 'Crecimiento',
    descriptor: 'Tráfico, contenidos y crecimiento',
    summary: 'Sistemas de atracción de visitas, marketing de contenidos y email marketing para ampliar el alcance de tu proyecto.',
  },
  mindset: {
    number: '06',
    label: 'Mindset',
    descriptor: 'Mentalidad y creación',
    summary: 'Criterio editorial, enfoque emprendedor y metodologías prácticas para escribir, publicar ebooks y consolidar hábitos creativos.',
  },
};

const COVER_DIMENSIONS: Record<string, { width: number; height: number }> = {
  'experto-en-plr-premium': { width: 400, height: 443 },
  'desbloquea-tu-inspiracion-con-chatgpt': { width: 1800, height: 2200 },
  'el-manual-del-solopreneur-moderno': { width: 600, height: 733 },
};

const DEFAULT_COVER_DIMENSIONS = { width: 400, height: 488 };

const normalizeSearchText = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const getBookCoverDimensions = (slug?: string) =>
  (slug && COVER_DIMENSIONS[slug]) || DEFAULT_COVER_DIMENSIONS;

const getRouteMeta = (category: BookCategory, index: number): RouteMetadata => {
  const existing = category.slug ? ROUTE_METADATA[category.slug] : undefined;
  if (existing) return existing;
  return {
    number: String(index + 1).padStart(2, '0'),
    label: category.category,
    descriptor: category.category,
    summary: category.intro,
  };
};

const LibraryView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const normalizedQuery = normalizeSearchText(searchQuery);
  const queryTokens = useMemo(
    () => normalizedQuery.split(/\s+/).filter(Boolean),
    [normalizedQuery]
  );

  const filteredCategories = useMemo(() => {
    const categoriesByFilter =
      activeFilter === 'all'
        ? FEATURED_BOOKS
        : FEATURED_BOOKS.filter((category) => category.slug === activeFilter);

    return categoriesByFilter
      .map((category) => {
        if (queryTokens.length === 0) {
          return { category, books: category.books };
        }

        const matchedBooks = category.books.filter((book) => {
          const searchable = normalizeSearchText(
            [
              book.title,
              book.subtitle || '',
              book.description,
              category.category,
            ].join(' ')
          );
          return queryTokens.every((token) => searchable.includes(token));
        });

        return { category, books: matchedBooks };
      })
      .filter((entry) => entry.books.length > 0);
  }, [activeFilter, queryTokens]);

  const totalCatalogBooks = ALL_BOOKS.length;
  const visibleBookCount = useMemo(
    () => filteredCategories.reduce((sum, entry) => sum + entry.books.length, 0),
    [filteredCategories]
  );

  const activeRouteMeta = useMemo(() => {
    if (activeFilter === 'all') return null;
    const idx = FEATURED_BOOKS.findIndex((c) => c.slug === activeFilter);
    return idx >= 0 ? getRouteMeta(FEATURED_BOOKS[idx], idx) : null;
  }, [activeFilter]);

  const hasActiveCriteria = activeFilter !== 'all' || searchQuery.trim().length > 0;

  const openPurchaseModal = (book: BookItem) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const resetFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
  };

  const handleSelectRouteAndScroll = (slug?: string) => {
    if (!slug) return;
    setActiveFilter(slug);
    const explorerEl = document.getElementById('explorador-catalogo');
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const statusAnnouncement = useMemo(() => {
    if (visibleBookCount === 0) {
      return 'No hemos encontrado libros que coincidan con tu búsqueda.';
    }
    const baseCount =
      visibleBookCount === 1
        ? 'Mostrando 1 libro'
        : `Mostrando ${visibleBookCount} de ${totalCatalogBooks} libros`;
    const parts: string[] = [baseCount];
    if (activeRouteMeta) {
      parts.push(`en la ruta ${activeRouteMeta.label}`);
    }
    if (searchQuery.trim()) {
      parts.push(`para «${searchQuery.trim()}»`);
    }
    return `${parts.join(' ')}.`;
  }, [visibleBookCount, totalCatalogBooks, activeRouteMeta, searchQuery]);

  let renderedCardIndex = 0;

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* BLOQUE 1 — PRESENTACIÓN EDITORIAL */}
      <header className="bg-[#dae7df]/20 border-b border-[#174532]/12 pt-6 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Biblioteca', href: '/biblioteca/' }]} />

          <div className="mt-6 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                Colección editorial
              </span>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] mb-6 leading-tight text-balance">
              Biblioteca FG Perspectiva
            </h1>

            <div className="space-y-4 text-subtitle text-[#1b1b1b]/80 font-normal leading-relaxed max-w-[68ch]">
              <p>
                La Biblioteca FG Perspectiva reúne el catálogo completo de obras publicadas por la editorial en torno a la creación, el desarrollo y la consolidación de proyectos digitales con criterio práctico.
              </p>
              <p>
                Las 23 obras que forman parte de la colección están organizadas en seis rutas temáticas complementarias que abarcan desde el desarrollo de infoproductos y los fundamentos del blogging hasta la monetización, la inteligencia artificial aplicada, la captación de tráfico y la mentalidad del creador.
              </p>
              <p>
                Nuestra propuesta editorial no consiste en acumular tácticas aisladas ni soluciones pasajeras, sino en ofrecer guías claras y estructuradas para estudiar cada disciplina, comprender sus fundamentos y conectarlas de forma coherente dentro de una arquitectura digital.
              </p>
            </div>

            {/* Franja de datos editoriales */}
            <dl className="mt-8 pt-6 border-t border-[#174532]/12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#174532]">
              <div className="flex items-baseline gap-2">
                <dt className="sr-only">Total de libros publicados</dt>
                <dd className="font-serif font-bold text-lg tabular-nums">{totalCatalogBooks}</dd>
                <span className="text-[#1b1b1b]/75 font-medium">libros publicados</span>
              </div>
              <span className="text-[#174532]/25 select-none hidden sm:inline" aria-hidden="true">|</span>
              <div className="flex items-baseline gap-2">
                <dt className="sr-only">Rutas temáticas</dt>
                <dd className="font-serif font-bold text-lg tabular-nums">{FEATURED_BOOKS.length}</dd>
                <span className="text-[#1b1b1b]/75 font-medium">rutas temáticas</span>
              </div>
              <span className="text-[#174532]/25 select-none hidden sm:inline" aria-hidden="true">|</span>
              <div className="flex items-baseline gap-2">
                <dt className="sr-only">Estructura del catálogo</dt>
                <dd className="font-serif font-bold text-lg tabular-nums">1</dd>
                <span className="text-[#1b1b1b]/75 font-medium">colección editorial</span>
              </div>
            </dl>
          </div>
        </div>
      </header>

      {/* BLOQUE 2 — MAPA DE RUTAS EDITORIALES (ESTRICTO TIPOGRÁFICO, SIN IMÁGENES) */}
      <section aria-labelledby="rutas-editoriales-heading" className="py-14 md:py-20 bg-white border-b border-[#174532]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                Estructura de la colección
              </span>
            </div>
            <h2 id="rutas-editoriales-heading" className="text-h2-lg font-bold font-serif text-[#174532] mb-3 text-balance">
              Explora las rutas editoriales
            </h2>
            <p className="text-body text-[#1b1b1b]/75 leading-relaxed">
              Cada ruta reúne libros relacionados con un área específica del conocimiento digital. Puedes explorar una temática, consultar sus obras o utilizarla como punto de partida para descubrir nuevos contenidos dentro de la colección.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_BOOKS.map((category, index) => {
              const meta = getRouteMeta(category, index);
              const routePath = category.path || `/${category.slug}/`;
              const bookCountLabel =
                category.books.length === 1 ? '1 libro' : `${category.books.length} libros`;

              return (
                <article
                  key={category.slug}
                  className="bg-[#f9fbfa] hover:bg-[#dae7df]/20 border border-[#174532]/15 hover:border-[#174532]/35 rounded-md p-6 transition-colors duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[#174532]/12">
                      <span className="text-[11.5px] uppercase tracking-[0.12em] font-bold text-[#1f513a] tabular-nums">
                        {meta.number} — {meta.label}
                      </span>
                      <span className="text-xs font-semibold text-[#174532] tabular-nums">
                        {bookCountLabel}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-bold font-serif text-[#174532] leading-snug mb-2">
                      {meta.descriptor}
                    </h3>

                    <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed mb-6">
                      {meta.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#174532]/10 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={routePath}
                      className="inline-flex items-center text-[13px] font-semibold text-[#174532] hover:text-[#1f513a] underline underline-offset-4 decoration-[#174532]/35 hover:decoration-[#174532] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                    >
                      Ir a la ruta →
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleSelectRouteAndScroll(category.slug)}
                      className="text-[12.5px] font-semibold text-[#1f513a] bg-white hover:bg-[#dae7df]/50 border border-[#174532]/20 px-3 py-1.5 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                    >
                      Filtrar en catálogo
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOQUE 3 — EXPLORADOR DEL CATÁLOGO */}
      <section
        id="explorador-catalogo"
        aria-labelledby="explorador-heading"
        className="py-12 md:py-14 bg-[#dae7df]/15 border-b border-[#174532]/12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <h2 id="explorador-heading" className="text-h2 font-bold font-serif text-[#174532] mb-2.5 text-balance">
              Explora los libros
            </h2>
            <p className="text-body-sm md:text-body text-[#1b1b1b]/75 leading-relaxed">
              Utiliza el explorador para localizar una obra por su título o consultar los libros de una ruta temática concreta. Cada ficha individual contiene la información correspondiente a la obra y sus opciones disponibles.
            </p>
          </div>

          <div className="bg-white border border-[#174532]/15 rounded-md p-5 md:p-6 shadow-xs space-y-6">
            {/* Buscador */}
            <div className="max-w-xl">
              <label
                htmlFor="library-search"
                className="block text-xs uppercase tracking-[0.1em] font-semibold text-[#174532] mb-2"
              >
                Buscar libros por título, ruta o tema
              </label>
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#174532]/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="library-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ej.: tráfico, ChatGPT, afiliados, PLR..."
                  className="w-full pl-10 pr-10 py-2.5 bg-[#f9fbfa] border border-[#174532]/25 rounded-sm text-sm text-[#1b1b1b] placeholder:text-[#1b1b1b]/55 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#174532] focus:border-[#174532] transition-colors"
                />
                {searchQuery.trim().length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#174532] hover:bg-[#dae7df]/50 rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Filtro por ruta temática */}
            <div>
              <p className="text-xs uppercase tracking-[0.1em] font-semibold text-[#174532] mb-2.5">
                Filtrar por ruta temática
              </p>
              <div
                role="group"
                aria-label="Filtrar catálogo por ruta temática"
                className="flex flex-wrap gap-2"
              >
                <button
                  type="button"
                  aria-pressed={activeFilter === 'all'}
                  onClick={() => setActiveFilter('all')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] ${
                    activeFilter === 'all'
                      ? 'bg-[#174532] text-white border-[#174532] shadow-xs'
                      : 'bg-white text-[#174532] border-[#174532]/25 hover:bg-[#dae7df]/40'
                  }`}
                >
                  <span>Todas las categorías</span>
                  <span className="tabular-nums opacity-90">({totalCatalogBooks})</span>
                </button>

                {FEATURED_BOOKS.map((category, index) => {
                  const meta = getRouteMeta(category, index);
                  const isActive = activeFilter === category.slug;
                  return (
                    <button
                      key={category.slug}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(category.slug || 'all')}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-xs font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] ${
                        isActive
                          ? 'bg-[#174532] text-white border-[#174532] shadow-xs'
                          : 'bg-white text-[#174532] border-[#174532]/25 hover:bg-[#dae7df]/40'
                      }`}
                    >
                      <span>{meta.label}</span>
                      <span className="tabular-nums opacity-90">({category.books.length})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estado de resultados accesible + restablecer */}
            <div className="pt-4 border-t border-[#174532]/10 flex flex-wrap items-center justify-between gap-3">
              <p
                role="status"
                aria-live="polite"
                className="text-sm font-medium text-[#174532]"
              >
                {statusAnnouncement}
              </p>

              {hasActiveCriteria && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174532] hover:text-[#1f513a] underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Restablecer filtros
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4 — CATÁLOGO DE LIBROS */}
      <section aria-labelledby="coleccion-completa-heading" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 pb-4 border-b border-[#174532]/15 flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="coleccion-completa-heading" className="text-h2-lg font-bold font-serif text-[#174532]">
              La colección completa
            </h2>
            <span className="text-sm text-[#1b1b1b]/70 font-medium tabular-nums">
              {visibleBookCount === 1 ? '1 obra visible' : `${visibleBookCount} obras visibles`}
            </span>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="bg-[#dae7df]/15 border border-[#174532]/15 rounded-md p-8 md:p-12 text-center max-w-2xl mx-auto">
              <p className="text-body text-[#174532] font-medium mb-6 leading-relaxed">
                No hemos encontrado libros que coincidan con tu búsqueda. Prueba con otro término o restablece los filtros
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#174532] text-white text-sm font-semibold rounded-sm hover:bg-[#1f513a] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="space-y-16 md:space-y-20">
              {filteredCategories.map(({ category, books }) => {
                const categoryIndex = FEATURED_BOOKS.findIndex((c) => c.slug === category.slug);
                const meta = getRouteMeta(category, categoryIndex >= 0 ? categoryIndex : 0);
                const categoryUrl = category.path || `/${category.slug}/`;
                const isOriginSpotlight = category.slug === 'origen';

                return (
                  <div key={category.slug} id={`ruta-${category.slug}`} className="scroll-mt-24">
                    {/* Cabecera de ruta dentro del catálogo */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#174532]/15">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#1f513a] block mb-1 tabular-nums">
                          Ruta {meta.number} · {meta.label}
                        </span>
                        <h3 className="text-h2 font-bold font-serif text-[#174532]">
                          {meta.descriptor}
                        </h3>
                        <p className="text-body-sm text-[#1b1b1b]/75 mt-1 max-w-2xl leading-relaxed">
                          {category.intro}
                        </p>
                      </div>

                      <Link
                        href={categoryUrl}
                        className="inline-flex items-center self-start sm:self-end text-xs uppercase tracking-wider font-semibold text-[#174532] hover:text-[#1f513a] underline underline-offset-4 decoration-[#174532]/35 hover:decoration-[#174532] transition-colors flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                      >
                        Explorar categoría ({category.books.length}) →
                      </Link>
                    </div>

                    {isOriginSpotlight ? (
                      <div className="space-y-6">
                        {books.map((book) => {
                          const bookUrl = book.path || `/${book.slug}/`;
                          const dims = getBookCoverDimensions(book.slug);
                          const hasPurchaseOptions = Boolean(book.purchaseOptions && book.purchaseOptions.length > 0);
                          renderedCardIndex += 1;

                          return (
                            <article
                              key={book.id || book.slug}
                              className="bg-[#dae7df]/15 border border-[#174532]/20 rounded-md p-6 sm:p-8 md:p-10 grid md:grid-cols-12 gap-8 items-center"
                            >
                              <div className="md:col-span-4 flex justify-center">
                                <Link
                                  href={bookUrl}
                                  className="block bg-white p-3 border border-[#174532]/15 rounded-[2px] shadow-md hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                                >
                                  <img
                                    src={book.coverUrl}
                                    alt={`Portada de ${book.title}`}
                                    width={dims.width}
                                    height={dims.height}
                                    className="w-44 sm:w-48 h-auto aspect-[400/443] object-contain block"
                                    loading="eager"
                                    decoding="async"
                                    referrerPolicy="no-referrer"
                                  />
                                </Link>
                              </div>

                              <div className="md:col-span-8">
                                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] block mb-2">
                                  Obra fundacional · Punto de partida de la colección
                                </span>
                                <h4 className="text-h2 font-bold font-serif text-[#174532] leading-snug mb-2">
                                  <Link
                                    href={bookUrl}
                                    className="hover:text-[#1f513a] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                                  >
                                    {book.title}
                                  </Link>
                                </h4>
                                {book.subtitle && (
                                  <p className="text-sm font-medium text-[#1f513a] mb-3 leading-snug">
                                    {book.subtitle}
                                  </p>
                                )}
                                <p className="text-body text-[#1b1b1b]/80 leading-relaxed mb-6 max-w-[62ch]">
                                  {book.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                  <Link
                                    href={bookUrl}
                                    className="inline-flex items-center justify-center py-2.5 px-5 bg-[#174532] text-white text-[13px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                                  >
                                    Ver ficha del libro →
                                  </Link>

                                  {hasPurchaseOptions && (
                                    <button
                                      type="button"
                                      onClick={() => openPurchaseModal(book)}
                                      className="inline-flex items-center justify-center py-2.5 px-5 bg-white border border-[#174532]/30 text-[#174532] text-[13px] font-semibold rounded-sm hover:bg-[#dae7df]/45 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                                    >
                                      Opciones de compra
                                    </button>
                                  )}

                                  {book.isAvailable === false && (
                                    <span className="text-[11px] text-[#174532] font-semibold bg-[#f4b925]/25 py-1 px-3 rounded-sm">
                                      Próximamente disponible
                                    </span>
                                  )}
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {books.map((book) => {
                          const bookUrl = book.path || `/${book.slug}/`;
                          const dims = getBookCoverDimensions(book.slug);
                          const hasPurchaseOptions = Boolean(book.purchaseOptions && book.purchaseOptions.length > 0);
                          const hasAudiobook = Boolean(book.audiobookOptions && book.audiobookOptions.length > 0);
                          renderedCardIndex += 1;
                          const isPriorityImage = renderedCardIndex <= 4;

                          return (
                            <article
                              key={book.id || book.slug}
                              className="bg-white border border-[#174532]/12 hover:border-[#174532]/35 rounded-md p-6 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col h-full"
                            >
                              <Link
                                href={bookUrl}
                                className="mb-5 mx-auto w-36 sm:w-40 aspect-[400/490] bg-[#f8faf9] border border-[#174532]/10 rounded-[2px] p-2 flex items-center justify-center overflow-hidden shadow-xs group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                              >
                                <img
                                  src={book.coverUrl}
                                  alt={`Portada de ${book.title}`}
                                  width={dims.width}
                                  height={dims.height}
                                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                                  loading={isPriorityImage ? 'eager' : 'lazy'}
                                  decoding="async"
                                  referrerPolicy="no-referrer"
                                />
                              </Link>

                              <div className="flex-grow flex flex-col">
                                {hasAudiobook && (
                                  <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#1f513a] mb-1.5">
                                    Disponible en eBook y audiolibro
                                  </span>
                                )}

                                <h4 className="text-[18px] font-bold font-serif text-[#174532] leading-snug mb-2.5 break-words">
                                  <Link
                                    href={bookUrl}
                                    className="hover:text-[#1f513a] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                                  >
                                    {book.title}
                                  </Link>
                                </h4>

                                <p className="text-body-sm text-[#1b1b1b]/75 font-normal leading-relaxed mb-6 flex-grow">
                                  {book.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-[#174532]/10 flex flex-col gap-2">
                                  <Link
                                    href={bookUrl}
                                    className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-[#174532] text-white text-[13px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                                  >
                                    Ver ficha del libro →
                                  </Link>

                                  {hasPurchaseOptions && (
                                    <button
                                      type="button"
                                      onClick={() => openPurchaseModal(book)}
                                      className="w-full inline-flex items-center justify-center py-2 px-4 bg-[#dae7df]/35 border border-[#174532]/20 text-[#174532] text-[12.5px] font-semibold rounded-sm hover:bg-[#dae7df]/70 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                                    >
                                      Opciones de compra
                                    </button>
                                  )}

                                  {book.isAvailable === false && (
                                    <span className="text-[11px] text-[#174532] font-semibold bg-[#f4b925]/25 py-1 px-3 rounded-sm text-center">
                                      Próximamente disponible
                                    </span>
                                  )}
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
      />
    </div>
  );
};

export default LibraryView;
