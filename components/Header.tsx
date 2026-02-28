
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.tsx';

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
        <a href="/" className="text-xl md:text-2xl font-bold tracking-tight serif italic group flex items-center gap-2">
          <span className="text-[#174532]">FG</span>
          <span className="text-[#1b1b1b]/40 group-hover:text-[#174532] transition-colors duration-300">Perspectiva</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#1b1b1b]/70 hover:text-[#174532] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#biblioteca" 
            className="bg-[#174532] text-white px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#1f513a] transition-all shadow-lg shadow-[#174532]/10 rounded-sm"
          >
            Explorar
          </a>
        </nav>

        <button 
          className="md:hidden text-[#174532] p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-10 pt-32">
          <div className="space-y-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="block text-2xl font-bold text-[#174532] serif italic"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <a 
              href="#biblioteca" 
              className="block w-full text-center bg-[#174532] text-white py-5 text-xs uppercase tracking-[0.3em] font-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explorar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
