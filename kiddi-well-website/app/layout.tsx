import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF8C3D',
}

export const metadata: Metadata = {
  title: 'Kiddi Well - Premium Baby Food & Nutrition',
  description: 'Discover Kiddi Well\'s range of organic, nutritious baby food products made with love for your little ones. Quality ingredients, trusted by parents.',
  keywords: 'baby food, infant nutrition, organic baby food, West Bengal',
  generator: 'v0.app',
  openGraph: {
    title: 'Kiddi Well - Premium Baby Food',
    description: 'Organic, nutritious baby food trusted by parents',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
