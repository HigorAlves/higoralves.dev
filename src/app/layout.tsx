import 'tippy.js/animations/shift-toward.css'
import '@mantine/core/styles.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

// eslint-disable-next-line camelcase
import { Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google'
import { Layout } from '~/layout/index.layout'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={`${sora.variable} ${code.variable} ${grotesk.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            primaryColor: 'indigo',
            fontFamily: 'var(--font-sora), var(--font-grotesk)',
            fontFamilyMonospace: 'var(--font-code)',
          }}
          defaultColorScheme={'dark'}
        >
          <Layout layout={'basic'} main={children} />
        </MantineProvider>
      </body>
    </html>
  )
}
