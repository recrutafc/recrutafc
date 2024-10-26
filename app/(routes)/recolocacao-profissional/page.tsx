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
      title: 'Revisão Curricular',
      description: 'Analisamos e ajustamos seu currículo para destacar suas principais habilidades e experiências, tornando-o mais atrativo para os recrutadores.',
    },
    {
      id:2,
      title: 'Revisão de Perfil Profissional no LinkedIn',
      description: 'Otimizamos seu perfil no LinkedIn para aumentar sua visibilidade e potencializar suas conexões no mercado de trabalho.',
    },
    {
      id:3,
      title: 'Busca Ativa de Vagas',
      description: 'Realizamos uma busca contínua em diversas plataformas de recrutamento para encontrar as melhores oportunidades de emprego para o seu perfil.',
    },
    {
      id:4,
      title: 'Indicações através de Networking',
      description: 'Utilizamos nossa rede de contatos para indicar profissionais a empresas em busca de talentos específicos.',
    },
  ]

  const accordionData2: AccordionData2[] = [
    {
      id:5,
      title: 'Simulação de Entrevistas',
      description: 'Preparamos você para entrevistas reais com simulações que ajudam a melhorar seu desempenho e confiança.',
    },
    {
      id:6,
      title: 'Orientações para Seleção e Busca de Vagas',
      description: 'Fornecemos orientações estratégicas para melhorar suas chances de sucesso no processo seletivo e na busca por novas oportunidades.',
    },
    {
      id:7,
      title: 'Disponibilização de Cursos Online',
      description: 'Oferecemos acesso a cursos online na melhor plataforma digital, ajudando você a se qualificar e se destacar no mercado.',
    },
    {
      id:8,
      title: 'Acompanhamento Personalizado',
      description: 'Oferecemos suporte contínuo durante todo o processo de recolocação, acompanhando cada etapa para garantir que você esteja no caminho certo para alcançar seus objetivos profissionais.',
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
              <h1 className="text-3xl font-extrabold mb-4 max-lg:text-2xl text-colors-mainBlue900 uppercase">
                 Recolocação e Transição Profissional
              </h1>
              <p className="text-xl text-colors-mainGray400 mb-9 max-lg:text-base">
              Pronto para dar o próximo passo na sua carreira? Entre em contato com a Recruta F&C e conte com o suporte especializado para uma transição profissional bem-sucedida!
              </p>

              <div className="min-w-[366px] flex gap-9 mb-9">
                <Button href="#form" styleType="1" maxWidth={200} redirect="">
                  Formulário
                </Button>
                <Button href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre Recolocação Profissional." redirect="1" styleType="2" maxWidth={130} aria-label='Botão ir para WhatsApp'>
                  <WhatsappLogo size={30} />
                </Button>
              </div>
            </div>

            <div className="p-[50px]">
              <div className="relative">
                <Image src='/images/2.webp' alt="Image" width={610} height={400} />
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
            <h2 className="text-3xl font-extrabold text-center mb-6 max-lg:text-2xl text-colors-mainBlue900 uppercase">
              Estrutura De Recolocação Profissional
            </h2>
            <p className="text-xl text-colors-mainGray400 mb-9 max-lg:text-base text-center">
              Na Recruta F&C, o serviço de Recolocação e Transição Profissional é focado em apoiar profissionais durante momentos de mudança na carreira. Oferecemos uma abordagem personalizada, que vai desde o desenvolvimento de novas habilidades até a orientação para encontrar oportunidades alinhadas ao perfil e objetivos individuais. Com um acompanhamento estratégico, garantimos uma transição suave e eficaz, ajudando tanto empresas quanto profissionais a se adaptarem rapidamente ao mercado.
            </p>
          </div>

          <div className="flex gap-2 min-h-[380px] max-lg:flex-col max-lg:mb-9">
            <div className="flex flex-col gap-2 w-full  ">
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
                <h3 className="text-3xl font-extrabold mb-6 max-lg:text-2xl max-w-[500px] text-colors-mainBlue900 uppercase">
                  Pronto para <br/> transformar sua <br/>carreira?
                </h3>
                <p className="max-w-[693px] max-lg:min-w-full mt-4 text-xl text-colors-mainGray400 mb-9 max-lg:text-base">
                  <span className="block mb-9 min-h-[5px] min-w-full bg-gradient-to-l from-colors-mainBlue900 to-colors-mainGray600"></span>
                  <strong className="text-colors-mainBlue900">Preencha o formulário</strong> e conte com o suporte da <strong className="text-colors-mainBlue900">Recruta F&C</strong> para uma recolocação e transição profissional de sucesso!
                </p>
              </div>
            </div>

            <div className="flex gap-9 max-lg:flex-col-reverse justify-between">
              <span className="max-w-[720] max-lg:min-w-full">
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