import Image from 'next/image'
import { AnimateMarquee } from '../_components/AnimateMarquee'
import Button from '../_components/Button'
import ServiceTitle from '../_components/ServiceTitle'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export default function Clients() {
  return (
    <>
      <section className="relative flex overflow-x-hidden flex-col bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat py-[100px]">
        <div className="flex flex-col justify-center items-center">
          <ServiceTitle>Clientes</ServiceTitle>
          <h2 className="text-3xl text-center font-extrabold text-colors-mainBlue900 mb-4 max-lg:text-2xl">
            Junte-se às Empresas que
            <br /> Confiam Em Nós
          </h2>
          <p className="text-xl text-colors-mainGray400 text-center max-lg:text-base max-w-[1100px]">
            Estas empresas já escolheram a expertise da Recruta F&C para
            encontrar os melhores talentos. Venha fazer parte desse grupo e
            descubra como podemos ajudar sua empresa a crescer com profissionais
            de alto nível
          </p>
        </div>
        <AnimateMarquee />
      </section>

      <div className="max-w-[1432px] mx-auto px-4 my-9">
        <div className="py-[80px] bg-colors-mainBlue900 flex justify-between px-[64px] rounded-xl shadow-md relative max-md:flex-col">
          <Image
            src="/assets/rectangle2.svg"
            alt="asset"
            width={64}
            height={64}
            className="absolute top-4 left-4"
          />
          <Image
            src="/assets/rectangle2.svg"
            alt="asset"
            width={64}
            height={64}
            className="absolute bottom-4 right-4"
          />
          <div className="max-md:mb-6">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-colors-mainWhite to-colors-mainGray600 bg-clip-text text-transparent mb-4 max-lg:text-2xl">
              Eleve Suas Contratações!
            </h2>
            <p className="text-xl text-colors-mainGray200 max-lg:text-base">
              Comece agora e transforme o processo de recrutamento da sua
              empresa.
            </p>
          </div>
          <div className='flex gap-4 w-full max-w-[346px] max-md:min-w-full'>
            <Button styleType="3" href="/contato" maxWidth={200} redirect=''>
              Entrar Em Contato
            </Button>
            <Button styleType="2" href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre a Recruta FC." maxWidth={130} redirect='1' aria-label='Botão ir para WhatsApp'>
              <WhatsappLogo size={30} alt='Botão ir para WhatsApp' />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
