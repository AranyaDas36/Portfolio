import React from 'react'

const About = () => {
  return (
    <div>
      <div className='w-full h-full border-b border-neutral-900 pb-4'>
        <h1 className='text-black my-20 text-center text-4xl'> About 
            <span className='text-neutral-500'> Me</span>
        </h1>


        <div className='w-full flex flex-col justify-center items-center space-y-6'>
  <div className='flex flex-col items-center lg:flex-row lg:space-x-6 lg:space-y-0 w-full'>
    <div className='w-full'>
    <div className='w-full flex flex-row items-center p-4'>
    <h2 className='text-black text-xl font-bold font-l bg-gray-300 border-2 p-2'>Languages:</h2>
    <div className='flex space-x-3 mt-2'>
      <h3 className='text-black font-bold p-3 font-l border-2 border-transparent'>C</h3>
      <h3 className='text-black font-bold p-3 font-l border-2 border-transparent'>C++</h3>
      <h3 className='text-black font-bold p-3 font-l border-2 border-transparent'>JavaScript</h3>
    </div>
  </div>
  
  <div className='w-full flex flex-row items-center p-4'>
    <h2 className='text-black text-xl font-bold bg-gray-300 border-2  p-2'>Developers Tool:</h2>
    <div className='flex space-x-3 mt-2'>
      <h3 className='text-black font-bold p-3 font-l border-2 border-transparent'>Git</h3>
      <h3 className='text-black font-bold p-3 font-l border-2 border-transparent'>GitHub</h3>
    </div>
  </div>
  
  <div className='w-full flex flex-row items-center p-4 flex-nowrap'>
  <h2 className='text-black text-xl w-40 font-bold bg-gray-300 border-2 p-2'>Technologies / Frameworks:</h2>
  <div className='flex flex-wrap items-center space-x-3'>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>ReactJS</h3>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>Node.js</h3>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>ExpressJS</h3>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>MongoDB</h3>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>SQL</h3>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>Prisma</h3>
    <h3 className='text-black p-3 font-bold font-l border-2 border-transparent'>AWS</h3>
  </div>
</div>
    </div>
  </div>
</div>




      </div>
    </div>
  )
}

export default About
