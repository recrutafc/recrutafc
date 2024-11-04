'use client'

import Button from "@/app/_components/Button";
import Form from "@/app/_components/Form";
import ServiceTitle from "@/app/_components/ServiceTitle";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/_components/ui/carousel";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import EquipeCard from "@/app/_components/EquipeCard";

export default function SobreNos () {
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
              <h2 className="text-3xl font-extrabold mb-4 max-lg:text-2xl text-colors-mainBlue900  uppercase">
                 Sobre Nós
              </h2>
              <span className="text-xl text-colors-mainGray400 mb-9 max-lg:text-base block">
                <h1 className="text-colors-mainGray400">A Recruta F&C oferece soluções completas em recrutamento e seleção,</h1> atuando como uma ponte estratégica entre empresas e profissionais no interior do estado de São Paulo, com foco na região de Ribeirão Preto. 
              </span>

              <div className="min-w-[366px] flex gap-9 mb-9">
                <Button href="#form" styleType="1" maxWidth={200} redirect="">
                  Formulário
                </Button>
                <Button href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre a Recruta FC." styleType="2" maxWidth={130} redirect="1" aria-label='Botão ir para WhatsApp'>
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

          <div className="flex flex-col items-center justify-center py-4">
            <span className="flex flex-col items-start">
              <ServiceTitle>Missão</ServiceTitle> 
            </span>
            <h2 className="text-3xl font-extrabold mb-6 max-lg:text-2xl text-colors-mainBlue900 uppercase">
              Nossa Missão
            </h2>
            <p className="text-xl max-w-[1100px] text-center text-colors-mainGray400 mb-9 max-lg:text-base">
              Nossa missão é facilitar e agilizar o processo de contratação, proporcionando às empresas acesso rápido e eficiente aos melhores talentos do mercado. Com uma abordagem personalizada, também oferecemos consultoria especializada em recursos humanos, garantindo que nossas soluções sejam sempre alinhadas às necessidades específicas de cada cliente, resultando em contratações assertivas e de qualidade. 
            </p>

            <div className="p-[50px]">
              <div className="relative">
                <Image src='/images/4.webp' alt="Image" width={1324} height={400} className="rounded-lg" />
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

          <section className="bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat">
            <div className="max-w-[1400px] mx-auto py-[50px]">
              <div className="flex flex-col justify-center items-center">
                <ServiceTitle>Equipe</ServiceTitle>
                <h2 className="text-3xl font-extrabold mb-6 max-lg:text-3xl text-colors-mainBlue900 uppercase">
                  Nossa Equipe
                </h2>
              </div>
              <Carousel className="max-w-[1400px] mx-auto" 
                  opts={{
                    loop: true,
                  }}      
                  plugins={[
                    Autoplay({
                      delay: 6000,
                    }),
                  ]}
                >       
                <CarouselContent className="pt-[24px]">
                  <CarouselItem>
                    <EquipeCard
                      name="Gustavo P. Castro"
                      prof="Consultor de RH"
                      descProf="Administrador, formado pela UNISEB COC/FGV. Desde 2010 atuante na área e trazendo consigo experiencias em empresas de diversos ramos tendo ocupado cargos de Comprador, Assistente Adm. Comercial e Logístico, Coordenador de Eventos e Vendas de Multipropriedades."
                      image="/profile/a2.webp"
                      feedback="“A base para a execução de um serviço de assessoria personalizado que beire a excelência parte de uma estruturação empresarial e uma cultura organizacional bem definida aonde a busca é sempre pela transparência, profissionalismo e a humanização dos nossos processos do início ao fim, com foco total no resultado final e satisfação completa dos nos clientes.”"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <EquipeCard
                      name="Ígor N. Fernandes"
                      prof="Especialista em Recrutamento e Seleção"
                      descProf="Psicólogo graduado pelo Centro Universitário Barão de Mauá, com MBA em Coaching e Liderança para Gestão de Pessoas e Pós-graduado pela Faculdade Metropolitana.
Com uma trajetória profissional sólida, acumulou experiências significativas nos diversos subsistemas de Recursos Humanos, destacando-se no subsistema de Recrutamento e Seleção."
                      image="/profile/a1.webp"
                      feedback="“Ao longo da carreira pude ter experiências em alguns dos subsistemas de RH, tendo atuação relevante e sólida dentro de recrutamento e seleção de pessoas. Atuei em empresas de diversos portes nacionais e multinacionais, conduzindo de maneira end to end os processos seletivos.”"
                    />
                  </CarouselItem>
                </CarouselContent>
                <div className="relative w-[100px] mx-auto mt-9 text-colors-mainBlue900">
                  <CarouselPrevious className="left-0 bg-colors-mainWhite" />
                  <CarouselNext className="right-0 bg-colors-mainWhite" />
                </div>
              </Carousel>
            </div>
          </section>

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
                  É rápido e fácil, basta <strong className="text-colors-mainBlue900">preencher o formulário</strong> logo abaixo e nós cuidamos do restante
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