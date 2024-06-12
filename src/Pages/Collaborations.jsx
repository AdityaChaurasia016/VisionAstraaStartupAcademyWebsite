import React from 'react'
import Presidency from '../assets/Collaborations/Presidency1.jpg'
import Dayanand from '../assets/Collaborations/DSCE_1.jpeg'
import EastPoint from '../assets/Collaborations/EastPoint1.jpeg'
import CMRIT from '../assets/Collaborations/CMRIT_1.jpg'

const Collaborations = () => {
  return (
    <div className='text-black p-12 space-y-16 bg-gradient-to-bl from-[#ffffff] to-[#cbd5e1]'>
      <div className=' flex border-black lg:flex-row lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={Presidency} className='h-[350px]' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
         <p className='text-5xl font-extrabold'>PRESIDENCY <br />UNIVERSITY</p>
          <p className=' border-black font-extralight text-2xl '>Visiting Presidency University as a guest was an enlightening
            experience that offered a deep dive into the vibrant academic and social life on campus. Walking through the scenic pathways
            lined with historic and modern buildings . . . . .</p>
            <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'><a href='/presidencyuniversity'>Read More</a></button>
        </div>
      </div>

      <hr className='border-gray-300'/>


      <div className=' flex border-black lg:flex-row-reverse lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={Dayanand} className='h-[350px] object-contain' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
          <p className='text-5xl font-extrabold leading-[3rem]'>DAYANAND SAGAR <br/>COLLEGE <br/>OF ENGINEERING</p>
          <p className=' border-black font-extralight text-2xl '>Visiting the university was an unforgettable experience! From the moment I stepped onto the beautiful campus,
             I was welcomed warmly by both faculty and students. The informative tour highlighted the impressive facilities, and participating in a class gave me a taste of the dynamic academic environment . . . . . .</p>
          <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'><a href="/dayanandsagaruniversity">Read More</a></button>
        </div>
      </div>

    <hr className='border-gray-300' />

      <div className=' flex border-black lg:flex-row lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={EastPoint} className='h-[350px] object-contain' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
          <p className='text-5xl font-extrabold'>EAST POINT COLLEGE <br/>OF ENGINEERING</p>
          <p className=' border-black font-extralight text-2xl '>Stepping onto the university grounds was like entering a realm of endless possibilities! Right from the start, the warm welcome from faculty and students set the 
            tone for an unforgettable experience. The tour opened my eyes to the impressive facilities, and diving into a class offered a taste of the dynamic academic energy . . . . . .</p>
          <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'><a href="/eastpointuniversity">Read More</a></button>
        </div>
      </div>

      <hr className='border-gray-300' />

      <div className=' flex border-black lg:flex-row-reverse lg:space-x-12'>
        <div className='w-1/2 flex justify-center items-center'> <img src={CMRIT} className='h-[350px] object-contain' alt="" /></div>
        <div className='w-1/2  border-black lg:p-4 lg:space-y-8'>
          <p className='text-5xl font-extrabold'>CMR INSTITUTE <br/>OF TECHNOLOGY</p>
          <p className=' border-black font-extralight text-2xl '>Embarking on my university campus adventure felt akin to stepping into a realm of boundless horizons! The genuine warmth extended by faculty and fellow students 
            enveloped me from the get-go, setting the stage for an unforgettable exploration. Engaging with the diverse student community during lively events offered a vivid portrayal of the university's nurturing ethos.. . . . . . .</p>
          <button className='p-3 bg-[#1E40AF] text-white hover:bg-black'><a href="/cmruniversity">Read More</a></button>
        </div>
      </div>




    </div>
  )
}

export default Collaborations;
