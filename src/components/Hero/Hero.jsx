import React from 'react'
import Button from '../Reusable/Button'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <main className="bg-primary px-4 lg:px-[3rem] xl:px-[5rem] pt-[5rem] md:pt-0">
      <section className="flex flex-col md:flex-row h-[700px] md:h-[600px] xl:h-[700px] items-center container justify-between max-w-[1440px] w-full mx-auto">
        <figcaption className="text-white w-full md:w-[50%] text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 heading"> Children favourites entertainment Centers</h1>
          <p className="text-lg mb-8">Find safe and engaging spaces for your kids, compare child-friendly centers, playgrounds, and resorts, making it simple for parents to choose the best adventures for their little ones and also to connect with other parents. </p>
          <span className="relative inline-flex items-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <Button link="/" className="bg-yellow-400 hover:bg-yellow-500 relative z-10">
              Explore Now
            </Button>
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
