import { Mail } from 'lucide-react'
import { Button } from '../ui/button'

export default function ContactForm() {
  return (
    <form className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Nome</label>
        <input
          placeholder="James Bond"
          name="name"
          id="name"
          className="h-14 max-w-[620px] rounded-lg border border-border bg-background p-4 text-primary ring-0 ring-primary/40 duration-300 ease-in-out placeholder:text-secondary hover:ring-1 focus:outline-none focus:ring-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          placeholder="james@bond.com"
          name="email"
          type="email"
          id="email"
          className="h-14 max-w-[620px] rounded-lg border border-border bg-background p-4 text-primary ring-0 ring-primary/40 duration-300 ease-in-out placeholder:text-secondary hover:ring-1 focus:outline-none focus:ring-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Mensagem</label>
        <textarea
          placeholder="Como posso te ajudar?"
          name="message"
          id="message"
          className="h-36 max-w-[620px] resize-none rounded-lg border border-border bg-background p-4 text-primary ring-0 ring-primary/40 duration-300 ease-in-out placeholder:text-secondary hover:ring-1 focus:outline-none focus:ring-1"
        />
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
