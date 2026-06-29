
import React, { useState, useEffect } from 'react';
import { FEATURED_BOOKS } from '../constants.tsx';
import PurchaseModal from './PurchaseModal.tsx';
import { BookCategory, BookItem } from '../types.ts';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookItemRowProps {
  book: BookItem;
  onBookClick: (e: React.MouseEvent, book: BookItem) => void;
}

const BookItemRow: React.FC<BookItemRowProps> = ({ book, onBookClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (book.id && window.location.hash === `#${book.id}`) {
        setIsExpanded(true);
        setTimeout(() => {
          const element = document.getElementById(book.id!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [book.id]);

  return (
    <div id={book.id} className="group/book flex gap-4 md:gap-6 items-start scroll-mt-24">
      {book.coverUrl && (
        book.purchaseOptions && book.purchaseOptions.length > 0 ? (
          <div className="w-40 md:w-48 flex-shrink-0 shadow-md border border-[#dae7df]/30 overflow-hidden rounded-sm bg-white">
            <img 
              src={book.coverUrl} 
              alt={book.title} 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              width={400}
              height={580}
            />
          </div>
        ) : (
          <a 
            href={book.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-40 md:w-48 flex-shrink-0 shadow-md border border-[#dae7df]/30 overflow-hidden group-hover/book:shadow-xl transition-shadow duration-300 rounded-sm bg-white cursor-pointer"
          >
            <img 
              src={book.coverUrl} 
              alt={book.title} 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              width={400}
              height={580}
            />
          </a>
        )
      )}
      <div className="flex-grow pt-1 min-w-0">
        {book.purchaseOptions && book.purchaseOptions.length > 0 ? (
          <div 
            onClick={(e) => onBookClick(e, book)}
            className="block mb-2 text-lg md:text-xl font-bold text-[#174532] hover:text-[#4db380] transition-colors leading-snug cursor-pointer"
          >
            👉 <span className="text-xs md:text-sm bg-[#4db380]/15 text-[#174532] px-1.5 py-0.5 rounded-sm mr-1.5 font-extrabold inline-block align-middle">[Clic Aquí para comprar]</span>{book.title}
          </div>
        ) : (
          <a 
            href={book.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mb-2 text-lg md:text-xl font-bold text-[#174532] hover:text-[#4db380] transition-colors leading-snug cursor-pointer"
          >
            👉 <span className="text-xs md:text-sm bg-[#4db380]/15 text-[#174532] px-1.5 py-0.5 rounded-sm mr-1.5 font-extrabold inline-block align-middle">[Clic Aquí para comprar]</span>{book.title}
          </a>
        )}
        <p className="text-sm md:text-[15px] text-[#1b1b1b]/50 leading-relaxed font-light italic">
          {book.description}
        </p>

        {book.extraInfo && (
          <div className="mt-2.5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-[#4db380] hover:text-[#174532] transition-colors focus:outline-none cursor-pointer select-none"
            >
              <span>{isExpanded ? '[- Info]' : '[+ Info]'}</span>
              <ChevronDown 
                size={14} 
                className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              />
            </button>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 p-3.5 bg-[#dae7df]/15 border-l-2 border-[#4db380] rounded-r-md text-sm md:text-[15px] text-[#1b1b1b]/80 space-y-3 leading-relaxed font-normal">
                    {book.extraInfo.map((paragraph, index) => {
                      const isListItem = paragraph.startsWith('Seleccionar PLR') || 
                                         paragraph.startsWith('Modificar y') || 
                                         paragraph.startsWith('Diseñar y') || 
                                         paragraph.startsWith('Crear un sistema') ||
                                         paragraph.startsWith('Seleccionar programas') ||
                                         paragraph.startsWith('Integrar enlaces') ||
                                         paragraph.startsWith('Crear artículos') ||
                                         paragraph.startsWith('Medir el rendimiento') ||
                                         paragraph.startsWith('Crear "contenido imán"') ||
                                         paragraph.startsWith('Diseñar un calendario') ||
                                         paragraph.startsWith('Construir una lista') ||
                                         paragraph.startsWith('Automatizar la nutrición') ||
                                         paragraph.startsWith('Medir el ROI') ||
                                         paragraph.startsWith('Entender el ecosistema') ||
                                         paragraph.startsWith('Seleccionar ofertas') ||
                                         paragraph.startsWith('Diseñar embudos') ||
                                         paragraph.startsWith('Medir y optimizar') ||
                                         paragraph.startsWith('Configurar smartlinks') ||
                                         paragraph.startsWith('Optimizar el rendimiento') ||
                                         paragraph.startsWith('Integrar smartlinks') ||
                                         paragraph.startsWith('Analizar datos') ||
                                         paragraph.startsWith('Seleccionar productos ganadores') ||
                                         paragraph.startsWith('Crear contenido que preseleccione') ||
                                         paragraph.startsWith('Combinar tráfico orgánico') ||
                                         paragraph.startsWith('Diversificar tus fuentes de ingresos') ||
                                         paragraph.startsWith('Optimizar el texto') ||
                                         paragraph.startsWith('Mejorar la tasa') ||
                                         paragraph.startsWith('Aumentar la tasa') ||
                                         paragraph.startsWith('Aprovechar la psicología') ||
                                         paragraph.startsWith('Analizar y ajustar') ||
                                         paragraph.startsWith('Crear prompts efectivos') ||
                                         paragraph.startsWith('Generar contenido de valor') ||
                                         paragraph.startsWith('Automatizar tareas repetitivas') ||
                                         paragraph.startsWith('Diseñar flujos de trabajo con IA') ||
                                         paragraph.startsWith('Monetizar el uso de ChatGPT') ||
                                         paragraph.startsWith('Superar el bloqueo') ||
                                         paragraph.startsWith('Crear "briefs creativos"') ||
                                         paragraph.startsWith('Explorar ángulos inesperados') ||
                                         paragraph.startsWith('Combinar la intuición humana') ||
                                         paragraph.startsWith('Mantener la originalidad') ||
                                         paragraph.startsWith('Entender las tendencias clave') ||
                                         paragraph.startsWith('Identificar las habilidades') ||
                                         paragraph.startsWith('Diseñar una estrategia') ||
                                         paragraph.startsWith('Posicionarte como referente') ||
                                         paragraph.startsWith('Diseñar un calendario') ||
                                         paragraph.startsWith('Crear contenido que enganche') ||
                                         paragraph.startsWith('Adaptar el contenido') ||
                                         paragraph.startsWith('Medir el ROI') ||
                                         paragraph.startsWith('Construir una audiencia') ||
                                         paragraph.startsWith('Identificar las fuentes de tráfico') ||
                                         paragraph.startsWith('Aplicar técnicas de SEO') ||
                                         paragraph.startsWith('Crear contenido que atraiga') ||
                                         paragraph.startsWith('Medir y analizar tu tráfico') ||
                                         paragraph.startsWith('Diseñar un sistema de tráfico') ||
                                         paragraph.startsWith('Crear "pilares de contenido"') ||
                                         paragraph.startsWith('Aprovechar el tráfico') ||
                                         paragraph.startsWith('Escalar el tráfico') ||
                                         paragraph.startsWith('Construir una lista') ||
                                         paragraph.startsWith('Escribir emails') ||
                                         paragraph.startsWith('Diseñar secuencias') ||
                                         paragraph.startsWith('Segmentar tu lista') ||
                                         paragraph.startsWith('Medir y optimizar') ||
                                         paragraph.startsWith('Entender la psicología de la decisión') ||
                                         paragraph.startsWith('Utilizar el lenguaje persuasivo') ||
                                         paragraph.startsWith('Crear mensajes de venta') ||
                                         paragraph.startsWith('Transformar objeciones') ||
                                         paragraph.startsWith('Aplicar la persuasión') ||
                                         paragraph.startsWith('Identificar y desbloquear creencias') ||
                                         paragraph.startsWith('Transformar tu relación con el dinero') ||
                                         paragraph.startsWith('Cultivar una mentalidad de crecimiento') ||
                                         paragraph.startsWith('Integrar hábitos diarios de abundancia') ||
                                         paragraph.startsWith('Atraer clientes y oportunidades') ||
                                         paragraph.startsWith('Identificar qué conocimientos o experiencias') ||
                                         paragraph.startsWith('Estructurar un ebook o curso') ||
                                         paragraph.startsWith('Escribir con claridad') ||
                                         paragraph.startsWith('Superar el miedo') ||
                                         paragraph.startsWith('Diseñar productos complementarios') ||
                                         paragraph.startsWith('Validar tu idea antes de escribir') ||
                                         paragraph.startsWith('Estructurar tu ebook para maximizar') ||
                                         paragraph.startsWith('Diseñar una portada profesional') ||
                                         paragraph.startsWith('Darle formato a tu ebook') ||
                                         paragraph.startsWith('Crear materiales complementarios') ||
                                         paragraph.startsWith('Publicar y promocionar tu ebook') ||
                                         paragraph.startsWith('Aplicar un método paso a paso') ||
                                         paragraph.startsWith('Superar el bloqueo del "folio en blanco"') ||
                                         paragraph.startsWith('Estructurar tu ebook en tiempo récord') ||
                                         paragraph.startsWith('Dar formato y publicar') ||
                                         paragraph.startsWith('Mantener la calidad') ||
                                         paragraph.startsWith('Validar tu ebook en el mercado');
                      if (isListItem) {
                        const parts = paragraph.split(':');
                        if (parts.length > 1) {
                          return (
                            <div key={index} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#4db380] before:font-bold">
                              <strong className="text-[#174532]">{parts[0]}:</strong>{parts[1]}
                            </div>
                          );
                        } else {
                          return (
                            <div key={index} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#4db380] before:font-bold">
                              {paragraph}
                            </div>
                          );
                        }
                      }
                      return (
                        <p key={index} className={paragraph.includes('origen de toda') ? "font-medium text-[#174532] italic" : ""}>
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

const Library: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const handleBookClick = (e: React.MouseEvent, book: BookItem) => {
    if (book.purchaseOptions && book.purchaseOptions.length > 0) {
      e.preventDefault();
      setSelectedBook(book);
      setModalOpen(true);
    }
  };

  return (
    <section id="biblioteca" className="pt-12 pb-12 md:pt-20 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-1.5 bg-[#f4b925] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#174532]">Biblioteca <span className="italic serif text-[#4db380]">FG Perspectiva</span></h2>
            <p className="text-[#1b1b1b]/60 text-xl leading-relaxed">
              Todos nuestros libros organizados por rutas claras, para que construyas sistemas reales, no acumules información.
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-[#174532] border-b-4 border-[#f4b925] pb-2 inline-block opacity-80 cursor-default">
            Ver todo el catálogo
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {FEATURED_BOOKS.map((route: BookCategory) => (
            <article 
              key={route.id} 
              className="border-t border-[#dae7df]/40 pt-16 first:border-t-0 first:pt-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Left Column: Route Banner and Details */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#4db380] font-black mb-2 block">
                      RUTA: {route.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#174532] leading-tight mb-4 border-l-2 border-[#f4b925] pl-4">
                      {route.title}
                    </h3>
                    <p className="text-[#1b1b1b]/70 text-sm md:text-base leading-relaxed font-light italic">
                      {route.intro}
                    </p>
                  </div>

                  {route.coverUrl && (
                    <div className="overflow-hidden bg-[#dae7df]/10 relative shadow-sm border border-[#dae7df]/40 transition-all duration-500 hover:shadow-lg rounded-sm">
                      <img 
                        src={route.coverUrl} 
                        alt={route.title}
                        className="w-full h-auto block transition-transform duration-700 hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        width={800}
                        height={450}
                      />
                    </div>
                  )}
                </div>

                {/* Right Column: Books List */}
                <div className="lg:col-span-7 space-y-12 lg:pt-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#174532]/40 font-bold border-b border-[#dae7df]/40 pb-2 mb-6">
                    Libros incluidos en esta ruta
                  </div>
                  <div className="space-y-12">
                    {route.books.map((book: BookItem, idx: number) => (
                      <BookItemRow key={idx} book={book} onBookClick={handleBookClick} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <PurchaseModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        bookTitle={selectedBook?.title || ''}
        purchaseOptions={selectedBook?.purchaseOptions || []}
      />
    </section>
  );
};

export default Library;
