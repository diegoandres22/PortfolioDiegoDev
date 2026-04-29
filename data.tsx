import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Facebook, Mail, Github } from "lucide-react";

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
        src:"https://github.com/diegoandres22",
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
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} strokeWidth={2} />,
        link: "/testimonials",
    },
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
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
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