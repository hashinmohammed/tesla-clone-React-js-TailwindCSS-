import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const TeslaModel = ({ backgroundImageUrl, modelTitle }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, height: '100vh', backgroundSize: 'cover' }}>
      <div className='absolute inset-x-0 top-[15%] text-center'>
        <h1 className='text-4xl font-bold'>{modelTitle}</h1>
        <p className='p-2 text-sm'>Leasing starting at $349/mo</p>
      </div>
      <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
        <button className='bg-[#393c41] rounded w-72 lg:w64 lg:mx-4 h-10 mt-2 text-white'>Custom Order</button>
        <button className='bg-[#f4f4f4] rounded w-72 lg:w64 lg:mx-4 h-10 mt-2'>Demo Drive</button>
      </div>
      <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
        <FiChevronDown size={24} />
      </div>
    </div>
  )
}

export default TeslaModel
