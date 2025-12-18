import SectionArrow from "./SectionArrow.jsx";
import {educationData} from "./data/education.js"

const EducationItem = ({ data }) => {
    const { university, logo, degree, date, description, gpa } = data

    return (
        <div className="group relative my-[10px] flex w-1/2 justify-end pr-[22px] odd:justify-start odd:self-end odd:pl-[22px] odd:pr-0 sm:pr-[30px] sm:odd:pl-[30px]">

            <div className="
            relative flex w-full flex-row items-center gap-6 rounded-lg bg-white/10 px-8 py-6 shadow-lg border border-gray-700
            group-odd:flex-row-reverse
            after:absolute
            after:right-[-7.5px]
            after:top-[calc(50%-7.5px)]
            after:h-4 after:w-4
            after:rotate-45
            after:content-normal
            after:bg-white
            after:border-r
            after:border-b
            after:border-gray-700

            group-odd:after:left-[-7.5px]
            group-odd:after:right-auto
            group-odd:after:border-l
            group-odd:after:border-t
            group-odd:after:border-r-0
            group-odd:after:border-b-0">

                {/* University Logo */}
                <img
                    src={logo}
                    alt={`${university} logo`}
                    className="w-16 h-16 object-contain flex-shrink-0"
                />

                {/* Content */}
                <div className="flex flex-col text-left group-odd:text-right">
                    <h3 className="font-bold text-3xl text-white">{university}</h3>
                    <p className="text-base text-xl text-gray-300 mt-1">{degree}</p>
                    <time className="text-lg text-gray-400 mt-2">{date}</time>
                </div>

                {/* Timeline dot */}
                <span className="absolute -right-8 top-[calc(50%-10px)] z-50 h-5 w-5 rounded-[50%] border-[3px] border-slate-400 bg-white group-odd:-left-8 group-odd:right-auto sm:-right-10 sm:group-odd:-left-10" />
            </div>
        </div>
    )
}

function Education() {
    return (
        <section id="education" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-screen-xl mx-auto px-4 min-w-6xl">
                    <h2 className="text-5xl font-bold text-white text-center mb-12">
                        Education
                    </h2>
                    <div className="relative my-10 flex flex-col after:absolute after:left-[calc(50%_-_2px)] after:h-full after:w-1 after:content-normal after:bg-slate-400">
                        {educationData.map((data, idx) => (
                            <EducationItem data={data} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
            <SectionArrow targetSection="experience" />
        </section>
    )
}

export default Education