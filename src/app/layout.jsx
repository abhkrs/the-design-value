import Header from '@/components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['400', '700'],
   subsets: ['latin'] })

export const metadata = {
  title: 'abhkrs',
  description: 'Demo Project created by Abhishek Kumar[Find me by searching abh.krs => socialmedia || abhkrs => linkedin && github]',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
