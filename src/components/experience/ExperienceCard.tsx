
import { motion, useReducedMotion } from 'motion/react'
import type { WorkExperience } from '../../data/experience'

type ExperienceCardProps = {
    experience: WorkExperience
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
            }}
            className="rounded-2xl border border-slate-800 bg-[#172234] p-6 transition-colors hover:border-[#A2FFCB]/40 md:p-8"
        >
            {/* Empresa y puesto */}
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h3 className="text-xl font-bold text-white">
                        {experience.position}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-[#A2FFCB]">
                        {experience.company}
                    </p>
                </div>

                {!experience.endDate && (
                    <span className="rounded-full border border-[#A2FFCB]/40 bg-[#A2FFCB]/10 px-3 py-1 text-xs font-medium text-[#A2FFCB]">
                        Current
                    </span>
                )}
            </div>

            {/* Fechas y ubicación */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                <span>
                    {experience.startDate} — {experience.endDate ?? 'Present'}
                </span>

                <span>
                    {experience.location} · {experience.workMode}
                </span>
            </div>

            {/* Responsabilidades */}
            <ul className="mt-6 space-y-3">
                {experience.responsibilities.map((responsibility) => (
                    <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-relaxed text-slate-300"
                    >
                        <span className="shrink-0 text-[#A2FFCB]">→</span>
                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>

            {/* Tecnologías */}
            <div className="mt-8 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border border-slate-700 bg-[#0B101B] px-3 py-1 text-xs text-slate-300"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </motion.article>
    )
}

export default ExperienceCard
