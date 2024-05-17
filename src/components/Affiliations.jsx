import React from 'react'
import acer from '../assets/Affiliation/acer.png'
import intel from '../assets/Affiliation/intel.png'
import nvidia from '../assets/Affiliation/nvidia.png'
const Affiliations = () => {
  return (
    <div className=' -black mt-5 p-12'>
      <div className="flex flex-col  border-black space-y-4">
        <div className='text-center text-4xl font-bold font-Reem-Kufi text border-black'>OUR AFFILIATED COMPANIES</div>
        <div className=' border-black justify-around flex p-6 '>
            <img src={acer} alt="ACEr" className='w-[200px] h-[100px]' />
            <img src={intel} alt="INTEl" className='w-[200px] h-[100px]' />
            <img src={nvidia} alt="NVIDIa" className='w-[200] h-[100px]' />
        </div>
      </div>
    </div>
  )
}

export default Affiliations
