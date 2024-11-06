import React from "react";
import Hero from "../../components/Hero/Hero";
import Moment from "../../components/Moment/Moment";
import Gallery from "../../components/Gallery/Gallery";
import Features from "../../components/Features/Features";
import Events from "../../components/Event/Event";
import Contact from "../../components/Contact/Contact";

const Landing = () => {
  return (
    <>
      <Hero />
      <Moment />
      <Gallery />
      <Features />
      <Events />
      <Contact/>
    </>
  );
};

export default Landing;
