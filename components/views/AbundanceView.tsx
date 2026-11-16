import React from 'react';
import { BookItem } from '../../types.ts';
import { FEATURED_BOOKS, ALL_BOOKS } from '../../constants.tsx';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import BookPurchaseBlock from '../BookPurchaseBlock.tsx';
import BookPurchaseCTA from '../BookPurchaseCTA.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';
import { ArrowLeft } from 'lucide-react';

interface AbundanceViewProps {
  book?: BookItem;
}

export const ABUNDANCE_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  {
    id: 'abundancia-posibilidades',
    label: 'La abundancia como una forma de interpretar nuestras posibilidades',
  },
  {
    id: 'abundancia-pensamiento-decisiones',
    label: 'La relación entre pensamiento y decisiones cotidianas',
  },
  {
    id: 'abundancia-intencion-direccion',
    label: 'La intención necesita una dirección concreta',
  },
  {
    id: 'abundancia-atencion',
    label: 'La atención también determina lo que reconocemos',
  },
  {
    id: 'abundancia-bienestar-prosperidad',
    label: 'Bienestar y prosperidad no son dimensiones separadas',
  },
  {
    id: 'abundancia-incertidumbre',
    label: 'Aprender a convivir con la incertidumbre',
  },
  {
    id: 'abundancia-relaciones',
    label: 'Las relaciones forman parte de nuestra experiencia de prosperidad',
  },
  {
    id: 'abundancia-dinero',
    label: 'El dinero necesita una relación consciente',
  },
  {
    id: 'abundancia-aspiraciones',
    label: 'Aspiraciones que respetan nuestra propia dirección',
  },
  {
    id: 'abundancia-cotidiana',
    label: 'Reconocer la abundancia en la experiencia cotidiana',
  },
  {
    id: 'abundancia-tiempo',
    label: 'Una perspectiva que se construye con el tiempo',
  },
  {
    id: 'abundancia-lectores',
    label: '¿A quién puede interesarle esta lectura?',
  },
];

const AbundanceView: React.FC<AbundanceViewProps> = ({ book }) => {
  const currentBook =
    book ||
    ALL_BOOKS.find((b) => b.slug === 'el-arte-de-atraer-la-abundancia') ||
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
              href: currentBook.path || '/el-arte-de-atraer-la-abundancia/',
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
                className="inline-block text-[11.5px] uppercase tracking-wider font-semibold text-[#174532] bg-[#dae7df]/30 border border-[#dae7df] px-3.5 py-1.5 rounded-full hover:bg-[#4db380] hover:text-white transition-all"
              >
                Ruta {parentCategory?.category || 'Mindset'}
              </Link>
            </div>

            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4 break-words text-balance">
              El arte de atraer la abundancia
            </h1>

            <p className="text-subtitle text-[#174532]/85 font-medium mb-4 font-serif italic leading-relaxed max-w-3xl">
              Despierta tu potencial ilimitado y crea una vida de riqueza, éxito y plenitud total.
            </p>

            <p className="text-body text-[#1b1b1b]/85 font-normal leading-relaxed max-w-2xl mb-4">
              Una perspectiva práctica sobre la mentalidad, las oportunidades y la prosperidad que construimos con nuestras decisiones.
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
                Entender la abundancia como algo más que un resultado puntual cambia la forma en que observamos nuestras circunstancias. Lejos de reducirse a una acumulación material, la abundancia personal tiene que ver con la manera en que nos relacionamos con nuestras posibilidades, tomamos decisiones y valoramos aquello que consideramos importante en nuestra vida.
              </p>
              <p>
                Con frecuencia se plantea la idea simplista de que basta con pensar en positivo para transformar la realidad. Sin embargo, desarrollar una mentalidad de abundancia no consiste en ignorar las dificultades ni en esperar cambios automáticos: exige revisar nuestras creencias, prestar atención a lo que depende de nosotros y actuar con mayor criterio frente a los recursos y oportunidades que tenemos delante.
              </p>
              <p>
                Este libro sobre abundancia propone precisamente una mirada más consciente sobre la prosperidad y desarrollo personal. Más allá de fórmulas rápidas, abre una reflexión práctica sobre cómo nuestras ideas, hábitos y elecciones cotidianas influyen en la dirección que damos a nuestra propia vida.
              </p>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* ÍNDICE DE CONTENIDOS (EXACTAMENTE DESPUÉS DE LA INTRO)       */}
        {/* ============================================================ */}
        <CategoryIndex
          items={ABUNDANCE_INDEX_ITEMS}
          maxWidthClass="max-w-5xl"
          ariaLabel="Contenido de esta página"
        />

        {/* ============================================================ */}
        {/* DESARROLLO TEMÁTICO PRINCIPAL (12 APARTADOS H2)              */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="space-y-12 text-[#1b1b1b]/85 leading-[1.78] font-normal">
            {/* Apartado 1 */}
            <section
              id="abundancia-posibilidades"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La abundancia como una forma de interpretar nuestras posibilidades
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La palabra abundancia suele asociarse de inmediato con dinero, posesiones o resultados extraordinarios. Sin embargo, esa interpretación deja fuera una parte importante de la cuestión: la manera en que una persona reconoce sus posibilidades, valora lo que tiene y decide qué hacer con los recursos disponibles. Dos personas pueden encontrarse ante circunstancias parecidas y desarrollar respuestas muy diferentes. La diferencia no siempre está en las oportunidades que aparecen, sino también en la forma de percibirlas y relacionarse con ellas.
                </p>
                <p>
                  Hablar de abundancia desde esta perspectiva no significa negar las dificultades ni suponer que todas las personas parten de las mismas condiciones. Significa ampliar el marco desde el que observamos nuestra vida. La prosperidad puede incluir estabilidad económica, pero también autonomía, relaciones satisfactorias, bienestar, tiempo y capacidad para orientar nuestras decisiones hacia objetivos que tengan sentido.
                </p>
                <p>
                  Esta mirada permite abandonar una comparación constante con los resultados ajenos. Cuando utilizamos la vida de otras personas como medida permanente de nuestro propio progreso, corremos el riesgo de perder de vista nuestras circunstancias, prioridades y posibilidades reales. La abundancia deja entonces de ser una experiencia que podemos construir y se convierte en una carrera que nunca parece terminar.
                </p>
              </div>
            </section>

            {/* Apartado 2 */}
            <section
              id="abundancia-pensamiento-decisiones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La relación entre pensamiento y decisiones cotidianas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Nuestra manera de interpretar lo que sucede influye en las decisiones que tomamos. Una expectativa negativa puede llevarnos a descartar una posibilidad antes de examinarla; una confianza sin fundamento, por el contrario, puede impulsarnos a asumir riesgos que no hemos evaluado correctamente. Por eso, una mentalidad constructiva no consiste en sustituir cualquier preocupación por optimismo, sino en desarrollar criterios que permitan valorar las situaciones con mayor claridad.
                </p>
                <p>
                  Las ideas que repetimos sobre nuestras capacidades, el dinero, el éxito o el futuro pueden convertirse en referencias habituales. Algunas nos ayudan a actuar con prudencia; otras pueden mantenernos dentro de límites que nunca hemos revisado. Examinar esas ideas exige distinguir entre hechos, interpretaciones y temores. No todo lo que pensamos describe fielmente la realidad, pero tampoco todo obstáculo puede resolverse cambiando nuestra actitud.
                </p>
                <p>
                  Una perspectiva más consciente nos permite formular mejores preguntas: ¿qué parte de esta situación depende de nosotros?, ¿qué información nos falta?, ¿qué decisión sería razonable con los recursos actuales?, ¿qué estamos evitando por miedo a equivocarnos? Estas preguntas no garantizan un resultado, pero ayudan a sustituir las reacciones automáticas por respuestas deliberadas.
                </p>
              </div>
            </section>

            {/* Apartado 3 */}
            <section
              id="abundancia-intencion-direccion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La intención necesita una dirección concreta
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Desear una vida diferente puede ser un punto de partida, pero el deseo por sí solo no organiza el camino. Para que una aspiración tenga posibilidades de convertirse en una dirección real, necesitamos definir qué significa para nosotros y qué decisiones podrían acercarnos a ella.
                </p>
                <p>
                  Una intención clara funciona como criterio para ordenar prioridades. Nos ayuda a distinguir entre actividades que consumen atención y acciones que contribuyen a algo que consideramos importante. También permite reconocer cuándo estamos siguiendo expectativas externas en lugar de tomar decisiones coherentes con nuestros propios objetivos.
                </p>
                <p>
                  No todas las metas necesitan ser ambiciosas ni producir cambios inmediatos. A veces, avanzar consiste en ordenar una situación financiera, mejorar una relación, recuperar tiempo personal o desarrollar una habilidad. La importancia de una meta no depende exclusivamente de su tamaño, sino de la función que cumple en la vida que queremos construir.
                </p>
                <p>
                  La coherencia aparece cuando nuestras elecciones cotidianas guardan relación con aquello que decimos valorar. No exige una disciplina perfecta. Requiere revisar el rumbo, reconocer las contradicciones y realizar ajustes cuando las circunstancias cambian.
                </p>
              </div>
            </section>

            {/* Apartado 4 */}
            <section
              id="abundancia-atencion"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                La atención también determina lo que reconocemos
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Vivimos rodeados de estímulos, información y comparaciones. Esa abundancia de mensajes no implica necesariamente una mayor capacidad para identificar oportunidades. Cuando nuestra atención está fragmentada, podemos dedicar demasiado tiempo a asuntos secundarios y dejar en segundo plano aquello que necesita una decisión.
                </p>
                <p>
                  Aprender a dirigir la atención implica reconocer qué merece nuestra energía y qué puede esperar. También significa observar el entorno sin interpretar cada dificultad como una señal definitiva de fracaso. Una situación compleja puede contener información útil, aunque no ofrezca una solución inmediata.
                </p>
                <p>
                  La atención consciente permite valorar mejor los recursos que ya tenemos: conocimientos, experiencias, contactos, tiempo, capacidades y herramientas. Reconocerlos no significa conformarse con la situación actual. Significa partir de una evaluación más realista para decidir qué conviene desarrollar, modificar o buscar.
                </p>
                <p>
                  También conviene distinguir entre estar ocupado y avanzar. La actividad constante puede producir una sensación de movimiento sin acercarnos necesariamente a nuestras prioridades. En cambio, una elección bien orientada puede tener más valor que muchas acciones realizadas sin un propósito claro.
                </p>
              </div>
            </section>

            {/* Apartado 5 */}
            <section
              id="abundancia-bienestar-prosperidad"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Bienestar y prosperidad no son dimensiones separadas
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Una visión limitada del éxito puede llevarnos a medir el progreso únicamente por los resultados visibles. Sin embargo, una mejora material pierde parte de su sentido cuando exige deteriorar de forma permanente la salud, las relaciones o la tranquilidad personal.
                </p>
                <p>
                  El bienestar no debería tratarse como una recompensa que llegará después de alcanzar todos nuestros objetivos. Forma parte de las condiciones que permiten sostener cualquier proyecto a lo largo del tiempo. El descanso, el cuidado personal, la estabilidad emocional y la calidad de nuestras relaciones influyen en nuestra capacidad para pensar, decidir y actuar.
                </p>
                <p>
                  Esto no significa que debamos buscar una vida sin exigencias ni momentos difíciles. Significa reconocer que los recursos personales también tienen límites. Ignorarlos puede convertir una aspiración valiosa en una fuente de desgaste.
                </p>
                <p>
                  Una relación más equilibrada con el éxito nos invita a revisar qué estamos sacrificando, qué estamos protegiendo y qué aspectos de nuestra vida necesitan mayor atención. La prosperidad adquiere así un significado más amplio, relacionado con la calidad de las condiciones que hacemos posibles y no solamente con aquello que podemos acumular.
                </p>
              </div>
            </section>

            {/* Apartado 6 */}
            <section
              id="abundancia-incertidumbre"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Aprender a convivir con la incertidumbre
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  No todas las decisiones ofrecen garantías. Podemos prepararnos, estudiar una situación y actuar con responsabilidad, pero siempre existirán factores que escapan a nuestro control. Pretender eliminar toda incertidumbre puede terminar paralizando cualquier iniciativa.
                </p>
                <p>
                  Una actitud constructiva consiste en diferenciar entre lo que podemos influir y lo que debemos aceptar como parte del contexto. Esta distinción evita gastar energía intentando controlar circunstancias ajenas y permite concentrarnos en las decisiones que sí están a nuestro alcance.
                </p>
                <p>
                  La confianza tampoco debería confundirse con la certeza de que todo saldrá bien. Puede entenderse como la disposición a actuar con criterio, aprender de la experiencia y revisar una decisión cuando aparecen datos nuevos. Esa confianza es compatible con la prudencia y con la posibilidad de equivocarnos.
                </p>
                <p>
                  Los resultados no siempre siguen el ritmo que esperamos. Por eso, conviene valorar también la calidad del proceso: la información que hemos adquirido, las capacidades que hemos desarrollado y la claridad con la que afrontamos las siguientes decisiones.
                </p>
              </div>
            </section>

            {/* Apartado 7 */}
            <section
              id="abundancia-relaciones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Las relaciones forman parte de nuestra experiencia de prosperidad
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La manera en que nos relacionamos con otras personas influye en la calidad de nuestra vida. La confianza, el respeto, la colaboración y la capacidad de establecer límites contribuyen a crear entornos más saludables.
                </p>
                <p>
                  Una perspectiva de abundancia no debería reducir las relaciones a su utilidad ni convertir cada encuentro en una oportunidad de obtener algo. Las conexiones humanas tienen valor propio. Compartir conocimientos, escuchar, colaborar y reconocer las necesidades de los demás permite construir vínculos que no dependen exclusivamente de un intercambio inmediato.
                </p>
                <p>
                  También es importante identificar las relaciones que generan desgaste constante. Establecer límites no implica actuar con indiferencia, sino reconocer que el respeto debe estar presente en ambas direcciones. Una relación equilibrada necesita espacio para las diferencias, la comunicación y la autonomía.
                </p>
                <p>
                  La prosperidad personal no se construye en aislamiento. El entorno influye en nuestras decisiones y nosotros también participamos en el entorno que ayudamos a crear.
                </p>
              </div>
            </section>

            {/* Apartado 8 */}
            <section
              id="abundancia-dinero"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                El dinero necesita una relación consciente
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La dimensión financiera forma parte de la abundancia, pero merece una mirada realista. El dinero ofrece posibilidades, facilita decisiones y puede aportar estabilidad. Sin embargo, su presencia no resuelve automáticamente todas las necesidades ni determina por sí sola la calidad de una vida.
                </p>
                <p>
                  Una relación más consciente con los recursos económicos comienza por observar cómo tomamos decisiones: qué valoramos, qué priorizamos, qué compromisos asumimos y qué hábitos mantenemos. La claridad financiera no depende únicamente de cuánto se posee, sino también de la capacidad para comprender la situación propia y actuar de acuerdo con ella.
                </p>
                <p>
                  Conviene evitar tanto la idealización del dinero como su rechazo automático. Considerarlo irrelevante puede impedirnos atender una dimensión importante de nuestra autonomía; convertirlo en la medida absoluta del éxito puede desplazar otros aspectos que también merecen cuidado.
                </p>
                <p>
                  La contribución, la generosidad y el uso responsable de los recursos pueden formar parte de una relación más amplia con la prosperidad. No se trata de adoptar una única fórmula económica, sino de reconocer que las decisiones financieras tienen consecuencias y deben responder a circunstancias concretas.
                </p>
              </div>
            </section>

            {/* Apartado 9 */}
            <section
              id="abundancia-aspiraciones"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Aspiraciones que respetan nuestra propia dirección
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Las metas personales adquieren mayor sentido cuando responden a una visión que hemos examinado y no únicamente a modelos externos de éxito. Es fácil adoptar objetivos porque parecen deseables, reciben reconocimiento o representan lo que otras personas han conseguido. Sin embargo, una aspiración puede resultar poco adecuada si no guarda relación con nuestras prioridades y condiciones.
                </p>
                <p>
                  Definir una dirección propia exige tiempo para revisar qué queremos conservar, qué deseamos cambiar y qué estamos dispuestos a dedicar a cada objetivo. También requiere aceptar que nuestras prioridades pueden evolucionar. Cambiar de dirección después de aprender algo nuevo no siempre significa abandonar; en ocasiones, significa tomar una decisión mejor informada.
                </p>
                <p>
                  El progreso puede ser gradual y adoptar formas distintas en cada etapa. Hay momentos para ampliar posibilidades y otros para consolidar lo que ya hemos construido. La comparación permanente dificulta reconocer esa diferencia y puede llevarnos a perseguir ritmos que no corresponden a nuestra realidad.
                </p>
                <p>
                  Una aspiración bien planteada no necesita convertirse en una exigencia permanente. Puede funcionar como orientación, ayudándonos a elegir con mayor conciencia y a evaluar los avances sin perder de vista el conjunto de nuestra vida.
                </p>
              </div>
            </section>

            {/* Apartado 10 */}
            <section
              id="abundancia-cotidiana"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Reconocer la abundancia en la experiencia cotidiana
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  La idea de prosperidad también puede observarse en situaciones que suelen pasar inadvertidas: disponer de tiempo para una conversación, aprender algo que amplía nuestra perspectiva, recuperar una relación importante o encontrar una forma más ordenada de resolver un problema.
                </p>
                <p>
                  Reconocer estos aspectos no significa ignorar las carencias. La gratitud pierde sentido cuando se utiliza para invalidar una dificultad real o para pedir a alguien que se conforme con circunstancias que necesita cambiar. Su valor está en ampliar la percepción, no en sustituir la acción.
                </p>
                <p>
                  La vida cotidiana ofrece oportunidades para revisar nuestras prioridades y reconocer qué está funcionando. Esa observación puede ayudarnos a cuidar lo que tiene valor, corregir lo que necesita atención y evitar que la búsqueda de un futuro mejor nos desconecte por completo del presente.
                </p>
                <p>
                  La abundancia, entendida de esta manera, no es un estado permanente ni una promesa de ausencia de problemas. Es una perspectiva que puede ayudarnos a relacionarnos con mayor conciencia con nuestras posibilidades, nuestros recursos y las personas que forman parte de nuestra vida.
                </p>
              </div>
            </section>

            {/* Apartado 11 */}
            <section
              id="abundancia-tiempo"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                Una perspectiva que se construye con el tiempo
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Atraer la abundancia puede interpretarse como un proceso de transformación de la mirada y de la conducta, no como una fórmula que garantice resultados externos. Pensar de otra manera puede abrir preguntas nuevas; actuar con intención puede modificar decisiones; revisar nuestros hábitos puede ayudarnos a sostener cambios. Pero los resultados también dependen de circunstancias, oportunidades y factores que no controlamos por completo.
                </p>
                <p>
                  El valor de esta perspectiva está en reunir reflexión y responsabilidad. No basta con imaginar una situación distinta si no estamos dispuestos a examinar las decisiones que tomamos. Tampoco resulta útil convertir cada dificultad en una supuesta falla personal. Una visión madura de la prosperidad reconoce tanto nuestra capacidad de actuar como los límites de nuestra influencia.
                </p>
                <p>
                  Desde ese punto de vista, la abundancia deja de ser una imagen idealizada y se convierte en una forma de observar la vida con mayor amplitud. Nos invita a valorar los recursos disponibles, definir qué significa avanzar y tomar decisiones más coherentes con aquello que queremos construir.
                </p>
              </div>
            </section>

            {/* Apartado 12 */}
            <section
              id="abundancia-lectores"
              tabIndex={-1}
              className="space-y-5 scroll-mt-20 outline-none"
            >
              <h2 className="text-h2 font-bold font-serif text-[#174532] leading-snug border-b border-[#dae7df]/60 pb-3">
                ¿A quién puede interesarle esta lectura?
              </h2>
              <div className="max-w-[68ch] space-y-5 text-body">
                <p>
                  Esta obra puede resultar de interés para quienes desean reflexionar sobre su relación con la prosperidad, el éxito y las oportunidades desde una perspectiva de desarrollo personal.
                </p>
                <p>
                  También puede interesar a lectores que quieran examinar sus creencias, revisar la influencia de sus hábitos y prestar más atención a la conexión entre sus aspiraciones y sus decisiones cotidianas.
                </p>
                <p>
                  No es necesario interpretar la abundancia exclusivamente desde el dinero. La lectura puede abordarse desde una visión más amplia que incluya bienestar, relaciones, autonomía, objetivos personales y la manera de valorar los recursos disponibles.
                </p>
                <p>
                  Quienes busquen una promesa de riqueza inmediata o una garantía de resultados deberían tener presente que el desarrollo personal no elimina los condicionantes externos. El interés de esta perspectiva está en ofrecer elementos de reflexión para tomar decisiones con mayor conciencia, no en sustituir la realidad por expectativas infundadas.
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

export default AbundanceView;
