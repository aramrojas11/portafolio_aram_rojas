"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Globe, Smartphone, ArrowUpRight } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";

// Datos de tus proyectos basados en tu archivo .txt
const projects = [
  {
    id: 1,
    title: "Jaibin-Store",
    category: "FULLSTACK E-COMMERCE",
    description: "Tienda en línea completa con administración en tiempo real. Gestión de inventario, conexión a WhatsApp y despliegue continuo.",
    tags: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    links: {
      demo: "https://jaibin-store.vercel.app", // Pon aquí tu link real
      repo: "https://github.com/aramrojas11/jaibin-store",
    },
    image: "/projects/jaibin-mockup.png", // <--- RUTA PENDIENTE (ver nota abajo)
    color: "from-blue-500/20 to-purple-500/20", // Color ambiental para el fondo
  },
  {
    id: 2,
    title: "LightContact",
    category: "MOBILE INNOVATION",
    description: "Sistema móvil para cotización y control de luminarias industriales. Integra GPS nativo, sensores y cálculos de ingeniería en tiempo real.",
    tags: [".NET MAUI", "MVVM", "C#", "GPS Integration"],
    links: {
      demo: null, // Si no hay demo web, no se muestra
      repo: "https://github.com/aramrojas11/lightcontact",
    },
    image: "/projects/lightcontact-mockup.png", // <--- RUTA PENDIENTE
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Moto Segura",
    category: "IOT & TELEMETRY",
    description: "Dispositivo de seguridad inteligente para motociclistas. Detecta caídas y accidentes mediante giroscopio y envía alertas GPS en tiempo real.",
    tags: ["ESP8266", "C++", "MQTT", "Hardware"],
    links: {
      demo: null,
      repo: "https://github.com/aramrojas11/moto-segura",
    },
    image: "/projects/moto-mockup.png", // <--- RUTA PENDIENTE
    color: "from-orange-500/20 to-red-500/20",
  },
];

// Componente de Tarjeta Individual
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full py-20 md:py-32 flex flex-col items-center">

      {/* Contenedor Principal: Flex row alternado */}
      <div className={cn(
        "flex flex-col gap-12 md:gap-20 w-full max-w-7xl px-6 relative z-10",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}>

        {/* --- COLUMNA 1: TEXTO (El "Recuadro Atractivo") --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center"
        >
          {/* Caja decorativa del texto */}
          <div className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-colors">

            {/* Gradiente sutil de fondo */}
            <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700", project.color)} />

            <div className=" relative z-10">
              {/* Categoría pequeña estilo 'New Touchpoints' */}
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary mb-4 uppercase">
                {project.category}
              </span>

              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {project.title}
              </h3>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-border bg-background/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                {project.links.repo && (
                  <Button variant="outline" className="gap-2 rounded-full h-12 px-6" asChild>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Código
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                  <Button className="gap-2 rounded-full h-12 px-6" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" /> Ver Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- COLUMNA 2: IMAGEN (Animación de entrada) --- */}
        <motion.div
          className="flex-1 relative aspect-4/3 md:aspect-square lg:aspect-16/10 rounded-3xl overflow-hidden bg-muted/20 border border-white/10"
          initial={{ clipPath: "inset(10% 10% 10% 10%)", scale: 0.9, opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Curva de animación suave
        >
          {/* PLACEHOLDER MIENTRAS PONES TUS IMÁGENES */}
          {/* Cuando tengas las imágenes, descomenta el componente Image abajo y borra este div */}

          <div className={cn("w-full h-full bg-linear-to-br opacity-30", project.color)}></div>
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl uppercase">
            {/* Aquí iría la imagen */}
            Image Preview
          </div>

          {/* <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          /> 
          */}

          {/* Overlay sutil al hacer hover (opcional) */}
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="proyectos" className="w-full  overflow-hidden relative">

      {/* Encabezado de Sección */}
      <div className="pt-32 pb-10 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-extrabold uppercase tracking-tight"
        >
          Proyectos <br />
          <span className="text-muted-foreground font-light normal-case italic text-3xl md:text-5xl">
            Seleccionados
          </span>
        </motion.h2>
      </div>

      {/* Lista de Proyectos */}
      <div className="flex flex-col w-full pb-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}