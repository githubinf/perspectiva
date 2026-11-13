import React from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import About from '../About.tsx';
import Authority from '../Authority.tsx';
import { Link } from '../../router.tsx';

const AboutView: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Breadcrumbs items={[{ label: 'Sobre la editorial', href: '/sobre-fg-perspectiva/' }]} />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#4db380] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df] inline-block mb-4">
          Nuestra Historia
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#174532] leading-tight mb-6">
          Editorial <span className="italic serif text-[#4db380]">FG Perspectiva</span>
        </h1>
        <p className="text-lg md:text-xl text-[#1b1b1b]/70 font-light leading-relaxed max-w-2xl mx-auto">
          No publicamos teoría ni tácticas pasajeras. Creamos sistemas, métodos probados y perspectivas claras para activos digitales reales.
        </p>
      </div>

      <About />
      <Authority />

      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <Link
          href="/biblioteca/"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#174532] text-white text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#1f513a] transition-all shadow-xl"
        >
          Descubrir todos nuestros libros →
        </Link>
      </div>
    </div>
  );
};

export default AboutView;
