
import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { profile } from '../../data/profile'

const fullName = 'Brahyan Novoa Gamboa'
const fullRole = 'Software Developer'

function CodeIdentity() {
    const [typedCharacters, setTypedCharacters] = useState(0)
    const shouldReduceMotion = useReducedMotion()

    const totalCharacters = fullName.length + fullRole.length

    // Efecto de escritura
    useEffect(() => {
        if (shouldReduceMotion || typedCharacters >= totalCharacters) {
            return
        }

        const timeout = window.setTimeout(() => {
            setTypedCharacters((previous) => previous + 1)
        }, typedCharacters === 0 ? 800 : 70)

        return () => window.clearTimeout(timeout)
    }, [typedCharacters, shouldReduceMotion, totalCharacters])

    // Texto que debe mostrarse en cada momento
    const displayedName = shouldReduceMotion
        ? fullName
        : fullName.slice(0, typedCharacters)

    const displayedRole = shouldReduceMotion
        ? fullRole
        : fullRole.slice(
            0,
            Math.max(0, typedCharacters - fullName.length)
        )

    const nameComplete =
        shouldReduceMotion || typedCharacters >= fullName.length

    return (
        <>
            {/* Título accesible de la página */}
            <h1 className="sr-only">
                Brahyan Novoa Gamboa — Software Engineer
            </h1>

            {/* Identidad visual animada */}
            <div
                aria-hidden="true"
                className="space-y-4 font-mono text-base leading-relaxed sm:text-xl"
            >
                {/* Primera línea */}
                <p className="break-words text-slate-300">
                    <span className="text-violet-400">const</span>{' '}
                    name ={' '}
                    <span className="text-[#A2FFCB]">
                        "{displayedName}"
                    </span>
                    ;

                    {!nameComplete && (
                        <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[#A2FFCB] align-middle" />
                    )}
                </p>

                {/* Segunda línea */}
                {nameComplete && (
                    <p className="break-words text-slate-300">
                        <span className="text-violet-400">const</span>{' '}
                        role ={' '}
                        <span className="text-[#A2FFCB]">
                            "{displayedRole}"
                        </span>
                        ;

                        {!shouldReduceMotion && (
                            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[#A2FFCB] align-middle" />
                        )}
                    </p>
                )}
            </div>
        </>
    )
}

export default CodeIdentity
