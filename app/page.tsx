// app/page.tsx
import { Header } from '@/components/Header';
import { HeroContent } from '@/components/HeroContent';
// import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      
      {/* --- Contenedor del Fondo --- */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Fondo de Video (Solo visible en MODO OSCURO) */}
        {/* 'hidden' por defecto, 'dark:block' lo muestra solo en modo oscuro */}
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
        {/* 'block' por defecto, 'dark:hidden' lo oculta en modo oscuro */}
        <div className="absolute inset-0 h-full w-full bg-background dark:hidden"></div>
      </div>
      {/* --- Fin del Contenedor del Fondo --- */}

      {/* Contenido Principal */}
      <Header />
      <main
        id="inicio"
        className="flex flex-1 items-center justify-center p-4"
      >
        <HeroContent />
      </main>
    </div>
  );
}