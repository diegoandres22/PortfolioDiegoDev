import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid mt-24 px-8 md:px-auto md:mt-auto items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Lo que mas me <span className="font-bold text-secondary"> gusta</span> 😍</h1>
                    <p className="mb-8 text-xl text-gray-300">Desarrollador web apasionado por encontrar formas más inteligentes y sencillasde hacer las cosas. Vivo optimizando procesos y operaciones, apoyándome tanto en desarrollo a medida como en herramientas corporativas ya existentes, siempre con el objetivo de ahorrar tiempo y reducir costos.</p>
                    <a href="mailto:diego.a.v3005@gmail.com"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                        Enviar un correo
                    </a>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;