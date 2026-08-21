import Link from "next/link";

const legalLinks = [
    { id: 1, title: "Política de cookies", link: "/cookies" },
    { id: 2, title: "Privacidad", link: "/privacidad" },
    { id: 3, title: "Términos y condiciones", link: "/terminos" },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full px-4 pt-8 mt-auto border-t pb-28 border-white/10">
            <div className="flex flex-col items-center justify-between max-w-6xl gap-4 mx-auto text-sm text-gray-400 md:flex-row">
                <p>© {year} Diego Velasquez. Todos los derechos reservados.</p>
                <nav aria-label="Enlaces legales">
                    <ul className="flex flex-wrap items-center justify-center gap-4">
                        {legalLinks.map(({ id, title, link }) => (
                            <li key={id}>
                                <Link
                                    href={link}
                                    className="transition-colors rounded-md hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
