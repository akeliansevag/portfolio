import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Sevag Akelian | Portfolio',
  description: 'Senior Web Developer'
}

const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={`text-neutral-700 bg-gray-100 dark:bg-gray-800 ${roboto.className}`}>{children}</body>
    </html>
  )
}
