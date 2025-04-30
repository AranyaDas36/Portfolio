import React from 'react'
import { CONTACT } from '../constants'
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6'; 


const Contact = () => {
  return (
    <>
    <div className='border-b border-neutral-900'>
        <h2 className='my-10 text-center text-4xl'> Get in Touch</h2>
        <div className='text-white m-8 flex items-center justify-center gap-4 text-2xl'>
                        <a href="https://www.linkedin.com/in/aranyadas7/" target="_blank"><FaLinkedin/></a>
                        <a href="https://github.com/AranyaDas36" target="_blank"><FaGithub/></a>
                        <a href="https://x.com/AranyaD88905623" target="_blank"><FaSquareXTwitter/></a>
                        <a href="https://www.linkedin.com/in/aranyadas7/" target="_blank"><FaInstagram/></a>
          </div>
    </div>
    </>
  )
}

export default Contact
