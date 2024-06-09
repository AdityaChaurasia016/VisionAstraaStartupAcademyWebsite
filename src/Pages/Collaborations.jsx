import React from 'react'
import Presidency from '../assets/Collaborations/Presidency1.jpg'
import Dayanand from '../assets/Collaborations/DSCE_1.jpeg'
import EastPoint from '../assets/Collaborations/EastPoint1.jpeg'

const Collaborations = () => {
  return (
    <div className='text-black p-12 space-y-16'>
      <div className=' flex border-black lg:flex-row lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={Presidency} className='h-[350px]' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
          <p className='text-5xl font-extrabold'>PRESIDENCY <br />UNIVERSITY</p>
          <p className=' border-black font-extralight text-2xl '>Visiting Presidency University as a guest was an enlightening
            experience that offered a deep dive into the vibrant academic and social life on campus. Walking through the scenic pathways
            lined with historic and modern buildings . . . . .</p>
          <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'>Read More</button>
        </div>
      </div>

      <hr />


      <div className=' flex border-black lg:flex-row-reverse lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={Dayanand} className='h-[350px] object-contain' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
          <p className='text-5xl font-extrabold leading-[3rem]'>DAYANAND SAGAR <br/>COLLEGE <br/>OF ENGINEERING</p>
          <p className=' border-black font-extralight text-2xl '>Visiting Presidency University as a guest was an enlightening experience that offered a deep dive into the vibrant academic and social life on campus. Walking through the scenic pathways lined with historic and modern buildings . . . . .</p>
          <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'>Read More</button>
        </div>
      </div>

    <hr />

      <div className=' flex border-black lg:flex-row lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={EastPoint} className='h-[350px] object-contain' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
          <p className='text-5xl font-extrabold'>EAST POINT COLLEGE <br/>OF ENGINEERING</p>
          <p className=' border-black font-extralight text-2xl '>Visiting Presidency University as a guest was an enlightening experience that offered a deep dive into the vibrant academic and social life on campus. Walking through the scenic pathways lined with historic and modern buildings . . . . .</p>
          <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Collaborations;
