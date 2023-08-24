import '@splidejs/react-splide/css'
import 'tippy.js/animations/shift-toward.css'
import '~/assets/styles/tailwind.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

// eslint-disable-next-line camelcase
import { Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google'

const sora = Sora({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-sora',
})

const code = Source_Code_Pro({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-code',
})

const grotesk = Space_Grotesk({
  weight: ['300'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-grotesk',
})

export const metadata: Metadata = {
  title: 'Higor Alves',
  description: 'Developer, Nomad, Biker',
  openGraph: {
    type: 'website',
    description: 'Developer, Nomad, Biker',
    locale: 'en_US',
    title: 'Higor Alves',
    images: ['%PUBLIC_URL%/fb-og-image.png'],
    url: 'https://higoralves.dev',
    siteName: 'Higor Alves',
  },
  twitter: {
    description: 'Developer, Nomad, Biker',
    title: 'Higor Alves',
    images: ['%PUBLIC_URL%/fb-og-image.png'],
    card: 'summary_large_image',
    creator: '@higoralves.dev',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className={`${sora.variable} ${code.variable} ${grotesk.variable} bg-n-8 font-sans text-base text-n-1`}>
        {children}
        <svg className="block" width={0} height={0}>
          <defs>
            <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#89F9E8" />
              <stop offset="100%" stopColor="#FACB7B" />
            </linearGradient>
            <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
              <stop offset="0%" stopColor="#D87CEE" />
              <stop offset="100%" stopColor="#FACB7B" />
            </linearGradient>
            <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
              <stop offset="0%" stopColor="#9099FC" />
              <stop offset="100%" stopColor="#89F9E8" />
            </linearGradient>
            <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#9099FC" />
              <stop offset="100%" stopColor="#D87CEE" />
            </linearGradient>
          </defs>
        </svg>
      </body>
    </html>
  )
}
