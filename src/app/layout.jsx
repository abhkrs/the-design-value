import Header from '@/components/sections/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/sections/Footer'

const inter = Inter({
  weight: ['400', '700'],
   subsets: ['latin'] })

export const metadata = {
  title: 'The Design Value',
  description: 'India’s first UI/UX design school with Paid internships',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
