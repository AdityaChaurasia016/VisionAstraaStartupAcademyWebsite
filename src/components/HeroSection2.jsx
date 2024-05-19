import React from 'react'
import Logo from '../assets/Logo.png'
const HeroSection2 = () => {
  return (
    <div className='bg-[url("src/assets/abs3.jpg")] bg-cover p-2 lg:p-12'>
        <hr className=' mx-auto lg:w-[60rem] lg:border-t-4 border-t-2 '/>
        <div className=' h-full p-6 lg:p-12 flex lg:flex-row space-y-4 flex-col justify-between items-center'>
        <img src="src/assets/photo.jpg" className='lg:w-2/5 h-full rounded-xl' alt="Image" />
        <div className=' flex lg:w-1/2 h-full p-2 lg:p-12 bg-[white]/20 rounded-xl'>
            <p className='text-sm lg:text-xl lg:text-justify lg:tracking-wide'>We specialize in providing cutting-edge AI solutions designed to meet the unique needs of various higher 
educational institutions and enterprises nationwide. Our core focus is on delivering top-tier AI products
                 and services that drive sustainability and innovation. From day one, our expertise has been in tailoring new 
                 AI technologies to perfectly suit the evolving requirements of our clients. <br/><br/>
                 Our mission is to empower end-users with modern AI tools that enhance their 
                 efficiency and performance. This dedication has earned us a solid reputation for customer satisfaction, since our inception. 

 </p>
        </div>
        </div>
    </div>
  )
}

export default HeroSection2;
