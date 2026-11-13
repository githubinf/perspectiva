import React from 'react';

const HomeSystems: React.FC = () => {
  return (
    <section id="sistemas" className="pt-12 pb-6 md:pt-20 md:pb-10 bg-[#dae7df]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Single-Column Editorial Composition: Bloques 1 a 4 */}
        <div className="max-w-4xl mx-auto mb-28">
          {/* Bloque 1 — Identidad y presentación */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl" aria-hidden="true">🧩</span>
              <div className="h-[1px] flex-grow bg-[#174532]/20"></div>
              <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#174532]">Arquitectura Digital</span>
            </div>

            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-5 leading-tight">
              Sistemas <span className="italic font-serif text-[#4db380]">Digitales</span>
            </h2>

            <p className="text-[#174532]/80 text-subtitle mb-10 font-medium">
              Los libros enseñan las piezas. <br className="hidden sm:block" />
              Ahora veamos cómo se conectan.
            </p>

            <p className="text-h3 font-normal text-[#1b1b1b] leading-relaxed font-serif italic mb-8">
              No necesitas más información. <br />
              <span className="text-[#174532] font-bold not-italic">Necesitas estructura.</span>
            </p>

            <div className="space-y-5 text-[#1b1b1b]/75 text-body leading-relaxed">
              <p>
                Podemos aprender sobre marketing, crear contenidos, utilizar herramientas digitales y descubrir distintas formas de monetización. Sin embargo, conocer cada elemento por separado no garantiza que sepamos integrarlo en un proyecto coherente.
              </p>
              <p>
                Un blog puede generar visitas sin conseguir resultados comerciales. Una lista de correo puede reunir suscriptores sin formar parte de una estrategia de conversión. Un producto digital puede estar bien elaborado y, aun así, carecer de un mecanismo consistente para llegar a sus compradores.
              </p>
              <p>
                El problema no siempre está en las herramientas ni en los conocimientos disponibles. Muchas veces está en la falta de conexión entre los elementos que forman parte del proyecto.
              </p>
              <p className="font-semibold text-[#174532]">
                En FG Perspectiva entendemos los sistemas digitales como estructuras organizadas en las que cada componente cumple una función y contribuye a un objetivo común.
              </p>
            </div>
          </div>

          {/* Bloque 2 — Características de un sistema digital */}
          <div className="pt-12 border-t border-[#174532]/15">
            <h3 className="text-h2 font-bold font-serif text-[#174532] mb-6">
              ¿Qué caracteriza a un sistema digital?
            </h3>

            <ul className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed">
              <li className="flex gap-3.5 items-start">
                <span className="text-[#f4b925] mt-0.5 flex-shrink-0" aria-hidden="true">●</span>
                <span><strong className="text-[#174532] font-semibold">Tiene un propósito definido:</strong> cada elemento responde a un objetivo concreto dentro del proyecto.</span>
              </li>
              <li className="flex gap-3.5 items-start">
                <span className="text-[#f4b925] mt-0.5 flex-shrink-0" aria-hidden="true">●</span>
                <span><strong className="text-[#174532] font-semibold">Integra contenido y monetización:</strong> establece una relación entre lo que ofrecemos, la audiencia a la que nos dirigimos y las vías para generar ingresos.</span>
              </li>
              <li className="flex gap-3.5 items-start">
                <span className="text-[#f4b925] mt-0.5 flex-shrink-0" aria-hidden="true">●</span>
                <span><strong className="text-[#174532] font-semibold">Diversifica las fuentes de tráfico:</strong> evita que toda la actividad dependa de un único canal de adquisición.</span>
              </li>
              <li className="flex gap-3.5 items-start">
                <span className="text-[#f4b925] mt-0.5 flex-shrink-0" aria-hidden="true">●</span>
                <span><strong className="text-[#174532] font-semibold">Conecta procesos y herramientas:</strong> organiza los recursos para que trabajen de manera coordinada.</span>
              </li>
              <li className="flex gap-3.5 items-start">
                <span className="text-[#f4b925] mt-0.5 flex-shrink-0" aria-hidden="true">●</span>
                <span><strong className="text-[#174532] font-semibold">Permite medir y mejorar:</strong> facilita identificar qué funciona, qué necesita ajustes y dónde existen oportunidades de crecimiento.</span>
              </li>
            </ul>
          </div>

          {/* Bloque 3 — De la atención a los resultados */}
          <div className="my-14 p-6 md:p-8 bg-white border border-[#174532]/15 rounded-lg shadow-xs">
            <p className="text-[11.5px] uppercase tracking-widest text-[#1f513a] font-bold mb-3">
              De la atención a los resultados
            </p>
            <p className="font-mono text-sm md:text-base font-medium text-[#174532] leading-relaxed break-words">
              Tráfico → Atención → Confianza → Ingresos → Optimización
            </p>
          </div>

          {/* Bloque 4 — Metodología */}
          <div className="pt-2">
            <div className="mb-10">
              <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#1f513a] mb-3 block">Metodología</span>
              <h3 className="text-h2 font-bold font-serif text-[#174532] mb-4">Cómo pensamos los sistemas</h3>
              <p className="text-body text-[#1b1b1b]/75 leading-relaxed mb-4">
                Un sistema digital no se construye reuniendo herramientas o acumulando acciones independientes. Necesita una dirección, una estructura y una secuencia de procesos que trabajen de forma coordinada.
              </p>
              <p className="text-body text-[#174532] font-medium">
                Nuestra metodología organiza ese desarrollo en cinco etapas:
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Fundamento",
                  desc: "Definir qué queremos construir, cuál será el activo principal, a quién estará dirigido y qué valor aportará. Todo sistema necesita un propósito claro que oriente las decisiones posteriores."
                },
                {
                  step: "02",
                  title: "Estructura",
                  desc: "Organizar los componentes que darán forma al proyecto: contenidos, canales de captación, recursos, ofertas y procesos de monetización. El objetivo es establecer cómo se relacionan y qué función cumple cada elemento."
                },
                {
                  step: "03",
                  title: "Atracción",
                  desc: "Desarrollar mecanismos para atraer personas interesadas en lo que ofrecemos. Esto implica trabajar el contenido, la visibilidad y los canales de tráfico para alcanzar una audiencia relevante y generar oportunidades de conexión."
                },
                {
                  step: "04",
                  title: "Conversión",
                  desc: "Diseñar el recorrido que permite transformar el interés en confianza y la confianza en acciones concretas. Según el modelo de negocio, estas acciones pueden incluir suscripciones, solicitudes, recomendaciones o compras."
                },
                {
                  step: "05",
                  title: "Optimización",
                  desc: "Analizar el funcionamiento del sistema, identificar puntos de mejora y ajustar sus componentes. A partir de resultados observables, podemos perfeccionar los procesos y desarrollar nuevas oportunidades de crecimiento sin perder la coherencia de la estructura."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#f4b925] pl-6 py-2">
                  <div className="flex items-baseline gap-2.5 mb-2">
                    <span className="font-mono text-xs font-semibold text-[#1f513a] tabular-nums">{item.step}</span>
                    <span className="text-[#174532]/35 text-xs" aria-hidden="true">—</span>
                    <h4 className="text-h3 font-bold font-serif text-[#174532]">{item.title}</h4>
                  </div>
                  <p className="text-body text-[#1b1b1b]/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Types of Systems */}
        <div className="mb-16">
          <div className="text-center mb-14">
            <h3 className="text-h2 font-bold font-serif text-[#174532] mb-3">Tipos de sistemas que trabajamos</h3>
            <p className="text-body-sm text-[#1b1b1b]/65 italic font-serif">Tres modelos para organizar y desarrollar proyectos digitales</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "01. Sistema Blog + Afiliación",
                desc: "Construcción de un activo de contenidos orientado a atraer tráfico cualificado mediante SEO, desarrollar confianza con la audiencia y generar ingresos a través de recomendaciones de productos y servicios relevantes.",
                icon: "✍️"
              },
              {
                title: "02. Sistema IA + Productos Digitales",
                desc: "Integración de inteligencia artificial en los procesos de investigación, planificación y creación de productos digitales, combinando herramientas tecnológicas con criterio humano para desarrollar propuestas útiles y bien estructuradas.",
                icon: "🤖"
              },
              {
                title: "03. Sistema Tráfico + Email",
                desc: "Organización de canales de captación y estrategias de email marketing para atraer audiencia, mantener una relación directa con los suscriptores y crear oportunidades de conversión a lo largo del tiempo.",
                icon: "📧"
              }
            ].map((type, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#dae7df] hover:border-[#4db380] transition-colors group rounded-xl shadow-xs">
                <span className="text-4xl mb-6 block">{type.icon}</span>
                <h4 className="text-lg font-bold font-serif text-[#174532] mb-3 group-hover:text-[#4db380] transition-colors">{type.title}</h4>
                <p className="text-body-sm text-[#1b1b1b]/70 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Section */}
        <div className="mb-32 py-16 border-y border-[#174532]/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-4xl">📚</span>
              <h3 className="text-h2 font-bold font-serif text-[#174532]">
                Cómo se conectan nuestros libros con los sistemas
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-8">
                <div>
                  <p className="text-[#174532] font-semibold mb-2 uppercase text-[11.5px] tracking-wider">El conocimiento</p>
                  <p className="text-body text-[#1b1b1b]/70 leading-relaxed">
                    Cada sistema digital necesita conocimientos de distintas disciplinas: marketing, creación de contenidos, tráfico, monetización, inteligencia artificial y otras áreas que intervienen en el desarrollo de un proyecto. Nuestra Biblioteca reúne libros que permiten explorar y comprender esos fundamentos.
                  </p>
                </div>
                <div>
                  <p className="text-[#174532] font-semibold mb-2 uppercase text-[11.5px] tracking-wider">La aplicación</p>
                  <p className="text-body text-[#1b1b1b]/70 leading-relaxed">
                    Nuestros libros desarrollan conocimientos y competencias específicas. Los sistemas muestran cómo relacionar esas capacidades, organizar sus aplicaciones y convertirlas en componentes de una estructura digital coherente.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#f4b925]/10 p-6 border-l-4 border-[#f4b925]">
                  <p className="text-[#174532] font-bold italic font-serif text-lg mb-4">
                    "Primero se domina la pieza. Después se conecta con intención."
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#174532]/10">
                    <div>
                      <p className="text-[11px] uppercase font-semibold tracking-wider text-[#4db380] mb-1">Biblioteca</p>
                      <p className="text-xs font-semibold text-[#174532]">Fundamentos</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase font-semibold tracking-wider text-[#4db380] mb-1">Sistemas</p>
                      <p className="text-xs font-semibold text-[#174532]">Integración</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project vs System (without Rutas de construcción anchor/button) */}
        <div className="bg-[#174532] rounded-sm p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4db380]/5 skew-x-12 translate-x-20"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-h2-lg font-bold font-serif mb-6">Proyecto <span className="italic font-serif text-[#4db380]">vs.</span> Sistema</h3>
              <p className="text-subtitle text-white/90 font-medium leading-relaxed mb-5">
                La diferencia no es solamente técnica. Es estructural.
              </p>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed mb-6">
                <p>
                  Un proyecto basado únicamente en el esfuerzo individual depende de que su creador impulse constantemente cada actividad. Cuando ese esfuerzo disminuye, muchas de sus funciones también se detienen.
                </p>
                <p>
                  Un sistema, en cambio, organiza los procesos, los recursos y las tareas dentro de una estructura definida. No elimina la necesidad de trabajar, supervisar o tomar decisiones, pero permite que las actividades estén conectadas y que el proyecto pueda mantener su continuidad sin depender de improvisaciones constantes.
                </p>
              </div>
              <div className="flex items-start gap-3 text-sm md:text-base text-white font-semibold">
                <div className="w-2 h-2 rounded-full bg-[#4db380] mt-2 flex-shrink-0"></div>
                <span>Un proyecto avanza mediante acciones. Un sistema organiza esas acciones para construir continuidad.</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm">
              <p className="text-h3 italic font-serif leading-relaxed text-white/95">
                Tu próximo avance no vendrá necesariamente de consumir más contenido. Vendrá de comprender cómo conectar lo que ya sabes dentro de una arquitectura coherente.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#174532] font-semibold text-[11px] uppercase tracking-widest opacity-40">FG Perspectiva — Diseño de Activos</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSystems;
