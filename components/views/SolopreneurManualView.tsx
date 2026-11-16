import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface SolopreneurManualViewProps {
  book?: BookItem;
}

export const SOLOPRENEUR_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'solopreneur-trabajar-vs-dirigir',
    label: 'No confundamos trabajar por cuenta propia con dirigir un negocio',
  },
  {
    id: 'solopreneur-propietario',
    label: 'De profesional independiente a propietario de una actividad económica',
  },
  {
    id: 'solopreneur-oferta',
    label: 'La oferta es el punto de partida de un negocio claro',
  },
  {
    id: 'solopreneur-organizacion',
    label: 'Una estructura pequeña también necesita organización',
  },
  {
    id: 'solopreneur-dinero',
    label: 'El dinero debe orientar las decisiones, no convertirse en una incógnita',
  },
  {
    id: 'solopreneur-clientes',
    label: 'Conseguir clientes exige iniciativa y conversaciones reales',
  },
  {
    id: 'solopreneur-ventas',
    label: 'Vender sin convertir cada conversación en una presión',
  },
  {
    id: 'solopreneur-relacion-cliente',
    label: 'El trabajo no termina cuando el cliente paga',
  },
  {
    id: 'solopreneur-crecimiento',
    label: 'Crecer sin perder el control de nuestra actividad',
  },
  {
    id: 'solopreneur-energia',
    label: 'La energía también forma parte de la estructura del negocio',
  },
  {
    id: 'solopreneur-lectura',
    label: 'Una lectura para construir un negocio que tenga sentido',
  },
];

const SolopreneurManualView: React.FC<SolopreneurManualViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'el-manual-del-solopreneur-moderno') ||
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
      {/* Breadcrumbs */}
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
              label: currentBook.title,
              href: currentBook.path || '/el-manual-del-solopreneur-moderno/',
            },
          ]}
        />

        {/* ============================================================ */}
        {/* BLOQUE 1 — ZONA SUPERIOR COMERCIAL ORIGINAL CONSERVADA       */}
        {/* Portada oficial (Izq) + Opciones de compra Amazon (Der)      */}
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
        {/* Presentación del libro + Primera sección introductoria */}
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-10">
            <div className="mb-4">
              <Link
                href={parentCategory?.path || '/mindset/'}
                className="inline-block text-[11.5px] uppercase tracking-wider font-semibold text-[#174532] bg-[#dae7df]/30 border border-[#dae7df] px-3.5 py-1.5 rounded-full hover:bg-[#4db380] hover:text-white transition-all"
              >
                Ruta {parentCategory?.category || 'Mindset'}
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              El Manual del Solopreneur Moderno
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-3 font-serif italic leading-relaxed max-w-3xl">
              Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones
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
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                Tener una habilidad que otras personas necesitan puede ser el comienzo de una actividad profesional independiente. Conseguir clientes puede permitirnos trabajar por cuenta propia. Pero ninguna de esas dos cosas garantiza que hayamos construido un negocio.
              </p>
              <p>
                Existe una diferencia importante entre vivir de los encargos que conseguimos y dirigir una actividad económica que tenga una estructura, una dirección y unas condiciones de funcionamiento sostenibles. Cuando todas las decisiones, tareas y responsabilidades dependen de una sola persona, esa diferencia deja de ser teórica: se convierte en una cuestión cotidiana.
              </p>
              <p>
                El solopreneur no necesita reproducir la estructura de una empresa tradicional a pequeña escala. Necesita aprender a organizar su trabajo como propietario de un negocio, no simplemente como alguien que ejecuta tareas para otros.
              </p>
              <p>
                Este libro aborda precisamente esa transición. Su planteamiento gira alrededor de una cuestión fundamental: cómo construir una actividad independiente que pueda funcionar sin depender de una organización compleja ni de la incorporación constante de otras personas.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (EXACTAMENTE DESPUÉS DE LA INTRO)       */}
        {/* ============================================================ */}
        <CategoryIndex
          items={SOLOPRENEUR_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO PRINCIPAL (11 APARTADOS H2 + 2 H3)       */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="solopreneur-trabajar-vs-dirigir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                No confundamos trabajar por cuenta propia con dirigir un negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Trabajar de manera independiente ofrece autonomía, pero también concentra responsabilidades. Quien trabaja solo suele encargarse de encontrar oportunidades, conversar con posibles clientes, definir lo que ofrece, entregar el trabajo, administrar los ingresos y resolver los problemas que aparecen durante el proceso.
                </p>
                <p>
                  Al principio, esta concentración de funciones puede parecer una consecuencia natural de emprender. Sin embargo, cuando no existe una forma clara de organizar esas responsabilidades, el negocio termina dependiendo de la improvisación.
                </p>
                <p>
                  El problema no consiste necesariamente en tener demasiadas tareas. Consiste en no distinguir cuáles hacen avanzar la actividad, cuáles son imprescindibles y cuáles consumen tiempo sin aportar suficiente valor.
                </p>
                <p>
                  Por eso, construir un negocio unipersonal requiere algo más que dominar una profesión o disponer de una herramienta digital. Hace falta desarrollar criterio para decidir, establecer prioridades y reconocer qué estructura necesita realmente nuestra actividad.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="solopreneur-propietario"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                De profesional independiente a propietario de una actividad económica
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las transformaciones más importantes consiste en cambiar la perspectiva desde la que tomamos decisiones.
                </p>
                <p>
                  Un profesional puede concentrarse en completar correctamente el trabajo que le han encargado. El propietario de un negocio debe considerar, además, cómo llega ese trabajo, qué condiciones permiten realizarlo, cuánto valor aporta y qué consecuencias tiene aceptarlo.
                </p>
                <p>
                  Esta diferencia influye en decisiones aparentemente pequeñas: qué servicios ofrecer, qué solicitudes rechazar, cuánto tiempo reservar para cada cliente y qué actividades deben tener prioridad.
                </p>
                <p>
                  No se trata de adoptar una mentalidad empresarial grandilocuente. Se trata de asumir que una actividad independiente necesita dirección.
                </p>
                <p>
                  Cuando no definimos esa dirección, las decisiones urgentes suelen imponerse sobre las importantes. Terminamos aceptando tareas poco convenientes, cambiando continuamente de prioridades y confundiendo estar ocupados con avanzar.
                </p>
                <p>
                  Una estructura unipersonal necesita reglas de funcionamiento que ayuden a evitar esa dispersión.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="solopreneur-oferta"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La oferta es el punto de partida de un negocio claro
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una habilidad profesional no se convierte automáticamente en una oferta comprensible.
                </p>
                <p>
                  Podemos saber diseñar, escribir, programar, asesorar o desarrollar contenidos y, aun así, tener dificultades para explicar qué problema resolvemos y qué resultado puede esperar un cliente.
                </p>
                <p>
                  Una oferta necesita conectar tres elementos: una necesidad reconocible, una solución concreta y un valor que el cliente pueda comprender.
                </p>
                <p>
                  Cuando estos elementos no están definidos, la comunicación se vuelve imprecisa. El profesional describe sus capacidades, enumera servicios y habla de herramientas, pero el posible comprador sigue sin entender por qué debería contratarlo.
                </p>
                <p>
                  La claridad también ayuda a establecer límites. No todo lo que un cliente solicita tiene que formar parte del servicio. Definir qué incluye una oferta y qué queda fuera permite evitar expectativas confusas y reduce las complicaciones durante la entrega.
                </p>
                <p>
                  El objetivo no es ofrecerlo todo. Es construir una propuesta que podamos explicar, entregar y sostener con los recursos disponibles.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="solopreneur-organizacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una estructura pequeña también necesita organización
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Trabajar sin empleados no significa trabajar sin procesos.
                </p>
                <p>
                  Cuando una misma persona se ocupa de distintas funciones, cada tarea puede convertirse en una interrupción de la siguiente. La atención salta de la comunicación con clientes a la administración, de la entrega al marketing y de la planificación a los asuntos urgentes.
                </p>
                <p>
                  Sin una organización mínima, el negocio puede consumir una cantidad desproporcionada de atención.
                </p>
                <p>
                  La solución no consiste en instalar numerosas aplicaciones ni en documentar cada movimiento. Consiste en identificar las actividades que se repiten y establecer una forma sencilla de realizarlas.
                </p>
                <p>
                  Un proceso útil reduce dudas, facilita la continuidad y evita tener que resolver desde cero una tarea que ya hemos realizado anteriormente.
                </p>
                <p>
                  También es importante saber cuándo un sistema deja de ayudar. Si mantener una herramienta o un procedimiento exige más esfuerzo del que ahorra, probablemente hemos añadido complejidad en lugar de eliminarla.
                </p>
                <p>
                  La organización debe estar al servicio del negocio, no convertirse en otro negocio que tengamos que administrar.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="solopreneur-dinero"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El dinero debe orientar las decisiones, no convertirse en una incógnita
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una actividad independiente puede parecer viable mientras entra dinero, pero eso no significa que conozcamos su situación económica.
                </p>
                <p>
                  Ingresos, gastos, disponibilidad y capacidad para afrontar periodos de menor actividad son cuestiones distintas. Si no las diferenciamos, podemos confundir facturación con beneficio o interpretar como estabilidad una situación que depende de unos pocos encargos.
                </p>
                <p>
                  Conocer los números básicos permite tomar decisiones con mayor criterio. También ayuda a establecer límites: qué gastos podemos asumir, qué ingresos necesitamos y cuánto margen tenemos para reorganizar nuestra actividad.
                </p>
                <p>
                  La cuestión no es convertirnos en especialistas financieros. Es evitar que las decisiones importantes se tomen sin información suficiente.
                </p>
                <p>
                  Un negocio pequeño también necesita disciplina económica. De hecho, cuando no existe un equipo que supervise las operaciones, esa responsabilidad recae directamente en quien lo dirige.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="solopreneur-clientes"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Conseguir clientes exige iniciativa y conversaciones reales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Uno de los errores habituales al comenzar una actividad independiente es esperar a que el mercado descubra nuestra existencia.
                </p>
                <p>
                  Crear una página, publicar contenidos o preparar perfiles profesionales puede formar parte de una estrategia de captación, pero esas acciones no sustituyen necesariamente el contacto con posibles clientes.
                </p>
                <p>
                  Al principio, necesitamos aprender a generar oportunidades de manera intencionada. Eso implica identificar personas o negocios que podrían necesitar lo que ofrecemos, iniciar conversaciones pertinentes y comprobar si existe una necesidad real.
                </p>
                <p>
                  No todas las conversaciones terminarán en una contratación. Su utilidad también está en ayudarnos a entender cómo se expresa el problema, qué espera el cliente y qué aspectos de nuestra propuesta necesitan mayor claridad.
                </p>
                <p>
                  La captación no debería depender exclusivamente de la esperanza de recibir solicitudes espontáneas. Requiere atención, continuidad y disposición para actuar.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="solopreneur-ventas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Vender sin convertir cada conversación en una presión
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La venta de servicios profesionales no tiene por qué basarse en discursos agresivos ni en técnicas que obliguen al cliente a tomar una decisión apresurada.
                </p>
                <p>
                  Una conversación comercial puede comenzar por comprender la situación de la otra persona. Escuchar, formular preguntas y aclarar las expectativas permite determinar si existe una relación razonable entre la necesidad y la solución que ofrecemos.
                </p>
                <p>
                  También ayuda a reconocer cuándo no somos la opción adecuada. No todos los posibles clientes necesitan nuestro servicio, y no todas las oportunidades justifican aceptar un encargo.
                </p>
                <p>
                  Una venta bien planteada no termina cuando recibimos una respuesta afirmativa. Continúa en la definición de las condiciones, el alcance del trabajo y los compromisos que asumimos.
                </p>
                <p>
                  La claridad antes de empezar puede evitar muchos problemas después.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="solopreneur-relacion-cliente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El trabajo no termina cuando el cliente paga
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Conseguir un cliente representa un avance, pero mantener una relación profesional satisfactoria requiere atención posterior.
                </p>
                <p>
                  La entrega, el seguimiento y la comunicación influyen en la experiencia que tiene el cliente. También pueden ayudar a detectar necesidades adicionales, resolver dudas y comprender qué aspectos del servicio conviene mejorar.
                </p>
                <p>
                  En un negocio unipersonal, la relación con cada cliente tiene un peso particular. Una experiencia confusa puede consumir tiempo y generar problemas que afectan a toda la actividad. Una relación bien gestionada, en cambio, puede facilitar la continuidad y las recomendaciones.
                </p>
                <p>
                  Esto no significa estar disponible a cualquier hora ni aceptar solicitudes ilimitadas. La atención profesional también necesita condiciones claras.
                </p>
                <p>
                  La calidad de una relación comercial depende tanto de cumplir lo acordado como de saber establecer expectativas realistas.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="solopreneur-crecimiento"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Crecer sin perder el control de nuestra actividad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La idea de crecimiento suele asociarse con más clientes, más trabajo, más herramientas y, eventualmente, más empleados. Sin embargo, para un negocio unipersonal, crecer sin revisar su funcionamiento puede convertirse en una fuente de sobrecarga.
                </p>
                <p>
                  Aumentar los encargos sin mejorar la organización puede reducir la calidad de las entregas y dejar cada vez menos tiempo para planificar. Por eso, el crecimiento necesita evaluarse en relación con la capacidad real de la actividad.
                </p>
                <p>
                  Podemos mejorar una oferta, simplificar una operación, eliminar tareas innecesarias o utilizar automatizaciones ligeras cuando tengan una utilidad concreta. No todas las actividades necesitan convertirse en sistemas complejos ni todas las oportunidades deben perseguirse.
                </p>
                <p>
                  La pregunta importante no es solamente cuánto podemos aumentar el volumen de trabajo. También debemos preguntarnos qué tipo de actividad queremos mantener y qué condiciones hacen posible sostenerla.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="solopreneur-energia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La energía también forma parte de la estructura del negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando trabajamos solos, nuestra capacidad de atención y nuestra energía son recursos limitados. No existe una separación automática entre la persona que dirige el negocio y la persona que realiza sus tareas.
                </p>
                <p>
                  Si toda la actividad depende de nosotros, ignorar los límites personales puede afectar a la continuidad del trabajo.
                </p>
                <p>
                  Una agenda permanentemente saturada no es necesariamente una señal de éxito. Puede indicar que hemos aceptado más compromisos de los que podemos atender o que nuestra organización depende demasiado de la disponibilidad constante.
                </p>
                <p>
                  Establecer límites, reconocer cuándo necesitamos descansar y distinguir entre una jornada productiva y una jornada interminable forma parte de una gestión responsable.
                </p>
                <p>
                  La sostenibilidad no es un añadido que podamos considerar cuando el negocio ya esté consolidado. Es una condición que conviene tener presente desde el principio.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="solopreneur-lectura"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una lectura para construir un negocio que tenga sentido
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El Manual del Solopreneur Moderno está dirigido a profesionales independientes, freelancers, consultores, creadores y emprendedores digitales que desean organizar una actividad propia sin reproducir las estructuras de una empresa convencional.
                </p>
                <p>
                  Su interés no está en presentar el trabajo en solitario como una fórmula universal ni en prometer resultados automáticos. La propuesta consiste en abordar las decisiones que aparecen cuando una persona debe construir, dirigir y sostener su propio negocio.
                </p>
                <p>
                  A lo largo de la obra se recorren cuestiones relacionadas con la identidad profesional, la organización, la oferta, las finanzas, la captación de clientes, las ventas, las relaciones comerciales y la gestión de la energía.
                </p>
                <p>
                  La idea que conecta estos asuntos es sencilla: trabajar por cuenta propia no debería significar vivir reaccionando a cada tarea que aparece.
                </p>
                <p>
                  Construir una actividad independiente exige aprender a elegir, organizar y decidir. No necesitamos una estructura enorme para empezar, pero sí una que tenga sentido para lo que queremos hacer.
                </p>
                <p>
                  Porque el propósito no es llenar nuestra jornada de trabajo ni convertir cada oportunidad en una obligación. Es construir un negocio que podamos dirigir con claridad y mantener de una manera razonable.
                </p>

                {/* Subapartado H3 #1 */}
                <div className="pt-6 space-y-4">
                  <h3 className="text-h3 font-bold font-serif text-[#174532] leading-snug">
                    ¿Para quién puede resultar útil este libro?
                  </h3>
                  <p>Esta obra puede resultar especialmente pertinente para:</p>
                  <ul className="space-y-3 pl-5 list-disc marker:text-[#174532]">
                    <li>
                      Profesionales que quieren transformar sus conocimientos en una actividad independiente.
                    </li>
                    <li>
                      Freelancers que necesitan organizar mejor la captación, la entrega y la relación con sus clientes.
                    </li>
                    <li>
                      Consultores y prestadores de servicios que desean definir una oferta más clara.
                    </li>
                    <li>
                      Creadores y emprendedores digitales que trabajan solos y necesitan una estructura operativa sencilla.
                    </li>
                    <li>
                      Personas que están comenzando a trabajar por cuenta propia y quieren comprender las responsabilidades que implica dirigir un negocio.
                    </li>
                  </ul>
                  <p>
                    No es necesario tener todas las decisiones resueltas antes de comenzar. Lo importante es comprender que una actividad profesional independiente necesita algo más que conocimientos técnicos: necesita dirección, organización y criterios para funcionar.
                  </p>
                </div>
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

export default SolopreneurManualView;
