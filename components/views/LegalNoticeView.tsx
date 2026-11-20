import React from 'react';
import { Link } from '../../router.tsx';
import LegalPageShell from './LegalPageShell.tsx';

const LegalNoticeView: React.FC = () => {
  return (
    <LegalPageShell
      title="Aviso legal"
      intro="Información general sobre la titularidad, condiciones de uso, propiedad intelectual, relaciones comerciales y responsabilidades aplicables al sitio web FG Perspectiva."
      lastUpdated="Última actualización: 20 de noviembre de 2026."
    >
      <section aria-labelledby="aviso-1" className="space-y-4">
        <h2
          id="aviso-1"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          1. Identificación del sitio web
        </h2>
        <p>
          FG Perspectiva es una editorial digital dedicada a la publicación, divulgación y organización de libros y contenidos relacionados con el marketing digital, los negocios digitales, la inteligencia artificial, la creación de contenidos, la productividad y el desarrollo de proyectos digitales.
        </p>
        <p>
          El presente sitio web tiene como finalidad ofrecer información sobre nuestras publicaciones, facilitar el acceso a nuestra biblioteca de libros y presentar contenidos, recursos e ideas relacionados con el conocimiento y los sistemas digitales.
        </p>
        <ul className="space-y-1.5 py-2 pl-4 border-l-2 border-[#174532]/25 text-[#1b1b1b]">
          <li>
            <strong>Titular del sitio web:</strong> Francisco González
          </li>
          <li>
            <strong>Nombre del proyecto:</strong> FG Perspectiva
          </li>
          <li>
            <strong>URL:</strong>{' '}
            <Link href="/" className="text-[#174532] underline underline-offset-4 hover:text-[#1f513a]">
              https://fgperspectiva.vercel.app/
            </Link>
          </li>
        </ul>
        <p>
          Los datos adicionales de identificación y contacto del titular podrán facilitarse a través de los medios de contacto habilitados en el sitio web.
        </p>
      </section>

      <section aria-labelledby="aviso-2" className="space-y-4">
        <h2
          id="aviso-2"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          2. Condiciones generales de uso
        </h2>
        <p>
          El acceso y la navegación por FG Perspectiva atribuyen la condición de usuario e implican la aceptación de las disposiciones recogidas en este Aviso legal.
        </p>
        <p>
          El usuario se compromete a utilizar el sitio web de manera responsable, respetando la legislación aplicable, los derechos de terceros y las condiciones establecidas en este documento.
        </p>
        <p>
          El uso de FG Perspectiva no autoriza la realización de actividades que puedan perjudicar su funcionamiento, comprometer su seguridad, interferir en sus servicios o utilizar sus contenidos de forma ilícita.
        </p>
      </section>

      <section aria-labelledby="aviso-3" className="space-y-4">
        <h2
          id="aviso-3"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          3. Propiedad intelectual e industrial
        </h2>
        <p>
          Los contenidos publicados en FG Perspectiva, incluidos textos, libros, descripciones editoriales, elementos gráficos, imágenes, identidad visual, estructura de contenidos y demás materiales propios, están protegidos por los derechos de propiedad intelectual que resulten aplicables.
        </p>
        <p>
          Salvo autorización expresa o disposición legal que permita su utilización, no está permitida la reproducción, distribución, modificación, publicación, comercialización o explotación de estos contenidos, total o parcialmente, sin autorización del titular de los derechos correspondientes.
        </p>
        <p>
          La visualización, lectura o acceso a los contenidos del sitio web no implica la cesión de derechos de propiedad intelectual ni concede licencias de explotación sobre los materiales publicados.
        </p>
      </section>

      <section aria-labelledby="aviso-4" className="space-y-4">
        <h2
          id="aviso-4"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          4. Información y contenidos
        </h2>
        <p>
          Los contenidos de FG Perspectiva tienen carácter editorial, informativo y educativo.
        </p>
        <p>
          Los libros y materiales publicados abordan distintas disciplinas y áreas de conocimiento relacionadas con los negocios digitales, el marketing, la tecnología, la inteligencia artificial, la creación de contenidos y otras materias.
        </p>
        <p>
          Aunque procuramos ofrecer información útil, clara y actualizada, no garantizamos que todos los contenidos sean aplicables a cualquier situación particular, ni que permanezcan permanentemente actualizados ante cambios tecnológicos, comerciales, normativos o de otra naturaleza.
        </p>
        <p>
          El usuario es responsable de valorar y aplicar la información de acuerdo con sus propias circunstancias.
        </p>
      </section>

      <section aria-labelledby="aviso-5" className="space-y-4">
        <h2
          id="aviso-5"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          5. Enlaces externos y plataformas de terceros
        </h2>
        <p>
          FG Perspectiva puede incluir enlaces a sitios web, plataformas, servicios, productos o recursos gestionados por terceros.
        </p>
        <p>
          Estos enlaces se ofrecen para facilitar el acceso a información adicional, publicaciones, productos o servicios relacionados con los contenidos de nuestro sitio.
        </p>
        <p>
          FG Perspectiva no controla necesariamente los contenidos, políticas, disponibilidad, seguridad, condiciones comerciales ni prácticas de privacidad de los sitios externos.
        </p>
        <p>
          El acceso a dichos sitios se realiza bajo la responsabilidad del usuario, quien deberá consultar sus condiciones de uso y políticas aplicables.
        </p>
      </section>

      <section aria-labelledby="aviso-6" className="space-y-4">
        <h2
          id="aviso-6"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          6. Enlaces de afiliación y relaciones comerciales
        </h2>
        <p>
          FG Perspectiva puede incluir enlaces de afiliación a productos, libros, herramientas, plataformas o servicios de terceros.
        </p>
        <p>
          En particular, FG Perspectiva puede participar en el Programa de Afiliados de Amazon, mediante el cual podemos obtener ingresos por compras que cumplan las condiciones aplicables y que se realicen a través de determinados enlaces de nuestro sitio web.
        </p>
        <p>
          Como asociado de Amazon, obtenemos ingresos por las compras adscritas que cumplen los requisitos aplicables.
        </p>
        <p>
          La presencia de enlaces de afiliación no implica necesariamente un coste adicional para el usuario.
        </p>
        <p>
          La relación de afiliación no implica que Amazon gestione, redacte o respalde todos los contenidos editoriales de FG Perspectiva.
        </p>
        <p>
          Las compras, transacciones, pagos, entregas, devoluciones y demás operaciones realizadas en Amazon están sujetas a las condiciones y políticas de dicha plataforma.
        </p>
      </section>

      <section aria-labelledby="aviso-7" className="space-y-4">
        <h2
          id="aviso-7"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          7. Responsabilidad
        </h2>
        <p>
          FG Perspectiva procura mantener el sitio web operativo, accesible y con contenidos adecuados. No obstante, no garantiza la ausencia de interrupciones, errores técnicos, fallos de disponibilidad o circunstancias ajenas a nuestro control.
        </p>
        <p>
          No nos responsabilizamos de los daños o perjuicios derivados de circunstancias que legalmente no nos sean imputables, del uso inadecuado de los contenidos, de decisiones adoptadas por el usuario a partir de la información publicada ni de las actuaciones de terceros.
        </p>
        <p>
          Esta disposición no excluye ni limita las responsabilidades que legalmente no puedan excluirse o limitarse.
        </p>
      </section>

      <section aria-labelledby="aviso-8" className="space-y-4">
        <h2
          id="aviso-8"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          8. Modificaciones
        </h2>
        <p>
          Podemos actualizar, modificar o sustituir los contenidos del sitio web, así como este Aviso legal, cuando resulte necesario para adaptarlo a cambios operativos, editoriales, técnicos o normativos.
        </p>
        <p>
          Las modificaciones serán publicadas en esta misma página.
        </p>
      </section>

      <section aria-labelledby="aviso-9" className="space-y-4">
        <h2
          id="aviso-9"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          9. Legislación aplicable
        </h2>
        <p>
          Este Aviso legal se interpretará de conformidad con la legislación que resulte aplicable al titular del sitio web y a su actividad, sin perjuicio de las normas imperativas de protección de los usuarios que puedan resultar aplicables en otros territorios.
        </p>
      </section>

      <section aria-labelledby="aviso-10" className="space-y-4">
        <h2
          id="aviso-10"
          className="text-h3 md:text-h2 font-bold font-serif text-[#174532] pb-2 border-b border-[#dae7df]/70"
        >
          10. Contacto
        </h2>
        <p>
          Para consultas relacionadas con FG Perspectiva, el sitio web, sus contenidos o este Aviso legal, el usuario podrá utilizar los medios de contacto disponibles en la{' '}
          <Link href="/contacto/" className="text-[#174532] underline underline-offset-4 hover:text-[#1f513a] font-medium">
            página de contacto
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
};

export default LegalNoticeView;
