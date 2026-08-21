"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()

    return (
        <MotionTransition position="top" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-7">
            <nav aria-label="Navegación principal">
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link key={item.id}
                                href={item.link}
                                aria-label={item.title}
                                aria-current={isActive ? 'page' : undefined}
                                className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-darkBg ${isActive && 'bg-secondary text-black'}`}
                            >
                                {item.icon}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;