'use client'

import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '../../ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please input a valid name.'),
  email: z.string().email('Please input a valid email.'),
  message: z
    .string()
    .min(5, 'The message must contain more than 5 characters.'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const t = useTranslations('pages.contact')

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          setSubmitSuccess(true)
          reset()
        } else {
          throw new Error(result.error || 'Falha ao enviar a mensagem')
        }
      } else {
        throw new Error(
          `Falha na requisição: ${response.status} ${response.statusText}`,
        )
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitError(
        error instanceof Error ? error.message : 'Erro desconhecido',
      )
    }
  }

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Nome</label>
        <input
          placeholder="James Bond"
          id="name"
          className="h-14 max-w-[620px] rounded-lg border border-border bg-background p-4 text-primary ring-0 ring-primary/40 duration-300 ease-in-out placeholder:text-secondary hover:ring-1 focus:outline-none focus:ring-1"
          {...register('name')}
        />
        {errors.name && (
          <span className="mt-2 text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          placeholder="james@bond.com"
          type="email"
          id="email"
          className="h-14 max-w-[620px] rounded-lg border border-border bg-background p-4 text-primary ring-0 ring-primary/40 duration-300 ease-in-out placeholder:text-secondary hover:ring-1 focus:outline-none focus:ring-1"
          {...register('email')}
        />
        {errors.email && (
          <span className="mt-2 text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Como posso te ajudar?"
          id="message"
          className="h-36 max-w-[620px] resize-none rounded-lg border border-border bg-background p-4 text-primary ring-0 ring-primary/40 duration-300 ease-in-out placeholder:text-secondary hover:ring-1 focus:outline-none focus:ring-1"
          {...register('message')}
        />
        {errors.message && (
          <span className="mt-2 text-red-500">{errors.message.message}</span>
        )}
      </div>
      <Button
        className="flex max-w-min items-center gap-2 text-black"
        size={'lg'}
        type="submit"
        disabled={isSubmitting}
      >
        <Mail size={16} />
        {isSubmitting ? t('buttonSendingText') : t('buttonText')}
      </Button>
      {submitSuccess && (
        <span className="mt-2 text-green-500">{t('successMessage')}</span>
      )}
      {submitError && (
        <span className="mt-2 text-red-500">Erro: {submitError}</span>
      )}
    </form>
  )
}
