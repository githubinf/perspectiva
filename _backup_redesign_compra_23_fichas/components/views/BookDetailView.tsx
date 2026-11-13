import React, { useState } from 'react';
import { BookItem, BookCategory } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { ShoppingCart, Headphones, ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

interface BookDetailViewProps {
  book: BookItem;
}

const BookDetailView: React.FC<BookDetailViewProps> = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find parent category
  const parentCategory = FEATURED_BOOKS.find(
    (c) => c.slug === book.categorySlug || c.books.some((b) => b.slug === book.slug)
  );

  // Sibling books in the same category
  const siblingBooks = parentCategory
    ? parentCategory.books.filter((b) => b.slug !== book.slug)
    : [];

  // Primary purchase option: Tapa blanda if available, or first Amazon option, or main book.url
  const primaryOption = book.purchaseOptions?.find((opt) => opt.cta?.toLowerCase().includes('tapa blanda')) ||
    book.purchaseOptions?.find((opt) => opt.platform.toLowerCase() === 'amazon') ||
    (book.purchaseOptions && book.purchaseOptions.length > 0 ? book.purchaseOptions[0] : null);

  const primaryUrl = primaryOption ? primaryOption.url : book.url;

  // Secondary options: all purchase options except the primary one
  const secondaryOptions = book.purchaseOptions
    ? book.purchaseOptions.filter((opt) => opt !== primaryOption && opt.url !== primaryUrl)
    : [];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Main Book Detail Grid */}
        <div className="mt-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column Left: Cover & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#dae7df]/20 border border-[#dae7df]/60 rounded-2xl p-8 flex flex-col items-center shadow-lg">
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-56 md:w-64 h-auto rounded-md shadow-2xl border border-[#dae7df]/80 object-cover mb-8"
                loading="eager"
                width={400}
                height={580}
              />

              {/* Purchase CTA Box */}
              <div className="w-full space-y-3">
                {book.isAvailable !== false && book.url && book.url !== '#' ? (
                  <>
                    <a
                      href={primaryUrl}
                      target="_blank"
                      rel={primaryOption?.rel || "nofollow noopener noreferrer"}
                      className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 bg-[#174532] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-md hover:bg-[#1f513a] transition-all shadow-xl shadow-[#174532]/20 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {primaryOption?.cta || 'Comprar en Amazon'}
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    {secondaryOptions.length > 0 && (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#174532]/30 text-[#174532] font-semibold text-xs uppercase tracking-wider rounded-md hover:bg-[#dae7df]/30 transition-colors cursor-pointer"
                      >
                        Ver otras plataformas y ediciones ({secondaryOptions.length})
                      </button>
                    )}
                  </>
                ) : (
                  <div className="w-full py-4 px-6 bg-[#f4b925]/15 border border-[#f4b925]/40 text-[#174532] text-center rounded-md font-bold text-xs uppercase tracking-wider">
                    ⏳ Edición en preparación • Próximamente disponible
                  </div>
                )}
              </div>
            </div>

            {/* Category Back Link */}
            {parentCategory && (
              <Link
                href={parentCategory.path || `/${parentCategory.slug}/`}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#4db380] hover:text-[#174532] transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Volver a Ruta {parentCategory.category}
              </Link>
            )}
          </div>

          {/* Column Right: Editorial Information */}
          <div className="lg:col-span-7">
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

            <h1 className="text-3xl md:text-5xl font-bold text-[#174532] leading-tight mb-4">
              {book.title}
            </h1>

            {book.subtitle && (
              <p className="text-lg md:text-xl text-[#174532]/80 font-medium mb-6 serif italic">
                {book.subtitle}
              </p>
            )}

            <div className="p-6 bg-[#dae7df]/15 border-l-4 border-[#174532] rounded-r-lg mb-8">
              <p className="text-base md:text-lg text-[#1b1b1b]/80 font-light leading-relaxed">
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
                <div className="flex flex-wrap gap-2">
                  {book.audiobookOptions.map((opt, i) => (
                    <a
                      key={i}
                      href={opt.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#dae7df]/30 border border-[#dae7df]/70 hover:bg-[#4db380] hover:text-white text-[#174532] transition-all text-xs font-medium inline-flex items-center gap-1.5"
                    >
                      <span>{opt.platform}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Structured Editorial Sections (Etapa 4) */}
            {book.editorialSections && book.editorialSections.length > 0 ? (
              <div className="space-y-12 text-[#1b1b1b]/80 leading-relaxed font-light border-t border-[#dae7df]/60 pt-8">
                {book.editorialSections.map((sec, sIdx) => (
                  <section key={sIdx} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                      {sec.title}
                    </h2>
                    {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base md:text-[17px] text-[#1b1b1b]/80 text-justify leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <div className="space-y-3 pt-2">
                        {sec.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-3 pl-1">
                            <CheckCircle2 className="w-5 h-5 text-[#4db380] flex-shrink-0 mt-0.5" />
                            <div className="text-sm md:text-base leading-relaxed">
                              {b.title && (
                                <strong className="font-semibold text-[#174532]">
                                  {b.title}:{' '}
                                </strong>
                              )}
                              <span className="text-[#1b1b1b]/80">{b.description}</span>
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
                <div className="space-y-6 text-[#1b1b1b]/80 leading-relaxed font-light text-base md:text-[17px] border-t border-[#dae7df]/60 pt-8">
                  {book.extraInfo.map((paragraph, idx) => {
                    if (paragraph === 'Aprenderás a:') {
                      return (
                        <h3 key={idx} className="text-lg font-bold text-[#174532] not-italic pt-4">
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
                          <CheckCircle2 className="w-5 h-5 text-[#4db380] flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-semibold text-[#174532]">{titlePart}:</strong>
                            <span>{descPart}</span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-justify">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              )
            )}
          </div>
        </div>

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

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={book}
      />
    </div>
  );
};

export default BookDetailView;
