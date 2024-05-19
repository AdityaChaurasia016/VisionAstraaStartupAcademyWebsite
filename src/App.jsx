import React from 'react'
import Logo from './assets/Logo.png'
import Footer from './components/Footer';
import NavBarr from './components/NavBarr';
import HeroSection from './components/HeroSection';
import Affiliations from './components/Affiliations';

import sky from './assets/skyy.jpg'
import HeroSection2 from './components/HeroSection2';

// bg-gradient-to-tr from-blue-700 via-purple-900  to-red-700
const App = () =>  {
  return (
    <div>
      <NavBarr/>
      <div className="max-w-full mx-auto pt-10 bg-[url('src/assets/back4.jpg')] bg-cover ">
        <HeroSection/>
        <HeroSection2/>
        <Affiliations/>
      </div>
      {/* <Footer/> */}
    </div>  
  )
}

export default App;