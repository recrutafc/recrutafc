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
              Administrador, formado pela UNISEB COC/FGV. Desde 2010 atuante na
              área e trazendo consigo experiencias em empresas de diversos ramos
              tendo ocupado cargos de Comprador, Assistente Adm. Comercial e
              Logístico, Coordenador de Eventos e Vendas de Multipropriedades.
            </p>
          </div>
        </div>
        <div className="pl-58">
          <div className="bg-gradient-to-b from-slate500 to-slate500/80 justify-center items-center min-h-full p-4 flex max-w-[350px] relative max-lg:rounded-t-lg">
            <p className="text-slate900">
              “A base para a execução de um serviço de assessoria personalizado
              que beire a excelência parte de uma estruturação empresarial e uma
              cultura organizacional bem definida aonde a busca é sempre pela
              transparência, profissionalismo e a humanização dos nossos
              processos do início ao fim, com foco total no resultado final e
              satisfação completa dos nos clientes.”
            </p>

            <Image
              src="/about/2.avif"
              width={345}
              height={540}
              alt="gustavo"
              className="absolute -left-58 -z-20 bottom-0 max-lg:max-w-[200px]"
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
