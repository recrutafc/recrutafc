import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-9">
      <Image src="/logo-w.svg" width={200} height={100} alt="logo" />
      <h2 className="text-2xl py-9 font-extrabold text-center">
        Essa pagina não foi encontrada
        <br />
        <span className="block text-9xl py-9">404! :d</span>
      </h2>
      <div className="py-9">
        <Button asChild>
          <Link href="/">Voltar para o inicio</Link>
        </Button>
      </div>
    </div>
  )
}
