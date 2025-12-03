import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  en: {
    translation: {
      // Navbar
      "Inicio": "Home",
      "Sobre mí": "About Me",
      "Proyectos": "Projects",
      "Habilidades": "Skills",
      "Certificados": "Certificates",
      "Contacto": "Contact",
      "Idioma": "Language",
      "Descargar CV": "Download CV",
      "Comenzar": "Start",

      // Modal CV
      "Selecciona el CV": "Select the CV",
      "CV en Español": "CV in Spanish",
      "CV en Inglés": "CV in English",
      "Descargar": "Download",
      "Cancelar": "Cancel",
      "Elige la versión del CV que deseas descargar": "Choose the CV version you want to download",

      // Contact
      "Email": "Email",
      "Ubicación": "Location",
      "Conectemos": "Let's connect",
      "Ver proyectos": "Check out projects",
      "Tu ciudad, país": "Your city, country",
      "Visitar": "Visit",
      "Envíame un mensaje": "Send me a message",
      "Nombre": "Name",
      "Asunto": "Subject",
      "Mensaje": "Message",
      "Enviar Mensaje": "Send Message",

      // Welcome
      "Portada del portfolio": "Portfolio cover",
      "¡Bienvenid@!": "Welcome!",

      // Home
      "¡Hola! Mi nombre es Aday": "Hello! My name is Aday",
      "Programar y diseñar experiencias web me motiva muchísimo. Es un entorno tan creativo que siempre estoy construyendo algo nuevo. Aquí encontrarás la recopilación de todos mis proyectos.": "Programming and designing web experiences motivates me immensely. It's such a creative environment that I'm always building something new. Here you'll find the compilation of all my projects.",
      "Conóceme Mejor": "Get to Know Me Better",

      // About
      "Sobre Mí": "About Me",
      "PERFIL PROFESIONAL": "PROFESSIONAL PROFILE",
      "Desarrolladora Web Full Stack y DevOps, finalizando el Módulo de Grado Superior de Desarrollo de Aplicaciones Web (DAW). Siempre centrada en el aprendizaje continuo.": "Full Stack Web Developer and DevOps, finishing the Higher Degree Module in Web Application Development (DAW). Always focused on continuous learning.",
      "Full Stack": "Full Stack",
      "DevOps": "DevOps",
      "APTITUDES": "SKILLS",
      "Soy una persona resolutiva, constante y comprometida. Tengo facilidad para organizarme, trabajar de forma autónoma y tomar decisiones con criterio cuando la situación lo requiere.": "I am a resourceful, constant and committed person. I am good at organizing myself, working autonomously and making decisions with criteria when the situation requires it.",
      "Resolutiva": "Resourceful",
      "Constante": "Constant",
      "Organizada": "Organized",
      "Empática": "Empathic",
      "Trabajo en equipo": "Teamwork",
      "OBJETIVO PROFESIONAL": "PROFESSIONAL GOAL",
      "Incorporarme a un entorno de desarrollo donde pueda seguir creciendo, aportar valor desde el inicio y enfrentar, y afrontar superando, retos reales.": "Join a development environment where I can continue growing, add value from the start and face, and overcome, real challenges.",
      "Crecimiento": "Growth",
      "Aportar valor": "Add value",
      "Retos reales": "Real challenges",
      "Evolución profesional": "Professional evolution",
      "EXPERIENCIA LABORAL": "WORK EXPERIENCE",
      "Trayectoria previa en los sectores de hostelería, sanidad y comercio, desempeñando funciones administrativas y de atención al cliente.": "Previous experience in the hospitality, healthcare and commerce sectors, performing administrative and customer service functions.",
      "Administración": "Administration",
      "Atención al cliente": "Customer service",
      "Autogestión": "Self-management",
      "Resolución de incidencias": "Issue resolution",
      "Comprometida con el aprendizaje continuo y la excelencia en el desarrollo de software": "Committed to continuous learning and excellence in software development",

      // Projects
      "Personales": "Personal",
      "Mis Proyectos": "My Projects",
      "Explora mi trabajo organizado por categorías": "Explore my work organized by categories",
      "👩🏼‍🎓 Bootcamp": "👩🏼‍🎓 Bootcamp",
      "Full Stack & DevOps": "Full Stack & DevOps",
      "Proyectos desarrollados durante el bootcamp de Factoria F5, tecnologías modernas y metodologías ágiles.": "Projects developed during the Factoria F5 bootcamp, modern technologies and agile methodologies.",
      "👾 Personales": "👾 Personal",
      "Iniciativas propias": "Own initiatives",
      "Proyectos independientes donde exploro nuevas tecnologías y desarrollo mis propias ideas.": "Independent projects where I explore new technologies and develop my own ideas.",
      "TECNOLOGÍAS DESTACADAS:": "FEATURED TECHNOLOGIES:",
      "11 Proyectos": "11 Projects",
      "6 Proyectos": "6 Projects",
      "👉 Selecciona una categoría para explorar los proyectos": "👉 Select a category to explore the projects",

      // Project details
      "Volver": "Back",
      "Proyectos Bootcamp": "Bootcamp Projects",
      "Del código básico a aplicaciones full-stack": "From basic code to full-stack applications",
      "⭐ Destacado": "⭐ Featured",
      "Equipo": "Team",
      "TECNOLOGÍAS:": "TECHNOLOGIES:",
      "CARACTERÍSTICAS:": "FEATURES:",
      "Web": "Web",
      "Demo": "Demo",
      "Código": "Code",
      "Demo del Proyecto": "Project Demo",

      // Bootcamp projects
      "SprintFlow": "SprintFlow",
      "Sistema de gestión ágil para equipos de desarrollo con métricas en tiempo real.": "Agile management system for development teams with real-time metrics.",
      "El Gran Azul": "The Great Blue",
      "Aplicación web sobre la biología marina desarrollada con TypeScript y Material UI.": "Web application about marine conservation developed with TypeScript and Material UI.",
      "Noctiluca Backend": "Noctiluca Backend",
      "API RESTful para posts de mariposas con MySQL/MongoDB. Fui Scrum Master y Developer.": "RESTful API for butterfly posts with MySQL/MongoDB. I was Scrum Master and Developer.",
      "Tarot Científico": "Scientific Tarot",
      "Aplicación React que combina cartas de tarot con científicas históricas.": "React application that combines tarot cards with historical scientists.",
      "Sanimed Hackathon": "Sanimed Hackathon",
      "Solución digital para gestión médica desarrollada durante hackathon. **Proyecto finalista**.": "Digital solution for medical management developed during hackathon. **Finalist project**.",
      "Chompy The Game": "Chompy The Game",
      "Juego educativo para aprender programación orientada a objetos con Canvas.": "Educational game to learn object-oriented programming with Canvas.",
      "Nectara": "Nectara",
      "Proyecto full-stack para gestión de contenidos y recursos digitales.": "Full-stack project for content management and digital resources.",
      "Outdoor Cinema CRUD": "Outdoor Cinema CRUD",
      "Sistema de gestión para cine al aire libre con operaciones CRUD completas.": "Management system for outdoor cinema with complete CRUD operations.",
      "Book App Vanilla": "Book App Vanilla",
      "Aplicación de gestión de libros desarrollada con JavaScript vanilla.": "Book management application developed with vanilla JavaScript.",
      "Nitrógeno": "Nitrogen",
      "Web educativa sobre las propiedades del nitrógeno. Desarrollé la sección Historia.": "Educational website about nitrogen properties. I developed the History section.",
      "Piedras Angulares": "Cornerstones",
      "Web homenaje a mujeres pioneras en la ciencia oceánica.": "Tribute website to pioneering women in ocean science.",

      // Project features
      "Autenticación JWT": "JWT Authentication",
      "Gestión de proyectos": "Project Management",
      "Métricas en tiempo real": "Real-time Metrics",
      "TypeScript": "TypeScript",
      "Material UI": "Material UI",
      "Consumo de APIs": "API Consumption",
      "Doble base de datos": "Dual Database",
      "Cloudinary": "Cloudinary",
      "Componentes React": "React Components",
      "Estado con Hooks": "State with Hooks",
      "Diseño responsive": "Responsive Design",
      "Desarrollo ágil": "Agile Development",
      "Trabajo en equipo": "Teamwork",
      "Innovación": "Innovation",
      "Programación OOP": "OOP Programming",
      "VideoGame": "Video Game",
      "Animaciones": "Animations",
      "Stack MERN": "MERN Stack",
      "API REST": "REST API",
      "Operaciones CRUD": "CRUD Operations",
      "Interfaz Bootstrap": "Bootstrap Interface",
      "Gestión de estado": "State Management",
      "Local Storage": "Local Storage",
      "Interfaz intuitiva": "Intuitive Interface",
      "7 secciones temáticas": "7 Thematic Sections",
      "Trabajo colaborativo": "Collaborative Work",
      "Diseño responsivo": "Responsive Design",
      "Efectos 3D CSS": "3D CSS Effects",
      "Navegación semántica": "Semantic Navigation",

      // Personal projects section
      "Píldoras Formativas & Personales": "Formative Pills & Personal Projects",
      "Píldoras formativas y más": "Training modules and more",
      "Personal": "Personal",
      "Básico": "Basic",
      "Intermedio": "Intermediate",
      "Avanzado": "Advanced",
      "💡 Sobre las Píldoras Formativas": "💡 About Formative Pills",
      "Estas píldoras representan ejercicios prácticos de aprendizaje donde he profundizado en tecnologías específicas, desde fundamentos web hasta conceptos avanzados de desarrollo.": "These pills represent practical learning exercises where I have deepened specific technologies, from web fundamentals to advanced development concepts.",

      // Personal projects
      "Yuki": "Yuki",
      "Aplicación web desarrollada como proyecto personal para gestión de tareas y organización.": "Web application developed as a personal project for task management and organization.",
      "Demo Ibai": "Ibai Demo",
      "Proyecto de demostración creado para postular a vacante, con efectos visuales y animaciones.": "Demo project created to apply for a position, with visual effects and animations.",
      "Pastelería Polimórfica": "Polymorphic Bakery",
      "Píldora formativa de Polimorfismo en TypeScript aplicado a una pastelería.": "Formative pill on Polymorphism in TypeScript applied to a bakery.",
      "CV Material UI": "Material UI CV",
      "CV interactivo realizado con React y Material UI con animaciones y estilo moderno.": "Interactive CV made with React and Material UI with animations and modern style.",
      "Métodos HTTP": "HTTP Methods",
      "Guía completa sobre HTTP: URL, comunicación cliente-servidor, métodos y códigos de estado.": "Complete guide about HTTP: URL, client-server communication, methods and status codes.",
      "Arquitecturas CSS": "CSS Architectures",
      "Píldora formativa sobre metodologías CSS: BEM, Suit y Atomic con ejemplos prácticos.": "Formative pill about CSS methodologies: BEM, Suit and Atomic with practical examples.",

      // Personal project features
      "CRUD completo": "Complete CRUD",
      "Base de datos NoSQL": "NoSQL Database",
      "Efectos visuales": "Visual Effects",
      "Animaciones CSS": "CSS Animations",
      "Interacción musical": "Musical Interaction",
      "Diseño creativo": "Creative Design",
      "Polimorfismo": "Polymorphism",
      "Interfaces TypeScript": "TypeScript Interfaces",
      "Patrones OOP": "OOP Patterns",
      "Código tipado": "Typed Code",
      "Design System": "Design System",
      "Componentes reutilizables": "Reusable Components",
      "Guía interactiva": "Interactive Guide",
      "Test de conocimientos": "Knowledge Test",
      "Ejemplos prácticos": "Practical Examples",
      "Fundamentos web": "Web Fundamentals",
      "BEM Methodology": "BEM Methodology",
      "Suit CSS": "Suit CSS",
      "Atomic Design": "Atomic Design",
      "Código escalable": "Scalable Code",

      // Categories
      "personal": "personal",
      "demostracion": "demo",
      "typescript": "typescript",
      "frontend": "frontend",
      "fundamentos": "fundamentals",
      "css": "css",

      // Skills
      "Habilidades Técnicas": "Technical Skills",
      "Tecnologías y herramientas que domino": "Technologies and tools I master",
      "Frontend": "Frontend",
      "Backend": "Backend",
      "Bases de datos": "Databases",
      "Testing": "Testing",
      "Seguridad": "Security",
      "Diseño": "Design",
      "Herramientas": "Tools",
      "Buenas prácticas": "Best Practices",
      "DevOps": "DevOps",

      // Technologies
      "HTML": "HTML",
      "CSS": "CSS",
      "JavaScript": "JavaScript",
      "TypeScript": "TypeScript",
      "Material UI": "Material UI",
      "Tailwind": "Tailwind",
      "React": "React",
      "React Router": "React Router",
      "React Hook Form": "React Hook Form",
      "Node.js": "Node.js",
      "Express.js": "Express.js",
      "Sequelize": "Sequelize",
      "Mongoose": "Mongoose",
      "express-validator": "express-validator",
      "MySQL": "MySQL",
      "MongoDB": "MongoDB",
      "Jest": "Jest",
      "Supertest": "Supertest",
      "Vitest": "Vitest",
      "TDD": "TDD",
      "JWT": "JWT",
      "Bcrypt": "Bcrypt",
      "Figma": "Figma",
      "Canva": "Canva",
      "Photoshop": "Photoshop",
      "Git": "Git",
      "Github": "Github",
      "VSCode": "VSCode",
      "Postman": "Postman",
      "Scrum": "Scrum",
      "Jira": "Jira",
      "Clean Code": "Clean Code",
      "MVC": "MVC",
      "SOLID": "SOLID",
      "POO": "OOP",
      "Cultura DevOps": "DevOps Culture",
      "CI/CD": "CI/CD",
      "Docker": "Docker",
      "Docker Hub": "Docker Hub",
      "Terminal": "Terminal",
      "Gitflow": "Gitflow",
      "Trunk": "Trunk",
      "Conventional commits": "Conventional commits",
      "Github Projects": "Github Projects",
      "Github Actions": "Github Actions",

      // Certificates
      "Certificaciones y Formación": "Certifications and Training",
      "Bootcamp Fullstack Developer": "Fullstack Developer Bootcamp",
      "Tu portafolio como desarrollador": "Your Portfolio as a Developer",
      "Finalista - Hackathon": "Finalist - Hackathon",
      "Fundamentos para docentes": "Fundamentals for Teachers",
      "Habilidades de presentación": "Presentation Skills",
      "IA Generativa": "Generative AI",
      "Trabajo en equipo": "Teamwork",

      // Certificate issuers
      "Factoría F5": "Factoría F5",
      "Capacítate para el Empleo": "Train for Employment",
      "Somos F5 y Sanitas": "Somos F5 and Sanitas",
      "Canva": "Canva",

      // Certificate descriptions
      "Formación intensiva en desarrollo fullstack con tecnologías modernas y metodologías ágiles.": "Intensive training in fullstack development with modern technologies and agile methodologies.",
      "Identificación de información necesaria, estructura y herramientas disponibles para la gestión de un portafolio digital para promocionar tu perfil como desarrollador.": "Identification of necessary information, structure and available tools for managing a digital portfolio to promote your profile as a developer.",
      "Diploma Finalista en la Hackathon de 48h, en la que construimos una web para controlar la toma de medicamentos.": "Finalist Diploma in the 48h Hackathon, where we built a website to control medication intake.",
      "Curso que enseña a utilizar las herramientas esenciales de Canva para crear contenidos visuales, organizar proyectos y trabajar de forma eficiente en equipo.": "Course that teaches how to use essential Canva tools to create visual content, organize projects and work efficiently as a team.",
      "Capacitación en habilidades para estructurar y realizar presentaciones efectivas, controlar la información, manejar el protocolo y usar recursos adecuados.": "Training in skills to structure and deliver effective presentations, control information, handle protocol and use appropriate resources.",
      "Certificación en inteligencia artificial generativa y técnicas de prompt engineering.": "Certification in generative artificial intelligence and prompt engineering techniques.",
      "Formación en trabajo en equipo: desarrollo de habilidades para coordinar roles, seguir etapas clave y alcanzar objetivos comunes bajo un liderazgo efectivo.": "Teamwork training: development of skills to coordinate roles, follow key stages and achieve common goals under effective leadership.",

      // Interface texts
      "Expedición:": "Issued:",
      "ID de credencial:": "Credential ID:",

      // Certificate skills
      "HTML5": "HTML5",
      "Tailwind CSS": "Tailwind CSS",
      "React.js": "React.js",
      "Portafolio Digital": "Digital Portfolio",
      "Desarrollo": "Development",
      "Promo Profesional": "Professional Promotion",
      "Frontend": "Frontend",
      "Colaboración": "Collaboration",
      "Diseño Visual": "Visual Design",
      "Presentaciones": "Presentations",
      "Comunicación": "Communication",
      "Oratoria": "Public Speaking",
      "IA generativa": "Generative AI",
      "PROMPT": "PROMPT",
      "Inteligencia Artificial": "Artificial Intelligence",
      "Coordinación": "Coordination",
      "Liderazgo": "Leadership",

      // 404 page
      "¡Ups! Página no encontrada": "Oops! Page Not Found",
      "Esta sección está en construcción. Disponible muy pronto 🤗": "This section is under construction. Available very soon 🤗",
      "Volver al Inicio": "Back to Home",
      "Volver Atrás": "Go Back",
      "Mientras tanto, ¿por qué no echas un vistazo al resto del portfolio?": "In the meantime, why not check out the rest of the portfolio?",
      "Atrás": "Back",
      "Mientras tanto, explora el resto del portfolio": "Meanwhile, explore the rest of the portfolio"
    }
  },
  es: {
    translation: {
      
      // Navbar
      "Inicio": "Inicio",
      "Sobre mí": "Sobre mí",
      "Proyectos": "Proyectos",
      "Habilidades": "Habilidades",
      "Certificados": "Certificados",
      "Contacto": "Contacto",
      "Idioma": "Idioma",
      "Descargar CV": "Descargar CV",
      "Comenzar": "Comenzar",

      // Proyectos
      "Personales": "Personales",
      "Full Stack & DevOps": "Full Stack & DevOps",
      "Proyectos desarrollados durante el bootcamp de Factoria F5, tecnologías modernas y metodologías ágiles.": "Proyectos desarrollados durante el bootcamp de Factoria F5, tecnologías modernas y metodologías ágiles.",
      "Iniciativas propias": "Iniciativas propias",
      "Proyectos independientes donde exploro nuevas tecnologías y desarrollo mis propias ideas.": "Proyectos independientes donde exploro nuevas tecnologías y desarrollo mis propias ideas.",

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;