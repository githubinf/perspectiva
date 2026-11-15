import React, { useEffect, useRef, useState } from 'react';

const SCROLL_THRESHOLD_PX = 400;

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateVisibility = () => {
      const shouldShow = window.scrollY > SCROLL_THRESHOLD_PX;
      if (isVisibleRef.current !== shouldShow) {
        isVisibleRef.current = shouldShow;
        setIsVisible(shouldShow);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Volver arriba"
      title="Volver arriba"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed z-[35] bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] md:right-[calc(1.5rem+env(safe-area-inset-right,0px))] w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#174532] text-white border border-white/20 shadow-md shadow-[#174532]/20 hover:bg-[#1f513a] hover:shadow-lg hover:shadow-[#174532]/25 active:bg-[#123829] flex items-center justify-center transition-all duration-200 ease-out motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4b925] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto visible cursor-pointer'
          : 'opacity-0 translate-y-2 pointer-events-none invisible'
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
