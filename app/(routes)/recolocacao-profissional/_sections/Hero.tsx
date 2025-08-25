import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import { MouseScroll } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="h-screen bg-fixed bg-[url('/recolocacao/bg.avif')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col justify-center text-center items-center mb-[75px]">
          <Title>Bem vindo (a)</Title>
          <h1 className="text-5xl font-extrabold italic text-slate900 mb-6 max-md:text-3xl">
            Recolocação e Transição Profissional
          </h1>
          <p className="text-slate900 mb-9">
            Não é apenas buscar um novo emprego. É reinventar sua carreira,
            transformar obstáculos em oportunidades e escrever um capítulo que
            reflita sua verdadeira essência. O próximo passo é seu e <br /> pode
            ser decisivo.
          </p>
          <Button variant="secondary" className="w-[200px]" asChild>
            <Link
              href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre Recolocação Profissional."
              target="_blank"
            >
              Entrar em contato
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute text-slate900 bottom-9 left-1/2 -translate-x-1/2 animate-pulse flex flex-col items-center justify-center opacity-80 text-xs">
        <span>Scroll Down</span>
        <MouseScroll size={32} />
      </div>
    </section>
  )
}
