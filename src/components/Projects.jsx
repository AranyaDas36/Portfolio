import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className='py-20 border-b border-neutral-900'>
      <h2 className='text-center text-4xl font-semibold mb-12'>Projects</h2>

      <div className='space-y-16'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='flex flex-col lg:flex-row gap-6 items-start'>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='flex-shrink-0'>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className='w-40 h-40 rounded hover:scale-105 transition-transform duration-200' />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='flex-1'>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h6 className='text-xl font-semibold text-white hover:text-gray-500 transition-colors mb-2'>{project.title}</h6>
              </a>
              <p className='text-neutral-400 text-sm mb-3'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='bg-gray-200 text-black px-2 py-1 rounded text-sm'>{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
