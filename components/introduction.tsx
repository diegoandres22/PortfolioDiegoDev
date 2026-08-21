"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/DiegoCaricatura3HQ.png" priority width={500} height={500} alt="Caricatura de Diego Velásquez" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si alcanzas a imaginarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'podemos programarlo',
                                1000,
                                'podemos optimizarlo',
                                1000,
                                'podemos implementarlo',
                                1000,
                                'podemos desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Me apasiona construir. No solo código, sino estructuras, planes y caminos claros hacia una meta. Como desarrollador Full Stack, encuentro motivación en crear aplicaciones que faciliten la vida, mejoren la eficiencia y aporten transparencia a los procesos. Trabajo con lógica, estrategia y compromiso, siempre buscando soluciones reales, sostenibles y escalables !
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="mailto:diego.a.v3005@gmail.com"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg" >
                            Enviar un correo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;