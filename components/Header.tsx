'use client'

import Image from 'next/image'
import SocialLinks from './SocialLinks'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TextAlignRight, X } from '@phosphor-icons/react/dist/ssr'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsDropdownOpen(false)
      setIsMobileMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="px-9 sticky left-0 right-0 top-0 z-50 bg-slate-900">
      <div className="flex justify-between items-center py-3">
        <div className="min-w-[144px]">
          <Link href="/">
            <Image src="/logo-w.svg" width={112} height={50} alt="logo" />
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

        <div className="max-md:hidden">
          <SocialLinks />
        </div>

        <button
          className="md:hidden text-white focus:outline-none cursor-pointer"
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
