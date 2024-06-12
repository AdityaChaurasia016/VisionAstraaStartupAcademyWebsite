import React from 'react'
import Eastpoint1 from '../assets/EastPoint/EPCE_1.jpg'
import Eastpoint2 from '../assets/EastPoint/EPCE_2.jpg'
import Eastpoint3 from '../assets/EastPoint/EPCE_3.jpg'
import Eastpoint4 from '../assets/EastPoint/EPCE_1.jpg'







const ColabEastPoint = () => {
    const arr=[Eastpoint1, Eastpoint2, Eastpoint3, Eastpoint4]
  return (
    <div className='bg-[#09090b] p-12'>
    <div className='text-6xl font-Khula font-bold mb-12'>
        <h1>EAST POINT COLLEGE OF ENGINEERING</h1>
        <hr />
    </div>


    <div className='flex flex-wrap justify-center space-x-4 space-y-4 '>
    {arr.map((item, index)=>(
        <div key={index} >
        <img src={item} alt="Imag" className='w-[600px]'/>
        </div>
    ))}
    </div>
</div>
  )
}

export default ColabEastPoint
