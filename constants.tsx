
import { Book, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Biblioteca', href: '#biblioteca' },
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Sobre la editorial', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const FEATURED_BOOKS: any[] = [
  {
    id: '1',
    title: '📚 Fundamentos digitales',
    category: 'Iniciación',
    intro: 'Para quienes quieren construir su primer activo online con bases sólidas y una estructura que escale.',
    coverUrl: 'https://i.ibb.co/Y4kgyF37/fundamentos-digitales-categoria.png',
    books: [
      {
        title: 'Cómo crear un Blog optimizado',
        description: 'Construye tu primer activo digital desde cero, con estructura y visión a largo plazo.',
        url: 'https://amzn.to/3ZXWB8q',
        coverUrl: 'https://i.ibb.co/q3TTrp45/1-como-crear-un-blog-optimizado-libro-400.jpg'
      },
      {
        title: 'Mi Blog y los Programas de Afiliados',
        description: 'Aprende a convertir contenido en ingresos de forma ordenada and sostenible.',
        url: 'https://amzn.to/3PXiwYW',
        coverUrl: 'https://i.ibb.co/gFByygV3/4-mi-blog-y-los-programas-de-afiliados-libro-400.jpg'
      },
      {
        title: 'Guía Completa de Inbound Marketing',
        description: 'Atrae clientes con contenido estratégico, sin depender de interrupciones.',
        url: 'https://amzn.to/48SDeBV',
        coverUrl: 'https://i.ibb.co/zHr8q3CN/11-guia-inbound-marketing-libro-400.jpg'
      }
    ]
  },
  {
    id: '2',
    title: '💰 Monetización y afiliación',
    category: 'Ingresos',
    intro: 'Estrategias prácticas para transformar tráfico e ideas en ingresos reales y sistemas sostenibles.',
    coverUrl: 'https://i.ibb.co/Kcc6QDRB/monetizacion-y-afiliacion-categoria.png',
    books: [
      {
        title: 'Dominando el marketing de afiliados',
        description: 'Estrategias para generar ingresos recomendando productos.',
        url: 'https://amzn.to/46AasVc',
        coverUrl: 'https://i.ibb.co/848rmyCx/3-marketing-de-afiliados-libro-400.jpg'
      },
      {
        title: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
        description: 'Domina el modelo de Coste Por Acción.',
        url: 'https://marketing-cpa.lovable.app/',
        coverUrl: 'https://i.ibb.co/7dSL7Mc3/21-marketing-cpa-libro-400-2.jpg'
      },
      {
        title: 'Cpa Marketing Fórmula Smartlink',
        description: 'Optimización avanzada de enlaces inteligentes.',
        url: 'https://amzn.to/3PF2oMd',
        coverUrl: 'https://i.ibb.co/fV1pc13f/6-cpa-marketing-smartlink-libro-400.jpg'
      },
      {
        title: 'Dinero con Clickbank en minutos',
        description: 'Venta de infoproductos a escala global.',
        url: 'https://amzn.to/46yludn',
        coverUrl: 'https://i.ibb.co/YBzVsvGZ/2-dinero-con-clickbank-libro-400.jpg'
      },
      {
        title: 'Tips de Marketing para Afiliados',
        description: 'Consejos accionables para maximizar conversiones.',
        url: 'https://amzn.to/405AkFR',
        coverUrl: 'https://i.ibb.co/5hqN1ycg/5-tips-de-marketing-para-afiliados-libro-400.jpg'
      }
    ]
  },
  {
    id: '3',
    title: '🤖 Inteligencia Artificial aplicada',
    category: 'Tecnología',
    intro: 'Cómo integrar IA en tus procesos digitales para crear más rápido, decidir mejor y escalar con menos esfuerzo.',
    coverUrl: 'https://i.ibb.co/mxxgf69/inteligencia-artificial-aplicada-categoria.png',
    books: [
      {
        title: 'Cómo ganar dinero con CHATGPT',
        description: 'Aplica ChatGPT a proyectos reales y crea flujos de ingresos asistidos por IA.',
        url: 'https://amzn.to/3Q13TUi',
        coverUrl: 'https://i.ibb.co/s9kNwj06/12-dinero-con-chatgpt-libro-400.jpg'
      },
      {
        title: 'Desbloquea tu inspiración con ChatGPT',
        description: 'Utiliza la IA como motor creativo para contenidos y productos digitales.',
        url: 'https://amzn.to/3VhmpME',
        coverUrl: 'https://i.ibb.co/qY3WJ4bN/16-chatgpt-para-escritores-libro-400.jpg'
      },
      {
        title: 'Inteligencia Artificial',
        description: 'Comprende los fundamentos de la IA y su impacto en los negocios digitales.',
        url: 'https://amzn.to/3PAxt3y',
        coverUrl: 'https://i.ibb.co/20gchR86/15-inteligencia-artificial-libro-400.jpg'
      },
      {
        title: 'El futuro del marketing (IA)',
        description: 'Adelántate a los cambios del marketing impulsado por inteligencia artificial.',
        url: 'https://amzn.to/400t0eP',
        coverUrl: 'https://i.ibb.co/Kx6WXKQ7/7-marketing-IA-futuro-libro-400.jpg'
      }
    ]
  },
  {
    id: '4',
    title: '🚀 Tráfico, contenidos y crecimiento',
    category: 'Crecimiento',
    intro: 'Métodos probados para atraer visitantes cualificados y convertir contenido en crecimiento constante.',
    coverUrl: 'https://i.ibb.co/MxMz9FM9/trafico-contenidos-y-crecimiento-categoria.png',
    books: [
      {
        title: 'Ideas y consejos de Tráfico Web',
        description: 'Aprende a atraer visitantes de forma constante con métodos probados.',
        url: 'https://amzn.to/3Flv3QS',
        coverUrl: 'https://i.ibb.co/7dKDNLZG/13-ideas-y-consejos-de-trafico-web-libro-400.jpg'
      },
      {
        title: 'Ideas Maestras de Tráfico Web',
        description: 'Construye sistemas de tráfico que alimenten tus activos digitales.',
        url: 'https://amzn.to/3vjVwNB',
        coverUrl: 'https://i.ibb.co/KjkrJZVk/27-ideas-maestras-de-trafico-web-libro-400.jpg'
      },
      {
        title: 'El Poder Del Marketing De Contenidos',
        description: 'Convierte tu contenido en la base principal de tu crecimiento online.',
        url: 'https://amzn.to/47MbpgC',
        coverUrl: 'https://i.ibb.co/hJ7WccPy/18-marketing-de-contenidos-libro-400.jpg'
      },
      {
        title: 'Dominando el Arte del Email Marketing',
        description: 'Crea relaciones duraderas y ventas recurrentes con email estratégico.',
        url: 'https://amzn.to/4cbywRd',
        coverUrl: 'https://i.ibb.co/FbxVRfGY/26-dominando-el-arte-del-email-marketing-libro-400.jpg'
      }
    ]
  },
  {
    id: '5',
    title: '🧠 Mentalidad y creación',
    category: 'Mindset',
    intro: 'Desarrollo personal, enfoque creativo y mentalidad estratégica para sostener cualquier proyecto digital.',
    coverUrl: 'https://i.ibb.co/67MWhJqP/mentalidad-y-creacion-categoria.png',
    books: [
      {
        title: 'El Vendedor hipnótico',
        description: 'Mejora tu persuasión conectando emocionalmente con tus clientes.',
        url: 'https://amzn.to/3LZRdvV',
        coverUrl: 'https://i.ibb.co/20bRD4Gt/8-el-vendedor-hipnotico-libro-400.jpg'
      },
      {
        title: 'El arte de atraer la abundancia',
        description: 'Trabaja tu mentalidad para crear oportunidades desde dentro hacia fuera.',
        url: 'https://amzn.to/3XCLjVW',
        coverUrl: 'https://i.ibb.co/8nLGZsX4/14-el-arte-de-atraer-la-abundancia-ebook-libro-400.jpg'
      },
      {
        title: 'De la Pluma al Dinero',
        description: 'Transforma tus ideas escritas en productos digitales rentables.',
        url: 'https://amzn.to/3Tt81ir',
        coverUrl: 'https://i.ibb.co/hFkMt4cm/23-de-la-pluma-al-dinero-libro-400.jpg'
      },
      {
        title: 'Cómo crear Ebooks (de no ficción)',
        description: 'Diseña ebooks útiles que aporten valor y generen ingresos.',
        url: 'https://amzn.to/3xfCrNa',
        coverUrl: 'https://i.ibb.co/MxcXwpc4/9-como-crear-ebooks-de-no-ficcion-libro-400.jpg'
      },
      {
        title: 'Ebook en 24 horas',
        description: 'Lanza tu primer ebook rápidamente con un proceso simplificado.',
        url: 'https://amzn.to/3TqQl6o',
        coverUrl: 'https://i.ibb.co/60xyxf7V/10-ebook-en-24-horas-libro-400.jpg'
      }
    ]
  }
];
