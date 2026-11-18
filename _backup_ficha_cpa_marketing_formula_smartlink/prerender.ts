import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App.tsx';
import { CANONICAL_URLS, ALL_BOOKS, FEATURED_BOOKS } from './constants.tsx';
import { getPageMeta, PageMeta } from './seo.ts';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_FILE = path.join(DIST_DIR, 'index.html');
const BASE_URL = 'https://fgperspectiva.vercel.app';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectMetaAndContent(templateHtml: string, appHtml: string, meta: PageMeta): string {
  let html = templateHtml;

  // 1. Inject Title
  html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(meta.title)}</title>`);

  // 2. Inject Meta Description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(meta.description)}">`
    );
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(meta.description)}">\n</head>`);
  }

  // 3. Inject Canonical URL
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${meta.canonical}">`
    );
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${meta.canonical}">\n</head>`);
  }

  // 4. Inject Robots
  const robotsContent = meta.noindex ? 'noindex, nofollow' : 'index, follow';
  if (html.includes('<meta name="robots"')) {
    html = html.replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="robots" content="${robotsContent}">`
    );
  } else {
    html = html.replace('</head>', `  <meta name="robots" content="${robotsContent}">\n</head>`);
  }

  // 5. Inject Open Graph Tags
  const ogTags = [
    `<meta property="og:type" content="${meta.ogType}">`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}">`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
    `<meta property="og:url" content="${meta.canonical}">`,
    `<meta property="og:site_name" content="FG Perspectiva">`,
    meta.ogImage ? `<meta property="og:image" content="${meta.ogImage}">` : ''
  ].filter(Boolean).join('\n  ');

  // Clean existing og tags to avoid duplicates
  html = html.replace(/<meta\s+property="og:[^"]+"\s+content="[^"]*"\s*\/?>\n?/gi, '');
  html = html.replace('</head>', `  ${ogTags}\n</head>`);

  // 6. Inject Twitter Tags
  const twitterTags = [
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`,
    meta.ogImage ? `<meta name="twitter:image" content="${meta.ogImage}">` : ''
  ].filter(Boolean).join('\n  ');

  html = html.replace(/<meta\s+name="twitter:[^"]+"\s+content="[^"]*"\s*\/?>\n?/gi, '');
  html = html.replace('</head>', `  ${twitterTags}\n</head>`);

  // 7. Inject Schema.org JSON-LD
  const schemaJson = JSON.stringify(meta.schema, null, 2);
  const schemaTag = `<script type="application/ld+json" id="schema-org-jsonld">\n${schemaJson}\n  </script>`;
  html = html.replace(/<script[^>]*id="schema-org-jsonld"[^>]*>[\s\S]*?<\/script>/i, '');
  html = html.replace('</head>', `  ${schemaTag}\n</head>`);

  // 8. Inject Server Rendered App Markup into root
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${appHtml}</div>`
  );

  return html;
}

export async function prerender() {
  console.log('--- Iniciando Prerenderizado Estático SSG (Etapa 3) ---');

  if (!fs.existsSync(TEMPLATE_FILE)) {
    throw new Error(`No se encontró la plantilla de build en ${TEMPLATE_FILE}. Ejecuta 'vite build' primero.`);
  }

  const rawTemplate = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

  // Convert full CANONICAL_URLS to path list
  const canonicalPaths = CANONICAL_URLS.map((url) => {
    let p = url.replace(BASE_URL, '');
    if (!p.startsWith('/')) p = '/' + p;
    if (!p.endsWith('/')) p = p + '/';
    return p;
  });

  // Exactly 34 canonical paths
  console.log(`Total URLs canónicas a prerenderizar: ${canonicalPaths.length}`);

  const renderedFilesInventory: Array<{
    path: string;
    targetFile: string;
    title: string;
    h1: string;
    canonical: string;
    sizeKb: number;
  }> = [];

  // Render 34 canonical URLs
  for (const routePath of canonicalPaths) {
    const meta = getPageMeta(routePath);
    const appHtml = ReactDOMServer.renderToString(
      React.createElement(App, { initialPath: routePath })
    );

    const fullPageHtml = injectMetaAndContent(rawTemplate, appHtml, meta);

    let targetDir = DIST_DIR;
    let targetFilePath = path.join(DIST_DIR, 'index.html');

    if (routePath !== '/') {
      const cleanSubdir = routePath.replace(/^\//, '').replace(/\/$/, '');
      targetDir = path.join(DIST_DIR, cleanSubdir);
      fs.mkdirSync(targetDir, { recursive: true });
      targetFilePath = path.join(targetDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, fullPageHtml, 'utf-8');
    const stats = fs.statSync(targetFilePath);

    renderedFilesInventory.push({
      path: routePath,
      targetFile: path.relative(DIST_DIR, targetFilePath),
      title: meta.title,
      h1: meta.h1,
      canonical: meta.canonical,
      sizeKb: Math.round((stats.size / 1024) * 10) / 10
    });

    console.log(`  ✓ Prerenderizado: ${routePath} -> dist/${path.relative(DIST_DIR, targetFilePath)} (${renderedFilesInventory[renderedFilesInventory.length - 1].sizeKb} KB)`);
  }

  // Also Prerender 404 page (dist/404.html)
  const notFoundMeta = getPageMeta('/404/');
  const notFoundAppHtml = ReactDOMServer.renderToString(
    React.createElement(App, { initialPath: '/404/' })
  );
  const notFoundHtml = injectMetaAndContent(rawTemplate, notFoundAppHtml, notFoundMeta);
  const target404Path = path.join(DIST_DIR, '404.html');
  fs.writeFileSync(target404Path, notFoundHtml, 'utf-8');
  console.log(`  ✓ Generado dist/404.html para gestión de errores HTTP 404`);

  // Generate sitemap.xml with exactly the 34 canonical URLs (NO 404 included)
  // Reflects the real modification date of the catalog data, not artificially generated per build
  const constantsStat = fs.statSync(path.resolve(process.cwd(), 'constants.tsx'));
  const realLastmod = constantsStat.mtime.toISOString().split('T')[0];

  const sitemapEntries = canonicalPaths.map((p) => {
    let priority = '0.8';
    let changefreq = 'weekly';
    if (p === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (p === '/biblioteca/') {
      priority = '0.9';
      changefreq = 'daily';
    } else if (['/sistemas-digitales/', '/sobre-fg-perspectiva/', '/contacto/'].includes(p)) {
      priority = '0.7';
      changefreq = 'monthly';
    }

    return `  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${realLastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`  ✓ Generado dist/sitemap.xml con exactamente ${canonicalPaths.length} URLs canónicas`);

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  const robotsPath = path.join(DIST_DIR, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');
  console.log(`  ✓ Generado dist/robots.txt apuntando al sitemap oficial`);

  // Generate vercel.json
  const vercelConfig = {
    trailingSlash: true
  };
  fs.writeFileSync(path.join(DIST_DIR, 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf-8');
  fs.writeFileSync(path.resolve(process.cwd(), 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf-8');
  console.log(`  ✓ Configurado vercel.json con "trailingSlash": true`);

  console.log('--- Prerenderizado completado con éxito ---');
  return renderedFilesInventory;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prerender().catch((err) => {
    console.error('Error en prerender:', err);
    process.exit(1);
  });
}
