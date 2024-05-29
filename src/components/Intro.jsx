import React from 'react'
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    <div className='text-black border-black lg:h-[120vh] lg:p-12 bg-gradient-to-tr from-[#ffffff] to-[#d4d4d8]'>
      <div className='Main'>
        <div className='Vision flex  border-black lg:h-[50vh]'>
            <div className='w-1/2 lg:p-12  border-black flex justify-center items-baseline '>

                <h1 className='text-8xl font-poppins font-bold text-[#1e40af] w-[50%]' >
                <ReactTyped
                strings={["OUR VISION",]}
                typeSpeed={150}
                backSpeed={0}
                startDelay={500}   
                showCursor={false}
              />
                </h1>
            </div>
            <div className='w-3/5 font-extralight text-gray-500 text-4xl order-black lg:p-12'>
                <p>To revolutionize the higher education system and entrepreneurship culture across India, we aim to build a robust foundation at the grassroots level, shifting the mindset of students from job seekers to job creators.</p>
            </div>
        </div>
        <div className='Mission flex  border-black lg:h-[50vh]'>
        <div className='w-1/2 font-extralight text-gray-600 text-4xl  border-black lg:p-12'>
                <p className='w-[90%]'>To empower college students by providing guidance and mentorship throughout their academic journey, enabling them to build the visionary companies of tomorrow.</p>
            </div>

         <div className='w-1/2 lg:p-12  border-black flex justify-start items-baseline '>

                <h1 className='text-8xl font-poppins font-bold text-[#1e40af] w-[50%]' >
                <ReactTyped
                strings={["OUR MISSION",]}
                typeSpeed={150}
                startDelay={2800}
                backSpeed={0}   
                showCursor={false}
              />
                </h1>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Intro
