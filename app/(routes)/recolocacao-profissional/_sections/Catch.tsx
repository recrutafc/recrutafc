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
              src="/recolocacao/t1.svg"
              width={384}
              height={549}
              alt="image"
              className="absolute top-1/2 -left-60 -translate-y-1/2 -z-10 max-lg:left-0"
            />
            <Image src={img} width={384} height={549} alt="image" />
            <Image
              src="/recolocacao/t2.svg"
              width={384}
              height={549}
              alt="image"
              className="absolute top-1/2 -left-60 -translate-y-1/2 max-lg:left-0"
            />
          </div>
          <div className="max-w-[340px]">
            <p className="text-slate900 mb-4">
              Redefina sua carreira, descubra novas oportunidades e conquiste
              seu espaço no mercado.
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
