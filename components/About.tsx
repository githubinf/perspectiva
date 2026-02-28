
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border border-[#174532]/10 p-8 md:p-12 relative overflow-hidden bg-[#dae7df]/10">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4b925]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">📖</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#174532] uppercase tracking-wider">Sobre FG Perspectiva</h2>
              <div className="h-[1px] flex-grow bg-[#174532]/10"></div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-12">
                <p className="text-lg md:text-xl text-[#174532] font-medium leading-relaxed mb-8">
                  FG Perspectiva no nace como una editorial tradicional, sino como una respuesta al exceso de información sin estructura.
                </p>
              </div>
              
              <div className="md:col-span-7 space-y-6 text-[#1b1b1b]/70 leading-relaxed">
                <p>
                  Detrás del proyecto está <span className="text-[#174532] font-bold">Francisco González</span>, explorador constante del ecosistema digital durante más de ocho años. Lo que comenzó como un blog impulsado por curiosidad se convirtió en un laboratorio práctico de aprendizaje: probar, fallar, ajustar y volver a construir.
                </p>
                <p>
                  Con decenas de libros publicados y miles de lectores en distintos países, la misión sigue siendo la misma: transformar conocimiento disperso en sistemas claros.
                </p>
              </div>
              
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="bg-[#174532] text-white p-6 rounded-sm shadow-xl">
                  <p className="text-sm uppercase tracking-[0.3em] font-black text-[#4db380] mb-4">Nuestra Filosofía</p>
                  <p className="text-xl italic serif leading-tight mb-4">
                    "No enseñamos trucos. Diseñamos arquitectura digital."
                  </p>
                  <div className="w-10 h-1 bg-[#f4b925]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
