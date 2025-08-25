import Header from '@/components/Header'

export const metadata = {
  title: 'Recrutamento e Seleção | Recruta F&C',
  description:
    'Serviço de Recrutamento e Seleção Profissional pela Recruta F&C. Suporte especializado para sua empresa.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
