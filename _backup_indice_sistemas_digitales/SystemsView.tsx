import React from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import Systems from '../Systems.tsx';
import { Link } from '../../router.tsx';
import { ArrowRight } from 'lucide-react';

const SystemsView: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 bg-white">
      {/* Independent Editorial Hero for /sistemas-digitales/ */}
      <header className="bg-[#dae7df]/25 border-b border-[#174532]/12 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Sistemas Digitales', href: '/sistemas-digitales/' }]} />

          <div className="mt-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                  ARQUITECTURA Y DESARROLLO DIGITAL
                </span>
              </div>

              <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-6 text-balance">
                Sistemas Digitales: cómo conectar conocimientos, procesos y activos en una estructura coherente
              </h1>

              <div className="space-y-4 text-subtitle text-[#1b1b1b]/80 font-normal leading-relaxed max-w-[65ch]">
                <p>
                  Un proyecto digital puede reunir contenidos, herramientas, canales de tráfico y distintas formas de monetización sin que exista una relación clara entre ellos. La diferencia aparece cuando dejamos de contemplarlos como elementos independientes y comenzamos a organizarlos dentro de una arquitectura con funciones, objetivos y procesos definidos.
                </p>
                <p>
                  Un sistema digital permite comprender esa relación, establecer cómo debe funcionar cada componente y construir una estructura que pueda evolucionar con el proyecto.
                </p>
              </div>
            </div>

            {/* Explanatory Structural Schematic (functional editorial diagram, not decorative) */}
            <div className="lg:col-span-4">
              <div
                className="bg-white border border-[#174532]/15 rounded-md p-6 shadow-xs"
                aria-label="Esquema estructural de un sistema digital"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#4db380] mb-4 pb-2.5 border-b border-[#174532]/10">
                  Relación estructural
                </p>
                <svg
                  viewBox="0 0 300 220"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Diagrama de conexión entre Propósito, Activos, Canales, Procesos y Monetización"
                >
                  {/* Connecting lines */}
                  <line x1="150" y1="42" x2="150" y2="86" stroke="#4db380" strokeWidth="1.5" />
                  <line x1="75" y1="64" x2="225" y2="64" stroke="#4db380" strokeWidth="1.5" />
                  <line x1="75" y1="64" x2="75" y2="86" stroke="#4db380" strokeWidth="1.5" />
                  <line x1="225" y1="64" x2="225" y2="86" stroke="#4db380" strokeWidth="1.5" />
                  <line x1="75" y1="126" x2="75" y2="148" stroke="#174532" strokeOpacity="0.35" strokeWidth="1.5" />
                  <line x1="150" y1="126" x2="150" y2="148" stroke="#174532" strokeOpacity="0.35" strokeWidth="1.5" />
                  <line x1="225" y1="126" x2="225" y2="148" stroke="#174532" strokeOpacity="0.35" strokeWidth="1.5" />
                  <line x1="75" y1="148" x2="225" y2="148" stroke="#174532" strokeOpacity="0.35" strokeWidth="1.5" />
                  <line x1="150" y1="148" x2="150" y2="170" stroke="#f4b925" strokeWidth="1.5" />

                  {/* Top Node: Propósito */}
                  <rect x="75" y="10" width="150" height="32" rx="3" fill="#174532" />
                  <text x="150" y="30" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="Libre Baskerville, Georgia, serif">
                    Propósito
                  </text>

                  {/* Middle Nodes */}
                  <rect x="25" y="86" width="100" height="40" rx="3" fill="#dae7df" fillOpacity="0.5" stroke="#174532" strokeOpacity="0.25" />
                  <text x="75" y="110" textAnchor="middle" fill="#174532" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
                    Activos
                  </text>

                  <rect x="131" y="86" width="38" height="40" rx="3" fill="#ffffff" stroke="#4db380" />
                  <text x="150" y="110" textAnchor="middle" fill="#174532" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
                    +
                  </text>

                  <rect x="175" y="86" width="100" height="40" rx="3" fill="#dae7df" fillOpacity="0.5" stroke="#174532" strokeOpacity="0.25" />
                  <text x="225" y="110" textAnchor="middle" fill="#174532" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
                    Canales
                  </text>

                  {/* Bottom Node: Procesos & Monetización */}
                  <rect x="35" y="170" width="230" height="38" rx="3" fill="#ffffff" stroke="#174532" strokeWidth="1.2" />
                  <text x="150" y="193" textAnchor="middle" fill="#174532" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
                    Procesos · Relación · Monetización
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Thematic Editorial Body (Sections 1-8) */}
      <Systems />

      {/* CIERRE EDITORIAL */}
      <section className="py-16 md:py-24 bg-white border-t border-[#174532]/12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#dae7df]/20 border border-[#174532]/15 rounded-md p-8 md:p-12">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 text-balance">
              Construir con intención. Conectar con criterio.
            </h2>

            <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch] mb-8">
              <p>
                Un sistema digital no comienza con la elección de una herramienta ni con la publicación del primer contenido. Comienza cuando comprendemos qué queremos construir y somos capaces de organizar los elementos necesarios para hacerlo posible.
              </p>
              <p>
                La arquitectura aporta dirección. Los procesos aportan organización. El conocimiento permite tomar decisiones y la evaluación ayuda a desarrollar una estructura coherente con los objetivos del proyecto.
              </p>
              <p>
                No necesitamos incorporar todo desde el primer momento. Necesitamos comprender qué piezas son relevantes, qué función deben cumplir y cómo podemos conectarlas de manera progresiva.
              </p>
              <p className="font-semibold text-[#174532] pt-2">
                La Biblioteca de FG Perspectiva reúne conocimientos sobre las disciplinas que intervienen en este recorrido. Explora sus libros y profundiza en los fundamentos que pueden ayudarte a comprender y desarrollar tus propios proyectos digitales.
              </p>
            </div>

            <div>
              <Link
                href="/biblioteca/"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#174532] text-white text-[14.5px] font-semibold rounded-md hover:bg-[#1f513a] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4db380]"
              >
                <span>Explorar la Biblioteca</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemsView;
