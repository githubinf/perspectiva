
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.tsx';
import { Link } from '../router.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-[#dae7df]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0 relative z-50 group">
          <img
            src="https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/icono1-fgperspectiva.png"
            alt="FG Perspectiva - Inicio"
            className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-[#1b1b1b]/80 hover:text-[#174532] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/biblioteca/" 
            className="bg-[#174532] text-white px-5 py-2 text-[13.5px] font-semibold hover:bg-[#1f513a] transition-all shadow-md shadow-[#174532]/10 rounded-md"
          >
            Explorar
          </Link>
        </nav>

        <button 
          className="md:hidden text-[#174532] p-2 relative z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col h-full p-8 pt-28" onClick={(e) => e.stopPropagation()}>
          <div className="space-y-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="block text-[19px] font-medium text-[#174532] hover:text-[#4db380] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <Link 
              href="/biblioteca/" 
              className="block w-full text-center bg-[#174532] text-white py-3.5 text-[14px] font-semibold rounded-md shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
