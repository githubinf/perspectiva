
import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <section className="pt-16 pb-16 md:pt-28 md:pb-28 bg-white text-center px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#dae7df]/20 -z-10 rounded-t-[100%] blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="w-16 h-1 bg-[#174532] mx-auto mb-12"></div>
        <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-[1.05] text-[#174532]">
          Tu próximo avance no depende de <span className="italic serif text-[#4db380]">aprender más.</span> <br />
          Depende de ver diferente.
        </h2>
        
        <p className="text-[#1b1b1b]/60 text-xl md:text-2xl leading-relaxed mb-16 text-balance font-light">
          Explora nuestra biblioteca y empieza hoy a construir algo que realmente te pertenezca. 
          Deja de acumular tácticas y empieza a diseñar sistemas reales.
        </p>
        
        <a 
          href="#biblioteca" 
          className="inline-flex items-center justify-center px-12 py-6 bg-[#174532] text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-[#1f513a] transition-all hover:-translate-y-2 shadow-2xl shadow-[#174532]/20 rounded-sm group"
        >
          Iniciar transformación
          <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
};

export default FooterCTA;
