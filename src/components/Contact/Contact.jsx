import React from 'react'
import { contact } from '../Data/Data'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <main className='py-16 px-4 g:px-[3rem] xl:px-[5rem] pt-[3rem]'>
      <section className='flex flex-col md:flex-row justify-between items-center container max-w-[1440px] w-full mx-auto'>
      <div className='text-gray-900 font-bold w-full lg:max-w-[40%] space-y-3 mb-3'>
        <h1 className='font-bold text-2xl md:text-4xl heading'>GET IN TOUCH</h1>
        <p className='text-lg'>Feel like contacting us? Submit your queries here and we will get back to you as soon as possible. Please fill out the form or email us</p>
        <div>
          {contact.map((item) => (
            <div key={item.id} className='space-y-2 flex gap-3 items-center'>
              <span className='flex-shrink-0'>{item.icon}</span>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ContactForm/>

      </div>

      </section>
      
    </main>
  )
}

export default Contact