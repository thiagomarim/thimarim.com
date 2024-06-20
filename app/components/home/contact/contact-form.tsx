import Button from "../../ui/button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 max-w-[600px]">
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Seu Nome"
        id="name"
        className="h-14 bg-zinc-900 placeholder:text-zinc-400 text-gray-50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <label htmlFor="e-mail">E-mail</label>
      <input
        type="email"
        id="e-mail"
        placeholder="seunome@gmail.com"
        className="h-14 bg-zinc-900 placeholder:text-zinc-400 text-gray-50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        placeholder="Escreva alguma mensagem aqui"
        maxLength={500}
        className="resize-none h-[138px] bg-zinc-900 placeholder:text-zinc-400 text-gray-50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <Button>Enviar Mensagem</Button>
    </form>
  );
}
