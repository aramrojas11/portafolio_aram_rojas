'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detecta clic fuera del menú y lo cierra
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed top-4 right-4 z-50 p-2 sm:right-8 sm:top-8">
      {/* Botón Hamburguesa (solo móvil) */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="border-2 border-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Navegación Desktop */}
      <nav className="hidden md:flex flex-col items-end gap-6">
        <Link
          href="/"
          className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-foreground overflow-hidden"
          aria-label="Volver al inicio"
        >
          <Image
            src="/LogoWhite.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain dark:hidden"
          />
          <Image
            src="/LogoBlack.png"
            alt="Logo"
            width={100}
            height={100}
            className="hidden object-contain dark:block"
          />
        </Link>

        <div className="flex flex-col items-end gap-3">
          {['inicio', 'experiencia', 'proyectos', 'contacto'].map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className="relative text-base text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {id.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button asChild variant="outline" size="icon" className="w-9 h-9 border-2 border-foreground">
            <a href="https://github.com/aramrojas11" target="_blank" rel="noopener noreferrer">
              <SiGithub className="h-6 w-6" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="w-9 h-9 border-2 border-foreground">
            <a href="https://linkedin.com/in/aram-rojas-182436277" target="_blank" rel="noopener noreferrer">
              <SiLinkedin className="h-6 w-6" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>

      {/* --- Overlay Móvil --- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fondo semitransparente (detecta clic para cerrar) */}
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Panel lateral del menú */}
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[50%] sm:w-[50%] bg-background/95 backdrop-blur-md p-8 flex flex-col items-end gap-6 shadow-lg z-50 md:hidden"
            >
              {['inicio', 'experiencia', 'proyectos', 'contacto'].map((id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-foreground hover:text-muted-foreground transition"
                >
                  {id.toUpperCase()}
                </Link>
              ))}

              <div className="flex flex-row gap-4 mt-auto">
                <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-8 w-8" />
                </a>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
