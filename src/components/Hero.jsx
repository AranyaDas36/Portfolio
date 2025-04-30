import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare as FaSquareXTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

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
    <section className='py-60 h-screen'>
      <div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
        <div className='flex-1 text-center lg:text-left'>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='text-slate text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4'>
            Aranya Das
          </motion.h1>
          <motion.span
            variants={container(0.75)}
            initial="hidden"
            animate="visible"
            className="block bg-gradient-to-l from-white via-gray-300 to-gray-700 bg-clip-text text-2xl sm:text-3xl md:text-4xl text-transparent mb-6">
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1.25)}
            initial="hidden"
            animate="visible"
            className='text-neutral-400 mb-6 text-base sm:text-lg leading-relaxed'>
            I'm a full-stack developer with a strong focus on building robust and scalable web applications. My expertise spans front-end technologies like React and Next.js, alongside back-end systems using Node.js, MySQL, PostgreSQL, and MongoDB.
          </motion.p>
          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center lg:justify-start gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/aranyadas7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/AranyaDas36" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/AranyaD88905623" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            <a href="mailto:aranya741222@gmai.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail /></a>
          </motion.div>
        </div>

        {/* Optional Profile Picture */}
        {/* <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
          src={logo} alt="profile-pic"
        /> */}
      </div>
    </section>
  );
}

export default Hero;
