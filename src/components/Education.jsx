import React from 'react'

const Education = () => {
  return (
    <div className='border-neutral-900 pb-4 text-4xl'>
      <h1 className='my-20 text-center text-4xl'>Education</h1>

      <div className='w-full flex items-center justify-evenly py-6'>
      <div className='ml-40'>
            <h1 className='font-semibold text-xl'>  2021 - 2025 </h1>
            <h2>CGPA : 7.79 / 10</h2>
        </div>

        <div className='w-1/2 p-3 ml-9 py-6'>
         <h1 className='font-semibold text-xl ml-20'> Bachelor of Engineering in Computer Science and Engineering</h1>
         <h2 className='ml-20'>Chandigarh University</h2>
        </div>
        
      </div>

      <div className='w-full flex items-center justify-evenly py-6'>
      <div className='ml-60'>
            <h1 className='font-semibold text-xl'> 2019 - 2021 </h1>
            <h2>Percentage : 90.8 % </h2>
        </div>

        <div className='w-1/2 p-3 ml-40'>
         <h1 className='font-semibold text-xl'> Class XII </h1>
         <h2>Satish Chandra Memorial School</h2>
        </div>
        
      </div>

      <div className='w-full flex items-center justify-evenly py-6'>
      <div className='ml-60'>
            <h1 className='font-semibold text-xl'> 2018 - 2019 </h1>
            <h2>Percentage : 91.2 % </h2>
        </div>

        <div className='w-1/2 p-3 ml-40'>
         <h1 className='font-semibold text-xl'> Class X </h1>
         <h2>Satish Chandra Memorial School</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Education
