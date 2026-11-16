import { ALL_BOOKS, FEATURED_BOOKS } from './constants.tsx';
import { BookCategory, BookItem } from './types.ts';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: 'website' | 'book' | 'article';
  h1: string;
  noindex?: boolean;
  schema: Record<string, any> | Record<string, any>[];
}

const BASE_URL = 'https://fgperspectiva.vercel.app';
const DEFAULT_IMAGE = 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/producto-estrella-plr.png';
const LOGO_URL = 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/icono1-fgperspectiva.png';

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FG Perspectiva',
  url: `${BASE_URL}/`,
  logo: LOGO_URL,
  description: 'Editorial digital de sistemas prácticos, marketing, afiliados, inteligencia artificial y mentalidad estratégica.',
  sameAs: [
    'https://x.com/Dineroenblog',
    'https://es.pinterest.com/ganardineroblog/',
    'https://afiliados-fgperspectiva.vercel.app/'
  ]
};

export const getPageMeta = (rawPath: string): PageMeta => {
  // Normalize path
  let path = rawPath.split('?')[0].split('#')[0];
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/')) path = path + '/';

  // 1. Home
  if (path === '/') {
    return {
      path: '/',
      title: 'FG Perspectiva — Libros y sistemas prácticos para activos digitales',
      description: 'Editorial digital de sistemas, marketing, afiliados, inteligencia artificial y mentalidad estratégica. Convierte conocimiento en activos digitales duraderos.',
      canonical: `${BASE_URL}/`,
      ogImage: DEFAULT_IMAGE,
      ogType: 'website',
      h1: 'Cambia tu forma de ver. Cambia tus resultados. Construye sistemas digitales que generen ingresos reales.',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'FG Perspectiva',
          url: `${BASE_URL}/`,
          description: 'Editorial digital de sistemas, marketing, afiliados, inteligencia artificial y mentalidad estratégica.',
          publisher: ORGANIZATION_SCHEMA
        },
        ORGANIZATION_SCHEMA
      ]
    };
  }

  // 2. Biblioteca
  if (path === '/biblioteca/') {
    return {
      path: '/biblioteca/',
      title: 'Biblioteca FG Perspectiva | Libros sobre negocios y conocimiento digital',
      description: 'Explora los 23 libros de FG Perspectiva organizados en seis rutas temáticas sobre marketing, afiliación, inteligencia artificial, contenidos y desarrollo digital.',
      canonical: `${BASE_URL}/biblioteca/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Biblioteca FG Perspectiva',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Biblioteca FG Perspectiva',
          description: 'Explora los 23 libros de FG Perspectiva organizados en seis rutas temáticas sobre marketing, afiliación, inteligencia artificial, contenidos y desarrollo digital.',
          url: `${BASE_URL}/biblioteca/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Colección editorial FG Perspectiva',
            numberOfItems: ALL_BOOKS.length,
            itemListElement: ALL_BOOKS.map((book, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Book',
                name: book.title,
                description: book.description,
                url: `${BASE_URL}${book.path || `/${book.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            }
          ]
        }
      ]
    };
  }

  // 3. Sistemas Digitales
  if (path === '/sistemas-digitales/') {
    return {
      path: '/sistemas-digitales/',
      title: 'Sistemas Digitales: arquitectura y desarrollo de proyectos | FG Perspectiva',
      description: 'Comprende cómo diseñar sistemas digitales, conectar activos, contenidos y procesos, y organizar proyectos online mediante una arquitectura coherente.',
      canonical: `${BASE_URL}/sistemas-digitales/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Sistemas Digitales: cómo conectar conocimientos, procesos y activos en una estructura coherente',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Sistemas Digitales: arquitectura y desarrollo de proyectos | FG Perspectiva',
          description: 'Comprende cómo diseñar sistemas digitales, conectar activos, contenidos y procesos, y organizar proyectos online mediante una arquitectura coherente.',
          url: `${BASE_URL}/sistemas-digitales/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Sistemas Digitales',
              item: `${BASE_URL}/sistemas-digitales/`
            }
          ]
        }
      ]
    };
  }

  // 4. Sobre FG Perspectiva
  if (path === '/sobre-fg-perspectiva/') {
    const { '@context': _orgContext, ...organizationEntity } = ORGANIZATION_SCHEMA;
    return {
      path: '/sobre-fg-perspectiva/',
      title: 'Sobre FG Perspectiva | Editorial digital de libros',
      description: 'Conoce FG Perspectiva, su enfoque editorial, la trayectoria de Francisco González y su propuesta de libros y sistemas digitales.',
      canonical: `${BASE_URL}/sobre-fg-perspectiva/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'FG Perspectiva, una editorial digital de libros y conocimiento práctico',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre FG Perspectiva | Editorial digital de libros',
          description: 'Conoce FG Perspectiva, su enfoque editorial, la trayectoria de Francisco González y su propuesta de libros y sistemas digitales.',
          url: `${BASE_URL}/sobre-fg-perspectiva/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            ...organizationEntity,
            founder: {
              '@type': 'Person',
              name: 'Francisco González',
              jobTitle: 'Fundador de FG Perspectiva',
              image: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/avatar_francisco.jpg'
            }
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Sobre la editorial',
              item: `${BASE_URL}/sobre-fg-perspectiva/`
            }
          ]
        }
      ]
    };
  }

  // 5. Contacto
  if (path === '/contacto/') {
    return {
      path: '/contacto/',
      title: 'Contacto Editorial — FG Perspectiva',
      description: 'Ponte en contacto con la editorial FG Perspectiva para consultas sobre libros, sistemas digitales, compras y soporte editorial.',
      canonical: `${BASE_URL}/contacto/`,
      ogImage: DEFAULT_IMAGE,
      ogType: 'website',
      h1: 'Contacto Editorial',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contacto Editorial FG Perspectiva',
          description: 'Canales oficiales de contacto y atención editorial.',
          url: `${BASE_URL}/contacto/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contacto',
              item: `${BASE_URL}/contacto/`
            }
          ]
        }
      ]
    };
  }

  // 6a. Categoría Origen (vista editorial dedicada)
  if (path === '/origen/') {
    const originCategory = FEATURED_BOOKS.find((c) => c.path === '/origen/');
    const originBooks = originCategory?.books || [];
    const originDescription =
      'Descubre cómo aprovechar recursos PLR, transformar conocimientos en infoproductos propios y desarrollar productos digitales con criterio, identidad y visión comercial.';

    return {
      path: '/origen/',
      title: 'Origen: creación de productos digitales y PLR | FG Perspectiva',
      description: originDescription,
      canonical: `${BASE_URL}/origen/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Origen: del conocimiento existente a la creación de productos digitales propios',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Origen: creación de productos digitales y PLR | FG Perspectiva',
          description: originDescription,
          url: `${BASE_URL}/origen/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Libros de la ruta Origen',
            numberOfItems: originBooks.length,
            itemListElement: originBooks.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Book',
                name: b.title,
                description: b.description,
                url: `${BASE_URL}${b.path || `/${b.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Origen',
              item: `${BASE_URL}/origen/`
            }
          ]
        }
      ]
    };
  }

  // 6b. Categoría Iniciación (vista editorial dedicada)
  if (path === '/iniciacion/') {
    const initiationCategory = FEATURED_BOOKS.find((c) => c.path === '/iniciacion/');
    const initiationBooks = initiationCategory?.books || [];
    const initiationDescription =
      'Descubre los fundamentos para crear una presencia digital, desarrollar un blog, atraer audiencia mediante contenidos y comprender las bases del marketing online.';

    return {
      path: '/iniciacion/',
      title: 'Iniciación: cómo construir un proyecto digital desde cero | FG Perspectiva',
      description: initiationDescription,
      canonical: `${BASE_URL}/iniciacion/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Iniciación: construir una presencia digital desde sus fundamentos',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Iniciación: cómo construir un proyecto digital desde cero | FG Perspectiva',
          description: initiationDescription,
          url: `${BASE_URL}/iniciacion/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Libros de la ruta Iniciación',
            numberOfItems: initiationBooks.length,
            itemListElement: initiationBooks.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Book',
                name: b.title,
                description: b.description,
                url: `${BASE_URL}${b.path || `/${b.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Iniciación',
              item: `${BASE_URL}/iniciacion/`
            }
          ]
        }
      ]
    };
  }

  // 6c. Categoría Ingresos (vista editorial dedicada)
  if (path === '/ingresos/') {
    const incomeCategory = FEATURED_BOOKS.find((c) => c.path === '/ingresos/');
    const incomeBooks = incomeCategory?.books || [];
    const incomeDescription =
      'Comprende cómo funcionan el marketing de afiliados, el CPA y otros modelos de monetización digital, desde la selección de ofertas hasta el tráfico y las conversiones.';

    return {
      path: '/ingresos/',
      title: 'Ingresos: marketing de afiliados y monetización digital | FG Perspectiva',
      description: incomeDescription,
      canonical: `${BASE_URL}/ingresos/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Ingresos digitales: cómo funcionan los modelos de monetización online',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Ingresos: marketing de afiliados y monetización digital | FG Perspectiva',
          description: incomeDescription,
          url: `${BASE_URL}/ingresos/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Libros de la ruta Ingresos',
            numberOfItems: incomeBooks.length,
            itemListElement: incomeBooks.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Book',
                name: b.title,
                description: b.description,
                url: `${BASE_URL}${b.path || `/${b.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Ingresos',
              item: `${BASE_URL}/ingresos/`
            }
          ]
        }
      ]
    };
  }

  // 6d. Categoría Tecnología (vista editorial dedicada)
  if (path === '/tecnologia/') {
    const technologyCategory = FEATURED_BOOKS.find((c) => c.path === '/tecnologia/');
    const technologyBooks = technologyCategory?.books || [];
    const technologyDescription =
      'Explora la inteligencia artificial, sus aplicaciones en la creación de contenidos, la productividad digital y la transformación del marketing mediante nuevas tecnologías.';

    return {
      path: '/tecnologia/',
      title: 'Tecnología: inteligencia artificial y aplicaciones digitales | FG Perspectiva',
      description: technologyDescription,
      canonical: `${BASE_URL}/tecnologia/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Tecnología e inteligencia artificial: nuevas formas de crear y trabajar en el entorno digital',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Tecnología: inteligencia artificial y aplicaciones digitales | FG Perspectiva',
          description: technologyDescription,
          url: `${BASE_URL}/tecnologia/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Libros de la ruta Tecnología',
            numberOfItems: technologyBooks.length,
            itemListElement: technologyBooks.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Book',
                name: b.title,
                description: b.description,
                url: `${BASE_URL}${b.path || `/${b.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Tecnología',
              item: `${BASE_URL}/tecnologia/`
            }
          ]
        }
      ]
    };
  }

  // 6e. Categoría Crecimiento (vista editorial dedicada)
  if (path === '/crecimiento/') {
    const growthCategory = FEATURED_BOOKS.find((c) => c.path === '/crecimiento/');
    const growthBooks = growthCategory?.books || [];
    const growthDescription =
      'Descubre cómo desarrollar tráfico web, crear contenidos relevantes, atraer audiencia y utilizar el email marketing para impulsar el crecimiento de proyectos digitales.';

    return {
      path: '/crecimiento/',
      title: 'Crecimiento: tráfico web, contenidos y email marketing | FG Perspectiva',
      description: growthDescription,
      canonical: `${BASE_URL}/crecimiento/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Crecimiento digital: cómo atraer audiencia y desarrollar visibilidad en Internet',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Crecimiento: tráfico web, contenidos y email marketing | FG Perspectiva',
          description: growthDescription,
          url: `${BASE_URL}/crecimiento/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Libros de la ruta Crecimiento',
            numberOfItems: growthBooks.length,
            itemListElement: growthBooks.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Book',
                name: b.title,
                description: b.description,
                url: `${BASE_URL}${b.path || `/${b.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Crecimiento',
              item: `${BASE_URL}/crecimiento/`
            }
          ]
        }
      ]
    };
  }

  // 6f. Categoría Mindset (vista editorial dedicada)
  if (path === '/mindset/') {
    const mindsetCategory = FEATURED_BOOKS.find((c) => c.path === '/mindset/');
    const mindsetBooks = mindsetCategory?.books || [];
    const mindsetDescription =
      'Explora la mentalidad emprendedora, el trabajo independiente, la comunicación comercial y la creación y publicación de libros y productos propios.';

    return {
      path: '/mindset/',
      title: 'Mindset: mentalidad emprendedora y desarrollo de proyectos propios | FG Perspectiva',
      description: mindsetDescription,
      canonical: `${BASE_URL}/mindset/`,
      ogImage: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/fg_perspectiva_%20ideas_que_florecen.png',
      ogType: 'website',
      h1: 'Mindset: mentalidad emprendedora y capacidad para crear proyectos propios',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Mindset: mentalidad emprendedora y desarrollo de proyectos propios | FG Perspectiva',
          description: mindsetDescription,
          url: `${BASE_URL}/mindset/`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Libros de la ruta Mindset',
            numberOfItems: mindsetBooks.length,
            itemListElement: mindsetBooks.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Book',
                name: b.title,
                description: b.description,
                url: `${BASE_URL}${b.path || `/${b.slug}/`}`
              }
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Mindset',
              item: `${BASE_URL}/mindset/`
            }
          ]
        }
      ]
    };
  }

  // 6. Category page (fallback genérico)
  const matchedCategory = FEATURED_BOOKS.find((c) => c.path === path);
  if (matchedCategory) {
    return {
      path,
      title: `Ruta ${matchedCategory.category} — ${matchedCategory.title} | FG Perspectiva`,
      description: matchedCategory.intro,
      canonical: `${BASE_URL}${path}`,
      ogImage: matchedCategory.coverUrl || DEFAULT_IMAGE,
      ogType: 'website',
      h1: matchedCategory.title,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `Ruta ${matchedCategory.category} — ${matchedCategory.title}`,
          description: matchedCategory.intro,
          url: `${BASE_URL}${path}`,
          image: matchedCategory.coverUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: matchedCategory.books.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: b.title,
              url: `${BASE_URL}${b.path || `/${b.slug}/`}`
            }))
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: `Ruta ${matchedCategory.category}`,
              item: `${BASE_URL}${path}`
            }
          ]
        }
      ]
    };
  }

  // 6g. Ficha editorial dedicada: El Manual del Solopreneur Moderno
  if (path === '/el-manual-del-solopreneur-moderno/') {
    const solopreneurDescription =
      'Aprende a organizar un negocio unipersonal, definir una oferta profesional, gestionar clientes y tomar decisiones para trabajar por cuenta propia con mayor claridad.';
    const solopreneurCover =
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/22-solopreneur-libro-600.jpg';
    const solopreneurUrl = `${BASE_URL}/el-manual-del-solopreneur-moderno/`;

    return {
      path: '/el-manual-del-solopreneur-moderno/',
      title: 'El Manual del Solopreneur Moderno: negocio unipersonal | FG Perspectiva',
      description: solopreneurDescription,
      canonical: solopreneurUrl,
      ogImage: solopreneurCover,
      ogType: 'book',
      h1: 'El Manual del Solopreneur Moderno',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Book',
          name: 'El Manual del Solopreneur Moderno',
          alternateName:
            'Cómo crear, organizar y escalar un negocio digital sin empleados ni complicaciones',
          description: solopreneurDescription,
          image: solopreneurCover,
          url: solopreneurUrl,
          author: {
            '@type': 'Person',
            name: 'Francisco González'
          },
          bookFormat: [
            'https://schema.org/Paperback',
            'https://schema.org/EBook',
            'https://schema.org/Hardcover'
          ],
          workExample: [
            {
              '@type': 'Book',
              name: 'El Manual del Solopreneur Moderno (Tapa blanda)',
              bookFormat: 'https://schema.org/Paperback',
              url: 'https://www.amazon.com/dp/B0HKPPV7HH'
            },
            {
              '@type': 'Book',
              name: 'El Manual del Solopreneur Moderno (Kindle)',
              bookFormat: 'https://schema.org/EBook',
              url: 'https://www.amazon.com/dp/B0HKPHYRYX'
            },
            {
              '@type': 'Book',
              name: 'El Manual del Solopreneur Moderno (Tapa dura)',
              bookFormat: 'https://schema.org/Hardcover',
              url: 'https://www.amazon.com/dp/B0HKPZMYJ6'
            }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Mindset',
              item: `${BASE_URL}/mindset/`
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'El Manual del Solopreneur Moderno',
              item: solopreneurUrl
            }
          ]
        }
      ]
    };
  }

  // 6h. Ficha editorial dedicada: El arte de atraer la abundancia
  if (path === '/el-arte-de-atraer-la-abundancia/') {
    const abundanceBook = ALL_BOOKS.find(
      (b) => b.path === '/el-arte-de-atraer-la-abundancia/' || b.slug === 'el-arte-de-atraer-la-abundancia'
    );
    const abundanceDescription =
      'Descubre una perspectiva sobre la mentalidad de abundancia, la prosperidad personal y las decisiones que influyen en nuestra forma de construir una vida plena.';
    const abundanceCover =
      abundanceBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/14-el-arte-de-atraer-la-abundancia-ebook-libro-400.jpg';
    const abundanceUrl = `${BASE_URL}/el-arte-de-atraer-la-abundancia/`;
    const validCatalogOptions = (abundanceBook?.purchaseOptions || []).filter(
      (opt) => opt.url && opt.url !== '#'
    );

    const abundanceBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'El arte de atraer la abundancia',
      alternateName:
        'Despierta tu potencial ilimitado y crea una vida de riqueza, éxito y plenitud total.',
      description: abundanceDescription,
      image: abundanceCover,
      url: abundanceUrl,
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/EBook',
        'https://schema.org/Hardcover'
      ],
      workExample: [
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Tapa blanda)',
          bookFormat: 'https://schema.org/Paperback',
          url: 'https://www.amazon.com/-/es/dp/B0CY211RSP'
        },
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Kindle)',
          bookFormat: 'https://schema.org/EBook',
          url: 'https://www.amazon.com/dp/B0CXZC4XLL'
        },
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Tapa dura)',
          bookFormat: 'https://schema.org/Hardcover',
          url: 'https://www.amazon.com/dp/B0CY1XYJS7'
        }
      ]
    };

    if (validCatalogOptions.length > 0) {
      abundanceBookSchema.offers = validCatalogOptions.map((opt) => ({
        '@type': 'Offer',
        url: opt.url.trim()
      }));
    }

    return {
      path: '/el-arte-de-atraer-la-abundancia/',
      title: 'El arte de atraer la abundancia: mentalidad y prosperidad | FG Perspectiva',
      description: abundanceDescription,
      canonical: abundanceUrl,
      ogImage: abundanceCover,
      ogType: 'book',
      h1: 'El arte de atraer la abundancia',
      schema: [
        abundanceBookSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Mindset',
              item: `${BASE_URL}/mindset/`
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'El arte de atraer la abundancia',
              item: abundanceUrl
            }
          ]
        }
      ]
    };
  }

  // 6i. Ficha editorial dedicada: El Vendedor hipnótico
  if (path === '/el-vendedor-hipnotico/') {
    const vendedorBook = ALL_BOOKS.find(
      (b) => b.path === '/el-vendedor-hipnotico/' || b.slug === 'el-vendedor-hipnotico'
    );
    const vendedorDescription =
      'Descubre cómo mejorar la comunicación comercial, comprender al cliente y presentar propuestas de valor mediante técnicas de venta persuasiva sin presión.';
    const vendedorCover =
      vendedorBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/8-el-vendedor-hipnotico-libro-400.jpg';
    const vendedorUrl = `${BASE_URL}/el-vendedor-hipnotico/`;
    const validCatalogOptions = (vendedorBook?.purchaseOptions || []).filter(
      (opt) => opt.url && opt.url !== '#'
    );

    const vendedorBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'El Vendedor hipnótico',
      alternateName: 'Domina el arte de la seducción emocional para vender sin presionar.',
      description: vendedorDescription,
      image: vendedorCover,
      url: vendedorUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/EBook',
        'https://schema.org/Hardcover',
        'https://schema.org/AudiobookFormat'
      ],
      workExample: [
        {
          '@type': 'Book',
          name: 'El Vendedor hipnótico (Tapa blanda)',
          bookFormat: 'https://schema.org/Paperback',
          url: 'https://www.amazon.com/dp/B0CFZJK3YF'
        },
        {
          '@type': 'Book',
          name: 'El Vendedor hipnótico (Kindle)',
          bookFormat: 'https://schema.org/EBook',
          url: 'https://www.amazon.com/dp/B0CG1ZHVZ6'
        },
        {
          '@type': 'Book',
          name: 'El Vendedor hipnótico (Tapa dura)',
          bookFormat: 'https://schema.org/Hardcover',
          url: 'https://www.amazon.com/dp/B0CZSYKLRZ'
        },
        {
          '@type': 'Audiobook',
          name: 'El Vendedor hipnótico (Audiolibro en Amazon / Audible)',
          bookFormat: 'https://schema.org/AudiobookFormat',
          url: 'https://www.amazon.com/dp/B0H51GRRLJ'
        },
        {
          '@type': 'Book',
          name: 'El Vendedor hipnótico (Ebook en Google Play)',
          bookFormat: 'https://schema.org/EBook',
          url: 'https://play.google.com/store/books/details?id=ViOdEQAAQBAJ'
        },
        {
          '@type': 'Audiobook',
          name: 'El Vendedor hipnótico (Audiolibro en Google Play)',
          bookFormat: 'https://schema.org/AudiobookFormat',
          url: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDqXVcdrM'
        }
      ]
    };

    if (validCatalogOptions.length > 0) {
      vendedorBookSchema.offers = validCatalogOptions.map((opt) => ({
        '@type': 'Offer',
        url: opt.url.trim()
      }));
    }

    return {
      path: '/el-vendedor-hipnotico/',
      title: 'El Vendedor Hipnótico: técnicas de venta persuasiva | FG Perspectiva',
      description: vendedorDescription,
      canonical: vendedorUrl,
      ogImage: vendedorCover,
      ogType: 'book',
      h1: 'El Vendedor hipnótico',
      schema: [
        vendedorBookSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Biblioteca',
              item: `${BASE_URL}/biblioteca/`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Mindset',
              item: `${BASE_URL}/mindset/`
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'El Vendedor hipnótico',
              item: vendedorUrl
            }
          ]
        }
      ]
    };
  }

  // 7. Individual Book pages
  const matchedBook = ALL_BOOKS.find((b) => b.path === path || `/${b.slug}/` === path);
  if (matchedBook) {
    const parentCategory = FEATURED_BOOKS.find(
      (c) => c.slug === matchedBook.categorySlug || c.books.some((b) => b.slug === matchedBook.slug)
    );

    const bookOfferUrl = matchedBook.isAvailable !== false && matchedBook.url && matchedBook.url !== '#'
      ? matchedBook.url
      : `${BASE_URL}${path}`;

    const breadcrumbItems: any[] = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: `${BASE_URL}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Biblioteca',
        item: `${BASE_URL}/biblioteca/`
      }
    ];

    if (parentCategory) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: `Ruta ${parentCategory.category}`,
        item: `${BASE_URL}${parentCategory.path || `/${parentCategory.slug}/`}`
      });
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 4,
        name: matchedBook.title,
        item: `${BASE_URL}${path}`
      });
    } else {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: matchedBook.title,
        item: `${BASE_URL}${path}`
      });
    }

    const bookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: matchedBook.title,
      headline: matchedBook.subtitle ? `${matchedBook.title} — ${matchedBook.subtitle}` : matchedBook.title,
      description: matchedBook.description,
      image: matchedBook.coverUrl,
      url: `${BASE_URL}${path}`,
      inLanguage: 'es',
      publisher: {
        '@type': 'Organization',
        name: 'FG Perspectiva',
        url: `${BASE_URL}/`
      },
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      }
    };

    // Assign bookFormat only if a verified edition exists and is not explicitly omitted
    if (matchedBook.isAvailable !== false && matchedBook.bookFormat !== null && matchedBook.slug !== 'experto-en-plr-premium') {
      if (matchedBook.bookFormat) {
        bookSchema.bookFormat = matchedBook.bookFormat;
      } else {
        const hasAmazon = matchedBook.purchaseOptions?.some((opt) => opt.platform.toLowerCase() === 'amazon') ||
          (matchedBook.url && (matchedBook.url.includes('amazon') || matchedBook.url.includes('amzn.to')));
        if (hasAmazon) {
          bookSchema.bookFormat = 'https://schema.org/Paperback';
        } else {
          bookSchema.bookFormat = 'https://schema.org/EBook';
        }
      }
    }

    // Only include offers when there is an authentic, verified commercial offer
    if (matchedBook.isAvailable !== false && matchedBook.purchaseOptions && matchedBook.purchaseOptions.length > 0) {
      const validOptions = matchedBook.purchaseOptions.filter((opt) => opt.url && opt.url !== '#');
      if (validOptions.length === 1) {
        const offer: Record<string, any> = {
          '@type': 'Offer',
          url: validOptions[0].url
        };
        if ((validOptions[0] as any).availability) {
          offer.availability = (validOptions[0] as any).availability;
        }
        bookSchema.offers = offer;
      } else if (validOptions.length > 1) {
        bookSchema.offers = validOptions.map((opt) => {
          const offer: Record<string, any> = {
            '@type': 'Offer',
            url: opt.url
          };
          if ((opt as any).availability) {
            offer.availability = (opt as any).availability;
          }
          return offer;
        });
      }
    } else if (matchedBook.isAvailable !== false && matchedBook.url && matchedBook.url !== '#') {
      bookSchema.offers = {
        '@type': 'Offer',
        url: matchedBook.url
      };
    }

    return {
      path,
      title: matchedBook.metaTitle || `${matchedBook.title} — Libro de FG Perspectiva`,
      description: matchedBook.metaDescription || matchedBook.description,
      canonical: `${BASE_URL}${path}`,
      ogImage: matchedBook.coverUrl,
      ogType: 'book',
      h1: matchedBook.title,
      schema: [
        bookSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems
        }
      ]
    };
  }

  // 8. 404 / NotFound
  return {
    path,
    title: 'Página no encontrada (404) | FG Perspectiva',
    description: 'La página solicitada no existe o ha sido reubicada dentro de la biblioteca de FG Perspectiva.',
    canonical: `${BASE_URL}${path}`,
    ogImage: DEFAULT_IMAGE,
    ogType: 'website',
    h1: 'Página no encontrada',
    noindex: true,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Página no encontrada (404)',
      url: `${BASE_URL}${path}`
    }
  };
};
