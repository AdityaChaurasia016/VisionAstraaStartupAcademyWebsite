import React, { useState } from 'react'
import q1 from '../assets/testimonials/doubleQuotation.png';
import img1 from '../assets/testimonials/p1.jpg';
import img2 from '../assets/testimonials/p2.jpg';
import img3 from '../assets/testimonials/p3.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion"


const Testimonials = () => {

    const testimonial_data =[
        {
            img: img3,
            content_text: 'Interning at Vision Astra has been a really amazing experience. The most important thing that this internship has taught me is team management. It has taught me to be open to the perspectives of my teammates and work together as one unit. The work environment is very supportive and and helpful. It has especially pushed me to learn a lot of new technologies. We are working on the VisionAstraa Startup Academy Website and the learning experience has been amazing so far. I would like to thank all of our mentors for this wonderful opportunity.',
            testimonial_name: 'Aditya Chaurasia',
            text_block:'Intern',
        },
        {
            img: img2,
            content_text: 'My experience as an intern at VisionAstraa Startup Academy has been incredibly rewarding. One of the most valuable lessons I have learned is working under a team lead and collaborating effectively within a team. This experience has opened my eyes to the importance of embracing diverse perspectives and working cohesively as a unit. The supportive work environment has greatly facilitated my learning of new technologies. Specifically, we have been developing the VisionAstraa Startup Academy Website, which has been an incredible learning journey. The excellent guidance from our mentors has been instrumental in this process. Additionally, this internship has provided me with significant exposure to corporate settings, further enhancing my professional growth. I am grateful to all our mentors for this wonderful opportunity.',
            testimonial_name: 'Ashish jose',
            text_block:'Intern',
        }
    ]

    const [current, setCurrent] = useState(0);

    const length = testimonial_data.length;

    const previous = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

  return (
    
       
    <div className='pb-20 bg-black p-10 my-20 rounded-lg'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-5xl font-semibold bg-gradient-to-t from-purple-900  to-blue-500 bg-clip-text  tracking-tight text-transparent">
          Testimonials
        </motion.h1>
        <div className='flex  justify-center items-center'>
        
        <div className='font-light tracking-tighter text-2xl'> 
        {
            testimonial_data.map((item, index) => index === current && <div key={index}>
                
                <div className='pb-[40px] flex items-start gap-4 '>
                    <img src={q1} alt="" className='max-w-40 max-h-40'/>
                    <p className='bg-gradient-to-r from-purple-400  to-pink-400 bg-clip-text  tracking-tight text-transparent text-3xl '>
                        {item.content_text}
                    </p>
                </div>

                <div className='flex justify-between items-end '>
                    <div className="flex flex-wrap">
                        <div className='flex gap-4 items-center lg:items-start'>
                            <div>
                                <img src={item.img} alt="" />
                            </div>

                            <div className='text-white font-poppins text-1xl items-center '>
                                <p>
                                    {item.testimonial_name}
                                    <br />
                                    <span>
                                        {item.text_block}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2 '>
                        <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-300 hover:text-black'>
                            <IoIosArrowBack onClick={previous} />
                        </div>
                        <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-300 hover:text-black'>
                            <IoIosArrowForward onClick={next}/>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
    </div>
    </div>
  )
}

export default Testimonials
