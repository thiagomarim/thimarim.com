import TitleSection from '@/components/layout/title-section'

const techList = [
  'HTML,',
  'CSS,',
  'JavaScript,',
  'TypeScript,',
  'Tailwind CSS,',
  'React,',
  'Next.js,',
  'Git,',
  'Github.',
]

export default function AboutMe() {
  return (
    <section className="items-start">
      <TitleSection title="Um pouco mais sobre mim" />
      <div className="flex items-start justify-between gap-20">
        <div className="bg-terceary min-h-[400px] min-w-[400px] rounded-xl" />
        <div className="text-secondary flex flex-col gap-4">
          <p>
            Olá, eu me chamo Thiago Marim e atuo como Desenvolvedor front-end
            pela Shakers. Atualmente estou cursando Análise e Desenvolvimento de
            Sistemas na UNINOVE.
          </p>

          <p>
            {' '}
            Minha paixão é criar e desenvolver sites com interfaces bonitas e
            atraentes, com foco na experiência do usuário. Possuo conhecimentos
            em{' '}
            {techList.map((tech) => (
              <span key={tech.toLowerCase()} className="text-gray-50">
                {tech}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
