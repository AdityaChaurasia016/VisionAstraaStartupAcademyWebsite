import React from 'react'
import CMRIT1 from '../assets/CMRIT/CMRIT_1.jpg'
import CMRIT2 from '../assets/CMRIT/cmrit_2.jpg'
import CMRIT3 from '../assets/CMRIT/CMRIT_3.jpg'
import CMRIT4 from '../assets/CMRIT/CMRIT_4.jpg'
import CMRIT5 from '../assets/CMRIT/CMRIT_5.jpg'
import CMRIT6 from '../assets/CMRIT/CMRIT_6.jpg'
import CMRIT7 from '../assets/CMRIT/CMRIT_7.jpg'


const arr=[CMRIT2,CMRIT3,CMRIT4,CMRIT5,CMRIT6,CMRIT7,CMRIT1]


const ColabCMR = () => {
  return (
    <div className='bg-[#09090b] p-12'>
        <div className='text-6xl font-Khula font-bold mb-12'>
            <h1>CMR INSTITUTE OF TECHNOLOGY</h1>
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

export default ColabCMR
