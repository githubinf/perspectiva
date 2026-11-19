import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface PoderMarketingContenidosViewProps {
  book?: BookItem;
}

export const PODER_MARKETING_CONTENIDOS_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'contenido-forma-presente',
    label: 'El contenido es la forma en que una marca se hace presente',
  },
  {
    id: 'saber-que-representamos',
    label: 'Antes de comunicar, necesitamos saber qué representamos',
  },
  {
    id: 'informar-dejar-huella',
    label: 'La diferencia entre informar y dejar una huella',
  },
  {
    id: 'voz-reconocible',
    label: 'La voz que hace reconocible una marca',
  },
  {
    id: 'explicar-sin-complicar',
    label: 'El valor de explicar sin complicar',
  },
  {
    id: 'confianza-no-una-publicacion',
    label: 'La confianza no se consigue con una sola publicación',
  },
  {
    id: 'saber-que-no-decir',
    label: 'Comunicar también significa saber qué no decir',
  },
  {
    id: 'contenido-como-experiencia',
    label: 'El contenido como experiencia, no solamente como información',
  },
  {
    id: 'creatividad-con-direccion',
    label: 'La creatividad necesita una dirección',
  },
  {
    id: 'contenido-no-efimero',
    label: 'Cuando el contenido deja de ser efímero',
  },
  {
    id: 'comunicacion-evoluciona',
    label: 'Una comunicación que evoluciona con su audiencia',
  },
  {
    id: 'contenido-valor-negocio',
    label: 'El contenido como parte del valor de un negocio',
  },
];

const OFFICIAL_BOOK_TITLE = 'El Poder del Marketing de Contenidos';

const PoderMarketingContenidosView: React.FC<PoderMarketingContenidosViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'el-poder-del-marketing-de-contenidos') ||
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
              href: currentBook.path || '/el-poder-del-marketing-de-contenidos/',
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
              Cómo cautivar a tu audiencia y alcanzar el éxito en una era digital tan activa
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
                En el entorno digital, una marca puede estar presente en numerosos espacios y, aun así, resultar prácticamente invisible en la memoria de las personas. Podemos publicar información, compartir novedades, presentar productos y mantener una actividad constante, pero si nuestra comunicación carece de una identidad reconocible, será difícil construir algo que perdure más allá del momento en que alguien encuentra una de nuestras publicaciones.
              </p>
              <p>
                El contenido es una de las formas mediante las cuales damos a conocer nuestra manera de pensar, nuestros conocimientos, nuestras prioridades y el valor que podemos aportar. Cada mensaje contribuye, de alguna manera, a formar una percepción. Algunos despiertan interés, otros ayudan a comprender una necesidad y otros permiten que una persona se identifique con lo que representamos.
              </p>
              <p>
                Por eso, cuando hablamos de marketing de contenidos, debemos ir más allá de la producción de materiales digitales. La verdadera cuestión consiste en comprender qué queremos comunicar, por qué debería importarle a alguien y cómo podemos desarrollar una relación entre nuestra propuesta y las personas que podrían encontrarla relevante.
              </p>
              <p>
                Una comunicación bien construida no necesita competir permanentemente por llamar la atención. Puede convertirse en una referencia, una fuente de conocimiento, un punto de encuentro o una razón para regresar. Cuando aprendemos a utilizar el contenido con intención, dejamos de considerarlo una tarea aislada y comenzamos a entenderlo como una parte esencial del valor que desarrollamos en nuestro negocio.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={PODER_MARKETING_CONTENIDOS_INDEX_ITEMS}
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
              id="contenido-forma-presente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El contenido es la forma en que una marca se hace presente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una marca no se construye únicamente mediante un nombre, un logotipo o una identidad visual. También se desarrolla a través de lo que comunica, las ideas que comparte, las conversaciones que mantiene y la manera en que responde a las necesidades de su entorno.
                </p>
                <p>
                  El contenido nos permite expresar esa identidad sin depender exclusivamente de una presentación comercial. Cuando compartimos conocimientos, explicamos situaciones, ofrecemos perspectivas o abordamos problemas que preocupan a nuestra audiencia, estamos dando forma a una presencia que puede ser reconocida por algo más que sus productos.
                </p>
                <p>
                  Esta presencia se construye gradualmente. Una publicación puede despertar curiosidad, otra aportar claridad y una tercera mostrar una perspectiva que no habíamos considerado. Aunque cada pieza tenga un propósito individual, juntas pueden transmitir una imagen mucho más completa de lo que representa nuestro proyecto.
                </p>
                <p>
                  Por eso, no deberíamos medir todo lo que comunicamos únicamente por su capacidad de producir una respuesta inmediata. Algunas ideas pueden influir en la percepción de una persona mucho antes de que exista una intención de compra. Su valor reside en contribuir a que nuestro nombre, nuestra propuesta y nuestra manera de trabajar ocupen un lugar significativo en su experiencia digital.
                </p>
                <p>
                  Cuando el contenido refleja de forma consistente lo que somos, deja de ser una sucesión de publicaciones y se convierte en una expresión de identidad.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="saber-que-representamos"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Antes de comunicar, necesitamos saber qué representamos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Crear contenido resulta mucho más sencillo cuando tenemos claridad sobre aquello que queremos defender, explicar o aportar. Sin esa orientación, podemos terminar reaccionando constantemente a tendencias, imitando formatos populares o publicando temas que no guardan una relación real con nuestro proyecto.
                </p>
                <p>
                  La identidad comunicativa comienza con preguntas que no siempre tienen una respuesta inmediata. ¿Qué queremos que las personas comprendan cuando conocen nuestra marca? ¿Qué perspectiva podemos aportar? ¿Qué tipo de problemas nos interesa ayudar a resolver? ¿Qué principios deberían reconocerse en nuestra manera de expresarnos?
                </p>
                <p>
                  No se trata de construir una imagen artificial ni de buscar frases que suenen atractivas. Se trata de reconocer las características que hacen que nuestra propuesta tenga sentido y utilizarlas como referencia para decidir qué merece ser comunicado.
                </p>
                <p>
                  Cuando tenemos esa claridad, podemos desarrollar contenidos diferentes sin perder coherencia. Un artículo, una reflexión, una explicación o una presentación comercial pueden abordar asuntos distintos y, aun así, compartir una misma orientación.
                </p>
                <p>
                  Esta definición también nos ayuda a descartar. No todas las ideas merecen convertirse en contenido para nuestra marca. Algunas pueden ser interesantes, pero no contribuir a nuestra identidad ni a los objetivos que perseguimos. Aprender a elegir es una parte fundamental de la comunicación estratégica.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="informar-dejar-huella"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La diferencia entre informar y dejar una huella
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Internet nos ofrece una cantidad extraordinaria de información. Podemos encontrar explicaciones, tutoriales, opiniones, noticias y respuestas sobre prácticamente cualquier asunto. En este contexto, repetir datos que ya están disponibles puede resultar insuficiente para conseguir que nuestro contenido sea verdaderamente significativo.
                </p>
                <p>
                  Informar consiste en transmitir conocimiento, pero comunicar de manera memorable implica ayudar a que ese conocimiento sea comprendido, interpretado o relacionado con una experiencia concreta.
                </p>
                <p>
                  Podemos explicar una idea utilizando un ejemplo cercano, mostrar las consecuencias de una decisión, comparar diferentes perspectivas o plantear una pregunta que invite a reflexionar. Estas formas de presentar la información permiten que el lector no se limite a recibir datos, sino que participe intelectualmente en lo que estamos comunicando.
                </p>
                <p>
                  La huella que dejamos no depende necesariamente de la originalidad absoluta de un tema. Muchas cuestiones importantes ya han sido tratadas por numerosos autores. Lo que puede diferenciarnos es la manera en que organizamos las ideas, las conexiones que establecemos, la claridad con la que explicamos y la perspectiva desde la que abordamos una situación.
                </p>
                <p>
                  Un contenido adquiere mayor significado cuando ayuda a alguien a comprender algo que antes parecía confuso, a reconsiderar una decisión o a descubrir una posibilidad. Esa capacidad de aportar una experiencia intelectual útil es una de las cualidades más valiosas de la comunicación digital.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="voz-reconocible"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La voz que hace reconocible una marca
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Cuando diferentes marcas hablan sobre asuntos similares, la manera de comunicar puede convertirse en uno de los factores que permiten distinguirlas. No siempre recordamos todos los detalles de un contenido, pero sí podemos recordar cómo nos hizo sentir, si nos resultó claro, si nos pareció honesto o si reconocimos una perspectiva particular.
                </p>
                <p>
                  Desarrollar una voz propia no significa utilizar expresiones llamativas en cada publicación ni adoptar un estilo exageradamente informal. Significa encontrar una forma de comunicarnos que sea coherente con nuestra identidad y adecuada para las personas a las que nos dirigimos.
                </p>
                <p>
                  Algunas marcas transmiten serenidad y precisión. Otras utilizan un lenguaje cercano, reflexivo, técnico o provocador. Ninguno de estos estilos es universalmente mejor. Su eficacia depende de que exista una relación natural entre lo que representamos, el mensaje que queremos transmitir y las expectativas de nuestra audiencia.
                </p>
                <p>
                  La consistencia también es importante. Si cada contenido parece proceder de una identidad diferente, las personas pueden tener dificultades para reconocer nuestra personalidad. No necesitamos repetir las mismas palabras ni mantener una estructura idéntica, pero sí conservar ciertos principios que definan nuestra comunicación.
                </p>
                <p>
                  Una voz reconocible facilita que nuestro contenido tenga continuidad. Con el tiempo, puede contribuir a que las personas identifiquen nuestra manera de explicar, nuestra perspectiva y aquello que pueden esperar cuando encuentran una nueva publicación.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="explicar-sin-complicar"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de explicar sin complicar
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La complejidad de un tema no debería convertirse en una barrera para comprenderlo. En ocasiones, quienes dominamos una materia tendemos a utilizar términos, conceptos o explicaciones que resultan evidentes para nosotros, pero que dificultan la experiencia de alguien que se aproxima por primera vez.
                </p>
                <p>
                  Comunicar con claridad exige algo más que simplificar palabras. Necesitamos comprender suficientemente bien el tema para reconocer qué información es esencial, qué detalles pueden esperar y qué ejemplos ayudarán a construir una comprensión progresiva.
                </p>
                <p>
                  Una explicación eficaz no elimina la profundidad. La organiza. Podemos abordar cuestiones complejas utilizando situaciones cotidianas, analogías, ejemplos concretos y una secuencia que permita al lector avanzar sin sentirse perdido.
                </p>
                <p>
                  También debemos respetar el tiempo de nuestra audiencia. Una explicación extensa tiene sentido cuando el tema lo requiere, pero la longitud por sí sola no garantiza calidad. Del mismo modo, una respuesta breve puede resultar insuficiente si omite información indispensable.
                </p>
                <p>
                  La claridad es una forma de consideración hacia las personas que nos leen. Cuando hacemos el esfuerzo de comunicar con precisión, reducimos la distancia entre lo que sabemos y lo que otros pueden comprender. Esa capacidad puede convertirse en una característica distintiva de nuestra marca y en una razón para que la audiencia valore nuestros contenidos.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="confianza-no-una-publicacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza no se consigue con una sola publicación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La confianza es un elemento difícil de construir porque no depende únicamente de lo que afirmamos sobre nosotros mismos. Se desarrolla a partir de la experiencia que las personas acumulan cuando entran en contacto con nuestra marca.
                </p>
                <p>
                  Una publicación puede generar una primera impresión positiva, pero la percepción posterior dependerá de la coherencia entre nuestros mensajes, nuestras acciones y la calidad de lo que ofrecemos. Si prometemos demasiado, ocultamos limitaciones o presentamos soluciones como si fueran universales, podemos comprometer esa relación incluso cuando nuestro contenido consiga captar atención.
                </p>
                <p>
                  La credibilidad también está relacionada con reconocer los límites de nuestro conocimiento. No siempre tenemos una respuesta definitiva, y comunicarlo con honestidad puede ser más valioso que aparentar una autoridad absoluta. Las personas no necesitan que cada mensaje sea una afirmación categórica; necesitan razones para considerar que nuestra comunicación es fiable.
                </p>
                <p>
                  Por otra parte, debemos evitar que cada interacción se convierta en un intento de vender. El contenido puede proporcionar valor sin exigir una recompensa inmediata. Cuando la audiencia percibe que existe una intención genuina de ayudar, explicar o compartir conocimiento, se crean condiciones favorables para desarrollar una relación más equilibrada.
                </p>
                <p>
                  La confianza no puede garantizarse mediante una fórmula. Es el resultado de una conducta sostenida, de expectativas razonables y de una comunicación que no contradice aquello que la marca representa.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="saber-que-no-decir"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Comunicar también significa saber qué no decir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La facilidad para publicar ha multiplicado las posibilidades de comunicación, pero también ha creado una presión constante por mantenerse activo. En ocasiones, esa presión nos lleva a compartir información sin suficiente reflexión, participar en conversaciones que no aportan o desarrollar mensajes únicamente para evitar que nuestra marca parezca inactiva.
                </p>
                <p>
                  Sin embargo, comunicar más no siempre significa comunicar mejor. Una publicación innecesaria puede distraer de nuestros temas centrales, diluir nuestra identidad o contribuir a una saturación que dificulta que otros mensajes sean comprendidos.
                </p>
                <p>
                  Seleccionar lo que comunicamos requiere establecer criterios. Podemos preguntarnos si una idea es relevante para nuestra audiencia, si aporta algo que merece su atención, si se relaciona con nuestra identidad y si estamos en condiciones de desarrollarla con suficiente calidad.
                </p>
                <p>
                  También debemos considerar el contexto. Un mensaje puede ser apropiado en determinadas circunstancias y resultar inoportuno en otras. La sensibilidad hacia el momento, la situación y las expectativas de las personas forma parte de una comunicación responsable.
                </p>
                <p>
                  La capacidad de guardar silencio, esperar, investigar o descartar una idea también puede mejorar nuestro trabajo. Cuando no sentimos la obligación de llenar cada espacio con contenido, podemos concentrarnos en aquellos mensajes que realmente merecen ser compartidos.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="contenido-como-experiencia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El contenido como experiencia, no solamente como información
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La manera en que una persona experimenta nuestro contenido influye en su percepción tanto como la información que recibe. La lectura puede resultar agradable, confusa, agotadora, inspiradora o frustrante, dependiendo de cómo organizamos y presentamos el mensaje.
                </p>
                <p>
                  Por esta razón, debemos considerar la experiencia completa. La estructura, el ritmo, el lenguaje, la presentación visual, los ejemplos y la relación entre las diferentes partes contribuyen a que el contenido sea más fácil de utilizar.
                </p>
                <p>
                  No todos los formatos funcionan de la misma manera. Una explicación detallada puede necesitar un artículo organizado, mientras que una idea sencilla quizá se comunique mejor mediante una presentación visual o una breve demostración. El formato debería facilitar la comprensión, no convertirse en una decisión puramente estética.
                </p>
                <p>
                  También podemos considerar el contexto en el que se consume el contenido. Una persona que consulta información desde el móvil durante unos minutos tiene circunstancias diferentes de otra que se sienta a estudiar un recurso completo. Adaptar la experiencia no significa reducir el valor, sino reconocer que existen distintas formas de acercarse al conocimiento.
                </p>
                <p>
                  Cuando cuidamos estos aspectos, el contenido deja de ser una simple transferencia de información y se convierte en una experiencia que puede resultar útil, agradable y memorable.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="creatividad-con-direccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La creatividad necesita una dirección
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La creatividad es una de las grandes posibilidades del marketing de contenidos, pero no debería confundirse con la búsqueda constante de ideas originales. Podemos producir propuestas llamativas y, aun así, no contribuir a nuestros objetivos si carecen de una relación clara con la identidad del proyecto.
                </p>
                <p>
                  Una dirección creativa nos permite explorar sin perder coherencia. Podemos probar nuevas formas de explicar, desarrollar conceptos, utilizar diferentes recursos narrativos o abordar temas desde perspectivas inesperadas, siempre que esas decisiones tengan sentido dentro de nuestra comunicación.
                </p>
                <p>
                  La creatividad también puede surgir de observar. Las preguntas que recibimos, las dificultades que encontramos en nuestro trabajo, las conversaciones de nuestra audiencia y los cambios que se producen en nuestro entorno pueden convertirse en fuentes de inspiración.
                </p>
                <p>
                  No debemos exigir que cada contenido sea extraordinario. En ocasiones, una explicación sencilla, bien construida y oportuna puede tener más valor que una idea compleja que no consigue comunicar su propósito.
                </p>
                <p>
                  La creatividad adquiere mayor fuerza cuando se combina con criterio. En lugar de intentar sorprender continuamente, podemos concentrarnos en encontrar formas interesantes de hacer que nuestras ideas sean más comprensibles, relevantes y cercanas a las personas.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="contenido-no-efimero"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cuando el contenido deja de ser efímero
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una parte de la comunicación digital está diseñada para consumirse rápidamente. Algunas publicaciones tienen sentido durante unas horas, mientras que otras pueden perder relevancia en pocos días. Sin embargo, también podemos desarrollar contenidos cuyo valor permanezca mucho más tiempo.
                </p>
                <p>
                  Una explicación bien organizada, un recurso de consulta, una reflexión fundamentada o una guía útil pueden seguir aportando valor después de su publicación inicial. Estos materiales no dependen exclusivamente del momento en que fueron compartidos y pueden convertirse en referencias a las que regresar.
                </p>
                <p>
                  Para conseguirlo, necesitamos cuidar su utilidad, evitar información innecesariamente condicionada por circunstancias pasajeras y revisar aquellos elementos que puedan quedar desactualizados. La permanencia no significa que un contenido deba conservarse intacto para siempre, sino que tenga una base suficientemente sólida para seguir siendo relevante.
                </p>
                <p>
                  Este tipo de recursos puede contribuir a formar una biblioteca de conocimiento propia. En lugar de comenzar continuamente desde cero, podemos desarrollar un conjunto de materiales que reflejen nuestra experiencia, respondan a preguntas importantes y representen el valor que hemos acumulado.
                </p>
                <p>
                  Con el tiempo, esa biblioteca puede convertirse en una parte significativa de nuestra identidad digital. No solo muestra lo que publicamos, sino también el conocimiento que hemos desarrollado y la manera en que lo ponemos al alcance de los demás.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="comunicacion-evoluciona"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una comunicación que evoluciona con su audiencia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las personas que se relacionan con nuestra marca no permanecen necesariamente en el mismo punto. Sus necesidades, conocimientos, expectativas y circunstancias pueden cambiar. Por eso, nuestra comunicación no debería tratar a la audiencia como un grupo estático.
                </p>
                <p>
                  Una persona que acaba de descubrirnos puede necesitar una explicación básica, mientras que alguien que lleva tiempo siguiendo nuestro trabajo quizá valore una perspectiva más avanzada, una reflexión diferente o un recurso que le permita profundizar.
                </p>
                <p>
                  Reconocer estas diferencias nos ayuda a desarrollar una comunicación más relevante. No significa que debamos crear un mensaje individual para cada persona, sino que podemos considerar diferentes niveles de conocimiento, intereses y momentos de relación.
                </p>
                <p>
                  También debemos estar dispuestos a escuchar. Los comentarios, las preguntas, las respuestas y las conversaciones pueden revelar aspectos que no habíamos considerado. Esta información permite revisar nuestras ideas, identificar temas que merecen mayor atención y comprender mejor cómo se interpreta lo que comunicamos.
                </p>
                <p>
                  Una marca que aprende de su audiencia puede evolucionar sin perder su identidad. Mantener una dirección no significa permanecer inmóvil, sino conservar los principios que nos definen mientras adaptamos nuestra manera de expresarlos a una realidad cambiante.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="contenido-valor-negocio"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El contenido como parte del valor de un negocio
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El contenido puede desempeñar un papel mucho más amplio que el de apoyar una campaña o presentar una oferta. Cuando desarrollamos conocimiento, experiencias, explicaciones y recursos de manera organizada, estamos creando materiales que pueden contribuir al valor de nuestro negocio a largo plazo.
                </p>
                <p>
                  Ese valor puede manifestarse de diferentes maneras. Un contenido puede ayudar a que una persona comprenda mejor un producto, facilitar una decisión, reducir dudas, mejorar la experiencia de un cliente o permitir que nuestra marca sea reconocida por una determinada especialidad.
                </p>
                <p>
                  También puede servir como punto de partida para desarrollar otros recursos. Una idea bien investigada puede convertirse en una referencia interna, una herramienta de formación, un material de consulta o una base para futuras iniciativas. El conocimiento que generamos no tiene por qué agotarse en su primera publicación.
                </p>
                <p>
                  Sin embargo, debemos distinguir entre acumular materiales y construir un patrimonio comunicativo. Una colección de contenidos desordenados puede resultar difícil de aprovechar. Para que tenga valor, necesitamos conservar su calidad, facilitar su consulta, mantener una relación coherente entre los recursos y reconocer cuáles siguen siendo relevantes.
                </p>
                <p>
                  El marketing de contenidos adquiere una dimensión estratégica cuando deja de depender únicamente de lo que publicamos hoy y comienza a contribuir a lo que nuestro negocio puede desarrollar mañana. Las ideas, la experiencia y el conocimiento pueden convertirse en activos cuando los trabajamos con intención, los organizamos y los ponemos al servicio de una propuesta que tenga sentido.
                </p>
                <p>
                  En última instancia, comunicar no consiste simplemente en conseguir que alguien nos preste atención. Consiste en ofrecer razones para que esa atención tenga valor. Cuando nuestra marca tiene algo relevante que aportar, sabe cómo expresarlo y mantiene una relación coherente con las personas, el contenido puede convertirse en una de las bases más importantes de su desarrollo digital.
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

export default PoderMarketingContenidosView;
