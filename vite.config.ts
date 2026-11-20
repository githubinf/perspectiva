import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { CANONICAL_URLS } from './constants.tsx';
import { generateSitemapXml } from './sitemap.ts';

const BASE_URL = 'https://fgperspectiva.vercel.app';

const normalizeRoutePath = (raw: string): string => {
  const clean = (raw.split('?')[0].split('#')[0] || '/').trim();
  if (!clean || clean === '/') return '/';
  const withLeading = clean.startsWith('/') ? clean : `/${clean}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};

const VALID_ROUTE_PATHS = new Set<string>(
  CANONICAL_URLS.map((url) => normalizeRoutePath(url.replace(BASE_URL, '')))
);

const shouldHandleAsUnknownHtmlRoute = (url?: string, method?: string, accept?: string): boolean => {
  if (!url || (method !== 'GET' && method !== 'HEAD')) return false;
  const pathname = url.split('?')[0].split('#')[0] || '/';

  if (
    pathname.startsWith('/@') ||
    pathname.startsWith('/__') ||
    pathname.startsWith('/node_modules/')
  ) {
    return false;
  }

  // Skip explicit file/asset requests (e.g. .tsx, .ts, .css, .png, .xml, .txt, .json)
  const lastSegment = pathname.split('/').filter(Boolean).pop() || '';
  if (lastSegment.includes('.')) {
    return false;
  }

  if (accept && !accept.includes('text/html') && !accept.includes('*/*')) {
    return false;
  }

  return !VALID_ROUTE_PATHS.has(normalizeRoutePath(pathname));
};

function realHttp404Plugin(): Plugin {
  return {
    name: 'real-http-404-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = (req.url || '').split('?')[0].split('#')[0];
        if ((req.method === 'GET' || req.method === 'HEAD') && pathname === '/sitemap.xml') {
          const xml = generateSitemapXml();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(req.method === 'HEAD' ? '' : xml);
          return;
        }

        if (!shouldHandleAsUnknownHtmlRoute(req.url, req.method, req.headers.accept)) {
          return next();
        }

        try {
          const indexPath = path.resolve(__dirname, 'index.html');
          const rawHtml = fs.readFileSync(indexPath, 'utf-8');
          const transformedHtml = await server.transformIndexHtml(req.url || '/404/', rawHtml);
          const notFoundHtml = transformedHtml.replace(
            /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
            '<meta name="robots" content="noindex, nofollow">'
          );

          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(req.method === 'HEAD' ? '' : notFoundHtml);
        } catch (err) {
          next(err as Error);
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url || '').split('?')[0].split('#')[0];
        if ((req.method === 'GET' || req.method === 'HEAD') && pathname === '/sitemap.xml') {
          const distSitemapPath = path.resolve(__dirname, 'dist', 'sitemap.xml');
          const xml = fs.existsSync(distSitemapPath)
            ? fs.readFileSync(distSitemapPath, 'utf-8')
            : generateSitemapXml();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(req.method === 'HEAD' ? '' : xml);
          return;
        }

        if (!shouldHandleAsUnknownHtmlRoute(req.url, req.method, req.headers.accept)) {
          return next();
        }

        const dist404Path = path.resolve(__dirname, 'dist', '404.html');
        if (!fs.existsSync(dist404Path)) {
          return next();
        }

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(req.method === 'HEAD' ? '' : fs.readFileSync(dist404Path, 'utf-8'));
      });
    }
  };
}

export default defineConfig(({ mode }) => {
    const _env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss(), realHttp404Plugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
