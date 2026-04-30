"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position="top" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-7">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <Link key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary text-black'}`}
                            data-tooltip-target="tooltip-default" href={item.link}>{item.icon} </Link>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;