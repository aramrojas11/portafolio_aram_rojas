// app/components/HeroContent.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

// Variantes de animación para Framer Motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre la animación de los hijos
    },
  },
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function HeroContent() {
  return (
    <motion.div
      className="flex flex-col items-center text-center px-4" // Añadimos text-center y px-4
      variants={containerVariants} // Usamos las variantes del contenedor
      initial="hidden"
      animate="visible"
    >
      {/* Título Principal y Animación de Texto */}
      <motion.div
        className="rounded-full border border-foreground/30 bg-background/50 px-6 py-3 shadow-md backdrop-blur-sm"
        variants={itemVariants} // Animamos el div del título
      >
        <h1 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground"> {/* Aseguramos el color */}
          Aram Rojas | {' '}
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Desarrollador de Soluciones',
              2000,
              'Frontend Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary inline-block" // Añadimos inline-block para que ocupe espacio
          />
        </h1>
      </motion.div>

      {/* Subtítulo */}
      <motion.p
        className="mt-8 max-w-xl text-lg text-muted-foreground" // Usamos muted-foreground para consistencia
        variants={itemVariants} // Animamos el párrafo
      >
        Construyendo experiencias web performantes y accesibles,
        combinando diseño y funcionalidad.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        variants={itemVariants} // Animamos el botón
      >
        <Button asChild size="lg" className="mt-8 font-semibold">
          <Link href="#proyectos">
            Ver mis Proyectos
          </Link>
        </Button>
      </motion.div>

      {/* Flecha de "Scroll Down" (Opcional, pero añade dinamismo) */}
      <motion.div
        className="mt-16 text-foreground/50 hover:text-foreground transition-colors duration-300"
        variants={itemVariants}
        // Animación para que la flecha rebote
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Link href="#experiencia" aria-label="Desplazarse a la sección de experiencia">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mx-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}