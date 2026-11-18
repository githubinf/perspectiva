import React, { useEffect, useId, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShoppingCart } from 'lucide-react';
import { PurchaseOption, BookItem } from '../types.ts';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle?: string;
  purchaseOptions?: PurchaseOption[];
  book?: BookItem | null;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, bookTitle, purchaseOptions, book }) => {
  const effectiveTitle = bookTitle || book?.title || 'Ficha del libro';
  const effectiveOptions = purchaseOptions || book?.purchaseOptions || [];
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('modal-open');
      return;
    }

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add('modal-open');

    const focusTimer = window.setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else {
        dialogRef.current?.focus();
      }
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusables = (Array.from(
          dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
        ) as HTMLElement[]).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusables.length === 0) {
          event.preventDefault();
          dialogRef.current.focus();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (!dialogRef.current.contains(active)) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
          return;
        }

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
      const previous = previousFocusRef.current;
      previousFocusRef.current = null;
      if (previous && previous.isConnected && typeof previous.focus === 'function') {
        window.requestAnimationFrame(() => previous.focus());
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Priority order for platforms
  const platformPriority: Record<string, number> = {
    'Amazon': 1,
    'Clickbank': 2,
    'Draft2Digital': 3,
    'Books2Read': 3,
    'Payhip': 4,
    'Lulu': 5
  };

  const sortedOptions = [...effectiveOptions].sort((a, b) => {
    const priorityA = platformPriority[a.platform] || 99;
    const priorityB = platformPriority[b.platform] || 99;
    return priorityA - priorityB;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-0 bg-[#174532]/80 backdrop-blur-sm"
        />

        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          initial={{ scale: 0.96, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 12 }}
          className="relative w-full max-w-sm md:max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#dae7df] flex flex-col max-h-[90vh] focus:outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Sticky */}
          <div className="bg-[#174532] p-5 md:p-6 text-white flex justify-between items-center sticky top-0 z-20 shadow-md">
            <div className="pr-4">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#cde7d8] mb-1 font-sans">
                Dónde comprar
              </p>
              <h2 id={titleId} className="text-lg md:text-xl font-bold font-serif italic leading-tight">
                {effectiveTitle}
              </h2>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 hover:bg-white/15 rounded-full transition-colors flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label={`Cerrar opciones de compra de ${effectiveTitle}`}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Options List - Scrollable */}
          <div className="p-5 md:p-6 space-y-3 md:space-y-4 overflow-y-auto custom-scrollbar">
            {sortedOptions.map((option, index) => (
              <a
                key={index}
                href={option.url}
                target="_blank"
                rel={option.rel || (option.platform.toLowerCase() === 'amazon' ? 'nofollow noopener noreferrer' : 'noopener noreferrer')}
                className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-[#dae7df] hover:border-[#174532]/50 hover:bg-[#dae7df]/15 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174532]"
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white shadow-sm flex items-center justify-center overflow-hidden p-1.5 md:p-2 border border-[#dae7df]/50 flex-shrink-0">
                    {option.logo ? (
                      <img
                        src={option.logo}
                        alt={option.platform}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        width={48}
                        height={48}
                      />
                    ) : (
                      <ShoppingCart size={18} className="text-[#174532]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base font-bold text-[#174532] truncate">{option.platform}</span>
                      <span className="text-base md:text-lg flex-shrink-0" aria-hidden="true">{option.emoji || '📖'}</span>
                    </div>
                    <span className="text-[11px] text-[#1b1b1b]/75 uppercase tracking-wider font-medium block truncate">
                      {option.cta || 'Comprar ahora'}
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#dae7df]/30 text-[#174532] flex items-center justify-center group-hover:bg-[#174532] group-hover:text-white transition-all flex-shrink-0 ml-2">
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 md:p-5 bg-[#dae7df]/15 border-t border-[#dae7df] text-center">
            <p className="text-[11.5px] text-[#1b1b1b]/75 uppercase tracking-wider font-medium">
              Selecciona tu plataforma preferida
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PurchaseModal;
