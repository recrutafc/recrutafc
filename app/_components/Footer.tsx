import Image from 'next/image'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-colors-mainBlue900 px-4">
        <div className="max-w-[1400px] mx-auto flex justify-between py-[100px] max-lg:flex-col max-lg:items-center">
          <div className="max-lg:mb-9">
            <Link href="/" aria-label='Voltar para o início'>
              <Image src="/logo-w.svg" width={267} height={122} alt="logo" />
            </Link>
          </div>

          <div className="max-lg:mb-9">
            <div>
              <h3 className="text-2xl text-colors-mainWhite font-bold uppercase mb-4">
                Atendimento Online
              </h3>
              <p className="text-colors-mainGray200 mb-4">
                (16) 9 9609-3789 <br /> recrutafc@hotmail.com <br /> Segunda à Sexta
                das 8h às 18h <br />
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-colors-mainWhite font-bold uppercase mb-4">
                Siga Recruta F&C
              </h3>
              <SocialLinks />
            </div>
          </div>

          <div className="max-lg:w-full max-lg:max-w-[279px]">
            <div className="flex flex-col text-colors-mainGray200">
              <h3 className="text-2xl text-colors-mainWhite font-bold uppercase mb-4">
                Sobre Recruta F&C
              </h3>
              <Link
                href="/sobre-nos"
                className="hover:text-colors-mainWhite delay-150 ease-in-out mb-2"
              >
                Institucional
              </Link>
              <Link
                href="/vagas"
                className="hover:text-colors-mainWhite delay-150 ease-in-out mb-2"
              >
                Vagas
              </Link>
              <Link
                href="/recrutamento-e-selecao"
                className="hover:text-colors-mainWhite delay-150 ease-in-out mb-2"
              >
                Recrutamento e Seleção
              </Link>
              <Link
                href="/recolocacao-profissional"
                className="hover:text-colors-mainWhite delay-150 ease-in-out mb-2"
              >
                Recolocação e Transição Profissional
              </Link>
              <Link
                href="/contato"
                className="hover:text-colors-mainWhite delay-150 ease-in-out mb-2"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-xs max-w-[1400px] mx-auto max-lg:flex-col max-lg:items-center text-colors-mainGray400 py-1">
          <p>Recruta F&C © 2023 – Todos os direitos reservados</p>
          <p>
            Desenvolvido por
            <a
              href="https://www.instagram.com/forget.performance/"
              target="_blank"
              className="text-colors-mainWhite font-bold ml-1 hover:text-colors-mainGray600 delay-150 ease-in-out"
            >
              Forget Marketing
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
