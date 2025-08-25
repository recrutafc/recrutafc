'use client'

import Image from 'next/image'
import SocialLinks from './SocialLinks'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { TextAlignRight, X } from '@phosphor-icons/react/dist/ssr'
import { usePathname } from 'next/navigation'

export default function HeaderHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)

  const pathname = usePathname()
  const isHome = pathname === '/'
  const footerRef = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const updateScrollState = () => {
    if (isHome) {
      setIsScrolled(window.scrollY > 50)
    } else {
      setIsScrolled(true)
      setHideHeader(false)
    }
  }

  const handleScroll = () => {
    setIsDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    updateScrollState()

    setIsDropdownOpen(false)
    setIsMobileMenuOpen(false)

    if (isHome) {
      footerRef.current = document.querySelector('footer')
      if (footerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setHideHeader(entry.isIntersecting)
            })
          },
          { threshold: 0.5 },
        )
        observerRef.current.observe(footerRef.current)
      }
    } else {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
      setHideHeader(false)
    }

    window.addEventListener('scroll', updateScrollState)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('scroll', handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <header
      className={`px-9 fixed left-0 right-0 top-0 z-50
        ${isHome && hideHeader ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        ${isScrolled || isMobileMenuOpen ? 'bg-slate-900 shadow' : 'bg-transparent'}
      `}
    >
      <div className="flex justify-between items-center py-3">
        <div className="min-w-[144px]">
          <Link href="/">
            <Image
              src="/logo-w.svg"
              width={112}
              height={50}
              alt="logo"
              className={`${isScrolled ? 'max-md:block' : 'max-md:hidden'}`}
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-9 items-center">
          <Link
            href="/sobre-nos"
            className="hover:text-slate500 delay-150 ease-in-out transition-colors"
          >
            Sobre nós
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`hover:text-slate500 delay-150 ease-in-out cursor-pointer transition-colors ${
                isDropdownOpen ? 'text-slate500' : ''
              }`}
            >
              Serviços
            </button>

            {isDropdownOpen && (
              <ul className="absolute -right-40 p-3 gap-4 mt-2 w-96 bg-slate-800 text-colors-mainBlue900 shadow rounded-md">
                <li>
                  <Link
                    href="/recrutamento-e-selecao"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-4 hover:bg-slate-700 hover:text-white cursor-pointer rounded-md transition-colors"
                  >
                    Recrutamento e Seleção
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recolocacao-profissional"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-4 hover:bg-slate-700 hover:text-white cursor-pointer rounded-md transition-colors"
                  >
                    Recolocação e Transição Profissional
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/vagas"
            className="hover:text-slate500 delay-150 ease-in-out transition-colors"
          >
            Vagas
          </Link>
          <Link
            href="/contato"
            className="hover:text-slate500 delay-150 ease-in-out transition-colors"
          >
            Contato
          </Link>
        </nav>

        <div className={`${isScrolled ? '' : 'max-md:hidden'} max-md:hidden`}>
          <SocialLinks />
        </div>

        <button
          className={`md:hidden text-white focus:outline-none cursor-pointer ${
            isScrolled ? 'max-md:ml-0' : 'max-md:ml-auto'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Botão Menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <TextAlignRight size={32} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="absolute top-full gap-4 p-3 left-0 w-full bg-slate-900 text-white shadow-md flex flex-col md:hidden">
          <Link
            href="/sobre-nos"
            className="px-4 py-4 hover:bg-slate-700 delay-150 ease-in-out rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre nós
          </Link>
          <Link
            href="/recrutamento-e-selecao"
            className="px-4 py-4 hover:bg-slate-700 delay-150 ease-in-out rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Recrutamento e Seleção
          </Link>
          <Link
            href="/recolocacao-profissional"
            className="px-4 py-4 hover:bg-slate-700 delay-150 ease-in-out rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Recolocação e Transição Profissional
          </Link>
          <Link
            href="/vagas"
            className="px-4 py-4 hover:bg-slate-700 delay-150 ease-in-out rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Vagas
          </Link>
          <Link
            href="/contato"
            className="px-4 py-4 hover:bg-slate-700 delay-150 ease-in-out rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </Link>
          <div className="py-4 mx-auto">
            <SocialLinks />
          </div>
        </nav>
      )}
    </header>
  )
}
