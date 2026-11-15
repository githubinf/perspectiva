import React from 'react';

const HomeAbout: React.FC = () => {
  return (
    <section id="sobre-fg-perspectiva" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border border-[#174532]/15 rounded-sm p-8 md:p-12 relative overflow-hidden bg-[#dae7df]/15">
          {/* Decorative accents including subtle 8+ visual indicator */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#f4b925]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true"></div>
          <span
            className="hidden sm:block absolute bottom-2 right-6 text-ornament-8 font-bold text-[#174532]/[0.05] font-serif italic leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            8+
          </span>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">📖</span>
              <h2 className="text-h2 font-bold font-serif text-[#174532]">Sobre FG Perspectiva</h2>
              <div className="h-[1px] flex-grow bg-[#174532]/15"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7 space-y-5">
                <p className="text-subtitle text-[#174532] font-medium leading-relaxed">
                  FG Perspectiva es una editorial digital creada para reunir, desarrollar y compartir conocimientos prácticos sobre el entorno digital y las disciplinas que intervienen en la creación de proyectos propios.
                </p>

                <div className="space-y-5 text-body text-[#1b1b1b]/75 leading-relaxed">
                  <p>
                    Detrás de la editorial está <span className="text-[#174532] font-bold">Francisco González</span>, cuya trayectoria comenzó hace más de ocho años con la exploración del ecosistema digital. Lo que empezó como un blog impulsado por la curiosidad fue evolucionando hasta convertirse en un recorrido de aprendizaje y experimentación: investigar, poner ideas en práctica, evaluar resultados, corregir errores y desarrollar nuevos proyectos.
                  </p>
                  <p>
                    Esa experiencia ha dado lugar a decenas de libros publicados y a lectores en distintos países. De ese recorrido nace la perspectiva que define FG Perspectiva: comprender los fundamentos, conectar conocimientos y transformar ideas en propuestas con aplicación práctica.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                {/* Caja Nuestra Filosofía + Identificación y avatar del fundador unificados */}
                <div className="bg-[#174532] text-white p-7 rounded-md shadow-xl relative overflow-hidden">
                  <span
                    className="sm:hidden absolute -bottom-2 right-3 text-[88px] font-bold text-white/[0.06] font-serif italic leading-none select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    8+
                  </span>
                  <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#4db380] mb-3 block">Nuestra Filosofía</span>
                  <p className="text-h3 italic font-serif leading-snug mb-5 text-white relative z-10">
                    No enseñamos trucos. Diseñamos arquitectura digital.
                  </p>
                  <div className="w-10 h-1 bg-[#f4b925] mb-6"></div>

                  <div className="pt-5 border-t border-white/15 flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#1f513a] border-2 border-[#4db380] overflow-hidden shadow-lg flex-shrink-0">
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
                    <div>
                      <span className="block font-semibold text-[15px] tracking-wide text-white">Francisco González</span>
                      <span className="text-[11.5px] text-[#4db380] uppercase tracking-wider font-medium">Fundador de FG Perspectiva</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
