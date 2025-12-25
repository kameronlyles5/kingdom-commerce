import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartWrapper from '@/components/CartWrapper'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kingdom Commerce | Empowering Black-Owned Businesses',
  description: 'A world-class multi-vendor marketplace supporting Black-owned businesses globally. Support the culture. Build the kingdom.',
  keywords: ['marketplace', 'Black-owned businesses', 'e-commerce', 'multi-vendor', 'Africa', 'Caribbean', 'US'],
  authors: [{ name: 'Kingdom Commerce' }],
  openGraph: {
    title: 'Kingdom Commerce | Empowering Black-Owned Businesses',
    description: 'A world-class multi-vendor marketplace supporting Black-owned businesses globally.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingdom Commerce | Empowering Black-Owned Businesses',
    description: 'A world-class multi-vendor marketplace supporting Black-owned businesses globally.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          {children}
          <Footer />
          <CartWrapper />
        </CartProvider>
      </body>
    </html>
  )
}

