import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Pencil, Computer, Instagram, Facebook, Github, Workflow, Building2, Brain, BarChart3 } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        name: "Instagram",
        logo: <Instagram size={30} strokeWidth={2} />,
        src: "https://www.instagram.com/diegoandres.dj/",
    },
    {
        id: 2,
        name: "LinkedIn",
        logo: <Linkedin size={30} strokeWidth={2} />,
        src: "https://www.linkedin.com/in/diegovelasquez22/",
    },
    {
        id: 3,
        name: "Facebook",
        logo: <Facebook size={30} strokeWidth={2} />,
        src: "https://www.facebook.com/diego.velasquez.94695",
    },
    {
        id: 4,
        name: "GitHub",
        logo: <Github size={30} strokeWidth={2} />,
        src: "https://github.com/diegoandres22",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} strokeWidth={2} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={25} strokeWidth={2} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} strokeWidth={2} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portafolio",
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
        id: 1,
        title: "Patea la Perola",
        category: "SaaS",
        description: "Plataforma integral para gestionar y vender rifas digitales: los usuarios consultan premios, piden boletos y siguen el estado de su ticket con su correo, mientras el administrador crea sorteos, configura pagos y analiza métricas desde un panel centralizado.",
        image: "/image-4.jpg",
        stack: ["Next.js", "FastAPI (Python)", "PostgreSQL", "Redux Toolkit", "Tailwind CSS", "Vercel", "Render"],
        urlDemo: "https://patealaperola.vercel.app/",
    },
    {
        id: 2,
        title: "Inmobiliaria <div>Flow",
        category: "SaaS",
        description: "Plataforma inmobiliaria todo-en-uno que centraliza miles de propiedades vía una API inteligente, permitiendo búsquedas y contacto en tiempo real con asesores. Panel administrativo para gestionar leads, equipos de agentes y automatizar ventas.",
        image: "/inmobiliaria-divflow.png",
        stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Zod", "Upstash Redis"],
        urlDemo: "https://inmobiliaria-divflow.vercel.app/",
    },
    {
        id: 3,
        title: "Ecommerce <div>Flow",
        category: "SaaS",
        description: "E-commerce optimizado para ventas directas: el carrito se envía listo para ordenar por WhatsApp en un clic. Panel administrativo para gestionar productos, banners publicitarios y analizar el rendimiento del negocio.",
        image: "/ecommerce-divflow.png",
        stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
        urlDemo: "https://divflowecommerce.vercel.app/",
    },
    {
        id: 4,
        title: "Automatizaciones con n8n",
        category: "Automatización n8n",
        description: "Diseño e implementación de flujos de automatización con n8n para distintos clientes: integración de sistemas, sincronización de datos entre plataformas y eliminación de tareas manuales repetitivas. Proyectos bajo confidencialidad, sin demo pública.",
        image: "/automatizaciones-n8n.png",
        stack: [
            "n8n",
            "WhatsApp",
            "Base de datos",
            "Instagram",
            "Meta",
            "Google",
            "Microsoft",
            "Binance",
            "Banco Banesco",
            "Banco de Venezuela",
            "+∞ herramientas más",
        ],
    },
    {
        id: 5,
        title: "<div>Flow",
        category: "Consultoría",
        role: "CEO & Fundador",
        description: "Consultora tecnológica y desarrollo de productos digitales orientados a la eficiencia operativa, apalancando automatizaciones avanzadas de flujos de trabajo con n8n.",
        image: "/divflow-startup.png",
        stack: [],
        urlDemo: "https://div-flow.vercel.app/",
    },
];