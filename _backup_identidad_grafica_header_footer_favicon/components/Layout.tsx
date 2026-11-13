
import React from 'react';
import Header from './Header.tsx';
import { Link } from '../router.tsx';

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
              <h3 className="text-white font-bold mb-6 font-serif italic text-2xl md:text-3xl">FG <span className="text-[#4db380]">Perspectiva</span></h3>
              <p className="max-w-sm text-[13.5px] leading-relaxed mb-8 text-slate-300">
                Editorial digital moderna dedicada a la creación de sistemas y transformación real. 
                Construimos puentes entre la idea y el activo digital.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://x.com/Dineroenblog" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#4db380] transition-colors cursor-pointer"
                >
                   <span className="text-white font-bold text-xs">X</span>
                </a>
                <a 
                  href="https://es.pinterest.com/ganardineroblog/" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#4db380] transition-colors cursor-pointer"
                >
                   <span className="text-white font-bold text-xs">P</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
               <div>
                  <h4 className="text-[#4db380] text-[14px] md:text-[14.5px] uppercase tracking-[0.05em] font-semibold mb-5 block">Navegación</h4>
                  <ul className="space-y-3 text-[14px]">
                    <li><Link href="/biblioteca/" className="text-slate-300 hover:text-white transition-colors py-0.5 block">Biblioteca</Link></li>
                    <li><Link href="/sistemas-digitales/" className="text-slate-300 hover:text-white transition-colors py-0.5 block">Sistemas</Link></li>
                    <li><Link href="/sobre-fg-perspectiva/" className="text-slate-300 hover:text-white transition-colors py-0.5 block">Sobre nosotros</Link></li>
                    <li><Link href="/contacto/" className="text-slate-300 hover:text-white transition-colors py-0.5 block">Contacto</Link></li>
                    <li><a href="https://despertarindomable.blogspot.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-300 hover:text-white transition-colors py-0.5 block">Blog</a></li>
                    <li><a href="https://afiliados-fgperspectiva.vercel.app/" target="_blank" rel="noopener noreferrer nofollow" className="text-slate-300 hover:text-white transition-colors py-0.5 block">Afiliados</a></li>
                  </ul>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-white/10 text-[11.5px] md:text-[12px] uppercase tracking-wider text-slate-400 font-medium">
            <span>© {new Date().getFullYear()} FG Perspectiva.</span>
            <span className="text-[#4db380]">Sistemas que transforman realidades.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
