import React from 'react'
import { styles } from "../styles";
import Computers from './canvas/Computers';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='relative top-20 w-full pt-10 h-screen  mx-auto '>
      <div className='absolute top-8 sm:ml-20 mb-9 left-9 flex flex-row'>
           <div className='flex flex-col items-center'>
              <div className='bg-[#ee3e38] w-5 h-5 rounded-full'></div>
              <div className='w-1  h-40 bg-[#c5c560] rounded-b-lg' />
           </div>
           <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#c5c560]'>Talha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a <span className='text-[#ee3e38]'>Mern Stack</span>  Web Developer 
            </p>
          </div>
      </div>
      <Computers></Computers>
      <div className='absolute w-full flex justify-center bottom-20'>
           <a href="#about" className=' w-7 h-[50px] flex justify-center rounded-xl border-4 border-white'>
           <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
           </a>
      </div>
    </section>
  )
}

export default Hero