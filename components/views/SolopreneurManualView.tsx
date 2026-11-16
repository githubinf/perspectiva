import React from 'react';
import { BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface SolopreneurManualViewProps {
  book?: BookItem;
}

const OFFICIAL_COVER_URL =
  'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/22-solopreneur-libro-600.jpg';

const OFFICIAL_EDITIONS = [
  {
    id: 'tapa-blanda',
    label: 'Comprar en tapa blanda',
    shortLabel: 'Tapa blanda',
    platform: 'Edición impresa en Amazon',
    url: 'https://www.amazon.com/dp/B0HKPPV7HH',
    isPrimary: true,
  },
  {
    id: 'kindle',
    label: 'Kindle',
    shortLabel: 'Kindle',
    platform: 'Edición digital en Amazon',
    url: 'https://www.amazon.com/dp/B0HKPHYRYX',
    isPrimary: false,
  },
  {
    id: 'tapa-dura',
    label: 'Tapa dura',
    shortLabel: 'Tapa dura',
    platform: 'Edición en Amazon',
    url: 'https://www.amazon.com/dp/B0HKPZMYJ6',
    isPrimary: false,
  },
] as const;

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

const SolopreneurManualView: React.FC<SolopreneurManualViewProps> = () => {
  const primaryEdition = OFFICIAL_EDITIONS[0];
  const secondaryEditions = OFFICIAL_EDITIONS.slice(1);

  return (
    <div className="bg-white text-[#1b1b1b]">
      {/* Breadcrumbs */}
      <div className="pt-20 md:pt-24 bg-[#f7faf8] border-b border-[#174532]/10">
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: 'Mindset', href: '/mindset/' },
              {
                label: 'El Manual del Solopreneur Moderno',
                href: '/el-manual-del-solopreneur-moderno/',
              },
            ]}
          />
        </div>
      </div>

      {/* ================================================================ */}
      {/* 1. HERO EDITORIAL                                                */}
      {/* ================================================================ */}
      <header
        id="opciones-compra"
        className="bg-[#f7faf8] border-b border-[#174532]/12 py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-8 md:gap-12 items-start">
            {/* Portada oficial única */}
            <div className="flex justify-center md:justify-start">
              <div className="w-52 sm:w-56 md:w-full max-w-[260px] bg-white p-2 border border-[#174532]/15 rounded-sm shadow-md">
                <img
                  src={OFFICIAL_COVER_URL}
                  alt="Portada oficial del libro El Manual del Solopreneur Moderno de Francisco González"
                  width={600}
                  height={900}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block object-cover rounded-[2px]"
                />
              </div>
            </div>

            {/* Datos oficiales del libro + opciones de compra */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center flex-wrap gap-2 text-[12px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-4">
                <Link
                  href="/mindset/"
                  className="hover:text-[#174532] underline-offset-4 hover:underline transition-colors"
                >
                  Categoría · Mindset
                </Link>
                <span aria-hidden="true" className="text-[#174532]/40">
                  /
                </span>
                <span className="text-[#174532]/80">Ficha editorial</span>
              </div>

              <h1 className="text-h1 font-serif font-bold text-[#174532] leading-[1.18] text-balance mb-4">
                El Manual del Solopreneur Moderno
              </h1>

              <p className="text-subtitle font-serif italic text-[#174532]/85 leading-relaxed mb-5 max-w-2xl">
                Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones
              </p>

              <p className="text-body-sm font-medium text-[#1b1b1b]/80 mb-8 pb-6 border-b border-[#174532]/12">
                Autor: <span className="text-[#174532] font-semibold">Francisco González</span>
              </p>

              {/* Opciones oficiales de compra en Amazon: Tapa blanda con prioridad visual */}
              <div aria-label="Opciones oficiales de compra en Amazon" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href={primaryEdition.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-[#174532] hover:bg-[#1f513a] active:bg-[#123627] text-white font-semibold text-[15px] rounded-sm shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2 whitespace-nowrap"
                  >
                    <span>{primaryEdition.label}</span>
                    <span aria-hidden="true" className="text-[#f4b925] text-sm">
                      ↗
                    </span>
                  </a>
                  <span className="text-xs text-[#1b1b1b]/70">
                    Opción principal recomendada · {primaryEdition.platform}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-xs font-medium text-[#1b1b1b]/70 mr-1">
                    Otras ediciones en Amazon:
                  </span>
                  {secondaryEditions.map((edition) => (
                    <a
                      key={edition.id}
                      href={edition.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={`Comprar El Manual del Solopreneur Moderno en edición ${edition.shortLabel} en Amazon`}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-white border border-[#174532]/25 hover:border-[#174532] hover:bg-[#dae7df]/25 text-[#174532] font-medium text-[13.5px] rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] whitespace-nowrap"
                    >
                      <span>{edition.label}</span>
                      <span aria-hidden="true" className="text-[#1f513a] text-xs">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/* 2. PRIMERA SECCIÓN INTRODUCTORIA (ANTES DEL ÍNDICE)              */}
      {/* ================================================================ */}
      <article className="bg-white">
        <section
          aria-label="Introducción editorial"
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/88 leading-[1.78]">
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
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. ÍNDICE DE CONTENIDOS (EXACTAMENTE DESPUÉS DE LA INTRO)      */}
        {/* ============================================================== */}
        <CategoryIndex
          items={SOLOPRENEUR_INDEX_ITEMS}
          maxWidthClass="max-w-4xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================== */}
        {/* 4. DESARROLLO TEMÁTICO PRINCIPAL (11 APARTADOS H2)             */}
        {/* ============================================================== */}

        {/* Apartado 1 */}
        <section
          id="solopreneur-trabajar-vs-dirigir"
          tabIndex={-1}
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                No confundamos trabajar por cuenta propia con dirigir un negocio
              </h2>
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
          </div>
        </section>

        {/* Apartado 2 */}
        <section
          id="solopreneur-propietario"
          tabIndex={-1}
          className="py-12 md:py-16 bg-[#f7faf8] border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                De profesional independiente a propietario de una actividad económica
              </h2>
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
          </div>
        </section>

        {/* Apartado 3 */}
        <section
          id="solopreneur-oferta"
          tabIndex={-1}
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                La oferta es el punto de partida de un negocio claro
              </h2>
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
          </div>
        </section>

        {/* Apartado 4 */}
        <section
          id="solopreneur-organizacion"
          tabIndex={-1}
          className="py-12 md:py-16 bg-[#f7faf8] border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                Una estructura pequeña también necesita organización
              </h2>
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
          </div>
        </section>

        {/* Apartado 5 */}
        <section
          id="solopreneur-dinero"
          tabIndex={-1}
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                El dinero debe orientar las decisiones, no convertirse en una incógnita
              </h2>
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
          </div>
        </section>

        {/* Apartado 6 */}
        <section
          id="solopreneur-clientes"
          tabIndex={-1}
          className="py-12 md:py-16 bg-[#f7faf8] border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                Conseguir clientes exige iniciativa y conversaciones reales
              </h2>
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
          </div>
        </section>

        {/* Apartado 7 */}
        <section
          id="solopreneur-ventas"
          tabIndex={-1}
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                Vender sin convertir cada conversación en una presión
              </h2>
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
          </div>
        </section>

        {/* Apartado 8 */}
        <section
          id="solopreneur-relacion-cliente"
          tabIndex={-1}
          className="py-12 md:py-16 bg-[#f7faf8] border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                El trabajo no termina cuando el cliente paga
              </h2>
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
          </div>
        </section>

        {/* Apartado 9 */}
        <section
          id="solopreneur-crecimiento"
          tabIndex={-1}
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                Crecer sin perder el control de nuestra actividad
              </h2>
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
          </div>
        </section>

        {/* Apartado 10 */}
        <section
          id="solopreneur-energia"
          tabIndex={-1}
          className="py-12 md:py-16 bg-[#f7faf8] border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                La energía también forma parte de la estructura del negocio
              </h2>
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
          </div>
        </section>

        {/* Apartado 11 (con H3s integrados) */}
        <section
          id="solopreneur-lectura"
          tabIndex={-1}
          className="py-12 md:py-16 bg-white border-b border-[#174532]/10 scroll-mt-20 outline-none"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <h2 className="text-h2 font-serif font-bold text-[#174532] leading-snug mb-6">
                Una lectura para construir un negocio que tenga sentido
              </h2>
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
              <div className="pt-8 mt-8 border-t border-[#174532]/12 space-y-4">
                <h3 className="text-h3 font-serif font-bold text-[#174532] leading-snug">
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

              {/* Subapartado H3 #2 */}
              <div className="pt-8 mt-8 border-t border-[#174532]/12 space-y-3">
                <h3 className="text-h3 font-serif font-bold text-[#174532] leading-snug">
                  Sobre el libro
                </h3>
                <p className="font-semibold text-[#174532]">
                  El Manual del Solopreneur Moderno
                </p>
                <p className="font-serif italic text-[#174532]/85">
                  Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones.
                </p>
                <p>Autor: Francisco González.</p>
                <p>Disponible en Kindle, tapa blanda y tapa dura.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. CIERRE EDITORIAL Y ENLACES OFICIALES DE COMPRA              */}
        {/* ============================================================== */}
        <section
          aria-label="Adquirir El Manual del Solopreneur Moderno"
          className="py-12 md:py-16 bg-[#f7faf8] border-b border-[#174532]/12"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8 flex flex-col gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-2">
                  Ediciones disponibles en Amazon
                </p>
                <p className="font-serif text-[20px] md:text-[22px] font-bold text-[#174532] leading-snug">
                  El Manual del Solopreneur Moderno
                </p>
                <p className="text-body-sm text-[#1b1b1b]/75 mt-1">
                  Selecciona el formato que prefieras para consultar el libro en Amazon.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={primaryEdition.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-[#174532] hover:bg-[#1f513a] active:bg-[#123627] text-white font-semibold text-[15px] rounded-sm shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2 whitespace-nowrap"
                >
                  <span>{primaryEdition.label}</span>
                  <span aria-hidden="true" className="text-[#f4b925] text-sm">
                    ↗
                  </span>
                </a>

                {secondaryEditions.map((edition) => (
                  <a
                    key={`footer-${edition.id}`}
                    href={edition.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={`Comprar El Manual del Solopreneur Moderno en edición ${edition.shortLabel} en Amazon`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-white border border-[#174532]/25 hover:border-[#174532] hover:bg-[#dae7df]/25 text-[#174532] font-medium text-[14px] rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] whitespace-nowrap"
                  >
                    <span>{edition.label}</span>
                    <span aria-hidden="true" className="text-[#1f513a] text-xs">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#174532]/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/mindset/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f513a] hover:text-[#174532] transition-colors uppercase tracking-wider min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a Ruta Mindset</span>
              </Link>
              <a
                href="#opciones-compra"
                className="text-xs font-semibold text-[#174532] hover:text-[#1f513a] underline-offset-4 hover:underline transition-colors uppercase tracking-wider"
              >
                Ver portada y ficha inicial
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SolopreneurManualView;
