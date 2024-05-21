import React from 'react'
// import Logo from './assets/Logo.png'
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection2';
import Affiliations from '../components/Affiliations';


const Homepage = () => {

  return (
    <div>
      <div className="max-w-full mx-auto pt-10 bg-[url('src/assets/blue5.jpg')] bg-cover">
        <HeroSection/>
        <HeroSection2/>
        <Affiliations/>
      </div>
    </div>
  )
}

export default Homepage;
