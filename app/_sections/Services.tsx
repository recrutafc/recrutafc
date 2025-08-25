import AttributeCard from '@/components/AttributeCard'
import Title from '@/components/Title'

import {
  ClockClockwise,
  Money,
  TrendUp,
  UserCircleCheck,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <section>
      <div className="relative">
        <div className="max-w-[1400px] mx-auto py-[80px] max-2xl:px-4">
          <div className="max-w-[875px]">
            <Title>Serviços</Title>
            <h1 className="text-5xl mb-6 max-md:text-3xl text-slate900">
              Sua solução para{' '}
              <span className="font-bold italic">recrutamento eficiente</span>
            </h1>
            <p className="text-gray-500 mb-9">
              Somos uma equipe dedicada que entende o valor de cada contratação.
              Nossa missão é encontrar os profissionais que se encaixam
              perfeitamente na cultura e nas demandas da sua empresa.
            </p>
            <Link
              href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre Recrutamento e Seleção."
              target="_blank"
              className="block text-slate900 font-bold underline mb-[80px] w-fit hover:text-slate500 delay-150 ease-in-out transition-colors"
            >
              Fale com um especialista
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <AttributeCard
              text="Oferecemos um serviço de alta qualidade a preços competitivos, garantindo que você receba o melhor valor pela seleção dos melhores talentos"
              title="Preço Justo"
              icon={<Money size={32} />}
            />
            <AttributeCard
              text="Com um processo ágil e eficiente, ajudamos sua empresa a preencher vagas de forma rápida, sem comprometer a qualidade da seleção"
              title="Contratação Rápida"
              icon={<ClockClockwise size={32} />}
            />
            <AttributeCard
              text="Entendemos as necessidades únicas de cada empresa e adaptamos nossa abordagem para encontrar candidatos que se alinhem perfeitamente à sua cultura"
              title="Seleção Personalizada"
              icon={<UserCircleCheck size={32} />}
            />
            <AttributeCard
              text="Após a contratação, continuamos a oferecer suporte, garantindo que tanto a empresa quanto o novo colaborador se sintam satisfeitos e engajados"
              title="Acompanhamento Contínuo"
              icon={<TrendUp size={32} />}
            />
          </div>
        </div>
        <span className="absolute bottom-0 w-full h-[160px] bg-slate900 -z-10">
          <div className="max-w-[1400px] mx-auto relative">
            <Image
              src="/service.avif"
              width={402}
              height={507}
              alt="image"
              className="absolute right-0 bottom-0 max-xl:hidden"
            />
          </div>
        </span>
        <span className="absolute bottom-0 w-full h-full bg-gradient-to-t from-slate50 to-slate400 -z-30"></span>
      </div>
    </section>
  )
}
