import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface HowToCreateOptimizedBlogViewProps {
  book?: BookItem;
}

export const HOW_TO_CREATE_BLOG_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'blog-proyecto-editorial',
    label: 'El blog como proyecto editorial',
  },
  {
    id: 'estructura-blog',
    label: 'Las decisiones que condicionan su estructura',
  },
  {
    id: 'contenido-necesidades',
    label: 'Contenido que responde a necesidades reales',
  },
  {
    id: 'experiencia-lectura',
    label: 'La experiencia de lectura y navegación',
  },
  {
    id: 'seo-descubrimiento',
    label: 'SEO y descubrimiento orgánico',
  },
  {
    id: 'promocion-audiencia',
    label: 'Promoción y relaciones con la audiencia',
  },
  {
    id: 'datos-decisiones',
    label: 'Interpretar los datos para tomar decisiones',
  },
  {
    id: 'mantenimiento-confianza',
    label: 'Mantenimiento y confianza técnica',
  },
  {
    id: 'monetizacion-desarrollo',
    label: 'Monetización y desarrollo del proyecto',
  },
  {
    id: 'activo-evolucion',
    label: 'Un activo digital que debe evolucionar',
  },
];

const HowToCreateOptimizedBlogView: React.FC<HowToCreateOptimizedBlogViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'como-crear-un-blog-optimizado') ||
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
              href: currentBook.path || '/como-crear-un-blog-optimizado/',
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
                href={parentCategory?.path || '/iniciacion/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Iniciación'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Cómo crear un Blog optimizado
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              El camino hacia el éxito para destacar en el mundo digital + Optimización de motores de búsqueda (SEO)
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-4">
              Un blog no se construye únicamente publicando artículos: necesita una estructura capaz de convertir el conocimiento en contenido útil, atraer lectores y mantener su valor con el paso del tiempo.
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
                Crear un blog puede parecer una tarea sencilla cuando pensamos únicamente en publicar textos en Internet. Sin embargo, entre disponer de un espacio web y desarrollar una plataforma que tenga sentido para sus lectores existe una diferencia importante. Un blog necesita una razón para existir, una orientación reconocible y una organización que permita transformar publicaciones individuales en una propuesta editorial coherente.
              </p>
              <p>
                La dificultad no reside exclusivamente en escribir. También intervienen decisiones que afectan a la experiencia de navegación, la presentación de la información, la capacidad de ser encontrado en los buscadores y la manera en que el proyecto puede evolucionar. Cuando estos elementos se desarrollan sin conexión entre sí, el resultado puede ser un sitio con numerosas publicaciones, pero sin una dirección suficientemente definida.
              </p>
              <p>
                Por eso, pensar en un blog optimizado exige una perspectiva más amplia. No se trata de perseguir visitas a cualquier precio ni de aplicar técnicas aisladas para mejorar posiciones en los resultados de búsqueda. Se trata de construir una plataforma en la que el contenido, la estructura y las decisiones técnicas trabajen en una misma dirección.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 10 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={HOW_TO_CREATE_BLOG_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO COMPLETO + CIERRE EDITORIAL (10 H2)      */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="blog-proyecto-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El blog como proyecto editorial: mucho más que una colección de publicaciones
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un blog adquiere identidad cuando deja de funcionar como un espacio donde se acumulan artículos y comienza a responder a una intención reconocible. Esa intención determina qué temas tienen cabida, qué tipo de lectores pueden encontrar utilidad en sus contenidos y qué relación existe entre una publicación y la siguiente.
                </p>
                <p>
                  La elección de una temática, por tanto, no debería limitarse a seleccionar un asunto que parezca atractivo. También conviene considerar si existe suficiente profundidad para desarrollarlo, si permite abordar distintas necesidades y si podemos mantener una línea editorial sin depender constantemente de ideas improvisadas.
                </p>
                <p>
                  Esta perspectiva cambia la manera de entender el trabajo. Cada artículo deja de ser una pieza independiente y pasa a formar parte de una biblioteca de contenidos que puede adquirir valor acumulativo. Una publicación puede explicar un concepto, otra profundizar en una dificultad y una tercera ayudar al lector a relacionar ambas cuestiones.
                </p>
                <p>
                  La coherencia temática no significa hablar siempre de lo mismo. Significa que las distintas publicaciones contribuyen a una propuesta reconocible. Esa continuidad ayuda a orientar al lector y proporciona una base más sólida para organizar el crecimiento del sitio.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="estructura-blog"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Las decisiones que condicionan la estructura de un blog
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Antes de concentrar esfuerzos en producir contenido, necesitamos comprender que la estructura del blog condiciona buena parte de su desarrollo posterior. La plataforma utilizada, el dominio, el alojamiento y la configuración inicial no son decisiones aisladas: forman parte de la infraestructura sobre la que se sostendrá el proyecto.
                </p>
                <p>
                  También importa la forma en que organizamos las secciones, las categorías y los recorridos de navegación. Un visitante debería poder comprender dónde se encuentra, qué tipo de información puede consultar y cómo continuar explorando sin tener que reconstruir mentalmente la organización del sitio.
                </p>
                <p>
                  Una estructura clara beneficia tanto a la experiencia de las personas como a la interpretación de las páginas por parte de los buscadores. Cuando las publicaciones se relacionan mediante una organización lógica, el blog transmite mejor la relación entre sus diferentes áreas de conocimiento.
                </p>
                <p>
                  La planificación inicial también evita que el proyecto dependa de soluciones improvisadas. Es más sencillo desarrollar una estructura con criterios definidos que reorganizar posteriormente un sitio que ha crecido sin una dirección editorial y técnica consistente.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="contenido-necesidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Contenido que responde a necesidades reales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido constituye el motivo principal por el que una persona decide visitar un blog, pero publicar con frecuencia no garantiza que las publicaciones tengan utilidad. La cuestión fundamental es comprender qué necesita saber el lector y qué información puede ayudarle a avanzar en su búsqueda.
                </p>
                <p>
                  Esto requiere distinguir entre escribir sobre un tema y resolver una necesidad relacionada con ese tema. Una publicación puede contener numerosos datos y, aun así, dejar al visitante sin una respuesta clara. Otra, más concreta y mejor organizada, puede resultar mucho más valiosa porque aborda directamente la cuestión que motivó la búsqueda.
                </p>
                <p>
                  La planificación editorial permite evitar esa desconexión. En lugar de elegir asuntos al azar, podemos identificar áreas de interés, relacionar preguntas y establecer prioridades. De este modo, el contenido adquiere una función dentro del conjunto y no depende exclusivamente de la inspiración del momento.
                </p>
                <p>
                  También debemos prestar atención a la forma de presentar las ideas. La claridad, la organización de los argumentos, la precisión del lenguaje y la revisión del texto influyen en la capacidad de lectura. Los elementos visuales pueden complementar la explicación cuando aportan información, pero no deberían utilizarse para disimular la falta de contenido sustancial.
                </p>
                <p>
                  Un blog con criterio editorial no necesita publicar sobre cualquier tendencia. Necesita desarrollar aquellos temas que justifican su presencia y hacerlo con suficiente profundidad para que cada nueva incorporación refuerce el conjunto.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="experiencia-lectura"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La experiencia de lectura y navegación también forma parte del contenido
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La calidad de un artículo no depende únicamente de sus palabras. La forma en que se presenta puede facilitar su comprensión o convertirse en un obstáculo para el lector.
                </p>
                <p>
                  Un diseño excesivamente recargado, una navegación confusa o una página difícil de utilizar pueden perjudicar la experiencia incluso cuando la información publicada es pertinente. Por eso, la presentación del blog debe estar al servicio del contenido y no competir con él.
                </p>
                <p>
                  La usabilidad comienza por cuestiones aparentemente sencillas: una jerarquía visual comprensible, una distribución ordenada de las secciones, enlaces que conduzcan a destinos coherentes y una lectura cómoda desde diferentes dispositivos. También implica considerar a quienes necesitan alternativas accesibles para interactuar con los elementos de la página.
                </p>
                <p>
                  El rendimiento técnico interviene en esta experiencia. Una página que tarda demasiado en responder puede dificultar el acceso a la información y generar fricción innecesaria. Lo mismo sucede cuando los elementos visuales, los componentes interactivos o la estructura de navegación no funcionan como el visitante espera.
                </p>
                <p>
                  El objetivo no es conseguir un diseño llamativo por sí mismo. Es desarrollar un entorno que permita concentrarse en la información, descubrir otros contenidos relacionados y utilizar el sitio sin dificultades evitables.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="seo-descubrimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                SEO y descubrimiento orgánico: facilitar que el contenido pueda encontrarse
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un contenido útil necesita oportunidades para llegar a sus lectores. La optimización para motores de búsqueda interviene precisamente en esa relación entre lo que una publicación ofrece y las consultas que realizan las personas cuando buscan información.
                </p>
                <p>
                  El SEO no debería entenderse como una operación de insertar palabras clave en un texto. Su función es más amplia: ayudar a que cada página tenga un propósito reconocible, presente la información de manera comprensible y responda a una necesidad de búsqueda concreta.
                </p>
                <p>
                  Esto comienza con la investigación de los términos y las preguntas que pueden conducir a un artículo. Sin embargo, identificar una expresión no significa repetirla indiscriminadamente. Es necesario comprender su contexto y desarrollar una respuesta que resulte natural, completa y pertinente.
                </p>
                <p>
                  La organización interna también influye. Los títulos deben reflejar el contenido real de cada apartado, las páginas necesitan una estructura lógica y los enlaces internos pueden ayudar a conectar publicaciones que aportan información complementaria.
                </p>
                <p>
                  A estos elementos se suman aspectos técnicos que permiten interpretar y recorrer el sitio con mayor facilidad. La optimización no consiste en una única modificación, sino en mantener una relación coherente entre contenido, arquitectura y funcionamiento.
                </p>
                <p>
                  Los enlaces externos que apuntan hacia un blog pueden formar parte de su reconocimiento en Internet, pero su valor no debería evaluarse únicamente por la cantidad. La relevancia y el contexto de las referencias también importan. Del mismo modo, los proyectos orientados a una zona geográfica necesitan considerar cómo se relaciona su contenido con las búsquedas de carácter local.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="promocion-audiencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Promoción y relaciones con la audiencia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La publicación de un artículo no significa que su difusión haya terminado. Un blog necesita encontrar vías para conectar con personas interesadas en sus contenidos, y esa tarea puede desarrollarse mediante distintos canales.
                </p>
                <p>
                  Las redes sociales, las colaboraciones y otras formas de distribución permiten ampliar los puntos de contacto con la audiencia. No obstante, cada canal tiene características propias. Compartir una publicación no debería consistir simplemente en repetir el mismo mensaje en todas partes, sino en presentar su utilidad de una forma adecuada al contexto.
                </p>
                <p>
                  También es importante comprender que atraer visitantes y construir una audiencia son objetivos relacionados, pero diferentes. Una visita puntual puede responder a una necesidad inmediata. Una relación más estable requiere que el lector encuentre motivos para regresar, explorar otros artículos o mantener el contacto con el proyecto.
                </p>
                <p>
                  La promoción tiene más sentido cuando existe una base editorial que la respalda. Difundir contenidos poco relacionados entre sí puede generar actividad momentánea, pero difícilmente construye una identidad reconocible. En cambio, una propuesta consistente facilita que las distintas acciones de comunicación refuercen el mismo posicionamiento.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="datos-decisiones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Interpretar los datos para tomar decisiones
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las estadísticas de un blog pueden ofrecer información valiosa, pero su utilidad depende de las preguntas que intentemos responder. Consultar cifras sin un propósito definido puede producir una acumulación de datos que no se traduce en mejoras.
                </p>
                <p>
                  Conviene distinguir entre las métricas que describen el alcance, las que ayudan a comprender el comportamiento de los visitantes y las que permiten evaluar los objetivos del proyecto. No todas tienen la misma importancia en cada etapa.
                </p>
                <p>
                  Por ejemplo, un incremento de visitas puede parecer positivo, pero necesita interpretarse junto con otros indicadores. También interesa conocer qué publicaciones reciben atención, qué contenidos conducen a otras páginas y dónde aparecen dificultades durante la navegación.
                </p>
                <p>
                  Las herramientas de analítica permiten observar tendencias y comparar resultados a lo largo del tiempo. Su función no es sustituir el criterio editorial, sino aportar información que ayude a tomar decisiones mejor fundamentadas.
                </p>
                <p>
                  Un proyecto maduro utiliza los datos para revisar prioridades, detectar oportunidades y reconocer qué aspectos necesitan atención. No modifica su orientación cada vez que una cifra cambia, sino que interpreta los resultados dentro de un contexto más amplio.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="mantenimiento-confianza"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Mantenimiento y confianza técnica: cuidar lo que ya hemos construido
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un blog no termina de desarrollarse cuando sus primeras publicaciones están disponibles. Como cualquier plataforma digital, necesita atención continuada para conservar su funcionamiento y reducir riesgos.
                </p>
                <p>
                  Las actualizaciones del sistema de gestión de contenidos y de sus componentes forman parte de esa responsabilidad. También conviene disponer de copias de seguridad que permitan recuperar información ante incidentes y revisar periódicamente que los elementos esenciales del sitio continúan operativos.
                </p>
                <p>
                  La seguridad no es un asunto reservado a proyectos grandes. Un sitio que almacena contenidos, gestiona usuarios o incorpora herramientas externas necesita considerar las amenazas que pueden afectar a su disponibilidad y a la integridad de sus datos.
                </p>
                <p>
                  La gestión de comentarios y del spam también influye en la calidad del entorno. Mantener espacios de participación requiere establecer criterios y evitar que las interacciones deterioren la experiencia de lectura.
                </p>
                <p>
                  Además, el rendimiento debe revisarse con cierta continuidad. Las necesidades de un blog pueden cambiar a medida que incorpora nuevas publicaciones, recursos y funcionalidades. Detectar problemas a tiempo permite actuar antes de que se conviertan en obstáculos importantes para sus visitantes.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="monetizacion-desarrollo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Monetización y desarrollo del proyecto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un blog puede convertirse en una plataforma desde la que desarrollar distintas actividades económicas, pero la monetización necesita guardar relación con la temática, la audiencia y el valor que realmente ofrece el sitio.
                </p>
                <p>
                  No todas las alternativas son adecuadas para todos los proyectos. La promoción de productos de terceros, la comercialización de recursos propios, la creación de contenidos formativos o el desarrollo de otros productos digitales responden a modelos diferentes y requieren decisiones específicas.
                </p>
                <p>
                  La elección no debería basarse únicamente en la posibilidad de generar ingresos. También importa la coherencia entre la propuesta editorial y aquello que se ofrece al lector. Una recomendación comercial desconectada del contenido puede debilitar la confianza; una oferta relacionada con una necesidad real puede integrarse de forma más natural.
                </p>
                <p>
                  A medida que el proyecto adquiere dimensión, también puede ser necesario revisar cómo se distribuyen las tareas y qué procesos conviene simplificar. La automatización y la delegación pueden liberar tiempo, pero necesitan objetivos claros y supervisión. Incorporar herramientas sin comprender qué problema resuelven puede añadir complejidad en lugar de reducirla.
                </p>
                <p>
                  El desarrollo económico de un blog, por tanto, no debería separarse de su calidad editorial ni de la relación que mantiene con sus visitantes.
                </p>
              </div>
            </section>

            {/* Apartado 10 — Cierre editorial */}
            <section
              id="activo-evolucion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Un activo digital que debe evolucionar
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un blog con recorrido necesita adaptarse. Cambian los intereses de los lectores, aparecen nuevas formas de consumo de información y las condiciones técnicas de Internet evolucionan. Mantener una plataforma no significa conservar todas sus decisiones originales de manera indefinida.
                </p>
                <p>
                  La revisión periódica permite identificar publicaciones que necesitan actualización, temas que han perdido relevancia y oportunidades que todavía no se han desarrollado. También ayuda a reconocer qué elementos forman parte de la identidad del proyecto y cuáles pueden modificarse sin perder su orientación.
                </p>
                <p>
                  La autoridad no aparece por acumular artículos ni por mantener una actividad constante sin dirección. Se construye cuando un sitio desarrolla una propuesta reconocible, ofrece información consistente y demuestra continuidad en su ámbito de especialización.
                </p>
                <p>
                  En este sentido, el blog puede entenderse como un activo digital que reúne conocimiento, contenidos, estructura y relaciones con una audiencia. Su valor no depende de una publicación aislada, sino de la capacidad del conjunto para seguir siendo útil y adaptarse a nuevas circunstancias.
                </p>
                <p>
                  La perspectiva a largo plazo cambia la prioridad: en lugar de perseguir únicamente resultados inmediatos, conviene construir una plataforma que podamos comprender, mantener y mejorar. Esa es la diferencia entre publicar en Internet y desarrollar un proyecto editorial con posibilidades de continuidad.
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

export default HowToCreateOptimizedBlogView;
