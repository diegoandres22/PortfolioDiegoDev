"use client"

import { useEffect } from "react";

const ErrorPage = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center text-white bg-[#000129]">
            <h1 className="text-2xl font-bold md:text-3xl">Algo salió mal</h1>
            <p className="max-w-md text-gray-300">
                Ocurrió un error inesperado al cargar esta página. Intenta de nuevo.
            </p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 mt-2 transition-all border-2 cursor-pointer rounded-xl text-secondary border-secondary hover:shadow-xl hover:shadow-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
            >
                Reintentar
            </button>
        </div>
    );
}

export default ErrorPage;
