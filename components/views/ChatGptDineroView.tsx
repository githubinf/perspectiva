import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface ChatGptDineroViewProps {
  book?: BookItem;
}

export const CHATGPT_DINERO_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'valor-economico-problemas',
    label: 'El valor económico de resolver problemas',
  },
  {
    id: 'capacidad-humana-ia',
    label: 'La capacidad humana detrás de la inteligencia artificial',
  },
  {
    id: 'oportunidades-utilidad-tecnologia',
    label: 'Encontrar oportunidades donde la tecnología aporta utilidad',
  },
  {
    id: 'conocimiento-materia-prima',
    label: 'El conocimiento como materia prima de nuevos productos',
  },
  {
    id: 'desarrollar-servicios-diferentes',
    label: 'Desarrollar servicios con una capacidad de entrega diferente',
  },
  {
    id: 'contenido-posicionamiento',
    label: 'El contenido como recurso de posicionamiento',
  },
  {
    id: 'procesos-trabajo-asistido',
    label: 'Diseñar procesos que aprovechen el trabajo asistido',
  },
  {
    id: 'idea-convertir-oferta',
    label: 'La importancia de convertir una idea en una oferta',
  },
  {
    id: 'organizar-proyecto-recursos',
    label: 'Organizar un proyecto alrededor de sus recursos reales',
  },
  {
    id: 'calidad-diferenciacion',
    label: 'La calidad como elemento de diferenciación',
  },
  {
    id: 'evolucion-actividades-ia',
    label: 'La evolución de las actividades impulsadas por IA',
  },
  {
    id: 'iniciativa-continuidad',
    label: 'Construir una iniciativa con continuidad',
  },
];

const ChatGptDineroView: React.FC<ChatGptDineroViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'como-ganar-dinero-con-chatgpt') ||
    ALL_BOOKS[0];

  const purchaseBook: BookItem = {
    ...currentBook,
    title: 'Cómo ganar dinero con ChatGPT',
  };

  const parentCategory = FEATURED_BOOKS.find(
    (c) =>
      c.slug === currentBook.categorySlug ||
      c.books.some((b) => b.slug === currentBook.slug)
  );

  const siblingBooks = parentCategory
    ? parentCategory.books.filter((b) => b.slug !== currentBook.slug)
    : [];

  return (
    <div className="pt-24 pb-24 bg-white text-[#1b1b1b]">
      {/* Breadcrumbs y zona comercial superior conservada íntegramente */}
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: 'Biblioteca', href: '/biblioteca/' },
            ...(parentCategory
              ? [
                  {
                    label: parentCategory.category,
                    href: parentCategory.path || `/${parentCategory.slug}/`,
                  },
                ]
              : [{ label: 'Tecnología', href: '/tecnologia/' }]),
            {
              label: 'Cómo ganar dinero con ChatGPT',
              href: currentBook.path || '/como-ganar-dinero-con-chatgpt/',
            },
          ]}
        />

        {/* ============================================================ */}
        {/* BLOQUE 1 — ZONA SUPERIOR COMERCIAL ORIGINAL CONSERVADA       */}
        {/* ============================================================ */}
        <section
          id="purchase-options"
          aria-label="Opciones de compra"
          className="mt-8 scroll-mt-24 md:scroll-mt-28"
        >
          <BookPurchaseBlock book={purchaseBook} />
        </section>
      </div>

      {/* ============================================================== */}
      {/* BLOQUE 2 — CONTENIDO EDITORIAL + ÍNDICE + CTA INFERIOR         */}
      {/* ============================================================== */}
      <article className="mt-12 w-full">
        {/* Encabezado editorial y sección introductoria */}
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-10 pb-8 border-b border-[#dae7df]/60">
            <div className="mb-4">
              <Link
                href={parentCategory?.path || '/tecnologia/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Tecnología'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Cómo ganar dinero con ChatGPT
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              y aprovechar al máximo la máquina que está revolucionando el mundo
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una perspectiva práctica sobre cómo integrar ChatGPT en actividades productivas, desarrollar soluciones digitales, crear nuevas propuestas comerciales y convertir las capacidades de la inteligencia artificial en recursos aplicables a proyectos reales.
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>
            </p>
          </header>

          {/* Primera sección introductoria (obligatoriamente ANTES del índice) */}
          <section
            aria-label="Introducción editorial"
            className="mb-12 pb-10 border-b border-[#dae7df]/60"
          >
            <p className="font-serif text-[22px] md:text-[25px] font-bold text-[#174532] leading-snug mb-5">
              Introducción
            </p>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                La aparición de herramientas capaces de interpretar instrucciones, elaborar textos, analizar información y participar en procesos de trabajo ha cambiado nuestra relación con la tecnología. Ya no necesitamos interactuar exclusivamente con programas que funcionan mediante menús rígidos o procedimientos técnicos. Podemos plantear problemas, describir objetivos, aportar contexto y trabajar con sistemas que nos ayudan a desarrollar respuestas, explorar posibilidades y construir soluciones.
              </p>
              <p>
                Sin embargo, disponer de una herramienta avanzada no significa saber cómo aprovecharla comercialmente. La diferencia entre utilizar ChatGPT ocasionalmente y convertirlo en un recurso productivo reside en nuestra capacidad para identificar necesidades, encontrar aplicaciones concretas y conectar sus funcionalidades con actividades que aporten valor a otras personas.
              </p>
              <p>
                La inteligencia artificial puede ayudarnos a desarrollar contenidos, organizar información, preparar materiales, diseñar procesos, mejorar servicios y explorar productos digitales. Su utilidad no depende únicamente de lo que es capaz de generar, sino de la forma en que integramos sus resultados en un proyecto con objetivos definidos, destinatarios reales y una lógica de funcionamiento.
              </p>
              <p>
                El desafío consiste en pasar de la experimentación a la aplicación. En lugar de acumular conversaciones, instrucciones o ideas sin continuidad, podemos utilizar ChatGPT como un recurso de apoyo para desarrollar iniciativas, tomar decisiones mejor fundamentadas y construir una actividad digital con una dirección reconocible.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={CHATGPT_DINERO_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO EDITORIAL COMPLETO (12 H2)                        */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="valor-economico-problemas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor económico de resolver problemas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En cualquier actividad comercial, el valor de una propuesta está relacionado con su capacidad para responder a una necesidad. Podemos disponer de herramientas sofisticadas, conocimientos técnicos o una enorme cantidad de recursos, pero si no existe una utilidad reconocible para alguien, resulta difícil convertirlos en una actividad económicamente viable.
                </p>
                <p>
                  ChatGPT amplía las posibilidades de abordar determinados trabajos. Nos permite explorar información, desarrollar borradores, organizar conceptos, generar alternativas y acelerar algunas tareas que anteriormente exigían más tiempo. Estas capacidades pueden resultar especialmente interesantes cuando identificamos procesos que consumen recursos, actividades que necesitan una mejor organización o necesidades que todavía no están atendidas de manera satisfactoria.
                </p>
                <p>
                  La oportunidad comercial no aparece simplemente porque utilicemos inteligencia artificial. Aparece cuando conseguimos conectar una capacidad tecnológica con una necesidad concreta. Un negocio puede valorar una mejor organización de sus consultas, un profesional puede necesitar documentación más clara o un creador puede encontrar útil desarrollar materiales de trabajo con mayor agilidad.
                </p>
                <p>
                  Por eso, nuestra primera pregunta no debería ser qué podemos producir con ChatGPT, sino qué problema merece la pena resolver. Este cambio de perspectiva permite alejarnos de la generación indiscriminada de resultados y concentrarnos en aplicaciones que tengan una finalidad, un destinatario y un contexto de utilización.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="capacidad-humana-ia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La capacidad humana detrás de la inteligencia artificial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La tecnología puede procesar instrucciones y producir respuestas, pero la dirección del trabajo continúa dependiendo de nuestras decisiones. Somos quienes determinamos qué queremos conseguir, qué información resulta pertinente, qué resultado es aceptable y qué debe modificarse antes de utilizarlo.
                </p>
                <p>
                  Una petición demasiado general suele generar respuestas igualmente generales. Cuando aportamos contexto, delimitamos el problema, definimos criterios y explicamos el propósito de una tarea, el trabajo asistido puede adquirir mayor utilidad. No se trata de encontrar una frase secreta que garantice resultados, sino de desarrollar una forma de colaboración en la que cada interacción tenga sentido dentro de un proceso.
                </p>
                <p>
                  También debemos aprender a revisar lo que recibimos. Una respuesta convincente puede contener errores, omisiones, interpretaciones equivocadas o información que necesita verificarse. La fluidez del lenguaje no constituye una prueba de exactitud. En aplicaciones comerciales, esta distinción es especialmente importante porque la calidad de lo que entregamos afecta directamente a nuestra credibilidad.
                </p>
                <p>
                  La experiencia, el criterio y el conocimiento del contexto son elementos que nos permiten utilizar la herramienta con mayor responsabilidad. ChatGPT puede ayudarnos a trabajar, pero no sustituye la obligación de comprender aquello que ofrecemos ni de asumir las consecuencias de nuestras decisiones.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="oportunidades-utilidad-tecnologia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Encontrar oportunidades donde la tecnología aporta utilidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las oportunidades relacionadas con la inteligencia artificial no siempre se encuentran en la creación de negocios completamente nuevos. En ocasiones, surgen al observar una actividad existente y descubrir que determinados procesos pueden mejorarse, simplificarse o reorganizarse.
                </p>
                <p>
                  Un comercio puede necesitar descripciones de productos más consistentes. Un profesional puede dedicar demasiado tiempo a preparar propuestas. Un creador puede encontrar dificultades para estructurar sus materiales. Una pequeña empresa puede tener información dispersa que necesita convertirse en documentación accesible.
                </p>
                <p>
                  Estos escenarios nos permiten identificar posibles aplicaciones sin depender de ideas extraordinarias. La utilidad puede encontrarse en tareas cotidianas que, aunque no parezcan especialmente innovadoras, generan costes de tiempo, problemas de coordinación o dificultades de comunicación.
                </p>
                <p>
                  Para evaluar una oportunidad, conviene comprender quién experimenta esa necesidad, cómo la resuelve actualmente, qué limitaciones encuentra y si una solución mejor tendría suficiente valor. La tecnología debe formar parte de la respuesta, pero no ser el motivo artificial por el que intentamos crear una oferta.
                </p>
                <p>
                  Una oportunidad razonable es aquella en la que podemos explicar con claridad qué mejora, para quién y bajo qué condiciones. Esta definición nos ayuda a evitar proyectos construidos únicamente alrededor de la fascinación por una herramienta.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="conocimiento-materia-prima"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El conocimiento como materia prima de nuevos productos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La producción de recursos digitales es una de las áreas en las que ChatGPT puede desempeñar un papel interesante. La elaboración de materiales educativos, documentos de apoyo, recursos especializados o contenidos estructurados requiere organizar ideas, establecer relaciones entre conceptos y adaptar la información a una finalidad determinada.
                </p>
                <p>
                  La herramienta puede participar en distintas etapas del proceso, desde explorar enfoques hasta desarrollar una estructura inicial o mejorar la claridad de una explicación. Sin embargo, el valor de un producto digital no se mide por la cantidad de páginas que conseguimos generar, sino por la utilidad de su contenido, su organización y su capacidad para responder a una necesidad.
                </p>
                <p>
                  Un material creado rápidamente puede seguir siendo superficial. Por el contrario, un recurso que combina conocimiento especializado, experiencia, revisión y una presentación adecuada puede convertirse en una propuesta mucho más valiosa. La inteligencia artificial nos permite explorar y producir con mayor flexibilidad, pero la selección, la coherencia y la validación siguen siendo determinantes.
                </p>
                <p>
                  Cuando trabajamos con conocimiento propio o con información que tenemos derecho a utilizar, podemos encontrar nuevas formas de organizarlo y presentarlo. El objetivo no debería ser multiplicar productos sin criterio, sino desarrollar recursos que tengan una identidad, una utilidad y una razón para existir.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="desarrollar-servicios-diferentes"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Desarrollar servicios con una capacidad de entrega diferente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La prestación de servicios también puede beneficiarse de la incorporación de inteligencia artificial. Muchas actividades profesionales incluyen tareas de preparación, clasificación, documentación, investigación preliminar o elaboración de materiales que pueden recibir apoyo tecnológico.
                </p>
                <p>
                  Esto no significa que debamos automatizar indiscriminadamente todo lo que hacemos. En determinados servicios, la atención personal, la interpretación de circunstancias particulares y la experiencia profesional constituyen precisamente aquello que el cliente valora. El uso de ChatGPT puede ayudarnos a mejorar la preparación y organización del trabajo, mientras reservamos nuestra atención para las decisiones que requieren conocimiento, sensibilidad o responsabilidad.
                </p>
                <p>
                  La diferencia puede reflejarse en nuestra capacidad para atender mejor una actividad, organizar entregas, desarrollar una propuesta más completa o reducir el tiempo dedicado a tareas auxiliares. También puede permitirnos revisar cómo estructuramos nuestros servicios, qué incluye cada prestación y qué procesos necesitan una intervención humana directa.
                </p>
                <p>
                  Una aplicación comercial responsable debe tener límites claros. Debemos saber qué tareas podemos delegar a la herramienta, cuáles necesitan revisión y cuáles no deberían ejecutarse sin nuestra participación. Esa delimitación contribuye a mantener la calidad y evita que la rapidez se convierta en un problema.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="contenido-posicionamiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El contenido como recurso de posicionamiento
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido digital continúa siendo un recurso importante para comunicar conocimientos, establecer una presencia y facilitar que las personas descubran una propuesta. La inteligencia artificial puede ayudarnos a desarrollar materiales, explorar diferentes perspectivas y organizar una producción editorial más consistente.
                </p>
                <p>
                  No obstante, publicar más no garantiza que consigamos una mayor atención ni que nuestro proyecto se diferencie. Cuando utilizamos ChatGPT para generar contenido sin una perspectiva definida, podemos terminar produciendo materiales demasiado similares a los que ya existen, con explicaciones previsibles y poca personalidad.
                </p>
                <p>
                  La ventaja de trabajar con esta tecnología debería estar en nuestra capacidad para mejorar el proceso creativo y editorial. Podemos utilizarla para identificar preguntas, ordenar información, examinar argumentos o revisar la claridad de un texto, pero necesitamos aportar una perspectiva propia que determine qué merece ser publicado.
                </p>
                <p>
                  El contenido adquiere mayor valor cuando responde a una intención concreta, mantiene coherencia con el proyecto y ofrece una experiencia útil. La tecnología puede facilitar su elaboración, mientras que nuestra dirección editorial permite convertirlo en una expresión reconocible de conocimiento, criterio y especialización.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="procesos-trabajo-asistido"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Diseñar procesos que aprovechen el trabajo asistido
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una utilización aislada de ChatGPT puede resolver una tarea puntual. Sin embargo, cuando identificamos actividades que se repiten, resulta más interesante pensar en procesos que permitan aprovechar sus capacidades de forma organizada.
                </p>
                <p>
                  Un proceso comienza con una finalidad, establece qué información necesita, determina las etapas de trabajo y define cómo se revisará el resultado. De esta manera, podemos evitar depender de conversaciones improvisadas que obligan a empezar de nuevo cada vez que abordamos una actividad.
                </p>
                <p>
                  La organización también nos ayuda a reconocer dónde se producen errores, qué instrucciones deben mejorarse y qué partes del trabajo requieren mayor atención. Si un proceso genera resultados inconsistentes, podemos revisar sus entradas, sus criterios o las tareas que hemos asignado a la herramienta.
                </p>
                <p>
                  No todos los trabajos necesitan automatización completa. En ocasiones, una intervención parcial es suficiente para mejorar la eficiencia sin perder control. Lo importante es que el sistema responda a las necesidades de la actividad y no se convierta en una estructura innecesariamente compleja.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="idea-convertir-oferta"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La importancia de convertir una idea en una oferta
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una idea puede resultar atractiva desde el punto de vista tecnológico y, aun así, no constituir una propuesta comercial. Para que podamos plantearla como una oferta, necesitamos definir qué recibe la persona, qué problema aborda, qué alcance tiene y por qué podría resultar útil.
                </p>
                <p>
                  ChatGPT puede ayudarnos a explorar distintas maneras de presentar una solución, organizar sus componentes o preparar materiales explicativos. Pero la construcción de una oferta requiere decisiones que no podemos delegar completamente: el público al que nos dirigimos, las condiciones del servicio, el valor que aportamos y la forma en que nos responsabilizamos de su entrega.
                </p>
                <p>
                  También es importante comprender que no todas las aplicaciones de inteligencia artificial necesitan convertirse en un producto independiente. Algunas pueden mejorar nuestra actividad actual, fortalecer un servicio existente o facilitar la gestión de un proyecto. En otros casos, puede tener sentido desarrollar una solución que se comercialice de manera autónoma.
                </p>
                <p>
                  La claridad de la propuesta es más importante que su complejidad. Cuando podemos explicar con sencillez qué ofrecemos y qué utilidad tiene, contamos con una base más sólida para evaluar su viabilidad y comunicarla al mercado.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="organizar-proyecto-recursos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Organizar un proyecto alrededor de sus recursos reales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Todo proyecto necesita una estructura compatible con los recursos disponibles. El tiempo, los conocimientos, la capacidad de atención, las herramientas y el presupuesto condicionan lo que podemos desarrollar y mantener.
                </p>
                <p>
                  La inteligencia artificial puede ayudarnos a ampliar determinadas capacidades, pero no elimina las limitaciones de una actividad. Un proyecto con demasiadas líneas de trabajo, productos, servicios o canales puede terminar siendo difícil de gestionar, incluso cuando disponemos de herramientas que facilitan algunas tareas.
                </p>
                <p>
                  Por eso, conviene establecer prioridades y concentrar nuestros esfuerzos en aquello que tenga mayor relevancia. Podemos comenzar con una aplicación concreta, comprobar cómo funciona y decidir después si merece la pena ampliar el proyecto. Esta forma de avanzar reduce la necesidad de asumir compromisos excesivos antes de comprender las exigencias reales de la actividad.
                </p>
                <p>
                  La organización también implica mantener una relación equilibrada entre producción y mantenimiento. Crear recursos es solo una parte del trabajo; revisar, actualizar, atender necesidades y gestionar la actividad requiere continuidad. Un sistema útil es aquel que podemos sostener, no solamente aquel que parece eficiente durante sus primeras etapas.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="calidad-diferenciacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La calidad como elemento de diferenciación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  A medida que las herramientas de inteligencia artificial se vuelven accesibles, producir determinados materiales resulta cada vez más sencillo. Esta facilidad puede aumentar la competencia y hacer que muchos resultados se parezcan entre sí.
                </p>
                <p>
                  En ese entorno, la calidad adquiere una importancia particular. La precisión, la profundidad, la utilidad, la adaptación al contexto y la experiencia que ofrecemos pueden marcar diferencias que no dependen de la velocidad de producción.
                </p>
                <p>
                  La revisión debe formar parte del proceso, no ser una tarea opcional que realizamos cuando sobra tiempo. Necesitamos comprobar la información, detectar afirmaciones que no podemos respaldar, corregir inconsistencias y asegurarnos de que el resultado cumple su propósito.
                </p>
                <p>
                  También debemos prestar atención a la originalidad y al uso responsable de la información. La IA puede ayudar a producir materiales, pero no debemos utilizarla para presentar como experiencia propia aquello que no hemos vivido, atribuirnos conocimientos que no poseemos ni ofrecer resultados que no podemos garantizar.
                </p>
                <p>
                  Una actividad comercial sólida necesita confianza. Esa confianza se construye mediante decisiones coherentes, transparencia y un compromiso real con aquello que ponemos a disposición de otras personas.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="evolucion-actividades-ia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La evolución de las actividades impulsadas por IA
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La inteligencia artificial no permanece estática. Las herramientas, sus capacidades, las formas de interacción y las posibilidades de integración cambian continuamente. Esto significa que las aplicaciones que hoy resultan útiles pueden transformarse, y que algunas oportunidades dejarán de tener sentido mientras aparezcan otras.
                </p>
                <p>
                  Mantener una actividad vinculada a esta tecnología exige observar su evolución sin caer en la obligación de perseguir cada novedad. Incorporar herramientas nuevas simplemente porque están disponibles puede generar más complejidad que valor. Necesitamos evaluar si una incorporación mejora realmente nuestro trabajo, resuelve una limitación o permite ofrecer algo que antes no podíamos desarrollar.
                </p>
                <p>
                  La adaptación también implica aprender. Podemos revisar nuestros procesos, experimentar de forma controlada, comparar resultados y actualizar los conocimientos que utilizamos en el proyecto. No es necesario modificar toda nuestra estructura cada vez que aparece una nueva funcionalidad.
                </p>
                <p>
                  La continuidad depende de nuestra capacidad para mantener una dirección mientras adaptamos los recursos. La tecnología puede cambiar con rapidez, pero los principios de utilidad, claridad, confianza y responsabilidad siguen siendo importantes para cualquier actividad que aspire a mantenerse.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="iniciativa-continuidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir una iniciativa con continuidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Utilizar ChatGPT con una finalidad económica requiere algo más que aprender a formular instrucciones. Necesitamos comprender el contexto en el que trabajamos, reconocer necesidades, desarrollar propuestas y organizar una actividad capaz de ofrecer resultados útiles.
                </p>
                <p>
                  La herramienta puede ayudarnos a explorar posibilidades que antes exigían más recursos, facilitar determinados procesos y ampliar nuestras capacidades de producción. Sin embargo, su aprovechamiento depende de cómo la incorporamos a nuestro trabajo y de las decisiones que tomamos a lo largo del proceso.
                </p>
                <p>
                  No existe una única aplicación válida para todos los perfiles. Un profesional puede utilizarla para mejorar sus servicios, un creador para desarrollar recursos digitales, un emprendedor para organizar procesos y un proyecto editorial para ampliar su capacidad de investigación y producción. Cada iniciativa necesita encontrar su propia relación entre tecnología, conocimiento y propósito comercial.
                </p>
                <p>
                  La mejor manera de avanzar es comenzar por una necesidad concreta, desarrollar una solución razonable, evaluar su utilidad y aprender de su aplicación. De este modo, dejamos de considerar ChatGPT únicamente como una novedad tecnológica y empezamos a utilizarlo como un recurso integrado en una actividad que tiene dirección, estructura y posibilidades de evolución.
                </p>
              </div>
            </section>
          </div>

          {/* ========================================================== */}
          {/* CTA FINAL ORIGINAL CONSERVADO («Comprar ahora» -> #purchase-options) */}
          {/* ========================================================== */}
          <BookPurchaseCTA />

          {/* Category Back Link */}
          {parentCategory && (
            <div className="mt-12 pt-8 border-t border-[#dae7df]/60">
              <Link
                href={parentCategory.path || `/${parentCategory.slug}/`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f513a] hover:text-[#174532] transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a Ruta {parentCategory.category}
              </Link>
            </div>
          )}
        </div>
      </article>

      {/* Sibling Books in the same category (conservado de BookDetailView cuando existan) */}
      {siblingBooks.length > 0 && parentCategory && (
        <div className="max-w-5xl mx-auto px-6">
          <div className="mt-24 pt-16 border-t border-[#dae7df]/60">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a] block mb-1">
                  Continuar explorando
                </span>
                <h3 className="text-h3 font-bold font-serif text-[#174532]">
                  Más libros de la Ruta {parentCategory.category}
                </h3>
              </div>
              <Link
                href={parentCategory.path || `/${parentCategory.slug}/`}
                className="text-xs uppercase tracking-wider font-semibold text-[#174532] hover:text-[#1f513a] transition-colors"
              >
                Ver colección completa →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {siblingBooks.slice(0, 4).map((sib) => (
                <Link
                  key={sib.slug}
                  href={sib.path || `/${sib.slug}/`}
                  className="bg-white border border-[#dae7df]/50 rounded-xl p-5 hover:border-[#4db380]/60 hover:shadow-md transition-all group flex flex-col items-center text-center h-full"
                >
                  <img
                    src={sib.coverUrl}
                    alt={sib.title}
                    className="w-28 h-auto object-cover rounded-sm shadow-md mb-4 group-hover:scale-105 transition-transform"
                    loading="lazy"
                    width={200}
                    height={290}
                  />
                  <h4 className="text-sm font-bold text-[#174532] group-hover:text-[#1f513a] transition-colors leading-snug break-words">
                    {sib.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatGptDineroView;
