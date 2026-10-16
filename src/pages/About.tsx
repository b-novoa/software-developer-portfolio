
import { motion, useReducedMotion } from 'motion/react'
import SpecialtyCard from '../components/about/SpecialtyCard'
import { specialties, technologies } from '../data/about'

function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="space-y-24">

      {/* Introducción */}
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
          01 / ABOUT ME
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Beyond the{' '}
          <span className="text-[#A2FFCB]">code.</span>
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-400">
          <p>
            I'm Brayan Novoa, a Software Engineer
            passionate about building reliable,
            scalable and maintainable applications.
          </p>

          <p>
            My primary focus is backend development
            with Java and Spring, but I'm also
            interested in software architecture,
            modern development practices and
            exploring new technologies.
          </p>

          <p>
            I believe great software comes from
            understanding problems, making thoughtful
            technical decisions and continuously
            learning.
          </p>
        </div>
      </motion.section>

      {/* Especialidades */}
      <section>
        <p className="mb-4 text-sm font-medium tracking-widest text-[#A2FFCB]">
          02 / WHAT I DO
        </p>

        <h2 className="text-3xl font-bold text-white">
          What drives my work
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
            />
          ))}
        </div>
      </section>

      {/* Tecnologías */}
      <section>
        <p className="mb-4 text-sm font-medium tracking-widest text-[#A2FFCB]">
          03 / TECH STACK
        </p>

        <h2 className="text-3xl font-bold text-white">
          Tools & technologies
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Technologies I've worked with or am
          currently exploring.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-slate-700 bg-[#172234] px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-[#A2FFCB] hover:text-[#A2FFCB]"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
