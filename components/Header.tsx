// app/components/Header.tsx
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image'; // <-- 1. IMPORTA Image
import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full p-4 sm:px-8">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo (Ahora con next/image) */}
        <Link
          href="/"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-foreground transition-transform hover:scale-105 overflow-hidden"
          aria-label="Volver al inicio"
        >
          {/* Logo para Modo Claro */}
          <Image // <-- 2. REEMPLAZA <img>
            src="/LogoWhite.png" //
            alt="Logo"
            width={40}  // <-- 3. AÑADE width (h-10 = 40px)
            height={40} // <-- 4. AÑADE height (w-10 = 40px)
            className="object-contain dark:hidden" // <-- 5. QUITA h-10 y w-10
          />
          {/* Logo para Modo Oscuro */}
          <Image // <-- 2. REEMPLAZA <img>
            src="/LogoBlack.png" //
            alt="Logo"
            width={40}  // <-- 3. AÑADE width
            height={40} // <-- 4. AÑADE height
            className="hidden object-contain dark:block" // <-- 5. QUITA h-10 y w-10
          />
        </Link>

        {/* Navegación Principal (Tamaño 140px) */}
        <div 
          className="hidden h-[60px] items-center gap-2 rounded-full border-2 border-foreground bg-background/50 p-4 backdrop-blur-sm sm:flex"
        >
          {/* Botones más grandes */}
          <Button asChild variant="ghost" className="rounded-full font-medium text-lg px-6 py-3">
            <Link href="#inicio">[ Inicio ]</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full text-muted-foreground text-lg px-6 py-3">
            <Link href="#experiencia">[ Experiencia ]</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full text-muted-foreground text-lg px-6 py-3">
            <Link href="#proyectos">[ Proyectos ]</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full text-muted-foreground text-lg px-6 py-3">
            <Link href="#contacto">[ Contacto ]</Link>
          </Button>
        </div>

        {/* Iconos Sociales y Tema (Alineados y más grandes) */}
        <div className="flex h-[100px] items-center gap-4">
          {/* Botones de ícono más grandes (56px) */}
          <Button asChild variant="outline" size="icon" className="h-56px w-56px border-2 border-foreground">
            <a
              href="https://github.com/tu-usuario" // Reemplaza con tu URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
            >
              <SiGithub className="h-6 w-6" /> {/* Icono más grande */}
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="h-56px w-56px border-2 border-foreground">
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