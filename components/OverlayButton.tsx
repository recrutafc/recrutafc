'use client'

import { useEffect, useState } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function OverlayButton() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollY + windowHeight >= documentHeight - 200) {
        setIsAtBottom(true)
      } else {
        setIsAtBottom(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isAtBottom) return null

  return (
    <div className="fixed bottom-4 right-4 z-10 flex flex-col gap-4 max-sm:hidden">
      <Link
        target="_blank"
        href={`https://wa.link/xnrpdi`}
        className="flex items-center text-blue-50 gap-2"
      >
        <p className="bg-gradient-to-b from-green-500 to-green-600 text-blue-50 p-3 rounded-lg font-bold text-xs border shadow">
          Estamos online!
        </p>
        <div className="relative rounded-full flex justify-center p-1 border-2 border-blue-50 bg-gradient-to-b from-green-500 to-green-600 shadow">
          <div className="absolute h-[36px] w-9 rounded-full bg-green-500 animate-ping"></div>
          <WhatsappLogo size={36} />
        </div>
      </Link>
    </div>
  )
}
