import Title from '@/components/Title'
import Image from 'next/image'

export default function Gustavo() {
  return (
    <section className="relative px-4">
      <div className="max-w-[1400px] mx-auto min-h-[540px] flex justify-between max-lg:flex-col max-lg:pt-9 max-lg:gap-12">
        <div className="max-w-[600px] flex justify-center items-center">
          <div>
            <Title>Consultor de RH</Title>
            <h1 className="text-5xl font-bold italic text-slate900 mb-6 max-md:text-3xl">
              Gustavo P. Castro
            </h1>
            <p className="text-gray-500 mb-9">
              Administrador, formado pela UNISEB COC/FGV, com atuação
              profissional desde 2010. Possui sólida experiência em empresas de
              diversos segmentos, com atuação estratégica nas áreas
              administrativa, compras, comercial e logística, além de
              coordenação de eventos, sempre com foco em resultados e eficiência
              operacional.
            </p>
          </div>
        </div>
        <div className="pl-58 max-md:pl-20">
          <div className="bg-gradient-to-b from-slate500 to-slate500/80 justify-center items-center min-h-full p-4 flex max-w-[350px] relative max-lg:rounded-t-lg">
            <p className="text-slate900">
              “Acredito muito que um bom serviço de assessoria vai além do
              processo em si. Ele começa com organização, clareza e uma cultura
              bem definida. Nosso dia a dia é pautado pela transparência, pelo
              profissionalismo e pelo cuidado com as pessoas, acompanhando cada
              etapa de perto para garantir bons resultados e a satisfação de
              quem confia no nosso trabalho.”
            </p>

            <Image
              src="/about/2.avif"
              width={345}
              height={540}
              alt="gustavo"
              className="absolute -left-58 -z-20 bottom-0 max-lg:max-w-[200px] max-md:-left-30"
            />
          </div>
        </div>
      </div>
      <Image
        src="/about/deg.avif"
        width={1920}
        height={340}
        alt="degrade"
        className="absolute bottom-0 left-0 right-0 -z-10"
      />
    </section>
  )
}
