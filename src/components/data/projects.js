import medicalImagingGif from '../../assets/gifs/multimodal_ui.gif';
import medicalImagingPng from '../../assets/images/multimodal.png';
import methodologyPng from '../../assets/images/methodology.png';
import dashboardGif from '../../assets/gifs/dashboard.gif';
import dashboardPng from '../../assets/images/dashboard.png';
import notilyticsGif from '../../assets/gifs/notilytics.gif';
import notilyticsPng from '../../assets/images/notilytics.png';
import portfolioGif from '../../assets/gifs/portfolio.gif';
import portfolioPng from '../../assets/images/portfolio.png';

export const projectData = [
    {
        title: "One Model to Grade them All",
        description: "Comparative study of ML approaches for automatic CEFR level classification of English learner writing. Trained on EFCamDAT corpus and evaluated on multiple out-of-domain corpora (Write & Improve, ICNALE, ASAG) to assess cross-corpus generalization.",
        category: "NLP / Education",
        techStack: ["Python", "PyTorch", "NLP", "Transformers", "Word2Vec", "Machine Learning", "RoBERTa"],
        features: [
            "Processes and combines four major learner corpora with comprehensive evaluation across in-domain and out-of-domain datasets using multiple metrics",
            "Implements and compares Naive Bayes (traditional ML), Word2Vec (neural embeddings), and RoBERTa (transformer-based) with ablation studies",
            "End-to-end workflow from data extraction to visualization with provenance tracking, stratified sampling, and automated generation of comparison charts and performance tables"
        ],
        image: methodologyPng,
        thumbnail: methodologyPng,
        demoUrl: "https://huggingface.co/collections/theluantran/cefr-classifiers-one-model-to-grade-them-all",
        githubUrl: "https://github.com/luantran/One-model-to-grade-them-all"
    },
    {
        title: "Multimodal Torso Image Reconstruction",
        description: "A PyQt5/VTK-based desktop application for visualizing and registering multimodal medical imaging data to create 3D models of the human torso for scoliosis surgical planning.",
        category: "Medical Imaging",
        techStack: ["Python", "PyQt5", "VTK", "Medical Imaging", "3D Visualization", "Image Registration","Desktop Application"],
        features: [
            "Load and display MRI , X-Ray, and surface topography in an interactive 3D environment",
            "Perform rigid or articulated registration using anatomical landmarks to align and fuse multiple imaging modalities",
            "Navigate through MRI slice planes, manipulate 3D models with rotation/zoom/pan controls, and export registered models for surgical planning"
        ],
        image: medicalImagingGif,
        thumbnail: medicalImagingPng,
        demoUrl: null,
        githubUrl: "https://github.com/luantran/MultimodalTorsoImageReconstruction"
    },
    {
        title: "Anime Dashboard Extension",
        description: "A lightweight, customizable browser extension that transforms your new-tab page into an elegant anime-themed dashboard with full-screen wallpapers, carousel mode with adjustable intervals, and responsive settings sidebar.",
        category: "Browser Extension",
        techStack: ["JavaScript", "React", "Vite", "Bootstrap", "Chrome Extension"],
        features: [
            "Automatically loads anime wallpapers from GitHub repository with local storage caching for performance optimization",
            "Adjustable display intervals and smooth transitions between wallpapers with user-controlled timing settings",
            "Off-canvas settings panel for folder navigation, interval management, and wallpaper collection browsing",
            "To-do list with caching for persistence"
        ],
        image: dashboardGif,
        thumbnail: dashboardPng,
        demoUrl: null,
        githubUrl: "https://github.com/luantran/anime-dashboard-extension"
    },
    {
        title: "Notylitics",
        description: "Reactive news analytics platform with real-time article streaming, sentiment analysis, and readability metrics. Built with Play Framework, Pekko Actors, and WebSockets for live updates and comprehensive analytics.",
        category: "Web Application",
        techStack: ["Java", "Play Framework", "Pekko Actors", "WebSockets", "Reactive Programming"],
        features: [
            "Real-time news streaming: live article updates with sentiment detection and Flesch-Kincaid readability metrics",
            "Actor-based concurrency using Pekko Actors with asynchronous CompletableFutures for non-blocking operations",
            "Complete Continuous Integration workflow with 100% Jacoco coverage"
        ],
        image: notilyticsGif,
        thumbnail: notilyticsPng,
        demoUrl: null,
        githubUrl: "https://github.com/luantran/Notilytics"
    },
    {
        title: "Personal Portfolio Website (v1)",
        description: "First version of my personal portfolio website built with React and Vite",
        category: "Portfolio",
        techStack: ["JavaScript", "React", "Vite", "TailwindCSS", "GitHub Pages", "Github Actions"],
        features: [
            "Modern development stack: Built with React and Vite",
            "Responsive design",
            "GitHub Pages deployment: Automated CI/CD workflow for seamless deployment and hosting on GitHub Pages"
        ],
        image: portfolioGif,
        thumbnail: portfolioPng,
        demoUrl: "https://luantran.github.io",
        githubUrl: "https://github.com/luantran/luantran.github.io"
    }
];