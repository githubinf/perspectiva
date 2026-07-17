
import { BookCategory, NavItem } from './types.ts';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Sobre la editorial', href: '#sobre-fg-perspectiva' },
  { label: 'Contacto', href: '#contacto' },
];

export const FEATURED_BOOKS: BookCategory[] = [
  {
    id: 'star',
    title: '🌟 PRODUCTO ESTRELLA (Origen de toda la colección)',
    category: 'Origen',
    intro: 'La base de todo. Desde este método nacen el resto de libros de la biblioteca FG Perspectiva.',
    coverUrl: 'https://i.ibb.co/84zjNS6T/producto-estrella-plr.png',
    books: [
      {
        id: 'plr',
        title: 'Experto en PLR premium: El Sistema Paso a Paso para Crear Infoproductos Rentables que venden.',
        description: 'Aprende a crear, modificar y vender infoproductos con PLR profesional, incluso sin ser experto. Herramientas Digitales Actuales.',
        url: 'https://www.amazon.com/dp/B0GWZQPNT2',
        coverUrl: 'https://i.ibb.co/QFGfhgGL/25-experto-en-plr-producto-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://www.amazon.com/dp/B0GWZQPNT2', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://expertoplrpremium.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Jvzoo', 
            url: 'https://experto-en-plr--fjgjavier.replit.app/', 
            emoji: '🚀',
            cta: 'Ver en Jvzoo'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/QhoMJ', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'El PLR (Private Label Rights) es uno de los secretos mejor guardados de los creadores digitales exitosos. Consiste en adquirir contenido de calidad con derechos de modificación y reventa, lo que te permite saltarte el proceso de escritura desde cero y centrarte en lo que realmente importa: personalizar, dar valor y vender.',
          'Sin embargo, la mayoría de personas que prueban el PLR fracasan porque compran material de baja calidad, no saben modificarlo correctamente o lo publican sin estrategia. Este libro nace para resolver eso. Es el sistema que he desarrollado tras años de experiencia creando y vendiendo infoproductos basados en PLR premium.',
          'En sus páginas aprenderás a:',
          'Seleccionar PLR premium: Cómo distinguir el contenido de calidad del que no vale la pena, y dónde encontrarlo.',
          'Modificar y personalizar: Técnicas para darle tu voz, actualizar ejemplos y añadir tu experiencia sin perder la estructura original.',
          'Diseñar y empaquetar: Cómo convertir ese contenido modificado en un ebook, curso o plantilla profesional, con portada y materiales complementarios.',
          'Crear un sistema de publicación: Un flujo de trabajo que te permita lanzar infoproductos de forma constante, sin quemarte ni reinventar la rueda cada vez.',
          'Este libro es el origen de toda la biblioteca FG Perspectiva. No es un título más; es la puerta de entrada para cualquiera que quiera dejar de ser consumidor de contenido y convertirse en creador de activos digitales. Si solo compras un libro de toda la colección, que sea este. Porque, como dice el lema de FG Perspectiva: "No es falta de información, es falta de perspectiva."'
        ]
      }
    ]
  },
  {
    id: '1',
    title: '📚 Fundamentos digitales',
    category: 'Iniciación',
    intro: 'Para quienes quieren construir su primer activo online con bases sólidas y una estructura que escale.',
    coverUrl: 'https://i.ibb.co/p6SHyqBW/fundamentos-digitales-categoria.png',
    books: [
      {
        id: 'optimizado',
        title: 'Cómo crear un Blog optimizado',
        description: 'Construye tu primer activo digital desde cero, con estructura y visión a largo plazo.',
        url: 'https://amzn.to/3ZXWB8q',
        coverUrl: 'https://i.ibb.co/q3TTrp45/1-como-crear-un-blog-optimizado-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3ZXWB8q', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonzalez/c%C3%B3mo-crear-un-blog-optimizado/ebook/product-9pqk7n.html?page=1&pageSize=4', 
            logo: 'https://i.ibb.co/nq0QhxZR/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://bloggingopt.lovable.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/w8feQ', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          }
        ],
        extraInfo: [
          'Crear un blog es el primer paso para tener un activo digital propio, pero la mayoría de la gente lo hace sin una estrategia clara. Eligen un tema por moda, usan plantillas genéricas y escriben sin un plan. El resultado es un blog que no genera tráfico, no convence y termina abandonado a los pocos meses.',
          'Este libro te guía paso a paso para evitar esos errores. Aprenderás a elegir un nicho con potencial real, a configurar tu blog con una estructura técnica que facilite el posicionamiento en buscadores, y a planificar los primeros contenidos para atraer visitantes desde el primer mes. No se trata de escribir por escribir, sino de construir una base que escale con el tiempo.',
          'El enfoque es práctico: cada capítulo incluye tareas concretas y ejemplos reales. Al final del libro, tendrás un blog optimizado, con una hoja de ruta clara para los próximos meses y el conocimiento para mantenerlo creciendo sin depender de trucos temporales. Es el cimiento que necesitas para cualquier proyecto digital posterior.'
        ]
      },
      {
        id: 'miblog',
        title: 'Mi Blog y los Programas de Afiliados',
        description: 'Aprende a convertir contenido en ingresos de forma ordenada y sostenible.',
        url: 'https://amzn.to/3PXiwYW',
        coverUrl: 'https://i.ibb.co/gFByygV3/4-mi-blog-y-los-programas-de-afiliados-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3PXiwYW', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/mi-blog-y-los-programas-de-afiliados/ebook/product-zmwkppj.html', 
            logo: 'https://i.ibb.co/nq0QhxZR/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://miblogafiliados.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Draft2Digital', 
            url: 'https://books2read.com/u/mdJkDR', 
            logo: 'https://i.ibb.co/TDgFD1mx/draft2digital-logo.jpg',
            emoji: '📖',
            cta: 'Ver en Draft2Digital'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/hYfbn', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        title: 'Guía Completa de Inbound Marketing',
        description: 'Atrae clientes con contenido estratégico, sin depender de interrupciones.',
        url: 'https://amzn.to/48SDeBV',
        coverUrl: 'https://i.ibb.co/Sp4GnWM/guia-inbound-marketing.png',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/48SDeBV', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://inboundinboundmarketing.vercel.app', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/dvPDj', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
    title: '💰 Monetización y afiliación',
    category: 'Ingresos',
    intro: 'Estrategias prácticas para transformar tráfico e ideas en ingresos reales y sistemas sostenibles.',
    coverUrl: 'https://i.ibb.co/whft6kKb/monetizacion-y-afiliacion-categoria.png',
    books: [
      {
        id: 'dominando',
        title: 'Dominando el marketing de afiliados',
        description: 'Estrategias para generar ingresos recomendando productos.',
        url: 'https://amzn.to/46AasVc',
        coverUrl: 'https://i.ibb.co/848rmyCx/3-marketing-de-afiliados-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/46AasVc', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://dominando-el-marketing-de-afiliados.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/mQwHe', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        title: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
        description: 'Domina el modelo de Coste Por Acción.',
        url: 'https://marketing-cpa.lovable.app/',
        coverUrl: 'https://i.ibb.co/wrdHNtFn/marketing-cpa-para-emprendedores.png',
        purchaseOptions: [
          { 
            platform: 'Clickbank', 
            url: 'https://marketing-cpa.lovable.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/6PclQ', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          },
          { 
            platform: 'Ko-fi', 
            url: 'https://ko-fi.com/s/48931def16', 
            logo: 'https://i.ibb.co/2r0C36C/ko-fi-logo.jpg',
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
        title: 'Cpa Marketing Fórmula Smartlink',
        description: 'Optimización avanzada de enlaces inteligentes.',
        url: 'https://amzn.to/3PF2oMd',
        coverUrl: 'https://i.ibb.co/fV1pc13f/6-cpa-marketing-smartlink-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3PF2oMd', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://cpamarketingformula.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/U84n0', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        id: 'clcibank',
        title: 'Dinero con Clickbank',
        description: 'Cómo elegir productos rentables, promocionarlos y construir tu primer negocio de afiliados',
        url: 'https://amzn.to/46yludn',
        coverUrl: 'https://i.ibb.co/jZvBdz9f/2-dinero-con-clickbank-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/46yludn', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/dinero-con-clickbank/ebook/product-958dkwn.html', 
            logo: 'https://i.ibb.co/nq0QhxZR/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://dineroconclk.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/DIuAq', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        title: 'Tips de Marketing para Afiliados',
        description: 'Consejos accionables para maximizar conversiones.',
        url: 'https://amzn.to/405AkFR',
        coverUrl: 'https://i.ibb.co/5hqN1ycg/5-tips-de-marketing-para-afiliados-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/405AkFR', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/tips-de-marketing-para-afiliados/ebook/product-jej9vm4.html', 
            logo: 'https://i.ibb.co/nq0QhxZR/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://tips-marketing-de-afiliados.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Draft2Digital', 
            url: 'https://books2read.com/u/m28gXr', 
            logo: 'https://i.ibb.co/TDgFD1mx/draft2digital-logo.jpg',
            emoji: '📖',
            cta: 'Ver en Draft2Digital'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/bCMT3', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
    title: '🤖 Inteligencia Artificial aplicada',
    category: 'Tecnología',
    intro: 'Cómo integrar IA en tus procesos digitales para crear más rápido, decidir mejor y escalar con menos esfuerzo.',
    coverUrl: 'https://i.ibb.co/ym9cL2rD/inteligencia-artificial-aplicada-categoria.png',
    books: [
      {
        id: 'chat1',
        title: 'Cómo ganar dinero con CHATGPT',
        description: 'Aplica ChatGPT a proyectos reales y crea flujos de ingresos asistidos por IA.',
        url: 'https://amzn.to/3Q13TUi',
        coverUrl: 'https://i.ibb.co/LDrzycGZ/como-ganar-dinero-con-chatgpt.png',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3Q13TUi', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://dineroconchatgpt.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/FuLo0', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        title: 'Desbloquea tu inspiración con ChatGPT',
        description: 'Utiliza la IA como motor creativo para contenidos y productos digitales.',
        url: 'https://amzn.to/3VhmpME',
        coverUrl: 'https://i.ibb.co/qY3WJ4bN/16-chatgpt-para-escritores-libro-400.jpg',
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
        title: 'Inteligencia Artificial',
        description: 'Comprende los fundamentos de la IA y su impacto en los negocios digitales.',
        url: 'https://amzn.to/3PAxt3y',
        coverUrl: 'https://i.ibb.co/20gchR86/15-inteligencia-artificial-libro-400.jpg',
        extraInfo: [
          'La Inteligencia Artificial está transformando todos los sectores, pero para la mayoría de las personas sigue siendo un concepto abstracto y lejano. Este libro desmitifica la IA y te la presenta como una herramienta práctica que puedes integrar en tu negocio digital hoy mismo, sin necesidad de ser programador o experto en tecnología.',
          'Aprenderás qué es realmente el machine learning, el procesamiento del lenguaje natural y las redes neuronales, pero explicado de forma sencilla y con ejemplos aplicados al marketing, la creación de contenido y la atención al cliente. También explorarás el panorama actual y las tendencias futuras para que puedas anticiparte a los cambios.',
          'El libro no se queda en la teoría. Incluye un plan de acción para identificar áreas de tu proyecto donde la IA puede ahorrarte tiempo, mejorar tus decisiones o aumentar tu productividad. Desde automatizar respuestas hasta generar borradores de contenido, descubrirás el potencial de una tecnología que ya está aquí. Es la guía definitiva para dejar de temer a la IA y empezar a aprovecharla.'
        ]
      },
      {
        id: 'futuro',
        title: 'El futuro del marketing (IA)',
        description: 'Adelántate a los cambios del marketing impulsado por inteligencia artificial.',
        url: 'https://amzn.to/400t0eP',
        coverUrl: 'https://i.ibb.co/Kx6WXKQ7/7-marketing-IA-futuro-libro-400.jpg',
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
    title: '🚀 Tráfico, contenidos y crecimiento',
    category: 'Crecimiento',
    intro: 'Métodos probados para atraer visitantes cualificados y convertir contenido en crecimiento constante.',
    coverUrl: 'https://i.ibb.co/dJ5D1987/trafico-contenidos-y-crecimiento-categoria.png',
    books: [
      {
        id: 'visitas1',
        title: 'Ideas y consejos de Tráfico Web',
        description: 'Aprende a atraer visitantes de forma constante con métodos probados.',
        url: 'https://amzn.to/3Flv3QS',
        coverUrl: 'https://i.ibb.co/qMx88zpy/13-ideas-y-consejos-de-trafico-web-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3Flv3QS', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://traficoweb.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/kyY9j', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        title: 'Ideas Maestras de Tráfico Web',
        description: 'Construye sistemas de tráfico que alimenten tus activos digitales.',
        url: 'https://amzn.to/3vjVwNB',
        coverUrl: 'https://i.ibb.co/KjkrJZVk/27-ideas-maestras-de-trafico-web-libro-400.jpg',
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
        title: 'El Poder Del Marketing De Contenidos',
        description: 'Convierte tu contenido en la base principal de tu crecimiento online.',
        url: 'https://amzn.to/47MbpgC',
        coverUrl: 'https://i.ibb.co/hJ7WccPy/18-marketing-de-contenidos-libro-400.jpg',
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
        title: 'Dominando el Arte del Email Marketing',
        description: 'Crea relaciones duraderas y ventas recurrentes con email estratégico.',
        url: 'https://amzn.to/4cbywRd',
        coverUrl: 'https://i.ibb.co/FbxVRfGY/26-dominando-el-arte-del-email-marketing-libro-400.jpg',
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
    title: '🧠 Mentalidad y creación',
    category: 'Mindset',
    intro: 'Desarrollo personal, enfoque creativo y mentalidad estratégica para sostener cualquier proyecto digital.',
    coverUrl: 'https://i.ibb.co/xtbJZf7c/mentalidad-y-creacion-categoria.png',
    books: [
      {
        id: 'vendedor',
        title: 'El Vendedor hipnótico',
        description: 'Mejora tu persuasión conectando emocionalmente con tus clientes.',
        url: 'https://amzn.to/3LZRdvV',
        coverUrl: 'https://i.ibb.co/f593x0C/8-el-vendedor-hipnotico-libro-400.jpg',
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
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://elvendedorhipnotico.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Draft2Digital', 
            url: 'https://books2read.com/u/4A85vk', 
            logo: 'https://i.ibb.co/TDgFD1mx/draft2digital-logo.jpg',
            emoji: '📖',
            cta: 'Ver en Draft2Digital'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/JWv4w', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
            emoji: '💎',
            cta: 'Descarga Directa'
          },
          { 
            platform: 'Lulu', 
            url: 'https://www.lulu.com/es/shop/francisco-gonz%C3%A1lez/el-vendedor-hipn%C3%B3tico/ebook/product-84j9eep.html', 
            logo: 'https://i.ibb.co/nq0QhxZR/lulu-logo.jpg',
            emoji: '📚',
            cta: 'Ver en Lulu'
          },
          { 
            platform: 'Google Play', 
            url: 'https://play.google.com/store/books/details/Francisco_Gonz%C3%A1lez_El_Vendedor_Hipn%C3%B3tico?id=ViOdEQAAQBAJ', 
            logo: 'https://i.ibb.co/snCJXvX/google-play-logo.jpg',
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
        id: 'abundancia',
        title: 'El Arte de Atraer la Abundancia',
        description: 'Despierta tu potencial ilimitado y crea una vida de riqueza, éxito y plenitud total',
        url: 'https://amzn.to/3XCLjVW',
        coverUrl: 'https://i.ibb.co/Jw33pVGT/El-arte-de-atraer-la-abundancia.png',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3XCLjVW', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://abundancia-arte.vercel.app/ ', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/VJNwa', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        id: 'pluma',
        title: 'De la Pluma al Dinero',
        description: 'Transforma tus ideas escritas en productos digitales rentables.',
        url: 'https://amzn.to/3Tt81ir',
        coverUrl: 'https://i.ibb.co/hFkMt4cm/23-de-la-pluma-al-dinero-libro-400.jpg',
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
        title: 'Cómo crear Ebooks (de no ficción)',
        description: 'Diseña ebooks útiles que aporten valor y generen ingresos.',
        url: 'https://amzn.to/3xfCrNa',
        coverUrl: 'https://i.ibb.co/MxcXwpc4/9-como-crear-ebooks-de-no-ficcion-libro-400.jpg',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3xfCrNa', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://comocrearebooksdeno-ficcion.vercel.app', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/DwRge', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
        title: 'Ebook en 24 horas',
        description: 'Cómo escribir un ebook de no ficción y publicarlo en tiempo récord (menos de 24 horas) ¿Te atreves?',
        url: 'https://amzn.to/3xfCrNa',
        coverUrl: 'https://i.ibb.co/TMFmSZxG/ebook-en-24-horas-no-ficcion.png',
        purchaseOptions: [
          { 
            platform: 'Amazon', 
            url: 'https://amzn.to/3xfCrNa', 
            logo: 'https://i.ibb.co/SXqcPJV7/amazon-logo.jpg',
            emoji: '🛒',
            cta: 'Comprar en Amazon'
          },
          { 
            platform: 'Clickbank', 
            url: 'https://ebook24.vercel.app/', 
            logo: 'https://i.ibb.co/7Nz9j8Jv/clickbank-logo.jpg',
            emoji: '⚡',
            cta: 'Oferta Clickbank'
          },
          { 
            platform: 'Payhip', 
            url: 'https://payhip.com/b/8prkL', 
            logo: 'https://i.ibb.co/fdbkG4Qg/payhip-logo.jpg',
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
