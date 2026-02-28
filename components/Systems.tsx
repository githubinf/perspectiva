
import React from 'react';

const Systems: React.FC = () => {
  return (
    <section id="sistemas" className="py-24 md:py-40 bg-[#dae7df]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🧩</span>
            <div className="h-[1px] flex-grow bg-[#174532]/20"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#4db380]">Arquitectura Digital</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#174532] mb-6 leading-tight">
            Sistemas <span className="italic serif text-[#4db380]">Digitales</span>
          </h2>
          <p className="text-[#174532]/60 text-lg md:text-xl mb-12 font-medium">
            Los libros enseñan las piezas. <br className="hidden sm:block" />
            Ahora veamos cómo se conectan.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-2xl md:text-3xl font-light text-[#1b1b1b] leading-relaxed serif italic">
              "No necesitas más información. <br />
              <span className="text-[#174532] font-bold not-italic">Necesitas estructura.</span>"
            </p>
            <div className="space-y-6 text-[#1b1b1b]/70 text-lg leading-relaxed">
              <p>
                La mayoría de personas consume contenido todos los días. Aprende conceptos. Guarda ideas. Compra cursos. Pero sigue sin construir nada sólido.
              </p>
              <p className="font-bold text-[#174532]">
                ¿Por qué? Porque nadie les enseña a diseñar sistemas. Solo les enseñan piezas sueltas.
              </p>
            </div>
          </div>
        </div>

        {/* Definition & Logic */}
        <div className="grid lg:grid-cols-3 gap-16 mb-32">
          <div className="lg:col-span-1 bg-[#174532] text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-9xl opacity-5 font-black">🔎</div>
            <h3 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">¿Qué es un sistema digital real?</h3>
            <ul className="space-y-6 text-sm md:text-base text-white/80">
              <li className="flex gap-4">
                <span className="text-[#f4b925]">●</span>
                <span>Tiene un objetivo claro.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#f4b925]">●</span>
                <span>Integra contenido y monetización desde el inicio.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#f4b925]">●</span>
                <span>No depende de una sola fuente de tráfico.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#f4b925]">●</span>
                <span>Puede optimizarse sin reconstruirse desde cero.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#f4b925]">●</span>
                <span>Funciona incluso cuando no estamos creando constantemente algo nuevo.</span>
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#4db380] font-bold mb-2">Transformación:</p>
              <p className="font-mono text-sm">Tráfico → Atención → Confianza → Ingresos → Optimización</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#4db380] mb-4 block">Metodología</span>
              <h3 className="text-3xl font-bold text-[#174532]">Cómo pensamos los sistemas</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { step: "01", title: "Fundamento", desc: "Definir el activo principal y su propósito estratégico." },
                { step: "02", title: "Estructura", desc: "Diseñar la arquitectura de contenidos, ofertas y captación." },
                { step: "03", title: "Atracción", desc: "Crear flujos constantes de tráfico cualificado." },
                { step: "04", title: "Conversión", desc: "Transformar atención en ingresos de forma sostenible." },
                { step: "05", title: "Optimización", desc: "Medir, ajustar y escalar sin destruir lo construido." }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#f4b925] pl-6 py-2">
                  <span className="block font-mono text-xs text-[#4db380] mb-2">{item.step}</span>
                  <h4 className="text-xl font-bold text-[#174532] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#1b1b1b]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Types of Systems */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#174532] mb-4">Tipos de sistemas que trabajamos</h3>
            <p className="text-[#1b1b1b]/50 italic">Modelos escalables con lógica estructural</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Sistema Blog + Afiliación", 
                desc: "Construcción de un activo basado en contenido estructurado, SEO y monetización inteligente.",
                icon: "✍️"
              },
              { 
                title: "Sistema IA + Productos Digitales", 
                desc: "Uso estratégico de inteligencia artificial para acelerar creación, investigación y producción rentable.",
                icon: "🤖"
              },
              { 
                title: "Sistema Tráfico + Email", 
                desc: "Arquitectura centrada en captación constante y ventas recurrentes.",
                icon: "📧"
              }
            ].map((type, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#dae7df] hover:border-[#4db380] transition-colors group">
                <span className="text-4xl mb-6 block">{type.icon}</span>
                <h4 className="text-xl font-bold text-[#174532] mb-4 group-hover:text-[#4db380] transition-colors">{type.title}</h4>
                <p className="text-sm text-[#1b1b1b]/60 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Section */}
        <div className="mb-32 py-16 border-y border-[#174532]/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-4xl">📚</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#174532]">
                Cómo se conectan nuestros libros con los sistemas
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-8">
                <div>
                  <p className="text-[#174532] font-bold mb-2 uppercase text-[10px] tracking-widest">El Activo</p>
                  <p className="text-[#1b1b1b]/70 leading-relaxed">
                    Cada sistema que presentamos no es una idea abstracta. Está respaldado por rutas concretas dentro de nuestra biblioteca.
                  </p>
                </div>
                <div>
                  <p className="text-[#174532] font-bold mb-2 uppercase text-[10px] tracking-widest">La Competencia</p>
                  <p className="text-[#1b1b1b]/70 leading-relaxed">
                    Nuestros libros desarrollan competencias específicas. Nuestros sistemas muestran cómo integrarlas dentro de una arquitectura coherente.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-[#f4b925]/10 p-6 border-l-4 border-[#f4b925]">
                  <p className="text-[#174532] font-bold italic serif text-lg mb-4">
                    "Primero se domina la pieza. Después se conecta con intención."
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#174532]/10">
                    <div>
                      <p className="text-[10px] uppercase font-black text-[#4db380] mb-1">Biblioteca</p>
                      <p className="text-xs font-bold text-[#174532]">Fundamentos</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-[#4db380] mb-1">Sistemas</p>
                      <p className="text-xs font-bold text-[#174532]">Integración</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project vs System */}
        <div className="bg-[#174532] rounded-sm p-12 md:p-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4db380]/5 skew-x-12 translate-x-20"></div>
           <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-8">Proyecto <span className="italic serif text-[#4db380]">vs</span> Sistema</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  La diferencia no es técnica. Es estructural. Un proyecto depende de energía; un sistema depende de diseño.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span>Un proyecto muere cuando se detiene el esfuerzo.</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#4db380]"></div>
                    <span>Un sistema continúa porque fue construido con intención.</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm">
                <p className="text-xl italic serif mb-8 leading-relaxed">
                  "Tu próximo avance no vendrá de consumir más contenido. Vendrá de entender cómo conectar lo que ya sabes dentro de una arquitectura coherente."
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#biblioteca"
                    className="bg-[#f4b925] text-[#174532] px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors inline-block text-center"
                  >
                    Rutas de construcción
                  </a>
                </div>
              </div>
           </div>
        </div>

        <div className="mt-20 text-center">
           <p className="text-[#174532] font-black text-[10px] uppercase tracking-[0.5em] opacity-30">FG Perspectiva — Diseño de Activos</p>
        </div>
      </div>
    </section>
  );
};

export default Systems;
