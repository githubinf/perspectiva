import React, { useMemo } from 'react';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import { getHtmlSitemapData } from '../../htmlSitemap.ts';
import { ArrowRight } from 'lucide-react';

const HtmlSitemapView: React.FC = () => {
  const { mainPages, categories, books } = useMemo(() => getHtmlSitemapData(), []);

  return (
    <div className="pt-28 bg-white text-[#1b1b1b]">
      <header className="bg-[#dae7df]/20 border-b border-[#174532]/12 pb-10 md:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Mapa del sitio' }]} />

          <div className="mt-4 max-w-[65ch]">
            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4">
              Mapa del sitio
            </h1>
            <p className="text-subtitle text-[#1b1b1b]/80 font-normal leading-relaxed">
              Explora FG Perspectiva y accede directamente a nuestras páginas, categorías y libros. Aquí encontrarás una visión organizada de los contenidos disponibles en nuestra web.
            </p>
          </div>
        </div>
      </header>

      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12 md:space-y-14">
          {/* Bloque A: Páginas principales */}
          <section aria-labelledby="sitemap-main-pages">
            <h2
              id="sitemap-main-pages"
              className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2.5 border-b border-[#dae7df] mb-6"
            >
              Páginas principales
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {mainPages.map((page) => (
                <li
                  key={page.path}
                  className="border-b border-[#dae7df]/55"
                >
                  <Link
                    href={page.path}
                    className="group flex items-center justify-between gap-3 py-3 text-[15.5px] font-medium text-[#174532] hover:text-[#1f513a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                  >
                    <span>{page.title}</span>
                    <ArrowRight
                      className="w-4 h-4 text-[#4db380] shrink-0 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Bloque B: Categorías de la Biblioteca */}
          <section aria-labelledby="sitemap-categories">
            <h2
              id="sitemap-categories"
              className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2.5 border-b border-[#dae7df] mb-6"
            >
              Categorías de la Biblioteca
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {categories.map((cat) => (
                <li
                  key={cat.path}
                  className="border-b border-[#dae7df]/55"
                >
                  <Link
                    href={cat.path}
                    className="group flex items-center justify-between gap-3 py-3 text-[15.5px] font-medium text-[#174532] hover:text-[#1f513a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                  >
                    <span>{cat.title}</span>
                    <span className="inline-flex items-center gap-2 text-[13px] font-normal text-[#1b1b1b]/60 shrink-0">
                      <span>
                        {cat.bookCount} {cat.bookCount === 1 ? 'libro' : 'libros'}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 text-[#4db380] group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Bloque C: Libros */}
          <section aria-labelledby="sitemap-books">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2.5 border-b border-[#dae7df] mb-6">
              <h2
                id="sitemap-books"
                className="text-h3 md:text-h2 font-bold font-serif text-[#174532]"
              >
                Libros
              </h2>
              <span className="text-[13px] font-medium text-[#1b1b1b]/65">
                {books.length} {books.length === 1 ? 'título disponible' : 'títulos disponibles'}
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {books.map((book) => (
                <li
                  key={book.path}
                  className="border-b border-[#dae7df]/55"
                >
                  <Link
                    href={book.path}
                    className="group flex items-start justify-between gap-3 py-3 text-[15px] leading-snug text-[#174532] hover:text-[#1f513a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                  >
                    <span className="font-medium group-hover:underline underline-offset-4">
                      {book.title}
                    </span>
                    {book.categoryName && (
                      <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#1f513a]/80 shrink-0 pt-0.5">
                        {book.categoryName}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HtmlSitemapView;
