import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Croom",
    description: "A clone of Zoom",
    icons: {
      icon: '/icons/logo.svg'
    }
  };

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <NavBar/>

            <div className='flex'>
                <SideBar/>

                <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-29 max-md:pb-14 sm:px-14'>
                    <div className='w-full'>
                        {children}
                    </div>
                </section>
            </div>            
    </div>
    )
}

export default layout
