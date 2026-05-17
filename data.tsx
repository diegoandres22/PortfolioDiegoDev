import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Facebook, Github, Workflow, Building2, Brain, BarChart3 } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={2} />,
        src: "https://www.instagram.com/diegoandres.dj/",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={2} />,
        src: "https://www.linkedin.com/in/diegovelasquez22/",
    },
    {
        id: 3,
        logo: <Facebook size={30} strokeWidth={2} />,
        src: "https://www.facebook.com/diego.velasquez.94695",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={2} />,
        src: "https://github.com/diegoandres22",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} strokeWidth={2} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} strokeWidth={2} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} strokeWidth={2} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} strokeWidth={2} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Gerente dep. tecnología & desarrollador web full stack",
        subtitle: "Don Manuel Grill",
        description: "Lideré la automatización de procesos y el desarrollo de aplicaciones web que optimizaron las operaciones diarias y facilitaron el trabajo del equipo. Implementé soluciones que permitieron a los directivos monitorear en tiempo real el desempeño de cada unidad, mejorando la eficiencia, el control y la toma de decisiones estratégicas.",
        date: "May 2024",
    },
    {
        id: 2,
        title: "Desarrollador web full stack",
        subtitle: "SoyHenry",
        description: "Curso culminado como desarrollador web full stack, adquiriendo habilidades y lenguajes en tecnologías como JavaScript, React, Node.js, spring boot, frameworks, APIS y bases de datos. Durante el curso, participé en proyectos prácticos que me permitieron aplicar mis conocimientos y desarrollar aplicaciones web funcionales y atractivas.",
        date: "Mar 2023",
    },
    {
        id: 3,
        title: "Desarrollador web full stack jr",
        subtitle: "Argentina Programa",
        description: "Curso enfocado en el desarrollo del pensamiento lógico y la resolución de problemas, donde adquirí las bases fundamentales de la programación. Inicié aprendiendo con el lenguaje educativo argentino Gobstones, que me permitió comprender de forma práctica los principios de la lógica y la estructura de los algoritmos. A lo largo del proceso, trabajé con distintos ejercicios y desafíos que fortalecieron mi capacidad de análisis y me ayudaron a pensar como programador. Posteriormente, profundicé en Java, aplicando estos conocimientos para desarrollar software más estructurado y robusto.",
        date: "May 2022",
    },
    {
        id: 4,
        title: "Universidad Simón Bolivar - Litoral",
        subtitle: "Mecánica electronica (Sin concluir)",
        description: "1er Semestre",
        date: "Ene 2017",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Proyectos iniciados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 30,
        text: "Tecnologías dominadas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 50,
        text: "Habilidades blandas y técnicas dominadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [

    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Desarrollo de sitios, paginas y aplicaciones web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Brain />,
        title: "IA",
        description: "Aplicación de IA en tareas para automatizar , mejorar  y resolver necesidades operativas de forma más eficiente."
    },
    {
        icon: <Workflow />,
        title: "Automatización",
        description: "Diseño e implementación de flujos automatizados que eliminan tareas, reducen tiempos y mejoran la eficiencia."
    },
    {
        icon: <Building2 />,
        title: "Integración",
        description: "Uso de herramientas empresariales para centralizar, mejorar y facilitar la toma de decisiones dentro de la organización."
    },
    {
        icon: <BarChart3 />,
        title: "Análisis en operación",
        description: "Evaluación y análisis para identificar oportunidades de mejora, optimizar recursos y reducir costos."
    }
];

export const dataPortfolio = [
    {
        id: 4,
        title: "Patea la perola",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "https://patealaperola.vercel.app/",
    },
    {
        id: 1,
        title: "beescend",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "https://beescend.com/",
    },
    {
        id: 2,
        title: "Tokin",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "https://curso.tokinprivacy.io/formacion/privacidad-total",
    },
    {
        id: 3,
        title: "Tribu Caribe",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "https://tribu-caribe-platform.vercel.app/",
    },
    {
        id: 5,
        title: "Pedido automatizado",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "https://forms.office.com/pages/responsepage.aspx?id=EplYV4vVe0qUwvAq70_NonBvEBpsTyNCtYoAR0M9YpBUNllDUEdESjdTNzBINjA3R0FTSVRPOVIwUy4u&route=shorturl",
    },
    {
        id: 6,
        title: "Manual analista de compras",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "https://drive.google.com/file/d/1-BcHHzLhnUU0bDb006is6rRWouyz8pUH/view?usp=sharing",
    }

    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];