// app/page.tsx
import Header from "@/components/Header";
import { HeroContent } from "@/components/HeroContent";
import { MouseFollower } from "@/components/MouseFollower";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects"; 
import Contact from "@/components/Contact"; 

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden text-foreground">
      <Header />
      <main className="flex-1 w-full">
        {/*Sección Inicio */}
        <section
          id="inicio"
          className="relative w-full min-h-screen overflow-hidden"
        >
          <HeroContent />
        </section>
        <div className="w-full max-w-6xl mx-auto p-4">
          {/* Secciones */}
          <Experience /> {/* <--- Agregamos la sección aquí */}
          <section id="proyectos" className="py-24">
            <h2 className="text-3xl text-center font-bold">
              <Projects /> {/* <--- AÑADIR AQUI */}
            </h2>
          </section>
          <section id="contacto" className="py-24">
            <h2 className="text-3xl text-center font-bold">
              <Contact /> {/* <--- AÑADIR COMPONENTE REAL */}{" "}
            </h2>
          </section>
        </div>
      </main>
      <MouseFollower />
    </div>
  );
}
