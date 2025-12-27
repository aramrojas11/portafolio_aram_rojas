"use client";

import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  },
};

const arrowBounce: Variants = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: [0, 15, 0],
    opacity: 1,
    transition: {
      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      opacity: { duration: 0.5, ease: "easeOut" }
    }
  },
};

export function HeroContent() {
  return (
    <motion.div
      // AJUSTES DE ESPACIADO:
      // 1. lg:pt-1 -> Deja solo ~4px arriba en escritorio. Elimina el scroll "negativo".
      // 2. lg:px-12 -> Margen lateral equilibrado.
      className="relative z-10 w-full min-h-screen flex flex-col justify-between p-6 sm:p-12 lg:px-12 lg:pt-1 lg:pb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* 1. NOMBRE (Arriba Izquierda - Pegado al top en Desktop) */}
      <motion.div
        variants={itemVariants}
        // Mobile: pt-24 (necesario por el navbar superior)
        // Desktop: lg:pt-0 (elimina cualquier espacio extra arriba)
        className="flex flex-col justify-start pt-24 lg:pt-0"
      >
        <h1 className="font-black text-foreground uppercase tracking-tighter leading-[0.85]">
          <span className="block text-[15vw] sm:text-[12vw] lg:text-[11vw]">
            Aram
          </span>
          <span className="block text-[15vw] sm:text-[12vw] lg:text-[11vw] text-muted-foreground/80">
            Rojas
          </span>
        </h1>

        <div className="mt-6 md:mt-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <motion.div
            className="h-1.5 w-24 bg-primary rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <TypeAnimation
            sequence={[
              "Software Engineer", 2000,
              "Fullstack Developer", 2000,
              "Creative Solver", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-3xl font-bold tracking-widest uppercase text-foreground/80 font-heading"
          />
        </div>
      </motion.div>


      {/* 2. FLECHA (Centro) */}
      <motion.div
        className="flex-1 flex items-center justify-center py-10"
        variants={itemVariants}
      >
        <motion.div
          variants={arrowBounce}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-bold">
            Scroll
          </span>
          <div className="p-3 rounded-full border border-border/40 bg-background/30 backdrop-blur-sm shadow-sm">
            <ChevronDown className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
        </motion.div>
      </motion.div>


      {/* 3. SLOGAN (Abajo Derecha - Con espacio seguro) */}
      <motion.div
        variants={itemVariants}
        // lg:justify-end -> Alinea el bloque a la derecha
        // lg:pr-[22rem] -> Deja 352px de espacio a la derecha. 
        // El sidebar mide 288px (w-72), así que sobran ~64px de "aire" para que no se pegue.
        className="w-full flex justify-start lg:justify-end pb-10 lg:pb-8 lg:pr-[16rem]"
      >
        {/* lg:text-right -> Alinea el texto a la derecha dentro del bloque */}
        <p className="text-3xl sm:text-5xl lg:text-7xl font-extrabold font-heading uppercase leading-none tracking-tight text-left lg:text-right max-w-4xl">
          <span className="text-foreground">Proyectos con </span>
          <span className="text-muted-foreground italic">Impacto,</span>
          <br />
          <span className="text-primary">Soluciones a medida.</span>
        </p>
      </motion.div>

    </motion.div>
  );
}