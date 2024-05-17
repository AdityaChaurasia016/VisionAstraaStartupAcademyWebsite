import React from 'react'
import Logo from '../assets/Logo.png'
import { navItems } from '../constants'
const NavBar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 p-2 bg-gradient-to-bl   h-[4rem] m-auto from-blue-800 to-red-700 text-white" >
        <div className="mx-6 text-sm">
            <div className="flex justify-between items-center">
                <div className=" flex items-center flex-shrink-0 lg:w-[60%]">
                    <img src={Logo} alt="Logo" className='w-12' />
                    <div className="lg:text-2xl uppercase mx-6  sm:text-[20px]">vision astra startup <span className=''> academy</span></div>
                </div>
                <ul className="hidden lg:flex space-x-12" >
                    {navItems.map((item, index)=>(
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}   
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;

