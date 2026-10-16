
import { useState } from 'react'
import { NavLink } from 'react-router'

const navigation = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const linkStyles = ({ isActive }: { isActive: boolean }) =>
        `transition-colors duration-300 hover:text-[#A2FFCB] ${isActive ? 'text-[#A2FFCB]' : 'text-slate-300'
        }`

    return (

        <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#0B101B]/70 backdrop-blur-md">
            <nav
                aria-label="Main navigation"
                className="mx-auto max-w-6xl px-6"
            >
                <div className="flex items-center justify-between py-5">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-bold text-[#A2FFCB]"
                    >
                        BN.
                    </NavLink>

                    {/* Navegación de escritorio */}
                    <div className="hidden items-center gap-6 md:flex">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={linkStyles}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Botón para móviles */}
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-[#A2FFCB] md:hidden"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen(previous => !previous)}
                    >
                        {isMenuOpen ? (
                            <span aria-hidden="true" className="text-2xl">×</span>
                        ) : (
                            <span aria-hidden="true" className="text-2xl">☰</span>
                        )}
                    </button>
                </div>

                {/* Navegación móvil */}
                <div
                    id="mobile-navigation"
                    className={`pb-6 md:hidden ${isMenuOpen ? 'block' : 'hidden'
                        }`}
                >
                    <div className="flex flex-col gap-5 border-t border-slate-800 pt-6">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={linkStyles}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
