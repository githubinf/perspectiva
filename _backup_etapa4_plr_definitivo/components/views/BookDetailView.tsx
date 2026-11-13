import React from 'react';
import { BookItem, BookCategory } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import { Headphones, ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

interface BookDetailViewProps {
  book: BookItem;
}

const BookDetailView: React.FC<BookDetailViewProps> = ({ book }) => {
  // Find parent category
  const parentCategory = FEATURED_BOOKS.find(
    (c) => c.slug === book.categorySlug || c.books.some((b) => b.slug === book.slug)
  );

  // Sibling books in the same category
  const siblingBooks = parentCategory
    ? parentCategory.books.filter((b) => b.slug !== book.slug)
    : [];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Biblioteca', href: '/biblioteca/' },
            ...(parentCategory
              ? [{ label: parentCategory.category, href: parentCategory.path || `/${parentCategory.slug}/` }]
              : []),
            { label: book.title, href: book.path }
          ]}
        />

        {/* ======================================================== */}
        {/* BLOQUE 1 — ZONA SUPERIOR: Portada (Izq) + Logotipos (Der) */}
        {/* ======================================================== */}
        <section aria-label="Opciones de compra" className="mt-8">
          <BookPurchaseBlock book={book} />
        </section>

        {/* ======================================================== */}
        {/* BLOQUE 2 — CONTENIDO EDITORIAL (100% ANCHO COMPLETO)     */}
        {/* ======================================================== */}
        <article className="mt-12 w-full">
          {parentCategory && (
            <div className="mb-4">
              <Link
                href={parentCategory.path || `/${parentCategory.slug}/`}
                className="inline-block text-[10px] uppercase tracking-[0.3em] font-black text-[#4db380] bg-[#dae7df]/30 border border-[#dae7df] px-3.5 py-1.5 rounded-full hover:bg-[#4db380] hover:text-white transition-all"
              >
                Ruta {parentCategory.category}
              </Link>
            </div>
          )}

          {/* 1. Título del libro (H1) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#174532] leading-tight mb-4">
            {book.title}
          </h1>

          {/* 2. Subtítulo */}
          {book.subtitle && (
            <p className="text-lg md:text-2xl text-[#174532]/80 font-medium mb-6 serif italic">
              {book.subtitle}
            </p>
          )}

          {/* 3. Introducción o descripción editorial */}
          <div className="p-6 md:p-8 bg-[#dae7df]/15 border-l-4 border-[#174532] rounded-r-xl mb-10">
            <p className="text-base md:text-lg text-[#1b1b1b]/85 font-light leading-relaxed">
              {book.description}
            </p>
          </div>

          {/* Audiobook section when available */}
          {book.audiobookOptions && book.audiobookOptions.length > 0 && (
            <div className="mb-10 p-6 bg-white border border-[#dae7df] rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#174532] mb-3">
                <Headphones className="w-4 h-4 text-[#4db380]" />
                <span>Audiolibro disponible en plataformas</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {book.audiobookOptions.map((opt, i) => (
                  <a
                    key={i}
                    href={opt.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#dae7df]/30 border border-[#dae7df]/70 hover:bg-[#4db380] hover:text-white text-[#174532] transition-all text-xs font-medium inline-flex items-center gap-1.5"
                  >
                    <span>{opt.platform}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 4. Secciones de contenido editorial estructuradas (H2 y H3, capítulos, etc.) */}
          {book.editorialSections && book.editorialSections.length > 0 ? (
            <div className="space-y-12 text-[#1b1b1b]/80 leading-relaxed font-light border-t border-[#dae7df]/60 pt-10">
              {book.editorialSections.map((sec, sIdx) => (
                <section key={sIdx} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                    {sec.title}
                  </h2>
                  {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base md:text-lg text-[#1b1b1b]/85 text-justify leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <div className="space-y-3 pt-3">
                      {sec.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 pl-1">
                          <CheckCircle2 className="w-5 h-5 text-[#4db380] flex-shrink-0 mt-1" />
                          <div className="text-base md:text-lg leading-relaxed">
                            {b.title && (
                              <strong className="font-semibold text-[#174532]">
                                {b.title}:{' '}
                              </strong>
                            )}
                            <span className="text-[#1b1b1b]/85">{b.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            /* Fallback for pre-existing extraInfo */
            book.extraInfo && book.extraInfo.length > 0 && (
              <div className="space-y-6 text-[#1b1b1b]/85 leading-relaxed font-light text-base md:text-lg border-t border-[#dae7df]/60 pt-10">
                {book.extraInfo.map((paragraph, idx) => {
                  if (paragraph === 'Aprenderás a:') {
                    return (
                      <h3 key={idx} className="text-xl md:text-2xl font-bold text-[#174532] not-italic pt-4">
                        {paragraph}
                      </h3>
                    );
                  }
                  if (idx > 1 && idx < book.extraInfo!.length - 1 && paragraph.includes(':')) {
                    const colonIdx = paragraph.indexOf(':');
                    const titlePart = paragraph.substring(0, colonIdx);
                    const descPart = paragraph.substring(colonIdx + 1);
                    return (
                      <div key={idx} className="flex items-start gap-3 pl-2">
                        <CheckCircle2 className="w-5 h-5 text-[#4db380] flex-shrink-0 mt-1" />
                        <div className="text-base md:text-lg">
                          <strong className="font-semibold text-[#174532]">{titlePart}:</strong>
                          <span>{descPart}</span>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-justify leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            )
          )}

          {/* Category Back Link */}
          {parentCategory && (
            <div className="mt-12 pt-8 border-t border-[#dae7df]/60">
              <Link
                href={parentCategory.path || `/${parentCategory.slug}/`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#4db380] hover:text-[#174532] transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a Ruta {parentCategory.category}
              </Link>
            </div>
          )}
        </article>

        {/* Sibling Books in the same category */}
        {siblingBooks.length > 0 && parentCategory && (
          <div className="mt-24 pt-16 border-t border-[#dae7df]/60">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-black text-[#4db380] block mb-1">
                  Continuar explorando
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#174532]">
                  Más libros de la Ruta {parentCategory.category}
                </h3>
              </div>
              <Link
                href={parentCategory.path || `/${parentCategory.slug}/`}
                className="text-xs uppercase tracking-wider font-bold text-[#174532] hover:text-[#4db380] transition-colors"
              >
                Ver colección completa →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {siblingBooks.slice(0, 4).map((sib) => (
                <Link
                  key={sib.slug}
                  href={sib.path || `/${sib.slug}/`}
                  className="bg-white border border-[#dae7df]/50 rounded-xl p-5 hover:border-[#4db380]/60 hover:shadow-md transition-all group flex flex-col items-center text-center"
                >
                  <img
                    src={sib.coverUrl}
                    alt={sib.title}
                    className="w-28 h-auto object-cover rounded-sm shadow-md mb-4 group-hover:scale-105 transition-transform"
                    loading="lazy"
                    width={200}
                    height={290}
                  />
                  <h4 className="text-sm font-bold text-[#174532] group-hover:text-[#4db380] transition-colors line-clamp-2 leading-snug">
                    {sib.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailView;
