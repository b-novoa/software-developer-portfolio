
import { motion, useReducedMotion } from 'motion/react'

import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 25,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
      }}
    >
      <p className="mb-5 text-sm font-medium tracking-widest text-[#A2FFCB]">
        01 / FEATURED PROJECTS
      </p>

      <h1 className="text-4xl font-bold text-white md:text-6xl">
        Things I've{' '}
        <span className="text-[#A2FFCB]">built.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        A collection of applications, experiments and
        software engineering challenges.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
