import React from 'react'
import LinkedIn from '../assets/contact/icon1.png'
import Facebook from '../assets/contact/icon2.png'
import Instagram from '../assets/contact/icon3.png'
const Contactus = () => {
  return (
    <div>
      <div className="max-w-full mx-auto bg-[url('src/assets/blue5.jpg')] bg-cover">
        <div className='lg:h-[24rem] h-[16rem] p-8 lg:p-12 text-white flex flex-col justify-center items-center'>
          <p className='lg:text-8xl text-4xl  uppercase'>Contact Us</p>
          <p className='tracking-wide text-center'>Our team of customer care ninjas are ready to hear from you.</p>
        </div>
        <div className='flex flex-col lg:flex-row lg:h-[40rem] p-3 lg:p-12'>
          <div className='lg:w-1/2 bg-white'>
            hello
          </div>
          <div className='lg:w-1/2 bg-[#6CB2EB]/10 backdrop-blur-xl text-white lg:p-12'>
            <p className='uppercase text-4xl mb-2 font-bold'>Find Us Here!</p>
            <p className='text-[13px] font-italic'>Not sure where to start? Need help adding that extra element to your dreams? Just visit our help center or get in touch with us</p>
            <div className='flex flex-col mt-10 space-y-8 '>
              <div className='flex space-x-6'>
                <img src={LinkedIn}  alt="" className='w-[50px] h-[50px]' />
                <p className=' text-sm tracking-wide text-justify w-[400px]'>Connect with us on LinkedIn for industry insights, networking opportunities, and updates on our 
                  latest workshops. Join our vibrant community of aspiring entrepreneurs and seasoned professionals to 
                  accelerate your startup journey!</p>
              </div>
              <div className='flex space-x-6 items-center'>
                <img src={Facebook} alt="" className='w-[50px] h-[50px]' />
                <p className=' text-sm tracking-wide text-justify w-[400px]'>Be the first on your block to get startup updates, announcements, news and lots of really good content, like us on Facebook today!</p>
              </div>
              <div className='flex space-x-4 items-center'>
                <img src={Instagram} alt="" className='w-[70px] h-[70px] ml-[-10px]' />
                <p className=' text-sm tracking-wide text-justify w-[400px]'>Follow us along our journey as we empower startups to reach their full potential and make a positive impact on society.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
