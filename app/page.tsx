import OverlayButton from '@/components/OverlayButton'

import Hero from './_sections/Hero'
import Services from './_sections/Services'
import ServicesRow from './_sections/ServicesRow'
import HomeLayout from './home-layout'
import Catch from '@/components/Catch'
import Clients from '@/components/Clients'

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <OverlayButton />
        <Hero />
        <Services />
        <ServicesRow />
        <Clients />
        <Catch img="/catch.avif" />
      </div>
    </HomeLayout>
  )
}
