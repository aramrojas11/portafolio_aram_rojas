// app/components/Header.tsx
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4 sm:px-8">
      {/* 
        Ajustes de altura: 
        - Agregamos 'items-center' para centrar todo verticalmente.
      */}
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        
        {/* Logo (Tamaño 140px y cambio de tema) */}
        <Link
          href="/"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-foreground transition-transform hover:scale-105 dark:bg-white dark:border-white"
          aria-label="Volver al inicio"
        >
          {/* Logo para Modo Claro */}
          <img
            src="/LogoWhite.png"
            alt="Logo"
            className="h-[100px] w-[100px] object-contain dark:hidden"
          />
          {/* Logo para Modo Oscuro */}
          <img
            src="/LogoBlack.png"
            alt="Logo"
            className="hidden h-[100px] w-[100px] object-contain dark:block"
          />
        </Link>

        {/* Navegación Principal (Tamaño 140px) */}
        <div 
          className="hidden h-[60px] items-center gap-2 rounded-full border border-foreground/20 bg-background/50 p-4 backdrop-blur-sm sm:flex"
        >
          {/* Botones más grandes */}
          <Button asChild variant="ghost" className="rounded-full font-medium text-lg px-6 py-3">
            <Link href="#inicio">Inicio</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full text-muted-foreground text-lg px-6 py-3">
            <Link href="#experiencia">Experiencia</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full text-muted-foreground text-lg px-6 py-3">
            <Link href="#proyectos">Proyectos</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full text-muted-foreground text-lg px-6 py-3">
            <Link href="#contacto">Contacto</Link>
          </Button>
        </div>

        {/* Iconos Sociales y Tema (Alineados y más grandes) */}
        <div className="flex h-[100px] items-center gap-4">
          {/* Botones de ícono más grandes (56px) */}
          <Button asChild variant="outline" size="icon" className="h-56px w-56px">
            <a
              href="https://github.com/tu-usuario" // Reemplaza con tu URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
            >
              <SiGithub className="h-6 w-6" /> {/* Icono más grande */}
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="h-56px w-56px">
            <a
              href="https://linkedin.com/in/tu-usuario" // Reemplaza con tu URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
            >
              <SiLinkedin className="h-6 w-6" /> {/* Icono más grande */}
            </a>
          </Button>
          <ThemeToggle /> {/* Se actualizará en el siguiente archivo */}
        </div>
      </nav>
    </header>
  );
}