
import { motion, useReducedMotion } from 'motion/react'
import type { Specialty } from '../../data/about'

type SpecialtyCardProps = {
  specialty: Specialty
}

const icons: Record<Specialty['icon'], string> = {
  server: '</>',
  architecture: '◇',
  problem: '✦',
  learning: '↗',
}

function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -5 }
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      className="rounded-xl border border-slate-800 bg-[#172234] p-6 transition-colors hover:border-[#A2FFCB]/50"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#A2FFCB]/10">
        <span
          aria-hidden="true"
          className="font-mono text-xl font-bold text-[#A2FFCB]"
        >
          {icons[specialty.icon]}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white">
        {specialty.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {specialty.description}
      </p>
    </motion.article>
  )
}

export default SpecialtyCard
