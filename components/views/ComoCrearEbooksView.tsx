import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface ComoCrearEbooksViewProps {
  book?: BookItem;
}

export const COMO_CREAR_EBOOKS_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'diferencia-saber-comunicarlo',
    label: 'La diferencia entre saber algo y saber comunicarlo',
  },
  {
    id: 'valor-ideas-mercado-informacion',
    label: 'El valor de las ideas en un mercado que no necesita más información indiscriminadamente',
  },
  {
    id: 'autonomia-creacion-digital',
    label: 'La autonomía que ofrece la creación digital',
  },
  {
    id: 'ebook-ecosistema-proyectos-digitales',
    label: 'El ebook dentro de un ecosistema de proyectos digitales',
  },
  {
    id: 'creatividad-necesita-direccion',
    label: 'La creatividad necesita dirección, no solamente inspiración',
  },
  {
    id: 'relacion-calidad-percepcion-confianza',
    label: 'La relación entre calidad, percepción y confianza',
  },
  {
    id: 'monetizacion-conocimiento-vision-realista',
    label: 'La monetización del conocimiento exige una visión realista',
  },
  {
    id: 'crear-publicar-evolucionar',
    label: 'Crear, publicar y evolucionar',
  },
  {
    id: 'convertir-conocimiento-obra-propia',
    label: 'Convertir el conocimiento en una obra propia',
  },
];

const OFFICIAL_BOOK_TITLE = 'Cómo Crear Ebooks';

const ComoCrearEbooksView: React.FC<ComoCrearEbooksViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'como-crear-ebooks-de-no-ficcion') ||
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
              href: currentBook.path || '/como-crear-ebooks-de-no-ficcion/',
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
              Cómo Crear Ebooks
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-5 font-serif italic leading-relaxed max-w-3xl">
              …de no ficción, en menos tiempo del que imaginas y cobrar por tus conocimientos
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>.
            </p>
          </header>

          {/* Primer apartado introductorio (antes del índice) */}
          <section
            aria-label="Presentación editorial"
            className="mb-12 pb-10 border-b border-[#dae7df]/60"
          >
            <p className="font-serif text-[22px] md:text-[25px] font-bold text-[#174532] leading-snug mb-5 max-w-3xl text-balance">
              Del conocimiento personal a la creación de un producto digital con valor propio
            </p>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                Poseer conocimientos sobre un determinado tema puede abrirnos numerosas posibilidades, pero saber algo y convertirlo en una propuesta capaz de llegar a otras personas son dos cuestiones diferentes. Entre la experiencia que adquirimos, las ideas que desarrollamos y la posibilidad de construir algo a partir de ellas existe un espacio en el que intervienen decisiones, visión, capacidad de comunicación y comprensión de nuestro entorno.
              </p>
              <p>
                Internet ha transformado la manera en que podemos compartir aquello que sabemos. Ya no es necesario desarrollar una actividad vinculada exclusivamente a la enseñanza presencial, depender de una estructura editorial tradicional o disponer de grandes recursos para crear una obra destinada a lectores interesados en una temática concreta. El entorno digital ha ampliado las alternativas para quienes desean desarrollar proyectos propios a partir de su experiencia, sus intereses o su conocimiento especializado.
              </p>
              <p>
                En este contexto, el ebook representa mucho más que un formato de lectura. Puede ser una expresión de nuestra identidad profesional, una forma de organizar ideas, una vía para comunicar una perspectiva y una pieza que forme parte de un proyecto digital más amplio. Su valor no reside únicamente en el contenido que contiene, sino también en la capacidad de responder a una necesidad, encontrar su público y permanecer disponible dentro de un entorno de distribución que no está limitado a un espacio físico.
              </p>
              <p>
                <em>Cómo Crear Ebooks</em> aborda un terreno especialmente interesante para quienes desean explorar las posibilidades de transformar el conocimiento en una obra digital. La creación editorial puede convertirse en una actividad que conecte experiencia, comunicación y desarrollo de proyectos, permitiéndonos contemplar nuestras ideas desde una perspectiva diferente: no solamente como algo que sabemos, sino como algo que podemos construir.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (SOLO LOS ENCABEZADOS DE ESTA FICHA)    */}
        {/* ============================================================ */}
        <CategoryIndex
          items={COMO_CREAR_EBOOKS_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO EDITORIAL COMPLETO + CIERRE (9 APARTADOS H2)      */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="diferencia-saber-comunicarlo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La diferencia entre saber algo y saber comunicarlo
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las dificultades más habituales cuando intentamos compartir nuestros conocimientos es asumir que aquello que nos resulta evidente también lo será para los demás. La experiencia personal suele proporcionarnos una comprensión que hemos adquirido progresivamente, pero alguien que se aproxima por primera vez a ese tema puede carecer de las referencias necesarias para entenderlo.
                </p>
                <p>
                  Esta diferencia afecta profundamente a la manera en que transmitimos información. Un profesional puede dominar una actividad, conocer sus particularidades y desenvolverse con soltura, pero necesitar un esfuerzo adicional para explicar sus fundamentos de forma comprensible. Lo que para nosotros constituye una secuencia natural de decisiones, para otra persona puede representar un conjunto de conceptos desconectados.
                </p>
                <p>
                  Comunicar conocimiento implica cambiar nuestra perspectiva. Dejamos de pensar exclusivamente desde el lugar de quien sabe y comenzamos a considerar la experiencia de quien necesita comprender. Esto exige claridad, capacidad para reconocer dificultades y una cierta distancia respecto a nuestras propias ideas.
                </p>
                <p>
                  También nos obliga a distinguir entre acumular información y aportar comprensión. Un contenido puede reunir numerosos datos, referencias o explicaciones sin que necesariamente ayude al lector a interpretar un problema. Por el contrario, una exposición bien planteada puede permitir que una persona comprenda una cuestión compleja sin sentirse perdida entre conceptos innecesarios.
                </p>
                <p>
                  Esta capacidad de transformar conocimientos en comunicación comprensible tiene valor en numerosos ámbitos. No se limita a la escritura de libros: aparece en la formación, la divulgación, los negocios, la creación de contenidos, la consultoría y prácticamente cualquier actividad en la que necesitemos explicar algo a otra persona.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="valor-ideas-mercado-informacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de las ideas en un mercado que no necesita más información indiscriminadamente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Vivimos rodeados de información. Cada día aparecen artículos, vídeos, publicaciones, cursos, herramientas y opiniones sobre prácticamente cualquier tema imaginable. La abundancia ha cambiado nuestra relación con el conocimiento y también ha modificado las expectativas de quienes buscan aprender.
                </p>
                <p>
                  En este escenario, crear contenido no consiste simplemente en añadir más información a la existente. La verdadera oportunidad está en ofrecer una perspectiva que permita comprender mejor una cuestión, encontrar sentido entre diferentes conceptos o aproximarse a un problema desde un punto de vista que resulte útil.
                </p>
                <p>
                  Esta realidad tiene implicaciones para quienes desean desarrollar ebooks. Un tema puede despertar interés, pero eso no significa que cualquier publicación relacionada con él vaya a resultar relevante. El lector necesita encontrar una razón para dedicar su tiempo a una obra cuando existen tantas alternativas disponibles.
                </p>
                <p>
                  La diferenciación puede surgir de múltiples factores: la experiencia del autor, su manera de interpretar una situación, la claridad con la que presenta sus ideas, la profundidad con la que aborda determinadas cuestiones o la capacidad de conectar conceptos que habitualmente se encuentran dispersos.
                </p>
                <p>
                  No siempre necesitamos descubrir algo completamente nuevo para desarrollar una publicación interesante. En ocasiones, el valor reside en explicar de otra manera algo que ya existe, aportar una perspectiva más accesible o establecer relaciones que ayuden al lector a comprender mejor una temática.
                </p>
                <p>
                  La creación editorial, por tanto, también implica interpretar. No se trata únicamente de reunir conocimientos, sino de decidir qué merece ser comunicado, desde qué perspectiva y con qué propósito.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="autonomia-creacion-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La autonomía que ofrece la creación digital
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Desarrollar proyectos digitales propios introduce una forma diferente de entender nuestra actividad profesional. En lugar de depender exclusivamente de tareas que realizamos para terceros, podemos comenzar a crear recursos, contenidos y productos que estén vinculados a nuestra propia iniciativa.
                </p>
                <p>
                  Esta autonomía no significa que desaparezcan las dificultades, las obligaciones o la necesidad de trabajar. Significa que podemos explorar otras formas de organizar nuestra experiencia y construir propuestas que respondan a objetivos propios.
                </p>
                <p>
                  La creación de ebooks encaja dentro de esta perspectiva porque permite desarrollar una obra sin necesidad de disponer de una infraestructura editorial compleja. Las plataformas digitales facilitan determinadas fases de distribución, mientras que los recursos tecnológicos actuales ofrecen posibilidades que hace años resultaban menos accesibles para un autor independiente.
                </p>
                <p>
                  Sin embargo, la autonomía también implica responsabilidad. Cuando decidimos desarrollar un producto propio, somos nosotros quienes debemos evaluar su propósito, su calidad, la manera de presentarlo y las expectativas que queremos generar. No existe una estructura externa que garantice que nuestras decisiones sean acertadas.
                </p>
                <p>
                  Este aspecto resulta especialmente importante cuando contemplamos los productos digitales como parte de una actividad económica. La libertad para crear no debe confundirse con la certeza de obtener ingresos. Un proyecto puede estar bien desarrollado y, aun así, necesitar ajustes, una mejor comunicación o una comprensión más profunda de su público.
                </p>
                <p>
                  La creación digital ofrece posibilidades, pero el valor de esas posibilidades depende de cómo las abordamos.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="ebook-ecosistema-proyectos-digitales"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El ebook dentro de un ecosistema de proyectos digitales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un libro digital puede existir de forma independiente, pero también puede relacionarse con otras actividades que desarrollamos en Internet. Esta conexión permite contemplar la publicación desde una perspectiva más amplia, especialmente cuando nuestra intención es construir una presencia que no dependa de un único producto o canal.
                </p>
                <p>
                  Por ejemplo, el conocimiento que desarrollamos alrededor de una temática puede servir como punto de partida para diferentes formas de comunicación. Una publicación puede coexistir con un blog, una página editorial, una newsletter, una actividad profesional o una colección de recursos digitales. Cada uno de estos elementos puede desempeñar una función diferente, aunque todos compartan una misma base de conocimiento.
                </p>
                <p>
                  Esta relación no significa que debamos convertir cada libro en una pieza de una estrategia comercial compleja. Lo interesante es comprender que nuestras ideas pueden tener diferentes formas de expresión y que una publicación puede contribuir a dar coherencia a un conjunto de proyectos.
                </p>
                <p>
                  Un ebook también puede ayudarnos a definir mejor aquello que queremos representar. Cuando desarrollamos una obra, nos enfrentamos a la necesidad de seleccionar temas, establecer una perspectiva y decidir qué ideas forman parte de nuestra visión. Este proceso puede influir en otros contenidos que creemos posteriormente, haciendo que nuestra comunicación tenga una identidad más reconocible.
                </p>
                <p>
                  Desde esta perspectiva, el libro digital deja de ser únicamente un producto aislado y pasa a formar parte de una construcción intelectual y profesional que puede evolucionar con el tiempo.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="creatividad-necesita-direccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La creatividad necesita dirección, no solamente inspiración
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La creatividad suele asociarse con momentos espontáneos, ideas inesperadas o una capacidad especial para encontrar soluciones. Aunque esos elementos pueden desempeñar un papel importante, los proyectos que necesitan llegar a un resultado concreto requieren algo más que inspiración.
                </p>
                <p>
                  Cuando trabajamos sin una dirección definida, podemos acumular posibilidades, cambiar continuamente de planteamiento y perder de vista aquello que inicialmente queríamos conseguir. La libertad creativa, si no está acompañada de cierto criterio, puede dificultar la toma de decisiones.
                </p>
                <p>
                  Establecer un propósito no significa limitar las ideas. Significa proporcionarles un marco dentro del cual puedan desarrollarse. Tener claro qué queremos comunicar, a quién nos dirigimos y qué sentido tiene nuestra obra nos permite evaluar mejor las decisiones que tomamos durante el proceso.
                </p>
                <p>
                  También resulta importante aceptar que la creatividad no siempre avanza de manera uniforme. Hay momentos en los que las ideas fluyen y otros en los que necesitamos revisar lo que hemos desarrollado, reconsiderar una perspectiva o reconocer que una determinada dirección no funciona.
                </p>
                <p>
                  La capacidad de continuar a pesar de esas variaciones puede resultar más determinante que esperar constantemente a sentirnos preparados. En los proyectos editoriales, la disciplina, la claridad de propósito y la disposición a tomar decisiones contribuyen a que nuestras ideas se conviertan en algo concreto.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="relacion-calidad-percepcion-confianza"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación entre calidad, percepción y confianza
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando alguien encuentra una publicación digital, no evalúa únicamente su contenido. También interpreta la manera en que se presenta, la claridad de su propuesta, la coherencia de su identidad y las señales que le permiten decidir si merece su atención.
                </p>
                <p>
                  La percepción de calidad se construye a partir de diferentes elementos. Un título debe comunicar con claridad el propósito de una obra, la presentación debe facilitar su comprensión y el contenido necesita responder a las expectativas que genera. Cuando estos elementos están desconectados, puede resultar difícil transmitir confianza.
                </p>
                <p>
                  Esta relación es importante porque los productos digitales no siempre permiten al comprador experimentar previamente todo aquello que está adquiriendo. En muchos casos, la decisión se toma a partir de la información disponible, la presentación del producto y la confianza que transmite el autor o la publicación.
                </p>
                <p>
                  La claridad no consiste en exagerar los beneficios ni en utilizar expresiones grandilocuentes. Consiste en comunicar de forma honesta lo que representa una obra, evitar promesas que no podemos respaldar y proporcionar una presentación que permita al lector comprender qué está considerando adquirir.
                </p>
                <p>
                  En un mercado con numerosas propuestas, la confianza puede convertirse en un elemento diferenciador. No necesariamente porque garantice una venta, sino porque ayuda a construir una relación más coherente entre el contenido, su presentación y las expectativas del público.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="monetizacion-conocimiento-vision-realista"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La monetización del conocimiento exige una visión realista
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La posibilidad de generar ingresos a partir de nuestros conocimientos resulta atractiva, especialmente cuando buscamos desarrollar una actividad que no dependa exclusivamente de intercambiar horas por dinero. Sin embargo, convertir una publicación en una fuente de ingresos implica comprender que la creación del producto es solamente una parte de un proceso más amplio.
                </p>
                <p>
                  Un ebook necesita encontrar lectores interesados, competir por su atención y comunicar de forma convincente por qué puede resultar relevante. La publicación digital facilita la distribución, pero no garantiza visibilidad, demanda ni ventas. Entre la disponibilidad de un producto y su comercialización efectiva existe una serie de factores que influyen en los resultados.
                </p>
                <p>
                  La temática, la percepción de valor, el público al que nos dirigimos, la competencia, la presentación y la capacidad de llegar a lectores potenciales son elementos que pueden condicionar el desempeño de una obra. Por eso, resulta importante evitar la idea de que publicar un libro constituye, por sí solo, una fórmula automática para generar ingresos.
                </p>
                <p>
                  Una perspectiva más sólida consiste en entender la publicación como una iniciativa que podemos desarrollar, evaluar y mejorar. El conocimiento puede convertirse en un producto, pero ese producto necesita una propuesta que tenga sentido dentro del mercado y una forma de llegar a las personas que podrían estar interesadas.
                </p>
                <p>
                  Esta visión permite abordar la creación de ebooks con expectativas más equilibradas. No se trata de descartar las posibilidades de monetización, sino de comprender que los resultados dependen de un conjunto de decisiones y circunstancias, y que la construcción de una actividad digital requiere tiempo, aprendizaje y capacidad de adaptación.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="crear-publicar-evolucionar"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Crear, publicar y evolucionar
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las ventajas de desarrollar proyectos digitales es que no necesariamente tienen que permanecer estáticos después de su publicación. Podemos revisar nuestra perspectiva, actualizar información, incorporar nuevos conocimientos y reconsiderar la manera en que presentamos una obra cuando las circunstancias cambian.
                </p>
                <p>
                  Esta posibilidad introduce una relación diferente con el trabajo editorial. En lugar de considerar cada publicación como un resultado definitivo que nunca volveremos a revisar, podemos entenderla como un recurso que forma parte de nuestra evolución profesional.
                </p>
                <p>
                  La experiencia adquirida durante la creación de un libro puede influir en futuras publicaciones, ayudarnos a identificar temáticas que merecen mayor atención o permitirnos comprender mejor los intereses de quienes se acercan a nuestro trabajo. Con el tiempo, esa experiencia puede contribuir a desarrollar una colección más coherente y una identidad editorial reconocible.
                </p>
                <p>
                  También nos permite reconocer que el valor de una publicación no siempre se mide exclusivamente por su rendimiento inmediato. Una obra puede contribuir a nuestra visibilidad, ampliar nuestra experiencia, abrir nuevas posibilidades de comunicación o servir como punto de partida para otros proyectos.
                </p>
                <p>
                  Crear un ebook puede ser, por tanto, una decisión que trascienda el propio libro. Representa la posibilidad de transformar conocimientos en una obra concreta, asumir la responsabilidad de compartirlos y comenzar a construir algo que tenga continuidad más allá del momento en que lo escribimos.
                </p>
              </div>
            </section>

            {/* Apartado 9 — Cierre editorial */}
            <section
              id="convertir-conocimiento-obra-propia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Convertir el conocimiento en una obra propia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El conocimiento que acumulamos a lo largo de nuestra vida no tiene por qué permanecer disperso entre experiencias, notas, ideas y aprendizajes. Podemos encontrar formas de organizarlo, comunicarlo y transformarlo en recursos que otras personas tengan la oportunidad de descubrir.
                </p>
                <p>
                  La creación de un ebook representa una de esas posibilidades. No exige que esperemos a tener una trayectoria perfecta, pero sí nos invita a pensar con claridad qué queremos aportar, cómo podemos hacerlo y qué sentido tiene nuestra propuesta dentro de un entorno en el que los lectores disponen de numerosas alternativas.
                </p>
                <p>
                  <em>Cómo Crear Ebooks</em> se relaciona con esa posibilidad de desarrollar una obra propia y contemplar el conocimiento desde una perspectiva diferente: como algo que podemos estructurar, compartir y convertir en parte de nuestros proyectos digitales.
                </p>
                <p>
                  Cuando comenzamos a considerar nuestras ideas como material susceptible de convertirse en una publicación, cambia también nuestra manera de observar lo que sabemos. Dejamos de pensar únicamente en lo que hemos aprendido y empezamos a reconocer aquello que podemos construir a partir de ese conocimiento.
                </p>
                <p>
                  El primer paso no consiste necesariamente en tener todas las respuestas, sino en reconocer que existe algo que merece ser desarrollado. A partir de ahí, podemos comenzar a darle forma a una obra, descubrir nuevas posibilidades y convertir una idea en un proyecto que finalmente tenga su propia identidad.
                </p>
                <p>
                  Porque nuestros conocimientos pueden tener un valor que todavía no hemos explorado. Y darles forma es una manera de comenzar a descubrirlo.
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

export default ComoCrearEbooksView;
