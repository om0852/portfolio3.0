import React from 'react'

const Loader = () => {
  return (
    <div className='bg-white z-10 grid place-items-center absolute top-0 w-[100%] h-[100vh]'>
      <div className='loader z-10 relative' id='loader'></div>
    </div>
  )
}

export default Loader
