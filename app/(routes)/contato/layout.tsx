import Header from '@/components/Header'

export const metadata = {
  title: 'Contato | Recruta F&C',
  description:
    'Entre em contato Recruta F&C. Suporte especializado para sua carreira.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
