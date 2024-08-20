import React from 'react'
import logo from '../assets/logo.jpg';
import './Nav.css';
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6'; 


const Navbar = () => {
  return (
    <div>
      <nav className='mb-5 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='font-sans mx-2 text-4xl'></h1>
        </div>
        <div className='text-white m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/aranyadas7/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/AranyaDas36" target="_blank"><FaGithub/></a>
            <a href="https://x.com/AranyaD88905623" target="_blank"><FaSquareXTwitter/></a>
            <a href="https://www.linkedin.com/in/aranyadas7/" target="_blank"><FaInstagram/></a>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar


                    {/* <div className="my-9 ml-0 w-full lg:w-1/2 lg:p-8">
                        <div className="pl-40 flex items-center justify-center justify-end">
                            <motion.img 

                        initial={{x: 100, opacity: 0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        className="w-56 h-66 object-cover rounded-full" src={logo} alt="profile-Pic"></motion.img>
                        </div>
                    </div> */}