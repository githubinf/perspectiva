import React, { useState } from 'react';
import { BookCategory, BookItem } from '../../types.ts';
import { Link } from '../../router.tsx';
import Breadcrumbs from '../Breadcrumbs.tsx';
import PurchaseModal from '../PurchaseModal.tsx';
import CategoryIndex, { CategoryIndexItem } from '../CategoryIndex.tsx';

interface TechnologyViewProps {
  category: BookCategory;
}

const TECHNOLOGY_INDEX_ITEMS: readonly CategoryIndexItem[] = [
  { id: 'tecnologia-trabajo', label: 'Cómo la IA cambia nuestra forma de trabajar' },
  { id: 'tecnologia-fundamentos', label: 'Comprender la inteligencia artificial' },
  { id: 'tecnologia-asistente', label: 'De herramienta aislada a asistente de trabajo' },
  { id: 'tecnologia-chatgpt', label: 'ChatGPT y la interacción con la información' },
  { id: 'tecnologia-creatividad', label: 'Inteligencia artificial y creatividad' },
  { id: 'tecnologia-contenidos', label: 'Creación de contenidos con IA' },
  { id: 'tecnologia-productividad', label: 'Productividad digital y organización del trabajo' },
  { id: 'tecnologia-oportunidades', label: 'IA y nuevas oportunidades digitales' },
  { id: 'tecnologia-marketing', label: 'Transformación del marketing con IA' },
  { id: 'tecnologia-automatizacion', label: 'Automatización e integración de procesos' },
  { id: 'tecnologia-limites', label: 'Límites de la IA: criterio y responsabilidad' },
  { id: 'tecnologia-libros', label: 'Cuatro perspectivas sobre IA aplicada' },
  { id: 'tecnologia-cierre', label: 'Cierre: tecnología y criterio humano' },
];

const AI_CATEGORIES = [
  {
    index: '01',
    term: 'Aprendizaje automático:',
    detail:
      'sistemas que identifican patrones a partir de datos y utilizan esos patrones para realizar determinadas tareas o predicciones.',
  },
  {
    index: '02',
    term: 'Procesamiento del lenguaje natural:',
    detail: 'tecnologías que permiten analizar, interpretar y trabajar con el lenguaje humano.',
  },
  {
    index: '03',
    term: 'Modelos generativos:',
    detail:
      'sistemas capaces de producir nuevos contenidos, como textos, imágenes, audio o código, a partir de las instrucciones y el contexto que reciben.',
  },
  {
    index: '04',
    term: 'Sistemas de reconocimiento y análisis:',
    detail:
      'herramientas orientadas a interpretar imágenes, sonidos, documentos y otros tipos de información.',
  },
];

const CHATGPT_ELEMENTS = [
  {
    index: '01',
    title: 'La formulación de instrucciones',
    detail:
      'Una petición clara ayuda a orientar el resultado. Cuanto mejor definamos la tarea, el propósito y las condiciones que debe respetar la respuesta, más posibilidades tendremos de obtener algo útil.',
  },
  {
    index: '02',
    title: 'El contexto',
    detail:
      'La información que proporcionamos influye en la interpretación de una petición. Un mismo encargo puede producir resultados muy diferentes dependiendo de los antecedentes, los objetivos y las restricciones que expliquemos.',
  },
  {
    index: '03',
    title: 'La interacción progresiva',
    detail:
      'No siempre necesitamos obtener una respuesta definitiva en una sola consulta. Podemos revisar, corregir, ampliar y orientar el trabajo mediante nuevas indicaciones.',
  },
  {
    index: '04',
    title: 'La evaluación de resultados',
    detail:
      'Una respuesta bien redactada no es necesariamente una respuesta correcta. Debemos comprobar datos, identificar posibles errores y evaluar si el resultado responde realmente a la necesidad planteada.',
  },
  {
    index: '05',
    title: 'La responsabilidad humana',
    detail:
      'La herramienta puede asistirnos en una tarea, pero somos nosotros quienes debemos determinar si el resultado es adecuado, fiable y coherente con el propósito del trabajo.',
  },
];

const CREATIVITY_USES = [
  'Explorar perspectivas diferentes sobre un mismo tema.',
  'Generar alternativas iniciales para un proyecto.',
  'Desarrollar conceptos y líneas de trabajo.',
  'Organizar ideas que todavía no tienen una estructura definida.',
  'Experimentar con formatos y enfoques.',
  'Revisar una propuesta desde diferentes puntos de vista.',
];

const MARKETING_APPLICATIONS = [
  {
    index: '01',
    term: 'Investigación y análisis:',
    detail: 'organizar información y explorar características de mercados, sectores y audiencias.',
  },
  {
    index: '02',
    term: 'Comprensión de necesidades:',
    detail: 'identificar patrones y agrupar información que ayude a interpretar intereses y comportamientos.',
  },
  {
    index: '03',
    term: 'Planificación:',
    detail: 'apoyar la organización de campañas, contenidos y acciones de comunicación.',
  },
  {
    index: '04',
    term: 'Adaptación de mensajes:',
    detail: 'explorar distintas formulaciones y enfoques para diferentes públicos o contextos.',
  },
  {
    index: '05',
    term: 'Análisis de resultados:',
    detail:
      'facilitar la interpretación preliminar de datos y la identificación de aspectos que merecen revisión.',
  },
  {
    index: '06',
    term: 'Personalización:',
    detail: 'apoyar la adaptación de determinadas experiencias y comunicaciones.',
  },
];

const AUTOMATION_LEVELS = [
  {
    index: 'Nivel 01',
    title: 'Uso independiente',
    detail:
      'Utilizamos una aplicación para resolver una tarea concreta. Por ejemplo, solicitar una síntesis de información o preparar un primer borrador.',
  },
  {
    index: 'Nivel 02',
    title: 'Automatización de tareas',
    detail:
      'Definimos un proceso que permite ejecutar una actividad repetitiva mediante reglas y herramientas, reduciendo determinadas intervenciones manuales.',
  },
  {
    index: 'Nivel 03',
    title: 'Integración de procesos',
    detail:
      'Conectamos diferentes aplicaciones y actividades para que la información pueda circular entre ellas y contribuir a un flujo de trabajo más organizado.',
  },
];

const AI_LIMITATIONS = [
  {
    index: '01',
    title: 'Precisión de la información',
    detail:
      'No debemos asumir que una respuesta es verdadera por el simple hecho de estar bien redactada. La comprobación resulta especialmente importante cuando trabajamos con información técnica, comercial o factual.',
  },
  {
    index: '02',
    title: 'Actualización',
    detail:
      'No todos los sistemas disponen de información actualizada ni acceso a fuentes externas en tiempo real. Debemos comprobar las capacidades concretas de cada herramienta.',
  },
  {
    index: '03',
    title: 'Privacidad',
    detail:
      'Es necesario evaluar qué información compartimos, qué datos pueden ser sensibles y cuáles son las condiciones de tratamiento de la plataforma utilizada.',
  },
  {
    index: '04',
    title: 'Derechos de autor',
    detail:
      'La utilización de contenidos generados o transformados mediante inteligencia artificial requiere atención a las condiciones legales, las licencias y los derechos de terceros aplicables.',
  },
  {
    index: '05',
    title: 'Dependencia tecnológica',
    detail:
      'Delegar demasiadas actividades puede reducir nuestra capacidad de análisis y dificultar la detección de errores. La herramienta debe apoyar el trabajo, no sustituir el conocimiento necesario para supervisarlo.',
  },
  {
    index: '06',
    title: 'Responsabilidad',
    detail:
      'Quien utiliza, revisa y publica un resultado debe asumir la responsabilidad correspondiente sobre su contenido y sus posibles consecuencias.',
  },
];

const DIAGRAM_A_STEPS = [
  { step: '01', label: 'Información', note: 'Fuentes, documentación y datos de partida' },
  { step: '02', label: 'Asistencia inteligente', note: 'Síntesis, exploración y organización inicial' },
  { step: '03', label: 'Evaluación', note: 'Contraste técnico, rigor y criterio humano' },
  { step: '04', label: 'Aplicación', note: 'Integración útil en el proyecto digital' },
];

const DIAGRAM_C_STEPS = [
  { step: '01', label: 'Objetivo' },
  { step: '02', label: 'Instrucciones' },
  { step: '03', label: 'Contexto' },
  { step: '04', label: 'Resultado' },
  { step: '05', label: 'Revisión' },
];

const DIAGRAM_D_STEPS = [
  { step: '01', label: 'Idea', role: 'Intención humana' },
  { step: '02', label: 'Exploración', role: 'Apoyo de la herramienta' },
  { step: '03', label: 'Selección', role: 'Criterio editorial' },
  { step: '04', label: 'Desarrollo', role: 'Dirección propia' },
  { step: '05', label: 'Revisión humana', role: 'Validación final' },
];

const DIAGRAM_E_STEPS = [
  { step: '01', label: 'Tarea', detail: 'Necesidad bien definida' },
  { step: '02', label: 'Asistencia tecnológica', detail: 'Apoyo en síntesis o estructura' },
  { step: '03', label: 'Comprobación', detail: 'Control antes de incorporar' },
  { step: '04', label: 'Resultado aplicable', detail: 'Mejora real del proceso' },
];

const DIAGRAM_F_STEPS = [
  'Investigación',
  'Análisis',
  'Planificación',
  'Comunicación',
  'Evaluación',
];

const DIAGRAM_G_STEPS = [
  { step: '01', label: 'Herramienta A', highlight: false },
  { step: '02', label: 'Proceso', highlight: false },
  { step: '03', label: 'Herramienta B', highlight: false },
  { step: '04', label: 'Resultado', highlight: false },
  { step: '05', label: 'Supervisión', highlight: true },
];

const EDITORIAL_PERSPECTIVE_BY_SLUG: Record<string, string> = {
  'inteligencia-artificial':
    'Una aproximación al ámbito de la inteligencia artificial que ocupa el lugar de referencia conceptual dentro de esta selección. Permite situar el tema y acercarse a una tecnología que está adquiriendo relevancia en numerosos sectores.',
  'como-ganar-dinero-con-chatgpt':
    'Una obra relacionada con las posibilidades de aplicación de ChatGPT en actividades digitales. Su presencia en esta colección conecta la comprensión de la herramienta con la exploración de oportunidades de aprovechamiento.',
  'desbloquea-tu-inspiracion-con-chatgpt':
    'Un título que se vincula con la dimensión creativa de la inteligencia artificial y su utilización como apoyo para explorar ideas y desarrollar procesos de creación.',
  'el-futuro-del-marketing-ia':
    'Una obra que relaciona la inteligencia artificial con la evolución del marketing y las transformaciones que pueden producirse en las actividades de comunicación y desarrollo comercial.',
};

const COVER_DIMENSIONS_BY_SLUG: Record<
  string,
  { width: number; height: number; aspectClass: string }
> = {
  'como-ganar-dinero-con-chatgpt': { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
  'desbloquea-tu-inspiracion-con-chatgpt': {
    width: 1800,
    height: 2200,
    aspectClass: 'aspect-[1800/2200]',
  },
  'inteligencia-artificial': { width: 400, height: 489, aspectClass: 'aspect-[400/489]' },
  'el-futuro-del-marketing-ia': { width: 400, height: 488, aspectClass: 'aspect-[400/488]' },
};

const DEFAULT_COVER_DIMENSIONS = { width: 400, height: 488, aspectClass: 'aspect-[400/488]' };

const TechnologyView: React.FC<TechnologyViewProps> = ({ category }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  return (
    <div className="pt-20 md:pt-24 bg-white text-[#1b1b1b]">
      {/* FRANJA SUPERIOR DE ORIENTACIÓN */}
      <div className="bg-white border-b border-[#174532]/12">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <Breadcrumbs
            items={[
              { label: 'Biblioteca', href: '/biblioteca/' },
              { label: category.category, href: category.path || '/tecnologia/' },
            ]}
          />
        </div>
      </div>

      {/* HERO MONOGRÁFICO DE TECNOLOGÍA */}
      <header className="bg-[#f7faf8] border-b border-[#174532]/15 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-[#174532]">
              Ruta editorial · {category.category}
            </span>
          </div>

          <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-10 max-w-4xl text-balance">
            Tecnología e inteligencia artificial: nuevas formas de crear y trabajar en el entorno digital
          </h1>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-8 border-t border-[#174532]/15">
            <div className="lg:col-span-7 space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75] max-w-[66ch]">
              <p>
                La inteligencia artificial está modificando la manera en que accedemos a la información, desarrollamos ideas y realizamos numerosas actividades profesionales. Lo que hace unos años parecía reservado a entornos especializados forma parte hoy de herramientas que podemos utilizar para investigar, crear contenidos, analizar información y mejorar distintos procesos de trabajo.
              </p>
              <p>
                Esta transformación abre posibilidades, pero también plantea nuevas preguntas. Comprender qué puede hacer la inteligencia artificial, dónde están sus límites y cómo utilizarla con criterio resulta cada vez más importante para quienes desarrollan actividades en Internet.
              </p>
              <p>
                En FG Perspectiva abordamos la tecnología desde una perspectiva práctica: comprender sus fundamentos, explorar sus aplicaciones y reconocer cómo puede ampliar nuestras capacidades sin sustituir el conocimiento, la creatividad ni el juicio humano.
              </p>
            </div>

            <aside
              aria-label="Enfoque editorial de la categoría Tecnología"
              className="lg:col-span-5 bg-[#174532] text-white rounded-sm p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#f4b925] mb-3">
                  Pregunta central de esta ruta
                </p>
                <p className="font-serif text-[18px] md:text-[19.5px] font-bold leading-snug text-white">
                  ¿Cómo podemos comprender y aprovechar la inteligencia artificial para transformar nuestra forma de trabajar, crear y desarrollar proyectos digitales?
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/15">
                <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#dae7df] mb-2.5">
                  Territorio temático
                </p>
                <p className="text-body-sm text-white/85 leading-relaxed">
                  Fundamentos de IA · ChatGPT y lenguaje natural · Creatividad y contenidos · Productividad y automatización · Marketing y criterio humano.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* CUERPO EDITORIAL */}
      <article aria-label="Desarrollo editorial de la categoría Tecnología">
        <CategoryIndex items={TECHNOLOGY_INDEX_ITEMS} maxWidthClass="max-w-6xl" />

        {/* SECCIÓN 1: CAMBIO EN LA FORMA DE TRABAJAR + DIAGRAMA A EN COLUMNA LATERAL */}
        <section id="tecnologia-trabajo" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 max-w-[68ch]">
                <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                  La inteligencia artificial está cambiando nuestra forma de trabajar
                </h2>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    La incorporación de inteligencia artificial a las actividades digitales no representa únicamente la aparición de nuevas aplicaciones. También está transformando la relación que mantenemos con la información, las herramientas y los procesos mediante los cuales desarrollamos nuestro trabajo.
                  </p>
                  <p>
                    Investigar un tema, organizar documentación, explorar alternativas, preparar contenidos o analizar determinados datos son actividades que pueden recibir apoyo de sistemas inteligentes. Algunas tareas que antes exigían procesos manuales prolongados pueden realizarse ahora mediante interacciones más directas con herramientas especializadas.
                  </p>
                  <p>
                    Sin embargo, disponer de nuevas capacidades tecnológicas no significa que todas las actividades deban automatizarse ni que cualquier resultado generado sea necesariamente correcto.
                  </p>
                  <p>
                    La verdadera oportunidad está en comprender dónde puede aportar valor la tecnología, qué tareas puede facilitar y qué decisiones deben seguir dependiendo de nuestro conocimiento y criterio.
                  </p>
                  <p>
                    Por eso, acercarnos a la inteligencia artificial exige algo más que aprender a utilizar una aplicación. Necesitamos entender el contexto en el que funciona y la manera en que sus capacidades pueden incorporarse a nuestras actividades.
                  </p>
                </div>
              </div>

              {/* DIAGRAMA A — Evolución del trabajo digital */}
              <figure className="lg:col-span-5 bg-[#f7faf8] border border-[#174532]/15 rounded-sm p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                  Diagrama A
                </p>
                <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                  Evolución del trabajo digital
                </p>

                <div
                  className="space-y-2"
                  role="group"
                  aria-label="Diagrama A: secuencia Información, Asistencia inteligente, Evaluación y Aplicación"
                >
                  {DIAGRAM_A_STEPS.map((item, idx) => (
                    <React.Fragment key={item.step}>
                      <div className="bg-white border border-[#174532]/15 rounded-sm px-4 py-3.5 flex items-baseline gap-3.5">
                        <span className="text-[12px] font-semibold tabular-nums text-[#1f513a] flex-shrink-0">
                          {item.step}
                        </span>
                        <div className="min-w-0">
                          <p className="font-serif text-[15px] font-bold text-[#174532] leading-snug">
                            {item.label}
                          </p>
                          <p className="text-[13px] text-[#1b1b1b]/75 mt-0.5 leading-snug">
                            {item.note}
                          </p>
                        </div>
                      </div>
                      {idx < DIAGRAM_A_STEPS.length - 1 && (
                        <div className="flex justify-center py-0.5 text-[#174532]" aria-hidden="true">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 2.5V13.5M8 13.5L4.5 10M8 13.5L11.5 10"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <figcaption className="mt-5 pt-4 border-t border-[#174532]/12 text-[12.5px] text-[#1b1b1b]/75 leading-relaxed">
                  La asistencia tecnológica actúa entre la información disponible y la evaluación humana previa a cualquier aplicación real.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: COMPRENDER LA IA + DIAGRAMA B (ECOSISTEMA CONCEPTUAL) */}
        <section id="tecnologia-fundamentos" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#f7faf8] border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Comprender la inteligencia artificial antes de utilizarla
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La inteligencia artificial es un campo tecnológico que engloba sistemas capaces de realizar tareas que requieren diferentes formas de procesamiento de información, reconocimiento de patrones, predicción o generación de resultados.
                </p>
                <p>
                  Dentro de este campo encontramos distintas aproximaciones y tecnologías que conviene distinguir.
                </p>
              </div>
            </div>

            <ul className="my-8 grid md:grid-cols-2 border border-[#174532]/15 bg-white divide-y md:divide-y-0 md:divide-x divide-[#174532]/12 rounded-sm overflow-hidden">
              {AI_CATEGORIES.map((item, idx) => (
                <li
                  key={item.index}
                  className={`p-6 ${idx >= 2 ? 'md:border-t md:border-[#174532]/12' : ''} ${
                    idx === 2 ? 'md:border-l-0' : ''
                  }`}
                >
                  <span
                    className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] tracking-wider block mb-2"
                    aria-hidden="true"
                  >
                    {item.index}
                  </span>
                  <p className="text-body text-[#1b1b1b]/85 leading-[1.7]">
                    <strong className="font-semibold text-[#174532]">{item.term}</strong> {item.detail}
                  </p>
                </li>
              ))}
            </ul>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                Estas categorías no representan tecnologías completamente aisladas. En muchos productos actuales encontramos varias capacidades combinadas para resolver diferentes necesidades.
              </p>
              <p>
                Comprender estas diferencias nos permite evitar una confusión habitual: pensar que todas las herramientas de inteligencia artificial funcionan de la misma manera o que todas pueden resolver cualquier problema.
              </p>
              <p>
                Cada sistema tiene capacidades, condiciones de uso y limitaciones específicas. Conocerlas es el primer paso para aprovecharlo correctamente.
              </p>
            </div>

            {/* DIAGRAMA B — Ecosistema conceptual de la inteligencia artificial */}
            <figure className="mt-10 bg-white border border-[#174532]/18 rounded-sm p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#174532]/12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
                    Diagrama B
                  </p>
                  <p className="font-serif text-[16.5px] font-bold text-[#174532] mt-0.5">
                    Ecosistema conceptual de la inteligencia artificial
                  </p>
                </div>
                <span className="text-[12.5px] font-medium text-[#174532]/80">
                  Capas relacionadas, no categorías aisladas ni equivalentes
                </span>
              </div>

              <div
                className="mt-6 space-y-4"
                role="group"
                aria-label="Diagrama B de relaciones entre aprendizaje automático, procesamiento del lenguaje, modelos generativos y sistemas de análisis"
              >
                {/* Marco contenedor: Campo general */}
                <div className="border border-[#174532]/25 bg-[#f7faf8] rounded-sm p-4 md:p-5">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="font-serif font-bold text-[15px] text-[#174532]">
                      Campo general: Inteligencia Artificial
                    </p>
                    <span className="text-[12px] text-[#1f513a] font-medium hidden sm:inline">
                      Marco tecnológico amplio
                    </span>
                  </div>

                  {/* Base metodológica transversal */}
                  <div className="bg-white border border-[#174532]/20 rounded-sm p-4 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <p className="font-serif font-bold text-[14.5px] text-[#174532]">
                        Base transversal · Aprendizaje automático
                      </p>
                      <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#1f513a]">
                        Fundamento metodológico
                      </span>
                    </div>
                    <p className="text-body-sm text-[#1b1b1b]/80 leading-relaxed">
                      Sostiene tanto el análisis predictivo como las arquitecturas modernas de lenguaje, visión y generación; no es un bloque separado del resto de aplicaciones.
                    </p>
                  </div>

                  {/* Conector estructural SVG accesible */}
                  <div className="flex justify-center py-1 text-[#174532]/65" aria-hidden="true">
                    <svg
                      width="240"
                      height="20"
                      viewBox="0 0 240 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-w-full"
                    >
                      <path
                        d="M120 0V10M40 10H200M40 10V19M120 10V19M200 10V19"
                        stroke="currentColor"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </div>

                  {/* Capacidades funcionales y convergencia generativa */}
                  <div className="grid md:grid-cols-3 gap-4 mt-1">
                    <div className="bg-white border border-[#174532]/15 rounded-sm p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a] block mb-1">
                          Dominio lingüístico
                        </span>
                        <p className="font-serif font-bold text-[14.5px] text-[#174532] mb-2">
                          Procesamiento del lenguaje natural
                        </p>
                      </div>
                      <p className="text-[13px] text-[#1b1b1b]/75 leading-relaxed pt-2.5 border-t border-[#174532]/10">
                        Interpreta y estructura texto o voz; dialoga directamente con modelos generativos en asistentes conversacionales.
                      </p>
                    </div>

                    <div className="bg-[#174532] text-white border border-[#174532] rounded-sm p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#f4b925] block mb-1">
                          Confluencia aplicada
                        </span>
                        <p className="font-serif font-bold text-[14.5px] mb-2">
                          Modelos generativos
                        </p>
                      </div>
                      <p className="text-[13px] text-white/90 leading-relaxed pt-2.5 border-t border-white/15">
                        Combinan aprendizaje automático con lenguaje o visión para producir texto, imagen, audio o código a partir de contexto.
                      </p>
                    </div>

                    <div className="bg-white border border-[#174532]/15 rounded-sm p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1f513a] block mb-1">
                          Dominio perceptivo
                        </span>
                        <p className="font-serif font-bold text-[14.5px] text-[#174532] mb-2">
                          Sistemas de reconocimiento y análisis
                        </p>
                      </div>
                      <p className="text-[13px] text-[#1b1b1b]/75 leading-relaxed pt-2.5 border-t border-[#174532]/10">
                        Extraen sentido de imágenes, audio o documentos; con frecuencia alimentan de contexto a los modelos generativos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <figcaption className="mt-4 text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                Un mismo producto digital puede integrar varias de estas capas simultáneamente; por ejemplo, leer un documento mediante análisis, interpretar la petición por lenguaje natural y elaborar una síntesis mediante un modelo generativo entrenado con aprendizaje automático.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SECCIÓN 3: DE LA HERRAMIENTA AISLADA AL ASISTENTE DE TRABAJO */}
        <section id="tecnologia-asistente" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 max-w-[68ch]">
                <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                  De la herramienta aislada al asistente de trabajo
                </h2>

                <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                  <p>
                    Durante mucho tiempo, el trabajo digital estuvo organizado alrededor de aplicaciones diseñadas para resolver tareas concretas. Utilizábamos una herramienta para escribir, otra para organizar información, otra para analizar datos y otras para desarrollar diferentes actividades.
                  </p>
                  <p>
                    La incorporación de asistentes de inteligencia artificial introduce una forma distinta de interactuar con algunas de esas tareas. En lugar de navegar exclusivamente por funciones y menús, podemos formular una necesidad mediante lenguaje natural, aportar contexto y solicitar ayuda para desarrollar una actividad.
                  </p>
                  <p>
                    Estos asistentes pueden apoyar procesos de investigación, planificación, organización, análisis y creación. También pueden ayudar a explorar diferentes alternativas antes de tomar una decisión.
                  </p>
                  <p>
                    La diferencia importante no está únicamente en la comodidad de la interacción. Está en la posibilidad de utilizar una misma interfaz para abordar actividades relacionadas y desarrollar procesos de trabajo progresivos.
                  </p>
                  <p>
                    Aun así, un asistente no conoce automáticamente todas nuestras necesidades ni comprende siempre las particularidades de cada proyecto. La información que aportamos, los objetivos que definimos y la revisión de los resultados siguen siendo fundamentales.
                  </p>
                </div>
              </div>

              <aside
                aria-label="Comparativa conceptual entre aplicaciones aisladas y asistente integrado"
                className="lg:col-span-5 border border-[#174532]/15 rounded-sm overflow-hidden bg-[#f7faf8]"
              >
                <div className="p-6 border-b border-[#174532]/12 bg-white">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-2">
                    Esquema tradicional
                  </p>
                  <p className="font-serif font-bold text-[15.5px] text-[#174532] mb-2">
                    Aplicaciones fragmentadas por tarea
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                    Redacción, organización y análisis en entornos separados, operando sobre menús fijos sin continuidad entre pasos.
                  </p>
                </div>
                <div className="p-6 bg-[#f7faf8]">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-2">
                    Interacción asistida
                  </p>
                  <p className="font-serif font-bold text-[15.5px] text-[#174532] mb-2">
                    Proceso progresivo en lenguaje natural
                  </p>
                  <p className="text-body-sm text-[#1b1b1b]/80 leading-relaxed">
                    Una misma interfaz recibe objetivos y contexto para investigar, planificar y explorar alternativas bajo revisión humana constante.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: CHATGPT + DIAGRAMA C */}
        <section id="tecnologia-chatgpt" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#f7faf8] border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                ChatGPT: nuevas formas de interactuar con la información
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  ChatGPT representa una de las formas más conocidas de interacción con modelos de inteligencia artificial generativa. Su funcionamiento conversacional permite plantear preguntas, proporcionar instrucciones, aportar documentos y desarrollar tareas mediante intercambios sucesivos.
                </p>
                <p>
                  Para utilizarlo con criterio, conviene comprender varios elementos.
                </p>
              </div>
            </div>

            {/* DIAGRAMA C — Interacción con ChatGPT */}
            <figure className="my-10 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama C
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Interacción con ChatGPT
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama C: ciclo Objetivo, Instrucciones, Contexto, Resultado y Revisión"
              >
                {DIAGRAM_C_STEPS.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div
                      className={`flex-1 min-w-0 rounded-sm px-4 py-3.5 flex flex-col justify-center ${
                        idx === DIAGRAM_C_STEPS.length - 1
                          ? 'bg-[#174532] text-white border border-[#174532]'
                          : 'bg-[#f7faf8] border border-[#174532]/18'
                      }`}
                    >
                      <span
                        className={`text-[10.5px] font-semibold tabular-nums tracking-widest uppercase mb-1 ${
                          idx === DIAGRAM_C_STEPS.length - 1 ? 'text-[#f4b925]' : 'text-[#1f513a]'
                        }`}
                      >
                        Paso {item.step}
                      </span>
                      <span
                        className={`font-serif text-[14.5px] font-bold leading-snug ${
                          idx === DIAGRAM_C_STEPS.length - 1 ? 'text-white' : 'text-[#174532]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {idx < DIAGRAM_C_STEPS.length - 1 && (
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

              <figcaption className="mt-4 pt-3.5 border-t border-[#174532]/10 text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                Secuencia progresiva de trabajo conversacional: la revisión permite corregir, ampliar y reorientar nuevas indicaciones sin depender de una sola consulta inicial.
              </figcaption>
            </figure>

            {/* Cinco elementos clave */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 border-t border-[#174532]/15 pt-8">
              {CHATGPT_ELEMENTS.map((item) => (
                <div key={item.index} className="border-b border-[#174532]/12 pb-6">
                  <span
                    className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] tracking-wider block mb-1.5"
                    aria-hidden="true"
                  >
                    {item.index}
                  </span>
                  <h3 className="text-h3 font-bold font-serif text-[#174532] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="max-w-[68ch] mt-8">
              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                Aprender a interactuar con ChatGPT implica, por tanto, desarrollar una forma más clara de comunicar objetivos, proporcionar información y evaluar resultados.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: CREATIVIDAD + DIAGRAMA D */}
        <section id="tecnologia-creatividad" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Inteligencia artificial y creatividad: ampliar las posibilidades de creación
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La creatividad no consiste únicamente en producir ideas. También implica seleccionar, relacionar, desarrollar y transformar esas ideas hasta convertirlas en propuestas con sentido.
                </p>
                <p>
                  La inteligencia artificial puede intervenir en distintas fases de ese proceso. Puede ayudarnos a explorar enfoques, generar alternativas, reorganizar conceptos o encontrar nuevas formas de abordar un problema.
                </p>
                <p>
                  En determinadas situaciones, esta capacidad resulta útil para superar un bloqueo inicial o ampliar el conjunto de posibilidades que estamos considerando.
                </p>
                <p>Podemos utilizarla para:</p>
              </div>

              <ul className="my-7 grid sm:grid-cols-2 gap-3">
                {CREATIVITY_USES.map((item, idx) => (
                  <li
                    key={item}
                    className="bg-[#f7faf8] border border-[#174532]/15 rounded-sm px-4 py-3.5 flex items-baseline gap-3 text-body-sm md:text-body text-[#1b1b1b]/85 leading-relaxed"
                  >
                    <span
                      className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] flex-shrink-0"
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Sin embargo, producir muchas alternativas no equivale a crear algo valioso.
                </p>
                <p>
                  Una idea necesita contexto, intención, conocimiento y una dirección. La selección y el desarrollo final dependen de nuestra capacidad para reconocer qué tiene sentido y qué merece convertirse en una propuesta concreta.
                </p>
                <p className="font-serif text-[18.5px] md:text-[20px] text-[#174532] leading-relaxed pt-4 border-t border-[#174532]/15">
                  La inteligencia artificial puede ampliar el espacio de exploración. La identidad y la coherencia de lo que creamos siguen dependiendo de las decisiones humanas.
                </p>
              </div>
            </div>

            {/* DIAGRAMA D — Proceso creativo asistido */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama D
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Proceso creativo asistido
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama D: secuencia Idea, Exploración, Selección, Desarrollo y Revisión humana"
              >
                {DIAGRAM_D_STEPS.map((item, idx) => {
                  const isToolAssisted = item.label === 'Exploración';
                  const isHumanValidation = item.label === 'Revisión humana';
                  return (
                    <React.Fragment key={item.step}>
                      <div
                        className={`flex-1 min-w-0 rounded-sm px-4 py-3.5 flex flex-col justify-between ${
                          isHumanValidation
                            ? 'bg-[#174532] text-white border border-[#174532]'
                            : isToolAssisted
                              ? 'bg-[#dae7df]/35 border border-[#174532]/30'
                              : 'bg-[#f7faf8] border border-[#174532]/15'
                        }`}
                      >
                        <span
                          className={`text-[10.5px] font-semibold uppercase tracking-wider mb-1 ${
                            isHumanValidation ? 'text-[#f4b925]' : 'text-[#1f513a]'
                          }`}
                        >
                          {item.role}
                        </span>
                        <span
                          className={`font-serif text-[14.5px] font-bold leading-snug ${
                            isHumanValidation ? 'text-white' : 'text-[#174532]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      {idx < DIAGRAM_D_STEPS.length - 1 && (
                        <div
                          className="flex items-center justify-center text-[#174532] font-semibold text-sm select-none px-0.5 py-0.5 lg:py-0"
                          aria-hidden="true"
                        >
                          <span className="hidden lg:inline">→</span>
                          <span className="inline lg:hidden">↓</span>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/75 leading-relaxed max-w-[68ch]">
                La herramienta amplía las alternativas en la fase exploratoria, mientras que la intención inicial, la selección, el desarrollo y la revisión permanecen bajo dirección humana.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SECCIÓN 6: CREACIÓN DE CONTENIDOS */}
        <section id="tecnologia-contenidos" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#f7faf8] border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Creación de contenidos con inteligencia artificial
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La producción de contenidos es una de las áreas donde las herramientas generativas pueden ofrecer apoyo en distintas etapas del trabajo.
                </p>
                <p>
                  Su aplicación puede comenzar durante la investigación y la organización de información, continuar con la planificación de contenidos y extenderse al desarrollo de borradores, la revisión y la adaptación a diferentes formatos.
                </p>
                <p>
                  Utilizada de forma adecuada, la inteligencia artificial puede facilitar tareas que requieren organizar grandes cantidades de información o explorar distintas maneras de presentar una idea.
                </p>
                <p>
                  No obstante, debemos distinguir entre facilitar la producción y garantizar la calidad editorial.
                </p>
                <p>
                  Un texto puede estar correctamente estructurado y, aun así, carecer de profundidad, precisión o una perspectiva propia. La generación automática no sustituye la investigación, la comprobación de fuentes ni el conocimiento necesario para desarrollar un contenido útil.
                </p>
                <p>
                  La intervención humana resulta esencial para evaluar la información, aportar contexto, corregir errores, establecer prioridades y asegurar que el resultado responde a una necesidad real.
                </p>
                <p>
                  El objetivo no debería ser publicar más por el simple hecho de producir más rápido. Debería ser aprovechar las herramientas disponibles para desarrollar contenidos mejor fundamentados, coherentes y relevantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 7: PRODUCTIVIDAD DIGITAL + DIAGRAMA E */}
        <section id="tecnologia-productividad" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Productividad digital: organizar el trabajo con inteligencia artificial
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La productividad no depende exclusivamente de realizar más tareas en menos tiempo. También consiste en organizar mejor los recursos, reducir fricciones y dedicar atención a las actividades que realmente necesitan nuestra intervención.
                </p>
                <p>
                  En este contexto, la inteligencia artificial puede ayudar en diferentes procesos cotidianos.
                </p>
                <p>
                  Puede facilitar la síntesis de documentación, la clasificación de información, la preparación de borradores, la organización de tareas y el análisis preliminar de determinados datos.
                </p>
                <p>
                  También puede servir como apoyo para estructurar proyectos, preparar documentos o explorar alternativas antes de ejecutar una actividad.
                </p>
                <p>
                  Sin embargo, incorporar una herramienta no mejora automáticamente un proceso. Si una tarea está mal definida, automatizarla puede trasladar el problema a otra parte del trabajo.
                </p>
                <p>
                  Por eso, antes de incorporar inteligencia artificial conviene identificar qué necesidad queremos resolver, qué parte del proceso puede beneficiarse de su utilización y cómo comprobaremos que el resultado realmente mejora la actividad.
                </p>
                <p>
                  La productividad surge de una combinación de herramientas adecuadas, procesos bien definidos y decisiones conscientes.
                </p>
              </div>
            </div>

            {/* DIAGRAMA E — Productividad */}
            <figure className="mt-10 bg-[#f7faf8] border border-[#174532]/15 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama E
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Productividad: flujo de comprobación y resultado aplicable
              </p>

              <div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
                role="group"
                aria-label="Diagrama E: secuencia Tarea, Asistencia tecnológica, Comprobación y Resultado aplicable"
              >
                {DIAGRAM_E_STEPS.map((item, idx) => (
                  <div
                    key={item.step}
                    className={`rounded-sm p-4 flex flex-col justify-between ${
                      idx === 2
                        ? 'bg-[#174532] text-white border border-[#174532]'
                        : 'bg-white border border-[#174532]/18'
                    }`}
                  >
                    <div>
                      <span
                        className={`text-[11px] font-semibold tabular-nums uppercase tracking-wider block mb-1.5 ${
                          idx === 2 ? 'text-[#f4b925]' : 'text-[#1f513a]'
                        }`}
                      >
                        Fase {item.step}
                      </span>
                      <p
                        className={`font-serif font-bold text-[15px] mb-2 ${
                          idx === 2 ? 'text-white' : 'text-[#174532]'
                        }`}
                      >
                        {item.label}
                      </p>
                    </div>
                    <p
                      className={`text-[13px] pt-2.5 border-t ${
                        idx === 2
                          ? 'text-white/90 border-white/15'
                          : 'text-[#1b1b1b]/75 border-[#174532]/10'
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <figcaption className="mt-4 pt-3.5 border-t border-[#174532]/12 text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                La fase de comprobación evita trasladar errores de una tarea mal definida hacia el resultado final del flujo de trabajo.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SECCIÓN 8: NUEVAS OPORTUNIDADES DIGITALES */}
        <section id="tecnologia-oportunidades" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#f7faf8] border-b border-[#174532]/12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Inteligencia artificial y nuevas oportunidades digitales
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La inteligencia artificial está ampliando las posibilidades de desarrollar actividades y propuestas dentro del entorno digital.
                </p>
                <p>
                  Su utilización puede facilitar la investigación, la creación de recursos, la preparación de materiales, el desarrollo de servicios y la mejora de determinados procesos profesionales.
                </p>
                <p>
                  También permite explorar formas diferentes de abordar actividades que antes requerían más tiempo o recursos especializados.
                </p>
                <p>
                  Para emprendedores, creadores y profesionales digitales, estas capacidades pueden representar una oportunidad para ampliar sus posibilidades de trabajo y desarrollar nuevas propuestas.
                </p>
                <p className="py-5 my-6 border-y border-[#174532]/20 font-serif text-[18.5px] md:text-[20px] font-bold text-[#174532] leading-relaxed">
                  Pero debemos mantener una distinción fundamental: disponer de una herramienta no equivale a disponer de un negocio.
                </p>
                <p>
                  Una oportunidad digital necesita identificar una necesidad, comprender a quién queremos dirigirnos, desarrollar una propuesta de valor y comprobar si existe una demanda real.
                </p>
                <p>
                  La inteligencia artificial puede facilitar determinadas tareas y ampliar nuestras capacidades, pero no sustituye la comprensión del mercado, la calidad de una propuesta ni el trabajo necesario para desarrollarla.
                </p>
                <p>
                  El verdadero aprovechamiento de estas tecnologías comienza cuando sabemos relacionar sus capacidades con necesidades concretas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 9: TRANSFORMACIÓN DEL MARKETING + DIAGRAMA F */}
        <section id="tecnologia-marketing" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                La inteligencia artificial está transformando el marketing
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  El marketing es otra de las disciplinas en las que la inteligencia artificial está introduciendo nuevas posibilidades de trabajo.
                </p>
                <p>
                  Las herramientas actuales pueden apoyar la investigación, el análisis de información, la planificación de actividades y la adaptación de mensajes a diferentes contextos.
                </p>
                <p>Entre sus posibles aplicaciones encontramos:</p>
              </div>
            </div>

            <ul className="my-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MARKETING_APPLICATIONS.map((item) => (
                <li
                  key={item.index}
                  className="bg-[#f7faf8] border border-[#174532]/15 rounded-sm p-5"
                >
                  <span
                    className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] tracking-wider block mb-2"
                    aria-hidden="true"
                  >
                    {item.index}
                  </span>
                  <p className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7]">
                    <strong className="font-semibold text-[#174532] block mb-1">{item.term}</strong>
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                Estas aplicaciones pueden mejorar la capacidad de análisis y facilitar determinadas tareas, pero no eliminan la necesidad de comprender el contexto comercial.
              </p>
              <p>
                Una estrategia de marketing requiere objetivos, conocimiento del público, una propuesta relevante y decisiones fundamentadas.
              </p>
              <p>
                La inteligencia artificial puede convertirse en un recurso de apoyo para desarrollar esas actividades, pero delegar completamente el criterio estratégico en una herramienta puede conducir a mensajes genéricos, decisiones poco fundamentadas y resultados desconectados de las necesidades reales.
              </p>
            </div>

            {/* DIAGRAMA F — Aplicaciones de IA en marketing */}
            <figure className="mt-10 pt-8 border-t border-[#174532]/15">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama F
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Aplicaciones de IA en marketing
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama F: aplicaciones en Investigación, Análisis, Planificación, Comunicación y Evaluación"
              >
                {DIAGRAM_F_STEPS.map((label, idx) => (
                  <React.Fragment key={label}>
                    <div className="flex-1 min-w-0 bg-[#f7faf8] border border-[#174532]/18 rounded-sm px-4 py-3.5 flex flex-col justify-center">
                      <span className="text-[10.5px] font-semibold tabular-nums text-[#1f513a] tracking-widest uppercase mb-1">
                        Ámbito {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-[14.5px] font-bold text-[#174532] leading-snug">
                        {label}
                      </span>
                    </div>
                    {idx < DIAGRAM_F_STEPS.length - 1 && (
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

              <figcaption className="mt-3 text-body-sm text-[#1b1b1b]/75 leading-relaxed max-w-[68ch]">
                Cada ámbito técnico queda supeditado a los objetivos del proyecto, el conocimiento real del público y las decisiones estratégicas de marketing.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SECCIÓN 10: AUTOMATIZACIÓN E INTEGRACIÓN + DIAGRAMA G */}
        <section id="tecnologia-automatizacion" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#f7faf8] border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Automatización e integración: conectar herramientas y procesos
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Una de las posibilidades más interesantes de la evolución tecnológica está en conectar diferentes herramientas para organizar procesos de trabajo.
                </p>
                <p>Conviene distinguir tres niveles de utilización.</p>
              </div>
            </div>

            <div className="my-8 grid md:grid-cols-3 gap-5">
              {AUTOMATION_LEVELS.map((level) => (
                <div
                  key={level.title}
                  className="bg-white border border-[#174532]/18 rounded-sm p-6 flex flex-col justify-between"
                >
                  <div>
                    <span
                      className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] block mb-2"
                      aria-hidden="true"
                    >
                      {level.index}
                    </span>
                    <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                      {level.title}
                    </h3>
                  </div>
                  <p className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-relaxed pt-3 border-t border-[#174532]/10">
                    {level.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[68ch] space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                La inteligencia artificial puede incorporarse a estos niveles para facilitar tareas de interpretación, generación, clasificación o asistencia.
              </p>
              <p>
                Sin embargo, una automatización no debe considerarse correcta únicamente porque funcione técnicamente. También necesitamos comprobar la calidad de los resultados, la seguridad de la información y las consecuencias de las acciones que ejecuta.
              </p>
              <p>
                La supervisión humana continúa siendo necesaria, especialmente cuando los procesos afectan a decisiones comerciales, datos personales o comunicaciones dirigidas a otras personas.
              </p>
            </div>

            {/* DIAGRAMA G — Integración y automatización */}
            <figure className="mt-10 bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a] mb-1">
                Diagrama G
              </p>
              <p className="font-serif text-[16px] font-bold text-[#174532] mb-5">
                Integración y automatización con supervisión humana
              </p>

              <div
                className="flex flex-col lg:flex-row lg:items-stretch gap-2.5 lg:gap-2"
                role="group"
                aria-label="Diagrama G: flujo Herramienta A, Proceso, Herramienta B, Resultado y Supervisión"
              >
                {DIAGRAM_G_STEPS.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    <div
                      className={`flex-1 min-w-0 rounded-sm px-4 py-3.5 flex flex-col justify-center ${
                        item.highlight
                          ? 'bg-[#174532] text-white border border-[#174532]'
                          : 'bg-[#f7faf8] border border-[#174532]/18'
                      }`}
                    >
                      <span
                        className={`text-[10.5px] font-semibold tabular-nums uppercase tracking-wider mb-1 ${
                          item.highlight ? 'text-[#f4b925]' : 'text-[#1f513a]'
                        }`}
                      >
                        {item.highlight ? 'Control obligatorio' : `Nodo ${item.step}`}
                      </span>
                      <span
                        className={`font-serif text-[14.5px] font-bold leading-snug ${
                          item.highlight ? 'text-white' : 'text-[#174532]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {idx < DIAGRAM_G_STEPS.length - 1 && (
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

              <figcaption className="mt-4 pt-3.5 border-t border-[#174532]/10 text-body-sm text-[#1b1b1b]/75 leading-relaxed">
                Un flujo técnicamente conectado requiere verificación explícita de calidad, seguridad de los datos y consecuencias antes de considerarse válido.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SECCIÓN 11: LÍMITES DE LA INTELIGENCIA ARTIFICIAL */}
        <section id="tecnologia-limites" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-white border-b border-[#174532]/12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Los límites de la inteligencia artificial: criterio, control y responsabilidad
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  Comprender las posibilidades de la inteligencia artificial también exige reconocer sus limitaciones.
                </p>
                <p>
                  Los sistemas generativos pueden producir respuestas convincentes que contienen errores, interpretaciones incorrectas o información que no está suficientemente fundamentada.
                </p>
                <p>
                  Además, los resultados pueden depender de los datos utilizados, del contexto proporcionado y de las características particulares de cada herramienta.
                </p>
                <p>
                  Existen cuestiones que debemos considerar antes de incorporar estas tecnologías a nuestro trabajo:
                </p>
              </div>
            </div>

            <div className="my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {AI_LIMITATIONS.map((item) => (
                <div
                  key={item.index}
                  className="bg-[#f7faf8] border border-[#174532]/15 rounded-sm p-6"
                >
                  <span
                    className="text-[11.5px] font-semibold tabular-nums text-[#1f513a] tracking-wider block mb-2"
                    aria-hidden="true"
                  >
                    {item.index}
                  </span>
                  <h3 className="text-h3 font-bold font-serif text-[#174532] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[68ch]">
              <p className="text-body text-[#1b1b1b]/85 leading-[1.75]">
                La inteligencia artificial es una tecnología con capacidades importantes, pero su utilización exige criterio, verificación y responsabilidad.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 12: CUATRO PERSPECTIVAS + CATÁLOGO OFICIAL INTEGRADO */}
        <section id="tecnologia-libros" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#f7faf8] border-b border-[#174532]/15">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-[68ch] mb-10">
              <h2 className="text-h2-lg font-bold font-serif text-[#174532] mb-6 leading-snug text-balance">
                Cuatro perspectivas para comprender la inteligencia artificial aplicada
              </h2>

              <div className="space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
                <p>
                  La tecnología no puede entenderse desde una única perspectiva. Necesitamos conocer sus fundamentos, explorar sus aplicaciones y reconocer cómo puede intervenir en diferentes actividades digitales.
                </p>
                <p>
                  Nuestra colección reúne cuatro libros que se relacionan con distintas dimensiones de este territorio.
                </p>
              </div>
            </div>

            {/* Cuatro obras oficiales recuperadas directamente desde category.books */}
            <div className="grid md:grid-cols-2 gap-6">
              {category.books.map((book) => {
                const bookUrl = book.path || `/${book.slug}/`;
                const hasPurchaseOptions = Boolean(
                  book.purchaseOptions && book.purchaseOptions.length > 0
                );
                const dims =
                  (book.slug && COVER_DIMENSIONS_BY_SLUG[book.slug]) || DEFAULT_COVER_DIMENSIONS;
                const editorialText =
                  (book.slug && EDITORIAL_PERSPECTIVE_BY_SLUG[book.slug]) || book.description;

                return (
                  <div
                    key={book.id || book.slug}
                    className="bg-white border border-[#174532]/15 rounded-sm p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start h-full"
                  >
                    <div className="flex-shrink-0">
                      <Link
                        href={bookUrl}
                        className="inline-block bg-[#f7faf8] p-2.5 border border-[#174532]/15 rounded-[2px] hover:border-[#174532]/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
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
                    </div>

                    <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                      <div>
                        <h3 className="text-h3 font-bold font-serif text-[#174532] mb-3 leading-snug">
                          {book.title}
                        </h3>

                        <p className="text-body-sm md:text-body text-[#1b1b1b]/85 leading-[1.7] mb-6">
                          {editorialText}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                        <Link
                          href={bookUrl}
                          className="inline-flex items-center justify-center py-2.5 px-5 bg-[#174532] text-white text-[13.5px] font-semibold rounded-sm hover:bg-[#1f513a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2"
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
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="max-w-[68ch] mt-10 space-y-5 text-body text-[#1b1b1b]/85 leading-[1.75]">
              <p>
                Estos cuatro títulos permiten aproximarnos a la tecnología desde perspectivas complementarias: comprensión, aplicación, creatividad y transformación del marketing.
              </p>
              <p>
                No se trata de considerar la inteligencia artificial como una solución universal, sino de desarrollar una visión más amplia sobre sus capacidades y su posible integración en nuestro trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 13: CIERRE EDITORIAL */}
        <section id="tecnologia-cierre" tabIndex={-1} className="scroll-mt-20 outline-none py-14 md:py-20 bg-[#174532] text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-[68ch]">
              <h2 className="text-h2-lg font-bold font-serif text-white mb-6 leading-snug text-balance">
                La tecnología amplía nuestras posibilidades, el criterio define cómo utilizarlas
              </h2>

              <div className="space-y-5 text-body text-white/90 leading-[1.75]">
                <p>
                  La inteligencia artificial puede facilitar tareas, ampliar nuestras capacidades y transformar numerosos procesos de trabajo. Sin embargo, disponer de herramientas más avanzadas no garantiza que sepamos utilizarlas correctamente.
                </p>
                <p>
                  El valor aparece cuando comprendemos qué problema queremos resolver, elegimos los recursos adecuados y evaluamos los resultados con criterio.
                </p>
                <p>
                  La tecnología puede ayudarnos a investigar, crear, organizar y desarrollar nuevas posibilidades. Pero el conocimiento, la perspectiva y la responsabilidad siguen siendo fundamentales para convertir esas capacidades en aplicaciones útiles.
                </p>
                <p>
                  En FG Perspectiva entendemos la tecnología como un campo de conocimiento que debemos explorar con curiosidad, pero también con sentido crítico.
                </p>
                <p>
                  Porque el verdadero avance no consiste simplemente en utilizar más herramientas, sino en comprender mejor lo que podemos hacer con ellas.
                </p>
              </div>

              <div className="mt-8 py-6 border-y border-white/20">
                <p className="font-serif text-[18.5px] md:text-[20px] font-bold text-white leading-relaxed">
                  <strong>
                    Comprender la tecnología es el primer paso. Utilizarla con criterio es lo que marca la diferencia.
                  </strong>
                </p>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href="/biblioteca/"
                  className="inline-flex items-center text-[14px] font-semibold text-white hover:text-[#dae7df] underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xs"
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

export default TechnologyView;
