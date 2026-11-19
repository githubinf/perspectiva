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
        'https://schema.org/Hardcover',
        'https://schema.org/EBook',
        'https://schema.org/AudiobookFormat'
      ],
      workExample: [
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Tapa blanda)',
          bookFormat: 'https://schema.org/Paperback',
          url: 'https://www.amazon.com/dp/B0C9S4VJ4K'
        },
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Tapa dura)',
          bookFormat: 'https://schema.org/Hardcover',
          url: 'https://www.amazon.com/dp/B0D44HTXDV'
        },
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Kindle)',
          bookFormat: 'https://schema.org/EBook',
          url: 'https://www.amazon.com/dp/B0CB73FZ8R'
        },
        {
          '@type': 'Book',
          name: 'El arte de atraer la abundancia (Audiolibro)',
          bookFormat: 'https://schema.org/AudiobookFormat',
          url: 'https://www.amazon.com/dp/B0H6X46DCR'
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

  // 6j. Ficha editorial dedicada: De la Pluma al Dinero
  if (path === '/de-la-pluma-al-dinero/') {
    const plumaBook = ALL_BOOKS.find(
      (b) => b.path === '/de-la-pluma-al-dinero/' || b.slug === 'de-la-pluma-al-dinero'
    );
    const plumaDescription =
      'Descubre cómo plantear un proyecto editorial independiente, desarrollar libros de no-ficción y aprovechar Amazon KDP para construir un catálogo con posibilidades comerciales.';
    const plumaCover =
      plumaBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/23-de-la-pluma-al-dinero-libro-400.jpg';
    const plumaUrl = `${BASE_URL}/de-la-pluma-al-dinero/`;

    const plumaBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'De la Pluma al Dinero',
      alternateName:
        'Si todavía no estás publicando en Kindle esta es tu oportunidad de generar ingresos pasivos. Crea un negocio rentable y recurrente con libros de no-ficción.',
      description: plumaDescription,
      image: plumaCover,
      url: plumaUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook'
      ],
      workExample: [
        {
          '@type': 'Book',
          name: 'De la Pluma al Dinero (Tapa blanda)',
          bookFormat: 'https://schema.org/Paperback',
          url: 'https://www.amazon.com/dp/B0DGTQJTVR'
        },
        {
          '@type': 'Book',
          name: 'De la Pluma al Dinero (Tapa dura)',
          bookFormat: 'https://schema.org/Hardcover',
          url: 'https://www.amazon.com/dp/B0DGTVTVB7'
        },
        {
          '@type': 'Book',
          name: 'De la Pluma al Dinero (Kindle)',
          bookFormat: 'https://schema.org/EBook',
          url: 'https://www.amazon.com/dp/B0DGRJPTLN'
        }
      ]
    };

    return {
      path: '/de-la-pluma-al-dinero/',
      title: 'De la Pluma al Dinero: publicar libros en Amazon KDP | FG Perspectiva',
      description: plumaDescription,
      canonical: plumaUrl,
      ogImage: plumaCover,
      ogType: 'book',
      h1: 'De la Pluma al Dinero',
      schema: [
        plumaBookSchema,
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
              name: 'De la Pluma al Dinero',
              item: plumaUrl
            }
          ]
        }
      ]
    };
  }

  // 6k. Ficha editorial dedicada: Experto en PLR Premium
  if (path === '/experto-en-plr-premium/') {
    const plrBook = ALL_BOOKS.find(
      (b) => b.path === '/experto-en-plr-premium/' || b.slug === 'experto-en-plr-premium'
    );
    const plrDescription =
      'Descubre cómo transformar contenidos PLR, desarrollar infoproductos y conectar inteligencia artificial, plataformas y sistemas digitales para construir un negocio propio.';
    const plrCover =
      plrBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/25-experto-en-plr-producto-400.jpg';
    const plrUrl = `${BASE_URL}/experto-en-plr-premium/`;

    const plrBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Experto en PLR Premium',
      alternateName:
        'El Sistema Paso a Paso para Crear Infoproductos Rentables que venden. Con Herramientas Digitales Actuales.',
      description: plrDescription,
      image: plrCover,
      url: plrUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      }
    };

    return {
      path: '/experto-en-plr-premium/',
      title: 'Experto en PLR Premium: crear productos digitales | FG Perspectiva',
      description: plrDescription,
      canonical: plrUrl,
      ogImage: plrCover,
      ogType: 'book',
      h1: 'Experto en PLR Premium',
      schema: [
        plrBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Experto en PLR Premium',
              item: plrUrl
            }
          ]
        }
      ]
    };
  }

  // 6l. Ficha editorial dedicada: Cómo crear un Blog optimizado
  if (path === '/como-crear-un-blog-optimizado/') {
    const blogBook = ALL_BOOKS.find(
      (b) => b.path === '/como-crear-un-blog-optimizado/' || b.slug === 'como-crear-un-blog-optimizado'
    );
    const blogDescription =
      'Comprende cómo organizar un blog, desarrollar contenidos útiles, mejorar su visibilidad SEO y construir una plataforma digital preparada para evolucionar.';
    const blogCover =
      blogBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/1-como-crear-un-blog-optimizado-libro-400.png';
    const blogUrl = `${BASE_URL}/como-crear-un-blog-optimizado/`;

    const blogBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Cómo crear un Blog optimizado',
      alternateName:
        'El camino hacia el éxito para destacar en el mundo digital + Optimización de motores de búsqueda (SEO)',
      description: blogDescription,
      image: blogCover,
      url: blogUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      }
    };

    return {
      path: '/como-crear-un-blog-optimizado/',
      title: 'Cómo crear un Blog optimizado: SEO y estrategia | FG Perspectiva',
      description: blogDescription,
      canonical: blogUrl,
      ogImage: blogCover,
      ogType: 'book',
      h1: 'Cómo crear un Blog optimizado',
      schema: [
        blogBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Cómo crear un Blog optimizado',
              item: blogUrl
            }
          ]
        }
      ]
    };
  }

  // 6m. Ficha editorial dedicada: Mi Blog y los Programas de Afiliados
  if (path === '/mi-blog-y-los-programas-de-afiliados/') {
    const miblogBook = ALL_BOOKS.find(
      (b) => b.path === '/mi-blog-y-los-programas-de-afiliados/' || b.slug === 'mi-blog-y-los-programas-de-afiliados'
    );
    const miblogDescription =
      'Comprende cómo desarrollar un blog de afiliación, elegir programas, crear recomendaciones útiles y construir relaciones comerciales basadas en la confianza.';
    const miblogCover =
      miblogBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/4-mi-blog-y-los-programas-de-afiliados-libro-400.jpg';
    const miblogUrl = `${BASE_URL}/mi-blog-y-los-programas-de-afiliados/`;

    const miblogBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Mi Blog y los Programas de Afiliados',
      ...(miblogBook?.subtitle ? { alternateName: miblogBook.subtitle } : {}),
      description: miblogDescription,
      image: miblogCover,
      url: miblogUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      }
    };

    return {
      path: '/mi-blog-y-los-programas-de-afiliados/',
      title: 'Mi Blog y los Programas de Afiliados: estrategia | FG Perspectiva',
      description: miblogDescription,
      canonical: miblogUrl,
      ogImage: miblogCover,
      ogType: 'book',
      h1: 'Mi Blog y los Programas de Afiliados',
      schema: [
        miblogBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Mi Blog y los Programas de Afiliados',
              item: miblogUrl
            }
          ]
        }
      ]
    };
  }

  // 6n. Ficha editorial dedicada: Guía Completa de Inbound Marketing
  if (path === '/guia-completa-de-inbound-marketing/') {
    const inboundBook = ALL_BOOKS.find(
      (b) => b.path === '/guia-completa-de-inbound-marketing/' || b.slug === 'guia-completa-de-inbound-marketing'
    );
    const inboundDescription =
      'Comprende cómo organizar una estrategia de inbound marketing para atraer clientes, gestionar contactos, mejorar la comunicación y desarrollar relaciones comerciales.';
    const inboundCover =
      inboundBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/11-guia-inbound-marketing-libro-400.jpg';
    const inboundUrl = `${BASE_URL}/guia-completa-de-inbound-marketing/`;

    const inboundBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Guía Completa de Inbound Marketing',
      alternateName: 'Atrae a tus clientes ideales con esta guía para negocios pequeños',
      description:
        'Una visión estratégica para negocios pequeños sobre cómo conectar la propuesta de valor, los contenidos, el recorrido del cliente, la captación y la experiencia comercial.',
      image: inboundCover,
      url: inboundUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      }
    };

    return {
      path: '/guia-completa-de-inbound-marketing/',
      title: 'Guía Completa de Inbound Marketing: negocios pequeños | FG Perspectiva',
      description: inboundDescription,
      canonical: inboundUrl,
      ogImage: inboundCover,
      ogType: 'book',
      h1: 'Guía Completa de Inbound Marketing',
      schema: [
        inboundBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Guía Completa de Inbound Marketing',
              item: inboundUrl
            }
          ]
        }
      ]
    };
  }

  // 6o. Ficha editorial dedicada: Dominando el Marketing de Afiliados
  if (path === '/dominando-el-marketing-de-afiliados/') {
    const dominandoBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/dominando-el-marketing-de-afiliados/' ||
        b.slug === 'dominando-el-marketing-de-afiliados'
    );
    const dominandoMetaDescription =
      'Comprende cómo organizar un negocio de marketing de afiliados, evaluar programas, gestionar comisiones y construir una actividad digital sostenible.';
    const dominandoSchemaDescription =
      'Una perspectiva estratégica sobre cómo desarrollar una actividad de afiliación con criterio comercial, evaluar programas, gestionar comisiones y convertir las recomendaciones digitales en un negocio organizado.';
    const dominandoCover =
      dominandoBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/3-marketing-de-afiliados-libro-400.jpg';
    const dominandoUrl = `${BASE_URL}/dominando-el-marketing-de-afiliados/`;

    const dominandoBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Dominando el Marketing de Afiliados',
      alternateName:
        'Y cómo construir un negocio rentable desde cero con uno de los mejores sistemas de monetización',
      description: dominandoSchemaDescription,
      image: dominandoCover,
      url: dominandoUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook',
        'https://schema.org/AudiobookFormat'
      ]
    };

    return {
      path: '/dominando-el-marketing-de-afiliados/',
      title: 'Dominando el Marketing de Afiliados: negocio de afiliación | FG Perspectiva',
      description: dominandoMetaDescription,
      canonical: dominandoUrl,
      ogImage: dominandoCover,
      ogType: 'book',
      h1: 'Dominando el Marketing de Afiliados',
      schema: [
        dominandoBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Dominando el Marketing de Afiliados',
              item: dominandoUrl
            }
          ]
        }
      ]
    };
  }

  // 6p. Ficha editorial dedicada: Marketing CPA Para Emprendedores y Profesionales Digitales
  if (path === '/marketing-cpa-para-emprendedores/') {
    const cpaBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/marketing-cpa-para-emprendedores/' ||
        b.slug === 'marketing-cpa-para-emprendedores'
    );
    const cpaMetaDescription =
      'Comprende cómo funciona el marketing CPA, cómo evaluar ofertas, captar tráfico, medir conversiones y optimizar campañas mediante decisiones fundamentadas.';
    const cpaSchemaDescription =
      'Una visión estratégica del marketing CPA como sistema de adquisición medible, donde la relación entre oferta, tráfico, conversión y coste determina las decisiones de una campaña.';
    const cpaCover =
      cpaBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/21-marketing-cpa-libro-400-2.jpg';
    const cpaUrl = `${BASE_URL}/marketing-cpa-para-emprendedores/`;

    const cpaBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
      alternateName:
        'Este manual práctico te guía paso a paso en el mundo del marketing basado en acciones, desde la selección de ofertas hasta la optimización avanzada.',
      description: cpaSchemaDescription,
      image: cpaCover,
      url: cpaUrl,
      inLanguage: 'es',
      genre: 'Ingresos',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      }
    };

    return {
      path: '/marketing-cpa-para-emprendedores/',
      title: 'Marketing CPA: campañas, conversiones y optimización | FG Perspectiva',
      description: cpaMetaDescription,
      canonical: cpaUrl,
      ogImage: cpaCover,
      ogType: 'book',
      h1: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
      schema: [
        cpaBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Marketing CPA Para Emprendedores y Profesionales Digitales',
              item: cpaUrl
            }
          ]
        }
      ]
    };
  }

  // 6q. Ficha editorial dedicada: CPA Marketing Fórmula Smartlink
  if (path === '/cpa-marketing-formula-smartlink/') {
    const smartlinkBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/cpa-marketing-formula-smartlink/' ||
        b.slug === 'cpa-marketing-formula-smartlink'
    );
    const smartlinkMetaDescription =
      'Comprende cómo funcionan los Smartlinks en CPA, organizar pruebas de tráfico, controlar el presupuesto y analizar campañas para tomar mejores decisiones.';
    const smartlinkSchemaDescription =
      'Cómo comprender la lógica de los enlaces inteligentes, organizar pruebas de tráfico y tomar decisiones de campaña sin perder de vista el presupuesto ni la calidad de los resultados.';
    const smartlinkCover =
      smartlinkBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/6-cpa-marketing-smartlink-libro-400.jpg';
    const smartlinkUrl = `${BASE_URL}/cpa-marketing-formula-smartlink/`;

    const smartlinkBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'CPA Marketing Fórmula Smartlink',
      alternateName:
        'Una guía de Marketing para principiantes para ganar dinero con las redes CPA',
      description: smartlinkSchemaDescription,
      image: smartlinkCover,
      url: smartlinkUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook',
        'https://schema.org/AudiobookFormat'
      ]
    };

    return {
      path: '/cpa-marketing-formula-smartlink/',
      title: 'CPA Marketing Fórmula Smartlink: guía CPA | FG Perspectiva',
      description: smartlinkMetaDescription,
      canonical: smartlinkUrl,
      ogImage: smartlinkCover,
      ogType: 'book',
      h1: 'CPA Marketing Fórmula Smartlink',
      schema: [
        smartlinkBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'CPA Marketing Fórmula Smartlink',
              item: smartlinkUrl
            }
          ]
        }
      ]
    };
  }

  // 6r. Ficha editorial dedicada: Dinero con ClickBank
  if (path === '/dinero-con-clickbank/') {
    const clickbankBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/dinero-con-clickbank/' ||
        b.slug === 'dinero-con-clickbank'
    );
    const clickbankMetaDescription =
      'Aprende a evaluar productos de ClickBank, comprender las comisiones, elegir mercados y organizar una estrategia de afiliación basada en contenido y análisis.';
    const clickbankSchemaDescription =
      'Una perspectiva práctica sobre la evaluación de oportunidades comerciales, la relación entre productos y mercados y la construcción de una actividad de afiliación organizada alrededor del ecosistema ClickBank.';
    const clickbankCover =
      clickbankBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/2-dinero-con-clickbank-libro-400.jpg';
    const clickbankUrl = `${BASE_URL}/dinero-con-clickbank/`;

    const clickbankBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Dinero con ClickBank',
      alternateName:
        'Cómo elegir productos rentables, promocionarlos y construir tu primer negocio de afiliados',
      description: clickbankSchemaDescription,
      image: clickbankCover,
      url: clickbankUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook',
        'https://schema.org/AudiobookFormat'
      ]
    };

    return {
      path: '/dinero-con-clickbank/',
      title: 'Dinero con ClickBank: elegir productos de afiliados | FG Perspectiva',
      description: clickbankMetaDescription,
      canonical: clickbankUrl,
      ogImage: clickbankCover,
      ogType: 'book',
      h1: 'Dinero con ClickBank',
      schema: [
        clickbankBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Dinero con ClickBank',
              item: clickbankUrl
            }
          ]
        }
      ]
    };
  }

  // 6s. Ficha editorial dedicada: Tips de Marketing para Afiliados
  if (path === '/tips-de-marketing-para-afiliados/') {
    const tipsBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/tips-de-marketing-para-afiliados/' ||
        b.slug === 'tips-de-marketing-para-afiliados'
    );
    const tipsMetaDescription =
      'Descubre cómo desarrollar una actividad de marketing de afiliados basada en la confianza, la autoridad, las recomendaciones responsables y el crecimiento sostenible.';
    const tipsSchemaDescription =
      'Una perspectiva sobre las decisiones, los hábitos profesionales y los criterios que permiten desarrollar una actividad de afiliación reconocible, responsable y preparada para evolucionar.';
    const tipsCover =
      tipsBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/5-tips-de-marketing-para-afiliados-libro-400.jpg';
    const tipsUrl = `${BASE_URL}/tips-de-marketing-para-afiliados/`;

    const tipsBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Tips de Marketing para Afiliados',
      alternateName:
        'Estrategias éticas, técnicas y sostenibles para construir autoridad y generar ingresos a largo plazo',
      description: tipsSchemaDescription,
      image: tipsCover,
      url: tipsUrl,
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook',
        'https://schema.org/AudiobookFormat'
      ]
    };

    return {
      path: '/tips-de-marketing-para-afiliados/',
      title: 'Tips de Marketing para Afiliados: estrategias sostenibles | FG Perspectiva',
      description: tipsMetaDescription,
      canonical: tipsUrl,
      ogImage: tipsCover,
      ogType: 'book',
      h1: 'Tips de Marketing para Afiliados',
      schema: [
        tipsBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Tips de Marketing para Afiliados',
              item: tipsUrl
            }
          ]
        }
      ]
    };
  }

  // 6t. Ficha editorial dedicada: Cómo ganar dinero con ChatGPT
  if (path === '/como-ganar-dinero-con-chatgpt/') {
    const chatGptBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/como-ganar-dinero-con-chatgpt/' ||
        b.slug === 'como-ganar-dinero-con-chatgpt'
    );
    const chatGptMetaDescription =
      'Descubre cómo utilizar ChatGPT para desarrollar productos digitales, mejorar servicios, organizar procesos y explorar oportunidades de negocio con inteligencia artificial.';
    const chatGptSchemaDescription =
      'Una perspectiva práctica sobre cómo integrar ChatGPT en actividades productivas, desarrollar soluciones digitales, crear nuevas propuestas comerciales y convertir las capacidades de la inteligencia artificial en recursos aplicables a proyectos reales.';
    const chatGptCover =
      chatGptBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/12-dinero-con-chatgpt-libro-400.jpg';
    const chatGptUrl = `${BASE_URL}/como-ganar-dinero-con-chatgpt/`;

    const chatGptBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Cómo ganar dinero con ChatGPT',
      alternateName:
        'y aprovechar al máximo la máquina que está revolucionando el mundo',
      description: chatGptSchemaDescription,
      image: chatGptCover,
      url: chatGptUrl,
      inLanguage: 'es',
      genre: 'Tecnología',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook',
        'https://schema.org/AudiobookFormat'
      ]
    };

    return {
      path: '/como-ganar-dinero-con-chatgpt/',
      title: 'Cómo ganar dinero con ChatGPT: oportunidades digitales | FG Perspectiva',
      description: chatGptMetaDescription,
      canonical: chatGptUrl,
      ogImage: chatGptCover,
      ogType: 'book',
      h1: 'Cómo ganar dinero con ChatGPT',
      schema: [
        chatGptBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Cómo ganar dinero con ChatGPT',
              item: chatGptUrl
            }
          ]
        }
      ]
    };
  }

  // 6u. Ficha editorial dedicada: Desbloquea tu inspiración con ChatGPT
  if (path === '/desbloquea-tu-inspiracion-con-chatgpt/') {
    const inspirationBook = ALL_BOOKS.find(
      (b) =>
        b.path === '/desbloquea-tu-inspiracion-con-chatgpt/' ||
        b.slug === 'desbloquea-tu-inspiracion-con-chatgpt'
    );
    const inspirationMetaDescription =
      'Explora cómo utilizar ChatGPT para estimular la creatividad, desarrollar ideas, superar bloqueos y experimentar con nuevas posibilidades de escritura sin perder tu voz como autor.';
    const inspirationSchemaDescription =
      'Una exploración de la imaginación, el pensamiento creativo y las nuevas posibilidades de escritura que surgen cuando la tecnología se convierte en un interlocutor para nuestras ideas.';
    const inspirationCover =
      inspirationBook?.coverUrl ||
      'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/16-chatgpt-para-escritores-libro-400.jpg';
    const inspirationUrl = `${BASE_URL}/desbloquea-tu-inspiracion-con-chatgpt/`;

    const inspirationBookSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Desbloquea tu inspiración con ChatGPT',
      alternateName: 'Más potencia y creatividad para los autores',
      description: inspirationSchemaDescription,
      image: inspirationCover,
      url: inspirationUrl,
      inLanguage: 'es',
      genre: 'Tecnología',
      author: {
        '@type': 'Person',
        name: 'Francisco González'
      },
      bookFormat: [
        'https://schema.org/Paperback',
        'https://schema.org/Hardcover',
        'https://schema.org/EBook'
      ]
    };

    return {
      path: '/desbloquea-tu-inspiracion-con-chatgpt/',
      title: 'Desbloquea tu inspiración con ChatGPT: creatividad para autores | FG Perspectiva',
      description: inspirationMetaDescription,
      canonical: inspirationUrl,
      ogImage: inspirationCover,
      ogType: 'book',
      h1: 'Desbloquea tu inspiración con ChatGPT',
      schema: [
        inspirationBookSchema,
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
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Desbloquea tu inspiración con ChatGPT',
              item: inspirationUrl
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
