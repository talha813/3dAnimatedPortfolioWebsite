 
 import { motion } from "framer-motion"
 import { styles } from "../styles"
 import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
 import { services,certifications } from "../constants";
 import { BiZoomIn } from "react-icons/bi";
import { useContext, useState } from "react";
 
 import { ovrCtxt } from "./contexts/overlayContext";
 
 const Card=({id,title,authority,detail,icon})=>
 { 
       const { setId,setChgState }=useContext(ovrCtxt);
       return(
           <div className="relative bg-[#ee3e38]  flex flex-col justify-center p-5 w-full sm:w-[250px] rounded-[20px]"> 
             <img relative src={icon} alt="" className="rounded-xl"/>
              <h1 className="text-black items-center flex-wrap w-full font-bold mt-5" >{title} : {authority}</h1>
              <p className="text-white">{detail}</p>
              <BiZoomIn onClick={()=>{setId(id); setChgState(true)}}  className="absolute top-5 right-5 hover:text-[#ee3e38] text-black w-10 h-10 cursor-pointer"></BiZoomIn>
           </div>
       )
 }
 const ServiceCard=({title,icon})=>
 {
      return(
          <Tilt className='sm:w-[250px] w-full flex-col '>
               <motion.div variants={fadeIn("right", "spring")}
               className="className='w-full 
                bg-[#c5c560] p-[1px] rounded-[20px]
                  flex 
                  items-center
                  justify-center
                  text-black`
                  font-bold
                  flex-col
                 shadow-card'">
                        <img
                          src={icon}
                          alt='web-development'
                          className='w-full h-20 object-contain'
                        />
                        <h3 className='text-black mt-5 text-[20px] font-bold text-center'>
                          {title}
                        </h3>                    
               </motion.div>
          </Tilt>
      )
 }
   
 const About = () => {
  return (
    <div className="relative px-9 pt-5">
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:ml-20`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} sm:ml-20`}>Overview.</h2>
       </motion.div>
       <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 sm:ml-20 text-secondary text-[17px] max-w-3xl leading-[30px]'>
       I am a dedicated MERN Stack Developer with a passion for crafting seamless web experiences. Armed with expertise in MongoDB, Express.js, React, and Node.js, I skillfully merge front-end elegance with back-end robustness. My commitment to innovation and staying current with industry trends ensures that I deliver efficient, user-centric solutions. With a knack for translating complex technical details into user-friendly interfaces, I thrive on collaborative projects that push the boundaries of what's possible in the digital realm. Together, let's transform your ideas into captivating digital realities
      </motion.p>
        <div className=" mt-20 flex flex-wrap gap-10 justify-center">
            {services.map((val,index)=>
            {
              return <ServiceCard {...val}></ServiceCard>
              
            })}
        </div>
        <h2 className={`${styles.sectionHeadText} mt-10 ml-20`}>Certifications</h2>
       <div className="mt-5 flex  flex-wrap justify-center  gap-10 justifycenter" >
             
            {certifications.map((val,index)=>
            {
               return <Card {...val}></Card>
            })}
       </div>
       
    </div>
  )
}
export default About;
