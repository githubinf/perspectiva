import React, { useState } from 'react';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';

interface InitiationViewProps {
  category: BookCategory;
}

const BLOG_ARCHITECTURE_ITEMS = [
  {
    index: '01',
    term: 'Identificar el propósito del sitio:',
    detail: 'la página principal debe comunicar qué ofrece el proyecto y a quién puede resultar útil.',
  },
  {
    index: '02',
    term: 'Organizar los contenidos:',
    detail: 'las categorías permiten agrupar publicaciones relacionadas y establecer una jerarquía temática.',
  },
  {
    index: '03',
    term: 'Facilitar la navegación:',
    detail: 'los menús, enlaces internos y elementos de orientación ayudan a encontrar información sin recorrer páginas innecesarias.',
  },
  {
    index: '04',
    term: 'Crear páginas de referencia:',
    detail: 'determinadas secciones necesitan permanecer accesibles porque explican el proyecto, sus servicios o sus principales recursos.',
  },
  {
    index: '05',
    term: 'Mantener una experiencia coherente:',
    detail: 'diseño, estructura y contenido deben trabajar juntos para que el usuario pueda recorrer el sitio con facilidad.',
  },
];

const EDITORIAL_INQUIRY_QUESTIONS = [
  '¿Qué quiere comprender la persona que busca este tema?',
  '¿Qué conocimientos necesita para avanzar?',
  '¿Qué dudas suelen aparecer alrededor de esta cuestión?',
  '¿Qué información podemos aportar que resulte clara y útil?',
  '¿Qué relación tiene este contenido con el propósito general del proyecto?',
];

const INBOUND_PROCESSES = [
  {
    step: '01',
    title: 'Atracción.',
    description:
      'Desarrollar contenidos y experiencias que permitan llegar a personas interesadas en los temas relacionados con nuestra propuesta.',
  },
  {
    step: '02',
    title: 'Conversión.',
    description:
      'Facilitar que los visitantes realicen una acción voluntaria y relevante, como solicitar información, suscribirse o descargar un recurso.',
  },
  {
    step: '03',
    title: 'Relación.',
    description:
      'Mantener una comunicación útil y coherente con las personas que han mostrado interés, ofreciendo información relacionada con sus necesidades.',
  },
  {
    step: '04',
    title: 'Fidelización.',
    description:
      'Desarrollar experiencias que permitan conservar una relación positiva y duradera con quienes ya han confiado en la propuesta.',
  },
];

const PROJECT_FLOW_STEPS = [
  { step: '01', label: 'Presencia digital' },
  { step: '02', label: 'Contenidos' },
  { step: '03', label: 'Visibilidad' },
  { step: '04', label: 'Audiencia' },
  { step: '05', label: 'Relación' },
  { step: '06', label: 'Monetización' },
];

const COMMON_EARLY_ERRORS = [
  {
    index: '01',
    title: 'Crear un sitio sin una dirección definida.',
    detail:
      'Cuando no sabemos qué queremos ofrecer ni a quién nos dirigimos, los contenidos tienden a dispersarse y la propuesta pierde claridad.',
  },
  {
    index: '02',
    title: 'Publicar sin una planificación editorial.',
    detail:
      'La improvisación puede generar actividad durante un tiempo, pero dificulta construir una línea temática coherente y desarrollar contenidos relacionados.',
  },
  {
    index: '03',
    title: 'Depender exclusivamente de plataformas externas.',
    detail:
      'Las redes sociales pueden ser canales útiles, pero no deberían sustituir automáticamente la construcción de una presencia propia cuando el objetivo es desarrollar un activo digital.',
  },
  {
    index: '04',
    title: 'Confundir tráfico con resultados.',
    detail:
      'Recibir visitas no significa que estemos alcanzando a la audiencia adecuada ni que exista una relación entre el contenido y los objetivos del proyecto.',
  },
  {
    index: '05',
    title: 'Intentar monetizar antes de comprender al público.',
    detail:
      'Incorporar recomendaciones comerciales sin conocer las necesidades de los lectores puede perjudicar la confianza y restar utilidad a las publicaciones.',
  },
  {
    index: '06',
    title: 'Tratar el SEO como una colección de trucos.',
    detail:
      'Repetir palabras clave o producir páginas sin valor editorial no sustituye la necesidad de responder bien a las búsquedas.',
  },
  {
    index: '07',
    title: 'Abandonar antes de desarrollar continuidad.',
    detail:
      'Una presencia digital necesita tiempo para organizar sus contenidos, mejorar su visibilidad y encontrar una relación adecuada con su audiencia. La constancia, acompañada de análisis y ajustes, es más útil que publicar sin dirección.',
  },
];

const APPROVED_BOOK_PERSPECTIVES: Array<{
  slug: string;
  heading: string;
  editorialDescription: string;
  dimensions: { width: number; height: number; aspectClass: string };
}> = [
  {
    slug: 'como-crear-un-blog-optimizado',
    heading: 'Cómo crear un Blog optimizado',
    editorialDescription:
      'El blog constituye una de las infraestructuras fundamentales para organizar una presencia digital basada en contenidos. Esta obra se relaciona con el desarrollo y la optimización de ese espacio propio, un punto de partida para quienes desean establecer una publicación online y trabajar sobre su estructura.',
    dimensions: { width: 400, height: 489, aspectClass: 'aspect-[400/489]' },
  },
  {
    slug: 'mi-blog-y-los-programas-de-afiliados',
    heading: 'Mi Blog y los Programas de Afiliados',
    editorialDescription:
      'Una vez que existe una presencia digital, podemos explorar cómo relacionar sus contenidos con oportunidades comerciales. Esta obra conecta el ámbito del blogging con los programas de afiliados, una de las alternativas que permite desarrollar actividades de recomendación y monetización dentro de un proyecto online.',
    dimensions: { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  },
  {
    slug: 'guia-completa-de-inbound-marketing',
    heading: 'Guía Completa de Inbound Marketing',
    editorialDescription:
      'El crecimiento de una presencia digital también depende de cómo atraemos a las personas, establecemos relaciones y comunicamos una propuesta. Esta obra se sitúa en el ámbito del inbound marketing y permite explorar una perspectiva centrada en los contenidos y en la relación con la audiencia.',
    dimensions: { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  },
];

const InitiationView: React.FC<InitiationViewProps> = ({ category }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const booksBySlug = new Map<string, BookItem>(
    category.books.map((book) => [book.slug, book])
  );

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* HERO EDITORIAL TIPOGRÁFICO */}
      <header className="bg-[#ffffff] border-b border-[#174532]/12 pt-6 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: category.category, href: category.path || '/iniciacion/' },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
              <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
                Ruta editorial · {category.category}
              </span>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-5 text-balance">
              Iniciación: construir una presencia digital desde sus fundamentos
            </h1>

            <p className="text-subtitle text-[#1b1b1b]/80 leading-relaxed max-w-[65ch]">
              {category.intro}
            </p>
          </div>
        </div>
      </header>

      {/* ARTÍCULO EDITORIAL PRINCIPAL */}
      <article aria-label="Desarrollo editorial de la categoría Iniciación">
        {/* APARTADO 1: Definición y dirección inicial del proyecto */}
        <section className="py-14 md:py-20 bg-[#dae7df]/14 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-7 leading-snug text-balance">
                Antes de crear un proyecto digital, necesitamos saber qué queremos construir
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Comenzar un proyecto en Internet parece, a primera vista, una tarea sencilla. Podemos abrir un blog, crear una página web, publicar contenidos y comenzar a compartirlos en distintos canales. Las herramientas están disponibles y nunca había sido tan accesible poner en marcha una presencia digital.
                </p>
                <p>
                  Sin embargo, tener un sitio web no significa haber construido un proyecto. Publicar artículos no garantiza que lleguemos a las personas adecuadas, y recibir visitas tampoco implica que estemos desarrollando una actividad con posibilidades de continuidad.
                </p>
                <p>
                  La diferencia está en lo que existe detrás de esas acciones.
                </p>
                <p>
                  Un proyecto digital necesita una dirección, una propuesta de valor y una estructura que permita relacionar sus distintos componentes. Antes de elegir una plataforma o comenzar a publicar, debemos comprender qué queremos ofrecer, a quién nos dirigimos y qué función cumplirá nuestra presencia en Internet.
                </p>
                <p>
                  Podemos querer compartir conocimientos, desarrollar una publicación especializada, recomendar productos y servicios, crear una comunidad o construir una fuente de ingresos. Cada propósito implica decisiones diferentes, pero todos necesitan una base sobre la que podamos trabajar.
                </p>
                <p>
                  En FG Perspectiva entendemos la iniciación como el proceso de adquirir esos fundamentos. No se trata de reunir herramientas ni de reproducir modelos ajenos, sino de comprender cómo se desarrolla una presencia digital propia y qué elementos permiten convertirla en un proyecto organizado.
                </p>
              </div>

              <p className="mt-8 pt-6 border-t border-[#174532]/20 font-serif text-[19px] md:text-[21px] text-[#174532] leading-relaxed">
                El primer paso consiste en dejar de pensar únicamente en lo que vamos a publicar y comenzar a pensar en lo que queremos construir.
              </p>
            </div>
          </div>
        </section>

        {/* APARTADO 2: Infraestructura — El blog como centro */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                El blog como centro de una presencia digital propia
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una de las decisiones más importantes al comenzar un proyecto online es elegir dónde estableceremos nuestra presencia principal.
                </p>
                <p>
                  Las redes sociales, las plataformas de publicación y otros canales digitales permiten comunicarnos con una audiencia, pero no todos ofrecen el mismo nivel de control sobre los contenidos, la estructura y las condiciones de funcionamiento. Por eso, disponer de un espacio propio puede representar una ventaja importante.
                </p>
                <p>
                  Un blog permite organizar información, desarrollar contenidos especializados, crear páginas permanentes y establecer una estructura de navegación que responda a las necesidades de nuestros visitantes.
                </p>
                <p>
                  No debemos entenderlo únicamente como un lugar donde publicamos artículos cronológicamente. Puede convertirse en el centro de una presencia digital que reúna diferentes recursos y conecte distintas actividades.
                </p>
                <p>
                  Para que cumpla esa función, necesitamos prestar atención a su arquitectura.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  La organización determina cómo se utiliza un sitio web
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Un sitio web debe permitir que las personas comprendan rápidamente dónde están, qué pueden encontrar y cómo acceder a la información que necesitan.
                  </p>
                  <p>
                    Esto requiere una organización lógica de las páginas, las categorías y los contenidos. También implica establecer relaciones entre los distintos temas para que la navegación no dependa exclusivamente de los buscadores.
                  </p>
                  <p>
                    Una estructura bien planteada facilita varias tareas:
                  </p>
                </div>

                <ul className="mt-6 mb-8 border-y border-[#174532]/18 divide-y divide-[#174532]/12">
                  {BLOG_ARCHITECTURE_ITEMS.map((item) => (
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
                    La arquitectura también tiene consecuencias para el posicionamiento en buscadores. Cuando los contenidos están organizados de forma comprensible, resulta más sencillo identificar de qué trata cada página y cómo se relaciona con el resto del sitio.
                  </p>
                  <p>
                    Por tanto, construir un blog no consiste solamente en instalar una plantilla y comenzar a escribir. Necesitamos desarrollar una infraestructura que permita publicar, organizar y conectar el conocimiento que queremos compartir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 3: Contenido y planificación editorial */}
        <section className="py-14 md:py-20 bg-[#dae7df]/14 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                El contenido como fundamento del proyecto
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una vez que tenemos una estructura, aparece una de las decisiones que más influirá en el desarrollo de nuestra presencia digital: qué contenidos vamos a crear.
                </p>
                <p>
                  Publicar con frecuencia puede parecer una buena estrategia, pero la cantidad de artículos no determina por sí sola la calidad de un proyecto. Un sitio puede acumular decenas de publicaciones y seguir sin ofrecer una propuesta reconocible si sus contenidos no responden a una dirección editorial.
                </p>
                <p>
                  Necesitamos identificar los temas que queremos abordar, comprender qué busca nuestra audiencia y establecer qué conocimientos podemos desarrollar de manera consistente.
                </p>
                <p>
                  Esto implica pasar de la improvisación a una planificación editorial.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  Comprender qué necesita encontrar nuestra audiencia
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Los contenidos adquieren sentido cuando responden a preguntas, necesidades, intereses o problemas reales.
                  </p>
                  <p>
                    Una persona que busca información sobre un tema puede encontrarse en diferentes situaciones. Quizá está descubriendo una disciplina, comparando alternativas, intentando resolver una dificultad concreta o buscando información para tomar una decisión.
                  </p>
                  <p>
                    Comprender esas diferencias nos ayuda a desarrollar publicaciones más útiles.
                  </p>
                  <p>
                    No es lo mismo explicar los fundamentos de una actividad que ofrecer una guía para resolver un problema específico. Tampoco es igual presentar un concepto que analizar distintas alternativas para que el lector pueda elegir.
                  </p>
                  <p>
                    Por eso, antes de escribir, conviene preguntarnos:
                  </p>
                </div>

                <div className="mt-6 mb-7 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8 shadow-xs">
                  <ol className="space-y-3.5">
                    {EDITORIAL_INQUIRY_QUESTIONS.map((question, idx) => (
                      <li key={question} className="flex items-baseline gap-3.5 text-body text-[#174532] font-medium leading-[1.65]">
                        <span
                          className="text-[12px] font-semibold tabular-nums text-[#1f513a] flex-shrink-0"
                          aria-hidden="true"
                        >
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                  Estas preguntas ayudan a evitar publicaciones creadas únicamente para incorporar palabras clave o aumentar el número de páginas indexadas.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  Construir una línea editorial reconocible
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Un proyecto digital necesita cierta continuidad temática. Esto no significa que todos sus contenidos deban tratar exactamente el mismo asunto, sino que deben guardar una relación comprensible con la propuesta general.
                  </p>
                  <p>
                    Podemos organizar las publicaciones en grandes áreas, desarrollar temas relacionados y avanzar desde conceptos fundamentales hacia cuestiones más específicas.
                  </p>
                  <p>
                    Esta organización facilita la planificación y permite que cada artículo contribuya a construir una biblioteca de conocimiento.
                  </p>
                  <p>
                    Con el tiempo, los contenidos pueden reforzarse entre sí. Una publicación introductoria puede conducir a otra más especializada, mientras que una guía amplia puede reunir enlaces hacia explicaciones más concretas.
                  </p>
                  <p>
                    De esta manera, el sitio deja de ser una sucesión de artículos independientes y comienza a funcionar como un recurso organizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 4: Visibilidad y fundamentos SEO */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Visibilidad: cómo conseguir que nos encuentren
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Un contenido puede estar bien elaborado y responder a una necesidad real, pero si nadie consigue encontrarlo, su alcance será limitado.
                </p>
                <p>
                  La visibilidad constituye uno de los desafíos principales de cualquier proyecto digital. Necesitamos desarrollar mecanismos que permitan conectar nuestras publicaciones con las personas interesadas en los temas que abordamos.
                </p>
                <p>
                  Entre las distintas posibilidades, el posicionamiento orgánico en buscadores ocupa un lugar importante porque permite que los contenidos aparezcan cuando alguien realiza una búsqueda relacionada con ellos.
                </p>
                <p>
                  Sin embargo, trabajar el SEO no significa incorporar palabras clave de manera repetitiva ni adaptar cada párrafo para satisfacer un algoritmo. Significa comprender cómo buscan las personas, qué información esperan encontrar y cómo podemos ofrecerla de una manera organizada.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  La intención de búsqueda como punto de partida
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Detrás de una consulta existe una necesidad. Una persona puede buscar una definición, una explicación, una comparación, una solución o una recomendación.
                  </p>
                  <p>
                    Identificar esa intención nos permite determinar qué tipo de contenido debemos desarrollar.
                  </p>
                  <p>
                    Si alguien busca cómo crear un blog, probablemente necesita comprender los pasos iniciales, las decisiones técnicas y la organización del sitio. Si busca comparar plataformas, espera encontrar diferencias relevantes que le ayuden a elegir.
                  </p>
                  <p>
                    Cuando el contenido responde a la intención de búsqueda, tiene más posibilidades de resultar útil.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  La estructura también influye en el posicionamiento
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    El SEO no depende únicamente del texto. La organización de las páginas, los encabezados, los enlaces internos, los títulos y las descripciones ayudan a comunicar el contenido de cada URL.
                  </p>
                  <p>
                    También debemos considerar aspectos técnicos como la velocidad, la adaptación a dispositivos móviles, la indexación y la correcta configuración de las direcciones canónicas.
                  </p>
                  <p>
                    A esto se suma la necesidad de desarrollar información suficientemente completa y bien organizada para que el usuario encuentre respuestas sin tener que recorrer varias páginas que repiten lo mismo.
                  </p>
                  <p>
                    El posicionamiento es, por tanto, una combinación de contenido, arquitectura y aspectos técnicos. Ninguno de estos elementos garantiza por sí solo resultados, pero todos contribuyen a construir una presencia digital más sólida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 5: Tráfico frente a Audiencia */}
        <section className="py-14 md:py-20 bg-[#dae7df]/14 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                De las visitas a una audiencia: desarrollar una relación
              </h2>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                Conseguir tráfico es importante, pero debemos distinguir entre recibir visitantes y desarrollar una audiencia.
              </p>
            </div>

            {/* Cuadro comparativo sin duplicación textual */}
            <div className="mt-7 mb-8 grid md:grid-cols-2 gap-4 max-w-4xl">
              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#1f513a] mb-2">
                  Visitas
                </p>
                <p className="text-body text-[#1b1b1b]/85 leading-[1.7]">
                  Una visita representa una interacción puntual.
                </p>
              </div>
              <div className="bg-[#174532] text-white border border-[#174532] rounded-sm p-6">
                <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#f4b925] mb-2">
                  Audiencia
                </p>
                <p className="text-body text-white/95 leading-[1.7]">
                  Una audiencia implica que las personas reconocen el valor de lo que ofrecemos, encuentran motivos para regresar y pueden mantener una relación con el proyecto.
                </p>
              </div>
            </div>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                Esta diferencia cambia la manera de entender el crecimiento.
              </p>
              <p>
                No necesitamos atraer a cualquier visitante. Nos interesa llegar a personas que tengan relación con los temas que desarrollamos y que puedan encontrar utilidad en nuestros contenidos.
              </p>
              <p>
                Para ello, la consistencia editorial es fundamental. Cuando un sitio aborda sus temas con claridad, ofrece información útil y mantiene una organización comprensible, resulta más sencillo que los usuarios identifiquen su propuesta.
              </p>
              <p>
                También debemos considerar que no todas las personas llegan con el mismo nivel de conocimiento. Algunas están comenzando a explorar un tema, mientras que otras buscan información más avanzada. Una buena organización permite atender diferentes necesidades sin perder coherencia.
              </p>

              <div className="pt-8 mt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  La relación no termina cuando el usuario abandona una página
                </h3>

                <div className="space-y-5">
                  <p>
                    Una presencia digital puede desarrollar distintos mecanismos para mantener el contacto con su audiencia.
                  </p>
                  <p>
                    Entre ellos se encuentran las suscripciones voluntarias, las publicaciones periódicas, los recursos descargables y los canales de comunicación directa.
                  </p>
                  <p>
                    El email marketing, por ejemplo, permite establecer una relación que no depende exclusivamente de que una persona vuelva a encontrar nuestro sitio en un buscador o en una red social.
                  </p>
                  <p>
                    Lo importante es comprender que una audiencia no se construye únicamente acumulando direcciones o seguidores. Se desarrolla ofreciendo motivos para mantener el interés y respetando la relación que establecemos con las personas.
                  </p>
                  <p>
                    La confianza se construye mediante la utilidad, la coherencia y la continuidad de lo que publicamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 6: Primeras posibilidades de monetización */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Primeras posibilidades de monetización: cuando el contenido se conecta con una actividad comercial
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Un proyecto digital puede comenzar con el propósito de compartir conocimientos, desarrollar una publicación especializada o crear una presencia profesional. Con el tiempo, también puede incorporar mecanismos de monetización.
                </p>
                <p>
                  Uno de los modelos que permite explorar esta posibilidad es el marketing de afiliados.
                </p>
                <p>
                  Mediante los programas de afiliación podemos recomendar productos o servicios de terceros y recibir una comisión cuando se produce una acción comercial válida, según las condiciones de cada programa.
                </p>
                <p>
                  Este modelo puede integrarse en un blog cuando existe una relación lógica entre los contenidos publicados, las necesidades de la audiencia y los productos recomendados.
                </p>
                <p>
                  Sin embargo, no basta con insertar enlaces comerciales en los artículos. Para que la recomendación tenga sentido, necesitamos comprender qué ofrecemos, por qué puede resultar relevante y qué información necesita el lector antes de tomar una decisión.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  La monetización debe responder al propósito del contenido
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Imaginemos un sitio especializado en una disciplina concreta. Sus publicaciones pueden explicar conceptos, analizar herramientas, comparar alternativas y orientar a los lectores en distintas etapas de su aprendizaje.
                  </p>
                  <p>
                    Dentro de ese contexto, determinadas recomendaciones comerciales pueden resultar naturales porque están relacionadas con los temas que se desarrollan.
                  </p>
                  <p>
                    En cambio, incorporar productos sin conexión con el contenido puede perjudicar la experiencia y debilitar la credibilidad del proyecto.
                  </p>
                  <p>
                    Por eso, la monetización no debería convertirse en el único criterio para decidir qué publicamos.
                  </p>
                  <p>
                    Un proyecto sostenible necesita encontrar una relación equilibrada entre utilidad editorial, necesidades de audiencia y posibilidades comerciales.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-[#174532]/15">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-5 leading-snug text-balance">
                  Comprender el papel de los programas de afiliados
                </h3>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Los programas de afiliación presentan condiciones diferentes. Algunos remuneran las compras realizadas mediante enlaces de recomendación, mientras que otros pueden utilizar modelos de atribución y acciones comerciales distintos.
                  </p>
                  <p>
                    También pueden variar las comisiones, las reglas de promoción, los plazos de atribución y los requisitos para participar.
                  </p>
                  <p>
                    Antes de incorporarnos a un programa, debemos conocer sus condiciones y comprobar que los productos o servicios encajan con nuestra propuesta editorial.
                  </p>
                  <p>
                    La transparencia también forma parte de esta relación. Las recomendaciones comerciales deben identificarse adecuadamente y no presentarse como opiniones independientes cuando existe un vínculo de afiliación.
                  </p>
                  <p>
                    El objetivo es desarrollar una actividad comercial que no contradiga la confianza que intentamos construir con nuestros contenidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 7: Inbound marketing y secuencia de 4 procesos */}
        <section className="py-14 md:py-20 bg-[#dae7df]/14 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Inbound marketing: atraer antes de vender
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El marketing digital reúne diferentes disciplinas y mecanismos para conectar una propuesta con su público. Dentro de ese conjunto, el inbound marketing plantea una perspectiva centrada en atraer personas mediante contenidos y experiencias relevantes, en lugar de depender exclusivamente de mensajes comerciales dirigidos de forma indiscriminada.
                </p>
                <p>
                  Su importancia está en comprender que las personas no siempre están preparadas para tomar una decisión en el primer contacto con una marca, un producto o un servicio.
                </p>
                <p>
                  Algunas apenas están descubriendo un problema. Otras investigan alternativas y comparan opciones. También existen personas que ya conocen lo que necesitan y están evaluando dónde adquirirlo.
                </p>
                <p>
                  Una estrategia de inbound marketing considera esas distintas etapas y desarrolla contenidos adecuados para acompañar el recorrido.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-[#174532]/15">
              <div className="max-w-[68ch]">
                <h3 className="text-h2 font-bold font-serif text-[#174532] mb-4 leading-snug text-balance">
                  Atracción, conversión, relación y fidelización
                </h3>

                <p className="text-body text-[#1b1b1b]/85 leading-[1.75] mb-7">
                  Podemos comprender este enfoque mediante cuatro grandes procesos:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mb-8">
                {INBOUND_PROCESSES.map((item) => (
                  <div
                    key={item.step}
                    className="bg-white border border-[#174532]/15 rounded-sm p-6"
                  >
                    <span
                      className="block text-[11px] font-semibold tabular-nums tracking-[0.14em] text-[#1f513a] mb-1.5"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                    <div className="mb-2.5 border-b border-[#174532]/10 pb-2.5">
                      <p className="font-serif text-[18px] font-bold text-[#174532]">
                        <strong>{item.title}</strong>
                      </p>
                    </div>
                    <p className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Estos procesos no deben entenderse como una secuencia automática ni como una garantía de ventas. Son una manera de organizar la comunicación y comprender cómo evoluciona la relación entre una organización y su audiencia.
                </p>
                <p>
                  En un proyecto basado en contenidos, el blog puede contribuir especialmente a la atracción, mientras que los formularios, el correo electrónico y otros canales pueden facilitar la continuidad de la relación.
                </p>
                <p>
                  La clave está en que cada elemento tenga una función definida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 8: Conexión integral + Diagrama progresivo */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Cómo se conectan los componentes de un proyecto digital
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Hasta aquí hemos abordado diferentes disciplinas: creación de un sitio web, organización de contenidos, SEO, desarrollo de audiencia, afiliación e inbound marketing.
                </p>
                <p>
                  Podríamos tratarlas como actividades independientes, pero su verdadero potencial aparece cuando comprendemos cómo se relacionan.
                </p>
                <p>
                  El blog proporciona el espacio donde organizamos y publicamos nuestros contenidos. La estrategia editorial determina qué información desarrollamos y para quién. El SEO contribuye a mejorar la visibilidad de las publicaciones. Los canales de comunicación permiten mantener una relación con la audiencia, mientras que los modelos de monetización pueden conectar la propuesta editorial con una actividad comercial.
                </p>
                <p>
                  Cada componente cumple una función diferente, pero todos deben responder a una misma dirección.
                </p>
              </div>
            </div>

            {/* Diagrama secuencial progresivo sin anidamiento de cajas */}
            <div
              className="my-8 py-6 border-y border-[#174532]/15 max-w-5xl"
              role="group"
              aria-label="Secuencia de conexión de los componentes de un proyecto digital"
            >
              <ol className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch gap-2.5 lg:gap-2">
                {PROJECT_FLOW_STEPS.map((node, idx) => (
                  <li key={node.step} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:flex-1 min-w-0">
                    <div className="flex-1 bg-[#dae7df]/16 border border-[#174532]/15 rounded-sm px-3.5 py-3 flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-2 min-w-0 h-full">
                      <span
                        className="text-[11px] font-semibold tabular-nums text-[#1f513a] tracking-wider"
                        aria-hidden="true"
                      >
                        {node.step}
                      </span>
                      <span className="font-serif text-[13.5px] font-bold text-[#174532] leading-snug">
                        {node.label}
                      </span>
                    </div>
                    {idx < PROJECT_FLOW_STEPS.length - 1 && (
                      <>
                        <span
                          className="text-[#174532] font-bold text-base select-none hidden sm:inline-flex items-center justify-center flex-shrink-0"
                          aria-hidden="false"
                        >
                          →
                        </span>
                        <span
                          className="text-[#174532]/65 font-bold text-xs select-none flex sm:hidden items-center justify-center py-0.5"
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                Esta secuencia no representa una fórmula rígida ni un recorrido idéntico para todos los proyectos. Es una manera de visualizar cómo pueden conectarse las principales áreas de trabajo.
              </p>
              <p>
                También nos ayuda a reconocer por qué algunas iniciativas no avanzan como esperan sus creadores.
              </p>
              <p>
                Un blog puede publicar artículos sin desarrollar una estrategia de visibilidad. Un sitio puede atraer visitas sin ofrecer una propuesta reconocible. Una página puede incorporar enlaces de afiliación sin haber construido la confianza necesaria para que sus recomendaciones resulten relevantes.
              </p>
              <p>
                El problema no siempre está en una herramienta concreta. Muchas veces está en la falta de conexión entre las decisiones que forman parte del proyecto.
              </p>
            </div>
          </div>
        </section>

        {/* APARTADO 9: Errores frecuentes (Registro editorial numerado) */}
        <section className="py-14 md:py-20 bg-[#dae7df]/14 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Errores que pueden debilitar un proyecto digital desde el comienzo
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La facilidad para poner en marcha una página web puede llevarnos a comenzar sin haber reflexionado suficientemente sobre su estructura y su propósito.
                </p>
                <p>
                  Algunos errores no producen consecuencias inmediatas, pero pueden dificultar el crecimiento posterior.
                </p>
              </div>

              <ol className="my-8 border-y border-[#174532]/18 divide-y divide-[#174532]/12 bg-white px-6 sm:px-8 rounded-sm">
                {COMMON_EARLY_ERRORS.map((item) => (
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
                Evitar estos errores no garantiza el éxito, pero permite comenzar con una comprensión más realista de lo que implica desarrollar un proyecto online.
              </p>
            </div>
          </div>
        </section>

        {/* APARTADO 10: Integración editorial de los tres libros oficiales */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch] mb-10">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Tres perspectivas para comenzar a construir
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La categoría Iniciación reúne tres obras que abordan áreas diferentes, pero relacionadas, del desarrollo de una presencia digital.
                </p>
                <p>
                  Cada una permite acercarse a un componente específico del proyecto: la construcción del blog, las posibilidades de monetización mediante afiliación y la comprensión de las estrategias de inbound marketing.
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#174532]/15 border-y border-[#174532]/15 max-w-4xl">
              {APPROVED_BOOK_PERSPECTIVES.map((perspective) => {
                const catalogBook = booksBySlug.get(perspective.slug);
                const bookUrl = catalogBook ? (catalogBook.path || `/${catalogBook.slug}/`) : `/${perspective.slug}/`;
                const hasPurchaseOptions = Boolean(
                  catalogBook?.purchaseOptions && catalogBook.purchaseOptions.length > 0
                );
                const bookTitle = catalogBook?.title || perspective.heading;

                return (
                  <div
                    key={perspective.slug}
                    className="py-8 md:py-10 grid sm:grid-cols-12 gap-6 sm:gap-8 items-start"
                  >
                    <div className="sm:col-span-3 flex sm:justify-start">
                      {catalogBook && (
                        <Link
                          href={bookUrl}
                          className="inline-block bg-[#dae7df]/18 p-2.5 border border-[#174532]/15 rounded-[2px] shadow-xs hover:border-[#174532]/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                        >
                          <img
                            src={catalogBook.coverUrl}
                            alt={`Portada del libro ${bookTitle}`}
                            width={perspective.dimensions.width}
                            height={perspective.dimensions.height}
                            className={`w-28 sm:w-32 h-auto ${perspective.dimensions.aspectClass} object-contain block`}
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
                        {perspective.editorialDescription}
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
                Las tres perspectivas no representan una única fórmula ni tienen que aplicarse de manera idéntica en todos los proyectos. Su relación está en que abordan dimensiones distintas que podemos necesitar comprender al desarrollar una presencia digital propia.
              </p>
            </div>
          </div>
        </section>

        {/* APARTADO 11: Cierre editorial */}
        <section className="py-14 md:py-20 bg-[#dae7df]/14">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                El comienzo de una construcción a largo plazo
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Iniciar un proyecto digital no consiste simplemente en elegir una plataforma, publicar algunos artículos y esperar resultados. Supone tomar decisiones sobre qué queremos construir, cómo vamos a organizarlo y qué valor podemos aportar a las personas a las que nos dirigimos.
                </p>
                <p>
                  Necesitamos comprender la función del sitio web, desarrollar una línea editorial, crear contenidos relevantes, trabajar la visibilidad y encontrar maneras coherentes de mantener una relación con la audiencia.
                </p>
                <p>
                  La monetización puede formar parte de ese recorrido, pero no debería sustituir los fundamentos que permiten sostenerlo.
                </p>
                <p>
                  En FG Perspectiva entendemos Iniciación como el territorio donde comenzamos a conectar esos conocimientos. Un espacio para comprender las bases de una presencia digital, reconocer las disciplinas que intervienen en su desarrollo y adquirir una perspectiva más amplia sobre lo que implica construir un proyecto online.
                </p>
                <p>
                  No necesitamos comenzar con una estructura compleja ni dominar todas las herramientas desde el primer día. Necesitamos una dirección, fundamentos sólidos y la disposición para desarrollar cada componente con sentido.
                </p>
                <p>
                  Porque un proyecto digital no empieza realmente cuando publicamos nuestra primera página. Empieza cuando sabemos qué queremos construir y comprendemos cómo dar forma a esa idea.
                </p>
              </div>

              <div className="mt-10 pt-7 border-t border-[#174532]/15">
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

export default InitiationView;
