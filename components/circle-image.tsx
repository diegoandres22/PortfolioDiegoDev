"use client"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface CircleImageProps {
    // Ancho/alto en px. Cada página pasa el máximo que le entra sin
    // desbordar según el ancho fijo de su propio contenido.
    size?: number;
}

// Columna real dentro de un flex (nunca "absolute"): así queda siempre a la
// derecha del contenido sin poder superponerse a él. Usado en /portfolio y /services.
const CircleImage = ({ size = 180 }: CircleImageProps) => {
    return (
        <div className="hidden 2xl:block flex-shrink-0" style={{ width: size, height: size }}>
            <DotLottieReact src="/CubeAnimation.json" loop autoplay />
        </div>
    );
}

export default CircleImage;