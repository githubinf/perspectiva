
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
    <section className="pt-12 pb-24 bg-[#1f513a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4db380]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11.5px] uppercase tracking-wider text-[#4db380] font-semibold mb-4 block">La Propuesta</span>
          <h2 className="text-h2-lg font-bold font-serif text-white">Qué encontrarás aquí</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-6 group">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4db380]/40 flex items-center justify-center text-[#f4b925] text-xs font-semibold group-hover:bg-[#4db380] group-hover:text-white transition-all duration-300">
                  0{idx + 1}
                </span>
                <span className="text-h3 font-normal text-white/90 group-hover:text-white transition-colors">
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
