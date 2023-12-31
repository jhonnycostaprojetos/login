import { AppProvider } from '@/data/context/AppContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login Simples',
  description: 'Um login simples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><AppProvider>{children}</AppProvider></body>
    </html>
  )
}
