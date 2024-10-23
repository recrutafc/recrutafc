import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './_styles/globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'

const openSans = OpenSans({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Recruta F&C',
  description: 'A Recruta F&C é uma empresa de recrutamento e seleção em Ribeirão Preto, São Paulo. Conectamos empresas com os melhores talentos do mercado para formar equipes de alta performance.',
  icons: '/favicon.webp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.className} subpixel-antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
