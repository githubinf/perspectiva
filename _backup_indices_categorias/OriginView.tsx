import React, { useState } from 'react';
import { BookCategory } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';

interface OriginViewProps {
  category: BookCategory;
}

const PLR_EVALUATION_CRITERIA = [
  {
    term: 'Las condiciones de uso:',
    detail: 'debemos conocer qué permite realmente la licencia, qué restricciones establece y qué derechos podemos ejercer.',
  },
  {
    term: 'La calidad del contenido:',
    detail: 'no todos los materiales tienen el mismo nivel de profundidad, rigor o utilidad.',
  },
  {
    term: 'La vigencia de la información:',
    detail: 'determinados contenidos necesitan revisión y actualización para responder a las circunstancias actuales.',
  },
  {
    term: 'La adecuación al público:',
    detail: 'un material puede tratar un tema interesante y, aun así, no responder a las necesidades concretas de nuestra audiencia.',
  },
  {
    term: 'La diferenciación:',
    detail: 'debemos encontrar una manera de desarrollar una propuesta que no dependa exclusivamente de presentar un contenido genérico.',
  },
];

const TRANSFORMATION_PHASES = [
  {
    step: '1. Diagnóstico',
    paragraphs: [
      'Antes de modificar un material, necesitamos conocerlo. Esto implica analizar su contenido, identificar sus fortalezas y limitaciones, evaluar su utilidad y determinar si existe una oportunidad real para desarrollarlo como producto.',
      'El diagnóstico permite tomar decisiones antes de invertir tiempo en una transformación que quizá no tenga sentido.',
    ],
  },
  {
    step: '2. Reestructuración',
    paragraphs: [
      'Una vez comprendida la base de trabajo, podemos revisar su organización. El objetivo es mejorar la secuencia de los contenidos, eliminar problemas estructurales, reforzar la comprensión y construir una experiencia de lectura o utilización más coherente.',
      'No consiste en cambiar palabras superficialmente, sino en trabajar sobre la manera en que se presenta y desarrolla el conocimiento.',
    ],
  },
  {
    step: '3. Contextualización 2026',
    paragraphs: [
      'Los contenidos digitales necesitan responder al contexto en el que se utilizan. Herramientas, plataformas, prácticas y expectativas evolucionan, por lo que debemos revisar qué información conserva su utilidad y qué aspectos necesitan adaptación.',
      'Contextualizar significa evitar que un producto dependa de referencias obsoletas o de procedimientos que ya no responden a las condiciones actuales.',
    ],
  },
  {
    step: '4. Personalización',
    paragraphs: [
      'La última fase consiste en desarrollar una propuesta con una identidad definida. El enfoque, la presentación, la organización y la forma de comunicar el contenido deben responder a la finalidad del producto y al público al que se dirige.',
      'La personalización permite avanzar desde un material de partida hacia una propuesta que tenga una razón de ser dentro de un proyecto propio.',
    ],
  },
];

const INFOPRODUCT_FORMATS = [
  {
    term: 'Texto:',
    detail: 'libros electrónicos, guías y otros materiales escritos que permiten desarrollar conceptos de manera organizada.',
  },
  {
    term: 'Audio:',
    detail: 'contenidos que trasladan el conocimiento a una experiencia de escucha.',
  },
  {
    term: 'Vídeo:',
    detail: 'explicaciones y desarrollos audiovisuales que permiten mostrar procesos y comunicar información de forma visual.',
  },
  {
    term: 'Interactivo:',
    detail: 'propuestas en las que el usuario participa activamente en la experiencia de aprendizaje o consulta.',
  },
  {
    term: 'Visual:',
    detail: 'contenidos que organizan y comunican información mediante recursos gráficos.',
  },
];

const COMMERCIAL_DISCIPLINES = [
  {
    title: 'Creación del producto.',
    detail: 'Definir qué ofrecemos, organizar el contenido y desarrollar una propuesta que tenga coherencia.',
  },
  {
    title: 'Diseño y presentación.',
    detail: 'Trabajar la identidad visual y la manera en que el producto se presenta ante su público.',
  },
  {
    title: 'Distribución.',
    detail: 'Evaluar las plataformas y los canales que permiten poner el producto a disposición de los compradores.',
  },
  {
    title: 'Visibilidad.',
    detail: 'Comprender el papel del tráfico, el posicionamiento en buscadores y otras vías de adquisición de audiencia.',
  },
  {
    title: 'Comercialización.',
    detail: 'Analizar las posibilidades de venta, afiliación y relación con los clientes.',
  },
  {
    title: 'Continuidad.',
    detail: 'Explorar la automatización, la creación de comunidades y las oportunidades de desarrollar relaciones comerciales recurrentes.',
  },
];

const FIRST_INFOPRODUCT_QUESTIONS = [
  '¿Qué conocimiento queremos convertir en un producto y qué utilidad puede ofrecer?',
  '¿Existe un público concreto interesado en esa temática?',
  '¿El material de partida tiene calidad suficiente y podemos utilizarlo conforme a sus condiciones de licencia?',
  '¿Qué cambios necesita para convertirse en una propuesta coherente y actual?',
  '¿Qué formato permite comunicar mejor el contenido?',
  '¿Qué plataforma o canal de distribución tiene sentido para el producto?',
  '¿Cómo conseguiremos visibilidad y qué estrategia utilizaremos para llegar a posibles compradores?',
  '¿Qué podemos hacer para que el producto forme parte de un proyecto sostenible y no sea una publicación aislada?',
];

const OriginView: React.FC<OriginViewProps> = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const originBook = category.books[0];
  const bookUrl = originBook ? (originBook.path || `/${originBook.slug}/`) : '/experto-en-plr-premium/';
  const hasPurchaseOptions = Boolean(originBook?.purchaseOptions && originBook.purchaseOptions.length > 0);

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* HERO EDITORIAL TIPOGRÁFICO */}
      <header className="bg-[#dae7df]/20 border-b border-[#174532]/12 pt-6 pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: category.category, href: category.path || '/origen/' },
            ]}
          />

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                Ruta editorial · Origen
              </span>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-8 text-balance">
              Origen: del conocimiento existente a la creación de productos digitales propios
            </h1>

            <div className="pt-6 border-t border-[#174532]/15">
              <h2 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug">
                El punto de partida para construir algo propio
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
                <p>
                  Crear un producto digital no siempre significa comenzar desde una página en blanco. Antes de desarrollar una idea desde cero, podemos explorar conocimientos, materiales y recursos que ya existen, comprender su potencial y transformarlos en una propuesta con identidad, utilidad y valor propio.
                </p>
                <p>
                  Esta posibilidad abre una vía especialmente interesante para quienes desean entrar en el mercado de los productos digitales, desarrollar una actividad independiente o ampliar un proyecto que ya está en marcha. No obstante, disponer de materiales no equivale a tener un producto terminado, y encontrar un recurso que podemos utilizar tampoco significa que estemos preparados para comercializarlo.
                </p>
                <p>
                  Entre ambas cosas existe un proceso: analizar, seleccionar, reorganizar, actualizar, desarrollar y presentar el contenido de una manera coherente con el público al que queremos llegar.
                </p>
                <p>
                  En FG Perspectiva, Origen representa ese primer territorio de exploración. Aquí abordamos una de las posibilidades que ofrece el entorno digital: aprovechar recursos y conocimientos existentes como punto de partida para crear infoproductos con una propuesta diferenciada.
                </p>
                <p>
                  No se trata simplemente de reutilizar contenidos. Se trata de comprender cómo podemos convertir una base de conocimiento en un producto que tenga sentido, responda a una necesidad y forme parte de un proyecto digital con dirección propia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ARTÍCULO EDITORIAL PRINCIPAL */}
      <article aria-label="Desarrollo temático de la categoría Origen">
        {/* SECCIÓN 1: Qué es el PLR */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              Qué es el PLR y por qué puede convertirse en un punto de partida
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                PLR corresponde a <em>Private Label Rights</em>, una modalidad de derechos de uso comercial que puede acompañar a determinados contenidos y productos digitales. Según las condiciones de cada licencia, estos materiales pueden ofrecer distintas posibilidades de utilización, modificación y comercialización.
              </p>
              <p>
                Su atractivo está en que permiten partir de una base existente en lugar de desarrollar todos los contenidos desde cero. Podemos encontrar materiales relacionados con diferentes disciplinas y utilizarlos como referencia o punto inicial para desarrollar una nueva propuesta.
              </p>
              <p>
                Sin embargo, conviene comprender una distinción fundamental: disponer de derechos PLR no convierte automáticamente un material en un producto original, competitivo o adecuado para cualquier mercado.
              </p>
              <p>
                El valor no reside únicamente en el recurso adquirido. Depende también de cómo lo evaluamos, qué decisiones tomamos sobre su contenido, cómo lo adaptamos y qué experiencia ofrecemos a las personas que lo utilizarán.
              </p>
              <p>
                Por eso, antes de trabajar con cualquier material PLR, necesitamos prestar atención a varios aspectos:
              </p>
            </div>

            <ul className="mt-6 mb-7 space-y-3.5 max-w-[68ch] bg-[#dae7df]/15 border-l-2 border-[#174532] py-5 pl-6 pr-5 rounded-r-sm">
              {PLR_EVALUATION_CRITERIA.map((item) => (
                <li key={item.term} className="text-body text-[#1b1b1b]/85 leading-[1.7]">
                  <strong className="font-semibold text-[#174532]">{item.term}</strong> {item.detail}
                </li>
              ))}
            </ul>

            <p className="text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              Comprender estos factores cambia nuestra manera de abordar el PLR. Dejamos de verlo como una colección de archivos que podemos publicar y comenzamos a entenderlo como una materia prima que exige criterio, trabajo y decisiones.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2: De un material disponible a un producto con identidad propia */}
        <section className="py-14 md:py-20 bg-[#dae7df]/15 border-b border-[#174532]/12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              De un material disponible a un producto con identidad propia
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                La transformación es el elemento que marca la diferencia entre utilizar un recurso existente y desarrollar una propuesta con personalidad.
              </p>
              <p>
                Un contenido puede contener información útil, pero necesitar una reorganización completa. Puede presentar conceptos válidos, aunque su lenguaje, ejemplos o referencias hayan quedado desactualizados. También puede abordar un tema demasiado amplio y requerir una orientación más concreta para resultar relevante para un público determinado.
              </p>
              <p>
                En estos casos, el trabajo consiste en intervenir sobre el material con un propósito definido.
              </p>
              <p>
                Podemos reorganizar su estructura, revisar la información, mejorar la claridad de las explicaciones, adaptar el enfoque y desarrollar una presentación coherente. La inteligencia artificial puede contribuir a determinadas tareas de investigación, análisis, revisión y producción, pero no sustituye el criterio necesario para evaluar el resultado.
              </p>
              <p>
                Una transformación bien planteada requiere comprender qué estamos creando y por qué cada modificación aporta algo a la propuesta final.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-[#174532]/15">
              <h3 className="text-h2 font-bold font-serif text-[#174532] mb-4 leading-snug">
                Cuatro fases para abordar la transformación
              </h3>
              <p className="text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch] mb-8">
                El proceso puede organizarse en cuatro fases relacionadas entre sí:
              </p>

              <ol className="space-y-6 max-w-[68ch]">
                {TRANSFORMATION_PHASES.map((phase) => (
                  <li
                    key={phase.step}
                    className="bg-white border border-[#174532]/15 rounded-md p-6 md:p-7 shadow-xs"
                  >
                    <p className="text-[18px] font-bold font-serif text-[#174532] mb-3">
                      {phase.step}
                    </p>
                    <div className="space-y-3 text-body text-[#1b1b1b]/85 leading-[1.7]">
                      {phase.paragraphs.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
                Estas fases no deben entenderse como simples operaciones mecánicas. Son decisiones que requieren análisis, criterio y una comprensión clara del producto que queremos desarrollar.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: Distintos formatos */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              Un mismo conocimiento puede adoptar distintos formatos
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                La creación de infoproductos no está limitada a los libros electrónicos ni a los documentos descargables.
              </p>
              <p>
                Un conocimiento puede desarrollarse en diferentes formatos, dependiendo de su naturaleza, de las necesidades del público y de la experiencia que queramos ofrecer. Esta posibilidad amplía las alternativas para quienes desean construir una oferta digital y evita que todas las propuestas terminen teniendo la misma presentación.
              </p>
              <p>
                Entre los formatos que podemos explorar se encuentran:
              </p>
            </div>

            <ul className="mt-6 mb-7 space-y-3 max-w-[68ch] border-y border-[#174532]/15 py-6">
              {INFOPRODUCT_FORMATS.map((fmt) => (
                <li key={fmt.term} className="text-body text-[#1b1b1b]/85 leading-[1.7] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#174532] mt-[11px] flex-shrink-0" aria-hidden="true"></span>
                  <span>
                    <strong className="font-semibold text-[#174532]">{fmt.term}</strong> {fmt.detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                La elección del formato no debería responder únicamente a una tendencia. Debe estar relacionada con el contenido, su finalidad y la manera más adecuada de transmitirlo.
              </p>
              <p>
                También podemos considerar que una misma temática tenga distintas aplicaciones. Un conocimiento desarrollado inicialmente en formato escrito puede dar lugar a otras propuestas, siempre que se realice el trabajo necesario para adaptar su estructura y experiencia a cada medio.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: Del producto digital a un proyecto comercial */}
        <section className="py-14 md:py-20 bg-[#dae7df]/15 border-b border-[#174532]/12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              Del producto digital a un proyecto comercial
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                Desarrollar un infoproducto es una parte del proceso. Para convertirlo en una actividad comercial necesitamos comprender también cómo se presenta, dónde se distribuye, cómo llega a sus posibles compradores y qué mecanismos permiten mantener su continuidad.
              </p>
              <p>
                Aquí entran en juego distintas áreas del entorno digital.
              </p>
              <p>
                La publicación en plataformas como Amazon KDP, la comercialización mediante programas de afiliación y la utilización de plataformas propias representan alternativas que pueden formar parte de una estrategia de distribución. Cada opción tiene características y condiciones diferentes, por lo que conviene evaluar cuál se adapta mejor al producto y al modelo de negocio.
              </p>
              <p>
                La creación del producto tampoco garantiza que exista demanda. Necesitamos comprender a quién nos dirigimos, qué problema o interés aborda nuestra propuesta y cómo podemos comunicar su utilidad.
              </p>
              <p>
                Por eso, el desarrollo comercial requiere conectar varias disciplinas:
              </p>
            </div>

            <div className="mt-7 mb-8 divide-y divide-[#174532]/12 border-y border-[#174532]/15 bg-white/80 px-6 py-2 rounded-sm max-w-[68ch]">
              {COMMERCIAL_DISCIPLINES.map((discipline) => (
                <p key={discipline.title} className="py-4 text-body text-[#1b1b1b]/85 leading-[1.7]">
                  <strong className="font-semibold text-[#174532]">{discipline.title}</strong> {discipline.detail}
                </p>
              ))}
            </div>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                Estas áreas no funcionan de manera aislada. Un producto puede estar bien elaborado y tener una presentación atractiva, pero necesita una estrategia de distribución y visibilidad para encontrar a su público. Del mismo modo, atraer visitantes no resuelve por sí solo la necesidad de ofrecer algo relevante y facilitar una experiencia comercial coherente.
              </p>
              <p>
                La perspectiva adecuada consiste en comprender cómo se relacionan las distintas partes del proceso.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: Inteligencia artificial */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              Inteligencia artificial: una herramienta para ampliar las posibilidades de creación
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                La inteligencia artificial ha incorporado nuevas posibilidades a la producción de contenidos y al desarrollo de productos digitales. Puede ayudarnos a investigar temas, organizar información, explorar enfoques, revisar materiales y trabajar con distintos formatos.
              </p>
              <p>
                En el contexto del PLR, estas capacidades pueden facilitar determinadas tareas de transformación y producción. Sin embargo, utilizar inteligencia artificial no significa que el resultado tenga automáticamente calidad, originalidad o valor comercial.
              </p>
              <p>
                La herramienta puede generar propuestas, pero necesitamos evaluar su precisión, comprobar la información, detectar inconsistencias y decidir qué merece incorporarse al producto.
              </p>
              <p>
                También debemos evitar una confusión frecuente: producir más contenido no significa necesariamente crear mejores productos.
              </p>
              <p>
                La calidad depende de la utilidad de la información, de su organización, de la claridad con la que se comunica y de su adecuación al público. La tecnología puede ayudarnos a trabajar con mayor amplitud, pero el criterio humano sigue siendo necesario para definir el propósito y evaluar el resultado.
              </p>
              <p>
                Por eso, la combinación entre recursos existentes, herramientas actuales y decisiones editoriales puede abrir nuevas oportunidades, siempre que no confundamos velocidad de producción con calidad.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 6: Qué necesitamos comprender antes de crear nuestro primer infoproducto */}
        <section className="py-14 md:py-20 bg-[#dae7df]/15 border-b border-[#174532]/12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              Qué necesitamos comprender antes de crear nuestro primer infoproducto
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                Quienes se acercan por primera vez a este campo suelen concentrarse en encontrar un material, elegir una temática o descubrir qué plataforma utilizar para vender.
              </p>
              <p>
                Son cuestiones importantes, pero conviene plantearlas dentro de una perspectiva más amplia.
              </p>
              <p>
                Antes de comenzar, necesitamos comprender algunas preguntas fundamentales:
              </p>
            </div>

            <ul className="mt-6 mb-8 space-y-3 max-w-[68ch] bg-white border border-[#174532]/15 rounded-md p-6 md:p-8 shadow-xs">
              {FIRST_INFOPRODUCT_QUESTIONS.map((question) => (
                <li key={question} className="text-body text-[#174532] font-medium leading-[1.65] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f4b925] mt-[11px] flex-shrink-0" aria-hidden="true"></span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch]">
              <p>
                No necesitamos tener todas las respuestas desde el primer momento. Lo importante es entender que la creación de un producto digital implica mucho más que preparar un archivo y publicarlo.
              </p>
              <p>
                Cada decisión influye en las siguientes. Por eso, adquirir una visión general del proceso antes de comenzar puede ayudarnos a evitar trabajo innecesario y a construir propuestas con mayor coherencia.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 7: Presentación editorial del libro Experto en PLR Premium */}
        <section className="py-16 md:py-24 bg-white border-b border-[#174532]/12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
              Experto en PLR Premium: una guía para comprender el proceso completo
            </h2>

            <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch] mb-10">
              <p>
                Dentro de esta ruta temática, <strong>Experto en PLR Premium</strong> aborda la creación de infoproductos a partir de recursos PLR y su desarrollo dentro del entorno digital actual.
              </p>
              <p>
                La obra parte de los fundamentos del PLR y amplía el recorrido hacia la transformación de contenidos mediante inteligencia artificial, la producción en distintos formatos y el diseño de productos. También contempla su publicación y comercialización mediante alternativas como Amazon KDP, programas de afiliación y plataformas propias.
              </p>
              <p>
                El recorrido incluye otras áreas necesarias para comprender el desarrollo comercial de estos productos: tráfico, posicionamiento SEO, automatización, comunidades, ventas recurrentes, análisis y escalabilidad.
              </p>
              <p>
                Su planteamiento permite observar la creación de infoproductos como un proceso más amplio que la simple reutilización de materiales. El objetivo es comprender las decisiones que intervienen desde la selección del recurso inicial hasta las posibilidades de desarrollar una actividad comercial alrededor del producto.
              </p>
              <p>
                La obra constituye el punto de partida de la categoría Origen y reúne los fundamentos necesarios para explorar este ámbito con una visión que conecta creación, tecnología, distribución y comercialización.
              </p>
              <p>
                <strong>Consulta la ficha de Experto en PLR Premium</strong> para conocer los detalles del libro y sus opciones disponibles.
              </p>
            </div>

            {originBook && (
              <div className="bg-[#dae7df]/20 border border-[#174532]/20 rounded-md p-6 sm:p-8 md:p-10 grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="bg-white p-3 border border-[#174532]/15 rounded-[2px] shadow-md">
                    <img
                      src={originBook.coverUrl}
                      alt={`Portada del libro ${originBook.title}`}
                      width={400}
                      height={443}
                      className="w-44 sm:w-48 h-auto aspect-[400/443] object-contain block"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="md:col-span-8">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] block mb-2">
                    Obra de la categoría Origen
                  </span>
                  <h3 className="text-h2 font-bold font-serif text-[#174532] leading-snug mb-2">
                    {originBook.title}
                  </h3>
                  {originBook.subtitle && (
                    <p className="text-sm font-medium text-[#1f513a] mb-3 leading-relaxed">
                      {originBook.subtitle}
                    </p>
                  )}
                  <p className="text-body-sm md:text-body text-[#1b1b1b]/80 leading-relaxed mb-6">
                    {originBook.description}
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
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center py-2.5 px-5 bg-white border border-[#174532]/30 text-[#174532] text-[13.5px] font-semibold rounded-sm hover:bg-[#dae7df]/45 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                      >
                        Opciones de compra
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECCIÓN 8: Cierre editorial */}
        <section className="py-16 md:py-24 bg-[#dae7df]/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border border-[#174532]/15 rounded-md p-8 md:p-12 shadow-xs">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                El origen de un proyecto comienza con una decisión
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[68ch] mb-8">
                <p>
                  La posibilidad de crear productos digitales a partir de conocimientos y recursos existentes representa una oportunidad, pero también exige responsabilidad sobre lo que desarrollamos y ofrecemos.
                </p>
                <p>
                  No basta con encontrar un material, modificar su presentación y ponerlo a la venta. Necesitamos comprender su contenido, respetar sus condiciones de uso, aportar criterio en su transformación y desarrollar una propuesta que tenga sentido para quienes la reciben.
                </p>
                <p>
                  Ese es el verdadero punto de partida: pasar de disponer de recursos a saber qué podemos construir con ellos.
                </p>
                <p>
                  En FG Perspectiva entendemos Origen como el comienzo de ese recorrido. Una primera aproximación a la creación de productos digitales, a la transformación del conocimiento y a las decisiones que permiten desarrollar una propuesta propia.
                </p>
                <p>
                  Porque antes de pensar en escalar un negocio digital, necesitamos comprender qué estamos construyendo, qué valor queremos aportar y cómo podemos convertir una idea en un producto con una finalidad definida.
                </p>
              </div>

              <div className="pt-6 border-t border-[#174532]/12 flex flex-wrap items-center justify-between gap-4">
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

      {originBook && (
        <PurchaseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          book={originBook}
        />
      )}
    </div>
  );
};

export default OriginView;
