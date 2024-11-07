// import React from "react";
// import Button from "../Reusable/Button";
// import { assets } from "../../assets/assets";
// import { Link } from "react-router-dom";

// // Helper to generate random colors
// const getRandomColor = () => {
//   const colors = ["#FFD700", "#00BFFF", "#FF69B4", "#7FFF00", "#FF4500"];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// // Helper to generate random shapes
// const getRandomShape = () => {
//   const shapes = ["rounded-full", "rounded-md", "rounded-lg"]; // Variety of shapes
//   return shapes[Math.floor(Math.random() * shapes.length)];
// };

// const Hero = () => {
//   return (
//     <main className="bg-primary px-4 lg:px-[3rem] xl:px-[5rem] pt-[5rem] md:pt-0 relative overflow-hidden">
//       {/* Floating Shapes Background */}
//       <div className="floating-shapes">
//         {/* Generate more shapes with random styles */}
//         {Array.from({ length: 25 }).map((_, index) => (
//           <div
//             key={index}
//             className={`shape ${getRandomShape()}`}
//             style={{
//               backgroundColor: getRandomColor(),
//               width: `${Math.random() * 25 + 15}px`, // Random size between 15-40px
//               height: `${Math.random() * 25 + 15}px`,
//               top: `${Math.random() * 100}%`, // Random vertical position
//               left: `${Math.random() * 100}%`, // Random horizontal position
//               position: "absolute",
//               opacity: 0.7,
//               animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <section className="flex flex-col md:flex-row h-[700px] md:h-[600px] xl:h-[700px] items-center container justify-between max-w-[1440px] w-full mx-auto relative z-10">
//         <figcaption className="text-white w-full md:w-[50%] text-center md:text-start">
//           <h1 className="text-2xl md:text-4xl font-bold mb-4 heading">
//             Children’s Favorite Entertainment Centers
//           </h1>
//           <p className="text-lg mb-8">
//             Find safe and engaging spaces for your kids, compare child-friendly
//             centers, playgrounds, and resorts. Choose the best adventures for
//             your little ones and connect with other parents.
//           </p>
//           <span className="relative inline-flex items-center">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
//             <Link to="/explore-prompt">
//               <Button className="bg-yellow-400 hover:bg-yellow-500 relative z-10">
//                 Explore Now
//               </Button>
//             </Link>
//           </span>
//         </figcaption>
//         <figure
//           className="w-64 h-64 md:w-80 md:h-80 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden flex-shrink-0 bg-cover bg-center transform transition duration-500 hover:scale-105"
//           style={{ backgroundImage: `url(${assets.hero})` }}
//           alt="Kids playing games"
//         />
//       </section>
//     </main>
//   );
// };

// export default Hero;

import React from "react";
import Button from "../Reusable/Button";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <main className="bg-primary px-4 lg:px-[3rem] xl:px-[5rem] pt-[5rem] md:pt-0 relative">
      {/* Particles Component in the background */}
      <div className="absolute inset-0 z-0">
       
      </div>

      <section className="flex flex-col md:flex-row h-[700px] md:h-[600px] xl:h-[700px] items-center container justify-between max-w-[1440px] w-full mx-auto relative z-10">
        <figcaption className="text-white w-full md:w-[50%] text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 heading">
            Children favourites entertainment Centers
          </h1>
          <p className="text-lg mb-8">
            Find safe and engaging spaces for your kids, compare child-friendly
            centers, playgrounds, and resorts, making it simple for parents to
            choose the best adventures for their little ones and also to connect
            with other parents.
          </p>
          <span className="relative inline-flex items-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <Link to="/explore-prompt">
              <Button className="bg-yellow-400 hover:bg-yellow-500 relative z-10">
                Explore Now
              </Button>
            </Link>
          </span>
        </figcaption>
        <figure
          className="w-64 h-64 md:w-80 md:h-80 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden flex-shrink-0 bg-cover bg-center transform transition duration-500 hover:scale-105"
          style={{ backgroundImage: `url(${assets.hero})` }}
          alt="Kids playing games"
        />
      </section>
    </main>
  );
};

export default Hero;
