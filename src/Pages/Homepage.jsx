import React from 'react'
// import Logo from './assets/Logo.png'
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import Affiliations from '../components/Affiliations';
import Intro from '../components/Intro';
import Carousel from '../components/Carousel';


const Homepage = () => {

  return (
    <div>
      <div className="max-w-full mx-auto pt-10 -gradient-to-tr from-blue-500 via-purple-600 to-purple-800  bg-[url('src/assets/newbg.jpg')] bg-cover">
        <HeroSection/>
      
      <Intro/>
      <HeroSection2/>
      </div>
      <Carousel/>
        <Affiliations/>
    </div>
  )
}

export default Homepage;
