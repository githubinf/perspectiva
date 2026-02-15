
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 md:py-40 bg-[#dae7df]/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-10">
          <h2 className="text-3xl md:text-6xl font-bold leading-tight text-[#174532]">
            No es falta de información. <br />
            <span className="italic text-[#4db380] serif">Es falta de perspectiva.</span>
          </h2>
          
          <div className="prose prose-xl text-[#1b1b1b]/80 space-y-8 leading-relaxed max-w-none">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#174532] first-letter:mr-3 first-letter:float-left">
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
            <div className="bg-white p-10 md:p-16 shadow-xl shadow-[#174532]/5 border-t-4 border-[#174532] mt-12">
              <p className="text-xl md:text-2xl italic serif text-[#174532] leading-relaxed">
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
