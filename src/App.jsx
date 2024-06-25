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

import ColabPresidency from './Componentcollab/ColabPresidency';
import ColabDayanandSagar from './Componentcollab/ColabDayanandSagar';
import ColabEastPoint from './Componentcollab/ColabEastPoint';
import ColabCMR from './Componentcollab/ColabCMR';
// bg-gradient-to-tr from-blue-700 via-purple-900  to-red-700
const App = () =>  {
  return (
    <div>
      <BrowserRouter>
      <NavBarr/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/discoverus" element={<Discoverus />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path='/presidencyuniversity' element={<ColabPresidency/>}/>
        <Route path='/dayanandsagaruniversity' element={<ColabDayanandSagar/>}/>
        <Route path='/eastpointuniversity' element={<ColabEastPoint/>}/>
        <Route path='/cmruniversity' element={<ColabCMR/>}/>
        <Route path='*' element={<div className='h-[80vh] w-full'> <div className='m-auto'><h1 className=' text-6xl text-black font-bold'>ERROR 404</h1></div></div>}/>

      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>  
  )
}

export default App;