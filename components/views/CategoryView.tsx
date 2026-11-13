import React, { useState } from 'react';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface CategoryViewProps {
  category: BookCategory;
}

const CategoryView: React.FC<CategoryViewProps> = ({ category }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPurchaseModal = (book: BookItem) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Biblioteca', href: '/biblioteca/' },
            { label: category.category, href: category.path }
          ]}
        />

        {/* Category Header Hero */}
        <div className="mt-6 mb-16 bg-[#dae7df]/20 border border-[#dae7df]/50 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#174532] bg-white/80 px-3 py-1 rounded-full border border-[#dae7df]">
                  Ruta {category.category}
                </span>
                <span className="text-xs text-[#174532]/60 font-semibold">
                  • {category.books.length} {category.books.length === 1 ? 'libro' : 'libros'} en esta colección
                </span>
              </div>
              <h1 className="text-h1 font-bold font-serif text-[#174532] mb-4 leading-tight break-words">
                {category.title}
              </h1>
              <p className="text-subtitle text-[#1b1b1b]/70 font-normal leading-relaxed max-w-2xl">
                {category.intro}
              </p>
            </div>
            {category.coverUrl && (
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <img
                  src={category.coverUrl}
                  alt={category.title}
                  className="w-48 md:w-56 h-auto rounded-lg shadow-xl border border-[#dae7df]/60 object-cover"
                  loading="eager"
                  width={300}
                  height={300}
                />
              </div>
            )}
          </div>
        </div>

        {/* Books Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8 border-b border-[#dae7df]/60 pb-4">
            <h2 className="text-h2 font-bold font-serif text-[#174532]">
              Libros de la colección
            </h2>
            <Link
              href="/biblioteca/"
              className="text-xs uppercase tracking-wider font-semibold text-[#4db380] hover:text-[#174532] transition-colors"
            >
              ← Ver todas las rutas
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
                          onClick={() => openPurchaseModal(book)}
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
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
      />
    </div>
  );
};

export default CategoryView;
