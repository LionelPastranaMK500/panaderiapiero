import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useThemeStore } from "../store/themeStore";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      number: {
        value: 60, // Aumentado un 20% para mayor presencia visual
        density: {
          enable: true,
          width: 1024,
          height: 1024,
        },
      },
      color: {
        value: isDarkMode ? "#C5A059" : "#8B5E34",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 2, max: 5 },
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          size: 10,
          duration: 2,
          opacity: 0.8,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      options={options}
    />
  );
};
