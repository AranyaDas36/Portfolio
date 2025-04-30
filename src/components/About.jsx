import React from 'react';

const About = () => {
  return (
    <section className='py-20 border-b border-neutral-900 h-screen'>
      <h1 className='text-black-400 text-center text-5xl font-bold mb-12'>
        About <span className='text-neutral-500'>Me</span>
      </h1>

      <div className='space-y-8'>
        <div>
          <h2 className='text-3xl bg-white-300 font-bold inline-block mb-3'>Languages: </h2>
          <div className='flex flex-wrap gap-3'>
            {['C', 'C++', 'JavaScript', 'Typescript'].map((lang) => (
              <span key={lang} className='text-white font-bold border px-3 py-1 rounded'>{lang}</span>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-3xl bg-white-300 font-bold inline-block mb-3'>Developer Tools: </h2>
          <div className='flex flex-wrap gap-3'>
            {['Git', 'GitHub'].map((tool) => (
              <span key={tool} className='text-white font-bold border px-3 py-1 rounded'>{tool}</span>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-3xl bg-white-300 font-bold inline-block mb-3'>Technical Skilla: </h2>
          <div className='flex flex-wrap gap-3'>
            {['ReactJS', 'TailwindCSS', 'Node.js', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'Prisma', 'Hono', 'Serverless Backend', 'AWS'].map((tool) => (
              <span key={tool} className='text-white font-bold border px-3 py-1 rounded'>{tool}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;
