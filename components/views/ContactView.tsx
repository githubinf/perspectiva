import React, { useEffect, useRef, useState } from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';
import { ExternalLink } from 'lucide-react';

const EMAILMEFORM_ID = '2sfhB8Xdpq';
const EMAILMEFORM_ORIGIN = 'https://www.emailmeform.com';
const EMAILMEFORM_EMBED_BASE = `${EMAILMEFORM_ORIGIN}/builder/embed/${EMAILMEFORM_ID}`;
const EMAILMEFORM_SCRIPT_URL = `${EMAILMEFORM_ORIGIN}/builder/forms/jsform/${EMAILMEFORM_ID}`;
const EMAILMEFORM_LOGO_URL = 'https://assets.emailmeform.com/images/footer-logo.png?bWFzdGVy';

const ContactView: React.FC = () => {
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const targetUrl = `${EMAILMEFORM_EMBED_BASE}?#${encodeURIComponent(window.location.href)}`;
    setEmbedSrc(targetUrl);

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== EMAILMEFORM_ORIGIN) return;
      if (typeof event.data !== 'string') return;

      const parts = event.data.split(',');
      const operation = parts[0];

      if (operation === 'resize') {
        const rawHeight = parts[1] ?? '';
        const visitId = parts[2] ?? '';
        if (visitId && visitId !== EMAILMEFORM_ID) return;

        const parsedHeight = parseInt(rawHeight, 10);
        if (!Number.isNaN(parsedHeight) && parsedHeight >= 250 && parsedHeight <= 3000) {
          setDynamicHeight(parsedHeight + 24);
        }
      } else if (operation === 'scroll_to') {
        const y = parseInt(parts[1] ?? '', 10);
        const visitId = parts[2] ?? '';
        if (visitId && visitId !== EMAILMEFORM_ID) return;
        if (!Number.isNaN(y) && iframeRef.current) {
          const rect = iframeRef.current.getBoundingClientRect();
          window.scrollTo({
            top: Math.max(0, window.scrollY + rect.top + y),
            behavior: 'smooth',
          });
        }
      } else if (operation === 'redirect') {
        const destination = parts[1] ?? '';
        if (destination.startsWith('https://')) {
          window.location.assign(destination);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Breadcrumbs items={[{ label: 'Contacto', href: '/contacto/' }]} />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#174532] bg-[#dae7df]/30 px-3.5 py-1 rounded-full border border-[#dae7df] inline-block mb-4">
            Atención y Consultas
          </span>
          <h1 className="text-h1 font-bold font-serif text-[#174532] mb-4 leading-tight">
            Contacto <span className="italic font-serif text-[#4db380]">Editorial</span>
          </h1>
          <p className="text-subtitle text-[#1b1b1b]/70 font-normal leading-relaxed max-w-2xl mx-auto">
            ¿Tienes dudas sobre alguno de nuestros libros, sistemas o compras? Estamos aquí para ayudarte a transformar tus ideas en activos.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column: Direct channels */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-[#dae7df]/20 border border-[#dae7df]/60 rounded-xl p-8">
              <h2 className="text-h3 font-bold font-serif text-[#174532] mb-6">Canales Oficiales</h2>

              <div className="space-y-6 text-body-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4db380] block mb-1">
                    Editorial Digital
                  </span>
                  <p className="font-semibold text-[#174532]">FG Perspectiva</p>
                  <p className="text-[#1b1b1b]/65 text-xs mt-0.5">Sistemas que transforman realidades.</p>
                </div>

                <div className="pt-4 border-t border-[#dae7df]/60">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4db380] block mb-2">
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

            <div className="p-6 bg-white border border-[#dae7df] rounded-xl shadow-sm text-body-sm text-[#1b1b1b]/70 leading-relaxed">
              <p className="font-semibold text-[#174532] mb-1">Nota sobre compras en plataformas externas:</p>
              <p>
                Si has realizado tu compra a través de Amazon, ClickBank, Payhip, Google Play o Lulu, recuerda que el acceso, facturación y descargas inmediatas se gestionan directamente a través de sus plataformas oficiales.
              </p>
            </div>
          </div>

          {/* Right Column: EmailMeForm Embed */}
          <div className="md:col-span-7 bg-white border border-[#dae7df]/60 rounded-xl px-4 py-6 sm:p-8 shadow-sm min-w-0">
            <h2 className="text-h3 font-bold font-serif text-[#174532] mb-6">Envíanos un mensaje</h2>

            <div
              className="w-full overflow-hidden"
              data-emf-form-id={EMAILMEFORM_ID}
              data-emf-source={EMAILMEFORM_SCRIPT_URL}
            >
              {embedSrc ? (
                <>
                  {!iframeLoaded && (
                    <div
                      className="w-full rounded-lg border border-[#dae7df]/60 bg-[#dae7df]/15 p-8 text-center text-body-sm text-[#174532]/75"
                      role="status"
                      aria-live="polite"
                    >
                      Cargando formulario de contacto…
                    </div>
                  )}
                  <iframe
                    ref={iframeRef}
                    id={`auto_size_iframe_${EMAILMEFORM_ID}`}
                    name={`auto_size_iframe_${EMAILMEFORM_ID}`}
                    title="Formulario de contacto de FG Perspectiva"
                    src={embedSrc}
                    onLoad={() => setIframeLoaded(true)}
                    allow="camera"
                    scrolling="auto"
                    className={`w-full border-0 bg-transparent transition-opacity duration-300 ${
                      iframeLoaded
                        ? `opacity-100 block ${dynamicHeight === null ? 'h-[860px] sm:h-[800px]' : ''}`
                        : 'opacity-0 h-0 overflow-hidden'
                    }`}
                    style={iframeLoaded && dynamicHeight !== null ? { height: `${dynamicHeight}px` } : undefined}
                  />
                </>
              ) : (
                <div
                  className="w-full rounded-lg border border-[#dae7df]/60 bg-[#dae7df]/15 p-8 text-center text-body-sm text-[#174532]/75"
                  aria-live="polite"
                >
                  Preparando formulario de contacto…
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-[#dae7df]/50 text-center">
              <div
                id="emf_advertisement"
                className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#1b1b1b]/65 leading-relaxed"
              >
                <span>Powered by</span>
                <img
                  src={EMAILMEFORM_LOGO_URL}
                  alt="EmailMeForm"
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="inline-block h-4 w-auto align-middle"
                />
                <span>EMF</span>
                <a
                  href="https://www.emailmeform.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#174532] hover:text-[#4db380] underline decoration-[#dae7df] underline-offset-2 transition-colors"
                >
                  HTML Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
