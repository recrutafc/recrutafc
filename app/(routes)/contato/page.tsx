'use client'

import Accordion from '@/components/Accordion'
import Flyer from '@/components/Flyer'
import Form from '@/components/Form'

import { Envelope, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const faqItems = [
  {
    question: 'Como minha empresa pode se cadastrar para receber talentos?',
    answer:
      'Basta entrar em contato com a nossa equipe pelo formulário, e-mail ou telefone. Vamos entender suas necessidades e iniciar o processo de busca personalizada.',
  },
  {
    question: 'Quanto tempo leva para receber os primeiros perfis?',
    answer:
      'O prazo varia de acordo com o nível e a complexidade da vaga, mas geralmente enviamos os primeiros candidatos qualificados em poucos dias.',
  },
  {
    question: 'Vocês só buscam candidatos que já estão procurando emprego?',
    answer:
      'Não. Também fazemos hunting ativo, abordando profissionais que não estão necessariamente no mercado, mas que podem ser o match perfeito para sua vaga.',
  },
  {
    question: 'Como é feita a seleção dos candidatos?',
    answer:
      'Fazemos uma triagem completa: análise de perfil, entrevista, checagem de referências e alinhamento de expectativas antes de apresentar para sua empresa.',
  },
  {
    question: 'Preciso assinar contrato para iniciar a busca?',
    answer:
      'Sim, após a etapa inicial de alinhamento e definição do perfil, formalizamos o contrato para dar início ao processo de seleção e entrega dos candidatos.',
  },

  {
    question: 'Como funciona o processo de recrutamento na empresa?',
    answer:
      'Nosso processo é ágil e transparente. Recebemos seu currículo, analisamos seu perfil e, se houver match com a vaga, entramos em contato para as próximas etapas.',
  },
  {
    question: 'Preciso ter experiência para participar dos processos?',
    answer:
      'Depende da vaga. Temos oportunidades para diferentes níveis — do iniciante ao sênior. O mais importante é seu potencial e vontade de aprender.',
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
      'Com certeza! Se seu perfil se encaixa em mais de uma oportunidade, pode se candidatar sem problemas. Isso até aumenta suas chances.',
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

              <div className="flex gap-9">
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
