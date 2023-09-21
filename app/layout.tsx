import './globals.css'
import type { Metadata } from 'next'
import { Quicksand, Dancing_Script, Cormorant } from 'next/font/google'
import { Navbar } from './Navbar'


const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand'
})

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant'
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script'
})

export const metadata: Metadata = {
  title: 'Tyler Hartley, Atlanta Harpist',
  description: 'Tyler Hartley is a world-class harpist from Atlanta, GA who is proud to deliver high quality performances, from wedding ceremonies to the recital hall. Tyler is also one of the most accomplished teachers in the Atlanta area, offering lessons to beginerrs and advanced students alike.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.className} text-lg font-medium`}>
      <body
        className={`${quicksand.variable} ${cormorant.variable} ${dancingScript.variable} bg-maize-900/30`} >
        <Navbar />
        {children}
      </body>
    </html >
  )
}
