import profileImg from '../assets/cropped-profile.jpg'
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et urna in quam vehicula pretium vitae sed lorem.
                                Phasellus egestas convallis euismod. Cras magna magna, vestibulum quis iaculis non, mattis vel nulla.
                                Praesent dictum at purus vel fringilla. Nulla feugiat tincidunt pulvinar. Donec posuere nisl vel molestie blandit.
                                Sed ornare velit eu vestibulum lacinia. Fusce et eros dui. Sed ante mi, ornare et cursus scelerisque, egestas et risus.
                                Etiam odio ex, maximus ac imperdiet vitae, bibendum ut ipsum.
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