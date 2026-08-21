import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="hidden 2xl:block flex-shrink-0">
            <Image src="/services.png" width={400} height={400} className="opacity-70 2xl:opacity-100 w-[180px] h-auto" alt="" aria-hidden="true" />
        </MotionTransition>
    );
}

export default AvatarServices;