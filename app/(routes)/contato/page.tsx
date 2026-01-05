'use client'

import Accordion from '@/components/Accordion'
import Flyer from '@/components/Flyer'
import Form from '@/components/Form'

import { Envelope, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const faqItems = [
  {
    question: 'Como minha empresa pode potencializar o Recrutamento e Seleção?',
    answer:
      'Basta entrar em contato com a nossa equipe pelo formulário, e-mail ou telefone. Vamos entender suas necessidades e iniciar o processo de busca personalizada.',
  },
  {
    question:
      'Quais os métodos utilizados para Atração e Seleção de candidatos?',
    answer:
      'Utilizamos uma variedade de canais e estratégias de marketing para garantir uma ampla divulgação da vaga e atrair candidatos qualificados, inclusive o hunting ativo.',
  },
  {
    question:
      'Quais as qualificações necessárias para conseguir meu novo emprego?',
    answer:
      'Depende da vaga. Temos oportunidades do nível  júnior ao sênior. Fique atento ao requisitos mínimos solicitados em cada vaga e escolha aquela que faça sentido de acordo com as suas experiências',
  },
  {
    question: 'Quanto tempo leva para receber os primeiros perfis?',
    answer:
      'O prazo varia conforme o nível e a complexidade da vaga. Pode ficar tranquilo: um dos nossos principais diferenciais é a agilidade aliada à assertividade.',
  },
  {
    question: 'Como é feita a seleção dos candidatos?',
    answer:
      'Fazemos uma triagem completa: análise de perfil, entrevista, checagem de referências e alinhamento de expectativas antes de apresentar para sua empresa.',
  },
  {
    question: 'Como funciona o processo de recrutamento na empresa?',
    answer:
      'Nosso processo é ágil e transparente. Recebemos seu currículo, analisamos seu perfil e, se houver match com a vaga, entramos em contato para as próximas etapas.',
  },
  {
    question: 'Como posso me candidatar a uma vaga?',
    answer:
      'Basta acessar nosso site ou redes sociais, escolher a vaga que combina com você e enviar seu currículo pelo canal indicado.',
  },
  {
    question: 'Vocês dão feedback sobre os processos seletivos?',
    answer:
      'Sim! Prezamos pela comunicação clara e sempre retornamos sobre o andamento do processo, seja com boas ou não tão boas notícias.',
  },
  {
    question: 'Posso me inscrever para mais de uma vaga?',
    answer:
      'Com certeza! Porém leia com atenção as informações da vaga e de preferência naquela que atenda as suas atuais expectativas profissionais.',
  },
]

export default function Contato() {
  return (
    <section className="px-4">
      <div className="max-w-[1400px] mx-auto flex justify-between gap-4 py-9 max-lg:flex-col-reverse text-slate900">
        <Flyer />
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-bold mb-2">Entrar em contato</h2>
            <p className="text-slate900 mb-6">
              É rápido e fácil, basta{' '}
              <span className="font-bold italic">preencher o formulário</span>{' '}
              logo abaixo e nós cuidamos do restante.
            </p>
            <Form />
          </div>

          <div className="border border-dashed rounded-lg border-slate500 p-4 mb-9">
            <div className="flex justify-between max-md:flex-col max-md:gap-4">
              <h2 className="font-bold">Outros</h2>

              <div className="flex gap-9 max-md:gap-4 max-md:flex-col">
                <div className="flex items-center gap-2">
                  <WhatsappLogo size={20} />
                  <p>(16) 9 9609-3789</p>
                </div>
                <div className="flex items-center gap-2">
                  <Envelope size={20} />
                  <p>recrutafc@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}
