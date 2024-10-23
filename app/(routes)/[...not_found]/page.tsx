import Button from '@/app/_components/Button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-9">
      <Image src="/logo.svg" width={200} height={100} alt="logo" />
      <h2 className="text-2xl py-9 font-extrabold text-center">
        Essa pagina não foi encontrada
        <br />
        <span className="block text-9xl py-9">404! :/</span>
      </h2>
      <div className="py-9">
        <Button styleType="1" maxWidth={200} href="/" redirect=''>
          Voltar para o inicio
        </Button>
      </div>
    </div>
  )
}
