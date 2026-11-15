import React, { useState, useEffect, useRef, useId } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { useRouter } from '../router.tsx';

export interface HomeSectionAnchor {
  id: string;
  href: string;
  label: string;
}

export const HOME_SECTION_ANCHORS: readonly HomeSectionAnchor[] = [
  { id: 'home-inicio', href: '/#home-inicio', label: 'Presentación' },
  { id: 'home-manifiesto', href: '/#home-manifiesto', label: 'Nuestra perspectiva' },
  { id: 'home-propuesta', href: '/#home-propuesta', label: 'Nuestra propuesta' },
  { id: 'home-biblioteca', href: '/#home-biblioteca', label: 'La colección editorial' },
  { id: 'home-sistemas', href: '/#home-sistemas', label: 'Cómo conectamos los conocimientos' },
  { id: 'home-editorial', href: '/#home-editorial', label: 'Quiénes somos' },
];

export const HOME_ANCHOR_IDS = new Set<string>(HOME_SECTION_ANCHORS.map((item) => item.id));

let activeAnchorCancel: (() => void) | null = null;

export function scrollToHomeAnchor(
  id: string,
  options?: { moveFocus?: boolean }
): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (!HOME_ANCHOR_IDS.has(id)) return false;

  if (activeAnchorCancel) {
    activeAnchorCancel();
    activeAnchorCancel = null;
  }

  const prefersReducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

  const target = document.getElementById(id);
  if (!target) return false;

  if (id === 'home-inicio') {
    window.scrollTo({ top: 0, behavior });
  } else {
    target.scrollIntoView({ behavior, block: 'start' });

    // Guard against offscreen lazy-loaded images shifting offsetTop during long smooth scrolls
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
      if (activeAnchorCancel === cleanup) {
        activeAnchorCancel = null;
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

    activeAnchorCancel = cleanup;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onUserInteract, { passive: true, once: true });
    window.addEventListener('touchstart', onUserInteract, { passive: true, once: true });
    window.addEventListener('keydown', onUserKey, { passive: true });
    settleTimer = window.setTimeout(verifyAndAlign, 450);
  }

  if (options?.moveFocus) {
    target.focus({ preventScroll: true });
  }

  return true;
}

interface HomeAnchorMenuProps {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

const HomeAnchorMenu: React.FC<HomeAnchorMenuProps> = ({
  variant = 'desktop',
  onNavigate,
}) => {
  const { currentPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // Close dropdown if route leaves Home
  useEffect(() => {
    if (currentPath !== '/') {
      setIsOpen(false);
    }
  }, [currentPath]);

  // Desktop-specific outside click, focus-out, and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        variant === 'desktop' &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      if (
        variant === 'desktop' &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [isOpen, variant]);

  // Show exclusively on Home (`/`)
  if (currentPath !== '/') {
    return null;
  }

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: HomeSectionAnchor
  ) => {
    // Allow Ctrl/Cmd/Shift/middle-click to open link cleanly in a new tab/window
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

    setIsOpen(false);
    onNavigate?.();

    const targetHash = `#${item.id}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', item.href);
    }

    scrollToHomeAnchor(item.id, { moveFocus: isKeyboardActivation });
  };

  if (variant === 'mobile') {
    return (
      <div ref={containerRef} className="pt-6 mt-6 border-t border-[#174532]/15">
        <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#174532]/65 mb-2.5">
          En esta página
        </span>
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-haspopup="true"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full min-h-[44px] flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-md bg-[#dae7df]/40 hover:bg-[#dae7df]/70 border border-[#174532]/15 text-left text-[15px] font-medium text-[#174532] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
        >
          <span className="inline-flex items-center gap-2">
            <List className="w-4 h-4 text-[#4db380] shrink-0" aria-hidden="true" />
            <span>Recorrer la Home</span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#174532]/75 shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div
            id={panelId}
            aria-label="Secciones de la Home"
            className="mt-2.5 pl-3 border-l-2 border-[#4db380]/50 space-y-1"
          >
            {HOME_SECTION_ANCHORS.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item)}
                className="flex items-baseline gap-2.5 min-h-[44px] py-2.5 px-3 rounded-md text-[15px] leading-snug text-[#1b1b1b]/85 hover:text-[#174532] hover:bg-[#dae7df]/35 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
              >
                <span
                  className="font-mono text-[11px] font-semibold text-[#4db380] shrink-0 tabular-nums"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative flex items-center">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium whitespace-nowrap border transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:ring-offset-2 ${
          isOpen
            ? 'bg-[#dae7df]/75 text-[#174532] border-[#174532]/30'
            : 'bg-[#dae7df]/35 hover:bg-[#dae7df]/65 text-[#174532] border-[#174532]/15'
        }`}
      >
        <List className="w-3.5 h-3.5 text-[#4db380] shrink-0" aria-hidden="true" />
        <span>Recorrer la Home</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#174532]/75 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-label="Secciones de la Home"
          className="absolute left-0 top-full mt-2.5 w-72 lg:w-80 bg-white rounded-lg shadow-xl shadow-[#174532]/10 border border-[#174532]/15 py-2 z-50"
        >
          <p className="px-4 pt-1 pb-2 text-[10.5px] uppercase tracking-wider font-semibold text-[#174532]/60 border-b border-[#dae7df]/60 mb-1">
            En esta página
          </p>
          <ul className="py-0.5">
            {HOME_SECTION_ANCHORS.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item)}
                  className="flex items-baseline gap-3 px-4 py-2.5 text-[13.5px] leading-snug text-[#1b1b1b]/85 hover:text-[#174532] hover:bg-[#dae7df]/30 transition-colors focus:outline-none focus-visible:bg-[#dae7df]/45 focus-visible:text-[#174532] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#174532]"
                >
                  <span
                    className="font-mono text-[11px] font-semibold text-[#4db380] shrink-0 tabular-nums"
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomeAnchorMenu;
