import React from 'react'
import Sign from '../components3/Sign'

const Intermediate = () => {
  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900 mb-20'>
        <div className='fixed top-0 -z-10 h-full w-full'>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
        </div>
        <div className='container mx-auto px-8'>
            <h1 className=' p-6 text-5xl text-center font-bold mb-5 lg:text-8xl'>Welcome</h1>
            <h3 className=' p-6 text-2xl text-center font-bold  mb-5 lg:text-4xl'>Create an account as :</h3>
            <Sign/>
        </div>
    </div>
  )
}

export default Intermediate