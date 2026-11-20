import React from 'react';
import { Link } from '../../router.tsx';
import LegalPageShell from './LegalPageShell.tsx';

const PrivacyPolicyView: React.FC = () => {
  return (
    <LegalPageShell
      title="Política de privacidad"
      intro="Información sobre cómo FG Perspectiva trata y protege los datos personales, sus finalidades, las bases legales aplicables y los derechos de los usuarios."
      lastUpdated="Última actualización: 20 de noviembre de 2026."
    >
      <section aria-labelledby="privacidad-1" className="space-y-4">
        <h2
          id="privacidad-1"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          1. Introducción
        </h2>
        <p>
          En FG Perspectiva respetamos la privacidad de nuestros usuarios y nos comprometemos a tratar sus datos personales de forma responsable, transparente y conforme a la legislación aplicable en materia de protección de datos.
        </p>
        <p>
          Esta Política de privacidad explica cómo pueden tratarse los datos personales cuando los usuarios visitan nuestro sitio web, utilizan sus funcionalidades, se comunican con nosotros o acceden a recursos y servicios de terceros a través de nuestros enlaces.
        </p>
        <p>
          Nuestro objetivo es ofrecer información clara sobre el tratamiento de datos personales, sus finalidades, los derechos de los usuarios y los medios disponibles para ejercerlos.
        </p>
      </section>

      <section aria-labelledby="privacidad-2" className="space-y-4">
        <h2
          id="privacidad-2"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          2. Responsable del tratamiento
        </h2>
        <p>
          El responsable del tratamiento de los datos personales relacionados con FG Perspectiva es:
        </p>
        <ul className="space-y-1.5 py-2 pl-4 border-l-2 border-[#174532]/25 text-[#1b1b1b]">
          <li>
            <strong>Responsable:</strong> Francisco González
          </li>
          <li>
            <strong>Proyecto:</strong> FG Perspectiva
          </li>
          <li>
            <strong>Sitio web:</strong>{' '}
            <Link href="/" className="text-[#174532] underline underline-offset-4 hover:text-[#1f513a]">
              https://fgperspectiva.vercel.app/
            </Link>
          </li>
        </ul>
        <p>
          Para consultas relacionadas con la privacidad o el tratamiento de datos personales, los usuarios podrán ponerse en contacto a través de los medios de contacto habilitados en nuestro sitio web.
        </p>
      </section>

      <section aria-labelledby="privacidad-3" className="space-y-4">
        <h2
          id="privacidad-3"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          3. Datos que pueden ser tratados
        </h2>
        <p>
          Dependiendo de la interacción del usuario con FG Perspectiva y de las funcionalidades habilitadas, pueden tratarse las siguientes categorías de datos:
        </p>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Datos proporcionados voluntariamente
          </h3>
          <p>
            Cuando el usuario se comunica con nosotros, puede proporcionar datos como su nombre, dirección de correo electrónico y la información incluida en su mensaje.
          </p>
          <p>
            Estos datos se utilizan para gestionar la comunicación, responder consultas y atender las solicitudes recibidas.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Datos técnicos y de navegación
          </h3>
          <p>
            Durante la navegación, determinados servicios técnicos o proveedores pueden recopilar información relacionada con el dispositivo, navegador, dirección IP, páginas visitadas, fecha y hora de acceso, información de conexión y datos técnicos necesarios para el funcionamiento, la seguridad o el análisis del sitio web.
          </p>
          <p>
            La recopilación de estos datos dependerá de las tecnologías y servicios efectivamente utilizados.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-[17px] md:text-[18px] font-bold font-serif text-[#174532]">
            Datos relacionados con enlaces externos
          </h3>
          <p>
            Cuando el usuario accede a enlaces de terceros, estos proveedores pueden recopilar y tratar información conforme a sus propias políticas de privacidad, tecnologías y condiciones de uso.
          </p>
          <p>
            FG Perspectiva no controla directamente el tratamiento realizado por dichos terceros.
          </p>
        </div>
      </section>

      <section aria-labelledby="privacidad-4" className="space-y-4">
        <h2
          id="privacidad-4"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          4. Finalidades del tratamiento
        </h2>
        <p>
          Los datos personales pueden ser tratados, cuando corresponda, para las siguientes finalidades:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Garantizar el funcionamiento, la disponibilidad y la seguridad del sitio web.</li>
          <li>Atender consultas, mensajes y solicitudes de los usuarios.</li>
          <li>Gestionar las comunicaciones relacionadas con FG Perspectiva.</li>
          <li>Detectar incidencias técnicas, usos abusivos o actividades que puedan comprometer la seguridad.</li>
          <li>Comprender el funcionamiento y el rendimiento del sitio web, cuando se utilicen herramientas de medición o analítica.</li>
          <li>Mejorar nuestros contenidos, funcionalidades y experiencia de navegación.</li>
          <li>Cumplir obligaciones legales y atender solicitudes de autoridades competentes, cuando corresponda.</li>
        </ul>
        <p>
          Los datos no serán utilizados para finalidades incompatibles con aquellas para las que fueron recopilados, salvo que exista una base legal que lo permita.
        </p>
      </section>

      <section aria-labelledby="privacidad-5" className="space-y-4">
        <h2
          id="privacidad-5"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          5. Bases legales del tratamiento
        </h2>
        <p>
          El tratamiento de datos personales se realizará sobre la base legal que corresponda a cada situación, conforme a la legislación aplicable.
        </p>
        <p>Estas bases pueden incluir, según el tratamiento concreto:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>El consentimiento del titular.</li>
          <li>El cumplimiento de obligaciones legales.</li>
          <li>La ejecución de procedimientos solicitados por el titular.</li>
          <li>El ejercicio regular de derechos.</li>
          <li>El interés legítimo del responsable, cuando resulte aplicable y respetando los derechos y libertades del titular.</li>
        </ul>
        <p>
          Cuando el tratamiento dependa del consentimiento, el usuario podrá revocarlo en los términos previstos por la legislación aplicable.
        </p>
      </section>

      <section aria-labelledby="privacidad-6" className="space-y-4">
        <h2
          id="privacidad-6"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          6. Analítica y medición del sitio web
        </h2>
        <p>
          Actualmente, FG Perspectiva no utiliza Google Analytics ni Google Tag Manager para la recopilación de datos analíticos de navegación.
        </p>
        <p>
          No obstante, podemos incorporar en el futuro herramientas de medición, análisis y gestión de etiquetas con el objetivo de comprender el funcionamiento del sitio web, analizar su rendimiento y mejorar la experiencia de navegación.
        </p>
        <p>
          Si incorporamos estas herramientas, actualizaremos esta Política de privacidad para informar sobre los servicios utilizados, los datos que puedan recopilarse, las finalidades del tratamiento y las opciones disponibles para los usuarios, cuando corresponda.
        </p>
        <p>
          El tratamiento de datos asociado a estas herramientas se realizará conforme a la legislación aplicable en materia de protección de datos personales.
        </p>
      </section>

      <section aria-labelledby="privacidad-7" className="space-y-4">
        <h2
          id="privacidad-7"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          7. Comunicación y acceso por terceros
        </h2>
        <p>
          FG Perspectiva puede utilizar servicios de terceros necesarios para el funcionamiento, alojamiento, seguridad, mantenimiento, análisis o prestación de determinadas funcionalidades del sitio web.
        </p>
        <p>
          Cuando estos proveedores intervengan en el tratamiento de datos personales, su acceso estará relacionado con las finalidades correspondientes y sujeto a las condiciones y obligaciones aplicables.
        </p>
        <p>
          Los datos también podrán comunicarse cuando exista una obligación legal, una solicitud válida de una autoridad competente o una necesidad relacionada con el ejercicio o defensa de derechos.
        </p>
        <p>
          No vendemos deliberadamente los datos personales de nuestros usuarios.
        </p>
      </section>

      <section aria-labelledby="privacidad-8" className="space-y-4">
        <h2
          id="privacidad-8"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          8. Enlaces a terceros
        </h2>
        <p>
          Nuestro sitio web puede contener enlaces a Amazon, plataformas editoriales, herramientas digitales, servicios de terceros y otras páginas externas.
        </p>
        <p>
          Cuando el usuario abandona FG Perspectiva y accede a otro sitio, el tratamiento de sus datos pasa a estar sujeto a las políticas, condiciones y tecnologías de ese proveedor.
        </p>
        <p>
          Recomendamos consultar las políticas de privacidad de cada plataforma antes de facilitar información personal o realizar una compra.
        </p>
      </section>

      <section aria-labelledby="privacidad-9" className="space-y-4">
        <h2
          id="privacidad-9"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          9. Conservación de los datos
        </h2>
        <p>
          Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron recopilados, atender solicitudes, mantener la seguridad, cumplir obligaciones legales o ejercer y defender derechos.
        </p>
        <p>
          Cuando los datos dejen de ser necesarios y no exista una obligación legal de conservarlos, se procederá a su eliminación, anonimización o bloqueo, según corresponda y de acuerdo con la legislación aplicable.
        </p>
      </section>

      <section aria-labelledby="privacidad-10" className="space-y-4">
        <h2
          id="privacidad-10"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          10. Derechos de los titulares
        </h2>
        <p>
          Los usuarios podrán ejercer los derechos reconocidos por la legislación aplicable en materia de protección de datos personales, que pueden incluir:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmar la existencia de tratamiento de datos personales.</li>
          <li>Acceder a sus datos.</li>
          <li>Solicitar la corrección de datos incompletos, inexactos o desactualizados.</li>
          <li>Solicitar la anonimización, bloqueo o eliminación de datos cuando proceda.</li>
          <li>Solicitar la portabilidad, en los casos previstos legalmente.</li>
          <li>Solicitar información sobre el uso compartido de sus datos.</li>
          <li>Revocar el consentimiento, cuando el tratamiento se base en él.</li>
          <li>Presentar reclamaciones ante la autoridad competente.</li>
        </ul>
        <p>
          Las solicitudes relacionadas con datos personales podrán realizarse a través de los medios de contacto disponibles en FG Perspectiva.
        </p>
      </section>

      <section aria-labelledby="privacidad-11" className="space-y-4">
        <h2
          id="privacidad-11"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          11. Seguridad
        </h2>
        <p>
          Adoptamos medidas razonables de carácter técnico y organizativo para proteger los datos personales frente a accesos no autorizados, pérdidas, alteraciones, divulgaciones indebidas y otras situaciones que puedan comprometer su seguridad.
        </p>
        <p>
          Sin embargo, ningún sistema de transmisión o almacenamiento electrónico puede garantizar una seguridad absoluta.
        </p>
      </section>

      <section aria-labelledby="privacidad-12" className="space-y-4">
        <h2
          id="privacidad-12"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          12. Privacidad de menores
        </h2>
        <p>
          FG Perspectiva no está específicamente dirigido a la recopilación de datos personales de menores.
        </p>
        <p>
          Si detectamos que se han recopilado datos personales de menores de manera incompatible con la legislación aplicable, adoptaremos las medidas que correspondan.
        </p>
      </section>

      <section aria-labelledby="privacidad-13" className="space-y-4">
        <h2
          id="privacidad-13"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          13. Modificaciones de esta política
        </h2>
        <p>
          Esta Política de privacidad puede actualizarse cuando resulte necesario para reflejar cambios en nuestras prácticas, funcionalidades, servicios utilizados o requisitos legales.
        </p>
        <p>La versión vigente estará disponible en esta página.</p>
      </section>

      <section aria-labelledby="privacidad-14" className="space-y-4">
        <h2
          id="privacidad-14"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          14. Contacto y consultas de privacidad
        </h2>
        <p>
          Para consultas relacionadas con esta Política de privacidad, el tratamiento de datos personales o el ejercicio de derechos, los usuarios podrán ponerse en contacto con FG Perspectiva a través de los medios disponibles en la{' '}
          <Link href="/contacto/" className="text-[#174532] underline underline-offset-4 hover:text-[#1f513a] font-medium">
            página de contacto
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
};

export default PrivacyPolicyView;
