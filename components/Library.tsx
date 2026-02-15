
import React from 'react';
import { FEATURED_BOOKS } from '../constants';

const Library: React.FC = () => {
  return (
    <section id="biblioteca" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-1.5 bg-[#f4b925] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#174532]">Biblioteca <span className="italic serif text-[#4db380]">destacada</span></h2>
            <p className="text-[#1b1b1b]/60 text-xl leading-relaxed">
              Una selección curada de nuestros títulos más influyentes. Sistemas diseñados para durar en entornos digitales competitivos.
            </p>
          </div>
          <a 
            href="#" 
            className="text-[10px] uppercase tracking-[0.3em] font-black text-[#174532] border-b-4 border-[#f4b925] pb-2 hover:border-[#174532] transition-all inline-block"
          >
            Ver todos los libros
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {FEATURED_BOOKS.map((book) => (
            <article key={book.id} className="group cursor-pointer">
              <div className="aspect-[3/4.2] overflow-hidden bg-[#dae7df]/30 mb-8 relative shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#174532]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#174532] text-[9px] uppercase tracking-widest font-bold">
                     Premium Ed.
                   </span>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#4db380] font-black mb-4 block">
                {book.category}
              </span>
              <h3 className="text-2xl font-bold mb-4 text-[#174532] group-hover:text-[#4db380] transition-colors leading-tight">
                {book.title}
              </h3>
              <p className="text-[#1b1b1b]/50 text-base leading-relaxed mb-8">
                {book.description}
              </p>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#174532] flex items-center gap-3 group-hover:gap-6 transition-all group-hover:text-[#4db380]">
                Explorar en Amazon <span className="text-xl">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
