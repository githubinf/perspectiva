import React, { useEffect, useMemo } from 'react';

export interface CategoryIndexItem {
  id: string;
  label: string;
}

interface CategoryIndexProps {
  items: readonly CategoryIndexItem[];
  maxWidthClass?: 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl';
  ariaLabel?: string;
}

let activeCategoryScrollCancel: (() => void) | null = null;

function scrollToCategorySection(
  id: string,
  validIds: Set<string>,
  options?: { moveFocus?: boolean; instant?: boolean }
): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (!validIds.has(id)) return false;

  if (activeCategoryScrollCancel) {
    activeCategoryScrollCancel();
    activeCategoryScrollCancel = null;
  }

  const target = document.getElementById(id);
  if (!target) return false;

  const prefersReducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior: ScrollBehavior =
    options?.instant || prefersReducedMotion ? 'auto' : 'smooth';

  target.scrollIntoView({ behavior, block: 'start' });

  // Guard against offscreen lazy-loaded images shifting layout during smooth scroll
  let cancelled = false;
  let settleTimer: number | null = null;

  const cleanup = () => {
    cancelled = true;
    if (settleTimer !== null) {
      window.clearTimeout(settleTimer);
      settleTimer = null;
    }
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('wheel', onUserInteract);
    window.removeEventListener('touchstart', onUserInteract);
    window.removeEventListener('keydown', onUserKey);
    if (activeCategoryScrollCancel === cleanup) {
      activeCategoryScrollCancel = null;
    }
  };

  const onUserInteract = () => cleanup();
  const onUserKey = (e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      cleanup();
    }
  };

  const verifyAndAlign = () => {
    if (cancelled) return;
    cleanup();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const atBottom = window.scrollY >= maxScroll - 2;
    if (Math.abs(top - 80) > 12 && (!atBottom || top < 70)) {
      el.scrollIntoView({ behavior, block: 'start' });
    }
  };

  const onScroll = () => {
    if (cancelled) return;
    if (settleTimer !== null) window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(verifyAndAlign, 140);
  };

  activeCategoryScrollCancel = cleanup;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('wheel', onUserInteract, { passive: true, once: true });
  window.addEventListener('touchstart', onUserInteract, { passive: true, once: true });
  window.addEventListener('keydown', onUserKey, { passive: true });
  settleTimer = window.setTimeout(verifyAndAlign, 450);

  if (options?.moveFocus) {
    target.focus({ preventScroll: true });
  }

  return true;
}

const CategoryIndex: React.FC<CategoryIndexProps> = ({
  items,
  maxWidthClass = 'max-w-5xl',
  ariaLabel = 'Contenido de esta página',
}) => {
  const validIds = useMemo(() => new Set(items.map((item) => item.id)), [items]);

  // Support direct entry or browser back/forward to a hash belonging to this category
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const alignToCurrentHash = (instant: boolean) => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && validIds.has(hash)) {
        window.requestAnimationFrame(() => {
          scrollToCategorySection(hash, validIds, { instant });
        });
      }
    };

    alignToCurrentHash(false);

    const onHashChange = () => alignToCurrentHash(false);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      if (activeCategoryScrollCancel) {
        activeCategoryScrollCancel();
        activeCategoryScrollCancel = null;
      }
    };
  }, [validIds]);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    // Allow Ctrl/Cmd/Shift/middle-click to open normally
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    const isKeyboardActivation = event.detail === 0;
    const targetHash = `#${id}`;

    if (window.location.hash !== targetHash) {
      const nextUrl = `${window.location.pathname}${window.location.search}${targetHash}`;
      window.history.pushState(null, '', nextUrl);
    }

    scrollToCategorySection(id, validIds, { moveFocus: isKeyboardActivation });
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-[#f7faf8] border-b border-[#174532]/12 py-8 md:py-10">
      <div className={`${maxWidthClass} mx-auto px-6`}>
        <nav
          aria-label={ariaLabel}
          className="bg-white border border-[#174532]/15 rounded-sm p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-6 h-[1px] bg-[#f4b925]" aria-hidden="true"></span>
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1f513a]">
              Índice de lectura
            </span>
          </div>

          <p className="font-serif text-[20px] md:text-[22px] font-bold text-[#174532] leading-snug">
            Contenido de esta página
          </p>
          <p className="text-body-sm text-[#1b1b1b]/75 mt-1 leading-relaxed">
            Accede directamente al apartado que te interesa.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 mt-5 pt-5 border-t border-[#174532]/12">
            {items.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleAnchorClick(e, item.id)}
                  className="group flex items-baseline gap-3 py-2.5 md:py-2 px-2.5 -mx-2.5 rounded-sm min-h-[44px] md:min-h-0 text-[14.5px] leading-snug text-[#1b1b1b]/85 hover:text-[#174532] hover:bg-[#dae7df]/35 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:bg-[#dae7df]/35"
                >
                  <span
                    className="font-mono text-[11.5px] font-semibold text-[#1f513a] group-hover:text-[#174532] shrink-0 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="group-hover:underline underline-offset-4 decoration-[#174532]/45">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default CategoryIndex;
