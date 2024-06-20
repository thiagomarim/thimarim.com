import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-[500px]">
        <h1 className="text-2xl font-semibold">Entre em Contato!</h1>
        <p className="text-zinc-400 leading-8 mt-3">
          Você pode ver mais sobre o meu trabalho no meu{" "}
          <a
            href="https://www.linkedin.com/in/thiago-marim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 underline underline-offset-4"
          >
            Linkedin
          </a>{" "}
          ou meus códigos no{" "}
          <a
            href="https://github.com/thiagomarim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 underline underline-offset-4"
          >
            Github
          </a>
          . Fique à vontade para me mandar uma mensagem pelo meu{" "}
          <a
            href="mailto:thiago.marim2005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 underline underline-offset-4"
          >
            E-mail
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
