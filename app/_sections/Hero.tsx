import Image from 'next/image'
import Button from '../_components/Button'

export default function Hero() {
  return (
    <section className="bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat px-4">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between items-center py-[100px]">
        <Image
          src="/logo.svg"
          alt="Logotipo"
          width={150}
          height={51}
          className="mb-4"
        />
        <h1 className="text-3xl text-center font-extrabold text-colors-mainBlue900 mb-4 max-lg:text-2xl uppercase">
          Seleção Exclusiva e Personalizada
        </h1>
        <p className="text-center text-xl text-colors-mainGray400 mb-9 max-lg:text-base">
          Somos uma equipe dedicada que entende o valor de cada contratação.
          Nossa missão é <br />
          encontrar os profissionais que se encaixam perfeitamente na cultura e
          nas demandas da <br />
          sua empresa.
        </p>
        <div className="min-w-[366px] flex gap-9 mb-9">
          <Button href="/recrutamento-e-selecao" styleType="1" maxWidth={200} redirect=''>
            Contrate Conosco
          </Button>
          <Button href="/vagas" styleType="2" maxWidth={130} redirect=''>
            Vagas
          </Button>
        </div>
        {/* <div className="flex">
          <div className="flex relative min-w-[90px] min-h-[40px]">
            <Image
              src="/profile/1.webp"
              alt="Logotipo"
              width={50}
              height={50}
              className="rounded-full border-2 border-colors-mainWhite absolute"
            />
            <Image
              src="/profile/2.webp"
              alt="Logotipo"
              width={50}
              height={50}
              className="rounded-full border-2 border-colors-mainWhite absolute left-6"
            />
            <Image
              src="/profile/3.webp"
              alt="Logotipo"
              width={50}
              height={50}
              className="rounded-full border-2 border-colors-mainWhite absolute left-11"
            />
          </div>
          <p className="text-colors-mainGray400 ml-4 font-medium">
            Mais de 500+ clientes <br /> satisfeitos
          </p>
        </div> */}
        
      </div>
    </section>
  )
}
