import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface IdeasMaestrasTraficoWebViewProps {
  book?: BookItem;
}

export const IDEAS_MAESTRAS_TRAFICO_WEB_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'trafico-no-es-objetivo-aislado',
    label: 'El tráfico no es un objetivo aislado',
  },
  {
    id: 'visibilidad-antes-publicacion',
    label: 'La visibilidad comienza antes de la publicación',
  },
  {
    id: 'propuesta-merece-atencion',
    label: 'Construir una propuesta que merezca atención',
  },
  {
    id: 'sistema-adquisicion',
    label: 'Diseñar un sistema de adquisición, no una colección de acciones',
  },
  {
    id: 'elegir-donde-competir',
    label: 'La importancia de elegir dónde competir',
  },
  {
    id: 'audiencias-acumuladas',
    label: 'El valor estratégico de las audiencias acumuladas',
  },
  {
    id: 'coordinar-canales',
    label: 'Coordinar los canales para multiplicar oportunidades',
  },
  {
    id: 'medir-movimiento',
    label: 'Medir el movimiento, no solamente las cifras',
  },
  {
    id: 'visitas-sin-resultados',
    label: 'Cuando las visitas no producen resultados',
  },
  {
    id: 'experimentacion-crecimiento',
    label: 'La experimentación como herramienta de crecimiento',
  },
  {
    id: 'estructura-independiente',
    label: 'Crear una estructura que no dependa de una sola fuente',
  },
  {
    id: 'crecimiento-proceso-aprendizaje',
    label: 'El crecimiento digital como proceso de aprendizaje',
  },
];

const OFFICIAL_BOOK_TITLE = 'Ideas Maestras de Tráfico Web';

const IdeasMaestrasTraficoWebView: React.FC<IdeasMaestrasTraficoWebViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'ideas-maestras-de-trafico-web') ||
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
              : [{ label: 'Crecimiento', href: '/crecimiento/' }]),
            {
              label: OFFICIAL_BOOK_TITLE,
              href: currentBook.path || '/ideas-maestras-de-trafico-web/',
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
        {/* Encabezado editorial y sección introductoria */}
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-10 pb-8 border-b border-[#dae7df]/60">
            <div className="mb-4">
              <Link
                href={parentCategory?.path || '/crecimiento/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Crecimiento'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              {OFFICIAL_BOOK_TITLE}
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-5 font-serif italic leading-relaxed max-w-3xl">
              Acelera tu presencia en línea con estrategias revolucionarias que van más allá de las Visitas
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
                Conseguir que un proyecto digital llegue a las personas adecuadas es uno de los desafíos más importantes que podemos afrontar cuando trabajamos en Internet. Podemos disponer de una página bien diseñada, productos interesantes, información valiosa o una propuesta comercial perfectamente definida, pero nada de ello garantiza que exista un flujo de visitantes capaz de descubrir lo que ofrecemos.
              </p>
              <p>
                La presencia digital no se construye únicamente creando páginas y publicando información. También requiere comprender cómo se mueve la atención, qué motivos llevan a una persona a interesarse por una propuesta, dónde se producen los encuentros entre contenidos y audiencias y qué podemos hacer para que esos encuentros sucedan con mayor frecuencia.
              </p>
              <p>
                El tráfico web representa mucho más que un número registrado en una herramienta de estadísticas. Detrás de cada visita existe una decisión, una necesidad, una curiosidad o una circunstancia que ha llevado a alguien hasta nuestro espacio digital. Comprender esas motivaciones nos permite abandonar la búsqueda de cifras vacías y empezar a trabajar con una perspectiva más estratégica.
              </p>
              <p>
                A lo largo de estas páginas desarrollaremos una visión que nos ayudará a pensar el tráfico como parte de un sistema de crecimiento. No se trata de perseguir visitantes mediante acciones desconectadas, sino de aprender a relacionar nuestra propuesta, los canales disponibles, las expectativas de las personas y las oportunidades que podemos generar a partir de cada contacto.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={IDEAS_MAESTRAS_TRAFICO_WEB_INDEX_ITEMS}
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
              id="trafico-no-es-objetivo-aislado"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El tráfico no es un objetivo aislado
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando comenzamos un proyecto digital, es habitual que las visitas se conviertan en una de nuestras primeras preocupaciones. Observamos las estadísticas, comparamos períodos, buscamos aumentar las cifras y sentimos que cualquier incremento representa un avance. Sin embargo, esta perspectiva puede llevarnos a confundir actividad con progreso.
                </p>
                <p>
                  Una página puede recibir miles de visitas sin generar suscripciones, consultas, ventas ni una comunidad interesada. También puede suceder lo contrario: un sitio pequeño, con una audiencia limitada pero bien definida, puede conseguir resultados mucho más valiosos que otro con una cantidad considerable de visitantes.
                </p>
                <p>
                  Por eso, antes de establecer objetivos de adquisición, necesitamos comprender qué función cumplen las visitas dentro de nuestro proyecto. ¿Queremos dar a conocer una marca? ¿Presentar un producto? ¿Construir una audiencia? ¿Generar confianza? ¿Conseguir que las personas regresen? Cada respuesta implica una forma diferente de interpretar el tráfico y de decidir qué acciones merecen nuestra atención.
                </p>
                <p>
                  El crecimiento comienza cuando dejamos de considerar las visitas como un trofeo y las utilizamos como una señal que nos ayuda a evaluar si estamos conectando con las personas correctas. La cantidad importa, pero su significado depende del propósito que hayamos establecido.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="visibilidad-antes-publicacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La visibilidad comienza antes de la publicación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un error frecuente consiste en pensar que la difusión debe comenzar cuando el contenido, la página o el producto ya están terminados. En realidad, podemos preparar el terreno mucho antes de publicar.
                </p>
                <p>
                  Cuando desarrollamos una idea, también podemos identificar los espacios donde podría despertar interés, las conversaciones relacionadas con ella y las personas que probablemente encontrarían útil nuestra propuesta. Esta información permite orientar el trabajo desde el principio, en lugar de terminar una pieza de contenido y comenzar después a preguntarnos cómo conseguir que alguien la vea.
                </p>
                <p>
                  La preparación también nos ayuda a reconocer posibles obstáculos. Quizá estamos desarrollando algo para un público que utiliza otros formatos, frecuenta plataformas diferentes o necesita una explicación previa para comprender su utilidad. Detectar esas circunstancias anticipadamente puede cambiar tanto el planteamiento del proyecto como la manera de presentarlo.
                </p>
                <p>
                  La visibilidad no depende únicamente de que algo exista. También está relacionada con las condiciones que creamos para que pueda ser encontrado, reconocido y considerado relevante. Cuando incorporamos esta perspectiva desde la planificación, la difusión deja de ser una tarea improvisada y se convierte en una parte natural del desarrollo digital.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="propuesta-merece-atencion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir una propuesta que merezca atención
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Internet está lleno de información, ofertas, publicaciones y recursos que compiten por el tiempo de las personas. En este escenario, conseguir que alguien se detenga ante nuestra propuesta no depende solamente de aparecer en un lugar determinado. Necesitamos ofrecer una razón suficientemente clara para despertar su interés.
                </p>
                <p>
                  Esa razón puede estar relacionada con resolver una dificultad, facilitar una tarea, explicar algo complejo, ofrecer una perspectiva diferente o presentar una posibilidad que la persona todavía no había considerado. No siempre necesitamos inventar algo completamente nuevo. En ocasiones, el valor reside en organizar mejor una información existente, relacionarla con una necesidad concreta o presentarla de una forma más accesible.
                </p>
                <p>
                  También debemos aprender a comunicar la utilidad de lo que hacemos. Una página que obliga al visitante a interpretar por sí mismo qué encontrará puede perder oportunidades incluso cuando contiene información valiosa. La claridad acerca del propósito, el enfoque y la utilidad del recurso reduce esa incertidumbre.
                </p>
                <p>
                  Cuando nuestra propuesta tiene una identidad reconocible, resulta más sencillo que las personas recuerden lo que ofrecemos, lo compartan con otros o decidan regresar. La atención inicial puede ser breve, pero una propuesta bien definida aumenta las posibilidades de convertirla en un vínculo más duradero.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="sistema-adquisicion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Diseñar un sistema de adquisición, no una colección de acciones
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Realizar diferentes acciones promocionales no significa necesariamente que estemos desarrollando una estrategia. Podemos publicar en varias plataformas, enviar mensajes, participar en comunidades y crear materiales continuamente sin que exista una conexión entre esas actividades.
                </p>
                <p>
                  Un sistema de adquisición necesita una lógica. Cada acción debería cumplir una función dentro de un proceso más amplio y contribuir, de alguna manera, al resultado que perseguimos. Algunas actividades pueden ayudarnos a descubrir nuevas audiencias; otras, a despertar interés, profundizar una relación o facilitar una decisión.
                </p>
                <p>
                  Para organizar este proceso podemos comenzar identificando nuestro punto de partida, los recursos disponibles y las oportunidades que queremos aprovechar. A partir de ahí, seleccionamos las acciones que tienen sentido, establecemos prioridades y determinamos qué señales nos permitirán evaluar su utilidad.
                </p>
                <p>
                  La ventaja de trabajar con un sistema es que nos permite aprender de lo realizado. Si una actividad genera interés, podemos estudiar cómo mejorarla o ampliar su alcance. Si otra consume demasiado tiempo y produce escasos resultados, podemos reconsiderarla. No necesitamos mantener todas las acciones por costumbre ni añadir nuevas únicamente porque otras personas las recomienden.
                </p>
                <p>
                  Una estrategia bien organizada nos ayuda a utilizar mejor nuestros recursos y a evitar que el crecimiento dependa de una sucesión interminable de tareas improvisadas.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="elegir-donde-competir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La importancia de elegir dónde competir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  No todos los espacios digitales ofrecen las mismas oportunidades, ni todas las audiencias se comportan de igual manera. Un canal puede ser excelente para un proyecto y completamente inadecuado para otro. Por eso, la selección de nuestros espacios de actuación debería responder a criterios concretos, en lugar de basarse únicamente en su popularidad.
                </p>
                <p>
                  Podemos evaluar diferentes entornos considerando el perfil de sus usuarios, la relación que mantienen con los contenidos, el nivel de competencia, las posibilidades de participación y el esfuerzo que requiere mantener una presencia activa. También conviene analizar si podemos aportar algo significativo en ese espacio o si nuestra participación quedaría diluida entre numerosas propuestas similares.
                </p>
                <p>
                  Elegir dónde competir supone aceptar que no podemos estar en todas partes. Esta decisión no limita necesariamente nuestro crecimiento; puede permitirnos concentrar nuestra energía en lugares donde tenemos mayores posibilidades de establecer conexiones reales.
                </p>
                <p>
                  Una presencia bien desarrollada en determinados espacios puede resultar más efectiva que una actividad superficial en numerosas plataformas. La clave no es acumular canales, sino encontrar aquellos que favorezcan nuestra propuesta y nos permitan llegar a una audiencia con intereses compatibles.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="audiencias-acumuladas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor estratégico de las audiencias acumuladas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cada vez que conseguimos que una persona vuelva a nuestro sitio, reconozca nuestra marca o mantenga algún tipo de contacto con nosotros, estamos construyendo un activo que puede adquirir valor con el tiempo.
                </p>
                <p>
                  La primera visita no siempre coincide con el momento en que alguien necesita nuestra propuesta. Es posible que un visitante descubra un recurso, lo considere interesante y continúe con sus actividades sin realizar ninguna acción inmediata. Si no existe una manera de mantener el contacto o facilitar un nuevo descubrimiento, esa oportunidad puede desaparecer.
                </p>
                <p>
                  Por esta razón, resulta importante desarrollar mecanismos que permitan mantener una relación más allá de una visita ocasional. Una suscripción voluntaria, una comunidad, una biblioteca de recursos, una comunicación periódica o una experiencia que invite a regresar pueden contribuir a crear continuidad.
                </p>
                <p>
                  No debemos interpretar esta relación como una obligación de enviar mensajes constantemente. La frecuencia, el contenido y el propósito de cada contacto deben respetar el interés de la audiencia. Construir una comunidad implica aportar razones para permanecer, no simplemente acumular contactos.
                </p>
                <p>
                  Una audiencia que nos reconoce, comprende nuestra propuesta y decide seguir conectada puede convertirse en una fuente de oportunidades mucho más estable que la dependencia de encuentros aislados.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="coordinar-canales"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Coordinar los canales para multiplicar oportunidades
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cada canal digital posee características particulares. Algunos permiten explicar una idea con profundidad; otros facilitan conversaciones, descubrimientos rápidos, demostraciones o interacciones personales. Cuando comprendemos esas diferencias, podemos utilizarlos de forma complementaria.
                </p>
                <p>
                  No necesitamos publicar exactamente el mismo mensaje en todos los lugares. Una idea central puede adaptarse a diferentes formatos y situaciones, conservando su sentido, pero respetando la manera en que las personas utilizan cada plataforma.
                </p>
                <p>
                  Por ejemplo, una investigación desarrollada para nuestro sitio puede convertirse en una explicación breve, una reflexión, una presentación visual o una conversación alrededor de una pregunta específica. Cada formato puede acercar el tema a personas diferentes y, cuando existe una conexión natural, facilitar que algunas de ellas profundicen en el contenido original.
                </p>
                <p>
                  La coordinación también permite que los canales se apoyen mutuamente. Una persona puede conocernos a través de una publicación, encontrar posteriormente un recurso más completo y, finalmente, decidir mantener el contacto. No siempre podremos identificar cada recorrido, pero sí podemos diseñar experiencias que faciliten esa progresión.
                </p>
                <p>
                  El resultado no depende de estar presentes en todas las plataformas, sino de establecer relaciones coherentes entre los espacios que realmente utilizamos.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="medir-movimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Medir el movimiento, no solamente las cifras
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las estadísticas pueden ayudarnos a comprender lo que sucede, pero debemos evitar convertirlas en una colección de números sin contexto. Una métrica adquiere utilidad cuando nos permite interpretar un comportamiento, identificar un problema o tomar una decisión.
                </p>
                <p>
                  Además del volumen de visitantes, podemos observar cómo llegan, qué páginas consultan, cuánto interés muestran en determinados recursos, si regresan y qué acciones realizan durante su recorrido. Estas señales nos ayudan a distinguir entre una visita accidental y una oportunidad que merece mayor atención.
                </p>
                <p>
                  También es importante comparar resultados con objetivos realistas. Un canal que genera pocas visitas puede tener un valor considerable si esas personas muestran un interés elevado. Otro que produce grandes cantidades de tráfico puede no contribuir de manera significativa al propósito del proyecto.
                </p>
                <p>
                  No todas las decisiones necesitan una herramienta sofisticada. En ocasiones, revisar periódicamente un conjunto reducido de indicadores, registrar cambios y analizar tendencias puede proporcionarnos información suficiente para mejorar.
                </p>
                <p>
                  Medir no consiste en demostrar que estamos trabajando, sino en descubrir qué merece la pena seguir haciendo, qué necesitamos modificar y dónde podemos encontrar nuevas oportunidades.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="visitas-sin-resultados"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cuando las visitas no producen resultados
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Recibir visitantes y conseguir que realicen una acción son procesos relacionados, pero diferentes. Si una página atrae atención y no consigue avanzar hacia el resultado esperado, aumentar el tráfico puede no solucionar el problema.
                </p>
                <p>
                  En primer lugar, debemos comprobar si existe coherencia entre lo que prometemos antes de la visita y lo que encontramos cuando llegamos al sitio. Si la expectativa generada no coincide con el contenido, la experiencia puede producir decepción.
                </p>
                <p>
                  También debemos revisar la claridad de nuestra propuesta, la facilidad para navegar, la comprensión del mensaje y la presencia de obstáculos innecesarios. Una página confusa, una oferta difícil de interpretar o un proceso demasiado complicado pueden impedir que el interés se transforme en una acción.
                </p>
                <p>
                  Otro aspecto importante es la adecuación de la audiencia. Tal vez estamos atrayendo personas que encuentran nuestro contenido interesante, pero que no necesitan lo que ofrecemos. En ese caso, el problema no está necesariamente en la cantidad de visitantes, sino en la conexión entre nuestro proyecto y las expectativas de quienes llegan.
                </p>
                <p>
                  Antes de buscar más tráfico, conviene comprender qué ocurre con el que ya tenemos. Esa revisión puede revelar oportunidades de mejora que pasan desapercibidas cuando nos concentramos exclusivamente en conseguir nuevas visitas.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="experimentacion-crecimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La experimentación como herramienta de crecimiento
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En el entorno digital, muchas decisiones se toman inicialmente a partir de hipótesis. Podemos pensar que determinado enfoque despertará interés, que un formato será más efectivo o que una propuesta resultará especialmente atractiva para un público. Sin embargo, nuestras suposiciones no siempre coinciden con la realidad.
                </p>
                <p>
                  Experimentar nos permite convertir esas ideas en oportunidades de aprendizaje. En lugar de modificar numerosos elementos al mismo tiempo, podemos introducir cambios concretos, observar sus efectos y utilizar los resultados para orientar nuestras siguientes decisiones.
                </p>
                <p>
                  Esto no significa que todos los experimentos deban producir un éxito inmediato. Una acción que no consigue el resultado esperado también puede ayudarnos a comprender mejor a nuestra audiencia, identificar limitaciones o descartar una alternativa que parecía prometedora.
                </p>
                <p>
                  Para que la experimentación sea útil, necesitamos evitar cambios impulsivos. Debemos tener claro qué queremos comprobar, qué resultado sería significativo y qué circunstancias podrían influir en la interpretación. También conviene registrar las conclusiones para no repetir indefinidamente las mismas pruebas.
                </p>
                <p>
                  El crecimiento digital no siempre surge de encontrar una gran idea. En ocasiones, aparece después de una sucesión de pequeños ajustes que nos permiten comprender mejor cómo funciona nuestro proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="estructura-independiente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Crear una estructura que no dependa de una sola fuente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Depender excesivamente de un único canal puede convertirse en una vulnerabilidad. Los cambios en las condiciones de una plataforma, sus políticas, la competencia o el comportamiento de los usuarios pueden afectar nuestra capacidad para mantener la visibilidad.
                </p>
                <p>
                  Diversificar no significa utilizar indiscriminadamente todos los medios disponibles. Significa desarrollar una estructura en la que diferentes fuentes puedan aportar oportunidades, reduciendo la dependencia de una sola vía de adquisición.
                </p>
                <p>
                  Para conseguirlo, podemos combinar canales de descubrimiento con mecanismos que favorezcan la continuidad de las relaciones. De esta forma, una parte de nuestra audiencia puede llegar por una vía, mientras que otras personas descubren el proyecto en espacios diferentes.
                </p>
                <p>
                  También debemos prestar atención a los recursos que controlamos directamente. Nuestro sitio, los contenidos que desarrollamos, las relaciones que establecemos y los sistemas de comunicación que gestionamos pueden proporcionar mayor autonomía frente a los cambios externos.
                </p>
                <p>
                  La independencia digital no consiste en eliminar cualquier dependencia, algo difícil de conseguir en Internet, sino en evitar que una única circunstancia determine por completo el futuro de nuestro proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="crecimiento-proceso-aprendizaje"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El crecimiento digital como proceso de aprendizaje
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Desarrollar una estrategia de tráfico web no es una tarea que podamos completar definitivamente y abandonar. Las audiencias evolucionan, los espacios digitales cambian, aparecen nuevas oportunidades y nuestras propias prioridades pueden transformarse.
                </p>
                <p>
                  Por eso, necesitamos una forma de trabajo que permita revisar lo que hacemos sin perder la dirección. Podemos establecer períodos de evaluación, analizar los resultados, identificar las acciones que merecen continuidad y reorganizar aquellas que ya no responden a nuestros objetivos.
                </p>
                <p>
                  La experiencia acumulada tiene un valor especial. Cada campaña, publicación, colaboración, lanzamiento o iniciativa nos proporciona información que puede mejorar nuestras decisiones futuras. Si aprendemos a conservar ese conocimiento, evitaremos comenzar desde cero cada vez que intentemos desarrollar una nueva estrategia.
                </p>
                <p>
                  También debemos reconocer que el crecimiento no siempre es lineal. Habrá períodos de actividad intensa, momentos de resultados modestos y circunstancias que exigirán adaptar nuestro planteamiento. La capacidad de mantener una visión clara y responder con criterio puede ser más importante que la búsqueda constante de resultados inmediatos.
                </p>
                <p>
                  Un proyecto digital sólido se construye mediante decisiones que se refuerzan mutuamente. Cuando sabemos qué queremos conseguir, comprendemos a quién nos dirigimos, elegimos los espacios adecuados, coordinamos nuestras acciones y aprendemos de los resultados, estamos creando condiciones más favorables para que la visibilidad se transforme en crecimiento.
                </p>
                <p>
                  El verdadero potencial de una estrategia de tráfico no reside únicamente en conseguir que más personas lleguen a nuestro sitio. Reside en desarrollar una estructura capaz de generar descubrimiento, despertar interés, construir relaciones y abrir nuevas posibilidades a lo largo del tiempo. Esa es la diferencia entre perseguir visitas y construir una presencia digital con sentido.
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

export default IdeasMaestrasTraficoWebView;
