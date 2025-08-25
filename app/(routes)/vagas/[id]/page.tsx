'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useEffect, useState } from 'react'
import {
  Bag,
  Buildings,
  Check,
  Copy,
  MapPin,
} from '@phosphor-icons/react/dist/ssr'
import client from '@/lib/contentful'
import Flyer from '@/components/Flyer'
import { useParams } from 'next/navigation'

export default function VagaDetailsPage() {
  const { id } = useParams() as { id: string }
  const [copied, setCopied] = useState<string | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vaga, setVaga] = useState<any>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntry(id)
        setVaga(response)
      } catch (error) {
        console.error('Erro ao carregar vaga:', error)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id])

  return (
    <main className="px-4 text-slate900 py-9">
      <div className="flex gap-4 justify-between max-w-[1400px] mx-auto max-xl:flex-col">
        <Flyer />
        <div className="w-full">
          {!vaga ? (
            <div className="flex justify-center items-center min-h-[560px] text-center p-4 rounded-lg border border-dashed border-gray-400 text-gray-400">
              <div>
                <p>
                  Carregando <span className="animate-ping">...</span>
                </p>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-2">
                [#{vaga.fields.id}] {vaga.fields.title}
              </h1>
              <div className="flex gap-4 mb-2 flex-wrap">
                <span className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>{vaga.fields.local}</span>
                </span>
                {vaga.fields.model !== undefined ? (
                  <span className="flex items-center">
                    <Bag size={16} className="mr-2" />
                    {vaga.fields.model ? 'Efetivo' : 'Temporário'}
                  </span>
                ) : null}
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
              <p className="mb-6">{vaga.fields.description}</p>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-6">Requisitos</h2>
                {documentToReactComponents(vaga.fields.reqText)}
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-6">Remuneração</h2>
                {documentToReactComponents(vaga.fields.remText)}
              </div>
              <div className="bg-slate500 flex justify-center gap-4 items-center p-4 rounded-lg mb-6 text-slate400 shadow max-[870px]:flex-col max-[870px]:w-fit max-2xl:items-start">
                <div className="flex gap-4 items-center">
                  <span className="text-slate900">Envie o currículo para:</span>

                  <div
                    className="flex gap-4 items-center justify-between bg-slate-800 p-3 rounded-md cursor-pointer hover:bg-slate-700 transition"
                    onClick={() => handleCopy('recrutafc@hotmail.com', 'email')}
                  >
                    <span>recrutafc@hotmail.com</span>
                    {copied === 'email' ? (
                      <Check size={20} className="text-green-400" />
                    ) : (
                      <Copy size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-slate900">Assunto:</span>
                  <div
                    className="flex gap-4 items-center justify-between bg-slate-800 p-3 rounded-md cursor-pointer hover:bg-slate-700 transition"
                    onClick={() =>
                      handleCopy(
                        `VAGA: [#${vaga.fields.id}] ${vaga.fields.title}`,
                        'vaga',
                      )
                    }
                  >
                    <span>
                      VAGA: [#{vaga.fields.id}] {vaga.fields.title}
                    </span>
                    {copied === 'vaga' ? (
                      <Check size={20} className="text-green-400" />
                    ) : (
                      <Copy size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              <span className="flex border-t-[1px] border-gray-400 pt-2 text-xs">
                Publicada em:{' '}
                {vaga.sys.createdAt
                  ? new Date(vaga.sys.createdAt).toLocaleDateString()
                  : ''}
              </span>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
