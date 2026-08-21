import type { Metadata } from "next";

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Servicios | Diego Velasquez",
    description: "Servicios de diseño web, desarrollo full stack, IA, automatización e integración de procesos.",
};

const ServicesPage = () => {
    return (
        <ContainerPage wide>
            <TransitionPage />
            {/* Avatar y animación son columnas reales del flex (no absolute):
                así nunca pueden quedar detrás/debajo del texto ni de las cards. */}
            <div className="flex items-center justify-center gap-6 2xl:gap-10">
                <AvatarServices />

                <div className="grid items-center justify-center max-w-5xl gap-6 px-4 mx-auto md:grid-cols-2">
                    <div className="max-w-[450px] mx-auto md:mx-0">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Lo que mas me <span className="font-bold text-secondary"> gusta</span> 😍</h1>
                        <p className="mb-8 text-xl text-gray-300">Desarrollador web apasionado por encontrar formas más inteligentes y sencillas de hacer las cosas. Vivo optimizando procesos y operaciones, apoyándome tanto en desarrollo a medida como en herramientas corporativas ya existentes, siempre con el objetivo de ahorrar tiempo, minimizar el margen de error y reducir costos.</p>
                        <a href="mailto:diego.a.v3005@gmail.com"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg" >
                            Enviar un correo
                        </a>
                    </div>

                    <div>
                        <SliderServices />
                    </div>
                </div>

                <CircleImage />
            </div>
        </ContainerPage>
    );
}

export default ServicesPage;