
import React from 'react';
import { Link } from '../router.tsx';

const FooterCTA: React.FC = () => {
  return (
    <section className="pt-16 pb-16 md:pt-28 md:pb-28 bg-white text-center px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#dae7df]/20 -z-10 rounded-t-[100%] blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="w-16 h-1 bg-[#174532] mx-auto mb-12"></div>
        <h2 className="text-h2-lg font-bold font-serif mb-8 leading-tight text-[#174532] max-w-3xl mx-auto">
          Tu próximo avance no depende de <span className="italic font-serif text-[#4db380]">aprender más.</span> <br />
          Depende de ver diferente.
        </h2>
        
        <p className="text-subtitle text-[#1b1b1b]/70 leading-relaxed mb-10 text-balance font-normal max-w-2xl mx-auto">
          Explora nuestra biblioteca y empieza hoy a construir algo que realmente te pertenezca. 
          Deja de acumular tácticas y empieza a diseñar sistemas reales.
        </p>
        
        <Link 
          href="/biblioteca/" 
          className="inline-flex items-center justify-center px-8 py-3.5 bg-[#174532] text-white font-semibold text-[15px] hover:bg-[#1f513a] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#174532]/20 rounded-md group"
        >
          Iniciar transformación
          <span className="ml-3 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </Link>
      </div>
    </section>
  );
};

export default FooterCTA;
