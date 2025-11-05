// app/components/Header.tsx
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si'; // Importamos desde react-icons/si

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4 sm:px-8">
      {/* Usamos max-w-6xl y mx-auto para centrar y limitar el ancho en pantallas grandes */}
      <nav className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Logo (Mejorado con imagen en lugar de texto) */}
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground transition-transform hover:scale-105"
          aria-label="Volver al inicio"
        >
          <img
            src="/LogoWhite.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
        </Link>

        {/* Navegación Principal (Mejorada de tu boceto) */}
        {/* Oculta en móvil (hidden), se muestra en pantallas sm y mayores (sm:flex) */}
        <div className="hidden items-center gap-1 rounded-full border border-foreground/20 bg-background/50 p-1 backdrop-blur-sm sm:flex">
          <Button asChild variant="ghost" size="sm" className="rounded-full font-medium">
            <Link href="#inicio">Inicio</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full text-muted-foreground">
            <Link href="#experiencia">Experiencia</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full text-muted-foreground">
            <Link href="#proyectos">Proyectos</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-full text-muted-foreground">
            <Link href="#contacto">Contacto</Link>
          </Button>
        </div>

        {/* Iconos Sociales y Tema */}
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon" className="w-9 h-9">
            <a
              href="https://github.com/tu-usuario" // Reemplaza con tu URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
            >
              <SiGithub className="h-[1.1rem] w-[1.1rem]" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="w-9 h-9">
            <a
              href="https://linkedin.com/in/tu-usuario" // Reemplaza con tu URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
            >
              <SiLinkedin className="h-[1.1rem] w-[1.1rem]" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}