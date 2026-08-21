import type { Metadata } from "next";

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

export const metadata: Metadata = {
    title: "Sobre mí | Diego Velasquez",
    description: "Trayectoria profesional de Diego Velasquez: experiencia, formación y logros como desarrollador full stack.",
};

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage wide>
                {/* Avatar es una columna real del flex (no absolute): así nunca
                    puede quedar encima/detrás del texto. */}
                <div className="flex items-end justify-center gap-6 2xl:gap-10">
                    <div className="w-full max-w-3xl">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                            Toda mi{' '}
                            <span className="font-bold text-secondary">
                                trayectoria profesional
                            </span>
                        </h1>

                        <CounterServices />

                        <TimeLine />
                    </div>

                    <Avatar />
                </div>
            </ContainerPage>
        </>
    );
}

export default AboutMePage;