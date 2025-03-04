
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Croom",
  description: "A clone of Zoom",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default layout
