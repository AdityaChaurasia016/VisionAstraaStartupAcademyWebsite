import React from 'react';
import Valogo1 from '../assets/VAlogo1.png';

const HeroSection = () => {
    return (
        <div className='mt-0 border-black min-h-screen p-4 flex flex-col items-center lg:items-start'>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-20 space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left bg-white/10 backdrop-blur-lg p-6 lg:p-10 rounded-lg">
                    <p className='text-red-500 text-3xl lg:text-6xl'>VSA</p>
                    <p className='text-red-500 text-3xl lg:text-6xl'>FORGING TOMORROW'S VISIONARIES!!</p>
                    <p className='text-sm lg:text-xl mt-4 lg:mt-6 leading-relaxed'>
                        At VisionAstra StartUp Academy, we aim to fulfil the dreams of college students by guiding and mentoring them throughout their academic journey for a chance to built tomorrow's visionary companies.
                    </p>
                    <p className='text-sm lg:text-xl mt-4 lg:mt-6 leading-relaxed'>
                        StartUps form the backbone of any modern nation by providing the necessary innovation & dynamism to take the economy & country forward.
                    </p>
                    <p className='text-sm lg:text-xl mt-4 lg:mt-6 leading-relaxed'>
                        We work with Computer Science and other engineering departments to train their students from scratch to brainstorm ideas, mould and convert those ideas into business model and help them to successfully register as a new startup with end-to-end support. We help the students with ideation, build profitable business models, find customers, figure out marketing plans and help them to build & scale teams.
                    </p>
                    <p className='text-sm lg:text-xl mt-4 lg:mt-6 leading-relaxed'>
                        Building any company is not easy. There are many hurdles they will face along the way. For us, it is a long journey and we derive pleasure in seeing successful companies getting launched and helping the economy & country!!
                    </p>
                </div>
                <img src={Valogo1} alt="VisionAstra Logo" className='rounded-lg w-full lg:w-80 h-80 object-cover' />
            </div>
            <div className='text-center mt-6 lg:mt-12'>
                <p className='text-xl lg:text-5xl font-bold text-white py-2'>IT'S NOT A RACE,</p>
                <p className='text-xl lg:text-5xl font-bold text-white py-2'>UNLESS IT LASTS DECADES!!</p>
                <p className='text-xl lg:text-5xl font-bold text-white py-2'>COME PREPARED FOR A LONG ROLLER COASTER JOURNEY!!</p>
            </div>
        </div>
    );
}

export default HeroSection;
