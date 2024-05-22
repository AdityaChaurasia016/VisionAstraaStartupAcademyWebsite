import React from 'react'
// import Logo from './assets/Logo.png'
import Footer from './components/Footer';
import NavBarr from './components/NavBarr';
import Homepage from './Pages/Homepage';
import Discoverus from './Pages/Discoverus';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


// bg-gradient-to-tr from-blue-700 via-purple-900  to-red-700
const App = () =>  {
  return (
    <div>
      <NavBarr/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/discoverus" element={<Discoverus />}/>
      </Routes>
      </BrowserRouter>
      <Footer/> 
    </div>  
  )
}

export default App;