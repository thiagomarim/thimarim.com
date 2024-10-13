'use client'

import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { ProjectsList } from '@/data/projects'
import AllProjectsCard from '@/components/layout/all-projects-card'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'

export default function AllProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <section>
        <div className="flex flex-wrap justify-between items-start">
          <Link href="/projects" className="w-min mb-4">
            <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
              <HiArrowNarrowLeft size={18} /> Voltar
            </span>
          </Link>
          <SectionTitle
            title="Todos os projetos"
            titleSize="sm"
            subtitle="Nesta seção, você encontrará uma compilação abrangente de todos os projetos que já desenvolvi ao longo da minha carreira. Esta coleção diversificada representa minha jornada completa como desenvolvedor, desde os primeiros trabalhos até os mais recentes."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mt-12 gap-6">
          {ProjectsList.map((project) => (
            <AllProjectsCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}
