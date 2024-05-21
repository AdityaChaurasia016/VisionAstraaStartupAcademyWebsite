import React from 'react';
import Logo from '../assets/logocircle.png';
import { navItems } from '../constants';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const NavBarr = () => {

  const[mobileDrawerOpen, setMobileDrawerOpen]=useState(false);


  const toggleNavbar = ()=> {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  return (
    <div>
       <nav className="sticky top-0 z-50 py-2 bg-gradient-to-bl px-6 bg-black text-white ">
       <div className="flex justify-between items-center mr-5">
        <div className="mx-2 p-1 flex justify-between gap-2 items-center"> <img src={Logo} className='w-12' alt="" /> <p className='text-md tracking-tighter leading-tight lg:text-2xl lg:font-ubuntu '>VISIONASTRAA STARTUP ACADEMY</p></div>
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
              <div className="fixed top-[100px] right-[17%] z-20 bg-[white]/10 backdrop-blur-xl rounded-xl overflow-hidden p-12 flex flex-col justify-center items-center lg:hidden w-[70%] mx-auto">
                <ul>
                  {navItems.map((item, index) =>(
                    <li key={index} className="p-4 border text-center rounded-[1.1rem] my-4">
                      <Link to={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
       </nav>
    </div>
  )
}

export default NavBarr;
