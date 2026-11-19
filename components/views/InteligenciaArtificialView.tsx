import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface InteligenciaArtificialViewProps {
  book?: BookItem;
}

export const INTELIGENCIA_ARTIFICIAL_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'tecnologia-cambio-escala',
    label: 'Una tecnología que ha cambiado de escala',
  },
  {
    id: 'comprender-inteligencia',
    label: 'Comprender la inteligencia sin confundirla con la humana',
  },
  {
    id: 'conocimiento-posibilidades',
    label: 'El conocimiento en un entorno de posibilidades ilimitadas',
  },
  {
    id: 'tecnologia-decisiones-cotidianas',
    label: 'La tecnología dentro de nuestras decisiones cotidianas',
  },
  {
    id: 'transformar-procesos-proposito',
    label: 'Transformar procesos sin perder el propósito',
  },
  {
    id: 'colaboracion-capacidades',
    label: 'El valor de la colaboración entre capacidades',
  },
  {
    id: 'innovacion-responsabilidad',
    label: 'Cuando la innovación también exige responsabilidad',
  },
  {
    id: 'confianza-avance',
    label: 'La confianza como condición para avanzar',
  },
  {
    id: 'trabajo-capacidades-humanas',
    label: 'Un nuevo escenario para el trabajo y las capacidades humanas',
  },
  {
    id: 'evolucion-limites-reales',
    label: 'La evolución tecnológica y sus límites reales',
  },
  {
    id: 'prepararnos-cambio',
    label: 'Prepararnos para un mundo que todavía está cambiando',
  },
  {
    id: 'futuro-nuestras-decisiones',
    label: 'El futuro también depende de nuestras decisiones',
  },
];

const OFFICIAL_BOOK_TITLE =
  'Inteligencia Artificial: Más Allá de la Imaginación y de los Límites';

const InteligenciaArtificialView: React.FC<InteligenciaArtificialViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'inteligencia-artificial') ||
    ALL_BOOKS[0];

  const purchaseBook: BookItem = {
    ...currentBook,
    title: OFFICIAL_BOOK_TITLE,
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
      {/* Breadcrumbs y bloque comercial superior preservados */}
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
              label: OFFICIAL_BOOK_TITLE,
              href: currentBook.path || '/inteligencia-artificial/',
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
        {/* Encabezado editorial y presentación introductoria */}
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
              {OFFICIAL_BOOK_TITLE}
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-5 font-serif italic leading-relaxed max-w-3xl">
              Descubre el viaje de la inteligencia artificial desde la ciencia ficción hasta la realidad, desafiando las expectativas y superando los límites impuestos por la imaginación humana.
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>
            </p>
          </header>

          {/* Presentación editorial introductoria (obligatoriamente ANTES del índice) */}
          <section
            aria-label="Introducción editorial"
            className="mb-12 pb-10 border-b border-[#dae7df]/60"
          >
            <p className="font-serif text-[22px] md:text-[25px] font-bold text-[#174532] leading-snug mb-5">
              Introducción
            </p>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                Durante mucho tiempo, la inteligencia artificial perteneció al territorio de las ideas, la ciencia ficción y los experimentos que parecían demasiado complejos para formar parte de nuestra vida cotidiana. Sin embargo, ese escenario ha cambiado. Hoy convivimos con sistemas capaces de procesar información, reconocer patrones, generar contenido, interpretar datos y realizar tareas que hace apenas unos años parecían reservadas exclusivamente a las capacidades humanas.
              </p>
              <p>
                La inteligencia artificial ha dejado de ser una promesa distante para convertirse en una tecnología presente en múltiples ámbitos de nuestra sociedad. Su evolución no solo plantea nuevas posibilidades, sino que también modifica la forma en que entendemos el conocimiento, el trabajo, la creatividad, la comunicación y la toma de decisiones.
              </p>
              <p>
                Este cambio invita a mirar más allá de las herramientas que utilizamos diariamente. Comprender la inteligencia artificial implica explorar qué está transformando realmente, cuáles son sus posibilidades, dónde se encuentran sus límites y qué papel debemos asumir las personas en un entorno cada vez más influido por sistemas inteligentes.
              </p>
              <p>
                El verdadero desafío no consiste únicamente en aprender a utilizar nuevas tecnologías. También consiste en desarrollar criterio para comprenderlas, integrarlas de forma consciente y decidir cómo queremos que contribuyan a nuestro futuro.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={INTELIGENCIA_ARTIFICIAL_INDEX_ITEMS}
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
              id="tecnologia-cambio-escala"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una tecnología que ha cambiado de escala
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La inteligencia artificial no apareció de repente con las herramientas que hoy conocemos. Su desarrollo es el resultado de décadas de investigación, experimentación y avances en distintas disciplinas. Lo que ha cambiado en los últimos años es la escala de sus posibilidades, la disponibilidad de recursos computacionales y la capacidad de acercar determinados sistemas a millones de personas.
                </p>
                <p>
                  Durante mucho tiempo, muchas aplicaciones de inteligencia artificial permanecieron limitadas a entornos especializados. Su utilización requería conocimientos técnicos, infraestructura y recursos que dificultaban su adopción generalizada. La evolución de los modelos, el acceso a grandes cantidades de datos y la mejora de los sistemas de procesamiento han permitido que nuevas capacidades lleguen a ámbitos cotidianos.
                </p>
                <p>
                  Esta expansión ha cambiado nuestra percepción de la tecnología. Ya no hablamos únicamente de automatización industrial o sistemas experimentales, sino de herramientas capaces de intervenir en actividades relacionadas con la información, la comunicación, el análisis y la producción intelectual.
                </p>
                <p>
                  El cambio de escala también modifica nuestras expectativas. Cuando una tecnología se vuelve accesible, las personas comienzan a explorar aplicaciones que no fueron necesariamente previstas por sus desarrolladores. Surgen nuevas formas de utilización, nuevos problemas y nuevas oportunidades de adaptación.
                </p>
                <p>
                  La inteligencia artificial representa, por tanto, mucho más que una evolución técnica. Su presencia creciente obliga a reconsiderar cómo nos relacionamos con las herramientas digitales y qué posibilidades aparecen cuando determinadas capacidades tecnológicas dejan de estar reservadas a especialistas.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="comprender-inteligencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Comprender la inteligencia sin confundirla con la humana
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Uno de los mayores desafíos al hablar de inteligencia artificial consiste en comprender lo que realmente hacen estos sistemas. Su capacidad para producir respuestas coherentes, interpretar información y realizar tareas complejas puede generar la impresión de que poseen una comprensión equivalente a la humana.
                </p>
                <p>
                  Sin embargo, la capacidad de procesar información, identificar patrones y generar resultados no debe confundirse automáticamente con la experiencia, la conciencia, la intención o el razonamiento humano en su sentido más amplio.
                </p>
                <p>
                  Los sistemas de inteligencia artificial funcionan a partir de modelos, datos, mecanismos de procesamiento y objetivos definidos por sus arquitecturas. Pueden ofrecer resultados extraordinariamente útiles, pero también presentar errores, producir información incorrecta o interpretar de manera inadecuada determinados contextos.
                </p>
                <p>
                  Comprender esta diferencia es fundamental para utilizar la tecnología con criterio. La utilidad de un sistema no depende de que lo consideremos humano, sino de que sepamos identificar qué puede hacer, en qué condiciones funciona mejor y cuándo necesitamos intervenir.
                </p>
                <p>
                  La inteligencia artificial puede ampliar nuestras capacidades de análisis y ejecución, pero la interpretación de sus resultados continúa exigiendo atención, conocimiento contextual y responsabilidad.
                </p>
                <p>
                  Cuanto mejor comprendamos la naturaleza de estos sistemas, más posibilidades tendremos de aprovecharlos sin atribuirles capacidades que no necesariamente poseen.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="conocimiento-posibilidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El conocimiento en un entorno de posibilidades ilimitadas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La información siempre ha sido un recurso importante para el desarrollo humano. Sin embargo, disponer de información no significa necesariamente comprenderla, organizarla o utilizarla correctamente.
                </p>
                <p>
                  La inteligencia artificial está modificando la manera en que podemos acceder a determinados conocimientos, explorar conceptos y establecer relaciones entre grandes cantidades de información. Esto puede reducir barreras, facilitar procesos de investigación y permitir que personas con diferentes niveles de experiencia se aproximen a temas que anteriormente resultaban más difíciles de abordar.
                </p>
                <p>
                  El cambio no consiste únicamente en encontrar respuestas con mayor rapidez. También está relacionado con la posibilidad de explorar preguntas, comparar perspectivas y descubrir conexiones que pueden pasar desapercibidas durante una búsqueda convencional.
                </p>
                <p>
                  No obstante, la abundancia de información plantea un nuevo problema: saber qué merece nuestra atención.
                </p>
                <p>
                  Cuando podemos obtener respuestas de manera inmediata, la capacidad de formular preguntas relevantes, evaluar fuentes y distinguir entre información fiable y resultados poco precisos se vuelve todavía más importante.
                </p>
                <p>
                  El conocimiento no puede reducirse a la acumulación de respuestas. Comprender exige interpretar, relacionar, cuestionar y construir una visión propia.
                </p>
                <p>
                  La inteligencia artificial puede facilitar el acceso a información y ampliar nuestras posibilidades de exploración, pero el valor final de ese proceso dependerá de nuestra capacidad para convertir los datos y las respuestas en conocimiento útil.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="tecnologia-decisiones-cotidianas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La tecnología dentro de nuestras decisiones cotidianas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La presencia de la inteligencia artificial está comenzando a modificar muchas decisiones que anteriormente dependían de procesos manuales, consultas, análisis individuales o sistemas tradicionales de información.
                </p>
                <p>
                  En algunos contextos, puede ayudarnos a organizar datos, identificar alternativas, resumir información, reconocer tendencias o preparar escenarios que faciliten una evaluación. Estas capacidades pueden resultar útiles tanto en actividades personales como profesionales.
                </p>
                <p>
                  Sin embargo, la rapidez con la que un sistema proporciona una respuesta no garantiza que esa respuesta sea la más adecuada.
                </p>
                <p>
                  Las decisiones importantes suelen depender de circunstancias particulares, prioridades, consecuencias y factores que no siempre pueden expresarse mediante datos. Una recomendación puede parecer lógica desde una perspectiva general, pero resultar inapropiada cuando se consideran las condiciones específicas de una persona, empresa o situación.
                </p>
                <p>
                  Por esta razón, utilizar inteligencia artificial en nuestros procesos de decisión requiere algo más que aceptar resultados.
                </p>
                <p>
                  Necesitamos comprender el contexto, evaluar las alternativas, identificar posibles errores y reconocer cuándo una decisión exige experiencia especializada o una valoración humana más profunda.
                </p>
                <p>
                  La tecnología puede ayudarnos a pensar con mayor amplitud, pero no debería convertirse en un sustituto automático de nuestra capacidad de decidir.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="transformar-procesos-proposito"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Transformar procesos sin perder el propósito
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las posibilidades más interesantes de la inteligencia artificial consiste en modificar la manera en que se desarrollan determinadas actividades.
                </p>
                <p>
                  Procesos que antes requerían múltiples tareas manuales pueden reorganizarse. Algunas operaciones pueden automatizarse, otras pueden simplificarse y determinadas actividades pueden realizarse de manera diferente gracias a nuevas capacidades de análisis y generación de información.
                </p>
                <p>
                  Esta transformación no consiste necesariamente en hacer todo más rápido. En muchos casos, la verdadera oportunidad se encuentra en revisar la estructura de un proceso, eliminar pasos innecesarios y concentrar los recursos en aquellas actividades que realmente aportan valor.
                </p>
                <p>
                  Adoptar una tecnología sin comprender el proceso que pretendemos mejorar puede producir resultados decepcionantes. Automatizar una actividad desorganizada no garantiza que obtengamos un sistema más eficiente. Incluso puede aumentar la complejidad si incorporamos herramientas sin una finalidad clara.
                </p>
                <p>
                  Por eso, la transformación debe comenzar con una pregunta fundamental: ¿qué queremos mejorar realmente?
                </p>
                <p>
                  La inteligencia artificial puede facilitar nuevas formas de trabajar, pero el propósito debe preceder a la herramienta. Cuando sabemos qué resultado buscamos, podemos evaluar mejor qué capacidades tecnológicas necesitamos, qué tareas deben mantenerse bajo supervisión y cómo medir si el cambio está produciendo beneficios reales.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="colaboracion-capacidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de la colaboración entre capacidades
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El debate sobre la inteligencia artificial suele presentar dos posiciones aparentemente opuestas: la tecnología como sustituto de las capacidades humanas o la tecnología como herramienta complementaria.
                </p>
                <p>
                  Una perspectiva más equilibrada consiste en analizar cómo pueden combinarse diferentes capacidades.
                </p>
                <p>
                  Los sistemas de inteligencia artificial pueden procesar información, explorar alternativas, reconocer patrones y ejecutar determinadas tareas con rapidez. Las personas, por su parte, aportan experiencia, interpretación, sensibilidad contextual, juicio, valores y comprensión de las consecuencias.
                </p>
                <p>
                  Esta combinación puede generar nuevas formas de trabajo. En lugar de concentrar todo el esfuerzo en tareas repetitivas o en la búsqueda inicial de información, podemos dedicar más atención a evaluar resultados, formular mejores preguntas, desarrollar estrategias y resolver problemas que requieren una comprensión más amplia.
                </p>
                <p>
                  La colaboración no significa delegar indiscriminadamente. Significa comprender qué parte de una actividad puede beneficiarse de la tecnología y qué parte necesita continuar dependiendo de nuestra intervención.
                </p>
                <p>
                  Cuando existe una distribución adecuada de responsabilidades, la inteligencia artificial puede convertirse en una extensión de nuestras capacidades sin eliminar la importancia de nuestro criterio.
                </p>
                <p>
                  El resultado más valioso no siempre será una máquina capaz de realizar más tareas por sí sola, sino un entorno en el que las personas puedan trabajar de manera más consciente, eficiente y creativa gracias a nuevas herramientas.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="innovacion-responsabilidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cuando la innovación también exige responsabilidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Toda tecnología capaz de influir significativamente en la sociedad plantea cuestiones relacionadas con su utilización, sus consecuencias y los límites que deben establecerse.
                </p>
                <p>
                  La inteligencia artificial no es una excepción. Su capacidad para generar contenido, procesar información, intervenir en sistemas de decisión y automatizar determinadas actividades abre oportunidades, pero también exige considerar riesgos.
                </p>
                <p>
                  Entre las cuestiones más importantes se encuentran la privacidad, la utilización de datos, los errores, los sesgos, la transparencia, la seguridad y las consecuencias de delegar determinadas decisiones en sistemas automatizados.
                </p>
                <p>
                  La responsabilidad no debe recaer únicamente en quienes desarrollan estas tecnologías. También involucra a las organizaciones que las implementan, a las personas que las utilizan y a los entornos que establecen las condiciones para su funcionamiento.
                </p>
                <p>
                  Una herramienta puede ser técnicamente capaz de realizar una tarea, pero eso no significa que todas sus aplicaciones sean apropiadas.
                </p>
                <p>
                  La innovación responsable requiere evaluar no solamente lo que podemos hacer, sino también las consecuencias de hacerlo. Esta perspectiva resulta especialmente importante cuando los resultados pueden afectar a otras personas, sus oportunidades, sus derechos o su bienestar.
                </p>
                <p>
                  El progreso tecnológico adquiere mayor valor cuando está acompañado por una comprensión consciente de sus implicaciones.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="confianza-avance"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza como condición para avanzar
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La confianza es uno de los factores que determinará la manera en que la inteligencia artificial se integra en nuestras actividades.
                </p>
                <p>
                  Para confiar en una tecnología no basta con que parezca avanzada. Necesitamos comprender su funcionamiento general, conocer sus limitaciones y disponer de mecanismos que nos permitan evaluar los resultados que produce.
                </p>
                <p>
                  La confianza excesiva puede llevarnos a aceptar información incorrecta, delegar decisiones sin suficiente análisis o utilizar sistemas en situaciones para las que no están preparados. En el extremo opuesto, una desconfianza absoluta puede impedirnos aprovechar capacidades que realmente podrían mejorar determinadas actividades.
                </p>
                <p>
                  El desafío consiste en desarrollar una confianza razonada.
                </p>
                <p>
                  Esto implica verificar información cuando sea necesario, proteger los datos que utilizamos, comprender el alcance de las herramientas y mantener una actitud crítica ante resultados que parecen convincentes.
                </p>
                <p>
                  La confianza también depende de la transparencia. Cuanto más claramente podamos identificar cómo se utiliza una tecnología, qué información interviene y qué responsabilidades existen, más fácil será integrarla de manera consciente.
                </p>
                <p>
                  La inteligencia artificial puede convertirse en una herramienta valiosa, pero su utilidad a largo plazo dependerá de la relación que construyamos con ella. Esa relación necesita conocimiento, prudencia y una evaluación constante de sus resultados.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="trabajo-capacidades-humanas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Un nuevo escenario para el trabajo y las capacidades humanas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La evolución de la inteligencia artificial está generando cambios en la manera en que entendemos determinadas actividades profesionales.
                </p>
                <p>
                  Algunas tareas pueden automatizarse, otras pueden transformarse y también pueden surgir nuevas funciones relacionadas con la supervisión, la interpretación, la integración tecnológica y el desarrollo de soluciones.
                </p>
                <p>
                  Estos cambios no necesariamente ocurren de manera uniforme. Diferentes sectores, organizaciones y profesiones pueden experimentar transformaciones a ritmos distintos, dependiendo de sus necesidades, recursos, características y posibilidades de implementación.
                </p>
                <p>
                  En este contexto, la adaptación se convierte en una capacidad importante.
                </p>
                <p>
                  No se trata únicamente de aprender a utilizar herramientas. También necesitamos desarrollar habilidades que nos permitan comprender problemas, analizar información, comunicarnos con claridad, evaluar resultados y trabajar en entornos donde las tecnologías cambian con rapidez.
                </p>
                <p>
                  La inteligencia artificial puede modificar el valor de determinadas tareas, pero también puede aumentar la importancia de capacidades que requieren comprensión, creatividad, responsabilidad y perspectiva.
                </p>
                <p>
                  El futuro del trabajo no debe analizarse únicamente desde la posibilidad de sustituir actividades. También debemos considerar cómo pueden reorganizarse los procesos, qué nuevas oportunidades pueden aparecer y de qué manera las personas pueden prepararse para participar en un entorno diferente.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="evolucion-limites-reales"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La evolución tecnológica y sus límites reales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El desarrollo de la inteligencia artificial genera expectativas muy elevadas. En ocasiones, estas expectativas pueden llevarnos a imaginar capacidades que todavía no existen, interpretar avances experimentales como soluciones completamente maduras o asumir que los problemas actuales desaparecerán con una nueva generación de sistemas.
                </p>
                <p>
                  Sin embargo, toda tecnología tiene limitaciones.
                </p>
                <p>
                  Los sistemas de inteligencia artificial pueden depender de la calidad de los datos, presentar dificultades ante situaciones inesperadas, producir resultados incorrectos o carecer de información contextual suficiente para interpretar determinados problemas.
                </p>
                <p>
                  También existen limitaciones relacionadas con los recursos, la infraestructura, la seguridad, los costes, la integración y la necesidad de supervisión.
                </p>
                <p>
                  Comprender estas limitaciones no significa negar el potencial de la tecnología. Significa establecer expectativas realistas y tomar mejores decisiones.
                </p>
                <p>
                  Una innovación puede ser extraordinaria y, al mismo tiempo, necesitar ajustes, controles y condiciones específicas para funcionar correctamente.
                </p>
                <p>
                  La evolución tecnológica no sigue siempre una trayectoria uniforme. Existen avances, obstáculos, cambios de dirección y períodos de adaptación.
                </p>
                <p>
                  Por eso, mantener una perspectiva equilibrada nos permite distinguir entre las posibilidades reales de la inteligencia artificial y las expectativas que todavía dependen de desarrollos futuros.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="prepararnos-cambio"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Prepararnos para un mundo que todavía está cambiando
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La velocidad de evolución de la inteligencia artificial hace difícil anticipar con precisión cómo serán determinadas actividades dentro de unos años.
                </p>
                <p>
                  Algunas herramientas pueden consolidarse, otras pueden desaparecer y muchas capacidades pueden evolucionar hasta adquirir funciones diferentes de las que conocemos actualmente.
                </p>
                <p>
                  En lugar de intentar predecir cada cambio, quizá sea más útil desarrollar una actitud de adaptación permanente.
                </p>
                <p>
                  Prepararnos significa mantener la curiosidad, aprender de manera continua, comprender los principios que se encuentran detrás de las tecnologías y evitar depender exclusivamente de herramientas específicas.
                </p>
                <p>
                  También implica reconocer que la adaptación no consiste en aceptar todas las novedades. Saber evaluar una tecnología, determinar si realmente aporta valor y decidir cuándo no utilizarla puede ser tan importante como aprender a implementarla.
                </p>
                <p>
                  Un entorno cambiante exige flexibilidad, pero también estabilidad en nuestros criterios.
                </p>
                <p>
                  La tecnología puede evolucionar con rapidez. Nuestra capacidad para comprender los problemas, actuar con responsabilidad y establecer prioridades continúa siendo fundamental.
                </p>
                <p>
                  Prepararnos para el futuro no significa intentar adelantarnos a cada novedad, sino construir una base de conocimiento y criterio que nos permita responder mejor cuando los cambios se produzcan.
                </p>
              </div>
            </section>

            {/* Apartado 12 (cierre integrado) */}
            <section
              id="futuro-nuestras-decisiones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El futuro también depende de nuestras decisiones
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La inteligencia artificial continuará evolucionando, pero su impacto no dependerá exclusivamente de los avances técnicos.
                </p>
                <p>
                  También estará condicionado por las decisiones que tomemos como personas, organizaciones y sociedad.
                </p>
                <p>
                  Las herramientas que desarrollamos, los problemas que decidimos resolver, los límites que establecemos y la manera en que utilizamos las capacidades disponibles influirán en el tipo de entorno tecnológico que construiremos.
                </p>
                <p>
                  La inteligencia artificial puede contribuir a ampliar nuestras posibilidades, facilitar actividades, mejorar procesos y abrir nuevas perspectivas. Sin embargo, estas oportunidades no garantizan automáticamente resultados positivos.
                </p>
                <p>
                  Necesitamos participar activamente en la definición de sus usos, comprender sus consecuencias y mantener una visión que coloque a las personas y sus necesidades en el centro de la transformación.
                </p>
                <p>
                  La tecnología no debería convertirse en un objetivo por sí misma. Su verdadero valor reside en aquello que nos permite mejorar, comprender, construir o resolver.
                </p>
                <p>
                  A medida que los sistemas se vuelvan más capaces, la importancia de nuestras decisiones también aumentará. Saber utilizar una herramienta será relevante, pero saber por qué la utilizamos, cuándo debemos confiar en ella y qué consecuencias puede tener será todavía más importante.
                </p>
                <p>
                  El futuro de la inteligencia artificial no se construirá únicamente a partir de máquinas más capaces. También dependerá de la manera en que decidamos convivir con ellas, de los valores que orienten su desarrollo y de nuestra disposición a utilizar la tecnología como un medio para ampliar las posibilidades humanas, sin perder de vista aquello que realmente importa.
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

      {/* Sibling Books in the same category */}
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

export default InteligenciaArtificialView;
