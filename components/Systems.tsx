import React from 'react';

const CONCEPT_ITEMS = [
  {
    term: 'Un activo',
    desc: 'representa un recurso que desarrollamos y organizamos para aportar valor al proyecto: una web, una biblioteca de contenidos, una lista de correo o un producto digital.',
  },
  {
    term: 'Un canal',
    desc: 'permite establecer contacto con las personas a las que queremos llegar: buscadores, redes sociales, plataformas de distribución o correo electrónico.',
  },
  {
    term: 'Un proceso',
    desc: 'define cómo se desarrolla una actividad y qué relación mantiene con las demás: publicación, captación, seguimiento, recomendación o venta.',
  },
  {
    term: 'Un mecanismo de monetización',
    desc: 'establece cómo el proyecto puede generar ingresos a partir del valor que ofrece: afiliación, productos propios u otros modelos compatibles con su actividad.',
  },
];

const SYSTEM_COMPONENTS = [
  {
    num: '01',
    title: '01. Propósito y modelo de negocio',
    paragraphs: [
      'Todo sistema necesita una dirección. Antes de elegir herramientas o desarrollar contenidos, debemos establecer qué queremos construir, qué valor ofreceremos y de qué manera se sostendrá el proyecto.',
      'El modelo de negocio condiciona las decisiones posteriores: el tipo de audiencia, los activos necesarios, los canales de adquisición y las vías de monetización.',
    ],
  },
  {
    num: '02',
    title: '02. Activos digitales',
    paragraphs: [
      'Los activos constituyen la base sobre la que se desarrolla el proyecto.',
      'Una web, un blog, una biblioteca de contenidos, una base de suscriptores o un catálogo de productos pueden cumplir funciones diferentes. Lo importante es comprender qué aportan, qué recursos requieren y cómo se relacionan con el objetivo general.',
      'No todos los proyectos necesitan los mismos activos ni deben desarrollarlos al mismo tiempo.',
    ],
  },
  {
    num: '03',
    title: '03. Contenidos y propuesta de valor',
    paragraphs: [
      'El contenido permite comunicar conocimientos, responder necesidades y presentar soluciones relevantes para una audiencia.',
      'Su función no consiste únicamente en atraer visitas. También puede ayudar a explicar una propuesta, generar confianza, orientar decisiones y conectar diferentes partes del sistema.',
      'Por eso, su planificación debe responder a una estrategia y no depender exclusivamente de la publicación constante.',
    ],
  },
  {
    num: '04',
    title: '04. Tráfico y adquisición de audiencia',
    paragraphs: [
      'Un proyecto necesita mecanismos para llegar a las personas adecuadas.',
      'El posicionamiento en buscadores, la distribución de contenidos, las redes sociales y otros canales pueden contribuir a generar visibilidad y atraer visitas.',
      'La elección depende del proyecto y de sus posibilidades. No se trata de utilizar todos los canales, sino de seleccionar aquellos que puedan integrarse de manera coherente en la estructura.',
    ],
  },
  {
    num: '05',
    title: '05. Relación y confianza',
    paragraphs: [
      'La atención inicial no garantiza una relación duradera.',
      'El sistema debe contemplar cómo mantener el contacto con la audiencia, ofrecer información útil y facilitar que las personas comprendan la propuesta.',
      'El correo electrónico, los contenidos especializados y otros mecanismos de comunicación pueden cumplir esta función, siempre que exista una razón clara para incorporarlos.',
    ],
  },
  {
    num: '06',
    title: '06. Conversión y monetización',
    paragraphs: [
      'La monetización representa la conexión entre el valor que ofrece el proyecto y las acciones que pueden generar ingresos.',
      'Puede desarrollarse mediante recomendaciones de productos, comercialización de productos propios u otros modelos adecuados a la actividad.',
      'La conversión no debe entenderse como un elemento aislado. Depende de la coherencia entre la propuesta, la audiencia, el contenido y el recorrido que se ha diseñado.',
    ],
  },
  {
    num: '07',
    title: '07. Tecnología y procesos',
    paragraphs: [
      'Las herramientas facilitan determinadas tareas, pero no sustituyen la planificación.',
      'Su función es apoyar los procesos, organizar información, mejorar la ejecución y reducir tareas innecesarias.',
      'Una herramienta debe incorporarse porque resuelve una necesidad identificada. Añadir tecnología sin una función concreta puede aumentar la complejidad en lugar de mejorar el sistema.',
    ],
  },
];

const FLOW_STAGES = [
  { step: '01', label: 'Propósito', functionText: 'El propósito establece la dirección.' },
  { step: '02', label: 'Activos', functionText: 'Los activos proporcionan la estructura.' },
  { step: '03', label: 'Contenido', functionText: 'El contenido comunica la propuesta.' },
  { step: '04', label: 'Tráfico', functionText: 'El tráfico permite alcanzar una audiencia.' },
  { step: '05', label: 'Relación', functionText: 'La relación desarrolla confianza y continuidad.' },
  { step: '06', label: 'Conversión', functionText: 'La conversión conecta la propuesta con un resultado.' },
  { step: '07', label: 'Análisis', functionText: 'El análisis permite evaluar el funcionamiento y detectar oportunidades de mejora.' },
];

const SYSTEM_MODELS = [
  {
    code: 'MODELO 01',
    heading: 'MODELO 01 — Blog + Afiliación',
    lead: 'Un activo de contenidos conectado con un modelo de recomendación comercial.',
    paragraphs: [
      'Este modelo utiliza un blog como activo central para desarrollar contenidos orientados a una audiencia concreta.',
      'El posicionamiento orgánico puede facilitar el descubrimiento de esos contenidos. A partir de ahí, los artículos pueden ofrecer información, responder consultas y presentar recomendaciones de productos o servicios relacionados con el tema tratado.',
      'La afiliación constituye el mecanismo de monetización, mientras que el contenido y el tráfico forman parte de la estructura de adquisición y comunicación.',
    ],
    components: [
      'Blog como activo central.',
      'Investigación de temas y necesidades de búsqueda.',
      'Contenidos organizados por temática.',
      'Estrategia de posicionamiento SEO.',
      'Recomendaciones y enlaces de afiliación.',
      'Análisis del tráfico y del comportamiento de los contenidos.',
    ],
    goal: 'El objetivo estructural es relacionar la creación de contenidos, la captación de visitas y la recomendación comercial dentro de un mismo proyecto.',
    flowNodes: ['Blog', 'Posicionamiento SEO', 'Afiliación'],
  },
  {
    code: 'MODELO 02',
    heading: 'MODELO 02 — IA + Productos Digitales',
    lead: 'Tecnología aplicada a la investigación, creación y desarrollo de productos propios.',
    paragraphs: [
      'Este modelo integra herramientas de inteligencia artificial en distintas fases del desarrollo de productos digitales.',
      'La tecnología puede facilitar tareas de investigación, organización de información, planificación y producción. Sin embargo, la utilidad del resultado depende del criterio humano, la revisión, la contextualización y la calidad de la propuesta.',
      'El sistema debe contemplar tanto el proceso de creación como la manera de presentar, distribuir y comercializar el producto.',
    ],
    components: [
      'Investigación de necesidades y oportunidades.',
      'Definición de la propuesta de valor.',
      'Inteligencia artificial como herramienta de apoyo.',
      'Criterio editorial y revisión humana.',
      'Desarrollo y organización del producto.',
      'Canales de distribución y comercialización.',
    ],
    goal: 'El propósito es integrar tecnología y conocimiento para desarrollar productos digitales con una propuesta definida y una estructura de comercialización coherente.',
    flowNodes: ['Investigación + IA', 'Criterio humano', 'Producto digital'],
  },
  {
    code: 'MODELO 03',
    heading: 'MODELO 03 — Tráfico + Email',
    lead: 'Captación de audiencia y desarrollo de una relación directa mediante correo electrónico.',
    paragraphs: [
      'Este modelo organiza diferentes canales de adquisición alrededor de una estructura de comunicación por email.',
      'El tráfico permite atraer personas interesadas. La suscripción ofrece la posibilidad de mantener una relación directa, compartir contenidos relevantes y presentar propuestas relacionadas con sus intereses.',
      'El correo electrónico deja de ser una actividad aislada y pasa a formar parte de un recorrido planificado.',
    ],
    components: [
      'Canales de adquisición de tráfico.',
      'Propuesta de suscripción.',
      'Página o mecanismo de captación.',
      'Organización de la lista de correo.',
      'Secuencias y comunicaciones planificadas.',
      'Contenidos y propuestas de conversión.',
      'Análisis de resultados.',
    ],
    goal: 'El objetivo es conectar la adquisición de audiencia con una relación de comunicación que pueda desarrollarse a lo largo del tiempo.',
    flowNodes: ['Adquisición', 'Lista de correo', 'Conversión'],
  },
];

const METHODOLOGY_STAGES = [
  {
    num: '01',
    heading: 'ETAPA 01 — Fundamento',
    lead: 'Definir qué queremos construir y por qué.',
    paragraphs: [
      'El primer paso consiste en establecer el propósito del proyecto, identificar la audiencia a la que queremos dirigirnos y determinar qué valor podemos ofrecer.',
      'También necesitamos comprender el modelo de negocio, los recursos disponibles y los límites que condicionan su desarrollo.',
      'Sin esta base, las decisiones posteriores pueden terminar respondiendo a oportunidades aisladas en lugar de contribuir a una misma dirección.',
    ],
    result: 'una definición clara del proyecto, su propuesta de valor y sus objetivos.',
  },
  {
    num: '02',
    heading: 'ETAPA 02 — Arquitectura',
    lead: 'Diseñar la estructura y las relaciones entre sus componentes.',
    paragraphs: [
      'Una vez definido el propósito, podemos determinar qué activos necesitamos, qué canales utilizaremos y qué procesos deben formar parte del sistema.',
      'En esta etapa organizamos la relación entre contenidos, tráfico, audiencia, comunicación, monetización y herramientas.',
      'No necesitamos incorporar todos los elementos desde el principio. Debemos establecer prioridades y construir una estructura que pueda desarrollarse de manera ordenada.',
    ],
    result: 'un esquema funcional que identifica los componentes y sus relaciones.',
  },
  {
    num: '03',
    heading: 'ETAPA 03 — Desarrollo y atracción',
    lead: 'Construir los activos y establecer mecanismos de adquisición.',
    paragraphs: [
      'Con la arquitectura definida, comienza el desarrollo de los componentes principales.',
      'Esto puede incluir la creación de una web, la producción de contenidos, la organización de recursos y la puesta en marcha de los canales de adquisición seleccionados.',
      'La atracción debe responder a la audiencia y a la propuesta de valor. El objetivo no es generar actividad indiscriminada, sino establecer mecanismos para alcanzar personas con interés en lo que ofrecemos.',
    ],
    result: 'los activos principales desarrollados y los mecanismos iniciales de adquisición organizados.',
  },
  {
    num: '04',
    heading: 'ETAPA 04 — Integración y conversión',
    lead: 'Conectar los procesos para que el sistema pueda cumplir su función.',
    paragraphs: [
      'En esta fase comprobamos que los componentes no trabajen de manera aislada.',
      'El contenido debe relacionarse con la propuesta. Los canales deben conducir a los activos adecuados. Los mecanismos de comunicación deben cumplir una función y las vías de monetización deben integrarse de manera coherente.',
      'También debemos revisar el recorrido de la audiencia e identificar posibles interrupciones, elementos innecesarios o procesos que no estén cumpliendo su objetivo.',
    ],
    result: 'un recorrido organizado que conecta la adquisición, la relación con la audiencia y las acciones de conversión.',
  },
  {
    num: '05',
    heading: 'ETAPA 05 — Evaluación y optimización',
    lead: 'Medir, corregir y desarrollar la estructura.',
    paragraphs: [
      'Un sistema digital no queda terminado de manera definitiva. Su funcionamiento debe evaluarse a medida que el proyecto evoluciona.',
      'Necesitamos observar los resultados, analizar los procesos y reconocer qué elementos necesitan ajustes.',
      'Puede ser necesario mejorar contenidos, revisar canales de adquisición, reorganizar herramientas, corregir recorridos o modificar determinadas partes del modelo.',
      'La optimización debe basarse en información y objetivos definidos, no en incorporar novedades por el simple hecho de estar disponibles.',
    ],
    result: 'una estructura evaluada, con oportunidades de mejora identificadas y decisiones orientadas a su evolución.',
  },
];

const COMPARISON_ROWS = [
  {
    isolated: 'Actividades independientes.',
    organized: 'Procesos relacionados.',
  },
  {
    isolated: 'Decisiones frecuentes sin una estructura común.',
    organized: 'Funciones y objetivos definidos.',
  },
  {
    isolated: 'Dependencia de la improvisación.',
    organized: 'Planificación y organización.',
  },
  {
    isolated: 'Herramientas incorporadas por necesidad inmediata.',
    organized: 'Tecnología seleccionada según su función.',
  },
  {
    isolated: 'Dificultad para evaluar el conjunto.',
    organized: 'Posibilidad de analizar las relaciones y los resultados.',
  },
];

const DISCIPLINE_LINKS = [
  { discipline: 'SEO', role: 'Adquisición de tráfico orgánico' },
  { discipline: 'Marketing de contenidos', role: 'Comunicación de la propuesta' },
  { discipline: 'Email marketing', role: 'Relación directa con la audiencia' },
  { discipline: 'Afiliación', role: 'Mecanismo de monetización' },
];

const Systems: React.FC = () => {
  return (
    <div className="bg-white text-[#1b1b1b]">
      {/* SECCIÓN 1 — EL PROBLEMA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 01 · El problema
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-10 max-w-3xl text-balance">
            Tener herramientas y conocimientos no significa tener un sistema
          </h2>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 space-y-5 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
              <p>
                En el entorno digital es habitual comenzar por las acciones más visibles: crear un blog, abrir perfiles sociales, publicar contenidos, utilizar herramientas de inteligencia artificial o incorporar enlaces de afiliación.
              </p>
              <p>
                Cada una de estas actividades puede tener sentido por separado. El problema aparece cuando se desarrollan sin una planificación que determine cómo deben relacionarse.
              </p>
              <p>
                Podemos publicar artículos sin una estrategia de captación. Podemos atraer visitas sin ofrecer un recorrido que permita generar confianza. Podemos disponer de productos digitales sin contar con un mecanismo organizado para presentarlos a una audiencia adecuada.
              </p>
              <p>
                El resultado suele ser un conjunto de actividades que requieren atención constante, pero que no siempre contribuyen a un mismo propósito.
              </p>
            </div>

            <aside className="lg:col-span-5 lg:pt-2">
              <div className="border-y border-[#174532]/20 py-7 space-y-5">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#4db380]">
                  Cambio de enfoque
                </p>
                <p className="text-h3 font-serif italic text-[#174532] leading-relaxed">
                  Un sistema digital parte de una pregunta diferente: ¿qué función cumple cada elemento y de qué manera contribuye al funcionamiento general del proyecto?
                </p>
                <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed pt-3 border-t border-[#174532]/10">
                  Esta pregunta cambia la forma de planificar. En lugar de acumular acciones, comenzamos a definir relaciones, prioridades y procesos.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — EL CONCEPTO */}
      <section className="py-16 md:py-24 bg-[#dae7df]/20 border-y border-[#174532]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 02 · El concepto
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-8 max-w-3xl text-balance">
            Qué es una arquitectura digital
          </h2>

          <div className="space-y-5 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch] mb-12">
            <p>
              Una arquitectura digital es la organización lógica de los elementos que intervienen en un proyecto online.
            </p>
            <p>
              No se limita a la estructura técnica de una web ni a la elección de determinadas aplicaciones. Comprende la manera en que se conectan los activos, los contenidos, los canales de adquisición, las relaciones con la audiencia y los mecanismos de monetización.
            </p>
            <p>
              Podemos entenderla como un conjunto de componentes que cumplen funciones específicas dentro de una misma estructura.
            </p>
          </div>

          {/* 4 Architectural Definitions in clean hairline grid (not card clutter) */}
          <dl className="grid sm:grid-cols-2 border-t border-l border-[#174532]/15 bg-white mb-12">
            {CONCEPT_ITEMS.map((item, idx) => (
              <div
                key={item.term}
                className="p-6 md:p-8 border-r border-b border-[#174532]/15"
              >
                <dt className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-mono text-xs font-semibold text-[#4db380] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="font-serif text-h4 font-bold text-[#174532]">
                    {item.term}
                  </span>
                </dt>
                <dd className="text-body-sm text-[#1b1b1b]/80 leading-relaxed">
                  <strong className="font-semibold text-[#174532]">{item.term}</strong> {item.desc}
                </dd>
              </div>
            ))}
          </dl>

          <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch]">
            <p>
              La arquitectura determina cómo se relacionan estos elementos, qué función tiene cada uno y qué recorrido siguen las actividades dentro del proyecto.
            </p>
            <p className="font-medium text-[#174532]">
              No existe una estructura universal válida para todos los casos. La arquitectura debe responder al propósito, los recursos, la audiencia y el modelo de negocio que se desea desarrollar.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — LOS COMPONENTES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                Sección 03 · Los componentes
              </span>
            </div>

            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-5 max-w-3xl text-balance">
              Los elementos que forman un sistema digital
            </h2>

            <p className="text-subtitle text-[#1b1b1b]/75 leading-relaxed max-w-[65ch]">
              Para comprender un sistema necesitamos identificar sus componentes y evitar tratarlos como actividades aisladas.
            </p>
          </div>

          <div className="border-t border-[#174532]/20 divide-y divide-[#174532]/12">
            {SYSTEM_COMPONENTS.map((comp) => (
              <article
                key={comp.num}
                className="py-8 md:py-10 grid md:grid-cols-12 gap-5 md:gap-10 items-start"
              >
                <div className="md:col-span-5">
                  <h3 className="text-h3 font-bold font-serif text-[#174532] leading-snug tabular-nums">
                    {comp.title}
                  </h3>
                </div>
                <div className="md:col-span-7 space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
                  {comp.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — EL FUNCIONAMIENTO */}
      <section className="py-16 md:py-24 bg-[#174532] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#4db380]">
                Sección 04 · El funcionamiento
              </span>
            </div>

            <h2 className="text-h2-lg font-bold font-serif text-white mb-5 text-balance">
              Cómo se conectan los componentes
            </h2>

            <p className="text-subtitle text-white/85 leading-relaxed mb-3">
              Un sistema no funciona porque todos sus elementos estén presentes. Funciona cuando existe una relación lógica entre ellos.
            </p>
            <p className="text-body text-white/75 leading-relaxed">
              Podemos representar un recorrido general de esta manera:
            </p>
          </div>

          {/* Responsive Flow Diagram: vertical on mobile/tablet, horizontal 7-node flow on desktop */}
          <div
            className="mb-14 p-6 md:p-8 bg-[#1f513a]/60 border border-white/15 rounded-md"
            role="region"
            aria-label="Recorrido general de un sistema digital"
          >
            <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-1.5">
              {FLOW_STAGES.map((stage, idx) => (
                <React.Fragment key={stage.step}>
                  <li className="flex-1 bg-[#174532] border border-[#4db380]/35 rounded-sm px-4 py-3.5 flex lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-2">
                    <span className="font-mono text-[11px] font-semibold text-[#f4b925] tabular-nums">
                      {stage.step}
                    </span>
                    <span className="font-serif text-[15px] font-bold text-white tracking-tight">
                      {stage.label}
                    </span>
                  </li>
                  {idx < FLOW_STAGES.length - 1 && (
                    <li
                      aria-hidden="true"
                      className="flex items-center justify-center text-[#f4b925] font-mono text-sm py-0.5 lg:px-0.5 select-none"
                    >
                      <span className="lg:hidden">↓</span>
                      <span className="hidden lg:inline">→</span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
            <p className="sr-only">
              Propósito → Activos → Contenido → Tráfico → Relación → Conversión → Análisis
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <p className="text-body font-semibold text-white mb-5">
                Cada etapa tiene una función:
              </p>
              <ul className="space-y-3.5 text-body-sm md:text-body text-white/85">
                {FLOW_STAGES.map((stage) => (
                  <li
                    key={stage.step}
                    className="flex items-baseline gap-3.5 pb-3 border-b border-white/10 last:border-b-0"
                  >
                    <span className="font-mono text-xs text-[#f4b925] tabular-nums flex-shrink-0">
                      {stage.step}
                    </span>
                    <span>{stage.functionText}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-5 text-body text-white/80 leading-relaxed max-w-[65ch]">
              <p>
                Este recorrido no debe interpretarse como una secuencia rígida. En la práctica, algunos procesos funcionan simultáneamente, se retroalimentan o necesitan recorridos diferentes.
              </p>
              <p>
                Por ejemplo, una persona puede descubrir un proyecto mediante un artículo, regresar posteriormente desde otro canal, suscribirse a una lista de correo y realizar una compra después de recibir información adicional.
              </p>
              <p>
                La arquitectura debe contemplar esas relaciones y evitar que cada actividad funcione como un punto aislado.
              </p>
              <div className="pt-5 border-t border-white/20">
                <p className="text-h4 font-serif font-bold text-white leading-relaxed">
                  La clave no es disponer de más componentes, sino conseguir que los componentes necesarios trabajen con una función definida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — MODELOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                Sección 05 · Modelos
              </span>
            </div>

            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 max-w-3xl text-balance">
              Tres modelos de sistemas digitales
            </h2>

            <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch]">
              <p>
                Existen distintas maneras de organizar un proyecto digital. Los siguientes modelos permiten comprender tres estructuras posibles y las relaciones que pueden establecerse entre sus componentes.
              </p>
              <p className="font-medium text-[#174532]">
                No son fórmulas universales ni soluciones automáticas. Son modelos de referencia que deben adaptarse a cada proyecto.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {SYSTEM_MODELS.map((model, idx) => (
              <article
                key={model.code}
                className={`border border-[#174532]/15 rounded-md overflow-hidden ${
                  idx % 2 === 1 ? 'bg-[#dae7df]/15' : 'bg-white'
                }`}
              >
                {/* Header bar of model */}
                <div className="px-6 py-5 md:px-8 border-b border-[#174532]/12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-[#dae7df]/20">
                  <h3 className="text-h2 font-bold font-serif text-[#174532] tabular-nums">
                    {model.heading}
                  </h3>
                  <div
                    className="flex items-center flex-wrap gap-1.5 text-[12px] font-medium text-[#1f513a]"
                    aria-hidden="true"
                  >
                    {model.flowNodes.map((node, nIdx) => (
                      <React.Fragment key={node}>
                        <span>{node}</span>
                        {nIdx < model.flowNodes.length - 1 && (
                          <span className="text-[#4db380]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Two-zone asymmetric architectural dossier */}
                <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  <div className="lg:col-span-7 space-y-4 max-w-[65ch]">
                    <p className="text-subtitle font-semibold text-[#174532] leading-snug">
                      {model.lead}
                    </p>
                    <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed">
                      {model.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    <p className="pt-4 border-t border-[#174532]/12 text-body-sm font-medium text-[#174532] leading-relaxed">
                      {model.goal}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-white border border-[#174532]/12 rounded-sm p-6">
                    <p className="text-[11.5px] uppercase tracking-[0.12em] font-bold text-[#174532] mb-4 pb-2.5 border-b border-[#174532]/10">
                      Componentes principales:
                    </p>
                    <ul className="space-y-2.5 text-body-sm text-[#1b1b1b]/85 leading-relaxed">
                      {model.components.map((comp) => (
                        <li key={comp} className="flex items-start gap-2.5">
                          <span className="text-[#4db380] font-bold mt-0.5 flex-shrink-0" aria-hidden="true">
                            —
                          </span>
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — METODOLOGÍA */}
      <section className="py-16 md:py-24 bg-[#dae7df]/20 border-y border-[#174532]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                Sección 06 · Metodología
              </span>
            </div>

            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 max-w-3xl text-balance">
              Cinco etapas para construir un sistema digital
            </h2>

            <div className="space-y-4 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch]">
              <p>
                Una arquitectura digital no debería surgir de la acumulación de herramientas ni de decisiones improvisadas. Su desarrollo requiere un proceso que permita avanzar desde la definición inicial hasta la evaluación de su funcionamiento.
              </p>
              <p className="font-medium text-[#174532]">
                Podemos organizar ese trabajo en cinco etapas.
              </p>
            </div>
          </div>

          <div className="relative space-y-6">
            {/* Vertical connecting architectural line on desktop/tablet */}
            <div
              className="hidden sm:block absolute left-5 top-8 bottom-8 w-[1px] bg-[#174532]/20"
              aria-hidden="true"
            ></div>

            {METHODOLOGY_STAGES.map((stage) => (
              <article
                key={stage.num}
                className="relative sm:pl-16"
              >
                <div
                  className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-[#174532] text-[#f4b925] font-mono text-xs font-bold items-center justify-center tabular-nums border-2 border-[#dae7df]"
                  aria-hidden="true"
                >
                  {stage.num}
                </div>

                <div className="bg-white border border-[#174532]/15 rounded-md p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-h2 font-bold font-serif text-[#174532] mb-1.5 tabular-nums">
                      {stage.heading}
                    </h3>
                    <p className="text-subtitle font-semibold text-[#1f513a]">
                      {stage.lead}
                    </p>
                  </div>

                  <div className="space-y-3.5 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch] mb-6">
                    {stage.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  <p className="pt-4 border-t border-[#174532]/12 text-body-sm text-[#174532] leading-relaxed">
                    <strong className="font-semibold">Resultado de esta etapa:</strong> {stage.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — CONOCIMIENTO Y APLICACIÓN */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 07 · Conocimiento y aplicación
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-10 max-w-3xl text-balance">
            Del conocimiento a una estructura funcional
          </h2>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 space-y-5 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
              <p>
                Comprender las disciplinas que intervienen en un proyecto digital es un paso importante. Pero conocer marketing, SEO, creación de contenidos, inteligencia artificial o monetización no significa que sepamos integrarlos automáticamente.
              </p>
              <p>
                Cada disciplina aporta conocimientos específicos. La arquitectura permite determinar dónde intervienen, qué función cumplen y cómo se relacionan con el resto del proyecto.
              </p>
              <p>
                Por ejemplo, el SEO puede contribuir a la adquisición de tráfico, el marketing de contenidos puede organizar la comunicación de una propuesta, el email marketing puede desarrollar una relación con la audiencia y la afiliación puede formar parte del mecanismo de monetización.
              </p>
              <p className="font-semibold text-[#174532]">
                Ninguna de estas disciplinas necesita funcionar de manera aislada.
              </p>
              <p>
                La aplicación requiere comprender los fundamentos, seleccionar los conocimientos relevantes y conectarlos según las necesidades del proyecto.
              </p>
              <p>
                Por eso, el aprendizaje y la construcción de sistemas son dos dimensiones complementarias: una permite desarrollar competencias; la otra ayuda a organizarlas dentro de una estructura.
              </p>
            </div>

            {/* Explanatory discipline-to-function mapping diagram */}
            <div className="lg:col-span-5 bg-[#dae7df]/20 border border-[#174532]/15 rounded-md p-6 md:p-7">
              <p className="text-[11.5px] uppercase tracking-[0.12em] font-bold text-[#174532] mb-5 pb-3 border-b border-[#174532]/12">
                Función de cada disciplina en la estructura
              </p>
              <div className="space-y-3">
                {DISCIPLINE_LINKS.map((item) => (
                  <div
                    key={item.discipline}
                    className="bg-white border border-[#174532]/12 rounded-sm p-3.5 flex items-center justify-between gap-3"
                  >
                    <span className="font-serif font-bold text-sm text-[#174532]">
                      {item.discipline}
                    </span>
                    <span className="text-[#4db380] font-mono text-xs flex-shrink-0" aria-hidden="true">
                      →
                    </span>
                    <span className="text-xs sm:text-[13px] text-[#1b1b1b]/80 text-right">
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#174532]/12 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block uppercase tracking-wider font-semibold text-[#4db380] mb-1">
                    Aprendizaje
                  </span>
                  <span className="text-[#174532] font-medium">Desarrolla competencias</span>
                </div>
                <div>
                  <span className="block uppercase tracking-wider font-semibold text-[#4db380] mb-1">
                    Sistema
                  </span>
                  <span className="text-[#174532] font-medium">Organiza la estructura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — DIFERENCIA ESTRUCTURAL */}
      <section className="py-16 md:py-24 bg-[#dae7df]/15 border-t border-[#174532]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Sección 08 · Diferencia estructural
            </span>
          </div>

          <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-8 max-w-3xl text-balance">
            Un proyecto basado en acciones o un sistema organizado
          </h2>

          <div className="space-y-5 text-body text-[#1b1b1b]/80 leading-relaxed max-w-[68ch] mb-12">
            <p>
              Un proyecto puede depender en gran medida de las acciones que su creador realiza cada día.
            </p>
            <p>
              Publicar, buscar oportunidades, promocionar productos, responder consultas y gestionar herramientas son actividades que pueden mantenerlo en funcionamiento. Sin embargo, cuando no están organizadas dentro de procesos definidos, su continuidad depende de la intervención constante y de decisiones que se repiten.
            </p>
            <p className="font-semibold text-[#174532]">
              Un sistema introduce una lógica diferente.
            </p>
            <p>
              Las actividades se organizan según funciones, prioridades y relaciones. Los procesos se definen, los recursos se conectan y las tareas pueden desarrollarse siguiendo una estructura comprensible.
            </p>
            <p>
              Esto no significa que un sistema funcione sin supervisión ni que elimine el trabajo necesario para mantener un proyecto. Significa que existe una organización que permite comprender cómo se desarrolla la actividad, detectar problemas y tomar decisiones con mayor criterio.
            </p>
          </div>

          {/* Responsive Comparison Table (zero horizontal overflow on mobile) */}
          <div className="bg-white border border-[#174532]/20 rounded-md overflow-hidden mb-10">
            <table className="w-full border-collapse text-left">
              <thead className="hidden sm:table-header-group bg-[#174532] text-white">
                <tr>
                  <th scope="col" className="w-1/2 py-4 px-6 font-serif text-base font-bold border-r border-white/15">
                    Proyecto basado en acciones aisladas
                  </th>
                  <th scope="col" className="w-1/2 py-4 px-6 font-serif text-base font-bold text-[#dae7df]">
                    Sistema digital organizado
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#174532]/15">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="block sm:table-row odd:bg-white even:bg-[#dae7df]/10">
                    <td className="block sm:table-cell py-4 px-5 sm:px-6 text-body-sm md:text-body text-[#1b1b1b]/80 sm:border-r border-[#174532]/15">
                      <span className="block sm:hidden text-[11px] uppercase tracking-wider font-semibold text-[#1b1b1b]/55 mb-1">
                        Proyecto basado en acciones aisladas
                      </span>
                      {row.isolated}
                    </td>
                    <td className="block sm:table-cell py-4 px-5 sm:px-6 text-body-sm md:text-body font-medium text-[#174532] border-t sm:border-t-0 border-[#174532]/10">
                      <span className="block sm:hidden text-[11px] uppercase tracking-wider font-semibold text-[#4db380] mb-1">
                        Sistema digital organizado
                      </span>
                      {row.organized}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-subtitle font-bold text-[#174532] leading-relaxed max-w-[68ch]">
            La diferencia no consiste en trabajar menos por definición. Consiste en organizar mejor el trabajo y comprender cómo contribuye cada actividad al proyecto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Systems;
