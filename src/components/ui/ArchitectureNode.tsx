
import { motion, useReducedMotion } from 'motion/react'

type ArchitectureNodeProps = {
    title: string
    description: string
    highlighted?: boolean
}

function ArchitectureNode({
    title,
    description,
    highlighted = false,
}: ArchitectureNodeProps) {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.div
            whileHover={
                shouldReduceMotion ? undefined : { y: -5, scale: 1.02 }
            }
            transition={{
                type: 'spring',
                stiffness: 250,
                damping: 30,
            }}
            className={`rounded-lg border p-4 text-center ${highlighted
                    ? 'border-[#A2FFCB] bg-[#1B3938]'
                    : 'border-slate-700 bg-[#172234]'
                }`}
        >
            <h3 className="text-sm font-semibold text-white">
                {title}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
                {description}
            </p>
        </motion.div>
    )
}

export default ArchitectureNode
