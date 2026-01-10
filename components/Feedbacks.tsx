'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  CaretLeftIcon,
  CaretRightIcon,
  StarIcon,
} from '@phosphor-icons/react/dist/ssr'

type Testimonial = {
  id: number
  name: string
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Najara M.',
    text: 'Fui recrutada e entrevistada pelo Igor. Que conduziu toda entrevista de forma ética, muita honestidade e clareza nas informações sobre a vaga, o processo, uma escuta qualificada, atenção do incio ao fim do processo seletivo. Parabéns a empresa Recruta por ter essa postura humanizada sem perder a técnica. ❤️😇 …',
    avatar: '/avatars/1.png',
  },
  {
    id: 2,
    name: 'Matheus P.',
    text: 'Rapidez em indicar pra empresa que foi selecionado pela RECRUTA, transparência e facilidade de diálogos entre candidato e responsável(Igor). Agradeço imensamente a ponte que fizeram para empresa que fui direcionado a candidato.',
    avatar: '/avatars/2.png',
  },
  {
    id: 3,
    name: 'Patricia L.',
    text: 'Experiência bem leve e positiva, feedback rápido, muito obrigada por ajudarem na minha recolocação profissional!',
    avatar: '/avatars/3.png',
  },
  {
    id: 4,
    name: 'Jessica F.',
    text: 'Excelente empresa de recrutamento. Pessoal muito qualificado e comprometido. Participei de uma seleção e fui muito bem atendida desde o início pelo Sr. Igor.',
    avatar: '/avatars/4.png',
  },
  {
    id: 5,
    name: 'Fabio O.',
    text: 'Participei como recrutado, e posso dizer que o método aplicado é realmente eficaz, e o tempo de retorno também foi bem rápido.',
    avatar: '/avatars/5.png',
  },
  {
    id: 6,
    name: 'Maria F.',
    text: 'Empresa extremamente competente e profissional na área de RH e recrutamento. Atendimento de qualidade e comprometimento em cada etapa. Recomendo com confiança!',
    avatar: '/avatars/6.png',
  },
  {
    id: 7,
    name: 'Laisla R.',
    text: 'Participei de um processo seletivo com a empresa e foi muito leve, tranquilo. Desde o começo o recrutador Igor foi super atencioso e simpático! E a vaga deu certo!! <3',
    avatar: '/avatars/7.png',
  },
  {
    id: 8,
    name: 'Thiciano S.',
    text: 'Gratidão a equipe Recruta F&C ! Em especial ao Gustavo que me encaminhou a uma excelente empresa! Sucesso a todos!',
    avatar: '/avatars/8.png',
  },
  {
    id: 9,
    name: 'Vanessa P.',
    text: 'Tive um contato para um processo seletivo, e desde o primeiro instante ate a finalização do atendimento foram super atenciosos e muito amigável. Me senti bem a vontade com a entrevista e todo o processo seletivo foi excelente. O Ígor é bem atencioso e muito simpático. Super indico a agencia tanto para recrutadores quanto para quem esta em busca de uma oportunidade de emprego. 🤩💪🏼🍀🙏🏽❤️',
    avatar: '/avatars/9.png',
  },
  {
    id: 10,
    name: 'Julia P.',
    text: 'Experiência ótima, consultor super atencioso e educado.',
    avatar: '/avatars/10.png',
  },
  {
    id: 11,
    name: 'Elias C.',
    text: 'Excelente atendimento, acompanhamento e assertividade com relação à empresa, candidato e vaga.',
    avatar: '/avatars/11.png',
  },
  {
    id: 12,
    name: 'Sidney F.',
    text: 'A Recruta é uma empresa incrível, com uma equipe extremamente profissional e dedicada. Eles realmente entendem as necessidades do cliente e entregam soluções personalizadas que fazem a diferença.Recomendo de olhos fechados !',
    avatar: '/avatars/11.png',
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

export default function Feedbacks() {
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [shuffledTestimonials, setShuffledTestimonials] = useState<
    Testimonial[]
  >([])

  useEffect(() => {
    setShuffledTestimonials(shuffleArray(testimonials))
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
        setPage(0)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
        setPage(0)
      } else {
        setItemsPerPage(4)
        setPage(0)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(shuffledTestimonials.length / itemsPerPage)

  const start = page * itemsPerPage
  const currentItems = shuffledTestimonials.slice(start, start + itemsPerPage)

  return (
    <div className="w-full bg-gradient-to-b from-slate400 to-white">
      <div className="max-w-[1400px] mx-auto py-[80px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <div key={item.id}>
              <div className="flex justify-center mb-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={36}
                  height={36}
                  className="rounded-full border border-slate900"
                />
              </div>

              <div className="border-2 border-slate900 rounded-xl p-6 flex flex-col justify-between shadow-sm h-[272px]">
                <div className="mb-4 flex justify-between items-center">
                  <div className="flex gap-1">
                    <span className="block w-2 h-2 rounded-full bg-slate900" />
                    <span className="block w-2 h-2 rounded-full bg-slate900" />
                    <span className="block w-2 h-2 rounded-full bg-slate900" />
                  </div>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={16}
                        weight="fill"
                        className="text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  {item.text}
                </p>

                <span className="font-semibold text-slate900 text-center uppercase underline">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center sm:justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="bg-slate900 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-40 transition cursor-pointer"
          >
            <CaretLeftIcon size={24} />
          </button>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="bg-slate900 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium disabled:opacity-40 transition cursor-pointer"
          >
            <CaretRightIcon size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
