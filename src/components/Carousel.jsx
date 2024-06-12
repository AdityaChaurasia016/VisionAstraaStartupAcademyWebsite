import React, {useState} from 'react'
import image1 from '../assets/Carouselimages/Image1.jpg'
// import image2 from '../assets/Carouselimages/Image2.jpg'
import image3 from '../assets/Carouselimages/Image3.jpg'
import image4 from '../assets/Carouselimages/Image4.jpg'
// import image5 from '../assets/Carouselimages/Image5.jpg'
import image6 from '../assets/Carouselimages/Image6.jpg'

import DSCE from '../assets/Collaborations/DSCE_1.jpeg'

import EPCE from '../assets/Collaborations/EPCE_1.jpg'
import CMRIT from '../assets/Collaborations/CMRIT_1.jpg'

import { motion } from 'framer-motion'
import {RxDotFilled} from "react-icons/rx"

import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs"

import { RxArrowBottomRight } from "react-icons/rx";


const Carousel = () => {



  const slides=[image1,DSCE,EPCE,CMRIT]
    

 const names=["PRESIDENCY UNIVERSITY","DAYANAND SAGAR COLLEGE OF ENGINEERING","EAST POINT COLLEGE OF ENGINEERING", "CMR INSTITUTE OF TECHNOLOGY"]

  const [oldState,newState]=useState(0)

  const nextSlide=()=>{
    if(oldState >=0 && oldState<3)
      {
        newState(oldState+1)
      }
      else return
  }

  const prevSlide=()=>{
    if(oldState >0)
      {
        newState(oldState-1)
      }
      else return
  }


  const goToSlide=(slideIndex) =>{
    newState(slideIndex);
  }



   


  return (
    <div className="bg-[#0a0a0a]">
    <div className='max-w-full lg:h-[700px] mx-auto py-16 px-0 relative'>
      <div
       className='w-full h-full flex justify-start lg:px-10 lg:space-x-12'>
        <div className='lg:w-3/5 w-full h-full rounded-2xl bg-cover flex justify-start items-center px-0'>
      <BsChevronCompactLeft className='lg:w-[70px] z-index-10 lg:h-[70px] text-white absolute lg:left-[4rem] left-[1rem] hover:text-black cursor-pointer' onClick={prevSlide}/>
        <img src={slides[oldState]} alt="" className='lg:w-auto lg:h-[90%] bg-cover shadow-lg rounded-lg transition-transform ease-out duration-500'/>
      <BsChevronCompactRight className='lg:w-[70px] z-inde-10 lg:h-[70px] text-white w-[40px] h-[40px] absolute lg:left-[44rem] hover:text-black cursor-pointer' onClick={nextSlide}/>
      </div>
      <div className='lg:flex hidden py-12 items-center border-white text-6xl font-bold lg:w-[25rem]'>
        <div>
        {names[oldState]}
        </div>
      </div>
      </div>
      <div className='flex relative lg:top-[-1rem] left-[-18rem] justify-center '>
      {slides.map((slide,slideIndex)=>(
        <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='lg:text-2xl text-xl text-white cursor-pointer'>
           <RxDotFilled className=''/>
        </div>
      ))}
     
    </div>
    </div>
    
    </div>
  )
}

export default Carousel;
