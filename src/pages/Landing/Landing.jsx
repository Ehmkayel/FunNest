import React from 'react';
import Hero from '../../components/Hero/Hero';
import Moment from '../../components/Moment/Moment';
import Gallery from '../../components/Gallery/Gallery';
import Features from '../../components/Features/Features';
import Events from '../../components/Event/Event';

const Landing = () => {
  return (
    <>
      <Hero />
      <Moment />
      <Gallery />
      <Features />
      <Events />
    </>
  );
}

export default Landing;
