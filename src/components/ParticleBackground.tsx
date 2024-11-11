'use client';

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#3b82f6',
          },
          links: {
            color: '#3b82f6',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
} 