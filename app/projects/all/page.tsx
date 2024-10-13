'use client'

import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { ProjectsList } from '@/data/projects'
import AllProjectsCard from '@/components/layout/all-projects-card'
import { motion } from 'framer-motion'

export default function AllProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <section>
        <div className="flex  justify-between items-center">
          <h1 className="text-5xl font-bold">Todos projetos</h1>
          <Link href="/projects" className="w-min">
            <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
              <HiArrowNarrowLeft size={18} /> Voltar
            </span>
          </Link>
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
