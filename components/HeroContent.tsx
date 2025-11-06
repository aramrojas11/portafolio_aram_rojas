// app/components/HeroContent.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';

export function HeroContent() {
  return (
    // Contenedor de Framer Motion para la animación de entrada
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y 20px abajo
      animate={{ opacity: 1, y: 0 }}   // Estado final: visible y en posición
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Duración y tipo de animación
    >
      {/* Título Principal (Mejorado de tu boceto) */}
      <div className="rounded-full border border-foreground/30 bg-background/50 px-6 py-3 shadow-md backdrop-blur-sm">
        <h1 className="text-center text-2xl font-medium sm:text-3xl md:text-4xl font-heading">
          Aram Rojas | Software Engineer
        </h1>
      </div>

      {/* Subtítulo y CTA (Mejoras) */}
      <p className="mt-8 max-w-xl text-center text-lg text-white-muted-foreground">
        Construyendo experiencias web performantes y accesibles,
        combinando diseño y funcionalidad.
      </p>

      <Button asChild size="lg" className="mt-8 font-semibold">
        <Link href="#proyectos">
          Ver mis Proyectos
        </Link>
      </Button>
    </motion.div>
  );
}