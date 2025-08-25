import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface CatchProps {
  img: string | StaticImageData
}

export default function Catch({ img }: CatchProps) {
  return (
    <section className="relative px-4">
      <div className="max-w-[1400px] mx-auto pt-[160px] flex justify-center">
        <div className="flex justify-center items-center gap-4">
          <div className="w-[260px] h-[260px] max-lg:hidden"></div>
          <div className="relative max-w-[600px] flex justify-end">
            <Image
              src="/eleve.svg"
              width={384}
              height={549}
              alt="image"
              className="absolute top-1/2 -left-60 -translate-y-1/2 -z-10 max-lg:left-0"
            />
            <Image src={img} width={384} height={549} alt="image" />
            <Image
              src="/eleve-b.svg"
              width={384}
              height={549}
              alt="image"
              className="absolute top-1/2 -left-60 -translate-y-1/2 max-lg:left-0"
            />
          </div>
          <div className="max-w-[260px]">
            <p className="text-slate900 mb-4">
              Comece agora e transforme o processo de recrutamento da sua
              empresa.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/contato">Entrar em contato</Link>
            </Button>
          </div>
        </div>
        <div
          className="absolute bottom-0 -z-20
         rounded-t-full bg-gradient-to-b from-slate400 to-slate50 w-full max-w-[1100px] h-[600px] max-md:hidden"
        ></div>
      </div>
    </section>
  )
}
