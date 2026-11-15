import React, { useState } from 'react';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';

interface GrowthViewProps {
  category: BookCategory;
}

const TRAFFIC_ASPECTS = [
  {
    index: '01',
    term: 'Procedencia:',
    detail: 'permite identificar desde qué canales llegan los visitantes.',
  },
  {
    index: '02',
    term: 'Intención:',
    detail: 'ayuda a comprender qué necesidad o interés puede haber motivado la visita.',
  },
  {
    index: '03',
    term: 'Comportamiento:',
    detail: 'muestra cómo interactúan las personas con los contenidos disponibles.',
  },
  {
    index: '04',
    term: 'Recurrencia:',
    detail: 'permite observar si algunos usuarios vuelven al proyecto.',
  },
  {
    index: '05',
    term: 'Relevancia:',
    detail: 'ayuda a valorar si las visitas corresponden al público al que se dirige nuestra propuesta.',
  },
];

const ACQUISITION_CHANNELS = [
  {
    index: '01',
    title: 'Motores de búsqueda',
    paragraphs: [
      'Los buscadores permiten que las personas encuentren páginas relacionadas con sus consultas. Cuando un contenido responde de forma pertinente a una necesidad de información, puede convertirse en una puerta de entrada al proyecto.',
      'La visibilidad orgánica puede tener continuidad, aunque depende de múltiples factores y no garantiza una posición permanente. Su desarrollo requiere trabajar la relevancia, la utilidad y la organización de los contenidos.',
    ],
  },
  {
    index: '02',
    title: 'Redes sociales y plataformas de distribución',
    paragraphs: [
      'Las redes sociales facilitan la difusión de publicaciones y permiten llegar a personas que quizá todavía no conocen el sitio web. Su funcionamiento está condicionado por las características de cada plataforma, sus sistemas de recomendación y las formas de interacción de sus usuarios.',
      'Estos canales pueden ampliar el alcance de un contenido, pero conviene recordar que la distribución no equivale a construir una relación propia y permanente con la audiencia.',
    ],
  },
  {
    index: '03',
    title: 'Referencias y recomendaciones',
    paragraphs: [
      'Los visitantes también pueden llegar desde otros sitios web, publicaciones, comunidades o recomendaciones personales. Estas referencias pueden aportar descubrimiento y contexto, especialmente cuando proceden de espacios relacionados con el tema del proyecto.',
    ],
  },
  {
    index: '04',
    title: 'Tráfico directo',
    paragraphs: [
      'Se produce cuando las personas acceden directamente a un sitio, por ejemplo, al escribir su dirección o utilizar un acceso guardado. Puede reflejar familiaridad previa con el proyecto, aunque su interpretación depende de cómo se registren y clasifiquen las visitas.',
    ],
  },
];

const DIAGRAM_A_SOURCES = [
  { label: 'Buscadores', role: 'Consultas activas de información' },
  { label: 'Redes sociales', role: 'Descubrimiento en conversación social' },
  { label: 'Referencias', role: 'Enlaces y recomendaciones externas' },
  { label: 'Tráfico directo', role: 'Acceso voluntario por familiaridad' },
  { label: 'Plataformas de distribución', role: 'Circulación en terceros canales' },
];

const ORGANIC_DISCOVERY_ELEMENTS = [
  'La correspondencia entre el contenido y la intención de búsqueda.',
  'La claridad de los títulos y encabezados.',
  'La profundidad y utilidad de la información.',
  'La organización de las páginas y sus relaciones internas.',
  'La actualización de contenidos cuando resulta necesaria.',
  'La experiencia de navegación y el acceso a la información.',
];

const CONTENT_FUNCTIONS = [
  {
    index: '01',
    term: 'Informar:',
    detail: 'presentar datos, conceptos y explicaciones que permitan comprender un tema.',
  },
  {
    index: '02',
    term: 'Educar:',
    detail: 'desarrollar conocimientos y facilitar la comprensión progresiva de una disciplina.',
  },
  {
    index: '03',
    term: 'Orientar:',
    detail: 'ayudar a comparar alternativas y valorar diferentes posibilidades.',
  },
  {
    index: '04',
    term: 'Resolver problemas:',
    detail: 'abordar necesidades concretas mediante información útil.',
  },
  {
    index: '05',
    term: 'Profundizar:',
    detail: 'ampliar una cuestión y ofrecer una perspectiva más completa.',
  },
];

const DIAGRAM_C_CYCLE = [
  { step: '01', label: 'Investigación', note: 'Preguntas y territorio' },
  { step: '02', label: 'Planificación', note: 'Estructura temática' },
  { step: '03', label: 'Creación', note: 'Desarrollo con propósito' },
  { step: '04', label: 'Publicación', note: 'Disponibilidad y acceso' },
  { step: '05', label: 'Actualización', note: 'Revisión y vigencia' },
];

const DIAGRAM_D_CHANNELS = [
  {
    channel: 'Publicación social',
    adaptation: 'Síntesis y enfoque conversacional adaptado a cada red.',
  },
  {
    channel: 'Boletín de correo',
    adaptation: 'Presentación contextual directa para quienes pidieron noticias.',
  },
  {
    channel: 'Recopilación temática',
    adaptation: 'Integración dentro de guías o índices de consulta interna.',
  },
  {
    channel: 'Nuevo contenido derivado',
    adaptation: 'Punto de partida para profundizar en una dimensión específica.',
  },
];

const DIAGRAM_E_EVOLUTION = [
  { step: '01', label: 'Descubrimiento', detail: 'Primer contacto posible' },
  { step: '02', label: 'Visita', detail: 'Lectura o exploración' },
  { step: '03', label: 'Interés', detail: 'Afinidad temática real' },
  { step: '04', label: 'Recurrencia', detail: 'Regreso voluntario' },
  { step: '05', label: 'Relación', detail: 'Vínculo sostenido' },
];

const DIAGRAM_F_EMAIL = [
  { step: '01', label: 'Suscripción voluntaria' },
  { step: '02', label: 'Organización de contactos' },
  { step: '03', label: 'Comunicación relevante' },
  { step: '04', label: 'Interacción' },
  { step: '05', label: 'Continuidad' },
];

const INTEGRATION_PILLARS = [
  {
    index: '01',
    functionTitle: 'Adquisición:',
    functionDetail:
      'atraer visitantes mediante buscadores, redes sociales, referencias y otros canales.',
    discipline: 'Tráfico web',
    diagramNote: 'Facilita que nuevas personas descubran la propuesta editorial.',
  },
  {
    index: '02',
    functionTitle: 'Interés:',
    functionDetail:
      'ofrecer contenidos que respondan a preguntas, necesidades y temas relevantes para la audiencia.',
    discipline: 'Marketing de contenidos',
    diagramNote: 'Aporta información útil y razones reales para permanecer y explorar.',
  },
  {
    index: '03',
    functionTitle: 'Continuidad:',
    functionDetail:
      'mantener una comunicación directa con las personas que deciden seguir recibiendo información.',
    discipline: 'Email marketing',
    diagramNote: 'Preserva un canal propio voluntario sin depender de intermediarios.',
  },
];

const MEASUREMENT_GROUPS = [
  {
    index: '01',
    title: 'Indicadores de adquisición',
    detail:
      'Las visitas, los usuarios y las fuentes de tráfico ayudan a comprender cómo llegan las personas al sitio y cómo evoluciona su descubrimiento.',
    observe: 'Canales de entrada, procedencia y correspondencia con el público objetivo.',
  },
  {
    index: '02',
    title: 'Indicadores de contenido',
    detail:
      'Las páginas consultadas, las consultas que generan visibilidad y las interacciones con los contenidos pueden aportar información sobre qué temas despiertan interés y cómo se comporta la audiencia.',
    observe: 'Páginas leídas, consultas de búsqueda y recorrido entre temas relacionados.',
  },
  {
    index: '03',
    title: 'Indicadores de continuidad',
    detail:
      'Las suscripciones, la recurrencia de visitas y las interacciones con los correos permiten observar diferentes aspectos de la relación que se desarrolla con el público.',
    observe: 'Evolución de suscriptores voluntarios, visitas recurrentes y respuesta a envíos.',
  },
];

const EDITORIAL_PERSPECTIVE_BY_SLUG: Record<string, string> = {
  'ideas-y-consejos-de-trafico-web':
    'Una perspectiva editorial dedicada a la adquisición de visitantes y a las posibilidades de generar tráfico hacia un proyecto digital. Se integra en el ámbito de la visibilidad y el descubrimiento de contenidos.',
  'ideas-maestras-de-trafico-web':
    'Una segunda obra dedicada al territorio del tráfico web, que amplía la colección con otra perspectiva sobre la generación y el desarrollo de visitas hacia propiedades digitales.',
  'el-poder-del-marketing-de-contenidos':
    'El contenido ocupa un lugar central en el desarrollo de una audiencia. Este libro se incorpora a la colección desde la perspectiva del marketing de contenidos y su función dentro de la atracción y la comunicación de valor.',
  'dominando-el-arte-del-email-marketing':
    'El correo electrónico ofrece un canal para mantener el contacto con personas interesadas en un proyecto. Esta obra completa la colección desde la perspectiva de la comunicación directa y la continuidad de la relación con los suscriptores.',
};

const COVER_DIMENSIONS_BY_SLUG: Record<
  string,
  { width: number; height: number; aspectClass: string }
> = {
  'ideas-y-consejos-de-trafico-web': {
    width: 400,
    height: 489,
    aspectClass: 'aspect-[400/489]',
  },
  'ideas-maestras-de-trafico-web': {
    width: 400,
    height: 489,
    aspectClass: 'aspect-[400/489]',
  },
  'el-poder-del-marketing-de-contenidos': {
    width: 400,
    height: 488,
    aspectClass: 'aspect-[400/488]',
  },
  'dominando-el-arte-del-email-marketing': {
    width: 400,
    height: 489,
    aspectClass: 'aspect-[400/489]',
  },
};

const DEFAULT_COVER_DIMENSIONS = { width: 400, height: 489, aspectClass: 'aspect-[400/489]' };

const GrowthView: React.FC<GrowthViewProps> = ({ category }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* HERO EDITORIAL DE CRECIMIENTO */}
      <header className="bg-white border-b border-[#174532]/15 pt-4 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: category.category, href: category.path || '/crecimiento/' },
            ]}
          />

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                Ruta editorial · {category.category}
              </span>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-10 max-w-4xl text-balance">
              Crecimiento digital: cómo atraer audiencia y desarrollar visibilidad en Internet
            </h1>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-8 border-t border-[#174532]/15">
              <div className="lg:col-span-7 space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[66ch]">
                <p>
                  Crecer en Internet no consiste simplemente en conseguir más visitas. Un proyecto digital puede publicar contenidos con regularidad, estar presente en distintas plataformas e incluso recibir un volumen considerable de visitantes sin conseguir desarrollar una audiencia que reconozca su propuesta y mantenga el interés a lo largo del tiempo.
                </p>
                <p>
                  La diferencia está en comprender qué sucede entre el momento en que una persona descubre un proyecto y el momento en que decide volver, explorar sus contenidos o mantener una relación con él.
                </p>
                <p>
                  El crecimiento digital implica trabajar sobre distintas dimensiones que se complementan: conseguir visibilidad, atraer visitantes relevantes, ofrecer contenidos que respondan a sus intereses y desarrollar canales que permitan mantener la comunicación. Cada una cumple una función diferente, pero todas participan en un mismo proceso.
                </p>
                <p>
                  En FG Perspectiva abordamos este territorio desde cuatro perspectivas editoriales: el tráfico web, el marketing de contenidos, la distribución de información y el email marketing. Son disciplinas que permiten comprender cómo un proyecto puede ampliar su alcance y desarrollar una audiencia con mayor continuidad.
                </p>
              </div>

              {/* Recurso visual conceptual discreto SVG + HTML */}
              <div className="lg:col-span-5 bg-[#dae7df]/16 border border-[#174532]/15 rounded-sm p-6 md:p-7">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#174532]/12">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                    Arquitectura de alcance
                  </span>
                  <span className="text-[12px] font-medium text-[#174532]/80">
                    Cuatro dimensiones
                  </span>
                </div>

                <div className="my-5 flex justify-center">
                  <svg
                    viewBox="0 0 320 148"
                    width="320"
                    height="148"
                    role="img"
                    aria-label="Esquema visual conceptual de cuatro ejes que convergen hacia la construcción de una audiencia digital"
                    className="w-full max-w-[320px] h-auto text-[#174532]"
                  >
                    {/* Arcos de circulación hacia el núcleo de audiencia */}
                    <circle
                      cx="160"
                      cy="74"
                      r="62"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.18"
                      strokeWidth="1"
                      strokeDasharray="3 4"
                    />
                    <circle
                      cx="160"
                      cy="74"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.28"
                      strokeWidth="1"
                    />
                    <line
                      x1="44"
                      y1="30"
                      x2="132"
                      y2="62"
                      stroke="currentColor"
                      strokeOpacity="0.45"
                      strokeWidth="1.25"
                    />
                    <line
                      x1="276"
                      y1="30"
                      x2="188"
                      y2="62"
                      stroke="currentColor"
                      strokeOpacity="0.45"
                      strokeWidth="1.25"
                    />
                    <line
                      x1="44"
                      y1="118"
                      x2="132"
                      y2="86"
                      stroke="currentColor"
                      strokeOpacity="0.45"
                      strokeWidth="1.25"
                    />
                    <line
                      x1="276"
                      y1="118"
                      x2="188"
                      y2="86"
                      stroke="currentColor"
                      strokeOpacity="0.45"
                      strokeWidth="1.25"
                    />
                    <circle cx="44" cy="30" r="4" fill="#174532" />
                    <circle cx="276" cy="30" r="4" fill="#174532" />
                    <circle cx="44" cy="118" r="4" fill="#174532" />
                    <circle cx="276" cy="118" r="4" fill="#f4b925" />
                    <circle cx="160" cy="74" r="26" fill="#174532" />
                    <text
                      x="160"
                      y="78"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="11.5"
                      fontFamily="Georgia, serif"
                      fontWeight="bold"
                    >
                      Audiencia
                    </text>
                  </svg>
                </div>

                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 pt-4 border-t border-[#174532]/12 text-[13px]">
                  <div>
                    <dt className="font-semibold text-[#174532]">01 · Tráfico web</dt>
                    <dd className="text-[#1b1b1b]/75 mt-0.5">Descubrimiento y visitas</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#174532]">02 · Contenidos</dt>
                    <dd className="text-[#1b1b1b]/75 mt-0.5">Utilidad y permanencia</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#174532]">03 · Distribución</dt>
                    <dd className="text-[#1b1b1b]/75 mt-0.5">Circulación multicanal</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#174532]">04 · Email marketing</dt>
                    <dd className="text-[#1b1b1b]/75 mt-0.5">Relación directa</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CUERPO EDITORIAL */}
      <article aria-label="Desarrollo editorial de la categoría Crecimiento">
        {/* APARTADO 1: VISIBILIDAD */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                1. La visibilidad: el primer paso para desarrollar un proyecto digital
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Para que un proyecto pueda crecer, primero necesita ser descubierto. Podemos tener una propuesta bien definida, publicar información de calidad y disponer de recursos útiles, pero todo ese trabajo tendrá un alcance limitado si las personas interesadas no encuentran una forma de llegar hasta nosotros.
                </p>
                <p>
                  La visibilidad representa precisamente esa posibilidad de aparecer ante una audiencia potencial. No depende de un único canal ni se consigue necesariamente mediante una acción aislada. Es el resultado de desarrollar una presencia que permita a las personas descubrir nuestro proyecto en diferentes circunstancias.
                </p>
                <p>
                  Alguien puede encontrar un artículo mientras busca una respuesta en Google, descubrir una publicación en una red social, recibir una recomendación o acceder a un sitio web desde otro contenido relacionado. Aunque los recorridos sean distintos, todos tienen algo en común: crean una oportunidad de contacto entre el proyecto y una persona que todavía no lo conocía.
                </p>
                <p>
                  Por eso, crecer exige pensar más allá de la publicación. Necesitamos comprender dónde se encuentra nuestra audiencia, qué temas despiertan su interés y mediante qué canales podemos facilitar el descubrimiento de nuestros contenidos.
                </p>
                <p>
                  La visibilidad tampoco debe confundirse con la popularidad. Alcanzar a muchas personas no siempre significa llegar a quienes realmente pueden encontrar valor en nuestra propuesta. Una presencia digital eficaz necesita combinar alcance y relevancia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 2: COMPRENDER EL TRÁFICO WEB */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-6 max-w-[64ch]">
                <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                  2. Comprender el tráfico web y su función
                </h2>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    El tráfico web representa las visitas que recibe un sitio o una página. Es uno de los indicadores más utilizados para observar la actividad de un proyecto digital, pero su interpretación requiere algo más que consultar el número total de visitantes.
                  </p>
                  <p>
                    No todas las visitas tienen el mismo origen, responden a la misma intención ni producen el mismo tipo de interacción. Una persona puede llegar buscando una respuesta concreta, otra puede descubrir un artículo por recomendación y una tercera puede regresar porque ya conoce el proyecto.
                  </p>
                  <p>
                    Estas diferencias ayudan a comprender por qué el volumen de tráfico, considerado de forma aislada, ofrece una visión incompleta.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#dae7df]/14 border border-[#174532]/15 rounded-sm p-6 md:p-8">
                <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3">
                  Tráfico y calidad de las visitas
                </h3>

                <p className="text-body text-[#1b1b1b]/85 leading-[1.75] mb-5">
                  Para interpretar correctamente el tráfico conviene distinguir varios aspectos:
                </p>

                <ul className="border-y border-[#174532]/15 divide-y divide-[#174532]/12 mb-6 bg-white px-4 rounded-sm">
                  {TRAFFIC_ASPECTS.map((item) => (
                    <li key={item.index} className="py-3.5 flex items-baseline gap-3.5">
                      <span
                        className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] flex-shrink-0"
                        aria-hidden="true"
                      >
                        {item.index}
                      </span>
                      <span className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-relaxed">
                        <strong className="font-semibold text-[#174532]">{item.term}</strong> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Un sitio puede experimentar un aumento de visitas sin que eso represente necesariamente un avance significativo. Si los nuevos visitantes no encuentran información relacionada con sus intereses, es posible que el crecimiento del volumen no se traduzca en una audiencia más comprometida.
                  </p>
                  <p>
                    El objetivo no consiste únicamente en atraer tráfico, sino en conseguir que las visitas tengan sentido dentro del propósito del proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 3: CANALES DE ADQUISICIÓN + DIAGRAMA A */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch] mb-10">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                3. Los canales de adquisición: cómo llegan los visitantes
              </h2>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                El tráfico puede proceder de distintas fuentes. Cada canal tiene características propias, formas de descubrimiento y condiciones de funcionamiento. Comprender esas diferencias permite desarrollar una estrategia de adquisición más equilibrada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {ACQUISITION_CHANNELS.map((channel) => (
                <div
                  key={channel.index}
                  className="bg-white border border-[#174532]/15 rounded-sm p-6 md:p-7"
                >
                  <span
                    className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] tracking-wider block mb-2"
                    aria-hidden="true"
                  >
                    {channel.index}
                  </span>
                  <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                    {channel.title}
                  </h3>
                  <div className="space-y-3.5 text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                    {channel.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-[68ch] mb-10">
              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                No necesitamos depender de todos los canales al mismo tiempo. La elección debe responder al tipo de proyecto, a sus contenidos, a los hábitos de su audiencia y a los recursos disponibles para mantener una actividad coherente.
              </p>
            </div>

            {/* DIAGRAMA A — Fuentes de tráfico y canales de adquisición */}
            <figure className="bg-white border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#174532]/12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                    Diagrama A
                  </p>
                  <p className="font-serif text-[16.5px] font-bold text-[#174532] mt-0.5">
                    Fuentes de tráfico y canales de adquisición
                  </p>
                </div>
                <span className="text-[12.5px] text-[#174532]/80 font-medium">
                  Múltiples puntos de descubrimiento
                </span>
              </div>

              <div
                className="mt-6 grid lg:grid-cols-12 gap-5 items-center"
                role="group"
                aria-label="Diagrama A de fuentes de descubrimiento convergentes hacia el proyecto digital"
              >
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
                  {DIAGRAM_A_SOURCES.map((src, idx) => (
                    <div
                      key={src.label}
                      className={`bg-[#dae7df]/16 border border-[#174532]/15 rounded-sm p-4 ${
                        idx === DIAGRAM_A_SOURCES.length - 1 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <p className="font-serif font-bold text-[14.5px] text-[#174532]">
                        {src.label}
                      </p>
                      <p className="text-[13px] text-[#1b1b1b]/75 mt-1 leading-snug">{src.role}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="lg:col-span-1 flex items-center justify-center text-[#174532] py-1"
                  aria-hidden="true"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="hidden lg:block"
                  >
                    <path
                      d="M4 16H27M27 16L20 9M27 16L20 23"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="lg:hidden"
                  >
                    <path
                      d="M12 4V20M12 20L6 14M12 20L18 14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="lg:col-span-4 bg-[#174532] text-white rounded-sm p-6 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#f4b925] mb-2">
                    Destino común
                  </span>
                  <p className="font-serif font-bold text-[18px] leading-snug mb-2">
                    Proyecto digital propio
                  </p>
                  <p className="text-[13.5px] text-white/85 leading-relaxed">
                    Cada fuente aporta visitantes con contextos e intenciones distintas; el equilibrio evita depender de un único canal.
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* APARTADO 4: VISIBILIDAD ORGÁNICA + DIAGRAMA B */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                4. Visibilidad orgánica y descubrimiento mediante buscadores
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Los motores de búsqueda representan una vía importante para descubrir contenidos porque conectan las consultas de las personas con páginas que pueden responder a sus necesidades.
                </p>
                <p>
                  Para desarrollar visibilidad orgánica no basta con incluir palabras clave en un texto. Necesitamos comprender qué busca el usuario, qué tipo de respuesta espera y qué información puede resolver su consulta de manera clara y suficiente.
                </p>
                <p>
                  La intención de búsqueda es una pieza fundamental de este proceso. Una persona que busca una definición necesita una respuesta diferente de quien compara alternativas o intenta resolver un problema concreto. Comprender esa diferencia permite crear contenidos mejor orientados.
                </p>
                <p>
                  También importa la organización temática. Cuando las páginas de un sitio mantienen una relación lógica, desarrollan temas relacionados y ofrecen recorridos de lectura comprensibles, resulta más sencillo construir una presencia editorial coherente.
                </p>
                <p>Algunos elementos que intervienen en este trabajo son:</p>
              </div>

              <ul className="my-7 grid sm:grid-cols-2 gap-3">
                {ORGANIC_DISCOVERY_ELEMENTS.map((item, idx) => (
                  <li
                    key={item}
                    className="bg-[#dae7df]/14 border border-[#174532]/15 rounded-sm px-4 py-3.5 flex items-baseline gap-3 text-body-sm md:text-body text-[#1b1b1b]/85 leading-relaxed"
                  >
                    <span
                      className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] flex-shrink-0"
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                El posicionamiento orgánico no debe entenderse como una colección de ajustes independientes. Forma parte de una estrategia de visibilidad en la que la calidad editorial, la estructura del sitio y la utilidad para el usuario tienen que trabajar en la misma dirección.
              </p>
            </div>

            {/* DIAGRAMA B — Intención de búsqueda, contenido y descubrimiento */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama B
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Intención de búsqueda, contenido y descubrimiento
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-3"
                role="group"
                aria-label="Diagrama B de relación entre necesidad de información, contenido pertinente y descubrimiento del proyecto"
              >
                <div className="flex-1 min-w-0 bg-[#dae7df]/16 border border-[#174532]/18 rounded-sm p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1.5">
                    01 · Demanda del usuario
                  </span>
                  <p className="font-serif font-bold text-[15.5px] text-[#174532] mb-2">
                    Necesidad de información
                  </p>
                  <p className="text-[13.5px] text-[#1b1b1b]/80 leading-relaxed">
                    Consulta concreta motivada por una duda, definición, comparación o problema.
                  </p>
                </div>

                <div
                  className="flex items-center justify-center text-[#174532] font-semibold text-sm px-1"
                  aria-hidden="true"
                >
                  <span className="hidden lg:inline">⟷</span>
                  <span className="inline lg:hidden">↕</span>
                </div>

                <div className="flex-1 min-w-0 bg-white border border-[#174532]/30 rounded-sm p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1.5">
                    02 · Respuesta editorial
                  </span>
                  <p className="font-serif font-bold text-[15.5px] text-[#174532] mb-2">
                    Contenido estructurado y útil
                  </p>
                  <p className="text-[13.5px] text-[#1b1b1b]/80 leading-relaxed">
                    Correspondencia real con la intención, claridad expositiva y organización temática interna.
                  </p>
                </div>

                <div
                  className="flex items-center justify-center text-[#174532] font-semibold text-sm px-1"
                  aria-hidden="true"
                >
                  <span className="hidden lg:inline">→</span>
                  <span className="inline lg:hidden">↓</span>
                </div>

                <div className="flex-1 min-w-0 bg-[#174532] text-white border border-[#174532] rounded-sm p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#f4b925] block mb-1.5">
                    03 · Oportunidad orgánica
                  </span>
                  <p className="font-serif font-bold text-[15.5px] mb-2">
                    Descubrimiento del proyecto
                  </p>
                  <p className="text-[13.5px] text-white/90 leading-relaxed">
                    El buscador conecta la consulta con la página pertinente y abre una puerta de entrada al sitio.
                  </p>
                </div>
              </div>

              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/75 leading-relaxed max-w-[68ch]">
                El descubrimiento depende de alinear la intención real de la búsqueda con la profundidad, estructura y utilidad de la página.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* APARTADO 5: MARKETING DE CONTENIDOS */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                5. Marketing de contenidos: atraer mediante valor
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Conseguir que una persona llegue hasta una página es solamente una parte del proceso. También necesitamos ofrecerle una razón para permanecer, explorar otros contenidos o reconocer que nuestro proyecto puede resultarle útil.
                </p>
                <p>
                  El marketing de contenidos se ocupa de desarrollar y distribuir información con una finalidad definida. No consiste simplemente en publicar artículos, vídeos o mensajes con frecuencia. Su valor está en la capacidad de abordar temas relevantes para una audiencia y hacerlo con una perspectiva reconocible.
                </p>
                <p>
                  Un contenido puede explicar un concepto, resolver una duda, orientar una decisión, presentar un procedimiento o ayudar a comprender un problema. Su función depende de la necesidad que intenta atender y del lugar que ocupa dentro de la propuesta editorial.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-4 leading-snug">
                  Diferentes funciones del contenido
                </h3>

                <p className="text-body text-[#1b1b1b]/85 leading-[1.75] mb-6">
                  Los contenidos pueden desempeñar distintas funciones:
                </p>

                <ul className="my-6 border-y border-[#174532]/18 divide-y divide-[#174532]/12 bg-white px-5 rounded-sm">
                  {CONTENT_FUNCTIONS.map((item) => (
                    <li key={item.index} className="py-4 flex items-baseline gap-4">
                      <span
                        className="text-[12px] font-semibold tabular-nums text-[#1f513a] tracking-wider flex-shrink-0"
                        aria-hidden="true"
                      >
                        {item.index}
                      </span>
                      <span className="text-body text-[#1b1b1b]/85 leading-[1.7]">
                        <strong className="font-semibold text-[#174532]">{item.term}</strong> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] mt-6">
                  <p>
                    No todos los contenidos tienen que cumplir todas estas funciones. Una estrategia editorial necesita variedad, pero también coherencia. Cada publicación debe tener un propósito reconocible y aportar algo dentro del conjunto.
                  </p>
                  <p>
                    La calidad no depende exclusivamente de la extensión. Un contenido breve puede responder perfectamente a una consulta concreta, mientras que un tema complejo puede requerir un desarrollo más amplio. Lo importante es que la información sea pertinente, comprensible y suficiente para su finalidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 6: ESTRATEGIA EDITORIAL + DIAGRAMA C */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                6. De la publicación aislada a una estrategia editorial
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Publicar de manera ocasional puede generar actividad, pero no siempre permite desarrollar una presencia temática sólida. Cuando los contenidos se producen sin una dirección común, el resultado puede convertirse en una colección de páginas que apenas mantienen relación entre sí.
                </p>
                <p>
                  Una estrategia editorial introduce una estructura. Permite decidir qué temas abordar, qué necesidades atender y cómo organizar las publicaciones para que cada una contribuya al desarrollo del proyecto.
                </p>
                <p>
                  El primer paso consiste en identificar los territorios temáticos que tienen sentido para nuestra audiencia. A partir de ahí podemos organizar los contenidos en áreas, preguntas y subtemas relacionados.
                </p>
                <p>
                  Esta organización facilita la creación de materiales complementarios. Un artículo puede introducir una cuestión, otro puede profundizar en un aspecto específico y una tercera publicación puede abordar una aplicación práctica. De esta manera, el usuario encuentra más oportunidades para explorar el tema sin depender de una única página.
                </p>
                <p>
                  La planificación también permite distribuir mejor los esfuerzos. Podemos identificar contenidos que necesitan actualización, temas que todavía no están suficientemente desarrollados y publicaciones que podrían complementarse entre sí.
                </p>
                <p>
                  Una estrategia editorial no es un calendario rígido. Es una orientación que ayuda a mantener la coherencia y a decidir qué merece nuestra atención.
                </p>
              </div>
            </div>

            {/* DIAGRAMA C — Ciclo editorial */}
            <figure className="mt-10 bg-[#dae7df]/14 border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama C
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Ciclo editorial continuo
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama C de ciclo editorial: Investigación, Planificación, Creación, Publicación y Actualización"
              >
                {DIAGRAM_C_CYCLE.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div
                      className={`flex-1 min-w-0 rounded-sm px-4 py-3.5 flex flex-col justify-between ${
                        idx === DIAGRAM_C_CYCLE.length - 1
                          ? 'bg-[#174532] text-white border border-[#174532]'
                          : 'bg-white border border-[#174532]/18'
                      }`}
                    >
                      <span
                        className={`text-[10.5px] font-semibold tabular-nums uppercase tracking-widest mb-1 ${
                          idx === DIAGRAM_C_CYCLE.length - 1 ? 'text-[#f4b925]' : 'text-[#1f513a]'
                        }`}
                      >
                        Etapa {item.step}
                      </span>
                      <div>
                        <p
                          className={`font-serif text-[14.5px] font-bold leading-snug ${
                            idx === DIAGRAM_C_CYCLE.length - 1 ? 'text-white' : 'text-[#174532]'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-[12.5px] mt-1 ${
                            idx === DIAGRAM_C_CYCLE.length - 1
                              ? 'text-white/85'
                              : 'text-[#1b1b1b]/75'
                          }`}
                        >
                          {item.note}
                        </p>
                      </div>
                    </div>
                    {idx < DIAGRAM_C_CYCLE.length - 1 && (
                      <div
                        className="flex items-center justify-center text-[#174532] font-semibold text-sm select-none px-0.5 py-0.5 lg:py-0"
                        aria-hidden="true"
                      >
                        <span className="hidden lg:inline">→</span>
                        <span className="inline lg:hidden">↓</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-4 bg-white border border-[#174532]/15 rounded-sm px-4 py-3 flex items-center justify-between gap-3 text-[13px] text-[#174532]">
                <span className="font-medium">
                  Retorno del ciclo: La actualización retroalimenta la investigación y la planificación de nuevos contenidos complementarios.
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0 text-[#174532]"
                  aria-hidden="true"
                >
                  <path
                    d="M16 10A6 6 0 1 1 14.2 5.7M16 3.5V6.5H13"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </figure>
          </div>
        </section>

        {/* APARTADO 7: DISTRIBUCIÓN DE CONTENIDOS + DIAGRAMA D */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                7. Distribución: conseguir que el contenido encuentre su audiencia
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Crear un contenido y conseguir que llegue a las personas interesadas son dos actividades relacionadas, pero diferentes.
                </p>
                <p>
                  La publicación marca el momento en que un material queda disponible. La distribución comprende las acciones que facilitan su descubrimiento y circulación a través de distintos canales.
                </p>
                <p>
                  Un artículo publicado en un sitio web puede difundirse mediante una publicación social, incluirse en un boletín, formar parte de una recopilación temática o servir como referencia para desarrollar otro contenido. Cada adaptación debe respetar las características del canal y mantener la utilidad del material original.
                </p>
                <p>
                  La distribución también permite aprovechar mejor el trabajo editorial. Un contenido que conserva su relevancia puede volver a difundirse, actualizarse o utilizarse como punto de partida para una nueva publicación.
                </p>
                <p>
                  Sin embargo, distribuir no significa reproducir exactamente el mismo mensaje en todas partes. Cada plataforma tiene formatos, contextos y hábitos de consumo diferentes. La adaptación debe facilitar el acceso a la información, no limitarse a multiplicar publicaciones idénticas.
                </p>
                <p>
                  Una estrategia de crecimiento necesita considerar la distribución desde el momento en que se planifica el contenido, en lugar de dejarla como una actividad improvisada después de publicar.
                </p>
              </div>
            </div>

            {/* DIAGRAMA D — Distribución de contenidos */}
            <figure className="mt-10 bg-white border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama D
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-6">
                Distribución y adaptación de contenidos sin perder su finalidad
              </p>

              <div
                className="space-y-4"
                role="group"
                aria-label="Diagrama D: adaptación de un contenido principal hacia cuatro canales de distribución"
              >
                <div className="bg-[#174532] text-white rounded-sm p-5 max-w-2xl mx-auto text-center">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#f4b925] block mb-1">
                    Pieza de origen
                  </span>
                  <p className="font-serif font-bold text-[16px]">
                    Contenido principal en propiedad propia
                  </p>
                  <p className="text-[13px] text-white/85 mt-1">
                    Conserva su utilidad editorial y propósito central como referencia estable.
                  </p>
                </div>

                <div className="flex justify-center text-[#174532]/65" aria-hidden="true">
                  <svg
                    width="360"
                    height="22"
                    viewBox="0 0 360 22"
                    fill="none"
                    className="max-w-full"
                  >
                    <path
                      d="M180 0V11M45 11H315M45 11V21M135 11V21M225 11V21M315 11V21"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    />
                  </svg>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {DIAGRAM_D_CHANNELS.map((item, idx) => (
                    <div
                      key={item.channel}
                      className="bg-[#dae7df]/14 border border-[#174532]/15 rounded-sm p-4"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">
                        Vía {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="font-serif font-bold text-[14.5px] text-[#174532] mb-1.5">
                        {item.channel}
                      </p>
                      <p className="text-[13px] text-[#1b1b1b]/75 leading-relaxed">
                        {item.adaptation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <figcaption className="mt-4 pt-3.5 border-t border-[#174532]/10 text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                Adaptar formato y contexto facilita el acceso desde cada plataforma respetando los hábitos de lectura de su entorno.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* APARTADO 8: CONSTRUIR UNA AUDIENCIA + DIAGRAMA E */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                8. Construir una audiencia, no solamente acumular visitas
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una visita representa un contacto con nuestro proyecto. Una audiencia, en cambio, implica un conjunto de personas que mantiene algún grado de interés, reconocimiento o relación con lo que ofrecemos.
                </p>
                <p>
                  No todas las personas que llegan a una página desean volver. Algunas encuentran la respuesta que buscaban y continúan con sus actividades. Otras descubren nuevos contenidos, reconocen afinidad con el tema o deciden seguir recibiendo información.
                </p>
                <p>
                  Esa diferencia es importante porque el crecimiento no termina cuando conseguimos atraer visitantes. También debemos comprender qué puede motivar a las personas a mantener el interés.
                </p>
                <p>
                  La utilidad de los contenidos, la coherencia temática, la claridad de la propuesta y la confianza que transmite un proyecto contribuyen a desarrollar esa relación.
                </p>
                <p>
                  Una audiencia no se construye únicamente mediante cifras de seguidores o suscriptores. También importa que exista correspondencia entre los temas que abordamos y los intereses de las personas que nos siguen.
                </p>
                <p>
                  Por eso, desarrollar audiencia requiere una perspectiva de continuidad. Necesitamos ofrecer motivos para regresar, descubrir nuevos contenidos y mantener el contacto de forma voluntaria.
                </p>
              </div>
            </div>

            {/* DIAGRAMA E — Evolución de visitante a audiencia */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama E
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Evolución conceptual de visitante a audiencia
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama E de progresión conceptual: Descubrimiento, Visita, Interés, Recurrencia y Relación"
              >
                {DIAGRAM_E_EVOLUTION.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div
                      className={`flex-1 min-w-0 rounded-sm px-4 py-3.5 flex flex-col justify-between ${
                        idx === DIAGRAM_E_EVOLUTION.length - 1
                          ? 'bg-[#174532] text-white border border-[#174532]'
                          : 'bg-[#dae7df]/16 border border-[#174532]/18'
                      }`}
                    >
                      <span
                        className={`text-[10.5px] font-semibold tabular-nums uppercase tracking-widest mb-1 ${
                          idx === DIAGRAM_E_EVOLUTION.length - 1
                            ? 'text-[#f4b925]'
                            : 'text-[#1f513a]'
                        }`}
                      >
                        Estadio {item.step}
                      </span>
                      <div>
                        <p
                          className={`font-serif text-[14.5px] font-bold leading-snug ${
                            idx === DIAGRAM_E_EVOLUTION.length - 1
                              ? 'text-white'
                              : 'text-[#174532]'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-[12.5px] mt-1 ${
                            idx === DIAGRAM_E_EVOLUTION.length - 1
                              ? 'text-white/85'
                              : 'text-[#1b1b1b]/75'
                          }`}
                        >
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    {idx < DIAGRAM_E_EVOLUTION.length - 1 && (
                      <div
                        className="flex items-center justify-center text-[#174532] font-semibold text-sm select-none px-0.5 py-0.5 lg:py-0"
                        aria-hidden="true"
                      >
                        <span className="hidden lg:inline">→</span>
                        <span className="inline lg:hidden">↓</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/75 leading-relaxed max-w-[68ch]">
                Recorrido conceptual que depende del interés real y de la decisión voluntaria del usuario en cada contacto; no constituye un avance automático ni una conversión garantizada.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* APARTADO 9: EMAIL MARKETING + DIAGRAMA F */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                9. Email marketing: desarrollar una relación directa
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El correo electrónico permite establecer un canal de comunicación con personas que han decidido recibir información de un proyecto. A diferencia de una publicación abierta en una plataforma, el mensaje llega a una dirección de correo proporcionada voluntariamente por el suscriptor.
                </p>
                <p>
                  Esta característica convierte al email marketing en una herramienta relevante para mantener la relación con una audiencia. No depende exclusivamente de que una persona vuelva a encontrar una publicación en un buscador o una red social: permite enviar información directamente a quienes han aceptado recibirla.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                  La lista de correo como canal de comunicación
                </h3>
                <div className="space-y-3.5 text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                  <p>
                    Una lista de correo no debería entenderse simplemente como una acumulación de direcciones. Representa un grupo de personas que ha manifestado interés en mantener algún tipo de comunicación con nosotros.
                  </p>
                  <p>
                    Su desarrollo requiere transparencia, consentimiento y respeto por las preferencias de los suscriptores. También exige ofrecer una razón clara para recibir los mensajes y facilitar la posibilidad de cancelar la suscripción.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                  La relevancia de los mensajes
                </h3>
                <div className="space-y-3.5 text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                  <p>
                    La frecuencia y el contenido de los correos deben responder al propósito del proyecto y a las expectativas creadas. Enviar mensajes de forma constante no garantiza una relación de calidad.
                  </p>
                  <p>
                    Podemos utilizar este canal para compartir nuevos contenidos, desarrollar temas, presentar recursos, comunicar novedades o mantener informada a nuestra audiencia. La elección depende de la propuesta editorial y de lo que realmente pueda resultar útil para los destinatarios.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                  Segmentación y continuidad
                </h3>
                <div className="space-y-3.5 text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                  <p>
                    No todas las personas de una lista tienen los mismos intereses ni se encuentran en el mismo momento de su relación con el proyecto. La segmentación permite organizar la comunicación según criterios pertinentes, siempre respetando el consentimiento y las normas aplicables.
                  </p>
                  <p>
                    El objetivo no es enviar más mensajes, sino facilitar una comunicación más relevante. Una relación de email marketing bien planteada se desarrolla mediante la utilidad, la coherencia y el respeto por el tiempo de quienes reciben los correos.
                  </p>
                </div>
              </div>
            </div>

            {/* DIAGRAMA F — Arquitectura básica del email marketing */}
            <figure className="bg-white border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama F
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Arquitectura básica del email marketing
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama F de arquitectura del email marketing con consentimiento y baja accesible"
              >
                {DIAGRAM_F_EMAIL.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div
                      className={`flex-1 min-w-0 rounded-sm px-4 py-3.5 flex flex-col justify-center ${
                        idx === 0 || idx === DIAGRAM_F_EMAIL.length - 1
                          ? 'bg-[#174532] text-white border border-[#174532]'
                          : 'bg-[#dae7df]/16 border border-[#174532]/18'
                      }`}
                    >
                      <span
                        className={`text-[10.5px] font-semibold tabular-nums uppercase tracking-widest mb-1 ${
                          idx === 0 || idx === DIAGRAM_F_EMAIL.length - 1
                            ? 'text-[#f4b925]'
                            : 'text-[#1f513a]'
                        }`}
                      >
                        Paso {item.step}
                      </span>
                      <span
                        className={`font-serif text-[14.5px] font-bold leading-snug ${
                          idx === 0 || idx === DIAGRAM_F_EMAIL.length - 1
                            ? 'text-white'
                            : 'text-[#174532]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {idx < DIAGRAM_F_EMAIL.length - 1 && (
                      <div
                        className="flex items-center justify-center text-[#174532] font-semibold text-sm select-none px-0.5 py-0.5 lg:py-0"
                        aria-hidden="true"
                      >
                        <span className="hidden lg:inline">→</span>
                        <span className="inline lg:hidden">↓</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-4 bg-[#dae7df]/18 border border-[#174532]/15 rounded-sm px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px] text-[#174532]">
                <span className="font-semibold">
                  Principios transversales permanentes: consentimiento previo, claridad de propósito y opción visible para cancelar la suscripción.
                </span>
                <span className="text-[#1f513a] font-medium flex-shrink-0">
                  Relación basada en permiso
                </span>
              </div>
            </figure>
          </div>
        </section>

        {/* APARTADO 10: INTEGRAR TRÁFICO, CONTENIDOS Y EMAIL MARKETING + DIAGRAMA G */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                10. Integrar tráfico, contenidos y email marketing
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El tráfico web, el marketing de contenidos y el email marketing suelen estudiarse como disciplinas separadas. Sin embargo, su relación permite comprender mejor cómo se desarrolla una audiencia digital.
                </p>
                <p>
                  El tráfico facilita que las personas descubran un proyecto. Los contenidos ofrecen información y motivos para explorar su propuesta. El email marketing proporciona un canal para mantener la comunicación con quienes desean seguir en contacto.
                </p>
                <p>Podemos representar esta relación mediante tres funciones complementarias:</p>
              </div>
            </div>

            {/* Funciones complementarias y DIAGRAMA G integrado */}
            <figure className="my-10 bg-[#dae7df]/14 border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#174532]/12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                    Diagrama G
                  </p>
                  <p className="font-serif text-[16.5px] font-bold text-[#174532] mt-0.5">
                    Integración de tráfico, contenidos y email marketing
                  </p>
                </div>
                <span className="text-[12.5px] text-[#174532]/80 font-medium">
                  Tres dimensiones complementarias
                </span>
              </div>

              <div
                className="mt-6 grid md:grid-cols-3 gap-5 items-stretch"
                role="group"
                aria-label="Diagrama G: Adquisición (Tráfico web), Interés (Marketing de contenidos) y Continuidad (Email marketing)"
              >
                {INTEGRATION_PILLARS.map((pillar, idx) => (
                  <div
                    key={pillar.index}
                    className={`rounded-sm p-6 flex flex-col justify-between ${
                      idx === 2
                        ? 'bg-[#174532] text-white border border-[#174532]'
                        : 'bg-white border border-[#174532]/18'
                    }`}
                  >
                    <div>
                      <span
                        className={`text-[11px] uppercase tracking-wider font-semibold block mb-2 ${
                          idx === 2 ? 'text-[#f4b925]' : 'text-[#1f513a]'
                        }`}
                      >
                        {pillar.discipline}
                      </span>
                      <p
                        className={`text-body leading-[1.7] ${
                          idx === 2 ? 'text-white/95' : 'text-[#1b1b1b]/85'
                        }`}
                      >
                        <strong className={idx === 2 ? 'text-white' : 'text-[#174532]'}>
                          {pillar.functionTitle}
                        </strong>{' '}
                        {pillar.functionDetail}
                      </p>
                    </div>
                    <p
                      className={`text-[13px] mt-4 pt-3 border-t ${
                        idx === 2
                          ? 'text-white/85 border-white/15'
                          : 'text-[#1b1b1b]/75 border-[#174532]/12'
                      }`}
                    >
                      {pillar.diagramNote}
                    </p>
                  </div>
                ))}
              </div>
            </figure>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                No todos los proyectos necesitan aplicar estas tres dimensiones de la misma manera. Algunos pueden depender principalmente de la búsqueda orgánica; otros pueden desarrollar una presencia apoyada en comunidades o plataformas sociales. También existen proyectos donde el correo electrónico desempeña un papel especialmente importante.
              </p>
              <p>
                Lo fundamental es comprender que cada canal cumple una función y que su integración debe responder a una estrategia. No se trata de utilizar todas las herramientas disponibles, sino de elegir las que tienen sentido para el proyecto y su audiencia.
              </p>
            </div>
          </div>
        </section>

        {/* APARTADO 11: MEDIR EL CRECIMIENTO + DIAGRAMA H */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                11. Medir el crecimiento y reconocer qué funciona
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El crecimiento necesita observarse con datos, pero medir no consiste en acumular indicadores sin saber qué significan.
                </p>
                <p>
                  Una cifra adquiere valor cuando nos ayuda a comprender una situación, identificar una tendencia o evaluar una decisión. Por eso, antes de elegir métricas conviene definir qué queremos observar.
                </p>
              </div>
            </div>

            {/* Subtítulos editoriales y DIAGRAMA H */}
            <figure className="my-10 bg-white border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-[#174532]/12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                    Diagrama H
                  </p>
                  <p className="font-serif text-[16.5px] font-bold text-[#174532] mt-0.5">
                    Indicadores de crecimiento: marco de observación cualitativa y de tendencia
                  </p>
                </div>
                <span className="text-[12.5px] text-[#174532]/80 font-medium">
                  Lectura conjunta, sin métricas aisladas
                </span>
              </div>

              <div
                className="mt-6 grid md:grid-cols-3 gap-5"
                role="group"
                aria-label="Diagrama H de indicadores organizados en Adquisición, Rendimiento de contenidos y Continuidad de audiencia"
              >
                {MEASUREMENT_GROUPS.map((group) => (
                  <div
                    key={group.index}
                    className="bg-[#dae7df]/14 border border-[#174532]/15 rounded-sm p-6 flex flex-col justify-between"
                  >
                    <div>
                      <span
                        className="text-[11px] font-semibold tabular-nums uppercase tracking-wider text-[#1f513a] block mb-2"
                        aria-hidden="true"
                      >
                        Bloque {group.index}
                      </span>
                      <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                        {group.title}
                      </h3>
                      <p className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                        {group.detail}
                      </p>
                    </div>
                    <p className="text-[12.5px] text-[#174532] font-medium mt-4 pt-3 border-t border-[#174532]/12">
                      Foco de análisis: {group.observe}
                    </p>
                  </div>
                ))}
              </div>
            </figure>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                Ningún indicador debe interpretarse de forma aislada. Un aumento de visitas puede ser positivo, pero necesitamos conocer su procedencia y relevancia. Una lista de correo puede crecer, pero también importa si los mensajes mantienen el interés de sus destinatarios.
              </p>
              <p>
                Medir sirve para aprender. Nos permite reconocer qué contenidos funcionan, qué canales aportan visitantes relevantes y qué aspectos necesitan revisarse. La finalidad no es perseguir cifras por sí mismas, sino utilizar la información para tomar decisiones mejor fundamentadas.
              </p>
            </div>
          </div>
        </section>

        {/* APARTADO 12: CUATRO PERSPECTIVAS (LIBROS OFICIALES) + CIERRE EDITORIAL */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch] mb-10">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                12. Cuatro perspectivas para desarrollar una audiencia digital
              </h2>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                El crecimiento de un proyecto requiere comprender diferentes disciplinas que intervienen en la visibilidad, la adquisición de visitantes y la relación con una audiencia. Nuestra colección reúne cuatro libros que abordan este territorio desde perspectivas complementarias.
              </p>
            </div>

            {/* Cuatro obras oficiales recuperadas directamente desde category.books */}
            <div className="space-y-6 max-w-5xl">
              {category.books.map((book, idx) => {
                const bookUrl = book.path || `/${book.slug}/`;
                const hasPurchaseOptions = Boolean(
                  book.purchaseOptions && book.purchaseOptions.length > 0
                );
                const dims =
                  (book.slug && COVER_DIMENSIONS_BY_SLUG[book.slug]) || DEFAULT_COVER_DIMENSIONS;
                const editorialText =
                  (book.slug && EDITORIAL_PERSPECTIVE_BY_SLUG[book.slug]) || book.description;

                return (
                  <div
                    key={book.id || book.slug}
                    className="bg-[#dae7df]/12 border border-[#174532]/15 rounded-sm p-6 sm:p-8 grid sm:grid-cols-12 gap-6 sm:gap-8 items-start"
                  >
                    <div className="sm:col-span-3 flex sm:justify-start">
                      <Link
                        href={bookUrl}
                        className="inline-block bg-white p-2.5 border border-[#174532]/15 rounded-[2px] shadow-xs hover:border-[#174532]/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                      >
                        <img
                          src={book.coverUrl}
                          alt={`Portada del libro ${book.title}`}
                          width={dims.width}
                          height={dims.height}
                          className={`w-28 sm:w-32 h-auto ${dims.aspectClass} object-contain block`}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                    </div>

                    <div className="sm:col-span-9">
                      <span
                        className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] block mb-2"
                        aria-hidden="true"
                      >
                        Perspectiva {String(idx + 1).padStart(2, '0')}
                      </span>

                      <h3 className="text-h2 font-bold font-serif text-[#174532] mb-3 leading-snug">
                        {book.title}
                      </h3>

                      <p className="text-body text-[#1b1b1b]/85 leading-[1.75] mb-6 max-w-[62ch]">
                        {editorialText}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={bookUrl}
                          className="inline-flex items-center justify-center py-2.5 px-5 bg-[#174532] text-white text-[13.5px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                        >
                          Ver ficha del libro
                        </Link>

                        {hasPurchaseOptions && (
                          <button
                            type="button"
                            onClick={() => setSelectedBook(book)}
                            className="inline-flex items-center justify-center py-2.5 px-5 bg-white border border-[#174532]/30 text-[#174532] text-[13.5px] font-semibold rounded-sm hover:bg-[#dae7df]/45 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                          >
                            Opciones de compra
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cierre editorial: Crecer es desarrollar una relación con la audiencia */}
            <div className="mt-14 pt-12 border-t border-[#174532]/20 max-w-[68ch]">
              <h3 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Crecer es desarrollar una relación con la audiencia
              </h3>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La visibilidad permite que un proyecto sea descubierto. El tráfico acerca visitantes, los contenidos les ofrecen razones para explorar y el email marketing facilita la continuidad de la comunicación.
                </p>
                <p>
                  Estas disciplinas no funcionan necesariamente como una secuencia rígida, pero sí representan dimensiones importantes del crecimiento digital.
                </p>
                <p>
                  Comprender cómo se relacionan nos permite ir más allá de la búsqueda de visitas y desarrollar una perspectiva más completa: crear una presencia que pueda ser descubierta, ofrecer información que merezca la atención y construir relaciones que tengan sentido a largo plazo.
                </p>
                <p>
                  En FG Perspectiva reunimos conocimientos para comprender esas disciplinas y explorar sus posibilidades. Porque crecer en Internet no consiste solamente en llegar a más personas, sino en desarrollar una propuesta capaz de atraer a la audiencia adecuada y mantener su interés mediante contenidos y comunicación relevantes.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#174532]/15">
                <Link
                  href="/biblioteca/"
                  className="inline-flex items-center text-[14px] font-semibold text-[#174532] hover:text-[#1f513a] underline underline-offset-4 decoration-[#174532]/35 hover:decoration-[#174532] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                >
                  ← Volver a la Biblioteca FG Perspectiva
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      {selectedBook && (
        <PurchaseModal
          isOpen={Boolean(selectedBook)}
          onClose={() => setSelectedBook(null)}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default GrowthView;
