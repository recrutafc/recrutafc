import Title from '@/components/Title'
import Image from 'next/image'

export default function Igor() {
  return (
    <section className="relative px-4">
      <div className="max-w-[1400px] mx-auto min-h-[540px] flex justify-between max-lg:flex-col-reverse max-lg:pt-9 max-lg:gap-12">
        <div className="pr-58 max-md:pr-20">
          <div className="bg-gradient-to-t from-slate500 to-slate500/80 justify-center items-center min-h-full p-4 flex max-w-[350px] relative max-lg:rounded-t-lg">
            <p className="text-slate900">
              “Ao longo da minha trajetória, tive a oportunidade de atuar em
              diferentes áreas de Recursos Humanos, o que me permitiu construir
              uma experiência sólida em Recrutamento e Seleção. Passei por
              empresas de diversos portes, nacionais e multinacionais,
              conduzindo processos seletivos do início ao fim. Gosto de entender
              a real necessidade de cada empresa e encontrar profissionais que
              façam sentido não só tecnicamente, mas também culturalmente.”
            </p>

            <Image
              src="/about/3.avif"
              width={345}
              height={540}
              alt="igor"
              className="absolute -right-58 -z-20 bottom-0 max-lg:max-w-[200px] max-md:-right-24"
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
              Psicólogo, graduado pelo Centro Universitário Barão de Mauá, com
              MBA em Coaching e Liderança para Gestão de Pessoas e pós-graduação
              pela Faculdade Metropolitana. Possui sólida trajetória em Recursos
              Humanos, com atuação nos diversos subsistemas da área,
              destacando-se em Recrutamento e Seleção, com foco em excelência
              nos processos e assertividade nas entregas.
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
