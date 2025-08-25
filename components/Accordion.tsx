'use client'

import { useState } from 'react'

type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full mx-auto max-xl:min-w-full">
      <h3 className="text-4xl font-bold mb-6">Faq</h3>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-b border-slate500 ${openIndex === index ? 'border-slate900' : 'border-slate500'}`}
        >
          <button
            onClick={() => toggle(index)}
            className={`w-full text-lg text-left px-4 py-3  ${openIndex === index ? 'text-black' : 'text-slate900'} cursor-pointer focus:outline-none flex justify-between items-center font-bold`}
          >
            {item.question}
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-slate-900 max-w-[1000px]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
