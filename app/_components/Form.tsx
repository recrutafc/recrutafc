'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

type EmailTemplate = {
  templateId: string
}

interface FormProps {
  template: EmailTemplate
}

export default function Form({ template }: FormProps) {
  const form = useRef<HTMLFormElement>(null)
  const border = `border-2 border-colors-mainBlue900 bg-colors-mainGray200 shadow-md rounded-md`
  const label = 'hidden'
  const [submissionError, setSubmissionError] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm('service_n9x2fqa', template.templateId, form.current, {
        publicKey: 'bRYxX2Bf668IsHhtM',
      })
      .then(
        () => {
          console.log('SUCCESS! Web Design - Instagram @e2m.dev')
          setSubmissionError(true)
          form.current?.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="relative flex flex-col gap-4 w-full max-w-full max-lg:min-w-full max-lg:mb-4 max-lg:ml-0 text-colors-mainGray400"
    >
      <div className="flex justify-between">
        <label className={`${label}`}>Name</label>
        <input
          type="text"
          name="user_name"
          className={`h-[35px] w-full max-w-[49%] ${border} p-4 max-lg:min-w-[49%] mr-[1%]`}
          placeholder="Nome"
          title="Por favor, preencha este campo"
          required
        />
        <label className={`${label}`}>Sobrenome</label>
        <input
          type="text"
          name="user_lastname"
          className={`h-[35px] w-full max-w-[49%] ${border} p-4 max-lg:min-w-[49%] ml-[1%]`}
          placeholder="Sobrenome"
          title="Por favor, preencha este campo"
          required
        />
      </div>
      <label className={`${label}`}>Email</label>
      <input
        type="email"
        name="user_email"
        className={`h-[35px] ${border} p-4`}
        placeholder="Email"
        title="Por favor, preencha este campo"
        required
      />
      <label className={`${label}`}>Telefone</label>
      <input
        type="fone"
        name="user_fone"
        className={`h-[35px] ${border} p-4`}
        placeholder="Telefone"
        title="Por favor, preencha este campo"
        required
      />
      <label className={`${label}`}>Message</label>
      <textarea
        name="message"
        className={`h-[118px] ${border} resize-none p-4`}
        placeholder="Conte-nos um pouco de sua necessidade e/ou expectativa para que possamos ajudá-lo."
        title="Por favor, preencha este campo"
        required
      />
      <input
        type="submit"
        value="Enviar"
        className="flex justify-center items-center cursor-pointer px-4 py-2 rounded-md font-bold min-h-[50px] w-full shadow-md bg-gradient-to-b from-colors-mainBlue900 to-colors-mainBlue900 text-colors-mainWhite hover:brightness-125 delay-150 ease-in-out"
      />
      {submissionError ? (
        <span className="absolute bottom-[-40px] text-orange">
          Enviado com sucesso!
        </span>
      ) : (
        <span></span>
      )}
    </form>
  )
}
