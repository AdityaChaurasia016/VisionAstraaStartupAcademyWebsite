import React from 'react'
import Valogo1 from '../assets/VAlogo1.png'
const HeroSection = () => {
  return (
    <div className='mt-[0rem] h-[90vh] lg:h-[90vh] p-[1rem]'>
      <div className="flex lg:flex-row flex-col justify-start items-center px-4 lg:space-x-[5rem] space-y-3 lg:space-y-6">
        <img src={Valogo1} alt="" className=' rounded-[10%] lg:w-[400px] lg:h-[400px] w-[full] h-200px object-cover' />
        <div className=' lg:text-5xl text-2xl  bg-[white]/10 backdrop-blur-lg  p-10 rounded-xl'>
            <p><span className='text-red-500 lg:text-6xl'>V</span>ISION<span className='text-red-500 lg:text-6xl'>A</span>STRAA</p>
            <p><span className='text-red-500 lg:text-6xl'>S</span>TARTUP <span className='text-red-500 lg:text-6xl'>A</span>CADEMY</p>
            <button className='mt-4 lg:ml-5 px-4 p-2  bg-[#1e40af] text-xl text-white hover:bg-black transition duration-500'>Know us</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
