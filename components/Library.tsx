
import React from 'react';
import { FEATURED_BOOKS } from '../constants';

const Library: React.FC = () => {
  return (
    <section id="biblioteca" className="pt-12 pb-24 md:pt-20 md:pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-1.5 bg-[#f4b925] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#174532]">Biblioteca <span className="italic serif text-[#4db380]">FG Perspectiva</span></h2>
            <p className="text-[#1b1b1b]/60 text-xl leading-relaxed">
              Todos nuestros libros organizados por rutas claras, para que construyas sistemas reales, no acumules información.
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-[#174532] border-b-4 border-[#f4b925] pb-2 inline-block opacity-80 cursor-default">
            Ver todo el catálogo
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {FEATURED_BOOKS.map((route) => (
            <article key={route.id} className="group flex flex-col h-full">
              <div className="overflow-hidden bg-[#dae7df]/20 mb-8 relative shadow-sm border border-[#dae7df]/50 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 rounded-sm">
                <img 
                  src={route.coverUrl} 
                  alt={route.title}
                  className="w-full h-auto block transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#174532]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#4db380] font-black mb-4 block">
                  RUTA: {route.category}
                </span>
                <h3 className="text-2xl font-bold mb-6 text-[#174532] leading-tight border-l-2 border-[#f4b925] pl-4">
                  {route.title}
                </h3>
                <p className="text-[#1b1b1b]/70 text-sm mb-10 italic leading-relaxed">
                  {route.intro}
                </p>
                
                <div className="space-y-10">
                  {route.books.map((book: any, idx: number) => (
                    <div key={idx} className="group/book flex gap-4 md:gap-6 items-start">
                      {book.coverUrl && (
                        <div className="w-20 md:w-24 flex-shrink-0 shadow-md border border-[#dae7df]/30 overflow-hidden group-hover/book:shadow-xl transition-shadow duration-300 rounded-sm bg-white">
                          <img 
                            src={book.coverUrl} 
                            alt={book.title} 
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-grow pt-1">
                        <a 
                          href={book.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block mb-2 text-sm md:text-base font-bold text-[#174532] hover:text-[#4db380] transition-colors leading-snug"
                        >
                          👉 {book.title}
                        </a>
                        <p className="text-[11px] md:text-xs text-[#1b1b1b]/50 leading-relaxed font-light italic">
                          {book.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
