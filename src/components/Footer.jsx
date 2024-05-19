import React from 'react'
import VALogo1 from '../assets/VAlogo1.png'
import {Facebook, Instagram, Linkedin} from 'lucide-react'
import { PhoneCall , Mail} from 'lucide-react'
const Footer = () => {
  return (
    <div>
      <div className="flex w-[100vw] lg:h-[10rem] h-[20rem] py-6 px-[6rem] bg-[rgb(10,20,47)] text-white">
        <div className="flex lg:flex-row flex-col w-full">
            <div className="left_section flex justify-between  flex-shrink-0 w-1/2 p-2 pr-12">
            <img src={VALogo1} className='w-[100px]' alt="" />
            <div className='flex justify-center items-center space-x-10 '>
            <Facebook className='w-[50px] h-[50px]'/>
            <Instagram className='w-[50px] h-[50px]'/>
            <Linkedin className='w-[50px] h-[50px]'/>
            </div>
            </div>
            <div className="right_section  w-1/2">
              <div className='flex lg:justify-end justify-around space-x-4 p-5'>
            <a href="">DISCOVER US</a>
            <a href="">CONTACT US</a>
            <a href="">ORIGIN STORY</a>
            </div>
                <div className='flex flex-row justify-end space-x-10 px-8'>
                <a href="" className='flex'><PhoneCall className='mr-2'/> PHONE NO</a>
                <a href="" className='flex'><Mail className='mr-2'/> EMAIL</a>  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
