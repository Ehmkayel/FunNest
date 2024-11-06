import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleTunnel = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fpsLimit: 30, // Limit frame rate for performance
    particles: {
      number: {
        value: 100, // Increase particle count for a denser effect
        density: {
          enable: true,
          value_area: 800, // Adjust area for particle density
        },
      },
      move: {
        enable: true,
        speed: 6, // Faster speed to simulate movement through the tunnel
        direction: 'top', // Move particles upward for the tunnel effect
        random: false,
        straight: false,
        outModes: {
          top: 'out', // Move particles out when they reach the top
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      shape: {
        type: 'circle', // Circular particles work best for a tunnel effect
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: true,
          speed: 5,
          size_min: 0.1,
        },
      },
      links: {
        enable: false, // Disable particle links for a cleaner effect
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
    },
    background: {
      color: "#000", // Dark background for tunnel effect
    },
    emitters: {
      position: { x: '50%', y: '50%' },
      rate: {
        delay: 0.1,
        quantity: 10,
      },
      size: {
        width: '100%',
        height: '100%',
      },
    },
  };

  return (
    <Particles 
      id="tsparticles" 
      init={particlesInit} 
      options={options} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }} 
    />
  );
};

export default ParticleTunnel;
