'use client'

import { useEffect, useState } from 'react'
import client from '../../lib/contentful'
import { ArrowLeft, Bag, Buildings, MapPin } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from '@/app/_components/SocialLinks'

const ITEMS_PER_PAGE = 12

export default function Vagas() {
  const [vagas, setVagas] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalVagas, setTotalVagas] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getEntries({
        content_type: 'vagas',
        limit: ITEMS_PER_PAGE,
        skip: (currentPage - 1) * ITEMS_PER_PAGE,
      })

      setVagas(response.items)
      setTotalVagas(response.total)
      setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE))
    }

    fetchData()
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <main className="px-4 bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat">
      <div className="max-w-[1400px] mx-auto text-colors-mainBlue900 flex py-9 gap-4 justify-between max-sm:flex-col">
        <div className="max-w-[400px] max-h-[700px] bg-colors-mainBlue900 rounded-lg shadow-md relative p-[60px] max-sm:min-w-full">
          <Image
            src="/assets/rectangle2.svg"
            alt="asset"
            width={60}
            height={60}
            className="absolute top-4 left-4"
          />
          <Image
            src="/assets/rectangle2.svg"
            alt="asset"
            width={60}
            height={60}
            className="absolute bottom-4 right-4"
          />
          <h3 className="text-colors-mainWhite text-3xl font-bold py-4">
            Você está<br /> pronto para <br /> dar o
            <span className="text-colors-mainGray600"> próximo passo</span> na
            sua carreira?
          </h3>
          <p className="text-colors-mainGray400 mb-4">
            Conecte-se a novas oportunidades e dê um impulso à sua carreira com
            as vagas que preparamos para você!
          </p>

          <div>
            <h3 className="text-xl text-colors-mainWhite font-bold uppercase mb-4">
              Siga Recruta F&C
            </h3>
            <SocialLinks />
          </div>
        </div>

        <div className="flex flex-col justify-between w-full">
          <div>
            <Link
              href="/"
              className="flex items-center w-fit hover:text-colors-mainGray600 delay-150 ease-in-out mb-4"
            >
              <ArrowLeft size={16} className="mr-1" />
              Voltar
            </Link>

            {vagas.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <h2 className="text-xl font-bold">
                  Nenhuma vaga disponível no momento
                </h2>
                <p className="text-colors-mainGray400 mt-2">
                  Continue acompanhando para novas oportunidades.
                </p>
              </div>
            ) : (
              <ul className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-1 mb-4 h-full">
                {vagas.map((vaga: any) => (
                  <li key={vaga.sys.id}>
                    <Link
                      className="flex flex-col min-h-[133px] justify-between p-4 hover:brightness-110 delay-150 ease-in-out rounded-lg bg-gradient-to-b hover:shadow-md from-colors-mainWhite to-colors-mainGray200 shadow-md"
                      href={`/vagas/${vaga.sys.id}`}
                    >
                      <h3 className="font-bold">
                        [#{vaga.fields.id}] {vaga.fields.title}
                      </h3>

                      <div>
                        <div className="flex gap-4 text-xs mb-2 flex-wrap">
                          <span className="flex items-center text-xs">
                            <MapPin size={16} className="mr-2" />
                            <span>{vaga.fields.local}</span>
                          </span>
                          {vaga.fields.model !== undefined ? (
                            <span className="flex items-center">
                              <Bag size={16} className="mr-2" />
                              {vaga.fields.model ? 'Efetivo' : 'Temporário'}
                            </span>
                          ) : (
                            ''
                          )}
                          {vaga.fields.workModel !== undefined ? (
                            <span className="flex items-center">
                              <Buildings size={16} className="mr-2" />
                              {vaga.fields.model ? 'Híbrido' : 'Remoto'}
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Buildings size={16} className="mr-2" />
                              Presencial
                            </span>
                          )}
                        </div>
                        <span className="flex border-t-[1px] border-colors-mainGray400 pt-2 text-xs">
                          Publicada em:{' '}
                          {vaga.sys.createdAt
                            ? new Date(vaga.sys.createdAt).toLocaleDateString()
                            : ''}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              className="mr-4 disabled:text-colors-mainGray600"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className="w-[150px] flex justify-center">{` Página ${currentPage} de ${totalPages} `}</span>
            <button
              className="ml-4 disabled:text-colors-mainGray600"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
