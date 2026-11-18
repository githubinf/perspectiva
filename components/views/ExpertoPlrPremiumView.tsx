import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface ExpertoPlrPremiumViewProps {
  book?: BookItem;
}

export const EXPERTO_PLR_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'valor-plr',
    label: 'El verdadero valor de trabajar con contenido PLR',
  },
  {
    id: 'transformacion-conocimiento',
    label: 'Transformar conocimiento exige una dirección propia',
  },
  {
    id: 'inteligencia-artificial',
    label: 'La inteligencia artificial dentro del proceso creativo',
  },
  {
    id: 'contenido-multiformato',
    label: 'Un contenido puede convertirse en distintas experiencias',
  },
  {
    id: 'presentacion-producto',
    label: 'La presentación también forma parte del producto',
  },
  {
    id: 'distribucion-comercial',
    label: 'Elegir dónde comercializar y distribuir',
  },
  {
    id: 'infraestructura-digital',
    label: 'Construir una infraestructura digital propia',
  },
  {
    id: 'atencion-publico',
    label: 'La atención del público como recurso estratégico',
  },
  {
    id: 'automatizacion',
    label: 'Automatizar sin perder el control del negocio',
  },
  {
    id: 'escalabilidad',
    label: 'Medir, mejorar y ampliar el proyecto',
  },
  {
    id: 'sistema-digital',
    label: 'De productos aislados a un sistema digital',
  },
];

const ExpertoPlrPremiumView: React.FC<ExpertoPlrPremiumViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'experto-en-plr-premium') ||
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
              : [{ label: 'Origen', href: '/origen/' }]),
            {
              label: currentBook.title,
              href: currentBook.path || '/experto-en-plr-premium/',
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
          <header className="mb-10">
            <div className="mb-4">
              <Link
                href={parentCategory?.path || '/origen/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Origen'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Experto en PLR Premium
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              El Sistema Paso a Paso para Crear Infoproductos Rentables que venden. Con Herramientas Digitales Actuales.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-4">
              De la materia prima digital a un ecosistema propio: una visión estratégica para transformar contenidos, desarrollar productos y organizar un negocio digital con capacidad de evolución.
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
                El mercado de los productos digitales ofrece una posibilidad interesante para quienes desean desarrollar una actividad comercial basada en el conocimiento y la distribución de contenidos. Sin embargo, disponer de materiales que podemos utilizar o comercializar no significa que tengamos construido un negocio. Entre adquirir un recurso y convertirlo en una propuesta digital con identidad propia existe un trabajo estratégico que determina buena parte del valor final.
              </p>
              <p>
                El PLR puede facilitar el acceso a contenidos sobre los que desarrollar nuevos productos, pero su verdadero potencial no se encuentra en cambiar algunas palabras, modificar una portada o publicar el material en otra plataforma. La oportunidad aparece cuando somos capaces de tomar decisiones sobre el contenido, su utilidad, su presentación y la forma en que llegará a las personas interesadas.
              </p>
              <p>
                Además, el entorno digital actual permite conectar herramientas que antes se utilizaban de manera independiente. La inteligencia artificial puede intervenir en diferentes tareas de producción; los formatos digitales permiten adaptar una misma base de conocimiento a distintas experiencias; y las plataformas comerciales ofrecen alternativas para distribuir, vender y gestionar productos.
              </p>
              <p>
                El desafío consiste en organizar todas esas posibilidades sin convertir el proyecto en una acumulación desordenada de herramientas. Necesitamos comprender cómo se relacionan el producto, la tecnología, los canales de distribución y las personas que pueden encontrar valor en nuestra propuesta.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 11 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={EXPERTO_PLR_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO COMPLETO + CIERRE EDITORIAL (11 H2)      */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="valor-plr"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El verdadero valor de trabajar con contenido PLR
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los productos con derechos de marca privada pueden representar un punto de partida para desarrollar una actividad digital. Permiten acceder a materiales que, bajo las condiciones de licencia correspondientes, podemos adaptar y utilizar en nuestros propios proyectos. Sin embargo, su disponibilidad no constituye por sí misma una ventaja competitiva.
                </p>
                <p>
                  Cuando un mismo material puede encontrarse en manos de numerosos compradores, la simple distribución de ese contenido difícilmente permite construir una identidad diferenciada. La oportunidad está en decidir qué hacer con él y cómo convertirlo en una propuesta que tenga sentido para un público concreto.
                </p>
                <p>
                  Esta perspectiva cambia nuestra relación con el PLR. Dejamos de verlo como un producto terminado que solo necesita una nueva presentación y empezamos a considerarlo una materia prima que requiere evaluación, criterio y trabajo editorial.
                </p>
                <p>
                  También debemos comprender que no todos los materiales tienen el mismo potencial. Algunos pueden estar desactualizados, otros necesitan una reorganización profunda y algunos quizá no resulten apropiados para el proyecto que queremos desarrollar. La licencia de uso tampoco debe interpretarse como una autorización ilimitada: las condiciones concretas de cada material determinan qué transformaciones y formas de comercialización están permitidas.
                </p>
                <p>
                  Por tanto, el primer paso consiste en evaluar lo que tenemos delante y decidir si merece la pena invertir recursos en su transformación.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="transformacion-conocimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Transformar conocimiento exige una dirección propia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La transformación de un producto digital no debería medirse por la cantidad de cambios visibles que realizamos. Un documento puede tener una portada diferente y una redacción modificada sin que haya mejorado su utilidad. La verdadera transformación se produce cuando reconsideramos el propósito del material y encontramos una manera de aportar valor que no dependa exclusivamente de su contenido original.
                </p>
                <p>
                  Para conseguirlo, necesitamos comprender qué problema aborda, qué información resulta insuficiente y qué aspectos requieren una explicación más clara. También debemos determinar qué conocimientos adicionales pueden enriquecer la propuesta y qué elementos conviene eliminar porque no contribuyen al objetivo.
                </p>
                <p>
                  Esta tarea exige una combinación de análisis y criterio editorial. No basta con incorporar información nueva: debemos comprobar que sea pertinente, que tenga fundamento y que encaje con el propósito del producto.
                </p>
                <p>
                  La contextualización merece especial atención. Un contenido puede haber sido válido en el momento de su creación y necesitar una revisión cuando cambian las herramientas, las prácticas del sector o las condiciones del mercado. Actualizarlo implica comprobar la vigencia de sus afirmaciones, no simplemente sustituir fechas o nombres.
                </p>
                <p>
                  La personalización también debe ir más allá de modificar el tono. Una propuesta adquiere identidad cuando refleja decisiones conscientes sobre su enfoque, su organización y la experiencia que queremos ofrecer. El resultado debe tener una razón propia para existir.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="inteligencia-artificial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La inteligencia artificial dentro del proceso creativo
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La inteligencia artificial ha ampliado las posibilidades de trabajar con contenidos digitales. Puede ayudar a examinar documentos, detectar problemas de organización, explorar alternativas, preparar borradores y acelerar determinadas tareas de producción.
                </p>
                <p>
                  Sin embargo, utilizar estas herramientas no elimina la necesidad de supervisión. La velocidad con la que podemos generar texto no garantiza que la información sea correcta, que el resultado tenga profundidad o que responda a las necesidades de un lector.
                </p>
                <p>
                  La IA funciona mejor cuando forma parte de un proceso dirigido por objetivos claros. Primero debemos saber qué queremos conseguir; después podemos utilizarla para explorar soluciones, organizar información o desarrollar materiales que posteriormente serán revisados.
                </p>
                <p>
                  También es necesario distinguir entre asistencia y responsabilidad. La selección de fuentes, la comprobación de datos, la coherencia del contenido y las decisiones finales siguen necesitando criterio humano.
                </p>
                <p>
                  Una herramienta puede producir una explicación convincente y, aun así, contener errores o presentar como cierta una afirmación insuficientemente respaldada. Por eso, la revisión no es una fase opcional que se realiza únicamente cuando sobra tiempo. Forma parte de la calidad del producto.
                </p>
                <p>
                  La ventaja no está en utilizar inteligencia artificial en todas las tareas posibles, sino en identificar dónde aporta eficiencia sin deteriorar el resultado.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="contenido-multiformato"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Un contenido puede convertirse en distintas experiencias
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El conocimiento no tiene por qué permanecer limitado a un único formato. Una idea desarrollada inicialmente como texto puede adaptarse a otras formas de presentación cuando estas responden a una necesidad real del público.
                </p>
                <p>
                  Un ebook permite organizar información para una lectura estructurada. Un recurso de audio puede facilitar el acceso a determinados contenidos en otros momentos del día. Un vídeo puede ayudar a explicar un procedimiento que resulta más sencillo de comprender mediante imágenes. Una presentación interactiva puede favorecer la participación y la aplicación práctica de lo aprendido.
                </p>
                <p>
                  Estas posibilidades abren un campo de desarrollo para quienes trabajan con productos digitales. Sin embargo, multiplicar formatos no significa copiar el mismo contenido en diferentes archivos y considerar terminado el trabajo.
                </p>
                <p>
                  Cada experiencia necesita una adaptación. El lenguaje, la extensión, la organización y la forma de interacción deben responder a las características del medio utilizado.
                </p>
                <p>
                  También debemos valorar el esfuerzo que requiere cada formato. Producir cinco versiones de un material puede parecer atractivo, pero no siempre es la mejor decisión. Conviene identificar qué formatos aportan valor adicional y cuáles pueden consumir recursos sin mejorar la experiencia del usuario.
                </p>
                <p>
                  La diversificación tiene sentido cuando existe una relación clara entre el contenido principal y las nuevas formas de presentarlo.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="presentacion-producto"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La presentación también forma parte del producto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un producto digital no se evalúa únicamente por la información que contiene. Su presentación influye en la manera en que las personas lo reconocen, lo interpretan y deciden si merece su atención.
                </p>
                <p>
                  La identidad visual, la portada, la organización de las páginas y la coherencia entre los distintos elementos contribuyen a transmitir una percepción de calidad. Estos componentes no sustituyen al contenido, pero ayudan a comunicar su propósito y a diferenciarlo de otras propuestas.
                </p>
                <p>
                  En este contexto, el diseño debe estar al servicio del producto. Una portada necesita representar adecuadamente el tema y el público al que se dirige. Los recursos gráficos deben facilitar la comprensión, mientras que la estructura visual debe permitir que el usuario encuentre la información sin dificultades.
                </p>
                <p>
                  La inteligencia artificial también puede intervenir en la generación de conceptos visuales y en determinadas tareas de diseño. Aun así, el resultado requiere revisión: una imagen atractiva no necesariamente es apropiada, y una composición visualmente llamativa puede resultar poco clara cuando se utiliza en una miniatura comercial.
                </p>
                <p>
                  La presentación profesional es una combinación de decisiones. No depende de añadir más elementos, sino de conseguir que cada uno cumpla una función reconocible.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="distribucion-comercial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Elegir dónde comercializar y distribuir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un producto bien desarrollado necesita un entorno adecuado para llegar a sus posibles compradores. La elección de la plataforma influye en la forma de presentar la oferta, gestionar las transacciones y mantener la relación con los clientes.
                </p>
                <p>
                  No existe un único canal que resulte conveniente para todos los proyectos. Algunas plataformas ofrecen acceso a mercados ya establecidos y simplifican determinadas tareas de distribución. Otras permiten construir una relación más directa con el público y controlar una mayor parte de la experiencia comercial.
                </p>
                <p>
                  Amazon KDP, por ejemplo, pertenece a un entorno orientado a la publicación y distribución de libros. Las plataformas de cursos responden a necesidades diferentes, mientras que los servicios de venta de productos digitales pueden ofrecer alternativas para gestionar archivos, pagos y entregas.
                </p>
                <p>
                  También existen plataformas de afiliación que permiten comercializar productos propios o participar en la distribución de ofertas de terceros, siempre bajo sus condiciones particulares.
                </p>
                <p>
                  La decisión no debería basarse únicamente en la popularidad de una herramienta. Necesitamos valorar sus costes, las condiciones aplicables, las posibilidades de integración, el tipo de público al que permite llegar y el grado de control que ofrece.
                </p>
                <p>
                  La plataforma es un medio para desarrollar el negocio, no el negocio en sí mismo.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="infraestructura-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir una infraestructura digital propia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  A medida que un proyecto incorpora productos, clientes y canales de distribución, puede resultar conveniente desarrollar una infraestructura que conecte sus diferentes componentes.
                </p>
                <p>
                  Una presencia digital propia permite organizar la información, presentar el catálogo, explicar las propuestas y establecer puntos de contacto con las personas interesadas. También puede facilitar que diferentes recursos trabajen de manera coordinada.
                </p>
                <p>
                  No es necesario comenzar con una arquitectura tecnológica compleja. En muchos casos, una página bien organizada y un sistema básico de comunicación son suficientes para dar los primeros pasos. La infraestructura puede evolucionar conforme aparecen necesidades que justifican nuevas funcionalidades.
                </p>
                <p>
                  Lo importante es comprender la diferencia entre depender completamente de una plataforma externa y construir elementos propios que aporten continuidad al proyecto.
                </p>
                <p>
                  Una tienda o un servicio de terceros pueden resolver tareas concretas, pero las condiciones de esos proveedores pueden cambiar. Contar con una estructura digital propia permite desarrollar una identidad independiente y organizar mejor las relaciones entre productos, contenidos y audiencia.
                </p>
                <p>
                  Esta evolución requiere tomar decisiones proporcionadas a los recursos disponibles. Construir más infraestructura de la necesaria puede convertirse en una fuente de costes y complejidad. La tecnología debe responder a necesidades reales, no convertirse en un objetivo aislado.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="atencion-publico"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La atención del público como recurso estratégico
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un producto digital no encuentra necesariamente a sus compradores por el simple hecho de estar disponible. Para que una propuesta llegue a las personas adecuadas, necesitamos desarrollar una estrategia de visibilidad.
                </p>
                <p>
                  La atención del público se distribuye entre numerosos canales y formatos. Los buscadores, las redes sociales, las comunidades, los contenidos audiovisuales y el correo electrónico ofrecen distintas oportunidades para establecer contacto con posibles clientes.
                </p>
                <p>
                  Cada canal tiene características propias. Una búsqueda puede responder a una necesidad concreta; una publicación en redes puede despertar interés; una comunidad puede facilitar conversaciones más continuas; y el correo electrónico puede mantener una relación directa con personas que han decidido recibir información.
                </p>
                <p>
                  La elección debe partir del comportamiento del público, no de la popularidad momentánea de una plataforma. También conviene evitar la dispersión: intentar mantener una presencia intensa en todos los canales puede consumir recursos que deberían destinarse a mejorar los productos.
                </p>
                <p>
                  Una estrategia de tráfico necesita coherencia entre lo que comunicamos y lo que ofrecemos. Si atraemos personas mediante mensajes que no representan fielmente el producto, podemos generar visitas sin construir confianza.
                </p>
                <p>
                  La visibilidad adquiere valor cuando facilita una relación entre una necesidad real y una propuesta capaz de responder a ella.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="automatizacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Automatizar sin perder el control del negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La automatización puede ayudar a reducir tareas repetitivas y conectar procesos que, de otro modo, exigirían intervención constante. En un negocio digital puede intervenir en la distribución de contenidos, la gestión de consultas, el seguimiento de clientes y determinadas operaciones comerciales.
                </p>
                <p>
                  Su utilidad depende de que exista un proceso comprensible antes de intentar automatizarlo. Si una actividad está mal organizada, trasladarla a una herramienta no resuelve sus problemas. En algunos casos, incluso puede multiplicar los errores.
                </p>
                <p>
                  Por eso, conviene identificar qué tareas se repiten, qué pasos pueden estandarizarse y qué situaciones requieren una decisión humana. La automatización debe mejorar la organización, no eliminar indiscriminadamente el contacto personal.
                </p>
                <p>
                  También debemos considerar la experiencia del cliente. Una respuesta automática puede resultar útil cuando proporciona información inmediata, pero puede generar frustración si impide resolver una consulta particular. La eficiencia interna nunca debería conseguirse a costa de una atención deficiente.
                </p>
                <p>
                  Un sistema bien planteado combina procedimientos claros, herramientas apropiadas y supervisión. Su propósito es liberar tiempo para actividades que requieren análisis, creatividad y decisiones de mayor importancia.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="escalabilidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Medir, mejorar y ampliar el proyecto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un negocio digital necesita información para saber si está avanzando en la dirección adecuada. Las métricas permiten observar el comportamiento de los productos, los canales de adquisición y las operaciones, pero solo resultan útiles cuando están relacionadas con decisiones concretas.
                </p>
                <p>
                  No todas las cifras tienen la misma importancia. El número de visitas, por ejemplo, no explica por sí solo si una propuesta es rentable. También debemos considerar la relación entre los recursos invertidos, las ventas obtenidas, los costes de adquisición y la continuidad de los clientes.
                </p>
                <p>
                  La interpretación de los datos exige contexto. Un aumento de actividad puede representar una mejora o simplemente un incremento del esfuerzo necesario para conseguir el mismo resultado. Por eso, conviene analizar las relaciones entre indicadores en lugar de perseguir cifras aisladas.
                </p>
                <p>
                  Cuando un proyecto comienza a mostrar una estructura más estable, aparece la posibilidad de ampliar sus operaciones. Esto puede implicar incorporar nuevos productos, mejorar los procesos, distribuir responsabilidades o desarrollar sistemas que permitan mantener la calidad a medida que aumenta la actividad.
                </p>
                <p>
                  La escalabilidad no consiste en crecer a cualquier precio. Un sistema que aumenta su volumen mientras pierde control, coherencia o rentabilidad no representa necesariamente una evolución favorable.
                </p>
                <p>
                  El crecimiento sostenible requiere comprender qué funciona, qué necesita mejorar y qué recursos podemos dedicar a la siguiente etapa.
                </p>
              </div>
            </section>

            {/* Apartado 11 — Cierre editorial */}
            <section
              id="sistema-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                De productos aislados a un sistema digital
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El verdadero potencial de trabajar con productos digitales aparece cuando dejamos de considerar cada publicación como una operación independiente y empezamos a comprender las relaciones que pueden establecerse entre ellas.
                </p>
                <p>
                  Un contenido puede convertirse en la base de diferentes formatos. Un producto puede formar parte de una oferta más amplia. Una plataforma puede facilitar su distribución, mientras que una infraestructura propia organiza la relación con los clientes. Los procesos automatizados pueden reducir determinadas tareas y las métricas ayudar a decidir dónde conviene concentrar los recursos.
                </p>
                <p>
                  Estas conexiones permiten construir una actividad con mayor coherencia que la simple acumulación de archivos y ofertas.
                </p>
                <p>
                  Sin embargo, no necesitamos desarrollar todos los componentes al mismo tiempo. Un proyecto puede comenzar con un producto bien definido y evolucionar a partir de las necesidades que aparecen durante su desarrollo. La infraestructura, los canales y las herramientas deben crecer de manera proporcionada.
                </p>
                <p>
                  También debemos recordar que la tecnología cambia, las plataformas actualizan sus condiciones y los hábitos de los consumidores evolucionan. Un sistema digital no es una estructura que se construye una vez y permanece intacta. Necesita revisión y capacidad de adaptación.
                </p>
                <p>
                  Trabajar con PLR, inteligencia artificial y herramientas digitales puede abrir diferentes caminos para quienes desean crear productos propios. La diferencia está en cómo utilizamos esos recursos: si nos limitamos a reproducir materiales existentes, tendremos una propuesta difícil de distinguir; si los integramos dentro de una estrategia coherente, podremos desarrollar activos con identidad y posibilidades de evolución.
                </p>
                <p>
                  La finalidad no es producir por producir, ni automatizar cada actividad disponible. Es construir un sistema en el que el conocimiento, los productos, la tecnología y la comercialización trabajen en una misma dirección.
                </p>
                <p>
                  Ese cambio de perspectiva permite pasar de gestionar contenidos aislados a desarrollar un proyecto digital con estructura, criterio y capacidad de crecimiento.
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

export default ExpertoPlrPremiumView;
