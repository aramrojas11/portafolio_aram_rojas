// app/components/MouseFollower.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Definimos el tamaño aquí para que sea fácil de cambiar
const FOLLOWER_SIZE = 20;

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="mouse-follower"
      style={{
        // Limpiamos los estilos de posicionamiento de aquí
        pointerEvents: 'none',
        zIndex: 9999,
        // Añadimos el tamaño desde nuestra constante
        width: FOLLOWER_SIZE,
        height: FOLLOWER_SIZE,
      }}
      // ---- INICIO DE CAMBIOS ----
      // Centramos el círculo restando la mitad de su tamaño
      animate={{
        x: position.x - FOLLOWER_SIZE / 2,
        y: position.y - FOLLOWER_SIZE / 2,
      }}
      // Ajustamos la transición para que sea más reactiva (menos "masa")
      transition={{
        type: 'spring',
        mass: 0.05, // Más ligero
        stiffness: 80, // Más rápido
        damping: 10, // Menos rebote
        delay: 0,
      }}
      // ---- FIN DE CAMBIOS ----
    />
  );
}