// app/page.tsx
import { Header } from '@/components/Header';
import { HeroContent } from '@/components/HeroContent';
import { MouseFollower } from '@/components/MouseFollower'; // <-- IMPORTAR
// import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
     
      <Header />      
      {/* Contenido Principal */}
      <main className="flex-1 w-full">
        {/* 1. HeroContent va *FUERA* del div 'max-w-6xl' para ocupar toda la pantalla.
          Le damos 'min-h-screen' para asegurar que llene la vista.
        */}
        <section
          id="inicio"
          className="relative w-full min-h-screen overflow-hidden"        >
          <HeroContent />
        </section>

        {/* 2. El resto de las secciones va *DENTRO* de 'max-w-6xl'
             para mantener la alineación centrada.
        */}
        <div className="w-full max-w-6xl mx-auto p-4">
          <section id="experiencia" className="py-24">
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