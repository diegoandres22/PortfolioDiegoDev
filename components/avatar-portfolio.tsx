"use client"

import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="hidden 2xl:block flex-shrink-0">
            <Image src="/avatar-works.png" width={300} height={300} className="w-[250px] h-auto" alt="" aria-hidden="true" />
        </MotionTransition>

    );
}

export default AvatarPortfolio;