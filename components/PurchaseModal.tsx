
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShoppingCart } from 'lucide-react';
import { PurchaseOption } from '../types.ts';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
  purchaseOptions: PurchaseOption[];
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, bookTitle, purchaseOptions }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Priority order for platforms
  const platformPriority: Record<string, number> = {
    'Amazon': 1,
    'Clickbank': 2,
    'Draft2Digital': 3,
    'Payhip': 4,
    'Lulu': 5
  };

  const sortedOptions = [...purchaseOptions].sort((a, b) => {
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
          className="fixed inset-0 bg-[#174532]/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-sm md:max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#dae7df] flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Sticky */}
          <div className="bg-[#174532] p-5 md:p-6 text-white flex justify-between items-center sticky top-0 z-20 shadow-md">
            <div className="pr-4">
              <h3 className="text-[10px] uppercase tracking-widest font-black text-[#4db380] mb-1">Donde comprar</h3>
              <h2 className="text-lg md:text-xl font-bold serif italic leading-tight">{bookTitle}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
          </div>

          {/* Options List - Scrollable */}
          <div className="p-5 md:p-6 space-y-3 md:space-y-4 overflow-y-auto custom-scrollbar">
            {sortedOptions.map((option, index) => (
              <a
                key={index}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-[#dae7df] hover:border-[#4db380] hover:bg-[#dae7df]/10 transition-all group"
              >
                <div className="flex items-center gap-3 md:gap-4">
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
                      <ShoppingCart size={18} className="text-[#174532]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base font-bold text-[#174532] truncate">{option.platform}</span>
                      <span className="text-base md:text-lg flex-shrink-0">{option.emoji || '📖'}</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] text-[#1b1b1b]/50 uppercase tracking-widest font-bold block truncate">
                      {option.cta || 'Comprar ahora'}
                    </span>
                  </div>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#dae7df]/20 flex items-center justify-center group-hover:bg-[#4db380] group-hover:text-white transition-all flex-shrink-0 ml-2">
                  <ExternalLink size={12} md:size={14} />
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 md:p-5 bg-[#dae7df]/10 border-t border-[#dae7df] text-center">
            <p className="text-[9px] md:text-[10px] text-[#1b1b1b]/40 uppercase tracking-widest font-bold">
              Selecciona tu plataforma preferida
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PurchaseModal;
