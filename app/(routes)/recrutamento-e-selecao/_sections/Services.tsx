import AttributeCard from '@/components/AttributeCard'
import Title from '@/components/Title'

import {
  ArrowsOutSimple,
  CheckCircle,
  Rocket,
  Target,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <section>
      <div className="relative">
        <div className="max-w-[1400px] mx-auto py-[80px] max-2xl:px-4">
          <div className="max-w-[875px]">
            <Title>Estrutura</Title>
            <h1 className="text-5xl mb-6 max-md:text-3xl text-slate900">
              Como funciona nosso <br />
              <span className="font-bold italic">processo</span> de{' '}
              <span className="font-bold italic">recrutamento?</span>
            </h1>
            <p className="text-gray-500 mb-9">
              Na Recruta F&C, desenvolvemos serviços sob medida para atender às
              necessidades da sua empresa. Unimos análise criteriosa de
              candidatos e compreensão da cultura organizacional para garantir
              um recrutamento alinhado aos seus objetivos, entregando resultados
              que realmente fazem a diferença.
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
              text="Usamos tecnologia e estratégia para identificar os candidatos certos, antes mesmo deles aparecerem no seu radar."
              title="Radar de Talentos"
              icon={<ArrowsOutSimple size={32} />}
            />
            <AttributeCard
              text="Não é só sobre currículo — buscamos profissionais que respiram a mesma cultura e valores da sua empresa."
              title="Match Cultural"
              icon={<CheckCircle size={32} />}
            />
            <AttributeCard
              text="Processo rápido, preciso e sem enrolação, filtrando apenas quem realmente pode fazer a diferença."
              title="Seleção Ninja"
              icon={<Target size={32} />}
            />
            <AttributeCard
              text="Apresentamos talentos prontos para gerar resultados e elevar o nível da sua equipe desde o primeiro dia."
              title="Contratação de Impacto"
              icon={<Rocket size={32} />}
            />
          </div>
        </div>
        <span className="absolute bottom-0 w-full h-[160px] bg-slate900 -z-10">
          <div className="max-w-[1400px] mx-auto relative">
            <Image
              src="/recrutamento/1.avif"
              width={400}
              height={482}
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
