
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
    <div id={book.id} className="group/book flex flex-col items-center text-center w-full bg-white border border-[#dae7df]/35 hover:border-[#4db380]/40 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24">
      {book.coverUrl && (
        book.purchaseOptions && book.purchaseOptions.length > 0 ? (
          <div 
            onClick={(e) => onBookClick(e, book)}
            className="w-36 md:w-44 flex-shrink-0 shadow-md border border-[#dae7df]/30 overflow-hidden rounded-sm bg-white mb-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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
          </div>
        ) : (
          <a 
            href={book.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-36 md:w-44 flex-shrink-0 shadow-md border border-[#dae7df]/30 overflow-hidden group-hover/book:shadow-xl transition-shadow duration-300 rounded-sm bg-white mb-6 cursor-pointer"
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
      <div className="w-full flex-grow pt-1 min-w-0 flex flex-col items-center">
        {book.purchaseOptions && book.purchaseOptions.length > 0 ? (
          <div 
            onClick={(e) => onBookClick(e, book)}
            className="block mb-3 text-lg md:text-xl font-bold text-[#174532] hover:text-[#4db380] transition-colors leading-snug cursor-pointer"
          >
            👉 <span className="text-xs md:text-sm bg-[#4db380]/15 text-[#174532] px-1.5 py-0.5 rounded-sm mr-1.5 font-extrabold inline-block align-middle">[Clic Aquí para comprar]</span>{book.title}
          </div>
        ) : (
          <a 
            href={book.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block mb-3 text-lg md:text-xl font-bold text-[#174532] hover:text-[#4db380] transition-colors leading-snug cursor-pointer"
          >
            👉 <span className="text-xs md:text-sm bg-[#4db380]/15 text-[#174532] px-1.5 py-0.5 rounded-sm mr-1.5 font-extrabold inline-block align-middle">[Clic Aquí para comprar]</span>{book.title}
          </a>
        )}
        <p className="text-sm md:text-[15px] text-[#1b1b1b]/60 leading-relaxed font-light italic mb-4 max-w-3xl">
          {book.description}
        </p>

        {book.extraInfo && (
          <div className="w-full mt-2 flex flex-col items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#4db380] hover:text-[#174532] transition-colors focus:outline-none cursor-pointer select-none"
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
                  className="w-full overflow-hidden text-left"
                >
                  <div className="mt-4 p-4 md:p-5 bg-[#dae7df]/15 border-t-2 border-[#4db380] rounded-b-md text-sm md:text-[15px] text-[#1b1b1b]/80 space-y-3 leading-relaxed font-normal">
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
              <div className="flex flex-col items-center">
                {/* Center route title and intro */}
                <div className="text-center max-w-4xl w-full mx-auto mb-12">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#4db380] font-black mb-3 block">
                    RUTA: {route.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-[#174532] leading-tight mb-4">
                    {route.title}
                  </h3>
                  <p className="text-[#1b1b1b]/70 text-base md:text-lg leading-relaxed font-light italic max-w-3xl mx-auto">
                    {route.intro}
                  </p>

                  {route.coverUrl && (
                    <div className="mt-8 max-w-md mx-auto overflow-hidden bg-[#dae7df]/10 relative shadow-sm border border-[#dae7df]/40 transition-all duration-500 hover:shadow-lg rounded-sm">
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

                {/* Books List beneath, stacked sequentially */}
                <div className="w-full max-w-4xl space-y-12">
                  {route.books.map((book: BookItem, idx: number) => (
                    <BookItemRow key={idx} book={book} onBookClick={handleBookClick} />
                  ))}
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
