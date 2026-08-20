"use client"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface CircleImageProps {
    // "absolute" (default): comportamiento original, usado en /portfolio detrás de las cards.
    // "flex": columna real dentro de un flex, usado en /services para que quede
    // a la derecha del contenido sin poder superponerse a él.
    layout?: 'absolute' | 'flex';
}

const CircleImage = ({ layout = 'absolute' }: CircleImageProps) => {
    const className = layout === 'flex'
        ? "hidden 2xl:block flex-shrink-0 w-[160px] h-[160px]"
        : "bottom-0 right-0 hidden h-60 md:inline-block md:absolute";

    return (
        <div className={className}>
            <DotLottieReact src="/CubeAnimation.json" loop autoplay />
        </div>

    );
}

export default CircleImage;