import { cn } from '../lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Marquee } from './magicui/marquee'

const reviews = [
  {
    img: '/logos/1.avif',
    link: 'https://ferraztelas.com.br/',
  },
  {
    img: '/logos/2.avif',
    link: 'https://www.netafim.com.br/',
  },
  {
    img: '/logos/3.avif',
    link: 'https://www.farb.ind.br/',
  },
  {
    img: '/logos/4.avif',
    link: 'https://www.kaadvs.com.br/',
  },
  {
    img: '/logos/5.avif',
    link: 'https://www.instagram.com/explore/locations/1520189148298933/pare-parking-estacionamento/',
  },
  {
    img: '/logos/6.avif',
    link: 'https://www.instagram.com/mvvet2023?igsh=YWRkenJtdTBvaHl0',
  },
  {
    img: '/logos/7.avif',
    link: 'https://www.weclix.com.br/',
  },
  {
    img: '/logos/8.avif',
    link: 'https://www.instagram.com/gothaidelivery/',
  },
  {
    img: '/logos/9.avif',
    link: 'https://www.ascalculos.com.br/',
  },
  {
    img: '/logos/10.avif',
    link: 'https://grupoorto.com.br/',
  },
  {
    img: '/logos/11.avif',
    link: 'https://www.siltomac.com.br/',
  },
  {
    img: '/logos/12.avif',
    link: 'https://www.fourt.com.br/',
  },
  {
    img: '/logos/13.avif',
    link: 'https://lojaruminar.com.br/',
  },
  {
    img: '/logos/14.avif',
    link: 'https://www.agicargo.com.br/',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, link }: { img: string; link: string }) => {
  return (
    <div
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden py-6 flex items-center justify-center',
      )}
    >
      <Link href={link} target="_blank" className="w-fit">
        <Image src={img} alt="logo" width={200} height={100} />
      </Link>
    </div>
  )
}

export function AnimateMarquee() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden bg-slate400">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate400 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate400 dark:from-background"></div>
    </div>
  )
}
