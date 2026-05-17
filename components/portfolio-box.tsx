import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <div className="mb-4 text-xl">{title}
                {id === 5 &&
                    <h5 className="text-sm text-gray-500">(Solo autorizados)</h5>
                }

            </div>

            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            <div className="flex gap-5 mt-5  ">

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 text-black font-semibold transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Visitar
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox
