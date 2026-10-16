
import { Link } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'

import type { Project } from '../../data/projects'
import { statusLabels, statusColors } from '../../data/projectStatus'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={
        shouldReduceMotion ? undefined : { y: -5 }
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#172234]"
    >
      {/* Cabecera visual */}
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#173A38] to-[#111C2A]">
        <span className="font-mono text-2xl font-bold text-[#A2FFCB]">
          {'</>'}
        </span>
      </div>

      {/* Información del proyecto */}
      <div className="flex flex-1 flex-col p-6">
        <p className={`mb-3 text-xs font-medium uppercase tracking-widest 
            ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </p>

        <h2 className="text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-[#263747] px-3 py-1 text-xs text-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Enlace al detalle */}
        <Link
          to={`/projects/${project.slug}`}
          className="mt-auto pt-8 font-medium text-[#A2FFCB] transition-colors hover:text-emerald-300"
        >
          View Project →
        </Link>
      </div>
    </motion.article>
  )
}

export default ProjectCard
