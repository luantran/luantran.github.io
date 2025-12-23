import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
    return (
        <>
            {/* Mobile: no grid, Tablet+: grid with sidebar column */}
            {/* Using minmax(0, 1fr) for content column to allow proper shrinking */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 md:grid md:grid-cols-[80px_minmax(0,1fr)] lg:grid-cols-[100px_minmax(0,1fr)]">

                {/* Sidebar Column - only exists on desktop */}
                <aside className="hidden md:block">
                    <Navbar />
                </aside>

                {/* Main Content Column */}
                <main className="min-w-0">
                    {/* Mobile navbar (shows outside grid) */}
                    <div className="md:hidden">
                        <Navbar />
                    </div>

                    <AboutMe />
                    <Skills />
                    <Education />
                    <Experience />
                    <Projects />
                </main>

            </div>
        </>
    )
}

export default App