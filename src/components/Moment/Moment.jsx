import React from 'react'
import Button from '../Reusable/Button'
import { assets } from '../../assets/assets'
import { aboutFeatures } from '../Data/Data'

const Moment = () => {
  return (
    <main className="px-4 lg:px-[3rem] xl:px-[5rem] pt-[3rem] md:pt-0">
      <section className="flex flex-col-reverse md:flex-row h-[700px] md:h-[600px] xl:h-[700px] items-start md:items-center container justify-between max-w-[1440px] w-full mx-auto" id="about">
        <figure
          className="w-full h-64 md:w-80 md:h-80 xl:w-[500px] xl:h-[500px] rounded-lg overflow-hidden bg-cover bg-center transform transition duration-500 hover:scale-105 flex-shrink-0"
          style={{ backgroundImage: `url(${assets.moment})` }}
        />
        <figcaption className="w-full md:w-[50%] mt-4 md:mt-0">
          <h1 className="text-lg md:text-4xl font-bold mb-2 md:mb-4 text-primary tracking-tight heading">Making Moments that Spark Joy and Laughter</h1>
          <p className="text-base lg:text-lg mb-4 md:mb-8">You don't want to miss out on exciting places where families create unforgettable moments together.</p>
          <ul className="list-disc list-inside mb-8">
            {aboutFeatures.map((feature) => (
              <li key={feature.id} className="flex items-center mb-2">
                <span className="flex-shrink-0">{feature.icon}</span>
                <span className="ml-2 text-base">{feature.title}</span>
              </li>
            ))}
          </ul>
          <Button link="/" className="bg-secondary hover:bg-yellow-500 relative z-10 mb-8">
            View our Galleries
          </Button>
        </figcaption>
      </section>
    </main>
  )
}

export default Moment
