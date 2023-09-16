import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Emir Jean Antonios',
  description: 'Emir Jean Antonios\' portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='grid grid-rows-layout min-h-screen'>
        <Header />
        <main className='container mx-auto min-h-full'>
        {children}
        </main>
      </body>
    </html>
  )
}
