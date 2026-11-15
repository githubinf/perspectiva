import React, { useState } from 'react';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';

interface MindsetViewProps {
  category: BookCategory;
}

interface DimensionNode {
  id: string;
  label: string;
  axis: string;
  synthesis: string;
  cx: number;
  cy: number;
  lx: number;
  ly: number;
  anchor: 'middle' | 'start' | 'end';
}

const MINDSET_DIMENSIONS: DimensionNode[] = [
  {
    id: 'mentalidad',
    label: 'Mentalidad',
    axis: 'Perspectiva ante las oportunidades',
    synthesis: 'Relación con la percepción, el criterio y la actitud frente a lo posible.',
    cx: 260,
    cy: 46,
    lx: 260,
    ly: 24,
    anchor: 'middle',
  },
  {
    id: 'autonomia',
    label: 'Autonomía',
    axis: 'Actividad emprendedora propia',
    synthesis: 'Iniciativa individual, organización del trabajo y gestión independiente.',
    cx: 416,
    cy: 146,
    lx: 432,
    ly: 142,
    anchor: 'start',
  },
  {
    id: 'comunicacion',
    label: 'Comunicación',
    axis: 'Presentación de propuestas y valor',
    synthesis: 'Capacidad de explicar ideas y construir relaciones comerciales con rigor.',
    cx: 364,
    cy: 296,
    lx: 382,
    ly: 304,
    anchor: 'start',
  },
  {
    id: 'creacion',
    label: 'Creación intelectual',
    axis: 'De experiencia e ideas a obra',
    synthesis: 'Transformar conocimiento y criterio en materiales escritos estructurados.',
    cx: 156,
    cy: 296,
    lx: 138,
    ly: 304,
    anchor: 'end',
  },
  {
    id: 'publicacion',
    label: 'Publicación',
    axis: 'Materialización editorial propia',
    synthesis: 'Preparar libros y ebooks para su lectura, presentación y circulación.',
    cx: 104,
    cy: 146,
    lx: 88,
    ly: 142,
    anchor: 'end',
  },
];

const HERO_AXES = [
  {
    name: 'Mentalidad',
    note: 'Perspectiva personal, criterio ante las decisiones y relación con la abundancia.',
  },
  {
    name: 'Autonomía',
    note: 'Iniciativa individual, organización del trabajo y desarrollo de una actividad propia.',
  },
  {
    name: 'Comunicación',
    note: 'Capacidad para presentar propuestas, transmitir valor y relacionarse con el mercado.',
  },
  {
    name: 'Creación intelectual',
    note: 'Estructuración de conocimientos y escritura de obras de no ficción.',
  },
  {
    name: 'Publicación',
    note: 'Elaboración de ebooks y materialización de proyectos editoriales.',
  },
];

const EDITORIAL_DESCRIPTION_BY_SLUG: Record<string, string> = {
  'el-arte-de-atraer-la-abundancia':
    'Una obra situada en la dimensión de la mentalidad y la relación personal con la abundancia. Su presencia amplía la categoría hacia la forma en que interpretamos las posibilidades y nuestras circunstancias.',
  'el-manual-del-solopreneur-moderno':
    'Una propuesta centrada en la creación, organización y desarrollo de un negocio digital independiente, sin empleados. Representa el ámbito de la autonomía emprendedora y la gestión de una actividad propia.',
  'el-vendedor-hipnotico':
    'Un título relacionado con la comunicación comercial y la presentación persuasiva de propuestas. Se integra en la dimensión de las capacidades necesarias para comunicar valor y desarrollar relaciones comerciales.',
  'de-la-pluma-al-dinero':
    'Una obra vinculada con la escritura de libros de no ficción y su publicación en Kindle. Representa la posibilidad de convertir conocimientos e ideas en una publicación propia.',
  'como-crear-ebooks-de-no-ficcion':
    'Un título orientado al ámbito de la creación de ebooks de no ficción. Se relaciona con la organización y el desarrollo de contenidos para convertir una idea en una publicación digital.',
  'ebook-en-24-horas':
    'Una propuesta relacionada con la creación de ebooks y con un marco temporal definido en su propio título. Se integra en el ámbito de la materialización de publicaciones digitales, sin convertir ese plazo en una garantía de resultados.',
};

const COVER_DIMENSIONS_BY_SLUG: Record<
  string,
  { width: number; height: number; aspectClass: string }
> = {
  'el-arte-de-atraer-la-abundancia': {
    width: 400,
    height: 488,
    aspectClass: 'aspect-[400/488]',
  },
  'el-manual-del-solopreneur-moderno': {
    width: 600,
    height: 733,
    aspectClass: 'aspect-[600/733]',
  },
  'el-vendedor-hipnotico': {
    width: 400,
    height: 489,
    aspectClass: 'aspect-[400/489]',
  },
  'de-la-pluma-al-dinero': {
    width: 400,
    height: 489,
    aspectClass: 'aspect-[400/489]',
  },
  'como-crear-ebooks-de-no-ficcion': {
    width: 400,
    height: 488,
    aspectClass: 'aspect-[400/488]',
  },
  'ebook-en-24-horas': {
    width: 400,
    height: 489,
    aspectClass: 'aspect-[400/489]',
  },
};

const DEFAULT_COVER_DIMENSIONS = { width: 400, height: 489, aspectClass: 'aspect-[400/489]' };

const MindsetView: React.FC<MindsetViewProps> = ({ category }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* HERO EDITORIAL TIPOGRÁFICO DE MINDSET */}
      <header className="bg-white border-b border-[#174532]/15 pt-4 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: category.category, href: category.path || '/mindset/' },
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
              Mindset: mentalidad emprendedora y capacidad para crear proyectos propios
            </h1>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-8 border-t border-[#174532]/15">
              <div className="lg:col-span-7 space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[66ch]">
                <p>
                  La creación de un proyecto propio comienza mucho antes de desarrollar un producto, abrir un negocio o publicar un libro. Comienza con una forma de observar las posibilidades, interpretar los conocimientos disponibles y decidir qué queremos hacer con nuestras ideas.
                </p>
                <p>
                  En el entorno digital encontramos innumerables herramientas para emprender, comunicar, crear contenidos y desarrollar actividades independientes. Sin embargo, disponer de recursos no significa necesariamente saber aprovecharlos. Entre una idea y su materialización intervienen decisiones, capacidades personales, organización y voluntad de convertir una intención en algo concreto.
                </p>
                <p>
                  La categoría Mindset de FG Perspectiva reúne libros relacionados con esa dimensión personal y creativa de los proyectos. Aquí abordamos la mentalidad emprendedora, la iniciativa individual, la comunicación comercial y la creación de publicaciones propias. Son ámbitos diferentes, pero comparten una cuestión fundamental: nuestra capacidad para desarrollar ideas y conocimientos mediante acciones concretas.
                </p>
                <p>
                  No entendemos la mentalidad como una colección de pensamientos positivos ni como una garantía de éxito. La entendemos como una perspectiva que influye en la manera de interpretar los desafíos, reconocer posibilidades, tomar decisiones y mantener una dirección cuando decidimos construir algo propio.
                </p>
              </div>

              {/* Composición tipográfica de identidad de Mindset (sin imágenes ni iconos decorativos) */}
              <aside
                aria-label="Ámbitos editoriales de Mindset"
                className="lg:col-span-5 bg-[#dae7df]/16 border border-[#174532]/15 rounded-sm p-6 md:p-7"
              >
                <div className="pb-4 border-b border-[#174532]/15">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1.5">
                    Identidad de la colección
                  </p>
                  <p className="font-serif text-[19px] font-bold text-[#174532] leading-snug">
                    Pensamiento, iniciativa y creación intelectual
                  </p>
                </div>

                <dl className="divide-y divide-[#174532]/12 mt-2">
                  {HERO_AXES.map((axis) => (
                    <div key={axis.name} className="py-3.5">
                      <dt className="font-serif font-bold text-[15px] text-[#174532]">
                        {axis.name}
                      </dt>
                      <dd className="text-[13.5px] text-[#1b1b1b]/75 leading-relaxed mt-0.5">
                        {axis.note}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="pt-4 mt-1 border-t border-[#174532]/15 text-[12.5px] text-[#174532]/85 leading-relaxed">
                  Cinco áreas de conocimiento vinculadas con la iniciativa personal, sin orden secuencial obligatorio.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </header>

      {/* CUERPO EDITORIAL */}
      <article aria-label="Desarrollo editorial de la categoría Mindset">
        {/* APARTADO 1: LA MENTALIDAD DETRÁS DE LOS PROYECTOS PROPIOS */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                1. La mentalidad detrás de los proyectos propios
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Todo proyecto necesita una idea, pero también necesita a alguien dispuesto a desarrollarla. Esa diferencia es importante. Podemos acumular conocimientos, descubrir oportunidades y observar lo que hacen otras personas, pero ninguna de esas actividades sustituye la decisión de comenzar a construir.
                </p>
                <p>
                  La iniciativa personal interviene en cada etapa: cuando identificamos una necesidad, cuando elegimos una dirección, cuando evaluamos alternativas y cuando debemos continuar trabajando sobre una idea que todavía no ha alcanzado su forma definitiva.
                </p>
                <p>
                  Por eso, la mentalidad emprendedora no consiste simplemente en desear resultados. Implica desarrollar una relación más consciente con nuestras decisiones y con el trabajo necesario para llevarlas adelante.
                </p>
                <p>
                  También supone aceptar que no todas las ideas merecen convertirse en proyectos, que algunas iniciativas necesitan modificarse y que aprender a distinguir entre una posibilidad interesante y una oportunidad viable forma parte del propio proceso.
                </p>
                <p>
                  En FG Perspectiva nos interesa esa relación entre pensamiento y ejecución. No se trata de presentar el emprendimiento como una experiencia idealizada, sino de comprender las capacidades personales que intervienen cuando asumimos la responsabilidad de desarrollar una actividad propia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 2: PENSAR COMO EMPRENDEDOR */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 max-w-[66ch]">
                <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                  2. Pensar como emprendedor: una perspectiva diferente
                </h2>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Pensar como emprendedor significa observar los problemas, los recursos y las oportunidades desde una perspectiva orientada a la acción. En lugar de limitarnos a consumir información, comenzamos a preguntarnos qué podemos hacer con ella, qué utilidad puede tener y cómo podríamos transformarla en una propuesta concreta.
                  </p>
                  <p>
                    Esta perspectiva requiere criterio. No toda novedad representa una oportunidad, no toda tendencia merece nuestra atención y no toda idea tiene que convertirse en un negocio. La capacidad de seleccionar es tan importante como la capacidad de crear.
                  </p>
                  <p>
                    También requiere disposición para aprender. Cuando desarrollamos una actividad propia, encontramos situaciones que no siempre podemos resolver con conocimientos anteriores. Es necesario investigar, experimentar, observar lo que sucede y revisar las decisiones cuando la realidad no coincide con nuestras expectativas.
                  </p>
                  <p>
                    La iniciativa emprendedora, por tanto, no depende exclusivamente de la motivación inicial. Se relaciona con la capacidad de mantener una dirección, administrar la atención y convertir los aprendizajes en mejoras concretas.
                  </p>
                  <p>
                    Esta forma de pensar puede aplicarse a distintos ámbitos: un negocio independiente, una actividad profesional, un proyecto editorial o una iniciativa basada en conocimientos propios. En todos ellos existe una responsabilidad compartida: pasar de la intención a la construcción.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#dae7df]/14 border border-[#174532]/15 rounded-sm p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] pb-3 border-b border-[#174532]/15">
                  Rasgos de la perspectiva emprendedora
                </p>

                <div className="divide-y divide-[#174532]/12 mt-2">
                  <div className="py-4">
                    <p className="font-serif font-bold text-[15.5px] text-[#174532]">
                      Criterio selectivo
                    </p>
                    <p className="text-[13.5px] text-[#1b1b1b]/80 leading-relaxed mt-1">
                      Distinguir entre novedades pasajeras y oportunidades viables merece tanta atención como producir ideas.
                    </p>
                  </div>
                  <div className="py-4">
                    <p className="font-serif font-bold text-[15.5px] text-[#174532]">
                      Disposición de aprendizaje
                    </p>
                    <p className="text-[13.5px] text-[#1b1b1b]/80 leading-relaxed mt-1">
                      Investigar, experimentar y contrastar nuestras decisiones frente a la realidad concreta.
                    </p>
                  </div>
                  <div className="py-4">
                    <p className="font-serif font-bold text-[15.5px] text-[#174532]">
                      Continuidad sobre intención
                    </p>
                    <p className="text-[13.5px] text-[#1b1b1b]/80 leading-relaxed mt-1">
                      Mantener dirección, administrar la atención y convertir cada aprendizaje en mejora verificable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 3: ABUNDANCIA, PERCEPCIÓN Y POSIBILIDADES */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8 max-w-[68ch]">
                <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                  3. Abundancia, percepción y posibilidades
                </h2>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    La manera en que interpretamos nuestro entorno influye en las posibilidades que somos capaces de reconocer. Nuestras expectativas, creencias y experiencias participan en la forma de evaluar las alternativas que tenemos delante.
                  </p>
                  <p>
                    Hablar de abundancia desde esta perspectiva no significa suponer que todo es posible ni que los resultados dependen únicamente de nuestra actitud. Significa explorar cómo nuestra percepción puede influir en la relación que mantenemos con las oportunidades, los recursos y las decisiones.
                  </p>
                  <p>
                    Una mentalidad orientada a las posibilidades no elimina las limitaciones reales. Tampoco sustituye la planificación, el conocimiento o el trabajo. Lo que puede aportar es una disposición diferente para observar alternativas, cuestionar supuestos y evitar que una primera dificultad determine por completo nuestra manera de actuar.
                  </p>
                  <p>
                    La reflexión sobre la abundancia pertenece a una dimensión personal del desarrollo. No debe confundirse con una fórmula comercial ni con una promesa de prosperidad. Su interés está en examinar la perspectiva desde la que interpretamos nuestras circunstancias y las decisiones que tomamos a partir de ellas.
                  </p>
                  <p>
                    Dentro de esta categoría, <em>El arte de atraer la abundancia</em> representa esa dimensión de la mentalidad. Su presencia amplía el enfoque de Mindset más allá de las capacidades técnicas y nos recuerda que los proyectos también están relacionados con la manera en que pensamos y nos posicionamos ante nuestras posibilidades.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 pt-2 lg:pt-12">
                <blockquote className="py-6 border-y border-[#174532]/25">
                  <p className="font-serif italic text-[18px] text-[#174532] leading-relaxed">
                    «Una mentalidad orientada a las posibilidades no elimina las limitaciones reales. Tampoco sustituye la planificación, el conocimiento o el trabajo.»
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 4: LA AUTONOMÍA COMO FORMA DE CONSTRUIR UNA ACTIVIDAD PROPIA */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                4. La autonomía como forma de construir una actividad propia
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Desarrollar una actividad independiente implica asumir responsabilidades que en otras estructuras de trabajo pueden estar distribuidas entre diferentes personas o departamentos. Quien trabaja por cuenta propia debe tomar decisiones, organizar tareas, gestionar recursos y mantener una visión general de lo que está construyendo.
                </p>
                <p>
                  En el entorno digital, esta autonomía puede adoptar diferentes formas. Podemos desarrollar una actividad profesional, ofrecer servicios, crear productos, publicar contenidos o construir un negocio que opere mediante herramientas y canales digitales.
                </p>
                <p>
                  La independencia no significa trabajar sin planificación ni prescindir de toda colaboración. Significa asumir una mayor responsabilidad sobre la dirección y el funcionamiento de nuestra actividad.
                </p>
                <p>
                  También exige comprender que no basta con tener conocimientos sobre un tema. Es necesario organizar el trabajo, establecer prioridades y encontrar una manera sostenible de atender las distintas responsabilidades que intervienen en un proyecto.
                </p>
                <p>
                  <em>El Manual del Solopreneur Moderno</em> ocupa un lugar central en esta dimensión. Su propuesta, expresada en el subtítulo «Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones», conecta directamente con la realidad de quienes desean desarrollar una actividad digital independiente.
                </p>
                <p>
                  La figura del solopreneur permite abordar una cuestión relevante: cómo organizar una iniciativa propia sin asumir que el crecimiento de un proyecto debe depender necesariamente de construir una empresa con una estructura de empleados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 5: ORGANIZAR EL CONOCIMIENTO, EL TIEMPO Y EL TRABAJO */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                5. Organizar el conocimiento, el tiempo y el trabajo
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La autonomía necesita organización. Cuando todas las decisiones dependen de nosotros, la falta de estructura puede convertirse en una dificultad importante. Las tareas se acumulan, las prioridades cambian constantemente y las ideas nuevas pueden desplazar el trabajo que ya habíamos decidido realizar.
                </p>
                <p>
                  Organizar no significa llenar cada hora de actividades ni convertir un proyecto creativo en una sucesión rígida de obligaciones. Significa establecer cierta claridad sobre lo que estamos desarrollando, qué recursos necesitamos y qué acciones tienen mayor importancia en cada momento.
                </p>
                <p>
                  El conocimiento también necesita organización. Podemos aprender sobre marketing, comunicación, publicación, tecnología o gestión, pero si mantenemos esos aprendizajes como información aislada, será difícil integrarlos en una actividad coherente.
                </p>
                <p>
                  Por eso conviene distinguir entre aprender algo y saber utilizarlo. El primer paso amplía lo que conocemos; el segundo requiere relacionar ese conocimiento con una necesidad, una decisión o una tarea concreta.
                </p>
                <p>
                  En un proyecto independiente, esta diferencia tiene consecuencias prácticas. La organización ayuda a reducir la dispersión, reconocer los compromisos asumidos y mantener una continuidad de trabajo sin depender exclusivamente de la motivación del momento.
                </p>
                <p>
                  La capacidad de organizar nuestro tiempo y nuestros recursos no garantiza que un proyecto funcione, pero permite abordarlo con mayor claridad y responsabilidad.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#174532]/15 grid md:grid-cols-2 gap-6 max-w-4xl">
              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-2">
                  Acumulación aislada
                </p>
                <p className="font-serif font-bold text-[16px] text-[#174532] mb-2">
                  Aprender de forma fragmentada
                </p>
                <p className="text-[14px] text-[#1b1b1b]/80 leading-relaxed">
                  Amplía lo que conocemos sobre disciplinas independientes, pero sin conexión con una tarea definida.
                </p>
              </div>

              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-2">
                  Integración práctica
                </p>
                <p className="font-serif font-bold text-[16px] text-[#174532] mb-2">
                  Utilizar el conocimiento con dirección
                </p>
                <p className="text-[14px] text-[#1b1b1b]/80 leading-relaxed">
                  Relaciona lo aprendido con una necesidad, una decisión concreta y una continuidad de trabajo sostenible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 6: COMUNICAR IDEAS Y TRANSMITIR VALOR */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                6. Comunicar ideas y transmitir valor
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una idea puede tener utilidad, pero para que otras personas la comprendan necesitamos comunicarla. Esto sucede cuando presentamos un servicio, explicamos un producto, recomendamos una solución o intentamos establecer una relación comercial.
                </p>
                <p>
                  La comunicación interviene en la manera en que una propuesta es percibida. No basta con enumerar características: necesitamos comprender qué estamos ofreciendo, a quién nos dirigimos y por qué podría resultar relevante para esa persona.
                </p>
                <p>
                  En este contexto, vender no debería entenderse únicamente como conseguir una transacción. También implica escuchar, explicar, responder preguntas y ayudar a que el posible comprador comprenda lo que está considerando.
                </p>
                <p>
                  La comunicación comercial exige claridad y responsabilidad. Una presentación eficaz no necesita ocultar limitaciones, exagerar beneficios ni crear expectativas que el producto no puede cumplir. La confianza depende, entre otras cosas, de la correspondencia entre lo que comunicamos y lo que realmente ofrecemos.
                </p>
                <p>
                  <em>El Vendedor hipnótico</em> representa dentro de Mindset el ámbito de la comunicación y la actividad comercial. Su presencia permite incorporar la dimensión persuasiva de la relación con el mercado, sin confundir la capacidad de comunicar con la manipulación de las decisiones ajenas.
                </p>
                <p>
                  Comprender cómo presentamos nuestras ideas y cómo se produce una decisión comercial forma parte de las capacidades que pueden intervenir en cualquier proyecto propio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPOSICIÓN CONCEPTUAL DE LAS CINCO DIMENSIONES (HTML + CSS + SVG, NO LINEAL) */}
        <section
          aria-label="Composición conceptual de las cinco dimensiones de Mindset"
          className="py-14 md:py-20 bg-[#dae7df]/16 border-b border-[#174532]/15"
        >
          <div className="max-w-6xl mx-auto px-6">
            <figure className="bg-white border border-[#174532]/18 rounded-sm p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#174532]/15">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1.5">
                    Arquitectura conceptual · Sin secuencia lineal obligatoria
                  </p>
                  <p className="font-serif text-h2 font-bold text-[#174532] leading-snug">
                    Cinco dimensiones de la iniciativa personal y la creación
                  </p>
                </div>
                <p className="text-[13px] text-[#174532]/80 font-medium max-w-xs">
                  Áreas independientes y complementarias que coexisten alrededor de cada proyecto propio.
                </p>
              </div>

              <div className="mt-8 grid lg:grid-cols-12 gap-8 items-center">
                {/* Constelación geométrica simétrica SVG */}
                <div className="lg:col-span-6 flex justify-center">
                  <svg
                    viewBox="0 0 520 356"
                    width="520"
                    height="356"
                    role="img"
                    aria-label="Esquema radial no lineal con cinco dimensiones equivalentes en torno a la iniciativa personal: Mentalidad, Autonomía, Comunicación, Creación intelectual y Publicación"
                    className="w-full max-w-[520px] h-auto"
                  >
                    {/* Anillos concéntricos de referencia */}
                    <circle
                      cx="260"
                      cy="182"
                      r="142"
                      fill="none"
                      stroke="#174532"
                      strokeOpacity="0.14"
                      strokeWidth="1"
                      strokeDasharray="3 5"
                    />
                    <circle
                      cx="260"
                      cy="182"
                      r="96"
                      fill="none"
                      stroke="#4db380"
                      strokeOpacity="0.28"
                      strokeWidth="1"
                    />

                    {/* Polígono pentagonal sutil que conecta dimensiones entre sí */}
                    <polygon
                      points="260,46 416,146 364,296 156,296 104,146"
                      fill="#dae7df"
                      fillOpacity="0.22"
                      stroke="#174532"
                      strokeOpacity="0.22"
                      strokeWidth="1"
                    />

                    {/* Radios simétricos sin flechas ni orden secuencial */}
                    {MINDSET_DIMENSIONS.map((dim) => (
                      <g key={dim.id}>
                        <line
                          x1="260"
                          y1="182"
                          x2={dim.cx}
                          y2={dim.cy}
                          stroke="#174532"
                          strokeOpacity="0.35"
                          strokeWidth="1.25"
                        />
                        <circle
                          cx={dim.cx}
                          cy={dim.cy}
                          r="7"
                          fill="#ffffff"
                          stroke="#174532"
                          strokeWidth="2"
                        />
                        <circle cx={dim.cx} cy={dim.cy} r="2.5" fill="#f4b925" />
                        <text
                          x={dim.lx}
                          y={dim.ly}
                          textAnchor={dim.anchor}
                          fill="#174532"
                          fontSize="13.5"
                          fontFamily="Georgia, serif"
                          fontWeight="bold"
                        >
                          {dim.label}
                        </text>
                      </g>
                    ))}

                    {/* Núcleo central */}
                    <circle cx="260" cy="182" r="52" fill="#174532" />
                    <circle
                      cx="260"
                      cy="182"
                      r="46"
                      fill="none"
                      stroke="#f4b925"
                      strokeOpacity="0.65"
                      strokeWidth="1"
                    />
                    <text
                      x="260"
                      y="177"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12"
                      fontFamily="Georgia, serif"
                      fontWeight="bold"
                    >
                      Iniciativa
                    </text>
                    <text
                      x="260"
                      y="194"
                      textAnchor="middle"
                      fill="#dae7df"
                      fontSize="11"
                      fontFamily="Inter, sans-serif"
                    >
                      y creación propia
                    </text>
                  </svg>
                </div>

                {/* Desglose tipográfico equilibrado (sin numeración de pasos ni jerarquía secuencial) */}
                <div className="lg:col-span-6 divide-y divide-[#174532]/14 border-y border-[#174532]/14">
                  {MINDSET_DIMENSIONS.map((dim) => (
                    <div key={dim.id} className="py-4 grid sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                      <div className="sm:col-span-5">
                        <p className="font-serif font-bold text-[16px] text-[#174532]">
                          {dim.label}
                        </p>
                        <p className="text-[12px] font-medium text-[#1f513a] mt-0.5">
                          {dim.axis}
                        </p>
                      </div>
                      <p className="sm:col-span-7 text-[13.5px] text-[#1b1b1b]/80 leading-relaxed">
                        {dim.synthesis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <figcaption className="mt-6 pt-4 border-t border-[#174532]/12 text-body-sm text-[#1b1b1b]/75 leading-relaxed max-w-[72ch]">
                Las cinco dimensiones no constituyen etapas obligatorias ni un método único en línea recta: representan ámbitos complementarios que cada proyecto combina según sus decisiones, capacidades y objetivos.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* APARTADO 7: DEL CONOCIMIENTO A LA CREACIÓN INTELECTUAL */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                7. Del conocimiento a la creación intelectual
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El conocimiento no tiene por qué permanecer como una experiencia exclusivamente personal. Podemos organizarlo, desarrollarlo y compartirlo mediante contenidos, materiales educativos, publicaciones y otras formas de creación intelectual.
                </p>
                <p>
                  Este proceso comienza cuando identificamos aquello que sabemos, delimitamos un tema y encontramos una manera de explicarlo con sentido. No se trata simplemente de reunir información disponible, sino de construir una aportación que tenga una estructura y una finalidad reconocibles.
                </p>
                <p>
                  Crear también implica seleccionar. Una obra no puede contener todo lo que conocemos sobre un asunto. Necesita un enfoque, un lector al que dirigirse y una organización que permita desarrollar el tema sin perder coherencia.
                </p>
                <p>
                  La experiencia personal puede aportar ejemplos y perspectivas, mientras que la investigación ayuda a contrastar información y ampliar el contenido. El trabajo editorial consiste en relacionar esos elementos de una manera comprensible y útil.
                </p>
                <p>
                  Esta capacidad de convertir conocimientos en materiales propios abre distintas posibilidades. Podemos escribir artículos, preparar recursos, desarrollar publicaciones digitales o trabajar en un libro de no ficción.
                </p>
                <p>
                  La creación intelectual no depende únicamente de tener algo que decir. También requiere aprender a organizarlo, expresarlo y darle una forma que otras personas puedan comprender.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 8: ESCRIBIR PARA DESARROLLAR Y COMPARTIR CONOCIMIENTO */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                8. Escribir para desarrollar y compartir conocimiento
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La escritura es una de las formas más directas de transformar ideas en una obra propia. Nos obliga a ordenar lo que pensamos, establecer relaciones entre conceptos y encontrar una secuencia que permita comunicar un tema.
                </p>
                <p>
                  Escribir un libro de no ficción supone mucho más que acumular páginas. Necesitamos definir qué queremos abordar, establecer los límites del contenido y decidir cómo se desarrollará la exposición. También debemos considerar quién podría encontrar valor en esa obra y qué espera comprender el lector.
                </p>
                <p>
                  La escritura permite convertir experiencias, conocimientos profesionales e investigaciones en publicaciones que pueden consultarse y compartirse. Sin embargo, el valor de una obra no depende únicamente de haberla terminado. También intervienen su claridad, su organización, la calidad de la información y la atención que dedicamos a la revisión.
                </p>
                <p>
                  En este ámbito, <em>De la Pluma al Dinero</em> representa la relación entre escribir libros de no ficción y desarrollar una actividad editorial mediante la publicación en Kindle. Su lugar dentro de Mindset conecta la creatividad con una posibilidad concreta de materialización: convertir una obra escrita en una publicación.
                </p>
                <p>
                  Escribir y publicar son actividades relacionadas, pero no idénticas. La primera desarrolla el contenido; la segunda exige preparar la obra para que pueda llegar a sus lectores.
                </p>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl">
              <div className="bg-white border border-[#174532]/15 rounded-sm p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1.5">
                  Primera actividad
                </p>
                <p className="font-serif font-bold text-[17px] text-[#174532] mb-2">
                  Escribir
                </p>
                <p className="text-[14px] text-[#1b1b1b]/80 leading-relaxed">
                  Delimita el tema, ordena las ideas y construye el desarrollo del contenido con claridad para el lector.
                </p>
              </div>
              <div className="bg-[#174532] text-white border border-[#174532] rounded-sm p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#f4b925] mb-1.5">
                  Segunda actividad
                </p>
                <p className="font-serif font-bold text-[17px] mb-2">
                  Publicar
                </p>
                <p className="text-[14px] text-white/85 leading-relaxed">
                  Prepara, revisa y presenta la obra en los formatos y plataformas adecuados para ponerla al alcance de sus lectores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 9: CREAR EBOOKS Y MATERIALIZAR IDEAS */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                9. Crear ebooks y materializar ideas
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Un ebook es una publicación digital y, como cualquier obra editorial, necesita una idea definida, una estructura y un contenido desarrollado con coherencia.
                </p>
                <p>
                  La facilidad técnica para crear un archivo digital puede llevarnos a pensar que producir un ebook consiste simplemente en escribir un texto y convertirlo a un formato electrónico. Sin embargo, la creación de una publicación requiere decisiones previas y posteriores a la escritura.
                </p>
                <p>
                  Antes de comenzar conviene delimitar el tema, identificar el propósito de la obra y establecer qué aspectos se desarrollarán. Después será necesario organizar el contenido, revisar la continuidad de las explicaciones y comprobar que el resultado responde a la intención inicial.
                </p>
                <p>
                  En los libros de no ficción, la claridad es especialmente importante. El lector necesita comprender cómo se relacionan las ideas y qué aporta cada apartado al conjunto. Una estructura desordenada puede dificultar la lectura incluso cuando el tema resulta interesante.
                </p>
                <p>
                  <em>Cómo crear Ebooks (de no ficción)</em> se integra en esta dimensión de la categoría: la elaboración de publicaciones digitales centradas en contenidos de carácter no ficticio.
                </p>
                <p>
                  Su presencia permite abordar la creación de ebooks como una actividad intelectual y editorial. No se trata solamente de producir un documento, sino de desarrollar una obra con un tema, una organización y una finalidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 10: PUBLICAR: CONVERTIR UNA OBRA EN UN PROYECTO EDITORIAL */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12 border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8 max-w-[68ch]">
                <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                  10. Publicar: convertir una obra en un proyecto editorial
                </h2>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Terminar un manuscrito no significa que el proceso editorial haya concluido. Una obra necesita prepararse para su publicación y presentarse de una manera que permita a los lectores reconocer su contenido.
                  </p>
                  <p>
                    La publicación implica prestar atención a aspectos como la revisión del texto, la organización final, la presentación editorial, los formatos disponibles y la información que acompaña al libro. Cada decisión contribuye a que la obra pueda circular de forma adecuada.
                  </p>
                  <p>
                    En el entorno digital existen distintas alternativas para distribuir publicaciones. Las plataformas de autopublicación han facilitado que los autores puedan preparar y comercializar sus libros sin depender necesariamente de una editorial tradicional. Esto amplía las posibilidades, aunque también supone asumir responsabilidades sobre la calidad y la presentación del trabajo.
                  </p>
                  <p>
                    La publicación requiere una perspectiva realista. Subir un archivo a una plataforma no garantiza que encuentre lectores ni que genere ventas. La obra, su presentación, la demanda del tema y las acciones de difusión son factores diferentes que conviene considerar por separado.
                  </p>
                  <p>
                    <em>Ebook en 24 horas</em> incorpora a esta dimensión una propuesta de creación de ebooks asociada al marco temporal expresado en su título. Ese planteamiento permite introducir la cuestión de la agilidad en la producción editorial, pero no debe interpretarse como una garantía universal de que cualquier persona podrá crear una obra de calidad en ese plazo, ni como una promesa de publicación o resultados comerciales.
                  </p>
                  <p>
                    La rapidez puede ser una variable del proceso. La claridad, la revisión y la calidad del contenido siguen siendo responsabilidades fundamentales.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] pb-3 border-b border-[#174532]/15">
                  Criterio editorial realista
                </p>
                <p className="font-serif font-bold text-[16px] text-[#174532] mt-4 mb-2 leading-snug">
                  Agilidad frente a responsabilidad editorial
                </p>
                <p className="text-[13.5px] text-[#1b1b1b]/80 leading-relaxed">
                  Las herramientas digitales facilitan la edición y autopublicación, pero no sustituyen la revisión del texto, la presentación cuidada ni el interés real del tema para el lector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 11: DE LA INICIATIVA A LA EJECUCIÓN */}
        <section className="py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                11. De la iniciativa a la ejecución
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La mentalidad, la autonomía, la comunicación y la creación intelectual son dimensiones diferentes, pero pueden encontrarse dentro de un mismo proyecto.
                </p>
                <p>
                  Una persona puede tener conocimientos sobre un tema y decidir convertirlos en una publicación. También puede desarrollar una actividad independiente, crear productos propios y necesitar comunicar sus propuestas a un público determinado. En cada caso intervienen capacidades distintas que deben coordinarse de acuerdo con los objetivos de la iniciativa.
                </p>
                <p>
                  No existe una secuencia universal que todas las personas deban seguir. Algunos proyectos comienzan con una necesidad identificada; otros nacen de una experiencia profesional, una idea creativa o el deseo de desarrollar una actividad autónoma.
                </p>
                <p>
                  Lo importante es comprender que la iniciativa necesita traducirse en decisiones. Una idea debe delimitarse, un propósito necesita convertirse en una dirección de trabajo y los conocimientos deben relacionarse con las tareas que exige su desarrollo.
                </p>
                <p>
                  También es necesario evaluar. No todas las decisiones producirán el resultado esperado y no todas las iniciativas tendrán continuidad. Revisar lo que hacemos permite reconocer qué funciona, qué necesita cambiar y qué aprendizajes podemos aprovechar en el futuro.
                </p>
                <p>
                  La ejecución no elimina la incertidumbre, pero nos permite trabajar sobre algo concreto. Es ahí donde la mentalidad emprendedora deja de ser una idea abstracta y comienza a relacionarse con la experiencia real de construir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APARTADO 12: LIBROS PARA DESARROLLAR UNA MENTALIDAD CREADORA + CIERRE EDITORIAL */}
        <section className="py-14 md:py-20 bg-[#dae7df]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch] mb-10">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                12. Libros para desarrollar una mentalidad creadora
              </h2>

              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                Los seis libros de esta categoría abordan distintas dimensiones de la iniciativa personal y la creación de proyectos propios. No constituyen un programa único ni necesitan leerse como una secuencia obligatoria. Cada título se relaciona con un ámbito específico y permite acercarse a un tema diferente.
              </p>
            </div>

            {/* Seis libros reales consumidos directamente desde category.books (constants.tsx) */}
            <div className="grid md:grid-cols-2 gap-6">
              {category.books.map((book) => {
                const bookUrl = book.path || `/${book.slug}/`;
                const hasPurchaseOptions = Boolean(
                  book.purchaseOptions && book.purchaseOptions.length > 0
                );
                const dims =
                  (book.slug && COVER_DIMENSIONS_BY_SLUG[book.slug]) || DEFAULT_COVER_DIMENSIONS;
                const editorialText =
                  (book.slug && EDITORIAL_DESCRIPTION_BY_SLUG[book.slug]) || book.description;

                return (
                  <article
                    key={book.id || book.slug}
                    className="bg-white border border-[#174532]/15 rounded-sm p-6 sm:p-7 flex flex-col justify-between gap-6"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <Link
                        href={bookUrl}
                        className="flex-shrink-0 bg-[#dae7df]/14 p-2.5 border border-[#174532]/15 rounded-[2px] hover:border-[#174532]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
                      >
                        <img
                          src={book.coverUrl}
                          alt={`Portada del libro ${book.title}`}
                          width={dims.width}
                          height={dims.height}
                          className={`w-28 sm:w-32 h-auto ${dims.aspectClass} object-contain block`}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-h3 sm:text-[19px] font-bold font-serif text-[#174532] mb-3 leading-snug">
                          <Link
                            href={bookUrl}
                            className="hover:text-[#1f513a] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] rounded-xs"
                          >
                            {book.title}
                          </Link>
                        </h3>

                        <p className="text-body-sm sm:text-body text-[#1b1b1b]/85 leading-[1.7]">
                          {editorialText}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#174532]/12">
                      <Link
                        href={bookUrl}
                        className="inline-flex items-center justify-center py-2.5 px-5 bg-[#174532] text-white text-[13.5px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                      >
                        Ver ficha del libro
                      </Link>

                      {hasPurchaseOptions && (
                        <button
                          type="button"
                          onClick={() => setSelectedBook(book)}
                          className="inline-flex items-center justify-center py-2.5 px-5 bg-white border border-[#174532]/30 text-[#174532] text-[13.5px] font-semibold rounded-sm hover:bg-[#dae7df]/45 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                        >
                          Opciones de compra
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Cierre editorial: las ideas necesitan una dirección */}
            <div className="mt-16 pt-12 border-t border-[#174532]/20 max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Cierre editorial: las ideas necesitan una dirección
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La iniciativa personal puede adoptar muchas formas. Podemos desarrollar una actividad independiente, mejorar nuestra comunicación, escribir un libro o transformar conocimientos en una publicación propia. Cada camino requiere capacidades distintas, pero todos comparten la necesidad de pasar de las ideas a las decisiones.
                </p>
                <p>
                  La mentalidad emprendedora no consiste en imaginar resultados sin considerar el trabajo que implican. Consiste en desarrollar una perspectiva que nos permita reconocer posibilidades, elegir una dirección y asumir la responsabilidad de construir.
                </p>
                <p>
                  En FG Perspectiva entendemos la creación como un proceso en el que el conocimiento adquiere forma mediante la reflexión, la organización y la acción. Por eso, Mindset reúne libros que exploran diferentes aspectos de la iniciativa personal y de la capacidad de desarrollar proyectos propios.
                </p>
                <p>
                  Porque una idea puede ser el comienzo, pero es nuestra capacidad para trabajar sobre ella la que determina en qué puede convertirse.
                </p>
                <p>
                  <strong className="font-semibold text-[#174532]">
                    Explora la colección completa de FG Perspectiva y descubre otros ámbitos del conocimiento digital en nuestra Biblioteca.
                  </strong>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#174532]/15">
                <Link
                  href="/biblioteca/"
                  className="inline-flex items-center justify-center py-3 px-6 bg-[#174532] text-white text-[14px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
                >
                  Explorar la Biblioteca
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

export default MindsetView;
