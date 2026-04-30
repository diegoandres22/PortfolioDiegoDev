
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="right" className="bottom-0 right-0 inline-block absolute  ">
            <Image src="/avatar-1.png" width="400" height="400" className="w-full h-full opacity-30 md:opacity-50 2xl:opacity-100" alt="Particles " />
        </MotionTransition>
    )
}
