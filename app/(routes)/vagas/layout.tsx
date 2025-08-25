import Header from '@/components/Header'

export const metadata = {
  title: 'Vagas | Recruta F&C',
  description: 'As melhores vagas de Ribeirão Preto e Região - Recruta F&C.',
  openGraph: {
    title: 'Recruta F&C',
    description:
      'Conectamos talentos com as melhores empresas do mercado para formar equipes de alta performance.',
    url: 'https://www.recrutafc.com.br/og-image-vagas.avif',
    siteName: 'Recruta F&C',
    images: [
      {
        url: 'https://www.recrutafc.com.br/og-image-vagas.avif',
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
      'Conectamos talentos com as melhores empresas do mercado para formar equipes de alta performance.',
    images: ['/og-image-vagas.avif'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
