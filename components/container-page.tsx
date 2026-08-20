interface ContainerPageProps {
    children: React.ReactNode
    // "wide": permite más ancho en 2xl para páginas que flanquean el contenido
    // con elementos decorativos a los lados (ver /services).
    wide?: boolean
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children, wide = false } = props

    return (
        <div className={`relative w-full max-w-6xl ${wide ? "2xl:max-w-[1550px]" : ""} px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6`}>
            {children}
        </div>
    );
}

export default ContainerPage;