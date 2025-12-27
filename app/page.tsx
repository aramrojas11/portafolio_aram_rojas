// app/page.tsx
import Navbar from "@/components/Navbar"; // <--- Usamos el nuevo componente
import { HeroContent } from "@/components/HeroContent";
import { MouseFollower } from "@/components/MouseFollower";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // 'relative' permite que los hijos con 'fixed' se posicionen respecto a la ventana, no al div.
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden text-foreground">

      {/* NAVEGACIÓN GLOBAL */}
      {/* Se mantiene fuera del main para estar siempre accesible */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Sección Inicio */}
        <section
          id="inicio"
          className="relative w-full min-h-screen overflow-hidden"
        >
          <HeroContent />
        </section>

        <div className="w-full max-w-6xl mx-auto p-4">
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      <MouseFollower />
    </div>
  );
}