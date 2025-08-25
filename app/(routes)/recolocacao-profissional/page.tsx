import OverlayButton from '@/components/OverlayButton'
import Catch from './_sections/Catch'
import Clients from './_sections/Clients'
import Hero from './_sections/Hero'
import Services from './_sections/Services'

export default function RecolocaçãoProfissional() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Catch img="/catch3.avif" />
      <OverlayButton />
    </main>
  )
}
