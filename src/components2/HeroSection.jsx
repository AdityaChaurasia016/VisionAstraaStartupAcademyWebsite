import React from 'react';
import { motion } from "framer-motion"
import profilePic from "../assets/ds1.jpg";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x:0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
  },
});

const HeroSection = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 mb-10">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}} 
            className="pb-16 my-20 text-center text-5xl font-semibold bg-gradient-to-t from-purple-900  to-blue-500 bg-clip-text  tracking-tight text-transparent">
                FORGING TOMORROW'S VISIONARIES!!
            </motion.h1>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.p 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 my-2 max-w-xl py-6 font-light tracking-tighter text-2xl">
                            At VisionAstra StartUp Academy, we aim to fulfil the dreams of college students by guiding and mentoring them throughout their academic journey for a chance to built tomorrow's visionary companies.
                        </motion.p>

                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 my-2 max-w-xl py-6 font-light tracking-tighter text-2xl">
                            StartUps form the backbone of any modern nation by providing the necessary innovation & dynamism to take the economy & country forward.
                        </motion.span>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        className='rounded-2xl pb-24'
                        initial={{x:100,opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        src={profilePic} 
                        alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
