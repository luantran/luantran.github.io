import resumePdf from '../../assets/resume.pdf'
import profileImg from '../../assets/images/cropped-profile.jpg'

export const aboutData = {
    name: "Luan Tran", // Name doesn't need translation
    description1: {
        en: "I'm a Master's student in Applied Computer Science with industry experience in automation and web development " +
            "at Broadsign, Ericsson, and Matrox. My projects include deploying automated CI/CD workflows," +
            " multimodal medical imaging applications, and automated language proficiency assessment systems.",
        fr: "Je suis étudiant en maîtrise en informatique appliquée avec une expérience industrielle en automatisation et développement web " +
            "chez Broadsign, Ericsson et Matrox. Mes projets incluent le déploiement de workflows CI/CD automatisés," +
            " des applications d'imagerie médicale multimodale et des systèmes d'évaluation automatique de compétence linguistique."
    },
    description2: {
        en: "I'm currently researching LLM-based agents for linguistic education and seeking opportunities in " +
            "software development and machine learning.",
        fr: "Je fais actuellement de la recherche sur les agents basés sur les LLM pour l'enseignement linguistique et je recherche des opportunités en " +
            "développement logiciel et apprentissage automatique."
    },
    downloadCV: {
        en: "Download CV",
        fr: "Télécharger CV"
    },
    resume: resumePdf,
    image: profileImg
}