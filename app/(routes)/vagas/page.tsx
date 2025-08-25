'use client'

import { useEffect, useState } from 'react'
import { Bag, Buildings, MapPin } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import client from '@/lib/contentful'
import Flyer from '@/components/Flyer'

const ITEMS_PER_PAGE = 12

export default function Vagas() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <main className="px-4">
      <div className="max-w-[1400px] mx-auto text-slate900 flex py-9 gap-4 justify-between max-xl:flex-col">
        <Flyer />

        <div className="w-full flex flex-col justify-between">
          <div className="mb-4">
            {vagas.length === 0 ? (
              <div className="flex justify-center items-center min-h-[595px] text-center p-4 rounded-lg border border-dashed border-gray-400 text-gray-400">
                <div>
                  <h3 className=" font-bold">
                    Nenhuma vaga disponível no momento
                  </h3>
                  <p>Continue acompanhando para novas oportunidades.</p>
                </div>
              </div>
            ) : (
              <ul className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-1 h-full">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {vagas.map((vaga: any) => (
                  <li key={vaga.sys.id}>
                    <Link
                      className="flex flex-col justify-between min-h-full shadow p-4 hover:brightness-110 delay-150 ease-in-out rounded-lg bg-gradient-to-t from-slate400 to-slate50"
                      href={`/vagas/${vaga.sys.id}`}
                    >
                      <h3 className="font-bold mb-2">
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
                        </div>
                        <div>
                          {vaga.fields.workModel !== undefined ? (
                            <span className="flex items-center text-xs mb-2">
                              <Buildings size={16} className="mr-2" />
                              {vaga.fields.model ? 'Híbrido' : 'Remoto'}
                            </span>
                          ) : (
                            <span className="flex items-center text-xs mb-2">
                              <Buildings size={16} className="mr-2" />
                              Presencial
                            </span>
                          )}

                          <span className="flex border-t-[1px] border-gray-400 pt-2 text-xs">
                            Publicada em:{' '}
                            {vaga.sys.createdAt
                              ? new Date(
                                  vaga.sys.createdAt,
                                ).toLocaleDateString()
                              : ''}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center justify-center text-xs">
            <button
              className="mr-4 disabled:text-gray-400 cursor-pointer"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className="w-[150px] flex justify-center">{` Página ${currentPage} de ${totalPages} `}</span>
            <button
              className="ml-4 disabled:text-gray-400 cursor-pointer"
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
