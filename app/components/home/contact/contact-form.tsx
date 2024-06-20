"use client";

import { z } from "zod";
import Button from "../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiArrowNarrowRight } from "react-icons/hi";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "O seu nome deve possuir no mínimo 3 caracteres")
    .max(100),
  email: z.string().email("Formato de e-mail inválido"),
  message: z
    .string()
    .min(1, "A mensagem deve conter mais de 1 caractere")
    .max(500),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  function handleFormSubmit(data: ContactFormSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-4 max-w-[600px]"
    >
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Seu Nome"
        id="name"
        className="h-14 bg-zinc-900 placeholder:text-zinc-400 text-gray-50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        {...register("name")}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
      <label htmlFor="e-mail">E-mail</label>
      <input
        type="email"
        id="email"
        placeholder="seunome@gmail.com"
        className="h-14 bg-zinc-900 placeholder:text-zinc-400 text-gray-50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        placeholder="Escreva alguma mensagem aqui"
        maxLength={500}
        className="resize-none h-[138px] bg-zinc-900 placeholder:text-zinc-400 text-gray-50 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        {...register("message")}
      />
      {errors.message && (
        <span className="text-red-500">{errors.message.message}</span>
      )}
      <Button className="p-4 justify-center" type="submit">
        Enviar Mensagem
        <HiArrowNarrowRight size={20} />
      </Button>
    </form>
  );
}
