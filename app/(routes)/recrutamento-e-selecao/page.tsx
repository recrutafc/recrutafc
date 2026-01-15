import Hero from './_sections/Hero'
import Services from './_sections/Services'
import Clients from '@/components/Clients'
import OverlayButton from '@/components/OverlayButton'
import Feedbacks from '@/components/Feedbacks'
import Cta from '@/components/Cta'

export default function RecrutamentoESeleção() {
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
