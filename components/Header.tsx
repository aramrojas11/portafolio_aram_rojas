"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Experiencia", path: "#experiencia" },
  { name: "Proyectos", path: "#proyectos" },
  { name: "Contacto", path: "#contacto" },
];

const socialItems = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/aramrojas11",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aram-rojas-182436277/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:aramrojas11@gmail.com",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Estados para scroll y hover
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lógica: Mostrar menú si NO hay scroll O si el usuario hace hover
  const showDesktopMenu = !isScrolled || isHovered;

  // Variantes de animación para el contenido del menú
  const containerVariants = {
    hidden: { opacity: 0, x: 20, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* --- DESKTOP SIDEBAR (DERECHA) --- */}
      <motion.header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "hidden md:flex flex-col fixed right-0 top-0 h-screen z-50 transition-all duration-500 ease-in-out bg-background/80 backdrop-blur-md",
          // Borde izquierdo solo visible si el menú está abierto
          showDesktopMenu
            ? "w-64 border-l border-border"
            : "w-[90px] border-l border-transparent bg-transparent backdrop-blur-none"
        )}
      >
        <div
          className={cn(
            "flex flex-col h-full p-6 transition-all duration-500",
            // Si está cerrado, alineamos todo a la derecha para que el logo quede pegado al borde
            !showDesktopMenu && "items-end pr-6"
          )}
        >
          {/* LOGO + ANIMACIÓN RIPPLE */}
          <div className="relative z-20 mb-10 shrink-0 flex justify-end w-full">
            {/* Contenedor del Logo con Ripple */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Animación de ondas (Solo visible cuando está scrolleado y NO hay hover) */}
              {!showDesktopMenu && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/50"
                    animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ scale: [1, 2.2], opacity: [1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                  />
                </>
              )}

              {/* Logo Image */}
              <div className="relative w-12 h-12 z-30 overflow-hidden rounded-full bg-background">
                <Image
                  src="/logo_black_n.png"
                  alt="Logo"
                  fill
                  className="object-cover dark:hidden"
                />
                <Image
                  src="/logo_white_n.png"
                  alt="Logo"
                  fill
                  className="object-cover hidden dark:block"
                />
              </div>
            </div>
          </div>

          {/* CONTENIDO DEL MENÚ (Texto, Nav, Redes) */}
          <AnimatePresence>
            {showDesktopMenu && (
              <motion.div
                className="flex flex-col flex-1 justify-between overflow-hidden text-right" // Alineación a la derecha
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Nombre */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h1 className="font-bold text-xl leading-none">Aram Rojas</h1>
                  <p className="text-sm text-muted-foreground">
                    Fullstack Developer
                  </p>
                </motion.div>

                {/* Navegación */}
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      variants={itemVariants}
                      className="flex justify-end"
                    >
                      <Link
                        href={item.path}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition-colors hover:bg-accent group relative",
                          pathname === item.path
                            ? "text-foreground font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.name}
                        {/* Indicador activo (ahora a la derecha) */}
                        {pathname === item.path && (
                          <motion.div
                            layoutId="activeNavDesktop"
                            className="absolute right-0 w-1 h-6 bg-primary rounded-l-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Actions */}
                <motion.div
                  className="flex flex-col gap-4 pt-6 border-t items-end"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-end gap-3 w-full">
                    <ThemeToggle />
                  </div>

                  <div className="flex gap-2 justify-end">
                    {socialItems.map((social) => (
                      <Button
                        key={social.name}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-accent hover:text-accent-foreground"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* --- MOBILE HEADER --- */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b">
        {/* Cambiar el tema*/}
        <ThemeToggle />

        {/* Logo Izquierda (Móvil) */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/logo_black_n.png"
            alt="Logo"
            fill
            className="object-cover dark:hidden"
          />
          <Image
            src="/logo_white_n.png"
            alt="Logo"
            fill
            className="object-cover hidden dark:block"
          />
        </div>

        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>

            {/* SHEET CONTENT: Alineado a la derecha, fuente grande */}
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col items-end text-right pt-20"
            >
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

              <nav className="flex flex-col gap-8 mt-10 pr-[5px]">
                {" "}
                {/* Gap y Padding derecho solicitado */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-bold transition-colors hover:text-primary relative", // Fuente más grande
                      pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col items-end gap-6 pb-10 pr-[5px]">
                <span className="text-sm text-muted-foreground">
                  Mis redes:{" "}
                </span>
                <div className="flex gap-4">
                  {socialItems.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <social.icon className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
