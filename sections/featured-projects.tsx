'use client'

import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProjectCard from '@/components/layout/project-card'
import { ProjectsList } from '@/data/projects'
import { motion } from 'framer-motion'

export default function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <section>
        <div className="flex flex-wrap items-end justify-between mb-10 sm:mb-16">
          <h1 className="text-5xl font-bold">Melhores projetos</h1>
          <Link href="/projects" className="mt-6 sm:mb-0 ">
            <span className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4">
              Ver todos <HiArrowNarrowRight size={18} />
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          {ProjectsList.slice(0, 2).map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
        <div className="mt-12 w-max sm:mt-16">
          <Link href="/projects">
            <span className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4">
              Ver todos <HiArrowNarrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
