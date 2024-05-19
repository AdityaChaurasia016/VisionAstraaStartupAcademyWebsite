import React from 'react'
import acer from '../assets/Affiliation/acer.png'
import intel from '../assets/Affiliation/intel.png'
import nvidia from '../assets/Affiliation/nvidia.png'
const Affiliations = () => {
  return (
    <div className='  bg-[#09090b] p-12'>
      <div className="flex flex-col space-y-4">
        <div className='text-center text-xl lg:text-4xl font-bold text-white py-5 bg-[white]/5'>VISIONASTRAA PARTNERED UNIVERSITIES</div>
        </div>
        <div className=' border-black justify-around flex lg:flex-row flex-col p-6  '>
            <img src={acer} alt="ACEr" className='w-[200px] h-[100px]' />
            <img src={intel} alt="INTEl" className='w-[200px] h-[100px]' />
            <img src={nvidia} alt="NVIDIa" className='w-[150] h-[100px]' />
        </div>
      </div>
  )
}

export default Affiliations
