"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Send, ArrowRight, Phone } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

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
  {
    name: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/525560599340",
    label: "+52 55 6059 9340",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaVal, setCaptchaVal] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCaptchaChange = (val: string | null) => {
    setCaptchaVal(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!captchaVal) {
      alert("Por favor verifica que no eres un robot.");
      return;
    }

    setStatus("submitting");

    // LÓGICA SEGURA: Usamos la variable de entorno
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formId) {
      console.error("Falta el ID de Formspree en las variables de entorno");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaVal(null);
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="w-full py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative border border-border bg-muted/40 rounded-3xl px-8 py-10 md:px-14 md:py-14 transition-all hover:bg-muted/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* IZQUIERDA */}
            <div>
              <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 font-heading">
                Hablemos
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-md">
                ¿Tienes un proyecto en mente? Estoy listo para colaborar y crear soluciones de alto impacto.
              </p>

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

            {/* DERECHA (FORMULARIO) */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Nombre
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="h-12 bg-background/50 border-primary/20 focus:border-primary text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@gmail.com"
                  required
                  className="h-12 bg-background/50 border-primary/20 focus:border-primary text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="flex w-full rounded-md border border-primary/20 bg-background/50 px-3 py-2 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* RECAPTCHA: Ahora lee la variable de entorno */}
              <div className="flex justify-start transform scale-90 origin-left">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={onCaptchaChange}
                  theme="dark"
                />
              </div>

              <Button
                size="lg"
                disabled={status === "submitting" || status === "success"}
                className="w-full h-14 text-lg gap-2 rounded-full"
              >
                {status === "submitting" ? (
                  "Enviando..."
                ) : status === "success" ? (
                  "¡Mensaje Enviado!"
                ) : (
                  <>Enviar Mensaje <Send className="w-5 h-5" /></>
                )}
              </Button>

              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
              )}
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}