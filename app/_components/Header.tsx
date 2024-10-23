'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-colors-mainBlue900 text-colors-mainWhite py-2 px-4 shadow-md sticky top-0 z-10">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-w.svg" alt="logotipo" width={94} height={43} />
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Botão Menu'
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav className="hidden md:flex gap-9 items-center">
          <Link href="/sobre-nos" className="hover:text-colors-mainGray600 delay-150 ease-in-out">Sobre nós</Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`hover:text-colors-mainGray600 delay-150 ease-in-out ${isDropdownOpen ? 'text-colors-mainGray600' : '' }`}
            >
              Serviços
            </button>

            {isDropdownOpen && (
              <ul className="absolute -right-40 p-1 mt-2 w-80 bg-colors-mainWhite text-colors-mainBlue900 shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-colors-mainGray600 hover:text-white cursor-pointer rounded-md">
                  <Link href="/recrutamento-e-selecao" onClick={() => setIsDropdownOpen(false)}>Recrutamento e Seleção</Link>
                </li>
                <li className="px-4 py-2 hover:bg-colors-mainGray600 hover:text-white cursor-pointer rounded-md">
                  <Link href="/recolocacao-profissional" onClick={() => setIsDropdownOpen(false)}>Recolocação e Transição Profissional</Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/vagas" className="hover:text-colors-mainGray600 delay-150 ease-in-out">Vagas</Link>
          <Link href="/contato" className="hover:text-colors-mainGray600 delay-150 ease-in-out">Contato</Link>
        </nav>

        {isMobileMenuOpen && (
          <nav className="absolute top-full gap-4 p-4 left-0 w-full bg-colors-mainBlue900 text-white shadow-md flex flex-col md:hidden">
            <Link href="/sobre-nos" className="px-4 py-2 hover:bg-colors-mainGray600 delay-150 ease-in-out rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Sobre nós</Link>    
            <Link href="/recrutamento-e-selecao" className="px-4 py-2 hover:bg-colors-mainGray600 delay-150 ease-in-out rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Recrutamento e Seleção</Link>
            <Link href="/recolocacao-profissional" className="px-4 py-2 hover:bg-colors-mainGray600 delay-150 ease-in-out rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Recolocação e Transição Profissional</Link>
            <Link href="/vagas" className="px-4 py-2 hover:bg-colors-mainGray600 delay-150 ease-in-out rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Vagas</Link>
            <Link href="/contato" className="px-4 py-2 hover:bg-colors-mainGray600 delay-150 ease-in-out rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
          </nav>
        )}
      </div>
    </header>
  );
}


