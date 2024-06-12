import React from 'react'
import Presidency1 from '../assets/Presidency/PRESIDENCY_1.jpg'
import Presidency2 from '../assets/Presidency/PRESIDENCY_2.jpg'
import Presidency3 from '../assets/Presidency/PRESIDENCY_3.jpg'
import Presidency4 from '../assets/Presidency/PRESIDENCY_4.jpg'
import Presidency5 from '../assets/Presidency/PRESIDENCY_5.jpg'
import Presidency6 from '../assets/Presidency/PRESIDENCY_6.jpg'

const ColabPresidency = () => {

    const arr=[Presidency1,Presidency2,Presidency3,Presidency4,Presidency5,Presidency6]
  return (
    <div className='bg-[#09090b] p-12'>
        <div className='text-6xl font-Khula font-bold mb-12'>
            <h1>PRESIDENCY UNIVERSITY</h1>
            <hr />
        </div>


        <div className='flex flex-wrap justify-center space-x-4 space-y-4 '>
        {arr.map((item, index)=>(
            <div key={index} >
            <img src={item} alt="Imag" className='w-[500px]'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ColabPresidency
