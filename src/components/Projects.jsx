import { ExternalLink, Code } from 'lucide-react';
import { projectData } from './data/projects.js';
const ProjectCard = ({ project }) => {
    return (
        <div className="relative group">
            {/* Animated Glow Border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_140deg,_rgba(244,244,245,0.16),_rgba(39,39,42,0.2),_rgba(148,163,184,0.35),_rgba(244,244,245,0.16))] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

            {/* Main Card Container */}
            <div className="relative z-10 h-full rounded-2xl border border-zinc-800/80 bg-white/10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">

                {/* Card Header */}
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                    <div className="flex items-start justify-between gap-2">

                        {/* Title + Description */}
                        <div className="space-y-1">
                            <h3 className="tracking-tight text-base md:text-lg font-semibold">
                                {project.title}
                            </h3>
                            <p className="text-xs md:text-sm text-zinc-400">
                                {project.description}
                            </p>
                        </div>

                        {/* Category Badge */}
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-zinc-600/70 bg-transparent text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-300 whitespace-nowrap">
                            <Code className="mr-1 h-3 w-3" />
                            {project.category}
                        </div>

                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 pt-1">

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 border-none bg-zinc-800/80 text-[11px] font-normal text-zinc-100"
                            >
                                {tech}
                            </div>
                        ))}

                        {/* "+X more" badge if needed */}
                        {project.moreCount > 0 && (
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-zinc-600/60 bg-transparent text-[11px] text-zinc-300">
                                +{project.moreCount} more
                            </div>
                        )}
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-zinc-400 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">

                        {/* Category Tag */}
                        <span className="font-mono truncate max-w-[40%]">
              {project.categoryTag}
            </span>

                        {/* Action Links */}
                        <div className="flex items-center gap-3">

                            {/* Live Demo Link (conditional) */}
                            {project.demoUrl && (
                                <a href={project.demoUrl}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-100 hover:text-white transition-colors"
                                >
                                Live Demo <ExternalLink className="h-3.5 w-3.5" /></a>
                            )}

                            {/* GitHub Code Link */}
                            {project.githubUrl && (
                                <a href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                                >
                                    Code <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            )}

                        </div>
                        </div>
                    </div>

                </div>

            {/*</div>*/}
        </div>
    );
};

function Projects() {
    return (
        <section id="projects" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-white text-center mb-12">
                    Projects
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects