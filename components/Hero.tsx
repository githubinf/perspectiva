
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#dae7df]/30 -skew-x-12 -z-10 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
          <span className="w-8 h-[1px] bg-[#f4b925]"></span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#4db380] font-bold">
            Editorial de Sistemas Digitales
          </span>
        </div>
        
        <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-10 animate-slide-up text-[#174532]">
          Cambia tu forma de ver. <br />
          <span className="italic serif text-[#4db380]">Cambia tus resultados.</span> <br />
          <span className="text-[#174532]/90">Construye sistemas digitales que generen ingresos reales.</span>
        </h1>
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-[#1b1b1b]/80 leading-relaxed mb-10 text-balance">
              Creamos libros y sistemas prácticos para personas que quieren construir activos digitales reales, 
              entender el marketing moderno y desarrollar una mentalidad estratégica en un mundo impulsado por la tecnología.
              Desde blogging y afiliados hasta inteligencia artificial y crecimiento personal, en FG Perspectiva reunimos 
              conocimiento aplicado, métodos probados y perspectivas claras que convierten ideas en acción.
            </p>
            <div className="mb-10">
              <p className="text-[#174532] font-medium border-l-4 border-[#f4b925] pl-8 py-2 text-lg leading-relaxed">
                <span className="italic">No publicamos teoría. Creamos caminos.</span> 
                <span className="text-[#1b1b1b]/60 text-sm font-normal ml-2 block sm:inline">
                  Diseñado para emprendedores digitales, creadores y profesionales que quieren construir activos reales, no perseguir tácticas.
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#biblioteca" 
                className="inline-flex items-center justify-center px-10 py-5 bg-[#174532] text-white font-bold text-xs uppercase tracking-[0.25em] hover:bg-[#1f513a] transition-all hover:-translate-y-1 shadow-2xl shadow-[#174532]/20 rounded-sm"
              >
                👉 Empezar a construir activos
              </a>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
             <div className="aspect-[4/5] bg-[#dae7df] rounded-sm relative overflow-hidden shadow-2xl group">
               <img 
                 src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" 
                 alt="Perspective and Systems" 
                 className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#174532]/60 to-transparent mix-blend-multiply"></div>
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-12 h-1 bg-[#f4b925] mb-4"></div>
                  <p className="text-white text-xs uppercase tracking-widest font-bold">Visión Sistémica</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
