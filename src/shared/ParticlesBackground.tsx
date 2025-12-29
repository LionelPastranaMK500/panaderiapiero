/* src/shared/ParticlesBackground.tsx */
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useThemeStore } from "../store/themeStore";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { isDarkMode } = useThemeStore(); // Escuchamos el cambio de tema

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  // Lógica de color EXACTA:
  // Si es Noche (Dark): Color Dorado (#C5A059) para que brille.
  // Si es Día (Light): Color Madera (#2D241E) para que se vea sobre el crema.
  const particleColor = isDarkMode ? "#C5A059" : "#2D241E";

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          width: 1024,
          height: 1024,
        },
      },
      color: {
        value: particleColor, // Usamos la variable dinámica
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.2, max: 0.5 },
      },
      size: {
        value: { min: 2, max: 4 },
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      // La clave 'key' fuerza a React a recargar el componente cuando cambia el tema
      key={isDarkMode ? "dark" : "light"}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-500"
      options={options}
    />
  );
};
