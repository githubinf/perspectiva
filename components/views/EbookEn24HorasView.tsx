import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface EbookEn24HorasViewProps {
  book?: BookItem;
}

export const EBOOK_EN_24_HORAS_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'conocimiento-activo-digital',
    label: 'El conocimiento también puede convertirse en un activo digital',
  },
  {
    id: 'dificultad-escribir-palabras',
    label: 'La dificultad de escribir no siempre está en las palabras',
  },
  {
    id: 'tiempo-recurso-editorial',
    label: 'El tiempo como recurso editorial',
  },
  {
    id: 'inteligencia-artificial-crear',
    label: 'La inteligencia artificial y una nueva forma de crear',
  },
  {
    id: 'publicar-construir-presencia',
    label: 'Publicar un libro es también construir una presencia',
  },
  {
    id: 'valor-terminar-proyecto',
    label: 'El valor de terminar un proyecto',
  },
  {
    id: 'oportunidad-comenzar-escribir',
    label: 'Una oportunidad para comenzar a escribir sin esperar el momento perfecto',
  },
];

const OFFICIAL_BOOK_TITLE = 'Ebook en 24 horas';

const EbookEn24HorasView: React.FC<EbookEn24HorasViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'ebook-en-24-horas') ||
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
              : [{ label: 'Mindset', href: '/mindset/' }]),
            {
              label: OFFICIAL_BOOK_TITLE,
              href: currentBook.path || '/ebook-en-24-horas/',
            },
          ]}
        />

        {/* ============================================================ */}
        {/* BLOQUE 1 — ZONA SUPERIOR COMERCIAL (HERO PORTADA + COMPRA)   */}
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
        {/* Encabezado editorial y primer apartado introductorio */}
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-10 pb-8 border-b border-[#dae7df]/60">
            <div className="mb-4">
              <Link
                href={parentCategory?.path || '/mindset/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Mindset'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Ebook en 24 horas
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-5 font-serif italic leading-relaxed max-w-3xl">
              Cómo escribir un ebook de no ficción y publicarlo en tiempo récord (menos de 24 horas) ¿Te atreves?
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>.
            </p>
          </header>

          {/* Primer apartado introductorio (antes del índice) */}
          <section
            aria-label="Introducción editorial"
            className="mb-12 pb-10 border-b border-[#dae7df]/60"
          >
            <p className="font-serif text-[22px] md:text-[25px] font-bold text-[#174532] leading-snug mb-5 max-w-3xl text-balance">
              Convertir una idea en una publicación: el desafío de terminar lo que empezamos
            </p>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                Escribir un libro no siempre comienza con una página en blanco. A menudo, comienza mucho antes, cuando acumulamos experiencias, conocimientos, observaciones o ideas que podrían tener utilidad para otras personas. Sin embargo, entre tener algo que contar y convertirlo en una publicación existe una distancia que puede resultar mucho mayor de lo que imaginamos.
              </p>
              <p>
                En el entorno digital, el conocimiento adquiere nuevas posibilidades de distribución. Una persona puede desarrollar una obra, ponerla a disposición de lectores de diferentes lugares y construir una presencia propia sin depender necesariamente de una editorial tradicional. Esta transformación ha abierto las puertas a profesionales, emprendedores, creadores y personas que desean compartir lo que saben mediante formatos accesibles.
              </p>
              <p>
                El ebook representa una de esas posibilidades. No necesita partir de una trayectoria literaria, sino de una idea con sentido, una temática bien definida y la intención de convertirla en algo que otras personas puedan consultar, comprender y utilizar.
              </p>
              <p>
                El verdadero desafío, por tanto, no siempre consiste en saber escribir. También consiste en organizar nuestras ideas, tomar decisiones, gestionar el tiempo y evitar que un proyecto permanezca indefinidamente en la fase de planificación. En ese contexto, <em>Ebook en 24 horas</em> plantea una perspectiva centrada en la acción, la creación y la posibilidad de llevar una obra desde su concepción hasta su publicación.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (SOLO LAS SECCIONES REALES DE LA PÁGINA) */}
        {/* ============================================================ */}
        <CategoryIndex
          items={EBOOK_EN_24_HORAS_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO EDITORIAL COMPLETO + CIERRE EDITORIAL (7 H2)      */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="conocimiento-activo-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El conocimiento también puede convertirse en un activo digital
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Vivimos en una época en la que buena parte del valor profesional está relacionado con lo que sabemos, lo que hemos aprendido y nuestra capacidad para comunicarlo. Experiencias adquiridas a lo largo de los años, conocimientos especializados o incluso la comprensión de problemas cotidianos pueden convertirse en material útil para otras personas.
                </p>
                <p>
                  Un libro digital permite organizar ese conocimiento en un formato que no depende de nuestra presencia permanente. A diferencia de una conversación, una publicación puede ser consultada repetidamente, distribuida a una audiencia más amplia y mantenerse disponible para lectores que descubran su existencia mucho tiempo después de haber sido creada.
                </p>
                <p>
                  Esta característica introduce una perspectiva interesante para quienes desarrollan proyectos en Internet: no todo el trabajo tiene que producir resultados únicamente mientras estamos ejecutándolo. También podemos crear recursos que mantengan su utilidad después de terminar el proceso de elaboración.
                </p>
                <p>
                  Los ebooks forman parte de ese ecosistema de activos digitales. Pueden servir para desarrollar una identidad profesional, profundizar en una especialidad, compartir experiencias o establecer una relación con personas interesadas en un determinado ámbito de conocimiento.
                </p>
                <p>
                  Sin embargo, tener conocimientos no garantiza automáticamente que podamos convertirlos en una publicación interesante. La diferencia está en cómo los organizamos, qué perspectiva adoptamos y hasta qué punto somos capaces de transformar información dispersa en una obra que tenga coherencia para quien la lee.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="dificultad-escribir-palabras"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La dificultad de escribir no siempre está en las palabras
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando pensamos en escribir un libro, solemos imaginar una tarea prolongada que requiere inspiración, muchas horas de trabajo y una capacidad especial para redactar. Esa percepción puede convertirse en una barrera antes de haber comenzado.
                </p>
                <p>
                  El problema, en ocasiones, no es la falta de conocimientos, sino la acumulación de decisiones pendientes. Elegir un tema, definir qué queremos comunicar, establecer límites, ordenar nuestras ideas y determinar cuándo consideramos terminado el trabajo son cuestiones que pueden consumir una cantidad considerable de energía.
                </p>
                <p>
                  También existe una tendencia a confundir preparación con progreso. Investigar herramientas, comparar opciones, revisar posibles títulos o modificar continuamente el planteamiento puede dar la sensación de estar avanzando, aunque todavía no exista un proyecto tangible.
                </p>
                <p>
                  La creación de una obra exige pasar de un estado de posibilidades a otro de decisiones concretas. Esto implica aceptar que no todas las ideas formarán parte del resultado final, que algunas secciones necesitarán más atención que otras y que un proyecto terminado tiene un valor diferente de una idea que seguimos perfeccionando mentalmente.
                </p>
                <p>
                  Entender esta diferencia permite abordar la escritura desde una perspectiva menos intimidante. El objetivo deja de ser producir una obra perfecta desde el primer momento y pasa a ser desarrollar un proyecto con dirección, coherencia y un punto de finalización definido.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="tiempo-recurso-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El tiempo como recurso editorial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El tiempo es una de las variables que más condicionan cualquier proyecto creativo. Cuando no establecemos límites, una tarea puede extenderse mucho más de lo previsto, especialmente si tenemos la posibilidad de seguir revisando, investigando o modificando decisiones.
                </p>
                <p>
                  Trabajar con una limitación temporal puede cambiar nuestra relación con el proceso. Nos obliga a distinguir entre lo imprescindible y lo accesorio, a establecer prioridades y a reconocer qué decisiones tienen un impacto real en el resultado.
                </p>
                <p>
                  Esta perspectiva no significa que debamos sacrificar la calidad ni que todos los libros puedan desarrollarse con las mismas exigencias. Una obra especializada, un ensayo complejo o un libro que requiere investigación original puede necesitar un proceso considerablemente más largo. El tiempo de producción depende del tema, del conocimiento previo, del alcance del proyecto y del nivel de profundidad que pretendamos alcanzar.
                </p>
                <p>
                  La cuestión interesante es aprender a evitar que el tiempo disponible se convierta en una excusa permanente para no comenzar.
                </p>
                <p>
                  Una fecha de finalización, un objetivo concreto y una expectativa realista pueden ayudarnos a cambiar nuestra manera de trabajar. En lugar de esperar a que aparezca el momento ideal, empezamos a considerar la escritura como un proyecto que merece espacio dentro de nuestras prioridades.
                </p>
                <p>
                  Esta mentalidad es especialmente relevante para quienes desarrollan actividades digitales en paralelo con otras responsabilidades. No siempre disponemos de jornadas completas para escribir, pero sí podemos aprender a gestionar mejor el esfuerzo, la atención y las decisiones necesarias para avanzar.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="inteligencia-artificial-crear"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La inteligencia artificial y una nueva forma de crear
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La aparición de herramientas de inteligencia artificial ha modificado las posibilidades de trabajar con texto, información e ideas. Hoy podemos utilizar sistemas capaces de ayudarnos a explorar perspectivas, organizar conceptos, revisar planteamientos y facilitar determinadas tareas relacionadas con la producción escrita.
                </p>
                <p>
                  Esto no significa que la creación de un libro deba delegarse por completo en una herramienta. La tecnología puede producir texto, pero la responsabilidad de definir el propósito de una obra, seleccionar lo que merece ser incluido y determinar si el resultado representa adecuadamente nuestras ideas sigue siendo una cuestión de criterio humano.
                </p>
                <p>
                  La diferencia entre utilizar la inteligencia artificial de manera superficial y aprovecharla como apoyo está en la dirección que le damos. Una petición poco definida puede producir contenido genérico, repetitivo o carente de personalidad. En cambio, cuando existe una intención clara, conocimientos de partida y capacidad para evaluar lo que recibimos, estas herramientas pueden ampliar nuestras posibilidades de trabajo.
                </p>
                <p>
                  Para un autor, la tecnología también plantea una nueva responsabilidad: aprender a distinguir entre velocidad y calidad. Obtener una gran cantidad de texto en pocos minutos no significa que hayamos creado una obra valiosa. La utilidad depende de la selección, la revisión, la coherencia, la precisión y la capacidad de aportar una perspectiva que merezca la atención del lector.
                </p>
                <p>
                  El cambio más significativo no consiste simplemente en escribir más rápido, sino en reconsiderar cómo podemos desarrollar proyectos intelectuales con los recursos que tenemos disponibles.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="publicar-construir-presencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Publicar un libro es también construir una presencia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una publicación puede tener un significado que vaya más allá de las ventas inmediatas. Para determinados profesionales, emprendedores y creadores, escribir un libro representa una forma de expresar conocimientos, consolidar una identidad y ampliar las posibilidades de su actividad.
                </p>
                <p>
                  Un ebook puede funcionar como una presentación de nuestra perspectiva sobre un sector, una manera de demostrar experiencia o una pieza que conecta con otros proyectos digitales. Su valor dependerá de la temática, la calidad de la obra, su utilidad y la manera en que se integre en nuestra actividad.
                </p>
                <p>
                  Esta visión permite entender por qué la publicación digital resulta atractiva para personas que no necesariamente aspiran a convertirse en escritores a tiempo completo. El libro puede formar parte de una estrategia más amplia, relacionada con la educación, la divulgación, la marca personal, el emprendimiento o la creación de productos digitales.
                </p>
                <p>
                  También nos invita a pensar en la relación entre contenido y distribución. Crear una obra es una parte del proceso; conseguir que llegue a quienes podrían encontrarla interesante es otra cuestión. La existencia de plataformas de publicación ha reducido algunas barreras de entrada, pero la visibilidad continúa dependiendo de numerosos factores y no puede darse por garantizada.
                </p>
                <p>
                  Por eso, publicar no debería entenderse exclusivamente como subir un archivo a una plataforma. Es poner una obra en circulación, darle una identidad y permitir que encuentre su lugar dentro de un entorno en el que conviven miles de propuestas.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="valor-terminar-proyecto"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de terminar un proyecto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los proyectos que nunca terminamos ocupan espacio en nuestra atención. Podemos regresar a ellos durante meses, imaginar diferentes posibilidades y mantener la sensación de que algún día los desarrollaremos. Sin embargo, mientras permanecen pendientes, no podemos evaluar realmente su potencial ni descubrir cómo responden otras personas a lo que hemos creado.
                </p>
                <p>
                  Terminar un libro representa un cambio importante: dejamos de trabajar exclusivamente con una idea y pasamos a disponer de una obra concreta.
                </p>
                <p>
                  Ese resultado no tiene por qué ser perfecto para convertirse en una experiencia valiosa. La publicación también nos permite aprender sobre nuestras capacidades, identificar aspectos que podemos mejorar y comprender mejor las exigencias de un proyecto editorial.
                </p>
                <p>
                  Cada obra terminada puede convertirse en un punto de partida para la siguiente. Con el tiempo, el proceso de crear, revisar y publicar puede ayudarnos a desarrollar una mayor claridad sobre nuestros temas, nuestra manera de comunicar y el tipo de contenido que queremos producir.
                </p>
                <p>
                  Esta perspectiva es especialmente importante para quienes llevan tiempo considerando la posibilidad de escribir, pero todavía no han dado el paso. A veces, el principal obstáculo no es la ausencia de talento ni de conocimientos, sino la dificultad de establecer un marco que nos permita avanzar sin quedar atrapados en la indecisión.
                </p>
              </div>
            </section>

            {/* Apartado 7 — Cierre editorial */}
            <section
              id="oportunidad-comenzar-escribir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una oportunidad para comenzar a escribir sin esperar el momento perfecto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La publicación digital ha acercado el mundo editorial a personas que, hace años, quizá habrían considerado demasiado complicado desarrollar y distribuir una obra propia. Las herramientas actuales permiten explorar posibilidades que antes requerían más recursos, conocimientos técnicos o intermediarios.
                </p>
                <p>
                  Aun así, la accesibilidad no elimina la necesidad de pensar, organizar y trabajar. La tecnología facilita determinadas tareas, pero el contenido sigue necesitando una intención, una perspectiva y una razón para existir. El resultado dependerá de lo que queramos comunicar y de la atención que dediquemos a desarrollar una obra que tenga sentido para sus lectores.
                </p>
                <p>
                  <em>Ebook en 24 horas</em> se sitúa dentro de esa posibilidad de pasar de la intención a la publicación, poniendo el foco en la creación de un libro digital como proyecto que podemos abordar con una mentalidad más práctica y orientada a terminar.
                </p>
                <p>
                  No hace falta esperar a tener todas las circunstancias a nuestro favor para comenzar a desarrollar una idea. Podemos partir de lo que sabemos, reconocer lo que necesitamos aprender y dar forma a un proyecto que hasta ahora solamente existía en nuestra imaginación.
                </p>
                <p>
                  Porque entre pensar que algún día escribiremos un libro y disponer de una publicación terminada existe una diferencia fundamental: haber decidido que nuestras ideas merecen convertirse en algo tangible.
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

      {/* Sibling Books in the same category (conservado de BookDetailView) */}
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

export default EbookEn24HorasView;
