import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface TipsAffiliateMarketingViewProps {
  book?: BookItem;
}

export const TIPS_AFFILIATE_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'promocionar-desarrollar-actividad',
    label: 'La diferencia entre promocionar y desarrollar una actividad profesional',
  },
  {
    id: 'confianza-patrimonio-afiliacion',
    label: 'La confianza como patrimonio de una actividad de afiliación',
  },
  {
    id: 'criterio-decisiones-comerciales',
    label: 'El criterio que debe orientar nuestras decisiones comerciales',
  },
  {
    id: 'identidad-aportacion',
    label: 'Una identidad que se reconoce por lo que aporta',
  },
  {
    id: 'calidad-recomendaciones',
    label: 'La calidad de las recomendaciones y sus consecuencias',
  },
  {
    id: 'presencia-digital-coherente',
    label: 'El valor de una presencia digital coherente',
  },
  {
    id: 'comunicacion-relacion',
    label: 'La comunicación como relación y no como presión',
  },
  {
    id: 'responsabilidad-promocion',
    label: 'La responsabilidad detrás de cada acción promocional',
  },
  {
    id: 'interpretar-rendimiento',
    label: 'Aprender a interpretar el rendimiento sin perseguir cifras aisladas',
  },
  {
    id: 'colaboracion-capacidades',
    label: 'La colaboración como forma de ampliar capacidades',
  },
  {
    id: 'adaptacion-identidad',
    label: 'Adaptarse sin perder la identidad profesional',
  },
  {
    id: 'sostenibilidad-crecimiento',
    label: 'La sostenibilidad como criterio de crecimiento',
  },
];

const TipsAffiliateMarketingView: React.FC<TipsAffiliateMarketingViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'tips-de-marketing-para-afiliados') ||
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
              label: 'Tips de Marketing para Afiliados',
              href: currentBook.path || '/tips-de-marketing-para-afiliados/',
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
              Tips de Marketing para Afiliados
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Estrategias éticas, técnicas y sostenibles para construir autoridad y generar ingresos a largo plazo
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una perspectiva sobre las decisiones, los hábitos profesionales y los criterios que permiten desarrollar una actividad de afiliación reconocible, responsable y preparada para evolucionar.
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
                El marketing de afiliados ofrece una forma de participar en el mercado digital sin tener que desarrollar todos los productos que recomendamos. Sin embargo, esa posibilidad también plantea una cuestión que a menudo queda relegada frente a las técnicas de promoción: ¿qué hace que una persona confíe en nuestras recomendaciones y encuentre razones para seguir prestando atención a lo que comunicamos?
              </p>
              <p>
                La respuesta no depende exclusivamente de elegir un programa comercial o encontrar un canal que genere visitas. Una actividad de afiliación necesita una identidad, una manera de relacionarse con el público y unos criterios que orienten las decisiones. Cuando estos elementos no existen, el trabajo puede terminar reducido a una sucesión de promociones sin continuidad.
              </p>
              <p>
                La autoridad tampoco aparece por utilizar expresiones profesionales, publicar constantemente o acumular seguidores. Se desarrolla cuando existe correspondencia entre lo que comunicamos, los productos que recomendamos y la experiencia que ofrecemos a quienes nos siguen. Es un proceso que requiere tiempo, consistencia y disposición para revisar nuestras decisiones.
              </p>
              <p>
                También debemos reconocer que el entorno digital cambia. Las plataformas evolucionan, aparecen nuevas formas de comunicación y las expectativas de los consumidores se transforman. Por eso, una estrategia sostenible no puede depender de una única técnica ni de una fórmula que supuestamente funcione para cualquier mercado.
              </p>
              <p>
                El propósito de esta perspectiva es examinar los criterios que permiten desarrollar una actividad de afiliación con mayor madurez profesional. Nos interesa comprender cómo se construye una reputación, cómo se toman decisiones responsables y cómo se conectan las diferentes partes del trabajo para evitar que cada acción comercial funcione de manera aislada.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={TIPS_AFFILIATE_INDEX_ITEMS}
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
              id="promocionar-desarrollar-actividad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La diferencia entre promocionar y desarrollar una actividad profesional
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Promocionar un producto y construir una actividad de afiliación son dos cosas relacionadas, pero no equivalentes. La primera puede consistir en presentar una oferta a un público determinado. La segunda exige desarrollar una estructura de trabajo que permita tomar decisiones, mantener una presencia reconocible y evaluar la evolución del proyecto.
                </p>
                <p>
                  Esta diferencia cambia nuestra forma de abordar el mercado. Si únicamente pensamos en la próxima promoción, cada producto se convierte en una oportunidad independiente. Cuando trabajamos con una visión profesional, en cambio, nos preguntamos cómo encaja esa oferta en el proyecto que estamos desarrollando y qué aporta a las personas con las que queremos relacionarnos.
                </p>
                <p>
                  Una actividad organizada necesita continuidad. Requiere establecer prioridades, definir qué tipo de comunicación vamos a mantener y determinar qué recursos podemos dedicar a cada tarea. No todo tiene la misma importancia ni todas las oportunidades merecen nuestra atención.
                </p>
                <p>
                  También debemos aceptar que el trabajo no se limita a los momentos en los que publicamos un enlace. Investigar, revisar información, comprobar condiciones comerciales, mantener contenidos y analizar resultados forman parte de una actividad que necesita organización.
                </p>
                <p>
                  El cambio de perspectiva consiste en dejar de considerar cada promoción como un acontecimiento aislado y comenzar a evaluar cómo contribuye al desarrollo de un proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="confianza-patrimonio-afiliacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza como patrimonio de una actividad de afiliación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En el marketing de afiliados, la confianza tiene consecuencias que van mucho más allá de una conversión puntual. Una recomendación puede llamar la atención de alguien, pero la relación que mantenemos con esa persona dependerá de la calidad de nuestras decisiones a lo largo del tiempo.
                </p>
                <p>
                  Cuando recomendamos algo que no conocemos suficientemente o que no encaja con las necesidades del público, podemos comprometer una reputación que ha costado construir. Incluso si una promoción obtiene atención inmediata, el resultado puede ser perjudicial cuando las expectativas generadas no corresponden con la experiencia real del comprador.
                </p>
                <p>
                  La confianza requiere coherencia. Significa no presentar una solución como universal cuando tiene limitaciones, no exagerar sus características y no ocultar información relevante para favorecer una decisión comercial.
                </p>
                <p>
                  También implica comprender que nuestra audiencia no es una fuente de clics. Son personas que interpretan lo que comunicamos y utilizan esa información para tomar decisiones. Respetar esa realidad debería influir en la manera de seleccionar ofertas, preparar contenidos y presentar recomendaciones.
                </p>
                <p>
                  Una reputación sólida no se consigue mediante una única campaña. Se forma a través de numerosas interacciones en las que demostramos que existe una relación razonable entre nuestras palabras y nuestras acciones.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="criterio-decisiones-comerciales"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El criterio que debe orientar nuestras decisiones comerciales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La actividad de afiliación presenta oportunidades constantemente. Nuevos productos, programas, plataformas y formatos pueden parecer interesantes, pero disponer de alternativas no significa que debamos incorporarlas todas.
                </p>
                <p>
                  El criterio comercial consiste en determinar qué merece nuestra atención y por qué. Para hacerlo, necesitamos observar la relación entre el producto, el mercado al que se dirige y la capacidad que tenemos para comunicar su propuesta.
                </p>
                <p>
                  Una oferta puede ofrecer condiciones económicas atractivas y, sin embargo, no guardar relación con el público que hemos desarrollado. Otra puede encajar perfectamente con nuestro ámbito de trabajo, pero requerir conocimientos o recursos que todavía no tenemos.
                </p>
                <p>
                  Estas situaciones muestran por qué las decisiones no deberían basarse en un único indicador. Es necesario considerar la naturaleza del producto, la claridad de su propuesta, las condiciones del programa y las expectativas de las personas a quienes pretendemos llegar.
                </p>
                <p>
                  También conviene establecer límites. No todas las categorías son apropiadas para nuestra actividad, ni todas las tendencias justifican una inversión de tiempo. Aprender a descartar oportunidades es una parte importante de la gestión profesional.
                </p>
                <p>
                  Cuando tenemos criterios definidos, resulta más sencillo mantener una dirección y evitar que el proyecto cambie constantemente por la aparición de una nueva posibilidad comercial.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="identidad-aportacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una identidad que se reconoce por lo que aporta
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una identidad profesional no se construye únicamente mediante elementos visuales o una denominación comercial. También se manifiesta en los temas que abordamos, la manera en que explicamos las cosas y el tipo de recomendaciones que consideramos apropiadas.
                </p>
                <p>
                  Esto resulta especialmente importante en un mercado donde muchas personas pueden promocionar los mismos productos. Si nuestra comunicación se limita a repetir los argumentos de una página comercial, será difícil ofrecer una razón adicional para que alguien preste atención a nuestra propuesta.
                </p>
                <p>
                  La diferenciación aparece cuando aportamos una perspectiva propia. Podemos explicar un problema desde un ángulo que conocemos, organizar información dispersa, comparar criterios o ayudar a comprender las circunstancias en las que una solución puede tener sentido.
                </p>
                <p>
                  No necesitamos adoptar una personalidad artificial para destacar. Es más útil desarrollar una voz coherente y mantenerla en los distintos espacios donde participamos.
                </p>
                <p>
                  La identidad también requiere continuidad temática. Si nuestras publicaciones, recomendaciones y comunicaciones responden a intereses completamente desconectados, las personas tendrán dificultades para comprender qué pueden esperar de nosotros.
                </p>
                <p>
                  Una presencia reconocible facilita que el público identifique el valor de nuestra actividad más allá de una promoción concreta.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="calidad-recomendaciones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La calidad de las recomendaciones y sus consecuencias
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Recomendar un producto implica asumir una responsabilidad. Aunque la decisión final corresponda al comprador, nuestra comunicación influye en la información que utiliza para evaluar una alternativa.
                </p>
                <p>
                  Por eso, antes de incorporar una oferta a nuestra actividad, debemos examinar qué representa realmente. No es suficiente que tenga una presentación atractiva o que pertenezca a una categoría popular. Necesitamos comprender qué propone, qué necesidades pretende atender y qué límites pueden ser relevantes.
                </p>
                <p>
                  También debemos distinguir entre una experiencia personal, una característica comprobable y una afirmación comercial. Presentar esas tres cosas como si fueran equivalentes puede generar expectativas equivocadas.
                </p>
                <p>
                  Cuando no tenemos información suficiente, lo razonable es evitar afirmaciones que no podemos respaldar. Una recomendación responsable no necesita convertir todas las características de un producto en argumentos favorables.
                </p>
                <p>
                  La calidad también se relaciona con la selección de las ofertas que mantenemos. Revisar periódicamente los productos y comprobar que siguen siendo adecuados ayuda a evitar que nuestra presencia digital conserve recomendaciones desactualizadas o propuestas que ya no corresponden con el público.
                </p>
                <p>
                  El objetivo no es recomendar más productos, sino procurar que las recomendaciones que hacemos tengan una justificación comprensible.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="presencia-digital-coherente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de una presencia digital coherente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad de afiliación puede desarrollarse en diferentes espacios digitales, pero la presencia no debería confundirse con estar en todas partes. Cada canal requiere atención, recursos y una forma de comunicación que puede no ser adecuada para cualquier proyecto.
                </p>
                <p>
                  La elección debe responder a una pregunta sencilla: ¿qué espacio nos permite relacionarnos de manera útil con el público al que queremos llegar?
                </p>
                <p>
                  Un sitio web puede ofrecer una base estable para organizar información y desarrollar contenidos que permanezcan disponibles. Las redes sociales pueden facilitar conversaciones y ampliar la difusión. El correo electrónico puede mantener una comunicación más directa con quienes han decidido recibir nuestros mensajes.
                </p>
                <p>
                  Estos espacios no cumplen necesariamente la misma función. Su utilidad depende de cómo los integramos y de si podemos mantenerlos con un nivel razonable de calidad.
                </p>
                <p>
                  Una presencia coherente evita que cada canal transmita una identidad diferente. También facilita que las personas encuentren una continuidad entre lo que descubren en una publicación, lo que consultan en nuestro sitio y las recomendaciones que reciben posteriormente.
                </p>
                <p>
                  No se trata de multiplicar perfiles, sino de desarrollar una estructura que podamos gestionar y que tenga sentido para el proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="comunicacion-relacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La comunicación como relación y no como presión
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La comunicación comercial suele perder eficacia cuando se concentra exclusivamente en conseguir una respuesta inmediata. Insistir, repetir argumentos o presentar continuamente oportunidades puede generar cansancio y reducir la atención que las personas prestan a nuestros mensajes.
                </p>
                <p>
                  Una relación más equilibrada parte de comprender qué información necesita el público y en qué momento puede resultarle útil. Esto exige observar las preguntas que aparecen, las dificultades que se repiten y las diferencias entre quienes están descubriendo un tema y quienes ya conocen las alternativas disponibles.
                </p>
                <p>
                  La comunicación debe adaptarse a esas circunstancias. Una explicación inicial no cumple la misma función que una comparación detallada o una recomendación dirigida a alguien que ya está evaluando una compra.
                </p>
                <p>
                  También debemos respetar los límites de cada canal. La frecuencia de publicación, el tratamiento de los datos personales y la posibilidad de dejar de recibir comunicaciones forman parte de una relación que debe ser transparente.
                </p>
                <p>
                  Cuando ofrecemos información relevante y evitamos convertir cada contacto en una exigencia comercial, la comunicación puede mantener su utilidad incluso cuando no se produce una compra inmediata.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="responsabilidad-promocion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La responsabilidad detrás de cada acción promocional
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La actividad de afiliación se desarrolla dentro de un marco de condiciones comerciales, políticas de plataformas y obligaciones legales que debemos conocer. No podemos considerar esos aspectos como detalles secundarios que solo importan cuando aparece un problema.
                </p>
                <p>
                  La transparencia sobre los vínculos de afiliación es una parte esencial de la comunicación responsable. Las personas deben poder comprender cuándo existe una relación comercial detrás de una recomendación.
                </p>
                <p>
                  También necesitamos respetar las condiciones de los programas, las restricciones de los canales y las normas relacionadas con la publicidad y la protección de datos. Las reglas pueden variar según el mercado, la plataforma y el tipo de comunicación, por lo que no debemos asumir que una práctica permitida en un entorno es válida en todos los demás.
                </p>
                <p>
                  La responsabilidad también afecta a la forma de presentar resultados. Las experiencias individuales no deben transformarse en promesas generales, y las posibilidades comerciales no deben confundirse con resultados garantizados.
                </p>
                <p>
                  Trabajar con criterios éticos no significa renunciar a los objetivos económicos. Significa comprender que el desarrollo comercial y la responsabilidad hacia el público deben convivir dentro de la misma actividad.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="interpretar-rendimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Aprender a interpretar el rendimiento sin perseguir cifras aisladas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las métricas permiten observar diferentes aspectos del trabajo, pero no todas responden a las mismas preguntas. Una cifra puede parecer favorable y, aun así, no representar una mejora real para el proyecto.
                </p>
                <p>
                  Por ejemplo, aumentar el alcance de una publicación no demuestra necesariamente que estemos llegando a personas interesadas en las ofertas que recomendamos. Del mismo modo, un incremento de clics no explica por sí solo si la comunicación está generando una relación comercial adecuada.
                </p>
                <p>
                  Necesitamos interpretar los datos en función de los objetivos. Si queremos evaluar la calidad de una audiencia, debemos observar algo más que el volumen de visitas. Si analizamos una promoción, conviene examinar la relación entre el origen del tráfico, la interacción y los resultados registrados.
                </p>
                <p>
                  La comparación entre periodos también requiere cuidado. Los cambios en las plataformas, las características del público y las condiciones de una campaña pueden afectar a los resultados.
                </p>
                <p>
                  La analítica adquiere verdadero valor cuando ayuda a tomar decisiones. No necesitamos acumular informes para sentir que estamos gestionando el proyecto. Necesitamos información que permita identificar problemas, comprobar hipótesis y decidir qué conviene mantener o modificar.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="colaboracion-capacidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La colaboración como forma de ampliar capacidades
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad profesional no tiene por qué desarrollarse de manera aislada. Las colaboraciones pueden abrir oportunidades para compartir conocimientos, acceder a otros públicos y desarrollar proyectos que serían más difíciles de abordar individualmente.
                </p>
                <p>
                  Sin embargo, una colaboración no es valiosa simplemente porque permita alcanzar una audiencia mayor. Necesita una relación coherente entre las partes, expectativas claras y una aportación que justifique el trabajo conjunto.
                </p>
                <p>
                  Podemos encontrar oportunidades de colaboración con creadores de contenido, especialistas, propietarios de sitios web o profesionales que trabajan en mercados relacionados. La clave está en identificar qué puede aportar cada participante y qué objetivos comparten.
                </p>
                <p>
                  También es importante definir responsabilidades y condiciones antes de iniciar una relación comercial. Una comunicación ambigua puede generar conflictos incluso cuando la propuesta inicial parece prometedora.
                </p>
                <p>
                  Las relaciones profesionales se fortalecen cuando existe reciprocidad y cuando los acuerdos respetan la identidad de cada participante. La colaboración puede ampliar nuestras capacidades, pero no debería obligarnos a recomendar propuestas que contradigan nuestros criterios.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="adaptacion-identidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Adaptarse sin perder la identidad profesional
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El entorno digital no permanece estático. Los canales modifican sus condiciones, los hábitos de consumo evolucionan y aparecen herramientas que pueden transformar determinadas tareas.
                </p>
                <p>
                  Adaptarse es necesario, pero seguir cada novedad no constituye una estrategia. Antes de incorporar una plataforma o una tecnología, debemos comprender qué problema puede resolver y qué coste operativo implica.
                </p>
                <p>
                  Una herramienta puede facilitar una tarea concreta, pero también añadir complejidad si no responde a una necesidad real. La automatización, por ejemplo, puede ayudar a organizar procesos repetitivos, aunque no sustituye el criterio necesario para seleccionar productos, revisar contenidos o mantener una comunicación responsable.
                </p>
                <p>
                  La adaptación también requiere disposición para actualizar conocimientos. Lo que aprendimos en una etapa puede necesitar ajustes cuando cambian las condiciones del mercado.
                </p>
                <p>
                  La identidad profesional funciona como un punto de referencia durante esos cambios. Nos permite evaluar nuevas posibilidades sin abandonar los principios que orientan nuestra actividad.
                </p>
                <p>
                  La evolución resulta más coherente cuando incorporamos novedades por su utilidad y no únicamente porque estén recibiendo atención.
                </p>
              </div>
            </section>

            {/* Apartado 12 — Cierre editorial */}
            <section
              id="sostenibilidad-crecimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La sostenibilidad como criterio de crecimiento
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad de afiliación puede generar muchas tareas, especialmente cuando intentamos mantener varios canales, desarrollar contenidos y atender diferentes oportunidades comerciales. Si no consideramos nuestra capacidad real, el proyecto puede terminar dependiendo de un ritmo difícil de sostener.
                </p>
                <p>
                  La sostenibilidad requiere organizar prioridades. Debemos identificar qué actividades aportan valor, cuáles consumen recursos sin una contribución clara y qué procesos pueden simplificarse.
                </p>
                <p>
                  También implica establecer expectativas razonables. No todas las acciones producen resultados inmediatos y no todas las etapas del proyecto necesitan el mismo nivel de actividad. La continuidad depende, en buena medida, de evitar decisiones impulsivas que obliguen a cambiar constantemente de dirección.
                </p>
                <p>
                  El crecimiento debe evaluarse por la calidad de la estructura que estamos desarrollando, no solamente por el número de productos promocionados o los canales abiertos. Una actividad mejor organizada puede ofrecer una base más sólida que otra que crece rápidamente sin criterios definidos.
                </p>
                <p>
                  La experiencia profesional se construye mediante decisiones acumuladas. Aprender a seleccionar, comunicar, revisar y corregir permite desarrollar una actividad que no depende exclusivamente de una oportunidad puntual.
                </p>
                <p>
                  El marketing de afiliados puede convertirse así en un proyecto con identidad y continuidad. No porque exista una fórmula capaz de eliminar la incertidumbre, sino porque hemos desarrollado criterios para actuar con mayor responsabilidad y comprender mejor las consecuencias de nuestras decisiones.
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

export default TipsAffiliateMarketingView;
