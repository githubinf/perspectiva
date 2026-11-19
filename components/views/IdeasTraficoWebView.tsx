import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface IdeasTraficoWebViewProps {
  book?: BookItem;
}

export const IDEAS_TRAFICO_WEB_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'publicar-no-significa-ser-descubierto',
    label: 'Publicar no significa ser descubierto',
  },
  {
    id: 'distribucion-trabajo-editorial',
    label: 'La distribución también forma parte del trabajo editorial',
  },
  {
    id: 'lugares-donde-existe-atencion',
    label: 'Encontrar lugares donde ya existe atención',
  },
  {
    id: 'contenido-multiples-oportunidades',
    label: 'Convertir una pieza de contenido en múltiples oportunidades',
  },
  {
    id: 'circulacion-efecto-acumulativo',
    label: 'La circulación del contenido y el efecto acumulativo',
  },
  {
    id: 'curiosidad-punto-entrada',
    label: 'La curiosidad como punto de entrada',
  },
  {
    id: 'participar-sin-ruido',
    label: 'Participar sin convertirse en ruido',
  },
  {
    id: 'conexiones-plataformas-propiedad-digital',
    label: 'Construir conexiones entre plataformas y propiedad digital',
  },
  {
    id: 'trafico-relevante',
    label: 'El tráfico que llega no siempre es el tráfico que necesitamos',
  },
  {
    id: 'recuperar-valor-recursos',
    label: 'Recuperar el valor de los recursos que ya tenemos',
  },
  {
    id: 'sistema-descubrimiento-sostenible',
    label: 'Crear un sistema de descubrimiento que podamos sostener',
  },
  {
    id: 'visitante-nueva-oportunidad',
    label: 'Cada visitante puede abrir una nueva oportunidad',
  },
];

const OFFICIAL_BOOK_TITLE = 'Ideas y Consejos de Tráfico Web';

const IdeasTraficoWebView: React.FC<IdeasTraficoWebViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'ideas-y-consejos-de-trafico-web') ||
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
      {/* Breadcrumbs y zona comercial superior preservados */}
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
              href: currentBook.path || '/ideas-y-consejos-de-trafico-web/',
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
        {/* Encabezado editorial y presentación introductoria */}
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

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Existen otras formas de generar tráfico para tu web además de los buscadores que puedes aplicar inmediatamente.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una perspectiva sobre el tráfico web como un sistema de distribución, descubrimiento, circulación de contenidos, conexión entre plataformas y generación de oportunidades.
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>
            </p>
          </header>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (ANTES DEL DESARROLLO PRINCIPAL)        */}
        {/* ============================================================ */}
        <CategoryIndex
          items={IDEAS_TRAFICO_WEB_INDEX_ITEMS}
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
              id="publicar-no-significa-ser-descubierto"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Publicar no significa ser descubierto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Internet nos ha acostumbrado a pensar que crear una página, publicar un artículo o poner en marcha un proyecto digital es suficiente para comenzar a recibir visitantes. Sin embargo, entre la existencia de un contenido y su descubrimiento hay una distancia que no siempre sabemos cómo recorrer.
                </p>
                <p>
                  Podemos tener una web bien organizada, información útil y una propuesta interesante, pero si nadie encuentra una razón para llegar hasta ella, todos esos recursos permanecen prácticamente invisibles. El problema no reside necesariamente en la calidad de lo que hemos creado, sino en la ausencia de conexiones que permitan que otras personas lo descubran.
                </p>
                <p>
                  Cuando analizamos un proyecto digital, solemos dedicar gran parte de nuestra atención a la producción. Elegimos temas, redactamos, diseñamos páginas y revisamos detalles. Es un trabajo necesario, pero no representa la totalidad de la actividad. Una publicación también necesita un contexto de circulación.
                </p>
                <p>
                  El visitante no aparece espontáneamente porque hayamos terminado una página. Llega desde algún lugar, motivado por una necesidad, una recomendación, una curiosidad, una conversación o una oportunidad que ha despertado su interés.
                </p>
                <p>
                  Comprender esta diferencia nos permite cambiar nuestra perspectiva. En lugar de preguntarnos únicamente qué debemos publicar, comenzamos a pensar dónde puede encontrarse ese contenido, quién podría beneficiarse de él y qué caminos facilitarían su descubrimiento.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="distribucion-trabajo-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La distribución también forma parte del trabajo editorial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Crear contenido y conseguir que circule son dos actividades relacionadas, pero no idénticas. La primera consiste en desarrollar algo que merezca la atención de otras personas. La segunda implica encontrar los espacios, mecanismos y circunstancias que permitan que esa atención se produzca.
                </p>
                <p>
                  Esta distinción tiene importantes consecuencias para la gestión de una web. Si todo nuestro esfuerzo termina cuando pulsamos el botón de publicar, estamos dejando sin desarrollar una parte fundamental del potencial de cada pieza.
                </p>
                <p>
                  Un artículo puede tener varias posibilidades de exposición. Puede servir como respuesta dentro de una conversación, convertirse en material de referencia, utilizarse para explicar un concepto, compartirse en una comunidad especializada o funcionar como punto de partida para otros contenidos.
                </p>
                <p>
                  No todas las publicaciones necesitan el mismo recorrido. Un tutorial técnico puede encontrar su público en un espacio dedicado a resolver problemas concretos. Un análisis puede despertar interés en comunidades profesionales. Una idea breve puede adquirir mayor alcance cuando se presenta en un formato visual o cuando se conecta con una discusión que ya está en marcha.
                </p>
                <p>
                  Por eso, la distribución no debería ser una tarea improvisada que realizamos únicamente cuando necesitamos aumentar las visitas. Conviene considerarla desde el momento en que concebimos el contenido, pensando en sus posibles contextos de descubrimiento.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="lugares-donde-existe-atencion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Encontrar lugares donde ya existe atención
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las ventajas de Internet es que no necesitamos construir una audiencia desde cero para cada proyecto. Existen comunidades, plataformas, publicaciones, grupos especializados y espacios de intercambio donde las personas ya se reúnen alrededor de intereses concretos.
                </p>
                <p>
                  La dificultad consiste en reconocer cuáles de esos lugares tienen sentido para nuestro contenido.
                </p>
                <p>
                  Una plataforma puede reunir millones de usuarios y, aun así, resultar poco apropiada para una página determinada. En cambio, un espacio mucho más pequeño puede ofrecer una audiencia especialmente interesada en el tema que estamos desarrollando.
                </p>
                <p>
                  El valor de un canal no depende exclusivamente de su tamaño. También debemos considerar el contexto, la afinidad, la calidad de la interacción y las expectativas de quienes participan.
                </p>
                <p>
                  Cuando buscamos oportunidades de distribución, podemos observar qué preguntas se repiten, qué problemas generan conversaciones, qué recursos se recomiendan y qué tipo de información parece faltar. Estas señales nos ayudan a identificar lugares donde nuestro contenido puede contribuir de manera legítima.
                </p>
                <p>
                  No se trata de entrar en cualquier espacio para colocar enlaces. Se trata de comprender su dinámica y determinar si nuestra aportación puede ser útil. Cuando existe esa conexión, la visibilidad puede surgir de forma más natural y, sobre todo, puede atraer personas con un interés real.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="contenido-multiples-oportunidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Convertir una pieza de contenido en múltiples oportunidades
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido que publicamos no tiene por qué limitarse a su formato original. Una página extensa puede contener ideas que merecen ser desarrolladas de manera independiente, explicadas con otro lenguaje o presentadas desde una perspectiva diferente.
                </p>
                <p>
                  Esto no significa duplicar el artículo en múltiples plataformas. La oportunidad está en identificar sus componentes y adaptarlos a las características de cada contexto.
                </p>
                <p>
                  Un estudio puede dar lugar a una explicación breve de uno de sus hallazgos. Una guía puede proporcionar material para una serie de publicaciones. Una página de referencia puede convertirse en una respuesta específica a una pregunta recurrente. Una experiencia desarrollada en un artículo puede servir para iniciar una conversación.
                </p>
                <p>
                  Esta transformación requiere algo más que recortar párrafos. Debemos comprender qué valor tiene cada fragmento, cuál es su propósito y cómo puede funcionar de manera independiente sin perder sentido.
                </p>
                <p>
                  Cuando aprendemos a trabajar así, el esfuerzo de creación deja de depender exclusivamente de producir nuevas páginas constantemente. Comenzamos a aprovechar mejor los recursos que ya hemos desarrollado, ampliando su alcance sin sacrificar la calidad ni convertir nuestras publicaciones en copias repetitivas.
                </p>
                <p>
                  La verdadera ventaja no está en multiplicar indiscriminadamente el contenido, sino en aumentar las posibilidades de que una misma idea encuentre a las personas adecuadas en diferentes circunstancias.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="circulacion-efecto-acumulativo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La circulación del contenido y el efecto acumulativo
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El tráfico puede parecer una sucesión de resultados aislados: hoy recibimos algunas visitas, mañana otras y pasado mañana quizá ninguna. Sin embargo, los proyectos que desarrollan una presencia consistente pueden generar relaciones entre sus diferentes publicaciones, canales y recursos.
                </p>
                <p>
                  Una persona descubre una página. Otra encuentra una publicación relacionada en una plataforma externa. Un visitante guarda un recurso para consultarlo más tarde. Alguien recomienda una página dentro de una conversación. Con el tiempo, estos pequeños acontecimientos pueden contribuir a crear una red de descubrimiento.
                </p>
                <p>
                  El efecto acumulativo no significa que cada acción vaya a producir un resultado inmediato ni que todas las publicaciones terminen generando visitas. Significa que las oportunidades de exposición pueden aumentar cuando el proyecto deja de depender de una única acción o de una única ubicación.
                </p>
                <p>
                  Para favorecer ese proceso, necesitamos continuidad. No basta con compartir algo una vez y olvidarnos de ello. Debemos encontrar una forma razonable de mantener la presencia, revisar qué recursos siguen siendo relevantes y reconocer cuándo una publicación merece una nueva oportunidad de circulación.
                </p>
                <p>
                  La consistencia, en este contexto, no implica estar permanentemente conectado ni publicar de forma compulsiva. Significa disponer de una dinámica que podamos mantener sin deteriorar el trabajo principal del proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="curiosidad-punto-entrada"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La curiosidad como punto de entrada
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Gran parte del descubrimiento digital comienza con una pequeña interrupción en la rutina. Una pregunta, una imagen, una afirmación interesante, un problema que no habíamos considerado o una explicación que promete aclarar algo.
                </p>
                <p>
                  La curiosidad puede funcionar como un puente entre una persona y un contenido, pero no debe confundirse con la utilización de titulares engañosos. Despertar interés y satisfacerlo son dos partes de una misma responsabilidad.
                </p>
                <p>
                  Si presentamos una idea de forma atractiva, debemos asegurarnos de que la página a la que conduce realmente desarrolla esa idea. Una discrepancia entre lo que prometemos y lo que ofrecemos puede generar clics momentáneos, pero perjudica la confianza y reduce las posibilidades de que el visitante quiera continuar explorando.
                </p>
                <p>
                  Podemos pensar en la curiosidad como una invitación. El contenido debe estar preparado para responder a ella, aportar contexto y ofrecer algo que justifique el tiempo dedicado a la lectura.
                </p>
                <p>
                  Este planteamiento influye tanto en la forma de compartir una página como en la selección de los temas. Una publicación que conecta con una inquietud real tiene más posibilidades de iniciar una interacción significativa que otra cuyo único objetivo sea conseguir un clic.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="participar-sin-ruido"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Participar sin convertirse en ruido
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las comunidades digitales pueden representar oportunidades de visibilidad, pero su aprovechamiento depende de cómo participamos en ellas. Cuando entramos en un espacio únicamente para promocionar nuestro sitio, es fácil que nuestra presencia resulte poco relevante para los demás.
                </p>
                <p>
                  La participación requiere observar antes de intervenir. Debemos comprender qué temas se consideran importantes, qué tipo de respuestas son bien recibidas y cuáles son las normas que regulan cada espacio. Esa información nos permite decidir si tenemos algo que aportar.
                </p>
                <p>
                  En ocasiones, la mejor contribución será una explicación completa que no necesita enlazar a nuestra web. En otras, podremos compartir un recurso porque responde directamente a una pregunta. También habrá situaciones en las que lo más adecuado sea participar, aprender y no promocionar nada.
                </p>
                <p>
                  Este tipo de comportamiento ayuda a construir una presencia reconocible. La confianza no surge de repetir nuestro nombre o nuestro enlace, sino de la calidad de las aportaciones y de la coherencia entre lo que decimos y lo que ofrecemos.
                </p>
                <p>
                  Cuando existe una relación auténtica entre nuestra actividad y una comunidad, la posibilidad de atraer visitantes deja de depender exclusivamente de la promoción. El interés puede surgir de la propia interacción y de la percepción de que nuestro proyecto tiene algo valioso que aportar.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="conexiones-plataformas-propiedad-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir conexiones entre plataformas y propiedad digital
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las plataformas externas pueden facilitar el descubrimiento, pero no todas ofrecen las mismas condiciones ni garantizan que nuestra presencia permanezca estable. Sus reglas, mecanismos de distribución y prioridades pueden cambiar, afectando a la exposición que conseguimos.
                </p>
                <p>
                  Por esta razón, resulta conveniente pensar en las plataformas como puntos de conexión, no como el destino final de toda nuestra actividad digital.
                </p>
                <p>
                  Nuestro sitio web puede desempeñar el papel de centro organizador. Allí reunimos las publicaciones, los recursos, las páginas de referencia y las diferentes líneas de contenido que forman el proyecto. Los canales externos permiten conectar ese núcleo con otros entornos donde se encuentran potenciales visitantes.
                </p>
                <p>
                  Esta relación debe construirse de forma equilibrada. No necesitamos estar presentes en todos los lugares ni intentar mantener perfiles que no podemos gestionar adecuadamente. Es preferible desarrollar unas pocas vías de descubrimiento que podamos atender, comprender y mejorar.
                </p>
                <p>
                  La independencia digital no significa aislamiento. Significa tener un espacio propio y utilizar las conexiones externas para ampliar sus posibilidades, sin depender por completo de las decisiones de una sola plataforma.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="trafico-relevante"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El tráfico que llega no siempre es el tráfico que necesitamos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Recibir visitantes puede resultar estimulante, especialmente cuando un proyecto lleva tiempo sin mostrar crecimiento. Sin embargo, el número de visitas por sí solo no explica si estamos avanzando en la dirección correcta.
                </p>
                <p>
                  Una página puede recibir una gran cantidad de visitantes que abandonan rápidamente el sitio porque el contenido no responde a sus expectativas. Otra puede tener menos entradas, pero generar lecturas más profundas, consultas, suscripciones o recorridos hacia otras publicaciones.
                </p>
                <p>
                  Por eso, debemos interpretar el tráfico en relación con el propósito de cada página. Si queremos informar, nos interesa saber si las personas encuentran la información que necesitan. Si presentamos una colección de recursos, podemos observar si los visitantes continúan explorando. Si desarrollamos una propuesta comercial, necesitaremos comprender qué acciones realizan después de llegar.
                </p>
                <p>
                  Esta perspectiva evita perseguir cifras que no necesariamente representan progreso. Nos ayuda a distinguir entre exposición y relevancia, entre atraer a alguien y ofrecerle una experiencia que realmente tenga sentido.
                </p>
                <p>
                  La calidad de las visitas también influye en las decisiones que tomamos. Puede ser más útil mejorar la conexión con una audiencia específica que intentar aumentar indiscriminadamente el alcance.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="recuperar-valor-recursos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Recuperar el valor de los recursos que ya tenemos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En muchos proyectos digitales existe una cantidad considerable de contenido que apenas se aprovecha después de su publicación. Algunas páginas siguen siendo útiles, otras necesitan actualización y muchas contienen ideas que podrían conectarse mejor con el resto del sitio.
                </p>
                <p>
                  Antes de producir continuamente material nuevo, podemos revisar lo que ya hemos creado. Esta revisión permite identificar publicaciones que merecen mayor exposición, temas que pueden ampliarse, páginas que necesitan una mejor conexión interna y recursos que podrían presentarse de una forma más accesible.
                </p>
                <p>
                  No todos los contenidos antiguos deben recuperarse. Algunos habrán perdido vigencia o ya no representan la dirección del proyecto. Otros, sin embargo, pueden seguir resolviendo problemas y conservar un valor importante para los visitantes.
                </p>
                <p>
                  La revisión también nos permite descubrir oportunidades que no habíamos considerado. Dos publicaciones relacionadas pueden complementarse. Una página muy completa puede servir como referencia para desarrollar contenidos más específicos. Un tema que recibió poca atención puede encontrar un nuevo contexto en otra plataforma.
                </p>
                <p>
                  De esta manera, el catálogo de contenidos deja de ser un conjunto de publicaciones independientes y comienza a funcionar como un recurso que podemos gestionar, reorganizar y utilizar de manera más estratégica.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="sistema-descubrimiento-sostenible"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Crear un sistema de descubrimiento que podamos sostener
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una estrategia de tráfico no necesita convertirse en una actividad interminable. De hecho, cuando cada publicación exige una cantidad excesiva de tareas de promoción, es probable que terminemos abandonando el sistema.
                </p>
                <p>
                  La sostenibilidad depende de que las acciones elegidas sean compatibles con nuestros recursos, tiempo y objetivos. Un proyecto pequeño puede funcionar con una dinámica sencilla, mientras que otro con mayor capacidad quizá necesite procesos más organizados.
                </p>
                <p>
                  Lo importante es que exista una lógica. Podemos decidir qué contenidos merecen distribución adicional, cuáles son los canales más apropiados, cuánto tiempo dedicaremos a cada acción y cuándo revisaremos los resultados.
                </p>
                <p>
                  También debemos permitir que el sistema evolucione. Si una vía de descubrimiento deja de ser relevante, podemos reducir su prioridad. Si encontramos una comunidad donde nuestras publicaciones generan interés, quizá tenga sentido profundizar nuestra participación. Si un formato resulta demasiado costoso, podemos buscar una alternativa más sencilla.
                </p>
                <p>
                  La planificación aporta dirección, pero la observación aporta información. Combinar ambas nos permite construir un proceso que no dependa de la improvisación y que tampoco se convierta en una rutina rígida.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="visitante-nueva-oportunidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cada visitante puede abrir una nueva oportunidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El crecimiento de un proyecto digital no siempre comienza con una gran campaña ni con una publicación que alcanza miles de personas. En ocasiones, empieza con una conexión pequeña, una página que alguien descubre en el momento adecuado o un recurso que responde a una necesidad concreta.
                </p>
                <p>
                  Cuando ampliamos nuestras vías de descubrimiento, cambiamos la relación que mantenemos con la visibilidad. Dejamos de esperar que un único mecanismo decida cuándo y cómo llegarán las personas. Comenzamos a desarrollar posibilidades que dependen de nuestras decisiones, de nuestra capacidad de observar y de la utilidad que aportamos.
                </p>
                <p>
                  No todos los caminos producirán resultados. Algunos requerirán demasiado esfuerzo, otros atraerán visitantes poco interesados y habrá acciones que simplemente no encajen con nuestro proyecto. Esa experiencia forma parte del proceso de aprendizaje.
                </p>
                <p>
                  Lo importante es mantener una perspectiva abierta, utilizar los recursos con criterio y comprender que atraer visitantes no es un objetivo aislado. Es una forma de conectar nuestro trabajo con personas que pueden encontrar valor en él.
                </p>
                <p>
                  Una web adquiere nuevas posibilidades cuando deja de ser un lugar donde simplemente publicamos y se convierte en un proyecto que participa activamente en diferentes espacios de descubrimiento. Es en esa capacidad de conexión, adaptación y continuidad donde podemos encontrar una forma más equilibrada de desarrollar su crecimiento.
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

export default IdeasTraficoWebView;
