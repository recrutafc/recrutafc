import { Button } from '@/components/ui/button'
import Gustavo from './_sections/Gustavo'
import Hero from './_sections/Hero'
import Igor from './_sections/Igor'
import Services from './_sections/Services'
import Link from 'next/link'
import Clients from '@/components/Clients'
import OverlayButton from '@/components/OverlayButton'
import Feedbacks from '@/components/Feedbacks'
import Cta from '@/components/Cta'

export default function SobreNos() {
  return (
    <main>
      <Hero />
      <Services />
      <Gustavo />
      <div className="bg-slate900 py-12 px-4">
        <div className="flex justify-center gap-4 items-center max-w-[1400px] mx-auto max-lg:flex-col max-lg:items-start">
          <Button asChild>
            <Link href="/contato">Contrate Conosco</Link>
          </Button>
          <p className="max-w-[380px] text-gray-500">
            Dê o próximo passo e revolucione a forma como sua empresa recruta
            talentos.
          </p>
        </div>
      </div>
      <Igor />
      <div className="border-t-[160px] border-slate500">
        <Clients />
      </div>
      <Cta />
      <Feedbacks />

      <OverlayButton />
    </main>
  )
}
