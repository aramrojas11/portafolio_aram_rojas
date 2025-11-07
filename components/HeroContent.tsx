// app/components/HeroContent.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation'; // <-- 1. IMPORTAR

export function HeroContent() {
  return (
    // Contenedor de Framer Motion para la animación de entrada
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y 20px abajo
      animate={{ opacity: 1, y: 0 }}   // Estado final: visible y en posición
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Duración y tipo de animación
    >
      {/* ---- INICIO DE CAMBIOS ---- */}
        <h1 className="text-center text-2xl font-medium sm:text-3xl md:text-4xl font-heading">
          Aram Rojas | {' '}
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000, // Pausa de 2 segundos
              'Desarrollador de Soluciones',
              2000, // Pausa de 2 segundos
              'Frontend Developer',
              2000,
              // Puedes añadir más frases aquí
            ]}
            wrapper="span"
            speed={50} // Velocidad de escritura
            repeat={Infinity} // Repetir infinitamente
            className="text-primary" // Opcional: para darle un color diferente
          />
        </h1>
        {/* ---- FIN DE CAMBIOS ---- */}

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