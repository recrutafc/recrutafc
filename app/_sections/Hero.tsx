import { Button } from '@/components/ui/button'
import { MouseScroll } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="">
      <div className="relative w-full h-screen overflow-hidden">
        <div className="w-full h-full px-4">
          <div className="max-w-[1400px] h-full mx-auto flex justify-center items-center">
            <div className="text-center max-w-[900px] flex flex-col items-center max-md:text-start max-md:items-start">
              <Image
                src="/logo-w.svg"
                width={150}
                height={60}
                alt="logo"
                className="mb-6"
                priority
              />
              <h1 className="text-5xl mb-6 max-md:text-3xl">
                Seleção <span className="font-bold italic">exclusiva</span> e{' '}
                <span className="font-bold italic">personalizada</span>
              </h1>
              <p className="mb-9 text-gray-400">
                Somos uma equipe dedicada que entende o valor de cada
                contratação. Nossa missão é encontrar os profissionais que se
                encaixam perfeitamente na cultura e nas demandas da sua empresa.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link
                    href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre Recrutamento e Seleção."
                    target="_blank"
                  >
                    Contrate Conosco
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="/vagas">Vagas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <video
          src="/video.webm"
          loop
          playsInline
          muted
          autoPlay
          preload="none"
          poster="/video-poster.avif"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        ></video>

        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 animate-pulse flex flex-col items-center justify-center opacity-80 text-xs">
          <span>Scroll Down</span>
          <MouseScroll size={32} />
        </div>
        <span className="absolute inset-0 min-h-full object-cover bg-slate900 -z-10 opacity-95"></span>
      </div>
    </section>
  )
}
