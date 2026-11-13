import React from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import { Link } from '../../router.tsx';
import { Compass, BookOpen } from 'lucide-react';

const NotFoundView: React.FC = () => {
  return (
    <div className="pt-28 pb-28 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: 'Página no encontrada' }]} />

        <div className="mt-12 py-16 px-8 bg-[#dae7df]/15 border border-[#dae7df]/60 rounded-2xl max-w-2xl mx-auto">
          <span className="text-6xl mb-6 block">🧭</span>
          <span className="text-xs uppercase tracking-[0.3em] font-black text-[#4db380] mb-2 block">
            Error 404
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#174532] mb-6 leading-tight">
            Página no encontrada
          </h1>
          <p className="text-base md:text-lg text-[#1b1b1b]/70 font-light leading-relaxed mb-10 max-w-md mx-auto">
            La página o recurso que buscas no existe o ha sido reubicada dentro de nuestra nueva estructura editorial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#174532] text-white text-xs uppercase tracking-wider font-bold rounded-sm hover:bg-[#1f513a] transition-all shadow-md"
            >
              <Compass className="w-4 h-4" />
              Ir a la Portada
            </Link>
            <Link
              href="/biblioteca/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-[#174532]/30 text-[#174532] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#dae7df]/30 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Explorar la Biblioteca (23 libros)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundView;
