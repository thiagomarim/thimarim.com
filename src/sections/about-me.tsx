import TitleSection from '@/components/layout/title-section'

export default function AboutMe() {
  return (
    <section className="items-start">
      <TitleSection title="Um pouco mais sobre mim." sizes="lg" />
      <div className="mt-8">
        <div className="flex max-w-[1000px] flex-col gap-8 text-secondary">
          <p>
            Olá! Me chamo Thiago Soares Marim, tenho 19 anos e sou desenvolvedor
            front-end na{' '}
            <a
              href="https://shakersagencia.com.br/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary"
            >
              Shakers Agência & Consultoria
            </a>
            . Estou cursando Análise e Desenvolvimento de Sistemas na
            Universidade Nove de Julho (UNINOVE). Minha grande paixão é
            transformar ideias em sites dinâmicos, visualmente atraentes e,
            acima de tudo, centrados na melhor experiência para o usuário.
          </p>

          <p>
            Meu trabalho é focado em criar interfaces que sejam tanto bonitas
            quanto intuitivas, garantindo que cada detalhe contribua para uma
            navegação fluida e agradável. Tenho um conhecimento sólido em
            diversas tecnologias essenciais para o desenvolvimento front-end,
            como <span className="text-primary">HTML</span>,{' '}
            <span className="text-primary">CSS</span>,{' '}
            <span className="text-primary">JavaScript</span>,{' '}
            <span className="text-primary">Git</span>,{' '}
            <span className="text-primary">Github</span> e{' '}
            <span className="text-primary">TypeScript</span>. Além disso,
            utilizo ferramentas como{' '}
            <span className="text-primary">Tailwind CSS</span>,{' '}
            <span className="text-primary">React</span> e{' '}
            <span className="text-primary">Next.js</span> para criar aplicações
            modernas e de alta performance.
          </p>
          <p>
            Seja através da criação de um design responsivo ou da implementação
            de uma funcionalidade que faz a diferença, meu objetivo é sempre
            entregar o melhor para os usuários e clientes, aliando estética,
            funcionalidade e desempenho em cada projeto.
          </p>
        </div>
      </div>
    </section>
  )
}
