import React from 'react'
import Logo from '../assets/logocircle.png'
import {Facebook, Instagram, Linkedin} from 'lucide-react'
import { PhoneCall , Mail} from 'lucide-react'
import { Copyright } from 'lucide-react';
const Footer = () => {
  return (
    <div className='flex flex-col bg-black pb-2 pt-5 px-10 mt-6'>
      <div className='flex lg:flex-row flex-col p-2 lg:h-[5rem] lg:space-y-0 space-y-6 h-[15rem]'>
        <div className='flex lg:w-1/2 justify-between  lg:p-2'>
          <img src={Logo} className='w-[60px] h-[60px]' alt="" />
          <div className='flex lg:space-x-8 space-x-4 lg:mr-[120px]'>
            <Facebook className='w-[40px] h-[40px]'/>
            <Instagram className='w-[40px] h-[40px]'/>
            <Linkedin className='w-[40px] h-[40px]'/>
          </div>
        </div>

        <div className='flex flex-col lg:w-1/2'>
          <div className='flex justify-end space-x-12 w-full px-3'>
          <a href="">CONTACT US</a>
          <a href="">SUBMIT AN IDEA</a>
          </div>
          <div className='flex justify-end space-x-12 w-full py-3 overflow lg:text-l'>
          <a href="" className='flex'><PhoneCall className='mr-2'/> PHONE NO</a>
                <a href="" className='flex'><Mail className='mr-2'/> EMAIL</a>  

          </div>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-1'>
           <Copyright className='w-3'/><span className='text-sm'>2024 All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer
