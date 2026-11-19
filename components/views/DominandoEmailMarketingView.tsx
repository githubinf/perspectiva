import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface DominandoEmailMarketingViewProps {
  book?: BookItem;
}

export const DOMINANDO_EMAIL_MARKETING_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'comunicacion-directa-valor',
    label: 'La comunicación directa tiene un valor diferente',
  },
  {
    id: 'espacio-no-depende-atencion',
    label: 'Un espacio que no depende de la atención inmediata',
  },
  {
    id: 'relacion-antes-venta',
    label: 'La relación comienza antes de una venta',
  },
  {
    id: 'audiencia-conocer-mejor',
    label: 'Una audiencia que podemos conocer mejor',
  },
  {
    id: 'tener-algo-que-decir',
    label: 'La importancia de tener algo que decir',
  },
  {
    id: 'presencia-e-interrupcion',
    label: 'El equilibrio entre presencia e interrupción',
  },
  {
    id: 'mensaje-forma-percepcion',
    label: 'Cada mensaje forma parte de una percepción',
  },
  {
    id: 'tiempo-ventaja-comunicacion',
    label: 'El tiempo como ventaja de la comunicación',
  },
  {
    id: 'relacion-facilita-decisiones',
    label: 'Cuando una relación facilita las decisiones',
  },
  {
    id: 'canal-diferentes-etapas',
    label: 'Un canal que acompaña diferentes etapas',
  },
  {
    id: 'independencia-digital',
    label: 'El valor de la independencia digital',
  },
  {
    id: 'comunicacion-patrimonio-negocio',
    label: 'La comunicación como patrimonio del negocio',
  },
];

const OFFICIAL_BOOK_TITLE = 'Dominando el Arte del Email Marketing';

const DominandoEmailMarketingView: React.FC<DominandoEmailMarketingViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'dominando-el-arte-del-email-marketing') ||
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
              href: currentBook.path || '/dominando-el-arte-del-email-marketing/',
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
              Estrategias efectivas para maximizar tu alcance y crecimiento en el mercado digital actual.
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
                En los negocios digitales, conseguir que alguien conozca nuestra propuesta es solamente una parte del proceso. También necesitamos encontrar formas de mantener el contacto, compartir información relevante y permitir que esa relación evolucione sin depender de que ambas partes coincidan constantemente en una misma plataforma. La atención puede surgir en diferentes lugares, pero disponer de un medio que facilite la continuidad de la comunicación cambia considerablemente la manera en que podemos desarrollar nuestro proyecto.
              </p>
              <p>
                El correo electrónico representa una posibilidad especialmente interesante porque nos permite establecer un espacio de comunicación que no está condicionado exclusivamente por la visibilidad que otros sistemas deciden concedernos. Cuando una persona acepta recibir nuestros mensajes, se abre una oportunidad para mantener un vínculo que puede desarrollarse a lo largo del tiempo, siempre que exista una razón válida para continuar esa conversación.
              </p>
              <p>
                Sin embargo, disponer de una dirección de correo no significa que hayamos construido una relación. La comunicación necesita sentido, contexto y consideración por quien se encuentra al otro lado. No basta con aprovechar un canal disponible; debemos comprender qué lugar ocupa dentro de nuestro negocio y cómo podemos utilizarlo sin convertir cada contacto en una interrupción.
              </p>
              <p>
                El verdadero valor del email marketing no reside únicamente en enviar mensajes, sino en desarrollar una comunicación que acompañe, informe, aporte perspectiva y permita que las personas conozcan mejor aquello que representamos. Cuando entendemos esta diferencia, el correo electrónico deja de ser una herramienta circunstancial y comienza a formar parte de la estructura sobre la que podemos construir relaciones digitales más consistentes.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={DOMINANDO_EMAIL_MARKETING_INDEX_ITEMS}
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
              id="comunicacion-directa-valor"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La comunicación directa tiene un valor diferente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  En Internet podemos encontrarnos con numerosos espacios en los que las marcas intentan llamar la atención. Algunas personas descubren un negocio mediante una búsqueda, otras llegan a través de una recomendación y muchas conocen nuevas propuestas mientras navegan por plataformas digitales. Estos puntos de contacto pueden ser importantes, pero no todos nos ofrecen las mismas posibilidades para continuar una conversación.
                </p>
                <p>
                  El correo electrónico introduce una característica particular: nos permite dirigirnos a una persona a través de un medio que forma parte de su entorno habitual. No necesitamos que vuelva a encontrar una publicación ni que recuerde dónde conoció nuestra marca. Podemos establecer una comunicación que tenga continuidad y que responda a una relación previamente aceptada.
                </p>
                <p>
                  Esta posibilidad modifica la forma en que concebimos el contacto comercial. En lugar de concentrarnos únicamente en conseguir nuevas visitas, podemos valorar también la importancia de conservar una conexión con quienes ya han mostrado interés. La atención que alguien nos ha concedido anteriormente puede representar una oportunidad para desarrollar una relación más significativa.
                </p>
                <p>
                  No se trata de asumir que cualquier mensaje será bien recibido, sino de reconocer que la comunicación directa posee un potencial que debemos utilizar con responsabilidad.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="espacio-no-depende-atencion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Un espacio que no depende de la atención inmediata
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Gran parte de la actividad digital se desarrolla en entornos donde la información aparece y desaparece continuamente. Las novedades se suceden, los contenidos compiten por visibilidad y las personas pueden perder fácilmente el contacto con una propuesta que, en otro momento, les había resultado interesante.
                </p>
                <p>
                  El email nos ofrece una dinámica diferente. Un mensaje puede permanecer en la bandeja de entrada hasta que su destinatario decida consultarlo. Esta característica no garantiza que sea leído, pero introduce una posibilidad de contacto que no depende necesariamente del instante en que se publica algo.
                </p>
                <p>
                  Para un negocio, esta diferencia puede resultar significativa. Podemos desarrollar una presencia que no esté limitada a la necesidad de generar atención inmediata cada vez que queremos comunicar una novedad. La relación puede avanzar a un ritmo más natural, sin exigir que todas las interacciones ocurran simultáneamente.
                </p>
                <p>
                  Comprender esta característica nos permite valorar el correo electrónico no solamente por su capacidad de distribución, sino también por las condiciones que ofrece para desarrollar una comunicación menos dependiente de la inmediatez.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="relacion-antes-venta"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación comienza antes de una venta
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando alguien conoce nuestro negocio, puede encontrarse en una etapa muy diferente de aquella en la que finalmente decide adquirir un producto. Quizá esté explorando alternativas, intentando comprender un problema o simplemente reuniendo información que le ayude a tomar una decisión futura.
                </p>
                <p>
                  Si interpretamos cada nuevo contacto como una oportunidad de venta inmediata, podemos ignorar las circunstancias reales de esa persona. No todos están preparados para comprar, ni todos necesitan la misma información en el mismo momento.
                </p>
                <p>
                  La comunicación por correo electrónico nos permite reconocer que existe un recorrido entre el primer interés y una posible decisión. Durante ese tiempo, podemos contribuir a que la persona comprenda mejor una situación, conozca nuestra manera de trabajar y disponga de elementos que le permitan valorar nuestra propuesta con mayor criterio.
                </p>
                <p>
                  Esta perspectiva cambia nuestras prioridades. En lugar de buscar resultados inmediatos en cada interacción, podemos considerar el valor que tiene acompañar un proceso de decisión. Una relación bien desarrollada puede ser más importante que una respuesta comercial obtenida sin suficiente contexto.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="audiencia-conocer-mejor"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una audiencia que podemos conocer mejor
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una audiencia no es simplemente una cantidad de direcciones almacenadas. Está formada por personas con circunstancias, intereses, inquietudes y expectativas diferentes. Si tratamos a todos nuestros contactos como si fueran exactamente iguales, podemos terminar ofreciendo una comunicación poco relevante, aunque nuestros mensajes estén correctamente redactados.
                </p>
                <p>
                  Con el tiempo, la interacción nos permite observar qué temas despiertan interés, cuáles generan preguntas y qué tipo de información resulta más útil. Estas señales pueden ayudarnos a comprender mejor el entorno en el que se desarrolla nuestro negocio.
                </p>
                <p>
                  No debemos convertir cada comportamiento en una conclusión definitiva. Una persona puede no abrir un mensaje porque se encuentra ocupada, puede consultar una información sin hacer clic o puede interesarse por un tema que no representa necesariamente su intención de compra. Los datos necesitan contexto para ser interpretados con sensatez.
                </p>
                <p>
                  El conocimiento que obtenemos de nuestra audiencia puede ayudarnos a tomar decisiones más informadas, siempre que lo utilicemos para mejorar la experiencia de comunicación y no para asumir que conocemos todas las necesidades de quienes nos siguen.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="tener-algo-que-decir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La importancia de tener algo que decir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Mantener una comunicación periódica puede convertirse en una tarea difícil cuando no tenemos una idea clara de su propósito. La obligación de enviar mensajes con determinada frecuencia puede llevarnos a producir contenido que no aporta demasiado y que termina debilitando el interés de nuestra audiencia.
                </p>
                <p>
                  Antes de pensar en el próximo envío, conviene considerar qué motivo justifica establecer contacto. Puede tratarse de una información que facilite una decisión, una experiencia que merezca ser compartida, una novedad relevante, una explicación que ayude a comprender algo o una propuesta que realmente guarde relación con los intereses del destinatario.
                </p>
                <p>
                  Esta reflexión también nos ayuda a reconocer que no todos los mensajes necesitan la misma finalidad. Algunos pueden proporcionar conocimiento, otros acercar una idea, otros presentar una oportunidad y otros simplemente mantener una comunicación coherente con nuestra identidad.
                </p>
                <p>
                  Cuando tenemos un propósito definido, resulta más sencillo evitar mensajes que únicamente ocupan espacio. La calidad de la relación no depende de nuestra capacidad para llenar una bandeja de entrada, sino de que las personas encuentren motivos razonables para continuar prestándonos atención.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="presencia-e-interrupcion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El equilibrio entre presencia e interrupción
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La posibilidad de comunicarnos directamente con alguien también implica una responsabilidad. Cada mensaje ocupa una parte de su tiempo y exige una decisión, aunque sea tan sencilla como abrirlo, leerlo o descartarlo.
                </p>
                <p>
                  Si nuestra presencia se vuelve excesiva, podemos generar una sensación de saturación. Si desaparecemos durante demasiado tiempo sin una razón, quizá la relación pierda continuidad. Encontrar un equilibrio requiere observar las circunstancias, el tipo de comunicación que desarrollamos y las expectativas que hemos creado.
                </p>
                <p>
                  La frecuencia no debería establecerse exclusivamente a partir de las necesidades internas del negocio. También debemos considerar cómo puede afectar a quienes reciben nuestros mensajes. Una comunicación que resulta razonable para nosotros puede convertirse en una carga para otra persona si no existe suficiente valor o si su ritmo no es apropiado.
                </p>
                <p>
                  Respetar el espacio de nuestra audiencia significa aceptar que la atención no nos pertenece. La relación puede mantenerse saludable cuando permitimos que las personas decidan cómo interactuar con nosotros y evitamos convertir el contacto en una exigencia permanente.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="mensaje-forma-percepcion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cada mensaje forma parte de una percepción
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La imagen que una persona desarrolla sobre un negocio no se forma únicamente cuando visita nuestra página web o examina sus productos. También puede construirse a partir de la experiencia que tiene con cada mensaje que recibe.
                </p>
                <p>
                  El tono utilizado, la claridad de las explicaciones, la manera en que presentamos una información y la coherencia entre nuestras palabras y nuestras acciones contribuyen a crear una percepción. Incluso un mensaje aparentemente sencillo puede transmitir profesionalidad, descuido, cercanía, confusión, confianza o desconfianza.
                </p>
                <p>
                  Por eso, la comunicación por correo electrónico merece una atención que vaya más allá de su aspecto comercial. Si utilizamos este medio para relacionarnos con nuestra audiencia, debemos procurar que la experiencia sea compatible con la identidad que queremos desarrollar.
                </p>
                <p>
                  No necesitamos convertir todos nuestros mensajes en piezas sofisticadas. Una comunicación sencilla puede resultar mucho más valiosa cuando es clara, honesta y apropiada. Lo importante es que exista una relación natural entre aquello que decimos, la forma en que lo expresamos y el compromiso que asumimos con las personas.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="tiempo-ventaja-comunicacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El tiempo como ventaja de la comunicación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una relación digital no necesita producir resultados visibles en cada momento para tener valor. En ocasiones, la utilidad de una comunicación se manifiesta mucho después de que alguien haya recibido un mensaje.
                </p>
                <p>
                  Una persona puede conocer una propuesta hoy, comprenderla mejor semanas después y considerar una compra cuando sus circunstancias sean diferentes. El contacto previo puede contribuir a que nuestra marca no resulte completamente desconocida cuando llega ese momento.
                </p>
                <p>
                  Esta perspectiva nos invita a pensar en horizontes más amplios. No todas las acciones deben evaluarse únicamente por lo que producen durante las primeras horas o los primeros días. Algunas contribuyen a formar familiaridad, comprensión y confianza, elementos que pueden influir en decisiones posteriores.
                </p>
                <p>
                  El tiempo también nos permite desarrollar una comunicación más madura. Podemos revisar nuestras ideas, aprender de las interacciones anteriores y comprender mejor qué tipo de relación estamos construyendo. Cuando dejamos de exigir resultados instantáneos, podemos valorar los avances que se producen de manera gradual.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="relacion-facilita-decisiones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cuando una relación facilita las decisiones
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Tomar una decisión de compra no siempre es un proceso sencillo. En determinados casos, las personas necesitan comparar opciones, comprender características, evaluar riesgos o determinar si una solución realmente se ajusta a sus necesidades.
                </p>
                <p>
                  Una comunicación bien planteada puede ayudar a reducir parte de esa incertidumbre. No necesitamos presionar constantemente para conseguir una respuesta, sino procurar que la información que compartimos permita valorar nuestra propuesta con mayor claridad.
                </p>
                <p>
                  Esto resulta especialmente importante cuando ofrecemos productos digitales, servicios especializados o soluciones que requieren cierto nivel de comprensión antes de adquirirlas. La familiaridad con nuestra marca y el conocimiento que hemos compartido previamente pueden facilitar que la persona se sienta más preparada para evaluar lo que ofrecemos.
                </p>
                <p>
                  Sin embargo, una relación no elimina las dudas ni garantiza una venta. Su función es contribuir a una experiencia de decisión más informada, en la que el destinatario pueda reconocer tanto las ventajas como las limitaciones de aquello que está considerando.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="canal-diferentes-etapas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Un canal que acompaña diferentes etapas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las necesidades de una persona pueden cambiar a medida que conoce nuestro negocio. Al principio quizá necesite comprender quiénes somos, posteriormente puede interesarse por determinados temas y, más adelante, estar preparada para valorar una solución concreta.
                </p>
                <p>
                  Esta evolución nos permite entender que la comunicación no debería permanecer siempre en el mismo nivel. Un contacto inicial puede tener un propósito diferente de una conversación dirigida a alguien que ya conoce nuestra propuesta o ha tenido una experiencia previa con nuestros productos.
                </p>
                <p>
                  Reconocer estas diferencias nos ayuda a evitar mensajes fuera de contexto. No tiene demasiado sentido presentar información avanzada a alguien que todavía necesita comprender los conceptos básicos, del mismo modo que podemos desaprovechar una relación consolidada si únicamente compartimos contenidos demasiado elementales.
                </p>
                <p>
                  El correo electrónico puede acompañar estas distintas etapas, permitiéndonos mantener una relación que se adapta a las circunstancias. Para ello, necesitamos comprender que las personas evolucionan, que sus intereses cambian y que la comunicación debe conservar cierta flexibilidad.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="independencia-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de la independencia digital
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Desarrollar un negocio en Internet implica utilizar plataformas, servicios y herramientas que facilitan nuestra actividad. Sin embargo, depender exclusivamente de espacios externos puede limitar nuestras posibilidades de mantener una relación estable con quienes se interesan por lo que hacemos.
                </p>
                <p>
                  Las condiciones de una plataforma pueden cambiar, determinadas funciones pueden perder visibilidad y las formas de distribuir contenido pueden evolucionar. Aunque estos entornos continúan siendo importantes para descubrir nuevos públicos, no siempre nos ofrecen el mismo grado de control sobre la continuidad de nuestras relaciones.
                </p>
                <p>
                  Disponer de un canal de comunicación propio nos permite reducir parte de esa dependencia. Podemos mantener una conexión con nuestra audiencia sin necesitar que cada contacto se produzca nuevamente a través de un intermediario que controla la distribución.
                </p>
                <p>
                  Esta independencia no significa que el correo electrónico sea completamente autónomo. También depende de proveedores, sistemas de entrega, políticas de privacidad y condiciones técnicas. Su verdadero valor está en diversificar nuestros medios de contacto y evitar que todo el desarrollo de nuestro negocio dependa de una única fuente de visibilidad.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="comunicacion-patrimonio-negocio"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La comunicación como patrimonio del negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando desarrollamos una relación con nuestra audiencia a lo largo del tiempo, estamos construyendo algo que puede tener valor más allá de una campaña específica. El conocimiento sobre nuestros contactos, las experiencias compartidas, la familiaridad con nuestra propuesta y la continuidad de la comunicación forman parte de una estructura que podemos seguir desarrollando.
                </p>
                <p>
                  Este valor no debe confundirse con la simple acumulación de direcciones de correo electrónico. Una lista sin relación, sin consentimiento adecuado o sin interés real puede tener escasa utilidad y generar problemas. Lo que verdaderamente importa es la calidad del vínculo, la relevancia de nuestra comunicación y la confianza que somos capaces de preservar.
                </p>
                <p>
                  La relación que desarrollamos con nuestros contactos también puede ayudarnos a comprender mejor nuestro negocio. Las preguntas que recibimos, las inquietudes que aparecen y las necesidades que identificamos pueden aportar información útil para mejorar nuestros productos, nuestras explicaciones y nuestras decisiones.
                </p>
                <p>
                  Con el tiempo, el correo electrónico puede convertirse en una parte importante de nuestra infraestructura digital. No porque garantice resultados, sino porque nos ofrece un espacio para cultivar relaciones que no dependen exclusivamente de una visita, una publicación o una transacción.
                </p>
                <p>
                  Cuando comprendemos el valor de esa continuidad, el email marketing adquiere una dimensión diferente. Deja de ser únicamente un medio para enviar mensajes y se convierte en una forma de mantener una conexión, desarrollar confianza y fortalecer la presencia de nuestro negocio en la vida digital de las personas.
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

export default DominandoEmailMarketingView;
