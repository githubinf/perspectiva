
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
              Vivimos rodeados de contenido, cursos y promesas rápidas. Sin embargo, la mayoría de personas sigue estancada 
              porque nadie les enseña a construir sistemas, solo tácticas sueltas que caducan al mes siguiente.
            </p>
            <p>
              <span className="text-[#174532] font-semibold">FG Perspectiva</span> nace para cambiar eso. No somos una tienda de libros al uso; somos una plataforma de pensamiento 
              estructurado. Creemos que el verdadero poder reside en entender las leyes que rigen los activos digitales, no en 
              el último "hack" de moda.
            </p>
            <p>
              Creamos libros que enseñan estructura, procesos y visión a largo plazo. Cada título está diseñado para 
              ayudarte a comprender el <span className="underline decoration-[#f4b925] decoration-2 underline-offset-4">“por qué”</span>, el <span className="underline decoration-[#f4b925] decoration-2 underline-offset-4">“cómo”</span> 
              y el <span className="underline decoration-[#f4b925] decoration-2 underline-offset-4">“en qué orden”</span>.
            </p>
            <div className="bg-white p-8 md:p-12 shadow-xl shadow-[#174532]/5 border-t-4 border-[#174532] mt-10">
              <p className="text-h3 italic font-serif text-[#174532] leading-relaxed">
                "Nuestro enfoque es simple: menos ruido, más claridad. <br />
                Menos inspiración pasajera, más resultados sostenibles."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
