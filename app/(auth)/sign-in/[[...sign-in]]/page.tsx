import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main className='flex h-screen items-center justify-center w-full'>
        <SignIn/>
    </main>
  )
}

export default page
