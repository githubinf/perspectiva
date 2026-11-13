
import React from 'react';
import { Link } from '../router.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#dae7df]/30 -skew-x-12 -z-10 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
          <span className="w-8 h-[1px] bg-[#f4b925]"></span>
          <span className="text-[11.5px] uppercase tracking-wider text-[#174532] font-semibold">
            Editorial de Sistemas Digitales
          </span>
        </div>
        
        <h1 className="text-hero font-bold font-serif mb-8 animate-slide-up text-[#174532]">
          Cambia tu forma de ver. Cambia tus resultados. <span className="italic font-serif text-[#4db380]">Construye sistemas digitales que generen ingresos reales.</span>
        </h1>
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="text-subtitle text-[#1b1b1b]/80 mb-8 text-balance font-normal">
              Creamos libros y sistemas prácticos para personas que quieren construir activos digitales reales, 
              entender el marketing moderno y desarrollar una mentalidad estratégica en un mundo impulsado por la tecnología.
              Desde blogging y afiliados hasta inteligencia artificial y crecimiento personal, en FG Perspectiva reunimos 
              conocimiento aplicado, métodos probados y perspectivas claras que convierten ideas en acción.
            </p>
            <div className="mb-8">
              <p className="text-[#174532] font-medium border-l-4 border-[#f4b925] pl-6 py-2 text-base md:text-[17px] leading-relaxed">
                No publicamos teoría. Creamos caminos. Diseñado para emprendedores digitales, creadores y profesionales que quieren construir activos reales, no perseguir tácticas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/biblioteca/" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#174532] text-white font-semibold text-[15px] hover:bg-[#1f513a] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#174532]/20 rounded-md"
              >
                👉 Empezar a construir activos
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
             <div className="rounded-xl overflow-hidden shadow-2xl border border-[#dae7df]/60 bg-white">
               <img 
                 src="https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png" 
                 alt="FG Perspectiva - Ideas que florecen" 
                 className="w-full h-auto object-contain block"
                 fetchPriority="high"
                 decoding="async"
                 referrerPolicy="no-referrer"
                 width={1672}
                 height={941}
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
