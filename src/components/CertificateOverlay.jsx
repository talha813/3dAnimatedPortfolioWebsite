
import React, { useContext, useEffect, useState } from 'react'
import { merncertificate } from '../assets'
import { BsXLg } from "react-icons/bs";
import { ovrCtxt } from './contexts/overlayContext';
import { certifications } from '../constants';
export default function CertificateOverlay() {
  
  const {chgState,id,setChgState}=useContext(ovrCtxt)
  const matchedId=certifications.find((val)=>val.id==id);
  
  return (
    <div className={`fixed ${!chgState?"hidden":"visible"} z-10 bg-[#c5c560] w-full h-screen flex items-center justify-center `}>
      
       {matchedId && <img src={matchedId.icon} alt="mernstack" className='sm:w-[50vw] sm:h-[30vw]'></img>}
       <BsXLg onClick={()=>{setChgState(false)}} className='text-black absolute top-10 right-5 w-10 h-10 hover:text-white'></BsXLg>
       <p className='text-black'>{}</p>
    </div>
  )
}
