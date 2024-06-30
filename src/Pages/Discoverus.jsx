import React from 'react'
import HeroSection from '../components2/HeroSection'
import Role from '../components2/Role'
import Testimonials from '../components2/Testimonials'


const Discoverus = () => {
  return (
    <div className=' bg-blue-100 overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        

        <div className='container mx-auto px-8'>
          <HeroSection /> 
          <Role />
          <Testimonials/>
        </div>
    </div>
  )
}

export default Discoverus

