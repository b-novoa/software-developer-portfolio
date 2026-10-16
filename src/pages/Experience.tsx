
import ExperienceCard from '../components/experience/ExperienceCard'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <div>
      {/* Presentación */}
      <section className="mb-16">
        <p className="mb-5 text-sm font-medium tracking-widest text-[#A2FFCB]">
          01 / PROFESSIONAL EXPERIENCE
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          My professional{' '}
          <span className="text-[#A2FFCB]">journey.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          From my first steps in software development
          to designing and building enterprise applications.
        </p>
      </section>

      {/* Línea temporal */}
      <section className="relative ml-3 border-l border-[#A2FFCB]/30 pl-8 md:ml-5 md:pl-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="relative mb-10 last:mb-0"
          >
            {/* Punto de la línea temporal */}
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-8 h-4 w-4 rounded-full border-4 border-[#0B101B] bg-[#A2FFCB] md:-left-[57px]"
            />

            <ExperienceCard experience={experience} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Experience
