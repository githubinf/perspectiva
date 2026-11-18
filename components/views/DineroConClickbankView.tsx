import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface DineroConClickbankViewProps {
  book?: BookItem;
}

export const CLICKBANK_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'clickbank-mercado-oportunidades',
    label: 'ClickBank como mercado de oportunidades digitales',
  },
  {
    id: 'valor-oferta-comision',
    label: 'El valor de una oferta más allá de su comisión',
  },
  {
    id: 'investigar-antes-invertir',
    label: 'Investigar antes de comprometer recursos',
  },
  {
    id: 'mercado-aportar-valor',
    label: 'Encontrar un mercado al que podamos aportar valor',
  },
  {
    id: 'promocion-identidad-reconocible',
    label: 'La promoción necesita una identidad reconocible',
  },
  {
    id: 'contenido-intermediario-confianza',
    label: 'El contenido como intermediario de confianza',
  },
  {
    id: 'relacion-primer-clic',
    label: 'Construir una relación que no termine en el primer clic',
  },
  {
    id: 'publicidad-decision-economica',
    label: 'La publicidad como decisión económica',
  },
  {
    id: 'interpretar-senales-negocio',
    label: 'Interpretar las señales del negocio',
  },
  {
    id: 'mejorar-antes-ampliar',
    label: 'Mejorar una actividad antes de ampliarla',
  },
  {
    id: 'continuidad-mercado-cambiante',
    label: 'Construir continuidad en un mercado cambiante',
  },
];

const DineroConClickbankView: React.FC<DineroConClickbankViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'dinero-con-clickbank') ||
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
              label: 'Dinero con ClickBank',
              href: currentBook.path || '/dinero-con-clickbank/',
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
              Dinero con ClickBank
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Cómo elegir productos rentables, promocionarlos y construir tu primer negocio de afiliados
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una perspectiva práctica sobre la evaluación de oportunidades comerciales, la relación entre productos y mercados y la construcción de una actividad de afiliación organizada alrededor del ecosistema ClickBank.
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
                Participar en un mercado de afiliación con miles de productos disponibles puede parecer una ventaja evidente. Sin embargo, disponer de muchas alternativas no significa que resulte sencillo encontrar una oportunidad adecuada. De hecho, cuando comenzamos sin experiencia, la abundancia de opciones puede dificultar las decisiones: no sabemos qué propuesta merece nuestra atención, qué información debemos consultar ni qué condiciones conviene examinar antes de dedicar tiempo a una promoción.
              </p>
              <p>
                ClickBank ofrece un entorno en el que vendedores y afiliados pueden relacionarse comercialmente mediante productos digitales y sistemas de seguimiento de comisiones. Su catálogo permite explorar distintas categorías y modelos de oferta, pero la plataforma no sustituye el criterio de quien decide promocionar un producto. La responsabilidad de evaluar una oportunidad sigue siendo nuestra.
              </p>
              <p>
                Esta diferencia es fundamental. Una comisión atractiva no basta para determinar si una propuesta merece ser promovida. También importa la calidad del producto, la coherencia entre su contenido y las expectativas del público, las condiciones comerciales y la capacidad de llegar a personas que puedan encontrarlo relevante. Una decisión aparentemente pequeña puede condicionar todo el trabajo posterior.
              </p>
              <p>
                Por otra parte, promocionar productos de terceros no debería reducirse a publicar enlaces en diferentes lugares. La afiliación necesita una relación comprensible entre el mercado al que nos dirigimos, la información que ofrecemos y la solución comercial que recomendamos. Cuando esos elementos están desconectados, podemos generar actividad sin construir una base sólida para el proyecto.
              </p>
              <p>
                El propósito de esta perspectiva es comprender cómo se relacionan las decisiones comerciales dentro de una actividad de afiliación vinculada a ClickBank. No se trata de buscar una fórmula que garantice resultados, sino de desarrollar criterios para evaluar productos, organizar la promoción, interpretar señales del mercado y mejorar el trabajo sin cambiar constantemente de dirección.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 11 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={CLICKBANK_INDEX_ITEMS}
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
              id="clickbank-mercado-oportunidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                ClickBank como mercado de oportunidades digitales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Para comprender el potencial de ClickBank, primero debemos distinguir entre la plataforma y el negocio que podemos desarrollar dentro de ella. ClickBank proporciona una infraestructura comercial que facilita la conexión entre vendedores y afiliados. En ella podemos encontrar productos, consultar información de las ofertas y acceder a mecanismos que permiten atribuir determinadas ventas a nuestra actividad promocional.
                </p>
                <p>
                  Sin embargo, la plataforma no determina por sí sola qué productos encajan con nuestros objetivos ni qué público puede estar interesado en ellos. Esa parte corresponde al trabajo de investigación y selección que realizamos antes de comenzar una campaña.
                </p>
                <p>
                  El catálogo debe entenderse como un espacio de exploración, no como una lista de oportunidades que debamos promocionar indiscriminadamente. Dos productos de una misma categoría pueden dirigirse a públicos distintos, resolver necesidades diferentes y presentar condiciones comerciales que requieren evaluaciones separadas.
                </p>
                <p>
                  También conviene comprender que la actividad de afiliación depende de las reglas de la plataforma y de los acuerdos asociados a cada oferta. La disponibilidad de un producto, sus condiciones de promoción y los criterios de atribución pueden cambiar. Por eso, familiarizarnos con el entorno operativo de ClickBank forma parte del trabajo, no es simplemente un trámite inicial.
                </p>
                <p>
                  Una cuenta configurada correctamente facilita el acceso a las funciones de afiliación, pero el verdadero valor aparece cuando sabemos utilizar la información disponible para tomar decisiones. La plataforma proporciona herramientas; el criterio comercial determina cómo las aprovechamos.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="valor-oferta-comision"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de una oferta más allá de su comisión
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las tentaciones habituales al explorar un catálogo de afiliación es fijarnos primero en cuánto podríamos recibir por una venta. La comisión es importante porque determina una parte de la economía de la promoción, pero no debe convertirse en el único criterio de selección.
                </p>
                <p>
                  Una remuneración elevada puede parecer atractiva y, aun así, corresponder a un producto difícil de posicionar, dirigido a un público muy específico o respaldado por una propuesta que no encaja con nuestra capacidad de promoción. En cambio, una oferta con una comisión menos llamativa puede resultar más coherente con el mercado al que tenemos acceso.
                </p>
                <p>
                  La evaluación debe comenzar por el producto. ¿Qué necesidad aborda? ¿A qué tipo de persona se dirige? ¿La propuesta está explicada con claridad? ¿La presentación comercial permite comprender lo que se está ofreciendo? ¿Podemos recomendarlo con argumentos razonables?
                </p>
                <p>
                  Después podemos examinar las condiciones económicas. Los indicadores disponibles en el entorno de afiliación, como los relacionados con el valor medio por venta o el comportamiento de las comisiones, pueden aportar información útil. No obstante, debemos interpretarlos con prudencia. Un indicador histórico no garantiza que obtengamos el mismo rendimiento ni describe necesariamente lo que ocurrirá con nuestro tráfico.
                </p>
                <p>
                  También es importante valorar la experiencia posterior a la recomendación. Una oferta no termina en el momento en que alguien hace clic. La calidad del producto, la claridad de la información y la relación entre lo prometido y lo recibido influyen en la percepción del comprador y en la credibilidad de quien lo recomienda.
                </p>
                <p>
                  Elegir bien implica considerar el conjunto. La comisión puede hacer viable una promoción, pero la coherencia comercial es lo que permite justificarla.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="investigar-antes-invertir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Investigar antes de comprometer recursos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La investigación previa reduce la dependencia de las impresiones iniciales. Antes de dedicar semanas a promocionar un producto, necesitamos reunir información suficiente para determinar si merece una prueba.
                </p>
                <p>
                  Esto empieza por examinar la propuesta comercial y comprender qué está comprando realmente el cliente. No debemos basar nuestra evaluación exclusivamente en el texto de venta del vendedor. Cuando sea posible, conviene conocer el producto, revisar sus características y comprobar si la presentación comercial transmite expectativas razonables.
                </p>
                <p>
                  La investigación también requiere observar el mercado. Podemos estudiar qué preguntas plantea el público, qué problemas intenta resolver y qué alternativas existen. Esta información ayuda a distinguir una necesidad real de una oportunidad que solo parece atractiva por la forma en que se presenta.
                </p>
                <p>
                  Los indicadores del catálogo pueden servir como referencias adicionales, pero no deben interpretarse fuera de contexto. Una cifra elevada puede reflejar actividad anterior y no necesariamente una oportunidad adecuada para un afiliado que comienza. Del mismo modo, la ausencia de un dato destacado no demuestra automáticamente que el producto carezca de posibilidades.
                </p>
                <p>
                  La calidad de la investigación depende de las preguntas que nos hacemos. En lugar de buscar un producto que parezca ganador, resulta más útil comprobar si podemos explicar por qué una oferta podría interesar a un público determinado y qué necesitaríamos para llegar hasta él.
                </p>
                <p>
                  Esta forma de trabajar evita convertir cada novedad del catálogo en una nueva apuesta. También nos permite descartar oportunidades sin sentir que estamos perdiendo una ocasión irrepetible.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="mercado-aportar-valor"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Encontrar un mercado al que podamos aportar valor
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La selección de un producto adquiere sentido cuando se relaciona con un mercado concreto. No basta con identificar algo que se vende: necesitamos comprender a quién puede interesarle y qué circunstancias influyen en su decisión.
                </p>
                <p>
                  Un mercado está formado por personas con necesidades, expectativas y diferentes niveles de conocimiento. Algunas buscan información inicial; otras comparan alternativas y otras están preparadas para valorar una solución específica. La comunicación que puede resultar útil para una persona que apenas conoce un problema no necesariamente será adecuada para alguien que ya está evaluando una compra.
                </p>
                <p>
                  Por eso, antes de elegir cómo promocionar un producto, debemos estudiar el contexto de sus posibles compradores. ¿Qué dificultades intentan resolver? ¿Qué dudas aparecen antes de tomar una decisión? ¿Qué información necesitan para comparar propuestas? ¿Qué objeciones pueden surgir?
                </p>
                <p>
                  Estas preguntas ayudan a construir una conexión entre la oferta y el público. También permiten identificar si tenemos capacidad para desarrollar contenidos o comunicaciones que respondan a esas necesidades.
                </p>
                <p>
                  La especialización puede resultar más útil que intentar abarcar numerosos mercados simultáneamente. Trabajar sobre un ámbito reconocible facilita comprender sus particularidades, identificar preguntas frecuentes y desarrollar una comunicación coherente. No significa que debamos permanecer siempre en una única categoría, sino que conviene construir una base antes de dispersar los esfuerzos.
                </p>
                <p>
                  Un producto adquiere relevancia cuando encuentra un contexto en el que su propuesta puede comprenderse y valorarse.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="promocion-identidad-reconocible"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La promoción necesita una identidad reconocible
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Promocionar productos de terceros no debería significar que nuestra actividad carezca de identidad propia. Cuando dependemos únicamente de enlaces distribuidos sin contexto, resulta difícil que las personas reconozcan quién comunica, qué criterio sigue o por qué deberían prestar atención a sus recomendaciones.
                </p>
                <p>
                  Una identidad editorial o temática proporciona continuidad. Permite que los contenidos mantengan una orientación reconocible, que las recomendaciones respondan a un ámbito de interés y que la audiencia comprenda qué tipo de información puede encontrar.
                </p>
                <p>
                  Esto no exige comenzar con una infraestructura compleja. Podemos desarrollar una presencia digital sencilla, siempre que exista una relación clara entre el tema elegido, el público y las propuestas que presentamos. Un proyecto centrado en una necesidad concreta suele ofrecer una base más comprensible que otro que promociona productos sin conexión entre sí.
                </p>
                <p>
                  La coherencia también debe mantenerse al seleccionar las ofertas. Si nuestra comunicación aborda un problema determinado, recomendar productos ajenos a ese contexto puede debilitar la confianza. Una oportunidad comercial no se vuelve apropiada simplemente porque esté disponible dentro de ClickBank.
                </p>
                <p>
                  La identidad no se construye únicamente con un nombre o una imagen. Se forma mediante decisiones repetidas: los temas que abordamos, la calidad de la información, los productos que consideramos adecuados y la manera en que explicamos nuestras recomendaciones.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="contenido-intermediario-confianza"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El contenido como intermediario de confianza
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido puede desempeñar una función decisiva en la relación entre una oferta y una posible compra. Su valor no consiste en colocar un enlace dentro de un artículo, sino en proporcionar información que ayude a comprender una necesidad y evaluar las alternativas disponibles.
                </p>
                <p>
                  Una explicación, una comparación o un análisis pueden responder preguntas que una página comercial no desarrolla con suficiente detalle. Esto permite que la persona llegue a una decisión con mayor contexto y que la recomendación tenga una función reconocible.
                </p>
                <p>
                  Para lograrlo, el contenido debe aportar algo más que una repetición de las características del producto. Podemos explicar el problema que intenta resolver, analizar qué criterios conviene considerar y señalar las circunstancias en las que una propuesta puede resultar adecuada o insuficiente.
                </p>
                <p>
                  También es importante distinguir entre información y persuasión. Un contenido útil puede influir en una decisión, pero no necesita ocultar limitaciones ni presentar una solución como válida para todo el mundo. La transparencia sobre la relación de afiliación forma parte de una comunicación responsable.
                </p>
                <p>
                  La calidad editorial contribuye a que la actividad no dependa exclusivamente de impactos publicitarios. Un contenido que responde a una consulta concreta puede seguir siendo útil mientras mantenga su vigencia y encuentre lectores interesados.
                </p>
                <p>
                  Por eso, el contenido debe planificarse como parte de la estructura comercial, pero conservar una finalidad informativa propia.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="relacion-primer-clic"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir una relación que no termine en el primer clic
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La afiliación puede comenzar con una visita, pero una actividad organizada necesita pensar más allá de esa interacción. Cuando toda la promoción depende de conseguir clics aislados, el proyecto queda expuesto a las variaciones de cada canal y a la dificultad de mantener una relación continuada con las personas interesadas.
                </p>
                <p>
                  La comunicación por correo electrónico, por ejemplo, puede ofrecer una vía para mantener el contacto con quienes deciden recibir información. No se trata de enviar mensajes comerciales constantemente, sino de desarrollar una relación basada en contenidos relevantes, expectativas claras y una frecuencia razonable.
                </p>
                <p>
                  También podemos utilizar otros espacios digitales para mantener una presencia coherente. Un sitio web, una biblioteca de contenidos o una comunidad temática pueden contribuir a que las personas encuentren información relacionada con sus intereses.
                </p>
                <p>
                  La elección de estos canales depende de la capacidad operativa y del tipo de mercado. No es necesario incorporar todas las herramientas disponibles. Una estructura sencilla, bien mantenida y conectada con las necesidades de la audiencia puede resultar más útil que una combinación de canales que no conseguimos gestionar.
                </p>
                <p>
                  La continuidad también exige respetar las preferencias de los usuarios y las normas aplicables a la comunicación comercial y al tratamiento de datos. La confianza no se construye únicamente mediante mensajes atractivos; también depende de cómo gestionamos la relación.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="publicidad-decision-economica"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La publicidad como decisión económica
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La publicidad de pago puede acelerar la llegada de visitantes, pero también introduce un compromiso financiero que debe evaluarse con cuidado. No es una obligación para comenzar ni una garantía de que una oferta vaya a producir comisiones suficientes.
                </p>
                <p>
                  Antes de invertir, necesitamos comprender qué estamos intentando validar. Puede ser la respuesta de un público, el interés por una propuesta o el comportamiento de una página. Cada prueba debe tener un propósito identificable y unos límites de gasto que podamos asumir.
                </p>
                <p>
                  También debemos diferenciar entre conseguir tráfico y generar resultados económicos. Una campaña puede producir numerosas visitas sin alcanzar el comportamiento que necesita la oferta. Por eso, las decisiones no deberían basarse únicamente en el volumen de clics o en el coste inicial de adquisición.
                </p>
                <p>
                  Las plataformas publicitarias tienen políticas y restricciones que deben respetarse. Además, los productos de afiliación pueden establecer condiciones específicas sobre el uso de determinadas fuentes, mensajes o formatos. Ignorar estas reglas puede comprometer una campaña e incluso la relación con la plataforma.
                </p>
                <p>
                  La inversión tiene sentido cuando existe una hipótesis que podemos evaluar y cuando disponemos de información suficiente para interpretar lo que ocurre. Si todavía no comprendemos el producto, el público o la propuesta, aumentar el gasto puede amplificar la incertidumbre en lugar de resolverla.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="interpretar-senales-negocio"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Interpretar las señales del negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad de afiliación genera información que puede ayudarnos a comprender sus puntos fuertes y sus dificultades. El reto consiste en identificar qué datos responden a preguntas importantes y cuáles pueden distraernos.
                </p>
                <p>
                  Las visitas indican que existe movimiento, pero no explican por sí solas si el público tiene interés comercial. Los clics sobre un enlace permiten observar una interacción, aunque tampoco demuestran que se haya producido una compra. Las ventas atribuidas y las comisiones registradas aportan información económica, pero deben examinarse teniendo en cuenta las condiciones de validación y los posibles ajustes.
                </p>
                <p>
                  También debemos estudiar la relación entre los diferentes elementos. Si un contenido recibe visitas, pero pocas personas continúan hacia la oferta, quizá sea necesario revisar su enfoque o la correspondencia entre la información y la recomendación. Si existe interés en el producto, pero no se producen ventas, puede haber otros factores que convenga investigar.
                </p>
                <p>
                  La interpretación requiere evitar conclusiones precipitadas. Una variación puntual no siempre representa una tendencia y un resultado favorable aislado no garantiza que el comportamiento se mantenga.
                </p>
                <p>
                  El seguimiento adquiere valor cuando nos permite formular preguntas mejores. En lugar de acumular informes, debemos utilizarlos para comprender dónde se encuentra la dificultad y qué modificación merece una prueba.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="mejorar-antes-ampliar"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Mejorar una actividad antes de ampliarla
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando encontramos elementos que parecen funcionar, aparece la tentación de incorporar nuevos productos, abrir otros canales y aumentar la inversión. Sin embargo, ampliar una estructura que todavía no comprendemos puede multiplicar los problemas.
                </p>
                <p>
                  Antes de crecer, conviene revisar qué parte de la actividad aporta valor y qué aspectos necesitan ajustes. Puede ser necesario mejorar la selección comercial, aclarar el mensaje de una página, reorganizar el contenido o revisar la procedencia de las visitas.
                </p>
                <p>
                  Las mejoras pequeñas pueden acumularse cuando responden a una dificultad identificada. No necesitamos cambiar toda la estrategia cada vez que un resultado se aparta de nuestras expectativas. En muchos casos, una revisión concreta proporciona más información que comenzar un proyecto completamente distinto.
                </p>
                <p>
                  También debemos reconocer cuándo una oportunidad ha dejado de ser adecuada. Mantener un producto únicamente porque ya hemos invertido tiempo en promocionarlo puede impedirnos tomar decisiones razonables. El trabajo realizado no obliga a continuar una actividad que ha perdido sentido comercial.
                </p>
                <p>
                  La ampliación debe apoyarse en una base comprensible: un mercado identificado, una propuesta coherente, canales que podamos gestionar y datos que permitan evaluar el rendimiento. Solo entonces resulta razonable estudiar nuevas posibilidades.
                </p>
              </div>
            </section>

            {/* Apartado 11 — Cierre editorial */}
            <section
              id="continuidad-mercado-cambiante"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir continuidad en un mercado cambiante
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  ClickBank, como cualquier entorno comercial digital, está sujeto a cambios. Los productos pueden actualizarse, las condiciones de afiliación pueden modificarse y las preferencias de los compradores evolucionan. Una estrategia que funcionó en un periodo concreto no debe considerarse válida para siempre.
                </p>
                <p>
                  Por eso, la continuidad depende de nuestra capacidad para revisar las decisiones. Debemos comprobar que las ofertas siguen disponibles, que las condiciones comerciales se mantienen y que los canales utilizados continúan siendo apropiados para la promoción.
                </p>
                <p>
                  También necesitamos mantener una actitud de aprendizaje. Las herramientas pueden facilitar el trabajo, pero no sustituyen la comprensión del mercado ni la capacidad de evaluar una propuesta. Depender exclusivamente de una técnica, un canal o un producto nos deja expuestos cuando cambian las condiciones.
                </p>
                <p>
                  La experiencia se construye al observar, comparar y corregir. Cada decisión debe ayudarnos a comprender mejor la relación entre el producto, la audiencia y la forma de comunicar su valor.
                </p>
                <p>
                  Desarrollar una actividad de afiliación alrededor de ClickBank requiere algo más que encontrar una oferta y conseguir que alguien haga clic. Necesitamos construir una lógica de trabajo que conecte la selección comercial, la comunicación, la confianza y el análisis. Esa estructura no elimina la incertidumbre ni garantiza ingresos, pero permite tomar decisiones con mayor fundamento y desarrollar un proyecto con posibilidades de evolución.
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

export default DineroConClickbankView;
