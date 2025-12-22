import profileImg from '../assets/images/cropped-profile.jpg'
import resumePdf from '../assets/resume.pdf'

import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import SectionArrow from "./SectionArrow.jsx";


function AboutMe() {

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-6xl font-extrabold font-mono mb-6 text-white">Luan Tran</h1>
                            <p className="mb-6 text-white">
                                I'm a Master's student in Applied Computer Science with industry experience in automation and web development at Broadsign, Ericsson, and Matrox. My projects include deploying automated CI/CD workflows, multimodal medical imaging applications, and automated language proficiency assessment systems.
                            </p>
                            <p className="mb-6 text-white">
                                I'm currently researching LLM-based agents for linguistic education and seeking opportunities in software development and machine learning.
                            </p>
                            <div className="flex justify-between items-center">
                                <ul className="flex gap-4">
                                    <li>
                                        <a href="https://linkedin.com/in/theluantran" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="text-4xl text-white hover:text-blue-400 transition-colors" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/luantran" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-4xl text-white hover:text-gray-400 transition-colors" />
                                        </a>
                                    </li>
                                </ul>

                                <a
                                    href={resumePdf}
                                    download
                                    className="flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
                                >
                                    <FaFileDownload className="text-xl" />
                                    <span>Download CV</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-screen">
                            <img
                                src={profileImg}
                                alt="Luan Tran profile picture"
                                className="h-1/2 rounded-lg"
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