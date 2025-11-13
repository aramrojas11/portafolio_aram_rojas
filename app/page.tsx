// app/page.tsx
import { Header } from '@/components/Header';
import { HeroContent } from '@/components/HeroContent';
import { MouseFollower } from '@/components/MouseFollower'; // <-- IMPORTAR
// import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      
      {/* --- Contenedor del Fondo --- */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Fondo de Video (Solo visible en MODO OSCURO) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 hidden h-full w-full object-cover filter blur-md dark:block" // <-- ¡AQUÍ EL EFECTO DE DESENFOQUE!
          poster="/LogoBlack.png" // Opcional: una imagen de portada
        >
          {/* Coloca tu video en la carpeta /public */}
          <source src="/BgVideo.mp4" type="video/mp4" />
        </video>

        {/* Fondo Sólido (Solo visible en MODO CLARO) */}
        <div className="absolute inset-0 h-full w-full bg-background dark:hidden"></div>
      </div>

      <Header />
      {/* Contenido Principal */}
      <main
        className="flex-1 w-full p-4" 
      >
        {/* Este div es la clave. Se alinea con el 'max-w-6xl' del nav en Header.tsx */}
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Sección de Inicio */}
          <section
            id="inicio"
            className="flex items-center justify-center"
            // Le damos una altura mínima para que el 'Hero' se vea centrado verticalmente
            // (100vh) - (altura aprox. del header). Ajusta '90vh' o '80px' si es necesario.
            style={{ minHeight: 'calc(90vh - 80px)' }} 
          >
            <HeroContent />
          </section>

          {/* Aquí añadirás tus futuras secciones, y ya estarán alineadas */}
          
          <section id="experiencia" className="py-24">
            {/* Cuando crees app/components/Experience.tsx, lo pondrás aquí */}
            {/* <Experience /> */}
            <h2 className="text-3xl text-center font-bold">Experiencia (Próximamente)</h2>
          </section>

          <section id="proyectos" className="py-24">
            <h2 className="text-3xl text-center font-bold">Proyectos (Próximamente)</h2>
          </section>

          <section id="contacto" className="py-24">
            <h2 className="text-3xl text-center font-bold">Contacto (Próximamente)</h2>
          </section>

        </div>
      </main>
      <MouseFollower />
    </div>
  );
}