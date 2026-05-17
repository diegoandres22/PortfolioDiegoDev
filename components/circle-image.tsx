"use client"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden h-60 md:inline-block md:absolute">
            <DotLottieReact src="CubeAnimation.json" loop autoplay />
        </div>

    );
}

export default CircleImage;