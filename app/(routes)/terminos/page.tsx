import type { Metadata } from "next";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Términos y condiciones | Diego Velasquez",
    description: "Términos y condiciones de uso de este sitio web.",
};

const TerminosPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                    <h1 className="text-2xl font-bold text-white md:text-4xl">
                        Términos y <span className="text-secondary">condiciones</span>
                    </h1>

                    <p>
                        El uso de este sitio web implica la aceptación de los siguientes
                        términos.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Contenido</h2>
                    <p>
                        Este sitio es el portafolio personal de Diego Velasquez y tiene fines
                        informativos: presentar su experiencia, trayectoria y proyectos
                        realizados.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Propiedad intelectual</h2>
                    <p>
                        Los textos, imágenes y el diseño de este sitio son propiedad de Diego
                        Velasquez, salvo que se indique lo contrario. Los proyectos enlazados
                        pertenecen a sus respectivos clientes o autores.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Enlaces externos</h2>
                    <p>
                        Este sitio enlaza a demostraciones y proyectos alojados en dominios de
                        terceros. Diego Velasquez no se hace responsable del contenido o las
                        políticas de esos sitios externos.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Sin garantías</h2>
                    <p>
                        El contenido se ofrece &quot;tal cual&quot;, sin garantías de
                        disponibilidad continua o ausencia de errores.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Contacto</h2>
                    <p>
                        Para cualquier consulta sobre estos términos, escribe a{" "}
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

export default TerminosPage;
