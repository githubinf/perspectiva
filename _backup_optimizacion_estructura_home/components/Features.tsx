
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Libros prácticos de conocimiento digital",
      desc: "Una colección de obras dedicadas al marketing, los negocios digitales, la creación de contenidos, la inteligencia artificial y otras disciplinas relacionadas con el desarrollo de proyectos online."
    },
    {
      title: "Conocimientos para construir activos digitales",
      desc: "Enfoques y fundamentos que permiten comprender cómo desarrollar proyectos propios, organizar sus recursos y crear estructuras con posibilidades de crecimiento a largo plazo."
    },
    {
      title: "Marketing, tráfico y contenidos",
      desc: "Métodos y conocimientos aplicados para atraer audiencias, desarrollar una presencia digital y comprender los mecanismos que intervienen en la visibilidad y el crecimiento de un proyecto."
    },
    {
      title: "Inteligencia artificial, productividad y creación",
      desc: "Libros y recursos orientados a explorar nuevas herramientas, mejorar procesos de trabajo y aprovechar las posibilidades de la tecnología en la creación de productos y proyectos digitales."
    },
    {
      title: "Una perspectiva práctica y fundamentada",
      desc: "Conocimientos explicados con un enfoque directo, orientados a comprender los fundamentos, evaluar las oportunidades y tomar decisiones sin depender de fórmulas milagrosas ni promesas de resultados fáciles."
    }
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
              <li key={idx} className="flex items-start gap-6 group">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4db380]/40 flex items-center justify-center text-[#f4b925] text-xs font-semibold mt-0.5 group-hover:bg-[#4db380] group-hover:text-white transition-all duration-300">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-h3 font-semibold text-white group-hover:text-white transition-colors mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body text-white/80 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
