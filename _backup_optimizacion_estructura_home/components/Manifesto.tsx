
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="pt-12 pb-24 md:pt-20 md:pb-40 bg-[#dae7df]/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-10">
          <h2 className="text-h2-lg font-bold font-serif text-[#174532]">
            No es falta de información. <br />
            <span className="italic text-[#4db380] font-serif">Es falta de perspectiva.</span>
          </h2>
          
          <div className="text-body text-[#1b1b1b]/80 space-y-6 max-w-none">
            <p className="first-letter:text-[44px] md:first-letter:text-[54px] first-letter:font-bold first-letter:font-serif first-letter:text-[#174532] first-letter:mr-3.5 first-letter:float-left first-letter:leading-none">
              Vivimos en un entorno donde acceder a información nunca había sido tan sencillo. Tenemos a nuestro alcance artículos, cursos, herramientas, tutoriales y miles de propuestas sobre cómo crear un negocio, desarrollar una actividad digital o aprovechar las oportunidades de Internet. Sin embargo, disponer de más información no significa necesariamente comprender mejor lo que hacemos ni saber cómo avanzar.
            </p>
            <p>
              El verdadero desafío está en distinguir lo relevante, entender cómo se relacionan los conocimientos y reconocer qué pasos tienen sentido dentro de un proyecto. Las ideas aisladas pueden despertar interés, pero difícilmente construyen algo sólido cuando no existe una visión que permita conectarlas.
            </p>
            <p>
              <span className="text-[#174532] font-semibold">FG Perspectiva nace de esa convicción:</span> el conocimiento adquiere verdadero valor cuando podemos comprenderlo, aplicarlo y relacionarlo con un propósito. Por eso, nuestra propuesta editorial va más allá de reunir información sobre distintas disciplinas. Buscamos ofrecer perspectivas, fundamentos y conocimientos prácticos que ayuden a interpretar el entorno digital y tomar decisiones con mayor criterio.
            </p>
            <p>
              Nuestros libros abordan temas como el marketing, la creación de contenidos, la inteligencia artificial, la monetización digital y el desarrollo de proyectos. Cada disciplina representa una pieza del conocimiento que puede ayudarnos a avanzar. El objetivo es comprender esas piezas, descubrir sus posibilidades y aprender a utilizarlas de forma coherente.
            </p>
            <p>
              No se trata de perseguir cada novedad ni de acumular métodos que terminan olvidados. Se trata de construir una base de conocimiento que permita evolucionar, adaptarse y desarrollar proyectos con una visión que vaya más allá de los resultados inmediatos.
            </p>
            <div className="bg-white p-8 md:p-12 shadow-xl shadow-[#174532]/5 border-t-4 border-[#174532] mt-10">
              <p className="text-h3 italic font-serif font-semibold text-[#174532] leading-relaxed">
                Nuestro enfoque es simple: menos ruido, más claridad. <br />
                Menos inspiración pasajera, más conocimiento aplicable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
