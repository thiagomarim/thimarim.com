'use client'

import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProjectCard from '@/components/layout/project-card'
import { ProjectsList } from '@/data/projects'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'

export default function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <section>
        <div className="flex flex-wrap items-center justify-between mb-10 sm:mb-16">
          <SectionTitle
            title="Aqui estao os meus melhores projetos já desenvolvidos."
            titleSize="sm"
            subtitle="Nesta seção, você encontrará uma seleção cuidadosamente curada dos meus melhores projetos desenvolvidos até o momento. Cada um desses trabalhos representa não apenas horas de dedicação e esforço, mas também marcos significativos em minha jornada profissional."
          />
        </div>
        <div className="flex flex-col">
          {ProjectsList.slice(0, 2).map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
        <div className="mt-12 w-max sm:mt-16">
          <Link href="/projects/all">
            <span className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4">
              Ver todos <HiArrowNarrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
