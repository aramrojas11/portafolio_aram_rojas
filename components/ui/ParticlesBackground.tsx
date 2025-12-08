"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { type ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme(); 

  // 1. Inicializar motor
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    }).catch((error) => {
        console.error("Error initializing particles engine:", error);
    });
  }, []);

  // Si resolvedTheme es 'dark', partículas BLANCAS. Si no, GRISES.
  const color = resolvedTheme === "dark" ? "#ffffff" : "#333333";

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: color,
        },
        links: {
          color: color,
          distance: 150,
          enable: true,
          opacity: 1, // Opacidad de las líneas
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Cantidad de partículas
        },
        opacity: {
          value: 1, // Aumenté un poco la opacidad para que se vean mejor
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [color]
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}