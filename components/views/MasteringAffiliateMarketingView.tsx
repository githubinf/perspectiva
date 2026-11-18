import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface MasteringAffiliateMarketingViewProps {
  book?: BookItem;
}

export const DOMINANDO_AFILIADOS_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'afiliacion-actividad-empresarial',
    label: 'La afiliación como actividad empresarial',
  },
  {
    id: 'criterio-comercial-recomendacion',
    label: 'El criterio comercial detrás de cada recomendación',
  },
  {
    id: 'identidad-reconocible-mercado',
    label: 'Construir una identidad reconocible en el mercado',
  },
  {
    id: 'arquitectura-actividad-digital',
    label: 'La arquitectura de una actividad digital',
  },
  {
    id: 'economia-comisiones-viabilidad',
    label: 'La economía de las comisiones y la viabilidad',
  },
  {
    id: 'experiencia-consumidor-decision',
    label: 'La experiencia del consumidor y la decisión',
  },
  {
    id: 'informacion-herramienta-direccion',
    label: 'La información como herramienta de dirección',
  },
  {
    id: 'relaciones-comerciales-continuidad',
    label: 'Relaciones comerciales que necesitan continuidad',
  },
  {
    id: 'confianza-patrimonio-proyecto',
    label: 'La confianza como patrimonio del proyecto',
  },
  {
    id: 'adaptacion-entorno-tecnologico',
    label: 'Adaptarse a un entorno tecnológico cambiante',
  },
  {
    id: 'riesgos-gestion-sin-estructura',
    label: 'Los riesgos de gestionar sin una estructura',
  },
  {
    id: 'evolucionar-sin-perder-sentido',
    label: 'Evolucionar sin perder el sentido del negocio',
  },
];

const MasteringAffiliateMarketingView: React.FC<MasteringAffiliateMarketingViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'dominando-el-marketing-de-afiliados') ||
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
              label: 'Dominando el Marketing de Afiliados',
              href: currentBook.path || '/dominando-el-marketing-de-afiliados/',
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
              Dominando el Marketing de Afiliados
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Y cómo construir un negocio rentable desde cero con uno de los mejores sistemas de monetización
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una perspectiva estratégica sobre cómo desarrollar una actividad de afiliación con criterio comercial, construir relaciones sostenibles y convertir las recomendaciones digitales en un modelo de negocio organizado.
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
                El marketing de afiliados suele presentarse como una forma de participar en el comercio digital sin necesidad de desarrollar productos propios. Sin embargo, esa descripción apenas explica una parte de su funcionamiento. Detrás de cada recomendación que puede generar una comisión existe una actividad que necesita dirección, planificación y una comprensión precisa de las relaciones comerciales que la hacen posible.
              </p>
              <p>
                Participar en un programa de afiliados no equivale automáticamente a tener un negocio. La diferencia aparece cuando dejamos de considerar cada enlace como una oportunidad aislada y comenzamos a construir una actividad con objetivos definidos, una propuesta reconocible y procedimientos que permitan evaluar lo que sucede. La elección de productos, la relación con los anunciantes, la calidad de la comunicación y la capacidad para interpretar los resultados forman parte de un mismo sistema.
              </p>
              <p>
                También debemos comprender que este mercado no permanece inmóvil. Las plataformas cambian sus condiciones, los consumidores modifican sus hábitos y los canales digitales evolucionan. Una estrategia que funcionaba en determinado momento puede perder eficacia cuando cambian las circunstancias que la sostenían. Por eso, desarrollar una actividad de afiliación requiere algo más que conocer herramientas: exige aprender a tomar decisiones y revisar continuamente su utilidad.
              </p>
              <p>
                En esta ficha abordaremos el marketing de afiliados desde esa perspectiva empresarial. Nos centraremos en los criterios que permiten organizarlo, en la relación entre las distintas partes que intervienen y en las decisiones que influyen en su continuidad. El propósito es comprender qué significa construir una actividad de afiliación con estructura, responsabilidad y capacidad de adaptación, sin confundir las posibilidades del modelo con resultados garantizados.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={DOMINANDO_AFILIADOS_INDEX_ITEMS}
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
              id="afiliacion-actividad-empresarial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La afiliación como actividad empresarial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El primer cambio de perspectiva consiste en dejar de contemplar la afiliación como una sucesión de promociones. Cuando una persona participa en diferentes programas, recomienda productos y recibe comisiones, está interviniendo en una actividad comercial en la que existen responsabilidades, dependencias y objetivos. Si no reconoce esas relaciones, corre el riesgo de trabajar de manera desordenada, sin saber qué decisiones contribuyen realmente al desarrollo de su proyecto.
                </p>
                <p>
                  Un negocio de afiliación necesita una orientación que permita distinguir las oportunidades interesantes de aquellas que solamente parecen atractivas a primera vista. No basta con encontrar una comisión elevada o una plataforma conocida. También debemos considerar si la oferta tiene sentido dentro del mercado al que nos dirigimos, si podemos comunicarla correctamente y si existe una relación coherente entre lo que recomendamos y las necesidades de las personas.
                </p>
                <p>
                  Esta visión empresarial ayuda a establecer prioridades. En lugar de perseguir cada novedad, podemos concentrar los recursos en actividades que respondan a una dirección concreta. El objetivo no consiste en promocionar el mayor número posible de productos, sino en desarrollar una estructura que tenga sentido y pueda evaluarse con criterios objetivos.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="criterio-comercial-recomendacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El criterio comercial detrás de cada recomendación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una recomendación comercial implica una elección. Aunque el producto pertenezca a otra empresa, quien lo promociona decide asociar su comunicación con esa oferta y asumir una responsabilidad ante su audiencia. Por eso, seleccionar qué productos o servicios incorporar a una actividad de afiliación es una decisión estratégica, no una simple búsqueda de oportunidades de comisión.
                </p>
                <p>
                  La evaluación debe considerar la utilidad de la oferta, las características del público, la reputación del proveedor y las condiciones del programa. También resulta importante comprender qué sucede después de que una persona utiliza nuestro enlace: cómo se registra la operación, qué condiciones determinan una comisión válida y qué limitaciones pueden afectar a la relación comercial.
                </p>
                <p>
                  Este análisis permite evitar una práctica habitual: construir una actividad alrededor de ofertas que no guardan relación entre sí. Cuando cada recomendación responde a un criterio diferente, el proyecto pierde coherencia y resulta más difícil explicar qué valor aporta. Una selección razonada, en cambio, contribuye a que la actividad tenga una identidad y una orientación reconocibles.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="identidad-reconocible-mercado"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir una identidad reconocible en el mercado
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En un entorno donde numerosas personas promocionan productos similares, la identidad del proyecto adquiere una importancia especial. No se trata únicamente de disponer de un nombre, una página o una presencia en redes sociales. La identidad también está formada por el tipo de información que ofrecemos, los criterios que utilizamos y la manera en que nos relacionamos con quienes reciben nuestras recomendaciones.
                </p>
                <p>
                  Una actividad de afiliación puede desarrollar una posición propia cuando ofrece una perspectiva consistente. Esa posición no depende necesariamente de ser el primero en hablar de un producto, sino de aportar contexto, facilitar comparaciones útiles y explicar por qué una alternativa podría responder a determinadas necesidades.
                </p>
                <p>
                  La coherencia entre comunicación y oferta también influye en la percepción del proyecto. Si el contenido transmite una orientación y las recomendaciones comerciales responden a otra completamente distinta, se genera una contradicción que debilita la credibilidad. Por el contrario, una identidad bien definida ayuda a mantener una relación comprensible entre lo que comunicamos y las oportunidades que presentamos.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="arquitectura-actividad-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La arquitectura de una actividad digital
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad de afiliación no tiene por qué depender de una única plataforma, pero sí necesita una organización que permita comprender cómo se conectan sus diferentes elementos. La presencia digital, los canales de comunicación, las ofertas y los procedimientos de seguimiento deben responder a una estructura que facilite el trabajo cotidiano.
                </p>
                <p>
                  La arquitectura de un proyecto puede ser sencilla en sus primeras etapas. Lo importante es que cada elemento cumpla una función reconocible y que podamos identificar dónde se produce cada interacción. Una página informativa, un canal de comunicación o una herramienta de gestión no adquieren valor por su mera existencia, sino por la utilidad que aportan al conjunto.
                </p>
                <p>
                  Esta organización también permite reducir dependencias innecesarias. Cuando toda la actividad se concentra en un único canal externo, cualquier modificación de sus condiciones puede afectar considerablemente al proyecto. Comprender qué recursos controlamos directamente y cuáles dependen de terceros es fundamental para tomar decisiones más prudentes.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="economia-comisiones-viabilidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La economía de las comisiones y la viabilidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las comisiones representan el mecanismo económico que permite remunerar la intermediación comercial, pero su importe aislado no determina la viabilidad de una actividad. Para evaluar una oportunidad necesitamos comprender las condiciones que regulan el pago, la duración de las atribuciones, las posibles devoluciones y los criterios que utiliza cada programa para reconocer una operación.
                </p>
                <p>
                  También debemos distinguir entre ingresos registrados, comisiones pendientes y cantidades efectivamente recibidas. Estas diferencias son importantes porque una cifra visible dentro de una plataforma no siempre representa dinero disponible. La gestión responsable requiere prestar atención a los plazos, las condiciones y las variaciones que pueden producirse durante el proceso.
                </p>
                <p>
                  La rentabilidad depende además de los recursos empleados para generar resultados. El tiempo dedicado a producir contenido, mantener canales, analizar campañas o atender cuestiones operativas forma parte del coste real de la actividad. Una oportunidad que parece atractiva por su comisión puede dejar de serlo cuando consideramos el esfuerzo necesario para sostenerla.
                </p>
                <p>
                  Por eso, la evaluación económica debe realizarse desde una perspectiva amplia. Nos interesa comprender qué actividades aportan valor, cuáles consumen recursos sin una contribución suficiente y qué ajustes pueden mejorar la sostenibilidad del proyecto.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="experiencia-consumidor-decision"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La experiencia del consumidor y la decisión
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El funcionamiento del marketing de afiliados no termina cuando alguien encuentra una recomendación. Entre el primer contacto y una posible compra existe un proceso de evaluación en el que intervienen las expectativas, la información disponible, la confianza y las características de la oferta.
                </p>
                <p>
                  Comprender ese proceso permite mejorar la calidad de la comunicación. Una recomendación puede despertar interés, pero la persona necesita información suficiente para valorar si el producto responde a lo que busca. Las explicaciones ambiguas, las afirmaciones exageradas o la ausencia de contexto pueden generar expectativas equivocadas y perjudicar tanto al consumidor como a quien realiza la promoción.
                </p>
                <p>
                  La experiencia también depende de la continuidad entre los distintos puntos de contacto. Si una comunicación presenta determinadas características y la oferta conduce a una experiencia completamente diferente, se produce una ruptura que puede afectar a la decisión. La coherencia informativa debe mantenerse durante todo el recorrido.
                </p>
                <p>
                  Desde esta perspectiva, el trabajo del afiliado no consiste en forzar una compra. Consiste en facilitar una relación comprensible entre una necesidad y una alternativa comercial, respetando la capacidad de decisión de cada persona.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="informacion-herramienta-direccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La información como herramienta de dirección
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad digital produce información constantemente. Las visitas, las interacciones, los clics y las conversiones pueden aportar indicios sobre el comportamiento del público y el rendimiento de las acciones comerciales. Sin embargo, acumular cifras no equivale a comprender lo que está sucediendo.
                </p>
                <p>
                  La información adquiere utilidad cuando se interpreta dentro de un contexto. Un incremento de visitas puede parecer positivo, pero debemos preguntarnos si esas visitas corresponden al público que nos interesa y si contribuyen a los objetivos del proyecto. Del mismo modo, una campaña con muchas interacciones no necesariamente representa una oportunidad comercial valiosa.
                </p>
                <p>
                  La comparación entre periodos, canales y ofertas ayuda a identificar diferencias que merecen atención. También permite reconocer cuándo una modificación ha mejorado un resultado y cuándo simplemente ha coincidido con una variación externa.
                </p>
                <p>
                  La finalidad del análisis no es perseguir indicadores por sí mismos. Es utilizar la información para tomar decisiones mejor fundamentadas, detectar problemas y establecer prioridades. Cuando este hábito forma parte de la gestión cotidiana, el proyecto puede evolucionar a partir de evidencias y no únicamente de impresiones.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="relaciones-comerciales-continuidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Relaciones comerciales que necesitan continuidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los programas de afiliados establecen relaciones entre diferentes participantes. El anunciante proporciona una oferta, la plataforma o red puede intervenir en la administración y el afiliado desarrolla acciones para conectar esa oferta con posibles consumidores. Cada participante tiene condiciones y responsabilidades que deben comprenderse antes de establecer una colaboración.
                </p>
                <p>
                  Estas relaciones no deberían considerarse intercambios puntuales sin consecuencias posteriores. Las condiciones pueden cambiar, las campañas pueden finalizar y los responsables de los programas pueden modificar sus políticas. Mantener una actividad organizada implica revisar las comunicaciones recibidas, conocer las reglas aplicables y conservar información suficiente para gestionar las colaboraciones.
                </p>
                <p>
                  La continuidad también depende de la calidad de las interacciones. Una relación comercial clara facilita resolver incidencias, comprender modificaciones y evaluar nuevas oportunidades. Por el contrario, trabajar sin revisar las condiciones puede generar conflictos evitables o mantener promociones que ya no resultan adecuadas.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="confianza-patrimonio-proyecto"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza como patrimonio del proyecto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La confianza no es un elemento decorativo de la comunicación comercial. Es una condición que influye en la manera en que las personas interpretan nuestras recomendaciones y deciden si desean seguir prestando atención al proyecto.
                </p>
                <p>
                  Para construirla, debemos procurar que la información sea comprensible y que las relaciones comerciales se presenten con transparencia. Cuando existe una remuneración por una recomendación, las personas deben poder reconocer esa circunstancia. También es importante no atribuir a un producto características que no se hayan comprobado ni presentar experiencias particulares como resultados universales.
                </p>
                <p>
                  La protección de los datos personales forma parte de esa responsabilidad. La recopilación, el almacenamiento y el tratamiento de información deben realizarse con atención a las obligaciones aplicables y a las expectativas legítimas de los usuarios.
                </p>
                <p>
                  La confianza se desarrolla mediante decisiones repetidas. Una comunicación honesta, el respeto por la privacidad y la coherencia entre las recomendaciones y la realidad de las ofertas contribuyen a construir una reputación que no depende de una campaña concreta.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="adaptacion-entorno-tecnologico"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Adaptarse a un entorno tecnológico cambiante
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las herramientas digitales modifican la forma de investigar, comunicar y gestionar una actividad de afiliación. Nuevas plataformas, sistemas de análisis y soluciones de automatización pueden facilitar tareas que antes requerían más tiempo. Sin embargo, incorporar tecnología sin una necesidad definida también puede aumentar la complejidad.
                </p>
                <p>
                  La decisión de utilizar una herramienta debe partir de un problema real. Puede resultar útil para organizar información, mejorar un procedimiento o facilitar el seguimiento de determinadas actividades. Lo importante es evaluar si aporta una ventaja concreta y si su mantenimiento resulta razonable.
                </p>
                <p>
                  También debemos reconocer que las plataformas externas tienen sus propias reglas. Sus condiciones de uso, políticas comerciales y mecanismos de atribución pueden cambiar. Por tanto, una estrategia responsable necesita capacidad para revisar los recursos utilizados y adaptar los procedimientos cuando las circunstancias lo exijan.
                </p>
                <p>
                  La tecnología puede ampliar las posibilidades de una actividad, pero no sustituye el criterio comercial. La selección de ofertas, la comprensión del público y la evaluación de resultados continúan dependiendo de decisiones humanas.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="riesgos-gestion-sin-estructura"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Los riesgos de gestionar sin una estructura
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando una actividad de afiliación crece sin una organización definida, aparecen problemas que pueden pasar inadvertidos durante las primeras etapas. Se acumulan herramientas, se mantienen promociones que han perdido vigencia y se invierte tiempo en tareas cuyo valor no está claro. El proyecto puede parecer activo, pero su funcionamiento resulta cada vez más difícil de comprender.
                </p>
                <p>
                  La falta de control también afecta a la capacidad de responder ante cambios externos. Una cuenta suspendida, una modificación de las condiciones de un programa o una pérdida de acceso a un canal pueden tener consecuencias importantes cuando no existen alternativas razonables.
                </p>
                <p>
                  A esto se suman los riesgos derivados de una comunicación poco transparente, el tratamiento inadecuado de datos o el desconocimiento de las obligaciones aplicables. No son cuestiones secundarias: pueden afectar a la reputación, a las relaciones comerciales y a la continuidad de la actividad.
                </p>
                <p>
                  Una estructura bien pensada no elimina todos los riesgos, pero ayuda a identificarlos antes y a responder con mayor orden. La planificación, la documentación y la revisión periódica permiten trabajar con una perspectiva más realista.
                </p>
              </div>
            </section>

            {/* Apartado 12 — Cierre editorial */}
            <section
              id="evolucionar-sin-perder-sentido"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Evolucionar sin perder el sentido del negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Desarrollar una actividad de afiliación supone tomar decisiones a lo largo del tiempo. Algunas ofertas dejan de ser adecuadas, determinados canales pierden eficacia y aparecen nuevas oportunidades que merecen evaluación. La evolución no consiste en incorporar cada novedad, sino en distinguir qué cambios contribuyen realmente a la dirección del proyecto.
                </p>
                <p>
                  La diversificación puede ayudar a reducir determinadas dependencias, siempre que no se convierta en una acumulación desordenada de programas y promociones. Ampliar el alcance comercial requiere comprobar que los nuevos elementos mantienen una relación coherente con la identidad, la capacidad operativa y las necesidades del público.
                </p>
                <p>
                  También es necesario revisar los objetivos. Las prioridades de una actividad que comienza no son necesariamente las mismas que las de un proyecto con experiencia y procedimientos establecidos. Reconocer esa diferencia permite ajustar los recursos y evitar que el crecimiento aparente se convierta en una fuente de complejidad innecesaria.
                </p>
                <p>
                  El marketing de afiliados ofrece un modelo de participación en el comercio digital, pero su desarrollo depende de cómo se gestione. Comprender las relaciones comerciales, actuar con transparencia, interpretar la información y mantener una estructura adaptable son aspectos que ayudan a construir una actividad con mayor consistencia.
                </p>
                <p>
                  La cuestión central no es cuántos productos podemos promocionar ni cuántos canales podemos utilizar. Es si somos capaces de organizar esos recursos alrededor de una propuesta clara, una gestión responsable y una dirección que tenga sentido a largo plazo.
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

export default MasteringAffiliateMarketingView;
