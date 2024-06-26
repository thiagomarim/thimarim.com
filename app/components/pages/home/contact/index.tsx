import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionTitle } from "@/app/components/ui/section-title";
import { Button } from "@/app/components/ui/button";

const INFO_CONTACT = [
  {
    title: "E-mail",
    subtitle: "Fique à vontade para me mandar um e-mail.",
    icon: <MdOutlineEmail size={20} />,
    href: "mailto:thiago.marim2005@gmail.com",
    buttonText: "Enviar",
  },
  {
    title: "Linkedin",
    subtitle: "Venha saber mais sobre mim.",
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/thiago-marim/",
    buttonText: "Visitar",
  },
  {
    title: "Github",
    subtitle: "Venha ver todos os meus projetos.",
    icon: <FaGithub size={20} />,
    href: "https://github.com/thiagomarim",
    buttonText: "Visitar",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="container">
      <SectionTitle
        title="Entre em Contato"
        subtitle="Não seja tímido, entre em contato"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-6 mt-12">
        {INFO_CONTACT.map((info) => (
          <div className="flex flex-col gap-2" key={info.title}>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium flex items-center gap-2">
                {info.icon}
                {info.title}
              </h3>
              <span className="text-paragraph">{info.subtitle}</span>
            </div>
            <Button variant={"secondary"} size={"sm"} className="w-max">
              <a href={info.href} target="_blank" rel="noopener noreferrer">
                {info.buttonText}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
