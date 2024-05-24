import React from 'react'
import Valogo1 from '../assets/VAlogo1.png'
const HeroSection = () => {
  return (
    <div className='mt-[0rem]  border-black h-[90vh] lg:h-[90vh] p-[1rem] '>
      <div className="flex lg:flex-row flex-col justify-start items-center px-4 lg:space-x-[5rem] space-y-3 lg:space-y-6"> 
        
        <div className=" lg:text-5xl text-2xl  bg-[white]/10 backdrop-blur-lg  p-10 ">
            <p><span className='text-red-500 lg:text-6xl'>VSA</span></p>
            <p><span className='text-red-500 lg:text-6xl'>FORGING TOMORROW'S VISIONARIES!!</span></p>
            <p className='text-sm lg:text-xl lg:text-justify lg:tracking-wide'>At VisionAstra StartUp Academy, we aim to fulfil the dreams of college students by guiding and mentoring them throughout their academic journey for a chance to built tomorrow's visionary companies.</p>
            <p className='text-sm lg:text-xl lg:text-justify lg:tracking-wide'>StartUps form the backbone of any modern nation by providing the necessary innovation & dynamism to take the economy & country forward</p>
            <p className='text-sm lg:text-xl lg:text-justify lg:tracking-wide'>We work with Computer Science and other engineering departments to train their students from scratch to brainstorm ideas, mould and convert those ideas into business model and help them to successfully register as a new startup with end-to-end support. We help the students with ideation, build profitable business models, find customers, figure out marketing plans and help them to build & scale teams. </p>
            <p className='text-sm lg:text-xl lg:text-justify lg:tracking-wide'>Building  any company is not easy. There are many hurdles they will face along the way. For us, it is a long journey and we derive pleasure in seeing successful companies getting launched and helping the economy & country!!</p>
            <p className='text-sm lg:text-xl lg:text-justify lg:tracking-wide'></p>
        </div>
        <img src={Valogo1} alt="" className=' rounded-[10%] lg:w-[400px] lg:h-[400px] w-[full] h-200px object-cover' />
      </div>
      <p className='text-center text-xl lg:text-5xl font-bold text-white py-5 '>IT'S NOT A RACE,</p>
      <p className='text-center text-xl lg:text-5xl font-bold text-white py-5 '>UNLESS IT LASTS DECADES!!</p>
      <p className='text-center text-xl lg:text-5xl font-bold text-white py-5'>COME PREPARED FOR A LONG ROLLER COASTER JOURNEY!!</p>
    </div>
  )
}

export default HeroSection;