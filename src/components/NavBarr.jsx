import React from 'react';
import Logo from '../assets/Logo.png';
import { navItems } from '../constants';
import {useState} from 'react';
import {Menu, X} from 'lucide-react';


const NavBarr = () => {

  const[mobileDrawerOpen, setMobileDrawerOpen]=useState(false);


  const toggleNavbar = ()=> {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <div>
       <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b bg-gradient-to-bl px-6 from-blue-800  to-red-700 text-white ">
       <div className="flex justify-between items-center mr-5">
        <div className="mx-2 p-1 flex justify-between gap-2 items-center"> <img src={Logo} className='w-12' alt="" /> <p className='text-md tracking-tighter leading-tight lg:text-2xl '>VISION ASTRA STARTUP ACADEMY</p></div>
        <div className="hidden lg:flex items-center space-x-5 p-1 ">
          {navItems.map((item,index)=>(
            <div key={index} className='p-1'><a href={item.href}>{item.label}</a></div>
          ))}
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
        <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X/> : <Menu/>}</button>
        </div>
        </div>
        {mobileDrawerOpen && (
              <div className="fixed top-[100px] right-[17%] z-20 bg-gradient-to-bl from-blue-800 to-red-700 p-12 flex flex-col justify-center items-center lg:hidden w-[70%] mx-auto">
                <ul>
                  {navItems.map((item, index) =>(
                    <li key={index} className="p-4 border text-center rounded-[1.1rem] my-4">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                {/* <div className="flex space-x-6">
                  <a href="#" className="py-2 px-3 border rounded-md" >Sign In</a>
                  <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" >Create an account</a>
                </div> */}
              </div>
            )}
       </nav>
    </div>
  )
}

export default NavBarr;
