import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface MarketingCpaEntrepreneursViewProps {
  book?: BookItem;
}

export const MARKETING_CPA_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'significado-economico-accion',
    label: 'El significado económico de una acción',
  },
  {
    id: 'oferta-punto-partida',
    label: 'La oferta como punto de partida de una campaña',
  },
  {
    id: 'comprender-mercado-invertir',
    label: 'Comprender el mercado antes de invertir',
  },
  {
    id: 'audiencia-trafico',
    label: 'La relación entre audiencia y tráfico',
  },
  {
    id: 'disenar-campana-objetivos',
    label: 'Diseñar una campaña con objetivos coherentes',
  },
  {
    id: 'canales-publicitarios',
    label: 'El papel de los canales publicitarios',
  },
  {
    id: 'conversion-indicador-rendimiento',
    label: 'La conversión como indicador de rendimiento',
  },
  {
    id: 'seguimiento-calidad-datos',
    label: 'Seguimiento y calidad de los datos',
  },
  {
    id: 'optimizar-decisiones',
    label: 'Optimizar mediante decisiones fundamentadas',
  },
  {
    id: 'inteligencia-artificial-segmentacion',
    label: 'La inteligencia artificial y la segmentación',
  },
  {
    id: 'escalar-control-economico',
    label: 'Escalar sin perder el control económico',
  },
  {
    id: 'responsabilidad-evolucion',
    label: 'Responsabilidad y evolución de las campañas',
  },
];

const MarketingCpaEntrepreneursView: React.FC<MarketingCpaEntrepreneursViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'marketing-cpa-para-emprendedores') ||
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
              : [{ label: 'Ingresos', href: '/ingresos/' }]),
            {
              label: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
              href: currentBook.path || '/marketing-cpa-para-emprendedores/',
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
                href={parentCategory?.path || '/ingresos/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Ingresos'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Marketing CPA Para Emprendedores y Profesionales Digitales
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Este manual práctico te guía paso a paso en el mundo del marketing basado en acciones, desde la selección de ofertas hasta la optimización avanzada.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una visión estratégica del marketing CPA como sistema de adquisición medible, donde la relación entre oferta, tráfico, conversión y coste determina las decisiones de una campaña.
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
                En el marketing digital, no todas las interacciones tienen el mismo valor comercial. Una visita puede representar interés, un registro puede indicar una intención más definida y una compra constituye una acción con consecuencias económicas directas. Esta diferencia permite comprender por qué el modelo CPA ocupa un lugar particular dentro de la publicidad y la monetización en línea.
              </p>
              <p>
                El Coste por Acción introduce una lógica en la que el resultado que se busca tiene una importancia central. La remuneración está vinculada a una acción previamente establecida, cuyas condiciones deben conocerse antes de poner en marcha cualquier actividad promocional. Por tanto, no basta con conseguir visitas ni con generar movimiento alrededor de una oferta: es necesario entender qué comportamiento se considera válido y qué factores intervienen para que se produzca.
              </p>
              <p>
                Esta particularidad convierte al marketing CPA en una actividad que necesita análisis. Una campaña puede atraer un volumen considerable de usuarios y, aun así, no generar las acciones necesarias. También puede producir conversiones sin que su coste total resulte conveniente. La diferencia entre actividad y rendimiento es una de las cuestiones fundamentales para gestionar este modelo con criterio.
              </p>
              <p>
                A lo largo de esta ficha examinaremos el CPA desde la perspectiva de la gestión de campañas y la toma de decisiones. Abordaremos la relación entre las ofertas y el público, el valor del tráfico, la interpretación de los resultados y la importancia de disponer de información fiable. El propósito es comprender los elementos que intervienen en una actividad de adquisición basada en acciones y cómo se relacionan dentro de un proceso que necesita control y mejora continua.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={MARKETING_CPA_INDEX_ITEMS}
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
              id="significado-economico-accion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El significado económico de una acción
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Para comprender el marketing CPA debemos comenzar por la naturaleza de la acción que determina una conversión. No todas las campañas persiguen el mismo comportamiento: algunas pueden estar orientadas a conseguir registros, otras a obtener solicitudes de información y otras a generar operaciones comerciales. Cada modalidad tiene condiciones particulares que influyen en su valor y en la manera de evaluar su rendimiento.
                </p>
                <p>
                  La acción constituye el punto de referencia de la relación económica. Por eso, antes de promocionar una oferta es necesario conocer qué debe hacer el usuario, qué requisitos debe cumplir esa interacción y bajo qué circunstancias se reconoce como válida. Una conversión registrada inicialmente puede estar sujeta a comprobaciones o condiciones que afecten a su reconocimiento definitivo.
                </p>
                <p>
                  Esta diferencia resulta importante para evitar interpretaciones equivocadas. El volumen de acciones no siempre representa el resultado económico final, del mismo modo que una campaña con menos conversiones no tiene necesariamente un rendimiento inferior. La evaluación depende de la naturaleza de la acción, de su valor y de los recursos empleados para conseguirla.
                </p>
                <p>
                  Comprender esta lógica permite analizar el CPA como algo más que una modalidad publicitaria. Es una relación entre objetivos medibles, condiciones comerciales y decisiones de inversión.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="oferta-punto-partida"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La oferta como punto de partida de una campaña
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una campaña comienza mucho antes de publicar un anuncio o dirigir visitantes hacia una página. Su viabilidad está condicionada por las características de la oferta que se pretende promocionar. Si no comprendemos qué se está ofreciendo, a quién puede interesarle y qué requisitos establece el programa, resulta difícil construir una actividad coherente.
                </p>
                <p>
                  La evaluación debe considerar tanto el atractivo comercial como las condiciones operativas. Es importante conocer las restricciones de promoción, los territorios admitidos, el tipo de acción remunerada y los criterios de validación. Estos elementos pueden determinar si una oferta encaja con los recursos y las posibilidades de quien desarrolla la campaña.
                </p>
                <p>
                  También debemos prestar atención a la relación entre la promesa comercial y la experiencia que encontrará el usuario. Una oferta puede parecer interesante desde el punto de vista de su remuneración, pero resultar poco adecuada para el público al que tenemos acceso. En ese caso, la dificultad no se resuelve simplemente aumentando la promoción.
                </p>
                <p>
                  Seleccionar con criterio implica comprender la oportunidad en su conjunto. El objetivo no es reunir ofertas por su aparente atractivo, sino identificar aquellas que puedan integrarse en una estrategia razonable y verificable.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="comprender-mercado-invertir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Comprender el mercado antes de invertir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El mercado condiciona la respuesta de cualquier campaña. Las necesidades de los consumidores, las alternativas disponibles y el comportamiento de otros participantes influyen en la capacidad de una oferta para despertar interés y generar una acción.
                </p>
                <p>
                  Investigar antes de invertir permite reducir decisiones basadas exclusivamente en intuiciones. Necesitamos conocer las características del público al que nos dirigimos y comprender qué circunstancias pueden influir en su disposición a realizar la acción propuesta. Una misma oferta puede recibir respuestas muy diferentes dependiendo del contexto en el que se presente.
                </p>
                <p>
                  La competencia también proporciona información útil. Observar cómo se posicionan otras propuestas permite reconocer qué argumentos se utilizan, qué características diferencian las alternativas y dónde puede existir una oportunidad para comunicar con mayor claridad. No se trata de reproducir lo que hacen otros anunciantes, sino de comprender el entorno en el que nuestra campaña tendrá que desenvolverse.
                </p>
                <p>
                  Esta fase de análisis ayuda a establecer expectativas realistas. Cuanto mejor comprendamos las condiciones del mercado, más fundamentadas serán las decisiones posteriores sobre inversión, comunicación y selección de canales.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="audiencia-trafico"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación entre audiencia y tráfico
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El tráfico representa la llegada de usuarios a los espacios donde se presenta una oferta. Sin embargo, su cantidad no explica por sí sola el valor de una campaña. Lo importante es comprender qué personas llegan, por qué motivo lo hacen y qué relación existe entre sus expectativas y la acción que se pretende conseguir.
                </p>
                <p>
                  Una campaña puede recibir numerosas visitas y generar pocas conversiones cuando el público no coincide con las características de la oferta. También puede atraer menos usuarios, pero producir interacciones más próximas al objetivo comercial. Por eso, evaluar el tráfico exige observar su calidad y no únicamente su volumen.
                </p>
                <p>
                  La relación entre audiencia y propuesta resulta determinante. Cuando el mensaje atrae a personas con intereses diferentes de los que requiere la oferta, se produce una desconexión que puede afectar a todo el proceso. La segmentación debe ayudar a establecer una correspondencia razonable entre el público, la comunicación y la acción esperada.
                </p>
                <p>
                  Esta perspectiva evita considerar el tráfico como un fin en sí mismo. En el modelo CPA, la adquisición de visitantes tiene sentido cuando contribuye a generar oportunidades de conversión dentro de las condiciones económicas de la campaña.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="disenar-campana-objetivos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Diseñar una campaña con objetivos coherentes
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una campaña necesita una dirección definida. Antes de ponerla en marcha debemos establecer qué resultado buscamos, qué recursos podemos destinar y cómo evaluaremos su evolución. Sin estos criterios, las decisiones posteriores pueden convertirse en una sucesión de ajustes sin una referencia clara.
                </p>
                <p>
                  Los objetivos deben guardar relación con las características de la oferta y con las posibilidades reales de ejecución. También deben permitir distinguir entre las etapas del proceso: atraer usuarios, conseguir que comprendan la propuesta y facilitar que realicen la acción correspondiente.
                </p>
                <p>
                  La planificación ayuda a organizar los recursos disponibles y a determinar qué aspectos necesitan seguimiento. El presupuesto, los canales, la segmentación y los mensajes forman parte de una misma estructura. Modificar uno de estos elementos puede afectar a los demás, por lo que conviene comprender sus relaciones antes de atribuir un resultado a una sola variable.
                </p>
                <p>
                  Una campaña bien planteada no es necesariamente la más compleja. Es aquella que permite identificar sus objetivos, conocer sus condiciones y evaluar si las decisiones adoptadas están contribuyendo al resultado esperado.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="canales-publicitarios"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El papel de los canales publicitarios
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los canales publicitarios ofrecen distintas formas de acercar una propuesta a posibles usuarios. Cada uno tiene características propias, públicos diferentes y condiciones que pueden influir en la respuesta de una campaña. Por ello, elegir dónde promocionar una oferta es una decisión que debe partir de la naturaleza del objetivo.
                </p>
                <p>
                  No todos los canales son adecuados para todas las acciones. Algunas propuestas pueden beneficiarse de entornos donde las personas ya manifiestan una necesidad concreta, mientras que otras requieren generar interés antes de que exista una intención definida. La forma de comunicar y el contexto de exposición pueden modificar considerablemente la respuesta.
                </p>
                <p>
                  La publicidad en buscadores, las plataformas sociales y otros espacios digitales presentan posibilidades diferentes. Lo importante es comprender qué función cumple cada canal y qué tipo de interacción puede facilitar. Utilizar varios medios no garantiza un mejor resultado si no existe una relación coherente entre ellos y el objetivo de la campaña.
                </p>
                <p>
                  La elección también debe considerar las condiciones económicas y operativas de cada plataforma. La inversión, las políticas publicitarias y las características de medición pueden influir en la viabilidad de una acción promocional.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="conversion-indicador-rendimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La conversión como indicador de rendimiento
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La conversión permite observar si una campaña está consiguiendo el comportamiento que se ha establecido como objetivo. Sin embargo, su interpretación requiere considerar el proceso completo que conduce hasta ella.
                </p>
                <p>
                  Una cifra de conversiones aislada ofrece información limitada. Para comprender su significado necesitamos relacionarla con el volumen de usuarios, el coste de adquisición, las características de la oferta y las condiciones de validación. De esta forma podemos distinguir entre una campaña que produce actividad y otra que consigue resultados económicamente razonables.
                </p>
                <p>
                  También es importante identificar dónde aparecen las dificultades. Si los usuarios llegan, pero no completan la acción, puede existir una desconexión entre el mensaje y la propuesta, una experiencia poco clara o alguna condición que dificulte el proceso. Reconocer estas diferencias permite evitar cambios indiscriminados.
                </p>
                <p>
                  La conversión debe entenderse como una señal dentro de un sistema más amplio. Su valor no reside únicamente en el número registrado, sino en lo que nos permite comprender acerca del comportamiento de la campaña.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="seguimiento-calidad-datos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Seguimiento y calidad de los datos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El seguimiento proporciona la información necesaria para conocer qué está ocurriendo durante la actividad promocional. Sin datos suficientemente fiables, resulta difícil establecer relaciones entre las acciones realizadas y los resultados obtenidos.
                </p>
                <p>
                  En una campaña CPA, el registro correcto de las interacciones tiene especial importancia porque la remuneración depende de acciones concretas. Necesitamos comprender cómo se atribuyen las conversiones, qué información ofrece la plataforma y qué diferencias pueden existir entre los registros iniciales y los resultados finalmente reconocidos.
                </p>
                <p>
                  La calidad de los datos también influye en las decisiones posteriores. Una medición incompleta puede conducir a conclusiones equivocadas y provocar que se mantengan acciones poco eficaces o se interrumpan otras que todavía tienen potencial.
                </p>
                <p>
                  Por eso, el seguimiento no debería limitarse a consultar cifras ocasionalmente. Debe formar parte de la gestión de la campaña y permitir revisar su evolución con criterios consistentes. La información adquiere valor cuando podemos interpretarla y utilizarla para orientar las decisiones.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="optimizar-decisiones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Optimizar mediante decisiones fundamentadas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Optimizar no significa modificar constantemente una campaña. Significa identificar qué aspectos pueden mejorar y realizar cambios con una razón concreta. Cuando se alteran demasiados elementos simultáneamente, resulta complicado comprender qué ha influido en el resultado.
                </p>
                <p>
                  La comparación entre alternativas permite evaluar diferencias en mensajes, presentaciones y otros elementos de la experiencia publicitaria. Las pruebas controladas pueden aportar información útil, siempre que exista una referencia clara y que los datos sean suficientes para interpretar las variaciones.
                </p>
                <p>
                  También debemos considerar que los resultados pueden cambiar por factores externos. Las condiciones de una plataforma, la competencia o el comportamiento del público pueden influir en el rendimiento sin que exista una modificación directa de nuestra parte.
                </p>
                <p>
                  Una optimización responsable combina observación, análisis y prudencia. No todas las variaciones representan una mejora real, ni todos los cambios positivos en un indicador significan que la campaña sea más rentable. La finalidad es comprender qué ajustes contribuyen al objetivo económico y cuáles introducen complejidad sin aportar valor.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="inteligencia-artificial-segmentacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La inteligencia artificial y la segmentación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las herramientas de inteligencia artificial amplían las posibilidades de análisis y organización de las campañas. Pueden ayudar a interpretar información, explorar patrones y facilitar determinadas tareas relacionadas con la segmentación o la preparación de materiales publicitarios.
                </p>
                <p>
                  Sin embargo, su utilidad depende de la calidad de los datos y de la claridad del problema que se desea resolver. Una herramienta puede procesar grandes cantidades de información, pero eso no significa que todas sus conclusiones sean adecuadas para una decisión comercial. Es necesario revisar los resultados y comprender sus limitaciones.
                </p>
                <p>
                  La segmentación también requiere criterio. Dividir una audiencia en grupos cada vez más específicos no garantiza que la campaña mejore. Lo importante es que esas diferencias permitan comunicar una propuesta más pertinente y evaluar mejor la respuesta de los usuarios.
                </p>
                <p>
                  La tecnología debe integrarse como apoyo a la gestión, no como sustituto de la comprensión del mercado. La interpretación humana sigue siendo necesaria para valorar las condiciones comerciales, las expectativas del público y las consecuencias de las decisiones adoptadas.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="escalar-control-economico"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Escalar sin perder el control económico
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando una campaña presenta resultados favorables, puede surgir la posibilidad de ampliar su alcance. Sin embargo, aumentar la inversión o extender la promoción no garantiza que se mantengan las mismas condiciones de rendimiento.
                </p>
                <p>
                  El crecimiento introduce nuevas variables. Puede cambiar la composición del público, aumentar la competencia o modificarse el coste de adquisición. Por eso, antes de ampliar una actividad es necesario comprobar si los resultados actuales responden a condiciones que pueden mantenerse en una escala diferente.
                </p>
                <p>
                  La gestión económica debe acompañar cualquier decisión de expansión. No basta con observar que se generan más conversiones: debemos comprender qué recursos adicionales exige ese crecimiento y si la relación entre costes y resultados continúa siendo conveniente.
                </p>
                <p>
                  Escalar también implica conservar la capacidad de seguimiento. Si la actividad aumenta hasta un punto en el que ya no podemos interpretar adecuadamente los datos o controlar las condiciones de las campañas, el crecimiento puede convertirse en una fuente de riesgo.
                </p>
                <p>
                  La expansión tiene sentido cuando existe una base suficientemente comprendida y podemos mantener el control sobre los elementos que determinan su funcionamiento.
                </p>
              </div>
            </section>

            {/* Apartado 12 — Cierre editorial */}
            <section
              id="responsabilidad-evolucion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Responsabilidad y evolución de las campañas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El marketing CPA se desarrolla dentro de un entorno comercial y tecnológico sujeto a condiciones cambiantes. Las plataformas establecen políticas, los programas determinan requisitos y las normas aplicables pueden variar según el mercado y la actividad. Por eso, gestionar campañas implica conocer las responsabilidades asociadas a cada espacio de promoción.
                </p>
                <p>
                  La transparencia en la comunicación y el respeto por los usuarios son elementos importantes de esa gestión. Las afirmaciones publicitarias deben corresponderse con las características reales de las ofertas y no generar expectativas que no puedan justificarse. También debemos prestar atención al tratamiento de la información personal y a las condiciones que regulan su utilización.
                </p>
                <p>
                  La evolución de las campañas requiere revisar periódicamente los procedimientos. Una práctica que era adecuada en determinadas circunstancias puede necesitar ajustes cuando cambian las reglas, las herramientas o el comportamiento del mercado.
                </p>
                <p>
                  El aprendizaje también forma parte de esa evolución. Cada campaña aporta información sobre las decisiones adoptadas, las respuestas obtenidas y los aspectos que necesitan atención. Interpretar esa experiencia permite construir una actividad más organizada y evitar que los mismos errores se repitan.
                </p>
                <p>
                  El marketing CPA no debe entenderse como una fórmula automática para obtener resultados. Es un modelo de adquisición que exige comprender la relación entre acción, oferta, tráfico y coste. Su desarrollo depende de la capacidad para analizar esas variables, actuar con responsabilidad y mantener el control sobre las decisiones que determinan el rendimiento.
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

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
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

export default MarketingCpaEntrepreneursView;
