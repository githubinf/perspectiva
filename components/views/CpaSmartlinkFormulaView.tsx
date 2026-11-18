import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface CpaSmartlinkFormulaViewProps {
  book?: BookItem;
}

export const CPA_SMARTLINK_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'smartlink-mecanismo-distribucion',
    label: 'El Smartlink como mecanismo de distribución',
  },
  {
    id: 'redes-ofertas-condiciones',
    label: 'La relación entre redes, ofertas y condiciones',
  },
  {
    id: 'trafico-precio-calidad',
    label: 'Elegir tráfico sin confundir precio y calidad',
  },
  {
    id: 'presupuesto-aprendizaje',
    label: 'El presupuesto como instrumento de aprendizaje',
  },
  {
    id: 'geografia-comportamiento-audiencia',
    label: 'La geografía y el comportamiento de la audiencia',
  },
  {
    id: 'arquitectura-campana-controlada',
    label: 'La arquitectura de una campaña controlada',
  },
  {
    id: 'pagina-intermedia-campana',
    label: 'Cuando una campaña necesita una página intermedia',
  },
  {
    id: 'seguimiento-comprension',
    label: 'El seguimiento como herramienta de comprensión',
  },
  {
    id: 'interpretar-resultados-limites',
    label: 'Interpretar resultados y reconocer los límites',
  },
  {
    id: 'pruebas-estrategia-amplia',
    label: 'Pasar de las pruebas a una estrategia más amplia',
  },
  {
    id: 'criterio-entorno-cambiante',
    label: 'Desarrollar criterio en un entorno cambiante',
  },
];

const CpaSmartlinkFormulaView: React.FC<CpaSmartlinkFormulaViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'cpa-marketing-formula-smartlink') ||
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
              label: 'CPA Marketing Fórmula Smartlink',
              href: currentBook.path || '/cpa-marketing-formula-smartlink/',
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
              CPA Marketing Fórmula Smartlink
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Una guía de Marketing para principiantes para ganar dinero con las redes CPA.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Cómo comprender la lógica de los enlaces inteligentes, organizar pruebas de tráfico y tomar decisiones de campaña sin perder de vista el presupuesto ni la calidad de los resultados.
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
                Uno de los principales obstáculos al comenzar en el marketing CPA no es la falta de ofertas, sino la dificultad de saber qué hacer con ellas. Las redes presentan diferentes posibilidades de promoción, cada una con condiciones, públicos y requisitos particulares. A esto se suma la necesidad de encontrar tráfico adecuado, interpretar los resultados y evitar que las primeras pruebas consuman recursos sin aportar información útil.
              </p>
              <p>
                En ese escenario, los Smartlinks introducen una forma distinta de abordar la distribución de ofertas. En lugar de depender exclusivamente de una selección manual para cada visitante, un enlace inteligente puede dirigir al usuario hacia distintas propuestas según criterios de la plataforma, como su ubicación geográfica y las posibilidades de conversión disponibles. Esta característica permite simplificar determinadas decisiones iniciales, aunque no elimina la necesidad de comprender el funcionamiento de las campañas.
              </p>
              <p>
                La tecnología, por sí sola, tampoco resuelve los problemas de adquisición. Un enlace dinámico necesita recibir visitantes adecuados, trabajar con ofertas compatibles y formar parte de una estrategia que permita interpretar lo que sucede después del clic. Sin seguimiento, control del gasto y criterios para evaluar los resultados, incluso una herramienta diseñada para facilitar el proceso puede convertirse en una fuente de incertidumbre.
              </p>
              <p>
                Por eso, abordar el CPA mediante Smartlinks requiere una combinación de sencillez operativa y disciplina. El objetivo no debería ser gastar lo mínimo posible para conseguir resultados inmediatos, sino utilizar los recursos disponibles para aprender cómo responde el tráfico, reconocer las condiciones que favorecen una conversión y decidir qué merece la pena continuar probando.
              </p>
              <p>
                Esta perspectiva permite entender el Smartlink como una herramienta dentro de un sistema de experimentación. Su utilidad depende de cómo se integra con las fuentes de visitantes, las condiciones de las ofertas y la información que obtenemos de cada campaña.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 11 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={CPA_SMARTLINK_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO EDITORIAL COMPLETO (11 H2)                        */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="smartlink-mecanismo-distribucion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El Smartlink como mecanismo de distribución
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un Smartlink modifica la manera de relacionar el tráfico con las ofertas disponibles. En una promoción convencional, el responsable de la campaña suele seleccionar una propuesta concreta y dirigir hacia ella a los visitantes. Con un enlace inteligente, la plataforma puede distribuir las visitas entre distintas ofertas de acuerdo con los criterios que utiliza para determinar cuál resulta más adecuada para cada usuario.
                </p>
                <p>
                  La ubicación geográfica es uno de los factores que pueden intervenir en esa distribución. Una persona que accede desde un país puede recibir una propuesta diferente de otra que llega desde una región distinta. Esto resulta relevante porque las ofertas CPA no tienen necesariamente la misma disponibilidad ni las mismas condiciones en todos los mercados.
                </p>
                <p>
                  La principal ventaja operativa de este mecanismo es que reduce parte de la complejidad asociada a mantener numerosos enlaces individuales. En determinados escenarios, permite comenzar con una estructura más sencilla y observar cómo responde el tráfico sin tener que seleccionar manualmente una oferta distinta para cada segmento geográfico.
                </p>
                <p>
                  Sin embargo, conviene comprender sus límites. El Smartlink no crea demanda, no transforma visitantes irrelevantes en usuarios interesados y tampoco garantiza que todas las ofertas distribuidas sean rentables. Su funcionamiento depende de las opciones disponibles en la red, de los criterios de asignación y de las características del tráfico recibido.
                </p>
                <p>
                  Por tanto, debemos entenderlo como un mecanismo de distribución, no como una estrategia completa. Su utilidad aumenta cuando conocemos qué tráfico estamos enviando, qué condiciones tiene la plataforma y qué información podemos obtener de los resultados.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="redes-ofertas-condiciones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación entre redes, ofertas y condiciones
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las redes CPA actúan como intermediarias entre anunciantes y afiliados. Dentro de sus plataformas encontramos diferentes propuestas, requisitos de participación y mecanismos para registrar las acciones que pueden generar una remuneración.
                </p>
                <p>
                  Para quien comienza, comprender esta estructura es más importante que intentar registrarse en todas las redes disponibles. Cada plataforma puede tener procedimientos de aprobación, condiciones de promoción y criterios de validación distintos. Una cuenta aceptada no significa que cualquier actividad publicitaria esté permitida ni que todas las ofertas estén disponibles para cualquier fuente de tráfico.
                </p>
                <p>
                  También debemos distinguir entre la oferta individual y el conjunto de propuestas que puede utilizar un Smartlink. Cuando trabajamos con una oferta específica, conocemos directamente qué acción buscamos y cuáles son sus condiciones. Cuando utilizamos un enlace inteligente, parte de esa selección se realiza mediante el sistema de distribución de la red.
                </p>
                <p>
                  Esta diferencia afecta a la forma de interpretar los resultados. No siempre estaremos observando una única propuesta comercial, sino el comportamiento de un mecanismo que puede relacionar distintos visitantes con diferentes oportunidades.
                </p>
                <p>
                  Antes de comenzar, es importante conocer las restricciones de cada red, los mercados admitidos, las fuentes de tráfico autorizadas y las condiciones de pago. Una campaña puede generar actividad sin que todas sus acciones sean reconocidas. Comprender las reglas desde el principio evita confundir el movimiento registrado con un resultado comercial definitivo.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="trafico-precio-calidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Elegir tráfico sin confundir precio y calidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El tráfico es el recurso que permite poner a prueba una campaña. Sin visitantes no podemos observar el comportamiento del enlace, pero conseguir visitas a un precio reducido tampoco garantiza que estemos avanzando.
                </p>
                <p>
                  Una fuente económica puede proporcionar un volumen considerable de impresiones o accesos y, aun así, generar pocas oportunidades de conversión. Esto sucede cuando la audiencia no tiene relación suficiente con las propuestas que recibe, cuando el contexto de navegación no favorece la interacción o cuando las expectativas del usuario no coinciden con la oferta.
                </p>
                <p>
                  Los formatos publicitarios tienen características diferentes. El tráfico popunder, por ejemplo, puede aportar volumen y facilitar pruebas iniciales, pero requiere prestar atención a la calidad de las visitas y a las condiciones de cada red. No debemos asumir que una fuente económica será adecuada para cualquier tipo de campaña.
                </p>
                <p>
                  La elección debe responder a una pregunta concreta: ¿qué información esperamos obtener de esta fuente y qué condiciones necesitamos comprobar? Esta forma de pensar evita seleccionar tráfico exclusivamente por su precio y ayuda a relacionar la inversión con un objetivo de aprendizaje.
                </p>
                <p>
                  También es necesario comprobar que la fuente elegida esté permitida por la red CPA y que no existan restricciones específicas para el Smartlink o las ofertas que pueda distribuir. Una campaña correctamente configurada desde el punto de vista técnico puede seguir siendo inadecuada si incumple las condiciones comerciales de la plataforma.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="presupuesto-aprendizaje"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El presupuesto como instrumento de aprendizaje
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando comenzamos con recursos limitados, cada decisión de inversión tiene importancia. La dificultad consiste en utilizar el presupuesto para obtener información suficiente sin asumir gastos que no podemos controlar.
                </p>
                <p>
                  Una prueba pequeña puede ayudar a descubrir si una fuente genera visitas, si el enlace recibe actividad y si aparecen señales que merecen una investigación adicional. Pero debemos evitar interpretar cualquier primera conversión como evidencia definitiva de que hemos encontrado una campaña rentable.
                </p>
                <p>
                  El presupuesto de prueba debe tener una función concreta. Necesitamos establecer qué queremos comprobar, cuánto estamos dispuestos a invertir y qué circunstancias justificarían detener la actividad. Esta organización permite aprender incluso cuando una prueba no produce el resultado económico esperado.
                </p>
                <p>
                  Un gasto reducido no elimina el riesgo. Si la configuración es incorrecta, el tráfico no corresponde al objetivo o los límites de inversión no están bien definidos, una cantidad pequeña también puede desperdiciarse sin aportar conclusiones útiles.
                </p>
                <p>
                  Por eso, conviene separar dos conceptos: el dinero destinado a explorar una posibilidad y el dinero que se asignaría a una campaña después de haber obtenido información favorable. El segundo paso requiere una justificación más sólida que la simple expectativa de que un resultado inicial se repetirá.
                </p>
                <p>
                  La disciplina presupuestaria no consiste únicamente en gastar poco. Consiste en saber qué estamos intentando averiguar con cada cantidad invertida.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="geografia-comportamiento-audiencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La geografía y el comportamiento de la audiencia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La ubicación de los usuarios puede influir considerablemente en el comportamiento de una campaña CPA. Las diferencias entre países no se limitan al idioma o a la moneda: también pueden intervenir la disponibilidad de ofertas, las condiciones comerciales y las características de los mercados a los que se dirige la publicidad.
                </p>
                <p>
                  En una estrategia basada en Smartlinks, esta dimensión tiene especial importancia porque el sistema puede utilizar la ubicación para distribuir las visitas entre propuestas diferentes. Sin embargo, no debemos interpretar esa capacidad como una garantía de que cualquier país generará conversiones.
                </p>
                <p>
                  Un mercado puede recibir una oferta y producir pocas acciones válidas. Otro puede mostrar una respuesta distinta debido a las condiciones del público, la competencia o la disponibilidad de propuestas. Estas diferencias deben analizarse a partir de los datos y no de suposiciones generales.
                </p>
                <p>
                  La segmentación geográfica permite observar cómo se comporta el tráfico en distintos territorios. Para que esa información resulte útil, necesitamos identificar correctamente la procedencia de las visitas y relacionarla con las acciones registradas.
                </p>
                <p>
                  También debemos comprobar que la configuración de la campaña no limite accidentalmente mercados que podrían ser relevantes o incluya ubicaciones que la oferta no admite. La geografía es una variable de gestión, no una clasificación automática de países buenos y malos.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="arquitectura-campana-controlada"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La arquitectura de una campaña controlada
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una campaña necesita una estructura comprensible. Aunque utilicemos un enlace inteligente, debemos saber desde dónde llegan los visitantes, qué configuración publicitaria los conduce hasta él y qué límites se han establecido para controlar la actividad.
                </p>
                <p>
                  La organización comienza con la relación entre fuente de tráfico, enlace de destino y parámetros de campaña. Cada elemento debe cumplir una función identificable. Si no podemos distinguir el origen de las visitas o reconocer qué configuración estaba activa, será difícil interpretar los resultados posteriores.
                </p>
                <p>
                  También es importante configurar con prudencia los parámetros de entrega y gasto. Los límites de velocidad, la distribución del tráfico y las pujas pueden influir en la rapidez con la que se consume el presupuesto. Una configuración demasiado agresiva puede agotar los recursos antes de que hayamos obtenido información suficiente.
                </p>
                <p>
                  La estructura debe permitir realizar pruebas sin confundir sus resultados. Si modificamos simultáneamente la fuente, la ubicación, las pujas y otras condiciones, perderemos capacidad para reconocer qué variable ha influido en el comportamiento observado.
                </p>
                <p>
                  Una campaña controlada no necesita una arquitectura compleja. Necesita que sus componentes estén identificados, que sus límites sean conocidos y que podamos relacionar cada decisión con la información que produce.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="pagina-intermedia-campana"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cuando una campaña necesita una página intermedia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  No todas las estrategias CPA necesitan enviar al visitante directamente al enlace de destino. En determinados casos, una página intermedia puede ayudar a presentar una propuesta, explicar su contexto y preparar al usuario antes de que continúe hacia la oferta.
                </p>
                <p>
                  Los advertoriales y las páginas de aterrizaje cumplen funciones diferentes, aunque ambos pueden formar parte de un proceso de adquisición. Su elección depende de la naturaleza de la campaña, de las características del tráfico y de las condiciones de promoción establecidas por las plataformas y los anunciantes.
                </p>
                <p>
                  Una página intermedia también puede aportar una oportunidad para construir una experiencia más coherente. El mensaje publicitario, la información presentada y la propuesta final deben mantener una relación clara. Si existe una diferencia importante entre lo que se anuncia y lo que encuentra el visitante, la experiencia puede deteriorarse.
                </p>
                <p>
                  Sin embargo, incorporar una página adicional también introduce trabajo y posibles puntos de abandono. No debemos asumir que una estructura más elaborada producirá necesariamente mejores resultados. La decisión debe responder a una necesidad concreta y poder evaluarse mediante información suficiente.
                </p>
                <p>
                  La construcción de activos complementarios adquiere mayor relevancia cuando la estrategia evoluciona. Una página propia puede servir para organizar información y facilitar otras formas de comunicación, pero debe integrarse respetando las normas de publicidad, privacidad y promoción correspondientes.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="seguimiento-comprension"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El seguimiento como herramienta de comprensión
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una campaña sin seguimiento ofrece una visión incompleta de su funcionamiento. Podemos observar que llegan visitantes o que existe actividad en la red, pero sin información organizada resulta difícil saber qué está ocurriendo entre el origen del tráfico y la acción registrada.
                </p>
                <p>
                  El tracking permite relacionar las visitas con sus fuentes y con diferentes parámetros de campaña. Esta información facilita la identificación de patrones y ayuda a comprender qué configuraciones merecen una revisión.
                </p>
                <p>
                  Herramientas especializadas, como los trackers utilizados en el entorno CPA, pueden aportar información sobre procedencia, ubicación y comportamiento de los visitantes. Su utilidad no reside en acumular registros, sino en ofrecer una base para interpretar los resultados.
                </p>
                <p>
                  Para aprovechar esos datos necesitamos una configuración coherente. Si los parámetros no se registran correctamente o las fuentes no están identificadas, las conclusiones pueden ser incompletas. Una medición defectuosa puede llevarnos a modificar una campaña por razones equivocadas.
                </p>
                <p>
                  También debemos diferenciar entre las conversiones que aparecen inicialmente y aquellas que cumplen las condiciones de validación de la red. Esta distinción permite evaluar la actividad con mayor rigor y evita confundir una señal preliminar con un resultado económico confirmado.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="interpretar-resultados-limites"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Interpretar resultados y reconocer los límites
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los datos adquieren valor cuando podemos convertirlos en decisiones. Una campaña puede mostrar visitas, clics y conversiones, pero ninguna cifra debe interpretarse de manera aislada.
                </p>
                <p>
                  El volumen de tráfico necesita relacionarse con su procedencia. Las conversiones deben examinarse teniendo en cuenta las condiciones de la oferta. El gasto debe compararse con el valor económico de las acciones reconocidas. Solo así podemos construir una imagen más completa del rendimiento.
                </p>
                <p>
                  También debemos reconocer que no todos los problemas tienen la misma causa. Una campaña sin conversiones puede estar recibiendo tráfico poco adecuado, utilizar una configuración incorrecta o encontrarse con una oferta que no responde al comportamiento de esa audiencia. Cambiar elementos al azar no permite identificar el origen de la dificultad.
                </p>
                <p>
                  Saber cuándo detener una prueba forma parte de la gestión. Mantener una campaña únicamente porque ya hemos invertido dinero en ella puede aumentar las pérdidas sin aportar información adicional. Es preferible establecer límites y revisar los resultados antes de comprometer nuevos recursos.
                </p>
                <p>
                  La interpretación requiere prudencia. Una muestra pequeña puede ofrecer señales interesantes, pero no siempre permite extraer conclusiones definitivas. El objetivo es aprender a distinguir entre una variación ocasional y un comportamiento que merece una nueva prueba.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="pruebas-estrategia-amplia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Pasar de las pruebas a una estrategia más amplia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando una campaña ofrece señales favorables y los resultados pueden explicarse mediante información fiable, podemos estudiar formas de ampliar el sistema. Este paso no debería consistir en aumentar automáticamente el gasto, sino en comprobar qué elementos han contribuido al rendimiento y cuáles podrían mantenerse en otras condiciones.
                </p>
                <p>
                  Los advertoriales, el email marketing y otras modalidades de adquisición pueden formar parte de una estrategia más amplia. Cada alternativa introduce necesidades diferentes y debe evaluarse según su función. Una lista de correo, por ejemplo, puede proporcionar un canal de comunicación que no dependa exclusivamente de una visita aislada, mientras que otras fuentes pueden ayudar a explorar nuevas oportunidades de captación.
                </p>
                <p>
                  La ampliación también exige revisar la capacidad operativa. Cuantos más canales y configuraciones incorporamos, mayor puede ser la dificultad de seguimiento. Si no podemos distinguir el origen de los resultados, la complejidad añadida puede perjudicar la gestión.
                </p>
                <p>
                  Por eso, conviene desarrollar el sistema progresivamente. Primero necesitamos comprender el comportamiento de la actividad inicial; después podemos estudiar qué elementos tienen posibilidades de ampliación y qué recursos adicionales requieren.
                </p>
                <p>
                  El crecimiento debe apoyarse en resultados interpretables, no en la expectativa de que una campaña pequeña se convierta automáticamente en una operación de mayor escala.
                </p>
              </div>
            </section>

            {/* Apartado 11 — Cierre editorial */}
            <section
              id="criterio-entorno-cambiante"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Desarrollar criterio en un entorno cambiante
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El marketing CPA depende de redes, anunciantes, fuentes de tráfico y plataformas tecnológicas que pueden modificar sus condiciones. Las ofertas pueden cambiar, las restricciones pueden actualizarse y los costes publicitarios pueden variar. Una configuración que funcionaba en un momento determinado no tiene por qué conservar las mismas condiciones indefinidamente.
                </p>
                <p>
                  Esta realidad exige mantener una actitud de revisión. Antes de continuar una actividad, debemos comprobar que las ofertas siguen disponibles, que las fuentes están autorizadas y que las condiciones comerciales no han cambiado.
                </p>
                <p>
                  También debemos evitar depender completamente de una única herramienta. El Smartlink puede simplificar la distribución de propuestas, pero el conocimiento del funcionamiento general de las campañas sigue siendo necesario. Entender cómo se relacionan el tráfico, las condiciones de una oferta y los datos permite adaptarse cuando una plataforma deja de ofrecer las mismas posibilidades.
                </p>
                <p>
                  El aprendizaje más importante no consiste en memorizar una configuración, sino en comprender por qué se toman determinadas decisiones. Cuando podemos explicar qué estamos probando, qué información esperamos obtener y qué condiciones justifican continuar, dejamos de depender exclusivamente de instrucciones mecánicas.
                </p>
                <p>
                  El Smartlink puede ser un punto de entrada accesible para explorar el modelo CPA, pero su utilización responsable requiere análisis, control presupuestario y capacidad para reconocer los límites de cada prueba. La diferencia no está en disponer de un enlace especial, sino en saber integrarlo dentro de una actividad que pueda observarse, evaluarse y mejorarse.
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

export default CpaSmartlinkFormulaView;
