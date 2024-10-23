'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useEffect, useState } from 'react'
import client from '../../../lib/contentful'
import SocialLinks from '@/app/_components/SocialLinks'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Bag, Buildings, MapPin } from '@phosphor-icons/react/dist/ssr'

export default function VagaDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const [vaga, setVaga] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntry(params.id)
        setVaga(response)
      } catch (error) {
        console.error('Erro ao carregar vaga:', error)
      }
    }

    fetchData()
  }, [params.id])

  return (
    <main className="px-4 text-colors-mainBlue900 bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat">
      <div className="flex py-9 gap-4 justify-between max-w-[1400px] mx-auto max-sm:flex-col">
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
            Você está <br/> pronto para <br /> dar o
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

        <div>
          <Link
            href="/vagas"
            className="flex items-center w-fit hover:text-colors-mainGray600 delay-150 ease-in-out mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Voltar
          </Link>

          <div>
            {!vaga ? (
              <p className="min-w-full">Carregando...</p>
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
                <p className="mb-6">{vaga.fields.description}</p>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-6">Requisitos</h2>
                  {documentToReactComponents(vaga.fields.reqText)}
                </div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-6">Remuneração</h2>
                  {documentToReactComponents(vaga.fields.remText)}
                </div>
                <div className="bg-colors-mainGray600 flex justify-center flex-col items-center p-4 rounded-lg mb-6 text-colors-mainWhite shadow-md">
                  <p>
                    Envie o currículo para:{' '}
                    <span className="font-extrabold text-colors-mainBlue900">
                      recrutafc@hotmail.com
                    </span>
                  </p>
                  <p>
                    Assunto:{' '}
                    <span className="font-extrabold text-colors-mainBlue900">
                      VAGA: [#{vaga.fields.id}] {vaga.fields.title}
                    </span>
                  </p>
                </div>
                <span className="flex border-t-[1px] border-colors-mainGray400 pt-2 text-xs">
                  Publicada em:{' '}
                  {vaga.sys.createdAt
                    ? new Date(vaga.sys.createdAt).toLocaleDateString()
                    : ''}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
