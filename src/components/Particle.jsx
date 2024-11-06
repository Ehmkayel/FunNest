import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  // Initialize particles library
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Optional: Callback when particles are loaded
  const particlesLoaded = (container) => {};

  // Your JSON config as a JavaScript object:
  const options = {
    autoPlay: true,
    background: {
      color: { value: "#000000" },
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: { value: "#fff" },
        opacity: 1
      },
      enable: false
    },
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "connect",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        }
      }
    },
    particles: {
      number: { value: 300 },
      color: { value: "random" },
      size: { value: { min: 10, max: 15 } },
      move: { speed: 6 },
      shape: { type: "circle" },
      opacity: { value: 0.5 }
    },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150
    }
  };

  return (
    <div>
      {/* Pass the options as a prop to the Particles component */}
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options} // Apply the config here
      />
      <div className="content">
        {/* Your other content goes here */}
      </div>
    </div>
  );
};

export default ParticleBackground;
