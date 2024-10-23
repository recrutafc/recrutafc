'use client'

import AccordionItem from "@/app/_components/AccordionItem";
import Button from "@/app/_components/Button";
import Form from "@/app/_components/Form";
import ServiceTitle from "@/app/_components/ServiceTitle";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AccordionData {
  title: string
  description: string
  id:number
}

interface AccordionData2 {
  title: string
  description: string
  id:number
}


export default function SelectionPage () {
  const [open, setOpen] = useState<number | false>(false)

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(false)
    } else {
      setOpen(index)
    }
  }

  const accordionData: AccordionData[] = [
    {
      id:1,
      title: 'Alinhamento do Perfil da Vaga e Desenho do Cargo',
      description: 'Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades de recrutamento e elaborar um perfil de vaga detalhado e preciso.',
    },
    {
      id:2,
      title: 'Divulgação da Vaga e Atração de Candidatos',
      description: 'Utilizamos uma variedade de canais e estratégias de marketing para garantir uma ampla divulgação da vaga e atrair candidatos qualificados.',
    },
    {
      id:3,
      title: 'Triagem de Currículos',
      description: 'Realizamos uma triagem minuciosa dos currículos recebidos, selecionando os candidatos que melhor se adequam aos requisitos da vaga.',
    },
    {
      id:4,
      title: 'Entrevista Individual',
      description: 'Conduzimos entrevistas individuais detalhadas para avaliar as habilidades, experiências e adequação cultural dos candidatos.',
    },
  ]

  const accordionData2: AccordionData2[] = [
    {
      id:5,
      title: 'Emissão de Parecer Estruturado da Entrevista',
      description: 'Após cada entrevista, elaboramos um parecer estruturado detalhado, destacando os pontos fortes e áreas de desenvolvimento dos candidatos.',
    },
    {
      id:6,
      title: 'Envio do CV e Parecer da Entrevista ao Cliente',
      description: 'Enviamos ao cliente os currículos dos candidatos selecionados, juntamente com os pareceres estruturados das entrevistas, para sua avaliação.',
    },
    {
      id:7,
      title: 'Agendamento para Entrevista com o Cliente',
      description: 'Gerenciamos o agendamento e encaminhamento dos candidatos aprovados para entrevistas com o cliente.',
    },
    {
      id:8,
      title: 'Feedback para os Candidatos',
      description: 'Fornecemos feedback construtivo e personalizado para todos os candidatos, garantindo uma experiência transparente e respeitosa.',
    },
  ]

  return (<>
    <main className="px-4">
      <div className="max-w-[1400px] mx-auto text-colors-mainBlue900 flex flex-col py-6">
          <Link
            href="/"
            className="flex items-center w-fit hover:text-colors-mainGray600 delay-150 ease-in-out"
          >
            <ArrowLeft size={16} className="mr-1" />
            Voltar
          </Link>
          <div className="bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat pt-[74px] pb-[100px] flex items-center justify-between">
            <div className="max-w-[700px]">
              <span className="flex flex-col items-start">
                <ServiceTitle>Bem Vindo (a)</ServiceTitle> 
              </span>
              <h1 className="text-5xl font-extrabold mb-4 max-lg:text-3xl text-colors-mainBlue900">
                Recrutamento e Seleção
              </h1>
              <p className="text-xl text-colors-mainGray400 mb-9 max-lg:text-base">
                Eleve o nível do seu recrutamento! Entre em contato com a Recruta F&C e encontre os melhores talentos para sua empresa.
              </p>

              <div className="flex pb-9">
                <div className="flex relative min-w-[90px] min-h-[40px]">
                  <Image
                    src="/profile/1.webp"
                    alt="Logotipo"
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-colors-mainWhite absolute"
                  />
                  <Image
                    src="/profile/2.webp"
                    alt="Logotipo"
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-colors-mainWhite absolute left-6"
                  />
                  <Image
                    src="/profile/3.webp"
                    alt="Logotipo"
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-colors-mainWhite absolute left-11"
                  />
                </div>
                <p className="text-colors-mainGray400 ml-4 font-medium">
                  Mais de 500+ clientes <br /> satisfeitos
                </p>
              </div>

              <div className="min-w-[366px] flex gap-9 mb-9">
                <Button href="#form" styleType="1" maxWidth={200} redirect="">
                  Formulário
                </Button>
                <Button href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre Recrutamento e Seleção." redirect="1" styleType="2" maxWidth={130} aria-label='Botão ir para WhatsApp'>
                  <WhatsappLogo size={30} />
                </Button>
              </div>
            </div>

            <div className="p-[50px]">
              <div className="relative">
                <Image src='/images/1.webp' alt="Image" width={610} height={400} />
                <Image
                  src="/assets/circle.svg"
                  alt="Image"
                  width={100}
                  height={100}
                  className="absolute -top-[50px] -left-[50px]"
                />
                <Image
                  src="/assets/rectangle.svg"
                  alt="Image"
                  width={100}
                  height={100}
                  className="absolute -bottom-[50px] -right-[50px]"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-center mb-6 max-lg:text-3xl text-colors-mainBlue900">Como Funciona Nosso Processo De Recrutamento?</h2>
            <p className="text-xl text-colors-mainGray400 mb-9 max-lg:text-base text-center">
              Na Recruta F&C, cada serviço é cuidadosamente projetado para atender às
               necessidades exclusivas da sua empresa. Desde a análise minuciosa dos candidatos até
                a compreensão profunda da cultura organizacional, garantimos um processo de recrutamento alinhado aos seus objetivos. Esse foco em excelência e atenção aos detalhes posiciona a Recruta F&C como uma parceira estratégica no setor de recursos humanos, 
              fornecendo resultados que fazem a diferença para o seu negócio.
            </p>
          </div>

          <div className="flex gap-2 min-h-[380px] max-lg:flex-col max-lg:mb-9">
            <div className="flex flex-col gap-2 w-full">
              {accordionData.map((data) => (
                <AccordionItem
                  key={data.id}
                  open={data.id === open}
                  title={data.title}
                  description={data.description}
                  id={data.id}
                  toggle={() => toggle(data.id)}
                />
              ))}
            </div>
            
            <div className="flex flex-col gap-2 w-full">
              {accordionData2.map((data) => (
                <AccordionItem
                  key={data.id}
                  open={data.id === open}
                  title={data.title}
                  description={data.description}
                  id={data.id}
                  toggle={() => toggle(data.id)}
                />
              ))}
            </div>
          </div>

          <div id="form" className="bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat py-[76px] ">
            <div className="mb-9">
              <span className="flex flex-col items-start">
                <ServiceTitle>Contato</ServiceTitle>
              </span>
              <div className="flex justify-between max-lg:flex-col">
                <h3 className="text-4xl font-extrabold mb-6 max-lg:text-3xl max-w-[500px] text-colors-mainBlue900">
                  Garanta para sua empresa o melhor processo de recrutamento!
                </h3>
                <p className="max-w-[693px] max-lg:min-w-full mt-4 text-xl text-colors-mainGray400 mb-9 max-lg:text-base">
                  <span className="block mb-9 min-h-[5px] min-w-full bg-gradient-to-l from-colors-mainBlue900 to-colors-mainGray600"></span>
                  <strong className="text-colors-mainBlue900">Preencha o formulário</strong> e permita que a <strong className="text-colors-mainBlue900">Recruta F&C</strong> conecte você aos melhores talentos com eficiência e inovação.
                </p>
              </div>
            </div>

            <div className="flex gap-9 max-lg:flex-col-reverse justify-between">
              <span className="max-w-[720px] max-lg:min-w-full">
                <Image
                  src="/images/3.webp"
                  alt="Image"
                  className="w-full rounded-lg"
                  width={720}
                  height={400}
                />
              </span>

              <div className="w-full max-w-[693px] max-lg:min-w-full">
                <Form template={{ templateId: 'template_luw2wsd' }} />
              </div>
            </div>
          </div>
      </div>
    </main>
  </>
  )
} 