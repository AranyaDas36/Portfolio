import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare as FaSquareXTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg"; // Only include if you plan to use the image

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='h-screen pb-0 lg:mb-10 my-45 py-20'>
      <div className='mx-9 flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='my-0 mx-7 flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='text-black-800 pb-4 text-6xl text-bold tracking-tight lg:mt-16 lg:text-8xl'>
              Aranya Das
            </motion.h1>
            <motion.span
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-l from-white via-gray-300 to-gray-700 bg-clip-text text-4xl tracking-tight text-transparent pb-6">
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1.25)}
              initial="hidden"
              animate="visible"
              className='text-white-700 my-4 max-w-xxl text-lg leading-relaxed tracking-tight'>
              I'm a full-stack developer with a strong focus on building robust and scalable web applications. My expertise spans front-end technologies like React and Next.js, alongside back-end systems using Node.js, MySQL, PostgreSQL, and MongoDB. I'm dedicated to leveraging my skills to craft innovative solutions that enhance business growth and provide exceptional user experiences.
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className='text-white mt-8 flex items-center justify-center gap-4 text-2xl'>
              <a href="https://www.linkedin.com/in/aranyadas7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/AranyaDas36" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://x.com/AranyaD88905623" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
              <a href="mailto:aranya741222@gmai.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail /></a>
            </motion.div>
          </div>
        </div>

                    {/* <div className="my-9 ml-0 w-full lg:w-1/2 lg:p-8">
                        <div className="pl-40 flex items-center justify-center justify-end">
                            <motion.img 

                        initial={{x: 100, opacity: 0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        className="w-56 h-66 object-cover rounded-full" src={logo} alt="profile-Pic"></motion.img>
                        </div>
                    </div> */}
      </div>
    </div>
  );
}

export default Hero;
