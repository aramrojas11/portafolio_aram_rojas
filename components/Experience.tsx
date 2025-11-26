"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Smartphone, Cpu, ArrowUpRight } from "lucide-react";
import { cn } from "@/app/lib/utils";

// Definimos tus 3 grandes áreas basadas en tus proyectos
const experienceData = [
  {
    id: "web",
    title: "Desarrollo Fullstack",
    icon: Code2,
    role: "Frontend & Backend",
    description: "Construcción de aplicaciones web modernas, escalables y responsivas.",
    // Datos extraídos de Jaibin-Store y Portafolio
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL)",
      "Framer Motion",
      "Vercel"
    ],
  },
  {
    id: "mobile",
    title: "Desarrollo Mobile",
    icon: Smartphone,
    role: "Cross-Platform Engineer",
    description: "Apps nativas con arquitecturas limpias e integración de hardware.",
    // Datos extraídos de LightContact
    tags: [
      ".NET MAUI",
      "C#",
      "MVVM Architecture",
      "CommunityToolkit",
      "Integración GPS",
      "MercadoPago API"
    ],
  },
  {
    id: "iot",
    title: "IoT & Hardware",
    icon: Cpu,
    role: "Embedded Systems",
    description: "Conexión entre el mundo físico y digital mediante microcontroladores.",
    // Datos extraídos de Moto Segura y SAP
    tags: [
      "ESP32 / ESP8266",
      "Arduino IDE",
      "C++",
      "Sensores (Giroscopio/GPS)",
      "Protocolos Seriales",
      "Telemetría MQTT/HTTP"
    ],
  },
];

export default function Experience() {
  // Estado para saber qué ítem está activo (hover en desktop, click en móvil)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experiencia" className="w-full py-20 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-border pb-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
            Experiencia <span className="text-muted-foreground text-2xl md:text-4xl normal-case font-light">& Habilidades</span>
          </h2>
        </motion.div>

        {/* Lista tipo Acordeón */}
        <div className="flex flex-col">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-border py-8 md:py-12 cursor-default transition-colors hover:bg-accent/5"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-10">
                
                {/* 01. Título e Icono */}
                <div className="flex items-center gap-4 md:w-1/3">
                  <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  <h3 className={cn(
                    "text-3xl md:text-5xl font-bold transition-colors duration-300",
                    hoveredIndex === index ? "text-primary" : "text-foreground"
                  )}>
                    {item.title}
                  </h3>
                </div>

                {/* 02. Rol y Descripción (Visible siempre, pero se anima suave) */}
                <div className="md:w-1/3">
                   <h4 className="text-lg font-semibold mb-2">{item.role}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                     {item.description}
                   </p>
                </div>

                {/* 03. Icono flecha (Decorativo) */}
                <div className="hidden md:flex justify-end md:w-1/6">
                   <ArrowUpRight 
                     className={cn(
                       "w-12 h-12 transition-transform duration-500",
                       hoveredIndex === index ? "text-primary rotate-45" : "text-muted-foreground/30"
                     )} 
                   />
                </div>
              </div>

              {/* 04. Contenido Desplegable (Tags) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 flex flex-wrap gap-3 md:ml-[33%]"> 
                      {/* El margin-left alinea los tags con la descripción en Desktop */}
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}