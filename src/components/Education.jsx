import SectionArrow from "./SectionArrow.jsx";
import { educationData } from "./data/education.js";
import { useLanguage } from '../contexts/useLanguage.js';
import { getText } from '../utils/translationHelpers';

const EducationItem = ({ data, index, language }) => {
    const { university, logo, degree, date, honors} = data;

    return (
        <div className={`group relative ${index > 0 ? 'my-[5px] sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16' : 'my-[5px] sm:my-[3px]'} flex w-full sm:w-1/2 justify-start sm:justify-end sm:pr-[22px] sm:odd:justify-start sm:odd:self-end sm:odd:pl-[22px] sm:odd:pr-0 md:pr-[30px] md:odd:pl-[30px]`}>

            <div className="
            relative flex w-full flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 rounded-lg bg-white/10 px-4 sm:px-5 md:px-8 py-3 sm:py-4 md:py-6 shadow-lg border border-gray-700
            sm:group-odd:flex-row-reverse
            after:content-none
            sm:after:content-normal
            sm:after:absolute
            sm:after:right-[-7.5px]
            sm:after:top-[calc(50%-7.5px)]
            sm:after:h-4 sm:after:w-4
            sm:after:rotate-45
            sm:after:bg-white
            sm:after:border-r
            sm:after:border-b
            sm:after:border-gray-700

            sm:group-odd:after:left-[-7.5px]
            sm:group-odd:after:right-auto
            sm:group-odd:after:border-l
            sm:group-odd:after:border-t
            sm:group-odd:after:border-r-0
            sm:group-odd:after:border-b-0">

                {/* University Logo */}
                <img
                    src={logo}
                    alt={`${getText(university, language)} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0"
                />

                {/* Content */}
                <div className="flex flex-col text-left sm:group-odd:text-right min-w-0 flex-1">
                    <h3
                        className="font-bold text-white leading-tight break-words"
                        style={{ fontSize: 'clamp(1rem, 2.5vw + 0.5rem, 1.875rem)' }}
                    >
                        {getText(university, language)}
                    </h3>
                    <p
                        className="text-gray-300 mt-0.5 sm:mt-1 break-words"
                        style={{ fontSize: 'clamp(0.75rem, 1.5vw + 0.3rem, 1.25rem)' }}
                    >
                        {getText(degree, language)}
                    </p>
                    {honors && (
                        <p
                            className="text-gray-300 mt-0.5 sm:mt-1 break-words"
                            style={{ fontSize: 'clamp(0.6rem, 1.2vw + 0.25rem, 1rem)', fontStyle: 'italic' }}
                        >
                            {getText(honors, language)}
                        </p>
                    )}
                    <time
                        className="text-gray-400 mt-0.5 sm:mt-1 md:mt-2 break-words"
                        style={{ fontSize: 'clamp(0.7rem, 1.2vw + 0.25rem, 1.125rem)' }}
                    >
                        {date}
                    </time>
                </div>

                {/* Timeline dot */}
                <span className="hidden sm:block absolute -right-8 top-[calc(50%-10px)] z-50 h-5 w-5 rounded-[50%] border-[3px] border-slate-400 bg-white group-odd:-left-8 group-odd:right-auto md:-right-10 md:group-odd:-left-10" />
            </div>
        </div>
    );
}

function Education() {
    const { language } = useLanguage();

    const sectionTitle = {
        en: "Education",
        fr: "Éducation"
    };

    return (
        <section id="education" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
                        {getText(sectionTitle, language)}
                    </h2>
                    {/* Timeline */}
                    <div className="relative my-6 sm:my-10 flex flex-col after:absolute after:left-[calc(50%_-_2px)] after:h-full after:w-1 after:bg-slate-400 after:opacity-0 sm:after:opacity-100">
                        {educationData.map((data, idx) => (
                            <EducationItem data={data} index={idx} language={language} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education