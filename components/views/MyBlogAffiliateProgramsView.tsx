import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface MyBlogAffiliateProgramsViewProps {
  book?: BookItem;
}

export const MY_BLOG_AFFILIATE_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'blog-recomendacion-comercial',
    label: 'El blog y la recomendación comercial',
  },
  {
    id: 'orientacion-editorial',
    label: 'Encontrar una orientación editorial con sentido',
  },
  {
    id: 'contenido-decision',
    label: 'La relación entre contenido y decisión de compra',
  },
  {
    id: 'programas-productos',
    label: 'Elegir programas y productos con criterio',
  },
  {
    id: 'confianza-afiliacion',
    label: 'La confianza como fundamento de la afiliación',
  },
  {
    id: 'trafico-estrategia',
    label: 'El tráfico necesita una estrategia',
  },
  {
    id: 'relaciones-mercado',
    label: 'Las distintas formas de relacionarse con el mercado',
  },
  {
    id: 'analisis-modelo',
    label: 'Comprender los resultados y mejorar el modelo',
  },
  {
    id: 'diversificacion-coherencia',
    label: 'Diversificar sin perder la coherencia',
  },
  {
    id: 'tecnologia-trabajo',
    label: 'La tecnología como apoyo al trabajo editorial',
  },
  {
    id: 'desafios-mercado',
    label: 'Los desafíos de un mercado cambiante',
  },
  {
    id: 'proyecto-continuidad',
    label: 'Construir un proyecto con continuidad',
  },
];

const MyBlogAffiliateProgramsView: React.FC<MyBlogAffiliateProgramsViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'mi-blog-y-los-programas-de-afiliados') ||
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
              href: currentBook.path || '/mi-blog-y-los-programas-de-afiliados/',
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
              Mi Blog y los Programas de Afiliados
            </h1>

            {currentBook.subtitle && (
              <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
                {currentBook.subtitle}
              </p>
            )}

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-4">
              Una perspectiva estratégica sobre cómo convertir el contenido editorial en un espacio de confianza, recomendación y desarrollo comercial dentro del marketing de afiliados.
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
                Un blog puede cumplir muchas funciones: compartir conocimientos, desarrollar una identidad profesional, reunir a personas interesadas en una temática o construir un espacio propio dentro de Internet. Cuando se incorpora el marketing de afiliados, aparece una dimensión adicional: la posibilidad de establecer relaciones comerciales a partir de los contenidos publicados.
              </p>
              <p>
                Sin embargo, esa transición no consiste simplemente en añadir enlaces a productos y esperar que los lectores realicen una compra. Entre una publicación informativa y una recomendación comercial existe una responsabilidad editorial. El visitante necesita comprender por qué se presenta una determinada solución, qué relación tiene con el tema que está consultando y qué motivos justifican considerarla.
              </p>
              <p>
                Esta diferencia es importante porque un proyecto de afiliación depende de varios elementos que deben funcionar de manera coordinada. El contenido atrae y orienta; la confianza influye en la recepción de las recomendaciones; los programas de afiliados proporcionan mecanismos de colaboración comercial; y el análisis permite comprender qué decisiones están produciendo resultados.
              </p>
              <p>
                Por eso, desarrollar un blog de afiliación requiere pensar más allá de la monetización inmediata. Es necesario comprender cómo se relacionan la actividad editorial, las necesidades de la audiencia y los intereses de los anunciantes, sin perder de vista la independencia y la credibilidad del proyecto.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={MY_BLOG_AFFILIATE_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO COMPLETO + CIERRE EDITORIAL (12 H2)      */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="blog-recomendacion-comercial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El blog y la recomendación comercial: dos actividades que deben convivir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un proyecto editorial que incorpora afiliación tiene una particularidad: su contenido no solo informa, también puede intervenir en el proceso mediante el cual una persona evalúa distintas alternativas. Esa función exige una relación equilibrada entre el interés del lector y la actividad comercial del sitio.
                </p>
                <p>
                  Una publicación puede explicar las características de una herramienta, analizar una categoría de productos o ayudar a comprender las diferencias entre varias opciones. Cuando existe una relación de afiliación, esa información puede incluir una vía de acceso comercial. Pero el enlace no debería convertirse en el motivo principal de la publicación.
                </p>
                <p>
                  La recomendación tiene sentido cuando está respaldada por el contexto. Si una persona llega buscando orientación sobre un problema, necesita encontrar información que le ayude a comprenderlo antes de enfrentarse a una propuesta comercial. Cuando el contenido se limita a conducir hacia una compra, pierde buena parte de su utilidad editorial.
                </p>
                <p>
                  Esta relación también modifica la manera de valorar el trabajo del blogger. No basta con considerar cuántos artículos se publican o cuántos enlaces se incorporan. Importa la capacidad de construir un entorno donde las recomendaciones tengan una razón clara para aparecer.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="orientacion-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Encontrar una orientación editorial con sentido
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La elección de una temática determina buena parte de las posibilidades de desarrollo de un blog. No se trata únicamente de seleccionar un sector con productos comercializables, sino de encontrar un ámbito en el que podamos desarrollar contenidos con continuidad y aportar información relevante.
                </p>
                <p>
                  Una temática demasiado amplia puede dificultar la construcción de una identidad reconocible. Por otro lado, una orientación excesivamente limitada puede reducir las posibilidades de profundizar en diferentes necesidades de la audiencia. La decisión requiere encontrar un equilibrio entre especialización, interés editorial y posibilidades de evolución.
                </p>
                <p>
                  También conviene comprender que los lectores no siempre llegan a un sitio con una intención de compra inmediata. Algunas visitas responden a una necesidad de aprendizaje, otras buscan comparar alternativas y otras intentan resolver una dificultad concreta. Un blog puede atender distintas etapas de ese recorrido si organiza sus publicaciones con una lógica adecuada.
                </p>
                <p>
                  La identidad editorial se fortalece cuando existe una relación reconocible entre los temas tratados. Así, cada artículo contribuye a desarrollar una propuesta y no aparece como una pieza aislada creada únicamente porque ofrece una oportunidad comercial.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="contenido-decision"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación entre contenido y decisión de compra
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido ocupa una posición especialmente importante dentro del marketing de afiliados porque constituye el contexto en el que se presentan las recomendaciones.
                </p>
                <p>
                  Una explicación, una comparación o un análisis pueden ayudar a que el lector comprenda mejor una necesidad y evalúe las alternativas disponibles. Sin embargo, cada formato tiene una función distinta. Una publicación orientada a explicar un concepto no necesita convertirse en una presentación comercial, del mismo modo que una comparación de productos requiere criterios comprensibles para que el lector pueda valorar sus diferencias.
                </p>
                <p>
                  La calidad editorial depende de que exista correspondencia entre la intención de la publicación y la información que ofrece. Los títulos deben anticipar adecuadamente su contenido, los argumentos necesitan desarrollarse con claridad y las recomendaciones deben aparecer donde realmente aportan contexto.
                </p>
                <p>
                  También importa la manera de presentar los recursos visuales. Una imagen puede facilitar la identificación de un producto o ayudar a comprender una explicación, pero su presencia debe responder a una función concreta. El diseño no sustituye la información ni convierte por sí mismo una recomendación en una propuesta convincente.
                </p>
                <p>
                  Cuando el contenido está organizado alrededor de las necesidades de las personas, el componente comercial puede integrarse sin dominar toda la experiencia de lectura.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="programas-productos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Elegir programas y productos con criterio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los programas de afiliados representan una vía de colaboración entre quienes publican contenidos y las empresas que ofrecen productos o servicios. No obstante, la existencia de una comisión no es razón suficiente para incorporar una oferta a un blog.
                </p>
                <p>
                  La selección requiere considerar si el producto guarda relación con la temática, si puede resultar útil para los lectores y si las condiciones del programa son compatibles con la orientación del proyecto. También es necesario comprender cómo se registran las referencias, qué mecanismos de seguimiento se utilizan y qué requisitos deben respetarse.
                </p>
                <p>
                  Las condiciones comerciales pueden variar. Un programa puede modificar sus comisiones, sus políticas de participación o sus criterios de atribución. Por eso, la relación con una plataforma no debería considerarse permanente ni mantenerse sin revisiones.
                </p>
                <p>
                  La diversificación de anunciantes puede reducir la dependencia de una única fuente comercial, aunque también introduce nuevas necesidades de gestión. Cada colaboración debe evaluarse por su pertinencia y por las condiciones que implica, no únicamente por las expectativas económicas que genera.
                </p>
                <p>
                  En definitiva, elegir un programa significa incorporar una relación comercial a un proyecto editorial. Esa decisión merece el mismo cuidado que dedicamos a seleccionar los temas y las recomendaciones que presentamos a nuestros lectores.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="confianza-afiliacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza como fundamento de la afiliación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La credibilidad es uno de los recursos más importantes de un blog que utiliza recomendaciones comerciales. Se construye a través de la coherencia entre lo que se comunica, lo que se recomienda y la manera en que se reconoce la relación con las empresas.
                </p>
                <p>
                  La transparencia no debería tratarse como una formalidad que se resuelve mediante un aviso escondido. El lector necesita poder identificar cuándo existe una relación comercial que puede generar una comisión. Esa información permite comprender el contexto de la recomendación y valorar el contenido con mayor claridad.
                </p>
                <p>
                  También es importante evitar afirmaciones que no puedan justificarse. Presentar un producto como una solución universal, exagerar sus ventajas o transmitir experiencias que no se han tenido puede deteriorar la confianza. La recomendación responsable requiere distinguir entre información comprobable, opinión y características que dependen de las circunstancias de cada persona.
                </p>
                <p>
                  La privacidad y el respeto por los datos forman parte de la misma responsabilidad. Un proyecto digital debe considerar cómo recoge, utiliza y protege la información de sus visitantes, así como las obligaciones aplicables a sus actividades.
                </p>
                <p>
                  La confianza no garantiza una conversión ni elimina los desafíos comerciales. Su importancia reside en que proporciona una base más sólida para mantener una relación legítima con la audiencia a lo largo del tiempo.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="trafico-estrategia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El tráfico necesita una estrategia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La visibilidad es necesaria para que los contenidos puedan llegar a sus posibles lectores, pero el volumen de visitas no describe por sí solo la calidad de una audiencia.
                </p>
                <p>
                  Un sitio puede recibir tráfico de personas que no encuentran relación entre sus necesidades y las recomendaciones disponibles. También puede tener publicaciones con menos visitas que respondan de manera mucho más precisa a las consultas de un grupo interesado.
                </p>
                <p>
                  Por eso, el trabajo de atracción necesita una orientación editorial. La optimización para buscadores ayuda a conectar los contenidos con determinadas búsquedas, mientras que otros canales de difusión permiten presentar las publicaciones ante públicos diferentes.
                </p>
                <p>
                  Las redes sociales, el correo electrónico, las colaboraciones y las referencias externas pueden ampliar las oportunidades de descubrimiento. Sin embargo, cada canal exige comprender sus propias características y evitar que la distribución se convierta en una repetición mecánica del mismo mensaje.
                </p>
                <p>
                  La estrategia de tráfico también necesita continuidad. No todas las publicaciones adquieren visibilidad al mismo ritmo ni responden a las mismas necesidades. Evaluar su comportamiento permite reconocer qué temas merecen mayor desarrollo y qué áreas necesitan una orientación distinta.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="relaciones-mercado"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Las distintas formas de relacionarse con el mercado
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El blogger no mantiene una única relación comercial. Puede participar en programas de afiliados, colaborar con anunciantes, establecer acuerdos de promoción o desarrollar iniciativas conjuntas con otros profesionales y creadores de contenido.
                </p>
                <p>
                  Cada modalidad implica responsabilidades diferentes. Una recomendación basada en un programa de afiliación no es necesariamente equivalente a una colaboración patrocinada o a una campaña acordada directamente con una marca. Comprender esas diferencias ayuda a presentar cada relación de forma transparente.
                </p>
                <p>
                  Las colaboraciones pueden ampliar el alcance de un proyecto y facilitar el acceso a nuevas audiencias, pero necesitan objetivos compatibles. La afinidad temática, la reputación de las partes y la claridad de las condiciones son factores relevantes para evitar conflictos posteriores.
                </p>
                <p>
                  También importa definir cómo se medirá el resultado de una colaboración. Las expectativas deben ser comprensibles desde el principio y las condiciones acordadas no deberían dejar aspectos esenciales sujetos a interpretaciones.
                </p>
                <p>
                  Un proyecto editorial puede desarrollar relaciones comerciales más complejas a medida que crece, pero esa evolución necesita conservar una línea coherente con su identidad y con las expectativas de sus lectores.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="analisis-modelo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Comprender los resultados y mejorar el modelo
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El seguimiento de resultados permite observar cómo interactúan los visitantes con los contenidos y cómo se comportan las distintas iniciativas comerciales. Sin embargo, las cifras adquieren valor cuando se interpretan en relación con objetivos concretos.
                </p>
                <p>
                  Las visitas, los clics, las conversiones y los ingresos describen aspectos diferentes del funcionamiento del proyecto. Ninguna de estas métricas explica por sí sola toda la situación. Por ejemplo, una publicación puede atraer numerosas visitas y recibir pocos clics comerciales porque su función principal es informativa. Otra puede tener menos tráfico, pero responder a una necesidad más próxima a una decisión.
                </p>
                <p>
                  La interpretación necesita considerar el contexto, el tipo de contenido, la procedencia de las visitas y las condiciones de seguimiento de cada programa. También conviene prestar atención a los cambios en el comportamiento de la audiencia y a las modificaciones que puedan producirse en las plataformas comerciales.
                </p>
                <p>
                  El análisis no consiste en perseguir cada variación de las estadísticas. Su utilidad está en ayudar a formular mejores preguntas, reconocer patrones y decidir qué aspectos merecen una revisión.
                </p>
                <p>
                  Un blog de afiliación necesita combinar criterio editorial y observación de resultados. Los datos aportan señales, pero las decisiones siguen requiriendo una comprensión del proyecto y de las personas a las que se dirige.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="diversificacion-coherencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Diversificar sin perder la coherencia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La afiliación puede formar parte de un modelo de monetización más amplio. Un blog también puede desarrollar productos propios, ofrecer recursos especializados, organizar contenidos de acceso restringido o establecer colaboraciones comerciales con diferentes modalidades.
                </p>
                <p>
                  La diversificación permite explorar alternativas y evitar que toda la actividad dependa de una sola relación comercial. Sin embargo, incorporar nuevas fuentes de ingresos no significa que todas sean apropiadas para cualquier proyecto.
                </p>
                <p>
                  Cada alternativa exige valorar su relación con la audiencia, los recursos necesarios para gestionarla y el grado de complejidad que añade. Una membresía, por ejemplo, implica mantener una propuesta de valor continuada; un producto digital requiere desarrollar y atender una oferta propia; y una colaboración con una marca necesita acuerdos y responsabilidades definidos.
                </p>
                <p>
                  La coherencia es el criterio que permite decidir qué alternativas tienen sentido. Cuando las distintas actividades responden a necesidades relacionadas, el blog puede evolucionar sin convertirse en una suma desordenada de ofertas.
                </p>
                <p>
                  El objetivo no debería ser incorporar todas las posibilidades disponibles, sino desarrollar aquellas que puedan convivir con la identidad editorial y con la capacidad real de gestión del proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="tecnologia-trabajo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La tecnología como apoyo al trabajo editorial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La gestión de un blog de afiliación implica tareas que pueden volverse complejas a medida que aumenta el volumen de publicaciones, relaciones comerciales y datos. Las herramientas digitales ayudan a organizar parte de ese trabajo, pero su utilidad depende de cómo se integren.
                </p>
                <p>
                  Los recursos de investigación permiten estudiar temas y oportunidades; los sistemas de seguimiento ayudan a controlar referencias comerciales; las herramientas de analítica ofrecen información sobre el comportamiento del sitio; y las soluciones de comunicación facilitan mantener relaciones con una audiencia.
                </p>
                <p>
                  La automatización también puede reducir determinadas tareas repetitivas. No obstante, automatizar un proceso no significa que deje de necesitar supervisión. La información debe revisarse, los enlaces necesitan mantenerse actualizados y las decisiones editoriales requieren criterio humano.
                </p>
                <p>
                  La inteligencia artificial amplía las posibilidades de apoyo en investigación, organización y producción de materiales, pero no sustituye la responsabilidad sobre la calidad, la precisión y la originalidad de lo publicado.
                </p>
                <p>
                  La tecnología aporta valor cuando resuelve necesidades identificables y permite trabajar con mayor organización. Acumular herramientas sin una función clara puede aumentar los costes, las dependencias y la complejidad operativa.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="desafios-mercado"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Los desafíos de un mercado cambiante
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El marketing de afiliados se desarrolla dentro de un entorno en el que las plataformas, las condiciones comerciales y los hábitos de consumo pueden cambiar. Un proyecto que depende de una sola fuente de tráfico o de un único programa queda expuesto a decisiones externas que no controla.
                </p>
                <p>
                  La competencia también obliga a diferenciarse. Cuando numerosos sitios presentan productos similares, la simple incorporación de enlaces no proporciona una ventaja editorial. La profundidad de la información, la claridad de las recomendaciones y la especialización pueden ayudar a construir una propuesta más reconocible.
                </p>
                <p>
                  Otro desafío es mantener la motivación y la organización durante periodos en los que el trabajo realizado no produce los resultados esperados. El desarrollo de una plataforma requiere continuidad, pero también capacidad para revisar decisiones que no están funcionando.
                </p>
                <p>
                  Las obligaciones legales y las políticas de los programas merecen atención permanente. Las condiciones de divulgación comercial, la privacidad y los derechos sobre los contenidos visuales no deberían considerarse cuestiones secundarias.
                </p>
                <p>
                  Adaptarse implica observar el entorno sin abandonar los principios que sostienen el proyecto. No todas las tendencias merecen incorporarse ni todas las oportunidades justifican modificar una estrategia.
                </p>
              </div>
            </section>

            {/* Apartado 12 — Cierre editorial */}
            <section
              id="proyecto-continuidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir un proyecto con continuidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un blog de afiliación puede evolucionar desde una iniciativa editorial pequeña hacia una plataforma con diferentes fuentes de ingresos y relaciones comerciales. Esa evolución, sin embargo, no depende únicamente de ampliar el número de publicaciones o incorporar más programas.
                </p>
                <p>
                  La continuidad se apoya en una identidad reconocible, una audiencia comprendida y una gestión capaz de adaptarse a las condiciones del mercado. También requiere aprendizaje: revisar los resultados, conocer nuevas herramientas, actualizar los conocimientos y mantener una actitud crítica ante las oportunidades que aparecen.
                </p>
                <p>
                  La marca personal puede contribuir a diferenciar el proyecto cuando representa una forma coherente de comunicar y una línea editorial reconocible. Las relaciones con lectores, anunciantes y otros profesionales también pueden adquirir valor cuando se desarrollan sobre bases claras y expectativas realistas.
                </p>
                <p>
                  El crecimiento sostenible no significa que desaparezcan los riesgos ni que los ingresos estén garantizados. Significa construir una estructura que no dependa exclusivamente de decisiones improvisadas y que pueda revisarse cuando cambien las circunstancias.
                </p>
                <p>
                  En última instancia, un blog de afiliación es mucho más que un espacio para insertar referencias comerciales. Es un proyecto editorial que participa en un mercado, establece relaciones y necesita equilibrar información, confianza y actividad económica. Comprender esa relación permite tomar decisiones más conscientes y desarrollar una plataforma con una dirección propia.
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

export default MyBlogAffiliateProgramsView;
