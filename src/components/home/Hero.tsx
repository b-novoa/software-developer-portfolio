
import { Link } from 'react-router'
import ArchitecturePanel from './ArchitecturePanel'
import { motion, useReducedMotion } from 'motion/react'
import CodeIdentity from './CodeIdentity'
import { FaArrowRight } from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";
import { CgMail } from "react-icons/cg";

const MotionLink = motion.create(Link)

const technologies = [
    'Java / Spring',
    'Clean Architecture',
    'Software Design',
    'Docker',
]

function Hero() {
    const shouldReduceMotion = useReducedMotion()
    return (
        <section className="grid min-h-[75vh] items-center gap-12 lg:grid-cols-2">
            {/* Columna izquierda */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: shouldReduceMotion ? 0 : 0.9,
                    ease: 'easeOut',
                }}>
                <div className="mb-8 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#A2FFCB]" />

                    <span className="text-sm tracking-widest text-[#A2FFCB]">
                        OPEN TO OPPORTUNITIES
                    </span>
                </div>

                <p className="mb-4 text-sm tracking-widest text-slate-400">
                    HELLO WORLD, I'M
                </p>

                <CodeIdentity />

                <p className="mt-8 text-lg leading-relaxed text-slate-400">
                    I build scalable applications, design clean architectures
                    and turn complex problems into thoughtful software solutions.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <MotionLink
                        to="/projects"
                        whileHover={
                            shouldReduceMotion ? undefined : { scale: 1.05 }
                        }
                        whileTap={
                            shouldReduceMotion ? undefined : { scale: 0.96 }
                        }
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#A2FFCB] px-6 py-3 font-medium text-[#0B101B] transition-colors duration-300 hover:bg-emerald-300"
                    >
                        <LuAppWindow size={16} aria-hidden="true" />
                        <span>View Projects</span>
                        <FaArrowRight size={14} aria-hidden="true"/>
                    </MotionLink>

                    <MotionLink
                        to="/contact"
                        whileHover={
                            shouldReduceMotion ? undefined : { scale: 1.05 }
                        }
                        whileTap={
                            shouldReduceMotion ? undefined : { scale: 0.96 }
                        }
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="inline-flex items-center gap-3 rounded-lg border border-slate-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:border-[#A2FFCB] hover:text-[#A2FFCB]"
                    >
                        <CgMail size={17} aria-hidden="true" />
                        <span>Contact Me</span>
                        <FaArrowRight size={14} aria-hidden="true"/>
                    </MotionLink>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-slate-800 bg-[#172234] px-4 py-2 text-sm text-slate-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Columna derecha */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: shouldReduceMotion ? 0 : 50,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: shouldReduceMotion ? 0 : 0.8,
                    delay: shouldReduceMotion ? 0 : 0.3,
                    ease: 'easeOut',
                }}
            >
                <ArchitecturePanel />
            </motion.div>
        </section>
    )
}

export default Hero
