import React from 'react';

interface BookPurchaseCTAProps {
  targetId?: string;
  className?: string;
}

/**
 * Reusable final purchase CTA for book detail pages.
 * Navigates via an internal HTML anchor directly to the top purchase options block.
 */
const BookPurchaseCTA: React.FC<BookPurchaseCTAProps> = ({
  targetId = 'purchase-options',
  className = ''
}) => {
  return (
    <div className={`mt-14 mb-8 flex justify-center items-center w-full ${className}`}>
      <a
        href={`#${targetId}`}
        className="inline-flex items-center justify-center px-10 py-4 text-base md:text-lg font-semibold text-white bg-[#174532] hover:bg-[#1f513a] active:bg-[#123627] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center tracking-wide focus:outline-none focus:ring-2 focus:ring-[#4db380] focus:ring-offset-2"
        aria-label="Volver arriba a las opciones de compra del libro"
      >
        Comprar ahora
      </a>
    </div>
  );
};

export default BookPurchaseCTA;
