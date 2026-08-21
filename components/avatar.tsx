
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="right" className="hidden 2xl:block flex-shrink-0">
            <Image src="/avatar-1.png" width={400} height={400} className="w-[320px] h-auto" alt="Ilustración de Diego Velásquez" />
        </MotionTransition>
    )
}
