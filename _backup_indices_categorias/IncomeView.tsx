import React, { useState } from 'react';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';

interface IncomeViewProps {
  category: BookCategory;
}

const BUSINESS_MODEL_COMPONENTS = [
  {
    index: '01',
    term: 'Una propuesta comercial:',
    detail: 'un producto, servicio u oferta que responde a una necesidad, un interés o una demanda.',
  },
  {
    index: '02',
    term: 'Un público potencial:',
    detail: 'personas que pueden encontrar utilidad o valor en aquello que se ofrece.',
  },
  {
    index: '03',
    term: 'Un mecanismo de conexión:',
    detail: 'contenidos, recomendaciones, publicidad, canales de comunicación u otros medios que permiten acercar la oferta a su público.',
  },
  {
    index: '04',
    term: 'Una acción comercial:',
    detail: 'una compra, un registro, una solicitud u otra acción definida por el modelo.',
  },
  {
    index: '05',
    term: 'Una forma de remuneración:',
    detail: 'el mecanismo mediante el cual se generan ingresos para el propietario del producto, el intermediario o el participante en el programa comercial.',
  },
];

const MODEL_FLOW_SCHEMA = [
  'Propuesta comercial',
  'Audiencia',
  'Conexión',
  'Acción',
  'Remuneración',
];

const MONETIZATION_COMPARISON = [
  {
    model: 'Venta de productos y servicios propios',
    offer: 'Productos físicos, servicios, consultoría, formación o recursos propios.',
    action: 'Venta directa al comprador o contratación del servicio.',
    actors: 'Propietario / creador y cliente final.',
  },
  {
    model: 'Comercialización de productos digitales',
    offer: 'Ebooks, cursos o recursos descargables entregados online.',
    action: 'Compra y entrega digital del producto.',
    actors: 'Creador o editor digital y comprador.',
  },
  {
    model: 'Marketing de afiliados',
    offer: 'Productos o servicios de terceros bajo acuerdo comercial.',
    action: 'Conversión válida (compra u objetivo) atribuida mediante referencia.',
    actors: 'Anunciante, plataforma (opcional), afiliado y usuario.',
  },
  {
    model: 'Marketing CPA',
    offer: 'Campañas de terceros enfocadas a objetivos específicos.',
    action: 'Registro, solicitud, instalación, compra o evento validado.',
    actors: 'Anunciante, red o plataforma CPA, promotor y usuario.',
  },
  {
    model: 'Publicidad y monetización de audiencias',
    offer: 'Espacios publicitarios o acuerdos vinculados a la atención reunida.',
    action: 'Visualización, clic o acuerdo comercial asociado a la audiencia.',
    actors: 'Editor o medio digital, anunciante o red publicitaria y audiencia.',
  },
];

const CPA_REQUIREMENTS = [
  'Qué acción concreta se remunera.',
  'Qué requisitos debe cumplir el usuario.',
  'Qué territorios o públicos están admitidos.',
  'Qué fuentes de tráfico están permitidas.',
  'Qué restricciones existen para la promoción.',
  'Cómo se valida y registra la conversión.',
];

const MONETIZATION_ERRORS = [
  {
    index: '01',
    title: 'Elegir ofertas únicamente por sus comisiones.',
    detail:
      'Una remuneración elevada puede resultar atractiva, pero no compensa la falta de correspondencia entre el producto y la audiencia.',
  },
  {
    index: '02',
    title: 'Enviar tráfico sin conocer al público.',
    detail:
      'Conseguir visitas no significa llegar a personas interesadas. La relevancia del tráfico influye directamente en las posibilidades de conversión.',
  },
  {
    index: '03',
    title: 'Confundir visitas con resultados comerciales.',
    detail:
      'El volumen de tráfico es un indicador de actividad, no una demostración de rentabilidad.',
  },
  {
    index: '04',
    title: 'Depender de una única fuente de adquisición.',
    detail:
      'Concentrar toda la actividad en un solo canal puede aumentar la vulnerabilidad ante cambios de condiciones, algoritmos o costes.',
  },
  {
    index: '05',
    title: 'Ignorar las condiciones de los programas.',
    detail:
      'No conocer las reglas de atribución, validación y promoción puede provocar conversiones rechazadas o incumplimientos.',
  },
  {
    index: '06',
    title: 'No medir los resultados.',
    detail:
      'Sin datos es difícil identificar qué ofertas, contenidos o canales contribuyen realmente a los objetivos comerciales.',
  },
  {
    index: '07',
    title: 'Cambiar continuamente de estrategia.',
    detail:
      'Modificar las campañas sin analizar la información disponible impide comprender qué factores influyen en su rendimiento.',
  },
  {
    index: '08',
    title: 'Promocionar productos sin transparencia.',
    detail:
      'Una actividad de afiliación necesita preservar la confianza. Debemos presentar las relaciones comerciales de forma clara, identificar los enlaces de afiliación cuando corresponda y evitar afirmaciones engañosas.',
  },
];

const APPROVED_INCOME_BOOKS: Array<{
  slug: string;
  fallbackTitle: string;
  editorialDescription: string;
  dimensions: { width: number; height: number; aspectClass: string };
}> = [
  {
    slug: 'dominando-el-marketing-de-afiliados',
    fallbackTitle: 'Dominando el marketing de afiliados',
    editorialDescription:
      'El marketing de afiliados representa uno de los modelos centrales de la monetización digital. Comprenderlo permite estudiar la relación entre anunciantes, afiliados, productos, audiencias y mecanismos de remuneración. Este libro se integra en la colección como referencia temática sobre el modelo general de afiliación.',
    dimensions: { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  },
  {
    slug: 'marketing-cpa-para-emprendedores',
    fallbackTitle: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
    editorialDescription:
      'El CPA introduce una perspectiva diferente sobre la remuneración, basada en acciones concretas que deben cumplir determinadas condiciones. Esta obra se relaciona con el conocimiento de los modelos de Cost Per Action y su aplicación dentro de las actividades comerciales digitales.',
    dimensions: { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  },
  {
    slug: 'cpa-marketing-formula-smartlink',
    fallbackTitle: 'CPA Marketing Fórmula Smartlink',
    editorialDescription:
      'Los Smartlinks forman parte de las herramientas utilizadas en determinados entornos de monetización CPA. Este título representa esa dimensión tecnológica y comercial, donde la distribución de ofertas se relaciona con las condiciones de las campañas y el tráfico disponible.',
    dimensions: { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  },
  {
    slug: 'dinero-con-clickbank',
    fallbackTitle: 'Dinero con Clickbank',
    editorialDescription:
      'Los marketplaces de productos digitales ofrecen un entorno donde creadores, vendedores y afiliados pueden participar en procesos de comercialización. Este libro se vincula con ClickBank y con la comprensión de ese mercado dentro de la actividad de afiliación.',
    dimensions: { width: 400, height: 489, aspectClass: 'aspect-[400/489]' },
  },
  {
    slug: 'tips-de-marketing-para-afiliados',
    fallbackTitle: 'Tips de Marketing para Afiliados',
    editorialDescription:
      'La monetización no depende solamente de disponer de una oferta. También requiere comprender cómo presentarla, cómo llegar al público adecuado y cómo desarrollar acciones de promoción coherentes. Este título completa la colección desde la perspectiva del marketing aplicado a la actividad de afiliación.',
    dimensions: { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  },
];

const IncomeView: React.FC<IncomeViewProps> = ({ category }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const booksBySlug = new Map<string, BookItem>(
    category.books.map((book) => [book.slug || '', book])
  );

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* HERO EDITORIAL TIPOGRÁFICO ASIMÉTRICO */}
      <header className="bg-[#dae7df]/16 border-b border-[#174532]/15 pt-6 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: category.category, href: category.path || '/ingresos/' },
            ]}
          />

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                Ruta editorial · {category.category}
              </span>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-10 max-w-4xl text-balance">
              Ingresos digitales: cómo funcionan los modelos de monetización online
            </h1>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-8 border-t border-[#174532]/15">
              <div className="lg:col-span-7 space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[66ch]">
                <p>
                  Generar ingresos a través de Internet no consiste simplemente en publicar contenidos, conseguir visitas o incorporar enlaces comerciales a una página. Detrás de cualquier actividad digital que pretende producir ingresos existe una estructura económica: alguien ofrece un producto o servicio, alguien necesita o desea adquirirlo y un conjunto de procesos permite que ambas partes se encuentren y realicen una transacción.
                </p>
                <p>
                  Comprender esa estructura es el primer paso para desarrollar una actividad de monetización con fundamento.
                </p>
                <p>
                  El entorno digital ofrece distintas posibilidades para generar ingresos. Podemos comercializar productos propios, vender servicios, distribuir productos de terceros, participar en programas de afiliación o trabajar con campañas cuya remuneración depende de determinadas acciones. Cada modelo tiene características, condiciones y mecanismos particulares.
                </p>
                <p>
                  Sin embargo, todos comparten una necesidad: conectar una propuesta comercial con personas que puedan encontrar valor en ella.
                </p>
                <p>
                  En FG Perspectiva abordamos la monetización digital desde esa perspectiva. Nos interesa comprender cómo funcionan los modelos comerciales, qué papel desempeñan las ofertas, cómo interviene el tráfico y por qué las conversiones y la medición son elementos esenciales para evaluar una actividad económica online.
                </p>
              </div>

              <aside
                aria-label="Enfoque editorial de la categoría Ingresos"
                className="lg:col-span-5 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-3">
                  Pregunta eje de esta ruta
                </p>
                <p className="font-serif text-[18px] md:text-[19px] font-bold text-[#174532] leading-snug mb-6">
                  ¿Cómo podemos transformar el tráfico y la atención de una audiencia en oportunidades de ingresos mediante modelos de monetización bien estructurados?
                </p>
                <div className="pt-5 border-t border-[#174532]/12">
                  <p className="text-[11.5px] uppercase tracking-[0.12em] font-semibold text-[#1f513a] mb-3">
                    Territorio temático
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/80 leading-relaxed">
                    Modelos económicos · Afiliación · Selección de ofertas · Campañas CPA · Smartlinks · Marketplaces · Tráfico · Conversión · Rentabilidad.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </header>

      {/* ARTÍCULO EDITORIAL PRINCIPAL */}
      <article aria-label="Desarrollo editorial de la categoría Ingresos">
        {/* BLOQUE 1: Comprender el modelo de negocio + Esquema A */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Generar ingresos digitales exige comprender el modelo de negocio
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una de las confusiones más habituales al comenzar una actividad en Internet es identificar movimiento con resultados económicos. Publicar artículos, mantener perfiles sociales, recibir visitas o conseguir suscriptores son actividades que pueden contribuir al desarrollo de un proyecto, pero ninguna de ellas garantiza por sí misma la generación de ingresos.
                </p>
                <p>
                  Para que una actividad digital tenga una dimensión comercial necesita un modelo que explique de dónde procede el valor económico y bajo qué condiciones se produce una remuneración.
                </p>
                <p>
                  Podemos entender ese modelo a partir de varios componentes relacionados:
                </p>
              </div>

              <ul className="my-7 border-y border-[#174532]/18 divide-y divide-[#174532]/12">
                {BUSINESS_MODEL_COMPONENTS.map((item) => (
                  <li key={item.index} className="py-4 flex items-baseline gap-4">
                    <span
                      className="text-[12px] font-semibold tabular-nums text-[#1f513a] tracking-wider flex-shrink-0"
                      aria-hidden="true"
                    >
                      {item.index}
                    </span>
                    <span className="text-body text-[#1b1b1b]/85 leading-[1.7]">
                      <strong className="font-semibold text-[#174532]">{item.term}</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Estos componentes deben guardar cierta coherencia. Una oferta puede ser interesante, pero si se presenta ante un público que no tiene relación con ella, las posibilidades de conseguir resultados serán limitadas. Del mismo modo, atraer muchas visitas carece de valor comercial si no existe una propuesta adecuada o un recorrido que permita avanzar hacia una acción.
                </p>
                <p>
                  Por eso, antes de pensar en cuánto podemos ganar, necesitamos comprender qué estamos ofreciendo, a quién nos dirigimos y cómo se produce la remuneración.
                </p>
              </div>
            </div>

            {/* Esquema A: Modelo comercial */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Esquema de componentes relacionados del modelo comercial"
              >
                {MODEL_FLOW_SCHEMA.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className="flex-1 min-w-0 bg-[#dae7df]/20 border border-[#174532]/18 rounded-sm px-4 py-3.5 flex flex-col justify-center">
                      <span className="text-[10.5px] font-semibold tabular-nums text-[#1f513a] tracking-widest uppercase mb-1">
                        Componente {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-[14.5px] font-bold text-[#174532] leading-snug">
                        {step}
                      </span>
                    </div>
                    {idx < MODEL_FLOW_SCHEMA.length - 1 && (
                      <div
                        className="flex items-center justify-center text-[#174532] font-semibold text-sm select-none px-0.5 py-0.5 lg:py-0"
                        aria-hidden="true"
                      >
                        <span className="hidden lg:inline">→</span>
                        <span className="inline lg:hidden">↓</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/70 leading-relaxed max-w-[68ch]">
                Esquema conceptual A. Relación funcional entre los elementos de un modelo económico digital: su conexión define la estructura comercial, sin constituir una garantía automática de ingresos.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BLOQUE 2: Los principales modelos de monetización + Comparativa B */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Los principales modelos de monetización digital
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Internet permite desarrollar actividades comerciales mediante diferentes modelos. Aunque algunos pueden combinarse dentro de un mismo proyecto, conviene distinguirlos porque no funcionan de la misma manera ni requieren necesariamente los mismos recursos.
                </p>
                <p>
                  <strong>Venta de productos y servicios propios.</strong> En este modelo, el proyecto comercializa directamente aquello que ha creado o que ofrece. Puede tratarse de servicios profesionales, productos físicos, consultoría, formación o recursos digitales. El responsable de la actividad controla su propuesta comercial, aunque también debe asumir las tareas relacionadas con su desarrollo, presentación, distribución y atención al cliente.
                </p>
                <p>
                  <strong>Comercialización de productos digitales.</strong> Los libros electrónicos, cursos, recursos descargables y otros formatos digitales permiten distribuir productos mediante canales online. Su naturaleza facilita la entrega digital, pero su comercialización sigue dependiendo de la calidad de la propuesta, su posicionamiento y la capacidad de llegar a compradores potenciales.
                </p>
                <p>
                  <strong>Marketing de afiliados.</strong> El participante promociona productos o servicios de terceros mediante un acuerdo comercial. Cuando se produce una acción válida atribuida a su recomendación, puede recibir una comisión según las condiciones del programa.
                </p>
                <p>
                  <strong>Marketing CPA.</strong> La remuneración depende de que el usuario complete una acción previamente establecida. Esa acción puede ser una compra, un registro, una solicitud, una instalación u otro evento aceptado por el anunciante.
                </p>
                <p>
                  <strong>Publicidad y monetización de audiencias.</strong> Un proyecto que reúne una audiencia puede obtener ingresos mediante espacios publicitarios u otros acuerdos comerciales. En este caso, la capacidad de atraer y mantener la atención de un público adquiere especial importancia.
                </p>
                <p>
                  No existe un modelo universalmente superior. La elección depende del tipo de proyecto, los recursos disponibles, la propuesta comercial y las características del público. Lo importante es comprender cómo se genera el ingreso y qué responsabilidades implica cada alternativa.
                </p>
              </div>
            </div>

            {/* Recurso B: Matriz comparativa */}
            <figure className="mt-10 bg-white border border-[#174532]/18 rounded-sm overflow-hidden">
              <div className="px-6 py-4 bg-[#174532] text-white">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#f4b925]">
                  Comparativa estructural B
                </p>
                <p className="font-serif text-[16px] font-bold mt-0.5">
                  Diferencias operativas entre los modelos de monetización digital
                </p>
              </div>

              {/* Vista tabla escritorio / tablet */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#174532]/15 bg-[#dae7df]/20">
                      <th scope="col" className="py-3.5 px-5 text-[12px] uppercase tracking-wider font-semibold text-[#174532]">
                        Modelo
                      </th>
                      <th scope="col" className="py-3.5 px-5 text-[12px] uppercase tracking-wider font-semibold text-[#174532]">
                        Qué se ofrece
                      </th>
                      <th scope="col" className="py-3.5 px-5 text-[12px] uppercase tracking-wider font-semibold text-[#174532]">
                        Acción que genera remuneración
                      </th>
                      <th scope="col" className="py-3.5 px-5 text-[12px] uppercase tracking-wider font-semibold text-[#174532]">
                        Participantes en el proceso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#174532]/12 text-body-sm text-[#1b1b1b]/85">
                    {MONETIZATION_COMPARISON.map((row) => (
                      <tr key={row.model} className="align-top">
                        <th scope="row" className="py-4 px-5 font-serif font-semibold text-[#174532]">
                          {row.model}
                        </th>
                        <td className="py-4 px-5 leading-relaxed">{row.offer}</td>
                        <td className="py-4 px-5 leading-relaxed">{row.action}</td>
                        <td className="py-4 px-5 leading-relaxed">{row.actors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Vista apilada móvil */}
              <div className="md:hidden divide-y divide-[#174532]/12">
                {MONETIZATION_COMPARISON.map((row) => (
                  <div key={row.model} className="p-5 space-y-2.5">
                    <p className="font-serif font-bold text-[15.5px] text-[#174532]">{row.model}</p>
                    <dl className="space-y-1.5 text-body-sm text-[#1b1b1b]/85">
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a]">Qué se ofrece</dt>
                        <dd>{row.offer}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a]">Acción remunerada</dt>
                        <dd>{row.action}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a]">Participantes</dt>
                        <dd>{row.actors}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
              <figcaption className="px-6 py-3.5 bg-[#dae7df]/12 border-t border-[#174532]/12 text-[12.5px] text-[#1b1b1b]/70">
                Síntesis comparativa por mecanismo de oferta y atribución, sin estimaciones numéricas de ingresos.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BLOQUE 3: Marketing de afiliados + Esquema C */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Marketing de afiliados: cómo funciona el modelo
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El marketing de afiliados permite participar en la comercialización de productos o servicios sin tener que crearlos ni gestionar directamente toda la operación de venta. El afiliado establece una relación comercial con un anunciante o propietario de una oferta y recibe una remuneración cuando se produce una conversión atribuida a su actividad, de acuerdo con las condiciones del programa.
                </p>
                <p>
                  Para comprender su funcionamiento debemos identificar a los participantes principales.
                </p>
                <p>
                  El <strong>anunciante o propietario de la oferta</strong> es quien dispone del producto o servicio que desea comercializar. Define las condiciones de promoción y establece el sistema de remuneración.
                </p>
                <p>
                  El <strong>afiliado</strong> participa en la difusión de esa oferta. Su función consiste en acercarla a personas potencialmente interesadas mediante contenidos, recomendaciones, publicidad u otros canales permitidos.
                </p>
                <p>
                  La <strong>plataforma de afiliación</strong>, cuando interviene, proporciona un entorno donde anunciantes y afiliados pueden relacionarse, consultar ofertas y gestionar el seguimiento de las referencias y las comisiones.
                </p>
                <p>
                  El <strong>usuario o potencial comprador</strong> es la persona que recibe la recomendación, consulta la oferta y decide si realiza la acción correspondiente.
                </p>
                <p>
                  La conexión entre estos participantes suele apoyarse en enlaces de seguimiento u otros mecanismos de atribución. Estos permiten identificar que una visita o conversión procede de la actividad de un afiliado y aplicar las reglas de remuneración establecidas.
                </p>
                <p>
                  El modelo puede parecer sencillo, pero su funcionamiento comercial exige algo más que distribuir enlaces. Necesitamos conocer el producto, comprender a quién puede interesarle, presentar la propuesta de forma honesta y utilizar canales que permitan llegar a personas relevantes.
                </p>
                <p>
                  Una recomendación comercial tiene sentido cuando existe correspondencia entre lo que ofrecemos y los intereses de la audiencia. Sin esa relación, la promoción pierde credibilidad y difícilmente puede sostener una actividad a largo plazo.
                </p>
              </div>
            </div>

            {/* Esquema C: Esquema relacional del marketing de afiliados */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <div
                className="bg-[#dae7df]/16 border border-[#174532]/15 rounded-sm p-6 md:p-8"
                role="group"
                aria-label="Esquema relacional del marketing de afiliados"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-5">
                  Esquema C · Estructura de atribución en afiliación
                </p>

                <div className="grid md:grid-cols-3 gap-4 items-stretch">
                  <div className="bg-white border border-[#174532]/15 rounded-sm p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#1f513a] uppercase tracking-wider block mb-1">
                        Origen de oferta
                      </span>
                      <p className="font-serif text-[15px] font-bold text-[#174532]">
                        Anunciante / propietario de la oferta
                      </p>
                    </div>
                    <p className="text-[13px] text-[#1b1b1b]/75 mt-3 pt-3 border-t border-[#174532]/10">
                      Define producto, condiciones y comisión (con soporte de plataforma de afiliación cuando interviene).
                    </p>
                  </div>

                  <div className="bg-white border border-[#174532]/25 rounded-sm p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#1f513a] uppercase tracking-wider block mb-1">
                        Intermediación editorial / promoción
                      </span>
                      <p className="font-serif text-[15px] font-bold text-[#174532]">
                        Afiliado
                      </p>
                    </div>
                    <p className="text-[13px] text-[#1b1b1b]/75 mt-3 pt-3 border-t border-[#174532]/10">
                      Presenta la oferta con enlaces de seguimiento y contextualiza su utilidad ante el público.
                    </p>
                  </div>

                  <div className="bg-[#174532] text-white border border-[#174532] rounded-sm p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#f4b925] uppercase tracking-wider block mb-1">
                        Decisión y posible conversión
                      </span>
                      <p className="font-serif text-[15px] font-bold">
                        Usuario / potencial comprador
                      </p>
                    </div>
                    <p className="text-[13px] text-white/90 mt-3 pt-3 border-t border-white/15">
                      Consulta la propuesta; solo una acción válida y atribuida genera comisión (no toda visita produce ingreso).
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-white border border-[#174532]/12 rounded-sm px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13px] text-[#174532]">
                  <span className="font-medium">
                    Circuito de retorno: Seguimiento de referencia → Validación de la acción comercial → Liquidación de comisión
                  </span>
                  <span className="text-[#1f513a] font-semibold flex-shrink-0">
                    Sujeto a reglas del programa
                  </span>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* BLOQUE 4: Selección de ofertas */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Elegir ofertas: la relación entre producto, audiencia y mercado
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La selección de productos es una de las decisiones que más influyen en una estrategia de afiliación. No todas las ofertas son adecuadas para todos los públicos y una comisión elevada no convierte automáticamente un producto en una buena oportunidad comercial.
                </p>
                <p>
                  El primer criterio debe ser la correspondencia entre la oferta y la audiencia. Necesitamos comprender qué problemas, necesidades o intereses caracterizan al público al que queremos llegar. A partir de ahí podemos evaluar si el producto tiene una relación real con aquello que las personas están buscando.
                </p>
                <p>
                  También debemos considerar la propuesta en sí misma. Conviene analizar qué ofrece, cómo se presenta, qué información proporciona el vendedor y si existen elementos suficientes para comprender su utilidad.
                </p>
                <p>
                  Las condiciones comerciales constituyen otro aspecto fundamental. Los programas pueden establecer diferentes porcentajes de comisión, criterios de atribución, períodos de seguimiento, restricciones promocionales y requisitos para validar una conversión. Conocer estas condiciones evita tomar decisiones basadas en expectativas equivocadas.
                </p>
                <p>
                  La demanda y la competencia también merecen atención. Una oferta puede responder a un interés existente, pero eso no significa que sea sencillo conseguir visibilidad o generar ventas. Necesitamos valorar el contexto del mercado y los medios disponibles para llegar a los compradores potenciales.
                </p>
                <p>
                  Por último, debemos considerar la credibilidad. Recomendar productos sin conocerlos o promocionar propuestas que no guardan relación con nuestra audiencia puede deteriorar la confianza construida alrededor de un proyecto.
                </p>
              </div>

              <p className="mt-8 pt-6 border-t border-[#174532]/20 font-serif text-[18.5px] md:text-[20px] text-[#174532] leading-relaxed">
                Elegir una oferta no es seleccionar un enlace de una plataforma. Es tomar una decisión comercial que debe tener sentido para el producto, para el público y para la estrategia que queremos desarrollar.
              </p>
            </div>
          </div>
        </section>

        {/* BLOQUE 5: CPA + Esquema D */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                CPA: cuando la remuneración depende de una acción
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El modelo Cost Per Action, conocido como CPA, establece que la remuneración se produce cuando un usuario completa una acción definida por el anunciante. A diferencia de un esquema basado exclusivamente en ventas, la acción remunerada puede ser otra interacción que tenga valor para la campaña.
                </p>
                <p>
                  Según las condiciones de cada oferta, puede tratarse de completar un registro, enviar una solicitud, instalar una aplicación, realizar una compra o cumplir otro evento específico.
                </p>
                <p>
                  La diferencia fundamental está en aquello que se considera una conversión válida. No basta con que una persona visite una página o haga clic en un enlace. Debe completar la acción que el programa reconoce y cumplir los requisitos establecidos.
                </p>
                <p>
                  Por esta razón, antes de promocionar una campaña CPA necesitamos conocer sus condiciones:
                </p>
              </div>

              <ul className="my-7 grid sm:grid-cols-2 gap-3 max-w-3xl">
                {CPA_REQUIREMENTS.map((req, idx) => (
                  <li
                    key={req}
                    className="bg-[#dae7df]/16 border border-[#174532]/15 rounded-sm px-4 py-3 flex items-baseline gap-3 text-body-sm md:text-body text-[#174532] font-medium"
                  >
                    <span className="text-[11.5px] tabular-nums font-semibold text-[#1f513a]" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Estas condiciones pueden variar considerablemente entre campañas. Una estrategia que funciona para una oferta no necesariamente será adecuada para otra.
                </p>
                <p>
                  También debemos comprender que el CPA no elimina la necesidad de generar tráfico pertinente. Al contrario, exige prestar atención a la relación entre el público, la oferta y la acción solicitada. Conseguir visitas sin correspondencia con los requisitos de la campaña puede producir actividad sin conversiones válidas.
                </p>
                <p>
                  El atractivo del modelo reside en que permite trabajar con diferentes tipos de acciones comerciales. Su viabilidad, sin embargo, depende de comprender las condiciones de cada oferta y evaluar los resultados con criterios objetivos.
                </p>
              </div>
            </div>

            {/* Esquema D: Flujo CPA destacando la fase de Validación */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Esquema D de funcionamiento de una campaña CPA"
              >
                <div className="flex-1 min-w-0 bg-[#dae7df]/18 border border-[#174532]/15 rounded-sm px-4 py-3.5">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">Fase 01</span>
                  <span className="font-serif text-[14.5px] font-bold text-[#174532]">Oferta CPA</span>
                </div>
                <div className="flex items-center justify-center text-[#174532] text-sm" aria-hidden="true">
                  <span className="hidden lg:inline">→</span><span className="lg:hidden">↓</span>
                </div>
                <div className="flex-1 min-w-0 bg-[#dae7df]/18 border border-[#174532]/15 rounded-sm px-4 py-3.5">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">Fase 02</span>
                  <span className="font-serif text-[14.5px] font-bold text-[#174532]">Tráfico</span>
                </div>
                <div className="flex items-center justify-center text-[#174532] text-sm" aria-hidden="true">
                  <span className="hidden lg:inline">→</span><span className="lg:hidden">↓</span>
                </div>
                <div className="flex-1 min-w-0 bg-[#dae7df]/18 border border-[#174532]/15 rounded-sm px-4 py-3.5">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">Fase 03 · Usuario</span>
                  <span className="font-serif text-[14.5px] font-bold text-[#174532]">Acción definida</span>
                </div>
                <div className="flex items-center justify-center text-[#174532] text-sm" aria-hidden="true">
                  <span className="hidden lg:inline">→</span><span className="lg:hidden">↓</span>
                </div>
                <div className="flex-1 min-w-0 bg-[#174532] text-white border border-[#174532] rounded-sm px-4 py-3.5">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#f4b925] block mb-1">Control técnico</span>
                  <span className="font-serif text-[14.5px] font-bold">Validación</span>
                </div>
                <div className="flex items-center justify-center text-[#174532] text-sm" aria-hidden="true">
                  <span className="hidden lg:inline">→</span><span className="lg:hidden">↓</span>
                </div>
                <div className="flex-1 min-w-0 bg-[#dae7df]/18 border border-[#174532]/15 rounded-sm px-4 py-3.5">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">Condicional</span>
                  <span className="font-serif text-[14.5px] font-bold text-[#174532]">Remuneración</span>
                </div>
              </div>
              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/70 leading-relaxed max-w-[68ch]">
                Esquema conceptual D. La ejecución de la acción por parte del usuario no equivale al cobro inmediato: requiere superar la validación de territorio, fuente de tráfico y requisitos del anunciante.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BLOQUE 6: Smartlinks + Esquema E */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Smartlinks y sistemas de distribución de ofertas
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Dentro del entorno de monetización CPA encontramos herramientas diseñadas para facilitar la distribución de tráfico hacia distintas ofertas. Entre ellas están los Smartlinks, que pueden utilizar determinados criterios y configuraciones de una plataforma para dirigir a los usuarios hacia propuestas que considera adecuadas.
                </p>
                <p>
                  Su funcionamiento puede resultar interesante cuando se trabaja con campañas que admiten diferentes ofertas, públicos o condiciones de distribución. En lugar de depender de una única propuesta fija, el sistema puede gestionar distintas posibilidades según los parámetros que tenga disponibles.
                </p>
                <p>
                  Sin embargo, conviene distinguir entre la herramienta y la estrategia comercial.
                </p>
                <p>
                  Un Smartlink no sustituye el conocimiento del público, la selección de fuentes de tráfico ni el análisis de resultados. Tampoco garantiza que cualquier visita genere una conversión. Su utilidad depende de las ofertas disponibles, de las reglas de distribución y de la calidad del tráfico que recibe.
                </p>
                <p>
                  Para utilizar este tipo de herramientas con criterio debemos comprender qué estamos promocionando, qué condiciones establece la plataforma y qué información podemos obtener sobre el comportamiento de las campañas.
                </p>
                <p>
                  La tecnología puede facilitar determinados procesos, pero no elimina la responsabilidad de tomar decisiones fundamentadas. En monetización digital, automatizar una distribución no equivale a comprender por qué una oferta funciona o deja de funcionar.
                </p>
              </div>
            </div>

            {/* Esquema E: Distribución Smartlink */}
            <figure className="mt-10 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-5">
                Esquema E · Lógica de enrutamiento con Smartlinks
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                <div className="border border-[#174532]/15 bg-[#dae7df]/14 rounded-sm p-4">
                  <span className="text-[11px] font-semibold text-[#1f513a] uppercase tracking-wider block mb-1">Entrada</span>
                  <p className="font-serif font-bold text-[#174532] text-[15px]">Tráfico recibido</p>
                </div>

                <div className="border border-[#174532]/25 bg-white rounded-sm p-4">
                  <span className="text-[11px] font-semibold text-[#1f513a] uppercase tracking-wider block mb-1">Reglas de plataforma</span>
                  <p className="font-serif font-bold text-[#174532] text-[15px]">Criterios de distribución</p>
                </div>

                <div className="border border-[#174532]/15 bg-[#dae7df]/14 rounded-sm p-4">
                  <span className="text-[11px] font-semibold text-[#1f513a] uppercase tracking-wider block mb-1">Catálogo activo</span>
                  <p className="font-serif font-bold text-[#174532] text-[15px]">Ofertas disponibles</p>
                </div>

                <div className="border border-[#174532] bg-[#174532] text-white rounded-sm p-4">
                  <span className="text-[11px] font-semibold text-[#f4b925] uppercase tracking-wider block mb-1">Resultado eventual</span>
                  <p className="font-serif font-bold text-[15px]">Posible conversión</p>
                </div>
              </div>

              <figcaption className="mt-4 pt-3.5 border-t border-[#174532]/10 text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                La distribución depende de las condiciones y configuraciones vigentes de cada plataforma; el enrutamiento técnico no garantiza conversión por sí mismo.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BLOQUE 7: ClickBank y marketplaces */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                ClickBank y los mercados de productos digitales
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Los marketplaces de productos digitales reúnen ofertas comerciales que pueden ser distribuidas mediante diferentes mecanismos, entre ellos los programas de afiliación. Estas plataformas conectan a creadores o vendedores con participantes interesados en promocionar sus productos bajo determinadas condiciones.
                </p>
                <p>
                  ClickBank es una de las plataformas asociadas a este modelo. Su papel puede comprenderse dentro de un ecosistema donde los propietarios de productos presentan sus propuestas y los afiliados pueden evaluar oportunidades de promoción.
                </p>
                <p>
                  Para participar en este entorno es importante entender que la disponibilidad de una oferta no significa que debamos promocionarla automáticamente. Necesitamos estudiar el producto, conocer sus condiciones, evaluar su relación con nuestro público y determinar si podemos presentarlo de manera coherente.
                </p>
                <p>
                  La selección debe considerar tanto la propuesta comercial como las características del mercado al que se dirige. También conviene revisar las condiciones vigentes de cada producto y las reglas que establece la plataforma para su promoción.
                </p>
                <p>
                  La actividad de afiliación no consiste únicamente en encontrar productos con comisiones atractivas. Requiere desarrollar una relación entre la oferta, el contenido que utilizamos para presentarla y las personas que podrían encontrar valor en ella.
                </p>
                <p>
                  Por eso, comprender el funcionamiento de un marketplace es solo una parte del trabajo. La otra consiste en construir una estrategia de promoción que tenga sentido para el público y permita evaluar los resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 8: Tráfico */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Tráfico: cómo llegan los potenciales compradores
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una oferta necesita visibilidad. Incluso un producto bien desarrollado y una propuesta comercial adecuada tienen pocas posibilidades de generar conversiones si no llegan a personas que puedan estar interesadas.
                </p>
                <p>
                  El tráfico representa el conjunto de visitas que recibe una página, una oferta o un canal digital. Desde el punto de vista de la monetización, no todas las visitas tienen el mismo valor. La relevancia del público y su relación con la propuesta comercial son factores determinantes.
                </p>
                <p>
                  Existen diferentes fuentes de adquisición.
                </p>
                <p>
                  <strong>El posicionamiento orgánico</strong> permite atraer personas que realizan búsquedas relacionadas con determinados temas, necesidades o productos. Su desarrollo requiere trabajar la relevancia de los contenidos, la estructura de las páginas y la correspondencia entre lo que se publica y la intención de búsqueda.
                </p>
                <p>
                  <strong>Los contenidos editoriales</strong> pueden ayudar a explicar problemas, comparar alternativas y presentar soluciones relacionadas con una oferta. Cuando aportan información útil, permiten establecer un contexto para que el usuario valore una propuesta comercial.
                </p>
                <p>
                  <strong>Las redes sociales</strong> ofrecen canales para distribuir contenidos, desarrollar comunidades y generar oportunidades de contacto con públicos específicos. Su utilidad depende de la naturaleza de la audiencia y de las posibilidades de cada plataforma.
                </p>
                <p>
                  <strong>El email marketing</strong> permite mantener una comunicación directa con personas que han decidido recibir información. Puede contribuir a desarrollar una relación continuada y presentar propuestas comerciales cuando existe una correspondencia real con sus intereses.
                </p>
                <p>
                  <strong>La publicidad de pago</strong> permite adquirir visibilidad mediante campañas en plataformas publicitarias. A diferencia de las fuentes orgánicas, implica un coste directo y exige controlar cuidadosamente la relación entre inversión y resultados.
                </p>
                <p>
                  Cada fuente tiene características diferentes. No se trata de utilizar todos los canales disponibles, sino de comprender cuáles pueden acercarnos a las personas adecuadas y bajo qué condiciones podemos hacerlo.
                </p>
                <p>
                  Desde la perspectiva de la monetización, el objetivo no es acumular visitas indiscriminadamente. Es atraer tráfico que tenga relación con la oferta y que pueda avanzar hacia una acción comercial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 9: Conversión + Esquema F */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Conversión: de la visita a la acción comercial
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Conseguir que una persona llegue a una página es solo una parte del proceso. La conversión se produce cuando realiza la acción que esperamos y que corresponde al objetivo comercial de la oferta.
                </p>
                <p>
                  En el marketing de afiliados puede tratarse de una compra. En una campaña CPA puede ser un registro, una solicitud u otro evento definido por el anunciante. En cualquier caso, necesitamos comprender qué factores pueden influir en la decisión del usuario.
                </p>
                <p>
                  El primero es la correspondencia entre el origen del tráfico y la propuesta que encuentra. Si una persona llega esperando resolver una necesidad concreta y descubre una oferta que no responde a ella, es probable que abandone el proceso.
                </p>
                <p>
                  La claridad también importa. El usuario necesita comprender qué se ofrece, cuáles son sus características relevantes y qué debe hacer para continuar. Una presentación confusa puede introducir obstáculos innecesarios.
                </p>
                <p>
                  La confianza constituye otro elemento importante. La transparencia, la calidad de la información y la coherencia entre el contenido y la oferta ayudan a que una persona pueda evaluar la propuesta con mayor criterio.
                </p>
                <p>
                  También debemos prestar atención a la experiencia de navegación. Las páginas lentas, los formularios innecesariamente complejos, las instrucciones poco claras o los pasos que generan dudas pueden dificultar una acción que inicialmente despertaba interés.
                </p>
                <p>
                  No todas las conversiones dependen de los mismos factores. Una compra, un registro o una solicitud implican decisiones diferentes. Por eso, el proceso debe analizarse teniendo en cuenta el tipo de acción que buscamos y las condiciones concretas de la oferta.
                </p>
                <p>
                  La conversión no consiste en presionar al usuario para que actúe. Consiste en presentar una propuesta relevante, proporcionar información suficiente y facilitar un recorrido claro para que pueda tomar una decisión.
                </p>
              </div>
            </div>

            {/* Esquema F: Relación tráfico y conversión */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
                role="group"
                aria-label="Esquema F de relación entre tráfico y conversión"
              >
                <div className="border border-[#174532]/15 bg-[#dae7df]/14 rounded-sm p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">01 · Origen</span>
                  <p className="font-serif font-bold text-[#174532] text-[15px]">Fuentes de tráfico</p>
                </div>
                <div className="border border-[#174532]/15 bg-[#dae7df]/14 rounded-sm p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">02 · Destino</span>
                  <p className="font-serif font-bold text-[#174532] text-[15px]">Página / Oferta</p>
                </div>
                <div className="border border-[#174532]/15 bg-[#dae7df]/14 rounded-sm p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f513a] block mb-1">03 · Evaluación</span>
                  <p className="font-serif font-bold text-[#174532] text-[15px]">Decisión del usuario</p>
                </div>
                <div className="border border-[#174532] bg-[#174532] text-white rounded-sm p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#f4b925] block mb-1">04 · Resultado eventual</span>
                  <p className="font-serif font-bold text-[15px]">Acción comercial</p>
                </div>
              </div>
              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/70 leading-relaxed max-w-[68ch]">
                Esquema conceptual F. Explica la continuidad lógica desde la adquisición hasta la decisión del usuario, sin presuponer conversión automática.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BLOQUE 10: Medición y rentabilidad + Esquema G */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Medición y rentabilidad: comprender los números
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una actividad de monetización necesita datos para evaluar su funcionamiento. Sin medición podemos confundir movimiento con rendimiento, interpretar incorrectamente los resultados o mantener decisiones que no están produciendo el efecto esperado.
                </p>
                <p>
                  Existen varios indicadores que ayudan a comprender una actividad comercial.
                </p>
                <p>
                  Las <strong>visitas</strong> muestran cuántas personas llegan a una página o una oferta. Sin embargo, por sí solas no indican si ese tráfico tiene valor comercial.
                </p>
                <p>
                  La <strong>tasa de conversión</strong> relaciona el número de acciones conseguidas con el volumen de visitas o interacciones utilizado como referencia. Permite observar qué proporción del tráfico completa la acción prevista, siempre que se utilice una definición coherente de conversión.
                </p>
                <p>
                  Las <strong>comisiones</strong> representan la remuneración obtenida por las acciones reconocidas por el programa de afiliación o CPA. Debemos distinguir las conversiones registradas de aquellas que finalmente han sido validadas y aprobadas.
                </p>
                <p>
                  El <strong>coste de adquisición</strong> permite analizar cuánto cuesta conseguir una visita, un registro, un cliente u otra acción, según el objetivo de la campaña.
                </p>
                <p>
                  Los <strong>ingresos por clic</strong> y otros indicadores similares ayudan a relacionar la actividad generada con la remuneración obtenida. Su interpretación depende del modelo utilizado y de la información que proporcione la plataforma.
                </p>
                <p>
                  Finalmente, debemos distinguir entre ingresos y beneficio. Una campaña puede generar comisiones y, aun así, no resultar rentable si los costes asociados superan los ingresos obtenidos.
                </p>
                <p>
                  Por eso, una evaluación comercial no debería basarse en un único indicador. Necesitamos observar el conjunto de datos, identificar dónde se producen los resultados y comprender qué elementos pueden mejorarse.
                </p>
                <p>
                  Medir no significa perseguir números de manera aislada. Significa utilizar información para tomar mejores decisiones.
                </p>
              </div>
            </div>

            {/* Esquema G: Arquitectura de medición económica */}
            <figure className="mt-10 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-5">
                Esquema G · Relaciones entre indicadores de medición y resultado económico
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="border-t-2 border-[#174532]/30 pt-4">
                  <p className="text-[11.5px] uppercase tracking-wider font-semibold text-[#1f513a] mb-2">
                    Actividad y respuesta
                  </p>
                  <p className="font-serif font-bold text-[#174532] text-[15.5px] mb-1.5">
                    Visitas y conversiones
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                    El volumen de visitas solo cobra sentido comercial al relacionarse con las acciones completadas.
                  </p>
                </div>

                <div className="border-t-2 border-[#174532]/30 pt-4">
                  <p className="text-[11.5px] uppercase tracking-wider font-semibold text-[#1f513a] mb-2">
                    Retorno e inversión
                  </p>
                  <p className="font-serif font-bold text-[#174532] text-[15.5px] mb-1.5">
                    Comisiones, ingresos y costes
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                    Contraste entre las comisiones validadas, los ingresos generados y los costes de adquisición asociados.
                  </p>
                </div>

                <div className="border-t-2 border-[#f4b925] pt-4">
                  <p className="text-[11.5px] uppercase tracking-wider font-semibold text-[#1f513a] mb-2">
                    Balance real
                  </p>
                  <p className="font-serif font-bold text-[#174532] text-[15.5px] mb-1.5">
                    Beneficio
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                    Diferencia neta una vez descontados los costes totales; criterio clave para evaluar la rentabilidad real.
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* BLOQUE 11: Errores que comprometen la monetización */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Errores que comprometen la monetización digital
              </h2>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75] mb-8">
                La monetización puede debilitarse cuando se toman decisiones sin comprender cómo se relacionan los diferentes componentes del modelo comercial. Algunos errores son especialmente frecuentes.
              </p>

              <ol className="my-8 border-y border-[#174532]/18 divide-y divide-[#174532]/12">
                {MONETIZATION_ERRORS.map((item) => (
                  <li key={item.index} className="py-5 flex items-baseline gap-4">
                    <span
                      className="text-[12px] font-semibold tabular-nums text-[#1f513a] tracking-wider flex-shrink-0"
                      aria-hidden="true"
                    >
                      {item.index}
                    </span>
                    <p className="text-body text-[#1b1b1b]/85 leading-[1.7]">
                      <strong className="font-semibold text-[#174532]">{item.title}</strong> {item.detail}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                Superar estos errores requiere desarrollar criterio comercial y entender que la monetización es un proceso que necesita planificación, seguimiento y ajustes.
              </p>
            </div>
          </div>
        </section>

        {/* BLOQUE 12: Los cinco libros oficiales */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch] mb-10">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Cinco perspectivas para comprender la monetización digital
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El marketing de afiliados y los diferentes modelos de remuneración constituyen un campo amplio. Para comprenderlo mejor conviene explorar sus principales dimensiones: el funcionamiento de la afiliación, las campañas CPA, los Smartlinks, los marketplaces de productos digitales y las estrategias de promoción.
                </p>
                <p>
                  La colección de FG Perspectiva reúne cinco obras relacionadas con estos ámbitos.
                </p>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              {APPROVED_INCOME_BOOKS.map((entry) => {
                const catalogBook = booksBySlug.get(entry.slug);
                const bookUrl = catalogBook ? (catalogBook.path || `/${catalogBook.slug}/`) : `/${entry.slug}/`;
                const hasPurchaseOptions = Boolean(
                  catalogBook?.purchaseOptions && catalogBook.purchaseOptions.length > 0
                );
                const bookTitle = catalogBook?.title || entry.fallbackTitle;

                return (
                  <div
                    key={entry.slug}
                    className="bg-white border border-[#174532]/15 rounded-sm p-6 sm:p-8 grid sm:grid-cols-12 gap-6 sm:gap-8 items-start"
                  >
                    <div className="sm:col-span-3 flex sm:justify-start">
                      {catalogBook && (
                        <Link
                          href={bookUrl}
                          className="inline-block bg-[#dae7df]/16 p-2.5 border border-[#174532]/15 rounded-[2px] shadow-xs hover:border-[#174532]/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                        >
                          <img
                            src={catalogBook.coverUrl}
                            alt={`Portada del libro ${bookTitle}`}
                            width={entry.dimensions.width}
                            height={entry.dimensions.height}
                            className={`w-28 sm:w-32 h-auto ${entry.dimensions.aspectClass} object-contain block`}
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        </Link>
                      )}
                    </div>

                    <div className="sm:col-span-9">
                      <h3 className="text-h2 font-bold font-serif text-[#174532] mb-3 leading-snug">
                        {bookTitle}
                      </h3>

                      <p className="text-body text-[#1b1b1b]/85 leading-[1.75] mb-6 max-w-[62ch]">
                        {entry.editorialDescription}
                      </p>

                      {catalogBook && (
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            href={bookUrl}
                            className="inline-flex items-center justify-center py-2.5 px-5 bg-[#174532] text-white text-[13.5px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                          >
                            Ver ficha del libro
                          </Link>

                          {hasPurchaseOptions && (
                            <button
                              type="button"
                              onClick={() => setSelectedBook(catalogBook)}
                              className="inline-flex items-center justify-center py-2.5 px-5 bg-white border border-[#174532]/30 text-[#174532] text-[13.5px] font-semibold rounded-sm hover:bg-[#dae7df]/45 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                            >
                              Opciones de compra
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="max-w-[68ch] mt-8">
              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                Las cinco obras permiten acercarnos a diferentes dimensiones de un mismo territorio. No representan una fórmula única ni garantizan resultados comerciales. Su valor está en ofrecer perspectivas para comprender mejor los modelos, las herramientas y las decisiones que intervienen en la monetización digital.
              </p>
            </div>
          </div>
        </section>

        {/* BLOQUE 13: Cierre editorial */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Los ingresos digitales se construyen comprendiendo las conexiones
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Generar ingresos mediante Internet requiere mucho más que encontrar una oferta y compartir un enlace. Necesitamos comprender el modelo comercial, conocer el producto, identificar a las personas a las que puede interesarles y desarrollar mecanismos para acercar ambas partes.
                </p>
                <p>
                  El marketing de afiliados, el CPA y los marketplaces de productos digitales ofrecen posibilidades distintas, pero todos exigen criterio para seleccionar propuestas, trabajar con tráfico relevante y evaluar las conversiones.
                </p>
                <p>
                  También necesitamos entender que la monetización no es un proceso aislado. Está relacionada con los contenidos, los canales de adquisición, la confianza de la audiencia y la capacidad de medir lo que sucede. Cuando estos componentes se desarrollan sin conexión, la actividad puede convertirse en una sucesión de acciones dispersas. Cuando se comprenden sus relaciones, resulta más sencillo tomar decisiones y evaluar el funcionamiento del proyecto.
                </p>
                <p>
                  En FG Perspectiva creemos que conocer los mecanismos económicos del entorno digital es una parte esencial para desarrollar proyectos con visión a largo plazo.
                </p>
              </div>

              <div className="mt-8 py-6 border-y border-[#174532]/20">
                <p className="font-serif text-[18.5px] md:text-[20px] font-bold text-[#174532] leading-relaxed">
                  <strong>
                    No se trata solamente de conseguir visitas o promocionar productos. Se trata de comprender cómo se genera valor, cómo se conecta con una audiencia y cómo esa relación puede convertirse en una actividad comercial sostenible.
                  </strong>
                </p>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/biblioteca/"
                  className="inline-flex items-center text-[14px] font-semibold text-[#174532] hover:text-[#1f513a] underline underline-offset-4 decoration-[#174532]/35 hover:decoration-[#174532] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                >
                  ← Volver a la Biblioteca FG Perspectiva
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      {selectedBook && (
        <PurchaseModal
          isOpen={Boolean(selectedBook)}
          onClose={() => setSelectedBook(null)}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default IncomeView;
