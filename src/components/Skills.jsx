import SectionArrow from "./SectionArrow.jsx";
import skillsData from "../data/skills.json";
import { iconMap } from "../utils/iconMap.js";

function Skills() {
    const renderSkillBox = (categoryName, skills) => {
        return (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-80" key={categoryName}>
                <h1 className="text-xl text-white text-center mb-6 font-mono capitalize">
                    {categoryName}
                </h1>
                <ul className="flex flex-wrap gap-2 justify-center">
                    {skills.map((skill) => {
                        const IconComponent = iconMap[skill.icon];
                        return (
                            <li key={skill.name} className="flex flex-col items-center w-16 sm:w-20 md:w-24">
                                <IconComponent className="text-3xl sm:text-4xl text-white mb-2" />
                                <p className="text-xs sm:text-sm text-white text-center">{skill.name}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    const renderDomainCard = (domain) => {
        const MainIcon = iconMap[domain.icon];
        return (
            <div key={domain.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="grid grid-cols-[25%_75%] gap-6 items-center">
                    {/* Column 1: Domain Name with Icon (25%) */}
                    <div className="flex flex-col items-center justify-center">
                        <MainIcon className="text-5xl text-white mb-3" />
                        <h3 className="text-xl font-bold text-white text-center">
                            {domain.name}
                        </h3>
                    </div>

                    {/* Column 3: Related Skills Icons (50%) */}
                    <div className="flex flex-wrap gap-6 justify-center">
                        {domain.relatedSkills.map((skill) => {
                            const SkillIcon = iconMap[skill.icon];

                            return (
                                <div key={skill.icon} className="flex flex-col items-center">
                                    <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors mb-2">
                                        <SkillIcon className="text-4xl text-white" />
                                    </div>
                                    <p className="text-sm text-white/80 text-center font-medium">{skill.displayName}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    const { domains, ...regularSkills } = skillsData;

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-6xl mx-auto px-4 min-w-4xl">
                    <h2 className="text-5xl font-bold text-white text-center mb-12">
                        Skills
                    </h2>

                    <div className="mt-16">
                        <div className="space-y-6">
                            {domains.map((domain) => renderDomainCard(domain))}
                        </div>
                    </div>

                </div>
            </div>
            <SectionArrow targetSection="education" />
        </section>
    )
}

export default Skills