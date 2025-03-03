import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-center h-screen w-full'>
      <Image
        src='/icons/loading-circle.svg'
        alt='loader'
        width={64}
        height={64}/>
    </div>
  )
}

export default Loader
