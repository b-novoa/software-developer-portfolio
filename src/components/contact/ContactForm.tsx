
import { useState, type FormEvent } from 'react'

const CONTACT_EMAIL = 'brayannoga@gmail.com'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // Limpiar el error anterior
        setError('')

        // Comprobar campos vacíos
        if (!name.trim() || !email.trim() || !message.trim()) {
            setError('Please complete all fields.')
            return
        }

        // Comprobar longitud del mensaje
        if (message.trim().length < 10) {
            setError('Message must contain at least 10 characters.')
            return
        }

        const subject = encodeURIComponent(
            `Portfolio contact from ${name}`
        )

        const body = encodeURIComponent(
            `${message}\n\nFrom: ${name}\nEmail: ${email}`
        )

        window.location.href =
            `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    }


    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-200"
                >
                    Name
                </label>

                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-slate-700 bg-[#0B101B] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#A2FFCB]"
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                >
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="your@email.com"
                    required
                    maxLength={254}
                    className="w-full rounded-lg border border-slate-700 bg-[#0B101B] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#A2FFCB]"
                />
            </div>

            {/* Mensaje */}
            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                >
                    Message
                </label>

                <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value)
                        setError('')
                    }}
                    placeholder="Tell me about your opportunity or project..."
                    required
                    maxLength={2000}
                    className="w-full resize-y rounded-lg border border-slate-700 bg-[#0B101B] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#A2FFCB]"
                />
            </div>

            {error && (
                <p role="alert" className="text-sm text-red-400">
                    {error}
                </p>
            )}

            <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-[#A2FFCB] px-6 py-3 font-semibold text-[#0B101B] transition-colors hover:bg-emerald-300"
            >
                Prepare Email →
            </button>

            <p className="text-xs text-slate-400">
                This will open your email application to send the message.
            </p>
        </form>
    )
}

export default ContactForm
