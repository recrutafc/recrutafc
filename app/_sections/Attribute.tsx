import Link from 'next/link'
import AttributeCard from '../_components/AttributeCard'
import ServiceTitle from '../_components/ServiceTitle'
import {
  ClockClockwise,
  Money,
  TrendUp,
  UserCircleCheck,
} from '@phosphor-icons/react/dist/ssr'

export default function Attribute() {
  return (
    <>
      <section className="bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat px-4">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-between items-center py-[100px]">
          <ServiceTitle>Características</ServiceTitle>
          <h2 className="text-3xl text-center font-extrabold text-colors-mainBlue900 mb-4 max-lg:text-2xl uppercase">
            Sua Solução Para Recrutamento Eficiente
          </h2>
          <p className="text-center text-xl text-colors-mainGray400 mb-9 max-lg:text-base">
            Somos uma equipe dedicada que entende o valor de cada contratação.
            Nossa missão é encontrar os profissionais
            <br /> que se encaixam perfeitamente na cultura e nas demandas da
            sua empresa
          </p>
          <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1 mb-9">
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
          <Link
            href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre a Recruta FC."
            className="block underline text-colors-mainBlue900 hover:text-colors-mainGray600 delay-150 ease-in-out"
          >
            Fale com um especialista
          </Link>
        </div>
      </section>
    </>
  )
}
