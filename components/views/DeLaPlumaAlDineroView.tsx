import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface DeLaPlumaAlDineroViewProps {
  book?: BookItem;
}

export const PEN_TO_MONEY_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'proyecto-editorial',
    label: 'El cambio de mentalidad: del manuscrito al proyecto editorial',
  },
  {
    id: 'oportunidad-editorial',
    label: 'Encontrar una oportunidad antes de empezar a escribir',
  },
  {
    id: 'utilidad-del-libro',
    label: 'La utilidad como criterio para desarrollar una obra',
  },
  {
    id: 'calidad-editorial',
    label: 'El trabajo editorial que el lector no siempre ve',
  },
  {
    id: 'decisiones-comerciales',
    label: 'Publicar es también tomar decisiones comerciales',
  },
  {
    id: 'visibilidad',
    label: 'La visibilidad no aparece automáticamente',
  },
  {
    id: 'catalogo-editorial',
    label: 'Construir un catálogo con coherencia',
  },
  {
    id: 'ingresos-sostenibilidad',
    label: 'Ingresos, expectativas y sostenibilidad',
  },
  {
    id: 'autor-proyecto',
    label: 'El autor como responsable de su proyecto',
  },
  {
    id: 'oportunidad-kindle',
    label: 'Una oportunidad que exige criterio y continuidad',
  },
];

const DeLaPlumaAlDineroView: React.FC<DeLaPlumaAlDineroViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'de-la-pluma-al-dinero') ||
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
              : [{ label: 'Mindset', href: '/mindset/' }]),
            {
              label: currentBook.title,
              href: currentBook.path || '/de-la-pluma-al-dinero/',
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
                href={parentCategory?.path || '/mindset/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Mindset'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              De la Pluma al Dinero
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Si todavía no estás publicando en Kindle esta es tu oportunidad de generar ingresos pasivos. Crea un negocio rentable y recurrente con libros de no-ficción.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-4">
              Una perspectiva práctica sobre cómo convertir el conocimiento en un catálogo editorial con identidad, utilidad y posibilidades comerciales.
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
                Escribir un libro puede ser una experiencia creativa y enriquecedora. Sin embargo, cuando decidimos publicar con una intención comercial, aparece una cuestión que va más allá de terminar un manuscrito: ¿cómo conseguimos que ese trabajo encuentre lectores y pueda formar parte de un proyecto editorial con continuidad?
              </p>
              <p>
                La autopublicación ha cambiado las posibilidades de quienes desean desarrollar sus propias obras. Ya no es imprescindible recorrer el camino tradicional de búsqueda de una editorial para poner un libro a disposición del público. Plataformas como Kindle Direct Publishing permiten gestionar la publicación y comercialización de contenidos propios, con acceso a un mercado amplio y diferentes formatos de lectura.
              </p>
              <p>
                Pero disponer de una herramienta de publicación no equivale a tener un negocio editorial. La diferencia está en las decisiones que tomamos antes, durante y después de escribir. Un tema puede parecernos interesante y, aun así, no responder a una necesidad concreta. Un manuscrito puede estar terminado, pero necesitar una revisión profunda antes de presentarlo a los lectores. Y un libro correctamente publicado puede permanecer prácticamente invisible si no cuenta con una propuesta clara y una estrategia de difusión.
              </p>
              <p>
                Por eso, desarrollar una actividad editorial independiente requiere combinar creatividad, investigación, criterio comercial y constancia. No se trata de producir libros de manera indiscriminada, sino de construir un conjunto de publicaciones que aporten valor y puedan sostener una presencia a largo plazo.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 10 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={PEN_TO_MONEY_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO COMPLETO + CIERRE EDITORIAL (10 H2)      */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="proyecto-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El cambio de mentalidad: del manuscrito al proyecto editorial
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Uno de los errores más habituales al acercarse a la autopublicación consiste en pensar que el objetivo termina cuando el libro está escrito y disponible para la venta. Esa perspectiva reduce una actividad que puede tener muchas dimensiones a un único acontecimiento: publicar.
                </p>
                <p>
                  Un proyecto editorial funciona de otra manera. Cada obra representa una decisión sobre qué conocimiento queremos compartir, a quién deseamos llegar y qué lugar puede ocupar ese contenido dentro de una propuesta más amplia.
                </p>
                <p>
                  Esta diferencia modifica la forma de trabajar. En lugar de comenzar directamente con la redacción, conviene detenerse a valorar si existe una razón suficientemente sólida para desarrollar el libro. También debemos preguntarnos si podemos aportar una perspectiva propia, si el contenido tendrá utilidad para sus lectores y si seremos capaces de presentarlo de manera profesional.
                </p>
                <p>
                  El manuscrito es una parte fundamental del proyecto, pero no es el proyecto completo. A su alrededor existen decisiones relacionadas con la identidad del autor, la selección de temas, la organización de las publicaciones, la presentación comercial y el mantenimiento de cada título.
                </p>
                <p>
                  Cuando comprendemos esta relación, dejamos de considerar cada libro como una iniciativa aislada. Empezamos a trabajar con una visión editorial que permite aprender de una publicación y aplicar ese aprendizaje a las siguientes.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="oportunidad-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Encontrar una oportunidad antes de empezar a escribir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La elección del tema merece una atención especial porque condiciona buena parte del trabajo posterior. Una idea puede resultar atractiva para nosotros, pero eso no significa necesariamente que tenga interés para un público determinado.
                </p>
                <p>
                  Investigar una oportunidad editorial implica observar qué preguntas se hacen los lectores, qué problemas intentan resolver y qué información encuentran cuando buscan respuestas. También supone analizar cómo se están abordando esos asuntos en las publicaciones existentes.
                </p>
                <p>
                  No necesitamos descubrir un tema completamente desconocido para desarrollar una obra valiosa. En muchos casos, la oportunidad consiste en tratar una cuestión conocida desde una perspectiva más clara, práctica, ordenada o especializada.
                </p>
                <p>
                  La investigación debe ayudarnos a distinguir entre interés personal y demanda potencial. Para ello podemos estudiar los libros que ya existen, examinar las opiniones de los lectores, identificar aspectos que generan confusión y reconocer necesidades que no están suficientemente atendidas.
                </p>
                <p>
                  También conviene valorar la dimensión del tema. Una materia demasiado amplia puede resultar difícil de abordar con profundidad en un solo libro. Una cuestión excesivamente limitada, por otra parte, quizá no permita desarrollar una propuesta suficientemente completa. Encontrar un alcance adecuado ayuda a definir qué vamos a incluir y, sobre todo, qué debemos dejar fuera.
                </p>
                <p>
                  La investigación no elimina la incertidumbre comercial, pero reduce las decisiones tomadas a ciegas. Nos permite empezar con una hipótesis razonada en lugar de confiar exclusivamente en la intuición.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="utilidad-del-libro"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La utilidad como criterio para desarrollar una obra
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un libro de no-ficción necesita algo más que información acumulada. Su contenido debe ofrecer al lector una experiencia de comprensión: ayudarle a entender una cuestión, organizar conocimientos, evaluar alternativas o afrontar una situación con mejores criterios.
                </p>
                <p>
                  La utilidad no depende necesariamente de la cantidad de páginas. Un texto extenso puede resultar poco provechoso si repite ideas o no consigue establecer una dirección clara. Del mismo modo, una obra de menor tamaño puede ser valiosa cuando delimita bien su propósito y desarrolla sus contenidos con precisión.
                </p>
                <p>
                  Antes de avanzar demasiado en la escritura, resulta conveniente definir el alcance de la obra. ¿Qué asunto abordaremos? ¿Qué conocimientos necesita tener el lector antes de comenzar? ¿Qué conceptos requieren una explicación más detenida? ¿Qué partes pueden resolverse mediante ejemplos y cuáles necesitan una argumentación más amplia?
                </p>
                <p>
                  Estas preguntas ayudan a evitar un problema frecuente: empezar con una idea concreta y terminar escribiendo sobre demasiadas cuestiones diferentes. Cuando eso ocurre, el contenido pierde cohesión y al lector le puede resultar difícil reconocer el propósito principal.
                </p>
                <p>
                  La selección de información también exige responsabilidad. No todo lo que encontramos durante la investigación merece formar parte del manuscrito. Debemos comprobar la relevancia de las fuentes, distinguir los datos de las opiniones y evitar presentar como hechos aquellas afirmaciones que no podemos respaldar.
                </p>
                <p>
                  Una obra bien enfocada no intenta demostrar cuánto sabe su autor. Busca que el lector pueda aprovechar ese conocimiento.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="calidad-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El trabajo editorial que el lector no siempre ve
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La calidad de un libro no se decide únicamente durante la redacción. Una parte importante del resultado depende del trabajo que realizamos cuando el primer manuscrito ya existe.
                </p>
                <p>
                  En esa etapa debemos revisar la coherencia general, detectar explicaciones insuficientes, eliminar repeticiones y comprobar que cada apartado cumple una función. También es necesario prestar atención a la claridad de las transiciones y a la relación entre las distintas partes de la obra.
                </p>
                <p>
                  La corrección lingüística es importante, pero no sustituye a la revisión editorial. Un manuscrito puede estar escrito sin errores ortográficos y, sin embargo, contener argumentos desordenados, ejemplos poco claros o explicaciones que no llegan a resolver las dudas del lector.
                </p>
                <p>
                  La presentación también influye en la experiencia de lectura. Una organización visual adecuada, una jerarquía reconocible de títulos y un formato compatible con los dispositivos Kindle facilitan la consulta del contenido. El diseño debe acompañar al texto, no competir con él.
                </p>
                <p>
                  La portada merece una atención particular porque constituye uno de los elementos que ayudan a identificar una publicación en un entorno comercial. Debe comunicar con claridad el carácter de la obra y mantener coherencia con su temática. No se trata de acumular elementos gráficos, sino de conseguir una presentación reconocible y apropiada para el público al que nos dirigimos.
                </p>
                <p>
                  Todos estos trabajos forman parte de una misma responsabilidad: entregar una publicación cuidada. La facilidad técnica para publicar no debería convertirse en una excusa para reducir los estándares de calidad.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="decisiones-comerciales"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Publicar es también tomar decisiones comerciales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando una obra está preparada, llega el momento de presentarla al mercado. En esta fase, el contenido debe traducirse en una propuesta que el lector pueda comprender antes de comprar.
                </p>
                <p>
                  El título, el texto de presentación, la categoría y los elementos de identificación comercial deben transmitir una imagen coherente. Si el mensaje promete una cosa y el contenido desarrolla otra, la publicación puede generar expectativas equivocadas y perjudicar la confianza del lector.
                </p>
                <p>
                  La ficha comercial no debería tratarse como un trámite secundario. Es el espacio donde explicamos de qué trata la obra, qué perspectiva ofrece y por qué puede resultar relevante para determinadas personas. Su redacción exige precisión: debemos comunicar el valor del contenido sin exagerar sus beneficios ni atribuirle resultados que no puede garantizar.
                </p>
                <p>
                  También es importante conocer las condiciones de publicación de la plataforma elegida. Amazon KDP ofrece herramientas para gestionar libros digitales y determinadas ediciones impresas, pero el autor debe revisar los requisitos aplicables a cada formato, los archivos que necesita preparar y las condiciones comerciales vigentes.
                </p>
                <p>
                  La publicación requiere, por tanto, una combinación de atención editorial y criterio práctico. No basta con que el libro esté disponible: su presentación debe permitir que el lector entienda qué está considerando adquirir.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="visibilidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La visibilidad no aparece automáticamente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Estar presente en una plataforma con millones de usuarios no significa que una publicación vaya a ser descubierta de forma espontánea. La disponibilidad y la visibilidad son dos cuestiones diferentes.
                </p>
                <p>
                  Un libro puede estar correctamente publicado y tener una propuesta interesante, pero competir con numerosas obras que tratan asuntos similares. Por eso, necesitamos comprender cómo puede llegar a sus lectores potenciales y qué información facilita que estos lo identifiquen.
                </p>
                <p>
                  La presentación comercial, la selección de categorías pertinentes y el uso de términos relacionados con el tema ayudan a contextualizar la obra. Sin embargo, estos elementos deben reflejar fielmente su contenido. Intentar atraer visitas mediante expresiones que no corresponden con el libro puede generar una expectativa equivocada.
                </p>
                <p>
                  La promoción también puede desarrollarse fuera de la tienda. Un autor puede construir una presencia digital mediante contenidos relacionados con su especialidad, una página editorial, un blog, una lista de correo u otros canales apropiados para su público.
                </p>
                <p>
                  No todos los proyectos necesitan utilizar los mismos medios. La elección depende de los recursos disponibles, de la naturaleza del tema y de los hábitos de las personas a las que queremos llegar. Lo importante es evitar que la difusión se convierta en una actividad improvisada que solo comienza cuando las ventas no responden a nuestras expectativas.
                </p>
                <p>
                  La visibilidad se trabaja con continuidad y requiere observar qué acciones aportan resultados, cuáles consumen recursos sin producir avances y qué aspectos de la propuesta necesitan mejorar.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="catalogo-editorial"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Construir un catálogo con coherencia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Un libro puede ser el comienzo de una actividad editorial, pero un catálogo permite desarrollar una presencia más amplia. La diferencia no reside simplemente en acumular títulos, sino en establecer relaciones comprensibles entre las publicaciones.
                </p>
                <p>
                  Cuando varios libros comparten una temática general, una línea de conocimiento o un público potencial, pueden reforzar la identidad del autor. Cada obra aporta una pieza distinta y permite que los lectores reconozcan una especialización.
                </p>
                <p>
                  Esta coherencia no significa que todos los títulos deban abordar exactamente lo mismo. Un catálogo puede explorar diferentes aspectos de una disciplina, siempre que exista una lógica editorial que explique su relación.
                </p>
                <p>
                  También conviene evitar la producción acelerada de libros sin una aportación diferenciada. Publicar más títulos no garantiza una mayor presencia comercial. Si varias obras repiten información, ofrecen poco contenido original o responden a temas elegidos sin investigación, el crecimiento del catálogo puede convertirse en una carga en lugar de una ventaja.
                </p>
                <p>
                  Una estrategia más sólida consiste en desarrollar cada publicación con un propósito definido. Así podemos identificar qué temas merecen una obra independiente, cuáles podrían complementar un título existente y qué conocimientos todavía no hemos cubierto.
                </p>
                <p>
                  El catálogo debe crecer al ritmo que permita mantener la calidad. La continuidad tiene más sentido cuando se apoya en una identidad reconocible y en publicaciones que justifican su existencia.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="ingresos-sostenibilidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Ingresos, expectativas y sostenibilidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La posibilidad de obtener ingresos a partir de libros publicados en formato digital o impreso es uno de los aspectos que despiertan mayor interés en la autopublicación. Sin embargo, conviene comprender la diferencia entre una oportunidad comercial y un resultado asegurado.
                </p>
                <p>
                  Los ingresos dependen de múltiples variables: el interés que despierta el tema, la calidad de la obra, su posicionamiento, el precio, la competencia, las condiciones de distribución y la capacidad de alcanzar a los lectores adecuados. Ninguna de estas variables puede controlarse por completo.
                </p>
                <p>
                  Por eso, es más razonable plantear objetivos progresivos que construir expectativas basadas en cifras ajenas. Los resultados de otros autores pueden servir como referencia para estudiar modelos de trabajo, pero no constituyen una previsión fiable de lo que conseguiremos con nuestro propio catálogo.
                </p>
                <p>
                  También debemos considerar los costes y el tiempo invertido. Investigación, redacción, edición, diseño, promoción y mantenimiento forman parte del esfuerzo necesario para desarrollar una publicación profesional. Si ignoramos esos recursos, podemos confundir facturación con rentabilidad.
                </p>
                <p>
                  La idea de ingresos recurrentes debe entenderse desde esta perspectiva. Un libro que continúa disponible puede seguir teniendo oportunidades de venta después de su lanzamiento, pero eso no significa que genere ingresos constantes sin atención ni trabajo. El mercado cambia, las publicaciones compiten entre sí y algunas obras pueden necesitar actualizaciones o nuevas acciones de difusión.
                </p>
                <p>
                  La sostenibilidad aparece cuando conseguimos organizar el proyecto de manera que el esfuerzo editorial, los recursos utilizados y las posibilidades comerciales mantengan una relación razonable.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="autor-proyecto"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El autor como responsable de su proyecto
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La autopublicación ofrece libertad para tomar decisiones, pero esa libertad también implica asumir responsabilidades que en otros modelos editoriales pueden estar repartidas entre diferentes profesionales.
                </p>
                <p>
                  El autor necesita desarrollar criterio para seleccionar temas, evaluar información, organizar contenidos y decidir cómo presentar cada publicación. No tiene que realizar personalmente todas las tareas, pero sí comprender qué necesita su obra y supervisar el resultado.
                </p>
                <p>
                  También debe aprender a valorar su propio trabajo con cierta distancia. Una idea que nos entusiasma no siempre es la mejor elección comercial. Un capítulo al que hemos dedicado muchas horas puede necesitar una revisión profunda. Una portada que nos gusta personalmente quizá no comunique adecuadamente el contenido del libro.
                </p>
                <p>
                  Aceptar estas posibilidades forma parte del crecimiento profesional. La actividad editorial mejora cuando sustituimos las decisiones impulsivas por procesos de evaluación y aprendizaje.
                </p>
                <p>
                  Con el tiempo, cada publicación puede aportar experiencia sobre la investigación, la escritura, la presentación y la relación con los lectores. Esa experiencia resulta especialmente valiosa cuando la utilizamos para mejorar el siguiente proyecto, en lugar de repetir automáticamente lo que hicimos antes.
                </p>
              </div>
            </section>

            {/* Apartado 10 — Cierre editorial */}
            <section
              id="oportunidad-kindle"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una oportunidad que exige criterio y continuidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Kindle ha ampliado las posibilidades de quienes desean publicar sus propios libros y desarrollar una actividad editorial independiente. Su importancia no reside únicamente en ofrecer un canal de distribución, sino en permitir que los autores participen de manera más directa en la creación y presentación de sus obras.
                </p>
                <p>
                  Sin embargo, las herramientas no sustituyen el trabajo intelectual ni las decisiones comerciales. Una publicación necesita una razón para existir, un contenido bien desarrollado y una propuesta que pueda ser comprendida por sus lectores.
                </p>
                <p>
                  Convertir la escritura en una actividad con posibilidades de continuidad exige mirar más allá del primer lanzamiento. Significa aprender a investigar, seleccionar temas con criterio, cuidar el proceso editorial y construir una identidad que pueda sostener nuevas publicaciones.
                </p>
                <p>
                  No necesitamos empezar con un catálogo enorme ni disponer de todos los recursos desde el primer día. Podemos comenzar con una obra bien planteada, aprender de su desarrollo y utilizar esa experiencia para tomar decisiones más fundamentadas.
                </p>
                <p>
                  La oportunidad está en transformar el conocimiento en publicaciones que tengan sentido para sus lectores y puedan integrarse en un proyecto editorial propio. El resultado no depende de una fórmula automática, sino de la calidad de las decisiones que tomamos y de nuestra capacidad para mantener el trabajo a lo largo del tiempo.
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

export default DeLaPlumaAlDineroView;
