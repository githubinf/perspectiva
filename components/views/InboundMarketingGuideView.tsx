import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface InboundMarketingGuideViewProps {
  book?: BookItem;
}

export const INBOUND_MARKETING_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'comprender-el-mercado',
    label: 'El problema de comunicar sin comprender al mercado',
  },
  {
    id: 'propuesta-de-valor',
    label: 'La propuesta de valor como punto de orientación',
  },
  {
    id: 'recorrido-del-cliente',
    label: 'El recorrido que realiza una persona antes de elegir',
  },
  {
    id: 'contenido-infraestructura',
    label: 'El contenido como infraestructura de comunicación',
  },
  {
    id: 'visibilidad-intencion',
    label: 'La visibilidad necesita corresponderse con la intención',
  },
  {
    id: 'visita-oportunidad',
    label: 'De una visita anónima a una oportunidad de relación',
  },
  {
    id: 'continuidad-comunicacion',
    label: 'La continuidad de la comunicación después del primer contacto',
  },
  {
    id: 'coordinacion-herramientas',
    label: 'La coordinación entre personas, información y herramientas',
  },
  {
    id: 'medir-resultados',
    label: 'Medir para comprender, no solo para acumular cifras',
  },
  {
    id: 'experiencia-cliente',
    label: 'La experiencia del cliente como parte del crecimiento',
  },
  {
    id: 'adaptar-metodologia',
    label: 'Adaptar la metodología a la capacidad de un negocio pequeño',
  },
  {
    id: 'estrategia-conectada',
    label: 'Una estrategia conectada en lugar de acciones aisladas',
  },
];

const InboundMarketingGuideView: React.FC<InboundMarketingGuideViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'guia-completa-de-inbound-marketing') ||
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
              : [{ label: 'Iniciación', href: '/iniciacion/' }]),
            {
              label: currentBook.title,
              href: currentBook.path || '/guia-completa-de-inbound-marketing/',
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
                href={parentCategory?.path || '/iniciacion/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Iniciación'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Guía Completa de Inbound Marketing
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Atrae a tus clientes ideales con esta guía para negocios pequeños
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una visión estratégica para comprender cómo conectar las necesidades de un mercado con los procesos de comunicación, captación y desarrollo comercial de un negocio.
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
                Conseguir nuevos clientes es uno de los desafíos más importantes para cualquier negocio. Sin embargo, atraer la atención de las personas adecuadas no depende exclusivamente de aumentar la publicidad o multiplicar los mensajes comerciales. También exige comprender qué busca el público, qué dificultades intenta resolver y qué información necesita para valorar una posible solución.
              </p>
              <p>
                En este contexto, el inbound marketing plantea una manera de organizar la actividad comercial alrededor de la experiencia de las personas. En lugar de comenzar por el producto y concentrar todos los esfuerzos en promocionarlo, propone desarrollar una relación progresiva con quienes podrían estar interesados en lo que ofrece una empresa.
              </p>
              <p>
                Esta perspectiva resulta especialmente relevante para los negocios pequeños. Sus recursos suelen ser limitados y necesitan tomar decisiones cuidadosas sobre dónde invertir tiempo, cómo comunicar su propuesta y qué herramientas pueden contribuir realmente a sus objetivos. No siempre es viable competir mediante grandes presupuestos publicitarios, pero sí es posible trabajar con mayor precisión sobre la información que se ofrece, los canales que se utilizan y la manera en que se acompaña al posible cliente.
              </p>
              <p>
                El valor de esta metodología no reside en una herramienta aislada ni en una campaña determinada. Se encuentra en la coordinación de diferentes actividades que, cuando responden a una misma dirección, pueden convertir la presencia digital de un negocio en una estructura comercial más organizada.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={INBOUND_MARKETING_INDEX_ITEMS}
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
              id="comprender-el-mercado"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El problema de comunicar sin comprender al mercado
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una empresa puede publicar con frecuencia, mantener perfiles en diferentes plataformas y disponer de una página web atractiva sin conseguir que esas actividades se traduzcan en oportunidades comerciales. El problema no siempre está en la falta de exposición. En ocasiones, la comunicación no guarda suficiente relación con las preguntas y prioridades de las personas a las que pretende llegar.
                </p>
                <p>
                  Comprender el mercado implica observar algo más que los datos demográficos de una audiencia. También requiere identificar las circunstancias que llevan a alguien a buscar información, las dudas que dificultan una decisión y los criterios que utiliza para comparar alternativas.
                </p>
                <p>
                  Una persona que todavía está intentando comprender un problema no necesita recibir el mismo mensaje que otra que ya conoce las posibles soluciones y está evaluando proveedores. Cuando una empresa ignora esas diferencias, corre el riesgo de presentar argumentos comerciales antes de que exista una base suficiente para comprenderlos.
                </p>
                <p>
                  Por eso, una estrategia de atracción necesita comenzar con una interpretación razonable del público. No se trata de imaginar un cliente ideal y atribuirle comportamientos sin fundamento, sino de construir una representación útil a partir de las necesidades que el negocio puede atender y de la información disponible sobre su mercado.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="propuesta-de-valor"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La propuesta de valor como punto de orientación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Antes de decidir qué contenidos publicar o qué herramientas incorporar, conviene tener claridad sobre aquello que el negocio ofrece y por qué podría resultar relevante para determinadas personas.
                </p>
                <p>
                  La propuesta de valor no es simplemente una frase publicitaria. Representa una explicación comprensible de la utilidad que una empresa pretende aportar, del problema al que responde y de las características que permiten distinguir su oferta.
                </p>
                <p>
                  Cuando esta definición es imprecisa, la comunicación tiende a dispersarse. Los contenidos pueden abordar temas muy diferentes, las campañas transmiten mensajes poco relacionados y los contactos recibidos no siempre corresponden con el tipo de cliente que la empresa desea atender.
                </p>
                <p>
                  Una propuesta bien delimitada proporciona un criterio para tomar decisiones. Ayuda a seleccionar los temas que merecen atención, identificar las preguntas que deben resolverse y mantener una relación coherente entre el contenido informativo y la actividad comercial.
                </p>
                <p>
                  Esto no significa que una empresa deba comunicar siempre de la misma manera. Su mensaje puede adaptarse a diferentes públicos y situaciones, pero necesita conservar una orientación reconocible. La variedad de formatos no debería convertirse en una pérdida de identidad.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="recorrido-del-cliente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El recorrido que realiza una persona antes de elegir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las decisiones de compra rara vez se producen de manera idéntica. Algunas personas identifican una necesidad con claridad, mientras que otras comienzan buscando información sin saber todavía qué solución necesitan. También existen diferencias entre quienes están descubriendo una categoría de productos y quienes ya comparan propuestas concretas.
                </p>
                <p>
                  Comprender ese recorrido permite organizar la comunicación con mayor sentido. La información inicial puede ayudar a reconocer una situación; otros contenidos pueden explicar alternativas, criterios y diferencias; y determinadas comunicaciones pueden facilitar la evaluación de una propuesta específica.
                </p>
                <p>
                  Esta perspectiva evita tratar todas las visitas como si tuvieran la misma disposición comercial. Una consulta informativa no representa necesariamente una oportunidad inmediata de venta, pero puede constituir el comienzo de una relación que evolucione con el tiempo.
                </p>
                <p>
                  Para un negocio pequeño, esta distinción ayuda a utilizar mejor sus recursos. En lugar de intentar cerrar una operación en cada interacción, puede construir una secuencia de información que acompañe al posible cliente conforme aumenta su conocimiento y define sus prioridades.
                </p>
                <p>
                  La clave está en no forzar el recorrido. La comunicación debe responder al grado de comprensión y a las necesidades reales de cada persona, sin convertir el proceso en una sucesión de mensajes comerciales desconectados.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="contenido-infraestructura"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El contenido como infraestructura de comunicación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido no debería entenderse únicamente como una actividad de publicación. Dentro de una estrategia de inbound marketing, cumple una función de conexión entre el conocimiento del negocio y las preguntas de su mercado.
                </p>
                <p>
                  Un artículo, una guía, un recurso descargable o una publicación en redes sociales pueden abordar necesidades diferentes. Su utilidad depende de que exista una razón para producirlos y de que aporten información que ayude al público a comprender mejor un asunto.
                </p>
                <p>
                  Esto exige trabajar con criterios editoriales. No todos los temas merecen convertirse en una publicación, ni todos los formatos son adecuados para cualquier objetivo. La selección debe considerar la relación con la oferta, el interés de la audiencia y la capacidad del negocio para desarrollar información fiable.
                </p>
                <p>
                  También importa la continuidad temática. Un conjunto de contenidos relacionados puede ayudar a que una persona profundice en un área y descubra otras cuestiones vinculadas con su necesidad inicial. Así, la web deja de ser una colección de páginas independientes y comienza a funcionar como un entorno informativo organizado.
                </p>
                <p>
                  El contenido adquiere mayor valor cuando responde a una función reconocible dentro del proyecto. Publicar más no equivale necesariamente a comunicar mejor; la relevancia, la claridad y la relación entre las piezas son criterios mucho más útiles para evaluar su aportación.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="visibilidad-intencion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La visibilidad necesita corresponderse con la intención
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Atraer visitantes es una parte del trabajo, pero conseguir que lleguen personas interesadas en lo que ofrece el negocio requiere una estrategia de visibilidad más precisa.
                </p>
                <p>
                  El posicionamiento en buscadores permite conectar determinadas páginas con consultas que realizan los usuarios. Para aprovechar esa posibilidad, necesitamos comprender qué intención existe detrás de cada búsqueda y ofrecer una respuesta que guarde relación con ella.
                </p>
                <p>
                  No es lo mismo una consulta orientada a aprender un concepto que otra destinada a comparar servicios o localizar un proveedor. Aunque ambas puedan pertenecer al mismo sector, las expectativas de quien busca son diferentes.
                </p>
                <p>
                  La organización de los contenidos, la claridad de los títulos, la estructura de las páginas y la utilidad de la información contribuyen a que un sitio resulte más comprensible tanto para sus visitantes como para los sistemas de búsqueda.
                </p>
                <p>
                  La visibilidad también puede desarrollarse mediante canales sociales y otras formas de distribución. Cada canal tiene características propias y no debería utilizarse como una simple repetición automática de publicaciones. La comunicación necesita adaptarse al contexto sin perder coherencia con la propuesta del negocio.
                </p>
                <p>
                  El objetivo no consiste en estar presente en todas partes, sino en construir una presencia adecuada a los recursos disponibles y a los hábitos de las personas que se desea alcanzar.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="visita-oportunidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                De una visita anónima a una oportunidad de relación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una visita a una página web no proporciona por sí misma información suficiente para establecer una relación comercial. Para que el negocio pueda continuar la comunicación, necesita ofrecer mecanismos adecuados mediante los cuales las personas interesadas puedan manifestar su interés.
                </p>
                <p>
                  En este punto adquiere importancia la generación de contactos. Un formulario, una suscripción o el acceso a un recurso pueden facilitar ese primer intercambio, siempre que exista una razón clara para solicitar los datos y que la experiencia resulte proporcionada.
                </p>
                <p>
                  La calidad de una oportunidad no depende únicamente del número de registros obtenidos. También importa conocer si existe correspondencia entre el interés manifestado y los servicios o productos que ofrece la empresa.
                </p>
                <p>
                  Un sistema de captación mal planteado puede reunir numerosos contactos que nunca tuvieron una relación real con la propuesta comercial. Por el contrario, un proceso más selectivo puede facilitar conversaciones con personas cuyas necesidades se encuentran mejor alineadas con la oferta.
                </p>
                <p>
                  La información solicitada debe limitarse a lo necesario y gestionarse de manera responsable. La confianza que se pretende construir mediante la comunicación también debe reflejarse en el tratamiento de los datos personales.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="continuidad-comunicacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La continuidad de la comunicación después del primer contacto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La relación con un posible cliente no termina cuando deja sus datos. Ese momento abre una nueva etapa en la que la empresa necesita decidir cómo mantener una comunicación útil y pertinente.
                </p>
                <p>
                  El correo electrónico puede desempeñar una función importante porque permite desarrollar conversaciones informativas más allá de la visita inicial. Sin embargo, su eficacia no depende de enviar mensajes con frecuencia indiscriminada. Necesita una planificación que considere el interés de la persona, el contexto de su registro y la utilidad de cada comunicación.
                </p>
                <p>
                  Una secuencia de mensajes puede ayudar a presentar información complementaria, aclarar cuestiones frecuentes y explicar aspectos de la propuesta comercial. Su contenido debe guardar relación con la razón por la que se estableció el contacto.
                </p>
                <p>
                  También conviene evitar que cada mensaje tenga como único propósito solicitar una compra. Una relación comercial puede necesitar tiempo para madurar y las comunicaciones deberían aportar valor durante ese proceso.
                </p>
                <p>
                  La continuidad requiere respetar las preferencias de los destinatarios, gestionar adecuadamente las suscripciones y ofrecer mecanismos claros para modificar o retirar el consentimiento cuando corresponda. Una estrategia organizada no puede separarse de una gestión responsable de la comunicación.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="coordinacion-herramientas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La coordinación entre personas, información y herramientas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  A medida que aumenta la actividad comercial, mantener el seguimiento de cada contacto mediante procedimientos improvisados se vuelve complicado. La información puede quedar dispersa, las conversaciones perder continuidad y distintas personas de un equipo pueden trabajar con datos incompletos.
                </p>
                <p>
                  Un sistema de gestión de relaciones con clientes, conocido como CRM, puede ayudar a organizar esa información. Su utilidad consiste en proporcionar una visión más ordenada de las interacciones, las oportunidades y el estado de las relaciones comerciales.
                </p>
                <p>
                  No obstante, incorporar una plataforma no resuelve automáticamente los problemas de gestión. Antes de elegir una herramienta, conviene identificar qué información necesita conservar el negocio, qué procesos desea organizar y quién será responsable de mantener los registros actualizados.
                </p>
                <p>
                  La automatización puede complementar esa estructura al facilitar determinadas tareas repetitivas, como la distribución de comunicaciones o la actualización de ciertos procesos. Pero necesita responder a reglas claras y mantener mecanismos de supervisión.
                </p>
                <p>
                  Para un negocio pequeño, la mejor solución no siempre es la más compleja. Una estructura sencilla que el equipo pueda utilizar correctamente suele aportar más valor que una plataforma sofisticada cuya configuración y mantenimiento superen las necesidades reales de la empresa.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="medir-resultados"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Medir para comprender, no solo para acumular cifras
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una estrategia digital genera información sobre las visitas, las interacciones, los contactos y las respuestas comerciales. El desafío consiste en interpretar esos datos sin confundir actividad con progreso.
                </p>
                <p>
                  Un incremento del tráfico puede parecer positivo, pero necesita analizarse junto con la procedencia de las visitas y su relación con los objetivos del negocio. De la misma manera, un mayor número de contactos no significa necesariamente que hayan aumentado las oportunidades relevantes.
                </p>
                <p>
                  La analítica permite observar cómo se comportan las distintas partes de la estrategia. Puede ayudar a reconocer qué contenidos reciben atención, qué páginas facilitan determinadas acciones y en qué momentos aparecen dificultades dentro de la experiencia del usuario.
                </p>
                <p>
                  La optimización de conversiones parte de esa observación. En lugar de modificar elementos por intuición, permite formular hipótesis, introducir cambios razonados y evaluar si producen una mejora en el comportamiento que interesa.
                </p>
                <p>
                  No todas las decisiones pueden resolverse mediante una cifra. Los datos muestran tendencias y posibles problemas, pero necesitan interpretarse considerando el tipo de negocio, el contexto de la audiencia y las características de cada canal.
                </p>
                <p>
                  Medir con propósito significa seleccionar indicadores que ayuden a tomar decisiones, no convertir el seguimiento estadístico en una actividad independiente de la estrategia.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="experiencia-cliente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La experiencia del cliente como parte del crecimiento
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La captación suele recibir mucha atención porque sus resultados son visibles en forma de visitas y nuevos contactos. Sin embargo, la relación con una persona no debería considerarse terminada cuando realiza una compra.
                </p>
                <p>
                  La experiencia posterior influye en la percepción que el cliente desarrolla sobre la empresa y en su disposición a mantener una relación. La claridad de la información, la atención recibida y la capacidad de responder ante dificultades forman parte de esa experiencia.
                </p>
                <p>
                  Un negocio que conoce las necesidades de sus clientes puede identificar oportunidades para mejorar sus servicios, aclarar aspectos de su propuesta y desarrollar comunicaciones más relevantes. También puede reconocer qué expectativas no se están cumpliendo y dónde conviene introducir ajustes.
                </p>
                <p>
                  La fidelización no se consigue simplemente mediante mensajes periódicos o incentivos. Necesita que la relación conserve su utilidad y que la empresa mantenga una atención coherente con lo que prometió.
                </p>
                <p>
                  Cuando esta dimensión se integra en la estrategia, el crecimiento deja de depender exclusivamente de conseguir nuevos compradores. La calidad de las relaciones existentes también puede contribuir al desarrollo y a la reputación del negocio.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="adaptar-metodologia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Adaptar la metodología a la capacidad de un negocio pequeño
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una estrategia de inbound marketing no debería comenzar con una acumulación de plataformas, campañas y procesos que el negocio todavía no puede gestionar. Su aplicación necesita considerar el tamaño del equipo, los recursos disponibles, la complejidad de la oferta y el nivel de organización existente.
                </p>
                <p>
                  Una empresa pequeña puede necesitar primero una propuesta comercial más clara, una presencia web bien estructurada y contenidos que respondan a las preguntas más importantes de su público. En otra situación, la prioridad podría estar en ordenar los contactos, mejorar la comunicación posterior o comprender por qué las oportunidades no avanzan.
                </p>
                <p>
                  La tecnología debe incorporarse en función de esas necesidades. Las herramientas de automatización, CRM y analítica pueden ampliar las capacidades de trabajo, pero no sustituyen la definición de objetivos ni la comprensión del mercado.
                </p>
                <p>
                  También es importante reconocer que una metodología no se aplica de una vez y para siempre. Las necesidades de los clientes cambian, las condiciones de los canales evolucionan y los negocios atraviesan distintas etapas. La estrategia debe conservar suficiente flexibilidad para responder a esas circunstancias sin perder su dirección.
                </p>
                <p>
                  El crecimiento responsable comienza por construir una estructura que pueda mantenerse. Resulta más útil desarrollar procesos comprensibles y revisables que intentar reproducir modelos diseñados para organizaciones con recursos y equipos muy diferentes.
                </p>
              </div>
            </section>

            {/* Apartado 12 — Cierre editorial */}
            <section
              id="estrategia-conectada"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una estrategia conectada en lugar de acciones aisladas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El inbound marketing alcanza su sentido cuando las diferentes actividades dejan de funcionar como iniciativas independientes. La comunicación, la visibilidad, la captación, el seguimiento y la experiencia del cliente necesitan compartir una orientación.
                </p>
                <p>
                  Si cada área trabaja con objetivos distintos, el negocio puede generar contenidos que no se relacionan con su oferta, conseguir contactos que no reciben atención adecuada o incorporar herramientas que no aportan información útil a las decisiones.
                </p>
                <p>
                  La coordinación permite comprender cómo contribuye cada actividad al conjunto. También facilita reconocer dónde se interrumpe la relación con el público y qué cambios podrían mejorar el funcionamiento general.
                </p>
                <p>
                  Esta visión no elimina la necesidad de experimentar ni de adaptar las acciones a cada contexto. Al contrario, proporciona un marco para evaluar las iniciativas con mayor criterio y evitar que las novedades tecnológicas o las tendencias de marketing desplacen las prioridades reales del negocio.
                </p>
                <p>
                  Para una pequeña empresa, disponer de una estrategia conectada puede representar una forma más ordenada de utilizar sus recursos y desarrollar su presencia digital. No supone una garantía de ventas ni una promesa de crecimiento automático. Es una manera de trabajar con mayor comprensión de las personas, de los procesos y de las decisiones que intervienen en la actividad comercial.
                </p>
                <p>
                  El propósito final no es atraer visitantes por atraerlos, sino construir una relación entre lo que un negocio sabe ofrecer y aquello que sus posibles clientes necesitan comprender, valorar y elegir.
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

export default InboundMarketingGuideView;
