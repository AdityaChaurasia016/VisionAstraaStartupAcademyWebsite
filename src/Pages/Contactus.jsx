import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import LinkedIn from '../assets/contact/icon1.png'
import Facebook from '../assets/contact/icon2.png'
import Instagram from '../assets/contact/icon3.png'
const Contactus = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_88ss0t5', 'template_nd0h71s', form.current, {
        publicKey: '_RQyE5RtvMnc0m_7N',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div>
     <div className="max-w-full mx-auto pt-10 -gradient-to-tr from-blue-500 via-purple-600 to-purple-800  bg-[url('src/assets/newbg2.jpg')] bg-cover">
        <div className='lg:h-[20rem] h-[16rem] p-8 lg:p-12 text-white flex flex-col justify-center items-center'>
          <p className='lg:text-7xl text-4xl  uppercase'>Contact Us</p>
          <p className='tracking-wide text-center'>Our team of customer care ninjas are ready to hear from you.</p>
        </div>
        <div className='flex flex-col lg:flex-row lg:h-[40rem] p-3 lg:p-12'>
          <div className='lg:w-1/2 lg:p-12 text-black mb-12'>


            <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-8'>
              <div className=''>
              <label className='text-white'>Name<br/></label>
              <input type="text" name="from_name" className='py-2 px-6 lg:w-[400px] focus:outline-none bg-[white]/50' />
              </div>
              <div className=''>
              <label className='text-white'>Email<br/></label>
              <input type="email" name="from_email" className='py-2 px-6 lg:w-[400px] focus:outline-none bg-[white]/50' />
              </div>
              <div className=''>
              <label className='text-white'>Message<br/></label>
              <textarea name="message" className='py-2 px-6 lg:w-[400px] h-[200px] focus:outline-none bg-[white]/50' />
              </div>
              <div className='relative left-[0px]'><input type="submit" value="Send" className='py-2 px-7 border text-lg rounded-sm text-white lg:w-[400px] hover:bg-black cursor-pointer' />
              </div>  
            </form>


          </div>
          <div className='lg:w-1/2 bg-[#6CB2EB]/10 backdrop-blur-xl text-white lg:p-12'>
            <p className='uppercase text-3xl mb-2 font-bold'>Find Us Here!</p>
            <p className='text-[13px] font-italic'>Not sure where to start? Need help adding that extra element to your dreams? Just visit our help center or get in touch with us</p>
            <div className='flex flex-col mt-10 space-y-8 '>
              <div className='flex space-x-6'>
                <a href="https://www.linkedin.com/company/visionastraa/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} alt="" className='w-[50px] h-[50px]' />
                </a>
                <p className=' text-sm tracking-wide text-justify w-[400px]'>Connect with us on LinkedIn for industry insights, networking opportunities, and updates on our
                  latest workshops. Join our vibrant community of aspiring entrepreneurs and seasoned professionals to
                  accelerate your startup journey!</p>
              </div>
              <div className='flex space-x-6 items-center'>
                <a href="https://www.facebook.com/profile.php?id=61550896390553&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} alt="" className='w-[50px] h-[50px]' />
                </a>
                <p className=' text-sm tracking-wide text-justify w-[400px]'>Be the first on your block to get startup updates, announcements, news and lots of really good content, like us on Facebook today!</p>
              </div>
              <div className='flex space-x-4 items-center'>
                <a href="INSTAGRAM URL" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram" className='w-[70px] h-[70px] ml-[-10px]' />
                </a>
                <p className=' text-sm tracking-wide text-justify lg:w-[400px]'>Follow us along our journey as we empower startups to reach their full potential and make a positive impact on society.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus
