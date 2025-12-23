import { useState, useEffect } from 'react'
import { FaUser, FaLightbulb, FaGraduationCap, FaBriefcase, FaFolderOpen, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [activeSection, setActiveSection] = useState('about')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'education', 'experience', 'projects']

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = () => {
        setIsMobileMenuOpen(false)
    }

    const navItems = [
        { id: 'about', icon: FaUser, label: 'About' },
        { id: 'skills', icon: FaLightbulb, label: 'Skills' },
        { id: 'education', icon: FaGraduationCap, label: 'Education' },
        { id: 'experience', icon: FaBriefcase, label: 'Experience' },
        { id: 'projects', icon: FaFolderOpen, label: 'Projects' }
    ]

    return (
        <>
            {/* Mobile Top Bar (visible on screens smaller than md) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/50">
                <div className="flex justify-between items-center px-4 py-4">
                    <span className="text-white font-bold text-lg">Portfolio</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white hover:text-blue-400 transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-gray-900/99 backdrop-blur-md border-b border-white/10">
                        <ul className="py-2">
                            {navItems.map(({ id, icon: Icon, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={handleNavClick}
                                        className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                                            activeSection === id
                                                ? 'text-blue-400 bg-blue-400/10'
                                                : 'text-white hover:text-blue-400 hover:bg-white/5'
                                        }`}
                                    >
                                        <Icon className="text-xl" />
                                        <span className="font-medium">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Desktop Side Navigation - fixed positioning within the sidebar column */}
            <div className="hidden md:block fixed top-1/2 -translate-y-1/2 w-[80px] lg:w-[100px]">
                <ul className="space-y-4 lg:space-y-6 flex flex-col items-center">
                    {navItems.map(({ id, icon: Icon }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`transition-colors ${
                                    activeSection === id ? 'text-blue-400' : 'text-white hover:text-blue-400'
                                }`}
                            >
                                <div className="relative">
                                    <Icon className="text-xl lg:text-2xl" />
                                    {activeSection === id && (
                                        <div className="absolute -inset-2 border-2 border-blue-400 rounded"></div>
                                    )}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar