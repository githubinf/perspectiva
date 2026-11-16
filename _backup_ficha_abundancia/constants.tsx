
import { BookCategory, BookItem, NavItem } from './types.ts';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Biblioteca', href: '/biblioteca/' },
  { label: 'Sistemas', href: '/sistemas-digitales/' },
  { label: 'Sobre la editorial', href: '/sobre-fg-perspectiva/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const FEATURED_BOOKS: BookCategory[] = [
  {
    id: 'star',
    slug: 'origen',
    path: '/origen/',
    title: '🌟 PRODUCTO ESTRELLA (Origen de toda la colección)',
    category: 'Origen',
    intro: 'La base de todo. Desde este método nacen el resto de libros de la biblioteca FG Perspectiva.',
    coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/producto-estrella-plr.png',
    books: [
      {
        id: 'plr',
        slug: 'experto-en-plr-premium',
        path: '/experto-en-plr-premium/',
        categorySlug: 'origen',
        title: 'Experto en PLR Premium',
        subtitle: 'El Sistema Paso a Paso para Crear Infoproductos Rentables que venden. Con Herramientas Digitales Actuales',
        metaTitle: 'Experto en PLR Premium: crea y vende productos digitales',
        metaDescription: 'Aprende a transformar productos PLR con inteligencia artificial, crear infoproductos en distintos formatos y desarrollar un negocio digital con plataformas y estrategias de marketing.',
        description: 'Aprende a transformar productos PLR con inteligencia artificial, crear infoproductos en distintos formatos y desarrollar un negocio digital con plataformas y estrategias de marketing.',
        url: 'https://www.amazon.com/dp/B0GWZQPNT2',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/25-experto-en-plr-producto-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://www.amazon.com/dp/B0GWZQPNT2', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar libro en Amazon',
            isPrimary: true,
            rel: 'nofollow noopener noreferrer'
          },
          { 
            platform: 'ClickBank', 
            url: 'https://expertoplrpremium.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Página comercial ClickBank',
            rel: 'noopener noreferrer'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/QhoMJ', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Alternativa de compra en Payhip',
            rel: 'noopener noreferrer'
          }
        ],
        bookFormat: null,
        editorialSections: [
          {
            title: 'Convierte los productos PLR en oportunidades para crear tu propio negocio digital',
            paragraphs: [
              'Crear un producto digital desde cero requiere tiempo, planificación y conocimientos. Sin embargo, existe otra posibilidad: partir de contenidos que ya han sido creados y transformarlos en productos con una identidad, una estructura y una propuesta de valor propias.',
              'Ese es el punto de partida de los productos PLR (Private Label Rights), una modalidad de licencia que permite utilizar y modificar determinados contenidos digitales de acuerdo con las condiciones establecidas por sus titulares.',
              'Pero disponer de un producto PLR no significa tener automáticamente un negocio. El verdadero trabajo consiste en evaluar el material original, mejorar su contenido, adaptarlo a un público concreto y encontrar la forma adecuada de presentarlo y comercializarlo.',
              'Experto en PLR Premium aborda ese proceso de principio a fin. A través de sus doce capítulos, el libro desarrolla una metodología para transformar materiales PLR con ayuda de la inteligencia artificial, crear infoproductos en diferentes formatos y construir una estrategia de comercialización que combine plataformas digitales, marketing y herramientas de automatización.',
              'No se limita a explicar cómo conseguir contenidos para revender. Su planteamiento se centra en cómo trabajar con ellos, aportar valor y convertirlos en productos digitales mejor estructurados y diferenciados.'
            ]
          },
          {
            title: 'Qué son los productos PLR y cómo utilizarlos para crear infoproductos',
            paragraphs: [
              'PLR significa Private Label Rights, expresión que suele traducirse como derechos de etiqueta privada. Se refiere a licencias que permiten utilizar y, según sus condiciones concretas, modificar, personalizar y comercializar determinados productos digitales.',
              'Entre los materiales que pueden encontrarse bajo este tipo de licencias están los ebooks, manuales, guías, cursos, plantillas y otros recursos digitales.',
              'El atractivo de este modelo es que permite partir de una base existente en lugar de desarrollar cada elemento desde cero. Sin embargo, utilizar un contenido sin revisarlo ni adaptarlo puede conducir a ofrecer un producto genérico, poco diferenciado y difícil de posicionar.',
              'Por eso, una parte esencial del trabajo con PLR consiste en comprender qué contiene el material original, identificar sus limitaciones y decidir cómo mejorarlo.',
              'En este libro se aborda el ecosistema PLR desde una perspectiva actualizada: su evolución, los cambios en los formatos digitales, la influencia de la inteligencia artificial y las posibilidades de utilizar estos materiales en distintos modelos de negocio.',
              'También se plantea la importancia de elegir un modelo de comercialización coherente con los recursos disponibles, el tiempo de trabajo y los objetivos del proyecto.'
            ]
          },
          {
            title: 'Cómo transformar un producto PLR con inteligencia artificial',
            paragraphs: [
              'Uno de los ejes centrales del libro es el uso de inteligencia artificial para mejorar y transformar contenidos PLR.',
              'La propuesta no consiste simplemente en pedirle a una herramienta que reescriba un texto. El proceso se organiza en cuatro fases que permiten trabajar sobre el material original de forma estructurada.'
            ],
            subsections: [
              {
                title: '1. Diagnóstico inteligente del contenido original',
                paragraphs: [
                  'Antes de modificar un producto, necesitamos comprender qué tenemos entre manos.',
                  'Esta primera fase se centra en analizar el PLR original mediante herramientas de IA para identificar su estructura, los temas que desarrolla, sus puntos débiles y las oportunidades de mejora.',
                  'El objetivo es disponer de un diagnóstico que permita tomar decisiones antes de comenzar la transformación.'
                ]
              },
              {
                title: '2. Reestructuración inteligente',
                paragraphs: [
                  'Una vez evaluado el material, llega el momento de revisar su arquitectura.',
                  'Esta fase aborda la reorganización de los contenidos, la coherencia entre secciones y la forma de presentar la información. No se trata de cambiar palabras por sinónimos, sino de trabajar sobre la estructura para conseguir un producto más claro y mejor organizado.'
                ]
              },
              {
                title: '3. Contextualización con datos actuales',
                paragraphs: [
                  'Un contenido puede haber sido válido cuando se creó y necesitar modificaciones para responder a las circunstancias actuales.',
                  'El libro desarrolla la incorporación de información contextualizada, con especial atención a la actualización de contenidos para 2026.',
                  'Esta fase busca evitar que el resultado sea simplemente una versión maquillada del material original.'
                ]
              },
              {
                title: '4. Personalización del tono y el estilo',
                paragraphs: [
                  'La última fase se ocupa de dar identidad al producto.',
                  'Se trabaja sobre el tono, la forma de comunicar y la coherencia del contenido para que el resultado tenga una personalidad editorial reconocible.',
                  'El proceso también contempla el control de calidad, la revisión en diferentes capas, los criterios éticos y la transparencia respecto al uso de inteligencia artificial.',
                  'Además, se desarrollan flujos de trabajo diferenciados para ebooks educativos e instructivos, guías, manuales, contenidos motivacionales y materiales relacionados con negocios y marketing.'
                ]
              }
            ]
          },
          {
            title: 'De un ebook a cinco formatos de contenido digital',
            paragraphs: [
              'Un contenido no tiene por qué quedarse limitado a un documento PDF. Una de las posibilidades de trabajar con productos digitales es aprovechar una misma base de conocimiento para desarrollar diferentes formatos.',
              'El libro dedica un capítulo específico a esta estrategia y desarrolla cinco modalidades de producción:'
            ],
            subsections: [
              {
                title: 'Texto: ebooks y documentos PDF',
                paragraphs: [
                  'El formato escrito constituye una de las bases del trabajo con infoproductos. Se aborda la producción de ebooks y documentos digitales, desde la organización del contenido hasta su preparación para la distribución.'
                ]
              },
              {
                title: 'Audio: audiolibros y podcasts',
                paragraphs: [
                  'Los contenidos escritos también pueden adaptarse a formatos sonoros. El libro contempla la producción de audiolibros y podcasts, así como el uso de herramientas de voz mediante inteligencia artificial.'
                ]
              },
              {
                title: 'Vídeo: explicaciones y demostraciones',
                paragraphs: [
                  'El formato audiovisual permite presentar conceptos, desarrollar explicaciones y mostrar procedimientos. Se incluyen los vídeos explicativos y las demostraciones como alternativas para ampliar la presentación de un producto digital.'
                ]
              },
              {
                title: 'Interactivo: presentaciones y cuestionarios',
                paragraphs: [
                  'La información también puede organizarse mediante recursos que impliquen una participación más activa del usuario. En este apartado se trabajan las presentaciones interactivas y los cuestionarios.'
                ]
              },
              {
                title: 'Visual: infografías y resúmenes',
                paragraphs: [
                  'Los contenidos pueden convertirse en materiales visuales que faciliten la comprensión y la consulta de información. El libro contempla infografías, resúmenes y recursos gráficos.',
                  'La propuesta se completa con una matriz de decisión para seleccionar formatos, procesos de producción, herramientas, controles de coherencia y calidad y una estrategia de conversión de un contenido base en diferentes versiones.',
                  'También se estudian herramientas para crear presentaciones, vídeos, recursos visuales y contenidos de audio, junto con procedimientos de automatización y organización de la producción.'
                ]
              }
            ]
          },
          {
            title: 'Diseño, portadas y presentación profesional de los productos',
            paragraphs: [
              'La calidad del contenido es importante, pero la presentación también influye en cómo se percibe un producto digital.',
              'Por eso, el libro dedica un capítulo al diseño de materiales y portadas mediante herramientas de inteligencia artificial.',
              'Se abordan aspectos relacionados con la psicología del diseño, la selección de herramientas, la creación de portadas, la identidad visual y la adaptación de los recursos gráficos a diferentes canales.',
              'También se contempla el uso de pruebas A/B para comparar alternativas de presentación y la preparación de imágenes y miniaturas para plataformas como Amazon KDP y redes sociales.',
              'El objetivo es entender que la presentación visual forma parte del desarrollo del producto, no es un elemento que deba improvisarse al final.'
            ]
          },
          {
            title: 'Dónde vender productos digitales: Amazon KDP, plataformas de afiliación y tiendas propias',
            paragraphs: [
              'Crear un infoproducto es solo una parte del proceso. También necesitamos decidir dónde comercializarlo y qué infraestructura utilizar.',
              'Experto en PLR Premium dedica varios capítulos a las diferentes posibilidades de distribución y monetización.'
            ],
            subsections: [
              {
                title: 'Amazon KDP y la publicación de libros digitales',
                paragraphs: [
                  'Amazon KDP constituye uno de los canales estudiados para publicar y comercializar libros digitales e impresos.',
                  'El contenido aborda la preparación de publicaciones, la optimización de descripciones, las políticas de la plataforma, Kindle Unlimited, Amazon Ads y las posibilidades de organizar publicaciones en series.',
                  'También se presta atención a la importancia de conocer las condiciones de publicación y evitar prácticas que puedan ocasionar problemas con la plataforma.'
                ]
              },
              {
                title: 'Plataformas de afiliación y comercialización',
                paragraphs: [
                  'El libro analiza diferentes plataformas que forman parte del ecosistema de productos digitales y afiliación:'
                ],
                bullets: [
                  { description: 'ClickBank.' },
                  { description: 'JVZoo.' },
                  { description: 'Hotmart.' },
                  { description: 'WarriorPlus.' },
                  { description: 'Gumroad.' },
                  { description: 'Payhip.' },
                  { description: 'Ko-fi.' }
                ]
              },
              {
                title: 'Cómo desarrollar una plataforma propia',
                paragraphs: [
                  'Se estudian criterios para evaluar estas alternativas, sus posibilidades de utilización y la combinación de distintos canales dentro de una estrategia comercial.',
                  'Otra de las posibilidades abordadas es construir un entorno de venta propio, sin depender exclusivamente de plataformas externas.',
                  'Este apartado desarrolla distintos niveles de autonomía digital, herramientas de bajo código, páginas de destino, sistemas de pago y soluciones de automatización.',
                  'También contempla herramientas como ConvertKit, ClickFunnels, Stripe, PayPal, Zapier y Make, además de cuestiones relacionadas con la seguridad, la legalidad y la medición de resultados.'
                ]
              }
            ]
          },
          {
            title: 'Cómo atraer clientes para tus infoproductos: SEO, tráfico y marketing digital',
            paragraphs: [
              'Un producto digital necesita llegar a las personas interesadas en su temática. Por eso, el libro dedica una parte importante a la captación de tráfico y la comercialización.',
              'Se estudia cómo organizar una estrategia de distribución multicanal que combine posicionamiento en buscadores, contenidos y plataformas sociales.',
              'Entre los temas desarrollados se encuentran:'
            ],
            bullets: [
              { description: 'Investigación y organización de estrategias de tráfico.' },
              { description: 'SEO y optimización de contenidos.' },
              { description: 'Conceptos relacionados con E-E-A-T.' },
              { description: 'Distribución de contenidos mediante Google y YouTube Shorts.' },
              { description: 'Utilización de TikTok y Pinterest.' },
              { description: 'Comunidades y canales de comunicación como Discord y Telegram.' },
              { description: 'Organización de calendarios editoriales.' },
              { description: 'Seguimiento de indicadores y resultados.' }
            ],
            subsections: [
              {
                title: 'Estrategia de distribución multicanal',
                paragraphs: [
                  'La intención es comprender cómo conectar los productos digitales con sus posibles compradores mediante diferentes vías de visibilidad, en lugar de depender de una única fuente de visitas.'
                ]
              }
            ]
          },
          {
            title: 'Automatización, comunidades y ventas recurrentes',
            paragraphs: [
              'Una vez que el proyecto empieza a tomar forma, organizar los procesos se convierte en una parte importante de su funcionamiento.',
              'El libro aborda la automatización del marketing desde diferentes niveles, incluyendo herramientas, secuencias, upsells, sistemas de seguimiento y procedimientos de atención al cliente.',
              'También estudia soluciones como n8n y otras herramientas SaaS para conectar procesos y reducir tareas repetitivas.',
              'Otro de los temas tratados es la creación de comunidades y modelos de comercialización recurrente. Se analizan alternativas como Circle.so, Patreon y Substack, además de modelos híbridos, membresías, clubes de contenido y cursos distribuidos progresivamente.',
              'El propósito de estos capítulos es ampliar la visión del negocio digital más allá de la venta individual de un ebook o un producto descargable.'
            ]
          },
          {
            title: 'Métricas y escalabilidad: cómo evaluar el desarrollo de un negocio PLR',
            paragraphs: [
              'Un negocio digital necesita algo más que publicaciones y ventas ocasionales. También requiere información para evaluar qué funciona, qué necesita mejorar y dónde conviene concentrar los recursos.',
              'La última parte del libro se centra en el análisis y la sostenibilidad del proyecto.',
              'Se desarrollan indicadores como:'
            ],
            bullets: [
              {
                title: 'CAC',
                description: 'coste de adquisición de clientes.'
              },
              {
                title: 'LTV',
                description: 'valor del cliente a lo largo de su relación con el negocio.'
              },
              {
                title: 'Churn',
                description: 'tasa de cancelación o pérdida de clientes en modelos recurrentes.'
              }
            ],
            subsections: [
              {
                title: 'Expansión y crecimiento del negocio digital',
                paragraphs: [
                  'También se contempla el uso de herramientas de análisis y visualización como Looker Studio, la creación de alertas y la organización de procedimientos operativos.',
                  'El capítulo final aborda diferentes posibilidades de crecimiento, incluyendo la organización de equipos, los manuales de operaciones, las licencias de reventa, la certificación y otros modelos de expansión digital.',
                  'La idea es pasar de gestionar productos aislados a comprender los elementos que intervienen en el funcionamiento y la evolución de un negocio.'
                ]
              }
            ]
          },
          {
            title: 'Qué aprenderás con Experto en PLR Premium',
            paragraphs: [
              'A lo largo de sus doce capítulos, el libro desarrolla conocimientos y procedimientos relacionados con las siguientes áreas:'
            ],
            bullets: [
              { description: 'Comprender el ecosistema PLR y sus posibilidades de aplicación.' },
              { description: 'Evaluar materiales digitales antes de utilizarlos.' },
              { description: 'Transformar contenidos PLR mediante un proceso de cuatro fases con inteligencia artificial.' },
              { description: 'Adaptar ebooks, guías y manuales a diferentes objetivos.' },
              { description: 'Crear versiones en texto, audio, vídeo, formatos interactivos y recursos visuales.' },
              { description: 'Diseñar portadas y materiales gráficos para productos digitales.' },
              { description: 'Conocer las posibilidades de Amazon KDP y las plataformas de afiliación.' },
              { description: 'Evaluar alternativas para vender productos digitales.' },
              { description: 'Diseñar una infraestructura propia de comercialización.' },
              { description: 'Aplicar estrategias de SEO, tráfico y distribución multicanal.' },
              { description: 'Incorporar automatizaciones a los procesos de marketing y venta.' },
              { description: 'Explorar modelos de comunidades y comercialización recurrente.' },
              { description: 'Interpretar métricas para evaluar el funcionamiento del negocio.' }
            ]
          },
          {
            title: '¿A quién va dirigido este libro?',
            paragraphs: [
              'Experto en PLR Premium está dirigido a personas interesadas en crear, transformar y comercializar productos digitales utilizando contenidos con licencia PLR como punto de partida.',
              'Puede resultar especialmente interesante para:'
            ],
            bullets: [
              {
                title: 'Emprendedores digitales',
                description: 'que desean explorar modelos de negocio basados en infoproductos y necesitan comprender las diferentes etapas de su desarrollo.'
              },
              {
                title: 'Creadores de contenido y autores',
                description: 'que quieren ampliar sus conocimientos sobre transformación de materiales, producción multiformato y publicación digital.'
              },
              {
                title: 'Afiliados y profesionales del marketing',
                description: 'interesados en conocer otras posibilidades de comercialización, distribución y monetización de productos digitales.'
              },
              {
                title: 'Personas que quieren utilizar inteligencia artificial en sus proyectos',
                description: 'y buscan aplicar estas herramientas a la evaluación, reorganización, producción y presentación de contenidos.'
              }
            ],
            subsections: [
              {
                title: 'Una perspectiva realista del modelo PLR',
                paragraphs: [
                  'No es necesario interpretar el PLR como una fórmula automática para generar ingresos. Se trata de un modelo que requiere trabajo editorial, selección de materiales, adaptación, cumplimiento de las licencias y una estrategia comercial adecuada.'
                ]
              }
            ]
          },
          {
            title: 'Preguntas frecuentes sobre PLR y creación de productos digitales',
            subsections: [
              {
                title: '¿Qué significa PLR?',
                paragraphs: [
                  'PLR son las siglas de Private Label Rights, o derechos de etiqueta privada. Se refiere a una modalidad de licencia que puede permitir modificar, personalizar y comercializar contenidos digitales, siempre respetando las condiciones específicas de cada licencia.'
                ]
              },
              {
                title: '¿Se pueden crear productos digitales con PLR e inteligencia artificial?',
                paragraphs: [
                  'Sí. La inteligencia artificial puede utilizarse para analizar, reorganizar, contextualizar y adaptar contenidos PLR. Sin embargo, es necesario revisar los resultados, comprobar la información y respetar los derechos de uso del material original.'
                ]
              },
              {
                title: '¿Qué tipos de productos digitales se pueden desarrollar?',
                paragraphs: [
                  'El libro aborda cinco formatos principales: texto, audio, vídeo, recursos interactivos y materiales visuales. Cada uno puede responder a diferentes objetivos y formas de consumo de contenidos.'
                ]
              },
              {
                title: '¿Dónde se pueden vender los productos digitales?',
                paragraphs: [
                  'Entre las alternativas estudiadas se encuentran Amazon KDP, plataformas de afiliación y comercialización como ClickBank, Hotmart, JVZoo, WarriorPlus, Gumroad, Payhip y Ko-fi, además de la posibilidad de desarrollar una plataforma propia.',
                  'La elección depende del producto, el público, las condiciones de cada servicio y la estrategia comercial.'
                ]
              },
              {
                title: '¿El libro trata únicamente sobre la reventa de ebooks PLR?',
                paragraphs: [
                  'No. Su contenido va más allá de la reventa de materiales. Incluye transformación con inteligencia artificial, producción multiformato, diseño, publicación, marketing, automatización, comunidades y análisis del negocio digital.'
                ]
              }
            ]
          },
          {
            title: 'Una visión completa para trabajar con productos PLR',
            paragraphs: [
              'Transformar un material PLR en un producto digital requiere criterio, planificación y trabajo. La licencia proporciona unas posibilidades de utilización, pero el valor del resultado depende de cómo se evalúa, se adapta, se presenta y se comercializa el contenido.',
              'Experto en PLR Premium reúne estos elementos en un recorrido que va desde los fundamentos del modelo hasta la creación de productos multiformato, la distribución comercial y la organización de un negocio digital.',
              'Una guía para quienes quieren comprender mejor el ecosistema PLR y explorar cómo utilizar las herramientas digitales actuales para desarrollar sus propios infoproductos.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: '1',
    slug: 'iniciacion',
    path: '/iniciacion/',
    title: '📚 Fundamentos digitales',
    category: 'Iniciación',
    intro: 'Para quienes quieren construir su primer activo online con bases sólidas y una estructura que escale.',
    coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fundamentos-digitales-categoria.png',
    books: [
      {
        id: 'optimizado',
        slug: 'como-crear-un-blog-optimizado',
        path: '/como-crear-un-blog-optimizado/',
        categorySlug: 'iniciacion',
        title: 'Cómo crear un Blog optimizado',
        subtitle: 'El camino hacia el éxito para destacar en el mundo digital + Optimización de motores de búsqueda (SEO)',
        metaTitle: 'Cómo crear un Blog optimizado: guía de blogging y SEO',
        metaDescription: 'Aprende a crear un blog desde cero, optimizarlo para SEO, atraer tráfico orgánico y desarrollar estrategias de promoción, analítica y monetización.',
        description: 'Aprende a crear un blog desde cero, optimizarlo para SEO, atraer tráfico orgánico y desarrollar estrategias de promoción, analítica y monetización.',
        url: 'https://www.amazon.com/dp/B08NY61TZP',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/1-como-crear-un-blog-optimizado-libro-400.png',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            cta: 'Tapa blanda',
            format: 'Tapa blanda',
            url: 'https://www.amazon.com/dp/B08NY61TZP', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-tapa-blanda.png',
            emoji: '🛒',
            isPrimary: true,
            rel: 'nofollow noopener noreferrer'
          },
          { 
            platform: 'Amazon', 
            cta: 'Kindle ebook',
            format: 'Kindle',
            url: 'https://www.amazon.com/dp/B01EVJA21W', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-kindle-ebook.png',
            emoji: '📱',
            rel: 'nofollow noopener noreferrer'
          },
          { 
            platform: 'Amazon', 
            cta: 'Tapa dura',
            format: 'Tapa dura',
            url: 'https://www.amazon.com/dp/B09RGY5FF8', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-tapa-dura.png',
            emoji: '📖',
            rel: 'nofollow noopener noreferrer'
          },
          { 
            platform: 'Clickbank', 
            cta: 'ClickBank',
            url: 'https://bloggingopt.lovable.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            rel: 'nofollow noopener noreferrer'
          },
          { 
            platform: 'Payhip', 
            cta: 'Payhip',
            url: 'https://payhip.com/b/w8feQ', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            rel: 'nofollow noopener noreferrer'
          },
          { 
            platform: 'Lulu', 
            cta: 'Lulu',
            url: 'https://www.lulu.com/es/shop/francisco-gonzalez/c%C3%B3mo-crear-un-blog-optimizado/ebook/product-9pqk7n.html?page=1&pageSize=4', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/lulu-logo.jpg',
            emoji: '📚',
            rel: 'nofollow noopener noreferrer'
          }
        ],
        editorialSections: [
          {
            title: 'Construir y gestionar una plataforma de contenidos con visión de futuro',
            paragraphs: [
              'Crear un blog es mucho más que elegir una plataforma y comenzar a publicar artículos. Para desarrollar un proyecto con posibilidades reales de crecimiento necesitamos una estructura adecuada, contenidos que respondan a las necesidades de los lectores, una estrategia de posicionamiento y un sistema que permita analizar, mejorar y mantener el sitio a lo largo del tiempo.',
              'Cómo crear un Blog optimizado es una guía práctica que aborda las principales etapas de creación, desarrollo y crecimiento de un blog. Desde los primeros pasos de configuración hasta las estrategias de SEO, promoción, analítica, seguridad y escalabilidad, el libro ofrece una visión integral del trabajo que implica construir y gestionar una plataforma de contenidos.',
              'Tanto si estamos preparando nuestro primer blog como si ya tenemos uno y queremos mejorar su funcionamiento, encontraremos una orientación organizada para comprender cada área y trabajar en ella de manera progresiva.'
            ]
          },
          {
            title: '¿Qué aprenderemos con este libro?',
            subsections: [
              {
                title: '1. Cómo establecer los cimientos de un blog',
                paragraphs: [
                  'Antes de publicar contenidos necesitamos tomar decisiones que condicionarán el desarrollo del proyecto. El libro comienza con los fundamentos necesarios para poner en marcha un blog: elección de la plataforma, registro del dominio, selección del alojamiento web y configuración inicial.',
                  'También aborda la incorporación de los elementos esenciales, la planificación de los primeros contenidos, la organización de la navegación y la configuración de herramientas de análisis. El objetivo es comprender cómo construir una base organizada desde la que podamos desarrollar el proyecto.'
                ]
              },
              {
                title: '2. Los fundamentos del blogging y la creación de contenidos',
                paragraphs: [
                  'Un blog necesita contenidos útiles, bien estructurados y adecuados a las personas a las que queremos llegar. En esta parte se explican los elementos que forman un artículo, las técnicas de escritura para blogs y la importancia de identificar las necesidades de nuestra audiencia.',
                  'También aprenderemos a generar ideas, planificar publicaciones, estructurar textos, escribir de manera efectiva, incorporar recursos visuales y revisar los contenidos antes de publicarlos. El libro incluye además aspectos relacionados con las llamadas a la acción y la participación de los lectores.'
                ]
              },
              {
                title: '3. Diseño, usabilidad y experiencia del usuario',
                paragraphs: [
                  'La presentación de un blog influye en la manera en que los visitantes consumen sus contenidos. Por eso, el libro dedica un capítulo al diseño y la usabilidad, abordando los principios de diseño web, los elementos esenciales de una página y la organización de sus componentes.',
                  'Se tratan aspectos técnicos y funcionales como la velocidad de carga, la accesibilidad, las pruebas de usabilidad y la integración de elementos interactivos. También se explica la relación entre el diseño del blog y su optimización para los motores de búsqueda.'
                ]
              },
              {
                title: '4. SEO para mejorar la visibilidad del blog',
                paragraphs: [
                  'El posicionamiento orgánico es uno de los pilares de una estrategia de blogging. El libro dedica un capítulo específico a comprender cómo optimizar un blog para los motores de búsqueda.',
                  'Entre los temas tratados encontramos:'
                ],
                bullets: [
                  { description: 'Investigación y selección de palabras clave.' },
                  { description: 'Optimización de artículos y contenidos.' },
                  { description: 'Aspectos técnicos del SEO.' },
                  { description: 'Creación de enlaces entrantes o backlinks.' },
                  { description: 'SEO local para blogs con alcance geográfico.' },
                  { description: 'Análisis y seguimiento del rendimiento orgánico.' }
                ],
                footerParagraphs: [
                  'Estos fundamentos nos ayudan a entender cómo trabajar la visibilidad de las publicaciones y desarrollar una estrategia de posicionamiento con criterios definidos.'
                ]
              },
              {
                title: '5. Promoción y marketing de contenidos',
                paragraphs: [
                  'Publicar no es suficiente: también necesitamos dar visibilidad a nuestro trabajo. El libro aborda diferentes estrategias de promoción, incluyendo el uso de redes sociales, la difusión de contenidos, las acciones de SEO y las colaboraciones con otros proyectos.',
                  'Además, relaciona las actividades de promoción con la monetización y el análisis de resultados, para que podamos evaluar qué acciones contribuyen al crecimiento del blog.'
                ]
              },
              {
                title: '6. Analítica y seguimiento del rendimiento',
                paragraphs: [
                  'Para mejorar un proyecto digital necesitamos observar su evolución y tomar decisiones a partir de los datos. En este capítulo se presentan herramientas de analítica, la configuración e implementación de Google Analytics y las principales métricas que podemos utilizar para evaluar el rendimiento.',
                  'También se explica cómo interpretar los datos, identificar oportunidades de mejora, preparar informes y realizar un seguimiento a largo plazo.'
                ]
              },
              {
                title: '7. Mantenimiento y seguridad',
                paragraphs: [
                  'Un blog necesita atención después de su puesta en marcha. Mantenerlo actualizado, proteger sus datos y prevenir problemas técnicos son tareas fundamentales para su continuidad.',
                  'El libro aborda la gestión del sistema de contenidos, las copias de seguridad, la recuperación de datos, la protección frente a amenazas y ataques, la moderación de comentarios y el control del spam. También incluye la monitorización del sitio y la preparación de planes de contingencia.'
                ]
              },
              {
                title: '8. Monetización, crecimiento y escalabilidad',
                paragraphs: [
                  'Una vez establecidos los fundamentos, podemos trabajar para ampliar el alcance y las posibilidades del proyecto. El libro dedica una parte importante a las estrategias de crecimiento y monetización.',
                  'Entre los temas incluidos se encuentran la definición de objetivos, la ampliación de la audiencia, la diversificación de contenidos y las opciones de monetización avanzada. También se abordan la optimización técnica, la automatización, la delegación de tareas y la fidelización de la comunidad.'
                ]
              },
              {
                title: '9. Cómo construir un blog sostenible a largo plazo',
                paragraphs: [
                  'El último capítulo amplía la perspectiva y se centra en la evolución del proyecto. Trata la mentalidad necesaria para mantener un blog a largo plazo, la adaptación a los cambios sin perder su identidad y la construcción de una marca personal y autoridad dentro de un nicho.',
                  'El libro concluye con una hoja de ruta orientada a los próximos cinco años y una reflexión sobre el valor del blog como plataforma propia.'
                ]
              }
            ]
          },
          {
            title: '¿Para quién es este libro?',
            paragraphs: [
              'Esta guía está dirigida a:'
            ],
            bullets: [
              { description: 'Personas que quieren crear su primer blog y necesitan comprender las etapas del proceso.' },
              { description: 'Bloggers que desean mejorar la estructura, el diseño y la organización de su sitio.' },
              { description: 'Creadores de contenido interesados en aprender a planificar y optimizar sus publicaciones.' },
              { description: 'Emprendedores digitales que quieren utilizar un blog como parte de su estrategia de negocio.' },
              { description: 'Personas interesadas en SEO, tráfico orgánico y promoción de contenidos.' },
              { description: 'Bloggers que buscan comprender las opciones de monetización y las posibilidades de crecimiento.' },
              { description: 'Propietarios de blogs que necesitan mejorar el mantenimiento, la seguridad y el seguimiento de sus proyectos.' }
            ]
          },
          {
            title: 'Una guía para construir y desarrollar nuestro propio proyecto',
            paragraphs: [
              'Un blog puede convertirse en una plataforma para compartir conocimientos, desarrollar una audiencia, fortalecer una marca y explorar distintas posibilidades de monetización. Pero para conseguirlo necesitamos trabajar más allá de la publicación de artículos.',
              'Cómo crear un Blog optimizado reúne los principales elementos que intervienen en ese proceso: planificación, contenido, diseño, SEO, promoción, analítica, seguridad y crecimiento.',
              'Si queremos comenzar un proyecto de blogging o mejorar uno que ya tenemos, este libro nos ofrece una visión organizada de las áreas que debemos conocer y trabajar para desarrollar una plataforma de contenidos con una base sólida.',
              'Descubramos cómo crear, optimizar y desarrollar nuestro blog paso a paso.'
            ]
          }
        ]
      },
      {
        id: 'miblog',
        slug: 'mi-blog-y-los-programas-de-afiliados',
        path: '/mi-blog-y-los-programas-de-afiliados/',
        categorySlug: 'iniciacion',
        title: 'Mi Blog y los Programas de Afiliados',
        description: 'Aprende a convertir contenido en ingresos de forma ordenada y sostenible.',
        url: 'https://amzn.to/3PXiwYW',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/4-mi-blog-y-los-programas-de-afiliados-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3PXiwYW', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/mi-blog-y-los-programas-de-afiliados/ebook/product-zmwkppj.html', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://miblogafiliados.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Draft2Digital', 
            url: 'https://books2read.com/u/mdJkDR', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/draft2digital-logo.jpg',
            emoji: '📖',
            cta: 'Ver en Draft2Digital'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/hYfbn', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'Tener un blog con buenos artículos es un gran logro, pero si no genera ingresos, sigue siendo un hobby. El paso natural para convertir tu blog en un activo digital es la afiliación: recomendar productos y servicios que ya usas o que conoces bien, y ganar una comisión por cada venta que generes.',
          'Sin embargo, muchos bloggers cometen el error de llenar sus artículos de enlaces de afiliado sin criterio, lo que termina alejando a los lectores. Este libro te enseña el enfoque contrario: integrar la afiliación como parte de tu estrategia de contenido, de manera que las recomendaciones se sientan naturales y aporten valor real.',
          'Aprenderás a:',
          'Seleccionar programas de afiliados que paguen bien y tengan productos de calidad, sin caer en estafas ni en comisiones irrisorias.',
          'Integrar enlaces de forma orgánica, sin que parezca publicidad agresiva y sin perder la confianza de tu audiencia.',
          'Crear artículos de recomendación y comparativa, que son los que mejor convierten y los que más valor aportan al lector.',
          'Medir el rendimiento de tus enlaces, para saber qué funciona y qué no, y duplicar tus aciertos.',
          'Este libro no es un listado de programas de afiliados sin más. Es un sistema para convertir tu blog en una máquina de ingresos pasivos, sin necesidad de crear productos propios ni de invertir en publicidad. Es el complemento perfecto para "Cómo crear un Blog optimizado", porque te enseña a monetizar la estructura que ya has construido.'
        ]
      },
      {
        id: 'inbound',
        slug: 'guia-completa-de-inbound-marketing',
        path: '/guia-completa-de-inbound-marketing/',
        categorySlug: 'iniciacion',
        title: 'Guía Completa de Inbound Marketing',
        description: 'Atrae clientes con contenido estratégico, sin depender de interrupciones.',
        url: 'https://amzn.to/48SDeBV',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/11-guia-inbound-marketing-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/48SDeBV', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://inboundinboundmarketing.vercel.app', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/dvPDj', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'El inbound marketing es la metodología que ha revolucionado la forma de atraer clientes. En lugar de interrumpir a las personas con publicidad (outbound), se trata de crear contenido tan valioso que sean ellas las que vengan a ti. Es el marketing del "me encuentras porque te intereso", no del "te persigo hasta que compres".',
          'Este libro te guía paso a paso para implementar una estrategia de inbound marketing en tu blog o proyecto digital. No es teoría abstracta: es un plan de acción concreto para atraer tráfico cualificado, convertirlo en leads y, finalmente, en clientes.',
          'Aprenderás a:',
          'Crear "contenido imán" (lead magnets) que atraiga a las personas correctas y las convierta en suscriptores.',
          'Diseñar un calendario editorial basado en las preguntas reales de tu audiencia, no en lo que a ti te apetece escribir.',
          'Construir una lista de correo desde el principio, para no depender de los cambios de algoritmo de Google.',
          'Automatizar la nutrición de leads, con secuencias de correo que guían al suscriptor desde el interés hasta la compra.',
          'Medir el ROI del inbound marketing, para saber si estás invirtiendo tu tiempo en lo que realmente funciona.',
          'Este libro es el tercer pilar de la Ruta Iniciación. Si ya has construido tu blog y has empezado a monetizar con afiliados, el inbound marketing es el combustible que mantendrá tu proyecto en crecimiento constante. Es la diferencia entre tener un blog que sobrevive y un blog que prospera.'
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'ingresos',
    path: '/ingresos/',
    title: '💰 Monetización y afiliación',
    category: 'Ingresos',
    intro: 'Estrategias prácticas para transformar tráfico e ideas en ingresos reales y sistemas sostenibles.',
    coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/monetizacion-y-afiliacion-categoria.png',
    books: [
      {
        id: 'dominando',
        slug: 'dominando-el-marketing-de-afiliados',
        path: '/dominando-el-marketing-de-afiliados/',
        categorySlug: 'ingresos',
        title: 'Dominando el marketing de afiliados',
        description: 'Estrategias para generar ingresos recomendando productos.',
        url: 'https://amzn.to/46AasVc',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/3-marketing-de-afiliados-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/46AasVc', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://dominando-el-marketing-de-afiliados.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/mQwHe', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'El marketing de afiliados es una de las formas más accesibles de generar ingresos en línea, pero la mayoría de personas fracasa porque lo aborda como una carrera de velocidad: promocionan cualquier producto, saturan sus redes sociales y obtienen resultados pobres.',
          'Este libro te enseña el enfoque contrario: construir una estrategia de afiliación sostenible. Aprenderás a elegir productos que realmente aporten valor a tu audiencia, a integrar recomendaciones de forma natural en tu contenido (sin parecer un anuncio), y a usar plataformas como Amazon y Clickbank con criterio. No se trata de vender a cualquier precio, sino de crear confianza y convertirte en una referencia en tu nicho.',
          'El libro está lleno de ejemplos prácticos, sistemas de seguimiento y consejos para evitar los errores más comunes. Si sigues el método, en pocos meses tendrás un flujo de ingresos que crece mientras tú duermes, sin depender de tácticas agresivas. Es ideal tanto para principiantes como para bloggers que quieren diversificar sus fuentes de dinero.'
        ]
      },
      {
        id: 'cpa1',
        slug: 'marketing-cpa-para-emprendedores',
        path: '/marketing-cpa-para-emprendedores/',
        categorySlug: 'ingresos',
        title: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
        description: 'Domina el modelo de Coste Por Acción.',
        url: 'https://marketing-cpa.lovable.app/',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/21-marketing-cpa-libro-400-2.jpg',
        purchaseOptions: [
          { 
            platform: 'Clickbank', 
            url: 'https://marketing-cpa.lovable.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/6PclQ', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          },
          { 
            platform: 'Ko-fi', 
            url: 'https://ko-fi.com/s/48931def16', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/ko-fi-logo.jpg',
            emoji: '☕',
            cta: 'Comprar en Ko-fi'
          }
        ],
        extraInfo: [
          'El modelo CPA (Coste Por Acción) es uno de los sistemas de monetización más potentes y menos comprendidos del marketing digital. A diferencia de la afiliación tradicional, donde cobras por venta, en CPA cobras por acciones concretas: un registro, una descarga, un clic o cualquier otra conversión que el anunciante valore. Esto abre un abanico de posibilidades mucho más amplio que la simple venta de productos.',
          'Sin embargo, muchos emprendedores lo ignoran porque creen que es complicado o que solo funciona para grandes empresas. Este libro desmonta esos mitos y te enseña a utilizar el CPA como una herramienta accesible y rentable para tu negocio digital, incluso si estás empezando.',
          'Aprenderás a:',
          'Entender el ecosistema CPA: qué son las redes de afiliación CPA, cómo funcionan y cómo elegir las mejores para tu nicho.',
          'Seleccionar ofertas rentables: cómo identificar las acciones mejor pagadas y con mayor potencial de conversión para tu audiencia.',
          'Diseñar embudos de conversión específicos para CPA: desde la captación hasta la acción, optimizando cada paso para maximizar resultados.',
          'Medir y optimizar tus campañas: qué métricas importan realmente y cómo mejorar continuamente tus tasas de conversión.',
          'Este libro es el complemento perfecto para "Dominando el marketing de afiliados". Mientras que la afiliación tradicional se centra en la venta de productos, el CPA te permite monetizar cada interacción valiosa de tu audiencia, incluso antes de que realice una compra. Es la clave para diversificar tus ingresos y no depender de un solo modelo.'
        ]
      },
      {
        id: 'cpa2',
        slug: 'cpa-marketing-formula-smartlink',
        path: '/cpa-marketing-formula-smartlink/',
        categorySlug: 'ingresos',
        title: 'CPA Marketing Fórmula Smartlink',
        description: 'Optimización avanzada de enlaces inteligentes.',
        url: 'https://amzn.to/3PF2oMd',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/6-cpa-marketing-smartlink-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3PF2oMd', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://cpamarketingformula.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/U84n0', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'Los smartlinks (enlaces inteligentes) son una de las herramientas más revolucionarias del marketing de afiliación y CPA. Un smartlink es un enlace que detecta automáticamente el país, el dispositivo y otras características del usuario, y lo redirige a la oferta más adecuada para él. Esto significa que un solo enlace puede funcionar para usuarios de España, México, Argentina o Estados Unidos, adaptándose a sus monedas, idiomas y preferencias de compra.',
          'Sin embargo, la mayoría de los afiliados no los usa correctamente. O los ignoran por completo, perdiendo ventas internacionales, o los usan sin estrategia, dejando que la plataforma decida por ellos sin supervisión.',
          'Este libro te enseña a dominar los smartlinks como una herramienta estratégica, no como un simple atajo técnico. Aprenderás a:',
          'Configurar smartlinks avanzados: con reglas personalizadas según el dispositivo, la ubicación geográfica y el comportamiento del usuario.',
          'Optimizar el rendimiento de tus enlaces: cómo probar diferentes ofertas para cada segmento de audiencia y mejorar tus tasas de conversión.',
          'Integrar smartlinks con otras herramientas: desde plataformas de email marketing hasta sistemas de seguimiento avanzado.',
          'Analizar datos para tomar decisiones: qué métricas importan realmente y cómo usar esa información para escalar tus resultados.',
          'Este libro es el tercer pilar de la Ruta Ingresos, después de "Dominando el marketing de afiliados" y "Marketing CPA Para Emprendedores". Si quieres maximizar el rendimiento de cada clic que recibes, esta es la guía definitiva.'
        ]
      },
      {
        id: 'clickbank',
        slug: 'dinero-con-clickbank',
        path: '/dinero-con-clickbank/',
        categorySlug: 'ingresos',
        title: 'Dinero con Clickbank en minutos',
        description: 'Cómo elegir productos rentables, promocionarlos y construir tu primer negocio de afiliados',
        url: 'https://amzn.to/46yludn',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/2-dinero-con-clickbank-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/46yludn', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/dinero-con-clickbank/ebook/product-958dkwn.html', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://dineroconclk.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/DIuAq', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'Clickbank es una de las plataformas de afiliación más antiguas y rentables del mundo digital, especializada en productos digitales (cursos, ebooks, software) con comisiones que suelen superar el 50%. Es el lugar ideal para emprendedores que buscan escalar sus ingresos, pero también es un ecosistema complejo donde muchos fracasan porque no entienden sus reglas.',
          'Este libro te guía paso a paso para navegar Clickbank con éxito, desde la elección del producto hasta la promoción avanzada, pasando por la comprensión de sus métricas clave (gravedad, reembolsos, etc.). No es un manual superficial; es un sistema probado para construir un negocio de afiliados sostenible en esta plataforma.',
          'Aprenderás a:',
          'Seleccionar productos ganadores: cómo analizar la competencia, el potencial de nicho y la calidad del embudo de ventas del vendedor.',
          'Crear contenido que preseleccione al comprador ideal: desde reseñas hasta comparativas, pasando por artículos de autoridad que generen confianza.',
          'Combinar tráfico orgánico y pagado: para escalar resultados sin depender de una sola fuente de visitas.',
          'Diversificar tus fuentes de ingresos: cómo usar Clickbank en paralelo con dos o más programas de afiliados para no depender de un único producto o plataforma.',
          'Este libro es el cuarto pilar de la Ruta Ingresos, el paso final para pasar de una monetización básica a un sistema de ingresos de alto ticket. Es la guía que necesitas si quieres dejar de ganar comisiones pequeñas y empezar a construir un negocio digital escalable.'
        ]
      },
      {
        id: 'tips',
        slug: 'tips-de-marketing-para-afiliados',
        path: '/tips-de-marketing-para-afiliados/',
        categorySlug: 'ingresos',
        title: 'Tips de Marketing para Afiliados',
        description: 'Consejos accionables para maximizar conversiones.',
        url: 'https://amzn.to/405AkFR',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/5-tips-de-marketing-para-afiliados-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/405AkFR', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/tips-de-marketing-para-afiliados/ebook/product-jej9vm4.html', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://tips-marketing-de-afiliados.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Draft2Digital', 
            url: 'https://books2read.com/u/m28gXr', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/draft2digital-logo.jpg',
            emoji: '📖',
            cta: 'Ver en Draft2Digital'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/bCMT3', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'En el marketing de afiliados, los pequeños detalles marcan la diferencia entre una campaña que apenas genera ingresos y una que los multiplica. Un cambio en el texto de un enlace, la posición de un botón de llamada a la acción o el momento del día en que publicas un artículo pueden afectar drásticamente a tus conversiones.',
          'Este libro no es una teoría ni una introducción al marketing de afiliados. Es un compendio de consejos prácticos, ajustes finos y estrategias probadas que he recopilado tras años de experiencia en el sector. Está diseñado para quienes ya conocen los fundamentos y quieren llevar sus resultados al siguiente nivel.',
          'Aprenderás a:',
          'Optimizar el texto de tus enlaces de afiliado: qué palabras funcionan mejor y cómo integrarlos sin que parezca publicidad.',
          'Mejorar la tasa de clics (CTR): técnicas de copywriting y diseño para que más personas hagan clic en tus recomendaciones.',
          'Aumentar la tasa de conversión (CR): cómo preparar a tu audiencia antes de que haga clic, para que llegue con mayor intención de compra.',
          'Aprovechar la psicología del consumidor: principios de persuasión que aplican específicamente al contexto de la afiliación.',
          'Analizar y ajustar: qué métricas revisar a diario y cómo hacer ajustes rápidos sin perder el foco estratégico.',
          'Este libro es el complemento perfecto para el resto de la Ruta Ingresos. Mientras los otros volúmenes te enseñan los sistemas y las plataformas, este te da el "aceite" que hace que todo funcione mejor. Son pequeños cambios que, aplicados de forma sistemática, generan grandes resultados.'
        ]
      }
    ]
  },
  {
    id: '3',
    slug: 'tecnologia',
    path: '/tecnologia/',
    title: '🤖 Inteligencia Artificial aplicada',
    category: 'Tecnología',
    intro: 'Cómo integrar IA en tus procesos digitales para crear más rápido, decidir mejor y escalar con menos esfuerzo.',
    coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/inteligencia-artificial-aplicada-categoria.png',
    books: [
      {
        id: 'chat1',
        slug: 'como-ganar-dinero-con-chatgpt',
        path: '/como-ganar-dinero-con-chatgpt/',
        categorySlug: 'tecnologia',
        title: 'Cómo ganar dinero con CHATGPT',
        description: 'Aplica ChatGPT a proyectos reales y crea flujos de ingresos asistidos por IA.',
        url: 'https://amzn.to/3Q13TUi',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/12-dinero-con-chatgpt-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3Q13TUi', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://dineroconchatgpt.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/FuLo0', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'ChatGPT ha revolucionado la forma en que creamos contenido, investigamos y automatizamos tareas. Pero la mayoría de las personas lo usa de forma superficial: generan textos genéricos, piden ideas sin contexto y se quedan con respuestas que no sirven para nada práctico. El verdadero potencial de ChatGPT no está en usarlo como un juguete, sino como una herramienta de trabajo que multiplica tu productividad y te abre nuevas fuentes de ingresos.',
          'Este libro te enseña a ir más allá del "prompt básico" y a utilizar ChatGPT como un miembro más de tu equipo, uno que trabaja 24/7 y nunca se cansa. No es un manual de teoría; es una guía práctica llena de ejemplos, flujos de trabajo y casos reales.',
          'Aprenderás a:',
          'Crear prompts efectivos: cómo formular instrucciones que generen respuestas útiles y de calidad, no textos genéricos.',
          'Generar contenido de valor: artículos, emails, guiones, ebooks y material de marketing con calidad humana en una fracción del tiempo.',
          'Automatizar tareas repetitivas: desde la investigación de nichos hasta la generación de ideas para productos digitales.',
          'Diseñar flujos de trabajo con IA: cómo integrar ChatGPT en tus procesos diarios para que la herramienta haga el trabajo pesado y tú te centres en la estrategia.',
          'Monetizar el uso de ChatGPT: desde servicios de creación de contenido hasta productos digitales generados con IA.',
          'Este libro es el segundo pilar de la Ruta Tecnología, después de "Inteligencia Artificial". Si quieres pasar de usar ChatGPT por curiosidad a usarlo para construir un negocio, esta es tu guía.'
        ]
      },
      {
        id: 'chat2',
        slug: 'desbloquea-tu-inspiracion-con-chatgpt',
        path: '/desbloquea-tu-inspiracion-con-chatgpt/',
        categorySlug: 'tecnologia',
        title: 'Desbloquea tu inspiración con ChatGPT',
        description: 'Utiliza la IA como motor creativo para contenidos y productos digitales.',
        url: 'https://amzn.to/3VhmpME',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/16-chatgpt-para-escritores-libro-400.jpg',
        extraInfo: [
          'El bloqueo creativo es uno de los mayores enemigos de los creadores digitales. Pasar horas mirando una pantalla en blanco, esperando que llegue la "idea perfecta", es una experiencia frustrante que retrasa proyectos y genera ansiedad. Pero, ¿y si pudieras tener un "motor de inspiración" disponible las 24 horas del día, los 7 días de la semana?',
          'ChatGPT no solo sirve para automatizar tareas o generar contenido; también es una herramienta excepcional para desbloquear tu creatividad. Este libro te enseña a usar la IA no como un sustituto de tu creatividad, sino como un catalizador que la potencia y la amplifica.',
          'Aprenderás a:',
          'Superar el bloqueo del "folio en blanco": cómo usar ChatGPT para generar ideas iniciales que te ayuden a arrancar cualquier proyecto.',
          'Crear "briefs creativos" en minutos: desde la conceptualización hasta la estructura, acelerando el proceso de ideación.',
          'Explorar ángulos inesperados: cómo usar la IA para encontrar perspectivas únicas que no se te habrían ocurrido por ti mismo.',
          'Combinar la intuición humana con la generación masiva de ideas: un flujo de trabajo que mantiene tu toque personal mientras aprovechas la capacidad de la IA para generar variaciones.',
          'Mantener la originalidad: cómo evitar que la IA te vuelva genérico y asegurarte de que tu voz siga siendo única.',
          'Este libro es el tercer pilar de la Ruta Tecnología. Si quieres pasar de la inspiración esporádica a un sistema de creatividad bajo demanda, esta es la guía que necesitas.'
        ]
      },
      {
        id: 'artificial',
        slug: 'inteligencia-artificial',
        path: '/inteligencia-artificial/',
        categorySlug: 'tecnologia',
        title: 'Inteligencia Artificial',
        description: 'Comprende los fundamentos de la IA y su impacto en los negocios digitales.',
        url: 'https://amzn.to/3PAxt3y',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/15-inteligencia-artificial-libro-400.jpg',
        extraInfo: [
          'La Inteligencia Artificial está transformando todos los sectores, pero para la mayoría de las personas sigue siendo un concepto abstracto y lejano. Este libro desmitifica la IA y te la presenta como una herramienta práctica que puedes integrar en tu negocio digital hoy mismo, sin necesidad de ser programador o experto en tecnología.',
          'Aprenderás qué es realmente el machine learning, el procesamiento del lenguaje natural y las redes neuronales, pero explicado de forma sencilla y con ejemplos aplicados al marketing, la creación de contenido y la atención al cliente. También explorarás el panorama actual y las tendencias futuras para que puedas anticiparte a los cambios.',
          'El libro no se queda en la teoría. Incluye un plan de acción para identificar áreas de tu proyecto donde la IA puede ahorrarte tiempo, mejorar tus decisiones o aumentar tu productividad. Desde automatizar respuestas hasta generar borradores de contenido, descubrirás el potencial de una tecnología que ya está aquí. Es la guía definitiva para dejar de temer a la IA y empezar a aprovecharla.'
        ]
      },
      {
        id: 'futuro',
        slug: 'el-futuro-del-marketing-ia',
        path: '/el-futuro-del-marketing-ia/',
        categorySlug: 'tecnologia',
        title: 'El futuro del marketing (IA)',
        description: 'Adelántate a los cambios del marketing impulsado por inteligencia artificial.',
        url: 'https://amzn.to/400t0eP',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/7-marketing-IA-futuro-libro-400.jpg',
        extraInfo: [
          'El marketing digital está experimentando una transformación sin precedentes gracias a la inteligencia artificial. Lo que hace cinco años parecía ciencia ficción (contenido generado automáticamente, personalización masiva, predicción de comportamientos) ya es una realidad que está cambiando las reglas del juego. Pero la mayoría de los profesionales y emprendedores digitales reaccionan a estos cambios cuando ya son inevitables, perdiendo la oportunidad de posicionarse como líderes en su nicho.',
          'Este libro no es una predicción abstracta; es una guía estratégica para entender hacia dónde se dirige el marketing y cómo puedes prepararte hoy para no quedarte atrás mañana. Está basado en tendencias actuales, investigaciones de mercado y casos prácticos de empresas que ya están utilizando IA de forma avanzada.',
          'Aprenderás a:',
          'Entender las tendencias clave: personalización hipersegmentada, automatización predictiva, contenido generado en tiempo real y experiencia de usuario impulsada por IA.',
          'Identificar las habilidades humanas que la IA no podrá reemplazar: empatía, juicio ético, storytelling profundo y conexión emocional.',
          'Diseñar una estrategia de marketing que integre IA sin perder la conexión humana: cómo encontrar el equilibrio entre automatización y autenticidad.',
          'Posicionarte como referente: cómo usar el conocimiento sobre el futuro del marketing para atraer clientes y oportunidades.',
          'Este libro es el cuarto y último pilar de la Ruta Tecnología. Es la culminación de todo lo aprendido en los volúmenes anteriores: una visión estratégica que te permite no solo adaptarte al futuro, sino anticiparte a él.'
        ]
      }
    ]
  },
  {
    id: '4',
    slug: 'crecimiento',
    path: '/crecimiento/',
    title: '🚀 Tráfico, contenidos y crecimiento',
    category: 'Crecimiento',
    intro: 'Métodos probados para atraer visitantes cualificados y convertir contenido en crecimiento constante.',
    coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/trafico-contenidos-y-crecimiento-categoria.png',
    books: [
      {
        id: 'visitas1',
        slug: 'ideas-y-consejos-de-trafico-web',
        path: '/ideas-y-consejos-de-trafico-web/',
        categorySlug: 'crecimiento',
        title: 'Ideas y consejos de Tráfico Web',
        description: 'Aprende a atraer visitantes de forma constante con métodos probados.',
        url: 'https://amzn.to/3Flv3QS',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/13-ideas-y-consejos-de-trafico-web-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3Flv3QS', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://traficoweb.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/kyY9j', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'El tráfico es el combustible de cualquier proyecto digital. Sin visitantes, no hay conversiones, no hay ingresos, no hay crecimiento. Pero atraer tráfico de forma constante no es cuestión de suerte ni de publicar contenido sin estrategia. Requiere un método probado que funcione independientemente de los cambios de algoritmo o de las modas pasajeras.',
          'Este libro recopila las ideas y consejos más efectivos que he probado y validado en mis propios proyectos a lo largo de los años. No es teoría abstracta ni promesas de resultados milagrosos. Es un conjunto de estrategias prácticas que puedes implementar desde hoy mismo para empezar a ver resultados en tu tráfico.',
          'Aprenderás a:',
          'Identificar las fuentes de tráfico más rentables para tu nicho: no todas las fuentes funcionan igual para todos los proyectos. Aprende a elegir las que realmente te darán resultados.',
          'Aplicar técnicas de SEO que funcionan ahora mismo: optimización para buscadores sin trucos ni atajos, con un enfoque en la calidad y la sostenibilidad.',
          'Crear contenido que atraiga enlaces y menciones: el tipo de contenido que otros blogs y páginas quieren citar, lo que mejora tu posicionamiento orgánico.',
          'Medir y analizar tu tráfico: qué métricas importan realmente y cómo usar los datos para ajustar tu estrategia continuamente.',
          'Este libro es el primer pilar de la Ruta Crecimiento, la base sobre la que construirás el resto de tus sistemas de atracción. Si no tienes tráfico, no tienes negocio digital. Empieza por aquí.'
        ]
      },
      {
        id: 'visitas2',
        slug: 'ideas-maestras-de-trafico-web',
        path: '/ideas-maestras-de-trafico-web/',
        categorySlug: 'crecimiento',
        title: 'Ideas Maestras de Tráfico Web',
        description: 'Construye sistemas de tráfico que alimenten tus activos digitales.',
        url: 'https://amzn.to/3vjVwNB',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/27-ideas-maestras-de-trafico-web-libro-400.jpg',
        extraInfo: [
          'Tener ideas sueltas para generar tráfico está bien, pero si quieres construir un negocio digital sostenible, necesitas ir un paso más allá: necesitas un sistema de tráfico que funcione de forma continua, sin depender de tu esfuerzo diario ni de la suerte. Eso es exactamente lo que encontrarás en este libro.',
          'Mientras que "Ideas y consejos de Tráfico Web" te da las bases y las primeras estrategias, este libro profundiza en la construcción de sistemas de tráfico multicanal, diseñados para alimentar tus activos digitales de forma constante y escalable. Está pensado para quienes ya tienen algo de tráfico y quieren multiplicarlo.',
          'Aprenderás a:',
          'Diseñar un sistema de tráfico multicanal: cómo combinar SEO, redes sociales, email marketing y referidos para crear un flujo constante de visitantes.',
          'Crear "pilares de contenido" que atraigan autoridad y enlaces: no se trata de publicar mucho, sino de publicar contenido que se convierta en referencia en tu nicho.',
          'Aprovechar el tráfico de terceros: guest posts, colaboraciones, menciones en otros medios y cualquier oportunidad de aparecer donde tu audiencia ya está.',
          'Escalar el tráfico sin quemarte: cómo automatizar y delegar partes del proceso para que el sistema funcione incluso cuando no estés trabajando activamente en ello.',
          'Este libro es el segundo pilar de la Ruta Crecimiento, el paso siguiente para quienes ya tienen una base y quieren convertir su tráfico en un motor que impulse todo su negocio digital.'
        ]
      },
      {
        id: 'contenidos',
        slug: 'el-poder-del-marketing-de-contenidos',
        path: '/el-poder-del-marketing-de-contenidos/',
        categorySlug: 'crecimiento',
        title: 'El Poder Del Marketing De Contenidos',
        description: 'Convierte tu contenido en la base principal de tu crecimiento online.',
        url: 'https://amzn.to/47MbpgC',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/18-marketing-de-contenidos-libro-400.jpg',
        extraInfo: [
          'El marketing de contenidos es el pilar fundamental de cualquier estrategia digital exitosa. No se trata de "publicar artículos" por cumplir, sino de crear contenido estratégico que eduque, atraiga y convierta a tu audiencia en clientes leales. Sin una estrategia de contenidos clara, todo el tráfico que atraigas será en vano.',
          'Este libro es una guía completa para dominar el arte y la ciencia del marketing de contenidos, desde la planificación hasta la ejecución y la medición. Aprenderás a crear contenido que no solo informe, sino que genere confianza, autoridad y, finalmente, ventas recurrentes.',
          'Aprenderás a:',
          'Diseñar un calendario editorial estratégico: no publicar por publicar, sino con un propósito claro alineado con tus objetivos de negocio.',
          'Crear contenido que enganche y convierta: técnicas de storytelling, estructura de artículos y uso de llamadas a la acción (CTAs) efectivas.',
          'Adaptar el contenido a diferentes formatos y canales: desde artículos de blog hasta vídeos, podcasts y redes sociales, aprovechando al máximo cada pieza.',
          'Medir el ROI de tu contenido: saber qué funciona, qué no y cómo mejorar continuamente para obtener mejores resultados.',
          'Construir una audiencia fiel: contenido que no solo atrae visitas, sino que convierte a los lectores en seguidores que confían en ti y en tus recomendaciones.',
          'Este libro es el tercer pilar de la Ruta Crecimiento. Si ya tienes tráfico, este libro te enseña a convertirlo en el activo más valioso de tu negocio: una audiencia comprometida.'
        ]
      },
      {
        id: 'email',
        slug: 'dominando-el-arte-del-email-marketing',
        path: '/dominando-el-arte-del-email-marketing/',
        categorySlug: 'crecimiento',
        title: 'Dominando el Arte del Email Marketing',
        description: 'Crea relaciones duraderas y ventas recurrentes con email estratégico.',
        url: 'https://amzn.to/4cbywRd',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/26-dominando-el-arte-del-email-marketing-libro-400.jpg',
        extraInfo: [
          'El email marketing es, con diferencia, el canal de marketing con el mayor retorno de inversión (ROI) para cualquier negocio digital. Pero la mayoría de las personas lo hace mal: envían correos genéricos, spam o promociones agresivas que terminan en la papelera (o en la carpeta de spam). El email marketing efectivo no es enviar correos; es construir relaciones.',
          'Este libro te enseña a utilizar el email como un sistema de comunicación estratégica que te permite conectar con tu audiencia a un nivel más profundo, construir confianza y generar ventas recurrentes de forma ética y sostenible. No es un manual de tácticas puntuales; es una guía para construir un sistema de email marketing que funcione solo.',
          'Aprenderás a:',
          'Construir una lista de correo desde cero: cómo atraer suscriptores cualificados desde el primer día, incluso sin tráfico masivo.',
          'Escribir emails que la gente quiera abrir y leer: técnicas de asuntos, copywriting y estructura para aumentar tus tasas de apertura y clics.',
          'Diseñar secuencias de automatización: flujos de bienvenida, nutrición, recuperación de carritos y ventas que funcionan mientras tú duermes.',
          'Segmentar tu lista para enviar mensajes más relevantes: cómo dividir tu audiencia en grupos con intereses similares para mejorar la conversión.',
          'Medir y optimizar: qué métricas importan realmente en email marketing y cómo usarlas para mejorar continuamente tus campañas.',
          'Este libro es el cuarto y último pilar de la Ruta Crecimiento. Después de atraer tráfico, después de crear contenido, el email marketing es la herramienta que convierte a los visitantes en clientes para toda la vida.'
        ]
      }
    ]
  },
  {
    id: '5',
    slug: 'mindset',
    path: '/mindset/',
    title: '🧠 Mentalidad y creación',
    category: 'Mindset',
    intro: 'Desarrollo personal, enfoque creativo y mentalidad estratégica para sostener cualquier proyecto digital.',
    coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/mentalidad-y-creacion-categoria.png',
    books: [
      {
        id: 'abundancia',
        slug: 'el-arte-de-atraer-la-abundancia',
        path: '/el-arte-de-atraer-la-abundancia/',
        categorySlug: 'mindset',
        title: 'El arte de atraer la abundancia',
        description: 'Despierta tu potencial ilimitado y crea una vida de riqueza, éxito y plenitud total',
        url: 'https://amzn.to/3XCLjVW',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/14-el-arte-de-atraer-la-abundancia-ebook-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3XCLjVW', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://abundancia-arte.vercel.app/ ', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/VJNwa', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'La mayoría de los esfuerzos digitales fracasan no por falta de técnica, sino por una mentalidad limitante. Creencias profundas sobre el dinero, el éxito o la propia capacidad de crear pueden sabotear cualquier proyecto, por bueno que sea su plan de negocio. Este libro no es un tratado de autoayuda genérico; es un sistema práctico para transformar tu relación con la abundancia en todas sus formas.',
          'A través de ejercicios concretos, cambios de hábitos y cambios de perspectiva, aprenderás a identificar y desbloquear esos patrones mentales que te mantienen estancado. No se trata de "pensar positivo" sin más, sino de alinear tus pensamientos, emociones y acciones para atraer oportunidades de forma natural.',
          'Aprenderás a:',
          'Identificar y desbloquear creencias limitantes: cómo detectar los patrones mentales que te frenan y sustituirlos por otros que te impulsen.',
          'Transformar tu relación con el dinero: pasar de verlo como "mal necesario" o "escaso" a verlo como un reflejo del valor que aportas.',
          'Cultivar una mentalidad de crecimiento: ver los fracasos como aprendizaje, los obstáculos como oportunidades y los retos como escalones.',
          'Integrar hábitos diarios de abundancia: prácticas sencillas que mantienen tu energía y enfoque en alto, incluso en los días difíciles.',
          'Atraer clientes y oportunidades desde la convicción: no desde la necesidad, sino desde la certeza de que puedes aportar valor.',
          'Este libro es el segundo pilar de la Ruta Mindset. Después de dominar la persuasión (Libro 1), el siguiente paso es trabajar tu interior para que la confianza que transmites sea auténtica y no forzada.'
        ]
      },
      {
        id: 'solopreneur',
        slug: 'el-manual-del-solopreneur-moderno',
        path: '/el-manual-del-solopreneur-moderno/',
        categorySlug: 'mindset',
        title: 'El Manual del Solopreneur Moderno',
        subtitle: 'Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones.',
        description: 'Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones.',
        url: 'https://www.amazon.com/dp/B0HKPPV7HH',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/22-solopreneur-libro-600.jpg',
        isAvailable: true,
        purchaseOptions: [
          {
            platform: 'Amazon',
            cta: 'Tapa blanda',
            url: 'https://www.amazon.com/dp/B0HKPPV7HH',
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '📖'
          },
          {
            platform: 'Amazon',
            cta: 'Edición Kindle',
            url: 'https://www.amazon.com/dp/B0HKPHYRYX',
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '📱'
          },
          {
            platform: 'Amazon',
            cta: 'Tapa dura',
            url: 'https://www.amazon.com/dp/B0HKPZMYJ6',
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '📚'
          }
        ],
        extraInfo: [
          'El Manual del Solopreneur Moderno es una guía integral diseñada para profesionales, creadores y emprendedores que desean construir activos digitales sólidos con autonomía total.',
          'Aprenderás a:',
          'Arquitectura de negocio unipersonal: Diseña sistemas escalables que operen sin necesidad de contratar empleados ni asumir estructuras pesadas.',
          'Monetización y activos duraderos: Conecta productos digitales, servicios de alto valor y flujos automatizados de ingresos.',
          'Organización y productividad estratégica: Gestiona tu tiempo, herramientas digitales e inteligencia artificial para maximizar resultados con mínima fricción.',
          'Escalabilidad sin complicaciones: Estrategias prácticas para crecer de manera sostenible manteniendo tu libertad personal y financiera.',
          'Una obra fundamental dentro de la Ruta Mindset para transformar conocimientos y habilidades individuales en un ecosistema empresarial eficiente y rentable.'
        ]
      },
{
        id: 'vendedor',
        slug: 'el-vendedor-hipnotico',
        path: '/el-vendedor-hipnotico/',
        categorySlug: 'mindset',
        title: 'El Vendedor hipnótico',
        description: 'Mejora tu persuasión conectando emocionalmente con tus clientes.',
        url: 'https://amzn.to/3LZRdvV',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/8-el-vendedor-hipnotico-libro-400.jpg',
        audiobookOptions: [
          { platform: 'Spotify', url: 'https://open.spotify.com/show/0DrnOq1TRjB9OX5Xa6hyz5' },
          { platform: 'Apple Books', url: 'https://books.apple.com/us/audiobook/el-vendedor-hipn%C3%B3tico-domina-el-arte-de/id1861823314?uo=4' },
          { platform: 'Everand', url: 'https://es.everand.com/audiobook/967843087/El-Vendedor-Hipnotico-Domina-el-arte-de-la-seduccion-emocional-para-vender-sin-presionar' },
          { platform: 'Storytel', url: 'https://www.storytel.com/tv/books/el-vendedor-hipn%C3%B3tico-domina-el-arte-de-la-seducci%C3%B3n-emocional-para-vender-sin-presionar-13219210?utm_source=internal&utm_medium=app_link&utm_campaign=share_links' },
          { platform: 'Google Play', url: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDqXVcdrM' },
          { platform: 'Amazon', url: 'https://amzn.to/4vMYGTh' }
        ],
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3LZRdvV', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://elvendedorhipnotico.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Draft2Digital', 
            url: 'https://books2read.com/u/4A85vk', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/draft2digital-logo.jpg',
            emoji: '📖',
            cta: 'Ver en Draft2Digital'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/JWv4w', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/el-vendedor-hipn%C3%B3tico/ebook/product-84j9eep.html', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Google Play', 
            format: 'Ebook',
            url: 'https://play.google.com/store/books/details/Francisco_Gonz%C3%A1lez_El_Vendedor_Hipn%C3%B3tico?id=ViOdEQAAQBAJ', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/google_play_ebook.jpg',
            emoji: '📱',
            cta: 'Ver en Google Play'
          }
        ],
        extraInfo: [
          'La persuasión es una de las habilidades más poderosas en el mundo digital, pero la mayoría de las personas la entiende mal. No se trata de manipular o engañar a los demás, sino de conectar con ellos a un nivel profundo, entender sus deseos y miedos, y comunicar tu mensaje de forma que resuene con sus emociones más auténticas.',
          'Este libro te enseña los principios de la persuasión hipnótica aplicada a las ventas y el marketing digital. No es un manual de trucos baratos ni de técnicas agresivas; es una guía para comunicarte con integridad y efectividad, construyendo relaciones basadas en la confianza y la empatía.',
          'Aprenderás a:',
          'Entender la psicología de la decisión de compra: cómo las personas toman decisiones basadas en emociones y justifican con lógica, y cómo usar eso a tu favor.',
          'Utilizar el lenguaje persuasivo de forma ética: patrones lingüísticos que conectan con el subconsciente de tu audiencia sin manipular.',
          'Crear mensajes de venta que conecten a nivel emocional: copywriting que genera deseo y confianza, no que presiona o incomoda.',
          'Transformar objeciones en razones para comprar: cómo abordar las dudas de tus clientes potenciales de forma que se conviertan en argumentos a favor.',
          'Aplicar la persuasión en diferentes formatos: emails, páginas de venta, artículos de blog y conversaciones uno a uno.',
          'Este libro es el primer pilar de la Ruta Mindset porque, antes de crear productos o vender, necesitas entender cómo piensa y siente tu cliente. La persuasión ética no es opcional; es la base de toda comunicación efectiva en el mundo digital.'
        ]
      },
      {
        id: 'pluma',
        slug: 'de-la-pluma-al-dinero',
        path: '/de-la-pluma-al-dinero/',
        categorySlug: 'mindset',
        title: 'De la Pluma al Dinero',
        description: 'Transforma tus ideas escritas en productos digitales rentables.',
        url: 'https://amzn.to/3Tt81ir',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/23-de-la-pluma-al-dinero-libro-400.jpg',
        extraInfo: [
          'Escribir es una de las habilidades más valiosas en el mundo digital, pero la mayoría de las personas no sabe cómo convertir sus escritos en productos rentables. Tienen ideas, conocimientos y experiencias que podrían ayudar a otros, pero no saben cómo estructurarlas, empaquetarlas y venderlas. Este libro es el puente entre tener algo que decir y tener un producto digital que genere ingresos.',
          'No es un manual de escritura creativa ni un tratado sobre gramática. Es una guía práctica para transformar tu conocimiento en productos digitales que la gente esté dispuesta a comprar, desde ebooks y guías hasta cursos y plantillas. Está pensado para quienes tienen experiencia en un área y quieren monetizarla sin complicaciones.',
          'Aprenderás a:',
          'Identificar qué conocimientos o experiencias tienes que son valiosos para otros: no necesitas ser un "gurú" para tener algo que enseñar.',
          'Estructurar un ebook o curso de no ficción que sea útil y práctico: cómo organizar tu contenido para que sea fácil de consumir y aplicar.',
          'Escribir con claridad y autoridad: técnicas para comunicar tus ideas de forma efectiva, sin necesidad de ser un escritor profesional.',
          'Superar el miedo a no ser "suficientemente experto": cómo validar tu conocimiento y confiar en el valor que aportas.',
          'Diseñar productos complementarios: desde guías rápidas hasta programas completos, para cubrir diferentes necesidades y precios.',
          'Este libro es el tercer pilar de la Ruta Mindset, el paso que convierte la intención en acción. Después de trabajar la persuasión y la abundancia, este libro te da las herramientas para crear el producto que materializa todo ese potencial.'
        ]
      },
      {
        id: 'ebooks',
        slug: 'como-crear-ebooks-de-no-ficcion',
        path: '/como-crear-ebooks-de-no-ficcion/',
        categorySlug: 'mindset',
        title: 'Cómo crear Ebooks (de no ficción)',
        description: 'Diseña ebooks útiles que aporten valor y generen ingresos.',
        url: 'https://amzn.to/3xfCrNa',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/9-como-crear-ebooks-de-no-ficcion-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3xfCrNa', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://comocrearebooksdeno-ficcion.vercel.app', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/DwRge', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'El ebook es uno de los productos digitales más accesibles y rentables para cualquier creador. Pero no cualquier ebook funciona. La mayoría de los ebooks que se publican en Amazon u otras plataformas apenas venden unas decenas de copias porque están mal estructurados, mal diseñados o no aportan el valor que el lector espera.',
          'Este libro es una guía completa para diseñar y publicar ebooks de no ficción que realmente aporten valor y generen ingresos. No se trata de escribir por escribir, sino de crear un producto que resuelva un problema concreto para una audiencia concreta. Es el manual práctico para quienes quieren dar el salto de "leer ebooks" a "escribir ebooks".',
          'Aprenderás a:',
          'Validar tu idea antes de escribir: cómo asegurarte de que hay demanda para tu ebook antes de invertir tiempo y esfuerzo.',
          'Estructurar tu ebook para maximizar el valor: desde la introducción hasta el cierre, pasando por ejercicios prácticos y recursos complementarios.',
          'Diseñar una portada profesional (sin ser diseñador): herramientas y recursos para crear una portada que atraiga clics y ventas.',
          'Darle formato a tu ebook para las principales plataformas: Amazon Kindle, PDF, Apple Books y otras, sin complicaciones técnicas.',
          'Crear materiales complementarios: listas de verificación, plantillas, hojas de trabajo y otros recursos que aumenten el valor percibido.',
          'Publicar y promocionar tu ebook: estrategias para que no sea un producto invisible en el mar de libros digitales.',
          'Este libro es el cuarto pilar de la Ruta Mindset. Es el complemento práctico de "De la Pluma al Dinero", enfocado específicamente en el formato ebook.'
        ]
      },
      {
        id: 'ebooks24',
        slug: 'ebook-en-24-horas',
        path: '/ebook-en-24-horas/',
        categorySlug: 'mindset',
        title: 'Ebook en 24 horas',
        description: 'Cómo escribir un ebook de no ficción y publicarlo en tiempo récord (menos de 24 horas) ¿Te atreves?',
        url: 'https://amzn.to/3TqQl6o',
        coverUrl: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/10-ebook-en-24-horas-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3TqQl6o', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://ebook24.vercel.app/', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/8prkL', 
            logo: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'El perfeccionismo es uno de los mayores enemigos de los creadores digitales. Pasan semanas, meses o incluso años "preparando" su primer ebook, corrigiendo detalles menores, reescribiendo párrafos y posponiendo la publicación. Al final, el ebook nunca ve la luz. Este libro es la respuesta a ese bloqueo: un método probado para escribir y publicar un ebook de no ficción en menos de 24 horas.',
          'No se trata de escribir un ebook de baja calidad. Se trata de aplicar un sistema de creación rápida que prioriza lo esencial: un contenido útil y bien estructurado, sin caer en la trampa del perfeccionismo que paraliza. Es el antídoto contra la procrastinación y el "síndrome del impostor".',
          'Aprenderás a:',
          'Aplicar un método paso a paso para escribir rápido y con calidad: un flujo de trabajo que te permite publicar en tiempo récord sin sacrificar el valor del contenido.',
          'Superar el bloqueo del "folio en blanco": técnicas para empezar a escribir sin dudas ni vacilaciones, desde el primer minuto.',
          'Estructurar tu ebook en tiempo récord: cómo definir el índice, los capítulos y los ejercicios prácticos en cuestión de minutos.',
          'Dar formato y publicar en el menor tiempo posible: herramientas y atajos para no perder horas en aspectos técnicos.',
          'Mantener la calidad mientras publicas rápido: el equilibrio entre rapidez y valor, para que tu ebook sea útil y profesional.',
          'Validar tu ebook en el mercado rápidamente: cómo publicar para recibir feedback y mejorar ediciones futuras.',
          'Este libro es el quinto y último pilar de la Ruta Mindset. Es la culminación de todo el trabajo de mentalidad y creación: pasar de la idea a la acción en tiempo récord. ¿Te atreves?'
        ]
      }
    ]
  }
];

export const ALL_BOOKS: BookItem[] = FEATURED_BOOKS.flatMap((cat) => cat.books);

export const RESERVED_ROOT_SLUGS = new Set<string>([
  '',
  'biblioteca',
  'origen',
  'iniciacion',
  'ingresos',
  'tecnologia',
  'crecimiento',
  'mindset',
  'sistemas-digitales',
  'sobre-fg-perspectiva',
  'contacto',
  '404',
  'sitemap.xml',
  'robots.txt',
  'assets'
]);

export const CANONICAL_URLS: string[] = [
  'https://fgperspectiva.vercel.app/',
  'https://fgperspectiva.vercel.app/biblioteca/',
  'https://fgperspectiva.vercel.app/origen/',
  'https://fgperspectiva.vercel.app/iniciacion/',
  'https://fgperspectiva.vercel.app/ingresos/',
  'https://fgperspectiva.vercel.app/tecnologia/',
  'https://fgperspectiva.vercel.app/crecimiento/',
  'https://fgperspectiva.vercel.app/mindset/',
  'https://fgperspectiva.vercel.app/sistemas-digitales/',
  'https://fgperspectiva.vercel.app/sobre-fg-perspectiva/',
  'https://fgperspectiva.vercel.app/contacto/',
  ...ALL_BOOKS.map((b) => `https://fgperspectiva.vercel.app${b.path}`)
];

export const HISTORICAL_HASH_REDIRECTS: Record<string, string> = {
  'biblioteca': '/biblioteca/',
  'sistemas': '/sistemas-digitales/',
  'sobre-fg-perspectiva': '/sobre-fg-perspectiva/',
  'nosotros': '/sobre-fg-perspectiva/',
  'contacto': '/contacto/',
  'plr': '/experto-en-plr-premium/',
  'optimizado': '/como-crear-un-blog-optimizado/',
  'miblog': '/mi-blog-y-los-programas-de-afiliados/',
  'inbound': '/guia-completa-de-inbound-marketing/',
  'dominando': '/dominando-el-marketing-de-afiliados/',
  'cpa1': '/marketing-cpa-para-emprendedores/',
  'cpa2': '/cpa-marketing-formula-smartlink/',
  'clickbank': '/dinero-con-clickbank/',
  'clcibank': '/dinero-con-clickbank/',
  'tips': '/tips-de-marketing-para-afiliados/',
  'chat1': '/como-ganar-dinero-con-chatgpt/',
  'chat2': '/desbloquea-tu-inspiracion-con-chatgpt/',
  'artificial': '/inteligencia-artificial/',
  'futuro': '/el-futuro-del-marketing-ia/',
  'visitas1': '/ideas-y-consejos-de-trafico-web/',
  'visitas2': '/ideas-maestras-de-trafico-web/',
  'contenidos': '/el-poder-del-marketing-de-contenidos/',
  'email': '/dominando-el-arte-del-email-marketing/',
  'vendedor': '/el-vendedor-hipnotico/',
  'abundancia': '/el-arte-de-atraer-la-abundancia/',
  'solopreneur': '/el-manual-del-solopreneur-moderno/',
  'pluma': '/de-la-pluma-al-dinero/',
  'ebooks': '/como-crear-ebooks-de-no-ficcion/',
  'ebooks24': '/ebook-en-24-horas/'
};

