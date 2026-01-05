import AttributeCard from '@/components/AttributeCard'
import Title from '@/components/Title'

import { Eye, Target, TrendUp } from '@phosphor-icons/react/dist/ssr'

import Link from 'next/link'

export default function Services() {
  return (
    <section>
      <div className="relative">
        <div className="max-w-[1400px] mx-auto py-[80px] max-2xl:px-4">
          <div className="max-w-[950px] mx-auto text-center flex flex-col items-center justify-center">
            <Title>Serviços</Title>
            <h1 className="text-5xl mb-6 max-md:text-3xl text-slate900">
              Como surgiu a{' '}
              <span className="font-bold italic">Recruta F&C? </span>
            </h1>
            <p className="text-gray-500 mb-9">
              A Recruta F&C surge como resultado de uma parceria de cooperação
              entre os amigos e agora sócios, Ígor N. Fernandes e Gustavo P.
              Castro. Unindo forças, ambos unidos com o desejo empreendedor de
              realizar sonhos, oferecendo oportunidades destacadas no mercado de
              trabalho e excelência em serviços de assessoria empresarial no
              campo de Recursos Humanos.
            </p>
            <Link
              href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre RecrutaF&C."
              target="_blank"
              className="block text-slate900 font-bold underline mb-[80px] w-fit hover:text-slate500 delay-150 ease-in-out transition-colors"
            >
              Fale com um especialista
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            <AttributeCard
              text="Nossa missão é ajudar empresas e profissionais a alcançar seus objetivos com um trabalho humanizado, transparente e personalizado. Solucionamos desafios de Recrutamento e Seleção, promovendo qualidade de vida e desenvolvimento para quem busca Transição no mercado."
              title="Missão"
              icon={<Target size={32} />}
            />
            <AttributeCard
              text="Sempre seremos reconhecidos como uma empresa em constante evolução no cenário de prestação de serviços de RH. Nosso objetivo é atingir a excelência e estabelecer-nos como referência em assessoria empresarial e profissional no âmbito do RH terceirizado."
              title="Visão"
              icon={<Eye size={32} />}
            />
            <AttributeCard
              text="Orientamo-nos pela necessidade das pessoas e dos parceiros, sempre mantendo o profissionalismo, agilidade, flexibilidade, humanização, cordialidade, ética e respeito como pilares fundamentais de nossa atuação"
              title="Valores"
              icon={<TrendUp size={32} />}
            />
          </div>
        </div>
        <span className="absolute bottom-0 w-full h-[160px] bg-slate500 -z-10"></span>
        <span className="absolute bottom-0 w-full h-full bg-gradient-to-t from-slate50 to-slate400 -z-30"></span>
      </div>
    </section>
  )
}
