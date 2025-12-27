"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Mail, Home, Briefcase, FolderGit2, MessageSquare, Phone } from "lucide-react";

// 1. Agregamos 'id' para que el detector de scroll sepa qué buscar
const navItems = [
  { name: "Inicio", path: "#inicio", id: "inicio", icon: Home },
  { name: "Experiencia", path: "#experiencia", id: "experiencia", icon: Briefcase },
  { name: "Proyectos", path: "#proyectos", id: "proyectos", icon: FolderGit2 },
  { name: "Contacto", path: "#contacto", id: "contacto", icon: MessageSquare },
];

const socialItems = [
  { name: "GitHub", icon: Github, href: "https://github.com/aramrojas11" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aram-rojas-182436277/" },
  { name: "Email", icon: Mail, href: "mailto:aramrojas11@gmail.com" },
  { name: "WhatsApp", icon: Phone, href: "https://wa.me/525560599340" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Estado para el bloqueo manual (Peek Mode)
  const [peekMode, setPeekMode] = useState(false);

  // Estado para saber en qué sección estamos realmente
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    // A. Lógica de Scroll (Navbar transparente/sólido)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Opcional: Si scrolleas, quitamos el bloqueo manual para que vuelva a comportarse normal
      if (window.scrollY > 50) setPeekMode(false);
    };
    window.addEventListener("scroll", handleScroll);

    // B. Lógica de "Scroll Spy" (Detectar sección activa)
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Ajusta el área de detección al centro de la pantalla
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones definidas en navItems
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  /* CORRECCIÓN DE LÓGICA DE BLOQUEO:
     La condición '!peekMode' ahora envuelve a todo.
     Significa: "Si el modo bloqueo está ACTIVO (true), NO te expandas por nada del mundo".
     Solo si está DESACTIVADO (false), obedecemos al Hover o al Scroll.
  */
  const isSidebarExpanded = !peekMode && (isHovered || !isScrolled);

  return (
    <>
      {/* =======================================
          DESKTOP SIDEBAR (Derecha)
         ======================================= */}
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "hidden md:flex flex-col fixed right-0 top-0 h-screen z-50 transition-all duration-500 ease-in-out border-l",
          isSidebarExpanded
            ? "w-72 bg-background/80 backdrop-blur-md border-border"
            : "w-[80px] bg-transparent border-transparent pointer-events-auto"
        )}
      >
        <div className="flex flex-col h-full p-6 relative">

          {/* --- LOGO --- */}
          <div className={cn(
            "flex items-center w-full mb-12 transition-all duration-500",
            isSidebarExpanded ? "justify-between" : "justify-center"
          )}>

            <AnimatePresence>
              {isSidebarExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-left"
                >
                  <h1 className="font-bold text-lg leading-none">Aram Rojas</h1>
                  <span className="text-xs text-muted-foreground">Dev Portfolio</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTÓN LOGO: Activa/Desactiva el Peek Mode */}
            <div
              onClick={() => setPeekMode(!peekMode)}
              className="relative w-10 h-10 shrink-0 cursor-pointer hover:scale-105 transition-transform"
              // Tooltip dinámico correcto
              title={peekMode ? "Click para restaurar menú" : "Click para ocultar menú"}
            >
              {!isSidebarExpanded && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/50"
                    animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </>
              )}
              <div className="relative w-10 h-10 overflow-hidden rounded-full bg-background z-10">
                <Image src="/logo_black_n.png" alt="Logo" fill className="object-cover dark:hidden" />
                <Image src="/logo_white_n.png" alt="Logo" fill className="object-cover hidden dark:block" />
              </div>
            </div>
          </div>

          {/* --- LINKS --- */}
          <div className="flex-1 flex flex-col gap-2">
            <AnimatePresence>
              {isSidebarExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                  className="flex flex-col gap-2"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      // Al hacer click en un link, quitamos el bloqueo para que la navegación fluya
                      onClick={() => setPeekMode(false)}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group",
                        // AQUÍ ESTÁ LA CORRECCIÓN VISUAL: Comparamos con activeSection
                        activeSection === item.id
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-accent text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-base">{item.name}</span>

                      {/* Animación de la barra activa */}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="active-nav"
                          className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                        />
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- FOOTER --- */}
          <AnimatePresence>
            {isSidebarExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6 border-t border-border flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tema</span>
                  <ThemeToggle />
                </div>

                <div className="flex justify-between gap-2">
                  {socialItems.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.nav>

      {/* MOBILE HEADER */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border">
        <div className="relative w-9 h-9 rounded-full overflow-hidden">
          <Image src="/logo_black_n.png" alt="Logo" fill className="object-cover dark:hidden" />
          <Image src="/logo_white_n.png" alt="Logo" fill className="object-cover hidden dark:block" />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col pt-12">
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-colors",
                      // También corregido para Móvil
                      activeSection === item.id ? "bg-primary/10 text-primary" : "hover:bg-accent text-muted-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex gap-4 justify-center pb-8 flex-wrap">
                {socialItems.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}