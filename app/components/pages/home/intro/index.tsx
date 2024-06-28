"use client";

import { Button } from "@/app/components/ui/button";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="w-full bg-intro-bg bg-no-repeat bg-left-top">
      <motion.div
        className="container flex flex-col gap-4 mb-[120px] lg:mb-[390px] mt-[150px] sm:mt-[323px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl sm:text-[56px]  leading-none sm:leading-[61px] font-medium">
          Desenvolvedor Front-end
        </h1>
        <p className="text-paragraph max-w-[572px] text-xl ">
          Olá, me chamo Thiago Marim tenho 18 anos e atualmente estou localizado
          em São Paulo, Brasil.
        </p>
        <div className="flex flex-wrap gap-6 mt-2">
          <Button>
            <a href="#contact" className="flex items-center gap-2">
              Entrar em contato
            </a>
          </Button>
          <div className="flex items-center gap-4 text-zinc-700">
            <a
              href="https://github.com/thiagomarim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-50 transition-colors"
            >
              <TbBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-marim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-50 transition-colors"
            >
              <TbBrandLinkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
