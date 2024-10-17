'use client'

import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Insira um nome válido'),
  email: z.string().email('Insira um email válido'),
  message: z.string().min(5, 'A mensagem deve conter mais de 5 caracteres'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  function onSubimit(data: ContactFormData) {
    console.log(data)
  }

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(onSubimit)}
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
        <label htmlFor="message">Mensagem</label>
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
      >
        <Mail size={16} />
        Enviar Email
      </Button>
    </form>
  )
}
