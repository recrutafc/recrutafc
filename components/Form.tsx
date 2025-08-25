'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Form() {
  const form = useRef<HTMLFormElement>(null)
  const [submissionError, setSubmissionError] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm('service_n9x2fqa', 'template_luw2wsd', form.current, {
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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
      <div className="flex gap-2 mb-2">
        <Input
          type="text"
          name="user_name"
          placeholder="Nome"
          title="Por favor, preencha este campo"
          data-error-message="Por favor, preencha seu Nome"
          required
        />

        <Input
          type="tel"
          name="user_fone"
          placeholder="Telefone"
          title="Por favor, preencha este campo"
          required
        />
      </div>

      <Input
        type="email"
        name="user_email"
        placeholder="Email"
        title="Por favor, preencha este campo"
        className="mb-2"
        required
      />

      <Textarea
        name="message"
        placeholder="Conte-nos um pouco de sua necessidade e/ou expectativa para que possamos ajudá-lo."
        title="Por favor, preencha este campo"
        className="mb-2"
        required
      />

      <Button type="submit" variant="secondary" id="CTAFORM">
        Enviar
      </Button>
      {submissionError ? (
        <span className="text-green-500 mt-2">Enviado com sucesso!</span>
      ) : (
        <span></span>
      )}
    </form>
  )
}
