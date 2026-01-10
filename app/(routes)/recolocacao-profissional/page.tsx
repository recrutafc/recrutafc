import OverlayButton from '@/components/OverlayButton'
import Clients from './_sections/Clients'
import Hero from './_sections/Hero'
import Services from './_sections/Services'
import Feedbacks from '@/components/Feedbacks'

export default function RecolocaçãoProfissional() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Feedbacks />
      <OverlayButton />
    </main>
  )
}
