import React, { useState, useEffect } from 'react';
import Hero from '../Hero.tsx';
import Manifesto from '../Manifesto.tsx';
import Features from '../Features.tsx';
import HomeSystems from '../HomeSystems.tsx';
import HomeAbout from '../HomeAbout.tsx';
import FooterCTA from '../FooterCTA.tsx';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { ArrowRight, BookOpen } from 'lucide-react';

/**
 * Fisher-Yates (Durstenfeld) shuffle algorithm to select 'count' random books
 * without replacement from the catalog.
 */
function selectRandomBooks(items: BookItem[], count: number = 6): BookItem[] {
  // Only select valid published books with required properties
  const eligibleBooks = items.filter(
    (b) => b && b.title && b.coverUrl && (b.slug || b.path)
  );
  if (eligibleBooks.length <= count) return [...eligibleBooks];

  const pool = [...eligibleBooks];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// Deterministic baseline for SSG prerendering / initial server HTML
const DEFAULT_FEATURED_BOOKS: BookItem[] = FEATURED_BOOKS.map((cat) => cat.books[0]).filter(Boolean);

const HomeView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPurchaseModal = (e: React.MouseEvent, book: BookItem) => {
    e.stopPropagation();
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  // Initialize with deterministic default matching SSG prerender HTML to guarantee 0 hydration mismatch
  const [featuredBooks, setFeaturedBooks] = useState<BookItem[]>(DEFAULT_FEATURED_BOOKS);

  useEffect(() => {
    // Select 6 random books without replacement on browser load/reload
    // Runs only once on mount, keeping the selection stable during this page view
    setFeaturedBooks(selectRandomBooks(ALL_BOOKS, 6));
  }, []);

  return (
    <>
      <Hero />
      <Manifesto />
      <Features />

      {/* Featured Editorial Library Section */}
      <section className="py-20 md:py-28 bg-white border-y border-[#dae7df]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#174532] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df] inline-block mb-4">
              Colección Editorial
            </span>
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-5 leading-tight">
              Biblioteca <span className="italic font-serif text-[#4db380]">FG Perspectiva</span>
            </h2>
            <p className="text-subtitle text-[#1b1b1b]/75 font-normal leading-relaxed mb-4">
              Explora una colección de 23 libros organizados en seis rutas temáticas. Cada ruta reúne conocimientos y enfoques prácticos sobre distintas disciplinas del entorno digital, desde los fundamentos del marketing y la monetización hasta la inteligencia artificial, la creación de contenidos y el desarrollo personal.
            </p>
            <p className="text-body text-[#1b1b1b]/70 font-normal leading-relaxed">
              Encuentra los temas que te interesan, descubre nuevas áreas de conocimiento y accede a las obras que mejor se relacionan con tus objetivos.
            </p>
          </div>

          {/* 6 Category Routes Cards (sin imágenes, composición equilibrada) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FEATURED_BOOKS.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.path || `/${cat.slug}/`}
                className="bg-[#dae7df]/15 hover:bg-[#dae7df]/35 border border-[#dae7df]/60 hover:border-[#4db380]/60 rounded-xl p-6 transition-all flex flex-col justify-between gap-4 group cursor-pointer shadow-sm hover:shadow-md h-full"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4db380] block mb-1.5">
                    Ruta {cat.category}
                  </span>
                  <h3 className="text-base font-bold font-serif text-[#174532] group-hover:text-[#4db380] transition-colors leading-snug break-words mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-body-sm text-[#1b1b1b]/70 leading-relaxed">
                    {cat.intro}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#174532]/10 flex items-center justify-between text-[12px] font-medium text-[#174532]/75 group-hover:text-[#174532]">
                  <span>{cat.books.length} {cat.books.length === 1 ? 'libro' : 'libros'}</span>
                  <span className="text-[#4db380] font-semibold group-hover:translate-x-0.5 transition-transform">Ver ruta →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Books Grid */}
          <div className="mb-12">
            <div className="mb-8 border-b border-[#dae7df] pb-3">
              <h3 className="text-h3 font-bold font-serif text-[#174532]">
                Títulos destacados de la colección
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBooks.map((book) => {
                const bookUrl = book.path || `/${book.slug}/`;
                return (
                  <div
                    key={book.id || book.slug}
                    className="relative bg-white border border-[#dae7df]/40 hover:border-[#4db380]/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group h-full"
                  >
                    <div className="mb-5">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-32 md:w-40 h-auto object-cover shadow-md group-hover:scale-105 transition-transform rounded-sm"
                        loading="lazy"
                        width={300}
                        height={435}
                      />
                    </div>

                    <h4 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532] group-hover:text-[#4db380] transition-colors leading-snug mb-2 break-words">
                      {book.title}
                    </h4>

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
                          onClick={(e) => openPurchaseModal(e, book)}
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

          {/* Large CTA to full library */}
          <div className="text-center pt-8">
            <Link
              href="/biblioteca/"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#174532] text-white font-semibold text-[15px] rounded-md hover:bg-[#1f513a] transition-all shadow-xl shadow-[#174532]/10 hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              Explorar el catálogo completo (23 libros)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Systems Section exclusive to Home */}
      <HomeSystems />

      <HomeAbout />
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
