import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft, ExternalLink, Headphones } from 'lucide-react';

interface HypnoticSellerViewProps {
  book?: BookItem;
}

export const HYPNOTIC_SELLER_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'vendedor-comunicacion',
    label: 'La comunicación comercial más allá del discurso',
  },
  {
    id: 'vendedor-confianza',
    label: 'La confianza como punto de partida',
  },
  {
    id: 'vendedor-comprension',
    label: 'Comprender antes de influir',
  },
  {
    id: 'vendedor-no-verbal',
    label: 'Lo que comunicamos sin pronunciar palabras',
  },
  {
    id: 'vendedor-lenguaje',
    label: 'El lenguaje que facilita la decisión',
  },
  {
    id: 'vendedor-narrativa',
    label: 'Historias y propuestas que se entienden',
  },
  {
    id: 'vendedor-valor',
    label: 'Presentar valor sin abrumar',
  },
  {
    id: 'vendedor-objeciones',
    label: 'Las objeciones como parte de la conversación',
  },
  {
    id: 'vendedor-decision',
    label: 'La decisión pertenece al cliente',
  },
  {
    id: 'vendedor-fidelizacion',
    label: 'La relación después de la venta',
  },
  {
    id: 'vendedor-digital',
    label: 'La comunicación comercial en entornos digitales',
  },
  {
    id: 'vendedor-identidad',
    label: 'Una identidad comercial coherente',
  },
  {
    id: 'vendedor-lectores',
    label: 'A quién puede interesar esta perspectiva',
  },
];

const HypnoticSellerView: React.FC<HypnoticSellerViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'el-vendedor-hipnotico') ||
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
              href: currentBook.path || '/el-vendedor-hipnotico/',
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

        {/* Módulo de audiolibro existente en el catálogo */}
        {currentBook.audiobookOptions && currentBook.audiobookOptions.length > 0 && (
          <div className="mt-6 p-6 bg-white border border-[#dae7df] rounded-xl shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#174532] mb-3">
              <Headphones className="w-4 h-4 text-[#4db380]" aria-hidden="true" />
              <span>Audiolibro disponible en plataformas</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {currentBook.audiobookOptions.map((opt, i) => (
                <a
                  key={i}
                  href={opt.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#dae7df]/30 border border-[#dae7df]/70 hover:bg-[#4db380] hover:text-white text-[#174532] transition-all text-xs font-medium inline-flex items-center gap-1.5"
                >
                  <span>{opt.platform}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        )}
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
              El Vendedor hipnótico
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Domina el arte de la seducción emocional para vender sin presionar.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-4">
              La comunicación comercial como herramienta para generar confianza, comprender decisiones y presentar valor con naturalidad.
            </p>

            <p className="text-body-sm font-medium text-[#1b1b1b]/75">
              Autor: <span className="text-[#174532] font-semibold">Francisco González</span>
            </p>
          </header>

          {/* Introducción editorial (obligatoriamente después del encabezado y antes del índice) */}
          <section
            aria-label="Introducción editorial"
            className="mb-12 pb-10 border-b border-[#dae7df]/60"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-2">
              Introducción
            </p>
            <p className="font-serif text-[21px] md:text-[23px] font-bold text-[#174532] leading-snug mb-6 max-w-3xl text-balance">
              La venta empieza mucho antes de presentar una oferta
            </p>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.78]">
              <p className="text-[17.5px] md:text-[18.5px] text-[#174532] font-serif leading-[1.72]">
                En una conversación comercial, las palabras que utilizamos importan, pero no son lo único que determina cómo se recibe nuestro mensaje. También influyen el momento, la atención que prestamos, la manera de escuchar, el tono con el que explicamos una propuesta y la capacidad de comprender qué está buscando realmente la otra persona.
              </p>
              <p>
                Podemos conocer perfectamente un producto y, sin embargo, transmitir su valor de una forma poco convincente. Podemos enumerar características, explicar ventajas y repetir argumentos, pero si no conseguimos conectar nuestra explicación con las inquietudes del interlocutor, la conversación difícilmente avanzará.
              </p>
              <p>
                Esta diferencia permite entender por qué vender no consiste únicamente en hablar de lo que ofrecemos. La comunicación comercial requiere observar, interpretar, preguntar y construir un intercambio en el que ambas partes puedan comprender si existe una correspondencia real entre una necesidad y una solución.
              </p>
              <p>
                La influencia consciente comienza precisamente ahí. No se trata de imponer una idea ni de conducir a alguien hacia una decisión que no desea tomar. Se trata de crear las condiciones para que una propuesta pueda ser entendida, valorada y considerada sin presión innecesaria.
              </p>
              <p>
                En este proceso intervienen elementos que a menudo pasan inadvertidos: la primera impresión, la escucha, el lenguaje corporal, la claridad de las preguntas, la manera de presentar una idea y la respuesta ante las dudas. Cada uno puede facilitar la conversación o introducir obstáculos que dificulten la confianza.
              </p>
              <p>
                También debemos considerar que una venta no termina necesariamente cuando se produce una compra. La experiencia posterior, la coherencia entre lo prometido y lo entregado y la calidad de la relación influyen en la percepción que el cliente conserva de nosotros.
              </p>
              <p>
                Por eso, la comunicación persuasiva necesita algo más que recursos verbales. Requiere criterio, sensibilidad y responsabilidad. Cuanto mejor comprendemos a la persona que tenemos delante, menos necesitamos recurrir a discursos forzados.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 13 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={HYPNOTIC_SELLER_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO PRINCIPAL (13 APARTADOS H2)              */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="vendedor-comunicacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La comunicación comercial más allá del discurso
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La capacidad de vender suele asociarse con la facilidad para hablar, argumentar y responder rápidamente. Sin embargo, una conversación comercial eficaz no depende de quién pronuncia más palabras ni de quién consigue introducir más argumentos en menos tiempo.
                </p>
                <p>
                  Hablar demasiado puede dificultar la comprensión. Cuando una persona recibe información que no responde a sus inquietudes, puede desconectarse de la conversación, aunque la explicación sea correcta desde el punto de vista técnico.
                </p>
                <p>
                  La comunicación comercial exige seleccionar qué información merece ser presentada, en qué momento y con qué nivel de detalle. No todas las personas necesitan escuchar la misma explicación. Tampoco todas se encuentran en la misma etapa de decisión.
                </p>
                <p>
                  Por eso, una comunicación bien construida comienza con la capacidad de adaptar el mensaje sin perder su autenticidad. No consiste en interpretar un personaje ni en utilizar frases prefabricadas, sino en comprender el contexto y expresarse de una manera que resulte clara para el interlocutor.
                </p>
                <p>
                  También conviene distinguir entre captar atención y mantener interés. Una frase llamativa puede conseguir que alguien escuche durante unos segundos, pero la atención sostenida depende de que el contenido tenga relación con lo que esa persona considera importante.
                </p>
                <p>
                  La comunicación persuasiva adquiere mayor consistencia cuando deja de centrarse exclusivamente en el vendedor y empieza a considerar la experiencia de quien escucha.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="vendedor-confianza"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La confianza como punto de partida
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La confianza no aparece automáticamente porque una persona tenga un discurso convincente. Se construye mediante señales de coherencia que se acumulan durante la interacción.
                </p>
                <p>
                  La forma de responder, la disposición para escuchar, la precisión de la información y la capacidad de reconocer los límites de una propuesta contribuyen a crear una percepción de credibilidad.
                </p>
                <p>
                  Una conversación comercial pierde solidez cuando el interlocutor percibe exageraciones, promesas difíciles de justificar o respuestas que evitan abordar sus preocupaciones. Incluso una oferta interesante puede generar desconfianza si se presenta de manera poco transparente.
                </p>
                <p>
                  Por el contrario, explicar con claridad qué puede ofrecer una solución y qué aspectos no cubre permite establecer expectativas más realistas. Esta transparencia no debilita necesariamente una venta. Puede mejorar la calidad de la relación porque evita que la decisión se base en una interpretación equivocada.
                </p>
                <p>
                  La confianza también requiere consistencia entre lo que comunicamos y lo que hacemos. Si la experiencia posterior contradice las expectativas creadas durante la conversación, la relación comercial pierde credibilidad.
                </p>
                <p>
                  Vender sin presionar implica aceptar que la confianza no se exige: se construye. Y para construirla necesitamos que nuestras palabras, nuestras acciones y la experiencia que ofrecemos mantengan una relación coherente.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="vendedor-comprension"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Comprender antes de influir
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las dificultades más frecuentes de la comunicación comercial es intentar presentar una solución antes de comprender suficientemente la situación de la otra persona.
                </p>
                <p>
                  Cuando empezamos hablando de características, funciones o beneficios sin conocer el contexto, corremos el riesgo de responder a una necesidad que quizá no existe o de destacar aspectos que no tienen importancia para el interlocutor.
                </p>
                <p>
                  Comprender requiere prestar atención a las preguntas, las prioridades y las circunstancias que aparecen durante la conversación. También supone diferenciar entre lo que una persona solicita inicialmente y el problema que intenta resolver.
                </p>
                <p>
                  Las preguntas abiertas pueden ayudar a obtener información que no surgiría mediante una presentación unilateral. En lugar de asumir lo que necesita el cliente, podemos explorar qué está intentando conseguir, qué dificultades encuentra y qué criterios utilizará para valorar las alternativas.
                </p>
                <p>
                  Escuchar no significa esperar nuestro turno para hablar. Significa utilizar lo que la otra persona comunica para orientar la conversación de manera pertinente.
                </p>
                <p>
                  Esta comprensión debe evitar las interpretaciones precipitadas. Una respuesta breve, una duda o una objeción no permiten conocer por sí solas todas las motivaciones de alguien. La información debe confirmarse mediante preguntas y diálogo.
                </p>
                <p>
                  La influencia responsable comienza cuando dejamos de tratar a cada interlocutor como una oportunidad idéntica y reconocemos que cada decisión tiene un contexto propio.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="vendedor-no-verbal"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Lo que comunicamos sin pronunciar palabras
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La comunicación no verbal forma parte de la experiencia comercial. La postura, los gestos, la expresión facial, el contacto visual y el tono de voz pueden acompañar nuestro mensaje o transmitir una impresión diferente de la que pretendíamos comunicar.
                </p>
                <p>
                  No obstante, interpretar estas señales requiere prudencia. Un gesto aislado no demuestra que una persona esté interesada, incómoda, convencida o dispuesta a comprar. El lenguaje corporal debe considerarse dentro del contexto y en relación con el resto de la conversación.
                </p>
                <p>
                  La coherencia entre comunicación verbal y no verbal resulta especialmente importante. Si explicamos que estamos dispuestos a escuchar, pero interrumpimos continuamente, nuestras acciones contradicen el mensaje.
                </p>
                <p>
                  También debemos prestar atención a nuestra propia presencia. Una actitud serena, una postura natural y un tono adecuado pueden facilitar un intercambio más cómodo, especialmente cuando se habla de decisiones que requieren reflexión.
                </p>
                <p>
                  En las interacciones presenciales, estos elementos contribuyen a crear un entorno de comunicación. En las conversaciones digitales, algunos desaparecen o se transforman, por lo que debemos prestar mayor atención a la claridad del texto, los tiempos de respuesta y el tono utilizado.
                </p>
                <p>
                  El objetivo no es aprender a descifrar mecánicamente a las personas. Es desarrollar una mayor conciencia sobre cómo se produce la comunicación y evitar que nuestras señales generen contradicciones innecesarias.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="vendedor-lenguaje"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El lenguaje que facilita la decisión
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las palabras pueden hacer que una propuesta resulte comprensible o que parezca más complicada de lo que realmente es.
                </p>
                <p>
                  En una conversación comercial, utilizar términos técnicos sin necesidad, acumular explicaciones o recurrir a expresiones ambiguas puede aumentar la distancia entre lo que queremos comunicar y lo que el interlocutor entiende.
                </p>
                <p>
                  Un lenguaje claro no significa simplificar en exceso ni eliminar información relevante. Significa organizar las ideas para que la otra persona pueda identificar qué estamos ofreciendo, qué problema aborda y qué implicaciones tiene la propuesta.
                </p>
                <p>
                  También importa la forma de formular las preguntas. Las preguntas orientadas a comprender permiten que el cliente explique sus prioridades. Las preguntas utilizadas únicamente para dirigirlo hacia una respuesta predeterminada pueden generar resistencia.
                </p>
                <p>
                  La elección de palabras debe respetar el contexto. No es lo mismo conversar con alguien que ya conoce el producto que explicar por primera vez una solución a una persona que todavía está identificando sus necesidades.
                </p>
                <p>
                  La comunicación eficaz adapta el nivel de detalle sin distorsionar la información. Evita exageraciones y no utiliza la urgencia artificial como sustituto de una explicación convincente.
                </p>
                <p>
                  Cuando el lenguaje facilita la comprensión, la conversación deja de depender de la insistencia. La propuesta puede evaluarse por su pertinencia y por el valor que realmente ofrece.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="vendedor-narrativa"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Historias y propuestas que se entienden
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una idea puede resultar difícil de comprender cuando se presenta como una lista de características desconectadas. En cambio, una explicación organizada alrededor de una situación reconocible puede ayudar a que el interlocutor entienda por qué una propuesta tiene sentido.
                </p>
                <p>
                  Las historias permiten situar una idea dentro de un contexto. Pueden mostrar un problema, describir una circunstancia y explicar cómo una solución interviene en ella. Su utilidad no depende de dramatizar la situación ni de presentar experiencias extraordinarias.
                </p>
                <p>
                  En la comunicación comercial, una historia debe ayudar a comprender, no reemplazar la información verificable. Los ejemplos deben ser honestos y no deben presentarse como resultados garantizados para cualquier cliente.
                </p>
                <p>
                  También es importante que la narrativa no se convierta en una distracción. Una explicación demasiado extensa puede ocultar la propuesta que pretendíamos presentar.
                </p>
                <p>
                  La combinación de contexto, explicación y evidencia permite construir mensajes más fáciles de seguir. Podemos mostrar cómo funciona una solución, qué aspectos conviene considerar y en qué circunstancias podría resultar apropiada.
                </p>
                <p>
                  La historia aporta una estructura; la información aporta fundamento. Cuando ambas trabajan juntas, la comunicación gana claridad sin necesidad de exagerar.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="vendedor-valor"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Presentar valor sin abrumar
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una oferta puede tener muchas características, pero no todas tienen la misma importancia para cada persona.
                </p>
                <p>
                  Presentar valor significa relacionar lo que ofrecemos con los aspectos que el interlocutor considera relevantes. Para hacerlo necesitamos conocer sus prioridades y distinguir entre las características del producto y las consecuencias prácticas que pueden tener en su situación.
                </p>
                <p>
                  Una explicación comercial útil no consiste en enumerar todo lo que sabemos. Consiste en seleccionar la información necesaria para que la otra persona pueda evaluar la propuesta.
                </p>
                <p>
                  Esto también implica explicar las condiciones, los límites y los elementos que podrían influir en la experiencia. Ocultar información relevante para conseguir una respuesta favorable puede producir una venta inmediata, pero debilita la relación posterior.
                </p>
                <p>
                  La presentación debe mantener un equilibrio entre precisión y sencillez. Si omitimos información importante, la decisión puede resultar incompleta. Si acumulamos detalles irrelevantes, dificultamos la comparación.
                </p>
                <p>
                  Podemos mejorar la presentación de una propuesta organizando la información en torno a tres cuestiones: qué ofrece, por qué podría ser pertinente y qué necesita saber el cliente antes de decidir.
                </p>
                <p>
                  El valor no depende únicamente de cómo describimos una oferta. También depende de la correspondencia real entre lo que ofrecemos y lo que la persona necesita.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="vendedor-objeciones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Las objeciones como parte de la conversación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las objeciones suelen interpretarse como obstáculos que deben superarse cuanto antes. Sin embargo, una duda puede revelar que todavía existe información que el interlocutor necesita para valorar la propuesta.
                </p>
                <p>
                  El precio, el tiempo, la confianza, la utilidad o la comparación con otras alternativas pueden generar preguntas legítimas. Responder a ellas con insistencia no necesariamente mejora la conversación.
                </p>
                <p>
                  El primer paso consiste en comprender qué expresa realmente la objeción. Una frase breve puede esconder una preocupación distinta de la que parece indicar. Por eso conviene escuchar, pedir aclaraciones y responder al punto concreto.
                </p>
                <p>
                  También debemos aceptar que algunas objeciones no pueden resolverse porque reflejan una incompatibilidad real. Si una propuesta no se ajusta a las necesidades, las posibilidades o las prioridades del cliente, insistir puede ser contraproducente.
                </p>
                <p>
                  Una respuesta comercial responsable no consiste en neutralizar cualquier duda, sino en proporcionar información suficiente para que pueda evaluarse.
                </p>
                <p>
                  Cuando las objeciones se reciben con serenidad, la conversación puede ganar profundidad. El vendedor deja de reaccionar defensivamente y empieza a utilizar las preguntas como una oportunidad para aclarar expectativas.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="vendedor-decision"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La decisión pertenece al cliente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La comunicación persuasiva tiene un límite que no debemos perder de vista: la decisión final corresponde a la persona que recibe la propuesta.
                </p>
                <p>
                  Nuestro papel consiste en explicar, responder, orientar y facilitar la comprensión. No consiste en eliminar la libertad de elección ni en convertir cada conversación en una obligación de compra.
                </p>
                <p>
                  Esta diferencia resulta fundamental para entender la influencia consciente. Podemos organizar mejor un mensaje, utilizar preguntas pertinentes y presentar una propuesta de forma atractiva, pero no debemos confundir esas habilidades con el derecho a decidir por otra persona.
                </p>
                <p>
                  Una decisión informada necesita tiempo cuando la situación lo requiere, información comprensible y ausencia de presiones artificiales. La urgencia solo tiene sentido cuando responde a una condición real que puede explicarse con transparencia.
                </p>
                <p>
                  Aceptar un «no» también forma parte de una comunicación profesional. No todas las personas necesitan lo que ofrecemos y no todas se encuentran en el momento adecuado para adquirirlo.
                </p>
                <p>
                  Respetar esa realidad protege la credibilidad del vendedor y evita relaciones basadas en expectativas equivocadas.
                </p>
                <p>
                  La venta puede ser una consecuencia de una buena conversación, pero no debe convertirse en el único criterio para valorar su calidad.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="vendedor-fidelizacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación después de la venta
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La experiencia comercial continúa después de la decisión de compra. La entrega, la atención posterior, la resolución de dudas y el cumplimiento de lo prometido forman parte de la relación que se ha establecido.
                </p>
                <p>
                  Una venta puede generar satisfacción inicial y, aun así, deteriorarse si la experiencia posterior no corresponde con las expectativas. Por eso, la comunicación no debería desaparecer una vez completada la transacción.
                </p>
                <p>
                  La fidelización no se construye únicamente mediante mensajes promocionales o recordatorios de compra. También depende de que el cliente encuentre coherencia entre la propuesta original y el servicio recibido.
                </p>
                <p>
                  Escuchar comentarios, atender incidencias y ofrecer información útil puede ayudar a mantener una relación profesional más sólida.
                </p>
                <p>
                  Esto no significa que cada cliente vaya a convertirse en un comprador recurrente. La continuidad depende de la utilidad real de la oferta y de la experiencia concreta de cada persona.
                </p>
                <p>
                  Una relación comercial bien cuidada puede favorecer recomendaciones y nuevas oportunidades, pero su fundamento debe seguir siendo la confianza, no la presión para repetir una compra.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="vendedor-digital"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La comunicación comercial en entornos digitales
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los principios de la comunicación persuasiva también tienen aplicación en páginas web, correos electrónicos, redes sociales, presentaciones y otros espacios digitales.
                </p>
                <p>
                  La diferencia es que, en muchos de estos contextos, no existe una conversación presencial inmediata. El mensaje debe ofrecer suficiente claridad para que el usuario pueda comprender la propuesta sin depender de una explicación verbal.
                </p>
                <p>
                  Una página comercial, por ejemplo, necesita organizar la información de manera que el visitante pueda identificar qué se ofrece, para quién puede ser útil y cuáles son las condiciones relevantes.
                </p>
                <p>
                  En el correo electrónico, la pertinencia del mensaje y la claridad del propósito influyen en la experiencia del destinatario. En redes sociales, la comunicación necesita adaptarse al contexto sin perder consistencia.
                </p>
                <p>
                  La automatización puede ayudar a organizar determinados procesos, pero no sustituye el criterio necesario para comunicarse con personas reales. Una secuencia de mensajes no debería convertirse en una sucesión de presiones ni ignorar las respuestas del usuario.
                </p>
                <p>
                  En cualquier canal digital conviene respetar la privacidad, ofrecer información veraz y facilitar que cada persona pueda decidir cómo continuar la interacción.
                </p>
                <p>
                  La tecnología amplía las posibilidades de comunicación. La responsabilidad de utilizarla adecuadamente sigue correspondiendo a quien diseña y ejecuta el proceso comercial.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="vendedor-identidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una identidad comercial coherente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La manera en que vendemos también contribuye a construir nuestra identidad profesional.
                </p>
                <p>
                  No basta con utilizar un lenguaje atractivo si nuestra conducta transmite lo contrario. La credibilidad depende de que exista correspondencia entre el mensaje, la propuesta, el trato y la experiencia que recibe el cliente.
                </p>
                <p>
                  Una identidad comercial coherente no necesita imitar estilos ajenos ni recurrir a una personalidad artificial. Puede desarrollarse a partir de una forma reconocible de explicar, escuchar, responder y cumplir compromisos.
                </p>
                <p>
                  Esto resulta especialmente importante para profesionales independientes, emprendedores y personas que representan directamente sus propios productos o servicios. En estos casos, la comunicación comercial forma parte de la percepción que el público construye sobre la marca personal.
                </p>
                <p>
                  La consistencia también requiere reconocer los límites de nuestro conocimiento. No siempre tendremos una respuesta inmediata, y admitirlo puede ser más profesional que improvisar una explicación poco fiable.
                </p>
                <p>
                  La confianza a largo plazo se apoya en comportamientos repetidos, no en una intervención brillante aislada.
                </p>
                <p>
                  Cuando nuestra identidad comercial refleja lo que realmente podemos ofrecer, la comunicación se vuelve más natural y sostenible.
                </p>
              </div>
            </section>

            {/* Apartado 13 */}
            <section
              id="vendedor-lectores"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                A quién puede interesar esta perspectiva
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La comunicación persuasiva sin presión puede resultar especialmente relevante para quienes necesitan presentar productos, servicios o propuestas profesionales y desean mejorar la calidad de sus conversaciones comerciales.
                </p>
                <p>
                  Puede interesar a emprendedores, vendedores, profesionales independientes, consultores, creadores de productos digitales y personas que gestionan directamente la relación con sus clientes.
                </p>
                <p>
                  También puede aportar una perspectiva útil a quienes trabajan en marketing, atención comercial o desarrollo de relaciones profesionales, especialmente cuando necesitan explicar propuestas complejas de forma comprensible.
                </p>
                <p>
                  No se trata de convertir todas las conversaciones en oportunidades de venta ni de utilizar recursos psicológicos para obtener respuestas automáticas. Se trata de comprender mejor cómo se construye una interacción comercial y qué elementos pueden facilitar una decisión informada.
                </p>
                <p>
                  La capacidad de escuchar, formular preguntas pertinentes, presentar valor y responder a las dudas puede desarrollarse mediante práctica y reflexión. No depende de una fórmula universal ni produce resultados idénticos en todos los contextos.
                </p>
                <p>
                  El interés de esta perspectiva está en mejorar la calidad de la comunicación y reconocer que una relación comercial sólida necesita algo más que argumentos.
                </p>
                <p>
                  Vender sin presionar exige comprender que la influencia tiene sentido cuando respeta a la persona que recibe el mensaje.
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

export default HypnoticSellerView;
