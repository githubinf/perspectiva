
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
            <p className="text-subtitle text-[#1b1b1b]/80 mb-5 font-normal">
              Creamos libros prácticos para emprendedores, creadores y profesionales que buscan comprender el entorno digital, desarrollar conocimientos aplicables y construir proyectos con una visión estratégica. Nuestra colección reúne distintas áreas del conocimiento que intervienen en la creación, desarrollo y crecimiento de activos digitales.
            </p>
            <p className="text-subtitle text-[#1b1b1b]/80 mb-6 font-normal">
              Desde el blogging y el marketing de afiliados hasta la inteligencia artificial, la creación de productos digitales, el marketing de contenidos y el crecimiento personal, en FG Perspectiva abordamos disciplinas que permiten comprender mejor las oportunidades del entorno digital y desarrollar las competencias necesarias para aprovecharlas.
            </p>
            <div className="mb-6">
              <p className="text-[#174532] font-medium border-l-4 border-[#f4b925] pl-6 py-2 text-base md:text-[17px] leading-relaxed">
                No publicamos teoría. Creamos caminos.
              </p>
            </div>
            <p className="text-body text-[#1b1b1b]/80 mb-5 font-normal">
              Cada libro forma parte de una propuesta orientada a conectar conocimientos, comprender procesos y encontrar aplicaciones prácticas. Nuestro propósito es ofrecer algo más que información aislada: perspectivas y fundamentos que ayuden a tomar decisiones, desarrollar proyectos y construir activos reales.
            </p>
            <p className="text-body text-[#1b1b1b]/80 mb-8 font-normal">
              Nos dirigimos a emprendedores digitales, creadores y profesionales que prefieren comprender antes de actuar, construir sobre fundamentos y desarrollar proyectos con visión a largo plazo, en lugar de depender de tácticas pasajeras o soluciones que pierden utilidad con el tiempo.
            </p>
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
