import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ServicesRow() {
  return (
    <section>
      <div className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-[url('/service1.avif')] bg-no-repeat bg-cover bg-center h-[640px] w-full flex justify-end items-end px-9 flex-col">
          <div>
            <h1 className="text-4xl mb-6 font-bold max-md:text-3xl">
              Recrutamento e Seleção
            </h1>
            <div className="bg-slate400 rounded-t-lg p-4">
              <p className="mb-4 text-slate900">
                Nossa missão é colaborar com as empregadoras na contratação de
                colaboradores através de um serviço totalmente personalizado,
                ágil e qualificado. Se você busca economia financeira, redução
                de taxa turnover, otimização de tempo e qualidade em
                contratações, oferecemos o serviço ideal a você.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/recrutamento-e-selecao">Saiba mais</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[url('/service2.avif')] bg-no-repeat bg-cover bg-center h-[640px] w-full flex justify-end items-end px-9 flex-col">
          <div>
            <h1 className="text-4xl mb-6 font-bold max-md:text-3xl">
              Recolocação e Transição Profissional
            </h1>
            <div className="bg-slate400 rounded-t-lg p-4">
              <p className="mb-4 text-slate900">
                Oferecemos esse serviço para quem busca sua reinserção no
                mercado de trabalho e/ou busca uma transição profissional.
                Adotamos estratégias individuais, entendendo propósitos e
                objetivos para assim buscarmos o objetivo junto ao assessorado.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/recolocacao-profissional">Saiba mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[160px] w-full bg-slate900"></div>
    </section>
  )
}
