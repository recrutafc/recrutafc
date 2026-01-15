import OverlayButton from '@/components/OverlayButton'
import Clients from './_sections/Clients'
import Hero from './_sections/Hero'
import Services from './_sections/Services'
import Feedbacks from '@/components/Feedbacks'
import Cta from '@/components/Cta'

export default function RecolocaçãoProfissional() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Cta />
      <Feedbacks />
      <OverlayButton />
    </main>
  )
}
