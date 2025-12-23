import SectionArrow from "./SectionArrow.jsx";
import { experienceData } from "./data/experience.js";
import { useLanguage } from '../contexts/useLanguage.js';
import { getText, getArray } from '../utils/translationHelpers';

const ExperienceItem = ({ data, language }) => {
    return (
        <div className="relative pl-8 sm:pl-10 md:pl-12 pb-8 sm:pb-10 md:pb-12">
            <div className="absolute left-2 sm:left-2.5 top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>

            <div className="bg-white/10 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gray-600 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div className="min-w-0 flex-1">
                        <span className="commit-hash text-yellow-400 text-xs sm:text-sm">{data.hash}</span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-1 break-words">
                            {getText(data.title, language)}
                        </h3>
                        <h4 className="mt-1">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs sm:text-sm md:text-md inline-block">
                                {data.company}
                            </span>
                        </h4>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base md:text-lg whitespace-nowrap">
                        {getText(data.period, language)}
                    </span>
                </div>
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {getArray(data.achievements, language).map((achievementPoint, index) => (
                        <div key={index} className="text-green-400 text-xs sm:text-sm md:text-md commit-hash break-words">
                            <span className="mr-2">+</span>{achievementPoint}
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/50">
                    {data.tech.map((techPoint, index) => (
                        <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-700 text-gray-300 rounded-full text-[10px] sm:text-xs">
                            {techPoint}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Experience() {
    const { language } = useLanguage();

    const sectionTitle = {
        en: "Work Experience",
        fr: "Expérience Professionnelle"
    };

    return (
        <section id="experience" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
                        {getText(sectionTitle, language)}
                    </h2>

                    <div className="relative">
                        <div className="absolute left-3 sm:left-3.5 md:left-4 top-0 bottom-0 w-1 sm:w-1.5 bg-gray-300"></div>

                        {experienceData.map((experience) => (
                            <ExperienceItem key={experience.hash} data={experience} language={language} />
                        ))}
                    </div>
                </div>
            </div>
            <SectionArrow targetSection="projects"/>
        </section>
    )
}

export default Experience