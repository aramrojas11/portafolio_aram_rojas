// app/components/HeroContent.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Variantes de animación (sin cambios)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroContent() {
  return (
    // ---- 1. Contenedor Principal ----
    // En 'lg' (desktop): se vuelve 'block' para permitir posicionamiento absoluto.
    <motion.div
      className="relative w-full min-h-screen p-8 sm:p-16 flex flex-col lg:block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ---- 2. BLOQUE DE NOMBRE Y SKILLS ---- */}
      {/* 'relative z-10' para estar sobre el fondo (si lo hubiera) */}
      {/* Añadimos 'pt-24' para dejar espacio al Header en móvil */}
      <motion.div
        className="relative z-10 pt-24 lg:pt-0"
        variants={textItemVariants}
      >
        {/* TAMAÑO RESPONSIVO para el Nombre */}
        <h1 className="text-4xl sm:text-7xl lg:text-9xl font-extrabold font-heading text-foreground">
          ARAM ROJAS
        </h1>

        {/* Línea divisoria */}
        <motion.div
          className="w-full h-[5px] bg-foreground my-4 lg:h-2.5" // Más delgada en móvil
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* TAMAÑO RESPONSIVO para Skills */}
        <TypeAnimation
          sequence={[
            "SOFTWARE ENGINEER",
            2000,
            "DESARROLLADOR DE SOLUCIONES",
            2000,
            "FRONTEND DEVELOPER",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          // Más pequeño en móvil, gigante en desktop
          className="text-xl sm:text-2xl lg:text-7xl font-extrabold font-heading text-foreground uppercase"
        />
      </motion.div>

      {/* ---- 3. BLOQUE DEL SLOGAN ---- */}
      <motion.div
        // En 'lg' (desktop): 'absolute', 'bottom-16', 'right-16', 'text-right'
        className="relative z-10 mt-auto text-left lg:absolute lg:mt-0 lg:bottom-16 lg:right-65 lg:text-right"
        variants={textItemVariants}
      >
        {/* TAMAÑO RESPONSIVO para Slogan */}
        <p className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-heading text-foreground uppercase">
          PROYECTOS CON IMPACTO,
          <br />
          SOLUCIONES HECHAS A TU MEDIDA.
        </p>
      </motion.div>
    </motion.div>
  );
}