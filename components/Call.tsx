'use client'

import { useState } from 'react'
import { Copy, Check } from '@phosphor-icons/react/dist/ssr'

export default function Call() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 1500)
    })
  }

  return (
    <div className="text-white rounded-lg max-w-sm">
      <div className="space-y-3">
        <div
          className="flex items-center justify-between bg-slate-800 p-3 rounded-md cursor-pointer hover:bg-slate-700 transition"
          onClick={() => handleCopy('16996093789', 'phone')}
        >
          <span>(16) 9 9609-3789</span>
          {copied === 'phone' ? (
            <Check size={20} className="text-green-400" />
          ) : (
            <Copy size={20} className="text-gray-400" />
          )}
        </div>

        <div
          className="flex items-center justify-between bg-slate-800 p-3 rounded-md cursor-pointer hover:bg-slate-700 transition"
          onClick={() => handleCopy('recrutafc@hotmail.com', 'email')}
        >
          <span>recrutafc@hotmail.com</span>
          {copied === 'email' ? (
            <Check size={20} className="text-green-400" />
          ) : (
            <Copy size={20} className="text-gray-400" />
          )}
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Segunda à Sexta das 8h às 18h
        </p>
      </div>
    </div>
  )
}
