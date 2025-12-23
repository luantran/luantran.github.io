import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import SectionArrow from "./SectionArrow.jsx"
import { useLanguage } from '../contexts/useLanguage.js'
import { getText } from '../utils/translationHelpers.js'
import { aboutData } from './data/about.js'

function AboutMe() {
    const { language } = useLanguage()

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-between pt-16 md:pt-0">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono mb-4 sm:mb-6 text-white">
                                {aboutData.name}
                            </h1>
                            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white">
                                {getText(aboutData.description1, language)}
                            </p>
                            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white">
                                {getText(aboutData.description2, language)}
                            </p>
                            <div className="flex flex-row sm:flex-row justify-between items-center gap-4">
                                <ul className="flex gap-4">
                                    <li>
                                        <a href="https://linkedin.com/in/theluantran" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="text-3xl sm:text-4xl text-white hover:text-blue-400 transition-colors" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/luantran" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-3xl sm:text-4xl text-white hover:text-gray-400 transition-colors" />
                                        </a>
                                    </li>
                                </ul>

                                <a
                                    href={aboutData.resume}
                                    download
                                    className="flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold text-sm sm:text-base"
                                >
                                    <FaFileDownload className="text-lg sm:text-xl" />
                                    <span>{getText(aboutData.downloadCV, language)}</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-8 md:mt-0">
                            <img
                                src={aboutData.image}
                                alt="Luan Tran profile picture"
                                className="h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SectionArrow targetSection="skills" />
        </section>
    )
}

export default AboutMe