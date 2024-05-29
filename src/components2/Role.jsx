import React from 'react'
import { motion } from "framer-motion"
import roleImg from "../assets/ds2.jpg"

const Role = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-5xl font-semibold bg-gradient-to-t from-purple-900  to-blue-500 bg-clip-text  tracking-tight text-transparent">
          What We Do
        </motion.h1>
        
        <div className="flex flex-wrap pb-16">
          <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}} 
            className="w-full lg:w-1/2 lg:*:p-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={roleImg} alt="about" />
            </div>
          </motion.div>
           <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:0.5}}  
              className="w-full lg:w-1/2">
              <div className="flex flex-col justify-center lg:justify-start">
                <p className="pb-16 my-2 max-w-xl py-6 font-light tracking-tighter text-2xl">
                  We work with Computer Science and other engineering departments to train their students from scratch to brainstorm ideas, mould and convert those ideas into business model and help them to successfully register as a new startup with end-to-end support. We help the students with ideation, build profitable business models, find customers, figure out marketing plans and help them to build & scale teams. 
                </p>
                <p className="pb-16 my-2 max-w-xl py-6 font-light tracking-tighter text-2xl">
                    Building  any company is not easy. There are many hurdles they will face along the way. For us, it is a long journey and we derive pleasure in seeing successful companies getting launched and helping the economy & country!!
                </p>
              </div>
            </motion.div>
        </div>
        
        <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}      
        className="flex flex-wrap items-center justify-center /">
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <p className='lg:text-3xl text-2xl text-purple-500'>
                    It's not a race, unless it lasts decades!! Come prepared for a long roller coaster journey!!
                </p>
            </motion.div>
        </motion.div>

    </div>
  )
}

export default Role
