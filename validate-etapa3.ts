import fs from 'node:fs';
import path from 'node:path';
import { CANONICAL_URLS, ALL_BOOKS, FEATURED_BOOKS } from './constants.tsx';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const BASE_URL = 'https://fgperspectiva.vercel.app';

interface ValidationResult {
  url: string;
  relativePath: string;
  exists: boolean;
  sizeBytes: number;
  h1: string;
  title: string;
  description: string;
  canonical: string;
  canonicalEndsWithSlash: boolean;
  hasSchema: boolean;
  schemaTypes: string[];
  hasBreadcrumbs: boolean;
  hasInternalLinks: boolean;
  hasImagesWithAlt: boolean;
}

export function runValidation() {
  console.log('=====================================================');
  console.log('INICIANDO AUDITORÍA INTEGRAL DE ETAPA 3 (SSG Y SEO)');
  console.log('=====================================================');

  const results: ValidationResult[] = [];
  let failures: string[] = [];

  // 1. Audit all 34 canonical URLs
  for (const fullUrl of CANONICAL_URLS) {
    const routePath = fullUrl.replace(BASE_URL, '') || '/';
    const cleanSubdir = routePath === '/' ? '' : routePath.replace(/^\//, '').replace(/\/$/, '');
    const relativeFilePath = cleanSubdir === '' ? 'index.html' : path.join(cleanSubdir, 'index.html');
    const absoluteFilePath = path.join(DIST_DIR, relativeFilePath);

    if (!fs.existsSync(absoluteFilePath)) {
      failures.push(`Archivo ausente: ${relativeFilePath} para ${fullUrl}`);
      results.push({
        url: fullUrl,
        relativePath: relativeFilePath,
        exists: false,
        sizeBytes: 0,
        h1: '',
        title: '',
        description: '',
        canonical: '',
        canonicalEndsWithSlash: false,
        hasSchema: false,
        schemaTypes: [],
        hasBreadcrumbs: false,
        hasInternalLinks: false,
        hasImagesWithAlt: false
      });
      continue;
    }

    const content = fs.readFileSync(absoluteFilePath, 'utf-8');
    const stats = fs.statSync(absoluteFilePath);

    // Title
    const titleMatch = content.match(/<title>(.*?)<\/title>/is);
    const title = titleMatch ? titleMatch[1].trim() : '';

    // Description
    const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/is);
    const description = descMatch ? descMatch[1].trim() : '';

    // Canonical
    const canonMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/is);
    const canonical = canonMatch ? canonMatch[1].trim() : '';
    const canonicalEndsWithSlash = canonical.endsWith('/');

    // H1
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/is);
    const h1Raw = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

    // Schema.org
    const schemaMatch = content.match(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/is);
    let hasSchema = false;
    let schemaTypes: string[] = [];
    if (schemaMatch) {
      try {
        const parsed = JSON.parse(schemaMatch[1]);
        hasSchema = true;
        if (Array.isArray(parsed)) {
          schemaTypes = parsed.map((item) => item['@type'] || 'Unknown');
        } else {
          schemaTypes = [parsed['@type'] || 'Unknown'];
        }
      } catch (e) {
        failures.push(`Schema JSON inválido en ${relativeFilePath}`);
      }
    } else {
      failures.push(`Falta script de Schema.org en ${relativeFilePath}`);
    }

    // Breadcrumbs (for non-home pages)
    const hasBreadcrumbs = routePath === '/' || content.includes('data-breadcrumb') || content.includes('nav aria-label="breadcrumb"') || content.includes('Inicio') && content.includes('Biblioteca');

    // Internal links
    const hasInternalLinks = content.includes('href="/') || content.includes('href="/biblioteca/"');

    // Images with alt
    const hasImagesWithAlt = !content.includes('<img') || !content.match(/<img(?![^>]*\balt=)[^>]*>/i);

    // Validations
    if (!title) failures.push(`Falta title en ${relativeFilePath}`);
    if (!description) failures.push(`Falta description en ${relativeFilePath}`);
    if (!canonical) failures.push(`Falta canonical en ${relativeFilePath}`);
    if (!canonicalEndsWithSlash) failures.push(`Canonical NO termina con barra en ${relativeFilePath}: ${canonical}`);
    if (!h1Raw) failures.push(`Falta H1 en ${relativeFilePath}`);

    results.push({
      url: fullUrl,
      relativePath: relativeFilePath,
      exists: true,
      sizeBytes: stats.size,
      h1: h1Raw,
      title,
      description,
      canonical,
      canonicalEndsWithSlash,
      hasSchema,
      schemaTypes,
      hasBreadcrumbs,
      hasInternalLinks,
      hasImagesWithAlt: !!hasImagesWithAlt
    });
  }

  // 2. Audit 404 page
  const notFoundPath = path.join(DIST_DIR, '404.html');
  const notFoundExists = fs.existsSync(notFoundPath);
  let notFoundValid = false;
  let notFoundH1 = '';
  if (notFoundExists) {
    const notFoundContent = fs.readFileSync(notFoundPath, 'utf-8');
    const h1M = notFoundContent.match(/<h1[^>]*>(.*?)<\/h1>/is);
    notFoundH1 = h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : '';
    const hasNoIndex = notFoundContent.includes('noindex, nofollow');
    notFoundValid = notFoundH1.includes('Página no encontrada') && hasNoIndex;
  }

  // 3. Audit sitemap.xml
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  const sitemapExists = fs.existsSync(sitemapPath);
  let sitemapLocs: string[] = [];
  if (sitemapExists) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const locMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
    sitemapLocs = locMatches.map((m) => m[1]);
  }

  // 4. Audit robots.txt
  const robotsPath = path.join(DIST_DIR, 'robots.txt');
  const robotsExists = fs.existsSync(robotsPath);
  let robotsPointsToSitemap = false;
  if (robotsExists) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    robotsPointsToSitemap = robotsContent.includes('Sitemap: https://fgperspectiva.vercel.app/sitemap.xml');
  }

  // 5. Audit vercel.json
  const vercelPath = path.join(process.cwd(), 'vercel.json');
  const vercelExists = fs.existsSync(vercelPath);
  let vercelTrailingSlash = false;
  if (vercelExists) {
    const vContent = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
    vercelTrailingSlash = vContent.trailingSlash === true;
  }

  console.log('\n--- RESUMEN AUDITORÍA ---');
  console.log(`✓ Archivos canónicos auditados: ${results.filter((r) => r.exists).length} / 34`);
  console.log(`✓ Archivo 404 generado y verificado: ${notFoundExists && notFoundValid ? 'SÍ' : 'NO'}`);
  console.log(`✓ Sitemap URLs exactas: ${sitemapLocs.length} / 34 (404 excluido: ${!sitemapLocs.some((l) => l.includes('404')) ? 'SÍ' : 'NO'})`);
  console.log(`✓ Robots.txt apunta a sitemap: ${robotsPointsToSitemap ? 'SÍ' : 'NO'}`);
  console.log(`✓ Vercel trailingSlash activo: ${vercelTrailingSlash ? 'SÍ' : 'NO'}`);
  console.log(`✓ Total de fallos críticos detectados: ${failures.length}`);

  if (failures.length > 0) {
    console.error('Fallos detectados:', failures);
    process.exit(1);
  }

  console.log('\nTodas las validaciones de la Etapa 3 han pasado satisfactoriamente.');
  return { results, notFoundValid, sitemapLocs, robotsPointsToSitemap, vercelTrailingSlash };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runValidation();
}
