import React from 'react'

const Sign = () => {
  return (
    <div className=' p-10 m-5  '>
      <div className='  flex flex-wrap items-center border border-black rounded-2xl  bg-gradient-to-t from-purple-900 via-violet-600 to-blue-700 '>
        <div className=' w-full  flex justify-center items-center lg:w-1/2 '>
            <div className=' p-10 m-10'>
                <div  className=' font-bold text-3xl p-6   rounded-full w-48 h-48 border-white border-4 flex justify-center items-center bg-red-600'>
                    <a href="/SignUp"
                    className=' text-white'>
                        Mentor
                    </a>
                </div>
            </div>
        </div>
        <div className=' w-full  flex justify-center items-center lg:w-1/2 '>
            <div className=' p-10 m-10 '>
                <div className=' font-bold text-3xl p-6 border-4  rounded-full w-48 h-48 border-white flex justify-center items-center bg-blue-700'>
                    <a href="/SignUpB"
                    className=' text-white'>
                        Mentee
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sign
