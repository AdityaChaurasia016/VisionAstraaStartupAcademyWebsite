import React from 'react'
import DayanandSagar1 from '../assets/DSCE/DSCE_1.jpg'
import DayanandSagar2 from '../assets/DSCE/DSCE_2.jpg'
import DayanandSagar3 from '../assets/DSCE/DSCE_3.jpg'
import DayanandSagar4 from '../assets/DSCE/DSCE_4.jpg'
import DayanandSagar5 from '../assets/DSCE/DSCE_5.jpg'
import DayanandSagar6 from '../assets/DSCE/DSCE_6.jpg'
import DayanandSagar7 from '../assets/DSCE/DSCE_7.jpg'
import DayanandSagar8 from '../assets/DSCE/DSCE_8.jpg'
import DayanandSagar9 from '../assets/DSCE/DSCE_9.jpg'
import DayanandSagar10 from '../assets/DSCE/DSCE_10.jpg'
import DayanandSagar11 from '../assets/DSCE/DSCE_11.jpg'
import DayanandSagar12 from '../assets/DSCE/DSCE_12.jpg'
import DayanandSagar13 from '../assets/DSCE/DSCE_13.jpg'
import DayanandSagar14 from '../assets/DSCE/DSCE_14.jpg'
import DayanandSagar15 from '../assets/DSCE/DSCE_15.jpg'
import DayanandSagar16 from '../assets/DSCE/DSCE_16.jpg'
import DayanandSagar17 from '../assets/DSCE/DSCE_17.jpg'
import DayanandSagar18 from '../assets/DSCE/DSCE_18.jpg'
import DayanandSagar19 from '../assets/DSCE/DSCE_19.jpg'
import DayanandSagar20 from '../assets/DSCE/DSCE_20.jpg'
import DayanandSagar21 from '../assets/DSCE/DSCE_21.jpg'
const ColabDayanandSagar = () => {

    // DayanandSagar4,DayanandSagar5,,,DayanandSagar16,DayanandSagar13,,DayanandSagar18
    const arr=[DayanandSagar1,DayanandSagar2,DayanandSagar3,DayanandSagar6,DayanandSagar7,DayanandSagar8,DayanandSagar9,DayanandSagar10,DayanandSagar11,DayanandSagar12,DayanandSagar14,DayanandSagar15,DayanandSagar17,DayanandSagar19,DayanandSagar20,DayanandSagar21]
  return (
    <div className='bg-[#09090b] p-12'>
        <div className='text-6xl font-Khula font-bold mb-12'>
            <h1>DAYANAND SAGAR COLLEGE OF ENGINEERING</h1>
            <hr />
        </div>

        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> */}
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

export default ColabDayanandSagar;
