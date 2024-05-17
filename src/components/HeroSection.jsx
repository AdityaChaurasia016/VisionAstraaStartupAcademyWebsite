import React from 'react'
import Valogo1 from '../assets/VAlogo1.png'
const HeroSection = () => {
  return (
    <div className='mt-[0rem] border-black h-[80vh] p-[1rem]'>
      <div className="flex lg:flex-row flex-col justify-center items-center px-12 lg:space-x-[5rem] space-y-6">
        <img src={Valogo1} alt="" className='border rounded-[10%] lg:w-[400px] lg:h-[400px] w-[full] h-200px object-cover' />
        <div className=' lg:text-5xl text-2xl'>
            <p><span className='text-red-500 lg:text-6xl'>V</span>ISION <span className='text-red-500 lg:text-6xl'>A</span>STRAA</p>
            <p><span className='text-red-500 lg:text-6xl'>S</span>TARTUP <span className='text-red-500 lg:text-6xl'>A</span>CADEMY</p>
            <button className='mt-4 lg:ml-5 rounded-md p-2 bg-gradient-to-tr from-red-500 to-blue-500 text-xl text-white'>Know more</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
