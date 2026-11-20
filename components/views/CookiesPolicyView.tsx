import React from 'react';
import { Link } from '../../router.tsx';
import LegalPageShell from './LegalPageShell.tsx';

const CookiesPolicyView: React.FC = () => {
  return (
    <LegalPageShell
      title="Política de cookies"
      intro="Información sobre el uso de cookies y tecnologías similares de navegación en FG Perspectiva, herramientas de terceros y opciones de gestión desde el navegador."
      lastUpdated="Última actualización: 20 de noviembre de 2026."
    >
      <section aria-labelledby="cookies-1" className="space-y-4">
        <h2
          id="cookies-1"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          1. ¿Qué son las cookies?
        </h2>
        <p>
          Las cookies son pequeños archivos o identificadores que pueden almacenarse en el dispositivo del usuario cuando visita un sitio web.
        </p>
        <p>
          Estas tecnologías permiten recordar determinadas preferencias, facilitar el funcionamiento de páginas, mantener funcionalidades, obtener información sobre la navegación o realizar mediciones relacionadas con el uso del sitio.
        </p>
        <p>
          Además de las cookies, pueden utilizarse tecnologías similares, como almacenamiento local, píxeles, etiquetas o identificadores técnicos.
        </p>
      </section>

      <section aria-labelledby="cookies-2" className="space-y-4">
        <h2
          id="cookies-2"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          2. ¿Cómo utilizamos estas tecnologías?
        </h2>
        <p>
          FG Perspectiva puede utilizar cookies y tecnologías similares para las siguientes finalidades, dependiendo de los servicios y funcionalidades que se encuentren habilitados:
        </p>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Cookies técnicas o necesarias
          </h3>
          <p>
            Permiten el funcionamiento básico del sitio web, la navegación, la seguridad y determinadas funcionalidades esenciales.
          </p>
          <p>
            Estas tecnologías no deben utilizarse para finalidades incompatibles con su función técnica.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Cookies de preferencias
          </h3>
          <p>
            Pueden permitir recordar determinadas elecciones o configuraciones del usuario para facilitar futuras visitas.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Cookies de análisis o medición
          </h3>
          <p>
            Cuando se utilizan herramientas de analítica, pueden permitir obtener información sobre el uso del sitio, las páginas visitadas, el rendimiento, los errores y las interacciones, con el objetivo de comprender y mejorar su funcionamiento.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Cookies de terceros
          </h3>
          <p>
            Algunas funcionalidades, contenidos, enlaces o servicios externos pueden incorporar tecnologías gestionadas por terceros, que pueden recopilar información conforme a sus propias políticas.
          </p>
        </div>

        <p>
          La utilización efectiva de cada categoría dependerá de las tecnologías instaladas y habilitadas en FG Perspectiva.
        </p>
      </section>

      <section aria-labelledby="cookies-3" className="space-y-4">
        <h2
          id="cookies-3"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          3. Herramientas de analítica
        </h2>
        <p>
          Actualmente, FG Perspectiva no utiliza Google Analytics ni Google Tag Manager para recopilar datos analíticos de navegación.
        </p>
        <p>
          Está prevista la posible incorporación futura de herramientas de analítica y gestión de etiquetas para evaluar el rendimiento del sitio web y comprender cómo los usuarios interactúan con sus contenidos.
        </p>
        <p>
          Cuando estas herramientas se incorporen, esta política será actualizada para identificar las tecnologías utilizadas, sus finalidades y las opciones de gestión disponibles para los usuarios.
        </p>
      </section>

      <section aria-labelledby="cookies-4" className="space-y-4">
        <h2
          id="cookies-4"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          4. Cookies de terceros y enlaces externos
        </h2>
        <p>
          FG Perspectiva puede enlazar a plataformas externas, como Amazon, u otros servicios que ofrecen productos, herramientas, contenidos o funcionalidades.
        </p>
        <p>
          La visita a estas plataformas puede implicar el uso de cookies u otras tecnologías de seguimiento gestionadas por sus respectivos proveedores.
        </p>
        <p>
          FG Perspectiva no controla directamente las cookies que dichos terceros utilizan en sus propios sitios web.
        </p>
        <p>
          Recomendamos consultar sus políticas de privacidad y cookies para obtener información específica.
        </p>
      </section>

      <section aria-labelledby="cookies-5" className="space-y-4">
        <h2
          id="cookies-5"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          5. Gestión de cookies
        </h2>
        <p>
          Los usuarios pueden gestionar determinadas cookies y tecnologías de seguimiento a través de las opciones que el sitio web habilite, cuando corresponda, así como mediante la configuración de su navegador.
        </p>
        <p>
          Los navegadores habituales permiten revisar, bloquear, restringir o eliminar cookies almacenadas.
        </p>
        <p>
          La desactivación de determinadas cookies puede afectar al funcionamiento de algunas funcionalidades o servicios.
        </p>
        <p>
          Cuando se utilicen cookies no esenciales sujetas a consentimiento, su gestión deberá permitir al usuario tomar una decisión informada conforme a la normativa aplicable.
        </p>
      </section>

      <section aria-labelledby="cookies-6" className="space-y-4">
        <h2
          id="cookies-6"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          6. Cómo desactivar las cookies desde el navegador
        </h2>
        <p>
          El usuario puede consultar la configuración de privacidad de su navegador para administrar las cookies.
        </p>
        <p>
          Las opciones disponibles pueden variar según el navegador y su versión. Generalmente, es posible:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Eliminar cookies almacenadas.</li>
          <li>Bloquear cookies de determinados sitios.</li>
          <li>Restringir cookies de terceros.</li>
          <li>Configurar avisos antes de almacenar cookies.</li>
          <li>Gestionar datos de navegación.</li>
        </ul>
        <p>
          La desactivación de cookies debe realizarse teniendo en cuenta que algunas funcionalidades del sitio podrían dejar de estar disponibles o funcionar correctamente.
        </p>
      </section>

      <section aria-labelledby="cookies-7" className="space-y-4">
        <h2
          id="cookies-7"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          7. Protección de datos personales
        </h2>
        <p>
          Cuando las cookies u otras tecnologías recopilen o permitan identificar información relacionada con una persona, su tratamiento estará sujeto a la legislación aplicable en materia de protección de datos personales.
        </p>
        <p>
          Para obtener información sobre los datos que pueden tratarse, las finalidades, los derechos de los usuarios y los medios de contacto, puede consultarse nuestra{' '}
          <Link
            href="/politica-de-privacidad/"
            className="text-[#174532] underline underline-offset-4 hover:text-[#1f513a] font-medium"
          >
            Política de privacidad
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="cookies-8" className="space-y-4">
        <h2
          id="cookies-8"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          8. Actualizaciones de esta política
        </h2>
        <p>
          Esta Política de cookies puede actualizarse para reflejar cambios en las tecnologías utilizadas, funcionalidades, servicios de terceros o requisitos legales.
        </p>
        <p>La versión vigente estará disponible en esta página.</p>
      </section>
    </LegalPageShell>
  );
};

export default CookiesPolicyView;
