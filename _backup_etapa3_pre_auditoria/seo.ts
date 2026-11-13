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
const LOGO_URL = 'https://i.ibb.co/JWqxBz0g/android-icon-96x96.png';

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
      title: 'Biblioteca Editorial — Catálogo completo de 23 libros | FG Perspectiva',
      description: 'Explora el catálogo completo de FG Perspectiva: 23 libros organizados en 6 rutas estratégicas sobre blogging, afiliados, CPA, IA y crecimiento personal.',
      canonical: `${BASE_URL}/biblioteca/`,
      ogImage: DEFAULT_IMAGE,
      ogType: 'website',
      h1: 'Biblioteca FG Perspectiva',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Biblioteca FG Perspectiva — Catálogo General',
          description: 'Catálogo editorial completo de 23 libros en 6 rutas estratégicas.',
          url: `${BASE_URL}/biblioteca/`,
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
      title: 'Sistemas Digitales — Arquitectura y Conexión de Activos | FG Perspectiva',
      description: 'Descubre la metodología de diseño de sistemas digitales de FG Perspectiva: cómo conectar tráfico, atención, confianza e ingresos reales.',
      canonical: `${BASE_URL}/sistemas-digitales/`,
      ogImage: DEFAULT_IMAGE,
      ogType: 'website',
      h1: 'Sistemas Digitales',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Sistemas Digitales — FG Perspectiva',
          description: 'Metodología de diseño y arquitectura de activos digitales rentables.',
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
    return {
      path: '/sobre-fg-perspectiva/',
      title: 'Sobre FG Perspectiva — Editorial Digital de Sistemas y Conocimiento Práctico',
      description: 'Conoce la visión y trayectoria de FG Perspectiva: una editorial centrada en el conocimiento práctico, métodos probados y activos sostenibles.',
      canonical: `${BASE_URL}/sobre-fg-perspectiva/`,
      ogImage: DEFAULT_IMAGE,
      ogType: 'website',
      h1: 'Editorial FG Perspectiva',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre FG Perspectiva',
          description: 'Historia, principios y misión de la editorial digital FG Perspectiva.',
          url: `${BASE_URL}/sobre-fg-perspectiva/`,
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

  // 6. Category pages
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

    return {
      path,
      title: `${matchedBook.title} — Libro de FG Perspectiva`,
      description: matchedBook.description,
      canonical: `${BASE_URL}${path}`,
      ogImage: matchedBook.coverUrl,
      ogType: 'book',
      h1: matchedBook.title,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Book',
          name: matchedBook.title,
          headline: matchedBook.subtitle ? `${matchedBook.title} — ${matchedBook.subtitle}` : matchedBook.title,
          description: matchedBook.description,
          image: matchedBook.coverUrl,
          url: `${BASE_URL}${path}`,
          inLanguage: 'es',
          bookFormat: 'https://schema.org/Paperback',
          publisher: {
            '@type': 'Organization',
            name: 'FG Perspectiva',
            url: `${BASE_URL}/`
          },
          author: {
            '@type': 'Organization',
            name: 'FG Perspectiva'
          },
          offers: {
            '@type': 'Offer',
            url: bookOfferUrl,
            availability: matchedBook.isAvailable === false
              ? 'https://schema.org/PreOrder'
              : 'https://schema.org/InStock'
          }
        },
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
