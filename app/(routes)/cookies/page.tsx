import type { Metadata } from "next";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Política de cookies | Diego Velasquez",
    description: "Información sobre el uso de cookies en este sitio web.",
};

const CookiesPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                    <h1 className="text-2xl font-bold text-white md:text-4xl">
                        Política de <span className="text-secondary">cookies</span>
                    </h1>

                    <p>
                        Este sitio web es un portafolio personal. No utiliza cookies de publicidad,
                        seguimiento de terceros ni analítica de comportamiento. A continuación se
                        explica qué tipo de cookies pueden estar presentes y por qué.
                    </p>

                    <h2 className="text-xl font-semibold text-white">¿Qué son las cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que un sitio web guarda en tu
                        navegador para recordar información sobre tu visita.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Cookies técnicas</h2>
                    <p>
                        El proveedor de hosting utilizado para desplegar este sitio puede emplear
                        cookies estrictamente necesarias para el funcionamiento y la seguridad de
                        la infraestructura (por ejemplo, balanceo de carga). Estas cookies no
                        recopilan información personal identificable y no requieren consentimiento
                        bajo la normativa vigente.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Cookies de terceros</h2>
                    <p>
                        Este sitio no integra actualmente herramientas de analítica, publicidad ni
                        redes sociales que instalen cookies propias en tu navegador.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Gestión de cookies</h2>
                    <p>
                        Puedes eliminar o bloquear las cookies desde la configuración de tu
                        navegador en cualquier momento.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Contacto</h2>
                    <p>
                        Si tienes dudas sobre esta política, escríbeme a{" "}
                        <a
                            href="mailto:diego.a.v3005@gmail.com"
                            className="underline text-secondary hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
                        >
                            diego.a.v3005@gmail.com
                        </a>.
                    </p>
                </div>
            </ContainerPage>
        </>
    );
}

export default CookiesPage;
