import React, { useState } from 'react';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { BookItem, BookCategory } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { Filter, ArrowRight } from 'lucide-react';

const LibraryView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedCategories = activeFilter === 'all'
    ? FEATURED_BOOKS
    : FEATURED_BOOKS.filter((c) => c.slug === activeFilter);

  const openPurchaseModal = (e: React.MouseEvent, book: BookItem) => {
    e.stopPropagation();
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Biblioteca', href: '/biblioteca/' }]} />

        {/* Hero Section */}
        <div className="mt-6 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#174532] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df]">
              Catálogo General
            </span>
          </div>
          <h1 className="text-h1 font-bold font-serif text-[#174532] mb-4 leading-tight">
            Biblioteca <span className="italic font-serif text-[#4db380]">FG Perspectiva</span>
          </h1>
          <p className="text-subtitle text-[#1b1b1b]/70 font-normal leading-relaxed">
            23 obras organizadas en 6 rutas estratégicas para transformar conocimiento y tácticas sueltas en sistemas de activos digitales rentables.
          </p>
        </div>

        {/* The 6 Routes Cards Preview */}
        <div className="mb-20">
          <h2 id="indice-categorias" className="text-[18px] md:text-[20px] font-bold font-serif text-[#174532] mb-6 border-b border-[#dae7df]/60 pb-3 flex flex-wrap items-center justify-between gap-2">
            <span>Las 6 Rutas Editoriales</span>
            <span className="text-[#4db380] font-sans text-xs font-normal lowercase tracking-normal">haz clic en cualquier ruta para explorar su colección</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_BOOKS.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.path || `/${cat.slug}/`}
                className="bg-[#dae7df]/15 hover:bg-[#dae7df]/30 border border-[#dae7df]/60 hover:border-[#4db380]/60 rounded-xl p-6 transition-all duration-300 flex items-center gap-5 group shadow-sm hover:shadow-md cursor-pointer"
              >
                <img
                  src={cat.coverUrl}
                  alt={cat.title}
                  className="w-20 h-20 object-cover rounded-md shadow-md border border-[#dae7df]/80 flex-shrink-0 group-hover:scale-105 transition-transform"
                  loading="lazy"
                  width={80}
                  height={80}
                />
                <div className="min-w-0 flex-grow">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4db380] block mb-1">
                    Ruta {cat.category}
                  </span>
                  <h3 className="text-[15px] md:text-[16px] font-bold font-serif text-[#174532] group-hover:text-[#4db380] transition-colors leading-snug break-words">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-[#1b1b1b]/50 block mt-1 font-sans">
                    {cat.books.length} {cat.books.length === 1 ? 'título' : 'títulos'} • Explorar →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#174532] uppercase tracking-wider mr-2">
              <Filter className="w-3.5 h-3.5 text-[#4db380]" />
              Filtrar por ruta:
            </span>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#174532] text-white shadow-md'
                  : 'bg-[#dae7df]/30 text-[#174532] hover:bg-[#dae7df]/70'
              }`}
            >
              Todas (23)
            </button>
            {FEATURED_BOOKS.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveFilter(c.slug || 'all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === c.slug
                    ? 'bg-[#174532] text-white shadow-md'
                    : 'bg-[#dae7df]/30 text-[#174532] hover:bg-[#dae7df]/70'
                }`}
              >
                {c.category} ({c.books.length})
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Books Sections */}
        <div className="space-y-20">
          {displayedCategories.map((category) => (
            <div key={category.slug} className="scroll-mt-24">
              <div className="flex items-center justify-between mb-8 border-b border-[#dae7df] pb-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-3xl">📚</span>
                  <div>
                    <h2 className="text-h2 font-bold font-serif text-[#174532]">
                      {category.title}
                    </h2>
                    <p className="text-body-sm text-[#1b1b1b]/70 mt-0.5">
                      {category.intro}
                    </p>
                  </div>
                </div>
                <Link
                  href={category.path || `/${category.slug}/`}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#4db380] hover:text-[#174532] transition-colors"
                >
                  Ver categoría →
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.books.map((book) => {
                  const bookUrl = book.path || `/${book.slug}/`;
                  return (
                    <div
                      key={book.id || book.slug}
                      className="bg-white border border-[#dae7df]/40 hover:border-[#4db380]/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group h-full"
                    >
                      <Link href={bookUrl} className="block mb-6 relative overflow-hidden rounded-sm cursor-pointer">
                        <img
                          src={book.coverUrl}
                          alt={book.title}
                          className="w-36 md:w-44 h-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          width={400}
                          height={580}
                        />
                      </Link>

                      <div className="flex-grow flex flex-col items-center w-full">
                        <Link
                          href={bookUrl}
                          className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532] hover:text-[#4db380] transition-colors leading-snug mb-3 break-words"
                        >
                          {book.title}
                        </Link>
                        <p className="text-body-sm text-[#1b1b1b]/70 font-normal italic mb-6 leading-relaxed">
                          {book.description}
                        </p>

                        <div className="mt-auto w-full flex flex-col gap-2">
                          <Link
                            href={bookUrl}
                            className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-[#174532] text-white text-[13px] font-semibold rounded-md hover:bg-[#1f513a] transition-colors shadow-sm"
                          >
                            Ver ficha del libro →
                          </Link>

                          {book.purchaseOptions && book.purchaseOptions.length > 0 && (
                            <button
                              onClick={(e) => openPurchaseModal(e, book)}
                              className="w-full inline-flex items-center justify-center py-2 px-4 bg-[#dae7df]/30 text-[#174532] text-[12.5px] font-medium rounded-md hover:bg-[#dae7df]/60 transition-colors cursor-pointer"
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
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
      />
    </div>
  );
};

export default LibraryView;
