import React, { useState } from 'react';
import Hero from '../Hero.tsx';
import Manifesto from '../Manifesto.tsx';
import Features from '../Features.tsx';
import Systems from '../Systems.tsx';
import About from '../About.tsx';
import Authority from '../Authority.tsx';
import FooterCTA from '../FooterCTA.tsx';
import { FEATURED_BOOKS } from '../../constants.tsx';
import { BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { ArrowRight, BookOpen } from 'lucide-react';

const HomeView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPurchaseModal = (e: React.MouseEvent, book: BookItem) => {
    e.stopPropagation();
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Select 6 representative featured books (1 from each category) for the home preview
  const homeFeaturedBooks = FEATURED_BOOKS.map((cat) => cat.books[0]).filter(Boolean);

  return (
    <>
      <Hero />
      <Manifesto />
      <Features />

      {/* Featured Editorial Library Section */}
      <section className="py-20 md:py-28 bg-white border-y border-[#dae7df]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#4db380] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df] inline-block mb-4">
              Colección Editorial
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#174532] mb-6 leading-tight">
              Biblioteca <span className="italic serif text-[#4db380]">FG Perspectiva</span>
            </h2>
            <p className="text-base md:text-lg text-[#1b1b1b]/70 font-light leading-relaxed">
              Descubre nuestras 6 rutas temáticas y 23 obras prácticas diseñadas para construir activos digitales duraderos.
            </p>
          </div>

          {/* 6 Category Routes Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FEATURED_BOOKS.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.path || `/${cat.slug}/`}
                className="bg-[#dae7df]/15 hover:bg-[#dae7df]/35 border border-[#dae7df]/60 hover:border-[#4db380]/60 rounded-xl p-5 transition-all flex items-center gap-4 group cursor-pointer shadow-sm hover:shadow-md"
              >
                <img
                  src={cat.coverUrl}
                  alt={cat.title}
                  className="w-16 h-16 object-cover rounded-md shadow-sm border border-[#dae7df]/70 flex-shrink-0 group-hover:scale-105 transition-transform"
                  loading="lazy"
                  width={64}
                  height={64}
                />
                <div className="min-w-0">
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#4db380] block">
                    Ruta {cat.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#174532] group-hover:text-[#4db380] transition-colors line-clamp-1">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] text-[#1b1b1b]/50 block mt-0.5">
                    {cat.books.length} {cat.books.length === 1 ? 'libro' : 'libros'} • Ver ruta →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Books Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8 border-b border-[#dae7df] pb-3">
              <h3 className="text-xl font-bold text-[#174532]">
                Títulos destacados de la colección
              </h3>
              <Link
                href="/biblioteca/"
                className="text-xs uppercase tracking-wider font-bold text-[#4db380] hover:text-[#174532] transition-colors"
              >
                Ver todos los 23 libros →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeFeaturedBooks.map((book) => {
                const bookUrl = book.path || `/${book.slug}/`;
                return (
                  <div
                    key={book.id || book.slug}
                    className="bg-white border border-[#dae7df]/40 hover:border-[#4db380]/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
                  >
                    <Link href={bookUrl} className="block mb-5 cursor-pointer">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-32 md:w-40 h-auto object-cover shadow-md group-hover:scale-105 transition-transform rounded-sm"
                        loading="lazy"
                        width={300}
                        height={435}
                      />
                    </Link>

                    <Link
                      href={bookUrl}
                      className="text-base md:text-lg font-bold text-[#174532] hover:text-[#4db380] transition-colors line-clamp-2 leading-snug mb-2 cursor-pointer"
                    >
                      {book.title}
                    </Link>

                    <p className="text-xs md:text-sm text-[#1b1b1b]/60 font-light italic mb-6 line-clamp-2">
                      {book.description}
                    </p>

                    <div className="mt-auto w-full flex flex-col gap-2">
                      <Link
                        href={bookUrl}
                        className="w-full inline-flex items-center justify-center py-2 px-4 bg-[#174532] text-white text-[11px] uppercase tracking-wider font-bold rounded-sm hover:bg-[#1f513a] transition-colors"
                      >
                        Ver ficha del libro →
                      </Link>

                      {book.purchaseOptions && book.purchaseOptions.length > 0 && (
                        <button
                          onClick={(e) => openPurchaseModal(e, book)}
                          className="w-full inline-flex items-center justify-center py-1.5 px-3 bg-[#dae7df]/25 text-[#174532] text-[10px] uppercase tracking-wider font-semibold rounded-sm hover:bg-[#dae7df]/50 transition-colors cursor-pointer"
                        >
                          Opciones de compra
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Large CTA to full library */}
          <div className="text-center pt-8">
            <Link
              href="/biblioteca/"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#174532] text-white font-bold text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-[#1f513a] transition-all shadow-xl shadow-[#174532]/10 hover:-translate-y-1"
            >
              <BookOpen className="w-4 h-4" />
              Explorar el catálogo completo (23 libros)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Systems Section with direct link to full page */}
      <Systems />

      <About />
      <Authority />
      <FooterCTA />

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
      />
    </>
  );
};

export default HomeView;
