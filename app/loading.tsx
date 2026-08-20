const Loading = () => {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center min-h-screen gap-4 text-white bg-[#000129]"
        >
            <div
                className="w-12 h-12 border-4 rounded-full border-secondary/30 border-t-secondary animate-spin"
                aria-hidden="true"
            />
            <span className="text-sm tracking-wide uppercase text-gray-300">Cargando…</span>
        </div>
    );
}

export default Loading;
