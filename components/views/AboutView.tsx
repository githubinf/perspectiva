import React from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import { Link } from '../../router.tsx';
import { ArrowRight } from 'lucide-react';

const HERO_COVERS = [
  {
    src: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/25-experto-en-plr-producto-400.jpg',
    alt: 'Portada del libro Experto en PLR Premium',
  },
  {
    src: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/1-como-crear-un-blog-optimizado-libro-400.png',
    alt: 'Portada del libro Cómo crear un Blog optimizado',
  },
  {
    src: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/3-marketing-de-afiliados-libro-400.jpg',
    alt: 'Portada del libro Dominando el marketing de afiliados',
  },
  {
    src: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/12-dinero-con-chatgpt-libro-400.jpg',
    alt: 'Portada del libro Cómo ganar dinero con CHATGPT',
  },
];

const READER_PROFILES = [
  'Quieren adquirir conocimientos sobre blogging, marketing, tráfico y monetización.',
  'Buscan comprender las posibilidades de la inteligencia artificial y las herramientas digitales.',
  'Desean crear contenidos y productos digitales con una orientación práctica.',
  'Necesitan desarrollar una visión más organizada de los distintos elementos que intervienen en un proyecto.',
  'Prefieren comprender los fundamentos antes que depender de tácticas pasajeras o promesas de resultados fáciles.',
];

const VISION_CHAIN = [
  'Biblioteca',
  'Conocimiento',
  'Integración',
  'Estructura digital',
];

const AboutView: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* HERO — IDENTIDAD EDITORIAL */}
      <header className="bg-[#dae7df]/20 border-b border-[#174532]/12 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Sobre la editorial', href: '/sobre-fg-perspectiva/' }]} />

          <div className="mt-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                  EDITORIAL DIGITAL · LIBROS Y CONOCIMIENTO PRÁCTICO
                </span>
              </div>

              <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-6 text-balance">
                FG Perspectiva, una editorial digital de libros y conocimiento práctico
              </h1>

              <div className="space-y-4 text-subtitle text-[#1b1b1b]/80 font-normal leading-relaxed max-w-[65ch]">
                <p>
                  FG Perspectiva desarrolla una propuesta editorial centrada en los conocimientos que intervienen en la creación, el desarrollo y la evolución de proyectos digitales.
                </p>
                <p>
                  Nuestra colección reúne libros sobre marketing, blogging, monetización, creación de contenidos, inteligencia artificial, productos digitales y desarrollo personal. Cada área aborda conocimientos que pueden ayudarnos a comprender mejor el entorno digital y a desarrollar competencias aplicables a nuestros propios proyectos.
                </p>
                <p>
                  Creemos en el valor de aprender con criterio, comprender los fundamentos y encontrar aplicaciones concretas para aquello que estudiamos. Por eso, nuestra labor editorial busca conectar conocimientos, organizar ideas y ofrecer perspectivas que vayan más allá de la información superficial.
                </p>
              </div>
            </div>

            {/* Columna derecha: composición visual editorial sobria con portadas reales */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#174532]/15 rounded-md p-5 sm:p-6 shadow-xs">
                <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#1f513a] mb-4 pb-2.5 border-b border-[#174532]/10">
                  Colección editorial FG Perspectiva
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-5 py-1">
                  {HERO_COVERS.map((cover) => (
                    <div
                      key={cover.src}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={cover.src}
                        alt={cover.alt}
                        className="w-full max-w-[132px] h-auto aspect-[400/580] object-cover rounded-[2px] shadow-md"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        width={400}
                        height={580}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 pt-3 border-t border-[#174532]/10 text-xs text-[#1b1b1b]/65 leading-relaxed">
                  Publicaciones organizadas por áreas temáticas orientadas al estudio y la aplicación práctica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN 01 — PROPÓSITO EDITORIAL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 01 · Propósito editorial
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-8 text-balance">
            Una editorial con una visión práctica del conocimiento
          </h2>

          <div className="space-y-5 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch]">
            <p>
              El entorno digital ofrece una cantidad extraordinaria de información. Sin embargo, acceder a contenidos, herramientas y métodos no significa necesariamente comprender cómo funcionan ni saber utilizarlos dentro de un proyecto.
            </p>
            <p>
              FG Perspectiva surge de la necesidad de abordar ese conocimiento desde una perspectiva más organizada. Nos interesa explorar las disciplinas que intervienen en los proyectos digitales, comprender sus fundamentos y desarrollar libros que permitan estudiar cada tema con una orientación clara.
            </p>
            <p>
              Nuestra propuesta no consiste en reunir información sin conexión ni en presentar cada novedad como una oportunidad que debemos aprovechar inmediatamente. Buscamos desarrollar contenidos que ayuden a entender los conceptos, reconocer sus aplicaciones y valorar su utilidad dentro de distintos contextos.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#174532]/15 max-w-[68ch]">
            <h3 className="text-h2 font-bold font-serif text-[#174532] mb-4">
              Conocimiento que puede ponerse en práctica
            </h3>
            <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed">
              <p>
                Los libros de nuestra colección abordan disciplinas concretas y desarrollan conocimientos que pueden aplicarse en diferentes etapas de un proyecto.
              </p>
              <p>
                Desde los fundamentos del blogging y el marketing hasta la inteligencia artificial, la creación de productos digitales y las estrategias de monetización, cada temática permite explorar una parte del entorno digital.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#174532]/15 max-w-[68ch]">
            <h3 className="text-h2 font-bold font-serif text-[#174532] mb-4">
              Fundamentos antes que soluciones pasajeras
            </h3>
            <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed">
              <p>
                Consideramos importante comprender por qué funciona un método, qué condiciones necesita y cuáles son sus limitaciones.
              </p>
              <p>
                Por eso, nuestra orientación editorial prioriza la claridad, la comprensión de los procesos y la utilidad del conocimiento. No buscamos alimentar expectativas irreales ni presentar fórmulas universales. Buscamos ofrecer perspectivas que ayuden a estudiar, evaluar y tomar decisiones con mayor criterio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 02 — EL FUNDADOR Y LA TRAYECTORIA */}
      <section className="py-16 md:py-24 bg-[#dae7df]/20 border-y border-[#174532]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 02 · El fundador y la trayectoria
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-10 max-w-3xl text-balance">
            Una trayectoria construida mediante exploración y aprendizaje
          </h2>

          <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Columna fotografía del fundador */}
            <div className="md:col-span-4">
              <figure className="bg-white border border-[#174532]/15 rounded-md p-5 shadow-xs">
                <div className="overflow-hidden rounded-sm bg-[#dae7df]/30 aspect-square">
                  <img
                    src="https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/avatar_francisco.jpg"
                    alt="Francisco González, fundador de FG Perspectiva"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    width={300}
                    height={300}
                  />
                </div>
                <figcaption className="mt-4 pt-3 border-t border-[#174532]/10">
                  <span className="block font-serif font-bold text-base text-[#174532]">
                    Francisco González
                  </span>
                  <span className="block text-xs uppercase tracking-wider font-medium text-[#4db380] mt-0.5">
                    Fundador de FG Perspectiva
                  </span>
                </figcaption>
              </figure>
            </div>

            {/* Columna texto biográfico */}
            <div className="md:col-span-8 space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
              <p>
                Detrás de FG Perspectiva está <strong className="font-semibold text-[#174532]">Francisco González</strong>, autor y fundador de la editorial.
              </p>
              <p>
                Su recorrido comenzó hace más de ocho años con la exploración del ecosistema digital. Lo que inicialmente fue un blog impulsado por la curiosidad se convirtió progresivamente en una experiencia de investigación, experimentación y desarrollo de proyectos.
              </p>
              <p>
                A lo largo de ese recorrido, el aprendizaje no se limitó a estudiar conceptos. También implicó poner ideas en práctica, probar herramientas, evaluar resultados, reconocer errores y ajustar los planteamientos cuando era necesario.
              </p>
              <p>
                Esa experiencia fue dando forma a una actividad editorial que hoy reúne decenas de libros publicados y lectores en distintos países.
              </p>
              <p className="font-medium text-[#174532]">
                FG Perspectiva representa la evolución de ese recorrido: una iniciativa que reúne conocimientos, experiencias y perspectivas desarrolladas a partir de años de exploración del entorno digital.
              </p>
            </div>
          </div>

          {/* Filosofía de trabajo integrada dentro de la misma sección */}
          <div className="mt-12 bg-[#174532] text-white rounded-md p-7 md:p-10">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#4db380] mb-3">
                  Filosofía de trabajo
                </h3>
                <p className="text-h3 font-serif font-bold text-white leading-snug mb-4">
                  Comprender antes de aplicar. Investigar antes de concluir. Construir sobre fundamentos.
                </p>
                <p className="text-body-sm md:text-body text-white/85 leading-relaxed max-w-[60ch]">
                  No consideramos el conocimiento como una acumulación de información. Su valor aparece cuando podemos interpretarlo, relacionarlo con otras disciplinas y encontrar una aplicación coherente.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/15 lg:pl-8">
                <p className="font-serif font-bold text-lg text-white">
                  Francisco González
                </p>
                <p className="text-sm text-[#dae7df] mt-1">
                  Fundador de FG Perspectiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 03 — CÓMO SE ORGANIZA LA EDITORIAL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 03 · Cómo se organiza la editorial
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 max-w-3xl text-balance">
            Libros para comprender. Sistemas para conectar.
          </h2>

          <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch] mb-12">
            <p>
              FG Perspectiva desarrolla su propuesta a través de dos dimensiones complementarias.
            </p>
            <p>
              Ambas parten de una misma visión: el conocimiento tiene mayor utilidad cuando comprendemos sus fundamentos y sabemos cómo relacionar sus aplicaciones.
            </p>
          </div>

          {/* Dos columnas editoriales diferenciadas (Biblioteca como núcleo + Sistemas como complemento) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-14">
            <article className="lg:col-span-7 bg-[#dae7df]/20 border border-[#174532]/20 border-t-2 border-t-[#174532] rounded-md p-7 md:p-9">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#174532] mb-2">
                Núcleo editorial
              </p>
              <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5">
                La Biblioteca — Conocimiento y fundamentos
              </h3>
              <div className="space-y-4 text-body text-[#1b1b1b]/85 leading-relaxed">
                <p className="font-semibold text-[#174532]">
                  La Biblioteca constituye el núcleo editorial de FG Perspectiva.
                </p>
                <p>
                  Reúne libros organizados en distintas áreas temáticas que permiten explorar disciplinas relacionadas con la creación y el desarrollo de proyectos digitales.
                </p>
                <p>
                  Cada obra aborda un ámbito específico del conocimiento: desde la iniciación en el entorno digital hasta el marketing, la monetización, la tecnología, la creación de contenidos y el crecimiento personal.
                </p>
                <p>
                  La finalidad es ofrecer una colección que permita estudiar temas concretos, desarrollar competencias y ampliar nuestra comprensión de las distintas áreas que intervienen en un proyecto.
                </p>
              </div>
            </article>

            <article className="lg:col-span-5 pt-6 lg:pt-4 border-t border-[#174532]/20">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#4db380] mb-2">
                Dimensión complementaria
              </p>
              <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5">
                Sistemas Digitales — Integración y estructura
              </h3>
              <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed">
                <p>
                  Sistemas Digitales complementa esa propuesta editorial desde una perspectiva de integración.
                </p>
                <p>
                  Mientras los libros permiten comprender conocimientos y desarrollar capacidades específicas, el enfoque de sistemas aborda cómo pueden relacionarse esos elementos dentro de una estructura organizada.
                </p>
                <p>
                  Se trata de comprender la función de los activos, los contenidos, los canales, los procesos y los mecanismos de monetización, así como la manera en que pueden trabajar de forma coordinada.
                </p>
                <p>
                  No sustituye a la Biblioteca ni representa una actividad independiente de la identidad editorial. Amplía la perspectiva sobre cómo conectar y aplicar los conocimientos que forman parte de nuestra propuesta.
                </p>
              </div>
            </article>
          </div>

          {/* Dos dimensiones de una misma visión: relación visual secuencial responsive */}
          <div className="border-t border-[#174532]/15 pt-10">
            <h3 className="text-h3 font-bold font-serif text-[#174532] mb-6">
              Dos dimensiones de una misma visión
            </h3>

            <ol className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-2 mb-6">
              {VISION_CHAIN.map((step, idx) => (
                <React.Fragment key={step}>
                  <li className="bg-[#dae7df]/25 border border-[#174532]/15 rounded-sm px-4 py-2.5 font-serif font-bold text-sm md:text-base text-[#174532] text-center sm:text-left">
                    {step}
                  </li>
                  {idx < VISION_CHAIN.length - 1 && (
                    <li aria-hidden="true" className="text-[#4db380] font-mono text-sm font-bold text-center select-none px-1">
                      <span className="sm:hidden">↓</span>
                      <span className="hidden sm:inline">→</span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>

            <p className="text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
              Primero comprendemos los fundamentos. Después podemos explorar cómo conectarlos dentro de un proyecto con propósito y organización.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 04 — PARA QUIÉN PUBLICAMOS */}
      <section className="py-16 md:py-24 bg-[#dae7df]/15 border-y border-[#174532]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 04 · Para quién publicamos
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-8 text-balance">
            Conocimiento para quienes desean desarrollar sus propios proyectos
          </h2>

          <div className="max-w-[68ch] space-y-6 text-body text-[#1b1b1b]/80 leading-relaxed">
            <p>
              Nuestra propuesta editorial está dirigida a emprendedores digitales, creadores de contenidos y profesionales que desean comprender mejor las disciplinas del entorno digital y desarrollar sus propios proyectos.
            </p>

            <p className="font-semibold text-[#174532]">
              Nos dirigimos especialmente a quienes:
            </p>

            <ul className="border-t border-[#174532]/15 divide-y divide-[#174532]/12">
              {READER_PROFILES.map((item, idx) => (
                <li key={idx} className="py-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold text-[#4db380] tabular-nums flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              No todos nuestros lectores parten del mismo nivel ni persiguen los mismos objetivos. Por eso, la colección aborda distintas disciplinas y etapas de aprendizaje.
            </p>

            <p className="font-medium text-[#174532]">
              Lo que compartimos es una misma orientación: aprender con intención, desarrollar criterio y utilizar el conocimiento como punto de partida para construir.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 05 — CIERRE EDITORIAL Y ENLACES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                Sección 05 · Cierre editorial
              </span>
            </div>

            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 text-balance">
              El conocimiento es el comienzo. La perspectiva marca la diferencia.
            </h2>

            <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
              <p>
                FG Perspectiva nace de una convicción: comprender mejor lo que hacemos nos permite tomar decisiones más conscientes y desarrollar proyectos con una visión más amplia.
              </p>
              <p>
                Nuestra colección reúne conocimientos de distintas disciplinas, mientras que nuestra perspectiva editorial busca darles contexto, utilidad y conexión.
              </p>
              <p>
                Seguimos desarrollando libros y contenidos para quienes desean explorar el entorno digital, ampliar sus conocimientos y encontrar fundamentos sobre los que construir sus propias iniciativas.
              </p>
              <p className="font-medium text-[#174532]">
                Te invitamos a conocer nuestra propuesta editorial, explorar los libros y descubrir cómo se relacionan sus distintas áreas de conocimiento.
              </p>
            </div>
          </div>

          {/* Tres enlaces internos claramente jerarquizados (Biblioteca protagonista + 2 secundarios) */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <Link
              href="/biblioteca/"
              className="lg:col-span-6 bg-[#174532] text-white rounded-md p-7 md:p-9 flex flex-col justify-between gap-6 hover:bg-[#1f513a] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4db380]"
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#4db380] block mb-2.5">
                  Catálogo principal
                </span>
                <h3 className="text-h2 font-bold font-serif text-white mb-3">
                  Explorar la Biblioteca
                </h3>
                <p className="text-body-sm md:text-body text-white/85 leading-relaxed">
                  Accede a la colección editorial y descubre los libros organizados por áreas temáticas.
                </p>
              </div>
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-sm font-semibold text-[#f4b925]">
                <span>Ir a la Biblioteca</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </Link>

            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              <Link
                href="/sistemas-digitales/"
                className="flex-1 bg-[#dae7df]/20 hover:bg-[#dae7df]/35 border border-[#174532]/15 rounded-md p-6 flex items-center justify-between gap-5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4db380]"
              >
                <div>
                  <h3 className="text-h3 font-bold font-serif text-[#174532] mb-1.5 group-hover:text-[#1f513a]">
                    Conocer Sistemas Digitales
                  </h3>
                  <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                    Descubre cómo se relacionan los conocimientos, los activos y los procesos dentro de una estructura digital.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#174532] flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/contacto/"
                className="flex-1 bg-white hover:bg-[#dae7df]/15 border border-[#174532]/15 rounded-md p-6 flex items-center justify-between gap-5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4db380]"
              >
                <div>
                  <h3 className="text-h3 font-bold font-serif text-[#174532] mb-1.5 group-hover:text-[#1f513a]">
                    Contactar con FG Perspectiva
                  </h3>
                  <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                    Si deseas comunicarte con la editorial, puedes hacerlo desde nuestra página de contacto.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#174532] flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
