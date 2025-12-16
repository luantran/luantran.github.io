import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {

return (
    <>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <Navbar />
            <div className="relative z-10">
                <AboutMe />
                <Skills />
                <Education />
                <Experience />
                <Projects />
            </div>
        </div>
    </>
)
}

export default App
