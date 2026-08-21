import type { Metadata } from "next";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

export const metadata: Metadata = {
    title: "Portafolio | Diego Velasquez",
    description: "Proyectos y trabajos realizados por Diego Velasquez como desarrollador web full stack.",
};

const PortfolioPage = () => {

    return (
        <ContainerPage wide>
            <TransitionPage />
            {/* Avatar y animación son columnas reales del flex (no absolute):
                así nunca pueden quedar detrás/debajo de las cards. */}
            <div className="flex items-end justify-center gap-6 2xl:gap-10">
                <AvatarPortfolio />

                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                    <div className="grid max-w-4xl gap-6 mx-auto mt-4 sm:grid-cols-2">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>

                <CircleImage size={250} />
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;