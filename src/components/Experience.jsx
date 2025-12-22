import SectionArrow from "./SectionArrow.jsx";
import {experienceData} from "./data/experience.js";

const ExperienceItem = ({ data }) => {

    return (
        <div className="relative pl-12 pb-12">
            <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>

            <div className="bg-white/10 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <span className="commit-hash text-yellow-400 text-sm">{data.hash}</span>
                        <h3 className="text-3xl font-semibold text-white mt-1">{data.title}</h3>
                        <h4 className="mt-1"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-md">{data.company}
  </span> </h4>
                    </div>
                    <span className="text-gray-400 text-lg">{data.period}</span>
                </div>
                <div className="space-y-2 mb-4">
                    {data.achievements.map((achievementPoint, index) => (
                        <div key={index} className="text-green-400 text-md commit-hash">
                            <span className="mr-2">+</span>{achievementPoint}
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/50">
                    {data.tech.map((techPoint, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">{techPoint}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Experience() {
    return (
        <section id="experience" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full ">
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-5xl font-bold text-white text-center mb-12">
                        Work Experience
                    </h2>

                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>

                        {experienceData.map((experience) => (
                            <ExperienceItem key={experience.hash} data={experience} />
                        ))}
                    </div>
                </div>
            </div>
            <SectionArrow targetSection="projects"/>
        </section>
    )
}

export default Experience