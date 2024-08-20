import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import img2 from "../assets/c-.png"; 
import img3 from "../assets/c.png"; 
import img4 from "../assets/js.png"; 
import img5 from "../assets/ts.png";
import { motion } from "framer-motion"

const iconVariants =(duration)=>({
  initail:{y:-10},
  animate:{
    y:[10,-10],
  transition:{
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
  },
},
})

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});


const Technologies = () => {
  return (
    <div>
      <div className=' h-screen border-neutral-800 pb-4'>
        <h1 className='my-10 text-center text-4xl'>Languages</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {/* Adjusted image size */}
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <img 
              className='w-24 h-24 object-contain' 
              src={img2} 
              alt="C++" 
            />
          </div>

          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <img 
              className='w-24 h-24 object-contain' 
              src={img3} 
              alt="C++" 
            />
          </div>

          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <img 
              className='w-24 h-24 object-contain' 
              src={img4} 
              alt="C++" 
            />
          </div>

          
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <img 
              className='w-24 h-24 object-contain' 
              src={img5} 
              alt="C++" 
            />
          </div>
        </div>

        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div variants = {iconVariants(2.5)}
            initail = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </motion.div>
          <motion.div variants = {iconVariants(5)}
            initail = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl text-white' />
          </motion.div>
          <motion.div variants = {iconVariants(2)}
            initail = "initial"
            animate = "animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500' />
          </motion.div>
          {/* <motion.div variants = {iconVariants(6)}
            initail = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiRedis className='text-7xl text-red-700' /> */}
          {/* </motion.div> */}
          <motion.div variants = {iconVariants(4)}
            initail = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500' />
          </motion.div>
          <motion.div variants = {iconVariants(5)}
            initail = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-sky-700' />
          </motion.div>
          <motion.div variants = {iconVariants(3)}
            initail = "initial"
            animate = "animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPrisma className='text-7xl text-black-700' />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
