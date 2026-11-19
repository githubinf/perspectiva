import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface ElFuturoDelMarketingIaViewProps {
  book?: BookItem;
}

export const FUTURO_MARKETING_IA_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'marketing-experiencia-acumulada',
    label: 'El marketing ya no puede depender únicamente de la experiencia acumulada',
  },
  {
    id: 'segmentos-situaciones-consumidor',
    label: 'De los segmentos estáticos a las situaciones cambiantes del consumidor',
  },
  {
    id: 'relevancia-comunicacion-comercial',
    label: 'La relevancia como nueva medida de la comunicación comercial',
  },
  {
    id: 'velocidad-ejecucion-competencia',
    label: 'La velocidad de ejecución cambia la manera de competir',
  },
  {
    id: 'creatividad-estrategia-ia',
    label: 'Una nueva relación entre creatividad y estrategia',
  },
  {
    id: 'consumidor-no-es-datos',
    label: 'El consumidor no es un conjunto de datos',
  },
  {
    id: 'decisiones-mas-que-indicadores',
    label: 'Las decisiones necesitan algo más que indicadores',
  },
  {
    id: 'automatizacion-direccion',
    label: 'La automatización debe tener una dirección',
  },
  {
    id: 'experiencia-cada-interaccion',
    label: 'La experiencia del cliente se construye en cada interacción',
  },
  {
    id: 'profesional-marketing-nueva-perspectiva',
    label: 'El profesional del marketing necesita una nueva perspectiva',
  },
  {
    id: 'confianza-privacidad-personalizacion',
    label: 'La confianza, la privacidad y los límites de la personalización',
  },
  {
    id: 'marketing-futuro-adaptacion-criterio',
    label: 'El marketing del futuro será una combinación de adaptación y criterio',
  },
];

const OFFICIAL_BOOK_TITLE = 'El futuro del marketing (IA)';

const ElFuturoDelMarketingIaView: React.FC<ElFuturoDelMarketingIaViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'el-futuro-del-marketing-ia') ||
    ALL_BOOKS[0];

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
      {/* Breadcrumbs y zona comercial superior preservada */}
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
              href: currentBook.path || '/el-futuro-del-marketing-ia/',
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
          <BookPurchaseBlock book={currentBook} />
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
              {OFFICIAL_BOOK_TITLE}
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-5 font-serif italic leading-relaxed max-w-3xl">
              El poder disruptivo de la inteligencia artificial y el impacto transformador en el marketing digital
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>
            </p>
          </header>

          {/* Presentación introductoria (obligatoriamente ANTES del índice) */}
          <section
            aria-label="Introducción editorial"
            className="mb-12 pb-10 border-b border-[#dae7df]/60"
          >
            <p className="font-serif text-[22px] md:text-[25px] font-bold text-[#174532] leading-snug mb-5">
              Introducción
            </p>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                El marketing está atravesando una transformación que no depende únicamente de la aparición de nuevas herramientas, sino de un cambio en la manera de interpretar el mercado, comprender a las personas y organizar las decisiones comerciales. Durante años, muchas estrategias digitales se construyeron a partir de datos históricos, campañas planificadas, segmentos relativamente estables y procesos que requerían tiempo para evaluar sus resultados. Hoy, la inteligencia artificial introduce una dinámica diferente: la posibilidad de trabajar con información a mayor escala, detectar relaciones con rapidez y adaptar determinadas acciones a circunstancias que cambian constantemente.
              </p>
              <p>
                Este nuevo escenario no significa que las estrategias tradicionales hayan perdido todo su valor. Significa que sus fundamentos deben revisarse para comprender cómo pueden evolucionar. La tecnología está modificando las herramientas disponibles, pero también las expectativas de los consumidores, la competencia entre empresas y la manera en que se distribuye el esfuerzo dentro de una actividad de marketing.
              </p>
              <p>
                Comprender esta transformación exige mirar más allá de la automatización. La verdadera cuestión no es cuántas tareas podemos delegar en una máquina, sino cómo podemos construir una actividad comercial más consciente de su entorno, mejor preparada para interpretar información y capaz de responder sin perder su identidad ni su relación con las personas.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={FUTURO_MARKETING_IA_INDEX_ITEMS}
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
              id="marketing-experiencia-acumulada"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El marketing ya no puede depender únicamente de la experiencia acumulada
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La experiencia sigue siendo uno de los recursos más valiosos de cualquier profesional del marketing. Permite interpretar situaciones, reconocer patrones, comprender comportamientos y evitar errores que pueden resultar costosos. Sin embargo, un mercado digital cada vez más dinámico puede generar una cantidad de señales difícil de observar mediante métodos exclusivamente manuales.
                </p>
                <p>
                  Las preferencias cambian, los intereses se desplazan, aparecen nuevos competidores y los consumidores interactúan con marcas a través de múltiples canales. En estas circunstancias, tomar decisiones basándonos únicamente en experiencias anteriores puede limitar nuestra capacidad de reconocer lo que está ocurriendo en el presente.
                </p>
                <p>
                  La inteligencia artificial permite incorporar nuevas formas de analizar esa realidad. Puede ayudarnos a examinar información, descubrir relaciones, identificar variaciones y encontrar indicios que merecen una investigación más profunda. Su valor no consiste en reemplazar la experiencia, sino en ofrecerle una perspectiva más amplia.
                </p>
                <p>
                  El profesional del marketing necesita combinar lo que ya sabe con aquello que puede descubrir a través de los datos. Esta combinación resulta especialmente importante cuando las condiciones del mercado cambian con rapidez y las decisiones deben revisarse antes de que una oportunidad pierda relevancia.
                </p>
                <p>
                  La experiencia aporta contexto. La tecnología amplía nuestra capacidad de observación. El criterio profesional permite transformar ambas cosas en decisiones que tengan sentido.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="segmentos-situaciones-consumidor"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                De los segmentos estáticos a las situaciones cambiantes del consumidor
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Durante mucho tiempo, la segmentación del mercado se apoyó en características relativamente estables, como la edad, la ubicación, determinados intereses o los hábitos de consumo. Estos criterios continúan siendo útiles para comprender grupos de personas, pero no siempre reflejan lo que cada consumidor necesita en un momento concreto.
                </p>
                <p>
                  Una misma persona puede tener motivaciones diferentes dependiendo de la situación, la urgencia, el contexto o la etapa en la que se encuentre. Alguien que habitualmente compara precios puede priorizar la rapidez en otra circunstancia. Un consumidor interesado en una categoría puede no estar preparado para comprar, mientras que otro que apenas había mostrado interés puede encontrarse ante una necesidad inmediata.
                </p>
                <p>
                  La inteligencia artificial abre la posibilidad de interpretar señales más variadas y reconocer cambios en determinados patrones de comportamiento. Esto permite que las estrategias de marketing evolucionen desde una clasificación relativamente rígida hacia una comprensión más contextual del consumidor.
                </p>
                <p>
                  Sin embargo, interpretar comportamiento no equivale a conocer completamente a una persona. Los datos ofrecen indicios, no una representación total de sus motivaciones. Una estrategia responsable debe evitar convertir las inferencias tecnológicas en certezas y mantener una perspectiva respetuosa sobre las circunstancias individuales.
                </p>
                <p>
                  La oportunidad está en comprender mejor el contexto de una interacción y responder con mayor pertinencia, no en perseguir al consumidor mediante una personalización excesiva.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="relevancia-comunicacion-comercial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relevancia como nueva medida de la comunicación comercial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En un entorno saturado de mensajes, captar atención se ha convertido en una tarea cada vez más difícil. Las personas reciben estímulos comerciales continuamente y desarrollan mecanismos para ignorar aquello que no consideran útil, oportuno o interesante.
                </p>
                <p>
                  El problema ya no consiste únicamente en producir más contenido o aumentar la frecuencia de nuestras comunicaciones. También debemos preguntarnos si el mensaje tiene una razón legítima para aparecer, si responde a una necesidad y si aporta algo que el destinatario pueda valorar.
                </p>
                <p>
                  La inteligencia artificial puede contribuir a mejorar esa relevancia al facilitar la interpretación de información contextual, la organización de contenidos y la adaptación de determinadas comunicaciones. Esto permite reconsiderar el marketing desde una perspectiva menos centrada en la cantidad de impactos y más orientada a la calidad de las interacciones.
                </p>
                <p>
                  Una comunicación relevante no necesariamente es la más sofisticada. Puede ser simplemente la que llega en el momento adecuado, explica algo con claridad o ayuda a resolver una duda sin añadir ruido.
                </p>
                <p>
                  La tecnología puede mejorar nuestra capacidad de identificar oportunidades para comunicarnos, pero el mensaje continúa dependiendo de la comprensión del producto, de la audiencia y de la intención que existe detrás de la interacción.
                </p>
                <p>
                  Cuando la personalización se utiliza para aportar valor, puede fortalecer una relación. Cuando se emplea únicamente para presionar o aumentar la frecuencia de los estímulos, corre el riesgo de deteriorarla.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="velocidad-ejecucion-competencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La velocidad de ejecución cambia la manera de competir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En marketing, muchas oportunidades dependen de nuestra capacidad para actuar en el momento adecuado. Una campaña puede perder relevancia si tarda demasiado en adaptarse, una tendencia puede desaparecer antes de que consigamos aprovecharla y una decisión comercial puede quedar obsoleta cuando las condiciones del mercado cambian.
                </p>
                <p>
                  La inteligencia artificial puede reducir el tiempo necesario para determinadas actividades, facilitar la preparación de materiales, apoyar la exploración de alternativas y acelerar el análisis de información. Esto modifica la relación entre planificación y ejecución.
                </p>
                <p>
                  La rapidez, sin embargo, no debe confundirse con precipitación. Poder generar muchas campañas, mensajes o variantes en poco tiempo no significa que todas merezcan ser utilizadas. La facilidad de producción puede aumentar el volumen de decisiones que necesitamos tomar y, si no existe una dirección clara, también puede incrementar la dispersión.
                </p>
                <p>
                  La ventaja competitiva no estará necesariamente en producir más que los demás, sino en aprovechar mejor el tiempo disponible. Una organización que identifica una oportunidad, formula una hipótesis, la evalúa y aprende de sus resultados puede desarrollar una capacidad de adaptación más valiosa que otra que simplemente acumula actividad.
                </p>
                <p>
                  La inteligencia artificial puede acelerar el trabajo. La estrategia debe decidir qué merece esa velocidad y hacia dónde dirigirla.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="creatividad-estrategia-ia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una nueva relación entre creatividad y estrategia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La creatividad siempre ha ocupado un lugar importante en el marketing, pero su función no se limita a diseñar anuncios, escribir textos atractivos o desarrollar ideas originales. También consiste en encontrar nuevas maneras de interpretar un problema, descubrir oportunidades y construir propuestas que tengan sentido para un público determinado.
                </p>
                <p>
                  La inteligencia artificial introduce nuevas posibilidades en ese proceso. Puede ayudarnos a explorar enfoques, comparar conceptos, ampliar una lluvia de ideas, identificar alternativas y trabajar sobre materiales iniciales que después necesitan criterio y refinamiento.
                </p>
                <p>
                  Esta capacidad puede resultar especialmente valiosa cuando el equipo necesita explorar diferentes perspectivas antes de comprometer recursos con una campaña.
                </p>
                <p>
                  No obstante, la creatividad no se mide por la cantidad de propuestas que somos capaces de generar. Una idea adquiere valor cuando responde a un propósito, comprende el contexto y ofrece una perspectiva que puede resultar significativa para las personas.
                </p>
                <p>
                  El riesgo de utilizar la tecnología sin una dirección creativa es producir mensajes técnicamente correctos, pero intercambiables. Si todos utilizamos los mismos recursos de manera similar, la abundancia de contenido puede hacer que las marcas pierdan personalidad.
                </p>
                <p>
                  La inteligencia artificial puede ampliar el espacio de exploración, pero la identidad, la intención y la selección de aquello que merece desarrollarse continúan siendo responsabilidades fundamentales del equipo de marketing.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="consumidor-no-es-datos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El consumidor no es un conjunto de datos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los datos pueden ayudarnos a comprender determinadas acciones, preferencias y tendencias. Sin embargo, detrás de cada registro existe una persona que no puede reducirse completamente a su comportamiento digital.
                </p>
                <p>
                  Las decisiones de compra están condicionadas por circunstancias, expectativas, emociones, experiencias previas, prioridades y factores que no siempre quedan registrados en una plataforma. Por esta razón, una interpretación exclusivamente cuantitativa puede ofrecer una visión incompleta de la realidad.
                </p>
                <p>
                  La inteligencia artificial puede encontrar patrones que resulten útiles, pero esos patrones necesitan ser interpretados dentro de un contexto más amplio. Un cambio en el comportamiento puede tener múltiples explicaciones y no todas pueden identificarse mediante los datos disponibles.
                </p>
                <p>
                  El marketing debe utilizar la información para comprender mejor a las personas, no para tratarlas como mecanismos previsibles.
                </p>
                <p>
                  Esto exige revisar la manera en que diseñamos nuestras estrategias. Una personalización eficaz no consiste en demostrar cuánto sabemos sobre alguien, sino en ofrecer una experiencia que resulte apropiada, respetuosa y útil.
                </p>
                <p>
                  La confianza puede convertirse en un factor diferenciador precisamente porque la tecnología permite realizar acciones cada vez más sofisticadas. En un entorno donde la capacidad de intervenir aumenta, también aumenta la importancia de saber cuándo hacerlo y cuándo dejar espacio al consumidor.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="decisiones-mas-que-indicadores"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Las decisiones necesitan algo más que indicadores
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El marketing digital ha desarrollado una cultura de medición que permite evaluar campañas, comparar resultados y analizar diferentes variables. Esta capacidad es fundamental para comprender el rendimiento de nuestras acciones y mejorar la utilización de los recursos.
                </p>
                <p>
                  La inteligencia artificial puede facilitar el análisis de grandes cantidades de información y ayudar a reconocer patrones que no resultan evidentes en una revisión convencional. También puede contribuir a formular hipótesis, detectar cambios y explorar posibles escenarios.
                </p>
                <p>
                  Pero medir no es lo mismo que comprender.
                </p>
                <p>
                  Un indicador puede mostrar que una campaña ha generado determinados resultados, sin explicar completamente por qué ocurrió. Una variación puede estar relacionada con múltiples factores y no necesariamente con el cambio que estamos evaluando. Una correlación puede ofrecer una pista, pero no siempre demuestra una relación causal.
                </p>
                <p>
                  Por eso, las decisiones de marketing necesitan combinar la observación cuantitativa con el conocimiento del contexto, la formulación de hipótesis y la evaluación de las consecuencias.
                </p>
                <p>
                  La inteligencia artificial puede ayudarnos a organizar la evidencia y ampliar el análisis, pero no debemos confundir sus conclusiones con una explicación definitiva.
                </p>
                <p>
                  El valor de la información aumenta cuando sabemos interpretarla, cuestionarla y utilizarla para tomar decisiones mejor fundamentadas.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="automatizacion-direccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La automatización debe tener una dirección
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Automatizar determinadas actividades puede mejorar la organización, reducir tareas repetitivas y facilitar la continuidad de una estrategia. Sin embargo, la automatización no constituye por sí misma un objetivo comercial.
                </p>
                <p>
                  Una empresa puede automatizar numerosos procesos y continuar teniendo problemas de posicionamiento, una propuesta de valor poco clara o una comunicación que no responde a las necesidades de su mercado.
                </p>
                <p>
                  La inteligencia artificial amplía las posibilidades de automatización al facilitar determinadas tareas que anteriormente requerían más intervención manual. Esto puede modificar la forma en que organizamos campañas, administramos información y coordinamos actividades.
                </p>
                <p>
                  Para que estos cambios produzcan valor, necesitamos identificar qué procesos merecen automatizarse, cuáles requieren supervisión y cuáles deberían mantenerse bajo intervención directa.
                </p>
                <p>
                  También es importante comprender que un proceso automatizado puede amplificar tanto los aciertos como los errores. Si las condiciones iniciales son inadecuadas, la tecnología puede reproducir problemas con mayor rapidez y alcance.
                </p>
                <p>
                  La automatización inteligente comienza con una estructura bien definida, objetivos claros y mecanismos que permitan revisar el funcionamiento del sistema.
                </p>
                <p>
                  No se trata de conseguir que el marketing funcione sin personas, sino de organizar mejor el trabajo para que los recursos humanos puedan concentrarse en las actividades que requieren comprensión, creatividad y dirección.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="experiencia-cada-interaccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La experiencia del cliente se construye en cada interacción
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La relación entre una marca y un consumidor no depende únicamente de una campaña publicitaria. Se construye a través de múltiples interacciones que pueden incluir búsquedas, consultas, visitas, compras, entregas, atención, seguimiento y experiencias posteriores.
                </p>
                <p>
                  Cada contacto puede influir en la percepción que una persona desarrolla sobre una empresa. Por eso, mejorar la experiencia del cliente requiere observar la relación completa, no únicamente el rendimiento de una acción aislada.
                </p>
                <p>
                  La inteligencia artificial puede ayudar a identificar dificultades, organizar consultas, facilitar respuestas, reconocer necesidades frecuentes y mejorar la coordinación entre determinados puntos de contacto.
                </p>
                <p>
                  Estas capacidades pueden contribuir a reducir fricciones, pero una experiencia satisfactoria no depende exclusivamente de la rapidez. También importa que la respuesta sea adecuada, que la información sea correcta y que exista una solución cuando las circunstancias se salen de lo previsto.
                </p>
                <p>
                  La tecnología puede facilitar la atención, pero no debe convertirse en una barrera que impida a las personas resolver problemas reales.
                </p>
                <p>
                  Una estrategia de marketing más madura entiende que la experiencia del cliente no termina cuando se consigue una conversión. La relación continúa y puede influir en la confianza, la satisfacción, la recomendación y la continuidad comercial.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="profesional-marketing-nueva-perspectiva"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El profesional del marketing necesita una nueva perspectiva
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La incorporación de inteligencia artificial modifica algunas de las capacidades que resultan importantes dentro de una actividad de marketing. Conocer herramientas puede ser útil, pero su valor depende de la capacidad para integrarlas en una estrategia.
                </p>
                <p>
                  El profesional necesita comprender el mercado, formular preguntas relevantes, interpretar resultados, evaluar propuestas y reconocer cuándo una solución tecnológica no responde al problema planteado.
                </p>
                <p>
                  También adquiere importancia la capacidad de coordinar diferentes recursos. El marketing puede integrar información, creatividad, comunicación, tecnología y análisis, pero esa integración requiere una visión que evite que cada elemento funcione de manera aislada.
                </p>
                <p>
                  La evolución tecnológica no elimina la necesidad de aprender los fundamentos de la disciplina. Al contrario, comprender el comportamiento del consumidor, la propuesta de valor, el posicionamiento, la comunicación y los objetivos comerciales permite utilizar herramientas con mayor sentido.
                </p>
                <p>
                  El conocimiento superficial de múltiples plataformas puede resultar menos valioso que una comprensión sólida de los problemas que debemos resolver.
                </p>
                <p>
                  La inteligencia artificial amplía las capacidades disponibles. El criterio profesional determina cómo combinarlas, qué resultados aceptar y qué decisiones necesitan una revisión más profunda.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="confianza-privacidad-personalizacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza, la privacidad y los límites de la personalización
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La posibilidad de utilizar información para adaptar experiencias comerciales plantea una cuestión fundamental: ¿hasta qué punto una comunicación personalizada resulta beneficiosa para el consumidor?
                </p>
                <p>
                  La relevancia puede mejorar una interacción, pero la utilización excesiva de datos, la falta de transparencia o determinadas formas de influencia pueden generar incomodidad y deteriorar la confianza.
                </p>
                <p>
                  Las marcas necesitan comprender que la capacidad tecnológica no justifica automáticamente cualquier práctica. El hecho de que un sistema permita inferir determinadas preferencias no significa que siempre sea apropiado utilizar esa información.
                </p>
                <p>
                  La protección de los datos, la transparencia, el respeto por las decisiones individuales y la responsabilidad en el uso de las tecnologías deben formar parte de la estrategia, no aparecer únicamente como obligaciones secundarias.
                </p>
                <p>
                  Una relación comercial sostenible necesita que el consumidor pueda comprender, aceptar y confiar en la forma en que una empresa se comunica con él.
                </p>
                <p>
                  La inteligencia artificial puede facilitar una personalización más precisa, pero el verdadero valor de esa capacidad dependerá de la manera en que se utilice.
                </p>
                <p>
                  La confianza no se construye únicamente mediante mensajes atractivos o experiencias eficientes. También depende de aquello que una marca decide no hacer.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="marketing-futuro-adaptacion-criterio"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El marketing del futuro será una combinación de adaptación y criterio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La evolución de la inteligencia artificial continuará modificando las herramientas, los canales y las posibilidades disponibles para los profesionales del marketing. Algunas prácticas actuales cambiarán, otras perderán relevancia y aparecerán nuevas formas de relacionarse con los consumidores.
                </p>
                <p>
                  Ante este escenario, intentar anticipar cada tecnología puede convertirse en una tarea interminable. Lo más importante será desarrollar una capacidad de adaptación que permita comprender los cambios sin perder de vista los fundamentos de la actividad.
                </p>
                <p>
                  Una estrategia necesita dirección, objetivos, una propuesta de valor y una comprensión del público al que pretende servir. Las herramientas pueden facilitar su ejecución, pero no sustituyen la necesidad de construir una visión coherente.
                </p>
                <p>
                  El marketing del futuro no dependerá exclusivamente de quién dispone de la tecnología más avanzada. También dependerá de quién sabe interpretar mejor su mercado, utilizar la información con responsabilidad, construir relaciones de confianza y adaptar sus decisiones sin perder su identidad.
                </p>
                <p>
                  La inteligencia artificial puede cambiar la manera de hacer marketing, pero no elimina la necesidad de comprender por qué lo hacemos, para quién trabajamos y qué valor pretendemos aportar.
                </p>
                <p>
                  La verdadera transformación comienza cuando dejamos de considerar la tecnología como una novedad aislada y aprendemos a integrarla en una forma de pensar, decidir y actuar que tenga sentido a largo plazo.
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

export default ElFuturoDelMarketingIaView;
