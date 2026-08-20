import type { Metadata } from "next";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Privacidad | Diego Velasquez",
    description: "Política de privacidad sobre el tratamiento de datos personales en este sitio web.",
};

const PrivacidadPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                    <h1 className="text-2xl font-bold text-white md:text-4xl">
                        Política de <span className="text-secondary">privacidad</span>
                    </h1>

                    <p>
                        Esta página explica qué datos personales se recopilan a través de este
                        sitio web y cómo se utilizan.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Responsable</h2>
                    <p>
                        Diego Velasquez es el responsable del tratamiento de los datos que se
                        proporcionan voluntariamente a través de este sitio.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Datos que se recopilan</h2>
                    <p>
                        Este sitio no incluye formularios de registro ni bases de datos propias.
                        El único dato personal que se recopila es el que tú decides compartir de
                        forma voluntaria al escribir un correo electrónico a través de los enlaces
                        de contacto (por ejemplo, tu dirección de correo y el contenido del
                        mensaje).
                    </p>

                    <h2 className="text-xl font-semibold text-white">Finalidad</h2>
                    <p>
                        Esa información se usa exclusivamente para responder a tu consulta o
                        propuesta, y no se comparte con terceros ni se utiliza con fines
                        comerciales o publicitarios.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Conservación</h2>
                    <p>
                        Los correos recibidos se conservan únicamente el tiempo necesario para
                        gestionar la comunicación contigo.
                    </p>

                    <h2 className="text-xl font-semibold text-white">Tus derechos</h2>
                    <p>
                        Puedes solicitar en cualquier momento el acceso, la rectificación o la
                        eliminación de los datos que me hayas compartido, escribiendo a{" "}
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

export default PrivacidadPage;
