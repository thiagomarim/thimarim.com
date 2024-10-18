import TitleSection from '@/components/layout/title-section'
import Image from 'next/image'
import { StackListProps } from '@/data/stack'
import { cn } from '@/lib/utils'
import AnimatedSection from '@/components/common/animated-section'

interface StackSectionProps {
  stackList: StackListProps[]
}

export default function StackSection({ stackList }: StackSectionProps) {
  return (
    <AnimatedSection>
      <TitleSection
        title="Minhas Stacks"
        sizes="lg"
        subtitle="Esta seção reúne as principais tecnologias e ferramentas que utilizo no desenvolvimento de soluções web. Estou sempre em busca de novas práticas e inovações para entregar aplicações eficientes e escaláveis. Cada tecnologia da minha stack foi escolhida para garantir que os projetos tenham desempenho, flexibilidade e uma experiência de usuário impecável."
      />

      {stackList.map(({ items, title }) => (
        <div key={title}>
          <TitleSection title={title} sizes="sm" />
          <div className="mt-4 grid grid-cols-1 gap-3 mobile:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {items.map((item) => (
              <div
                className="flex flex-col items-center gap-3 rounded-lg border border-border p-6"
                key={item.name}
              >
                <div
                  className={cn(
                    'relative flex items-center justify-center overflow-hidden rounded-lg p-2',
                    item.dark && 'dark:invert',
                  )}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="z-10"
                    decoding="async"
                  />
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={8}
                    height={8}
                    decoding="async"
                    className="absolute inset-0 z-0 h-[125%] w-[125%] opacity-80 blur-lg"
                  />
                </div>
                <h3 className="text-sm">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AnimatedSection>
  )
}
