
import { motion, useReducedMotion } from 'motion/react'
import ContactForm from '../components/contact/ContactForm'
import { profile } from '../data/profile'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

function Contact() {
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
        01 / CONTACT
      </p>

      <h1 className="text-4xl font-bold text-white md:text-6xl">
        Let's build something{' '}
        <span className="text-[#A2FFCB]">great.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        Have an opportunity, an interesting project
        or just want to talk about software?
        I'd love to hear from you.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-slate-800 bg-[#172234] p-6">
            <h2 className="text-xl font-semibold text-white">
              Get in touch
            </h2>

            <p className="mt-4 text-slate-400">
              The easiest way to reach me is by email.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block break-all text-[#A2FFCB] hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#172234] p-6">
            <h2 className="text-xl font-semibold text-white">
              Professional profiles
            </h2>

            <div className="mt-5 flex flex-wrap gap-5">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-[#A2FFCB]"
              >
                <FaGithub size={22} aria-hidden="true" />
                <span>GitHub</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-[#A2FFCB]"
              >
                <FaLinkedin size={22} aria-hidden="true" />
                <span>LinkedIn</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="rounded-2xl border border-slate-800 bg-[#172234] p-6 md:p-8">
          <h2 className="mb-6 text-xl font-semibold text-white">
            Send a message
          </h2>

          <ContactForm />
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
