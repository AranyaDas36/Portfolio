import React from 'react'
import { PROJECTS } from "../constants";
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className=' h-screen border-neutral-900 py-5 pb-4 text-4xl'>
      <h2 className='my-20 text-center font-semibold text-4xl'>
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x:-100}}
                transition={{duration: 1}}
                className='w-full lg:w-1/4'>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={project.image} 
                  width={150} 
                  height={150} 
                  alt={project.title} 
                  className='mb-6 rounded cursor-pointer hover:scale-105 transition-transform duration-200'
                />
              </a>
            </motion.div>

            <motion.div whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x:100}}
                transition={{duration: 1}}
                className='w-full px-10 max-w-xl lg:w-3/4'>
              <a
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='block mb-2 text-xl font-semibold text-black-600 cursor-pointer transform transition-transform duration-200 hover:text-gray-500 hover:scale-90 focus:outline-none focus:none focus:ring-gray-500 active:text-gray-700'>
                <h6 className='font-semibold text-white text-xl'> {project.title} </h6>
              </a>
              <p className='text-xs mb-4 text-white text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='bg-gray-200 text-black px-2 py-1 rounded text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
