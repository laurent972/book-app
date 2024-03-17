'use client'
import Image from 'next/image'
import './styles/globals.css'
import { Lato } from 'next/font/google'
import logo from '../../public/assets/logo.svg';
import UserProvider from './context/UserProvider';
 
const lato = Lato({
  weight: ['300','400','700','900'],
  subsets: ['latin'],
  display: 'swap',
})

/*text-dark-blue ${lato.className}*/
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <body className={` `}>
     
         <UserProvider>
          {children}
         </UserProvider> 
        </body>
    </html>
  )
}
