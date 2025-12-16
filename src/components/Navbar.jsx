import { useState, useEffect } from 'react'
import { FaUser, FaLightbulb, FaGraduationCap, FaBriefcase, FaFolderOpen } from 'react-icons/fa'

function Navbar() {
    const [activeSection, setActiveSection] = useState('about')

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

    return (
        <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 pl-8">
            <ul className="space-y-6">
                <li>
                    <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                        <div className="relative">
                            <FaUser className="text-2xl" />
                            {activeSection === 'about' && (
                                <div className="absolute -inset-2 border-2 border-blue-400 rounded"></div>
                            )}
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#skills" className={`transition-colors ${activeSection === 'skills' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                        <div className="relative">
                            <FaLightbulb className="text-2xl" />
                            {activeSection === 'skills' && (
                                <div className="absolute -inset-2 border-2 border-blue-400 rounded"></div>
                            )}
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#education" className={`transition-colors ${activeSection === 'education' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                        <div className="relative">
                            <FaGraduationCap className="text-2xl" />
                            {activeSection === 'education' && (
                                <div className="absolute -inset-2 border-2 border-blue-400 rounded"></div>
                            )}
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#experience" className={`transition-colors ${activeSection === 'experience' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                        <div className="relative">
                            <FaBriefcase className="text-2xl" />
                            {activeSection === 'experience' && (
                                <div className="absolute -inset-2 border-2 border-blue-400 rounded"></div>
                            )}
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                        <div className="relative">
                            <FaFolderOpen className="text-2xl" />
                            {activeSection === 'projects' && (
                                <div className="absolute -inset-2 border-2 border-blue-400 rounded"></div>
                            )}
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar