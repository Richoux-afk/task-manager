import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Provider } from './provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Generated by create next app',
}

const RootLayout=({
  children,
}: {
  children: React.ReactNode
}) =>{
  return (
    <Provider>
        <body className={inter.className}>{children}</body>
    </Provider>
  )
}

export default RootLayout;