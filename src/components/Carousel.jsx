import React, {useState} from 'react'
import image1 from '../assets/Carouselimages/Image1.jpg'
import image2 from '../assets/Carouselimages/Image2.jpg'
import image3 from '../assets/Carouselimages/Image3.jpg'
import image4 from '../assets/Carouselimages/Image4.jpg'
import image5 from '../assets/Carouselimages/Image5.jpg'
import image6 from '../assets/Carouselimages/Image6.jpg'


import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs"




const Carousel = () => {


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



    const slides=[image1,image2,image3,image4,image5,image6]
    

    const [oldState,newState]=useState(0)


  return (
    <div className=" bg-[#111827] ">
    <div className='max-w-[1000px] h-[700px] m-auto py-16 px-4 relative border'>
      <div  className='w-full h-full rounded-2xl bg-cover durtation-500 flex justify-center items-center border '>
      <BsChevronCompactLeft className='w-[40px] h-[40px] relative left-12 hover:text-black cursor-pointer' onClick={prevSlide}/>
        <img src={slides[oldState]} alt="" className='lg:w-auto lg:h-[90%] bg-cover shadow-lg rounded-lg transition-[0.4s]'/>
      <BsChevronCompactRight className='w-[40px] h-[40px] relative right-12 hover:text-black cursor-pointer' onClick={nextSlide}/>
      </div>
    </div>
    </div>
  )
}

export default Carousel;
