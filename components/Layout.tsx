
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#4db380]/30">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-[#1b1b1b] text-white/50 py-20 border-t border-[#dae7df]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <h3 className="text-white font-bold mb-8 serif italic text-3xl">FG <span className="text-[#4db380]">Perspectiva</span></h3>
              <p className="max-w-sm text-base leading-relaxed mb-8">
                Editorial digital moderna dedicada a la creación de sistemas y transformación real. 
                Construimos puentes entre la idea y el activo digital.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#4db380] transition-colors cursor-pointer">
                   <span className="text-white font-bold text-xs">X</span>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#4db380] transition-colors cursor-pointer">
                   <span className="text-white font-bold text-xs">In</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
               <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-black mb-6">Navegación</h4>
                  <ul className="space-y-4 text-sm">
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Biblioteca</a></li>
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Sistemas</a></li>
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Sobre nosotros</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-black mb-6">Recursos</h4>
                  <ul className="space-y-4 text-sm">
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Guías Gratuitas</a></li>
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Amazon Store</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white text-[10px] uppercase tracking-widest font-black mb-6">Legal</h4>
                  <ul className="space-y-4 text-sm">
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Privacidad</a></li>
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Términos</a></li>
                    <li><a href="#" className="hover:text-[#4db380] transition-colors">Cookies</a></li>
                  </ul>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold">
            <span>© {new Date().getFullYear()} FG Perspectiva.</span>
            <span className="text-[#4db380]">Sistemas que transforman realidades.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
