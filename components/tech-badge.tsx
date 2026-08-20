import { Database, Infinity as InfinityIcon, Landmark } from "lucide-react";
import {
    SiBinance,
    SiGoogle,
    SiInstagram,
    SiMeta,
    SiNextdotjs,
    SiN8N,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiUpstash,
    SiWhatsapp,
    SiZod,
} from "react-icons/si";

// Logo de Microsoft: no está disponible en Simple Icons (react-icons/si), por lo que
// se reproduce como SVG propio (las 4 casillas de la marca), en currentColor para que
// herede el mismo tono que el resto de los íconos en vez de sus colores de marca.
const MicrosoftLogo = () => (
    <svg viewBox="0 0 23 23" width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="10" height="10" fill="currentColor" />
        <rect x="12" y="1" width="10" height="10" fill="currentColor" />
        <rect x="1" y="12" width="10" height="10" fill="currentColor" />
        <rect x="12" y="12" width="10" height="10" fill="currentColor" />
    </svg>
);

const SPECIAL_MORE_TOOLS = "herramientas más";

// Íconos de marca reconocibles cuando existen; badge de solo texto (o ícono genérico) cuando no aplica un logo real.
const techIconMap: Record<string, React.ReactNode> = {
    "Next.js": <SiNextdotjs />,
    "React": <SiReact />,
    "TypeScript": <SiTypescript />,
    "Tailwind CSS": <SiTailwindcss />,
    "Supabase": <SiSupabase />,
    "Prisma": <SiPrisma />,
    "PostgreSQL": <SiPostgresql />,
    "Zod": <SiZod />,
    "Upstash Redis": <SiUpstash />,
    "n8n": <SiN8N />,
    "WhatsApp": <SiWhatsapp />,
    // Sin motor específico indicado: ícono genérico de base de datos (no es una marca puntual).
    "Base de datos": <Database size={13} strokeWidth={2} />,
    "Instagram": <SiInstagram />,
    "Meta": <SiMeta />,
    "Google": <SiGoogle />,
    "Microsoft": <MicrosoftLogo />,
    "Binance": <SiBinance />,
    // Banesco y Banco de Venezuela no tienen logo en Simple Icons; se usa un ícono
    // genérico de banco para no inventar una reproducción de marca no verificada.
    "Banco Banesco": <Landmark size={13} strokeWidth={2} />,
    "Banco de Venezuela": <Landmark size={13} strokeWidth={2} />,
    [SPECIAL_MORE_TOOLS]: <InfinityIcon size={13} strokeWidth={2.5} />,
};

interface TechBadgeProps {
    name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
    const icon = techIconMap[name];
    const isMoreTools = name === SPECIAL_MORE_TOOLS;

    return (
        <span
            className={
                isMoreTools
                    ? "inline-flex items-center gap-1.5 rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary transition-colors duration-200 group-hover:border-secondary/60"
                    : "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors duration-200 group-hover:border-white/20"
            }
        >
            {icon && (
                <span className={`text-[13px] leading-none ${isMoreTools ? "text-secondary" : "text-secondary/90"}`}>
                    {icon}
                </span>
            )}
            {name}
        </span>
    );
}

export default TechBadge;
