import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 md:inline-block absolute">
            <Image src="/services.png" width="400" height="400" className="opacity-30 md:opacity-50 2xl:opacity-100 w-[350px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;