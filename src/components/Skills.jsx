import SectionArrow from "./SectionArrow.jsx";
import {skillsData} from "./data/skills.js";
import { iconMap } from "../utils/iconMap.js";

function Skills() {
    const renderDomainCard = (domain) => {
        const MainIcon = iconMap[domain.icon];
        return (
            <div key={domain.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/20 transition-colors">
                {/* Mobile: Stack vertically, Tablet+: Side by side */}
                <div className="flex flex-col md:grid md:grid-cols-[minmax(80px,25%)_1fr] gap-4 md:gap-6 items-center">

                    {/* Domain Name with Icon - keep horizontal on mobile, vertical on desktop */}
                    <div className="flex items-center gap-3 justify-center w-full md:flex-col md:gap-0">
                        {/* ONLY DOMAIN ICON resized: Mobile: 3xl, Small: 4xl, Tablet: 3xl, Desktop: 5xl */}
                        <MainIcon className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl text-white md:mb-2 lg:mb-3" />
                        {/* ONLY DOMAIN NAME resized: Mobile: base, Small: lg, Tablet: base, Desktop: xl */}
                        <h3 className="text-base sm:text-lg md:text-base lg:text-xl font-bold text-white text-center">
                            {domain.name}
                        </h3>
                    </div>

                    {/* Related Skills Icons - KEEP ORIGINAL PROGRESSIVE SIZING */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center w-full">
                        {domain.relatedSkills.map((skill) => {
                            const SkillIcon = iconMap[skill.icon];

                            return (
                                <div key={skill.icon} className="flex flex-col items-center">
                                    <div className="bg-white/10 rounded-lg p-2 sm:p-2.5 md:p-3 hover:bg-white/20 transition-colors mb-1.5 sm:mb-2">
                                        {/* Skills keep progressive sizing: 2xl -> 3xl -> 4xl */}
                                        <SkillIcon className="text-2xl sm:text-3xl md:text-4xl text-white" />
                                    </div>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-white/80 text-center font-medium max-w-[60px] sm:max-w-none">
                                        {skill.displayName}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    const { domains } = skillsData;

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
                        Skills
                    </h2>

                    <div className="mt-8 sm:mt-16">
                        <div className="space-y-4 sm:space-y-6">
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