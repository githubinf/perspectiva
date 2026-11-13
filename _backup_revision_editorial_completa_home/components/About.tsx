
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-fg-perspectiva" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border border-[#174532]/10 p-8 md:p-12 relative overflow-hidden bg-[#dae7df]/10">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4b925]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">📖</span>
              <h2 className="text-h2 font-bold font-serif text-[#174532]">Sobre FG Perspectiva</h2>
              <div className="h-[1px] flex-grow bg-[#174532]/10"></div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-12">
                <p className="text-subtitle text-[#174532] font-medium leading-relaxed mb-6">
                  FG Perspectiva no nace como una editorial tradicional, sino como una respuesta al exceso de información sin estructura.
                </p>
              </div>
              
              <div className="md:col-span-7 space-y-5 text-body text-[#1b1b1b]/70 leading-relaxed">
                <p>
                  Detrás del proyecto está <span className="text-[#174532] font-bold">Francisco González</span>, explorador constante del ecosistema digital durante más de ocho años. Lo que comenzó como un blog impulsado por curiosidad se convirtió en un laboratorio práctico de aprendizaje: probar, fallar, ajustar y volver a construir.
                </p>
                <p>
                  Con decenas de libros publicados y miles de lectores en distintos países, la misión sigue siendo la misma: transformar conocimiento disperso en sistemas claros.
                </p>
              </div>
              
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="bg-[#174532] text-white p-6 rounded-md shadow-xl">
                  <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#4db380] mb-3 block">Nuestra Filosofía</span>
                  <p className="text-h3 italic font-serif leading-snug mb-4 text-white">
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
