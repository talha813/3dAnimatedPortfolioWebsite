
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works,CertificateOverlay } from "./components";

import { ovrCtxt } from "./components/contexts/overlayContext";
import { useState } from "react";
function App() {
   const [id,setId]=useState();
   const [chgState,setChgState]=useState();
  return (
    <BrowserRouter className="relative">
    {/* ----------contextApi------------- */}
    <ovrCtxt.Provider value={{id,setId,chgState,setChgState}}>
          <div className="relative">
            <CertificateOverlay/>        
          <div className='relative z-0 '>
          <div className='bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
           <Tech/>
           <Works></Works>
           <Contact />
        </div>
      </div>
  </ovrCtxt.Provider>
  </BrowserRouter>
  )
}

export default App
