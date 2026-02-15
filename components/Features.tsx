
import React from 'react';

const Features: React.FC = () => {
  const features = [
    "Libros prácticos de marketing digital",
    "Sistemas paso a paso para crear activos online",
    "Métodos aplicados de tráfico y contenidos",
    "Guías sobre IA, productividad y desarrollo personal",
    "Estrategias pensadas para personas reales, no gurús"
  ];

  return (
    <section className="py-24 bg-[#1f513a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4db380]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#4db380] font-bold mb-6">La Propuesta</h3>
          <p className="text-3xl md:text-4xl font-light serif italic">Qué encontrarás aquí</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-10">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-8 group">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4db380]/30 flex items-center justify-center text-[#f4b925] text-xs font-bold group-hover:bg-[#4db380] group-hover:text-white transition-all duration-300">
                  0{idx + 1}
                </span>
                <span className="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors tracking-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
