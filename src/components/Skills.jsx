import SectionArrow from "./SectionArrow.jsx";

function Skills() {
    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-between">
            <div className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-white text-center mb-12">
                        Skills
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        </div>
                    </div>
                </div>
            </div>
            <SectionArrow targetSection="education" />
        </section>
    )
}

export default Skills