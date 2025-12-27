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
    href: "https://www.linkedin.com/in/aram-rojas-182436277/",
    label: "Conectar en LinkedIn",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:aramrojas11@gmail.com",
    label: "aramrojas11@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="w-full py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* CONTENEDOR ÚNICO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative border border-border bg-muted/40 rounded-3xl px-8 py-10 md:px-14 md:py-14 transition-all hover:bg-muted/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* --- IZQUIERDA: Hablemos --- */}
            <div>
              <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 font-heading">
                Hablemos
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-md">
                ¿Tienes un proyecto en mente o una idea innovadora? Estoy listo para colaborar y crear soluciones de alto impacto.
              </p>

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
            </div>

            {/* --- DERECHA: Formulario --- */}
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Nombre
                </label>
                <Input
                  placeholder="Tu nombre"
                  className="h-12 bg-background/50 border-primary/20 focus:border-primary text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  className="h-12 bg-background/50 border-primary/20 focus:border-primary text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="flex w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-lg resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <Button size="lg" className="w-full h-14 text-lg gap-2 rounded-full">
                Enviar Mensaje <Send className="w-5 h-5" />
              </Button>
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
