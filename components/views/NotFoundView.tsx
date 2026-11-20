import React, { useState } from 'react';
import { FEATURED_BOOKS } from '../../constants.tsx';
import { BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import HomeBookSearch from '../HomeBookSearch.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { ArrowRight } from 'lucide-react';

const NotFoundView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPurchaseModal = (e: React.MouseEvent, book: BookItem) => {
    e.stopPropagation();
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-24 bg-[#fcfdfc]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Bloque 1: Identificación del error 404 y botón único a Home */}
        <section
          aria-labelledby="not-found-heading"
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#dae7df]/45 border border-[#174532]/15 text-[12px] font-bold tracking-[0.16em] text-[#174532] uppercase mb-5">
            404
          </span>

          <h1
            id="not-found-heading"
            className="text-h1 font-bold font-serif text-[#174532] mb-5 leading-tight"
          >
            Esta página no está disponible
          </h1>

          <p className="text-body md:text-subtitle text-[#1b1b1b]/75 font-normal leading-relaxed mb-8">
            Parece que la dirección que buscas no existe, ha cambiado o ya no está disponible. Pero todavía puedes descubrir muchos otros libros en nuestra biblioteca.
          </p>

          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#174532] text-white text-[14.5px] font-semibold rounded-md hover:bg-[#1f513a] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
            >
              <span>Ir a la página de inicio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Bloque 2: Buscador de libros en tiempo real */}
        <div className="mt-12 md:mt-14 max-w-4xl mx-auto">
          <HomeBookSearch
            onOpenPurchaseModal={openPurchaseModal}
            headingText="¿Qué te gustaría encontrar?"
            headingAs="h2"
            subtitleText={null}
            idPrefix="not-found"
            containerClassName=""
          />
        </div>

        {/* Bloque 3: Categorías reales de la Biblioteca */}
        <section
          aria-labelledby="not-found-categories-heading"
          className="mt-14 md:mt-16 pt-12 border-t border-[#dae7df]/70"
        >
          <h2
            id="not-found-categories-heading"
            className="text-h3 md:text-h2 font-bold font-serif text-[#174532] mb-8 text-center"
          >
            Explora nuestras categorías
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_BOOKS.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.path || `/${cat.slug}/`}
                className="bg-[#dae7df]/15 hover:bg-[#dae7df]/35 border border-[#dae7df]/70 hover:border-[#4db380]/60 rounded-xl p-6 transition-all flex flex-col justify-between gap-4 group cursor-pointer shadow-sm hover:shadow-md h-full"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a] block mb-1.5">
                    Ruta {cat.category}
                  </span>
                  <h3 className="text-[18px] font-bold font-serif text-[#174532] group-hover:text-[#4db380] transition-colors leading-snug mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-body-sm text-[#1b1b1b]/70 leading-relaxed">
                    {cat.intro}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#174532]/10 flex items-center justify-between text-[12.5px] font-medium text-[#174532]/80 group-hover:text-[#174532]">
                  <span>
                    {cat.books.length} {cat.books.length === 1 ? 'libro' : 'libros'}
                  </span>
                  <span className="text-[#1f513a] group-hover:text-[#4db380] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Ver ruta →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
      />
    </div>
  );
};

export default NotFoundView;
