import React, { useState } from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import { Mail, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';

const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Breadcrumbs items={[{ label: 'Contacto', href: '/contacto/' }]} />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#4db380] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df] inline-block mb-4">
            Atención y Consultas
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#174532] mb-6 leading-tight">
            Contacto <span className="italic serif text-[#4db380]">Editorial</span>
          </h1>
          <p className="text-base md:text-lg text-[#1b1b1b]/70 font-light leading-relaxed max-w-2xl mx-auto">
            ¿Tienes dudas sobre alguno de nuestros libros, sistemas o compras? Estamos aquí para ayudarte a transformar tus ideas en activos.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column: Direct channels */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-[#dae7df]/20 border border-[#dae7df]/60 rounded-xl p-8">
              <h2 className="text-xl font-bold text-[#174532] mb-6">Canales Oficiales</h2>

              <div className="space-y-6 text-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#4db380] block mb-1">
                    Editorial Digital
                  </span>
                  <p className="font-semibold text-[#174532]">FG Perspectiva</p>
                  <p className="text-[#1b1b1b]/60 text-xs mt-0.5">Sistemas que transforman realidades.</p>
                </div>

                <div className="pt-4 border-t border-[#dae7df]/60">
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#4db380] block mb-2">
                    Redes y Plataformas
                  </span>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="https://x.com/Dineroenblog"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-between text-xs font-medium text-[#174532] hover:text-[#4db380] transition-colors p-2.5 rounded-lg bg-white border border-[#dae7df]/50"
                    >
                      <span>Twitter / X (@Dineroenblog)</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                    <a
                      href="https://es.pinterest.com/ganardineroblog/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-between text-xs font-medium text-[#174532] hover:text-[#4db380] transition-colors p-2.5 rounded-lg bg-white border border-[#dae7df]/50"
                    >
                      <span>Pinterest (Ganar Dinero Blog)</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                    <a
                      href="https://afiliados-fgperspectiva.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-between text-xs font-medium text-[#174532] hover:text-[#4db380] transition-colors p-2.5 rounded-lg bg-white border border-[#dae7df]/50"
                    >
                      <span>Portal de Afiliados FG Perspectiva</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#dae7df] rounded-xl shadow-sm text-xs text-[#1b1b1b]/70 leading-relaxed">
              <p className="font-semibold text-[#174532] mb-1">Nota sobre compras en plataformas externas:</p>
              <p>
                Si has realizado tu compra a través de Amazon, ClickBank, Payhip, Google Play o Lulu, recuerda que el acceso, facturación y descargas inmediatas se gestionan directamente a través de sus plataformas oficiales.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="md:col-span-7 bg-white border border-[#dae7df]/60 rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#174532] mb-6">Envíanos un mensaje</h2>

            {submitted ? (
              <div className="p-8 text-center bg-[#dae7df]/20 rounded-xl border border-[#4db380]/40">
                <CheckCircle className="w-12 h-12 text-[#4db380] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#174532] mb-2">Mensaje enviado</h3>
                <p className="text-sm text-[#1b1b1b]/70 mb-6">
                  Gracias por contactar con FG Perspectiva. Responderemos a tu consulta a la mayor brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#174532] text-white text-xs uppercase tracking-wider font-bold rounded-sm hover:bg-[#1f513a]"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#174532] mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#dae7df] rounded-md focus:outline-none focus:border-[#4db380] transition-colors"
                    placeholder="Ej. Carlos Moreno"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#174532] mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#dae7df] rounded-md focus:outline-none focus:border-[#4db380] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#174532] mb-2">
                    Asunto o Libro de interés
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#dae7df] rounded-md focus:outline-none focus:border-[#4db380] transition-colors"
                    placeholder="Ej. Consulta sobre El Vendedor Hipnótico"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#174532] mb-2">
                    Tu Mensaje
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#dae7df] rounded-md focus:outline-none focus:border-[#4db380] transition-colors resize-none"
                    placeholder="Escribe aquí tu consulta o comentario..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#174532] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-[#1f513a] transition-all shadow-md cursor-pointer"
                >
                  Enviar mensaje a la editorial
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
