import React, {useState} from 'react'
import image1 from '../assets/Carouselimages/Image1.jpg'
import image2 from '../assets/Carouselimages/Image2.jpg'
import image3 from '../assets/Carouselimages/Image3.jpg'
import image4 from '../assets/Carouselimages/Image4.jpg'
import image5 from '../assets/Carouselimages/Image5.jpg'
import image6 from '../assets/Carouselimages/Image6.jpg'
import { motion } from 'framer-motion'
import {RxDotFilled} from "react-icons/rx"

import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs"

import { RxArrowBottomRight } from "react-icons/rx";


const Carousel = () => {



  const slides=[image1,image2,image3,image4,image5,image6]
    

  const [oldState,newState]=useState(0)

  const nextSlide=()=>{
    if(oldState >=0 && oldState<5)
      {
        newState(oldState+1)
      }
  }

  const prevSlide=()=>{
    if(oldState >=1)
      {
        newState(oldState-1)
      }
      else return
  }


  const goToSlide=(slideIndex) =>{
    newState(slideIndex);
  }



   


  return (
    <div className="bg-gradient-to-tl from-[#cbd5e1] to-[#ccfbf1]">
    <div className='max-w-[1000px] h-[700px] mx-auto py-16 px-4 relative'>
      <motion.div
      initial={{opacity:0,y:-200, scale:0.5}}
       whileInView={{ y: 0, scale:1, opacity:1}}
       transition={{duration:2, delay:0.2 }}
       className='w-full h-full rounded-2xl bg-cover flex justify-center items-center'>
      <BsChevronCompactLeft className='w-[80px] h-[80px] relative left-[4rem] hover:text-black cursor-pointer' onClick={prevSlide}/>
        <img src={slides[oldState]} alt="" className='lg:w-auto lg:h-[90%] bg-cover shadow-lg rounded-lg '/>
      <BsChevronCompactRight className='w-[80px] h-[80px] relative right-[4rem] hover:text-black cursor-pointer' onClick={nextSlide}/>
      </motion.div>
      <div className='flex relative top-[-1rem] justify-center '>
      {slides.map((slide,slideIndex)=>(
        <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
           <RxDotFilled className=''/>
        </div>
      ))}
     
    </div>
    </div>
    
    </div>
  )
}

export default Carousel;
