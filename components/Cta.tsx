'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Cta() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false)

      // troca o texto no meio da animação
      setTimeout(() => {
        setIndex((prev) => (prev === 0 ? 1 : 0))
        setVisible(true) // fade in
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate900 px-4 bg-[url('/cta-bg.avif')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[1400px] mx-auto py-9 flex justify-center">
        <div>
          <h1
            className={`mb-9 text-4xl max-md:text-2xl text-center transition-opacity duration-500 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {index === 0 && (
              <>
                Conectamos o{' '}
                <span className="italic font-extrabold">talento certo</span> ao{' '}
                <span className="italic font-extrabold">desafio certo</span>
              </>
            )}

            {index === 1 && (
              <span className="italic font-extrabold">
                ELEVE SUAS CONTRATAÇÕES
              </span>
            )}
          </h1>

          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href="https://wa.link/xnrpdi" target="_blank">
                Saiba mais
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
