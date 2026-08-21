import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FileText, Github, Mail, Workflow } from "lucide-react";

import TechBadge from "./tech-badge";
import Tooltip from "./tooltip";

export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    role?: string;
    description: string;
    image: string | null;
    stack: string[];
    urlDemo?: string;
    urlCaseStudy?: string;
}

interface PortfolioBoxProps {
    data: PortfolioItem;
}

const contactHref = (title: string) =>
    `mailto:diego.a.v3005@gmail.com?subject=${encodeURIComponent(`Consulta sobre ${title}`)}`;

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { title, category, role, description, image, stack, urlDemo, urlCaseStudy } = data;

    const isGithub = urlCaseStudy?.includes("github.com");

    return (
        <div
            className="relative z-10 flex flex-col overflow-hidden transition-all duration-300 border group rounded-2xl border-white/10 bg-darkBg/95 backdrop-blur-md hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_0_0_1px_rgba(0,212,255,0.15),0_20px_45px_-18px_rgba(0,212,255,0.35)]"
        >
            <div className="relative overflow-hidden aspect-[4/3]">
                {image ? (
                    <>
                        <Image
                            src={image}
                            alt={`Captura de pantalla del proyecto ${title}`}
                            fill
                            sizes="(min-width: 768px) 400px, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/15 via-darkBg to-black">
                        <Workflow
                            size={64}
                            strokeWidth={1.25}
                            className="text-secondary/70 transition-transform duration-500 group-hover:scale-110"
                            aria-hidden="true"
                        />
                    </div>
                )}
                <span className="absolute px-2.5 py-1 text-xs font-semibold text-black rounded-full top-3 left-3 bg-secondary/90 backdrop-blur-sm">
                    {category}
                </span>
            </div>

            <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold leading-snug text-white md:text-xl">{title}</h3>

                {role && (
                    <span className="mt-1 text-xs font-semibold tracking-wide uppercase text-secondary">
                        {role}
                    </span>
                )}

                <p className="mt-2 text-sm text-gray-400 line-clamp-3">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4 group">
                    {stack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </div>

                <div className="flex items-center gap-3 pt-4 mt-5 border-t border-white/10">
                    {urlDemo && (
                        <Tooltip label="Ver proyecto / demo en vivo">
                            <Link
                                href={urlDemo}
                                target="_blank"
                                aria-label={`Ver demo en vivo de ${title} (se abre en una pestaña nueva)`}
                                className="inline-flex items-center justify-center w-10 h-10 text-black transition-all duration-200 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
                            >
                                <ExternalLink size={18} strokeWidth={2} />
                            </Link>
                        </Tooltip>
                    )}

                    {urlCaseStudy && (
                        <Tooltip label={isGithub ? "Ver repositorio" : "Ver caso de estudio"}>
                            <Link
                                href={urlCaseStudy}
                                target="_blank"
                                aria-label={`${isGithub ? "Ver repositorio" : "Ver caso de estudio"} de ${title} (se abre en una pestaña nueva)`}
                                className="inline-flex items-center justify-center w-10 h-10 text-white transition-all duration-200 border rounded-full border-white/15 bg-white/5 hover:border-secondary/60 hover:text-secondary hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
                            >
                                {isGithub ? <Github size={18} strokeWidth={2} /> : <FileText size={18} strokeWidth={2} />}
                            </Link>
                        </Tooltip>
                    )}

                    {!urlDemo && !urlCaseStudy && (
                        <Tooltip label="Escribime por este proyecto">
                            <a
                                href={contactHref(title)}
                                aria-label={`Contactar por correo sobre ${title}`}
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
                            >
                                <Mail size={16} strokeWidth={2} />
                                Contactar
                            </a>
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfolioBox;
