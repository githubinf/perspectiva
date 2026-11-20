import React, { useMemo, useRef, useState } from 'react';
import { FEATURED_BOOKS } from '../constants.tsx';
import { BookItem } from '../types.ts';
import { Link } from '../router.tsx';
import { ArrowRight, BookOpen, Search, X } from 'lucide-react';

interface HomeBookSearchProps {
  onOpenPurchaseModal: (e: React.MouseEvent, book: BookItem) => void;
  headingText?: string;
  headingAs?: 'p' | 'h2';
  subtitleText?: string | null;
  idPrefix?: string;
  containerClassName?: string;
}

interface IndexedCatalogBook {
  book: BookItem;
  categoryName: string;
  normalizedTitle: string;
  normalizedSubtitle: string;
  normalizedDescription: string;
  normalizedCategory: string;
  normalizedConcepts: string;
  fullNormalizedText: string;
}

interface SearchMatch {
  book: BookItem;
  categoryName: string;
  score: number;
}

const STOPWORDS = new Set([
  'a',
  'al',
  'como',
  'con',
  'de',
  'del',
  'el',
  'en',
  'la',
  'las',
  'los',
  'o',
  'para',
  'por',
  'que',
  'sobre',
  'su',
  'tu',
  'un',
  'una',
  'unas',
  'unos',
  'y',
]);

const CONCEPT_EQUIVALENTS: Record<string, string[]> = {
  internet: ['internet', 'online', 'digital', 'web'],
  online: ['online', 'internet', 'digital'],
  dinero: ['dinero', 'ingresos', 'monetizacion', 'rentable', 'ganar'],
  ebook: ['ebook', 'ebooks', 'infoproducto', 'infoproductos'],
  ebooks: ['ebooks', 'ebook', 'infoproducto', 'infoproductos'],
  negocio: ['negocio', 'negocios', 'proyecto', 'proyectos', 'emprendimiento'],
  negocios: ['negocios', 'negocio', 'proyectos', 'emprendimiento'],
  afiliado: ['afiliado', 'afiliados', 'afiliacion'],
  afiliados: ['afiliados', 'afiliado', 'afiliacion'],
  contenido: ['contenido', 'contenidos'],
  contenidos: ['contenidos', 'contenido'],
  blog: ['blog', 'blogs', 'blogging'],
  blogs: ['blogs', 'blog', 'blogging'],
};

const normalizeText = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const expandToken = (token: string): string[] => {
  if (CONCEPT_EQUIVALENTS[token]) {
    return CONCEPT_EQUIVALENTS[token];
  }
  if (token.length > 4 && token.endsWith('s')) {
    return [token, token.slice(0, -1)];
  }
  return [token];
};

const extractEditorialText = (book: BookItem): string => {
  const parts: string[] = [];

  if (book.extraInfo && book.extraInfo.length > 0) {
    parts.push(...book.extraInfo);
  }

  if (book.editorialSections && book.editorialSections.length > 0) {
    for (const section of book.editorialSections) {
      parts.push(section.title);
      if (section.paragraphs) parts.push(...section.paragraphs);
      if (section.bullets) {
        for (const bullet of section.bullets) {
          if (bullet.title) parts.push(bullet.title);
          parts.push(bullet.description);
        }
      }
      if (section.subsections) {
        for (const sub of section.subsections) {
          parts.push(sub.title);
          if (sub.paragraphs) parts.push(...sub.paragraphs);
          if (sub.bullets) {
            for (const bullet of sub.bullets) {
              if (bullet.title) parts.push(bullet.title);
              parts.push(bullet.description);
            }
          }
          if (sub.footerParagraphs) parts.push(...sub.footerParagraphs);
        }
      }
    }
  }

  return parts.join(' ');
};

const CATALOG_SEARCH_INDEX: IndexedCatalogBook[] = FEATURED_BOOKS.flatMap((category) =>
  category.books.map((book) => {
    const normalizedTitle = normalizeText(book.title);
    const normalizedSubtitle = normalizeText(book.subtitle || '');
    const normalizedDescription = normalizeText(book.description || '');
    const normalizedCategory = normalizeText(
      `${category.category} ${category.title} ${category.intro}`
    );
    const normalizedConcepts = normalizeText(
      [extractEditorialText(book), book.metaTitle || '', book.metaDescription || ''].join(' ')
    );

    return {
      book,
      categoryName: category.category,
      normalizedTitle,
      normalizedSubtitle,
      normalizedDescription,
      normalizedCategory,
      normalizedConcepts,
      fullNormalizedText: [
        normalizedTitle,
        normalizedSubtitle,
        normalizedDescription,
        normalizedCategory,
        normalizedConcepts,
      ]
        .filter(Boolean)
        .join(' '),
    };
  })
);

const getUsefulCharCount = (normalizedValue: string): number =>
  normalizedValue.replace(/\s+/g, '').length;

function searchCatalogBooks(rawQuery: string): SearchMatch[] {
  const normalizedQuery = normalizeText(rawQuery);
  if (getUsefulCharCount(normalizedQuery) < 2) return [];

  const rawTokens = normalizedQuery.split(' ').filter(Boolean);
  const meaningfulTokens = rawTokens.filter((token) => !STOPWORDS.has(token));
  const tokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  const matches: SearchMatch[] = [];

  for (const item of CATALOG_SEARCH_INDEX) {
    const allTokensPresent = tokens.every((token) => {
      const variants = expandToken(token);
      return variants.some((variant) =>
        new RegExp(`(^| )${escapeRegExp(variant)}`).test(item.fullNormalizedText)
      );
    });

    if (!allTokensPresent) continue;

    let score = 0;
    if (item.normalizedTitle.includes(normalizedQuery)) score += 160;
    if (item.normalizedSubtitle.includes(normalizedQuery)) score += 70;
    if (item.normalizedDescription.includes(normalizedQuery)) score += 50;

    for (const token of tokens) {
      const variants = expandToken(token);
      const exactMatchOnly = variants[0];

      if (variants.some((v) => item.normalizedTitle.includes(v))) {
        score += item.normalizedTitle.includes(exactMatchOnly) ? 60 : 25;
      }
      if (variants.some((v) => item.normalizedSubtitle.includes(v))) {
        score += item.normalizedSubtitle.includes(exactMatchOnly) ? 30 : 12;
      }
      if (variants.some((v) => item.normalizedDescription.includes(v))) {
        score += item.normalizedDescription.includes(exactMatchOnly) ? 22 : 10;
      }
      if (variants.some((v) => item.normalizedCategory.includes(v))) {
        score += item.normalizedCategory.includes(exactMatchOnly) ? 18 : 8;
      }
      if (variants.some((v) => item.normalizedConcepts.includes(v))) {
        score += item.normalizedConcepts.includes(exactMatchOnly) ? 8 : 3;
      }
    }

    matches.push({
      book: item.book,
      categoryName: item.categoryName,
      score,
    });
  }

  return matches.sort((a, b) => b.score - a.score);
}

const MIN_USEFUL_SEARCH_CHARS = 2;

const HomeBookSearch: React.FC<HomeBookSearchProps> = ({
  onOpenPurchaseModal,
  headingText = '¿Buscas conocimientos sobre un tema específico?',
  headingAs = 'p',
  subtitleText = 'Explora nuestra biblioteca y encuentra libros sobre marketing, inteligencia artificial, negocios digitales, tráfico web, creación de contenidos y otras disciplinas.',
  idPrefix = 'home',
  containerClassName = 'mb-8 md:mb-10',
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmedQuery = inputValue.trim();
  const normalizedQuery = useMemo(() => normalizeText(inputValue), [inputValue]);
  const hasSearched = getUsefulCharCount(normalizedQuery) >= MIN_USEFUL_SEARCH_CHARS;

  const results = useMemo(() => {
    if (!hasSearched) return [];
    return searchCatalogBooks(inputValue);
  }, [hasSearched, inputValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  const regionId = `${idPrefix}-buscador`;
  const headingId = `${idPrefix}-search-heading`;
  const inputId = `${idPrefix}-book-search-input`;
  const resultsId = `${idPrefix}-search-results`;
  const HeadingTag = headingAs;

  return (
    <div
      id={regionId}
      role="region"
      aria-labelledby={headingId}
      className={containerClassName}
    >
      <div className="bg-white/95 border border-[#174532]/15 rounded-xl p-4 sm:p-5 md:p-6 shadow-sm">
        <div className="max-w-3xl">
          <HeadingTag
            id={headingId}
            className={`${
              headingAs === 'h2'
                ? 'text-[19px] sm:text-[22px]'
                : 'text-[17px] sm:text-[19px]'
            } font-bold font-serif text-[#174532] leading-snug ${
              subtitleText ? 'mb-1.5' : 'mb-4'
            }`}
          >
            {headingText}
          </HeadingTag>

          {subtitleText && (
            <p className="text-[13.5px] sm:text-[14px] text-[#1b1b1b]/75 leading-relaxed mb-4">
              {subtitleText}
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          role="search"
          aria-label="Buscador de libros de FG Perspectiva"
          className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center"
        >
            <label htmlFor={inputId} className="sr-only">
              ¿Qué te gustaría aprender o descubrir?
            </label>

            <div className="relative flex-grow">
              <Search
                className="w-4 h-4 text-[#174532]/65 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                id={inputId}
                type="text"
                inputMode="search"
                enterKeyHint="search"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="¿Qué te gustaría aprender o descubrir?"
                className={`w-full min-h-[44px] pl-10 sm:pl-11 ${
                  inputValue.length > 0 ? 'pr-10' : 'pr-3.5 sm:pr-4'
                } py-2.5 bg-[#f9fbfa] border border-[#174532]/25 rounded-md text-[13.5px] sm:text-[14.5px] text-[#1b1b1b] placeholder:text-[#1b1b1b]/55 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#174532] focus:border-[#174532] transition-colors`}
              />
              {inputValue.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-[#174532]/75 hover:text-[#174532] hover:bg-[#dae7df]/45 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="min-h-[44px] px-5 py-2.5 bg-[#174532] hover:bg-[#1f513a] text-white font-semibold text-[14.5px] rounded-md transition-colors shadow-sm cursor-pointer inline-flex items-center justify-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              <span>Buscar libros</span>
            </button>
          </form>

          {hasSearched && (
            <div
              id={resultsId}
              aria-live="polite"
              className="mt-8 pt-7 border-t border-[#dae7df]/70"
            >
              {results.length === 0 ? (
                <div
                  role="status"
                  className="bg-[#dae7df]/15 border border-[#174532]/15 rounded-lg p-6 md:p-8 text-center"
                >
                  <p className="text-[17px] font-bold font-serif text-[#174532] mb-2">
                    No hemos encontrado libros relacionados con tu búsqueda.
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/75 max-w-xl mx-auto leading-relaxed mb-6">
                    Puedes probar con otros términos o explorar nuestra biblioteca para descubrir todos los temas disponibles.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/biblioteca/"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#174532] text-white text-[13.5px] font-semibold rounded-md hover:bg-[#1f513a] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                    >
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      <span>Explorar la Biblioteca</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <button
                      type="button"
                      onClick={handleClear}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-[#174532]/25 text-[#174532] text-[13.5px] font-semibold rounded-md hover:bg-[#dae7df]/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                    >
                      <span>Nueva búsqueda</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <p role="status" className="text-sm font-medium text-[#174532]">
                      {results.length === 1
                        ? `1 libro encontrado para «${trimmedQuery}»`
                        : `${results.length} libros encontrados para «${trimmedQuery}»`}
                    </p>
                    <button
                      type="button"
                      onClick={handleClear}
                      className="text-xs font-semibold text-[#174532] hover:text-[#1f513a] underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                    >
                      Limpiar búsqueda
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map(({ book, categoryName }) => {
                      const bookUrl = book.path || `/${book.slug}/`;
                      return (
                        <div
                          key={book.id || book.slug}
                          className="relative bg-white border border-[#dae7df]/60 hover:border-[#4db380]/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group h-full"
                        >
                          <div className="mb-4">
                            <img
                              src={book.coverUrl}
                              alt={`Portada de ${book.title}`}
                              className="w-32 md:w-36 h-auto object-cover shadow-md group-hover:scale-105 transition-transform rounded-sm"
                              loading="eager"
                              width={300}
                              height={435}
                            />
                          </div>

                          <span className="text-[10.5px] uppercase tracking-[0.12em] font-semibold text-[#1f513a] mb-1.5">
                            Ruta {categoryName}
                          </span>

                          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532] group-hover:text-[#4db380] transition-colors leading-snug mb-2 break-words">
                            {book.title}
                          </h3>

                          <p className="text-body-sm text-[#1b1b1b]/70 font-normal italic mb-6 leading-relaxed">
                            {book.description}
                          </p>

                          <div className="mt-auto w-full flex flex-col gap-2">
                            <Link
                              href={bookUrl}
                              aria-label={`Ver ficha del libro: ${book.title}`}
                              className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-[#174532] text-white text-[13px] font-semibold rounded-md hover:bg-[#1f513a] transition-colors shadow-sm after:content-[''] after:absolute after:inset-0 after:rounded-xl"
                            >
                              Ver ficha del libro →
                            </Link>

                            {book.purchaseOptions && book.purchaseOptions.length > 0 && (
                              <button
                                type="button"
                                onClick={(e) => onOpenPurchaseModal(e, book)}
                                className="relative z-10 w-full inline-flex items-center justify-center py-2 px-3 bg-[#dae7df]/30 text-[#174532] text-[12.5px] font-medium rounded-md hover:bg-[#dae7df]/60 transition-colors cursor-pointer"
                              >
                                Opciones de compra
                              </button>
                            )}

                            {book.isAvailable === false && (
                              <span className="text-[11px] text-[#174532]/70 font-semibold bg-[#f4b925]/20 py-1 px-3 rounded-sm">
                                Próximamente disponible
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default HomeBookSearch;
