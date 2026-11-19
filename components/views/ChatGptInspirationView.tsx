import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface ChatGptInspirationViewProps {
  book?: BookItem;
}

export const CHATGPT_INSPIRATION_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'creatividad-camino-imprevisible',
    label: 'La creatividad no siempre sigue un camino previsible',
  },
  {
    id: 'pensar-nuevas-perspectivas',
    label: 'Pensar a través de nuevas perspectivas',
  },
  {
    id: 'valor-ideas-imperfectas',
    label: 'El valor de las ideas imperfectas',
  },
  {
    id: 'explorar-sin-perder-direccion',
    label: 'Explorar sin perder la dirección de nuestra obra',
  },
  {
    id: 'imaginacion-contexto-sensibilidad',
    label: 'La imaginación necesita contexto y sensibilidad',
  },
  {
    id: 'posibilidades-dentro-historia',
    label: 'Encontrar posibilidades dentro de una historia',
  },
  {
    id: 'lenguaje-espacio-experimentacion',
    label: 'El lenguaje como espacio de experimentación',
  },
  {
    id: 'conversacion-ayuda-avanzar',
    label: 'Cuando una conversación ayuda a avanzar',
  },
  {
    id: 'recuperar-impulso-creativo',
    label: 'Recuperar el impulso creativo',
  },
  {
    id: 'voz-autor-no-delegable',
    label: 'La voz del autor no puede delegarse',
  },
  {
    id: 'crear-epoca-nuevas-herramientas',
    label: 'Crear en una época de nuevas herramientas',
  },
  {
    id: 'creatividad-abierta-consciente',
    label: 'Una creatividad más abierta, pero también más consciente',
  },
];

const ChatGptInspirationView: React.FC<ChatGptInspirationViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'desbloquea-tu-inspiracion-con-chatgpt') ||
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
              : [{ label: 'Tecnología', href: '/tecnologia/' }]),
            {
              label: currentBook.title,
              href: currentBook.path || '/desbloquea-tu-inspiracion-con-chatgpt/',
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
                href={parentCategory?.path || '/tecnologia/'}
                className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] hover:text-[#174532] transition-colors"
              >
                <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
                <span>Ruta {parentCategory?.category || 'Tecnología'}</span>
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              Desbloquea tu inspiración con ChatGPT
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Más potencia y creatividad para los autores
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-5">
              Una exploración de la imaginación, el pensamiento creativo y las nuevas posibilidades de escritura que surgen cuando la tecnología se convierte en un interlocutor para nuestras ideas.
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
                Escribir no siempre consiste en saber qué queremos decir. En ocasiones, conocemos el tema, tenemos una historia que contar o sentimos que existe una idea esperando ser desarrollada, pero no conseguimos encontrar el camino que nos permita avanzar. Otras veces, comenzamos con entusiasmo y descubrimos que nuestras posibilidades iniciales parecen demasiado limitadas, que los personajes no evolucionan como esperábamos o que el texto necesita una perspectiva diferente.
              </p>
              <p>
                La creatividad no es un proceso constante ni responde siempre a nuestra voluntad. Podemos tener momentos de extraordinaria claridad y otros en los que cualquier intento de avanzar parece conducirnos al mismo lugar. En estas circunstancias, disponer de un recurso con el que contrastar pensamientos, explorar alternativas y observar nuestras ideas desde otros ángulos puede resultar especialmente interesante.
              </p>
              <p>
                ChatGPT nos ofrece una forma diferente de interactuar con el lenguaje. Podemos utilizarlo para explorar posibilidades, plantear escenarios, cuestionar planteamientos, desarrollar asociaciones y experimentar con enfoques que quizá no habíamos considerado. Su utilidad creativa no consiste en sustituir nuestra imaginación, sino en proporcionarnos estímulos con los que podamos trabajar.
              </p>
              <p>
                El verdadero potencial de esta colaboración aparece cuando aprendemos a distinguir entre generar posibilidades y tomar decisiones creativas. La herramienta puede ofrecernos caminos, pero somos nosotros quienes elegimos cuáles merecen ser recorridos, qué emociones queremos transmitir y qué significado tendrá finalmente nuestra obra.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (DESPUÉS DE INTRO, ANTES DE LOS 12 H2)  */}
        {/* ============================================================ */}
        <CategoryIndex
          items={CHATGPT_INSPIRATION_INDEX_ITEMS}
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
              id="creatividad-camino-imprevisible"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La creatividad no siempre sigue un camino previsible
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La escritura suele llevarnos por caminos que no podemos anticipar completamente. Una idea aparentemente sencilla puede convertirse en el centro de una obra, mientras que un planteamiento que inicialmente parecía prometedor termina perdiendo interés. En este proceso, no siempre necesitamos más información; a veces necesitamos una forma diferente de observar aquello que ya tenemos.
                </p>
                <p>
                  El pensamiento creativo se alimenta de conexiones, asociaciones, experiencias y preguntas. Cuando permanecemos demasiado tiempo dentro de una misma perspectiva, podemos dejar de percibir alternativas. Un personaje empieza a comportarse de manera previsible, una escena parece carecer de fuerza o una temática nos conduce repetidamente a las mismas conclusiones.
                </p>
                <p>
                  ChatGPT puede ayudarnos a interrumpir esa repetición. Podemos presentar una situación, explicar dónde encontramos dificultades y solicitar que explore distintas interpretaciones. No todas sus propuestas serán interesantes, pero algunas pueden ofrecernos un punto de partida inesperado o permitirnos reconocer con mayor claridad aquello que realmente queremos expresar.
                </p>
                <p>
                  La utilidad no está necesariamente en aceptar una respuesta. A veces, una propuesta que descartamos nos ayuda a descubrir por qué preferimos otra dirección. Incluso una alternativa que no encaja puede revelar algo sobre nuestra intención original.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="pensar-nuevas-perspectivas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Pensar a través de nuevas perspectivas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las dificultades de desarrollar una idea consiste en permanecer demasiado cerca de ella. Cuando llevamos tiempo trabajando en un texto, conocemos cada detalle y podemos perder la capacidad de observarlo con cierta distancia. Esto afecta tanto a la escritura de ficción como a la elaboración de textos de carácter reflexivo, divulgativo o creativo.
                </p>
                <p>
                  Una herramienta conversacional puede servirnos para examinar una misma cuestión desde perspectivas distintas. Podemos explorar cómo interpretaría una situación alguien con otra experiencia, qué elementos podrían resultar contradictorios o qué consecuencias tendría una decisión diferente.
                </p>
                <p>
                  Este ejercicio no pretende que la inteligencia artificial determine cuál es la mejor interpretación. Su función es ampliar el campo de observación para que nosotros podamos comparar, cuestionar y decidir.
                </p>
                <p>
                  Cambiar de perspectiva también puede ayudarnos a descubrir matices. Una escena puede adquirir mayor profundidad si comprendemos mejor las motivaciones de quienes participan en ella. Un argumento puede resultar más interesante cuando reconocemos sus puntos débiles. Una idea puede transformarse cuando dejamos de tratarla como una conclusión definitiva y comenzamos a examinarla como una posibilidad.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="valor-ideas-imperfectas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El valor de las ideas imperfectas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Muchas ideas creativas no llegan completamente formadas. Aparecen como imágenes aisladas, fragmentos de diálogo, preguntas, sensaciones o intuiciones que todavía no sabemos cómo utilizar. Intentar convertir inmediatamente cada una de ellas en algo coherente puede limitar nuestra exploración.
                </p>
                <p>
                  En esta etapa, ChatGPT puede ayudarnos a desarrollar posibilidades sin exigir que tengamos una dirección definitiva. Podemos partir de una frase, una escena incompleta, una situación cotidiana o una combinación de elementos que aparentemente no guardan relación entre sí.
                </p>
                <p>
                  El trabajo consiste en utilizar esas propuestas como material de exploración. Una respuesta puede sugerir caminos que después combinamos, modificamos o descartamos. Otra puede ayudarnos a desarrollar una idea que inicialmente parecía demasiado pequeña para sostener un texto.
                </p>
                <p>
                  Es importante mantener una actitud abierta durante este proceso. Si evaluamos cada propuesta exclusivamente por su calidad final, podemos cerrar demasiado pronto posibilidades que todavía necesitan desarrollarse. La exploración tiene un propósito distinto de la revisión: primero ampliamos el terreno, después seleccionamos y trabajamos aquello que realmente merece formar parte de nuestra obra.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="explorar-sin-perder-direccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Explorar sin perder la dirección de nuestra obra
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La posibilidad de generar numerosas alternativas puede convertirse también en una dificultad. Cuando disponemos de demasiadas ideas, resulta fácil dispersarnos, cambiar constantemente de enfoque o abandonar una estructura que ya habíamos desarrollado.
                </p>
                <p>
                  La creatividad necesita libertad, pero también una cierta dirección. Antes de explorar nuevas posibilidades, conviene comprender qué estamos intentando conseguir con nuestro texto, qué elementos son esenciales y qué aspectos podemos modificar.
                </p>
                <p>
                  ChatGPT puede ayudarnos a examinar opciones sin necesidad de reconstruir toda nuestra obra. Podemos utilizarlo para explorar una escena concreta, reconsiderar un conflicto, desarrollar una transición o buscar alternativas para un fragmento que no funciona. De este modo, la experimentación permanece vinculada al proyecto y no se convierte en una sucesión interminable de ideas desconectadas.
                </p>
                <p>
                  También podemos establecer límites. Si estamos desarrollando una historia, quizá queramos conservar la personalidad de un protagonista, el tono general, el contexto o una determinada intención narrativa. Aportar estas referencias permite que la exploración sea más útil y evita que las propuestas se alejen de aquello que estamos construyendo.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="imaginacion-contexto-sensibilidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La imaginación necesita contexto y sensibilidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las ideas adquieren sentido dentro de un contexto. Una propuesta que funciona en una historia puede resultar completamente inadecuada en otra. Un tono humorístico puede enriquecer un texto o destruir una atmósfera cuidadosamente construida. Una decisión de un personaje puede resultar creíble cuando conocemos sus circunstancias y artificial cuando ignoramos su historia.
                </p>
                <p>
                  Por eso, el uso creativo de ChatGPT mejora cuando no nos limitamos a plantear peticiones aisladas. Podemos explicar el mundo en el que se desarrolla nuestra obra, las características de los personajes, las emociones que queremos transmitir o las restricciones que debemos respetar.
                </p>
                <p>
                  El contexto nos permite evaluar las respuestas con mayor criterio. No buscamos únicamente alternativas llamativas, sino posibilidades que tengan sentido dentro de nuestro universo creativo.
                </p>
                <p>
                  La sensibilidad también desempeña un papel fundamental. La tecnología puede proponer descripciones o situaciones, pero la comprensión de determinados matices emocionales, culturales o personales requiere una evaluación cuidadosa. Nuestra experiencia y nuestra manera de interpretar el mundo siguen siendo fundamentales para construir textos que conecten con los lectores.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="posibilidades-dentro-historia"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Encontrar posibilidades dentro de una historia
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una historia puede contener elementos que todavía no hemos aprovechado completamente. Un conflicto secundario, una decisión aparentemente insignificante o una característica de un personaje pueden abrir nuevas posibilidades de desarrollo.
                </p>
                <p>
                  Cuando sentimos que una narración se ha detenido, podemos utilizar ChatGPT como un espacio de exploración. En lugar de pedirle que continúe la historia por nosotros, podemos analizar las circunstancias que hemos creado y examinar qué alternativas existen.
                </p>
                <p>
                  ¿Qué ocurriría si un personaje interpretara de manera diferente una información? ¿Qué consecuencias tendría una decisión que hasta ahora no habíamos considerado? ¿Qué tensión podría surgir de una contradicción entre lo que alguien desea y lo que está dispuesto a hacer?
                </p>
                <p>
                  Este tipo de interacción nos permite investigar la lógica interna de una historia. Podemos descubrir inconsistencias, explorar consecuencias y encontrar elementos que aporten mayor profundidad. La decisión final permanece en nuestras manos, porque no todas las alternativas son compatibles con el significado que queremos construir.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="lenguaje-espacio-experimentacion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El lenguaje como espacio de experimentación
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  El lenguaje no es únicamente un vehículo para transmitir información. También determina el ritmo, la atmósfera, la personalidad y la experiencia que el lector tendrá al recorrer un texto.
                </p>
                <p>
                  En ocasiones, sabemos lo que queremos expresar, pero no encontramos la forma adecuada. Una frase parece demasiado rígida, una descripción carece de fuerza o un párrafo no transmite la sensación que imaginábamos. En estos momentos, experimentar con diferentes formulaciones puede ayudarnos a comprender mejor nuestras propias preferencias.
                </p>
                <p>
                  ChatGPT puede servirnos para comparar posibilidades de expresión, examinar el efecto de diferentes tonos o encontrar alternativas cuando una formulación se ha vuelto demasiado familiar. Podemos explorar cómo cambia una misma idea cuando utilizamos un lenguaje más directo, una construcción más evocadora o una perspectiva diferente.
                </p>
                <p>
                  Sin embargo, la experimentación debe estar al servicio de nuestra intención. No necesitamos que cada frase sea más sofisticada ni que cada descripción contenga recursos llamativos. La claridad, la sencillez y la precisión también pueden ser decisiones estilísticas. El objetivo es encontrar el lenguaje que mejor represente aquello que queremos comunicar.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="conversacion-ayuda-avanzar"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Cuando una conversación ayuda a avanzar
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una de las características más interesantes de trabajar con una herramienta conversacional es que podemos desarrollar una idea progresivamente. No necesitamos resolver todas las cuestiones en una única interacción. Podemos plantear una primera posibilidad, examinarla, corregir las condiciones y continuar a partir de lo que hemos descubierto.
                </p>
                <p>
                  Este proceso se parece a una conversación exploratoria en la que las preguntas pueden resultar tan importantes como las respuestas. Cuando conseguimos identificar aquello que no nos convence, podemos dirigir mejor el siguiente paso.
                </p>
                <p>
                  También podemos utilizar la interacción para poner a prueba nuestras propias decisiones. Explicar una idea nos obliga a organizarla y hacer explícitos aspectos que quizá permanecían confusos. Las respuestas pueden ayudarnos a detectar vacíos, contradicciones o posibilidades que no habíamos considerado.
                </p>
                <p>
                  La herramienta no necesita convertirse en la autoridad de nuestro proceso creativo. Su valor está en proporcionar un espacio de intercambio que podamos dirigir, interrumpir, modificar o abandonar cuando deja de ser útil.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="recuperar-impulso-creativo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Recuperar el impulso creativo
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Los bloqueos creativos no siempre tienen la misma causa. En ocasiones, necesitamos descansar. Otras veces, hemos perdido interés en una idea, estamos intentando resolver demasiadas cuestiones simultáneamente o nos exigimos un nivel de perfección que dificulta cualquier avance.
                </p>
                <p>
                  Utilizar ChatGPT puede ayudarnos a identificar qué tipo de dificultad estamos experimentando. Si no sabemos cómo continuar, quizá podamos explorar diferentes caminos. Si una escena no funciona, podemos examinar sus elementos. Si una idea parece demasiado amplia, podemos delimitarla. Si estamos atrapados en una formulación, podemos buscar alternativas.
                </p>
                <p>
                  Pero no debemos convertir la herramienta en una obligación de productividad permanente. La creatividad también necesita pausas, observación, experiencias, lectura y tiempo para que las ideas maduren. No todas las dificultades deben resolverse generando más contenido.
                </p>
                <p>
                  En ocasiones, avanzar significa dejar de escribir durante un tiempo. En otras, significa reducir nuestras expectativas, recuperar una parte del proyecto que todavía nos interesa o realizar una pequeña tarea que nos permita volver a entrar en el proceso.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="voz-autor-no-delegable"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La voz del autor no puede delegarse
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La facilidad para generar textos plantea una cuestión importante: ¿qué hace que una obra sea nuestra? La respuesta no depende únicamente de las palabras que utilizamos, sino también de nuestras decisiones, experiencias, observaciones, sensibilidad y manera de interpretar aquello que queremos expresar.
                </p>
                <p>
                  ChatGPT puede ofrecer formulaciones, desarrollar posibilidades y sugerir caminos. Sin embargo, la identidad de una obra se construye a través de elecciones. Qué incluimos, qué omitimos, qué consideramos importante, cómo tratamos a nuestros personajes y qué perspectiva adoptamos son decisiones que definen nuestra relación con el texto.
                </p>
                <p>
                  Utilizar la inteligencia artificial no implica renunciar a nuestra voz. Podemos emplearla como apoyo para explorar, cuestionar o mejorar determinados aspectos de la escritura, manteniendo el control sobre el resultado final.
                </p>
                <p>
                  La revisión personal es indispensable. Debemos comprobar que el texto representa nuestras intenciones, que no contiene elementos que no comprendemos y que su lenguaje responde a nuestra manera de escribir. La herramienta puede facilitar el proceso, pero la responsabilidad creativa continúa siendo nuestra.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="crear-epoca-nuevas-herramientas"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Crear en una época de nuevas herramientas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La incorporación de inteligencia artificial al ámbito creativo está modificando las posibilidades de trabajo de escritores, autores y profesionales vinculados al lenguaje. Estas herramientas permiten experimentar con nuevas formas de interacción, explorar procesos diferentes y reconsiderar algunas tareas que tradicionalmente realizábamos de manera individual.
                </p>
                <p>
                  Esta transformación también genera preguntas sobre originalidad, autoría, formación, criterios de calidad y relación entre tecnología y creación humana. No todas las respuestas están definidas, y probablemente algunas cambiarán a medida que evolucionen las herramientas y las prácticas de escritura.
                </p>
                <p>
                  Más que intentar anticipar todas las consecuencias, podemos desarrollar una actitud consciente de experimentación. Aprender a utilizar la tecnología, comprender sus límites y evaluar sus resultados nos permitirá tomar decisiones más informadas.
                </p>
                <p>
                  La novedad tecnológica no debe obligarnos a cambiar nuestra manera de escribir si no encontramos una razón para hacerlo. Podemos incorporar aquello que realmente nos aporta valor y mantener los métodos que continúan siendo importantes para nuestra creatividad.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="creatividad-abierta-consciente"
              tabIndex={-1}
              className="space-y-5 scroll-mt-28 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una creatividad más abierta, pero también más consciente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La posibilidad de dialogar con una herramienta capaz de generar respuestas abre nuevas formas de explorar el lenguaje y las ideas. Podemos experimentar sin necesidad de tener todas las respuestas, examinar posibilidades que inicialmente no habíamos considerado y encontrar estímulos para continuar trabajando.
                </p>
                <p>
                  Sin embargo, la amplitud de estas posibilidades no garantiza una obra significativa. La creatividad necesita intención, selección, sensibilidad, conocimiento y una relación personal con aquello que escribimos. La tecnología puede ampliar el espacio de exploración, pero no determina qué merece ser expresado.
                </p>
                <p>
                  Cuando utilizamos ChatGPT con criterio, podemos convertirlo en un recurso que nos ayude a observar nuestras ideas desde otros ángulos, superar determinadas dificultades y experimentar con mayor libertad. Su valor no reside en producir una obra en nuestro lugar, sino en contribuir a que descubramos posibilidades que podamos hacer nuestras.
                </p>
                <p>
                  Escribir sigue siendo un acto de elección. Cada texto refleja una manera de mirar, de comprender y de organizar aquello que queremos compartir. La inteligencia artificial puede acompañarnos en ese recorrido, pero la dirección creativa, la identidad y el significado de nuestra obra continúan perteneciendo a quien escribe.
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

export default ChatGptInspirationView;
