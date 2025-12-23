import { useState, useEffect } from 'react'
import { FaUser, FaLightbulb, FaGraduationCap, FaBriefcase, FaFolderOpen, FaBars, FaTimes } from 'react-icons/fa'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/useLanguage.js';
import { getText } from '../utils/translationHelpers'

function Navbar() {
    const [activeSection, setActiveSection] = useState('about')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { language } = useLanguage()

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

    // Navigation labels with translations
    const navLabels = {
        about: { en: 'About', fr: 'À propos' },
        skills: { en: 'Skills', fr: 'Compétences' },
        education: { en: 'Education', fr: 'Éducation' },
        experience: { en: 'Experience', fr: 'Expérience' },
        projects: { en: 'Projects', fr: 'Projets' }
    }

    const navItems = [
        { id: 'about', icon: FaUser, label: navLabels.about },
        { id: 'skills', icon: FaLightbulb, label: navLabels.skills },
        { id: 'education', icon: FaGraduationCap, label: navLabels.education },
        { id: 'experience', icon: FaBriefcase, label: navLabels.experience },
        { id: 'projects', icon: FaFolderOpen, label: navLabels.projects }
    ]

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10">
                <div className="flex justify-between items-center px-4 py-4">
                    <span className="text-white font-bold text-lg">LT</span>

                    {/* Mobile: Language Switcher + Menu Button */}
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-blue-400 transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
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
                                        <span className="font-medium">{getText(label, language)}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Desktop Side Navigation */}
            <div className="hidden md:flex fixed top-0 h-screen w-[80px] lg:w-[100px] flex-col items-center">
                <ul className="flex-1 space-y-4 lg:space-y-6 flex flex-col items-center justify-center">
                    {navItems.map(({ id, icon: Icon }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`transition-colors ${
                                    activeSection === id
                                        ? 'text-blue-400'
                                        : 'text-white hover:text-blue-400'
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

                {/* Desktop: Language Switcher at bottom */}
                <div className="pb-6 flex justify-center">
                    <LanguageSwitcher />
                </div>
            </div>
        </>
    )
}

export default Navbar