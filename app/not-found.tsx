import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Página no encontrada | Diego Velasquez",
    description: "La página que buscas no existe.",
};

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center text-white bg-[#000129]">
            <p className="text-6xl font-extrabold text-secondary">404</p>
            <h1 className="text-2xl font-bold md:text-3xl">Esta página no existe</h1>
            <p className="max-w-md text-gray-300">
                Puede que el enlace esté roto o que la página se haya movido. Volvamos a un lugar conocido.
            </p>
            <Link
                href="/"
                className="px-4 py-2 mt-2 transition-all border-2 rounded-xl text-secondary border-secondary hover:shadow-xl hover:shadow-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
            >
                Volver al inicio
            </Link>
        </div>
    );
}

export default NotFound;
