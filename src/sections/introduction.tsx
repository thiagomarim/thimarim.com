import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="flex max-w-[1000px] flex-col justify-center gap-5">
      <h1 className="text-[32px] font-bold leading-[46px] md:text-[64px] md:leading-[72px]">
        Olá, eu me chamo Thiago / desenvolvedor front-end.
      </h1>
      <p className="text-secondary text-base">
        Atualmente trabalho como Desenvolvedor front-end na{' '}
        <a
          href="https://shakersagencia.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 hover:transition-colors"
        >
          Shakers
        </a>
        . Sou totalmente apaixonado por tecnologia e sempre estou em busca de
        aprender coisas novas. Atualmente estou localizado em Sao Paulo, Brasil.
      </p>
      <div className="flex items-center gap-6">
        <Link href="about">
          <Button className="w-min text-black">Ver mais sobre mim</Button>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thiagomarim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 hover:transition-colors"
          >
            <GitHubLogoIcon width={22} height={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-marim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 hover:transition-colors"
          >
            <LinkedInLogoIcon width={22} height={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
