import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { MouseScroll } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute bottom-0 animate-pulse flex flex-col items-center justify-center opacity-80 text-xs text-slate900 w-full ">
        <span>Scroll Down</span>
        <MouseScroll size={32} />
      </div>
      <div className="px-4">
        <div className="max-w-[1400px] mx-auto flex gap-4 py-[80px] items-center justify-between max-lg:flex-col">
          <div className="max-w-[600px]">
            <Title>Bem vindo (a)</Title>
            <h1 className="text-5xl font-bold italic text-slate900 mb-6 max-md:text-3xl">
              Sobre nós
            </h1>
            <p className="text-gray-500 mb-9">
              A Recruta F&C oferece soluções completas em recrutamento e
              seleção, atuando como uma ponte estratégica entre empresas e
              profissionais no interior do estado de São Paulo, com foco na
              região de Ribeirão Preto.
            </p>
            <Button variant="secondary" className="w-[200px]" asChild>
              <Link
                href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre RecrutaF&C."
                target="_blank"
              >
                Entrar em contato
              </Link>
            </Button>
          </div>

          <div className="relative w-[588px] h-[488px] max-md:hidden">
            <Image
              src="/about/1.avif"
              width={488}
              height={531}
              alt="logo"
              priority
              className="rounded-full border-32 border-slate900"
            />
            <span className="-z-10 absolute right-0 -top-9 w-[487px] h-[487px] rounded-full bg-slate500"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
