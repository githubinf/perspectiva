
import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="py-32 bg-[#174532] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <span className="absolute -top-10 -left-10 text-[25rem] font-black text-white/[0.03] serif italic leading-none select-none">
          8+
        </span>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="hidden lg:block w-40 h-[1px] bg-[#4db380]/40"></div>
          <div>
            <div className="mb-12 inline-block">
               <span className="text-[#f4b925] text-4xl serif">"</span>
               <p className="text-2xl md:text-4xl font-light italic serif leading-relaxed">
                Más de 8 años creando proyectos digitales, decenas de libros publicados y miles de lectores en distintos países. 
                FG Perspectiva es el resultado de años de prueba, error y aprendizaje real.
              </p>
              <span className="text-[#f4b925] text-4xl serif float-right -mt-6">"</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#1f513a] border-2 border-[#4db380] overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/XkxVB4VJ/6-300x300.jpg" 
                  alt="Francisco González" 
                  className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full object-cover" 
                />
              </div>
              <div className="space-y-1">
                <span className="block font-black text-xs tracking-[0.3em] uppercase text-white">Francisco González</span>
                <span className="text-[10px] text-[#4db380] uppercase tracking-widest font-bold">Fundador de FG Perspectiva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
