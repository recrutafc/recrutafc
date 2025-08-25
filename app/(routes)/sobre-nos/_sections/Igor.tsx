import Title from '@/components/Title'
import Image from 'next/image'

export default function Igor() {
  return (
    <section className="relative px-4">
      <div className="max-w-[1400px] mx-auto min-h-[540px] flex justify-between max-lg:flex-col-reverse max-lg:pt-9 max-lg:gap-12">
        <div className="pr-58">
          <div className="bg-gradient-to-t from-slate500 to-slate500/80 justify-center items-center min-h-full p-4 flex max-w-[350px] relative max-lg:rounded-t-lg">
            <p className="text-slate900">
              “Ao longo da carreira pude ter experiências em alguns dos
              subsistemas de RH, tendo atuação relevante e sólida dentro de
              recrutamento e seleção de pessoas. Atuei em empresas de diversos
              portes nacionais e multinacionais, conduzindo de maneira end to
              end os processos seletivos.”
            </p>

            <Image
              src="/about/3.avif"
              width={345}
              height={540}
              alt="igor"
              className="absolute -right-58 -z-20 bottom-0 max-lg:max-w-[200px]"
            />
          </div>
        </div>

        <div className="max-w-[600px] flex justify-center items-center">
          <div>
            <Title>Especialista em Recrutamento e Seleção</Title>
            <h1 className="text-5xl font-bold italic text-slate900 mb-6 max-md:text-3xl">
              Ígor N. Fernandes
            </h1>
            <p className="text-gray-500 mb-9">
              Psicólogo graduado pelo Centro Universitário Barão de Mauá, com
              MBA em Coaching e Liderança para Gestão de Pessoas e Pós-graduado
              pela Faculdade Metropolitana. Com uma trajetória profissional
              sólida, acumulou experiências significativas nos diversos
              subsistemas de Recursos Humanos, destacando-se no subsistema de
              Recrutamento e Seleção.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/about/deg.avif"
        width={1920}
        height={340}
        alt="degrade"
        className="absolute -z-10 bottom-0 left-0 right-0"
      />
    </section>
  )
}
