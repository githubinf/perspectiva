
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ShoppingCart } from 'lucide-react';

interface PurchaseOption {
  platform: string;
  url: string;
  logo?: string;
  emoji?: string;
  cta?: string;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
  purchaseOptions: PurchaseOption[];
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, bookTitle, purchaseOptions }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#174532]/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#dae7df]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#174532] p-6 text-white flex justify-between items-center">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-black text-[#4db380] mb-1">Donde comprar</h3>
              <h2 className="text-xl font-bold serif italic">{bookTitle}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Options List */}
          <div className="p-6 space-y-4">
            {purchaseOptions.map((option, index) => (
              <a
                key={index}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-between p-4 rounded-xl border border-[#dae7df] hover:border-[#4db380] hover:bg-[#dae7df]/10 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center overflow-hidden p-2 border border-[#dae7df]/50">
                    {option.logo ? (
                      <img 
                        src={option.logo} 
                        alt={option.platform} 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <ShoppingCart size={20} className="text-[#174532]" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-[#174532]">{option.platform}</span>
                      <span className="text-lg">{option.emoji || '📖'}</span>
                    </div>
                    <span className="text-[10px] text-[#1b1b1b]/50 uppercase tracking-widest font-bold">
                      {option.cta || 'Comprar ahora'}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#dae7df]/20 flex items-center justify-center group-hover:bg-[#4db380] group-hover:text-white transition-all">
                  <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 bg-[#dae7df]/10 border-t border-[#dae7df] text-center">
            <p className="text-[10px] text-[#1b1b1b]/40 uppercase tracking-widest font-bold">
              Selecciona tu plataforma preferida
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PurchaseModal;
