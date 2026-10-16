
import { Link, useParams } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'

import { projects} from '../data/projects'
import ProjectSection from '../components/projects/ProjectSection'
import { statusLabels, statusColors } from '../data/projectStatus'

function ProjectDetail() {
    const { slug } = useParams()
    const shouldReduceMotion = useReducedMotion()

    const project = projects.find(
        (item) => item.slug === slug
    )

    if (!project) {
        return (
            <section className="text-center">
                <h1 className="text-3xl font-bold text-white">
                    Project not found
                </h1>

                <Link
                    to="/projects"
                    className="mt-6 inline-block text-[#A2FFCB]"
                >
                    ← Back to projects
                </Link>
            </section>
        )
    }
    
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
            }}
            className="space-y-10"
        >
            {/* Cabecera */}
            <header>
                <Link
                    to="/projects"
                    className="text-sm text-[#A2FFCB] hover:underline"
                >
                    ← All Projects
                </Link>

                <p
                    className={`mt-10 text-sm font-medium uppercase tracking-widest ${statusColors[project.status]
                        }`}
                >
                    {statusLabels[project.status]}
                </p>

                <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
                    {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
                    {project.description}
                </p>

                {/* Tecnologías */}
                <div className="mt-8 flex flex-wrap gap-3">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-slate-700 bg-[#172234] px-4 py-2 text-sm text-slate-200"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Enlaces externos */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-[#A2FFCB] px-5 py-3 font-medium text-[#A2FFCB] transition-colors hover:bg-[#A2FFCB]/10"
                        >
                            View GitHub ↗
                        </a>
                    )}

                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-[#A2FFCB] px-5 py-3 font-medium text-[#0B101B] transition-colors hover:bg-emerald-300"
                        >
                            Live Demo ↗
                        </a>
                    )}
                </div>
            </header>

            {/* Descripción */}
            <ProjectSection title="Overview">
                <p className="leading-relaxed">
                    {project.details}
                </p>
            </ProjectSection>

            {/* Funcionalidades */}
            {project.features && project.features.length > 0 && (
                <ProjectSection title="Key Features">
                    <ul className="space-y-3">
                        {project.features.map((feature) => (
                            <li key={feature} className="flex gap-3">
                                <span className="text-[#A2FFCB]">✓</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </ProjectSection>
            )}

            {/* Arquitectura */}
            {project.architecture && (
                <ProjectSection title="Architecture">
                    <p className="leading-relaxed">
                        {project.architecture}
                    </p>
                </ProjectSection>
            )}

            {/* Retos técnicos */}
            {project.challenges && project.challenges.length > 0 && (
                <ProjectSection title="Technical Challenges">
                    <ul className="space-y-3">
                        {project.challenges.map((challenge) => (
                            <li key={challenge} className="flex gap-3">
                                <span className="text-[#A2FFCB]">→</span>
                                <span>{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </ProjectSection>
            )}
        </motion.div>
    )
}

export default ProjectDetail
