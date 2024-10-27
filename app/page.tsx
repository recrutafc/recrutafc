import Attribute from './_sections/Attribute'
import Clients from './_sections/Clients'
import Hero from './_sections/Hero'
import Services from './_sections/Services'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Attribute />
      <Clients />
    </main>
  )
}
