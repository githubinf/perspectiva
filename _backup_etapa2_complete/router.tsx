import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { HISTORICAL_HASH_REDIRECTS, CANONICAL_URLS, ALL_BOOKS, FEATURED_BOOKS } from './constants.tsx';
import { BookCategory, BookItem } from './types.ts';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  matchedCategory?: BookCategory;
  matchedBook?: BookItem;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const normalizePath = (rawPath: string): string => {
  if (!rawPath || rawPath === '/') return '/';
  let clean = rawPath.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (!clean.endsWith('/')) clean = clean + '/';
  return clean;
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && HISTORICAL_HASH_REDIRECTS[hash]) {
      return HISTORICAL_HASH_REDIRECTS[hash];
    }
    return normalizePath(window.location.pathname);
  });

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const targetPath = normalizePath(to);
    if (typeof window !== 'undefined') {
      if (options?.replace) {
        window.history.replaceState({}, '', targetPath);
      } else {
        window.history.pushState({}, '', targetPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(targetPath);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for historical hash redirects on load
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && HISTORICAL_HASH_REDIRECTS[hash]) {
      const redirectTarget = HISTORICAL_HASH_REDIRECTS[hash];
      window.history.replaceState({}, '', redirectTarget);
      setCurrentPath(redirectTarget);
    } else {
      const canonical = normalizePath(window.location.pathname);
      if (window.location.pathname !== canonical && window.location.pathname !== '/') {
        window.history.replaceState({}, '', canonical);
      }
      setCurrentPath(canonical);
    }

    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    const onHashChange = () => {
      const currentHash = window.location.hash.replace(/^#/, '');
      if (currentHash && HISTORICAL_HASH_REDIRECTS[currentHash]) {
        navigate(HISTORICAL_HASH_REDIRECTS[currentHash]);
      }
    };

    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [navigate]);

  // Resolve matching category or book for the current path
  const matchedCategory = FEATURED_BOOKS.find((c) => c.path === currentPath);
  const matchedBook = ALL_BOOKS.find((b) => b.path === currentPath);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, matchedCategory, matchedBook }}>
      {children}
    </RouterContext.Provider>
  );
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, className, children, onClick, ...props }) => {
  const { navigate } = useRouter();

  const isInternal = href.startsWith('/') || href.startsWith('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Don't intercept if modifier key pressed (Ctrl/Cmd click opens in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (isInternal && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
