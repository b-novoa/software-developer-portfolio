
import { Link } from 'react-router'
import { profile } from '../../data/profile'

const navigation = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
]

function Footer() {
    return (
        <footer className="border-t border-slate-800/60 bg-transparent">
            <div className="mx-auto max-w-6xl px-6 py-12">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Identidad */}
                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold text-[#A2FFCB]"
                        >
                            BN.
                        </Link>

                        <h2 className="mt-4 font-semibold text-white">
                            {profile.displayName}
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            {profile.role}
                        </p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h2 className="font-semibold text-white">
                            Navigation
                        </h2>

                        <div className="mt-4 flex flex-col gap-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="w-fit text-sm text-slate-400 transition-colors hover:text-[#A2FFCB]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Redes sociales */}
                    <div>
                        <h2 className="font-semibold text-white">
                            Connect
                        </h2>

                        <p className="mt-4 text-sm text-slate-400">
                            Let's connect and build something meaningful.
                        </p>

                        <div className="mt-4 flex gap-4">
                            <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-[#A2FFCB]"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href={profile.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-[#A2FFCB]"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* Parte inferior */}
                <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-slate-400">
                        © {new Date().getFullYear()} {profile.displayName}.
                    </p>
                    <p>Built with React & TypeScript.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
