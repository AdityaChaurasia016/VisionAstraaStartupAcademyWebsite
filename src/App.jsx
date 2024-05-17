import React from 'react'
import Logo from './assets/Logo.png'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NavBarr from './components/NavBarr';
import HeroSection from './components/HeroSection';
import Affiliations from './components/Affiliations';


const App = () => {
  return (
    <div>
      <NavBarr/>
      <div className="max-w-7xl mx-auto pt-10 px-6 border">
        <HeroSection/>
        <Affiliations/>
      </div>
      <Footer/>
    </div>  
  )
}

export default App;