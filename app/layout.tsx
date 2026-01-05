import type { Metadata } from 'next'
import { Open_Sans as Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const geistSans = Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Recruta F&C',
  description:
    'A Recruta F&C é uma empresa de recrutamento e seleção em Ribeirão Preto, São Paulo. Conectamos empresas com os melhores talentos do mercado para formar equipes de alta performance.',
  icons: '/favicon.webp',
  openGraph: {
    title: 'Recruta F&C',
    description:
      'Conectamos empresas com os melhores talentos do mercado para formar equipes de alta performance.',
    url: 'https://www.recrutafc.com.br/og-image.avif',
    siteName: 'Recruta F&C',
    images: [
      {
        url: 'https://www.recrutafc.com.br/og-image.avif',
        width: 1200,
        height: 630,
        alt: 'Imagem OG padrão',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruta F&C',
    description:
      'Conectamos empresas com os melhores talentos do mercado para formar equipes de alta performance.',
    images: ['/og-image.avif'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_BR">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
