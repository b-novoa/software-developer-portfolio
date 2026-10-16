
import type { ReactNode } from 'react'

type ProjectSectionProps = {
  title: string
  children: ReactNode
}

function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-[#172234] p-6 md:p-8">
      <h2 className="mb-5 text-2xl font-semibold text-white">
        {title}
      </h2>

      <div className="text-slate-400">
        {children}
      </div>
    </section>
  )
}

export default ProjectSection
