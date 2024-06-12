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
      <NavBarr/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/discoverus" element={<Discoverus />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path='/presidencyuniversity' element={<ColabPresidency/>}/>
        <Route path='/dayanandsagaruniversity' element={<ColabDayanandSagar/>}/>
        <Route path='/eastpointuniversity' element={<ColabEastPoint/>}/>
        <Route path='/cmruniversity' element={<ColabCMR/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/> 
    </div>  
  )
}

export default App;