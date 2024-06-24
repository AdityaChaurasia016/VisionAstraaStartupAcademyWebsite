import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/google.svg"
import img1 from "../assets/loginsignup/img1.jpg"
import { motion } from "framer-motion"


const Login = () => {
  return (
    <div className="flex items-center justify-center  bg-blue-100 text-black  py-32">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-3xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <motion.span 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5}} 
          className="mb-3 text-4xl font-bold bg-gradient-to-t from-purple-900  to-blue-500 bg-clip-text  tracking-tight text-transparent">
            Welcome back
          </motion.span>
          <span className="font-light text-blue-600 mb-8">
            Welcom back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md ">
              Email
            </span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">
              Password
            </span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            
            <a href='#' className="font-bold text-md bg-gradient-to-t from-purple-900  to-blue-500 bg-clip-text  tracking-tight text-transparent">
              Forgot password
            </a>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src={img} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-blue-600">
            Dont'have an account? 
            <a href="/Intermediate" className="font-bold text-black"> Sign up for free</a>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <img
            src={img1}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* text on image  */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <motion.span 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:5.5}}
            className="text-white text-xl">
              Forging tomorrow's visionaries
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
