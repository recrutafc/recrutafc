import Header from '@/components/Header'

export const metadata = {
  title: '404 | Recruta F&C',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
