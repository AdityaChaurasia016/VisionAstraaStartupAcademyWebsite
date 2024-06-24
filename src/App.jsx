import React from 'react'
// import Logo from './assets/Logo.png'
import Footer from './components/Footer';
import NavBarr from './components/NavBarr';
import Homepage from './Pages/Homepage';
import Discoverus from './Pages/Discoverus';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactus from './Pages/Contactus';
import Collaborations from './Pages/Collaborations';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Intermediate from './Pages/Intermediate';
import SignUpB from './Pages/SignUpB';


// bg-gradient-to-tr from-blue-700 via-purple-900  to-red-700
const App = () =>  {
  return (
    <div>
      <NavBarr/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/discoverus" element={<Discoverus />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SignUpB" element={<SignUpB/>}/>
        <Route path="/Intermediate" element={<Intermediate/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/> 
    </div>  
  )
}

export default App;