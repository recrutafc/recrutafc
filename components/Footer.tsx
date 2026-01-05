import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from './SocialLinks'
import Call from './Call'

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 px-4">
        <div className="max-w-[1400px] mx-auto py-[100px] flex justify-between max-2xl:flex-col max-2xl:gap-9 max-sm:items-center">
          <Link
            href="/"
            aria-label="Voltar para o início"
            className="w-fit h-fit"
          >
            <Image src="/logo-w.svg" width={267} height={122} alt="logo" />
          </Link>

          <div className="grid grid-cols-3 gap-9 w-full max-w-[1000px] max-2xl:min-w-full max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="max-lg:mb-9">
              <div>
                <h3 className="text-2xl text-slate500 font-bold uppercase mb-4">
                  Atendimento Online
                </h3>

                <Call />
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-slate500 font-bold uppercase mb-4">
                Siga Recruta F&C
              </h3>
              <SocialLinks />
            </div>

            <div className="max-lg:w-full max-lg:max-w-[279px]">
              <div className="flex flex-col text-colors-mainGray200">
                <h3 className="text-2xl text-slate500 font-bold uppercase mb-4">
                  Sobre Recruta F&C
                </h3>
                <Link
                  href="/sobre-nos"
                  className="hover:text-slate500 delay-150 ease-in-out mb-2 transition-colors"
                >
                  Institucional
                </Link>
                <Link
                  href="/vagas"
                  className="hover:text-slate500 delay-150 ease-in-out mb-2 transition-colors"
                >
                  Vagas
                </Link>
                <Link
                  href="/recrutamento-e-selecao"
                  className="hover:text-slate500 delay-150 ease-in-out mb-2 transition-colors"
                >
                  Recrutamento e Seleção
                </Link>
                <Link
                  href="/recolocacao-profissional"
                  className="hover:text-slate500 delay-150 ease-in-out mb-2 transition-colors"
                >
                  Transição Profissional
                </Link>
                <Link
                  href="/contato"
                  className="hover:text-slate500 delay-150 ease-in-out mb-2 transition-colors"
                >
                  Fale conosco
                </Link>
                <Link
                  href="/contato"
                  className="hover:text-slate500 delay-150 ease-in-out mb-2 transition-colors"
                >
                  Faq
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs max-w-[1400px] mx-auto max-lg:flex-col max-lg:items-center text-gray-400 py-1">
          <p>Recruta F&C © 2025 – Todos os direitos reservados</p>
          <p>
            Desenvolvido por
            <a
              href="https://www.e2m.dev/"
              target="_blank"
              className="text-colors-mainWhite font-bold ml-1 hover:text-slate50 delay-150 ease-in-out"
            >
              e2m.dev
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
