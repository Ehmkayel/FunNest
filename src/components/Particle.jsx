import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const loadParticles = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 150, // Increase particle count
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: ['circle', 'square', 'triangle'], // Add different shapes
            options: {
              polygon: {
                sides: 5,
              },
              image: {
                src: 'path/to/your/image.png',
                width: 100,
                height: 100,
              },
            },
          },
          color: {
            value: ['#FFD700', '#FF69B4', '#BA55D3', '#87CEEB', '#32CD32'], // Bright colors
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: { min: 5, max: 15 }, // Small, bubble-like sizes
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
