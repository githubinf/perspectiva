import React, { useEffect } from 'react';
import { useRouter } from '../router.tsx';
import { getPageMeta } from '../seo.ts';

export const SeoHead: React.FC = () => {
  const { currentPath } = useRouter();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const meta = getPageMeta(currentPath);

    // Update title
    document.title = meta.title;

    // Update meta description
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.setAttribute('name', 'description');
      document.head.appendChild(descEl);
    }
    descEl.setAttribute('content', meta.description);

    // Update canonical link
    let canonEl = document.querySelector('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement('link');
      canonEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute('href', meta.canonical);

    // Update Open Graph tags
    const updateOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const removeMeta = (selector: string) => {
      const el = document.querySelector(selector);
      if (el) el.remove();
    };

    updateOg('og:title', meta.ogTitle || meta.title);
    updateOg('og:description', meta.ogDescription || meta.description);
    updateOg('og:url', meta.canonical);
    updateOg('og:type', meta.ogType);
    if (meta.ogImage) {
      updateOg('og:image', meta.ogImage);
    }
    if (meta.ogImageAlt) {
      updateOg('og:image:alt', meta.ogImageAlt);
    } else {
      removeMeta('meta[property="og:image:alt"]');
    }
    if (meta.ogLocale) {
      updateOg('og:locale', meta.ogLocale);
    } else {
      removeMeta('meta[property="og:locale"]');
    }

    // Update Twitter tags
    const updateTwitter = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateTwitter('twitter:title', meta.twitterTitle || meta.ogTitle || meta.title);
    updateTwitter('twitter:description', meta.twitterDescription || meta.ogDescription || meta.description);
    const twitterImg = meta.twitterImage || meta.ogImage;
    if (twitterImg) {
      updateTwitter('twitter:image', twitterImg);
    }
    if (meta.twitterImageAlt) {
      updateTwitter('twitter:image:alt', meta.twitterImageAlt);
    } else {
      removeMeta('meta[name="twitter:image:alt"]');
    }

    // Update robots if noindex
    let robotsEl = document.querySelector('meta[name="robots"]');
    if (meta.noindex) {
      if (!robotsEl) {
        robotsEl = document.createElement('meta');
        robotsEl.setAttribute('name', 'robots');
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute('content', 'noindex, nofollow');
    } else if (robotsEl) {
      robotsEl.setAttribute('content', 'index, follow');
    }

    // Update JSON-LD structured data script
    let schemaScript = document.getElementById('schema-org-jsonld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-org-jsonld';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(meta.schema);
  }, [currentPath]);

  return null;
};

export default SeoHead;
