"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Send, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/aramrojas11",
    label: "@aramrojas11",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aram-rojas-182436277/", // Actualiza esto
    label: "Conectar en LinkedIn",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:aramrojas11@gmail.com", // Actualiza esto
    label: "aramrojas11@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="w-full py-24 md:py-32 px-6 md:px-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- COLUMNA IZQUIERDA: Información --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 font-heading">
                Hablemos
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-md">
                ¿Tienes un proyecto en mente o una idea innovadora? Estoy listo para colaborar y crear soluciones de alto impacto.
              </p>
            </div>

            {/* Links Sociales */}
            <div className="mt-12 space-y-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  <div className="p-3 rounded-full border border-border bg-background group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span>{item.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: Formulario --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Fondo decorativo sutil */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-3xl -z-10 blur-xl" />

            <form className="p-8 md:p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-sm space-y-8 shadow-sm">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Nombre
                </label>
                <Input 
                  id="name" 
                  placeholder="Tu nombre" 
                  className="h-12 bg-background/50 border-primary/20 focus:border-primary text-lg"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="aramrojas11@gmail.com" 
                  className="h-12 bg-background/50 border-primary/20 focus:border-primary text-lg"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="flex w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-lg shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <Button 
                size="lg" 
                className="w-full h-14 text-lg gap-2 rounded-full mt-4"
              >
                Enviar Mensaje <Send className="w-5 h-5" />
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}