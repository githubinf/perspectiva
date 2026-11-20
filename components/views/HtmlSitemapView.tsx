import React, { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import { getHtmlSitemapData } from '../../htmlSitemap.ts';

const HtmlSitemapView: React.FC = () => {
  const { mainPages, categories } = useMemo(() => getHtmlSitemapData(), []);

  return (
    <div className="pt-28 bg-white text-[#1b1b1b]">
      {/* A. Cabecera editorial */}
      <header className="bg-[#dae7df]/20 border-b border-[#174532]/12 pb-12 md:pb-14">
        <div className="max-w-[820px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Mapa del sitio' }]} />

          <div className="mt-4 max-w-[66ch]">
            <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold font-serif text-[#174532] leading-[1.15] tracking-[-0.02em] text-balance mb-5">
              Mapa del sitio
            </h1>
            <p className="text-[17px] sm:text-[18px] lg:text-[19px] text-[#1b1b1b]/80 font-normal leading-[1.65]">
              Explora FG Perspectiva y descubre nuestra biblioteca de libros, categorías temáticas y contenidos sobre conocimiento, marketing, tecnología y proyectos digitales. Desde este índice puedes acceder directamente a las diferentes secciones de la editorial.
            </p>
          </div>
        </div>
      </header>

      <div className="py-14 md:py-20">
        <div className="max-w-[820px] mx-auto px-6 space-y-16 md:space-y-20">
          {/* B. Páginas principales */}
          <section aria-labelledby="sitemap-main-pages">
            <h2
              id="sitemap-main-pages"
              className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold font-serif text-[#174532] leading-[1.25] tracking-[-0.01em] pb-3.5 border-b border-[#dae7df] mb-3"
            >
              Páginas principales
            </h2>

            <nav aria-label="Páginas principales">
              <ul className="divide-y divide-[#dae7df]/65 border-b border-[#dae7df]/65">
                {mainPages.map((page) => (
                  <li key={page.path}>
                    <Link
                      href={page.path}
                      className="group flex items-center justify-between gap-4 min-h-[48px] py-3.5 px-3 -mx-3 text-[17px] lg:text-[18px] font-medium leading-[1.5] text-[#174532] hover:text-[#1f513a] hover:bg-[#dae7df]/20 rounded-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                    >
                      <span className="group-hover:underline underline-offset-4 decoration-[#4db380]/70">
                        {page.title}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 text-[#4db380] shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* C. Biblioteca de libros */}
          <section aria-labelledby="sitemap-library">
            <div className="pb-6 border-b border-[#dae7df] mb-10">
              <h2
                id="sitemap-library"
                className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold font-serif text-[#174532] leading-[1.25] tracking-[-0.01em] mb-4"
              >
                Biblioteca de libros
              </h2>
              <p className="text-[17px] sm:text-[18px] lg:text-[19px] text-[#1b1b1b]/80 font-normal leading-[1.65] max-w-[66ch]">
                Explora nuestra colección de libros organizados por temática. Accede a cada categoría y descubre títulos relacionados con marketing, inteligencia artificial, creación de contenidos, negocios digitales y desarrollo de proyectos.
              </p>
            </div>

            <div className="space-y-12 md:space-y-14">
              {categories.map((category, idx) => (
                <section
                  key={category.path}
                  aria-labelledby={`sitemap-cat-${category.slug}`}
                  className={idx === 0 ? 'pt-0' : 'pt-10 border-t border-[#dae7df]'}
                >
                  <div className="mb-5">
                    <h3
                      id={`sitemap-cat-${category.slug}`}
                      className="text-[22px] sm:text-[23px] lg:text-[25px] font-bold font-serif text-[#174532] leading-[1.3]"
                    >
                      <Link
                        href={category.path}
                        className="group inline-flex items-baseline gap-3 text-[#174532] hover:text-[#1f513a] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                      >
                        <span className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#4db380] tabular-nums shrink-0">
                          {category.number}
                        </span>
                        <span className="group-hover:underline underline-offset-4 decoration-[#4db380]/75">
                          {category.title}
                        </span>
                        <ArrowRight
                          className="w-4 h-4 text-[#4db380] self-center shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </h3>
                    <p className="text-[15.5px] lg:text-[16.5px] leading-[1.6] text-[#1b1b1b]/75 mt-2.5 max-w-[65ch]">
                      {category.description}
                    </p>
                  </div>

                  <ul className="divide-y divide-[#dae7df]/55 border-t border-b border-[#dae7df]/55">
                    {category.books.map((book) => (
                      <li key={book.path}>
                        <Link
                          href={book.path}
                          className="group flex items-center min-h-[46px] py-3.5 px-3 -mx-3 text-[17px] lg:text-[18px] font-medium leading-[1.5] text-[#174532] hover:text-[#1f513a] hover:bg-[#dae7df]/18 rounded-xs transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                        >
                          <span className="underline decoration-[#4db380]/50 underline-offset-[5px] group-hover:decoration-[#174532] transition-colors">
                            {book.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HtmlSitemapView;
