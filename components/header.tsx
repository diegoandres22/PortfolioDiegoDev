"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container xl:justify-between justify-evenly max-w-6xl mx-auto md:flex">
                    <Link href='/' className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Diego
                            <span className="text-secondary">Velasquez</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id, name }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                aria-label={`Visitar mi perfil de ${name} (se abre en una pestaña nueva)`}
                                className="rounded-md transition-all duration-300 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;