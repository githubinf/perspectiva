
import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="pt-16 pb-44 md:pb-32 bg-[#174532] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
        <span className="absolute bottom-2 right-4 md:bottom-4 md:right-8 text-ornament-8 font-bold text-white/[0.06] font-serif italic leading-none select-none pointer-events-none">
          8+
        </span>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="hidden lg:block w-40 h-[1px] bg-[#4db380]/40"></div>
          <div>
            <div className="mb-12 inline-block">
               <span className="text-[#f4b925] text-4xl font-serif">"</span>
               <p className="text-h2 font-normal italic font-serif leading-relaxed text-slate-100">
                Más de 8 años creando proyectos digitales, decenas de libros publicados y miles de lectores en distintos países. 
                FG Perspectiva es el resultado de años de prueba, error y aprendizaje real.
              </p>
              <span className="text-[#f4b925] text-4xl font-serif float-right -mt-6">"</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#1f513a] border-2 border-[#4db380] overflow-hidden shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/avatar_francisco.jpg" 
                  alt="Francisco González" 
                  className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full object-cover" 
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  width={300}
                  height={300}
                />
              </div>
              <div className="space-y-1">
                <span className="block font-semibold text-[15px] tracking-wide text-white">Francisco González</span>
                <span className="text-[12px] text-[#4db380] uppercase tracking-wider font-medium">Fundador de FG Perspectiva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
