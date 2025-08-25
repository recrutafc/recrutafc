import { AnimateMarquee } from '@/components/AnimateMarquee'
import Title from '@/components/Title'

export default function Clients() {
  return (
    <section className="px-4 bg-slate400">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center text-center p-[80px]">
        <Title>Clientes</Title>
        <h1 className="text-5xl text-slate900 mb-6 max-md:text-3xl">
          Junte-se às <span className="font-bold italic">empresas</span> que{' '}
          <br />
          <span className="font-bold italic">confiam em nós</span>
        </h1>
        <p className="text-gray-500 mb-[80px]">
          Estas empresas já escolheram a expertise da Recruta F&C para encontrar
          os melhores talentos. Venha fazer parte desse grupo e descubra <br />{' '}
          como podemos ajudar sua empresa a crescer com profissionais de alto
          nível
        </p>
        <AnimateMarquee />
      </div>
    </section>
  )
}
