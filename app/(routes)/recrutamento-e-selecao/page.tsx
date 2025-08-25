import Catch from '@/components/Catch'
import Hero from './_sections/Hero'
import Services from './_sections/Services'
import Clients from '@/components/Clients'
import OverlayButton from '@/components/OverlayButton'

export default function RecrutamentoESeleção() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Catch img="/catch1.avif" />
      <OverlayButton />
    </main>
  )
}
