import Header from '@/components/Header'

export const metadata = {
  title: 'Transição Profissional | Recruta F&C',
  description:
    'Transição Profissional pela Recruta F&C. Suporte especializado para sua carreira.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
