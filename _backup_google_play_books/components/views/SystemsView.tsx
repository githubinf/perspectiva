import React from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import Systems from '../Systems.tsx';
import { Link } from '../../router.tsx';

const SystemsView: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Breadcrumbs items={[{ label: 'Sistemas Digitales', href: '/sistemas-digitales/' }]} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#4db380] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df] inline-block mb-4">
          Arquitectura Editorial
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#174532] leading-tight mb-4">
          Sistemas <span className="italic serif text-[#4db380]">Digitales</span>
        </h1>
        <p className="text-lg md:text-xl text-[#1b1b1b]/70 font-light leading-relaxed max-w-2xl mx-auto">
          Los libros enseñan las piezas. Aquí vemos cómo se conectan en una arquitectura coherente para generar ingresos y construir activos sostenibles.
        </p>
      </div>

      <Systems />

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <div className="p-10 bg-[#dae7df]/20 border border-[#dae7df]/60 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#174532] mb-4">
            Aprende a construir cada pieza en nuestra Biblioteca
          </h3>
          <p className="text-sm md:text-base text-[#1b1b1b]/70 font-light mb-6">
            Cada libro de la colección FG Perspectiva profundiza en uno de los pilares de esta arquitectura digital.
          </p>
          <Link
            href="/biblioteca/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#174532] text-white text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#1f513a] transition-colors shadow-lg"
          >
            Explorar los 23 libros →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SystemsView;
