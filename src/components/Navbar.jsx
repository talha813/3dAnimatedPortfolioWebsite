import React, { useState } from 'react'
import { menu, close } from '../assets' 
import { Link } from 'react-router-dom'
import { navLinks } from '../constants/index'
import { logo } from '../assets'

const Navbar = () => {
  const [active,setActive]=useState('');
 const [toogle,setToggle]= useState(false)
 const [closeMenu,setCloseMenu]=useState(false);
  return (
    <nav className='fixed w-full flex flex-row z-20 bg-[#c5c560] text-[black] py-4'>
            <div className='px-7 h-full flex w-full flex-row  z-20 top-0'>
               <Link to='/' className='flex gap-2 items-center'
                  onClick={()=>{
                    setActive(""),
                    window.scrollTo(0, 0);
                  }}
               >
                    <img src={logo} alt="logo" className='w-12 h-12'/>
                    <p className='  font-bold '>Talha Tahir <span>|| Web Developer</span></p>
               </Link>
            </div>
            <div className='hidden sm:flex  flex-row w-full pr-5 justify-end'>
                  <ul className='flex flex-row gap-3 
                  items-center 
                  font-bold'>
                      {
                        navLinks.map((val)=>
                        {
                           return <li className={`${active=== val.title ? "text-[#ee3e38]" : "text-black" } hover:text-[18px]`} onClick={()=>setActive(val.title)} >
                            <a href={`#${val.id}`}>{val.title}</a>
                            </li>
                        })
                      }
                  </ul>
            </div>
            <div className='flex items-center pr-6 sm:hidden'>
                 <img src={closeMenu == false ? menu : close} alt="menu" className='h-9 w-9' onClick={()=>{ toogle ==false ? setToggle(true) : setToggle(false); closeMenu == false ? setCloseMenu(true) : setCloseMenu(!menu)}} />
            </div>
            <div className={`absolute right-0 top-20 flex sm:hidden ${toogle == true ? "visible" : "hidden"}`} >
                  <ul className='bg-[#c5c560] top-6 mr-10 z-0 p-5 rounded-lg'>
                     {navLinks.map((val)=>{return <li onClick={()=>{setActive(val.title)}} className={`${active === val.title ? "text-[#ee3e38]" : "text-black"} font-bold hover:text-{18px}`}><a href={`#${val.id}`}>{val.title}</a></li>})}
                  </ul>
            </div>

    </nav>
  )
}
export default Navbar